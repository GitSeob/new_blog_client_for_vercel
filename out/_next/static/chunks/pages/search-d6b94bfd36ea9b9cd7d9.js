_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"+bjE":function(t,e,n){"use strict";var r=n("9etA"),o=n("oyhL"),a=n("3j/S"),i=n("zmtu"),c=n("/dgx");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var s=n("ZEkn");e.__esModule=!0,e.default=void 0;var l=s(n("C+RR")),d=s(n("8cxN")),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(t){var e=t.res,n=t.err;return{statusCode:e&&e.statusCode?e.statusCode:n?n.statusCode:404}}var h=function(t){a(n,t);var e=u(n);function n(){return r(this,n),e.apply(this,arguments)}return o(n,[{key:"render",value:function(){var t=this.props.statusCode,e=this.props.title||f[t]||"An unexpected error has occurred";return l.default.createElement("div",{style:b.error},l.default.createElement(d.default,null,l.default.createElement("title",null,t,": ",e)),l.default.createElement("div",null,l.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),t?l.default.createElement("h1",{style:b.h1},t):null,l.default.createElement("div",{style:b.desc},l.default.createElement("h2",{style:b.h2},e,"."))))}}]),n}(l.default.Component);e.default=h,h.displayName="ErrorPage",h.getInitialProps=p,h.origGetInitialProps=p;var b={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"/dgx":function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},"2u/G":function(t,e,n){var r=n("tvsd"),o=n("B25/"),a=n("C+A/"),i=n("WjVQ");t.exports=function(t){return r(t)||o(t)||a(t)||i()}},"3j/S":function(t,e,n){var r=n("+DXS");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"5kZN":function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSP",(function(){return v}));var r=n("nKUr"),o=n("Ubfa"),a=n("q1tI"),i=n("LXvI"),c=n("kpWj"),u=n("/MKj"),s=n("QivM"),l=n("w1BI"),d=n("8a56"),f=n("dMLl"),p=n.n(f),h=n("pMEM"),b=n.n(h),v=!0;e.default=function(t){var e=t.search,n=Object(u.c)((function(t){return t.posts})),f=n.posts,h=n.isLoaddingPosts,v=n.EndOfPosts,m=n.loadPostsErrorReason,y=Object(s.a)(""),g=Object(o.a)(y,2),j=g[0],O=g[1],x=Object(u.b)(),w=Object(l.useRouter)(),E=Object(a.useCallback)((function(t){w.push("/search?search=".concat(t))}),[]);return Object(a.useEffect)((function(){var t=function(){if(window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-10&&!(m||h||v)){var t,n=null===(t=f[f.length-1])||void 0===t?void 0:t.id;x({type:d.a,payload:{search:e,lastId:n}})}};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b.a,{children:Object(r.jsx)("title",{children:"\uac80\uc0c9"})}),Object(r.jsxs)(i.b,{children:[Object(r.jsxs)(i.c,{children:[Object(r.jsx)("img",{src:"/search.svg"}),Object(r.jsx)("input",{type:"text",placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:j,onChange:O,onKeyPress:function(t){"Enter"===t.key&&(t.preventDefault(),E(j))}})]}),m?Object(r.jsx)(p.a,{statusCode:503,title:"\uc11c\ubc84\uac00 \uc751\ub2f5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}):Object(r.jsxs)(r.Fragment,{children:[e&&Object(r.jsxs)("p",{children:["\ucd1d ",Object(r.jsx)("b",{children:f.findPostCount}),"\uac1c\uc758 \uae00\uc744 \ucc3e\uc558\uc5b4\uc694!"]}),Object(r.jsx)(c.a,{posts:f})]})]})]})}},"8a56":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return b}));var r,o=n("hmtW"),a=n("WExX");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u="posts/LOAD_POSTS_REQUEST",s="posts/LOAD_POSTS_SUCCESS",l="posts/LOAD_POSTS_FAILURE",d="posts/LOAD_CATEGORIES_REQUEST",f="posts/LOAD_CATEGORIES_SUCCESS",p="posts/LOAD_CATEGORIES_FAILURE",h=Object(a.createAsyncAction)(u,s,l)(),b=Object(a.createAsyncAction)(d,f,p)(),v=Object(a.createReducer)({Category:[],posts:[],numberOfPosts:0,isLoaddingPosts:!1,loadPostsErrorReason:null,EndOfPosts:!1},(r={},Object(o.a)(r,u,(function(t){return c(c({},t),{},{isLoaddingPosts:!0})})),Object(o.a)(r,s,(function(t,e){var n=e.payload;return c(c({},t),{},{isLoaddingPosts:!1,posts:t.posts.concat(n.data),EndOfPosts:8!==n.data.length})})),Object(o.a)(r,l,(function(t,e){var n=e.payload;return c(c({},t),{},{isLoaddingPosts:!1,loadPostsErrorReason:n.response?n.response.data:"Error!"})})),Object(o.a)(r,d,(function(t){return c({},t)})),Object(o.a)(r,f,(function(t,e){var n=e.payload;return c(c({},t),{},{Category:n.data.categories,numberOfPosts:n.data.numberOfPosts})})),Object(o.a)(r,p,(function(t,e){e.payload;return c({},t)})),r));e.b=v},"8cxN":function(t,e,n){"use strict";n("mtBy");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("C+RR")),a=(r=n("tOTl"))&&r.__esModule?r:{default:r},i=n("8rtd"),c=n("xKRj"),u=n("kgUo");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);t.has(c)?a=!1:t.add(c)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var u=0,s=f.length;u<s;u++){var l=f[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=o.props[l],p=r[l]||new Set;"name"===l&&i||!p.has(d)?(p.add(d),r[l]=p):a=!1}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function h(t){var e=t.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},e)}h.rewind=function(){};var b=h;e.default=b},"8rtd":function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("C+RR"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},"B25/":function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},NlFI:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n("5kZN")}])},QivM:function(t,e,n){"use strict";var r=n("q1tI");e.a=function(t){var e=Object(r.useState)(t),n=e[0],o=e[1];return[n,Object(r.useCallback)((function(t){o(t.target.value)}),[]),o]}},Ubfa:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("dVzv");function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},WjVQ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},dMLl:function(t,e,n){t.exports=n("+bjE")},dVzv:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("mlEx");function o(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},kgUo:function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("C+RR"))&&r.__esModule?r:{default:r},a=n("8rtd");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery,i=void 0!==a&&a;return n||o&&i}},kpWj:function(t,e,n){"use strict";var r=n("iSH3"),o=n("nKUr"),a=(n("q1tI"),n("vOnD"));function i(){var t=Object(r.a)(["\n\twidth: 100%;\n\tpadding: 1rem;\n\n\t& > a {\n\t\t& > h4,\n\t\t& > p {\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\n\t\t& > h4 {\n\t\t\t","\n\t\t\tfont-size: 1.125rem;\n\t\t\tline-height: 1.5;\n\t\t\tword-break: break-word;\n\t\t\ttext-overflow: ellipsis;\n\t\t\twhite-space: nowrap;\n\t\t\toverflow: hidden;\n\t\t}\n\n\t\t& > p {\n\t\t\tcolor: #495057;\n\t\t\tline-height: 1.8;\n\t\t\theight: ",";\n\t\t\tdisplay: -webkit-box;\n\t\t\t-webkit-line-clamp: ",";\n\t\t\t-webkit-box-orient: vertical;\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow: hidden;\n\n\t\t\t&.date {\n\t\t\t\theight: 1rem;\n\t\t\t\tfont-size: 12px;\n\t\t\t}\n\t\t}\n\t}\n"]);return i=function(){return t},t}function c(){var t=Object(r.a)(["\n\t& > div {\n\t\twidth: 100%;\n\t\tposition: relative;\n\t\toverflow: hidden;\n\n\t\t& > div {\n\t\t\tpadding-top: 70%;\n\t\t}\n\t\t& > img {\n\t\t\tposition: absolute;\n\t\t\ttop: 0px;\n\t\t\tleft: 0px;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tdisplay: block;\n\t\t\tobject-fit: cover;\n\t\t\ttransition: 0.3s;\n\t\t}\n\t}\n"]);return c=function(){return t},t}function u(){var t=Object(r.a)(["\n\twidth: 290px;\n\tborder-radius: 0.5rem;\n\tbox-shadow: 0 0.06875rem 0.1875rem rgba(90, 97, 105, 0.1), 0 0.0375rem 0.40625rem rgba(90, 97, 105, 0.1);\n\tmargin: 20px;\n\toverflow: hidden;\n\ttransition: 0.3s;\n\tbackground: #fff;\n\n\t&:hover {\n\t\ttransform: scale(1.05);\n\t\tbox-shadow: 0 0.46875rem 1.1875rem rgba(90, 97, 105, 0.1), 0 0.9375rem 0.90625rem rgba(90, 97, 105, 0.1),\n\t\t\t0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12), 0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);\n\n\t\timg {\n\t\t\ttransform: scale(1.05);\n\t\t}\n\t}\n\n\t@media screen and (max-width: 1000px) {\n\t\twidth: calc(50% - 40px);\n\t}\n\n\t@media screen and (max-width: 700px) {\n\t\twidth: calc(100% - 40px);\n\t}\n"]);return u=function(){return t},t}var s=a.b.div(u()),l=a.b.a(c()),d=a.b.div(i(),(function(t){return!t.thumbnail&&"margin-top : 1rem;"}),(function(t){return t.thumbnail?"4.5rem":"16rem"}),(function(t){return t.thumbnail?"3":"12"})),f=n("rnFM"),p=n("Xz9Z"),h=n.n(p),b=n("Wgwc"),v=n.n(b),m=function(t){var e=t.post;return Object(o.jsxs)(s,{children:[e.thumbnail&&Object(o.jsx)(h.a,{href:"/post/".concat(e.id),children:Object(o.jsx)(l,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{}),Object(o.jsx)("img",{src:e.thumbnail})]})})}),Object(o.jsxs)(d,{thumbnail:!!e.thumbnail,children:[Object(o.jsx)(h.a,{href:"/post/".concat(e.id),children:Object(o.jsxs)("a",{children:[Object(o.jsx)("h4",{children:e.title}),Object(o.jsx)("p",{className:"date",children:v()(e.createdAt).format("YYYY\ub144 MM\uc6d4 DD\uc77c")}),Object(o.jsx)("p",{children:e.description})]})}),Object(o.jsx)(f.a,{categories:e.categoryPosts,style:{height:"28px"},aflg:!1})]})]})};function y(){var t=Object(r.a)(["\n\tdisplay: flex;\n\tflex-flow: row wrap;\n"]);return y=function(){return t},t}var g=a.b.div(y());e.a=function(t){var e=t.posts;return Object(o.jsx)(g,{children:null===e||void 0===e?void 0:e.map((function(t,e){return Object(o.jsx)(m,{post:t},e)}))})}},mlEx:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},mtBy:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},pMEM:function(t,e,n){t.exports=n("8cxN")},tOTl:function(t,e,n){"use strict";var r=n("2u/G"),o=n("9etA"),a=n("oyhL"),i=(n("ywgv"),n("3j/S")),c=n("zmtu"),u=n("/dgx");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("C+RR"),d=function(t){i(n,t);var e=s(n);function n(t){var a;return o(this,n),(a=e.call(this,t))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);e.default=d},tvsd:function(t,e,n){var r=n("dWqp");t.exports=function(t){if(Array.isArray(t))return r(t)}},w1BI:function(t,e,n){t.exports=n("pIS+")},xKRj:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("C+RR"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},ywgv:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},zmtu:function(t,e,n){var r=n("bUIy"),o=n("ywgv");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}}},[["NlFI",1,2,0,3,6]]]);