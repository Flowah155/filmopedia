import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProximosestrenosService {

  constructor(private http: HttpClient) {this.http = http }

  getProximosEstrenos(){
    let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=2bc9dafd9ebbdad12807392c17bdc23d";
    return this.http.get(url);
  }
  getProximosAsendente(){
    let url = "https://api.themoviedb.org/3/discover/movie?api_key=2bc9dafd9ebbdad12807392c17bdc23d&sort_by=release_date.asc&release_date.gte=2021-10-29&with_watch_monetization_types=buy";
    return this.http.get(url);
  }
  getProximosDesendento(){
    let url = "https://api.themoviedb.org/3/discover/movie?api_key=2bc9dafd9ebbdad12807392c17bdc23d&sort_by=popularity.asc&release_date.gte=2021-10-29&with_watch_monetization_types=buy";
    return this.http.get(url);
  }
  
}
