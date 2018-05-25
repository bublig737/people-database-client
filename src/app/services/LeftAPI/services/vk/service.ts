import { DataCard, DataBlock } from '../../../../models/classes'
import { ID, ServiceType } from '../../../../models/types'

export class VK {

  service: ServiceType = 'vk'

  getData(formdata: FormData | ID) {

    if (!formdata) return void 0

    if (formdata instanceof FormData) {


    }
    else {


    }
  }
}