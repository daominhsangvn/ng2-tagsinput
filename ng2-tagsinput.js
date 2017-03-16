var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2TagsInputItem } from "./lib/ng2-tagsinput-item";
import { Ng2TagsInput } from "./lib/ng2-tagsinput";
var Ng2TagsInputModule = (function () {
    function Ng2TagsInputModule() {
    }
    return Ng2TagsInputModule;
}());
Ng2TagsInputModule = __decorate([
    NgModule({
        declarations: [
            Ng2TagsInputItem,
            Ng2TagsInput
        ],
        exports: [
            Ng2TagsInputItem,
            Ng2TagsInput
        ],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ]
    })
], Ng2TagsInputModule);
export { Ng2TagsInputModule };
