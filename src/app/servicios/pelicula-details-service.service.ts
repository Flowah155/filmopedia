import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculaDetailsServiceService {

  constructor(private http:HttpClient) { }

  
  //movieId = 580489;
  getDetail(movieId:number){
    let url="https://api.themoviedb.org/3/movie/"+movieId+"?api_key=2bc9dafd9ebbdad12807392c17bdc23d";
    return this.http.get(url);
  }
}
