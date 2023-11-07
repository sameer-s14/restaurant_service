import { Address } from './address.entity';
import { RESTAURANT_STATUS } from './../../constants';
import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'restaurants' })
export class Restaurants extends AbstractEntity<Restaurants> {
  @Column()
  name: string;

  @Column({ name: 'owner_id' })
  ownerId: number;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'phone_number_country_code' })
  phoneNumberCountryCode: string;

  @Column({ name: 'landline_number' })
  landlineNumber: string;

  @Column({ name: 'landline_code' })
  landlineCode: string;

  @Column({ name: 'current_step' })
  currentStep: number;

  @Column({
    default: false,
    name: 'is_phone_verified',
  })
  isPhoneVerified: boolean;

  @Column({
    default: false,
    name: 'is_landline_verified',
  })
  isLandlineVerified: boolean;

  @Column({ name: 'is_verified' })
  isVerified: boolean;

  @Column({
    default: RESTAURANT_STATUS.DRAFT,
  })
  status: string;

  @Column({
    default: false,
    name: 'whats_app_notifications',
  })
  whatsAppNotifications: boolean;

  @OneToMany(() => Address, (address) => address.restaurant)
  address: Address[];
}
