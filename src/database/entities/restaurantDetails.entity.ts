import { RestaurantTimings } from 'src/database/entities';
import { Entity, Column, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'restaurant_details' })
export class RestaurantDetails extends AbstractEntity<RestaurantDetails> {
  @Column({ name: 'restaurant_id' })
  restaurantId: number;

  @Column({ array: true, type: 'integer' })
  kitchenType: number[];

  @Column({ array: true, type: 'integer' })
  outlets: number[];

  @Column({ array: true, type: 'integer' })
  cuisines: number[];

  @OneToMany(
    () => RestaurantTimings,
    (restaurantTimings) => restaurantTimings.restaurantDetails,
  )
  timings: RestaurantTimings[];
}
