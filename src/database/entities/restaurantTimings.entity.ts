import { RestaurantDetails } from 'src/database/entities';
import { WEEK_DAYS } from 'src/constants';
import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({
  name: 'restaurant_timings',
})
export class RestaurantTimings extends AbstractEntity<RestaurantTimings> {
  @Column()
  is_active: boolean;

  @Column()
  restaurantId: number;

  @Column()
  day: WEEK_DAYS;

  @Column({ type: 'time' })
  openingTime: string;

  @Column({ type: 'time' })
  closingTime: string;

  @ManyToOne(() => RestaurantDetails, (item) => item?.timings, {
    cascade: true,
  })
  @JoinColumn({ name: 'restaurant_id', referencedColumnName: 'restaurantId' })
  restaurantDetails: RestaurantDetails;
}
