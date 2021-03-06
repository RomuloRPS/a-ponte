(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Início</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card >\n    <ion-card-header>\n      <ion-card-title>Live Tim Cook</ion-card-title>\n      <ion-card-subtitle>Online agora, live com Tim Cook - CEO Apple</ion-card-subtitle>\n    </ion-card-header>\n        <ion-img src=\"https://macmagazine.com.br/wp-content/uploads/2018/06/13-cook.jpg\">\n          \n        </ion-img>\n\n        <h2 style=\"text-align: center;\">Participantes</h2>\n        <ion-item lines=\"full\">\n          <ion-icon slot=\"start\" item-left name=\"person-outline\" color=\"primary\"></ion-icon>\n          <ion-label>Rômulo</ion-label>\n        </ion-item>\n\n        <ion-item lines=\"full\" >\n          <ion-icon slot=\"start\" item-left name=\"person-outline\" color=\"primary\"></ion-icon>\n          <ion-label>André</ion-label>\n        </ion-item>\n\n        <ion-item lines=\"full\" >\n          <ion-icon slot=\"start\" item-left name=\"person-outline\" color=\"primary\"></ion-icon>\n          <ion-label>Leonardo</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" >\n          <ion-label color=\"primary\" style=\"text-align: center;\">... mais 947</ion-label>\n        </ion-item>\n        <div style=\"text-align: center; margin: auto;\">\n          <ion-button >\n            Participar\n          </ion-button>\n        </div>\n  </ion-card>\n\n  <ion-card >\n    <ion-card-header>\n      <ion-card-title>Eventos</ion-card-title>\n      <ion-card-subtitle>Fique por dentro do que vai ocorrer na semana</ion-card-subtitle>\n    </ion-card-header>\n    \n        <ion-item lines=\"none\" >\n          <ion-icon slot=\"start\" item-left name=\"calendar-outline\" color=\"primary\"></ion-icon>\n          <ion-text>\n            Entrevista com Mark Zuckerberg\n            <br>\n            <span style=\"font-size: small;\">Quinta - 04/03/2021 19:00</span>\n          </ion-text>\n          <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon icon=\"notifications-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n\n        <ion-item lines=\"none\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n          <ion-icon slot=\"start\" item-left name=\"calendar-outline\" color=\"primary\"></ion-icon>\n          <ion-text>Entrevista com Jeff Bezos\n            <br>\n            <span style=\"font-size: small;\">Sexta - 05/03/2021 19:00</span>\n          </ion-text>\n          <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon icon=\"notifications-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n\n        <ion-item lines=\"none\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n          <ion-icon slot=\"start\" item-left name=\"calendar-outline\" color=\"primary\"></ion-icon>\n          <ion-text>Entrevista com Elon Musk\n            <br>\n            <span style=\"font-size: small;\">Sábado - 06/03/2021 19:00</span>\n          </ion-text>\n          \n          <ion-buttons slot=\"end\">\n            <ion-button>\n              <ion-icon icon=\"notifications-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n        <br>\n  </ion-card>\n\n  <ion-card *ngFor=\"let post of posts\">\n    <ion-item lines=\"full\">\n      <ion-avatar slot=\"start\" [routerLink]=\"'/users/' + post.user_id\">\n        <img src=\"{{ post.face }}\">\n      </ion-avatar>\n      <ion-label>\n        <h2 [routerLink]=\"'/users/' + post.user_id\">{{ post.name }}</h2>\n        <p>{{ post.time }}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"post-body\" lines=\"full\">\n      <ion-label class=\"ion-text-wrap\">\n        <div [routerLink]=\"'/posts/' + post.id\">\n          <img class=\"full-image\" *ngIf=\"post.image\" src=\"{{ post.image }}\">\n          <p class=\"ion-padding-top ion-padding-bottom\">{{ post.content }}</p>\n        </div>\n\n        <div>\n          <span [routerLink]=\"'/posts/' + post.id\" class=\"subdued\">{{ post.likeCount}} Curtidas</span>\n          <span class=\"ion-margin-start subdued\" [routerLink]=\"'/posts/' + post.id\">{{ post.commentCount}}\n            Comentários</span>\n        </div>\n      </ion-label>\n    </ion-item>\n\n    <ion-grid class=\"post-actions\">\n      <ion-row>\n        <ion-col size=\"4\" class=\"ion-text-center\" (click)=\"toggleLike(post)\">\n          <ion-icon name=\"heart\" color=\"primary\" *ngIf=\"post.liked\"></ion-icon>\n          <ion-icon name=\"heart-outline\" *ngIf=\"!post.liked\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-center\" [routerLink]=\"'/posts/' + post.id\">\n          <ion-icon name=\"chatbox-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <ion-icon name=\"share-social-outline\"></ion-icon>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post-body p {\n  font-size: 0.8em;\n}\n.post-body a.subdued {\n  font-size: 0.8em;\n}\n.post-actions {\n  color: #7C7C7C;\n  font-size: 1.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb211bG9yYW1vc2Rlc2lxdWVpcmEvRG93bmxvYWRzL3Byb2pldG8tcmVkZS1zb2NpYWwvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsZ0JBQUE7QUNGSjtBREtFO0VBQ0UsZ0JBQUE7QUNISjtBRE9BO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucG9zdC1ib2R5IHtcblxuICBwIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG5cbiAgYS5zdWJkdWVkIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG59XG5cbi5wb3N0LWFjdGlvbnMge1xuICBjb2xvcjogIzdDN0M3QztcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuIiwiLnBvc3QtYm9keSBwIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5wb3N0LWJvZHkgYS5zdWJkdWVkIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLnBvc3QtYWN0aW9ucyB7XG4gIGNvbG9yOiAjN0M3QzdDO1xuICBmb250LXNpemU6IDEuNGVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
let HomePage = class HomePage {
    constructor(postService) {
        this.postService = postService;
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
HomePage.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map