import { RestaurantHelper } from './../../helpers/restaurant.helper';
import { RestaurantService } from './restaurant.service';
import { ISaveBasicDetails } from '../../interface';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class RestaurantController {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly restaurantHelper: RestaurantHelper,
  ) {}

  @GrpcMethod('RestaurantService', 'createRestaurant')
  createRestaurant(request: ISaveBasicDetails) {
    const { restaurantData, restData } =
      this.restaurantHelper.filterRestaurantData(request);
    console.log({ restaurantData, restData });
    return this.restaurantService.createRestaurant(request);
  }
}
