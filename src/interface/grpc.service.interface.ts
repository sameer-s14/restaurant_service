import { ID } from './common.interface';
import { IAddress, IRestaurant } from './model.interface';

export enum PACKAGE_NAMES {
  RESTAURANT = 'restaurant',
}

export enum SERVICES {
  RESTAURANT_SERVICE = 'RestaurantService',
}

export enum RESTAURANT_METHODS {
  CHECK_HEALTH = 'checkHealth',
  CREATE_RESTAURANT = 'createRestaurant',
  UPDATE_BASIC_DETAILS = 'updateBasicDetails',
  GET_RESTAURANT_BASIC_DETAILS = 'getRestaurantBasicDetails',
}
export interface ISaveBasicDetails extends IRestaurant {
  address?: ID<IAddress>;
}
