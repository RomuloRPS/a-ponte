(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-post-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the PostPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"start\" [routerLink]=\"'/users/' + post.user_id\">\n      <img src=\"{{ post.face }}\">\n    </ion-avatar>\n    <ion-label>\n      <ion-text color=\"primary\" class=\"post-author\" [routerLink]=\"'/users/' + post.user_id\">\n        <h2>{{ post.name }}</h2>\n\n      </ion-text>\n      <span class=\"post-time\">\n      <ion-icon name=\"timer-outline\"></ion-icon>\n        {{ post.time }}\n    </span>\n    </ion-label>\n  </ion-item>\n\n  <div class=\"ion-padding\">\n    <img class=\"full-image\" *ngIf=\"post.image\" src=\"{{ post.image }}\">\n    <p>{{ post.content}}</p>\n\n    <p>\n      <a (click)=\"toggleLike(post)\" class=\"subdued\">\n        <ion-icon name=\"heart\" color=\"danger\" *ngIf=\"post.liked\"></ion-icon>\n        <ion-icon name=\"heart-outline\" color=\"medium\" *ngIf=\"!post.liked\"></ion-icon>\n        {{ post.likeCount}}\n      </a>\n      <a class=\"subdued\">\n        <ion-icon name=\"chatbox-outline\" color=\"primary\"></ion-icon>\n        {{ post.commentCount}}\n      </a>\n    </p>\n  </div>\n\n  <ion-list>\n    <ion-item class=\"post-comment\" *ngFor=\"let comment of post.comments\">\n      <ion-avatar slot=\"start\" [routerLink]=\"'/users/' + comment.user_id\">\n        <img src=\"{{ comment.face }}\">\n      </ion-avatar>\n      <ion-label class=\"ion-text-wrap\">\n        <ion-text color=\"primary\" class=\"post-author\">\n          <h3>\n            {{ comment.name }}\n          </h3>\n\n        </ion-text>\n        <p>{{ comment.content}}</p>\n        <a class=\"subdued like-count\">\n          <ion-icon name=\"heart\" color=\"danger\" *ngIf=\"comment.liked\"></ion-icon>\n          <ion-icon name=\"heart-outline\" color=\"medium\" *ngIf=\"!comment.liked\"></ion-icon>\n          {{ comment.likeCount}}\n        </a>\n        <span class=\"post-time\">\n        <ion-icon name=\"timer-outline\"></ion-icon>\n          {{ comment.time }}\n      </span>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/post/post-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/post/post-routing.module.ts ***!
  \*********************************************/
/*! exports provided: PostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageRoutingModule", function() { return PostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post.page */ "./src/app/post/post.page.ts");




const routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_3__["PostPage"]
    }
];
let PostPageRoutingModule = class PostPageRoutingModule {
};
PostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PostPageRoutingModule);



/***/ }),

/***/ "./src/app/post/post.module.ts":
/*!*************************************!*\
  !*** ./src/app/post/post.module.ts ***!
  \*************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-routing.module */ "./src/app/post/post-routing.module.ts");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.page */ "./src/app/post/post.page.ts");







let PostPageModule = class PostPageModule {
};
PostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _post_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostPageRoutingModule"]
        ],
        declarations: [_post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]]
    })
], PostPageModule);



/***/ }),

/***/ "./src/app/post/post.page.scss":
/*!*************************************!*\
  !*** ./src/app/post/post.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post-author {\n  align-self: center;\n}\n\nh3.post-author {\n  font-weight: normal;\n}\n\n.post-comment .like-count {\n  margin-right: 5px;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb211bG9yYW1vc2Rlc2lxdWVpcmEvRG93bmxvYWRzL3Byb2pldG8tcmVkZS1zb2NpYWwvc3JjL2FwcC9wb3N0L3Bvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wb3N0L3Bvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FES0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3Bvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucG9zdC1hdXRob3Ige1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbmgzLnBvc3QtYXV0aG9yIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnBvc3QtY29tbWVudCB7XG5cbiAgLmxpa2UtY291bnQge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbn1cbiIsIi5wb3N0LWF1dGhvciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuaDMucG9zdC1hdXRob3Ige1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ucG9zdC1jb21tZW50IC5saWtlLWNvdW50IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/post/post.page.ts":
/*!***********************************!*\
  !*** ./src/app/post/post.page.ts ***!
  \***********************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
let PostPage = class PostPage {
    constructor(postService) {
        this.postService = postService;
        // get sample data only
        // this.post = postService.getItem(activatedRoute.snapshot.paramMap.get('id'));
        this.post = postService.getItem(0);
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
PostPage.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
PostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./post.page.scss */ "./src/app/post/post.page.scss")).default]
    })
], PostPage);



/***/ })

}]);
//# sourceMappingURL=post-post-module-es2015.js.map