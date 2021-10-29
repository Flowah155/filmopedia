import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetallesPeliculaComponent } from './componentes/detalles-pelicula/detalles-pelicula.component';

const routes: Routes = [
  { path: 'detalles/:movieId', component: DetallesPeliculaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
