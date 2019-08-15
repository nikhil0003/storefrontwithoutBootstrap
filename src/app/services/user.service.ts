import { Injectable } from '@angular/core';
import {User} from 'src/app/models/user';
import {AppConst} from 'src/app/constants/app-const';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient ) { }


  newUser(username: string, email: string) {
const url = 'http://localhost:8080/user/newUser';
let userInfo = {"username" : username,"email" : email};

let  b = localStorage.getItem('Authorization');
const httpOptions = {
  headers: new HttpHeaders({
    // tslint:disable-next-line: object-literal-key-quotes
    'Content-Type':'application/json',
    'Authorization': b
  })
};
console.log(userInfo);
return this.httpclient.post(url, JSON.stringify(userInfo), httpOptions);
  }


}
