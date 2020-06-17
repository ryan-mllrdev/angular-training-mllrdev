import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IProduct, ISupplier, IAddress } from '../shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/';

    constructor(private http: HttpClient) {}

    getProducts() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.baseUrl + 'products.json').
        pipe(
            map(products => {
                products.forEach(element => {

                    this.getSupplierName(element.supplierId)
                    .subscribe((name: string) => element.supplierName = name);

                });
                return products;
            }),
            catchError(this.handleError)
        );
    }

    getAddresses() : Observable<IAddress[]> {
        return this.http.get<IAddress[]>(this.baseUrl + 'locations.json').
        pipe(
            map(addresses => {
                return addresses;
            }),
            catchError(this.handleError)
        );
    }

    getSuppliers() : Observable<ISupplier[]> {
        return this.http.get<ISupplier[]>(this.baseUrl + 'suppliers.json').
        pipe(
            map(suppliers => {
                suppliers.forEach(element => {

                    this.getAddressName(element.addressId)
                    .subscribe((name: string) => element.addressName = name);

                });
                return suppliers;
            }),
            catchError(this.handleError)
        );
    }

    getSupplierName(id: number): Observable<string> {
        return this.http.get<ISupplier[]>(this.baseUrl + 'suppliers.json')
        .pipe(
            map(suppliers => {
                let supplier = suppliers.filter((sup: ISupplier) => sup.id === id);
                return (supplier && supplier.length) ? supplier[0].name : null;
            }),
            catchError(this.handleError)
        );
    }

    getAddressName(id: number): Observable<string> {
        return this.http.get<IAddress[]>(this.baseUrl + 'locations.json')
        .pipe(
            map(locations => {
                let location = locations.filter((loc: IAddress) => loc.id === id);
                return (location && location.length) ? location[0].name : null;
            }),
            catchError(this.handleError)
        );
    }

    private handleError(error) {
        console.error('server error ' + error);
        return Observable.throw(error || 'Node.js server error');
    }
}