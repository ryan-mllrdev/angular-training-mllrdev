import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
// import { ProductsModule } from './products/products.module';
// import { SuppliersModule } from './admin/suppliers/suppliers.module';
// import { LocationsModule } from './admin/locations/locations.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // ProductsModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    // LocationsModule,
    // SuppliersModule,
    // ProductsRoutingModule,
    // LocationsRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
