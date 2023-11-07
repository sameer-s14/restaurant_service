import { IRestaurantTimings } from './../interface/model.interface';
import { Injectable } from '@nestjs/common';
import { ITimingsObj } from 'src/interface';

@Injectable()
export class RestaurantHelper {
  /**
   * @description Function to Prepare data for bulk insert in restaurant_timings table
   */
  prepareBulkInsertForTimings(
    restaurantId: number,
    timings: ITimingsObj[],
  ): IRestaurantTimings[] {
    return timings
      .map(
        (timing) =>
          timing?.shifts?.map((shift) => ({
            day: timing?.day as any,
            restaurantId,
            closingTime: shift?.closingTime,
            openingTime: shift?.openingTime,
          })),
      )
      ?.flat();
  }
}
