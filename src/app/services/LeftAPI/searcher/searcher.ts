import { Injectable } from '@angular/core';

import { DataBlock } from '../../../models/classes'
import { ID } from '../../../models/types';

import * as facebook from '../services'
import * as vk from '../services'


@Injectable()
export class Searcher {

  formdata: any

  getData(formdata: FormData | ID): DataBlock[]{

    let result: DataBlock[]

    result.push(facebook.getData(formdata))

    return null

  }

}