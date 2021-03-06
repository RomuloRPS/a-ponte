(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-detail-group-chat-detail-group-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail-group/chat-detail-group.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail-group/chat-detail-group.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the ChatDetailPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n\n   <img style=\"top: 2px; left: 30px;\" class=\"profile-picture left\" src=\"../../assets/img/logo-elo.png\"/>\n   <span style=\"position: absolute; top: 4px; left: 90px;\"><strong>Grupo Eloverde</strong></span>\n   <span style=\"position: absolute; top: 20px; left: 90px; font-size: small; opacity: 0.8;\">Rômulo, Ben Sparrow, você</span>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngFor=\"let message of chat.messages; let i = index\">\n    <div  class=\"message-wrapper rlt\"\n    (hold)=\"onMessageHold($event, $index, message)\">\n\n <div *ngIf=\"message.type == 'received'\">\n\n   <img class=\"profile-picture left\" src=\"{{ chat.face }}\"/>\n\n   <div class=\"chat-bubble left\">\n     <span><strong>{{chat.name}}</strong></span>\n     <div class=\"message\" style=\"margin-top: 5px;\">\n       {{ message.text }}\n       <img src=\"{{ message.image }}\" class=\"block\" *ngIf=\"message.image\" alt=\"\"/>\n     </div>\n\n     <div class=\"message-detail\">\n       <span class=\"message-time\">{{ message.time }}</span>\n     </div>\n\n   </div>\n </div>\n\n <div *ngIf=\"message.type == 'sent'\">\n\n   <img class=\"profile-picture right\" src=\"./assets/img/thumb/adam.jpg\"/>\n\n   <div class=\"chat-bubble right\">\n\n     <div class=\"message\" ng-bind-html=\"message.text\">\n       {{ message.text }}\n     </div>\n\n     <div class=\"message-detail\">\n       <span class=\"message-time\">{{ message.time }}</span>\n     </div>\n\n   </div>\n\n </div>\n\n <div class=\"cf\"></div>\n\n</div>\n<div  class=\"message-wrapper rlt\" *ngIf=\"i + 1 == chat.messages.length\">\n  <div >\n    <img class=\"profile-picture left\" src=\"../../assets/img/mike.png\"/>\n\n    <div class=\"chat-bubble left\">\n      <span><strong>Rômulo</strong></span>\n      <div class=\"message\" style=\"margin-top: 5px;\">\n        Nice Try! Let's keep improving\n      </div>\n\n      <div class=\"message-detail\">\n        <span class=\"message-time\">Quinta 05:59</span>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"cf\"></div>\n</div>\n  </ng-container>\n  \n\n  \n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar class=\"no-border\" color=\"light\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon name=\"camera\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-input [(ngModel)]=\"newMessage\" placeholder=\"Escreva sua mensagem\"></ion-input>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"sendMessage()\">\n        <ion-icon name=\"send\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/chat-detail-group/chat-detail-group-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/chat-detail-group/chat-detail-group-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ChatDetailGroupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailGroupPageRoutingModule", function() { return ChatDetailGroupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_detail_group_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-detail-group.page */ "./src/app/chat-detail-group/chat-detail-group.page.ts");




const routes = [
    {
        path: '',
        component: _chat_detail_group_page__WEBPACK_IMPORTED_MODULE_3__["ChatDetailGroupPage"]
    }
];
let ChatDetailGroupPageRoutingModule = class ChatDetailGroupPageRoutingModule {
};
ChatDetailGroupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChatDetailGroupPageRoutingModule);



/***/ }),

/***/ "./src/app/chat-detail-group/chat-detail-group.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/chat-detail-group/chat-detail-group.module.ts ***!
  \***************************************************************/
/*! exports provided: ChatDetailGroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailGroupPageModule", function() { return ChatDetailGroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_detail_group_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-detail-group-routing.module */ "./src/app/chat-detail-group/chat-detail-group-routing.module.ts");
/* harmony import */ var _chat_detail_group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-detail-group.page */ "./src/app/chat-detail-group/chat-detail-group.page.ts");







let ChatDetailGroupPageModule = class ChatDetailGroupPageModule {
};
ChatDetailGroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_detail_group_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatDetailGroupPageRoutingModule"]
        ],
        declarations: [_chat_detail_group_page__WEBPACK_IMPORTED_MODULE_6__["ChatDetailGroupPage"]]
    })
], ChatDetailGroupPageModule);



/***/ }),

/***/ "./src/app/chat-detail-group/chat-detail-group.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/chat-detail-group/chat-detail-group.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nimg.profile-picture {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  bottom: 10px;\n}\nimg.profile-picture.left {\n  left: 10px;\n}\nimg.profile-picture.right {\n  right: 10px;\n}\nimg.logo-group {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  bottom: 10px;\n  border-radius: 100%;\n}\nimg.logo-group.left {\n  left: 10px;\n}\nimg.logo-group.right {\n  right: 10px;\n}\n.ion-email {\n  float: right;\n  font-size: 32px;\n  vertical-align: middle;\n}\n.message {\n  font-size: 14px;\n}\n.message-detail {\n  white-space: nowrap;\n  font-size: 14px;\n}\n.bar.item-input-inset .item-input-wrapper input {\n  width: 100% !important;\n}\n.message-wrapper {\n  position: relative;\n}\n.message-wrapper:last-child {\n  margin-bottom: 10px;\n}\n.chat-bubble {\n  border-radius: 5px;\n  display: inline-block;\n  padding: 10px 18px;\n  position: relative;\n  margin: 10px;\n  max-width: 80%;\n}\n.chat-bubble .message-time {\n  font-size: 0.7em;\n  display: block;\n}\n.chat-bubble:before {\n  content: \" \";\n  display: block;\n  height: 16px;\n  width: 9px;\n  position: absolute;\n  bottom: -7.5px;\n}\n.chat-bubble.left {\n  background-color: #e6e5eb;\n  float: left;\n  margin-left: 55px;\n}\n.chat-bubble.left:before {\n  background-color: #e6e5eb;\n  left: 10px;\n  -webkit-transform: rotate(70deg) skew(5deg);\n}\n.chat-bubble.right {\n  background-color: #158ffe;\n  color: #fff;\n  float: right;\n  margin-right: 55px;\n}\n.chat-bubble.right:before {\n  background-color: #158ffe;\n  right: 10px;\n  -webkit-transform: rotate(118deg) skew(-5deg);\n}\n.chat-bubble.right a.autolinker {\n  color: #fff;\n  font-weight: bold;\n}\n.chat-bubble.right .message-time {\n  text-align: right;\n}\n.bar-footer {\n  height: auto;\n  overflow: visible !important;\n}\n.bar-footer .item-input-inset {\n  padding-left: 0;\n  padding-right: 0;\n}\n.bar-footer textarea {\n  resize: none;\n  height: 1.5em;\n  width: 100%;\n  background: none;\n}\n.bar-footer .footer-btn-wrap {\n  align-self: flex-end;\n}\n.bar-footer .footer-btn-wrap .button-icon:before {\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1kZXRhaWwtZ3JvdXAvY2hhdC1kZXRhaWwtZ3JvdXAucGFnZS5zY3NzIiwiL1VzZXJzL3JvbXVsb3JhbW9zZGVzaXF1ZWlyYS9Eb3dubG9hZHMvcHJvamV0by1yZWRlLXNvY2lhbC9zcmMvYXBwL2NoYXQtZGV0YWlsLWdyb3VwL2NoYXQtZGV0YWlsLWdyb3VwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRENGO0FDQ0U7RUFDRSxVQUFBO0FEQ0o7QUNFRTtFQUNFLFdBQUE7QURBSjtBQ0lBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRERGO0FDR0U7RUFDRSxVQUFBO0FEREo7QUNJRTtFQUNFLFdBQUE7QURGSjtBQ01BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBREhGO0FDTUE7RUFDRSxlQUFBO0FESEY7QUNNQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBREhGO0FDUUk7RUFDRSxzQkFBQTtBRExOO0FDVUE7RUFDRSxrQkFBQTtBRFBGO0FDU0U7RUFDRSxtQkFBQTtBRFBKO0FDV0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FEUkY7QUNVRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBRFJKO0FDV0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEVEo7QUNZRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEVko7QUNZSTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FEVk47QUNjRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRFpKO0FDY0k7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtBRFpOO0FDZUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QURiTjtBQ2dCSTtFQUNFLGlCQUFBO0FEZE47QUNtQkE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7QURoQkY7QUNrQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QURoQko7QUNtQkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRGpCSjtBQ29CRTtFQUNFLG9CQUFBO0FEbEJKO0FDb0JJO0VBQ0UsZ0JBQUE7QURsQk4iLCJmaWxlIjoic3JjL2FwcC9jaGF0LWRldGFpbC1ncm91cC9jaGF0LWRldGFpbC1ncm91cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pbWcucHJvZmlsZS1waWN0dXJlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG59XG5pbWcucHJvZmlsZS1waWN0dXJlLmxlZnQge1xuICBsZWZ0OiAxMHB4O1xufVxuaW1nLnByb2ZpbGUtcGljdHVyZS5yaWdodCB7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG5pbWcubG9nby1ncm91cCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuaW1nLmxvZ28tZ3JvdXAubGVmdCB7XG4gIGxlZnQ6IDEwcHg7XG59XG5pbWcubG9nby1ncm91cC5yaWdodCB7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uaW9uLWVtYWlsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDMycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWVzc2FnZS1kZXRhaWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5iYXIuaXRlbS1pbnB1dC1pbnNldCAuaXRlbS1pbnB1dC13cmFwcGVyIGlucHV0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm1lc3NhZ2Utd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tZXNzYWdlLXdyYXBwZXI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jaGF0LWJ1YmJsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cbi5jaGF0LWJ1YmJsZSAubWVzc2FnZS10aW1lIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2hhdC1idWJibGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLCoFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogOXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTcuNXB4O1xufVxuLmNoYXQtYnViYmxlLmxlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNWViO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XG59XG4uY2hhdC1idWJibGUubGVmdDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNWViO1xuICBsZWZ0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcwZGVnKSBza2V3KDVkZWcpO1xufVxuLmNoYXQtYnViYmxlLnJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1OGZmZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xufVxuLmNoYXQtYnViYmxlLnJpZ2h0OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNThmZmU7XG4gIHJpZ2h0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDExOGRlZykgc2tldygtNWRlZyk7XG59XG4uY2hhdC1idWJibGUucmlnaHQgYS5hdXRvbGlua2VyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNoYXQtYnViYmxlLnJpZ2h0IC5tZXNzYWdlLXRpbWUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJhci1mb290ZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG4uYmFyLWZvb3RlciAuaXRlbS1pbnB1dC1pbnNldCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5iYXItZm9vdGVyIHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBoZWlnaHQ6IDEuNWVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5iYXItZm9vdGVyIC5mb290ZXItYnRuLXdyYXAge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5iYXItZm9vdGVyIC5mb290ZXItYnRuLXdyYXAgLmJ1dHRvbi1pY29uOmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59IiwiXG5pbWcucHJvZmlsZS1waWN0dXJlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG5cbiAgJi5sZWZ0IHtcbiAgICBsZWZ0OiAxMHB4O1xuICB9XG5cbiAgJi5yaWdodCB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cbn1cblxuaW1nLmxvZ28tZ3JvdXAge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuICAmLmxlZnQge1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cblxuICAmLnJpZ2h0IHtcbiAgICByaWdodDogMTBweDtcbiAgfVxufVxuXG4uaW9uLWVtYWlsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDMycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWVzc2FnZS1kZXRhaWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5iYXIuaXRlbS1pbnB1dC1pbnNldCB7XG4gIC5pdGVtLWlucHV0LXdyYXBwZXIge1xuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5tZXNzYWdlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG5cbi5jaGF0LWJ1YmJsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcblxuICAubWVzc2FnZS10aW1lIHtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwwMGEwXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiA5cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTcuNXB4O1xuICB9XG5cbiAgJi5sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNWViO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTVlYjtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcwZGVnKSBza2V3KDVkZWcpO1xuICAgIH1cbiAgfVxuXG4gICYucmlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNThmZmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogNTVweDtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNThmZmU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTE4ZGVnKSBza2V3KC01ZGVnKTtcbiAgICB9XG5cbiAgICBhLmF1dG9saW5rZXIge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAubWVzc2FnZS10aW1lIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgfVxufVxuXG4uYmFyLWZvb3RlciB7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcblxuICAuaXRlbS1pbnB1dC1pbnNldCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cblxuICB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuXG4gIC5mb290ZXItYnRuLXdyYXAge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gICAgLmJ1dHRvbi1pY29uOmJlZm9yZSB7XG4gICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cbiAgfVxufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/chat-detail-group/chat-detail-group.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/chat-detail-group/chat-detail-group.page.ts ***!
  \*************************************************************/
/*! exports provided: ChatDetailGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailGroupPage", function() { return ChatDetailGroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
let ChatDetailGroupPage = class ChatDetailGroupPage {
    constructor(chatService) {
        this.chatService = chatService;
        // get sample data only
        // this.chat = chatService.getItem(activatedRoute.snapshot.paramMap.get('id'));
        this.chat = chatService.getItem(0);
    }
    // send message
    sendMessage() {
        if (this.newMessage) {
            this.chat.messages.push({
                type: 'sent',
                text: this.newMessage,
                image: '',
                time: 'Agora mesmo'
            });
            // clear input
            this.newMessage = '';
            // scroll to bottom
            setTimeout(() => {
                // scroll to bottom
                this.content.scrollToBottom();
            }, 200);
        }
    }
};
ChatDetailGroupPage.ctorParameters = () => [
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], ChatDetailGroupPage.prototype, "content", void 0);
ChatDetailGroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat-detail-group.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail-group/chat-detail-group.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat-detail-group.page.scss */ "./src/app/chat-detail-group/chat-detail-group.page.scss")).default]
    })
], ChatDetailGroupPage);



/***/ })

}]);
//# sourceMappingURL=chat-detail-group-chat-detail-group-module-es2015.js.map