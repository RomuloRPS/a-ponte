(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{hnwT:function(o,i,e){"use strict";e.r(i),e.d(i,"ComunityDetailPageModule",(function(){return f}));var n=e("ofXK"),t=e("3Pt+"),b=e("TEn/"),r=e("tyNb"),c=e("fXoL"),s=e("qfBg"),a=e("ENZJ");function u(o,i){1&o&&c.Kb(0,"ion-icon",22)}function l(o,i){1&o&&c.Kb(0,"ion-icon",23)}function p(o,i){if(1&o){const o=c.Pb();c.Ob(0,"ion-item"),c.Ob(1,"ion-avatar",9),c.Kb(2,"img",10),c.Nb(),c.Ob(3,"ion-label",11),c.Ob(4,"div",12),c.kc(5),c.Nb(),c.Ob(6,"div",13),c.Ob(7,"div",14),c.Ob(8,"p"),c.kc(9),c.Nb(),c.Nb(),c.Ob(10,"p"),c.Ob(11,"a",15),c.Wb("click",(function(){c.gc(o);const e=i.$implicit;return c.Yb().toggleLike(e)})),c.jc(12,u,1,0,"ion-icon",16),c.jc(13,l,1,0,"ion-icon",17),c.kc(14),c.Nb(),c.Ob(15,"a",18),c.Kb(16,"ion-icon",19),c.kc(17),c.Nb(),c.Ob(18,"span",20),c.Kb(19,"ion-icon",21),c.kc(20),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()}if(2&o){const o=i.$implicit;c.zb(1),c.bc("routerLink","/users/"+o.user_id),c.zb(1),c.cc("src",o.face,c.hc),c.zb(2),c.bc("routerLink","/users/"+o.user_id),c.zb(1),c.mc(" ",o.name," "),c.zb(2),c.bc("routerLink","/posts/"+o.id),c.zb(2),c.lc(o.content),c.zb(3),c.bc("ngIf",o.liked),c.zb(1),c.bc("ngIf",!o.liked),c.zb(1),c.mc(" ",o.likeCount," "),c.zb(3),c.mc(" ",o.commentCount," "),c.zb(3),c.mc(" ",o.time," ")}}const d=[{path:"",component:(()=>{class o{constructor(o,i,e){this.activatedRoute=o,this.userService=i,this.postService=e,this.user=i.getItem(0),Object.assign(this.user,{followers:199,following:48,favorites:14,posts:e.getAll()})}toggleLike(o){o.liked?o.likeCount--:o.likeCount++,o.liked=!o.liked}}return o.\u0275fac=function(i){return new(i||o)(c.Jb(r.a),c.Jb(s.a),c.Jb(a.a))},o.\u0275cmp=c.Db({type:o,selectors:[["app-user"]],decls:31,vars:4,consts:[["color","primary",1,"no-border"],["color","light"],[1,"ion-text-center","user-profile","primary-bg"],["src","../../../assets/img/financas.jpeg",1,"profile-picture",2,"border-radius","100%","width","140px","height","140px"],[2,"text-align","center","width","80%","margin","auto","font-style","italic"],["size","4"],[1,"number"],[1,"desc"],[4,"ngFor","ngForOf"],["slot","start",3,"routerLink"],["alt","",3,"src"],[1,"ion-text-wrap"],[1,"post-author",3,"routerLink"],[1,"post-content"],[3,"routerLink"],[1,"subdued",3,"click"],["name","heart","color","danger",4,"ngIf"],["name","heart-outline","color","medium",4,"ngIf"],[1,"subdued"],["name","chatbox-outline","color","primary"],[1,"post-time"],["name","timer-outline"],["name","heart","color","danger"],["name","heart-outline","color","medium"]],template:function(o,i){1&o&&(c.Ob(0,"ion-header"),c.Ob(1,"ion-toolbar",0),c.Ob(2,"ion-title"),c.kc(3,"Comunidade"),c.Nb(),c.Nb(),c.Nb(),c.Ob(4,"ion-content",1),c.Ob(5,"div",2),c.Kb(6,"img",3),c.Ob(7,"h5"),c.Ob(8,"strong"),c.kc(9,"FINAN\xc7AS"),c.Nb(),c.Nb(),c.Ob(10,"p",4),c.kc(11,"Fique aqui atualizado sobre o mercado financeiro"),c.Nb(),c.Kb(12,"br"),c.Ob(13,"ion-grid"),c.Ob(14,"ion-row"),c.Ob(15,"ion-col",5),c.Ob(16,"span",6),c.kc(17),c.Nb(),c.Ob(18,"span",7),c.kc(19,"Seguidores"),c.Nb(),c.Nb(),c.Ob(20,"ion-col",5),c.Ob(21,"span",6),c.kc(22),c.Nb(),c.Ob(23,"span",7),c.kc(24,"Seguindo"),c.Nb(),c.Nb(),c.Ob(25,"ion-col",5),c.Ob(26,"span",6),c.kc(27),c.Nb(),c.Ob(28,"span",7),c.kc(29,"Favoritos"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.jc(30,p,21,11,"ion-item",8),c.Nb()),2&o&&(c.zb(17),c.lc(i.user.followers),c.zb(5),c.lc(i.user.following),c.zb(5),c.lc(i.user.favorites),c.zb(3),c.bc("ngForOf",i.user.posts))},directives:[b.q,b.K,b.I,b.n,b.p,b.F,b.m,n.h,b.u,b.c,b.P,r.h,b.y,n.i,b.r],styles:[""]}),o})()}];let m=(()=>{class o{}return o.\u0275mod=c.Hb({type:o}),o.\u0275inj=c.Gb({factory:function(i){return new(i||o)},imports:[[r.i.forChild(d)],r.i]}),o})(),f=(()=>{class o{}return o.\u0275mod=c.Hb({type:o}),o.\u0275inj=c.Gb({factory:function(i){return new(i||o)},imports:[[n.b,t.a,b.L,m]]}),o})()}}]);