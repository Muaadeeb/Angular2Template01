import { CARPARTS } from './mocks';

// required/used for dependency injection.
import { Injectable } from '@angular/core';


// now use the declared dependency  injector.
@Injectable()
export class RacingDataService {
    getCarParts() {
        return CARPARTS;
    }
}