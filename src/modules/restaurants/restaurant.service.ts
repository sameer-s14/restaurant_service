import { RestaurantRepository, AddressRepository } from '../../repositories';
import { RestaurantHelper } from './../../helpers';
import { Injectable } from '@nestjs/common';
import { ISaveBasicDetails } from 'src/interface';
import { ENTITIES, RESTAURANT_STATUS } from 'src/constants';
import { setInitialResponse, setSuccessResponse } from 'src/utils';

@Injectable()
export class RestaurantService {
  constructor(
    private readonly restaurantHelper: RestaurantHelper,
    private readonly restaurantRepository: RestaurantRepository,
    private readonly addressRepo: AddressRepository,
  ) {}

  async createRestaurant(request: ISaveBasicDetails) {
    let response = setInitialResponse();
    try {
      const { restaurantData, restData: addressData } =
        this.restaurantHelper.filterRestaurantData(request);

      // const restaurantFound = await this.restaurantRepository.getRestaurant({
      //   name: request?.name,
      //   ownerId: request?.ownerId,
      // });

      // if (restaurantFound) {
      //   throw new Error(
      //     `Restaurant ${request.name} in ${request.address} already exists`,
      //   );
      // }
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
}
