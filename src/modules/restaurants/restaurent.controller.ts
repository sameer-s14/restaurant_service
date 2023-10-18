import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class RestaurantController {
  @GrpcMethod('RestaurantService', 'createRestaurant')
  createRestaurant() {
    return {};
  }
}
