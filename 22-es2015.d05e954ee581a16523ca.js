(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{wMrW:function(t,n,e){"use strict";e.r(n),e.d(n,"NotificationsPageModule",(function(){return h}));var i=e("ofXK"),o=e("3Pt+"),s=e("TEn/"),a=e("tyNb"),r=e("fXoL");let c=[{id:1,type:"liked",user_id:2,name:"Max Lynx",face:"assets/img/thumb/max.png",read:!1,time:"Agora mesmo"},{id:2,type:"commented",user_id:2,name:"Adam Bradleyson",face:"assets/img/thumb/adam.jpg",read:!0,time:"3 minutos atr\xe1s"},{id:3,type:"friend_request",user_id:2,name:"Perry Governor",face:"assets/img/thumb/perry.png",read:!0,time:"5 minutos atr\xe1s"},{id:4,type:"liked",user_id:2,name:"Ben Sparrow",face:"assets/img/thumb/ben.png",read:!1,time:"6 minutos atr\xe1s"},{id:5,type:"friend_request",user_id:2,name:"Perry Governor",face:"assets/img/thumb/perry.png",read:!0,time:"5 minutos atr\xe1s"},{id:6,type:"liked",user_id:2,name:"Ben Sparrow",face:"assets/img/thumb/ben.png",read:!1,time:"6 minutos atr\xe1s"}],b=(()=>{class t{constructor(){this.notifications=c}getAll(){return this.notifications}getItem(t){for(const n of this.notifications)if(n.id===parseInt(t,0))return n;return null}remove(t){this.notifications.splice(this.notifications.indexOf(t),1)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function m(t,n){1&t&&(r.Ob(0,"span",14),r.Kb(1,"ion-icon",15),r.Nb())}function p(t,n){1&t&&(r.Ob(0,"span",16),r.Kb(1,"ion-icon",17),r.Nb())}function f(t,n){1&t&&(r.Ob(0,"span",18),r.Kb(1,"ion-icon",19),r.Nb())}function d(t,n){1&t&&(r.Ob(0,"span",20),r.kc(1,"Curtiu seu post"),r.Nb())}function l(t,n){1&t&&(r.Ob(0,"span",20),r.kc(1,"Comentou seu post"),r.Nb())}function u(t,n){1&t&&(r.Ob(0,"span",20),r.kc(1," Quer adicionar \xe0 sua rede de contatos "),r.Nb())}function g(t,n){if(1&t&&(r.Ob(0,"div",5),r.Ob(1,"div",6),r.jc(2,m,2,0,"span",7),r.jc(3,p,2,0,"span",8),r.jc(4,f,2,0,"span",9),r.Ob(5,"ion-text",10),r.kc(6),r.Nb(),r.jc(7,d,2,0,"span",11),r.jc(8,l,2,0,"span",11),r.jc(9,u,2,0,"span",11),r.Ob(10,"p",12),r.Kb(11,"ion-icon",13),r.kc(12),r.Nb(),r.Nb(),r.Nb()),2&t){const t=n.$implicit;r.zb(2),r.bc("ngIf","liked"==t.type),r.zb(1),r.bc("ngIf","commented"==t.type),r.zb(1),r.bc("ngIf","friend_request"==t.type),r.zb(2),r.mc(" ",t.name," "),r.zb(1),r.bc("ngIf","liked"==t.type),r.zb(1),r.bc("ngIf","commented"==t.type),r.zb(1),r.bc("ngIf","friend_request"==t.type),r.zb(3),r.mc(" ",t.time," ")}}const y=[{path:"",component:(()=>{class t{constructor(t){this.notificationService=t,this.notifications=t.getAll()}}return t.\u0275fac=function(n){return new(n||t)(r.Jb(b))},t.\u0275cmp=r.Db({type:t,selectors:[["app-notifications"]],decls:10,vars:1,consts:[["color","primary"],["slot","start"],["slot","end","src","./assets/logo.png",2,"height","60px","width","60px","padding","4px","border-radius","100%"],[1,"notifications-list"],["class","item",4,"ngFor","ngForOf"],[1,"item"],[1,"item-inner"],["class","item-label danger-bg",4,"ngIf"],["class","item-label secondary-bg",4,"ngIf"],["class","item-label success-bg",4,"ngIf"],["color","primary",1,"post-author"],["class","notifications-content",4,"ngIf"],[1,"post-time"],["name","timer-outline"],[1,"item-label","danger-bg"],["name","heart","color","light"],[1,"item-label","secondary-bg"],["name","chatbox-outline"],[1,"item-label","success-bg"],["name","add-outline"],[1,"notifications-content"]],template:function(t,n){1&t&&(r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar",0),r.Ob(2,"ion-buttons",1),r.Kb(3,"ion-menu-button"),r.Nb(),r.Ob(4,"ion-title"),r.kc(5,"Notifica\xe7\xf5es"),r.Nb(),r.Kb(6,"img",2),r.Nb(),r.Nb(),r.Ob(7,"ion-content"),r.Ob(8,"div",3),r.jc(9,g,13,8,"div",4),r.Nb(),r.Nb()),2&t&&(r.zb(9),r.bc("ngForOf",n.notifications))},directives:[s.q,s.K,s.h,s.C,s.I,s.n,i.h,i.i,s.H,s.r],styles:[".notifications-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{position:relative;padding:0;margin:-1em 0 0}.notifications-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-left:1px solid var(--ion-color-primary);margin-left:2em;padding:1em 1em 0}.notifications-list[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%]{display:block;position:absolute;padding:5px 0 0;left:20px;top:24px;width:20px;height:14px;border-radius:50%;text-align:center;font-size:8px;border:3px solid #fff;box-sizing:content-box;color:#fff}.notifications-list[_ngcontent-%COMP%]   .notifications-content[_ngcontent-%COMP%], .notifications-list[_ngcontent-%COMP%]   .post-author[_ngcontent-%COMP%]{font-size:.8em;font-weight:400}.notifications-list[_ngcontent-%COMP%]   .post-time[_ngcontent-%COMP%]{margin-top:1em;font-size:.7em}"]}),t})()}];let O=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(n){return new(n||t)},imports:[[a.i.forChild(y)],a.i]}),t})(),h=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(n){return new(n||t)},imports:[[i.b,o.a,s.L,O]]}),t})()}}]);