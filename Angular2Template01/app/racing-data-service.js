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
// required/used for dependency injection.
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/');
require('./rxjs-operators');
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
// now use the declared dependency  injector.
var RacingDataService = (function () {
    function RacingDataService(http) {
        this.http = http;
    }
    RacingDataService.prototype.getCarParts = function () {
        return this.http.get("app/car-parts.json")
            .map(function (response) { return (response.json().data); });
    };
    RacingDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RacingDataService);
    return RacingDataService;
}());
exports.RacingDataService = RacingDataService;
//# sourceMappingURL=racing-data-service.js.map