export enum PACKAGE_NAMES {
  RESTAURANT = 'restaurant',
}

export enum SERVICES {
  RESTAURANT_SERVICE = 'RestaurantService',
}

export enum RESTAURANT_METHODS {
  CHECK_HEALTH = 'checkHealth',
}

export interface ISaveBasicDetails {
  name?: string;
  ownerId?: number;
  currentStep?: number;
  isVerified?: boolean;
  phoneNumber?: string;
  phoneNumberCountryCode?: string;
  landlineNumber?: string;
  landLineCode?: string;
  latitude?: string;
  longitude?: string;
  address?: string;
  state?: string;
  district?: string;
  country?: string;
  pinCode?: string;
  exactLocation?: boolean;
  whatsAppNotification?: boolean;
}
