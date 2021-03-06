(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wall-posts-wall-posts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wall-posts/wall-posts.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wall-posts/wall-posts.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the WallPostsPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Mural</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card >\n    <ion-card-header>\n      <ion-card-title>Eventos</ion-card-title>\n      <ion-card-subtitle>Fique por dentro do que vai ocorrer na semana</ion-card-subtitle>\n    </ion-card-header>\n    \n        <ion-item lines=\"none\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n          <ion-icon slot=\"start\" item-left name=\"calendar-outline\" color=\"primary\"></ion-icon>\n          <ion-text>\n            Entrevista com Mark Zuckerberg\n            <br>\n            <span style=\"font-size: small;\">Quinta - 04/03/2021 19:00</span>\n          </ion-text>\n          <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon icon=\"notifications-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n\n        <ion-item lines=\"none\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n          <ion-icon slot=\"start\" item-left name=\"calendar-outline\" color=\"primary\"></ion-icon>\n          <ion-text>Entrevista com Jeff Bezos\n            <br>\n            <span style=\"font-size: small;\">Sexta - 05/03/2021 19:00</span>\n          </ion-text>\n          <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon icon=\"notifications-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n\n        <ion-item lines=\"none\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n          <ion-icon slot=\"start\" item-left name=\"calendar-outline\" color=\"primary\"></ion-icon>\n          <ion-text>Entrevista com Elon Musk\n            <br>\n            <span style=\"font-size: small;\">Sábado - 06/03/2021 19:00</span>\n          </ion-text>\n          \n          <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon icon=\"notifications-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n        <br>\n  </ion-card>\n\n  <ion-card >\n    <ion-card-header>\n      <ion-card-title>Grupos e Comunidades</ion-card-title>\n      <ion-card-subtitle>Participe dos nossos grupos e fique informado sobre as novidades</ion-card-subtitle>\n    </ion-card-header>\n    \n        <ion-item lines=\"none\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n          <ion-icon slot=\"start\" item-left name=\"people-outline\" color=\"primary\"></ion-icon>\n          <ion-text>\n            Mercado Financeiro\n          </ion-text>\n          <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon icon=\"log-in-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n\n        <ion-item lines=\"none\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n          <ion-icon slot=\"start\" item-left name=\"people-outline\" color=\"primary\"></ion-icon>\n          <ion-text>\n            Esportes\n          </ion-text>\n          <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon icon=\"log-in-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n\n        <ion-item lines=\"none\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n          <ion-icon slot=\"start\" item-left name=\"people-outline\" color=\"primary\"></ion-icon>\n          <ion-text>Entrevista com Elon Musk\n          </ion-text>\n          \n          <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon icon=\"log-in-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n        <br>\n  </ion-card>\n</ion-content>\n \n");

/***/ }),

/***/ "./src/app/wall-posts/wall-posts-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/wall-posts/wall-posts-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WallPostsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallPostsPageRoutingModule", function() { return WallPostsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _wall_posts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wall-posts.page */ "./src/app/wall-posts/wall-posts.page.ts");




const routes = [
    {
        path: '',
        component: _wall_posts_page__WEBPACK_IMPORTED_MODULE_3__["WallPostsPage"]
    }
];
let WallPostsPageRoutingModule = class WallPostsPageRoutingModule {
};
WallPostsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WallPostsPageRoutingModule);



/***/ }),

/***/ "./src/app/wall-posts/wall-posts.module.ts":
/*!*************************************************!*\
  !*** ./src/app/wall-posts/wall-posts.module.ts ***!
  \*************************************************/
/*! exports provided: WallPostsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallPostsPageModule", function() { return WallPostsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _wall_posts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wall-posts-routing.module */ "./src/app/wall-posts/wall-posts-routing.module.ts");
/* harmony import */ var _wall_posts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wall-posts.page */ "./src/app/wall-posts/wall-posts.page.ts");







let WallPostsPageModule = class WallPostsPageModule {
};
WallPostsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _wall_posts_routing_module__WEBPACK_IMPORTED_MODULE_5__["WallPostsPageRoutingModule"]
        ],
        declarations: [_wall_posts_page__WEBPACK_IMPORTED_MODULE_6__["WallPostsPage"]]
    })
], WallPostsPageModule);



/***/ }),

/***/ "./src/app/wall-posts/wall-posts.page.scss":
/*!*************************************************!*\
  !*** ./src/app/wall-posts/wall-posts.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhbGwtcG9zdHMvd2FsbC1wb3N0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/wall-posts/wall-posts.page.ts":
/*!***********************************************!*\
  !*** ./src/app/wall-posts/wall-posts.page.ts ***!
  \***********************************************/
/*! exports provided: WallPostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallPostsPage", function() { return WallPostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
let WallPostsPage = class WallPostsPage {
    constructor(postService) {
        this.postService = postService;
        // get sample data only
        this.posts = postService.getAll();
    }
    toggleLike(post) {
        // if user liked
        if (post.liked) {
            post.likeCount--;
        }
        else {
            post.likeCount++;
        }
        post.liked = !post.liked;
    }
};
WallPostsPage.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
WallPostsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wall-posts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./wall-posts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wall-posts/wall-posts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./wall-posts.page.scss */ "./src/app/wall-posts/wall-posts.page.scss")).default]
    })
], WallPostsPage);



/***/ })

}]);
//# sourceMappingURL=wall-posts-wall-posts-module-es2015.js.map