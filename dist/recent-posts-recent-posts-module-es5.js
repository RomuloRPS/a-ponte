function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recent-posts-recent-posts-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recent-posts/recent-posts.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recent-posts/recent-posts.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecentPostsRecentPostsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\n  Generated template for the RecentPostsPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Posts mais recentes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"timeline-list\">\n\n    <div class=\"item\" *ngFor=\"let post of posts\">\n      <div class=\"item-inner\">\n        <div [routerLink]=\"'/users/' + post.user_id\" class=\"item-header-img\">\n          <img class=\"profile-picture\" src=\"{{ post.face }}\" alt=\"\"/>\n        </div>\n\n        <ion-text color=\"primary\" class=\"post-author\" [routerLink]=\"'/users/' + post.user_id\">\n          {{ post.name }}\n        </ion-text>\n\n        <ion-text color=\"dark\" class=\"post-time\">\n          <ion-icon name=\"timer-outline\"></ion-icon>\n          {{ post.time }}\n        </ion-text>\n\n        <div class=\"post-content\">\n          <img class=\"full-image\" *ngIf=\"post.image\" src=\"{{ post.image }}\">\n          <p>{{ post.content}}</p>\n\n          <p>\n            <a (click)=\"toggleLike(post)\" class=\"subdued\">\n              <ion-icon name=\"heart\" color=\"danger\" *ngIf=\"post.liked\"></ion-icon>\n              <ion-icon name=\"heart-outline\" color=\"medium\" *ngIf=\"!post.liked\"></ion-icon>\n              {{ post.likeCount}}\n            </a>\n            <a class=\"subdued\">\n              <ion-icon name=\"chatbox-outline\" color=\"primary\"></ion-icon>\n              {{ post.commentCount}}\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/recent-posts/recent-posts-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/recent-posts/recent-posts-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: RecentPostsPageRoutingModule */

  /***/
  function srcAppRecentPostsRecentPostsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecentPostsPageRoutingModule", function () {
      return RecentPostsPageRoutingModule;
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


    var _recent_posts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recent-posts.page */
    "./src/app/recent-posts/recent-posts.page.ts");

    var routes = [{
      path: '',
      component: _recent_posts_page__WEBPACK_IMPORTED_MODULE_3__["RecentPostsPage"]
    }];

    var RecentPostsPageRoutingModule = function RecentPostsPageRoutingModule() {
      _classCallCheck(this, RecentPostsPageRoutingModule);
    };

    RecentPostsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RecentPostsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/recent-posts/recent-posts.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/recent-posts/recent-posts.module.ts ***!
    \*****************************************************/

  /*! exports provided: RecentPostsPageModule */

  /***/
  function srcAppRecentPostsRecentPostsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecentPostsPageModule", function () {
      return RecentPostsPageModule;
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


    var _recent_posts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./recent-posts-routing.module */
    "./src/app/recent-posts/recent-posts-routing.module.ts");
    /* harmony import */


    var _recent_posts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./recent-posts.page */
    "./src/app/recent-posts/recent-posts.page.ts");

    var RecentPostsPageModule = function RecentPostsPageModule() {
      _classCallCheck(this, RecentPostsPageModule);
    };

    RecentPostsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _recent_posts_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecentPostsPageRoutingModule"]],
      declarations: [_recent_posts_page__WEBPACK_IMPORTED_MODULE_6__["RecentPostsPage"]]
    })], RecentPostsPageModule);
    /***/
  },

  /***/
  "./src/app/recent-posts/recent-posts.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/recent-posts/recent-posts.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecentPostsRecentPostsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".timeline-list {\n  padding-top: 1em;\n}\n.timeline-list .item {\n  padding-left: 1.2em;\n  position: relative;\n}\n.timeline-list .item .item-inner {\n  border-bottom: none;\n  padding-top: 0.4em;\n  padding-left: 0.8em;\n  border-left: 1px solid var(--ion-color-primary);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n.timeline-list .item .item-inner .item-header-img {\n  position: absolute;\n  top: 0;\n  left: 0.3em;\n}\n.timeline-list .item .item-inner .item-header-img .profile-picture {\n  width: 2em;\n  height: 2em;\n}\n.timeline-list .item .item-inner .post-author {\n  margin-left: 0.5em;\n}\n.timeline-list .item .item-inner .post-time {\n  position: absolute;\n  top: 0.5em;\n  right: 1.5em;\n}\n.timeline-list .item .item-inner .post-content {\n  margin-top: 1em;\n  padding-bottom: 1em;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb211bG9yYW1vc2Rlc2lxdWVpcmEvRG93bmxvYWRzL3Byb2pldG8tcmVkZS1zb2NpYWwvc3JjL2FwcC9yZWNlbnQtcG9zdHMvcmVjZW50LXBvc3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVjZW50LXBvc3RzL3JlY2VudC1wb3N0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBQTtBQ0FGO0FERUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURFSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EscURBQUE7QUNBTjtBREVNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0FSO0FERVE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0FWO0FESU07RUFDRSxrQkFBQTtBQ0ZSO0FES007RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDSFI7QURNTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9yZWNlbnQtcG9zdHMvcmVjZW50LXBvc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRpbWVsaW5lLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMWVtO1xuXG4gIC5pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5pdGVtLWlubmVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICBwYWRkaW5nLXRvcDogMC40ZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuOGVtO1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICAgICAgLml0ZW0taGVhZGVyLWltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwLjNlbTtcblxuICAgICAgICAucHJvZmlsZS1waWN0dXJlIHtcbiAgICAgICAgICB3aWR0aDogMmVtO1xuICAgICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wb3N0LWF1dGhvciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICAgIH1cblxuICAgICAgLnBvc3QtdGltZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwLjVlbTtcbiAgICAgICAgcmlnaHQ6IDEuNWVtO1xuICAgICAgfVxuXG4gICAgICAucG9zdC1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbiIsIi50aW1lbGluZS1saXN0IHtcbiAgcGFkZGluZy10b3A6IDFlbTtcbn1cbi50aW1lbGluZS1saXN0IC5pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRpbWVsaW5lLWxpc3QgLml0ZW0gLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBwYWRkaW5nLXRvcDogMC40ZW07XG4gIHBhZGRpbmctbGVmdDogMC44ZW07XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi50aW1lbGluZS1saXN0IC5pdGVtIC5pdGVtLWlubmVyIC5pdGVtLWhlYWRlci1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMC4zZW07XG59XG4udGltZWxpbmUtbGlzdCAuaXRlbSAuaXRlbS1pbm5lciAuaXRlbS1oZWFkZXItaW1nIC5wcm9maWxlLXBpY3R1cmUge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbn1cbi50aW1lbGluZS1saXN0IC5pdGVtIC5pdGVtLWlubmVyIC5wb3N0LWF1dGhvciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cbi50aW1lbGluZS1saXN0IC5pdGVtIC5pdGVtLWlubmVyIC5wb3N0LXRpbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC41ZW07XG4gIHJpZ2h0OiAxLjVlbTtcbn1cbi50aW1lbGluZS1saXN0IC5pdGVtIC5pdGVtLWlubmVyIC5wb3N0LWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/recent-posts/recent-posts.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/recent-posts/recent-posts.page.ts ***!
    \***************************************************/

  /*! exports provided: RecentPostsPage */

  /***/
  function srcAppRecentPostsRecentPostsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecentPostsPage", function () {
      return RecentPostsPage;
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


    var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");
    /*
     Generated class for the LoginPage page.
    
     See http://ionicframework.com/docs/v2/components/#navigation for more info on
     Ionic pages and navigation.
     */


    var RecentPostsPage = /*#__PURE__*/function () {
      function RecentPostsPage(postService) {
        _classCallCheck(this, RecentPostsPage);

        this.postService = postService; // get sample data only

        this.posts = postService.getAll();
      }

      _createClass(RecentPostsPage, [{
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

      return RecentPostsPage;
    }();

    RecentPostsPage.ctorParameters = function () {
      return [{
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]
      }];
    };

    RecentPostsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recent-posts',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./recent-posts.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recent-posts/recent-posts.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./recent-posts.page.scss */
      "./src/app/recent-posts/recent-posts.page.scss"))["default"]]
    })], RecentPostsPage);
    /***/
  }
}]);
//# sourceMappingURL=recent-posts-recent-posts-module-es5.js.map