"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductFilterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent() {
        this.filterEvent = new core_1.EventEmitter();
        this.filterForm = new forms_1.FormGroup({
            nameFilter: new forms_1.FormControl(''),
            priceFilter: new forms_1.FormControl('')
        });
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterForm.valueChanges.subscribe(function (filterValues) {
            var productsFiltered = [];
            rxjs_1.from(_this.products).pipe(operators_1.filter(function (item) {
                return item.name.includes(filterValues.nameFilter) &&
                    (filterValues.priceFilter !== '' ? item.price <= filterValues.priceFilter : true);
            })).subscribe({
                next: function (p) { return productsFiltered.push(p); },
                error: function (err) { return console.error(err); },
                complete: function () { return _this.filterEvent.emit(productsFiltered); }
            });
        });
    };
    __decorate([
        core_1.Input()
    ], ProductFilterComponent.prototype, "products");
    __decorate([
        core_1.Output()
    ], ProductFilterComponent.prototype, "filterEvent");
    ProductFilterComponent = __decorate([
        core_1.Component({
            selector: 'app-product-filter',
            templateUrl: './product-filter.component.html',
            styleUrls: ['./product-filter.component.scss']
        })
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());
exports.ProductFilterComponent = ProductFilterComponent;
