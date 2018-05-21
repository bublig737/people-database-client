import { Injectable } from '@angular/core';
import { HttpService } from '../http';

@Injectable()
export class VKService {

  constructor(private http: HttpService) { }

  getCountries() {
    console.log('ВК сервис запрашивает на хттп сервис');
    
    this.http.get('https://api.vk.com/api.php?oauth=1&method=database.getCountries', {}).subscribe((data) => { return data })
  }

  getCities(id) {
    this.http.get('http://api.vk.com/method/database.getCities', { country_id: id }).subscribe((data) => { return data })
  }

  getData() {
    // return this.http.get('http://api.vk.com/method/database.getCities', {})
  }
}