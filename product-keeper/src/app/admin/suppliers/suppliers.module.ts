import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersComponent } from './suppliers.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SuppliersComponent],
    exports: [SuppliersComponent]
})
export class SuppliersModule {}