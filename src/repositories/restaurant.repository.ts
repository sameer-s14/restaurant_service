import { ID, IRestaurant } from '../interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurants } from 'src/database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantRepository {
  constructor(
    @InjectRepository(Restaurants) private restaurants: Repository<Restaurants>,
  ) {}

  // Get Restaurant
  getRestaurant(where: IRestaurant & { id?: number }) {
    return this.restaurants.findOne({ where, relations: { address: true } });
  }

  // Save Restaurant Data
  saveRestaurants(data: IRestaurant) {
    return this.restaurants.save(data);
  }

  // Update Restaurant Data
  updateRestaurantDetails(where: ID<IRestaurant>, data: IRestaurant) {
    return this.restaurants.update(where, data);
  }
}
