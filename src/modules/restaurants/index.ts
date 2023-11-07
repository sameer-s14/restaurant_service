import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Address,
  Restaurants,
  RestaurantDetails,
  RestaurantTimings,
} from 'src/database/entities';
import { RestaurantHelper } from './../../helpers';
import { RestaurantController } from './restaurant.controller';
import {
  AddressRepository,
  RestaurantDetailsRepository,
  RestaurantRepository,
  RestaurantTimingsRepository,
} from 'src/repositories';
import { RestaurantService, RestaurantDetailsService } from 'src/services';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Restaurants,
      Address,
      RestaurantDetails,
      RestaurantTimings,
    ]),
  ],
  controllers: [RestaurantController],
  providers: [
    RestaurantRepository,
    RestaurantService,
    RestaurantHelper,
    AddressRepository,
    RestaurantDetailsService,
    RestaurantDetailsRepository,
    RestaurantTimingsRepository,
  ],
})
export class RestaurantModule {}
