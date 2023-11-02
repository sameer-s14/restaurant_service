import { RestaurantRepository } from '../../repositories';
import { RestaurantHelper } from './../../helpers';
import { Injectable } from '@nestjs/common';
import { ISaveBasicDetails } from 'src/interface';

@Injectable()
export class RestaurantService {
  constructor(
    private readonly restaurantHelper: RestaurantHelper,
    private readonly restaurantRepository: RestaurantRepository,
  ) {}

  async createRestaurant(request: ISaveBasicDetails) {
    const { restaurantData, restData } =
      this.restaurantHelper.filterRestaurantData(request);

    const restaurantFound = await this.restaurantRepository.getRestaurants({
      name: request?.name,
      ownerId: request?.ownerId,
    });
    console.log(restaurantFound);

    if (restaurantFound) {
      throw new Error(
        `Restaurant ${request.name} in ${request.address} already exists`,
      );
    }
    const restaurant =
      await this.restaurantRepository.saveRestaurants(restaurantData);
    console.log('🚀 ~ fil', restData, 't:', restaurant);
  }
}
