_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"0jUE":function(t,n,e){"use strict";e.r(n),e.d(n,"__N_SSP",(function(){return j})),e.d(n,"LoginContainer",(function(){return O}));var r=e("iSH3"),i=e("nKUr"),o=e("Ubfa"),a=e("QivM"),c=e("SeNx"),u=e("q1tI"),s=e.n(u),l=e("/MKj"),d=e("pIS+"),b=e("Btfs"),f=e("vOnD");function p(){var t=Object(r.a)(["\n\tpadding: 40px 20px;\n\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: calc(100vh - 40px);\n\n\t& > div {\n\t\tbackground: #fff;\n\t\tbox-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);\n\n\t\timg {\n\t\t\twidth: 280px;\n\t\t}\n\n\t\t& > form {\n\t\t\twidth: 280px;\n\t\t\tpadding: 1rem;\n\n\t\t\tdiv {\n\t\t\t\tline-height: 1.8;\n\t\t\t\tfont-size: 10px;\n\t\t\t\tpadding: 1rem;\n\t\t\t\tborder: 1px solid #ddd;\n\t\t\t\tborder-bottom: none;\n\t\t\t\tposition: relative;\n\n\t\t\t\tp {\n\t\t\t\t\twidth: 60px;\n\t\t\t\t}\n\n\t\t\t\t&:nth-child(3) {\n\t\t\t\t\tborder-top: 1px solid #ddd;\n\t\t\t\t}\n\n\t\t\t\tinput {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tright: 0;\n\t\t\t\t\theight: 18px;\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\twidth: 160px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t& > input[type='submit'] {\n\t\t\t\tpadding: 1rem;\n\t\t\t\tborder: 1px solid #ddd;\n\t\t\t\tcolor: #707070;\n\t\t\t\twidth: 100%;\n\t\t\t\tcursor: pointer;\n\t\t\t\tfont-weight: 500;\n\t\t\t\tbackground: #ddd;\n\t\t\t\ttransition: 0.3s;\n\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground: rgba(95, 58, 154, 0.63);\n\t\t\t\t\tborder: 1px solid rgba(95, 58, 154, 0.13);\n\t\t\t\t\tcolor: #fff;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return p=function(){return t},t}var j=!0;n.default=function(){var t=Object(a.a)(""),n=Object(o.a)(t,2),e=n[0],r=n[1],u=Object(a.a)(""),f=Object(o.a)(u,2),p=f[0],j=f[1],v=Object(l.b)(),h=Object(l.c)((function(t){return t.user})).user,g=Object(l.c)((function(t){return t.loading})),x=Object(d.useRouter)(),m=s.a.useCallback((function(t){t.preventDefault(),e.length<4||p.length<8||v({type:c.b,payload:{username:e,password:p}})}),[e,p]);return s.a.useEffect((function(){h&&x.push("/")}),[h]),Object(i.jsxs)(i.Fragment,{children:[g.LOGIN_REQUEST&&Object(i.jsx)(b.a,{}),Object(i.jsx)(O,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:"/ogImage.png"}),Object(i.jsxs)("form",{onSubmit:m,children:[Object(i.jsx)("div",{children:Object(i.jsxs)("label",{children:["ID",Object(i.jsx)("input",{type:"text",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",value:e,onChange:r})]})}),Object(i.jsx)("div",{children:Object(i.jsxs)("label",{children:["PASSWORD",Object(i.jsx)("input",{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",autoComplete:"off",value:p,onChange:j})]})}),Object(i.jsx)("input",{type:"submit",value:"LOGIN"})]})]})})]})};var O=f.b.div(p())},BZLq:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return e("0jUE")}])},Btfs:function(t,n,e){"use strict";var r=e("nKUr"),i=(e("q1tI"),e("iSH3")),o=e("vOnD");function a(){var t=Object(i.a)(["\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground: rgba(0, 0, 0, 0.35);\n\tz-index: 999;\n"]);return a=function(){return t},t}function c(){var t=Object(i.a)(["\n\tposition: relative;\n\twidth: 80px;\n\theight: 200px;\n\tmargin-top: 50px;\n\n\t& > div {\n\t\theight: 200px;\n\t\tmargin-top: 50px;\n\n\t\t.circle {\n\t\t\tdisplay: inline-block;\n\t\t\tbackground: rgb(95, 58, 154);\n\t\t\theight: 15px;\n\t\t\twidth: 15px;\n\t\t\tborder-radius: 25px;\n\t\t\tmargin: 0 2px;\n\t\t}\n\n\t\t.ball-1 {\n\t\t\tanimation: "," 1s ease-in-out infinite;\n\t\t}\n\t\t.ball-2 {\n\t\t\tanimation: "," 1s ease-in-out 0.1s infinite;\n\t\t}\n\t\t.ball-3 {\n\t\t\tanimation: "," 1s ease-in-out 0.2s infinite;\n\t\t}\n\t}\n"]);return c=function(){return t},t}function u(){var t=Object(i.a)(["\n\t0% {\n\t\ttransform: translateY(0);\n\t}\n\t40% {\n\t\ttransform: translateY(23px);\n\t}\n\t60% {\n\t\ttransform: translateY(-25px);\n\t}\n\t80%{\n\t\ttransform: translateY(0);\n\t}\n"]);return u=function(){return t},t}var s=Object(o.c)(u()),l=o.b.div(c(),s,s,s),d=o.b.div(a());n.a=function(){return Object(r.jsx)(d,{children:Object(r.jsx)(l,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"circle ball-1"}),Object(r.jsx)("div",{className:"circle ball-2"}),Object(r.jsx)("div",{className:"circle ball-3"})]})})})}},QivM:function(t,n,e){"use strict";var r=e("q1tI");n.a=function(t){var n=Object(r.useState)(t),e=n[0],i=n[1];return[e,Object(r.useCallback)((function(t){i(t.target.value)}),[]),i]}},SeNx:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return d})),e.d(n,"e",(function(){return p})),e.d(n,"d",(function(){return j}));var r,i=e("hmtW"),o=e("WExX");function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){Object(i.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var u="LOAD_USER_REQUSET",s="LOAD_USER_SUCCESS",l="LOAD_USER_FAILURE",d="LOGIN_REQUEST",b="LOGIN_SUCCESS",f="LOGIN_FAILURE",p=Object(o.createAsyncAction)(d,b,f)(),j=Object(o.createAsyncAction)(u,s,l)(),O=Object(o.createReducer)({user:null,loginErrorReason:""},(r={},Object(i.a)(r,d,(function(t){return c({},t)})),Object(i.a)(r,b,(function(t,n){var e=n.payload;return c(c({},t),{},{user:e})})),Object(i.a)(r,f,(function(t,n){var e,r=n.payload;return c(c({},t),{},{user:null,loginErrorReason:null===(e=r.response)||void 0===e?void 0:e.data.reason})})),Object(i.a)(r,u,(function(t){return c({},t)})),Object(i.a)(r,s,(function(t,n){var e=n.payload;return c(c({},t),{},{user:e})})),Object(i.a)(r,l,(function(t,n){var e,r=n.payload;return c(c({},t),{},{loginErrorReason:null!==(e=r.response)&&void 0!==e&&e.data?r.response.data:"Error!",user:null})})),r));n.c=O},Ubfa:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("dVzv");function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return e}}(t,n)||Object(r.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},dVzv:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("mlEx");function i(t,n){if(t){if("string"===typeof t)return Object(r.a)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(t,n):void 0}}},mlEx:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,"a",(function(){return r}))}},[["BZLq",1,2,0,3]]]);