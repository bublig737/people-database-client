import { DataCard } from './'
import { ServiceType } from '../types';

export class DataBlock {

  data: DataCard[]

  datacount: number = this.data.length

  service: ServiceType // string

  constructor(data: DataCard[], service: ServiceType){

    this.data = data
    this.service = service

  }
}