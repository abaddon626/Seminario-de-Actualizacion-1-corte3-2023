import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from 'src/app/modules/home/home.module';
import { LoginModule } from 'src/app/modules/login/login.module';

const routes: Routes = [
  {path: '', loadChildren: () => import("src/app/modules/login/login.module").then (m => m.LoginModule)},
  {path: '', loadChildren: () => import("src/app/modules/home/home.module").then (m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
