import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component'
import { DetallesPeliculaComponent } from './componentes/detalles-pelicula/detalles-pelicula.component';

const routes: Routes = [
  { path: 'detalles', component: DetallesPeliculaComponent },
  {path: '', component: InicioComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
