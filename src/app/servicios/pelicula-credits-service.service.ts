import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculaCreditsServiceService {

  constructor(private http:HttpClient) { }
  
  getCredits(movieId:number){
    let url="https://api.themoviedb.org/3/movie/"+movieId+"/credits?api_key=2bc9dafd9ebbdad12807392c17bdc23d&language=en-US";
    return this.http.get(url);
  }
}
