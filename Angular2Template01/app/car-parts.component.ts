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
    //template: `
        //<p>There are {{totalCarParts()}} total parts in stock.</p>
        //<p> {{showDate | date: 'medium'}} </p>
        //<ul>
        //    <li *ngFor="let carPart of carParts">
        //        <h2>{{carPart.name | uppercase}}</h2>
        //        <p class="description">{{carPart.description}}</p>
        //        <p class="price">{{carPart.price | currency: 'EUR':true}}</p>
        //        <p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in Stock</p>
        //        <p *ngIf="carPart.inStock === 0">Out of Stock</p>
        //        <p>Date available: {{carPart.today | date: 'medium'}}</p>
        //    </li>
        //</ul>`,
        //styles: [`
        //    .description {
        //        color: #444;
        //        font-size: small;
        //    }
        //    .price {
        //        font-weight: bold;
        //    }
        //`]
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
    totalCarParts() {
        let sum = 0;

        for (let carPart of this.carParts) {
            sum += carPart.inStock;
        }

        return sum;
    }
    showDate = Date.now();
}
