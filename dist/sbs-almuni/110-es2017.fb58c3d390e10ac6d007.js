"use strict";(self.webpackChunkSBUP_almuni=self.webpackChunkSBUP_almuni||[]).push([[110],{44110:function(n,t,e){e.r(t),e.d(t,{ContactModule:function(){return w}});var i=e(38583),c=e(8307),a=e(37716);let o=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-contact"]],decls:2,vars:0,consts:[[1,"commonTopPadding"]],template:function(n,t){1&n&&(a.TgZ(0,"div",0),a._UZ(1,"router-outlet"),a.qZA())},directives:[c.lC],styles:[""]}),n})();var l=e(8239),r=e(88002),s=e(77165),d=e(9353),g=e(70870),p=e(60624);function u(n,t){1&n&&a._UZ(0,"app-loader")}function m(n,t){if(1&n&&(a.TgZ(0,"div",8),a.TgZ(1,"div",9),a.TgZ(2,"div",10),a.TgZ(3,"h6",11),a._uU(4),a.qZA(),a.qZA(),a.TgZ(5,"div",12),a._UZ(6,"p",13),a.qZA(),a.qZA(),a.qZA()),2&n){const n=t.$implicit;a.xp6(4),a.hij("",null==n?null:n.title,":"),a.xp6(2),a.Q6J("innerHtml",null==n?null:n.description,a.oJD)}}function f(n,t){if(1&n&&(a.ynx(0),a.YNc(1,m,7,2,"div",7),a.BQk()),2&n){const n=a.oxw(2);a.xp6(1),a.Q6J("ngForOf",n.keyData)}}function h(n,t){1&n&&(a.ynx(0),a.TgZ(1,"div",14),a.TgZ(2,"div",15),a.TgZ(3,"div",12),a.TgZ(4,"p"),a._uU(5,"No data found"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.BQk())}function y(n,t){if(1&n&&(a.TgZ(0,"div",6),a.YNc(1,f,2,1,"ng-container",4),a.YNc(2,h,6,0,"ng-container",4),a.qZA()),2&n){const n=a.oxw();a.xp6(1),a.Q6J("ngIf",(null==n.keyData?null:n.keyData.length)>0),a.xp6(1),a.Q6J("ngIf",0==(null==n.keyData?null:n.keyData.length))}}function Z(n,t){1&n&&a._UZ(0,"app-loader")}function v(n,t){if(1&n&&(a.TgZ(0,"li",10),a.TgZ(1,"a",11),a._uU(2),a.qZA(),a.qZA()),2&n){const n=t.$implicit;a.xp6(1),a.s9C("href",null==n?null:n.link,a.LSH),a.xp6(1),a.Oqu(null==n?null:n.title)}}function x(n,t){if(1&n&&(a.ynx(0),a.YNc(1,v,3,2,"li",9),a.BQk()),2&n){const n=a.oxw(2);a.xp6(1),a.Q6J("ngForOf",n.socialData)}}function A(n,t){1&n&&(a.ynx(0),a.TgZ(1,"li"),a._uU(2,"No data found"),a.qZA(),a.BQk())}function k(n,t){if(1&n&&(a.TgZ(0,"ul",8),a.YNc(1,x,2,1,"ng-container",4),a.YNc(2,A,3,0,"ng-container",4),a.qZA()),2&n){const n=a.oxw();a.xp6(1),a.Q6J("ngIf",(null==n.socialData?null:n.socialData.length)>0),a.xp6(1),a.Q6J("ngIf",0==(null==n.socialData?null:n.socialData.length))}}const b=[{path:"contact",component:o,children:[{path:"key-contact",component:(()=>{class n{constructor(n,t){this.dataService=n,this.notify=t,this.loading=!1,this.heading="CONTACT US"}ngOnInit(){this.getAllKeyContacts()}getAllKeyContacts(){var n=this;return(0,l.Z)(function*(){n.loading=!0,yield n.dataService.getData("all-contact").pipe((0,r.U)(n=>n.data.filter(n=>{if("KeyContact"===(null==n?void 0:n.type))return n}))).subscribe(t=>{n.keyData=t,n.loading=!1},t=>{console.log(t),n.notify.notificationService.openFailureSnackBar(null==t?void 0:t.message),n.loading=!1})})()}}return n.\u0275fac=function(t){return new(t||n)(a.Y36(s.D),a.Y36(d.b))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-key-contact"]],decls:6,vars:3,consts:[[3,"heading"],[1,"container"],[1,"row","justify-content-xl-center","py-xl-5","py-lg-5","py-md-4","py-sm-4","py-4"],[1,"col-xl-9","col-lg-12","col-md-12"],[4,"ngIf"],["class","row justify-content-center",4,"ngIf"],[1,"row","justify-content-center"],["class","col-lg-6 col-md-6 col-sm-12 my-lg-4 my-md-4 my-sm-3 my-2",4,"ngFor","ngForOf"],[1,"col-lg-6","col-md-6","col-sm-12","my-lg-4","my-md-4","my-sm-3","my-2"],[1,"card","py-2","border-0"],[1,"card-header","border-0","bg-transparent","pt-4"],[1,"card-heading","fs-4","mb-xl-2","mb-lg-2","mb-md-2","mb-sm-2","mb-0"],[1,"card-body"],[1,"fs-6","fw-bold",3,"innerHtml"],[1,"col-12"],[1,"card"]],template:function(n,t){1&n&&(a._UZ(0,"app-users-banner",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a.YNc(4,u,1,0,"app-loader",4),a.YNc(5,y,3,2,"div",5),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.Q6J("heading",t.heading),a.xp6(4),a.Q6J("ngIf",t.loading),a.xp6(1),a.Q6J("ngIf",!t.loading))},directives:[g.P,i.O5,p.R,i.sg],styles:[".card[_ngcontent-%COMP%]{background-color:var(--card-bg);min-height:220px}.card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%]{color:var(--text-color)}@media (min-width: 300px) and (max-width: 768px){.card[_ngcontent-%COMP%]{min-height:auto}}@media (min-width: 768px) and (max-width: 991px){.card[_ngcontent-%COMP%]{min-height:260px}}"]}),n})()},{path:"social-links",component:(()=>{class n{constructor(n){this.dataService=n,this.loading=!1,this.heading="SRI BALAJI UNIVERSITY ALUMNI CLUBS - SOCIAL CHANNELS"}ngOnInit(){this.loading=!0,this.getAllSocialLinks()}getAllSocialLinks(){var n=this;return(0,l.Z)(function*(){yield n.dataService.getData("all-contact").pipe((0,r.U)(n=>n.data.filter(n=>{if("SbupChannel"===(null==n?void 0:n.type))return n}))).subscribe(t=>{n.socialData=t,n.loading=!1})})()}}return n.\u0275fac=function(t){return new(t||n)(a.Y36(s.D))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-social-links"]],decls:8,vars:3,consts:[[3,"heading"],[1,"container","my-xl-5","my-lg-5","my-md-5","my-sm-4","my-4"],[1,"row"],[1,"col-lg-8","col-md-12"],[4,"ngIf"],["class","social-channels",4,"ngIf"],[1,"col-lg-4","col-md-12"],["width","100%","height","400","src","https://www.youtube.com/embed/shv16JEFhac","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen",""],[1,"social-channels"],["class","social-links fs-5",4,"ngFor","ngForOf"],[1,"social-links","fs-5"],["target","_blank",1,"text-decoration-none",3,"href"]],template:function(n,t){1&n&&(a._UZ(0,"app-users-banner",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a.YNc(4,Z,1,0,"app-loader",4),a.YNc(5,k,3,2,"ul",5),a.qZA(),a.TgZ(6,"div",6),a._UZ(7,"iframe",7),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.Q6J("heading",t.heading),a.xp6(4),a.Q6J("ngIf",t.loading),a.xp6(1),a.Q6J("ngIf",!t.loading))},directives:[g.P,i.O5,p.R,i.sg],styles:[".social-channels[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]{list-style:none;line-height:2.1em}.social-channels[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px;line-height:0}.social-channels[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{color:#b83e40!important}"]}),n})()},{path:"",redirectTo:"key-contact",pathMatch:"full"}]}];let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[c.Bz.forChild(b)],c.Bz]}),n})();var T=e(65230);let w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[i.ez,C,T.m]]}),n})()}}]);