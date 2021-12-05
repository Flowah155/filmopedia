import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaminasDonadoresService {

  constructor(private http: HttpClient) {this.http = http }
  getDonadores(token: String){
    let url = "http://localhost:8080/donadores?access_token=" + token;
    return this.http.get(url);
  }

}