import { Injectable } from '@nestjs/common';
import { ISaveBasicDetails } from 'src/interface';

@Injectable()
export class RestaurantHelper {
  /**
   * @description Function to filter restaurant specific values
   * @param obj
   * @returns
   */
  public filterRestaurantData = (obj: ISaveBasicDetails) => {
    const {
      name,
      phoneNumber,
      phoneNumberCountryCode,
      landLine,
      landLineCode,
      ownerId,
      whatsAppNotification,
      ...restData
    } = obj;
    return {
      restaurantData: {
        name,
        phoneNumber,
        phoneNumberCountryCode,
        landLine,
        landLineCode,
        ownerId,
        whatsAppNotification,
      },
      restData,
    };
  };
}
