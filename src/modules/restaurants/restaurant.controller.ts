import {
  SERVICES,
  RESTAURANT_METHODS,
  IResponse,
  IRestaurant,
} from 'src/interface';
import { RestaurantService } from './restaurant.service';
import { ISaveBasicDetails } from '../../interface';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  /**
   * @description Function to save the restaurant Basic Details
   * @param {ISaveBasicDetails}
   * @returns {Promise<{id}>}
   */
  @GrpcMethod(SERVICES.RESTAURANT_SERVICE, RESTAURANT_METHODS.CREATE_RESTAURANT)
  createRestaurant(
    request: ISaveBasicDetails,
  ): Promise<IResponse<{ id: number }>> {
    return this.restaurantService.createRestaurant(request);
  }

  /**
   * @description Function To update restaurant basic details
   * @param request
   * @returns
   */
  @GrpcMethod(
    SERVICES.RESTAURANT_SERVICE,
    RESTAURANT_METHODS.UPDATE_BASIC_DETAILS,
  )
  updateBasicDetails({
    id,
    data,
  }: {
    id: number;
    data: ISaveBasicDetails;
  }): Promise<IResponse<{ id: number }>> {
    console.log(id, data);
    return this.restaurantService.updateBasicDetails(id, data);
  }

  // Function get restaurant Basic Details
  @GrpcMethod(
    SERVICES.RESTAURANT_SERVICE,
    RESTAURANT_METHODS.GET_RESTAURANT_BASIC_DETAILS,
  )
  getRestaurantBasicDetails(request: IRestaurant & { id: number }) {
    return this.restaurantService.getRestaurantBasicDetails(request);
  }
}
