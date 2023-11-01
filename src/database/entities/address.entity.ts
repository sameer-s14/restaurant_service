import { Restaurants } from 'src/database/entities';
import { COUNTRY } from 'src/constants';
import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'addresses' })
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: COUNTRY.INDIA })
  country: string;

  @Column()
  entityId: number;

  @Column()
  entityType: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  landmark: string;

  @Column()
  address: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  buildingNumber: string;

  @Column()
  pinCode: string;

  @Column({ default: false })
  exactLocation: boolean;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @OneToOne(() => Restaurants, (restaurants) => restaurants.address)
  restaurant: Restaurants;
}
