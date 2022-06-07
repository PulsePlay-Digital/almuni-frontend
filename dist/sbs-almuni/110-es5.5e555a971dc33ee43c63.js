!function(){"use strict";function t(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var n={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(L){l=function(t,n,e){return t[n]=e}}function u(t,n,e,r){var o=n&&n.prototype instanceof h?n:h,i=Object.create(o.prototype),a=new _(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return A()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=b(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var l=s(t,n,e);if("normal"===l.type){if(r=e.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(r="completed",e.method="throw",e.arg=l.arg)}}}(t,e,a),i}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(L){return{type:"throw",arg:L}}}n.wrap=u;var f={};function h(){}function p(){}function d(){}var g={};l(g,i,function(){return this});var y=Object.getPrototypeOf,v=y&&y(y(O([])));v&&v!==e&&r.call(v,i)&&(g=v);var m=d.prototype=h.prototype=Object.create(g);function w(t){["next","throw","return"].forEach(function(n){l(t,n,function(t){return this._invoke(n,t)})})}function x(t,n){function e(o,i,a,c){var l=s(t[o],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?n.resolve(f.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):n.resolve(f).then(function(t){u.value=t,a(u)},function(t){return e("throw",t,a,c)})}c(l.arg)}var o;this._invoke=function(t,r){function i(){return new n(function(n,o){e(t,r,n,o)})}return o=o?o.then(i,i):i()}}function b(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,b(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=s(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function Z(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function k(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function O(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return p.prototype=d,l(m,"constructor",d),l(d,"constructor",p),p.displayName=l(d,c,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},n.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,a,function(){return this}),n.AsyncIterator=x,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new x(u(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},w(m),l(m,c,"Generator"),l(m,i,function(){return this}),l(m,"toString",function(){return"[object Generator]"}),n.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},n}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkSBUP_almuni=self.webpackChunkSBUP_almuni||[]).push([[110],{44110:function(e,o,i){i.r(o),i.d(o,{ContactModule:function(){return C}});var a,c=i(38583),l=i(8307),u=i(37716),s=((a=function(){function t(){n(this,t)}return r(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=u.Xpm({type:a,selectors:[["app-contact"]],decls:2,vars:0,consts:[[1,"commonTopPadding"]],template:function(t,n){1&t&&(u.TgZ(0,"div",0),u._UZ(1,"router-outlet"),u.qZA())},directives:[l.lC],styles:[""]}),a),f=i(8239),h=i(88002),p=i(77165),d=i(70870),g=i(60624);function y(t,n){1&t&&u._UZ(0,"app-loader")}function v(t,n){if(1&t&&(u.TgZ(0,"div",8),u.TgZ(1,"div",9),u.TgZ(2,"div",10),u.TgZ(3,"h6",11),u._uU(4),u.qZA(),u.qZA(),u.TgZ(5,"div",12),u._UZ(6,"p",13),u.qZA(),u.qZA(),u.qZA()),2&t){var e=n.$implicit;u.xp6(4),u.hij("",null==e?null:e.title,":"),u.xp6(2),u.Q6J("innerHtml",null==e?null:e.description,u.oJD)}}function m(t,n){if(1&t&&(u.ynx(0),u.YNc(1,v,7,2,"div",7),u.BQk()),2&t){var e=u.oxw(2);u.xp6(1),u.Q6J("ngForOf",e.keyData)}}function w(t,n){1&t&&(u.ynx(0),u.TgZ(1,"div",14),u.TgZ(2,"div",15),u.TgZ(3,"div",12),u.TgZ(4,"p"),u._uU(5,"No data found"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.BQk())}function x(t,n){if(1&t&&(u.TgZ(0,"div",6),u.YNc(1,m,2,1,"ng-container",4),u.YNc(2,w,6,0,"ng-container",4),u.qZA()),2&t){var e=u.oxw();u.xp6(1),u.Q6J("ngIf",(null==e.keyData?null:e.keyData.length)>0),u.xp6(1),u.Q6J("ngIf",0==(null==e.keyData?null:e.keyData.length))}}function b(t,n){1&t&&u._UZ(0,"app-loader")}function Z(t,n){if(1&t&&(u.TgZ(0,"li",10),u.TgZ(1,"a",11),u._uU(2),u.qZA(),u.qZA()),2&t){var e=n.$implicit;u.xp6(1),u.s9C("href",null==e?null:e.link,u.LSH),u.xp6(1),u.Oqu(null==e?null:e.title)}}function k(t,n){if(1&t&&(u.ynx(0),u.YNc(1,Z,3,2,"li",9),u.BQk()),2&t){var e=u.oxw(2);u.xp6(1),u.Q6J("ngForOf",e.socialData)}}function _(t,n){1&t&&(u.ynx(0),u.TgZ(1,"li"),u._uU(2,"No data found"),u.qZA(),u.BQk())}function O(t,n){if(1&t&&(u.TgZ(0,"ul",8),u.YNc(1,k,2,1,"ng-container",4),u.YNc(2,_,3,0,"ng-container",4),u.qZA()),2&t){var e=u.oxw();u.xp6(1),u.Q6J("ngIf",(null==e.socialData?null:e.socialData.length)>0),u.xp6(1),u.Q6J("ngIf",0==(null==e.socialData?null:e.socialData.length))}}var A=[{path:"contact",component:s,children:[{path:"key-contact",component:function(){var e=function(){function e(t){n(this,e),this.dataService=t,this.loading=!1,this.heading="CONTACT US"}return r(e,[{key:"ngOnInit",value:function(){this.loading=!0,this.getAllKeyContacts()}},{key:"getAllKeyContacts",value:function(){var n=this;return(0,f.Z)(t().mark(function e(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.dataService.getData("all-contact").pipe((0,h.U)(function(t){return t.data.filter(function(t){if("KeyContact"===(null==t?void 0:t.type))return t})})).subscribe(function(t){n.keyData=t,n.loading=!1});case 2:case"end":return t.stop()}},e)}))()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(p.D))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-key-contact"]],decls:6,vars:3,consts:[[3,"heading"],[1,"container"],[1,"row","justify-content-xl-center","py-xl-5","py-lg-5","py-md-4","py-sm-4","py-4"],[1,"col-xl-9","col-lg-12","col-md-12"],[4,"ngIf"],["class","row justify-content-center",4,"ngIf"],[1,"row","justify-content-center"],["class","col-lg-6 col-md-6 col-sm-12 my-lg-4 my-md-4 my-sm-3 my-2",4,"ngFor","ngForOf"],[1,"col-lg-6","col-md-6","col-sm-12","my-lg-4","my-md-4","my-sm-3","my-2"],[1,"card","py-2","border-0"],[1,"card-header","border-0","bg-transparent","pt-4"],[1,"card-heading","fs-4","mb-xl-2","mb-lg-2","mb-md-2","mb-sm-2","mb-0"],[1,"card-body"],[1,"fs-6","fw-bold",3,"innerHtml"],[1,"col-12"],[1,"card"]],template:function(t,n){1&t&&(u._UZ(0,"app-users-banner",0),u.TgZ(1,"div",1),u.TgZ(2,"div",2),u.TgZ(3,"div",3),u.YNc(4,y,1,0,"app-loader",4),u.YNc(5,x,3,2,"div",5),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.Q6J("heading",n.heading),u.xp6(4),u.Q6J("ngIf",n.loading),u.xp6(1),u.Q6J("ngIf",!n.loading))},directives:[d.P,c.O5,g.R,c.sg],styles:[".card[_ngcontent-%COMP%]{background-color:var(--card-bg);min-height:220px}.card[_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%]{color:var(--text-color)}@media (min-width: 300px) and (max-width: 768px){.card[_ngcontent-%COMP%]{min-height:auto}}@media (min-width: 768px) and (max-width: 991px){.card[_ngcontent-%COMP%]{min-height:260px}}"]}),e}()},{path:"social-links",component:function(){var e=function(){function e(t){n(this,e),this.dataService=t,this.loading=!1,this.heading="SRI BALAJI UNIVERSITY ALUMNI CLUBS - SOCIAL CHANNELS"}return r(e,[{key:"ngOnInit",value:function(){this.loading=!0,this.getAllSocialLinks()}},{key:"getAllSocialLinks",value:function(){var n=this;return(0,f.Z)(t().mark(function e(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.dataService.getData("all-contact").pipe((0,h.U)(function(t){return t.data.filter(function(t){if("SbupChannel"===(null==t?void 0:t.type))return t})})).subscribe(function(t){n.socialData=t,n.loading=!1});case 2:case"end":return t.stop()}},e)}))()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(p.D))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-social-links"]],decls:8,vars:3,consts:[[3,"heading"],[1,"container","my-xl-5","my-lg-5","my-md-5","my-sm-4","my-4"],[1,"row"],[1,"col-lg-8","col-md-12"],[4,"ngIf"],["class","social-channels",4,"ngIf"],[1,"col-lg-4","col-md-12"],["width","100%","height","260","src","https://www.youtube.com/embed/shv16JEFhac","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen",""],[1,"social-channels"],["class","social-links fs-5",4,"ngFor","ngForOf"],[1,"social-links","fs-5"],[1,"text-decoration-none",3,"href"]],template:function(t,n){1&t&&(u._UZ(0,"app-users-banner",0),u.TgZ(1,"div",1),u.TgZ(2,"div",2),u.TgZ(3,"div",3),u.YNc(4,b,1,0,"app-loader",4),u.YNc(5,O,3,2,"ul",5),u.qZA(),u.TgZ(6,"div",6),u._UZ(7,"iframe",7),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.Q6J("heading",n.heading),u.xp6(4),u.Q6J("ngIf",n.loading),u.xp6(1),u.Q6J("ngIf",!n.loading))},directives:[d.P,c.O5,g.R,c.sg],styles:[".social-channels[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]{list-style:none;line-height:2.1em}.social-channels[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000!important}.social-channels[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{color:#011898!important}"]}),e}()},{path:"",redirectTo:"key-contact",pathMatch:"full"}]}],L=function(){var t=r(function t(){n(this,t)});return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[l.Bz.forChild(A)],l.Bz]}),t}(),T=i(81881),C=function(){var t=r(function t(){n(this,t)});return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[c.ez,L,T.m]]}),t}()}}])}();