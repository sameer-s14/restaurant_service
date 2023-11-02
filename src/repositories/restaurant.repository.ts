import { IRestaurant } from '../interface';
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
  getRestaurant(where: IRestaurant) {
    return this.restaurants.findOne({ where, relations: { address: true } });
    return this.restaurants
      .createQueryBuilder('restaurant')
      .leftJoinAndSelect('restaurant.address', 'address')
      .where('restaurant.id = :id', { id: 1 })
      .getOne();
  }

  // Save Restaurant Data
  saveRestaurants(data: IRestaurant) {
    return this.restaurants.save(data);
  }
}
