(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"215n":function(e,t,n){"use strict";var a=n("P0qE");t.a={storeWeight:function(e){return Object(a.b)("/weight",e)},getMinutesGoalRecords:function(){return Object(a.a)("/time_record")},updateWeightRecord:function(e){return Object(a.c)("/weight_record",e)}}},EZi8:function(e,t,n){},IXp1:function(e,t,n){"use strict";var a=n("P0qE");t.a={getCalories:function(e){return Object(a.b)("/calorie",e)},getCaloriesGoalRecords:function(){return Object(a.a)("/calorie_record")},putCalories:function(e){return Object(a.c)("/calorie_record",e)}}},P0qE:function(e,t,n){"use strict";function a(e,t,n,a,r,o,c){try{var i=e[o](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function i(e){a(c,r,o,i,s,"next",e)}function s(e){a(c,r,o,i,s,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l}));var o="https://physio.coreviewsystems.com:8081",c=function(e){return null==e?"":e},i=function(e,t){return t?"".concat(e,"?").concat(Object.keys(t).map((function(e){return Array.isArray(t[e])?t[e].map((function(t){return"".concat(e,"[]=").concat(c(t).toString().replace("+","%2B")).trim()})).join("&"):"".concat(e,"=").concat(c(t[e]).toString().replace("+","%2B")).trim()})).join("&")):e},s=function(){var e=r(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),r={method:"GET",headers:{Accept:"application/json"}},a&&(r.headers.Authorization="Bearer ".concat(a)),e.abrupt("return",fetch("".concat(o).concat(i(t,n)),r).then((function(e){return e.json()}),(function(e){return e})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=r(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}},n&&(r.body=JSON.stringify(n)),a&&(r.headers.Authorization="Bearer ".concat(a)),e.abrupt("return",fetch("".concat(o).concat(t),r).then((function(e){return e.json()}),(function(e){return e})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=r(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),r={method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"}},n&&(r.body=JSON.stringify(n)),a&&(r.headers.Authorization="Bearer ".concat(a)),e.abrupt("return",fetch("".concat(o).concat(t),r).then((function(e){return e.json()}),(function(e){return e})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},WRLK:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("IP2g"),c=n("XGPw"),i=n("215n"),s=n("IXp1");n("EZi8");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(p,e);var t,n,a,u=m(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),g(d(t=u.call(this,e)),"getMinutesRecords",(function(){t.setState({isLoading:!0}),i.a.getMinutesGoalRecords().then((function(e){e&&e.record&&t.mounted&&t.setState({total:parseInt(e.record.goal_time/60,10),left:parseInt(e.record.remaining_time/60,10),current:parseInt(e.record.current_time/60,10),todayCounts:Math.ceil(e.record.today_time/60),unit:"minutes"}),t.mounted&&t.setState({isLoading:!1})})).catch((function(e){console.log(e),t.mounted&&t.setState({isLoading:!1})}))})),g(d(t),"getCaloriesRecords",(function(){t.setState({isLoading:!0}),s.a.getCaloriesGoalRecords().then((function(e){e&&e.record&&t.mounted&&t.setState({total:e.record.goal_calories,left:e.record.remaining_calories,current:e.record.current_calories,todayCounts:e.record.today_calories,showMinutesContent:!1,unit:"active calories"}),t.mounted&&t.setState({isLoading:!1})})).catch((function(e){console.log(e),t.mounted&&t.setState({isLoading:!1})}))})),g(d(t),"goBack",(function(){var e=t.props.match.params.id;t.props.history.push("/app/feedback/".concat(e))})),t.state={total:"",left:"",current:"",todayCounts:"",unit:"",isLoading:!1,showMinutesContent:!0},t.goalInfo=localStorage.getItem("goal-unit"),t}return t=p,(n=[{key:"UNSAFE_componentWillMount",value:function(){this.mounted=!0,"minutes"===this.goalInfo?this.getMinutesRecords():this.getCaloriesRecords()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return r.a.createElement("div",{className:"p-3 h-100 summary"},this.state.isLoading&&r.a.createElement(c.a,{loadingText:"Loading..."}),r.a.createElement("div",{className:""},r.a.createElement("div",{className:""},this.state.showMinutesContent?r.a.createElement("div",{className:""},r.a.createElement("h5",{className:""},"You worked out for"," ",r.a.createElement("span",{className:"green bold"},this.state.todayCounts)," ","minutes now."),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"c-box"},r.a.createElement("span",{className:"goal-text"},"Weekly Goal"),r.a.createElement("span",{className:"goal-count green"},this.state.total," ",this.state.unit)),r.a.createElement("div",{className:"c-box"},r.a.createElement("span",{className:"goal-text"},"Current"),r.a.createElement("span",{className:"goal-count green"},this.state.current," ",this.state.unit)),r.a.createElement("div",{className:"c-box "},r.a.createElement("span",{className:"goal-text"},"Remaining"),r.a.createElement("span",{className:"goal-count green"},this.state.left," ",this.state.unit)))):r.a.createElement("div",{className:""},r.a.createElement("h5",{className:"p-2"},"You burnt"," ",r.a.createElement("span",{className:"green bold"},this.state.todayCounts)," ","calories now."),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"c-box mb-3 w-100"},r.a.createElement("span",{className:"goal-text"},"Weekly Goal"),r.a.createElement("div",{className:"goal-count green"},this.state.total," ",this.state.unit)),r.a.createElement("div",{className:"c-box mb-3 w-100"},r.a.createElement("span",{className:"goal-text"},"Current"),r.a.createElement("div",{className:"goal-count green"},this.state.current," ",this.state.unit)),r.a.createElement("div",{className:"c-box mb-3 w-100"},r.a.createElement("span",{className:"goal-text"},"Remaining"),r.a.createElement("div",{className:"goal-count green"},this.state.left," ",this.state.unit)))),r.a.createElement("p",null,"Please share your experience via:"),r.a.createElement(o.a,{icon:["fab","facebook-f"],className:"fa-2x social-icons",color:"#28C76F"}),r.a.createElement(o.a,{icon:["fab","instagram"],className:"fa-2x social-icons",color:"#28C76F"}),r.a.createElement(o.a,{icon:["fab","whatsapp"],className:"fa-2x social-icons",color:"#28C76F"}),r.a.createElement(o.a,{icon:["fab","weixin"],className:"fa-2x social-icons",color:"#28C76F"}),r.a.createElement("br",{className:"clearfix"}))),r.a.createElement("div",{className:"bottom-container d-flex flex-row justify-content-center align-items-center"},r.a.createElement("button",{type:"button",className:"buttons",onClick:this.goBack},"Back")))}}])&&l(t.prototype,n),a&&l(t,a),p}(r.a.Component);b.propTypes={},b.defaultProps={},t.default=b}}]);