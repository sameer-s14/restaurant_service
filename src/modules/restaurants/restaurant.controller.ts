import { GrpcMethod } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import {
  SERVICES,
  RESTAURANT_METHODS,
  IResponse,
  IRestaurant,
  IRestaurantDetails,
  ITimingsObj,
} from 'src/interface';
import { RestaurantService, RestaurantDetailsService } from '../../services';
import { ISaveBasicDetails } from '../../interface';
import { RestaurantHelper } from 'src/helpers';

@Controller()
export class RestaurantController {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly restaurantDetailsService: RestaurantDetailsService,
    private readonly restaurantHelper: RestaurantHelper,
  ) {}

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

  // Function To get restaurant details like timing ,outlets, etc
  @GrpcMethod(
    SERVICES.RESTAURANT_SERVICE,
    RESTAURANT_METHODS.GET_RESTAURANT_DETAILS,
  )
  getRestaurantDetails(request: {
    id: number;
    ownerId: number;
    timings: boolean;
  }) {
    return this.restaurantDetailsService.getRestaurantDetails(request);
  }

  /**
   * @description Function To get restaurant details like timing ,outlets, etc
   **/
  @GrpcMethod(
    SERVICES.RESTAURANT_SERVICE,
    RESTAURANT_METHODS.SAVE_RESTAURANT_DETAILS,
  )
  saveRestaurantDetails(
    request: IRestaurantDetails & {
      timings: ITimingsObj[];
      id: number;
      ownerId: number;
    },
  ) {
    const { id, ownerId, timings, ...restaurantData } = request;
    const timingsData = this.restaurantHelper.prepareBulkInsertForTimings(
      id,
      timings,
    );
    return this.restaurantDetailsService.saveRestaurantDetails(
      id,
      ownerId,
      restaurantData as any,
      timingsData,
    );
  }

  /**
   * @description Function To get restaurant details like timing ,outlets, etc
   **/
  @GrpcMethod(
    SERVICES.RESTAURANT_SERVICE,
    RESTAURANT_METHODS.UPDATE_RESTAURANT_DETAILS,
  )
  updateRestaurantDetails(
    request: IRestaurantDetails & {
      timings: ITimingsObj[];
      id: number;
      ownerId: number;
    },
  ) {
    const { id, ownerId, timings, ...restaurantData } = request;
    const timingsData = this.restaurantHelper.prepareBulkInsertForTimings(
      id,
      timings,
    );
    this.restaurantDetailsService.saveRestaurantDetails(
      id,
      ownerId,
      restaurantData as any,
      timingsData,
    );
    return {
      message: 'Successfully updated',
      data: null,
      status: true,
    };
  }
}
