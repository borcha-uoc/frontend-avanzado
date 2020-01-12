function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin-layout/admin-layout.template.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin-layout/admin-layout.template.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsAdminLayoutAdminLayoutTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-topnav></app-topnav>\n<app-sidebar></app-sidebar>\n<div class=\"main-container\">\n    <router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"sidebar\">\n    <mat-nav-list>\n        <a mat-list-item [routerLinkActive]=\"'active'\" routerLink=\"/admin/\">\n            <mat-icon class=\"sidenav-icon\">dashboard</mat-icon> Dashboard\n        </a>\n        <a mat-list-item [routerLinkActive]=\"'active'\" routerLink=\"/admin/profile\">\n            <mat-icon class=\"sidenav-icon\">dashboard</mat-icon> Profile\n        </a>\n        <a mat-list-item [routerLinkActive]=\"'active'\" routerLink=\"/admin/offers\">\n            <mat-icon class=\"sidenav-icon\">dashboard</mat-icon> Offers\n        </a>\n        <a mat-list-item [routerLinkActive]=\"'active'\" routerLink=\"/admin/config\">\n            <mat-icon class=\"sidenav-icon\">dashboard</mat-icon> Configuración\n        </a>\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/admin/offers/my-offers']\">\n            <mat-icon class=\"sidenav-icon\">dashboard</mat-icon> Mis ofertas\n        </a>\n    </mat-nav-list>\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/topnav/topnav.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/topnav/topnav.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsTopnavTopnavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\" class=\"fix-nav\">\n    <button type=\"button\" mat-icon-button class=\"visible-md\" (click)=\"toggleSidebar()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n    <div class=\"nav-brand\">\n        SB Admin Material\n    </div>\n    <span class=\"nav-spacer\"></span>\n    <button mat-icon-button routerLink=\"/\">\n        <mat-icon>exit_to_app</mat-icon>\n    </button>\n</mat-toolbar>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

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

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.ts":
  /*!********************************!*\
    !*** ./src/app/app-routing.ts ***!
    \********************************/

  /*! exports provided: rootRouterConfig */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function () {
      return rootRouterConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/components/admin-layout/admin-layout.component */
    "./src/app/shared/components/admin-layout/admin-layout.component.ts");
    /*import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
    import { AuthGuard } from './shared/services/auth/auth.guard'; */


    var rootRouterConfig = [{
      path: '',
      redirectTo: 'signin',
      pathMatch: 'full'
    }, {
      path: 'signin',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-signin-signin-module */
        "views-signin-signin-module").then(__webpack_require__.bind(null,
        /*! ./views/signin/signin.module */
        "./src/app/views/signin/signin.module.ts")).then(function (m) {
          return m.SigninModule;
        });
      },
      data: {
        title: 'Signin'
      }
    }, {
      path: 'forgot-password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-forgot-password-forgot-password-module */
        "views-forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
        /*! ./views/forgot-password/forgot-password.module */
        "./src/app/views/forgot-password/forgot-password.module.ts")).then(function (m) {
          return m.ForgotPasswordModule;
        });
      },
      data: {
        title: 'Forgot Password'
      }
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | views-signup-signup-module */
        "views-signup-signup-module").then(__webpack_require__.bind(null,
        /*! ./views/signup/signup.module */
        "./src/app/views/signup/signup.module.ts")).then(function (m) {
          return m.SignupModule;
        });
      },
      data: {
        title: 'Signup'
      }
    }, {
      path: 'admin',
      component: _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__["AdminLayoutComponent"],

      /* canActivate: [AuthGuard], */
      children: [{
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-dashboard-dashboard-module */
          "views-dashboard-dashboard-module").then(__webpack_require__.bind(null,
          /*! ./views/dashboard/dashboard.module */
          "./src/app/views/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        },
        data: {
          title: 'Dashboard',
          breadcrumb: 'DASHBOARD'
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | views-profile-profile-module */
          [__webpack_require__.e("common"), __webpack_require__.e("views-profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./views/profile/profile.module */
          "./src/app/views/profile/profile.module.ts")).then(function (m) {
            return m.ProfileModule;
          });
        },
        data: {
          title: 'Profile',
          breadcrumb: 'PROFILE'
        }
      }, {
        path: 'favorites',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-favorites-favorites-module */
          "views-favorites-favorites-module").then(__webpack_require__.bind(null,
          /*! ./views/favorites/favorites.module */
          "./src/app/views/favorites/favorites.module.ts")).then(function (m) {
            return m.FavoritesModule;
          });
        },
        data: {
          title: 'Favorites',
          breadcrumb: 'FAVORITES'
        }
      }, {
        path: 'offers',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | views-offers-offers-module */
          [__webpack_require__.e("common"), __webpack_require__.e("views-offers-offers-module")]).then(__webpack_require__.bind(null,
          /*! ./views/offers/offers.module */
          "./src/app/views/offers/offers.module.ts")).then(function (m) {
            return m.OffersModule;
          });
        },
        data: {
          title: 'Offers',
          breadcrumb: 'Offers'
        }
      }]
    }, {
      path: '**',
      redirectTo: 'sessions/404'
    }];
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'UOCJob';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shared_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/core.module */
    "./src/app/shared/core.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing */
    "./src/app/app-routing.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/index.js");
    /* harmony import */


    var _shared_inmemory_db_fake_backend_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/inmemory-db/fake-backend.service */
    "./src/app/shared/inmemory-db/fake-backend.service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"].withServerTransition({
        appId: 'serverApp'
      }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _shared_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["rootRouterConfig"], {
        useHash: false
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__["HttpClientInMemoryWebApiModule"].forRoot(_shared_inmemory_db_fake_backend_service__WEBPACK_IMPORTED_MODULE_10__["FakeBackendService"], {
        dataEncapsulation: false
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
      })],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/shared/app.settings.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/app.settings.ts ***!
    \****************************************/

  /*! exports provided: AppSettings */

  /***/
  function srcAppSharedAppSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
      return AppSettings;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* import * as moment from 'moment'; */


    var AppSettings =
    /*#__PURE__*/
    function () {
      function AppSettings() {
        _classCallCheck(this, AppSettings);
      }

      _createClass(AppSettings, null, [{
        key: "getAvatar",
        value: function getAvatar(user) {
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'sm';

          if (!user || !user.avatar_hash) {
            return this.IMAGES.UNKNOWN_FACE;
          }

          var _user$avatar_hash$spl = user.avatar_hash.split('.'),
              _user$avatar_hash$spl2 = _slicedToArray(_user$avatar_hash$spl, 2),
              hash = _user$avatar_hash$spl2[0],
              extension = _user$avatar_hash$spl2[1];

          return "".concat(this.STATIC_AVATAR_ENDPOINT).concat(user.uid, "/").concat(hash).concat(size, ".").concat(extension);
        }
      }]);

      return AppSettings;
    }();

    AppSettings.APP_NAME = 'PoliJob';
    AppSettings.APP_LOCALSTORAGE_TOKEN = 'PoliJob_Token';
    AppSettings.APP_VERSION = '0.1.0';
    AppSettings.API_ENDPOINT = 'api/';
    AppSettings.STATIC_ENDPOINT = AppSettings.API_ENDPOINT + 'static/';
    AppSettings.STATIC_AVATAR_ENDPOINT = AppSettings.STATIC_ENDPOINT + 'images/avatar/';
    AppSettings.API_ENDPOINT_APP = AppSettings.API_ENDPOINT + 'app/';
    AppSettings.API_ENDPOINT_USER = AppSettings.API_ENDPOINT + 'user';
    AppSettings.API_ENDPOINT_USERS = AppSettings.API_ENDPOINT + 'users';
    AppSettings.API_ENDPOINT_OFFERS = AppSettings.API_ENDPOINT + 'offers';
    AppSettings.API_ENDPOINT_USER_ME = AppSettings.API_ENDPOINT + 'user-me';
    AppSettings.API_ENDPOINT_USER_CREATE = AppSettings.API_ENDPOINT_USER + '/create';
    AppSettings.API_ENDPOINT_CONFIRM_USER = AppSettings.API_ENDPOINT_USER + '/confirm-user';
    AppSettings.API_ENDPOINT_USER_REMEMBER_PASSWORD = AppSettings.API_ENDPOINT_USER + '/remember-password';
    AppSettings.API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD = AppSettings.API_ENDPOINT_USER + '/request-remember-password';
    AppSettings.API_ENDPOINT_USER_REQUEST_USER_AVATAR = AppSettings.API_ENDPOINT_USER + '/request-avatar-user';
    AppSettings.API_ENDPOINT_USER_UPLOAD_AVATAR = AppSettings.API_ENDPOINT_USER + '/upload-avatar';
    AppSettings.API_ENDPOINT_USER_SENDMAIL = AppSettings.API_ENDPOINT_USER + '/sendmail';
    AppSettings.API_ENDPOINT_AUTH = AppSettings.API_ENDPOINT + 'auth/';
    AppSettings.API_ENDPOINT_AUTH_LOCAL = AppSettings.API_ENDPOINT + 'auth/local/';
    AppSettings.APP_QUILL_EDITOR_CONFIGURATION = {
      toolbar: [['bold', 'italic', 'underline'], [{
        list: 'ordered'
      }, {
        list: 'bullet'
      }], [{
        direction: 'rtl'
      }], ['clean'], ['link']]
    };
    AppSettings.APP_DEFAULT_MOMENT_LOCALE = 'es';
    AppSettings.GUESS_ROL = {
      value: 'guess',
      text: 'settings.rol.GUESS'
    };
    AppSettings.STUDENT_ROL = {
      value: 'student',
      text: 'settings.rol.STUDENT'
    };
    AppSettings.ADMINISTRATOR_ROL = {
      value: 'admin',
      text: 'settings.rol.ADMINISTRATOR'
    };
    AppSettings.COMPANY_ROL = {
      value: 'company',
      text: 'settings.rol.COMPANY'
    };
    AppSettings.ROLES = [AppSettings.GUESS_ROL, AppSettings.STUDENT_ROL, AppSettings.COMPANY_ROL, AppSettings.ADMINISTRATOR_ROL];
    AppSettings.USER_STATUS_PENDING = {
      value: 'pending',
      text: 'settings.status.PENDING'
    };
    AppSettings.USER_STATUS_ACTIVE = {
      value: 'active',
      text: 'settings.status.ACTIVE'
    };
    AppSettings.USER_STATUS_INACTIVE = {
      value: 'inactive',
      text: 'settings.status.INACTIVE'
    };
    AppSettings.USER_STATUS = [AppSettings.USER_STATUS_PENDING, AppSettings.USER_STATUS_ACTIVE, AppSettings.USER_STATUS_INACTIVE];
    AppSettings.FORMAT_DATE = 'MM/DD/YYYY';
    AppSettings.IMAGES = {
      UNKNOWN_IMAGE: 'assets/images/image-not-found.png',
      UNKNOWN_FACE: 'assets/images/face-unknown.png',
      UNKNOWN_TEAM: 'assets/images/image-not-found.png'
    };
    AppSettings.NOTIFICATIONS = {
      DEFAULT_TIME: 2000
    };
    /***/
  },

  /***/
  "./src/app/shared/components/admin-layout/admin-layout.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/admin-layout/admin-layout.component.ts ***!
    \**************************************************************************/

  /*! exports provided: AdminLayoutComponent */

  /***/
  function srcAppSharedComponentsAdminLayoutAdminLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
      return AdminLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminLayoutComponent = function AdminLayoutComponent() {
      _classCallCheck(this, AdminLayoutComponent);
    };

    AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-layout.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/admin-layout/admin-layout.template.html")).default
    })], AdminLayoutComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/sidebar/sidebar.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#sidebar {\n  width: 250px;\n  position: fixed;\n  top: 56px;\n  bottom: 0;\n  background: #fff;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n  z-index: 999;\n  -ms-overflow-y: auto;\n  overflow-y: auto;\n}\n#sidebar .mat-nav-list {\n  width: 100%;\n}\n#sidebar .mat-nav-list a {\n  display: block;\n}\n#sidebar .mat-nav-list a .mat-icon {\n  margin-right: 15px;\n}\n.nested-menu .nested {\n  list-style-type: none;\n}\n.nested-menu .submenu {\n  display: none;\n  height: 0;\n}\n.nested-menu .expand.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto;\n  margin: 0;\n}\n.nested-menu .expand.submenu li a {\n  padding: 10px;\n  display: block;\n}\n@media screen and (max-width: 992px) {\n  #sidebar {\n    left: -250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naW1jby9Qcm9qZWN0cy9VT0MvRkFWL2JvbHNhZW1wbGVvL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7QUNFUjtBRERRO0VBSUksY0FBQTtBQ0FaO0FESFk7RUFDSSxrQkFBQTtBQ0toQjtBREVJO0VBQ0kscUJBQUE7QUNDUjtBRENJO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUNDUjtBREVRO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNBWjtBREVnQjtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDQXBCO0FETUE7RUFDSTtJQUNJLFlBQUE7RUNITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZGViYXIge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1NnB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDNweCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICAtbXMtb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIC5tYXQtbmF2LWxpc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICAubWF0LWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxufVxuLm5lc3RlZC1tZW51IHtcbiAgICAubmVzdGVkIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIH1cbiAgICAuc3VibWVudSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgJiAuZXhwYW5kIHtcbiAgICAgICAgJi5zdWJtZW51IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICNzaWRlYmFyIHtcbiAgICAgICAgbGVmdDogLTI1MHB4O1xuICAgIH1cbn1cbiIsIiNzaWRlYmFyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTZweDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAzcHggMCA2cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgei1pbmRleDogOTk5O1xuICAtbXMtb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbiNzaWRlYmFyIC5tYXQtbmF2LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbiNzaWRlYmFyIC5tYXQtbmF2LWxpc3QgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI3NpZGViYXIgLm1hdC1uYXYtbGlzdCBhIC5tYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm5lc3RlZC1tZW51IC5uZXN0ZWQge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4ubmVzdGVkLW1lbnUgLnN1Ym1lbnUge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG4ubmVzdGVkLW1lbnUgLmV4cGFuZC5zdWJtZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG59XG4ubmVzdGVkLW1lbnUgLmV4cGFuZC5zdWJtZW51IGxpIGEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgI3NpZGViYXIge1xuICAgIGxlZnQ6IC0yNTBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/sidebar/sidebar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
    \****************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showMenu = '';
        }
      }, {
        key: "addExpandClass",
        value: function addExpandClass(element) {
          if (element === this.showMenu) {
            this.showMenu = '0';
          } else {
            this.showMenu = element;
          }
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/shared/components/sidebar/sidebar.component.scss")).default]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/topnav/topnav.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/topnav/topnav.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsTopnavTopnavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1000;\n}\n\n.nav-brand {\n  width: 215px;\n  text-align: center;\n}\n\n.topnav-icon {\n  text-decoration: none;\n  display: -webkit-box;\n  display: flex;\n  color: #fff;\n}\n\n.nav-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.visible-md {\n  display: none;\n}\n\n.visible-sm {\n  display: none;\n}\n\n@media screen and (max-width: 992px) {\n  .visible-md {\n    display: block;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .visible-sm {\n    display: block;\n  }\n\n  .nav-brand {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .hidden-sm {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naW1jby9Qcm9qZWN0cy9VT0MvRkFWL2JvbHNhZW1wbGVvL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7QUNHSjs7QURBQTtFQUNJLG1CQUFBO1VBQUEsY0FBQTtBQ0dKOztBREFBO0VBQ0ksYUFBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtBQ0lKOztBREZBO0VBQ0k7SUFDSSxjQUFBO0VDS047QUFDRjs7QURIQTtFQUNJO0lBQ0ksY0FBQTtFQ0tOOztFREhFO0lBQ0ksV0FBQTtFQ01OO0FBQ0Y7O0FESkE7RUFDSTtJQUNJLGFBQUE7RUNNTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTAwMDtcbn1cbi5uYXYtYnJhbmQge1xuICAgIHdpZHRoOiAyMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udG9wbmF2LWljb24ge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2LXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi52aXNpYmxlLW1kIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnZpc2libGUtc20ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC52aXNpYmxlLW1kIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAudmlzaWJsZS1zbSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAubmF2LWJyYW5kIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuaGlkZGVuLXNtIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5uYXYtYnJhbmQge1xuICB3aWR0aDogMjE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvcG5hdi1pY29uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdi1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnZpc2libGUtbWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udmlzaWJsZS1zbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC52aXNpYmxlLW1kIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnZpc2libGUtc20ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLm5hdi1icmFuZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oaWRkZW4tc20ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/topnav/topnav.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/topnav/topnav.component.ts ***!
    \**************************************************************/

  /*! exports provided: TopnavComponent */

  /***/
  function srcAppSharedComponentsTopnavTopnavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopnavComponent", function () {
      return TopnavComponent;
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

    var TopnavComponent =
    /*#__PURE__*/
    function () {
      function TopnavComponent(router) {
        var _this = this;

        _classCallCheck(this, TopnavComponent);

        this.router = router;
        this.router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && window.innerWidth <= 992 && _this.isToggled()) {
            _this.toggleSidebar();
          }
        });
      }

      _createClass(TopnavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pushRightClass = 'push-right';
        }
      }, {
        key: "isToggled",
        value: function isToggled() {
          var dom = document.querySelector('body');
          return dom.classList.contains(this.pushRightClass);
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          var dom = document.querySelector('body');
          dom.classList.toggle(this.pushRightClass);
        }
      }, {
        key: "onLoggedout",
        value: function onLoggedout() {
          localStorage.removeItem('isLoggedin');
          this.router.navigate(['/login']);
        }
      }]);

      return TopnavComponent;
    }();

    TopnavComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    TopnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-topnav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./topnav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/topnav/topnav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./topnav.component.scss */
      "./src/app/shared/components/topnav/topnav.component.scss")).default]
    })], TopnavComponent);
    /***/
  },

  /***/
  "./src/app/shared/core.module.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/core.module.ts ***!
    \***************************************/

  /*! exports provided: CORE_SERVICES, CoreModule */

  /***/
  function srcAppSharedCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CORE_SERVICES", function () {
      return CORE_SERVICES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */


    var _states_root_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./states/root.reducer */
    "./src/app/shared/states/root.reducer.ts");
    /* harmony import */


    var _states_auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./states/auth/effects/auth.effects */
    "./src/app/shared/states/auth/effects/auth.effects.ts");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
    /* harmony import */


    var _states_router_effects_router_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./states/router/effects/router.effects */
    "./src/app/shared/states/router/effects/router.effects.ts");
    /* harmony import */


    var _states_user_effects_user_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./states/user/effects/user.effects */
    "./src/app/shared/states/user/effects/user.effects.ts");
    /* harmony import */


    var _states_app_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./states/app/effects */
    "./src/app/shared/states/app/effects/index.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/profile.service */
    "./src/app/shared/services/profile.service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _services_notifications_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/notifications.service */
    "./src/app/shared/services/notifications.service.ts");
    /* harmony import */


    var _services_offers_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/offers.service */
    "./src/app/shared/services/offers.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _states_offers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./states/offers */
    "./src/app/shared/states/offers/index.ts");
    /* import { JWTInterceptor } from './interceptors/jwt.interceptor'; */

    /* import { JwtExpiredInterceptor } from './interceptors/jwt-expired.interceptor'; */

    /* import { UsersEffects } from './states/users/effects'; */

    /* import { UsersService } from '../views/users/shared/users.service'; */

    /* import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
    import { TranslateHttpLoader } from '@ngx-translate/http-loader'; */

    /* export function HttpLoaderFactory(httpClient: HttpClient) {
      return new TranslateHttpLoader(httpClient);
    } */


    var CORE_SERVICES = [_services_profile_service__WEBPACK_IMPORTED_MODULE_12__["ProfileService"], _services_offers_service__WEBPACK_IMPORTED_MODULE_15__["OffersService"], _services_notifications_service__WEBPACK_IMPORTED_MODULE_14__["NotificationsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]
    /* {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtExpiredInterceptor,
      multi: true,
    }, */

    /*   { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: RouterStateSerializer, useClass: CustomSerializer }, */

    /* {
      provide: MatPaginatorIntl,
      useClass: DatatablePaginatorIntl,
      deps: [TranslateService],
    }, */
    ];

    var CoreModule = function CoreModule(parentModule) {
      _classCallCheck(this, CoreModule);

      if (parentModule) {
        throw new Error('CoreModule is already loaded. Import it in the AppModule only');
      }
    };

    CoreModule.ctorParameters = function () {
      return [{
        type: CoreModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }];
    };

    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_states_root_reducer__WEBPACK_IMPORTED_MODULE_6__["reducers"], {
        metaReducers: _states_root_reducer__WEBPACK_IMPORTED_MODULE_6__["metaReducers"]
      }), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["StoreRouterConnectingModule"].forRoot({
        stateKey: 'router'
      }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
        maxAge: 50
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_states_app_effects__WEBPACK_IMPORTED_MODULE_11__["AppEffects"], _states_auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_7__["AuthEffects"], _states_user_effects_user_effects__WEBPACK_IMPORTED_MODULE_10__["UserEffects"], _states_offers__WEBPACK_IMPORTED_MODULE_17__["OffersEffects"], _states_router_effects_router_effects__WEBPACK_IMPORTED_MODULE_9__["RouterEffects"]])
      /*  TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }) */
      // InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
      ],
      providers: CORE_SERVICES
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())], CoreModule);
    /***/
  },

  /***/
  "./src/app/shared/directives/fontsize.directive.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/directives/fontsize.directive.ts ***!
    \*********************************************************/

  /*! exports provided: FontSizeDirective */

  /***/
  function srcAppSharedDirectivesFontsizeDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FontSizeDirective", function () {
      return FontSizeDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FontSizeDirective =
    /*#__PURE__*/
    function () {
      function FontSizeDirective(fontSize, el) {
        _classCallCheck(this, FontSizeDirective);

        this.fontSize = fontSize;
        this.el = el;
      }

      _createClass(FontSizeDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.el.nativeElement.fontSize = this.fontSize;
        }
      }]);

      return FontSizeDirective;
    }();

    FontSizeDirective.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['fontSize']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    FontSizeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[fontSize]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('fontSize'))], FontSizeDirective);
    /***/
  },

  /***/
  "./src/app/shared/inmemory-db/fake-backend.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/inmemory-db/fake-backend.service.ts ***!
    \************************************************************/

  /*! exports provided: FakeBackendService */

  /***/
  function srcAppSharedInmemoryDbFakeBackendServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendService", function () {
      return FakeBackendService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FakeBackendService =
    /*#__PURE__*/
    function () {
      function FakeBackendService() {
        _classCallCheck(this, FakeBackendService);
      }

      _createClass(FakeBackendService, [{
        key: "createDb",
        value: function createDb() {
          var users = [{
            id: 1,
            username: 'carloscg',
            name: 'Carlos',
            surname: 'Caballero',
            birthdate: '19/11/1984',
            phone: '644039911',
            phone2: '690940321',
            email: 'carlos.caballero@gmail.com',
            password: '1234',
            roles: ['student'],
            documentType: {
              uid: 1,
              name: 'NIF'
            },
            documentNumber: '26808956H',
            license: 'B1',
            aboutMe: 'LOREM IPSUM',
            otherCompetences: 'LOREM IPSUM',
            address: {
              street: 'Urbanización las Areanas - 45',
              province: {
                uid: 4,
                name: 'Cádiz'
              },
              municipe: {
                uid: 6,
                name: 'Chiclana de la Frontera'
              }
            },
            avatar_hash: 'assets/img/perfil.png',
            studies: [{
              uid: 1,
              level: {
                uid: 1,
                name: 'Ciclo Formativo'
              },
              category: {
                uid: 2,
                name: 'Informática y comunicaciones'
              },
              institution: {
                uid: 2,
                name: 'IES Politécnico Jesús Marin'
              },
              title: {
                uid: 2,
                name: 'Administracion de sistemas informaticos y redes'
              },
              grade: {
                uid: 3,
                name: 'Ciclo Formativo de Grado Superior'
              },
              date: '30/06/2005',
              dual: false,
              bilingue: true,
              certificate: true
            }, {
              uid: 2,
              institution: {
                uid: 2,
                name: 'IES Politécnico Jesús Marin'
              },
              category: {
                uid: 2,
                name: 'Informática y comunicaciones'
              },
              level: {
                uid: 1,
                name: 'Ciclo Formativo'
              },
              title: {
                uid: 1,
                name: 'Técnico Superior en Desarrollo de Aplicaciones Web'
              },
              grade: {
                uid: 3,
                name: 'Ciclo Formativo de Grado Superior'
              },
              date: '30/06/2007',
              dual: true,
              bilingue: false,
              certificate: false
            }],
            experiencies: [],
            languages: [{
              uid: 1,
              level: {
                uid: 5,
                name: 'C1'
              },
              name: {
                uid: 1,
                name: 'Inglés'
              },
              date: '30/06/2005'
            }, {
              uid: 2,
              level: {
                uid: 4,
                name: 'B2'
              },
              name: {
                uid: 2,
                name: 'Francés'
              },
              date: '30/06/1998'
            }],
            offers: []
            /*         experiences: [
              {
                id: 0,
                eid: 0,
                empresa: 'Suma',
                date_incio: '1548320228',
                date_fin: '1548320228',
                puesto: 'Junior',
                tareas: 'Desarrollador front-end'
              },
              {
                id: 0,
                eid: 1,
                empresa: 'Indra',
                date_incio: '1548320228',
                date_fin: '1548320228',
                puesto: 'Ingeniero',
                tareas: 'Desarrollador back-end'
              }
            ],
            languages: [
              { id: 0, lid: 0, idioma: 'Inglés', nivel: 'B2', date: '30/06/2008' },
              {
                id: 0,
                lid: 1,
                idioma: 'Portugués',
                nivel: 'A2',
                date: '30/06/2013'
              }
            ]
            */

          }];
          var offers = [{
            id: 1,
            company: {
              uid: 33,
              name: 'Coritel'
            },
            job: {
              name: 'Programador Jr Java',
              description: 'Programación y prueba unitaria en Java'
            },
            province: {
              uid: 1,
              name: 'Málaga'
            },
            municipe: {
              uid: 7,
              name: 'Estepona'
            },
            date: '21/09/2006',
            category: {
              uid: 2,
              name: 'Informática y Comunicaciones'
            },
            title: [{
              uid: 1,
              name: 'Desarrollo Aplicaciones Web'
            }, {
              uid: 4,
              name: 'Desarrollo Aplicaciones Multiplataforma'
            }]
          }, {
            id: 2,
            company: {
              uid: 33,
              name: 'Coritel'
            },
            job: {
              name: 'Comercial',
              description: 'Relaciones con los clientes y atención a las redes sociales.'
            },
            province: {
              uid: 1,
              name: 'Málaga'
            },
            municipe: {
              uid: 8,
              name: 'Campanillas (PTA)'
            },
            date: '21/09/2016',
            category: {
              uid: 4,
              name: 'Comercio y Marketing'
            },
            title: [{
              uid: 5,
              name: 'Gestión Comercial y Empresarial'
            }]
          }, {
            id: 3,
            company: {
              uid: 33,
              name: 'Coritel'
            },
            job: {
              name: 'Analista Programador Java',
              description: 'Análisis funcional y diseño técnico/detallado de componentes'
            },
            province: {
              uid: 5,
              name: 'Granada'
            },
            municipe: {
              uid: 9,
              name: 'Motril'
            },
            date: '11/07/2016',
            category: {
              uid: 2,
              name: 'Informática y Comunicaciones'
            },
            title: [{
              uid: 4,
              name: 'Desarrollo Aplicaciones Multiplataforma'
            }]
          }, {
            id: 4,
            company: {
              uid: 35,
              name: 'Indra'
            },
            job: {
              name: 'Administrativo',
              description: 'Gestión de cartera de clientes.'
            },
            province: {
              uid: 2,
              name: 'Sevilla'
            },
            municipe: {
              uid: 10,
              name: 'Osuna'
            },
            date: '01/12/2015',
            category: {
              uid: 5,
              name: 'Administración y Gestión'
            },
            title: [{
              uid: 6,
              name: 'Empresariales'
            }]
          }];
          return {
            users: users,
            offers: offers
          };
        }
      }]);

      return FakeBackendService;
    }();
    /***/

  },

  /***/
  "./src/app/shared/material.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/material.module.ts ***!
    \*******************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppSharedMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
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


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"]],
      exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(_ref) {
          var email = _ref.email,
              password = _ref.password;
          //Mock - Should return a Token
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthService);
    /***/
  },

  /***/
  "./src/app/shared/services/notifications.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/notifications.service.ts ***!
    \**********************************************************/

  /*! exports provided: NotificationsService */

  /***/
  function srcAppSharedServicesNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
      return NotificationsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* import { MatSnackBar } from '@angular/material'; */


    var NotificationsService =
    /*#__PURE__*/
    function () {
      function NotificationsService()
      /* private snackBar: MatSnackBar */
      {
        _classCallCheck(this, NotificationsService);
      }

      _createClass(NotificationsService, [{
        key: "showNotification",
        value: function showNotification(message, action) {
          console.log('message:', message, ' action:', action);
          /*     this.snackBar.open(message, action, {
            duration: AppSettings.NOTIFICATIONS.DEFAULT_TIME
          }); */
        }
      }]);

      return NotificationsService;
    }();

    NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NotificationsService);
    /***/
  },

  /***/
  "./src/app/shared/services/offers.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/offers.service.ts ***!
    \***************************************************/

  /*! exports provided: OffersService */

  /***/
  function srcAppSharedServicesOffersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersService", function () {
      return OffersService;
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


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.settings */
    "./src/app/shared/app.settings.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var OffersService =
    /*#__PURE__*/
    function () {
      function OffersService(http
      /* , private store$: Store<AppStore> */
      ) {
        _classCallCheck(this, OffersService);

        this.http = http;
      }

      _createClass(OffersService, [{
        key: "getOffers",
        value: function getOffers() {
          return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_OFFERS);
        }
      }]);

      return OffersService;
    }();

    OffersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        /* , private store$: Store<AppStore> */

      }];
    };

    OffersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], OffersService);
    /***/
  },

  /***/
  "./src/app/shared/services/profile.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/profile.service.ts ***!
    \****************************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppSharedServicesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
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


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.settings */
    "./src/app/shared/app.settings.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _states_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../states/user/actions */
    "./src/app/shared/states/user/actions/index.ts");

    var ProfileService =
    /*#__PURE__*/
    function () {
      function ProfileService(http, store$) {
        _classCallCheck(this, ProfileService);

        this.http = http;
        this.store$ = store$;
      }

      _createClass(ProfileService, [{
        key: "getUsers",
        value: function getUsers(id) {
          return this.http.get("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USERS, "/").concat(id));
        }
      }, {
        key: "loadProfile",
        value: function loadProfile() {
          return this.getUsers(1);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.store$.dispatch(new _states_user_actions__WEBPACK_IMPORTED_MODULE_5__["Logout"]());
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(profile
        /* User */
        ) {
          return this.http.put(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USERS, Object.assign({}, profile));
        }
      }, {
        key: "signupProfile",
        value: function signupProfile(profile
        /* UserOptions */
        ) {
          return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USER_CREATE, profile);
        }
      }, {
        key: "requestRememberPassword",
        value: function requestRememberPassword(uid) {
          return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD, uid);
        }
      }, {
        key: "rememberPassword",
        value: function rememberPassword(uidAndHash) {
          return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USER_REMEMBER_PASSWORD, uidAndHash);
        }
      }, {
        key: "confirmUser",
        value: function confirmUser(uidAndHash) {
          return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_CONFIRM_USER, uidAndHash);
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProfileService);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/shared/material.module.ts");
    /* harmony import */


    var _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/admin-layout/admin-layout.component */
    "./src/app/shared/components/admin-layout/admin-layout.component.ts");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/topnav/topnav.component */
    "./src/app/shared/components/topnav/topnav.component.ts");
    /* harmony import */


    var _directives_fontsize_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./directives/fontsize.directive */
    "./src/app/shared/directives/fontsize.directive.ts");
    /*
    import { TranslateModule } from '@ngx-translate/core';
    import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; */
    // COMPONENTS
    // DIRECTIVES
    // PIPES
    // SERVICES


    var declarations = [_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_7__["AdminLayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_9__["TopnavComponent"], _directives_fontsize_directive__WEBPACK_IMPORTED_MODULE_10__["FontSizeDirective"]];
    var moduleExports = [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_7__["AdminLayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_9__["TopnavComponent"]];
    var providers = [];

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      entryComponents: [],
      providers: providers,
      declarations: declarations,
      exports: moduleExports
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/states/app/effects/app.effects.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/states/app/effects/app.effects.ts ***!
    \**********************************************************/

  /*! exports provided: AppEffects */

  /***/
  function srcAppSharedStatesAppEffectsAppEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppEffects", function () {
      return AppEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppEffects = function AppEffects() {
      _classCallCheck(this, AppEffects);
    };

    AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppEffects);
    /***/
  },

  /***/
  "./src/app/shared/states/app/effects/index.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/states/app/effects/index.ts ***!
    \****************************************************/

  /*! exports provided: effects, AppEffects */

  /***/
  function srcAppSharedStatesAppEffectsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "effects", function () {
      return effects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.effects */
    "./src/app/shared/states/app/effects/app.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppEffects", function () {
      return _app_effects__WEBPACK_IMPORTED_MODULE_1__["AppEffects"];
    });

    var effects = [_app_effects__WEBPACK_IMPORTED_MODULE_1__["AppEffects"]];
    /***/
  },

  /***/
  "./src/app/shared/states/app/reducers/app.reducer.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/states/app/reducers/app.reducer.ts ***!
    \***********************************************************/

  /*! exports provided: initialState, reducer, getProvinces */

  /***/
  function srcAppSharedStatesAppReducersAppReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getProvinces", function () {
      return getProvinces;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var initialState = {
      provinces: []
    };

    function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;
      return state;
    }

    var getProvinces = function getProvinces(state) {
      return state.provinces;
    };
    /***/

  },

  /***/
  "./src/app/shared/states/app/reducers/index.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/states/app/reducers/index.ts ***!
    \*****************************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppSharedStatesAppReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.reducer */
    "./src/app/shared/states/app/reducers/app.reducer.ts");

    var reducers = {
      app: _app_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
    };
    /***/
  },

  /***/
  "./src/app/shared/states/auth/actions/auth.actions.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/states/auth/actions/auth.actions.ts ***!
    \************************************************************/

  /*! exports provided: IDENTIFICATION, Identification, IDENTIFICATION_SUCCESS, IdentificationSuccess, IDENTIFICATION_FAILED, IdentificationFailed, IDENTIFICATION_LOGOUT, IdentificationLogout, IDENTIFICATION_REFRESH, IdentificationRefresh */

  /***/
  function srcAppSharedStatesAuthActionsAuthActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IDENTIFICATION", function () {
      return IDENTIFICATION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Identification", function () {
      return Identification;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_SUCCESS", function () {
      return IDENTIFICATION_SUCCESS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentificationSuccess", function () {
      return IdentificationSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_FAILED", function () {
      return IDENTIFICATION_FAILED;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentificationFailed", function () {
      return IdentificationFailed;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_LOGOUT", function () {
      return IDENTIFICATION_LOGOUT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentificationLogout", function () {
      return IdentificationLogout;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_REFRESH", function () {
      return IDENTIFICATION_REFRESH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentificationRefresh", function () {
      return IdentificationRefresh;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var IDENTIFICATION = '[Auth] Identification';

    var Identification = function Identification(payload) {
      _classCallCheck(this, Identification);

      this.payload = payload;
      this.type = IDENTIFICATION;
    };

    var IDENTIFICATION_SUCCESS = '[Auth] Identification success';

    var IdentificationSuccess = function IdentificationSuccess(payload) {
      _classCallCheck(this, IdentificationSuccess);

      this.payload = payload;
      this.type = IDENTIFICATION_SUCCESS;
    };

    var IDENTIFICATION_FAILED = '[Auth] Identification failed';

    var IdentificationFailed = function IdentificationFailed(payload) {
      _classCallCheck(this, IdentificationFailed);

      this.payload = payload;
      this.type = IDENTIFICATION_FAILED;
    };

    var IDENTIFICATION_LOGOUT = '[Auth] Identification logout';

    var IdentificationLogout = function IdentificationLogout() {
      _classCallCheck(this, IdentificationLogout);

      this.type = IDENTIFICATION_LOGOUT;
    };

    var IDENTIFICATION_REFRESH = '[Auth] Identification refresh';

    var IdentificationRefresh = function IdentificationRefresh(payload) {
      _classCallCheck(this, IdentificationRefresh);

      this.payload = payload;
      this.type = IDENTIFICATION_REFRESH;
    };
    /***/

  },

  /***/
  "./src/app/shared/states/auth/actions/index.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/states/auth/actions/index.ts ***!
    \*****************************************************/

  /*! exports provided: IDENTIFICATION, Identification, IDENTIFICATION_SUCCESS, IdentificationSuccess, IDENTIFICATION_FAILED, IdentificationFailed, IDENTIFICATION_LOGOUT, IdentificationLogout, IDENTIFICATION_REFRESH, IdentificationRefresh */

  /***/
  function srcAppSharedStatesAuthActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.actions */
    "./src/app/shared/states/auth/actions/auth.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IDENTIFICATION", function () {
      return _auth_actions__WEBPACK_IMPORTED_MODULE_1__["IDENTIFICATION"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Identification", function () {
      return _auth_actions__WEBPACK_IMPORTED_MODULE_1__["Identification"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_SUCCESS", function () {
      return _auth_actions__WEBPACK_IMPORTED_MODULE_1__["IDENTIFICATION_SUCCESS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IdentificationSuccess", function () {
      return _auth_actions__WEBPACK_IMPORTED_MODULE_1__["IdentificationSuccess"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_FAILED", function () {
      return _auth_actions__WEBPACK_IMPORTED_MODULE_1__["IDENTIFICATION_FAILED"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IdentificationFailed", function () {
      return _auth_actions__WEBPACK_IMPORTED_MODULE_1__["IdentificationFailed"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_LOGOUT", function () {
      return _auth_actions__WEBPACK_IMPORTED_MODULE_1__["IDENTIFICATION_LOGOUT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IdentificationLogout", function () {
      return _auth_actions__WEBPACK_IMPORTED_MODULE_1__["IdentificationLogout"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_REFRESH", function () {
      return _auth_actions__WEBPACK_IMPORTED_MODULE_1__["IDENTIFICATION_REFRESH"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IdentificationRefresh", function () {
      return _auth_actions__WEBPACK_IMPORTED_MODULE_1__["IdentificationRefresh"];
    });
    /***/

  },

  /***/
  "./src/app/shared/states/auth/effects/auth.effects.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/states/auth/effects/auth.effects.ts ***!
    \************************************************************/

  /*! exports provided: AuthEffects */

  /***/
  function srcAppSharedStatesAuthEffectsAuthEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthEffects", function () {
      return AuthEffects;
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


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions */
    "./src/app/shared/states/auth/actions/index.ts");
    /* harmony import */


    var _user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../user/actions */
    "./src/app/shared/states/user/actions/index.ts");
    /* harmony import */


    var _offers_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../offers/actions */
    "./src/app/shared/states/offers/actions/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var src_app_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/services/notifications.service */
    "./src/app/shared/services/notifications.service.ts");

    var AuthEffects = function AuthEffects(actions$, authService, notificationsService) {
      var _this2 = this;

      _classCallCheck(this, AuthEffects);

      this.actions$ = actions$;
      this.authService = authService;
      this.notificationsService = notificationsService;
      this.login$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["IDENTIFICATION"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (action) {
        return _this2.authService.login(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (token) {
          return new _actions__WEBPACK_IMPORTED_MODULE_3__["IdentificationSuccess"](token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_3__["IdentificationFailed"](error.message));
        }));
      }));
      this.loginSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["IDENTIFICATION_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _user_actions__WEBPACK_IMPORTED_MODULE_4__["LoadUser"]());
      }));
      this.loginSuccessOffers$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["IDENTIFICATION_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _offers_actions__WEBPACK_IMPORTED_MODULE_5__["LoadOffers"]());
      }));
      this.loginFailed$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["IDENTIFICATION_FAILED"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
        return _this2.notificationsService.showNotification('header.ERROR_LOGIN', 'header.ERROR_LOGIN');
      }));
    };

    AuthEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
      }, {
        type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
      }, {
        type: src_app_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], AuthEffects.prototype, "login$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], AuthEffects.prototype, "loginSuccess$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], AuthEffects.prototype, "loginSuccessOffers$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({
      dispatch: false
    })], AuthEffects.prototype, "loginFailed$", void 0);
    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthEffects);
    /***/
  },

  /***/
  "./src/app/shared/states/auth/reducers/auth.reducer.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/states/auth/reducers/auth.reducer.ts ***!
    \*************************************************************/

  /*! exports provided: initialState, reducer, getToken */

  /***/
  function srcAppSharedStatesAuthReducersAuthReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getToken", function () {
      return getToken;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions */
    "./src/app/shared/states/auth/actions/index.ts");

    var initialState = {
      token: ''
    };

    function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["IDENTIFICATION_SUCCESS"]:
          {
            return Object.assign({}, state, action.payload);
          }

        case _actions__WEBPACK_IMPORTED_MODULE_1__["IDENTIFICATION_LOGOUT"]:
          {
            return Object.assign({}, state, initialState);
          }

        case _actions__WEBPACK_IMPORTED_MODULE_1__["IDENTIFICATION_REFRESH"]:
          {
            return Object.assign({}, state, action.payload);
          }
      }

      return state;
    }

    var getToken = function getToken(state) {
      return state.token;
    };
    /***/

  },

  /***/
  "./src/app/shared/states/auth/reducers/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/states/auth/reducers/index.ts ***!
    \******************************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppSharedStatesAuthReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.reducer */
    "./src/app/shared/states/auth/reducers/auth.reducer.ts");

    var reducers = {
      auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
    };
    /***/
  },

  /***/
  "./src/app/shared/states/offers/actions/index.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/states/offers/actions/index.ts ***!
    \*******************************************************/

  /*! exports provided: LOAD_OFFERS, LoadOffers, LOAD_OFFERS_SUCCESS, LoadOffersSuccess, LOAD_OFFERS_FAILED, LoadOffersFailed */

  /***/
  function srcAppSharedStatesOffersActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _offers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./offers.actions */
    "./src/app/shared/states/offers/actions/offers.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS", function () {
      return _offers_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_OFFERS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoadOffers", function () {
      return _offers_actions__WEBPACK_IMPORTED_MODULE_1__["LoadOffers"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS_SUCCESS", function () {
      return _offers_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_OFFERS_SUCCESS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoadOffersSuccess", function () {
      return _offers_actions__WEBPACK_IMPORTED_MODULE_1__["LoadOffersSuccess"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS_FAILED", function () {
      return _offers_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_OFFERS_FAILED"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoadOffersFailed", function () {
      return _offers_actions__WEBPACK_IMPORTED_MODULE_1__["LoadOffersFailed"];
    });
    /***/

  },

  /***/
  "./src/app/shared/states/offers/actions/offers.actions.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/states/offers/actions/offers.actions.ts ***!
    \****************************************************************/

  /*! exports provided: LOAD_OFFERS, LoadOffers, LOAD_OFFERS_SUCCESS, LoadOffersSuccess, LOAD_OFFERS_FAILED, LoadOffersFailed */

  /***/
  function srcAppSharedStatesOffersActionsOffersActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS", function () {
      return LOAD_OFFERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadOffers", function () {
      return LoadOffers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS_SUCCESS", function () {
      return LOAD_OFFERS_SUCCESS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadOffersSuccess", function () {
      return LoadOffersSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS_FAILED", function () {
      return LOAD_OFFERS_FAILED;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadOffersFailed", function () {
      return LoadOffersFailed;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var LOAD_OFFERS = '[Offers] Load Offers Information';

    var LoadOffers = function LoadOffers() {
      _classCallCheck(this, LoadOffers);

      this.type = LOAD_OFFERS;
    };

    var LOAD_OFFERS_SUCCESS = '[Offers] Load success';

    var LoadOffersSuccess = function LoadOffersSuccess(payload) {
      _classCallCheck(this, LoadOffersSuccess);

      this.payload = payload;
      this.type = LOAD_OFFERS_SUCCESS;
    };

    var LOAD_OFFERS_FAILED = '[Offer] Load failed';

    var LoadOffersFailed = function LoadOffersFailed(payload) {
      _classCallCheck(this, LoadOffersFailed);

      this.payload = payload;
      this.type = LOAD_OFFERS_FAILED;
    };
    /***/

  },

  /***/
  "./src/app/shared/states/offers/effects/index.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/states/offers/effects/index.ts ***!
    \*******************************************************/

  /*! exports provided: effects, OffersEffects */

  /***/
  function srcAppSharedStatesOffersEffectsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "effects", function () {
      return effects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _offers_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./offers.effects */
    "./src/app/shared/states/offers/effects/offers.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OffersEffects", function () {
      return _offers_effects__WEBPACK_IMPORTED_MODULE_1__["OffersEffects"];
    });

    var effects = [_offers_effects__WEBPACK_IMPORTED_MODULE_1__["OffersEffects"]];
    /***/
  },

  /***/
  "./src/app/shared/states/offers/effects/offers.effects.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/states/offers/effects/offers.effects.ts ***!
    \****************************************************************/

  /*! exports provided: OffersEffects */

  /***/
  function srcAppSharedStatesOffersEffectsOffersEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersEffects", function () {
      return OffersEffects;
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


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions */
    "./src/app/shared/states/offers/actions/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_services_offers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/offers.service */
    "./src/app/shared/services/offers.service.ts");

    var OffersEffects = function OffersEffects(actions$, offersService) {
      var _this3 = this;

      _classCallCheck(this, OffersEffects);

      this.actions$ = actions$;
      this.offersService = offersService;
      this.loadOffers$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["LOAD_OFFERS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
        return _this3.offersService.getOffers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (offers) {
          return new _actions__WEBPACK_IMPORTED_MODULE_3__["LoadOffersSuccess"](offers);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_3__["LoadOffersFailed"](error.message));
        }));
      }));
    };

    OffersEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
      }, {
        type: src_app_shared_services_offers_service__WEBPACK_IMPORTED_MODULE_6__["OffersService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], OffersEffects.prototype, "loadOffers$", void 0);
    OffersEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], OffersEffects);
    /***/
  },

  /***/
  "./src/app/shared/states/offers/index.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/states/offers/index.ts ***!
    \***********************************************/

  /*! exports provided: reducers, effects, LOAD_OFFERS, LoadOffers, LOAD_OFFERS_SUCCESS, LoadOffersSuccess, LOAD_OFFERS_FAILED, LoadOffersFailed, OffersEffects, getOffers, getOfferByID */

  /***/
  function srcAppSharedStatesOffersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./reducers */
    "./src/app/shared/states/offers/reducers/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_1__["reducers"];
    });
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./actions */
    "./src/app/shared/states/offers/actions/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_OFFERS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoadOffers", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["LoadOffers"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS_SUCCESS", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_OFFERS_SUCCESS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoadOffersSuccess", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["LoadOffersSuccess"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS_FAILED", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_OFFERS_FAILED"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoadOffersFailed", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["LoadOffersFailed"];
    });
    /* harmony import */


    var _effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./effects */
    "./src/app/shared/states/offers/effects/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "effects", function () {
      return _effects__WEBPACK_IMPORTED_MODULE_3__["effects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OffersEffects", function () {
      return _effects__WEBPACK_IMPORTED_MODULE_3__["OffersEffects"];
    });
    /* harmony import */


    var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./selectors */
    "./src/app/shared/states/offers/selectors/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getOffers", function () {
      return _selectors__WEBPACK_IMPORTED_MODULE_4__["getOffers"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getOfferByID", function () {
      return _selectors__WEBPACK_IMPORTED_MODULE_4__["getOfferByID"];
    });
    /***/

  },

  /***/
  "./src/app/shared/states/offers/reducers/index.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/states/offers/reducers/index.ts ***!
    \********************************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppSharedStatesOffersReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _offers_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./offers.reducer */
    "./src/app/shared/states/offers/reducers/offers.reducer.ts");

    var reducers = {
      offers: _offers_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
    };
    /***/
  },

  /***/
  "./src/app/shared/states/offers/reducers/offers.reducer.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/states/offers/reducers/offers.reducer.ts ***!
    \*****************************************************************/

  /*! exports provided: initialState, reducer */

  /***/
  function srcAppSharedStatesOffersReducersOffersReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions */
    "./src/app/shared/states/offers/actions/index.ts");

    var initialState = [];

    function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_OFFERS_SUCCESS"]:
          {
            return [].concat(_toConsumableArray(state), _toConsumableArray(action.payload));
          }
      }

      return state;
    }
    /***/

  },

  /***/
  "./src/app/shared/states/offers/selectors/index.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/states/offers/selectors/index.ts ***!
    \*********************************************************/

  /*! exports provided: getOffers, getOfferByID */

  /***/
  function srcAppSharedStatesOffersSelectorsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _offers_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./offers.selectors */
    "./src/app/shared/states/offers/selectors/offers.selectors.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getOffers", function () {
      return _offers_selectors__WEBPACK_IMPORTED_MODULE_1__["getOffers"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getOfferByID", function () {
      return _offers_selectors__WEBPACK_IMPORTED_MODULE_1__["getOfferByID"];
    });
    /***/

  },

  /***/
  "./src/app/shared/states/offers/selectors/offers.selectors.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/states/offers/selectors/offers.selectors.ts ***!
    \********************************************************************/

  /*! exports provided: getOffers, getOfferByID */

  /***/
  function srcAppSharedStatesOffersSelectorsOffersSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getOffers", function () {
      return getOffers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getOfferByID", function () {
      return getOfferByID;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var getOffers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('offers');

    function getOfferByID(id) {
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getOffers, function (offers) {
        return offers.find(function (offer) {
          return offer.id === id;
        });
      });
    }
    /***/

  },

  /***/
  "./src/app/shared/states/root.reducer.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/states/root.reducer.ts ***!
    \***********************************************/

  /*! exports provided: reducers, localStorageSyncReducer, metaReducers */

  /***/
  function srcAppSharedStatesRootReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function () {
      return localStorageSyncReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngrx-store-freeze */
    "./node_modules/ngrx-store-freeze/es6/index.js");
    /* harmony import */


    var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngrx-store-localstorage */
    "./node_modules/ngrx-store-localstorage/dist/index.js");
    /* harmony import */


    var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _app_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/reducers */
    "./src/app/shared/states/app/reducers/index.ts");
    /* harmony import */


    var _auth_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/reducers */
    "./src/app/shared/states/auth/reducers/index.ts");
    /* harmony import */


    var _user_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user/reducers */
    "./src/app/shared/states/user/reducers/index.ts");
    /* harmony import */


    var _offers_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./offers/reducers */
    "./src/app/shared/states/offers/reducers/index.ts");
    /* import { enableBatching } from 'redux-batched-actions'; */

    /* import { environment } from 'environments/environment'; */
    // ------------------------------------------------------------------------------


    var reducers = Object.assign({}, _app_reducers__WEBPACK_IMPORTED_MODULE_3__["reducers"], _auth_reducers__WEBPACK_IMPORTED_MODULE_4__["reducers"], _user_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"], _offers_reducers__WEBPACK_IMPORTED_MODULE_6__["reducers"]);

    function localStorageSyncReducer(reducer) {
      return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_2__["localStorageSync"])({
        keys: ['auth'],
        rehydrate: true
      })(reducer);
    } // ------------------------------------------------------------------------------
    // enableBatching allows us to dispatch multiple actions
    // without letting the subscribers being warned between the actions
    // only at the end : https://github.com/tshelburne/redux-batched-actions
    // can be very handy when normalizing HTTP response

    /* const metaReducersDev = [storeFreeze, enableBatching]; */


    var metaReducersDev = [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_1__["storeFreeze"], localStorageSyncReducer];
    /* const metaReducersProd = [enableBatching];  */

    var metaReducersProd = []; // if environment is != from production
    // use storeFreeze to avoid state mutation

    /* export const metaReducers = environment.production
        ? metaReducersProd
        : metaReducersDev; */

    var metaReducers = metaReducersDev;
    /***/
  },

  /***/
  "./src/app/shared/states/router/actions/index.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/states/router/actions/index.ts ***!
    \*******************************************************/

  /*! exports provided: GO, BACK, FORWARD, Go, Back, Forward */

  /***/
  function srcAppSharedStatesRouterActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _router_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./router.action */
    "./src/app/shared/states/router/actions/router.action.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GO", function () {
      return _router_action__WEBPACK_IMPORTED_MODULE_1__["GO"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BACK", function () {
      return _router_action__WEBPACK_IMPORTED_MODULE_1__["BACK"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FORWARD", function () {
      return _router_action__WEBPACK_IMPORTED_MODULE_1__["FORWARD"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Go", function () {
      return _router_action__WEBPACK_IMPORTED_MODULE_1__["Go"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Back", function () {
      return _router_action__WEBPACK_IMPORTED_MODULE_1__["Back"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Forward", function () {
      return _router_action__WEBPACK_IMPORTED_MODULE_1__["Forward"];
    });
    /***/

  },

  /***/
  "./src/app/shared/states/router/actions/router.action.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/states/router/actions/router.action.ts ***!
    \***************************************************************/

  /*! exports provided: GO, BACK, FORWARD, Go, Back, Forward */

  /***/
  function srcAppSharedStatesRouterActionsRouterActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GO", function () {
      return GO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACK", function () {
      return BACK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FORWARD", function () {
      return FORWARD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Go", function () {
      return Go;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Back", function () {
      return Back;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Forward", function () {
      return Forward;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var GO = '[Router] Go';
    var BACK = '[Router] Back';
    var FORWARD = '[Router] Forward';

    var Go = function Go(payload) {
      _classCallCheck(this, Go);

      this.payload = payload;
      this.type = GO;
    };

    var Back = function Back() {
      _classCallCheck(this, Back);

      this.type = BACK;
    };

    var Forward = function Forward() {
      _classCallCheck(this, Forward);

      this.type = FORWARD;
    };
    /***/

  },

  /***/
  "./src/app/shared/states/router/effects/router.effects.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/states/router/effects/router.effects.ts ***!
    \****************************************************************/

  /*! exports provided: RouterEffects */

  /***/
  function srcAppSharedStatesRouterEffectsRouterEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouterEffects", function () {
      return RouterEffects;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions */
    "./src/app/shared/states/router/actions/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RouterEffects = function RouterEffects(actions$, router, location) {
      var _this4 = this;

      _classCallCheck(this, RouterEffects);

      this.actions$ = actions$;
      this.router = router;
      this.location = location;
      this.navigate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["GO"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) {
        return action.payload;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_ref2) {
        var path = _ref2.path,
            queryParams = _ref2.query,
            extras = _ref2.extras;

        _this4.router.navigate(path, Object.assign({
          queryParams: queryParams
        }, extras));
      }));
      this.navigateBack$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["BACK"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
        return _this4.location.back();
      }));
      this.navigateForward$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["FORWARD"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
        return _this4.location.forward();
      }));
    };

    RouterEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
      dispatch: false
    })], RouterEffects.prototype, "navigate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
      dispatch: false
    })], RouterEffects.prototype, "navigateBack$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
      dispatch: false
    })], RouterEffects.prototype, "navigateForward$", void 0);
    RouterEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], RouterEffects);
    /***/
  },

  /***/
  "./src/app/shared/states/user/actions/index.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/states/user/actions/index.ts ***!
    \*****************************************************/

  /*! exports provided: LOAD_USER, LoadUser, LOAD_USER_SUCCESS, LoadUserSuccess, LOAD_USER_FAILED, LoadUserFailed, UPDATE_USER, UpdateUser, UPDATE_USER_SUCCESS, UpdateUserSuccess, UPDATE_USER_FAILED, UpdateUserFailed, LOGOUT_USER, Logout */

  /***/
  function srcAppSharedStatesUserActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.actions */
    "./src/app/shared/states/user/actions/user.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LOAD_USER", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoadUser", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_1__["LoadUser"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_SUCCESS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoadUserSuccess", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_1__["LoadUserSuccess"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILED", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_FAILED"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoadUserFailed", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_1__["LoadUserFailed"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateUser", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateUser"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_USER_SUCCESS", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER_SUCCESS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserSuccess", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateUserSuccess"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_USER_FAILED", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER_FAILED"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserFailed", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateUserFailed"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_USER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Logout", function () {
      return _user_actions__WEBPACK_IMPORTED_MODULE_1__["Logout"];
    });
    /***/

  },

  /***/
  "./src/app/shared/states/user/actions/user.actions.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/states/user/actions/user.actions.ts ***!
    \************************************************************/

  /*! exports provided: LOAD_USER, LoadUser, LOAD_USER_SUCCESS, LoadUserSuccess, LOAD_USER_FAILED, LoadUserFailed, UPDATE_USER, UpdateUser, UPDATE_USER_SUCCESS, UpdateUserSuccess, UPDATE_USER_FAILED, UpdateUserFailed, LOGOUT_USER, Logout */

  /***/
  function srcAppSharedStatesUserActionsUserActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOAD_USER", function () {
      return LOAD_USER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadUser", function () {
      return LoadUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function () {
      return LOAD_USER_SUCCESS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadUserSuccess", function () {
      return LoadUserSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILED", function () {
      return LOAD_USER_FAILED;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadUserFailed", function () {
      return LoadUserFailed;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function () {
      return UPDATE_USER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUser", function () {
      return UpdateUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_USER_SUCCESS", function () {
      return UPDATE_USER_SUCCESS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserSuccess", function () {
      return UpdateUserSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_USER_FAILED", function () {
      return UPDATE_USER_FAILED;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserFailed", function () {
      return UpdateUserFailed;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function () {
      return LOGOUT_USER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Logout", function () {
      return Logout;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var LOAD_USER = '[User] Load User Information';

    var LoadUser = function LoadUser() {
      _classCallCheck(this, LoadUser);

      this.type = LOAD_USER;
    };

    var LOAD_USER_SUCCESS = '[User] Load success';

    var LoadUserSuccess = function LoadUserSuccess(payload) {
      _classCallCheck(this, LoadUserSuccess);

      this.payload = payload;
      this.type = LOAD_USER_SUCCESS;
    };

    var LOAD_USER_FAILED = '[User] Load failed';

    var LoadUserFailed = function LoadUserFailed(payload) {
      _classCallCheck(this, LoadUserFailed);

      this.payload = payload;
      this.type = LOAD_USER_FAILED;
    };

    var UPDATE_USER = '[User] Update User Information';

    var UpdateUser = function UpdateUser(payload) {
      _classCallCheck(this, UpdateUser);

      this.payload = payload;
      this.type = UPDATE_USER;
    };

    var UPDATE_USER_SUCCESS = '[User] Update User Information SUCCESS';

    var UpdateUserSuccess = function UpdateUserSuccess(payload) {
      _classCallCheck(this, UpdateUserSuccess);

      this.payload = payload;
      this.type = UPDATE_USER_SUCCESS;
    };

    var UPDATE_USER_FAILED = '[User] Update User Information FAILED';

    var UpdateUserFailed = function UpdateUserFailed(payload) {
      _classCallCheck(this, UpdateUserFailed);

      this.payload = payload;
      this.type = UPDATE_USER_FAILED;
    };

    var LOGOUT_USER = '[User] Logout';

    var Logout = function Logout() {
      _classCallCheck(this, Logout);

      this.type = LOGOUT_USER;
    };
    /***/

  },

  /***/
  "./src/app/shared/states/user/effects/user.effects.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/states/user/effects/user.effects.ts ***!
    \************************************************************/

  /*! exports provided: UserEffects */

  /***/
  function srcAppSharedStatesUserEffectsUserEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEffects", function () {
      return UserEffects;
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


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions */
    "./src/app/shared/states/user/actions/index.ts");
    /* harmony import */


    var _auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth/actions */
    "./src/app/shared/states/auth/actions/index.ts");
    /* harmony import */


    var _router_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../router/actions */
    "./src/app/shared/states/router/actions/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/profile.service */
    "./src/app/shared/services/profile.service.ts");
    /* harmony import */


    var _services_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/notifications.service */
    "./src/app/shared/services/notifications.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UserEffects = function UserEffects(actions$, profileService, notificationsService) {
      var _this5 = this;

      _classCallCheck(this, UserEffects);

      this.actions$ = actions$;
      this.profileService = profileService;
      this.notificationsService = notificationsService;
      this.me$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
        return _this5.profileService.loadProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
          return new _actions__WEBPACK_IMPORTED_MODULE_3__["LoadUserSuccess"](user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_3__["LoadUserFailed"](error.message));
        }));
      }));
      this.loadUserSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
        return new _router_actions__WEBPACK_IMPORTED_MODULE_5__["Go"]({
          path: ['admin/dashboard']
        });
      }));
      this.updateUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_USER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (action) {
        return _this5.profileService.updateProfile(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
          return new _actions__WEBPACK_IMPORTED_MODULE_3__["UpdateUserSuccess"](action.payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_3__["UpdateUserFailed"](error.message));
        }));
      }));
      this.updateUserSuccessNotification$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_USER_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
        return _this5.notificationsService.showNotification('Modificación realizada', 'Actualizar usuario');
      })); // Si quieres desplazar al usuario una vez realizado el cambio.

      /* @Effect()
      updateUserSuccessRouter$: Observable<RouterActions.Go> = this.actions$.pipe(
        ofType(UserActions.UPDATE_USER_SUCCESS),
        map(() => new RouterActions.Go({ path: ['admin/dashboard'] }))
      ); */

      this.addUsersFailed$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_USER_FAILED"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
        return _this5.notificationsService.showNotification('Error: Inténtelo más tarde', 'Crear usuario');
      })); // POR AQUÍ

      this.updateUserRouter$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_USER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (action) {
        return _this5.profileService.updateProfile(action.payload);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (token) {
        _this5.notificationsService.showNotification('Modificación realizada', 'Actualizar usuario');

        return new _auth_actions__WEBPACK_IMPORTED_MODULE_4__["IdentificationRefresh"](token);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
        _this5.notificationsService.showNotification('Error: Inténtelo más tarde', 'Actualizar usuario');

        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_3__["LoadUserFailed"](error.message));
      }));
      this.logout$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_USER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
        return [new _auth_actions__WEBPACK_IMPORTED_MODULE_4__["IdentificationLogout"](), new _router_actions__WEBPACK_IMPORTED_MODULE_5__["Go"]({
          path: ['/login']
        })];
      }));
    };

    UserEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
      }, {
        type: _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]
      }, {
        type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], UserEffects.prototype, "me$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], UserEffects.prototype, "loadUserSuccess$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], UserEffects.prototype, "updateUser$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({
      dispatch: false
    })], UserEffects.prototype, "updateUserSuccessNotification$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({
      dispatch: false
    })], UserEffects.prototype, "addUsersFailed$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], UserEffects.prototype, "updateUserRouter$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], UserEffects.prototype, "logout$", void 0);
    UserEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserEffects);
    /***/
  },

  /***/
  "./src/app/shared/states/user/reducers/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/states/user/reducers/index.ts ***!
    \******************************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppSharedStatesUserReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.reducer */
    "./src/app/shared/states/user/reducers/user.reducer.ts");

    var reducers = {
      user: _user_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
    };
    /***/
  },

  /***/
  "./src/app/shared/states/user/reducers/user.reducer.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/states/user/reducers/user.reducer.ts ***!
    \*************************************************************/

  /*! exports provided: initialState, reducer */

  /***/
  function srcAppSharedStatesUserReducersUserReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions */
    "./src/app/shared/states/user/actions/index.ts");

    var initialState = {
      password: '',
      id: -1,
      username: '',
      name: '',
      surname: '',
      birthdate: '',
      phone: '',
      phone2: '',
      email: '',
      documentNumber: '',
      documentType: {
        uid: -1,
        name: ''
      },
      aboutMe: '',
      otherCompetences: '',
      license: '',
      avatar_hash: '',
      address: {
        street: '',
        province: {
          uid: -1,
          name: ''
        },
        municipe: {
          uid: -1,
          name: ''
        }
      },
      roles: [],
      studies: [],
      experiencies: [],
      languages: [],
      offers: [],
      hasFailed: false
    };

    function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER"]:
          {
            return Object.assign({}, state);
          }

        case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_SUCCESS"]:
          {
            return Object.assign({}, state, action.payload, {
              hasFailed: false
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_FAILED"]:
          {
            return Object.assign({}, state, {
              hasFailed: true
            });
          }

        case _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER_SUCCESS"]:
          {
            return Object.assign({}, state, action.payload);
          }

        case _actions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_USER"]:
          {
            return Object.assign({}, state, initialState);
          }
      }

      return state;
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
        return console.error(err);
      });
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/gimco/Projects/UOC/FAV/bolsaempleo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map