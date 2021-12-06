import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioActual } from '../clases/usuario-actual';


@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  api:string = "http://localhost/filmopedia/"

  constructor(private http: HttpClient) { }

  getUsurio(id:any) {
    return this.http.get(this.api+"?lista=1", id);
  }

  
  
}

