!function(){"use strict";(self.webpackChunksbs_almuni=self.webpackChunksbs_almuni||[]).push([[533],{72533:function(e,t,n){n.d(t,{JX:function(){return A},LS:function(){return I},_s:function(){return m}});var i=n(37716),r=n(38583);function a(e,t){if(1&e){var n=i.EpF();i.TgZ(0,"a",11),i.NdJ("keyup.enter",function(){return i.CHM(n),i.oxw(3),i.MAs(1).previous()})("click",function(){return i.CHM(n),i.oxw(3),i.MAs(1).previous()}),i._uU(1),i.TgZ(2,"span",12),i._uU(3),i.qZA(),i.qZA()}if(2&e){var r=i.oxw(3);i.uIk("aria-label",r.previousLabel+" "+r.screenReaderPageLabel),i.xp6(1),i.hij(" ",r.previousLabel," "),i.xp6(2),i.Oqu(r.screenReaderPageLabel)}}function o(e,t){if(1&e&&(i.TgZ(0,"span"),i._uU(1),i.TgZ(2,"span",12),i._uU(3),i.qZA(),i.qZA()),2&e){var n=i.oxw(3);i.xp6(1),i.hij(" ",n.previousLabel," "),i.xp6(2),i.Oqu(n.screenReaderPageLabel)}}function s(e,t){if(1&e&&(i.TgZ(0,"li",8),i.YNc(1,a,4,3,"a",9),i.YNc(2,o,4,2,"span",10),i.qZA()),2&e){i.oxw(2);var n=i.MAs(1);i.ekj("disabled",n.isFirstPage()),i.xp6(1),i.Q6J("ngIf",1<n.getCurrent()),i.xp6(1),i.Q6J("ngIf",n.isFirstPage())}}function c(e,t){if(1&e){var n=i.EpF();i.TgZ(0,"a",11),i.NdJ("keyup.enter",function(){i.CHM(n);var e=i.oxw().$implicit;return i.oxw(2),i.MAs(1).setCurrent(e.value)})("click",function(){i.CHM(n);var e=i.oxw().$implicit;return i.oxw(2),i.MAs(1).setCurrent(e.value)}),i.TgZ(1,"span",12),i._uU(2),i.qZA(),i.TgZ(3,"span"),i._uU(4),i.ALo(5,"number"),i.qZA(),i.qZA()}if(2&e){var r=i.oxw().$implicit,a=i.oxw(2);i.xp6(2),i.hij("",a.screenReaderPageLabel," "),i.xp6(2),i.Oqu("..."===r.label?r.label:i.xi3(5,2,r.label,""))}}function p(e,t){if(1&e&&(i.ynx(0),i.TgZ(1,"span",12),i._uU(2),i.qZA(),i.TgZ(3,"span"),i._uU(4),i.ALo(5,"number"),i.qZA(),i.BQk()),2&e){var n=i.oxw().$implicit,r=i.oxw(2);i.xp6(2),i.hij("",r.screenReaderCurrentLabel," "),i.xp6(2),i.Oqu("..."===n.label?n.label:i.xi3(5,2,n.label,""))}}function u(e,t){if(1&e&&(i.TgZ(0,"li"),i.YNc(1,c,6,5,"a",9),i.YNc(2,p,6,5,"ng-container",10),i.qZA()),2&e){var n=t.$implicit;i.oxw(2);var r=i.MAs(1);i.ekj("current",r.getCurrent()===n.value)("ellipsis","..."===n.label),i.xp6(1),i.Q6J("ngIf",r.getCurrent()!==n.value),i.xp6(1),i.Q6J("ngIf",r.getCurrent()===n.value)}}function g(e,t){if(1&e){var n=i.EpF();i.TgZ(0,"a",11),i.NdJ("keyup.enter",function(){return i.CHM(n),i.oxw(3),i.MAs(1).next()})("click",function(){return i.CHM(n),i.oxw(3),i.MAs(1).next()}),i._uU(1),i.TgZ(2,"span",12),i._uU(3),i.qZA(),i.qZA()}if(2&e){var r=i.oxw(3);i.uIk("aria-label",r.nextLabel+" "+r.screenReaderPageLabel),i.xp6(1),i.hij(" ",r.nextLabel," "),i.xp6(2),i.Oqu(r.screenReaderPageLabel)}}function l(e,t){if(1&e&&(i.TgZ(0,"span"),i._uU(1),i.TgZ(2,"span",12),i._uU(3),i.qZA(),i.qZA()),2&e){var n=i.oxw(3);i.xp6(1),i.hij(" ",n.nextLabel," "),i.xp6(2),i.Oqu(n.screenReaderPageLabel)}}function f(e,t){if(1&e&&(i.TgZ(0,"li",13),i.YNc(1,g,4,3,"a",9),i.YNc(2,l,4,2,"span",10),i.qZA()),2&e){i.oxw(2);var n=i.MAs(1);i.ekj("disabled",n.isLastPage()),i.xp6(1),i.Q6J("ngIf",!n.isLastPage()),i.xp6(1),i.Q6J("ngIf",n.isLastPage())}}function d(e,t){if(1&e&&(i.TgZ(0,"ul",3),i.YNc(1,s,3,4,"li",4),i.TgZ(2,"li",5),i._uU(3),i.qZA(),i.YNc(4,u,3,6,"li",6),i.YNc(5,f,3,4,"li",7),i.qZA()),2&e){var n=i.oxw(),r=i.MAs(1);i.ekj("responsive",n.responsive),i.uIk("aria-label",n.screenReaderPaginationLabel),i.xp6(1),i.Q6J("ngIf",n.directionLinks),i.xp6(2),i.AsE(" ",r.getCurrent()," / ",r.getLastPage()," "),i.xp6(1),i.Q6J("ngForOf",r.pages)("ngForTrackBy",n.trackByIndex),i.xp6(1),i.Q6J("ngIf",n.directionLinks)}}var h=function(){function e(){this.change=new i.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}return e.prototype.defaultId=function(){return this.DEFAULT_ID},e.prototype.register=function(e){return null==e.id&&(e.id=this.DEFAULT_ID),this.instances[e.id]?this.updateInstance(e):(this.instances[e.id]=e,!0)},e.prototype.updateInstance=function(e){var t=!1;for(var n in this.instances[e.id])e[n]!==this.instances[e.id][n]&&(this.instances[e.id][n]=e[n],t=!0);return t},e.prototype.getCurrentPage=function(e){if(this.instances[e])return this.instances[e].currentPage},e.prototype.setCurrentPage=function(e,t){if(this.instances[e]){var n=this.instances[e];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[e].currentPage=t,this.change.emit(e))}},e.prototype.setTotalItems=function(e,t){this.instances[e]&&0<=t&&(this.instances[e].totalItems=t,this.change.emit(e))},e.prototype.setItemsPerPage=function(e,t){this.instances[e]&&(this.instances[e].itemsPerPage=t,this.change.emit(e))},e.prototype.getInstance=function(e){return void 0===e&&(e=this.DEFAULT_ID),this.instances[e]?this.clone(this.instances[e]):{}},e.prototype.clone=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Yz7({token:e,factory:function(t){return e.\u0275fac(t)}}),e}(),v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=Number.MAX_SAFE_INTEGER,m=function(){function e(e){this.service=e,this.state={}}return e.prototype.transform=function(e,t){if(!(e instanceof Array)){var n=t.id||this.service.defaultId();return this.state[n]?this.state[n].slice:e}var i,r,a=t.totalItems&&t.totalItems!==e.length,o=this.createInstance(e,t),s=o.id,c=o.itemsPerPage,p=this.service.register(o);if(!a&&e instanceof Array){if(this.stateIsIdentical(s,e,i=(o.currentPage-1)*(c=+c||y),r=i+c))return this.state[s].slice;var u=e.slice(i,r);return this.saveState(s,e,u,i,r),this.service.change.emit(s),u}return p&&this.service.change.emit(s),this.saveState(s,e,e,i,r),e},e.prototype.createInstance=function(e,t){return this.checkConfig(t),{id:null!=t.id?t.id:this.service.defaultId(),itemsPerPage:+t.itemsPerPage||0,currentPage:+t.currentPage||1,totalItems:+t.totalItems||e.length}},e.prototype.checkConfig=function(e){var t=["itemsPerPage","currentPage"].filter(function(t){return!(t in e)});if(0<t.length)throw new Error("PaginatePipe: Argument is missing the following required properties: "+t.join(", "))},e.prototype.saveState=function(e,t,n,i,r){this.state[e]={collection:t,size:t.length,slice:n,start:i,end:r}},e.prototype.stateIsIdentical=function(e,t,n,i){var r=this.state[e];return!!r&&!(r.size!==t.length||r.start!==n||r.end!==i)&&r.slice.every(function(e,i){return e===t[n+i]})},(e=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([v("design:paramtypes",[h])],e)).\u0275fac=function(t){return new(t||e)(i.Y36(h,16))},e.\u0275pipe=i.Yjl({name:"paginate",type:e,pure:!1}),e}(),b=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};function P(e){return!!e&&"false"!==e}var I=function(){function e(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new i.vpe,this.pageBoundsCorrection=new i.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}return Object.defineProperty(e.prototype,"directionLinks",{get:function(){return this._directionLinks},set:function(e){this._directionLinks=P(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoHide",{get:function(){return this._autoHide},set:function(e){this._autoHide=P(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"responsive",{get:function(){return this._responsive},set:function(e){this._responsive=P(e)},enumerable:!0,configurable:!0}),e.prototype.trackByIndex=function(e){return e},b([(0,i.IIB)(),x("design:type",String)],e.prototype,"id",void 0),b([(0,i.IIB)(),x("design:type",Number)],e.prototype,"maxSize",void 0),b([(0,i.IIB)(),x("design:type",Boolean),x("design:paramtypes",[Boolean])],e.prototype,"directionLinks",null),b([(0,i.IIB)(),x("design:type",Boolean),x("design:paramtypes",[Boolean])],e.prototype,"autoHide",null),b([(0,i.IIB)(),x("design:type",Boolean),x("design:paramtypes",[Boolean])],e.prototype,"responsive",null),b([(0,i.IIB)(),x("design:type",String)],e.prototype,"previousLabel",void 0),b([(0,i.IIB)(),x("design:type",String)],e.prototype,"nextLabel",void 0),b([(0,i.IIB)(),x("design:type",String)],e.prototype,"screenReaderPaginationLabel",void 0),b([(0,i.IIB)(),x("design:type",String)],e.prototype,"screenReaderPageLabel",void 0),b([(0,i.IIB)(),x("design:type",String)],e.prototype,"screenReaderCurrentLabel",void 0),b([(0,i.r_U)(),x("design:type",i.vpe)],e.prototype,"pageChange",void 0),b([(0,i.r_U)(),x("design:type",i.vpe)],e.prototype,"pageBoundsCorrection",void 0),e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["pagination-controls"]],inputs:{maxSize:"maxSize",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",id:"id"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:3,vars:3,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],[4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],[1,"pagination-next"]],template:function(e,t){if(1&e&&(i.TgZ(0,"pagination-template",0,1),i.NdJ("pageChange",function(e){return t.pageChange.emit(e)})("pageBoundsCorrection",function(e){return t.pageBoundsCorrection.emit(e)}),i.YNc(2,d,6,9,"ul",2),i.qZA()),2&e){var n=i.MAs(1);i.Q6J("id",t.id)("maxSize",t.maxSize),i.xp6(2),i.Q6J("ngIf",!(t.autoHide&&n.pages.length<=1))}},directives:function(){return[k,r.O5,r.sg]},pipes:function(){return[r.JJ]},styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],encapsulation:2,changeDetection:0}),e}(),C=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},L=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(){function e(e,t){var n=this;this.service=e,this.changeDetectorRef=t,this.maxSize=7,this.pageChange=new i.vpe,this.pageBoundsCorrection=new i.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(function(e){n.id===e&&(n.updatePageLinks(),n.changeDetectorRef.markForCheck(),n.changeDetectorRef.detectChanges())})}return e.prototype.ngOnInit=function(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()},e.prototype.ngOnChanges=function(e){this.updatePageLinks()},e.prototype.ngOnDestroy=function(){this.changeSub.unsubscribe()},e.prototype.previous=function(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)},e.prototype.next=function(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)},e.prototype.isFirstPage=function(){return 1===this.getCurrent()},e.prototype.isLastPage=function(){return this.getLastPage()===this.getCurrent()},e.prototype.setCurrent=function(e){this.pageChange.emit(e)},e.prototype.getCurrent=function(){return this.service.getCurrentPage(this.id)},e.prototype.getLastPage=function(){var e=this.service.getInstance(this.id);return e.totalItems<1?1:Math.ceil(e.totalItems/e.itemsPerPage)},e.prototype.getTotalItems=function(){return this.service.getInstance(this.id).totalItems},e.prototype.checkValidId=function(){null==this.service.getInstance(this.id).id&&console.warn('PaginationControlsDirective: the specified id "'+this.id+'" does not match any registered PaginationInstance')},e.prototype.updatePageLinks=function(){var e=this,t=this.service.getInstance(this.id),n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(function(){e.pageBoundsCorrection.emit(n),e.pages=e.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,e.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)},e.prototype.outOfBoundCorrection=function(e){var t=Math.ceil(e.totalItems/e.itemsPerPage);return t<e.currentPage&&0<t?t:e.currentPage<1?1:e.currentPage},e.prototype.createPageArray=function(e,t,n,i){i=+i;for(var r=[],a=Math.max(Math.ceil(n/t),1),o=Math.ceil(i/2),s=e<=o,c=a-o<e,p=!s&&!c,u=i<a,g=1;g<=a&&g<=i;){var l=this.calculatePageNumber(g,e,i,a);r.push({label:u&&(2===g&&(p||c)||g===i-1&&(p||s))?"...":l,value:l}),g++}return r},e.prototype.calculatePageNumber=function(e,t,n,i){var r=Math.ceil(n/2);return e===n?i:1===e?e:n<i?i-r<t?i-n+e:r<t?t-r+e:e:e},C([(0,i.IIB)(),L("design:type",String)],e.prototype,"id",void 0),C([(0,i.IIB)(),L("design:type",Number)],e.prototype,"maxSize",void 0),C([(0,i.r_U)(),L("design:type",i.vpe)],e.prototype,"pageChange",void 0),C([(0,i.r_U)(),L("design:type",i.vpe)],e.prototype,"pageBoundsCorrection",void 0),(e=C([L("design:paramtypes",[h,i.sBO])],e)).\u0275fac=function(t){return new(t||e)(i.Y36(h),i.Y36(i.sBO))},e.\u0275dir=i.lG2({type:e,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{maxSize:"maxSize",id:"id"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[i.TTD]}),e}(),A=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({providers:[h],imports:[[r.ez]]}),e}()}}])}();