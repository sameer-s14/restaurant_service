import { Address } from './address.entity';
import { RESTAURANT_STATUS } from './../../constants';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'restaurants' })
export class Restaurants extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ownerId: number;

  @Column()
  phoneNumber: string;

  @Column()
  phoneNumberCountryCode: string;

  @Column()
  landline: string;

  @Column()
  landlineCode: string;

  @Column()
  currentStep: number;

  @Column({
    default: false,
  })
  isPhoneVerified: boolean;

  @Column({
    default: false,
  })
  isLandlineVerified: boolean;

  @Column()
  isVerified: boolean;

  @Column({
    default: RESTAURANT_STATUS.DRAFT,
  })
  status: string;

  @Column({
    default: false,
  })
  whatsAppNotification: boolean;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @OneToOne(() => Address, (address) => address.restaurant, { cascade: true })
  @JoinColumn()
  address: Address;
}
