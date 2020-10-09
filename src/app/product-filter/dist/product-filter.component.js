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
var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent() {
        this.filterEvent = new core_1.EventEmitter();
        this.filterForm = new forms_1.FormGroup({
            nameFilter: new forms_1.FormControl(''),
            priceFilterLE: new forms_1.FormControl(''),
            priceFilterGE: new forms_1.FormControl('')
        });
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
        this.filterEvent.emit(this.filterForm.valueChanges);
    };
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
