import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IProduct } from '../shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/';

    constructor(private http: HttpClient) {}

    getProducts() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.baseUrl + 'products.json').
        pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error) {
        console.error('server error ' + error);
        return Observable.throw(error || 'Node.js server error');
    }
}