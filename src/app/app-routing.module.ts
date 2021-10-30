import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProximosestrenosComponent } from './componentes/proximos-estrenos/proximosestrenos.component';

const routes: Routes = [
  { path: 'proximos-estrenos', component: ProximosestrenosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
