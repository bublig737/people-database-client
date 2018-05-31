import { DataCard, DataForm } from '../../../models/interfaces'
import { ServiceType } from '../../../models/types'
export class FaceBook {

  service: ServiceType = 'facebook'

  data_cards: DataCard[]

  getData() {

   console.log('Запрос юзеров на фейсбук')

  this.data_cards = [
    {
    name: 'george',
    surname: 'Hetman',
    born: '1997.08.19',
    city: 'Odessa',
    education: 'pty',
    work: 'programmer'
  },
    {
    name: 'roma',
    surname: 'Hetman',
    born: '1997.08.19',
    city: 'Odessa',
    education: 'pty',
    work: 'programmer'
  },
    {
    name: 'Denis',
    surname: 'Hetman',
    born: '1997.08.19',
    city: 'Odessa',
    education: 'pty',
    work: 'programmer'
  }
]

console.log('data_cards facobook заполнился');


}

}