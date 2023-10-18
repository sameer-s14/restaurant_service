import { Injectable } from '@nestjs/common';
import { Restaurants } from 'src/database/entities';
@Injectable()
export class RestaurantRepository {
  constructor(private restaurants: Restaurants) {}

  getRestaurants() {
    // return this.restaurants.
  }
}
