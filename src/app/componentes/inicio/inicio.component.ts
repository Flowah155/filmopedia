import { Component, OnInit } from '@angular/core';
import { PopularMoviesService } from 'src/app/servicios/popular-movies.service'
import { RecentTrailersService } from 'src/app/servicios/recent-trailers.service'
import { PopularMoviesObject,
         PM_Results_Entity,
         RecentTrailersObject,
         RT_Results_Entity,
         RecentTrailersOfMovie,
         Trailers
       } from 'src/app/interfaces/inicio-interface'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
  


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title = 'Filmopedia';

  //PopularMoviesService
  PMdataG: PopularMoviesObject = <PopularMoviesObject>{};
  PMdataR: PM_Results_Entity[] = <PM_Results_Entity[]>{};
  //RecentTrailersService
  RTdataG: RecentTrailersObject = <RecentTrailersObject>{};
  RTdataR: RT_Results_Entity[] = <RT_Results_Entity[]>{};
  RTidList: number[]= [];
  RTauxMovieVids: RecentTrailersOfMovie=<RecentTrailersOfMovie>{};
  RTmovieVids: Trailers[] = <Trailers[]>{};
  RTmovieKeyList: string[] = [];

  constructor(
  private popularMovies:PopularMoviesService,
  private recentTrailers:RecentTrailersService,
  public sanitizer:DomSanitizer
  ){
    //PopularMoviesService
    this.popularMovies.getPopularMovies().subscribe(
      data=>{
        this.PMdataG =  <PopularMoviesObject> data;

        this.PMdataR =  <PM_Results_Entity[]> this.PMdataG.results;
      }
    )
    //RecentTrailersService
    this.recentTrailers.getRecentTrailersIds().subscribe(
      data=>{
        this.RTdataG =  <RecentTrailersObject> data;

        this.RTdataR = <RT_Results_Entity[]> this.RTdataG.results;

        for (let i in this.RTdataR){
          this.RTidList.push(this.RTdataR[i].id);
        }

        for (let i in this.RTidList){
          this.recentTrailers.getRecentTrailers(this.RTidList[i]).subscribe(
            data=>{
              this.RTauxMovieVids = <RecentTrailersOfMovie> data;
              this.RTmovieVids = <Trailers[]> this.RTauxMovieVids.results;
              
              this.RTmovieKeyList[i]= <string> this.sanitizer.bypassSecurityTrustResourceUrl("http://www.youtube.com/embed/"+this.RTmovieVids[0].key)
            }
          )
        }
      }
    )
    console.warn(this.RTmovieKeyList)

  }


  ngOnInit(): void {
  }

}
