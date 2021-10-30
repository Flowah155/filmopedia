import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PopularMoviesService {

  constructor(private http:HttpClient) { }

  getPopularMovies(){
    let url="https://api.themoviedb.org/3/trending/movie/week?api_key=2bc9dafd9ebbdad12807392c17bdc23d";
    return this.http.get(url);
  }

}
