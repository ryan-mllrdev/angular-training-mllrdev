import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductDataService } from './product-data.service';
import { SuppliersDataService } from './suppliers-data.service';
import { LocationDataService } from './locations-data.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(
        private productService: ProductDataService,
        private supplierService: SuppliersDataService,
        private locationService: LocationDataService) {

            this.loadServiceData();
    }

    private loadServiceData() {

        this.locationService.getLocations().subscribe(() => {
            this.supplierService.getSuppliers().subscribe(() => {
                this.productService.getProducts();
            });
        });
    }
}
