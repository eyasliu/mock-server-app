!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var u=e[o](i),a=u.value}catch(t){return void r(t)}return u.done?void t(a):Promise.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)})}return n("next")})}}r(1);var i=r(3),u=n(i),a=r(4),c=n(a),s=r(5),f=n(s),l=r(6),p=n(l),d=r(16),h=n(d),v=r(19),y=n(v),m=r(21),g=n(m),w=r(23),x=n(w),b=r(24),_=n(b),P=r(25),j=n(P),k=r(14),L=n(k),O={dbPath:"./db",domain:"mock.dev",port:3e3},E={};u.default.existsSync("./config.json")&&(E=JSON.parse(u.default.readFileSync("./config.json"))),O=Object.assign({},O,E);var S=new c.default;S.use(function(){var t=o(regeneratorRuntime.mark(function t(e,r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.appConfig=O,t.next=3,r();case 3:case"end":return t.stop()}},t,void 0)}));return function(e,r){return t.apply(this,arguments)}}()),S.use((0,f.default)()),S.use((0,_.default)("./client")),S.use((0,j.default)()),S.use((0,x.default)("http://portal.wps.cn")),S.use((0,p.default)(L.default.join(process.cwd(),O.dbPath))),S.use(g.default.routes()),S.use(g.default.allowedMethods()),S.use(y.default),S.use((0,h.default)()),S.listen(O.port,"0.0.0.0",function(){console.log("mock server listening http://"+O.domain+":"+O.port)})},function(t,e,r){(function(t){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(r){function n(t,e,r,n){var o=e&&e.prototype instanceof i?e:i,u=Object.create(o.prototype),a=new d(n||[]);return u._invoke=f(t,r,a),u}function o(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function u(){}function a(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function r(n,i,u,a){var c=o(t[n],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"===("undefined"==typeof f?"undefined":e(f))&&m.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,u,a)},function(t){r("throw",t,u,a)}):Promise.resolve(f).then(function(t){s.value=t,u(s)},a)}a(c.arg)}function n(t,e){function n(){return new Promise(function(n,o){r(t,e,n,o)})}return i=i?i.then(n,n):n()}"object"===("undefined"==typeof process?"undefined":e(process))&&process.domain&&(r=process.domain.bind(r));var i;this._invoke=n}function f(t,e,r){var n=P;return function(i,u){if(n===k)throw new Error("Generator is already running");if(n===L){if("throw"===i)throw u;return v()}for(;;){var a=r.delegate;if(a){if("return"===i||"throw"===i&&a.iterator[i]===y){r.delegate=null;var c=a.iterator.return;if(c){var s=o(c,a.iterator,u);if("throw"===s.type){i="throw",u=s.arg;continue}}if("return"===i)continue}var s=o(a.iterator[i],a.iterator,u);if("throw"===s.type){r.delegate=null,i="throw",u=s.arg;continue}i="next",u=y;var f=s.arg;if(!f.done)return n=j,f;r[a.resultName]=f.value,r.next=a.nextLoc,r.delegate=null}if("next"===i)r.sent=r._sent=u;else if("throw"===i){if(n===P)throw n=L,u;r.dispatchException(u)&&(i="next",u=y)}else"return"===i&&r.abrupt("return",u);n=k;var s=o(t,e,r);if("normal"===s.type){n=r.done?L:j;var f={value:s.arg,done:r.done};if(s.arg!==O)return f;r.delegate&&"next"===i&&(u=y)}else"throw"===s.type&&(n=L,i="throw",u=s.arg)}}}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function h(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(m.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=y,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:y,done:!0}}var y,m=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},w=g.iterator||"@@iterator",x=g.toStringTag||"@@toStringTag",b="object"===e(t),_=r.regeneratorRuntime;if(_)return void(b&&(t.exports=_));_=r.regeneratorRuntime=b?t.exports:{},_.wrap=n;var P="suspendedStart",j="suspendedYield",k="executing",L="completed",O={},E=a.prototype=i.prototype;u.prototype=E.constructor=a,a.constructor=u,a[x]=u.displayName="GeneratorFunction",_.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===u||"GeneratorFunction"===(e.displayName||e.name))},_.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(E),t},_.awrap=function(t){return{__await:t}},c(s.prototype),_.AsyncIterator=s,_.async=function(t,e,r,o){var i=new s(n(t,e,r,o));return _.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(E),E[w]=function(){return this},E[x]="Generator",E.toString=function(){return"[object Generator]"},_.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},_.values=h,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var u=m.call(o,"catchLoc"),a=m.call(o,"finallyLoc");if(u&&a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?this.next=o.finallyLoc:this.complete(i),O},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),p(r),O}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;p(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:h(t),resultName:e,nextLoc:r},O}}}("object"===("undefined"==typeof global?"undefined":e(global))?global:"object"===("undefined"==typeof window?"undefined":e(window))?window:"object"===("undefined"==typeof self?"undefined":e(self))?self:void 0)}).call(e,r(2)(t))},function(t,e){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){t.exports=require("fs")},function(t,e){t.exports=require("koa")},function(t,e){t.exports=require("koa-logger")},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var u=e[o](i),a=u.value}catch(t){return void r(t)}return u.done?void t(a):Promise.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)})}return n("next")})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.DB=void 0;var u=r(7),a=n(u),c=r(8),s=n(c),f=r(14),l=n(f),p=r(15),d=(n(p),{apis:{"/example":{example:"@name"}},description:{}}),h=e.DB=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"basic",r=arguments[1];i(this,t),this.dbPath=l.default.join(r,~e.indexOf("json")?e:e+".json"),this.db=(0,a.default)(this.dbPath,{storage:s.default}),this.db.defaults(d).value(),this.apis=this.db.get("apis")};e.default=function(t){return function(){var e=o(regeneratorRuntime.mark(function e(r,n){var o,i,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.host,i=r.appConfig,u=(o.substring(0,o.indexOf(i.domain)-1)||"basic")+".json",r.db=new h(u,t),e.next=5,n();case 5:case"end":return e.stop()}},e,void 0)}));return function(t,r){return e.apply(this,arguments)}}()}},function(t,e){t.exports=require("lowdb")},function(t,e,r){"use strict";var n=r(9),o=r(10),i=o.stringify;t.exports={read:r(12).read,write:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;return new Promise(function(o,i){var u=r(e);n.writeFile(t,u,function(t){return t?i(t):void o()})})}}},function(t,e){t.exports=require("steno")},function(t,e,r){"use strict";var n=r(11);t.exports={parse:n.parse,stringify:function(t){return JSON.stringify(t,null,2)}}},function(t,e){t.exports=require("json-parse-helpfulerror")},function(t,e,r){"use strict";var n=r(13),o=r(10),i=o.parse,u=o.stringify;t.exports={read:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;if(!n.existsSync(t))return n.writeFileSync(t,"{}"),{};var r=n.readFileSync(t,"utf-8").trim()||"{}";try{return e(r)}catch(e){throw e instanceof SyntaxError&&(e.message="Malformed JSON in file: "+t+"\n"+e.message),e}},write:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u,o=r(e);n.writeFileSync(t,o)}}},function(t,e){t.exports=require("graceful-fs")},function(t,e){t.exports=require("path")},function(t,e){t.exports=require("lodash")},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var u=e[o](i),a=u.value}catch(t){return void r(t)}return u.done?void t(a):Promise.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)})}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(17),u=r(18),a=n(u);a.default.locale="zh_CN";var c=function(t){var e=void 0;try{var r=JSON.parse(t),n=Array.isArray(r);e=n?JSON.stringify((0,i.mock)({"array|1-20":r}).array):JSON.stringify((0,i.mock)(JSON.parse(t)))}catch(t){e="ERROR: "+t.message}return a.default.fake(e)};e.default=function(){return function(){var t=o(regeneratorRuntime.mark(function t(e,r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.body&&(e.body=c(e.body)),t.next=3,r();case 3:case"end":return t.stop()}},t,void 0)}));return function(e,r){return t.apply(this,arguments)}}()}},function(t,e){t.exports=require("mockjs")},function(t,e){t.exports=require("faker")},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var u=e[o](i),a=u.value}catch(t){return void r(t)}return u.done?void t(a):Promise.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)})}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(20),u=n(i),a=r(15),c=n(a);e.default=function(){var t=o(regeneratorRuntime.mark(function t(e,r){var n,o,i,a,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.method,o=e.db,i=o.apis,a=e.url,s=i.get(n.toLowerCase()+" "+e.url).value(),s||(s=i.get(e.url).value()),s||!function(){var t=i.value();c.default.find(t,function(e,r){var n=r.split(" ").length>1?r.split(" ")[1]:r.split(" ")[0],o=new u.default(n);if(o.match(a)&&!s)return s=t[r],!0})}(),s&&(e.body=JSON.stringify(s)||""),e.set("Content-Type","application/json;charset=utf-8"),t.next=10,r();case 10:case"end":return t.stop()}},t,void 0)}));return function(e,r){return t.apply(this,arguments)}}()},function(t,e){t.exports=require("route-parser")},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var u=e[o](i),a=u.value}catch(t){return void r(t)}return u.done?void t(a):Promise.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)})}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(22),u=n(i),a=(0,u.default)({prefix:"/admin"});a.get("/project",function(){var t=o(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=e.db,e.body=r.apis.value();case 2:case"end":return t.stop()}},t,void 0)}));return function(e){return t.apply(this,arguments)}}()),a.post("/project",function(){var t=o(regeneratorRuntime.mark(function t(e,r){var n,o,i,u,a,c,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.request,o=e.db,i=o.db,u=o.apis,a=n.body,c=a.url,s=a.data,u.set(c,s).value(),e.body={result:!0};case 5:case"end":return t.stop()}},t,void 0)}));return function(e,r){return t.apply(this,arguments)}}()),a.delete("/project",function(){var t=o(regeneratorRuntime.mark(function t(e){var r,n,o,i,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=e.request,n=e.db,o=n.db,i=n.apis,u=r.body.url,i.set(u,void 0).value(),e.body={result:!0};case 5:case"end":return t.stop()}},t,void 0)}));return function(e){return t.apply(this,arguments)}}()),e.default=a},function(t,e){t.exports=require("koa-router")},function(t,e){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var u=e[o](i),a=u.value}catch(t){return void r(t)}return u.done?void t(a):Promise.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)})}return n("next")})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var t=r(regeneratorRuntime.mark(function t(e,r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.set("Access-Control-Allow-Credentials","true"),e.set("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.set("Access-Control-Allow-Headers","Accept,Content-Type"),e.set("Access-Control-Allow-Origin",e.req.headers.origin||e.protocol+"://"+e.host),e.set("Access-Control-Expose-Headers","Accept,Content-Type"),t.next=7,r();case 7:case"end":return t.stop()}},t,void 0)}));return function(e,r){return t.apply(this,arguments)}}()}},function(t,e){t.exports=require("koa-static")},function(t,e){t.exports=require("koa-bodyparser")}]);