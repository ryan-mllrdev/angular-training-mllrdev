import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation.component';
import { NavigationRoutingModule } from './navigation-routing.module';
import { ProductsModule } from '../products/products.module';
import { SuppliersModule } from '../suppliers/suppliers.module';
import { LocationsModule } from '../locations/locations.module';
// import { ProductsRoutingModule } from '../products/products-routing.module';
import { SuppliersRoutingModule } from '../suppliers/suppliers-routing.module';
import { LocationsRoutingModule } from '../locations/locations-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from '../products/products.component';
import { SuppliersComponent } from '../suppliers/suppliers.component';
import { LocationsComponent } from '../locations/locations.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule,
        NavigationRoutingModule
    ],
    declarations: [NavigationComponent],
    exports: [NavigationComponent]
})
export class NavigationModule {}
