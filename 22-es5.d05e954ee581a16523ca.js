function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var n=0,e=function(){};return{s:e,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o,r=!0,a=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){a=!0,o=t},f:function(){try{r||null==i.return||i.return()}finally{if(a)throw o}}}}function _unsupportedIterableToArray(t,n){if(t){if("string"==typeof t)return _arrayLikeToArray(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,n):void 0}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{wMrW:function(t,n,e){"use strict";e.r(n),e.d(n,"NotificationsPageModule",(function(){return k}));var i,o=e("ofXK"),r=e("3Pt+"),a=e("TEn/"),s=e("tyNb"),c=e("fXoL"),f=[{id:1,type:"liked",user_id:2,name:"Max Lynx",face:"assets/img/thumb/max.png",read:!1,time:"Agora mesmo"},{id:2,type:"commented",user_id:2,name:"Adam Bradleyson",face:"assets/img/thumb/adam.jpg",read:!0,time:"3 minutos atr\xe1s"},{id:3,type:"friend_request",user_id:2,name:"Perry Governor",face:"assets/img/thumb/perry.png",read:!0,time:"5 minutos atr\xe1s"},{id:4,type:"liked",user_id:2,name:"Ben Sparrow",face:"assets/img/thumb/ben.png",read:!1,time:"6 minutos atr\xe1s"},{id:5,type:"friend_request",user_id:2,name:"Perry Governor",face:"assets/img/thumb/perry.png",read:!0,time:"5 minutos atr\xe1s"},{id:6,type:"liked",user_id:2,name:"Ben Sparrow",face:"assets/img/thumb/ben.png",read:!1,time:"6 minutos atr\xe1s"}],l=((i=function(){function t(){_classCallCheck(this,t),this.notifications=f}return _createClass(t,[{key:"getAll",value:function(){return this.notifications}},{key:"getItem",value:function(t){var n,e=_createForOfIteratorHelper(this.notifications);try{for(e.s();!(n=e.n()).done;){var i=n.value;if(i.id===parseInt(t,0))return i}}catch(o){e.e(o)}finally{e.f()}return null}},{key:"remove",value:function(t){this.notifications.splice(this.notifications.indexOf(t),1)}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275prov=c.Fb({token:i,factory:i.\u0275fac,providedIn:"root"}),i);function u(t,n){1&t&&(c.Ob(0,"span",14),c.Kb(1,"ion-icon",15),c.Nb())}function b(t,n){1&t&&(c.Ob(0,"span",16),c.Kb(1,"ion-icon",17),c.Nb())}function p(t,n){1&t&&(c.Ob(0,"span",18),c.Kb(1,"ion-icon",19),c.Nb())}function m(t,n){1&t&&(c.Ob(0,"span",20),c.kc(1,"Curtiu seu post"),c.Nb())}function d(t,n){1&t&&(c.Ob(0,"span",20),c.kc(1,"Comentou seu post"),c.Nb())}function g(t,n){1&t&&(c.Ob(0,"span",20),c.kc(1," Quer adicionar \xe0 sua rede de contatos "),c.Nb())}function y(t,n){if(1&t&&(c.Ob(0,"div",5),c.Ob(1,"div",6),c.jc(2,u,2,0,"span",7),c.jc(3,b,2,0,"span",8),c.jc(4,p,2,0,"span",9),c.Ob(5,"ion-text",10),c.kc(6),c.Nb(),c.jc(7,m,2,0,"span",11),c.jc(8,d,2,0,"span",11),c.jc(9,g,2,0,"span",11),c.Ob(10,"p",12),c.Kb(11,"ion-icon",13),c.kc(12),c.Nb(),c.Nb(),c.Nb()),2&t){var e=n.$implicit;c.zb(2),c.bc("ngIf","liked"==e.type),c.zb(1),c.bc("ngIf","commented"==e.type),c.zb(1),c.bc("ngIf","friend_request"==e.type),c.zb(2),c.mc(" ",e.name," "),c.zb(1),c.bc("ngIf","liked"==e.type),c.zb(1),c.bc("ngIf","commented"==e.type),c.zb(1),c.bc("ngIf","friend_request"==e.type),c.zb(3),c.mc(" ",e.time," ")}}var h,_,O,v=[{path:"",component:(h=function t(n){_classCallCheck(this,t),this.notificationService=n,this.notifications=n.getAll()},h.\u0275fac=function(t){return new(t||h)(c.Jb(l))},h.\u0275cmp=c.Db({type:h,selectors:[["app-notifications"]],decls:10,vars:1,consts:[["color","primary"],["slot","start"],["slot","end","src","./assets/logo.png",2,"height","60px","width","60px","padding","4px","border-radius","100%"],[1,"notifications-list"],["class","item",4,"ngFor","ngForOf"],[1,"item"],[1,"item-inner"],["class","item-label danger-bg",4,"ngIf"],["class","item-label secondary-bg",4,"ngIf"],["class","item-label success-bg",4,"ngIf"],["color","primary",1,"post-author"],["class","notifications-content",4,"ngIf"],[1,"post-time"],["name","timer-outline"],[1,"item-label","danger-bg"],["name","heart","color","light"],[1,"item-label","secondary-bg"],["name","chatbox-outline"],[1,"item-label","success-bg"],["name","add-outline"],[1,"notifications-content"]],template:function(t,n){1&t&&(c.Ob(0,"ion-header"),c.Ob(1,"ion-toolbar",0),c.Ob(2,"ion-buttons",1),c.Kb(3,"ion-menu-button"),c.Nb(),c.Ob(4,"ion-title"),c.kc(5,"Notifica\xe7\xf5es"),c.Nb(),c.Kb(6,"img",2),c.Nb(),c.Nb(),c.Ob(7,"ion-content"),c.Ob(8,"div",3),c.jc(9,y,13,8,"div",4),c.Nb(),c.Nb()),2&t&&(c.zb(9),c.bc("ngForOf",n.notifications))},directives:[a.q,a.K,a.h,a.C,a.I,a.n,o.h,o.i,a.H,a.r],styles:[".notifications-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{position:relative;padding:0;margin:-1em 0 0}.notifications-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-left:1px solid var(--ion-color-primary);margin-left:2em;padding:1em 1em 0}.notifications-list[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%]{display:block;position:absolute;padding:5px 0 0;left:20px;top:24px;width:20px;height:14px;border-radius:50%;text-align:center;font-size:8px;border:3px solid #fff;box-sizing:content-box;color:#fff}.notifications-list[_ngcontent-%COMP%]   .notifications-content[_ngcontent-%COMP%], .notifications-list[_ngcontent-%COMP%]   .post-author[_ngcontent-%COMP%]{font-size:.8em;font-weight:400}.notifications-list[_ngcontent-%COMP%]   .post-time[_ngcontent-%COMP%]{margin-top:1em;font-size:.7em}"]}),h)}],C=((O=function t(){_classCallCheck(this,t)}).\u0275mod=c.Hb({type:O}),O.\u0275inj=c.Gb({factory:function(t){return new(t||O)},imports:[[s.i.forChild(v)],s.i]}),O),k=((_=function t(){_classCallCheck(this,t)}).\u0275mod=c.Hb({type:_}),_.\u0275inj=c.Gb({factory:function(t){return new(t||_)},imports:[[o.b,r.a,a.L,C]]}),_)}}]);