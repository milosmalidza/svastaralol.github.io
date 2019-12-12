import * as tslib_1 from "tslib";
import { Component, HostListener, ViewChild } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
    onScroll(event) {
        this.homeBg1.nativeElement.style.transform = "translateY(" + window.pageYOffset * 0.5 + "px)";
        this.setNavbar();
    }
    setNavbar() {
        var navbar = document.getElementById("navbar");
        if (window.pageYOffset > 0) {
            navbar.classList.add("bg-dark");
        }
        else {
            navbar.classList.remove("bg-dark");
        }
    }
};
tslib_1.__decorate([
    ViewChild('homeBg1', { static: false })
], HomeComponent.prototype, "homeBg1", void 0);
tslib_1.__decorate([
    HostListener('window:scroll', ['$event'])
], HomeComponent.prototype, "onScroll", null);
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map