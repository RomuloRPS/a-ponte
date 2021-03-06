function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=\"primary\" class=\"no-border\">\n    <ion-title>{{ user.name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <div class=\"ion-text-center user-profile primary-bg\">\n\n    <img class=\"profile-picture\" src=\"{{ user.face}}\">\n    \n    <h5><strong>MINI BIO</strong></h5 >\n\n    <p style=\"text-align: center; width: 80%; margin: auto; font-style: italic;\">\"{{user.name}} é um economista brasileiro, professor da Escola de Administração de Empresas da Fundação Getúlio Vargas e comentarista da rádio Jovem Pan\"</p>\n\n    <br>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <span class=\"number\">{{ user.followers }}</span>\n          <span class=\"desc\">Seguidores</span>\n        </ion-col>\n        <ion-col size=\"4\">\n          <span class=\"number\">{{ user.following }}</span>\n          <span class=\"desc\">Seguindo</span>\n        </ion-col>\n        <ion-col size=\"4\">\n          <span class=\"number\">{{ user.favorites }}</span>\n          <span class=\"desc\">Favoritos</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-card>\n    <ion-list>\n      <ion-list-header>\n        <ion-title>Interesses</ion-title>\n      </ion-list-header>\n      \n      <ion-item lines=\"full\">\n        <ion-icon slot=\"start\" color=\"success\" name=\"checkmark-circle-outline\"></ion-icon>\n        <ion-label>Software</ion-label>\n      </ion-item>\n  \n      <ion-item lines=\"full\">\n        <ion-icon slot=\"start\" color=\"success\" name=\"checkmark-circle-outline\"></ion-icon>\n        <ion-label>Gestão</ion-label>\n      </ion-item>\n  \n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" color=\"success\" name=\"checkmark-circle-outline\"></ion-icon>\n        <ion-label>Recursos Humanos</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-list>\n      <ion-list-header>\n        <ion-title>Convênios</ion-title>\n      </ion-list-header>\n      \n      <ion-item lines=\"full\">\n        <ion-icon color=\"warning\" slot=\"start\"  name=\"pricetag-outline\"></ion-icon>\n        <ion-label>Unimed</ion-label>\n      </ion-item>\n  \n      <ion-item lines=\"full\">\n        <ion-icon color=\"warning\" slot=\"start\"  name=\"pricetag-outline\"></ion-icon>\n        <ion-label>Uniodonto</ion-label>\n      </ion-item>\n  \n      <ion-item lines=\"none\">\n        <ion-icon color=\"warning\" slot=\"start\" name=\"pricetag-outline\"></ion-icon>\n        <ion-label>Farmácia do trabalhador</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/user/user-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: UserPageRoutingModule */

  /***/
  function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function () {
      return UserPageRoutingModule;
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


    var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/user/user.page.ts");

    var routes = [{
      path: '',
      component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }];

    var UserPageRoutingModule = function UserPageRoutingModule() {
      _classCallCheck(this, UserPageRoutingModule);
    };

    UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserPageModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageModule", function () {
      return UserPageModule;
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


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/user/user-routing.module.ts");
    /* harmony import */


    var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/user/user.page.ts");

    var UserPageModule = function UserPageModule() {
      _classCallCheck(this, UserPageModule);
    };

    UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]],
      declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })], UserPageModule);
    /***/
  },

  /***/
  "./src/app/user/user.page.scss":
  /*!*************************************!*\
    !*** ./src/app/user/user.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-picture {\n  width: 8em;\n  height: 8em;\n}\n\nion-row {\n  border-top: 1px solid var(--ion-color-light-shade);\n}\n\nion-row .number {\n  display: block;\n}\n\n.post-content .subdued {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb211bG9yYW1vc2Rlc2lxdWVpcmEvRG93bmxvYWRzL3Byb2pldG8tcmVkZS1zb2NpYWwvc3JjL2FwcC91c2VyL3VzZXIucGFnZS5zY3NzIiwic3JjL2FwcC91c2VyL3VzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGtEQUFBO0FDQUY7O0FERUU7RUFDRSxjQUFBO0FDQUo7O0FETUU7RUFDRSxpQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnByb2ZpbGUtcGljdHVyZSB7XG4gIHdpZHRoOiA4ZW07XG4gIGhlaWdodDogOGVtO1xufVxuXG5pb24tcm93IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG5cbiAgLm51bWJlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLnBvc3QtY29udGVudCB7XG5cbiAgLnN1YmR1ZWQge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG59XG5cbiIsIi5wcm9maWxlLXBpY3R1cmUge1xuICB3aWR0aDogOGVtO1xuICBoZWlnaHQ6IDhlbTtcbn1cblxuaW9uLXJvdyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuaW9uLXJvdyAubnVtYmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wb3N0LWNvbnRlbnQgLnN1YmR1ZWQge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/user.page.ts":
  /*!***********************************!*\
    !*** ./src/app/user/user.page.ts ***!
    \***********************************/

  /*! exports provided: UserPage */

  /***/
  function srcAppUserUserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPage", function () {
      return UserPage;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /*
     Generated class for the LoginPage page.
    
     See http://ionicframework.com/docs/v2/components/#navigation for more info on
     Ionic pages and navigation.
     */


    var UserPage = /*#__PURE__*/function () {
      function UserPage(activatedRoute, userService, postService) {
        _classCallCheck(this, UserPage);

        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.postService = postService; // get sample data only
        // this.user = userService.getItem(activatedRoute.snapshot.paramMap.get('id'));

        this.user = userService.getItem(0);
        Object.assign(this.user, {
          followers: 199,
          following: 48,
          favorites: 14,
          posts: postService.getAll()
        });
      }

      _createClass(UserPage, [{
        key: "toggleLike",
        value: function toggleLike(post) {
          // if user liked
          if (post.liked) {
            post.likeCount--;
          } else {
            post.likeCount++;
          }

          post.liked = !post.liked;
        }
      }]);

      return UserPage;
    }();

    UserPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
      }];
    };

    UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user.page.scss */
      "./src/app/user/user.page.scss"))["default"]]
    })], UserPage);
    /***/
  }
}]);
//# sourceMappingURL=user-user-module-es5.js.map