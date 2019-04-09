import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UdetalleComponent } from './udetalle/udetalle.component';
import { UlistaComponent } from './ulista/ulista.component';
const routes: Routes = [
  {path : '', component: UlistaComponent},
  {path : 'detalle/:username', component: UdetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
