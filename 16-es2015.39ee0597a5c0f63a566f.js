(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Et4k:function(t,e,n){"use strict";n.r(e),n.d(e,"ChatDetailGroupPageModule",(function(){return u}));var o=n("ofXK"),i=n("3Pt+"),b=n("TEn/"),c=n("tyNb"),r=n("fXoL"),a=n("sjK5");function s(t,e){if(1&t&&r.Kb(0,"img",24),2&t){const t=r.Yb(2).$implicit;r.cc("src",t.image,r.hc)}}function g(t,e){if(1&t&&(r.Ob(0,"div"),r.Kb(1,"img",18),r.Ob(2,"div",19),r.Ob(3,"span"),r.Ob(4,"strong"),r.kc(5),r.Nb(),r.Nb(),r.Ob(6,"div",20),r.kc(7),r.jc(8,s,1,1,"img",21),r.Nb(),r.Ob(9,"div",22),r.Ob(10,"span",23),r.kc(11),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&t){const t=r.Yb().$implicit,e=r.Yb();r.zb(1),r.cc("src",e.chat.face,r.hc),r.zb(4),r.lc(e.chat.name),r.zb(2),r.mc(" ",t.text," "),r.zb(1),r.bc("ngIf",t.image),r.zb(3),r.lc(t.time)}}function p(t,e){if(1&t&&(r.Ob(0,"div"),r.Kb(1,"img",25),r.Ob(2,"div",26),r.Ob(3,"div",27),r.kc(4),r.Nb(),r.Ob(5,"div",22),r.Ob(6,"span",23),r.kc(7),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&t){const t=r.Yb().$implicit;r.zb(4),r.mc(" ",t.text," "),r.zb(3),r.lc(t.time)}}function l(t,e){1&t&&(r.Ob(0,"div",14),r.Ob(1,"div"),r.Kb(2,"img",28),r.Ob(3,"div",19),r.Ob(4,"span"),r.Ob(5,"strong"),r.kc(6,"R\xf4mulo"),r.Nb(),r.Nb(),r.Ob(7,"div",20),r.kc(8," Nice Try! Let's keep improving "),r.Nb(),r.Ob(9,"div",22),r.Ob(10,"span",23),r.kc(11,"Quinta 05:59"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Kb(12,"div",16),r.Nb())}function f(t,e){if(1&t&&(r.Mb(0),r.Ob(1,"div",14),r.jc(2,g,12,5,"div",15),r.jc(3,p,8,2,"div",15),r.Kb(4,"div",16),r.Nb(),r.jc(5,l,13,0,"div",17),r.Lb()),2&t){const t=e.$implicit,n=e.index,o=r.Yb();r.zb(2),r.bc("ngIf","received"==t.type),r.zb(1),r.bc("ngIf","sent"==t.type),r.zb(2),r.bc("ngIf",n+1==o.chat.messages.length)}}const m=[{path:"",component:(()=>{class t{constructor(t){this.chatService=t,this.chat=t.getItem(0)}sendMessage(){this.newMessage&&(this.chat.messages.push({type:"sent",text:this.newMessage,image:"",time:"Agora mesmo"}),this.newMessage="",setTimeout(()=>{this.content.scrollToBottom()},200))}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(a.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-chat-detail"]],viewQuery:function(t,e){var n;1&t&&r.nc(b.n,!0),2&t&&r.fc(n=r.Xb())&&(e.content=n.first)},decls:22,vars:2,consts:[["color","primary"],["slot","start"],["text",""],["src","https://santamonica.rec.br/wp-content/uploads/2018/02/golf-clube-santa-monica-797x394.jpg",1,"profile-picture","left",2,"top","13px","left","30px"],[2,"position","absolute","top","12px","left","90px"],[2,"position","absolute","top","30px","left","90px","font-size","small","opacity","0.8"],["slot","end","src","./assets/logo.png",2,"height","60px","width","60px","padding","4px","border-radius","100%"],[4,"ngFor","ngForOf"],["color","light",1,"no-border"],["name","camera","color","dark"],["placeholder","Escreva sua mensagem",3,"ngModel","ngModelChange"],["slot","end"],[3,"click"],["name","send","color","primary"],[1,"message-wrapper","rlt"],[4,"ngIf"],[1,"cf"],["class","message-wrapper rlt",4,"ngIf"],[1,"profile-picture","left",3,"src"],[1,"chat-bubble","left"],[1,"message",2,"margin-top","5px"],["class","block","alt","",3,"src",4,"ngIf"],[1,"message-detail"],[1,"message-time"],["alt","",1,"block",3,"src"],["src","./assets/img/thumb/adam.jpg",1,"profile-picture","right"],[1,"chat-bubble","right"],["ng-bind-html","message.text",1,"message"],["src","./assets/img/mike.png",1,"profile-picture","left"]],template:function(t,e){1&t&&(r.Ob(0,"ion-header"),r.Ob(1,"ion-toolbar",0),r.Ob(2,"ion-buttons",1),r.Kb(3,"ion-back-button",2),r.Nb(),r.Kb(4,"img",3),r.Ob(5,"span",4),r.Ob(6,"strong"),r.kc(7,"Golf Membros"),r.Nb(),r.Nb(),r.Ob(8,"span",5),r.kc(9,"R\xf4mulo, Ben Sparrow, voc\xea"),r.Nb(),r.Kb(10,"img",6),r.Nb(),r.Nb(),r.Ob(11,"ion-content"),r.jc(12,f,6,3,"ng-container",7),r.Nb(),r.Ob(13,"ion-footer"),r.Ob(14,"ion-toolbar",8),r.Ob(15,"ion-buttons",1),r.Ob(16,"ion-button"),r.Kb(17,"ion-icon",9),r.Nb(),r.Nb(),r.Ob(18,"ion-input",10),r.Wb("ngModelChange",(function(t){return e.newMessage=t})),r.Nb(),r.Ob(19,"ion-buttons",11),r.Ob(20,"ion-button",12),r.Wb("click",(function(){return e.sendMessage()})),r.Kb(21,"ion-icon",13),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&t&&(r.zb(12),r.bc("ngForOf",e.chat.messages),r.zb(6),r.bc("ngModel",e.newMessage))},directives:[b.q,b.K,b.h,b.d,b.e,b.n,o.h,b.o,b.g,b.r,b.t,b.Q,i.c,i.d,o.i],styles:['@charset "UTF-8";img.profile-picture[_ngcontent-%COMP%]{width:40px;height:40px;position:absolute;bottom:10px}img.profile-picture.left[_ngcontent-%COMP%]{left:10px}img.profile-picture.right[_ngcontent-%COMP%]{right:10px}img.logo-group[_ngcontent-%COMP%]{width:50px;height:50px;position:absolute;bottom:10px;border-radius:100%}img.logo-group.left[_ngcontent-%COMP%]{left:10px}img.logo-group.right[_ngcontent-%COMP%]{right:10px}.ion-email[_ngcontent-%COMP%]{float:right;font-size:32px;vertical-align:middle}.message[_ngcontent-%COMP%]{font-size:14px}.message-detail[_ngcontent-%COMP%]{white-space:nowrap;font-size:14px}.bar.item-input-inset[_ngcontent-%COMP%]   .item-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%!important}.message-wrapper[_ngcontent-%COMP%]{position:relative}.message-wrapper[_ngcontent-%COMP%]:last-child{margin-bottom:10px}.chat-bubble[_ngcontent-%COMP%]{border-radius:5px;display:inline-block;padding:10px 18px;position:relative;margin:10px;max-width:80%}.chat-bubble[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%]{font-size:.7em;display:block}.chat-bubble[_ngcontent-%COMP%]:before{content:"\xa0";display:block;height:16px;width:9px;position:absolute;bottom:-7.5px}.chat-bubble.left[_ngcontent-%COMP%]{background-color:#e6e5eb;float:left;margin-left:55px}.chat-bubble.left[_ngcontent-%COMP%]:before{background-color:#e6e5eb;left:10px;-webkit-transform:rotate(70deg) skew(5deg)}.chat-bubble.right[_ngcontent-%COMP%]{background-color:#158ffe;color:#fff;float:right;margin-right:55px}.chat-bubble.right[_ngcontent-%COMP%]:before{background-color:#158ffe;right:10px;-webkit-transform:rotate(118deg) skew(-5deg)}.chat-bubble.right[_ngcontent-%COMP%]   a.autolinker[_ngcontent-%COMP%]{color:#fff;font-weight:700}.chat-bubble.right[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%]{text-align:right}.bar-footer[_ngcontent-%COMP%]{height:auto;overflow:visible!important}.bar-footer[_ngcontent-%COMP%]   .item-input-inset[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.bar-footer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none;height:1.5em;width:100%;background:none}.bar-footer[_ngcontent-%COMP%]   .footer-btn-wrap[_ngcontent-%COMP%]{align-self:flex-end}.bar-footer[_ngcontent-%COMP%]   .footer-btn-wrap[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%]:before{font-size:1.5em}']}),t})()}];let d=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(m)],c.i]}),t})(),u=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[o.b,i.a,b.L,d]]}),t})()}}]);