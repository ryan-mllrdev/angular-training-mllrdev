import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin/admin.routing-module';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/products'},
  { path: '**', pathMatch: 'full', redirectTo: '/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, AdminRoutingModule]
})
export class AppRoutingModule { }
