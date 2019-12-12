(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<nav id=\"navbar\" class=\"navbar navbar-expand-lg navbar-dark\">\r\n    <a class=\"navbar-brand nav-white-color\" routerLink=\"\">\r\n      m-booking\r\n    </a>\r\n  \r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n  \r\n    <div class=\"collapse navbar-collapse\" [ngClass]=\"{'show' : navbarOpen}\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-white-color\" href=\"#\">LogIn</a>\r\n        </li>\r\n  \r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link nav-white-color\" routerLink=\"/register\">Register</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n<div>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n  \r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-full\">\n    <div class=\"row home-splash d-flex align-content-center justify-content-center\">\n        <div class=\"home-splash-bg-holder\">\n            <div #homeBg1 class=\"home-splash-bg\"></div>\n        </div>\n        <div class=\"dark-layer\"></div>\n        <div class=\"splash-text\" style=\"width: 100%;text-align: center;\"><span style=\"font-size: 0px;\">&nbsp;</span>m-booking</div>\n        <div class=\"explore-button\"><span style=\"font-size: 0px;\">&nbsp;</span>EXPLORE</div>\n    </div>\n\n    <div class=\"blank-row\"></div>\n\n    <div class=\"row category-1\">\n        <div #homeBg2Holder class=\"col-md-4 col-lg-5 category-1-image-holder order-2 order-md-1\">\n            <div #homeBg2 class=\"category-1-image\"></div>\n            <div class=\"dark-layer-blue\"></div>\n        </div>\n        <div class=\"col-md-8 col-lg-7 basic-column order-1 order-md-2\">\n            <div class=\"category-text-indicator indicator-position-left indicator-text-align-left\">\n                SPORT\n            </div>\n\n            <div class=\"category-1-text-holder d-flex justify-content-center align-items-center\">\n                <div class=\"category-1-text\">\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n                        Nunc vestibulum aliquet tortor sed vulputate. \n                        Praesent eget interdum nisl, pulvinar dignissim ipsum.\n                        Aliquam id diam ac nulla pharetra bibendum. \n                        Maecenas sed nunc vehicula, egestas ligula a, \n                        posuere libero. Ut dolor mi, varius eleifend fermentum ut,\n                        aliquam sit amet purus. Proin ultrices, tortor ac varius \n                        sagittis, mi eros tempus mauris, maximus consequat sapien sem \n                        sit amet ex. <br><br> Quisque tempus quam vitae mollis posuere. Morbi et \n                        mollis eros. Donec quis faucibus nulla. Curabitur sem quam, facilisis \n                        vestibulum aliquet eget, rhoncus sit amet augue. Mauris feugiat ex in est \n                        scelerisque, non faucibus mi tempus. Mauris vitae dignissim enim, eu pharetra eros.\n                        Ut eu sollicitudin tellus, id fringilla risus. Pellentesque quam odio, sollicitudin \n                        sodales metus eget, commodo ornare ex. Pellentesque enim magna, fermentum accumsan \n                        purus in, ultrices imperdiet est.\n                </div>\n            </div>\n            <div class=\"category-number-indicator indicator-position-right indicator-text-align-right\">\n                1\n            </div>\n        </div>\n    </div>\n\n    <div class=\"blank-row\"></div>\n\n    <div class=\"row category-1\">\n            <div class=\"col-md-8 col-lg-7 basic-column\">\n                    <div class=\"category-text-indicator indicator-position-left indicator-text-align-left\">\n                        CULTURE\n                    </div>\n\n                    <div class=\"category-1-text-holder d-flex justify-content-center align-items-center\">\n                        <div class=\"category-1-text\">\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n                                Nunc vestibulum aliquet tortor sed vulputate. \n                                Praesent eget interdum nisl, pulvinar dignissim ipsum.\n                                Aliquam id diam ac nulla pharetra bibendum. \n                                Maecenas sed nunc vehicula, egestas ligula a, \n                                posuere libero. Ut dolor mi, varius eleifend fermentum ut,\n                                aliquam sit amet purus. Proin ultrices, tortor ac varius \n                                sagittis, mi eros tempus mauris, maximus consequat sapien sem \n                                sit amet ex. <br><br> Quisque tempus quam vitae mollis posuere. Morbi et \n                                mollis eros. Donec quis faucibus nulla. Curabitur sem quam, facilisis \n                                vestibulum aliquet eget, rhoncus sit amet augue. Mauris feugiat ex in est \n                                scelerisque, non faucibus mi tempus. Mauris vitae dignissim enim, eu pharetra eros.\n                                Ut eu sollicitudin tellus, id fringilla risus. Pellentesque quam odio, sollicitudin \n                                sodales metus eget, commodo ornare ex. Pellentesque enim magna, fermentum accumsan \n                                purus in, ultrices imperdiet est.\n                        </div>\n                    </div>\n                    <div class=\"category-number-indicator indicator-position-left indicator-text-align-left\">\n                        2\n                    </div>\n                </div>\n        <div #homeBg3Holder class=\"col-md-4 col-lg-5 category-1-image-holder\">\n            <div #homeBg3 class=\"category-2-image\"></div>\n            <div class=\"dark-layer-blue\"></div>\n        </div>\n        \n    </div>\n\n    <div class=\"blank-row\"></div>\n\n    <div class=\"row category-1\">\n        <div #homeBg4Holder class=\"col-md-4 col-lg-5 category-1-image-holder order-2 order-md-1\">\n            <div #homeBg4 class=\"category-3-image\"></div>\n            <div class=\"dark-layer-blue\"></div>\n        </div>\n        <div class=\"col-md-8 col-lg-7 basic-column order-1 order-md-2\">\n            <div class=\"category-text-indicator indicator-position-left indicator-text-align-left\">\n                ENTERTAINMENT\n            </div>\n\n            <div class=\"category-1-text-holder d-flex justify-content-center align-items-center\">\n                <div class=\"category-1-text\">\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n                        Nunc vestibulum aliquet tortor sed vulputate. \n                        Praesent eget interdum nisl, pulvinar dignissim ipsum.\n                        Aliquam id diam ac nulla pharetra bibendum. \n                        Maecenas sed nunc vehicula, egestas ligula a, \n                        posuere libero. Ut dolor mi, varius eleifend fermentum ut,\n                        aliquam sit amet purus. Proin ultrices, tortor ac varius \n                        sagittis, mi eros tempus mauris, maximus consequat sapien sem \n                        sit amet ex. <br><br> Quisque tempus quam vitae mollis posuere. Morbi et \n                        mollis eros. Donec quis faucibus nulla. Curabitur sem quam, facilisis \n                        vestibulum aliquet eget, rhoncus sit amet augue. Mauris feugiat ex in est \n                        scelerisque, non faucibus mi tempus. Mauris vitae dignissim enim, eu pharetra eros.\n                        Ut eu sollicitudin tellus, id fringilla risus. Pellentesque quam odio, sollicitudin \n                        sodales metus eget, commodo ornare ex. Pellentesque enim magna, fermentum accumsan \n                        purus in, ultrices imperdiet est.\n                </div>\n            </div>\n            <div class=\"category-number-indicator indicator-position-right indicator-text-align-right\">\n                3\n            </div>\n        </div>\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>register works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
            var routes = [
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar {\r\n    position: fixed;\r\n    width: 100%;\r\n    z-index: 999999;\r\n    padding: 15px;\r\n    transition: .4s;\r\n}\r\n\r\n.navbar-brand {\r\n    letter-spacing: 1px;\r\n    font-size: 16px;\r\n    letter-spacing: 2px;\r\n    font-weight: bold;\r\n    padding-left: 15px !important;\r\n    padding-right: 15px !important;\r\n    border-radius: 20px;\r\n}\r\n\r\n.nav-link {\r\n    font-weight: 500;\r\n    padding-left: 15px !important;\r\n    padding-right: 15px !important;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    margin-right: 25px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.nav-white-color {\r\n    color: rgb(255, 255, 255) !important;\r\n    border: 2px solid white;\r\n    transition: background-color .3s, color .3s;\r\n}\r\n\r\n.nav-white-color:hover {\r\n    color: rgb(0, 0, 0) !important;\r\n    background: white;\r\n}\r\n\r\n.nav-black-color {\r\n    color: rgb(0, 0, 0) !important;\r\n    border: 2px solid black;\r\n    transition: background-color .3s, color .3s;\r\n}\r\n\r\n.nav-black-color:hover {\r\n    color: rgb(255, 255, 255) !important;\r\n    background: black;\r\n}\r\n\r\n.nav-bar-toggler-icon-black {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0, 1.0)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\") !important;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n    .nav-link {\r\n        margin-top: 25px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4UUFBOFE7QUFDbFI7O0FBR0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ubmF2LXdoaXRlLWNvbG9yIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3MsIGNvbG9yIC4zcztcclxufVxyXG5cclxuLm5hdi13aGl0ZS1jb2xvcjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hdi1ibGFjay1jb2xvciB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzLCBjb2xvciAuM3M7XHJcbn1cclxuXHJcbi5uYXYtYmxhY2stY29sb3I6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbi5uYXYtYmFyLXRvZ2dsZXItaWNvbi1ibGFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0ncmdiYSgwLDAsMCwgMS4wKScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgOGgyNE00IDE2aDI0TTQgMjRoMjQnLyUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgfVxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(titleService) {
                    this.titleService = titleService;
                    this.title = "m-booking | Homepage";
                    this.navbarOpen = false;
                    this.setTitle(this.title);
                }
                AppComponent.prototype.setTitle = function (newTitle) {
                    this.titleService.setTitle(newTitle);
                };
                AppComponent.prototype.toggleNavbar = function () {
                    this.navbarOpen = !this.navbarOpen;
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                        _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-full {\r\n    position: relative;\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.home-splash {\r\n    margin: 0 !important;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.home-splash-bg-holder {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.home-splash-bg {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: url('nature-city-bird-wallpaper.jpg') no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.dark-layer-blue {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(1, 28, 49, 0.5);;\r\n}\r\n\r\n.dark-layer {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.splash-text {\r\n    color: white;\r\n    font-size: 6rem;\r\n    font-weight: 600;\r\n    letter-spacing: 25px;\r\n    z-index: 9;\r\n}\r\n\r\n.explore-button {\r\n    margin-top: 50px;\r\n    border-top: 2px solid white;\r\n    border-bottom: 2px solid white;\r\n    color: white;\r\n    font-size: 3rem;\r\n    font-weight: 600;\r\n    letter-spacing: 25px;\r\n    padding: 20px;\r\n    z-index: 9;\r\n    cursor: pointer;\r\n    transition: background-color .5s, color .5s;\r\n}\r\n\r\n.explore-button:hover {\r\n    background: white;\r\n    color: black;\r\n    border-top: 2px solid transparent;\r\n    border-bottom: 2px solid transparent;\r\n}\r\n\r\n.category-1 {\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: gray;\r\n}\r\n\r\n.blank-row {\r\n    height: 20px;\r\n    width: 100%;\r\n    background: #011729;\r\n}\r\n\r\n.category-1-image-holder {\r\n    left: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.category-1-image {\r\n    position: absolute;\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: url('sport-background.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.category-2-image {\r\n    position: absolute;\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: url('cultural-background.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.category-3-image {\r\n    position: absolute;\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: url('entertainment-wallpaper.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.category-1-text-holder {\r\n    background: #011c31;\r\n    height: 100%;\r\n}\r\n\r\n.category-1-text {\r\n    width: 600px;\r\n    text-align: justify;\r\n    font-weight: 600;\r\n    letter-spacing: 1px;\r\n    font-size: 12px;\r\n    line-height: 24px;\r\n    border: 4px solid white;\r\n    padding: 60px;\r\n    color: white;\r\n    z-index: 1;\r\n}\r\n\r\n.category-number-indicator {\r\n    position: absolute;\r\n    bottom: 0;\r\n    font-weight: 700;\r\n    border-bottom: 6px solid white;\r\n    color: white;\r\n    width: 50px;\r\n    padding: 6px;\r\n    margin: 20px;\r\n    font-size: 3rem;\r\n    z-index: 1;\r\n}\r\n\r\n.category-text-indicator {\r\n    position: absolute;\r\n    top: 0;\r\n    font-weight: 600;\r\n    letter-spacing: 5px;\r\n    color: #011829;\r\n    width: 450px;\r\n    padding: 6px;\r\n    margin: 20px;\r\n    font-size: 16rem;\r\n}\r\n\r\n.basic-column {\r\n    height: 100%;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.category-number-indicator.indicator-position-right {\r\n    right: 0;\r\n}\r\n\r\n.category-number-indicator.indicator-position-left {\r\n    left: 0;\r\n}\r\n\r\n.category-number-indicator.indicator-text-align-right {\r\n    text-align: right;\r\n}\r\n\r\n.category-number-indicator.indicator-text-align-left {\r\n    text-align: left;\r\n}\r\n\r\n@media (min-width: 991px) and (max-width: 1440px) {\r\n    .category-1-text {\r\n        font-size: 11px;\r\n        line-height: 20px;\r\n        padding: 40px;\r\n        width: 500px;\r\n    }\r\n\r\n    .category-number-indicator {\r\n        font-size: 2rem;\r\n        border-bottom: 5px solid white;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n\r\n    .category-1-text {\r\n        font-size: 11px;\r\n        line-height: 20px;\r\n        padding: 40px;\r\n        width: 500px;\r\n    }\r\n\r\n    .splash-text {\r\n        font-size: 4.5rem;\r\n        letter-spacing: 20px;\r\n    }\r\n\r\n    .explore-button {\r\n        font-size: 2.5rem;\r\n        letter-spacing: 20px;\r\n    }\r\n\r\n    .category-number-indicator {\r\n        font-size: 1.5rem;\r\n        border-bottom: 4px solid white;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .category-1-image-holder {\r\n        height: 50%;\r\n    }\r\n\r\n    .basic-column {\r\n        height: 50%;\r\n    }\r\n\r\n    .category-1 {\r\n        height: 200vh;\r\n    }\r\n\r\n    .category-number-indicator {\r\n        font-size: 1.2rem;\r\n        border-bottom: 4px solid white;\r\n    }\r\n}\r\n\r\n@media (min-width: 576px) and (max-width: 768px) {\r\n    .splash-text {\r\n        font-size: 3.5rem;\r\n        letter-spacing: 14px;\r\n    }\r\n\r\n    .explore-button {\r\n        font-size: 2rem;\r\n        letter-spacing: 14px;\r\n    }\r\n\r\n    .category-1-text {\r\n        font-size: 9px;\r\n        line-height: 20px;\r\n        padding: 30px;\r\n        width: 440px;\r\n    }\r\n    .category-number-indicator {\r\n        font-size: 1.2rem;\r\n        border-bottom: 4px solid white;\r\n    }\r\n}\r\n\r\n@media (min-width: 0px) and (max-width: 576px) {\r\n    .splash-text {\r\n        font-size: 2.5rem;\r\n        letter-spacing: 6px;\r\n    }\r\n\r\n    .explore-button {\r\n        font-size: 1.5rem;\r\n        letter-spacing: 6px;\r\n    }\r\n\r\n    .category-1-text {\r\n        font-size: 9px;\r\n        line-height: 20px;\r\n        padding: 20px;\r\n        width: 400px;\r\n        border: none;\r\n    }\r\n    .category-number-indicator {\r\n        font-size: 1.1rem;\r\n        border-bottom: 3px solid white;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWiwyREFBMkY7SUFDM0Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGVBQWU7SUFDZiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlEQUFpRjtJQUNqRixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9EQUFvRjtJQUNwRixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdEQUF3RjtJQUN4RixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLDhCQUE4QjtJQUNsQztBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLDhCQUE4QjtJQUNsQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLDhCQUE4QjtJQUNsQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQiw4QkFBOEI7SUFDbEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixZQUFZO1FBQ1osWUFBWTtJQUNoQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLDhCQUE4QjtJQUNsQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZ1bGwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5ob21lLXNwbGFzaCB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmhvbWUtc3BsYXNoLWJnLWhvbGRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ob21lLXNwbGFzaC1iZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvbmF0dXJlLWNpdHktYmlyZC13YWxscGFwZXIuanBnXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5kYXJrLWxheWVyLWJsdWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDI4LCA0OSwgMC41KTs7XHJcbn1cclxuXHJcbi5kYXJrLWxheWVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uc3BsYXNoLXRleHQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAyNXB4O1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG5cclxuLmV4cGxvcmUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzLCBjb2xvciAuNXM7XHJcbn1cclxuXHJcbi5leHBsb3JlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNhdGVnb3J5LTEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogZ3JheTtcclxufVxyXG5cclxuLmJsYW5rLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMwMTE3Mjk7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS0xLWltYWdlLWhvbGRlciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhdGVnb3J5LTEtaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3Nwb3J0LWJhY2tncm91bmQuanBnXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS0yLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9jdWx0dXJhbC1iYWNrZ3JvdW5kLmpwZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktMy1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvZW50ZXJ0YWlubWVudC13YWxscGFwZXIuanBnXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS0xLXRleHQtaG9sZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMTFjMzE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS0xLXRleHQge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktbnVtYmVyLWluZGljYXRvciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktdGV4dC1pbmRpY2F0b3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogIzAxMTgyOTtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZyZW07XHJcbn1cclxuXHJcbi5iYXNpYy1jb2x1bW4ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1udW1iZXItaW5kaWNhdG9yLmluZGljYXRvci1wb3NpdGlvbi1yaWdodCB7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLmNhdGVnb3J5LW51bWJlci1pbmRpY2F0b3IuaW5kaWNhdG9yLXBvc2l0aW9uLWxlZnQge1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLmNhdGVnb3J5LW51bWJlci1pbmRpY2F0b3IuaW5kaWNhdG9yLXRleHQtYWxpZ24tcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1udW1iZXItaW5kaWNhdG9yLmluZGljYXRvci10ZXh0LWFsaWduLWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAuY2F0ZWdvcnktMS10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LW51bWJlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblxyXG4gICAgLmNhdGVnb3J5LTEtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zcGxhc2gtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0LjVyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmV4cGxvcmUtYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcnktbnVtYmVyLWluZGljYXRvciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jYXRlZ29yeS0xLWltYWdlLWhvbGRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhc2ljLWNvbHVtbiB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LTEge1xyXG4gICAgICAgIGhlaWdodDogMjAwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LW51bWJlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zcGxhc2gtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmV4cGxvcmUtYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LTEtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcnktbnVtYmVyLWluZGljYXRvciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5zcGxhc2gtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZXhwbG9yZS1idXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LTEtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNhdGVnb3J5LW51bWJlci1pbmRpY2F0b3Ige1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIH1cclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.setNavbar();
                };
                HomeComponent.prototype.ngAfterViewInit = function () {
                    this.render();
                };
                HomeComponent.prototype.onScroll = function (event) {
                    this.setNavbar();
                };
                HomeComponent.prototype.render = function () {
                    this.homeBg1.nativeElement.style.transform = "translateY(" + window.pageYOffset * 0.5 + "px)";
                    //this.homeBg1.nativeElement.style.backgroundPositionY = window.pageYOffset * 0.5  + "px";
                    var homebg2Offset = this.homeBg2Holder.nativeElement.getBoundingClientRect().top + window.pageYOffset;
                    this.homeBg2.nativeElement.style.transform = "translateY(" + (window.pageYOffset - homebg2Offset) * 0.6 + "px)";
                    var homebg3Offset = this.homeBg3Holder.nativeElement.getBoundingClientRect().top + window.pageYOffset;
                    this.homeBg3.nativeElement.style.transform = "translateY(" + (window.pageYOffset - homebg3Offset) * 0.6 + "px)";
                    var homebg4Offset = this.homeBg4Holder.nativeElement.getBoundingClientRect().top + window.pageYOffset;
                    this.homeBg4.nativeElement.style.transform = "translateY(" + (window.pageYOffset - homebg4Offset) * 0.6 + "px)";
                    requestAnimationFrame(this.render.bind(this));
                };
                HomeComponent.prototype.setNavbar = function () {
                    var navbar = document.getElementById("navbar");
                    var navLinks = document.getElementsByClassName("nav-link");
                    var navBrand = document.getElementsByClassName("navbar-brand")[0];
                    var navBarToggler = document.getElementsByClassName("navbar-toggler-icon")[0];
                    if (window.pageYOffset > 0) {
                        navbar.classList.add("bg-white");
                        navbar.style.boxShadow = "0px 0px 15px 0px rgba(0,0,0,0.9)";
                        navBrand.classList.remove("nav-white-color");
                        navBrand.classList.add("nav-black-color");
                        navBarToggler.classList.add("nav-bar-toggler-icon-black");
                        for (var i = 0; i < navLinks.length; i++) {
                            navLinks[i].classList.remove("nav-white-color");
                            navLinks[i].classList.add("nav-black-color");
                        }
                    }
                    else {
                        navbar.classList.remove("bg-white");
                        navbar.style.boxShadow = "0px 0px 15px 0px rgba(0,0,0,0.0)";
                        navBrand.classList.remove("nav-black-color");
                        navBrand.classList.add("nav-white-color");
                        navBarToggler.classList.remove("nav-bar-toggler-icon-black");
                        for (var i = 0; i < navLinks.length; i++) {
                            navLinks[i].classList.remove("nav-black-color");
                            navLinks[i].classList.add("nav-white-color");
                        }
                    }
                };
                return HomeComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('homeBg1', { static: false })
            ], HomeComponent.prototype, "homeBg1", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('homeBg2Holder', { static: false })
            ], HomeComponent.prototype, "homeBg2Holder", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('homeBg2', { static: false })
            ], HomeComponent.prototype, "homeBg2", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('homeBg3Holder', { static: false })
            ], HomeComponent.prototype, "homeBg3Holder", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('homeBg3', { static: false })
            ], HomeComponent.prototype, "homeBg3", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('homeBg4Holder', { static: false })
            ], HomeComponent.prototype, "homeBg4Holder", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('homeBg4', { static: false })
            ], HomeComponent.prototype, "homeBg4", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
            ], HomeComponent.prototype, "onScroll", null);
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/register/register.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/register/register.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/register/register.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/register/register.component.ts ***!
          \************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent() {
                }
                RegisterComponent.prototype.ngOnInit = function () {
                };
                return RegisterComponent;
            }());
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\user\Desktop\svastaralol_github\svastaralol.github.io\frontend\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map