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

    productsDictionary = new Map<number,IProduct>();
    suppliersDictionary = new Map<number, ISupplier>();
    locationsDictionary = new Map<number, IAddress>();

    constructor(private http: HttpClient) {
        
        this.getAddresses().subscribe(()=>{
            this.getSuppliers().subscribe(()=>{
                this.getProducts();
            })
        })
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
                    this.getSupplierName(item.supplierId)
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

    getAddresses() : Observable<IAddress[]> {

        //Check if addresses are already loaded
        if(this.locationsDictionary && this.locationsDictionary.size)
            return of(Array.from(this.locationsDictionary.values()));

        //If not loaded, get it from locations.json from assets
        return this.http.get<IAddress[]>(this.baseUrl + 'locations.json').
        pipe(
            map(addresses => {

                addresses.forEach(item => {
                    
                    //Store all addresses to a dictionary for future reference and easy access
                    this.locationsDictionary.set(item.id, item);
                })

                return addresses;
            }),

            //Handle server error
            catchError(this.handleError)
        );
    }

    getSuppliers() : Observable<ISupplier[]> {

        //Check if data are already loaded
        if(this.suppliersDictionary && this.suppliersDictionary.size)
            return of(Array.from(this.suppliersDictionary.values()));

        //If not loaded, get it from /assets/suppliers.json
        return this.http.get<ISupplier[]>(this.baseUrl + 'suppliers.json').
        pipe(
            map(suppliers => {

                suppliers.forEach(item => {

                    //Get address name and assign it to the match item in supplier according to the addressId
                    this.getAddressName(item.addressId)
                    .subscribe((name: string) => {

                        item.addressName = name;

                        //Store each record to a dictionary for future reference and easy access
                        this.suppliersDictionary.set(item.id, item);

                    });

                });
                return suppliers;
            }),

            //Handle server error
            catchError(this.handleError)
        );
    }

    getSupplierName(id: number): Observable<string> {

        let supName: string = "";
        this.getSupplier(id).subscribe((supplier:ISupplier)=>{
            if(supplier)
                supName = supplier.name;
        });
        return of(supName);
    }

    getAddressName(id: number): Observable<string> {

        let addr: string = "";
        this.getAddress(id).subscribe((item:IAddress)=>{
            addr = item.name;
        });
        return of(addr);
    }

    getAddress(id: number): Observable<IAddress> {

        let addr: IAddress;
        addr = this.locationsDictionary.get(id);
        if(addr)
            return of(addr);
        addr = { id: 0, name: ''};
        return of(addr);
    }

    getProduct(id: number): Observable<IProduct> {

        let theprod: IProduct;
        theprod = this.productsDictionary.get(id);
        if(theprod)
            return of(theprod);
        theprod = { id: 0, name: '', description: '', sku: '', supplierId: 0, supplierName: ''};
        return of(theprod);
    }

    getSupplier(id: number): Observable<ISupplier> {

        let supplier: ISupplier;
        supplier = this.suppliersDictionary.get(id);
        if(supplier)
            return of(supplier);
        else
        {
            let defaultSup: ISupplier = { id: 0, name: '', addressId: 0, addressName: '' };
            return of(defaultSup);
        }
    }

    addProduct(value: IProduct) {
        if(value){
            this.productsDictionary.set(value.id, value);
        }
    }

    addSupplier(value: ISupplier) {
        if(value){
            this.suppliersDictionary.set(value.id, value);
        }
    }

    addAddress(value: IAddress) {
        if(value){
            this.locationsDictionary.set(value.id, value);
        }
    }

    private handleError(error) {
        console.error('server error ' + error);
        return Observable.throw(error || 'Node.js server error');
    }
}