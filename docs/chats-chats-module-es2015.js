(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chats-chats-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chats.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chats.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the ChatsPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Mensagens</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"full\">\n\n    <ion-item-sliding>\n\n      <ion-item [routerLink]=\"'/chat-group/'\">\n        <ion-avatar slot=\"start\">\n          <img class=\"profile-picture\" src=\"../../assets/img/logo-elo.png\" alt=\"\"/>\n        </ion-avatar>\n        <ion-label class=\"ion-text-wrap\">\n          <ion-text color=\"primary\">\n            <h2>Grupo Eloverde</h2>\n          </ion-text>\n          <p><strong>Rômulo:</strong> Nice try! Let's keep improving</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options>\n        <ion-item-option color=\"warning\">\n          Silenciar\n        </ion-item-option>\n        <ion-item-option color=\"danger\">\n          Sair do grupo\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    \n\n    <ion-item-sliding *ngFor=\"let chat of chats\">\n\n      <ion-item [routerLink]=\"'/chats/' + chat.id\">\n        <ion-avatar slot=\"start\">\n          <img class=\"profile-picture\" src=\"{{ chat.face }}\" alt=\"\"/>\n        </ion-avatar>\n        <ion-label class=\"ion-text-wrap\">\n          <ion-text color=\"primary\">\n            <h2>{{chat.name}}</h2>\n          </ion-text>\n          <p>{{chat.lastText}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options>\n        <ion-item-option color=\"warning\">\n          Silenciar\n        </ion-item-option>\n        <ion-item-option color=\"danger\">\n          Deletar\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/chats/chats-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/chats/chats-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ChatsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageRoutingModule", function() { return ChatsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats.page */ "./src/app/chats/chats.page.ts");




const routes = [
    {
        path: '',
        component: _chats_page__WEBPACK_IMPORTED_MODULE_3__["ChatsPage"]
    }
];
let ChatsPageRoutingModule = class ChatsPageRoutingModule {
};
ChatsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChatsPageRoutingModule);



/***/ }),

/***/ "./src/app/chats/chats.module.ts":
/*!***************************************!*\
  !*** ./src/app/chats/chats.module.ts ***!
  \***************************************/
/*! exports provided: ChatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _chats_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chats-routing.module */ "./src/app/chats/chats-routing.module.ts");
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chats.page */ "./src/app/chats/chats.page.ts");







let ChatsPageModule = class ChatsPageModule {
};
ChatsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chats_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatsPageRoutingModule"]
        ],
        declarations: [_chats_page__WEBPACK_IMPORTED_MODULE_6__["ChatsPage"]]
    })
], ChatsPageModule);



/***/ }),

/***/ "./src/app/chats/chats.page.scss":
/*!***************************************!*\
  !*** ./src/app/chats/chats.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXRzL2NoYXRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/chats/chats.page.ts":
/*!*************************************!*\
  !*** ./src/app/chats/chats.page.ts ***!
  \*************************************/
/*! exports provided: ChatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPage", function() { return ChatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
let ChatsPage = class ChatsPage {
    constructor(chatService) {
        this.chatService = chatService;
        // get sample data only
        this.chats = chatService.getAll();
    }
};
ChatsPage.ctorParameters = () => [
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }
];
ChatsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chats',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chats.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chats.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chats.page.scss */ "./src/app/chats/chats.page.scss")).default]
    })
], ChatsPage);



/***/ })

}]);
//# sourceMappingURL=chats-chats-module-es2015.js.map