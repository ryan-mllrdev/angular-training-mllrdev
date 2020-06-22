import { NgModule } from '@angular/core';
import { LocationsRoutingModule } from './locations/locations.routing-module';
import { SuppliersRoutingModule } from './suppliers/suppliers.routing-module';
import { ProductsRoutingModule } from './products/products.routing-module';

@NgModule({
  exports: [ProductsRoutingModule, LocationsRoutingModule, SuppliersRoutingModule]
})
export class AdminRoutingModule { }
