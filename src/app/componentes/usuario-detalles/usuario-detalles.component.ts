import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioActual} from 'src/app/clases/usuario-actual';
import { UsuarioServiceService } from 'src/app/servicios/usuario-service.service';
import { ListaFavoritos } from 'src/app/clases/lista-favoritos';
import { PeliculaCreditsServiceService } from 'src/app/servicios/pelicula-credits-service.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html',
  styleUrls: ['./usuario-detalles.component.css']
})
export class UsuarioDetallesComponent implements OnInit{

  
  constructor(private router: Router,
    private aroute: ActivatedRoute,
    private dataService: LoginServiceService){
      
    }

  ngOnInit(): void {
    console.log(this.dataService.getToken())
  }

}
