import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component'
import { ProyectoComponent } from './proyecto/proyecto.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'proyecto/:id', component: ProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
