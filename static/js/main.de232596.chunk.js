(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],{15:function(e,a,n){},16:function(e,a,n){},22:function(e,a,n){},24:function(e,a,n){},25:function(e,a,n){"use strict";n.r(a);var s=n(2),t=n.n(s),c=n(10),r=n.n(c),i=(n(15),n(16),n(3)),o=n(4),l=n(6),u=n(9),j=(n(22),n(0)),d=function(e){var a=e.day,n=e.hours,s=e.onChange;return Object(j.jsx)("div",{className:"weekday-information",children:Object(j.jsx)("div",{children:Object(j.jsxs)("label",{className:"custom-label",children:[Object(j.jsx)("span",{className:"label-text",children:a}),Object(j.jsx)("input",{type:"text",className:"input",value:n,onChange:function(e){s(e)},onFocus:function(e){return e.target.select()}})]})})})},b=function(e){var a=e.pay;return Object(j.jsx)("div",{children:a})},h=(n(24),["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]),p=[{id:1,name:"Janice Ribtab",weeks:[{hours:[1,0,1,0,1,0,1],pay:[10,0,10,0,10,0,20]},{hours:[0,1,0,1,0,1,0],pay:[0,10,0,10,0,20,0]},{hours:[1,0,1,0,1,0,1],pay:[10,0,10,0,10,0,20]},{hours:[0,1,0,1,0,1,0],pay:[0,10,0,10,0,20,0]},{hours:[1,0,1,0,1,0,1],pay:[10,0,10,0,10,0,20]}]},{id:2,name:"Steve Wiki",weeks:[{hours:[2,0,2,0,2,0,2],pay:[20,0,20,0,20,0,40]},{hours:[0,2,0,2,0,2,0],pay:[0,20,0,20,0,40,0]},{hours:[2,0,2,0,2,0,2],pay:[20,0,20,0,20,0,40]},{hours:[0,2,0,2,0,2,0],pay:[0,20,0,20,0,40,0]},{hours:[2,0,2,0,2,0,2],pay:[20,0,20,0,20,0,40]}]},{id:3,name:"Zoe Hedge",weeks:[{hours:[3,0,3,0,3,0,3],pay:[30,0,30,0,30,0,60]},{hours:[0,3,0,3,0,3,0],pay:[0,30,0,30,0,60,0]},{hours:[3,0,3,0,3,0,3],pay:[30,0,30,0,30,0,60]},{hours:[0,3,0,3,0,3,0],pay:[0,30,0,30,0,60,0]},{hours:[3,0,3,0,3,0,3],pay:[30,0,30,0,30,0,60]}]},{id:4,name:"Rufus Relquis",weeks:[{hours:[4,0,4,0,4,0,4],pay:[40,0,40,0,40,0,80]},{hours:[0,4,0,4,0,4,0],pay:[0,40,0,40,0,80,0]},{hours:[4,0,4,0,4,0,4],pay:[40,0,40,0,40,0,80]},{hours:[0,4,0,4,0,4,0],pay:[0,40,0,40,0,80,0]},{hours:[4,0,4,0,4,0,4],pay:[40,0,40,0,40,0,80]}]}],O=[{id:1,interval:"17 Jan 2022 - 23 Jan 2022"},{id:2,interval:"10 Jan 2022 - 16 Jan 2022"},{id:3,interval:"3 Jan 2022 - 9 Jan 2022"},{id:4,interval:"27 Dec 2021 - 2 Jan 2022"},{id:5,interval:"20 Dec 2021 - 26 Dec 2021"}],m=function(){var e=Object(s.useState)(p),a=Object(i.a)(e,2),n=a[0],t=a[1],c=Object(s.useState)(""),r=Object(i.a)(c,2),m=r[0],x=r[1],f=Object(s.useState)(""),v=Object(i.a)(f,2),y=v[0],N=v[1],g=Object(s.useState)(0),w=Object(i.a)(g,2),k=w[0],S=w[1],C=Object(s.useState)(0),J=Object(i.a)(C,2),F=J[0],I=J[1],E=Object(s.useState)(!1),D=Object(i.a)(E,2),T=D[0],_=D[1],P=O.findIndex((function(e){return e.interval===y})),R=n.findIndex((function(e){return e.name===m}));return Object(s.useEffect)((function(){var e=setInterval((function(){return function(){if(R>=0&&P>=0){var e=0,a=n[R].weeks[P];a.pay.map((function(n,s){var c=a.hours[s];return e=5===s||6===s?10*c*2:10*c,Number.isNaN(e)&&(e=0),_(!1),t(Object(u.a)((function(a){a[R].weeks[P].pay[s]=e})))}))}}()}),500);return function(){return clearInterval(e)}}),[m,y,n]),Object(s.useEffect)((function(){!function(){if(R>=0&&P>=0){var e=0;n[R].weeks[P].hours.forEach((function(a){e+=+a})),S(e)}}(),function(){if(R>=0&&P>=0){var e=0;n[R].weeks[P].pay.forEach((function(a){e+=+a})),I(e)}}()}),[m,y,n]),Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)("div",{className:"app-container",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("label",{className:"custom-label--large",children:[Object(j.jsx)("span",{className:"label-text--large",children:"Employee"}),Object(j.jsx)(o.a,{icon:l.b,className:"user-icon"}),Object(j.jsxs)("select",{name:"employees",className:"input--large",value:m,onChange:function(e){x(e.target.value)},children:[Object(j.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Choose an employee"}),n.map((function(e){var a=e.id,n=e.name;return Object(j.jsx)("option",{value:n,children:n},a)}))]}),Object(j.jsx)(o.a,{icon:l.a,className:"angle-down-icon"})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("label",{className:"custom-label--large",children:[Object(j.jsx)("span",{className:"label-text--large",children:"Week"}),Object(j.jsx)(o.a,{icon:l.b,className:"user-icon"}),Object(j.jsxs)("select",{name:"weeks",className:"input--large",id:"weeks",value:y,onChange:function(e){N(e.target.value)},children:[Object(j.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Choose week"}),O.map((function(e){var a=e.id,n=e.interval;return Object(j.jsx)("option",{value:n,children:n},a)}))]}),Object(j.jsx)(o.a,{icon:l.a,className:"angle-down-icon"})]})})]}),Object(j.jsx)("div",{className:"progress-bar--wrapper",children:T&&Object(j.jsx)("div",{className:"progress-bar--container",children:Object(j.jsx)("div",{className:"progress-bar"})})}),Object(j.jsx)("section",{className:"main-section",children:P>=0&&R>=0?n[R].weeks[P].hours.map((function(e,a){return Object(j.jsxs)("div",{className:"row-item",children:[Object(j.jsx)("div",{children:Object(j.jsx)(d,{day:h[a],hours:e,onChange:function(e){_(!0),t(Object(u.a)((function(n){n[R].weeks[P].hours[a]=parseInt(e.target.value,10)})))}})}),Object(j.jsxs)("div",{className:"daily-pay",children:["\u20ac",Object(j.jsx)("span",{children:Object(j.jsx)(b,{pay:n[R].weeks[P].pay[a].toFixed(2)})})]})]},h[a])})):Object(j.jsx)("div",{className:"message",children:"Please choose an employee and a time interval"})}),Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsxs)("div",{className:"footer__item",children:[Object(j.jsx)("span",{children:"Hours worked"}),Object(j.jsx)("span",{children:k})]}),Object(j.jsxs)("div",{className:"footer__item",children:[Object(j.jsx)("span",{children:"Salary"}),Object(j.jsxs)("span",{children:["\u20ac"," ",F.toFixed(2)]})]})]})]})})},x=function(){return Object(j.jsx)(m,{})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(a){var n=a.getCLS,s=a.getFID,t=a.getFCP,c=a.getLCP,r=a.getTTFB;n(e),s(e),t(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),f()}},[[25,1,2]]]);
//# sourceMappingURL=main.de232596.chunk.js.map