import { Injectable } from '@nestjs/common';
import {
  RestaurantRepository,
  RestaurantTimingsRepository,
  RestaurantDetailsRepository,
} from 'src/repositories';
import { setInitialResponse, setSuccessResponse } from 'src/utils';
import { IRestaurantDetails, IRestaurantTimings } from 'src/interface';

@Injectable()
export class RestaurantDetailsService {
  constructor(
    private readonly restaurantDetailsRepository: RestaurantDetailsRepository,
    private readonly restaurantRepository: RestaurantRepository,
    private readonly restaurantTimingsRepository: RestaurantTimingsRepository,
  ) {}

  // Get restaurant basic details
  async getRestaurantDetails(request: {
    id: number;
    ownerId: number;
    timings: boolean;
  }) {
    let response = setInitialResponse();
    try {
      console.log(request);
      if (request?.ownerId) {
        const restaurantDetails = await this.restaurantRepository.getRestaurant(
          {
            id: request?.id,
            ownerId: request?.ownerId,
          },
        );
        if (!restaurantDetails) {
          throw new Error('Restaurant not found for the particular user');
        }
      }
      const restaurantDetailsFound =
        await this.restaurantDetailsRepository.getRestaurantDetails(
          {
            restaurantId: request?.id,
          },
          {
            relations: {
              timings: request?.timings,
            },
          },
        );
      response = setSuccessResponse(
        restaurantDetailsFound,
        'Restaurant Details Found',
      );
    } catch (err) {
      console.log(
        'RestaurantDetailsService :: getRestaurantDetails :: ',
        err.message,
      );
      response.message = err?.message;
    }
    return response;
  }

  // Save restaurant basic details
  async saveRestaurantDetails(
    id: number,
    ownerId: number,
    restaurantDetails: IRestaurantDetails,
    restaurantTimings: IRestaurantTimings[],
  ) {
    let response = setInitialResponse();
    try {
      const restaurantFound = await this.restaurantRepository.getRestaurant({
        id,
        ownerId,
      });

      // Throw error if the restaurant not exists
      if (!restaurantFound) {
        throw new Error('Restaurant not found for the particular user');
      }
      const restaurantDetailsFound =
        await this.restaurantDetailsRepository.getRestaurantDetails({
          restaurantId: id,
        });

      if (restaurantDetailsFound) {
        await this.restaurantDetailsRepository.updateRestaurantDetails(
          {
            id: restaurantDetailsFound?.id,
          },
          restaurantDetails,
        );
      } else {
        await this.restaurantDetailsRepository.saveRestaurantsDetails({
          ...restaurantDetails,
          restaurantId: id,
        });
      }
      if (restaurantTimings?.length) {
        await this.restaurantTimingsRepository.deleteRestaurantTimings({
          restaurantId: id,
        });
        await this.restaurantTimingsRepository.saveRestaurantTimings(
          restaurantTimings as any,
        );
      }
      response = setSuccessResponse(null, 'Details Saved Successfully');
    } catch (err) {
      console.log(
        'RestaurantDetailsService :: saveRestaurantDetails :: ',
        err.message,
      );
      response.message = err?.message;
    }
    return response;
  }
}
