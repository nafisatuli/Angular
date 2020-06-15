"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var receipe_model_1 = require("../receipe.model");
var ReceipeListComponent = /** @class */ (function () {
    function ReceipeListComponent() {
        // using receipe.model.ts class
        this.recipes = [
            new receipe_model_1.Recipe('A Test Recipe', 'This is simply a test', 'https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg'),
            new receipe_model_1.Recipe('A Test Recipe', 'This is simply a test', 'https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg'),
        ];
    }
    ReceipeListComponent.prototype.ngOnInit = function () { };
    ReceipeListComponent = __decorate([
        core_1.Component({
            selector: 'app-receipe-list',
            templateUrl: './receipe-list.component.html',
            styleUrls: ['./receipe-list.component.scss']
        })
    ], ReceipeListComponent);
    return ReceipeListComponent;
}());
exports.ReceipeListComponent = ReceipeListComponent;

//# sourceMappingURL=receipe-list.component.js.map
