import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class Restaurants extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  addressId: number;

  @Column()
  ownerId: number;

  @Column()
  isActive: boolean;

  @Column()
  isVerified: boolean;

  @Column()
  fssaiNumber: string;

  @Column()
  openTime: Date;

  @Column()
  closeTime: Date;

  @Column()
  typeId: number;

  @Column()
  dayOfWeek: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
