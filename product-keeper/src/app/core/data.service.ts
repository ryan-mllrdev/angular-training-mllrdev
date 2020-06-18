import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IProduct, ISupplier, IAddress } from '../shared/interfaces';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    baseUrl: string = 'assets/';
    suppliersList: ISupplier[] = [];
    productsList: IProduct[] = [];
    locationsList: IAddress[] = [];

    constructor(private http: HttpClient) {}

    getProducts() : Observable<IProduct[]> {

        if(this.productsList && this.productsList.length)
            return of(this.productsList);

        return this.http.get<IProduct[]>(this.baseUrl + 'products.json').
        pipe(
            map(products => {
                products.forEach(element => {

                    this.getSupplierName(element.supplierId)
                    .subscribe((name: string) => element.supplierName = name);

                });
                return this.productsList = products;
            }),
            catchError(this.handleError)
        );
    }

    getAddresses() : Observable<IAddress[]> {

        if(this.locationsList && this.locationsList.length)
            return of(this.locationsList);

        return this.http.get<IAddress[]>(this.baseUrl + 'locations.json').
        pipe(
            map(addresses => {
                return this.locationsList = addresses;
            }),
            catchError(this.handleError)
        );
    }

    getSuppliers() : Observable<ISupplier[]> {

        if(this.suppliersList && this.suppliersList.length)
            return of(this.suppliersList);

        return this.http.get<ISupplier[]>(this.baseUrl + 'suppliers.json').
        pipe(
            map(suppliers => {
                suppliers.forEach(element => {

                    this.getAddressName(element.addressId)
                    .subscribe((name: string) => element.addressName = name);

                });
                return this.suppliersList = suppliers;
            }),
            catchError(this.handleError)
        );
    }

    getSupplierName(id: number): Observable<string> {

        if(this.suppliersList && this.suppliersList.length)
        {
            return of(this.suppliersList)
            .pipe(
                map(suppliers => {
                    let supplier = suppliers.filter((sup: ISupplier) => sup.id === id);
                    return (supplier && supplier.length) ? supplier[0].name : null;
                }),
                catchError(this.handleError)
            );
        }

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

        if(this.locationsList && this.locationsList.length)
        {
            return of(this.locationsList)
            .pipe(
                map(locations => {
                    let location = locations.filter((loc: IAddress) => loc.id === id);
                    return (location && location.length) ? location[0].name : null;
                }),
                catchError(this.handleError)
            );
        }

        return this.http.get<IAddress[]>(this.baseUrl + 'locations.json')
        .pipe(
            map(locations => {
                let location = locations.filter((loc: IAddress) => loc.id === id);
                return (location && location.length) ? location[0].name : null;
            }),
            catchError(this.handleError)
        );
    }

    getProduct(id: number): Observable<IProduct> {


        if(this.productsList && this.productsList.length)
        {
            return of(this.productsList)
            .pipe(
                map(products => {
                    let prods = products.filter((prod: IProduct) => prod.id === id);
                    
                    let defaultProd: IProduct = { id: products.length  + 1, sku: '', name: '', description: '', supplierId: 0, supplierName: ''};
    
                    return (prods && prods.length) ? prods[0] : defaultProd;
                }),
                catchError(this.handleError)
            );
        }

        return this.http.get<IProduct[]>(this.baseUrl + 'products.json').
        pipe(
            map(products => {
                let prods = products.filter((prod: IProduct) => prod.id === id);
                
                let defaultProd: IProduct = { id: products.length  + 1, sku: '', name: '', description: '', supplierId: 0, supplierName: ''};

                return (prods && prods.length) ? prods[0] : defaultProd;
            }),
            catchError(this.handleError)
        );
    }

    getSupplier(id: number): Observable<ISupplier> {

        if(this.suppliersList && this.suppliersList.length)
        {
            return of(this.suppliersList)
            .pipe(
                map(suppliers => {
                
                    let sups = suppliers.filter((sup: ISupplier) => sup.id === id);
                    let defaultSup: ISupplier = { id: 0, name: '', addressId: 0, addressName: '' };
    
                    return (sups && sups.length) ? sups[0] : defaultSup;
                }),
                catchError(this.handleError)
            );
        }

        return this.http.get<ISupplier[]>(this.baseUrl + 'suppliers.json').
        pipe(
            map(suppliers => {
                
                let sups = suppliers.filter((sup: ISupplier) => sup.id === id);
                let defaultSup: ISupplier = { id: 0, name: '', addressId: 0, addressName: '' };

                return (sups && sups.length) ? sups[0] : defaultSup;
            }),
            catchError(this.handleError)
        );
    }

    addProduct(value: IProduct) {
        if(value){
            this.productsList.push(value);
        }
    }

    addSupplier(value: ISupplier) {
        if(value){
            this.suppliersList.push(value);
        }
    }

    addAddress(value: IAddress) {
        if(value){
            this.locationsList.push(value);
        }
    }

    private handleError(error) {
        console.error('server error ' + error);
        return Observable.throw(error || 'Node.js server error');
    }
}