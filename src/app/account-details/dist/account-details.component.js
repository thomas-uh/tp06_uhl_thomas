"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountDetailsComponent = void 0;
var core_1 = require("@angular/core");
var AccountDetailsComponent = /** @class */ (function () {
    function AccountDetailsComponent() {
        this.accountDeleted = new core_1.EventEmitter();
    }
    AccountDetailsComponent.prototype.onClick = function ($event) {
        this.accountDeleted.emit(this.account);
    };
    __decorate([
        core_1.Input()
    ], AccountDetailsComponent.prototype, "account");
    __decorate([
        core_1.Output()
    ], AccountDetailsComponent.prototype, "accountDeleted");
    AccountDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-account-details',
            templateUrl: './account-details.component.html',
            styleUrls: ['./account-details.component.scss']
        })
    ], AccountDetailsComponent);
    return AccountDetailsComponent;
}());
exports.AccountDetailsComponent = AccountDetailsComponent;
