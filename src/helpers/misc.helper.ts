import { Injectable } from '@nestjs/common';
import { ITypeMaster } from 'src/interface';

@Injectable()
export class MiscHelper {
  /**
   * @description Function to create response of entities
   * @param obj
   * @returns
   */
  public createEntityResponse = (types: ITypeMaster[], entityArr: string[]) => {
    const data = [];
    for (const i of entityArr) {
      const outterObj = {
        type: i,
        slugs: [],
      };
      for (const obj of types) {
        if (obj.type === i) {
          outterObj.slugs.push({ id: obj.id, slug: obj.slug });
        }
      }
      data.push(outterObj);
    }
    return data;
  };
}
