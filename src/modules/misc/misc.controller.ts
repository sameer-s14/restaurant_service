import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { MiscService } from './misc.service';
import { MISC_METHODS, SERVICES } from 'src/interface';

@Controller()
export class MiscController {
  constructor(private readonly miscService: MiscService) {}

  @GrpcMethod(SERVICES.MISC_SERVICE, MISC_METHODS.GET_ENTITY_TYPE)
  getEntityByType(request: { type: string[] }) {
    return this.miscService.getEntityByType(request);
  }
}
