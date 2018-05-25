import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Jsonp } from '@angular/http';


@Injectable()
export class HttpService {

  constructor(private jsonp: Jsonp) { }

  // headers = new HttpHeaders({
  //   // 'Content-Type': 'application/json',
  //   'Authorization': 'my-auth-token',
  //   'Access-Control-Allow-Origin': '*'
  // })


  // headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

//   headers = new HttpHeaders();
// headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');

  get(url: string) {


    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'my-auth-token',
    //     'Access-Control-Allow-Origin': '*'
    //   })
    // };
    const foo = (json) => {

      console.log('ответ с сервера вк',json)
  
    }



    console.log('Идет гет запрос в HttpService с данными');

    return this.jsonp.request(url
    // , 
    // {headers: {'Access-Control-Allow-Origin': '*'}, params:{'callback':'foo' }}
    )
    .subscribe((data)=>{console.log(data);}, (error)=>{console.log(error);
    })

  }
}