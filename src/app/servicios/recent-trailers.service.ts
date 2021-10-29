import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { RecentTrailersObject } from 'src/app/interfaces/inicio-interface'
import { RT_Results_Entity } from 'src/app/interfaces/inicio-interface'

@Injectable({
  providedIn: 'root'
})
export class RecentTrailersService {

  constructor(private http:HttpClient) { }

  getRecentTrailersIds(){
    let url="https://api.themoviedb.org/3/discover/movie?api_key=2bc9dafd9ebbdad12807392c17bdc23d&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&primary_release_date.gte=2021-09-01";
    return this.http.get(url);
  }

  getRecentTrailers(id: number) {
    let url="https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=2bc9dafd9ebbdad12807392c17bdc23d";
    return this.http.get(url);
  }
}
