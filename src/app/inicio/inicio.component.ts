import { Component, OnInit } from '@angular/core';
import { PopularMoviesObject } from '../interfaces'
import { PM_Results_Entity } from '../interfaces'
import { PopularMoviesService } from '../popular-movies.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title = 'Filmopedia';

  dataG: PopularMoviesObject = <PopularMoviesObject>{};
  dataR: PM_Results_Entity[] = <PM_Results_Entity[]>{};

  constructor(private popularMovies:PopularMoviesService){
    this.popularMovies.getPopularMovies().subscribe(
      data=>{
        console.warn(<PopularMoviesObject> data)
        this.dataG =  <PopularMoviesObject> data;

        console.warn(<PM_Results_Entity[]> this.dataG.results)
        this.dataR =  <PM_Results_Entity[]> this.dataG.results;
      }
    )
  }

  ngOnInit(): void {
  }

}
