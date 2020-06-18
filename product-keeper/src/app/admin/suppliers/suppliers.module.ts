import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersComponent } from './suppliers.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { SupplierAddEditComponent } from './add-edit/add-edit.component';

@NgModule({
    imports: [CommonModule,RouterModule,FormsModule,Ng2SearchPipeModule],
    declarations: [SuppliersComponent, SupplierAddEditComponent],
    exports: [SuppliersComponent]
})
export class SuppliersModule {}