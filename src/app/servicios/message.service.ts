import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _http:HttpClient) { }


  sendMessage(body: any){
   let headers = {
     headers: new HttpHeaders({
       'Content-Type' : 'application/json'
     })
   }
   return this._http.post("http://locahost:3000/email", body,headers);
  }
}


