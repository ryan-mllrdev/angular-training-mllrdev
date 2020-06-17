import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ProductsComponent, ProductListComponent],
    exports: [ProductsComponent]
})
export class ProductsModule {}