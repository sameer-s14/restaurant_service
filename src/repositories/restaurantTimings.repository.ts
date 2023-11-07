import { IRestaurantTimings } from './../interface';
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantTimings } from 'src/database/entities';
import { Repository, FindOptionsWhere } from 'typeorm';

export class RestaurantTimingsRepository {
  constructor(
    @InjectRepository(RestaurantTimings)
    private restaurantTimings: Repository<RestaurantTimings>,
  ) {}

  // Get Restaurant Details
  getRestaurantTimings(where: FindOptionsWhere<RestaurantTimings>) {
    return this.restaurantTimings.findOne({
      where,
    });
  }

  // Save Restaurant Data
  saveRestaurantTimings(data: Partial<IRestaurantTimings>) {
    return this.restaurantTimings.save(data);
  }

  // Delete Restaurant timings
  deleteRestaurantTimings(where: FindOptionsWhere<RestaurantTimings>) {
    return this.restaurantTimings.delete(where);
  }
}
