(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/states/user/effects/index.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/states/user/effects/index.ts ***!
    \*****************************************************/

  /*! exports provided: effects, UserEffects */

  /***/
  function srcAppSharedStatesUserEffectsIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _user_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.effects */
    "./src/app/shared/states/user/effects/user.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserEffects", function () {
      return _user_effects__WEBPACK_IMPORTED_MODULE_1__["UserEffects"];
    });

    var effects = [_user_effects__WEBPACK_IMPORTED_MODULE_1__["UserEffects"]];
    /***/
  },

  /***/
  "./src/app/shared/states/user/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/states/user/index.ts ***!
    \*********************************************/

  /*! exports provided: reducers, LOAD_USER, LoadUser, LOAD_USER_SUCCESS, LoadUserSuccess, LOAD_USER_FAILED, LoadUserFailed, UPDATE_USER, UpdateUser, UPDATE_USER_SUCCESS, UpdateUserSuccess, UPDATE_USER_FAILED, UpdateUserFailed, LOGOUT_USER, Logout, effects, UserEffects, getProfile, getLanguages, getLanguageByID, getStudies, getStudyByID */

  /***/
  function srcAppSharedStatesUserIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./reducers */
    "./src/app/shared/states/user/reducers/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_1__["reducers"];
    });
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./actions */
    "./src/app/shared/states/user/actions/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LOAD_USER", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoadUser", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["LoadUser"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoadUserSuccess", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["LoadUserSuccess"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILED", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILED"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoadUserFailed", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["LoadUserFailed"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateUser", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["UpdateUser"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_USER_SUCCESS", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER_SUCCESS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserSuccess", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["UpdateUserSuccess"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_USER_FAILED", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER_FAILED"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserFailed", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["UpdateUserFailed"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["LOGOUT_USER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Logout", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_2__["Logout"];
    });
    /* harmony import */


    var _effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./effects */
    "./src/app/shared/states/user/effects/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "effects", function () {
      return _effects__WEBPACK_IMPORTED_MODULE_3__["effects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserEffects", function () {
      return _effects__WEBPACK_IMPORTED_MODULE_3__["UserEffects"];
    });
    /* harmony import */


    var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./selectors */
    "./src/app/shared/states/user/selectors/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getProfile", function () {
      return _selectors__WEBPACK_IMPORTED_MODULE_4__["getProfile"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getLanguages", function () {
      return _selectors__WEBPACK_IMPORTED_MODULE_4__["getLanguages"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getLanguageByID", function () {
      return _selectors__WEBPACK_IMPORTED_MODULE_4__["getLanguageByID"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getStudies", function () {
      return _selectors__WEBPACK_IMPORTED_MODULE_4__["getStudies"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getStudyByID", function () {
      return _selectors__WEBPACK_IMPORTED_MODULE_4__["getStudyByID"];
    });
    /***/

  },

  /***/
  "./src/app/shared/states/user/selectors/index.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/states/user/selectors/index.ts ***!
    \*******************************************************/

  /*! exports provided: getProfile, getLanguages, getLanguageByID, getStudies, getStudyByID */

  /***/
  function srcAppSharedStatesUserSelectorsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.selectors */
    "./src/app/shared/states/user/selectors/user.selectors.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getProfile", function () {
      return _user_selectors__WEBPACK_IMPORTED_MODULE_1__["getProfile"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getLanguages", function () {
      return _user_selectors__WEBPACK_IMPORTED_MODULE_1__["getLanguages"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getLanguageByID", function () {
      return _user_selectors__WEBPACK_IMPORTED_MODULE_1__["getLanguageByID"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getStudies", function () {
      return _user_selectors__WEBPACK_IMPORTED_MODULE_1__["getStudies"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getStudyByID", function () {
      return _user_selectors__WEBPACK_IMPORTED_MODULE_1__["getStudyByID"];
    });
    /***/

  },

  /***/
  "./src/app/shared/states/user/selectors/user.selectors.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/states/user/selectors/user.selectors.ts ***!
    \****************************************************************/

  /*! exports provided: getProfile, getLanguages, getLanguageByID, getStudies, getStudyByID */

  /***/
  function srcAppSharedStatesUserSelectorsUserSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getProfile", function () {
      return getProfile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLanguages", function () {
      return getLanguages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLanguageByID", function () {
      return getLanguageByID;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getStudies", function () {
      return getStudies;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getStudyByID", function () {
      return getStudyByID;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var getProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('user');
    var getLanguages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProfile, function (_ref) {
      var languages = _ref.languages;
      return languages;
    });

    function getLanguageByID(id) {
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getLanguages, function (languages) {
        return languages.find(function (language) {
          return language.uid === id;
        });
      });
    }

    var getStudies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getProfile, function (_ref2) {
      var studies = _ref2.studies;
      return studies;
    });

    function getStudyByID(id) {
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getStudies, function (studies) {
        return studies.find(function (study) {
          return study.uid === id;
        });
      });
    }
    /***/

  }
}]);