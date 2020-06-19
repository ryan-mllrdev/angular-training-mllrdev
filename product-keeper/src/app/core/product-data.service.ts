import { IProduct } from '../shared/interfaces';
import { BaseDataService } from './base-data.service';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SuppliersDataService } from './suppliers-data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductDataService extends BaseDataService {

    productsDictionary = new Map<number,IProduct>();

    /**
     *
     */
    constructor(http: HttpClient, private supplier: SuppliersDataService) {
        super(http);
    }

    getProducts() : Observable<IProduct[]> {

        //Check if data are already loaded
        if(this.productsDictionary && this.productsDictionary.size)
            return of(Array.from(this.productsDictionary.values()));

        //If data are not loaded, get it from products.json
        return this.http.get<IProduct[]>(this.baseUrl + 'products.json').
        pipe(
            map(products => {
                products.forEach(item => {

                    //Get the supplier name and assign it to the product matching the supplierId
                    this.supplier.getSupplierName(item.supplierId)
                    .subscribe((name: string) => {

                        item.supplierName= name;

                        //Store each product item to a dictionary for future reference and easy access
                        this.productsDictionary.set(item.id, item);
                    });

                });
                return products;
            }),

            //Handle server error
            catchError(this.handleError)
        );
    }
    
    getProduct(id: number): Observable<IProduct> {

        let theprod: IProduct;
        theprod = this.productsDictionary.get(id);
        if(theprod)
            return of(theprod);
        theprod = { id: 0, name: '', description: '', sku: '', supplierId: 0, supplierName: ''};
        return of(theprod);
    }

    addProduct(value: IProduct) {
        if(value){
            this.productsDictionary.set(value.id, value);
        }
    }

    deleteProduct(value: number) {
        if(value){
            this.productsDictionary.delete(value);
        }
    }
}