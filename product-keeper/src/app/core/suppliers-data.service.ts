import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ISupplier } from '../shared/interfaces';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseDataService } from './base-data.service';
import { LocationDataService } from './locations-data.service';

@Injectable({
    providedIn: 'root'
})
export class SuppliersDataService extends BaseDataService {

    suppliersDictionary = new Map<number, ISupplier>();

    /**
     *
     */
    constructor(http: HttpClient, private locationDataService: LocationDataService) {
        super(http);
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
                    this.locationDataService.getAddressName(item.addressId)
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

    getSupplierName(id: number): Observable<string> {

        let supName: string = "";
        this.getSupplier(id).subscribe((supplier:ISupplier)=>{
            if(supplier)
                supName = supplier.name;
        });
        return of(supName);
    }

    addSupplier(value: ISupplier) {
        if(value){
            this.suppliersDictionary.set(value.id, value);
        }
    }

    deleteSupplier(value: number) {
        if(value){
            this.suppliersDictionary.delete(value);
        }
    }
}