import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsComponent } from './locations.component';

@NgModule({
    imports: [CommonModule],
    declarations: [LocationsComponent],
    exports: [LocationsComponent]
})
export class LocationsModule {}