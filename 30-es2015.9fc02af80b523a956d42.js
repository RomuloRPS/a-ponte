(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"7UCR":function(o,e,n){"use strict";n.r(e),n.d(e,"UserPageModule",(function(){return u}));var i=n("ofXK"),t=n("3Pt+"),b=n("TEn/"),r=n("tyNb"),s=n("fXoL"),c=n("qfBg"),a=n("ENZJ");const l=[{path:"",component:(()=>{class o{constructor(o,e,n){this.activatedRoute=o,this.userService=e,this.postService=n,this.user=e.getItem(0),Object.assign(this.user,{followers:199,following:48,favorites:14,posts:n.getAll()})}toggleLike(o){o.liked?o.likeCount--:o.likeCount++,o.liked=!o.liked}}return o.\u0275fac=function(e){return new(e||o)(s.Jb(r.a),s.Jb(c.a),s.Jb(a.a))},o.\u0275cmp=s.Db({type:o,selectors:[["app-user"]],decls:65,vars:6,consts:[["color","primary",1,"no-border"],["slot","end","src","./assets/logo.png",2,"height","60px","width","60px","padding","4px","border-radius","100%"],["color","light"],[1,"ion-text-center","user-profile","primary-bg"],[1,"profile-picture",3,"src"],[2,"text-align","center","width","80%","margin","auto","font-style","italic"],["size","4"],[1,"number"],[1,"desc"],["lines","full"],["slot","start","color","success","name","checkmark-circle-outline"],["lines","none"],["color","warning","slot","start","name","pricetag-outline"]],template:function(o,e){1&o&&(s.Ob(0,"ion-header"),s.Ob(1,"ion-toolbar",0),s.Ob(2,"ion-title"),s.kc(3),s.Nb(),s.Kb(4,"img",1),s.Nb(),s.Nb(),s.Ob(5,"ion-content",2),s.Ob(6,"div",3),s.Kb(7,"img",4),s.Ob(8,"h5"),s.Ob(9,"strong"),s.kc(10,"MINI BIO"),s.Nb(),s.Nb(),s.Ob(11,"p",5),s.kc(12),s.Nb(),s.Kb(13,"br"),s.Ob(14,"ion-grid"),s.Ob(15,"ion-row"),s.Ob(16,"ion-col",6),s.Ob(17,"span",7),s.kc(18),s.Nb(),s.Ob(19,"span",8),s.kc(20,"Seguidores"),s.Nb(),s.Nb(),s.Ob(21,"ion-col",6),s.Ob(22,"span",7),s.kc(23),s.Nb(),s.Ob(24,"span",8),s.kc(25,"Seguindo"),s.Nb(),s.Nb(),s.Ob(26,"ion-col",6),s.Ob(27,"span",7),s.kc(28),s.Nb(),s.Ob(29,"span",8),s.kc(30,"Favoritos"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(31,"ion-card"),s.Ob(32,"ion-list"),s.Ob(33,"ion-list-header"),s.Ob(34,"ion-title"),s.kc(35,"Interesses"),s.Nb(),s.Nb(),s.Ob(36,"ion-item",9),s.Kb(37,"ion-icon",10),s.Ob(38,"ion-label"),s.kc(39,"Software"),s.Nb(),s.Nb(),s.Ob(40,"ion-item",9),s.Kb(41,"ion-icon",10),s.Ob(42,"ion-label"),s.kc(43,"Gest\xe3o"),s.Nb(),s.Nb(),s.Ob(44,"ion-item",11),s.Kb(45,"ion-icon",10),s.Ob(46,"ion-label"),s.kc(47,"Recursos Humanos"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(48,"ion-card"),s.Ob(49,"ion-list"),s.Ob(50,"ion-list-header"),s.Ob(51,"ion-title"),s.kc(52,"Conv\xeanios"),s.Nb(),s.Nb(),s.Ob(53,"ion-item",9),s.Kb(54,"ion-icon",12),s.Ob(55,"ion-label"),s.kc(56,"Unimed"),s.Nb(),s.Nb(),s.Ob(57,"ion-item",9),s.Kb(58,"ion-icon",12),s.Ob(59,"ion-label"),s.kc(60,"Uniodonto"),s.Nb(),s.Nb(),s.Ob(61,"ion-item",11),s.Kb(62,"ion-icon",12),s.Ob(63,"ion-label"),s.kc(64,"Farm\xe1cia do trabalhador"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&o&&(s.zb(3),s.lc(e.user.name),s.zb(4),s.cc("src",e.user.face,s.hc),s.zb(5),s.mc('"',e.user.name,' \xe9 um economista brasileiro, professor da Escola de Administra\xe7\xe3o de Empresas da Funda\xe7\xe3o Get\xfalio Vargas e comentarista da r\xe1dio Jovem Pan"'),s.zb(6),s.lc(e.user.followers),s.zb(5),s.lc(e.user.following),s.zb(5),s.lc(e.user.favorites))},directives:[b.q,b.K,b.I,b.n,b.p,b.F,b.m,b.i,b.z,b.A,b.u,b.r,b.y],styles:[".profile-picture[_ngcontent-%COMP%]{width:8em;height:8em}ion-row[_ngcontent-%COMP%]{border-top:1px solid var(--ion-color-light-shade)}ion-row[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{display:block}.post-content[_ngcontent-%COMP%]   .subdued[_ngcontent-%COMP%]{margin-right:5px}"]}),o})()}];let d=(()=>{class o{}return o.\u0275mod=s.Hb({type:o}),o.\u0275inj=s.Gb({factory:function(e){return new(e||o)},imports:[[r.i.forChild(l)],r.i]}),o})(),u=(()=>{class o{}return o.\u0275mod=s.Hb({type:o}),o.\u0275inj=s.Gb({factory:function(e){return new(e||o)},imports:[[i.b,t.a,b.L,d]]}),o})()}}]);