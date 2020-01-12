function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/signin/signin.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/signin/signin.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsSigninSigninComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 offset-sm-3\">\n      <img src=\"/assets/img/uoc_logo.png\" />\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <mat-card class=\"login\">\n          <mat-card-header>\n            <mat-card-title>Login</mat-card-title>\n          </mat-card-header>\n          <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"none\">\n              <div *ngIf=\"errorLogin\" class=\"alert alert-danger\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">\n                  &times;\n                </button>\n                There is an error in email or password\n              </div>\n              <mat-form-field>\n                <input matInput placeholder=\"Email\" formControlName=\"email\" />\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" />\n              </mat-form-field>\n          </mat-card-content>\n          <mat-card-actions fxLayoutAlign=\"space-between center\">\n            <button mat-raised-button color=\"primary\" [disabled]=\"loginForm.invalid\">Login</button>\n            <a mat-button routerLink=\"/forgot-password\">Remember password</a>\n          </mat-card-actions>\n        </mat-card>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/views/signin/signin-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/views/signin/signin-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SigninRoutingModule */

  /***/
  function srcAppViewsSigninSigninRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninRoutingModule", function () {
      return SigninRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signin.component */
    "./src/app/views/signin/signin.component.ts");

    var routes = [{
      path: '',
      component: _signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
    }];

    var SigninRoutingModule = function SigninRoutingModule() {
      _classCallCheck(this, SigninRoutingModule);
    };

    SigninRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SigninRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/signin/signin.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/views/signin/signin.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsSigninSigninComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  padding: 0;\n  margin: 10px;\n  width: 350px;\n}\n\nmat-card-header {\n  background: #673ab7;\n  padding: 10px 1px;\n  color: white;\n}\n\nmat-card-content {\n  padding: 10px;\n}\n\nmat-card.login mat-card-actions {\n  margin: 10px;\n  padding-bottom: 10px;\n}";
    /***/
  },

  /***/
  "./src/app/views/signin/signin.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/views/signin/signin.component.ts ***!
    \**************************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppViewsSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_shared_states_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/states/auth/actions/auth.actions */
    "./src/app/shared/states/auth/actions/auth.actions.ts");

    var SigninComponent =
    /*#__PURE__*/
    function () {
      function SigninComponent(store$) {
        _classCallCheck(this, SigninComponent);

        this.store$ = store$;
        this.submitted = false;
        this.errorLogin = false;
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;
          this.store$.dispatch(new src_app_shared_states_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["Identification"](Object.assign({}, this.loginForm.value)));
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/signin/signin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signin.component.scss */
      "./src/app/views/signin/signin.component.scss")).default]
    })], SigninComponent);
    /***/
  },

  /***/
  "./src/app/views/signin/signin.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/views/signin/signin.module.ts ***!
    \***********************************************/

  /*! exports provided: SigninModule */

  /***/
  function srcAppViewsSigninSigninModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninModule", function () {
      return SigninModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _signin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./signin-routing.module */
    "./src/app/views/signin/signin-routing.module.ts");
    /* harmony import */


    var _signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signin.component */
    "./src/app/views/signin/signin.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var SigninModule = function SigninModule() {
      _classCallCheck(this, SigninModule);
    };

    SigninModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]],
      imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _signin_routing_module__WEBPACK_IMPORTED_MODULE_2__["SigninRoutingModule"]],
      providers: []
    })], SigninModule);
    /***/
  }
}]);