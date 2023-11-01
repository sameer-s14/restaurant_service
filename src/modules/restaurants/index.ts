import { RestaurantHelper } from './../../helpers';
import { RestaurantService } from './restaurant.service';
import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';

@Module({
  controllers: [RestaurantController],
  providers: [RestaurantService, RestaurantHelper],
})
export class RestaurantModule {}
