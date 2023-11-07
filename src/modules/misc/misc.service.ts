import { MiscRepository } from '../../repositories';
import { Injectable } from '@nestjs/common';
import { MiscHelper } from 'src/helpers';
import { ITypeMaster } from 'src/interface';
import { setInitialResponse, setSuccessResponse } from 'src/utils';

@Injectable()
export class MiscService {
  constructor(
    private readonly miscRepository: MiscRepository,
    private readonly miscHelper: MiscHelper,
  ) {}

  async getEntityByType(request: { type: string[] }) {
    let response = setInitialResponse();
    try {
      const { type } = request;
      const res = await this.miscRepository.getTypeMaster(type);
      const entityRes = this.miscHelper.createEntityResponse(
        res as unknown as ITypeMaster[],
        type,
      );

      response = setSuccessResponse(entityRes);
    } catch (err) {
      console.log('MiscService :: getEntityByType :: ', err.message);
      response.message = err?.message;
    }
    return response;
  }
}
