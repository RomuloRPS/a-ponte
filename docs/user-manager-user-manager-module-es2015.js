(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-manager-user-manager-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-manager/user-manager.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-manager/user-manager.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the ContactsPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Gerenciar Usuários</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"search-form\">\n    <ion-icon name=\"search\"></ion-icon>\n    <ion-input type=\"text\" placeholder=\"{{ contacts.length }} contatos\"></ion-input>\n  </div>\n\n  <ion-list lines=\"full\">\n\n    <ion-item-sliding *ngFor=\"let contact of contacts\">\n\n      <ion-item>\n        <ion-avatar slot=\"start\" [routerLink]=\"'/users/' + contact.id\">\n          <img class=\"profile-picture\" src=\"{{ contact.face }}\" alt=\"\"/>\n        </ion-avatar>\n\n        <ion-label>\n          <ion-text color=\"primary\" [routerLink]=\"'/users/' + contact.id\">\n            <h3>{{ contact.name }}</h3>\n          </ion-text>\n        </ion-label>\n\n        <ion-buttons slot=\"end\">\n          <ion-button slot=\"start\" color=\"primary\">\n            <ion-icon color=\"success\" name=\"checkmark-circle-outline\"> </ion-icon>\n          </ion-button>\n          <ion-button slot=\"end\" color=\"danger\">\n            <ion-icon  name=\"trash\" ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n\n\n      </ion-item>\n\n      <ion-item-options>\n        <ion-button color=\"light\">\n          <ion-icon name=\"more\"></ion-icon>\n        </ion-button>\n        <ion-button color=\"success\">\n          <ion-icon name=\"call\"></ion-icon>\n        </ion-button>\n        <ion-button color=\"primary\">\n          <ion-icon name=\"text\"></ion-icon>\n        </ion-button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/user-manager/user-manager-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/user-manager/user-manager-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserManagerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerPageRoutingModule", function() { return UserManagerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_manager_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-manager.page */ "./src/app/user-manager/user-manager.page.ts");




const routes = [
    {
        path: '',
        component: _user_manager_page__WEBPACK_IMPORTED_MODULE_3__["UserManagerPage"]
    }
];
let UserManagerPageRoutingModule = class UserManagerPageRoutingModule {
};
UserManagerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserManagerPageRoutingModule);



/***/ }),

/***/ "./src/app/user-manager/user-manager.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-manager/user-manager.module.ts ***!
  \*****************************************************/
/*! exports provided: UserManagerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerPageModule", function() { return UserManagerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_manager_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-manager-routing.module */ "./src/app/user-manager/user-manager-routing.module.ts");
/* harmony import */ var _user_manager_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-manager.page */ "./src/app/user-manager/user-manager.page.ts");







let UserManagerPageModule = class UserManagerPageModule {
};
UserManagerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_manager_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserManagerPageRoutingModule"]
        ],
        declarations: [_user_manager_page__WEBPACK_IMPORTED_MODULE_6__["UserManagerPage"]]
    })
], UserManagerPageModule);



/***/ }),

/***/ "./src/app/user-manager/user-manager.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/user-manager/user-manager.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-badge {\n  font-size: 0.6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb211bG9yYW1vc2Rlc2lxdWVpcmEvRG93bmxvYWRzL3Byb2pldG8tcmVkZS1zb2NpYWwvc3JjL2FwcC91c2VyLW1hbmFnZXIvdXNlci1tYW5hZ2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXNlci1tYW5hZ2VyL3VzZXItbWFuYWdlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdXNlci1tYW5hZ2VyL3VzZXItbWFuYWdlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG59XG4iLCJpb24tYmFkZ2Uge1xuICBmb250LXNpemU6IDAuNmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user-manager/user-manager.page.ts":
/*!***************************************************!*\
  !*** ./src/app/user-manager/user-manager.page.ts ***!
  \***************************************************/
/*! exports provided: UserManagerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerPage", function() { return UserManagerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
let UserManagerPage = class UserManagerPage {
    constructor(userService) {
        this.userService = userService;
        this.contacts = userService.getAll();
    }
};
UserManagerPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
UserManagerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-manager',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-manager.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-manager/user-manager.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-manager.page.scss */ "./src/app/user-manager/user-manager.page.scss")).default]
    })
], UserManagerPage);



/***/ })

}]);
//# sourceMappingURL=user-manager-user-manager-module-es2015.js.map