import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BusquedaService } from './servicios/busqueda/busqueda.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './componentes/footer/footer.component'
import { HeaderComponent } from './componentes/header/header.component'
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DetallesPeliculaComponent } from './componentes/detalles-pelicula/detalles-pelicula.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallesPeliculaComponent,
    HeaderComponent,
    FooterComponent,
    BusquedaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BusquedaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
