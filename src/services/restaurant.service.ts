import { RestaurantRepository, AddressRepository } from '../repositories';
import { Injectable } from '@nestjs/common';
import { ID, IRestaurant, ISaveBasicDetails } from 'src/interface';
import { ENTITIES, RESTAURANT_STATUS } from 'src/constants';
import { setInitialResponse, setSuccessResponse } from 'src/utils';

@Injectable()
export class RestaurantService {
  constructor(
    private readonly restaurantRepository: RestaurantRepository,
    private readonly addressRepo: AddressRepository,
  ) {}

  async createRestaurant(request: ISaveBasicDetails) {
    let response = setInitialResponse();
    try {
      const { address: addressData, ...restaurantData } = request;
      const restaurantFound = await this.restaurantRepository.getRestaurant({
        name: request?.name,
        ownerId: request?.ownerId,
      });

      // If Same restaurant is available for the user in same address
      if (
        restaurantFound?.address?.find(
          (add) => add.address === addressData?.address,
        )
      ) {
        throw new Error(
          `Restaurant ${restaurantData.name} in ${addressData?.address} already exists`,
        );
      }
      const restaurant = await this.restaurantRepository.saveRestaurants({
        ...restaurantData,
        status: RESTAURANT_STATUS.DRAFT,
      });

      await this.addressRepo.saveAddress({
        ...addressData,
        entityId: restaurant?.id,
        entityType: ENTITIES.RESTAURANT,
      });
      response = setSuccessResponse({ id: restaurant?.id });
    } catch (err) {
      console.log('RestaurantService :: createRestaurant :: ', err.message);
      response.message = err?.message;
    }
    return response;
  }

  // Function to update user details
  async updateBasicDetails(id: number, data: ISaveBasicDetails) {
    let response = setInitialResponse();
    try {
      const { address, ownerId, ...restaurantData } = data;

      // Find Restaurant Data associated with the user
      const restaurantFound = await this.restaurantRepository.getRestaurant({
        id,
        ownerId,
      });

      // Throw error if the restaurant not exists
      if (!restaurantFound) {
        throw new Error('Restaurant not found for the particular user');
      }

      // Update Details
      await this.restaurantRepository.updateRestaurantDetails(
        { id },
        restaurantData,
      );

      // If the address present then update else create a new address
      if (restaurantFound?.address?.length) {
        // if id present then update the address else set the default address
        if (address?.id) {
          const { id, ...rest } = address;
          await this.addressRepo.updateAddress({ id }, rest);
        } else {
          await this.addressRepo.updateAddress(
            { id: restaurantFound?.address[0]?.id },
            address,
          );
        }
      } else {
        await this.addressRepo.saveAddress({
          ...address,
          entityId: id,
          entityType: ENTITIES.RESTAURANT,
        });
      }

      response = setSuccessResponse(null, 'Updated Successfully');
    } catch (err) {
      console.log('RestaurantService :: updateBasicDetails :: ', err.message);
      response.message = err?.message;
    }
    return response;
  }

  // Get Restaurant Basic Details
  async getRestaurantBasicDetails(where: ID<IRestaurant>) {
    let response = setInitialResponse();
    try {
      const restaurantFound = await this.restaurantRepository.getRestaurant({
        id: where?.id,
        ownerId: where?.ownerId,
      });
      response = setSuccessResponse(restaurantFound, 'Restaurant Found');
    } catch (err) {
      console.log(
        'RestaurantService :: getRestaurantBasicDetails :: ',
        err.message,
      );
      response.message = err?.message;
    }
    return response;
  }
}
