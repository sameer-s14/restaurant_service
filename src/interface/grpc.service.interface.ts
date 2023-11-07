export enum SERVICES {
  RESTAURANT_SERVICE = 'RestaurantService',
  MISC_SERVICE = 'MiscService',
}

export enum RESTAURANT_METHODS {
  CHECK_HEALTH = 'checkHealth',
  CREATE_RESTAURANT = 'createRestaurant',
  UPDATE_BASIC_DETAILS = 'updateBasicDetails',
  GET_RESTAURANT_BASIC_DETAILS = 'getRestaurantBasicDetails',
  GET_RESTAURANT_DETAILS = 'getRestaurantDetails',
  UPDATE_RESTAURANT_DETAILS = 'updateRestaurantDetails',
  SAVE_RESTAURANT_DETAILS = 'saveRestaurantDetails',
}

export enum MISC_METHODS {
  GET_ENTITY_TYPE = 'getEntityByType',
}

export interface ITypeMaster {
  id?: number;
  type?: string;
  slug?: string;
  isActive?: boolean;
}
