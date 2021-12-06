import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

    token: String;
  constructor(private http: HttpClient) {this.http = http }
  getToken(){
    //this.http.post<any>('http://localhost:8080/oauth', { grant_type: 'password', username: 'test', password: 'test', client_id: 'test', client_secret: 'test', }).subscribe(data => {
               
    //this.token = data.access_token;
    //console.warn(this.token) 
        //})
    return this.http.post<any>('http://localhost:8080/oauth', { grant_type: 'password', username: 'test', password: 'test', client_id: 'test', client_secret: 'test', })/*.subscribe(data => {})*/
    ;
  }
}