function _classCallCheck(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1s7i":function(n,o,t){"use strict";t.r(o),t.d(o,"ContactsPageModule",(function(){return d}));var i=t("ofXK"),c=t("3Pt+"),e=t("TEn/"),b=t("tyNb"),r=t("fXoL"),a=t("qfBg");function s(n,o){1&n&&(r.Ob(0,"ion-badge",0),r.kc(1,"Colega de trabalho"),r.Nb())}function l(n,o){1&n&&(r.Ob(0,"ion-badge",14),r.kc(1,"Amigo"),r.Nb())}function u(n,o){if(1&n&&(r.Ob(0,"ion-item-sliding"),r.Ob(1,"ion-item"),r.Ob(2,"ion-avatar",7),r.Kb(3,"img",8),r.Nb(),r.Ob(4,"ion-label"),r.Ob(5,"ion-text",9),r.Ob(6,"h3"),r.kc(7),r.Nb(),r.Nb(),r.jc(8,s,2,0,"ion-badge",10),r.jc(9,l,2,0,"ion-badge",11),r.Nb(),r.Nb(),r.Ob(10,"ion-item-options"),r.Ob(11,"ion-button",12),r.Kb(12,"ion-icon",13),r.Nb(),r.Ob(13,"ion-button",14),r.Kb(14,"ion-icon",15),r.Nb(),r.Ob(15,"ion-button",0),r.Kb(16,"ion-icon",16),r.Nb(),r.Nb(),r.Nb()),2&n){var t=o.$implicit;r.zb(2),r.bc("routerLink","/users/"+t.id),r.zb(1),r.cc("src",t.face,r.hc),r.zb(2),r.bc("routerLink","/users/"+t.id),r.zb(2),r.lc(t.name),r.zb(1),r.bc("ngIf","Family"==t.group),r.zb(1),r.bc("ngIf","Friend"==t.group)}}var f,p,m,g=[{path:"",component:(f=function n(o){_classCallCheck(this,n),this.userService=o,this.contacts=o.getAll()},f.\u0275fac=function(n){return new(n||f)(r.Jb(a.a))},f.\u0275cmp=r.Db({type:f,selectors:[["app-contacts"]],decls:12,vars:2,consts:[["color","primary"],["slot","start"],[1,"search-form"],["name","search"],["type","text",3,"placeholder"],["lines","full"],[4,"ngFor","ngForOf"],["slot","start",3,"routerLink"],["alt","",1,"profile-picture",3,"src"],["color","primary",3,"routerLink"],["color","primary",4,"ngIf"],["color","success",4,"ngIf"],["color","light"],["name","more"],["color","success"],["name","call"],["name","text"]],template:function(n,o){1&n&&(r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar",0),r.Ob(2,"ion-buttons",1),r.Kb(3,"ion-menu-button"),r.Nb(),r.Ob(4,"ion-title"),r.kc(5,"Contatos"),r.Nb(),r.Nb(),r.Nb(),r.Ob(6,"ion-content"),r.Ob(7,"div",2),r.Kb(8,"ion-icon",3),r.Kb(9,"ion-input",4),r.Nb(),r.Ob(10,"ion-list",5),r.jc(11,u,17,6,"ion-item-sliding",6),r.Nb(),r.Nb()),2&n&&(r.zb(9),r.dc("placeholder","",o.contacts.length," contatos"),r.zb(2),r.bc("ngForOf",o.contacts))},directives:[e.q,e.K,e.h,e.C,e.I,e.n,e.r,e.t,e.Q,e.z,i.h,e.x,e.u,e.c,e.P,b.h,e.y,e.H,i.i,e.w,e.g,e.f],styles:["ion-badge[_ngcontent-%COMP%]{font-size:.6em}"]}),f)}],h=((m=function n(){_classCallCheck(this,n)}).\u0275mod=r.Hb({type:m}),m.\u0275inj=r.Gb({factory:function(n){return new(n||m)},imports:[[b.i.forChild(g)],b.i]}),m),d=((p=function n(){_classCallCheck(this,n)}).\u0275mod=r.Hb({type:p}),p.\u0275inj=r.Gb({factory:function(n){return new(n||p)},imports:[[i.b,c.a,e.L,h]]}),p)}}]);