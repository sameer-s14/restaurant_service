import { IAddress, IRestaurant } from '../interface';
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
  getRestaurants(where: IRestaurant) {
    return this.restaurants.findOne({ where });
  }

  // Save Restaurant Data
  saveRestaurants(data: IRestaurant) {
    return this.restaurants.save(data);
  }

  getRestaurantWithLocation(where: IRestaurant, address: IAddress) {
    return (
      this.restaurants
        .createQueryBuilder(Restaurants.name)
        .leftJoinAndSelect('restaurants.address', 'address')
        // .where('author.id = :id', { id })
        // .andWhere(condition, parameters) // Add the condition here
        .getOne()
    );
  }
}
