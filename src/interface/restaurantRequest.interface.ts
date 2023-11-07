import { ID } from './common.interface';
import { IAddress } from './model.interface';
import { IRestaurant } from 'src/interface';

export interface ISaveBasicDetails extends IRestaurant {
  address?: ID<IAddress>;
}

export interface ITimings {
  openingTime?: string;
  closingTime?: string;
}
export interface ITimingsObj {
  day?: string;
  shifts?: ITimings[];
}
