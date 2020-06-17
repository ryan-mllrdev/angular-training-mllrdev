import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { SuppliersComponent } from './admin/suppliers/suppliers.component';
import { LocationsComponent } from './admin/locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    SuppliersComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
