import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeMasters } from 'src/database/entities';
import { Module } from '@nestjs/common';
import { MiscRepository } from 'src/repositories';
import { MiscController } from './misc.controller';
import { MiscService } from './misc.service';
import { MiscHelper } from 'src/helpers';

@Module({
  imports: [TypeOrmModule.forFeature([TypeMasters])],
  controllers: [MiscController],
  providers: [MiscRepository, MiscService, MiscHelper],
})
export class MiscModule {}
