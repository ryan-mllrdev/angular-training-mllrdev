import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddEditComponent } from './add-edit/add-edit.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,RouterModule,FormsModule],
    declarations: [ProductsComponent, ProductListComponent, ProductAddEditComponent, DetailsComponent],
    exports: [ProductsComponent]
})
export class ProductsModule {}