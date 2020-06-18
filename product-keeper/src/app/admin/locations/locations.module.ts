import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LocationsComponent } from './locations.component';

import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { AddressAddEditComponent } from './add-edit/add-edit.component';

@NgModule({
    imports: [CommonModule,RouterModule,FormsModule,Ng2SearchPipeModule],
    declarations: [LocationsComponent, AddressAddEditComponent],
    exports: [LocationsComponent]
})
export class LocationsModule {}