import { Component, OnInit } from '@angular/core';
import { ProximosestrenosObject } from 'src/app/interfaces/proximosestrenos-interface';
import { ResultsEntity } from 'src/app/interfaces/proximosestrenos-interface';
import { Dates } from 'src/app/interfaces/proximosestrenos-interface';
import { ProximosestrenosService } from 'src/app/servicios/proximosestrenos.service';


@Component({
  selector: 'app-proximosestrenos',
  templateUrl: './proximosestrenos.component.html',
  styleUrls: ['./proximosestrenos.component.css']
})
export class ProximosestrenosComponent implements OnInit {
  title = 'Filmopedia';
 
  dataG: ProximosestrenosObject = <ProximosestrenosObject>{};
  dataR: ResultsEntity[] = <ResultsEntity[]>{};
  dataF: Dates[] = <Dates[]>{};


  constructor(private upcomingMovies:ProximosestrenosService) { 
    
    this.upcomingMovies.getProximosEstrenos().subscribe(
      data=>{
        console.warn(<ProximosestrenosObject> data)
        this.dataG = <ProximosestrenosObject> data;

        console.warn(<ResultsEntity[]> this.dataG.results)
        this.dataR = <ResultsEntity[]> this.dataG.results;

      }
    )
  }

  ngOnInit(): void {
  }

}
