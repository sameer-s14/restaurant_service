import { dbConfiguration } from './../database/index';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ENV_FILE_PATH } from 'src/constants';
import { RestaurantModule } from './restaurants';
import { MiscModule } from './misc';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ENV_FILE_PATH }),
    TypeOrmModule.forRoot(dbConfiguration),
    RestaurantModule,
    MiscModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
