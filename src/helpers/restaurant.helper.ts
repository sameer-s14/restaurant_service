import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantHelper {
  public filterRestaurantData = (obj: any) => {
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
