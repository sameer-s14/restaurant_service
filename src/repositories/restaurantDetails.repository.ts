import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantDetails } from 'src/database/entities';
import { IRestaurantDetails } from 'src/interface';
import { FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class RestaurantDetailsRepository {
  constructor(
    @InjectRepository(RestaurantDetails)
    private restaurantDetails: Repository<RestaurantDetails>,
  ) {}

  // Get Restaurant Details
  getRestaurantDetails(
    where: FindOptionsWhere<RestaurantDetails>,
    options?: any,
  ) {
    return this.restaurantDetails.findOne({
      where,
      ...options,
    });
  }

  // Save Restaurant Details Data
  saveRestaurantsDetails(data: IRestaurantDetails) {
    return this.restaurantDetails.save(data);
  }

  // Update Restaurant Details Data
  updateRestaurantDetails(
    where: FindOptionsWhere<RestaurantDetails>,
    data: IRestaurantDetails,
  ) {
    return this.restaurantDetails.update(where, data);
  }
}
