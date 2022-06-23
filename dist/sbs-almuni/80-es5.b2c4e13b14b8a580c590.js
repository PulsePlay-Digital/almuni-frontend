!function(){"use strict";function e(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},t=Object.prototype,i=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",r=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{c({},"")}catch(T){c=function(e,n,t){return e[n]=t}}function l(e,n,t,i){var a=n&&n.prototype instanceof g?n:g,o=Object.create(a.prototype),r=new M(i||[]);return o._invoke=function(e,n,t){var i="suspendedStart";return function(a,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===a)throw o;return C()}for(t.method=a,t.arg=o;;){var r=t.delegate;if(r){var s=b(r,t);if(s){if(s===u)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===i)throw i="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);i="executing";var c=d(e,n,t);if("normal"===c.type){if(i=t.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(i="completed",t.method="throw",t.arg=c.arg)}}}(e,t,r),o}function d(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(T){return{type:"throw",arg:T}}}n.wrap=l;var u={};function g(){}function h(){}function m(){}var f={};c(f,o,function(){return this});var p=Object.getPrototypeOf,y=p&&p(p(A([])));y&&y!==t&&i.call(y,o)&&(f=y);var v=m.prototype=g.prototype=Object.create(f);function Z(e){["next","throw","return"].forEach(function(n){c(e,n,function(e){return this._invoke(n,e)})})}function w(e,n){function t(a,o,r,s){var c=d(e[a],e,o);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&i.call(u,"__await")?n.resolve(u.__await).then(function(e){t("next",e,r,s)},function(e){t("throw",e,r,s)}):n.resolve(u).then(function(e){l.value=e,r(l)},function(e){return t("throw",e,r,s)})}s(c.arg)}var a;this._invoke=function(e,i){function o(){return new n(function(n,a){t(e,i,n,a)})}return a=a?a.then(o,o):o()}}function b(e,n){var t=e.iterator[n.method];if(void 0===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=void 0,b(e,n),"throw"===n.method))return u;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var i=d(t,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,u;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,u):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,u)}function _(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function P(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function A(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var t=-1,a=function n(){for(;++t<e.length;)if(i.call(e,t))return n.value=e[t],n.done=!1,n;return n.value=void 0,n.done=!0,n};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=m,c(v,"constructor",m),c(m,"constructor",h),h.displayName=c(m,s,"GeneratorFunction"),n.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===h||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,s,"GeneratorFunction")),e.prototype=Object.create(v),e},n.awrap=function(e){return{__await:e}},Z(w.prototype),c(w.prototype,r,function(){return this}),n.AsyncIterator=w,n.async=function(e,t,i,a,o){void 0===o&&(o=Promise);var r=new w(l(e,t,i,a),o);return n.isGeneratorFunction(t)?r:r.next().then(function(e){return e.done?e.value:r.next()})},Z(v),c(v,s,"Generator"),c(v,o,function(){return this}),c(v,"toString",function(){return"[object Generator]"}),n.keys=function(e){var n=[];for(var t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},n.values=A,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function t(t,i){return r.type="throw",r.arg=e,n.next=t,i&&(n.method="next",n.arg=void 0),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],r=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc<=this.prev&&i.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var r=o?o.completion:{};return r.type=e,r.arg=n,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(r)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),u},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),P(t),u}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var i=t.completion;if("throw"===i.type){var a=i.arg;P(t)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,t){return this.delegate={iterator:A(e),resultName:n,nextLoc:t},"next"===this.method&&(this.arg=void 0),u}},n}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkSBUP_almuni=self.webpackChunkSBUP_almuni||[]).push([[80],{60080:function(t,a,o){o.r(a),o.d(a,{AboutUsModule:function(){return k}});var r,s=o(38583),c=o(8307),l=o(37716),d=o(9957),u=o(70870),g=((r=function(){function e(t){n(this,e),this.breadcrumbService=t,this.heading="THE FOUNDER CHANCELLOR"}return i(e,[{key:"ngOnInit",value:function(){this.breadcrumbService.set("@ChildOne","Founder Chancellor")}}]),e}()).\u0275fac=function(e){return new(e||r)(l.Y36(d.pm))},r.\u0275cmp=l.Xpm({type:r,selectors:[["app-founder"]],decls:49,vars:1,consts:[[1,"founderPage","commonTopPadding"],[3,"heading"],[1,"know-us-section"],[1,"container"],[1,"row","m-0","justify-content-center","py-xl-5","py-lg-5","py-md-5","py-sm-4","py-3"],[1,"col-lg-12","text-center"],[1,"know-image"],["src","./assets/know-us/balasir.png","alt","balasir img",1,"w-50"],[1,"col-lg-12","py-xl-4","py-lg-4","py-md-4","py-sm-3"],[1,"row"],[1,"col-lg-12"],[1,"main-heading","fw-bolder","text-uppercase","fw-bolder"],[1,"small-heading","fw-bold"],[1,"font-italic","text-muted","mb-2","pt-lg-3","pt-md-3","pt-sm-2","pt-2","text-para"],[1,"text-name","fw-bold"],["href","#",1,"text-decoration-none","fw-bold","text-blue"],["href","#",1,"text-decoration-none","text-blue","fw-bold"],[1,"text-muted"],[1,"row","justify-content-center","pt-lg-3","pt-md-3","pt-sm-2","pt-2"],[1,"col-md-8","col-lg-8","text-center","founderVideo","p-0"],["src","https://youtube.com/embed/7MMhuqtImo0"]],template:function(e,n){1&e&&(l.TgZ(0,"div",0),l._UZ(1,"app-users-banner",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"div",4),l.TgZ(5,"div",5),l.TgZ(6,"div",6),l._UZ(7,"img",7),l.qZA(),l.qZA(),l.TgZ(8,"div",8),l.TgZ(9,"div",9),l.TgZ(10,"div",10),l.TgZ(11,"h6",11),l._uU(12,"LATE PROF. DR. (COL) A. BALASUBRAMANIAN "),l.qZA(),l.TgZ(13,"p",12),l._uU(14," Founder President & Chancellor, Sri Balaji University, Pune "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(15,"p",13),l.TgZ(16,"span",14),l._uU(17," Prof. Dr. (Col.) A. Balasubramanian "),l.qZA(),l._uU(18,"was an eminent educationist, philanthropist, a gifted writer, and army officer. The founding father of Sri Balaji University, Pune (SBUP), "),l.TgZ(19,"span",14),l._uU(20," Prof. Dr. (Col.) A. Balasubramanian"),l.qZA(),l._uU(21,", was a powerhouse of energy, dynamism and knowledge. His contributions had been instrumental in setting up Symbiosis Institute of Management Studies (SIMS) and was the \u2018Atlas\u2019 of the Sri Balaji University, Pune (SBUP)."),l.qZA(),l.TgZ(22,"p",13),l._uU(23," A soldier and a student, "),l.TgZ(24,"span",14),l._uU(25,"Dr. (Col) A. Balasubramanian"),l.qZA(),l._uU(26," was also a trainer, a consultant, a gifted writer, an author and the pioneer who conceived the idea of creating the first Post Graduate Management Institute in India exclusively for the Defence Personnel and their dependents. A retired Army Personnel, he was the first Indian from Armed Forces in the history of India to be conferred the Honorary Rank of Colonel after retirement. Standing tall with him on this exclusive dais are famous sportsmen like Kapil Dev, Sachin Tendulkar, Abhinav Bindra, Mahender Singh Dhoni and the famous actor, Mohanlal. has many feathers in his cap and is known for his creative, successful, and bold experiments in management education ventures."),l.qZA(),l.TgZ(27,"p",13),l._uU(28," He was a firm believer in the values of "),l.TgZ(29,"a",15),l._uU(30,"Discipline, Determination, and Dedication"),l.qZA(),l._uU(31," and leaves no stone unturned in ensuring that these values become the lifestyle of the MBA students enrolled in the SBUP. It\u2019s a common belief that a man is a product of one\u2019s environment. But for men with a strong will power, the environment is never a limiting factor. Prof. Bala was one such individual who has fought against the environmental factors to craft a fortune for himself. Born in the iron grip of poverty education was a scarce commodity to come by. To make a place for himself in the world, he left the comforts of a protected family life and joined an orphanage and completed his education up to high school. He then joined the Indian Army as a Sepoy and retired as a Subedar after a service of 28 years. While wearing the uniform, he acquired three post-graduate degrees with flying colors."),l.qZA(),l.TgZ(32,"p",13),l._uU(33," His inclination towards education and knowledge did not end with acquiring degrees for himself, but led him to create The Sri Balaji University and the Institutes under it which have groomed more than 16000 managers to date. His scholarly attributes and commitment to students have ranked him as one of the leading lights in the field of education in India. "),l.TgZ(34,"span",14),l._uU(35,"Dr. (Col) A. Balasubramanian "),l.qZA(),l._uU(36,"believes that \u2018Education is the enhancer of knowledge, skill, and attitude. It is the energy of a nation. It is a source of discipline, dedication and determination necessary for transforming the effort into action for achieving the goal\u2019. In line with his beliefs, he steers the four prestigious management institutes in Pune, namely Balaji Institute of Modern Management (BIMM), Balaji Institute of Telecom & Management (BITM), Balaji Institute of International Business (BIIB) and Balaji Institute of Management & HRD (BIMHRD), collectively forming the powerhouse of education known as the Sri Balaji University (SBUP). "),l.qZA(),l.TgZ(37,"p",13),l._uU(38," The other colleges are Balaji College of Arts, Science & Commerce (BCACS), Balaji Junior College of Arts, Commerce & Science (BCACS) and Balaji Law College (BLC) providing education to undergraduate students. "),l.qZA(),l.TgZ(39,"p",13),l._uU(40," The vision and mission statement of Dr. (Col) A. Balasubramanian is"),l.TgZ(41,"a",16),l._uU(42," 'Problems are Opportunities\u2019 "),l.TgZ(43,"span",17),l._uU(44,"and"),l.qZA(),l._uU(45," \u2018Be Selfish'."),l.qZA(),l.qZA(),l.qZA(),l.TgZ(46,"div",18),l.TgZ(47,"div",19),l._UZ(48,"iframe",20),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(1),l.Q6J("heading",n.heading))},directives:[u.P],styles:[".founderPage[_ngcontent-%COMP%]   .know-us-section[_ngcontent-%COMP%]   .small-heading[_ngcontent-%COMP%]{color:#f65c8b;font-size:var(--font-S-18)}.founderPage[_ngcontent-%COMP%]   .know-us-section[_ngcontent-%COMP%]   .text-name[_ngcontent-%COMP%]{color:#fea641}.founderPage[_ngcontent-%COMP%]   .know-us-section[_ngcontent-%COMP%]   .text-para[_ngcontent-%COMP%]{text-align:var(--text-J)}.founderPage[_ngcontent-%COMP%]   .know-us-section[_ngcontent-%COMP%]   .founderVideo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--btn-background)}.founderPage[_ngcontent-%COMP%]   .know-us-section[_ngcontent-%COMP%]   .founderVideo[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:var(--width-0100);height:450px}.founderPage[_ngcontent-%COMP%]   .know-us-section[_ngcontent-%COMP%]   .text-blue[_ngcontent-%COMP%]{color:var(--btn-background)}@media screen and (max-width: 400px) and (min-width: 300px){.founderPage[_ngcontent-%COMP%]   .know-us-section[_ngcontent-%COMP%]   .founderVideo[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:200px}.founderPage[_ngcontent-%COMP%]   .know-us-section[_ngcontent-%COMP%]   .small-heading[_ngcontent-%COMP%]{font-size:var(--font-S-14)}}@media screen and (max-width: 574px) and (min-width: 400px){.founderPage[_ngcontent-%COMP%]   .know-us-section[_ngcontent-%COMP%]   .founderVideo[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:288px}.founderPage[_ngcontent-%COMP%]   .know-us-section[_ngcontent-%COMP%]   .small-heading[_ngcontent-%COMP%]{font-size:var(--font-S-14)}}@media screen and (max-width: 767px) and (min-width: 575px){.founderPage[_ngcontent-%COMP%]   .know-us-section[_ngcontent-%COMP%]   .founderVideo[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:352px}.founderPage[_ngcontent-%COMP%]   .know-us-section[_ngcontent-%COMP%]   .small-heading[_ngcontent-%COMP%]{font-size:var(--font-S-16)}}@media screen and (max-width: 991px) and (min-width: 768px){.founderPage[_ngcontent-%COMP%]   .know-us-section[_ngcontent-%COMP%]   .founderVideo[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:430px}}@media screen and (max-width: 1200px) and (min-width: 991px){.founderPage[_ngcontent-%COMP%]   .know-us-section[_ngcontent-%COMP%]   .founderVideo[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:400px}}"]}),r),h=function(){var e=function(){function e(){n(this,e)}return i(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-balaji-social-society"]],decls:120,vars:0,consts:[[1,"balajiSociety","commonTopPadding"],[1,"bannerImg"],[1,"layer"],[1,"container"],[1,"row","m-0","justify-content-center"],[1,"col-lg-12","text-center"],[1,"text-white","fw-bold","mb-0","text-capitalize"],[1,"know-section"],[1,"row","justify-content-center","py-lg-5","py-md-4","py-sm-3","py-3"],[1,"row","m-0"],[1,"col-lg-12","my-lg-3","my-md-3","my-sm-3","my-2"],[1,"sbup-image","text-center"],["src","./assets/know-us/sbup.gif","alt","bimm img",1,"w-100","img-fluid"],[1,"col-lg-12"],[1,"font-italic","text-muted","lh-base"],[1,"text-name","fw-bold"],[1,"col-lg-12","py-xl-5","py-lg-5","py-md-4","py-sm-3","py-3"],[1,"main-heading","mb-0","text-lg-start","text-md-center","text-sm-start","fw-bolder","text-uppercase","fw-bolder"],[1,"col-lg-5","my-lg-0","my-md-3","my-sm-3","my-2"],["src","./assets/know-us/bimm.png","alt","bimm img",1,"w-100","img-fluid"],[1,"col-lg-7"],[1,"main-heading","text-lg-start","text-md-center","text-sm-start","mb-0","fw-bolder","text-uppercase","fw-bolder"],[1,"col-lg-7","order-xl-1","order-lg-1","order-md-2","order-sm-2","order-2"],[1,"col-lg-5","my-lg-0","my-md-3","my-sm-3","my-2","order-xl-2","order-lg-2","order-md-1","order-sm-1","order-1"],["src","./assets/know-us/bitm.png","alt","bitm img",1,"w-100","img-fluid"],[1,"col-lg-6","my-lg-0","my-md-3","my-sm-3","my-2"],["src","./assets/know-us/bibb.png","alt","bibb img",1,"w-100","img-fluid"],[1,"col-lg-6"],["src","./assets/know-us/bimhrd.png","alt","bimhrd img",1,"w-100","img-fluid"],["src","./assets/know-us/blc.png","alt","blc img",1,"w-100","img-fluid"]],template:function(e,n){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"div",4),l.TgZ(5,"div",5),l.TgZ(6,"h3",6),l._uU(7,"SRI BALAJI UNIVERSITY, PUNE (SBUP)"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(8,"div",7),l.TgZ(9,"div",3),l.TgZ(10,"div",8),l.TgZ(11,"div",9),l.TgZ(12,"div",10),l.TgZ(13,"div",11),l._UZ(14,"img",12),l.qZA(),l.qZA(),l.TgZ(15,"div",13),l.TgZ(16,"p",14),l.TgZ(17,"span",15),l._uU(18,"Sri Balaji University, "),l.qZA(),l._uU(19," Pune, is an institution of excellence in Pune. The university is running under the able guidance and leadership of its founding father and Chancellor, Professor Dr. (Col) A. Balasubramanian. The university at present has four management institutions: Balaji Institute of Modern Management (BIMM), Balaji Institute of Telecom Management (BITM), Balaji Institute of International Business (BIIB), and Balaji Institute of Management and Human Resources Development (BIMHRD). Apart from these four institutions it also has a law college \u2013 Balaji Law College (BLC) and an Undergraduate and Graduate level college namely \u2013 Balaji College of Arts Commerce and Science (BCACS) and Balaji Junior College of Arts Commerce and Science (BCACS). BLC and BCACS are affiliated to the Savitribai Phule Pune University."),l.qZA(),l.qZA(),l.qZA(),l.TgZ(20,"div",9),l.TgZ(21,"div",16),l.TgZ(22,"h6",17),l._uU(23," BIMM "),l.qZA(),l.qZA(),l.TgZ(24,"div",18),l.TgZ(25,"div",11),l._UZ(26,"img",19),l.qZA(),l.qZA(),l.TgZ(27,"div",20),l.TgZ(28,"p",14),l._uU(29,"The first institution in the Sri Balaji University: "),l.TgZ(30,"span",15),l._uU(31,"IIMM (Indian Institute of Modern Management) "),l.qZA(),l._uU(32," was started in the year 1999, within the campus premises of the Agrasen Maharaj High School located in Yerwada, Pune. "),l.qZA(),l.TgZ(33,"p",14),l._uU(34," IIMM was offering PGDM certificates in Management education with optional specialization PGDM certificates in PGDM in Personnel Management and PM&HRM (Personnel Management and Human Resource Management) and PGDM in Information Technology and Marketing (IT & Marketing). "),l.qZA(),l.TgZ(35,"p",14),l._uU(36," The institute enjoys a stellar reputation in the corporate world through the quality and excellence displayed by its students and alumni in the industry. The name \u2018IIMM\u2019 was later changed into "),l.TgZ(37,"span",15),l._uU(38,"BIMM (Balaji Institute of Modern Management)"),l.qZA(),l._uU(39," when the institute secured AICTE\u2019s approval in the year 2005. The institute offers two year full-time MBA Programs and also MBA for experienced professional called MBA-Executive. The specializations offered are: Sales and Marketing (including Retail and Insurance), Finance and Financial Services, Systems, Operations & Supply Chain Management, Business Analytics, PM&HRM (Personnel Management and Human Resource Management). "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(40,"div",9),l.TgZ(41,"div",16),l.TgZ(42,"h6",21),l._uU(43," BITM "),l.qZA(),l.qZA(),l.TgZ(44,"div",22),l.TgZ(45,"p",14),l._uU(46," The second institution in the Sri Balaji University: "),l.TgZ(47,"span",15),l._uU(48," ICTM (Indian Centre for Telecom Management) "),l.qZA(),l._uU(49," and Human Resource Management) and PGDM in Information Technology and Marketing (IT & Marketing). "),l.qZA(),l.TgZ(50,"p",14),l._uU(51," This institution offers unique telecom and telecommunication courses related to the IT and technical infrastructure and systems related to management so that its students can be transformed into professionals ready to manage the technical side of the business. "),l.qZA(),l.TgZ(52,"p",14),l._uU(53," The institute was established keeping in mind the tremendous growth potential of the IT, ITES and other service industry in India. IITM was rechristened into "),l.TgZ(54,"span",15),l._uU(55,"BITM (Balaji Institute of Telecom & Management) "),l.qZA(),l._uU(56,"when the institute secured AICTE\u2019s approval in the year 2005. The institute offers two year full-time MBA Programs with specializations in Telecom Management, Sales and Marketing (including Retail and Insurance), Finance and Financial Services, Systems, Operations & Supply Chain Management and Business Analytics. "),l.qZA(),l.qZA(),l.TgZ(57,"div",23),l.TgZ(58,"div",11),l._UZ(59,"img",24),l.qZA(),l.qZA(),l.qZA(),l.TgZ(60,"div",9),l.TgZ(61,"div",16),l.TgZ(62,"h6",21),l._uU(63," BIIB "),l.qZA(),l.qZA(),l.TgZ(64,"div",25),l.TgZ(65,"div",11),l._UZ(66,"img",26),l.qZA(),l.qZA(),l.TgZ(67,"div",27),l.TgZ(68,"p",14),l._uU(69," The third institution in the SBUP: "),l.TgZ(70,"span",15),l._uU(71," ICIB (Indian Centre for International Business) "),l.qZA(),l._uU(72," was started in the year 2003 within the Agrasen Maharaj Campus. "),l.qZA(),l.TgZ(73,"p",14),l._uU(74," The institute offers programs catering towards the development of its students into future-ready international level individuals. With courses catering towards the marketing, financial and international aspects of management the institute transforms its students into professionals, trained to control, manage and excel in companies working on the international level. "),l.qZA(),l.TgZ(75,"p",14),l._uU(76," IIIB was rechristened into "),l.TgZ(77,"span",15),l._uU(78,"(Balaji Institute of International Business) "),l.qZA(),l._uU(79,"when the institute secured AICTE\u2019s approval in the year 2005. The institute offers two year full-time MBA Programs with specializations in International Business, Sales and Marketing (including Retail and Insurance), Financial Management and Business Analytics. "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(80,"div",9),l.TgZ(81,"div",16),l.TgZ(82,"h6",21),l._uU(83," BIMHRD "),l.qZA(),l.qZA(),l.TgZ(84,"div",22),l.TgZ(85,"p",14),l._uU(86," The fourth institution in the society: "),l.TgZ(87,"span",15),l._uU(88," ICMHRD (Indian Centre for Management and Human Resources Development) "),l.qZA(),l._uU(89," was established in the year 2004 in the Brahma Estate building in Kondwa Kund in Pune. "),l.qZA(),l.TgZ(90,"p",14),l._uU(91," The institute\u2019s primary objective and mandate are to transform its students into industry-ready corporate citizens, leaders, managers, and entrepreneurs. The institute offers courses related to general management, marketing and finance, and PM&HRD. The institute enjoys a good name in the corporate world thanks to the efforts of its students into excelling in their respective fields in the industry. "),l.qZA(),l.TgZ(92,"p",14),l._uU(93," The name IIMHRD was later changed into "),l.TgZ(94,"span",15),l._uU(95," BIMHRD (Balaji Institute of Management & Human Resource Development)"),l.qZA(),l._uU(96,"when the institute secured AICTE\u2019s approval in the year 2005. The institute offers two year full-time MBA Programs with specializations in Sales and Marketing (including Retail and Insurance), Finance and Financial Services, Systems, Operations & Supply Chain Management, Business Analytics, PM&HRM (Personnel Management and Human Resource Management). "),l.qZA(),l.qZA(),l.TgZ(97,"div",23),l.TgZ(98,"div",11),l._UZ(99,"img",28),l.qZA(),l.qZA(),l.qZA(),l.TgZ(100,"div",9),l.TgZ(101,"div",16),l.TgZ(102,"h6",21),l._uU(103," BLC & BCACS "),l.qZA(),l.qZA(),l.TgZ(104,"div",18),l.TgZ(105,"div",11),l._UZ(106,"img",29),l.qZA(),l.qZA(),l.TgZ(107,"div",20),l.TgZ(108,"p",14),l.TgZ(109,"span",15),l._uU(110," Balaji Law College (BLC) "),l.qZA(),l._uU(111," was started in the year 2003. Balaji Law College stands firm with the four management institutes of Sri Balaji University, poised to hone its students so that they wear not only the black gown of law but also the grey corporate suit of business, giving them an edge over their competition in the legal sector. Within a few years of its inception, Balaji Law College has successfully formed a place for itself in the legal education sector and has stood the test of time in creating a new breed of responsible, knowledgeable and well equipped law graduates willing to contribute to the legal fraternity, deliver and assist in the delivery of justice and be an asset not only to their company but also to the country. "),l.qZA(),l.TgZ(112,"p",14),l.TgZ(113,"span",15),l._uU(114," Balaji College of Arts, Commerce and Science (BCACS) "),l.qZA(),l._uU(115," was started in the year 2003. BCACS\u2019s mandate is to enable quality and excellence in the pedagogy and impartation of information and knowledge in the field of arts, commerce, and science. The institution produces graduates who are trained to excel in their chosen field whether in the field of higher education or within their workplaces so that they raise the flag of quality and excellence by means of their work increasing the goodwill and the image of their institution. BCACS offer B.Com. and B.B.A. degrees. "),l.qZA(),l.TgZ(116,"p",14),l.TgZ(117,"span",15),l._uU(118," Balaji Junior College of Arts, Commerce and Science (BCACS) "),l.qZA(),l._uU(119," Functioning with the BCACS, The BJCACS has been established with an intent of helping its students into developing their fundamentals and honing their existing edge of information and knowledge so that they cross the border into university education from school level education by developing quality and excellence in their studies and work. Also started in the year 2003, the institute prepares its students to deliver their best in their chosen field of study so that they are able to develop excellence in their chosen field as they take the first step into the terrain of university-level learning and education, improving their image and the image of their institution by means of the output displayed by them in their studies, play and work. "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA())},styles:[".balajiSociety[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%]{background:url(backgroundbalaji.f7519a9e592d996e0864.webp);background-repeat:var(--background-no-repeat);height:250px;background-size:100% 100%;position:var(--position-relative)}.balajiSociety[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.6);position:var(--position-absolute);top:0;left:0;width:var(--width);height:var(--height-100);display:var(--display-Flex);align-items:var(--align-center)}.balajiSociety[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{letter-spacing:var(--letter-space-1);font-family:var(--family);font-size:var(--font-S-34)}.balajiSociety[_ngcontent-%COMP%]   .know-section[_ngcontent-%COMP%]   .sbup-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:var(--object-cover);object-fit:var(--object-cover)}.balajiSociety[_ngcontent-%COMP%]   .know-section[_ngcontent-%COMP%]   .small-heading[_ngcontent-%COMP%]{color:#f65c8b}.balajiSociety[_ngcontent-%COMP%]   .know-section[_ngcontent-%COMP%]   .text-name[_ngcontent-%COMP%]{color:#fea641}.balajiSociety[_ngcontent-%COMP%]   .know-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:var(--text-J)}@media screen and (max-width: 400px) and (min-width: 300px){.balajiSociety[_ngcontent-%COMP%]   .know-section[_ngcontent-%COMP%]   .sbup-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:230px}}@media (min-width: 300px) and (max-width: 575px){.balajiSociety[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%]{background-size:cover;background-position-x:center;height:150px}.balajiSociety[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:var(--font-S-18)}}@media (min-width: 574px) and (max-width: 767px){.balajiSociety[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%]{height:180px}.balajiSociety[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:var(--font-S-22)}}@media (min-width: 768px) and (max-width: 991px){.balajiSociety[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%]{height:200px}.balajiSociety[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:var(--font-S-26)}}@media (min-width: 992px) and (max-width: 1200px){.balajiSociety[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:var(--font-S-30)}}"]}),e}(),m=function(){var e=function(){function e(t){n(this,e),this.breadcrumbService=t}return i(e,[{key:"ngOnInit",value:function(){this.breadcrumbService.set("@ChildOne","Know Us")}}]),e}();return e.\u0275fac=function(n){return new(n||e)(l.Y36(d.pm))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-about-us"]],decls:1,vars:0,template:function(e,n){1&e&&l._UZ(0,"router-outlet")},directives:[c.lC],styles:[""]}),e}(),f=o(8239),p=o(92340),y=o(77165),v=o(9353),Z=o(60624),w=o(22443),b=o(72533);function _(e,n){1&e&&l._UZ(0,"app-loader")}function P(e,n){if(1&e&&(l.ynx(0),l.TgZ(1,"div",25),l._UZ(2,"img",26),l.qZA(),l.BQk()),2&e){var t=l.oxw().$implicit,i=l.oxw(3);l.xp6(2),l.Q6J("defaultImage",i.lazyLoadImage)("lazyLoad",i.imgPath+(null==t?null:t.image))}}function M(e,n){if(1&e&&(l.ynx(0),l._UZ(1,"img",27),l.BQk()),2&e){var t=l.oxw().$implicit,i=l.oxw(3);l.xp6(1),l.Q6J("src",i.imgPath+(null==t?null:t.image),l.LSH)}}function A(e,n){if(1&e&&(l.TgZ(0,"div",19),l.TgZ(1,"div",20),l.YNc(2,P,3,2,"ng-container",14),l.YNc(3,M,2,1,"ng-container",14),l.TgZ(4,"div",21),l.TgZ(5,"h3",22),l._uU(6),l.qZA(),l.qZA(),l.TgZ(7,"div",23),l.TgZ(8,"p",24),l._uU(9),l.qZA(),l.TgZ(10,"p",24),l._uU(11),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e){var t=n.$implicit;l.xp6(2),l.Q6J("ngIf",null!=(null==t?null:t.image)),l.xp6(1),l.Q6J("ngIf",null==(null==t?null:t.image)),l.xp6(3),l.Oqu(null==t?null:t.name),l.xp6(3),l.Oqu(null==t?null:t.designation),l.xp6(2),l.Oqu(null==t?null:t.institute_name)}}var C=function(e){return{itemsPerPage:9,currentPage:e}};function T(e,n){if(1&e&&(l.TgZ(0,"div",17),l.YNc(1,A,12,5,"div",18),l.ALo(2,"paginate"),l.qZA()),2&e){var t=l.oxw(2);l.xp6(1),l.Q6J("ngForOf",l.xi3(2,1,t.teamData,l.VKq(4,C,t.p)))}}function x(e,n){if(1&e){var t=l.EpF();l.TgZ(0,"div",28),l.TgZ(1,"div",29),l.TgZ(2,"pagination-controls",30),l.NdJ("pageChange",function(e){return l.CHM(t),l.oxw(2).p=e}),l.qZA(),l.qZA(),l.qZA()}}function O(e,n){if(1&e&&(l.ynx(0),l.YNc(1,T,3,6,"div",15),l.YNc(2,x,3,0,"div",16),l.BQk()),2&e){var t=l.oxw();l.xp6(1),l.Q6J("ngIf",!t.loading),l.xp6(1),l.Q6J("ngIf",(null==t.teamData?null:t.teamData.length)>0)}}function q(e,n){1&e&&(l.ynx(0),l.TgZ(1,"div",31),l.TgZ(2,"p",32),l._uU(3,"No data found!"),l.qZA(),l.qZA(),l.BQk())}var I=[{path:"about-us",component:m,data:{breadcrumb:{alias:"About"}},children:[{path:"founder-chancellor",component:g,data:{breadcrumb:{alias:"Founder Chancellor"}}},{path:"balaji-social-society",component:h,data:{breadcrumb:{alias:"SBUP"}}},{path:"leadership-team",component:function(){var t=function(){function t(e,i){n(this,t),this.dataService=e,this.notify=i,this.teamData=[],this.loading=!0,this.p=1,this.heading="LEADERSHIP TEAM",this.lazyLoadImage="./assets/loading.gif",this.imgPath=p.N.imgUrl}return i(t,[{key:"ngOnInit",value:function(){this.getAllTeam()}},{key:"getAllTeam",value:function(){var n=this;return(0,f.Z)(e().mark(function t(){return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.loading=!0,e.next=3,n.dataService.getData("all-team").subscribe(function(e){200==(null==e?void 0:e.status)&&(n.teamData=null==e?void 0:e.data,n.loading=!1)},function(e){n.notify.notificationService.openFailureSnackBar(e),n.loading=!1});case 3:case"end":return e.stop()}},t)}))()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Y36(y.D),l.Y36(v.b))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-management-team"]],decls:25,vars:4,consts:[[1,"founderPage","commonTopPadding"],[3,"heading"],[1,"container"],[1,"row","m-0"],[1,"col-lg-12"],[1,"row"],[1,"col-lg-12","text-center","my-xl-5","my-lg-5","my-md-4","my-sm-4","my-3"],[1,"main-heading","text-uppercase","fw-bolder","mb-0"],[1,"row","mb-xl-4","mb-lg-4","mb-md-3","mb-2"],[1,"col-lg-5","order-xl-1","order-lg-1","order-md-1","order-2","text-start","my-2"],[1,"mb-xl-5","mb-lg-5","mb-md-5"],[1,"quotes","text-uppercase","fw-bolder","mb-0","lh-base"],[1,"col-lg-7","order-xl-2","order-lg-2","order-md-2","order-1","text-center","my-2"],["src","./assets/know-us/teamLeader.jpg","alt","leader img",1,"img-fluid"],[4,"ngIf"],["class","row mb-3",4,"ngIf"],["class","row justify-content-center my-xl-4 my-lg-4 my-md-3 my-sm-3 my-2",4,"ngIf"],[1,"row","mb-3"],["class","col-xl-4 col-lg-4 col-md-6  my-2",4,"ngFor","ngForOf"],[1,"col-xl-4","col-lg-4","col-md-6","my-2"],[1,"card","p-xl-4","p-lg-4","p-md-3","p-sm-3","p-3"],[1,"card-header","bg-transparent","border-0","text-center","pt-3"],[1,"card-title","fw-bold","text-capitalize","mb-0"],[1,"card-body","text-center","pb-0","pt-2"],[1,"card-text","mb-2"],[1,"alumni-pic"],["alt","Alumni Picture",1,"card-img-top",3,"defaultImage","lazyLoad"],["alt","Team Picture",1,"card-img-top","img-thumbnail","noImg",3,"src"],[1,"row","justify-content-center","my-xl-4","my-lg-4","my-md-3","my-sm-3","my-2"],[1,"col","text-center"],[3,"pageChange"],[1,"col-12","py-3","text-center","fw-bold"],[1,"fs-5"]],template:function(e,n){1&e&&(l.TgZ(0,"div",0),l._UZ(1,"app-users-banner",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"div",4),l.TgZ(5,"div",5),l.TgZ(6,"div",6),l.TgZ(7,"h3",7),l._uU(8," TOP BRASS OF SBUP "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(9,"div",8),l.TgZ(10,"div",9),l.TgZ(11,"div",10),l.TgZ(12,"h4",11),l._uU(13,"Late Prof. Dr. (Col.) A. Balasubramanian"),l.qZA(),l.TgZ(14,"p"),l._uU(15,"Founder Chancellor, Sri Balaji University, Pune"),l.qZA(),l.qZA(),l.TgZ(16,"h4",11),l._uU(17,' "A LEADER IS ONE WHO KNOWS THE WAY, GOES THE WAY, AND SHOWS THE WAY\u201d '),l.qZA(),l.TgZ(18,"p"),l._uU(19,"Going by this adage, we at SBUP believe that only an efficient and inspiring top management can enthuse youngsters to become ethical and disciplined future corporate leaders. In line with this thinking, we have some of the most inspiring academic and industry leaders as our top brass- people in authority. Here is a glimpse."),l.qZA(),l.qZA(),l.TgZ(20,"div",12),l._UZ(21,"img",13),l.qZA(),l.qZA(),l.YNc(22,_,1,0,"app-loader",14),l.YNc(23,O,3,2,"ng-container",14),l.YNc(24,q,4,0,"ng-container",14),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(1),l.Q6J("heading",n.heading),l.xp6(21),l.Q6J("ngIf",n.loading),l.xp6(1),l.Q6J("ngIf",(null==n.teamData?null:n.teamData.length)>0),l.xp6(1),l.Q6J("ngIf",0==(null==n.teamData?null:n.teamData.length)))},directives:[u.P,s.O5,Z.R,s.sg,w.z1,b.LS],pipes:[b._s],styles:[".founderPage[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%]{color:#f38b07;font-size:20px}.founderPage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background:var(--card-bg)}.founderPage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{height:80px}.founderPage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{height:132px}.founderPage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .alumni-pic[_ngcontent-%COMP%]{min-height:320px;max-height:320px;background-color:var(--bs-white)}.founderPage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .alumni-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:320px;max-height:320px}.founderPage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .noImg[_ngcontent-%COMP%]{min-height:320px;max-height:320px}@media screen and (max-width: 574px) and (min-width: 300px){.founderPage[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%]{font-size:16px}}@media screen and (max-width: 992px) and (min-width: 768px){.founderPage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .alumni-pic[_ngcontent-%COMP%]{min-height:270px;max-height:270px}.founderPage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .alumni-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:270px;max-height:270px}}"]}),t}(),data:{breadcrumb:{alias:"Management Team"}}},{path:"",redirectTo:"founder-chancellor",pathMatch:"full"}]}],B=function(){var e=i(function e(){n(this,e)});return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[c.Bz.forChild(I)],c.Bz]}),e}(),S=o(65230),U=o(76627),k=function(){var e=i(function e(){n(this,e)});return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[s.ez,B,S.m,d.wH,U.Ps,b.JX,w.mZ]]}),e}()}}])}();