(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),m=a(6),i=a.n(m),l=(a(16),a(4)),c=a(2),u=(a(17),function(){return r.a.createElement("div",{className:"mui-appbar"},r.a.createElement("table",{width:"100%"},r.a.createElement("tr",null,r.a.createElement("td",{className:"mui--appbar-height"},"MATHS TEST"),r.a.createElement("td",{className:"mui--appbar-height aline-right"},"3rd Grade"))))}),o=function(e){var t=Object(n.useState)(0),a=Object(c.a)(t,2),m=a[0],i=a[1];return r.a.createElement("input",{type:"tel",size:"3",placeholder:"=",onChange:function(e){return i(e.target.value)},className:m===e.answer.toString()&&"success"})},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},E=function(e){var t=s(e.min,e.max),a=s(e.min,t-1),n=0;return"+"===e.operator?n=t+a:"-"===e.operator?n=t-a:"X"===e.operator&&(n=t*(a=s(e.min,9))),r.a.createElement("div",{className:"mui-col-xs-3 operation"},r.a.createElement("div",null,t),r.a.createElement("span",null,e.operator),r.a.createElement("div",null,a),r.a.createElement("div",{className:"mui-divider"}),r.a.createElement(o,{answer:n}))},d=function(){return r.a.createElement("div",{className:"mui-footer"},"\xa9 Shantanu Joshi")},f=function(e){var t=function(t){var a=function(e){return parseInt(t.target.getAttribute(e))};e.setLimit(a("min"),a("max"),a("multimin"),a("multimax"))};return r.a.createElement("div",null,r.a.createElement("br",null),"Difficulty Levels: \xa0",r.a.createElement("button",{href:"#",min:10,max:199,multimin:3,multimax:12,onClick:t},"1"),"\xa0  ",r.a.createElement("button",{href:"#",min:100,max:299,multimin:6,multimax:13,onClick:t},"2"),"\xa0  ",r.a.createElement("button",{href:"#",min:150,max:399,multimin:7,multimax:15,onClick:t},"3"))};var p=function(){var e=Object(n.useState)({min:10,max:100}),t=Object(c.a)(e,2),a=t[0],m=t[1],i=Object(n.useState)({min:2,max:12}),o=Object(c.a)(i,2),s=o[0],p=o[1];return r.a.createElement("div",{className:"mui-container-fluid"},r.a.createElement(u,null),console.log(a.min,a.max),r.a.createElement("div",{className:"mui-container-fluid"},r.a.createElement(f,{setLimit:function(e,t,a,n){m({min:e,max:t}),p({min:a,max:n})}}),r.a.createElement("h3",null,"Addition"),r.a.createElement("div",{className:"mui-row"},Object(l.a)(Array(4)).map(function(){return r.a.createElement(E,{operator:"+",min:a.min,max:a.max})})),r.a.createElement("br",null),r.a.createElement("div",{className:"mui-divider"}),r.a.createElement("h3",null,"Subtraction"),r.a.createElement("div",{className:"mui-row"},Object(l.a)(Array(4)).map(function(){return r.a.createElement(E,{operator:"-",min:a.min,max:a.max})})),r.a.createElement("br",null),r.a.createElement("div",{className:"mui-divider"}),r.a.createElement("h3",null,"Multiplication"),r.a.createElement("div",{className:"mui-row"},console.log(s.min,s.max),Object(l.a)(Array(4)).map(function(){return r.a.createElement(E,{operator:"X",min:s.min,max:s.max})})),r.a.createElement("br",null)),r.a.createElement(d,null))},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,m=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),m(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null))),v()},7:function(e,t,a){e.exports=a(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.50769247.chunk.js.map