import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { SERVICES, RESTAURANT_METHODS } from 'src/interface';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod(SERVICES.RESTAURANT_SERVICE, RESTAURANT_METHODS.CHECK_HEALTH)
  checkHealth() {
    return {
      message: SERVICES.RESTAURANT_SERVICE,
      status: true,
    };
  }
}
