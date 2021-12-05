import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/registro/registro.component';

import { BusquedaService } from 'src/app/servicios/busqueda/busqueda.service';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { HeaderComponent } from 'src/app/componentes/header/header.component';
import { InicioComponent } from 'src/app/componentes/inicio/inicio.component';
import { DetallesPeliculaComponent } from 'src/app/componentes/detalles-pelicula/detalles-pelicula.component';
import { BusquedaComponent } from 'src/app/componentes/busqueda/busqueda.component';
import { ProximosestrenosComponent } from './componentes/proximos-estrenos/proximosestrenos.component';
import { DonadoresComponent } from './componentes/donadores/donadores.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallesPeliculaComponent,
    HeaderComponent,
    FooterComponent,
    BusquedaComponent,
    ProximosestrenosComponent,
    InicioComponent,
    RegistroComponent,
    DonadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BusquedaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
