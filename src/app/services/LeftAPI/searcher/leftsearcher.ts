import { Injectable } from '@angular/core';

import * as facebook from '../services'
import * as vk from '../services'
import { DataForm } from '../../../models/interfaces';
import { LeftAPI } from '../../../models/classes';


@Injectable()
export class LeftSearcher {


 public getData(): LeftAPI{

    let api = new LeftAPI

    api.facebook.getData()
    api.vk.getData()

    return api

  }

}