import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersComponent } from '../suppliers/suppliers.component';
import { SupplierAddEditComponent } from './add-edit/add-edit.component';


const routes: Routes = [
    { path: 'suppliers', component: SuppliersComponent },
    { path: 'suppliers/:id', component: SupplierAddEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }