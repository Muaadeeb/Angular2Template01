import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/';
import { AppComponent }   from './app.component';
import { CarPartsComponent } from './car-parts.component';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, CarPartsComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
