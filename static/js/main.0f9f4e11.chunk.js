(this["webpackJsonpreact-starter"]=this["webpackJsonpreact-starter"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c=n(11),r=n(1),i=n.n(r),s=n(8),o=n.n(s),a=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),i(t),s(t)}))},u=n(9),d=n.n(u),f=(n(26),n(27),{increaseCount:function(t){var e=t.state,n=t.data;return{count:e.count+n}}}),j={countStart:0,increment:1},b=n(10),h={count:j.countStart,refreshID:Object(b.rndString)(4)},l={actions:f,config:j,seed:h},O={sayHai:function(){return console.log("Hi!")}},g=n(0),v=function(){return Object(g.jsx)("button",{onClick:function(){return l.actions.increaseCount(j.increment)},children:"Click Me!"})},C=function(){return Object(r.useEffect)(O.sayHai,[]),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("div",{children:["Count: ",l.state.count]}),Object(g.jsx)("div",{children:v()}),Object(g.jsxs)("div",{children:["Refresh ID: ",l.state.refreshID]})]})},p=function(){var t=Object(r.useState)(l.seed),e=Object(c.a)(t,2),n=e[0],i=e[1];return d()(l,{state:n,setState:i}),C(l)};o.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(p,{})}),document.getElementById("root")),a()}},[[29,1,2]]]);
//# sourceMappingURL=main.0f9f4e11.chunk.js.map