"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var receipes_component_1 = require("./recipes/receipes.component");
var receipe_list_component_1 = require("./recipes/receipe-list/receipe-list.component");
var receipe_details_component_1 = require("./recipes/receipe-details/receipe-details.component");
var receipe_item_component_1 = require("./recipes/receipe-list/receipe-item/receipe-item.component");
var shopping_list_component_1 = require("./shopping-list/shopping-list.component");
var shopping_edit_component_1 = require("./shopping-list/shopping-edit/shopping-edit.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, receipes_component_1.ReceipesComponent, receipe_list_component_1.ReceipeListComponent, receipe_details_component_1.ReceipeDetailsComponent, receipe_item_component_1.ReceipeItemComponent, receipe_item_component_1.ReceipeItemComponent, shopping_list_component_1.ShoppingListComponent, shopping_edit_component_1.ShoppingEditComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpClientModule],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
