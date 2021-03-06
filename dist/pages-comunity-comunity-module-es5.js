function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-comunity-comunity-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comunity/comunity.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comunity/comunity.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesComunityComunityPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\n  Generated template for the WallPostsPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Comunidades</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div style=\"text-align: center; margin: auto;\">\n    <br>\n    <ion-button>\n      <ion-icon slot=\"start\" name=\"add-outline\"></ion-icon>\n      Criar Comunidade</ion-button>\n      <p style=\"font-size: small;\">*Apenas moderadores</p>\n\n     \n  </div>\n  <div style=\"text-align: center; margin: auto;\">\n  <ion-button fill=\"outline\">\n    <ion-icon slot=\"start\" name=\"add-outline\"></ion-icon>\n    Sugerir grupo</ion-button>\n    <p style=\"font-size: small;\">*Usuários comuns</p>\n  </div>\n  <ion-card >\n    <ion-card-header>\n      <ion-card-title>Grupos e Comunidades</ion-card-title>\n      <ion-card-subtitle>Participe dos nossos grupos e fique informado sobre as novidades</ion-card-subtitle>\n    </ion-card-header>\n    \n        <ion-item lines=\"none\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n          <ion-icon slot=\"start\" item-left name=\"people-outline\" color=\"primary\"></ion-icon>\n          <ion-text>\n            Mercado Financeiro\n          </ion-text>\n          <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon icon=\"log-in-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n\n        <ion-item lines=\"none\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n          <ion-icon slot=\"start\" item-left name=\"people-outline\" color=\"primary\"></ion-icon>\n          <ion-text>\n            Esportes\n          </ion-text>\n          <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon icon=\"log-in-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n\n        <ion-item lines=\"none\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n          <ion-icon slot=\"start\" item-left name=\"people-outline\" color=\"primary\"></ion-icon>\n          <ion-text>Entrevista com Elon Musk\n          </ion-text>\n          \n          <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon icon=\"log-in-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n        <br>\n  </ion-card>\n</ion-content>\n \n";
    /***/
  },

  /***/
  "./src/app/pages/comunity/comunity-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/comunity/comunity-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ComunityPageRoutingModule */

  /***/
  function srcAppPagesComunityComunityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComunityPageRoutingModule", function () {
      return ComunityPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _comunity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comunity.page */
    "./src/app/pages/comunity/comunity.page.ts");

    var routes = [{
      path: '',
      component: _comunity_page__WEBPACK_IMPORTED_MODULE_3__["ComunityPage"]
    }];

    var ComunityPageRoutingModule = function ComunityPageRoutingModule() {
      _classCallCheck(this, ComunityPageRoutingModule);
    };

    ComunityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComunityPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/comunity/comunity.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/comunity/comunity.module.ts ***!
    \***************************************************/

  /*! exports provided: ComunityPageModule */

  /***/
  function srcAppPagesComunityComunityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComunityPageModule", function () {
      return ComunityPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _comunity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comunity-routing.module */
    "./src/app/pages/comunity/comunity-routing.module.ts");
    /* harmony import */


    var _comunity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comunity.page */
    "./src/app/pages/comunity/comunity.page.ts");

    var ComunityPageModule = function ComunityPageModule() {
      _classCallCheck(this, ComunityPageModule);
    };

    ComunityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _comunity_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComunityPageRoutingModule"]],
      declarations: [_comunity_page__WEBPACK_IMPORTED_MODULE_6__["ComunityPage"]]
    })], ComunityPageModule);
    /***/
  },

  /***/
  "./src/app/pages/comunity/comunity.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/comunity/comunity.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesComunityComunityPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXVuaXR5L2NvbXVuaXR5LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/comunity/comunity.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/comunity/comunity.page.ts ***!
    \*************************************************/

  /*! exports provided: ComunityPage */

  /***/
  function srcAppPagesComunityComunityPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComunityPage", function () {
      return ComunityPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ComunityPage = /*#__PURE__*/function () {
      function ComunityPage() {
        _classCallCheck(this, ComunityPage);
      }

      _createClass(ComunityPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ComunityPage;
    }();

    ComunityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comunity',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./comunity.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/comunity/comunity.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./comunity.page.scss */
      "./src/app/pages/comunity/comunity.page.scss"))["default"]]
    })], ComunityPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-comunity-comunity-module-es5.js.map