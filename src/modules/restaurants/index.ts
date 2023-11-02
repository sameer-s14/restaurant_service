import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurants } from 'src/database/entities';
import { RestaurantHelper } from './../../helpers';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { Module } from '@nestjs/common';
import { RestaurantRepository } from 'src/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurants])],
  controllers: [RestaurantController],
  providers: [RestaurantRepository, RestaurantService, RestaurantHelper],
})
export class RestaurantModule {}
