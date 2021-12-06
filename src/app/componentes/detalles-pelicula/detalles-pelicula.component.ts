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
import { Subscriber } from 'rxjs';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Trailer</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <iframe width="560" height="315" src="{{videoUrl}}"  title="YouTube video player" 
        frameborder="0"  allowfullscreen>
      </iframe>
      
      <a>{{videoUrl}}</a>
      <p>holi</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() videoUrl;

  constructor(public activeModal: NgbActiveModal) {
    this.videoUrl = '';
  }

}

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
    //const modalRef = this.modalService.open(NgbdModalContent);
    //modalRef.componentInstance.videoUrl = this.videoUrl;
  }
  

}
