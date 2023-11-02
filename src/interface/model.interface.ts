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
