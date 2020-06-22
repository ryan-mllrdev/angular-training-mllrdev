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

        this.locationService.getAddresses().subscribe(() => {
            this.supplierService.getSuppliers().subscribe(() => {
                this.productService.getProducts();
            });
        });
    }

    productDataService: ProductDataService = this.productService;
    supplierDataService: SuppliersDataService = this.supplierService;
    locationDataService: LocationDataService = this.locationService;
}
