import { IAddress } from '../interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class AddressRepository {
  constructor(
    @InjectRepository(Address) private address: Repository<Address>,
  ) {}

  // Get Address
  getAddress(where: IAddress) {
    return this.address.findOne({ where });
  }

  // Save Address Data
  saveAddress(data: IAddress) {
    return this.address.save(data);
  }
}
