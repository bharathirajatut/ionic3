import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  ip="https://randomuser.me/api/?results=10"
  getRandomData()
  {
    return new Promise(resolve => {

      this.http.get(this.ip,{
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'json' 
     })
      .subscribe(res => {
      //alert("list from web "+JSON.stringify(res));
      resolve(res["results"]);
      }, (err) => {
      alert("failed=="+JSON.stringify(err));
      resolve([])
    });
    });
  }
}
