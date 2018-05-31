import { DataCard, DataForm } from '../../../models/interfaces'
import { ServiceType } from '../../../models/types'

export class VK {

  service: ServiceType = 'vk'

  data_cards: DataCard[]

  getData( ) {

    console.log('Запрос юзеров на vk', )

    this.data_cards = [
      {
      name: 'georgevk',
      surname: 'Hetman',
      born: '1997.08.19',
      city: 'Odessa',
      education: 'pty',
      work: 'programmer'
    },
      {
      name: 'romavk',
      surname: 'Hetman',
      born: '1997.08.19',
      city: 'Odessa',
      education: 'pty',
      work: 'programmer'
    },
      {
      name: 'Denisvvk',
      surname: 'Hetman',
      born: '1997.08.19',
      city: 'Odessa',
      education: 'pty',
      work: 'programmer'
    }
  ]
  
  console.log('data_cards vk заполнился');

}
  
}