export enum SERVICES {
  RESTAURANT_SERVICE = 'RestaurantService',
  MISC_SERVICE = 'MiscService',
}

export enum RESTAURANT_METHODS {
  CHECK_HEALTH = 'checkHealth',
}

export enum MISC_METHODS {
  GET_ENTITY_TYPE = 'getEntityByType',
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

export interface ITypeMaster {
  id?: number;
  type?: string;
  slug?: string;
  isActive?: boolean;
}
