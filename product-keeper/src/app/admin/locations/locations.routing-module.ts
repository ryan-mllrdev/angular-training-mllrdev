import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsComponent } from '../locations/locations.component';
import { AddressAddEditComponent } from './add-edit/add-edit.component';


const routes: Routes = [
    { path: 'locations', component: LocationsComponent },
    { path: 'locations/:id', component: AddressAddEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }