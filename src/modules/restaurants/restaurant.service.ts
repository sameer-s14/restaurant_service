import { RestaurantRepository } from '../../repositories';
import { RestaurantHelper } from './../../helpers';
import { Dependencies, Injectable } from '@nestjs/common';
import { ISaveBasicDetails } from 'src/interface';

@Injectable()
@Dependencies(RestaurantHelper)
export class RestaurantService {
  constructor(
    private readonly restaurantHelper: RestaurantHelper,
    private restaurantRepository: RestaurantRepository,
  ) {}

  createRestaurant = async (request: ISaveBasicDetails) => {
    console.log(
      '🚀 ~ file: restaurant.service.ts:15 ~ RestaurantService ~ createRestaurant= ~ request:',
      request,
    );
    const { restaurantData, restData } =
      this.restaurantHelper.filterRestaurantData(request);

    const restaurantFound = this.restaurantRepository.getRestaurants({
      name: request?.name,
      ownerId: request?.ownerId,
    });

    if (restaurantFound) {
      throw new Error(
        `Restaurant ${request.name} in ${request.address} already exists`,
      );
    }
    const restaurant =
      await this.restaurantRepository.saveRestaurants(restaurantData);
    console.log('🚀 ~ fil', restData, 't:', restaurant);
  };
}
