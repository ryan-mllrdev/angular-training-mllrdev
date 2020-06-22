import { Injectable } from '@angular/core';
import { BaseDataService } from './base-data.service';
import { HttpClient } from '@angular/common/http';
import { IAddress } from '../shared/interfaces';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LocationDataService extends BaseDataService {

    locationsDictionary = new Map<number, IAddress>();

    constructor(http: HttpClient) {
        super(http);
    }

    getAddresses(): Observable<IAddress[]> {

        // Check if addresses are already loaded
        if (this.locationsDictionary && this.locationsDictionary.size) {
            return of(Array.from(this.locationsDictionary.values()));
        }

        // If not loaded, get it from locations.json from assets
        return this.http.get<IAddress[]>(this.baseUrl + 'locations.json').
        pipe(
            map(addresses => {

                addresses.forEach(item => {

                    // Store all addresses to a dictionary for future reference and easy access
                    this.locationsDictionary.set(item.id, item);
                })

                return addresses;
            }),

            // Handle server error
            catchError(this.handleError)
        );
    }

    getAddressName(id: number): Observable<string> {

        let addr = '';
        this.getAddress(id).subscribe((item: IAddress) => {
            addr = item.name;
        });
        return of(addr);
    }

    getAddress(id: number): Observable<IAddress> {

        let addr: IAddress;
        addr = this.locationsDictionary.get(id);
        if (addr) {
            return of(addr);
        }
        addr = { id: 0, name: ''};
        return of(addr);
    }

    addAddress(value: IAddress) {
        if (value){
            this.locationsDictionary.set(value.id, value);
        }
    }

    deleteAddress(value: number) {
        if (value){
            this.locationsDictionary.delete(value);
        }
    }
}
