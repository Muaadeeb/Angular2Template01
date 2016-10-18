// This component contains our page header.

import { Component } from '@angular/core';
import { CarPartsComponent } from './car-parts.component';

// declare the dependecy injector here at the top level so all childern will have access.
import { RacingDataService } from './racing-data-service';
import { HttpModule } from '@angular/http';
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
        <car-parts></car-parts>`,
    providers: [RacingDataService, HttpModule]  // Must register the dependency injector as a provider so it can be used.
})

// export is a keyword that tells angular this class can be used as an import somewhere else.
export class AppComponent {
    title = 'Ultra Racing';
}
