import { TypeOrmModule } from '@nestjs/typeorm';
import { Address, Restaurants } from 'src/database/entities';
import { RestaurantHelper } from './../../helpers';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { Module } from '@nestjs/common';
import { AddressRepository, RestaurantRepository } from 'src/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurants, Address])],
  controllers: [RestaurantController],
  providers: [
    RestaurantRepository,
    RestaurantService,
    RestaurantHelper,
    AddressRepository,
  ],
})
export class RestaurantModule {}
