"use strict";
exports.__esModule = true;
exports.Address = void 0;
var Address = /** @class */ (function () {
    function Address(street, zipCode, city, country) {
        this.street = street;
        this.zipCode = zipCode;
        this.city = city;
        this.country = country;
    }
    Address.prototype.toString = function () {
        return this.street + " " + this.zipCode + " " + this.city + ", " + this.country;
    };
    ;
    return Address;
}());
exports.Address = Address;
