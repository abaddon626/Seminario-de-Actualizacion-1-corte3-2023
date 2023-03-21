import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from 'src/app/modules/admin/admin.module';
import { HomeModule } from 'src/app/modules/home/home.module';
import { LoginModule } from 'src/app/modules/login/login.module';

const routes: Routes = [
  {path: '', loadChildren: () => import("src/app/modules/login/login.module").then (m => m.LoginModule)},
  {path: '', loadChildren: () => import("src/app/modules/home/home.module").then (m => m.HomeModule)},
  {path: '', loadChildren: () => import("src/app/modules/admin/admin.module").then (m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
