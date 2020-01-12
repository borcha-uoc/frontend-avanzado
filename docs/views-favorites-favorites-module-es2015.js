(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-favorites-favorites-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/favorites/favorites.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/favorites/favorites.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  favorites works!\n</p>\n");

/***/ }),

/***/ "./src/app/views/favorites/favorites-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/favorites/favorites-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesRoutingModule", function() { return FavoritesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let FavoritesRoutingModule = class FavoritesRoutingModule {
};
FavoritesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FavoritesRoutingModule);



/***/ }),

/***/ "./src/app/views/favorites/favorites.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/favorites/favorites.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/favorites/favorites.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/favorites/favorites.component.ts ***!
  \********************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FavoritesComponent = class FavoritesComponent {
    constructor() { }
    ngOnInit() {
    }
};
FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/favorites/favorites.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.component.scss */ "./src/app/views/favorites/favorites.component.scss")).default]
    })
], FavoritesComponent);



/***/ }),

/***/ "./src/app/views/favorites/favorites.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/favorites/favorites.module.ts ***!
  \*****************************************************/
/*! exports provided: FavoritesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesModule", function() { return FavoritesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites-routing.module */ "./src/app/views/favorites/favorites-routing.module.ts");
/* harmony import */ var _favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favorites.component */ "./src/app/views/favorites/favorites.component.ts");





let FavoritesModule = class FavoritesModule {
};
FavoritesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_3__["FavoritesRoutingModule"]
        ]
    })
], FavoritesModule);



/***/ })

}]);
//# sourceMappingURL=views-favorites-favorites-module-es2015.js.map