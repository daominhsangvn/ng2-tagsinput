"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_tagsinput_item_1 = require("./lib/ng2-tagsinput-item");
var ng2_tagsinput_1 = require("./lib/ng2-tagsinput");
var Ng2TagsInputModule = (function () {
    function Ng2TagsInputModule() {
    }
    return Ng2TagsInputModule;
}());
Ng2TagsInputModule = __decorate([
    core_1.NgModule({
        declarations: [
            ng2_tagsinput_item_1.Ng2TagsInputItem,
            ng2_tagsinput_1.Ng2TagsInput
        ],
        exports: [
            ng2_tagsinput_item_1.Ng2TagsInputItem,
            ng2_tagsinput_1.Ng2TagsInput
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ]
    })
], Ng2TagsInputModule);
exports.Ng2TagsInputModule = Ng2TagsInputModule;