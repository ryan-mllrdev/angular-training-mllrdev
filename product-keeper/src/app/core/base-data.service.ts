import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export abstract class BaseDataService {

    protected baseUrl: string = 'assets/';

    constructor(protected http: HttpClient){}
    protected handleError(error) {
        console.error('server error ' + error);
        return Observable.throw(error || 'Node.js server error');
    }
}