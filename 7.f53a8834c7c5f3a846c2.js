(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{GdG0:function(e,t,a){"use strict";var n=a("P0qE");t.a={login:function(e){return Object(n.b)("/login",e)},signUp:function(e){return Object(n.b)("/register",e)}}},P0qE:function(e,t,a){"use strict";function n(e,t,a,n,r,s,i){try{var o=e[s](i),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,s){var i=e.apply(t,a);function o(e){n(i,r,s,o,l,"next",e)}function l(e){n(i,r,s,o,l,"throw",e)}o(void 0)}))}}a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return u}));var s="https://physio.coreviewsystems.com:8081",i=function(e){return null==e?"":e},o=function(e,t){return t?"".concat(e,"?").concat(Object.keys(t).map((function(e){return Array.isArray(t[e])?t[e].map((function(t){return"".concat(e,"[]=").concat(i(t).toString().replace("+","%2B")).trim()})).join("&"):"".concat(e,"=").concat(i(t[e]).toString().replace("+","%2B")).trim()})).join("&")):e},l=function(){var e=r(regeneratorRuntime.mark((function e(t,a){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),r={method:"GET",headers:{Accept:"application/json"}},n&&(r.headers.Authorization="Bearer ".concat(n)),e.abrupt("return",fetch("".concat(s).concat(o(t,a)),r).then((function(e){return e.json()}),(function(e){return e})));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),c=function(){var e=r(regeneratorRuntime.mark((function e(t,a){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}},a&&(r.body=JSON.stringify(a)),n&&(r.headers.Authorization="Bearer ".concat(n)),e.abrupt("return",fetch("".concat(s).concat(t),r).then((function(e){return e.json()}),(function(e){return e})));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=r(regeneratorRuntime.mark((function e(t,a){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),r={method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"}},a&&(r.body=JSON.stringify(a)),n&&(r.headers.Authorization="Bearer ".concat(n)),e.abrupt("return",fetch("".concat(s).concat(t),r).then((function(e){return e.json()}),(function(e){return e})));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},T6L9:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("XGPw"),i=a("GdG0");a("UK5S");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=f(e);if(t){var r=f(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m(this,a)}}function m(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(m,e);var t,a,n,o=u(m);function m(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),p(d(t=o.call(this,e)),"usernameChange",(function(e){t.setState({username:e.target.value})})),p(d(t),"passwordChange",(function(e){t.setState({password:e.target.value})})),p(d(t),"confirmPasswordChange",(function(e){t.setState({confirmpassword:e.target.value})})),p(d(t),"firstnameChange",(function(e){t.setState({firstname:e.target.value})})),p(d(t),"lastnameChange",(function(e){t.setState({lastname:e.target.value})})),p(d(t),"emailChange",(function(e){t.setState({email:e.target.value})})),p(d(t),"ageChange",(function(e){t.setState({age:e.target.value})})),p(d(t),"weightChange",(function(e){t.setState({weight:e.target.value})})),p(d(t),"SignUp",(function(){if(t.HandleValidations(),t.confirmPassword(),!1===t.state.requiredValidation&&!1===t.state.passwordValidation){t.setState({isLoading:!0});var e={username:t.state.username,password:t.state.password,weight:t.state.weight,age:t.state.age?t.state.age:30,first_name:t.state.firstname,last_name:t.state.lastname,email:t.state.email};i.a.signUp(e).then((function(e){t.setState({isLoading:!1}),e&&201===e.code?(console.log("sign up response",e),localStorage.setItem("signup-response",e.code),t.props.history.push("/landing/home"),t.setState({validation:!0,validationMessage:e.message})):e&&401===e.code&&t.setState({validation:!0,validationMessage:e.message})})).catch((function(e){console.log("error",e),t.setState({isLoading:!1})}))}})),p(d(t),"HandleValidations",(function(){t.state.username.length<=0||t.state.password.length<=0||t.state.firstname.length<=0||t.state.email.length<=0?t.setState({requiredValidation:!0}):t.setState({requiredValidation:!1})})),p(d(t),"confirmPassword",(function(){t.state.confirmpassword!==t.state.password?t.setState({passwordValidation:!0,validationMessage:"Please match both passwords"}):t.setState({passwordValidation:!1})})),p(d(t),"goBack",(function(){t.props.history.push("/landing/home")})),t.state={isLoading:!1,validation:!1,validationMessage:"",username:"",firstname:"",lastname:"",password:"",confirmpassword:"",email:"",age:"",weight:"",passwordValidation:!1,requiredValidation:!1,requiredValidationMessage:"This field is required"},t}return t=m,(a=[{key:"render",value:function(){return r.a.createElement("div",{className:"w-100 login-parent d-flex flex-row justify-content-center align-items-center p-4"},r.a.createElement("div",{className:"sign-up-inner d-flex flex-column justify-content-center"},r.a.createElement("div",{className:"logo-text"},"EliteFit"),r.a.createElement("p",null,"Please fill your details below"),r.a.createElement("form",{className:"w-100 login"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username/NRIC/FIN",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.username,onChange:this.usernameChange,placeholder:"Username/NRIC/FIN"}),this.state.requiredValidation&&r.a.createElement("div",{className:"validation-msg"},this.state.requiredValidationMessage)),r.a.createElement("div",{className:"w-100 h-auto d-flex flex-column "},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",value:this.state.password,onChange:this.passwordChange,placeholder:"Password"}),this.state.requiredValidation&&r.a.createElement("div",{className:"validation-msg"},this.state.requiredValidationMessage)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Confirm Password",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"password",className:"form-control",id:"confirmpassword",name:"confirmpassword",value:this.state.confirmpassword,onChange:this.confirmPasswordChange,placeholder:"Confirm Password"}),this.state.passwordValidation&&r.a.createElement("div",{className:"validation-msg"},this.state.validationMessage),this.state.requiredValidation&&r.a.createElement("div",{className:"validation-msg"},this.state.requiredValidationMessage))),r.a.createElement("div",{className:"w-100 h-auto d-flex flex-column"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"First Name",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"firstname",name:"firstname",value:this.state.firstname,onChange:this.firstnameChange,placeholder:"First Name"}),this.state.requiredValidation&&r.a.createElement("div",{className:"validation-msg"},this.state.requiredValidationMessage)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Last Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"lastname",name:"lastname",value:this.state.lastname,onChange:this.lastnameChange,placeholder:"Last Name"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Email",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"email",name:"email",value:this.state.email,onChange:this.emailChange,placeholder:"Email"}),this.state.requiredValidation&&r.a.createElement("div",{className:"validation-msg"},this.state.requiredValidationMessage),this.state.emailValidationMessage&&r.a.createElement("div",{className:"validation-msg"},"Please enter valid email adress")),r.a.createElement("div",{className:"w-100 h-auto d-flex flex-column"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Age"),r.a.createElement("input",{type:"text",className:"form-control",id:"age",name:"age",value:this.state.age,onChange:this.ageChange,placeholder:"Age"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Weight",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"weight",name:"weight",value:this.state.weight,onChange:this.weightChange,placeholder:"Weight"}),this.state.requiredValidation&&r.a.createElement("div",{className:"validation-msg"},this.state.requiredValidationMessage))),r.a.createElement("div",{className:"w-100 d-flex  flex-column mb-2"},r.a.createElement("button",{type:"button",className:"buttons float-right",onClick:this.SignUp},"Next"),r.a.createElement("button",{type:"button",className:"buttons float-left",onClick:this.goBack},"Back")))),this.state.isLoading&&r.a.createElement(s.a,{loadingText:"Registering user please wait..."}),this.state.validation&&r.a.createElement("div",{className:"validation-box"},this.state.validationMessage))}}])&&l(t.prototype,a),n&&l(t,n),m}(r.a.Component);h.propTypes={},h.defaultProps={},t.default=h},UK5S:function(e,t,a){}}]);