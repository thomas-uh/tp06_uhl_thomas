"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var custom_pipes_module_1 = require("../pipes/custom-pipes.module");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var account_creation_form_component_1 = require("./account-creation-form/account-creation-form.component");
var account_details_component_1 = require("./account-details/account-details.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var custom_directives_module_1 = require("src/directives/custom-directives.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                account_creation_form_component_1.AccountCreationFormComponent,
                account_details_component_1.AccountDetailsComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ng_bootstrap_1.NgbModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                custom_pipes_module_1.CustomPipes,
                custom_directives_module_1.CustomDirectives
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
