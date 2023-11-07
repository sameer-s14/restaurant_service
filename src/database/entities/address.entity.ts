import { Restaurants } from 'src/database/entities';
import { COUNTRY } from 'src/constants';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'addresses' })
export class Address extends AbstractEntity<Address> {
  @Column({ default: COUNTRY.INDIA })
  country: string;

  @Column({
    name: 'entity_id',
  })
  entityId: number;

  @Column({
    name: 'entity_type',
  })
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

  @Column({
    name: 'building_number',
  })
  buildingNumber: string;

  @Column({
    name: 'pin_code',
  })
  pinCode: string;

  @Column({ default: false, name: 'exact_location' })
  exactLocation: boolean;

  @ManyToOne(() => Restaurants, (item) => item?.address, { cascade: true })
  @JoinColumn({ name: 'entity_id' })
  restaurant: Restaurants;
}
