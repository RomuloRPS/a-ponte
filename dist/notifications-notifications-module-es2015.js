(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Notificações</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"notifications-list\">\n\n    <div class=\"item\" *ngFor=\"let notification of notifications\">\n      <div class=\"item-inner\">\n        <span class=\"item-label danger-bg\" *ngIf=\"notification.type == 'liked'\">\n          <ion-icon name=\"heart\" color=\"light\"></ion-icon>\n        </span>\n\n        <span class=\"item-label secondary-bg\" *ngIf=\"notification.type == 'commented'\">\n          <ion-icon name=\"chatbox-outline\"></ion-icon>\n        </span>\n\n        <span class=\"item-label success-bg\" *ngIf=\"notification.type == 'friend_request'\">\n          <ion-icon name=\"add-outline\"></ion-icon>\n        </span>\n\n        <ion-text color=\"primary\" class=\"post-author\">\n          {{ notification.name }}\n        </ion-text>\n        <span class=\"notifications-content\" *ngIf=\"notification.type == 'liked'\">Curtiu seu post</span>\n        <span class=\"notifications-content\" *ngIf=\"notification.type == 'commented'\">Comentou seu post</span>\n        <span class=\"notifications-content\" *ngIf=\"notification.type == 'friend_request'\">\n          Quer adicionar à sua rede de contatos\n        </span>\n\n        <p class=\"post-time\">\n          <ion-icon name=\"timer-outline\"></ion-icon>\n          {{ notification.time }}\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/notifications/notifications-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function() { return NotificationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications-routing.module */ "./src/app/notifications/notifications-routing.module.ts");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");







let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })
], NotificationsPageModule);



/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notifications-list .item {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  margin-top: -1em;\n}\n.notifications-list .item .item-inner {\n  border-left: 1px solid var(--ion-color-primary);\n  margin-left: 2em;\n  padding: 1em 1em 0;\n}\n.notifications-list .item-label {\n  display: block;\n  position: absolute;\n  padding: 5px 0 0;\n  left: 20px;\n  top: 24px;\n  width: 20px;\n  height: 14px;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 8px;\n  border: 3px solid #FFF;\n  box-sizing: content-box;\n  color: #FFF;\n}\n.notifications-list .post-author, .notifications-list .notifications-content {\n  font-size: 0.8em;\n  font-weight: normal;\n}\n.notifications-list .post-time {\n  margin-top: 1em;\n  font-size: 0.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb211bG9yYW1vc2Rlc2lxdWVpcmEvRG93bmxvYWRzL3Byb2pldG8tcmVkZS1zb2NpYWwvc3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDREo7QURHSTtFQUNFLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ROO0FES0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDSEo7QURNRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRE9FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubm90aWZpY2F0aW9ucy1saXN0IHtcbiAgLml0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiAtMWVtO1xuXG4gICAgLml0ZW0taW5uZXIge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgICAgcGFkZGluZzogMWVtIDFlbSAwO1xuICAgIH1cbiAgfVxuXG4gIC5pdGVtLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogNXB4IDAgMDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIHRvcDogMjRweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRkZGO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGNvbG9yOiAjRkZGO1xuICB9XG5cbiAgLnBvc3QtYXV0aG9yLCAubm90aWZpY2F0aW9ucy1jb250ZW50IHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAucG9zdC10aW1lIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgfVxufVxuXG4iLCIubm90aWZpY2F0aW9ucy1saXN0IC5pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IC0xZW07XG59XG4ubm90aWZpY2F0aW9ucy1saXN0IC5pdGVtIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbi1sZWZ0OiAyZW07XG4gIHBhZGRpbmc6IDFlbSAxZW0gMDtcbn1cbi5ub3RpZmljYXRpb25zLWxpc3QgLml0ZW0tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA1cHggMCAwO1xuICBsZWZ0OiAyMHB4O1xuICB0b3A6IDI0cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDhweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0ZGRjtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGNvbG9yOiAjRkZGO1xufVxuLm5vdGlmaWNhdGlvbnMtbGlzdCAucG9zdC1hdXRob3IsIC5ub3RpZmljYXRpb25zLWxpc3QgLm5vdGlmaWNhdGlvbnMtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubm90aWZpY2F0aW9ucy1saXN0IC5wb3N0LXRpbWUge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
let NotificationsPage = class NotificationsPage {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.notifications = notificationService.getAll();
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }
];
NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")).default]
    })
], NotificationsPage);



/***/ }),

/***/ "./src/app/services/mock-notifications.ts":
/*!************************************************!*\
  !*** ./src/app/services/mock-notifications.ts ***!
  \************************************************/
/*! exports provided: NOTIFICATIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATIONS", function() { return NOTIFICATIONS; });
let NOTIFICATIONS = [
    {
        id: 1,
        type: 'liked',
        user_id: 2,
        name: 'Max Lynx',
        face: 'assets/img/thumb/max.png',
        read: false,
        time: 'Agora mesmo'
    },
    {
        id: 2,
        type: 'commented',
        user_id: 2,
        name: 'Adam Bradleyson',
        face: 'assets/img/thumb/adam.jpg',
        read: true,
        time: '3 minutos atrás'
    },
    {
        id: 3,
        type: 'friend_request',
        user_id: 2,
        name: 'Perry Governor',
        face: 'assets/img/thumb/perry.png',
        read: true,
        time: '5 minutos atrás'
    },
    {
        id: 4,
        type: 'liked',
        user_id: 2,
        name: 'Ben Sparrow',
        face: 'assets/img/thumb/ben.png',
        read: false,
        time: '6 minutos atrás'
    },
    {
        id: 5,
        type: 'friend_request',
        user_id: 2,
        name: 'Perry Governor',
        face: 'assets/img/thumb/perry.png',
        read: true,
        time: '5 minutos atrás'
    },
    {
        id: 6,
        type: 'liked',
        user_id: 2,
        name: 'Ben Sparrow',
        face: 'assets/img/thumb/ben.png',
        read: false,
        time: '6 minutos atrás'
    }
];


/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mock_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-notifications */ "./src/app/services/mock-notifications.ts");



let NotificationService = class NotificationService {
    constructor() {
        this.notifications = _mock_notifications__WEBPACK_IMPORTED_MODULE_2__["NOTIFICATIONS"];
    }
    getAll() {
        return this.notifications;
    }
    getItem(id) {
        for (const notification of this.notifications) {
            if (notification.id === parseInt(id, 0)) {
                return notification;
            }
        }
        return null;
    }
    remove(item) {
        this.notifications.splice(this.notifications.indexOf(item), 1);
    }
};
NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationService);



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map