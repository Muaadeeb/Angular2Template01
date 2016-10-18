// required/used for dependency injection.
import { Injectable } from '@angular/core';
import { CarPart } from './car-part';
import { Http } from '@angular/http';
import 'rxjs/add/operator/';
import './rxjs-operators';
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/mapTo';

// now use the declared dependency  injector.
@Injectable()
export class RacingDataService {

    constructor(private http: Http){}

    getCarParts() {
        return this.http.get("app/car-parts.json")
            .map(response => (response.json().data as CarPart[]));
    }
}