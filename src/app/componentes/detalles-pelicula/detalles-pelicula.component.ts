import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PeliculaDetailsServiceService } from 'src/app/servicios/pelicula-details-service.service';
import { PeliculaCreditsServiceService } from 'src/app/servicios/pelicula-credits-service.service';
import { PeliculaDetallesInterface } from 'src/app/interfaces/pelicula-detalles-interface';
import { GenresEntity } from 'src/app/interfaces/pelicula-detalles-interface';
import { PeliculaCreditsInterface } from 'src/app/interfaces/pelicula-credits-interface';
import { CastEntity } from 'src/app/interfaces/pelicula-credits-interface';
import { CrewEntity } from 'src/app/interfaces/pelicula-credits-interface';
import { ListaFavoritaService } from 'src/app/servicios/lista-favorita-service.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css',
    './detalles-pelicula.component.scss'],
})
export class DetallesPeliculaComponent implements OnInit {

  movieId : number;
  userId: number = 1;
  
  constructor(private modalService: NgbModal,
    private route: ActivatedRoute,
    private peliculaDetalles: PeliculaDetailsServiceService,
    private peliculaCredits: PeliculaCreditsServiceService,
    private listaFavorita: ListaFavoritaService) { 
    //Agregar datos a getDetail()
    this.route.queryParams.subscribe(params => {
      this.movieId = params.movieId;
    });
    this.peliculaDetalles.getDetail(this.movieId).subscribe(
      data=>{
        this.pelicula = <PeliculaDetallesInterface> data;

        this.generos = <GenresEntity[]> this.pelicula.genres;
      }
    )
    
    this.peliculaCredits.getCredits(this.movieId).subscribe(
      data=>{
        this.creditos = <PeliculaCreditsInterface> data;

        this.reparto = <CastEntity[]> this.creditos.cast;
        
        this.crew = <CrewEntity[]> this.creditos.crew;
      }
    )
  }

  readonly = true;

  

  pelicula: PeliculaDetallesInterface = <PeliculaDetallesInterface>{};
  generos: GenresEntity[] = <GenresEntity[]>{};
  creditos: PeliculaCreditsInterface = <PeliculaCreditsInterface>{};
  reparto: CastEntity[] = <CastEntity[]>{};
  crew: CrewEntity[] = <CrewEntity[]>{};
  
  //director = this.crew.filter(d=>d.job==='Director');

  ngOnInit(): void {
  }

  
  agregarFavorito() {
    this.listaFavorita.addMovieFav(this.movieId, this.userId).subscribe()
  }

  reproducirTrailer() {

  }
  

}
