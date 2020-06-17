import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsRoutingModule } from './products/products.routing-module';
import { SuppliersRoutingModule } from './admin/suppliers/suppliers.routing-module';
import { LocationsRoutingModule } from './admin/locations/locations.routing-module';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/products'},
  { path: '**', pathMatch: 'full', redirectTo: '/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ProductsRoutingModule, SuppliersRoutingModule, LocationsRoutingModule]
})
export class AppRoutingModule { }
