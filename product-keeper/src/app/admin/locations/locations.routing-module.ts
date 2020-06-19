import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsComponent } from '../locations/locations.component';
import { AddressAddEditComponent } from './add-edit/add-edit.component';
import { AddressDeleteComponent } from './location-delete.component';


const routes: Routes = [
    { path: 'locations', component: LocationsComponent },
    { path: 'locations/:id', component: AddressAddEditComponent },
    { path: 'locations/delete/:id', component: AddressDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }