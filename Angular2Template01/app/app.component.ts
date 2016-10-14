// This component contains our page header.

import { Component } from '@angular/core';
import { CarPartsComponent } from './car-parts.component';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
        <car-parts></car-parts>`
})

// export is a keyword that tells angular this class can be used as an import somewhere else.
export class AppComponent {
    title = 'Ultra Racing';
}
