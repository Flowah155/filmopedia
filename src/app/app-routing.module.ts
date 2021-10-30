import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component'
import { DetallesPeliculaComponent } from './componentes/detalles-pelicula/detalles-pelicula.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { ProximosestrenosComponent } from './componentes/proximos-estrenos/proximosestrenos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'detalles', component: DetallesPeliculaComponent },
  { path: 'busqueda', component: BusquedaComponent},
  { path: 'proximos-estrenos', component: ProximosestrenosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
