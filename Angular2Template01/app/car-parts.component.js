// This contains our list of car parts.
// Mind blowing stuff here..note the Component is scoped but the css is now also scoped as well. So we could use the same css Price class
//      in multiple Components and it would only be scoped to its local use.  Crazy - kind of cool.  Basically it is being treated as a 
//      property.  Run the app and then do a F12 - then element selector to view source on the html to see 'ghost angular' tags appear...which explains how this is working.
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mocks_1 = require('./mocks');
var CarPartsComponent = (function () {
    function CarPartsComponent() {
    }
    // ngOnInit is invoked after the component is constructed and is the best place to initialize property values.
    //   We could have done this in the constructor, but that'd be harder to test.
    CarPartsComponent.prototype.ngOnInit = function () {
        this.carParts = mocks_1.CARPARTS;
    };
    CarPartsComponent.prototype.upQuantity = function (carPart) {
        if (carPart.quantity < carPart.inStock)
            carPart.quantity++;
    };
    CarPartsComponent.prototype.downQuantity = function (carPart) {
        if (carPart.quantity !== 0)
            carPart.quantity--;
    };
    CarPartsComponent.prototype.totalCarParts = function () {
        var sum = 0;
        for (var _i = 0, _a = this.carParts; _i < _a.length; _i++) {
            var carPart = _a[_i];
            sum += carPart.inStock;
        }
        return sum;
    };
    CarPartsComponent = __decorate([
        core_1.Component({
            selector: 'car-parts',
            templateUrl: 'app/car-parts.component.html',
            styleUrls: ['app/car-parts.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CarPartsComponent);
    return CarPartsComponent;
}());
exports.CarPartsComponent = CarPartsComponent;
//# sourceMappingURL=car-parts.component.js.map