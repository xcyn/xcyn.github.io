/*! production by xiongchuanyu */
webpackJsonp([1],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),l=r(c),f=n(45),s=n(130),p=r(s),d=n(132),m=r(d),y=n(133),b=r(y),h=n(131),v=r(h);n(142);var _=n(135),O=r(_),E=[{path:"/",component:m.default,name:"主页"},{path:"/list",component:b.default,name:"列表页面"},{path:"/detail/:paramsId",component:v.default,name:"详情页面"}],w=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement(f.Router,{history:f.hashHistory},E.map(function(e,t){return l.default.createElement(f.Route,{key:t,path:e.path,component:e.component})})))}}]),t}(l.default.Component);(0,p.default)(w,O.default)},48:function(e,t){"use strict";function n(e){return function(t,n){t({type:r,data:e})}}Object.defineProperty(t,"__esModule",{value:!0}),t.setUserInfo=n;var r=t.USER_NAME="USER_NAME"},49:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={},n=(0,c.compose)((0,c.applyMiddleware)(i.default),window.devToolsExtension?window.devToolsExtension():function(e){return e})(c.createStore);return n(e,t)}function u(e,t){return function(n){return(0,l.connect)(e,function(e){var n={};return Object.keys(t).forEach(function(r){n[r]=(0,c.bindActionCreators)(t[r],e)}),n})(n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.storeFactory=o,t.connectFactory=u;var a=n(126),i=r(a),c=n(47),l=n(70)},130:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),l=r(c),f=n(70),s=n(89),p=n(49);t.default=function(e,t){var n=(0,p.storeFactory)(t),r=function(t){function r(e){return o(this,r),u(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e))}return a(r,t),i(r,[{key:"getHeader",value:function(){return l.default.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"}},"我是顶部(后期扩展导航)")}},{key:"getFooter",value:function(){return l.default.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"}},"我的footer部分！！")}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("div",null,this.getHeader(),l.default.createElement(f.Provider,{store:n},l.default.createElement(e,null)),this.getFooter()))}}]),r}(l.default.Component);(0,s.render)(l.default.createElement(r,null),document.getElementById("root"))}},131:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),l=r(c);n(140);var f=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"}},l.default.createElement("a",{href:"javascript:;"},"我是Detail页面！！我的页面参数为: ",this.props.params.paramsId)))}}]),t}(l.default.Component);t.default=f},132:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,l,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),p=o(s),d=n(45);n(141);var m=n(49),y=n(48),b=r(y),h=(c=(0,m.connectFactory)(function(e){return console.log("state.commonAction",b),{common:e.common}},{commonAction:b}),c(l=function(e){function t(){return u(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return i(t,e),f(t,[{key:"_changeRedux",value:function(){"小熊"==this.props.common.user.name?this.props.commonAction.setUserInfo({name:"我最帅"}):this.props.commonAction.setUserInfo({name:"小熊"})}},{key:"render",value:function(){return p.default.createElement("div",null,p.default.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"}},"我是home页面！！",p.default.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"}},"redux数据: ",p.default.createElement("span",{style:{color:"red"}},this.props.common.user.name)),p.default.createElement("div",null,p.default.createElement("span",{style:{color:"#000",backgroundColor:"green"},onClick:this._changeRedux.bind(this)},"改变redux数据: 点击后为我最帅"))),p.default.createElement(d.Link,{to:"/list"},"点击跳转到列表页面"))}}]),t}(p.default.Component))||l);t.default=h},133:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,l,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),p=o(s),d=n(45);n(143);var m=n(49),y=n(48),b=r(y),h=(c=(0,m.connectFactory)(function(e){return console.log("state.common",e.common),{common:e.common}},{commonAction:b}),c(l=function(e){function t(){return u(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return i(t,e),f(t,[{key:"goDetai",value:function(e){d.hashHistory.push("/detail/"+e)}},{key:"render",value:function(){var e=this,t=[1,2,3,4];return p.default.createElement("div",null,p.default.createElement("div",null,"我是List页面！",p.default.createElement("div",null,"redux数据: ",p.default.createElement("span",{style:{color:"red"}},this.props.common.user.name))),p.default.createElement("div",null,t.map(function(t,n){return p.default.createElement("div",{style:{marginTop:"20px",marginBottom:"20px"},key:n,onClick:e.goDetai.bind(e,t)},p.default.createElement("a",{href:"javascript:;"},"点击跳转到",t,"页面"))})))}}]),t}(p.default.Component))||l);t.default=h},134:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case u.USER_NAME:return o({},e,{user:t.data});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r;var u=n(48),a={user:{name:"小熊"}}},135:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(47),u=n(134),a=r(u);t.default=(0,o.combineReducers)({common:a.default})},140:function(e,t){},141:function(e,t){},142:function(e,t){},143:function(e,t){}});