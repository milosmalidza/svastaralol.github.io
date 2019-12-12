import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = "m-booking | Homepage";
        this.navbarOpen = false;
        this.setTitle(this.title);
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map