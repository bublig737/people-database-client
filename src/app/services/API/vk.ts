import { Injectable } from '@angular/core';
import { HttpService } from '../http';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class VKService {

  constructor(private http: HttpService) { }

  getCountries() {
 

   

    this.http.get('http://api.vk.com/method/database.getCountries?callback=JSONP_CALLBACK&access_token=a4dcd0a87da10512ef9d3188e78cc4f56130f718d77ada38c1e20a1e7b93a605e4a57a6da118d3a149917')

  }

  // getCities(id) {
  //   this.http.get('http://api.vk.com/method/database.getCities', { country_id: id }).subscribe((data) => { return data })
  // }

  getData() {
    // return this.http.get('http://api.vk.com/method/database.getCities', {})
  }
}