import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductAddEditComponent } from './add-edit/add-edit.component';
import { ProductDeleteComponent } from './product-delete.component';


const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductAddEditComponent },
    { path: 'products/delete/:id', component: ProductDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
