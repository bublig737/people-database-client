import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url, query) {

    console.log('Идет гет запрос в HttpService с данными', query);

    return this.http.get(url, query)

  }
}