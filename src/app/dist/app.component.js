"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var Account_1 = require("./../models/Account");
var Address_1 = require("./../models/Address");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tp02-uhl-thomas';
    }
    AppComponent.prototype.onAccountCreated = function ($event) {
        this.account = $event;
    };
    AppComponent.prototype.onAccountDeleted = function ($event) {
        this.account = null;
    };
    AppComponent.prototype.ngOnInit = function () {
        var address = new Address_1.Address('12 Banana st.', '12345', 'Banana city', 'Banana Island');
        this.account = new Account_1.Account('Doe', 'John', 'Monsieur', address, '+33 1 22 33 44 55', 'john.doe@banana.com', 'the login', 'the password');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
