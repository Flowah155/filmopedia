import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaFavoritos } from '../clases/lista-favoritos';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaFavoritaService {

  api= 'http://localhost/filmopedia/'

  constructor(private http: HttpClient) { }

  getMovieFav(id: any) {
    //return this.http.get();
  }

  addMovieFav(movieId: any, userId: any): Observable<any>{
    return this.http.post(this.api+"?favorito=1", {movieId, userId});
  }

  deleteMovieFav(favorito: ListaFavoritos) {
    
  }

}
