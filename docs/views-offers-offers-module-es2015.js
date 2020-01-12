(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-offers-offers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/offers/offers-detail/offers-detail.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/offers/offers-detail/offers-detail.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"mat-h2\">\n  Offers Detail\n</h2>\n\n<pre>{{ offer | json }} </pre>\n\n<button mat-raised-button color=\"primary\" *ngIf=\"!isSubscribe()\" (click)=\"subscribe()\">\n  Inscribirse\n</button>\n<button mat-raised-button color=\"primary\" *ngIf=\"isSubscribe()\" (click)=\"unsubscribe()\">\n  Eliminar oferta\n</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/offers/offers-list/offers-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/offers/offers-list/offers-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 class=\"mat-h3\">Cumple con la Titulación (Familia)</h3>\n\n<mat-table [dataSource]=\"offersStudy\" class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"job.name\">\n    <mat-header-cell *matHeaderCellDef> Puesto </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.job.name }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"company.name\">\n    <mat-header-cell *matHeaderCellDef> Empresa </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.company.name }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"category.name\">\n    <mat-header-cell *matHeaderCellDef> Familia </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.category.name }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"date\">\n    <mat-header-cell *matHeaderCellDef> Fecha </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.date }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"province.name\">\n    <mat-header-cell *matHeaderCellDef> Provincia </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.province.name }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"municipe.name\">\n    <mat-header-cell *matHeaderCellDef> Municipio </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.municipe.name }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"subscribe\">\n    <mat-header-cell *matHeaderCellDef> Inscrito </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.subscribe ? 'Sí' : 'No' }} </mat-cell>\n  </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n    <mat-header-cell *matHeaderCellDef> Acciones </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\">\n      <a style=\"cursor:pointer\" [routerLink]=\"[offer.id]\"> <mat-icon class=\"sidenav-icon\">input</mat-icon> </a>\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n\n\n<h3 class=\"mat-h3\">Otras Ofertas</h3>\n\n\n<mat-table [dataSource]=\"offersOther\" class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"job.name\">\n    <mat-header-cell *matHeaderCellDef> Puesto </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.job.name }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"company.name\">\n    <mat-header-cell *matHeaderCellDef> Empresa </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.company.name }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"category.name\">\n    <mat-header-cell *matHeaderCellDef> Familia </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.category.name }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"date\">\n    <mat-header-cell *matHeaderCellDef> Fecha </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.date }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"province.name\">\n    <mat-header-cell *matHeaderCellDef> Provincia </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.province.name }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"municipe.name\">\n    <mat-header-cell *matHeaderCellDef> Municipio </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.municipe.name }} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedOtherColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedOtherColumns;\"></mat-row>\n</mat-table>\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/offers/offers-profile/offers-profile.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/offers/offers-profile/offers-profile.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 class=\"mat-h3\">Mis Ofertas</h3>\n\n<mat-table [dataSource]=\"offers\" class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"job.name\">\n    <mat-header-cell *matHeaderCellDef> Puesto </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.job.name }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"company.name\">\n    <mat-header-cell *matHeaderCellDef> Empresa </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.company.name }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"category.name\">\n    <mat-header-cell *matHeaderCellDef> Familia </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.category.name }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"date\">\n    <mat-header-cell *matHeaderCellDef> Fecha </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.date }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"province.name\">\n    <mat-header-cell *matHeaderCellDef> Provincia </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.province.name }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"municipe.name\">\n    <mat-header-cell *matHeaderCellDef> Municipio </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\"> {{ offer.municipe.name }} </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <mat-header-cell *matHeaderCellDef> Acciones </mat-header-cell>\n    <mat-cell *matCellDef=\"let offer\">\n      <a style=\"cursor:pointer\" [routerLink]=\"['/admin/offers/', offer.id]\"> <mat-icon class=\"sidenav-icon\">input</mat-icon> </a>\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/offers/offers.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/offers/offers.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"mat-h2\">Offers</h2>\n\n<app-offers-list\n  [user]=\"user$ | async\"\n  [offers]=\"offers$ | async\"\n  *ngIf=\"isOffersList\"\n></app-offers-list>\n<app-offers-profile\n  [user]=\"user$ | async\"\n  *ngIf=\"!isOffersList\"\n></app-offers-profile>\n");

/***/ }),

/***/ "./src/app/views/offers/offers-detail/offers-detail.component-wrapper.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/offers/offers-detail/offers-detail.component-wrapper.ts ***!
  \*******************************************************************************/
/*! exports provided: OffersDetailWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersDetailWrapperComponent", function() { return OffersDetailWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_shared_states_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/states/user */ "./src/app/shared/states/user/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_states_offers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/states/offers */ "./src/app/shared/states/offers/index.ts");
/* harmony import */ var src_app_shared_states_user_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/states/user/actions */ "./src/app/shared/states/user/actions/index.ts");








let OffersDetailWrapperComponent = class OffersDetailWrapperComponent {
    constructor(store$, route) {
        this.store$ = store$;
        this.route = route;
        this.user$ = this.store$.select(src_app_shared_states_user__WEBPACK_IMPORTED_MODULE_4__["getProfile"]);
        this.offer$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(({ id }) => Number.parseInt(id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(id => this.store$.select(Object(src_app_shared_states_offers__WEBPACK_IMPORTED_MODULE_6__["getOfferByID"])(id))));
    }
    onSubscribeOffer(user) {
        this.store$.dispatch(new src_app_shared_states_user_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateUser"](user));
    }
    onUnsubscribeOffer(user) {
        this.store$.dispatch(new src_app_shared_states_user_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateUser"](user));
    }
};
OffersDetailWrapperComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
OffersDetailWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers-detail-wrapper',
        template: `
    <app-offers-detail
      [user]="user$ | async"
      [offer]="offer$ | async"
      (subscribeOffer)="onSubscribeOffer($event)"
      (unsubscribeOffer)="onUnsubscribeOffer($event)"
    ></app-offers-detail>
  `
    })
], OffersDetailWrapperComponent);



/***/ }),

/***/ "./src/app/views/offers/offers-detail/offers-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/views/offers/offers-detail/offers-detail.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL29mZmVycy9vZmZlcnMtZGV0YWlsL29mZmVycy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/offers/offers-detail/offers-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/offers/offers-detail/offers-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: OffersDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersDetailComponent", function() { return OffersDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OffersDetailComponent = class OffersDetailComponent {
    constructor() {
        this.subscribeOffer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unsubscribeOffer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    subscribe() {
        const offers = [...this.user.offers, this.offer];
        const user = Object.assign({}, this.user, { offers });
        this.subscribeOffer.emit(user);
    }
    unsubscribe() {
        const offers = this.user.offers.filter(_offer => _offer.id !== this.offer.id);
        const user = Object.assign({}, this.user, { offers });
        this.unsubscribeOffer.emit(user);
    }
    isSubscribe() {
        return !!(this.user && this.user.offers.find(_offer => this.offer.id === _offer.id));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OffersDetailComponent.prototype, "offer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OffersDetailComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], OffersDetailComponent.prototype, "subscribeOffer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], OffersDetailComponent.prototype, "unsubscribeOffer", void 0);
OffersDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offers-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/offers/offers-detail/offers-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offers-detail.component.scss */ "./src/app/views/offers/offers-detail/offers-detail.component.scss")).default]
    })
], OffersDetailComponent);



/***/ }),

/***/ "./src/app/views/offers/offers-list/offers-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/offers/offers-list/offers-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: OffersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersListComponent", function() { return OffersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OffersListComponent = class OffersListComponent {
    constructor() {
        this.displayedColumns = ['job.name', 'company.name', 'category.name', 'date', 'province.name', 'municipe.name', 'subscribe', 'actions'];
        this.displayedOtherColumns = ['job.name', 'company.name', 'category.name', 'date', 'province.name', 'municipe.name'];
        this.offersStudy = [];
        this.offersOther = [];
    }
    ngOnChanges(changes) {
        if (changes.user && changes.offers) {
            this.selectOffers();
        }
    }
    selectOffers() {
        const studiesOfUser = this.user.studies;
        const offersOfUser = this.user.offers;
        this.offersStudy = this.offers
            .filter(offer => studiesOfUser.some(study => study.uid === offer.category.uid))
            .map(offer => {
            const offerUser = !!offersOfUser.find(_offerUser => _offerUser.id === offer.id);
            return Object.assign({}, offer, { subscribe: offerUser });
        });
        this.offersOther = this.offers.filter(offer => studiesOfUser.every(study => study.uid !== offer.category.uid));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OffersListComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OffersListComponent.prototype, "offers", void 0);
OffersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offers-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/offers/offers-list/offers-list.component.html")).default
    })
], OffersListComponent);



/***/ }),

/***/ "./src/app/views/offers/offers-profile/offers-profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/offers/offers-profile/offers-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: OffersProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersProfileComponent", function() { return OffersProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OffersProfileComponent = class OffersProfileComponent {
    constructor() {
        this.displayedColumns = ['job.name', 'company.name', 'category.name', 'date', 'province.name', 'municipe.name', 'actions'];
        this.offers = [];
    }
    ngOnChanges() {
        this.offers = this.user.offers;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OffersProfileComponent.prototype, "user", void 0);
OffersProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offers-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/offers/offers-profile/offers-profile.component.html")).default
    })
], OffersProfileComponent);



/***/ }),

/***/ "./src/app/views/offers/offers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/offers/offers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OffersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersRoutingModule", function() { return OffersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _offers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers.component */ "./src/app/views/offers/offers.component.ts");
/* harmony import */ var _offers_detail_offers_detail_component_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offers-detail/offers-detail.component-wrapper */ "./src/app/views/offers/offers-detail/offers-detail.component-wrapper.ts");





const routes = [
    {
        path: '',
        component: _offers_component__WEBPACK_IMPORTED_MODULE_3__["OffersComponent"]
    },
    {
        path: 'my-offers',
        component: _offers_component__WEBPACK_IMPORTED_MODULE_3__["OffersComponent"],
        data: { my_offers: true }
    },
    {
        path: ':id',
        component: _offers_detail_offers_detail_component_wrapper__WEBPACK_IMPORTED_MODULE_4__["OffersDetailWrapperComponent"]
    }
];
let OffersRoutingModule = class OffersRoutingModule {
};
OffersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OffersRoutingModule);



/***/ }),

/***/ "./src/app/views/offers/offers.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/offers/offers.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL29mZmVycy9vZmZlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/views/offers/offers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/offers/offers.component.ts ***!
  \**************************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_shared_states_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/states/user */ "./src/app/shared/states/user/index.ts");
/* harmony import */ var src_app_shared_states_offers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/states/offers */ "./src/app/shared/states/offers/index.ts");






let OffersComponent = class OffersComponent {
    constructor(route, store$) {
        this.route = route;
        this.store$ = store$;
        this.isOffersList = true;
        this.route.data.subscribe(params => (this.isOffersList = !params.my_offers));
        this.user$ = this.store$.select(src_app_shared_states_user__WEBPACK_IMPORTED_MODULE_4__["getProfile"]);
        this.offers$ = this.store$.select(src_app_shared_states_offers__WEBPACK_IMPORTED_MODULE_5__["getOffers"]);
    }
    ngOnInit() { }
};
OffersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
OffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/offers/offers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offers.component.scss */ "./src/app/views/offers/offers.component.scss")).default]
    })
], OffersComponent);



/***/ }),

/***/ "./src/app/views/offers/offers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/offers/offers.module.ts ***!
  \***********************************************/
/*! exports provided: OffersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersModule", function() { return OffersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offers-routing.module */ "./src/app/views/offers/offers-routing.module.ts");
/* harmony import */ var _offers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offers.component */ "./src/app/views/offers/offers.component.ts");
/* harmony import */ var _offers_detail_offers_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers-detail/offers-detail.component */ "./src/app/views/offers/offers-detail/offers-detail.component.ts");
/* harmony import */ var _offers_list_offers_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offers-list/offers-list.component */ "./src/app/views/offers/offers-list/offers-list.component.ts");
/* harmony import */ var _offers_profile_offers_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./offers-profile/offers-profile.component */ "./src/app/views/offers/offers-profile/offers-profile.component.ts");
/* harmony import */ var _offers_detail_offers_detail_component_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./offers-detail/offers-detail.component-wrapper */ "./src/app/views/offers/offers-detail/offers-detail.component-wrapper.ts");










let OffersModule = class OffersModule {
};
OffersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _offers_component__WEBPACK_IMPORTED_MODULE_5__["OffersComponent"],
            _offers_profile_offers_profile_component__WEBPACK_IMPORTED_MODULE_8__["OffersProfileComponent"],
            _offers_list_offers_list_component__WEBPACK_IMPORTED_MODULE_7__["OffersListComponent"],
            _offers_detail_offers_detail_component__WEBPACK_IMPORTED_MODULE_6__["OffersDetailComponent"],
            _offers_detail_offers_detail_component_wrapper__WEBPACK_IMPORTED_MODULE_9__["OffersDetailWrapperComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _offers_routing_module__WEBPACK_IMPORTED_MODULE_4__["OffersRoutingModule"]]
    })
], OffersModule);



/***/ })

}]);
//# sourceMappingURL=views-offers-offers-module-es2015.js.map