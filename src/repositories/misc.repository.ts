import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeMasters } from 'src/database/entities';
import { In, Repository } from 'typeorm';

@Injectable()
export class MiscRepository {
  constructor(
    @InjectRepository(TypeMasters)
    private readonly typeMaster: Repository<TypeMasters>,
  ) {}

  // Get Address
  getTypeMaster(type: string[]): Promise<TypeMasters[]> {
    return this.typeMaster.find({
      where: { type: In(type) },
    });
  }
}
