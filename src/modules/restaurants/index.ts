import { RestaurantService } from './restaurant.service';
import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurent.controller';

@Module({
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
