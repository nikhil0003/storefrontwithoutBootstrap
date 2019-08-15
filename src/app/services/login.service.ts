import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  sendCredential(username: string , password: string) {
    // tslint:disable-next-line: prefer-const
    let url = 'http://localhost:8080/token';
    // tslint:disable-next-line: quotemark
    const encodedCreditials = btoa(username + ":" + password);
    const basicHeader = "Basic "+ encodedCreditials;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        // tslint:disable-next-line: object-literal-key-quotes
        'Authorization': basicHeader
      })
    };
    // tslint:disable-next-line: quotemark
    localStorage.setItem("Authorization",basicHeader);
    return this.http.get(url, httpOptions);
    }
    checkSession() {
      // tslint:disable-next-line: prefer-const
      let url = 'http://localhost:8080/checkSession';
     // tslint:disable-next-line: align
     let  b = localStorage.getItem('Authorization');

      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': b
        })
      };
      return this.http.get(url,httpOptions);
     }
    logout() {
      const url = 'http://localhost:8080/checkSession';
      const  b = localStorage.getItem('Authorization');
       // tslint:disable-next-line: align
       const httpOptions = {
         headers: new HttpHeaders({
           // tslint:disable-next-line: object-literal-key-quotes
           'Authorization': b
         })
       };
       // tslint:disable-next-line: align
       return this.http.get( url, httpOptions);
      }
}
