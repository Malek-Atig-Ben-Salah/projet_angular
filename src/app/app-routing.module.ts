import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppartementComponent } from './components/add-appartement/add-appartement.component';

const routes: Routes = [
  {path:'add-appartement' , component : AddAppartementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
