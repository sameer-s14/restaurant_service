import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'type_masters' })
export class TypeMasters extends AbstractEntity<TypeMasters> {
  @Column()
  type: string;

  @Column()
  slug: string;

  @Column({ name: 'is_active' })
  isActive: boolean;
}
