(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/IsN":function(t,e,n){"use strict";var r=n("mCIL");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.__esModule=!0,e.noSSR=c,e.default=function(t,e){var n=a.default,r={loading:function(t){t.error,t.isLoading;return t.pastDelay,null}};t instanceof Promise?r.loader=function(){return t}:"function"===typeof t?r.loader=t:"object"===typeof t&&(r=o(o({},r),t));if(r=o(o({},r),e),"object"===typeof t&&!(t instanceof Promise)&&(t.render&&(r.render=function(e,n){return t.render(n,e)}),t.modules)){n=a.default.Map;var i={},u=t.modules();Object.keys(u).forEach((function(t){var e=u[t];"function"!==typeof e.then?i[t]=e:i[t]=function(){return e.then((function(t){return t.default||t}))}})),r.loader=i}r.loadableGenerated&&delete(r=o(o({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,c(n,r);delete r.ssr}return n(r)};var u=s(n("MUkk")),a=s(n("H047"));function s(t){return t&&t.__esModule?t:{default:t}}var l=!1;function c(t,e){if(delete e.webpack,delete e.modules,!l)return t(e);var n=e.loading;return function(){return u.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}},"0a3R":function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSP",(function(){return C}));var r=n("q1tI"),i=n.n(r),o=n("Wgwc"),u=n.n(o),a=n("EAo2"),s=n("syOo"),l=n("rnFM"),c=n("7Q4T"),f=n("/MKj"),d=n("R1JT"),h=n("JtKM"),p=n.n(h),m=n("3b6U"),y=n.n(m),v=n("h4VS"),g=n("g9DT"),b=n.n(g),O=n("vOnD"),_=n("vPmt"),w=i.a.createElement;function $(){var t=Object(v.a)(["\n\tposition: relative;\n\tmin-height: 30px;\n\n\t",";\n\n\t& > div {\n\t\tposition: absolute;\n\t\tdisplay: flex;\n\t\ttop: 0;\n\t\tright: 0;\n\t\twidth: 70px;\n\t\theight: 100%;\n\n\t\ta,\n\t\t& > div {\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t\tborder-radius: 15px;\n\t\t\tbackground: #ededed;\n\t\t\tpadding: 8px;\n\t\t\tcursor: pointer;\n\n\t\t\timg {\n\t\t\t\twidth: 14px;\n\t\t\t\theight: 14px;\n\t\t\t}\n\n\t\t\t&:nth-child(1) {\n\t\t\t\tmargin-right: 10px;\n\t\t\t}\n\t\t}\n\t}\n"]);return $=function(){return t},t}var M=O.b.div($(),(function(t){return t.isUser&&"padding-right: 70px"})),D=function(t){var e=t.id,n=t.title,r=t.isUser,i=Object(f.b)();return w(M,{isUser:r},w("h1",null,n),r&&w("div",null,w(b.a,{href:"/posting/".concat(e)},w("a",null,w("img",{src:"/pen.svg"}))),w("div",{onClick:function(t){t.preventDefault(),confirm("\uc815\ub9d0 \uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&i({type:_.a,payload:e})}},w("img",{src:"/trash.svg",alt:""}))))},S=n("Btfs"),x=n("/IsN"),j=n.n(x),k=i.a.createElement,E=j()((function(){return n.e(23).then(n.bind(null,"nxuv"))}),{loadableGenerated:{webpack:function(){return["nxuv"]},modules:["@components/post/Disqus"]}}),C=!0;e.default=function(){var t=Object(f.c)((function(t){return t.post})),e=t.post,n=t.isRemovedPost,o=Object(f.c)((function(t){return t.user})).user,h=Object(f.c)((function(t){return t.loading})),m=Object(d.useRouter)();return Object(r.useEffect)((function(){n&&(alert("\ud3ec\uc2a4\ud2b8\uac00 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),m.push("/"))}),[n]),k(i.a.Fragment,null,h.REMOVE_POST_REQUEST&&k(S.a,null),e?k(a.Container,null,k(p.a,null,k("title",null,e.title),k("meta",{name:"description",content:e.description})),k(D,{title:e.title,id:e.id,isUser:o&&!0}),k(s.a,null,u()(e.createdAt).format("YYYY\ub144 MM\uc6d4 DD\uc77c")),k(l.a,{categories:e.categoryPosts,aflg:!1}),e.thumbnail&&-1===e.body.indexOf(e.thumbnail)&&k("img",{src:e.thumbnail}),k("div",{className:"bodyContainer"},k(c.a,{setTitle:!1,body:e.body})),k(E,{id:e.id})):k(y.a,{statusCode:404,title:"\uc874\uc7ac\ud558\uc9c0 \uc54a\uac70\ub098 \uc0ad\uc81c\ub41c \ud3ec\uc2a4\ud2b8\uc785\ub2c8\ub2e4."}))}},"3b6U":function(t,e,n){t.exports=n("a0Hf")},EAo2:function(t,e,n){"use strict";n.r(e),n.d(e,"Container",(function(){return a}));var r=n("h4VS"),i=n("vOnD"),o=n("syOo");function u(){var t=Object(r.a)(["\n\tpadding: 40px 20px;\n\n\t& > p {\n\t\tmargin: 1rem 0 1rem 0;\n\t}\n\t& > img {\n\t\tmargin-top: 2rem;\n\t\twidth: 100%;\n\t}\n\n\t& > div.bodyContainer {\n\t\tbackground: #fff;\n\t\tbox-shadow: 0 0.06875rem 0.1875rem rgba(90, 97, 105, 0.1), 0 0.0375rem 0.40625rem rgba(90, 97, 105, 0.1);\n\t}\n\n\t& > #disqus_thread {\n\t\tmargin-top: 2rem;\n\t\tpadding: 1rem;\n\t\tbackground: #fff;\n\t\tbox-shadow: 0 0.06875rem 0.1875rem rgba(90, 97, 105, 0.1), 0 0.0375rem 0.40625rem rgba(90, 97, 105, 0.1);\n\t}\n\n\t#help-notice {\n\t\tdisplay: none;\n\t}\n"]);return u=function(){return t},t}var a=Object(i.b)(o.b)(u())},H047:function(t,e,n){"use strict";var r=n("mCIL"),i=n("/6jJ"),o=n("iUMr");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return u=t.done,t},e:function(t){a=!0,o=t},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.__esModule=!0,e.default=void 0;var c,f=(c=n("MUkk"))&&c.__esModule?c:{default:c},d=n("I7t8"),h=n("qstn");var p=[],m=[],y=!1;function v(t){var e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then((function(t){return n.loading=!1,n.loaded=t,t})).catch((function(t){throw n.loading=!1,n.error=t,t})),n}function g(t){var e={loading:!1,loaded:{},error:null},n=[];try{Object.keys(t).forEach((function(r){var i=v(t[r]);i.loading?e.loading=!0:(e.loaded[r]=i.loaded,e.error=i.error),n.push(i.promise),i.promise.then((function(t){e.loaded[r]=t})).catch((function(t){e.error=t}))}))}catch(r){e.error=r}return e.promise=Promise.all(n).then((function(t){return e.loading=!1,t})).catch((function(t){throw e.loading=!1,t})),e}function b(t,e){return f.default.createElement(function(t){return t&&t.__esModule?t.default:t}(t),e)}function O(t,e){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:b,webpack:null,modules:null},e),r=null;function i(){if(!r){var e=new _(t,n);r={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return r.promise()}if(!y&&"function"===typeof n.webpack){var o=n.webpack();m.push((function(t){var e,n=s(o);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(-1!==t.indexOf(r))return i()}}catch(u){n.e(u)}finally{n.f()}}))}var u=function(t,e){i();var o=f.default.useContext(h.LoadableContext),u=(0,d.useSubscription)(r);return f.default.useImperativeHandle(e,(function(){return{retry:r.retry}}),[]),o&&Array.isArray(n.modules)&&n.modules.forEach((function(t){o(t)})),f.default.useMemo((function(){return u.loading||u.error?f.default.createElement(n.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:r.retry}):u.loaded?n.render(u.loaded,t):null}),[t,u])};return u.preload=function(){return i()},u.displayName="LoadableComponent",f.default.forwardRef(u)}var _=function(){function t(e,n){i(this,t),this._loadFn=e,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(t,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,n=this._opts;e.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){t._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){t._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){t._update({}),t._clearTimeouts()})).catch((function(e){t._update({}),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(t){this._state=a(a({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},t),this._callbacks.forEach((function(t){return t()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(t){var e=this;return this._callbacks.add(t),function(){e._callbacks.delete(t)}}}]),t}();function w(t){return O(v,t)}function $(t,e){for(var n=[];t.length;){var r=t.pop();n.push(r(e))}return Promise.all(n).then((function(){if(t.length)return $(t,e)}))}w.Map=function(t){if("function"!==typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return O(g,t)},w.preloadAll=function(){return new Promise((function(t,e){$(p).then(t,e)}))},w.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e){var n=function(){return y=!0,e()};$(m,t).then(n,n)}))},window.__NEXT_PRELOADREADY=w.preloadReady;var M=w;e.default=M},I7t8:function(t,e,n){"use strict";t.exports=n("OUj4")},OUj4:function(t,e,n){"use strict";var r=n("prjU"),i=n("MUkk");e.useSubscription=function(t){var e=t.getCurrentValue,n=t.subscribe,o=i.useState((function(){return{getCurrentValue:e,subscribe:n,value:e()}}));t=o[0];var u=o[1];return o=t.value,t.getCurrentValue===e&&t.subscribe===n||(o=e(),u({getCurrentValue:e,subscribe:n,value:o})),i.useDebugValue(o),i.useEffect((function(){function t(){if(!i){var t=e();u((function(i){return i.getCurrentValue!==e||i.subscribe!==n||i.value===t?i:r({},i,{value:t})}))}}var i=!1,o=n(t);return t(),function(){i=!0,o()}}),[e,n]),o}},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",o="week",u="month",a="quarter",s="year",l="date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+h(r,2,"0")+":"+h(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),o=n-i<0,a=e.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:u,y:s,w:o,d:i,D:l,h:r,m:n,s:e,ms:t,Q:a}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",y={};y[m]=d;var v=function(t){return t instanceof _},g=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)y[t]&&(r=t),e&&(y[t]=e,r=t);else{var i=t.name;y[i]=t,r=i}return!n&&r&&(m=r),r||!n&&m},b=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=p;O.l=g,O.i=v,O.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function d(t){this.$L=g(t.locale,null,!0),this.parse(t)}var h=d.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return O},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return b(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<b(t)},h.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,a){var c=this,f=!!O.u(a)||a,d=O.p(t),h=function(t,e){var n=O.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return f?n:n.endOf(i)},p=function(t,e){return O.w(c.toDate()[t].apply(c.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,y=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case s:return f?h(1,0):h(31,11);case u:return f?h(1,y):h(0,y+1);case o:var b=this.$locale().weekStart||0,_=(m<b?m+7:m)-b;return h(f?v-_:v+(6-_),y);case i:case l:return p(g+"Hours",0);case r:return p(g+"Minutes",1);case n:return p(g+"Seconds",2);case e:return p(g+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(o,a){var c,f=O.p(o),d="set"+(this.$u?"UTC":""),h=(c={},c[i]=d+"Date",c[l]=d+"Date",c[u]=d+"Month",c[s]=d+"FullYear",c[r]=d+"Hours",c[n]=d+"Minutes",c[e]=d+"Seconds",c[t]=d+"Milliseconds",c)[f],p=f===i?this.$D+(a-this.$W):a;if(f===u||f===s){var m=this.clone().set(l,1);m.$d[h](p),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[O.p(t)]()},h.add=function(t,a){var l,c=this;t=Number(t);var f=O.p(a),d=function(e){var n=b(c);return O.w(n.date(n.date()+Math.round(e*t)),c)};if(f===u)return this.set(u,this.$M+t);if(f===s)return this.set(s,this.$y+t);if(f===i)return d(1);if(f===o)return d(7);var h=(l={},l[n]=6e4,l[r]=36e5,l[e]=1e3,l)[f]||1,p=this.$d.getTime()+t*h;return O.w(p,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=O.z(this),i=this.$locale(),o=this.$H,u=this.$m,a=this.$M,s=i.weekdays,l=i.months,c=function(t,r,i,o){return t&&(t[r]||t(e,n))||i[r].substr(0,o)},d=function(t){return O.s(o%12||12,t,"0")},h=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:c(i.monthsShort,a,l,3),MMMM:c(l,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,s,2),ddd:c(i.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:O.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,u,!0),A:h(o,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:r};return n.replace(f,(function(t,e){return e||p[t]||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,l,c){var f,d=O.p(l),h=b(t),p=6e4*(h.utcOffset()-this.utcOffset()),m=this-h,y=O.m(this,h);return y=(f={},f[s]=y/12,f[u]=y,f[a]=y/3,f[o]=(m-p)/6048e5,f[i]=(m-p)/864e5,f[r]=m/36e5,f[n]=m/6e4,f[e]=m/1e3,f)[d]||m,c?y:O.a(y)},h.daysInMonth=function(){return this.endOf(u).$D},h.$locale=function(){return y[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=g(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return O.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},d}(),w=_.prototype;return b.prototype=w,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",s],["$D",l]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,_,b),t.$i=!0),b},b.locale=g,b.isDayjs=v,b.unix=function(t){return b(1e3*t)},b.en=y[m],b.Ls=y,b.p={},b}()},a0Hf:function(t,e,n){"use strict";var r=n("/6jJ"),i=n("iUMr"),o=n("JRpT"),u=n("CSr3"),a=n("XK2o");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}var l=n("qKvA");e.__esModule=!0,e.default=void 0;var c=l(n("MUkk")),f=l(n("JtKM")),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function h(t){var e=t.res,n=t.err;return{statusCode:e&&e.statusCode?e.statusCode:n?n.statusCode:404}}var p=function(t){o(n,t);var e=s(n);function n(){return r(this,n),e.apply(this,arguments)}return i(n,[{key:"render",value:function(){var t=this.props.statusCode,e=this.props.title||d[t]||"An unexpected error has occurred";return c.default.createElement("div",{style:m.error},c.default.createElement(f.default,null,c.default.createElement("title",null,t,": ",e)),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),t?c.default.createElement("h1",{style:m.h1},t):null,c.default.createElement("div",{style:m.desc},c.default.createElement("h2",{style:m.h2},e,"."))))}}]),n}(c.default.Component);e.default=p,p.displayName="ErrorPage",p.getInitialProps=h,p.origGetInitialProps=h;var m={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},mCIL:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},qstn:function(t,e,n){"use strict";var r;e.__esModule=!0,e.LoadableContext=void 0;var i=((r=n("MUkk"))&&r.__esModule?r:{default:r}).default.createContext(null);e.LoadableContext=i},rnFM:function(t,e,n){"use strict";var r=n("h4VS"),i=n("q1tI"),o=n.n(i),u=n("vOnD"),a=n("g9DT"),s=n.n(a),l=o.a.createElement;function c(){var t=Object(r.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\toverflow: hidden;\n\n\t& > a,\n\t& > div {\n\t\tpadding: 0.5rem 1rem;\n\t\tborder-radius: 5px;\n\t\tbackground: #ededed;\n\t\tcolor: #495057;\n\t\tfont-size: 12px;\n\t\tmargin: 0 1rem 1rem 0;\n\t}\n"]);return c=function(){return t},t}var f=u.b.div(c());e.a=function(t){var e=t.categories,n=t.style,r=void 0===n?{}:n,i=t.aflg;return l(f,{style:r},e&&e.map((function(t,e){return l("div",{key:e},i?l(s.a,{href:"/?category=".concat(t.name)},l("a",null," ",t.name)):l("div",null,t.name))})))}},waEU:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[id]",function(){return n("0a3R")}])}},[["waEU",0,1,2,3,4,5,7]]]);