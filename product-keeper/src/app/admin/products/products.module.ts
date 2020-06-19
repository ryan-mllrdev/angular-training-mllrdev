import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddEditComponent } from './add-edit/add-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductDeleteComponent } from './product-delete.component';

@NgModule({
    imports: [CommonModule,RouterModule,FormsModule,Ng2SearchPipeModule],
    declarations: [ProductsComponent, ProductListComponent, ProductAddEditComponent,ProductDeleteComponent],
    exports: [ProductsComponent]
})
export class ProductsModule {}