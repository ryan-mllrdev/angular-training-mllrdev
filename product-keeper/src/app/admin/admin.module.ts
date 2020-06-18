import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { SuppliersModule } from './suppliers/suppliers.module';
import { ProductsModule } from './products/products.module';
import { LocationsModule } from './locations/locations.module';

@NgModule({
    imports: [CommonModule,LocationsModule,SuppliersModule,ProductsModule],
    declarations: [AdminComponent],
    exports: [AdminComponent]
})
export class AdminModule {}