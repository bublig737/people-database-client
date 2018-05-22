import { Injectable } from '@angular/core';
import { HttpService } from '../http';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class VKService {

  constructor(private http: HttpService) { }

  getCountries() {
 

   

    this.http.get('http://api.vk.com/method/database.getCountries')
      .subscribe((data) => { return data })
  }

  // getCities(id) {
  //   this.http.get('http://api.vk.com/method/database.getCities', { country_id: id }).subscribe((data) => { return data })
  // }

  getData() {
    // return this.http.get('http://api.vk.com/method/database.getCities', {})
  }
}