import { WEEK_DAYS } from './../constants/model.constants';
export interface IRestaurant {
  name?: string;
  ownerId?: number;
  currentStep?: number;
  isVerified?: boolean;
  phoneNumber?: string;
  phoneNumberCountryCode?: string;
  landlineNumber?: string;
  landLineCode?: string;
  status?: string;
  whatsAppNotifications?: boolean;
}

export interface IAddress {
  country?: string;
  entityId?: number;
  entityType?: string;
  state?: string;
  city?: string;
  district?: string;
  landmark?: string;
  address?: string;
  latitude?: string;
  longitude?: string;
  buildingNumber?: string;
  pinCode?: string;
  exactLocation?: boolean;
}

export interface IRestaurantDetails {
  restaurantId?: number;
  kitchenType?: number[];
  outlets?: number[];
  cuisines?: number[];
}

export interface IRestaurantTimings {
  restaurantId?: number;
  day?: WEEK_DAYS;
  openingTime?: string;
  closingTime?: string;
  isActive?: boolean;
}
