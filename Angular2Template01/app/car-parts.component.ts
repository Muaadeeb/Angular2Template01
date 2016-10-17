// This contains our list of car parts.
// Mind blowing stuff here..note the Component is scoped but the css is now also scoped as well. So we could use the same css Price class
//      in multiple Components and it would only be scoped to its local use.  Crazy - kind of cool.  Basically it is being treated as a 
//      property.  Run the app and then do a F12 - then element selector to view source on the html to see 'ghost angular' tags appear...which explains how this is working.

import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
    selector: 'car-parts',
    templateUrl: 'app/car-parts.component.html',
    styleUrls: ['app/car-parts.component.css']
})

// export is a keyword that tells angular this class can be used as an import somewhere else.
// the CarPart[] tells typeScript to treat this like an array of the model CarPart which means it now has active type-checking/validation.
export class CarPartsComponent {
    carParts: CarPart[];

    
    // ngOnInit is invoked after the component is constructed and is the best place to initialize property values.
    //   We could have done this in the constructor, but that'd be harder to test.
    ngOnInit() {
        this.carParts = CARPARTS;
    }

    upQuantity(carPart) {
        if (carPart.quantity < carPart.inStock) carPart.quantity++;
    }

    downQuantity(carPart) {
        if (carPart.quantity !== 0) carPart.quantity--;
    }

    totalCarParts() {
        let sum = 0;

        for (let carPart of this.carParts) {
            sum += carPart.inStock;
        }

        return sum;
    }
}
