(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n.n(c),r=n(3),u=n(2),o=n(0),s=function(e){var t=e.persons,n=e.setPersons,c=Object(u.useState)(""),a=Object(r.a)(c,2),s=a[0],i=a[1];return Object(u.useEffect)((function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));n(e)}),[s]),Object(o.jsxs)("div",{children:["filter shown with: ",Object(o.jsx)("input",{value:s,onChange:function(e){i(e.target.value)}})]})},i=n(4),j=n.n(i),b="https://espress-joshua.herokuapp.com/api/persons/",d={getAll:function(){return new Promise((function(e,t){j.a.get(b).then((function(t){return e(t.data)})).catch(t)}))},add:function(e){var t=e.name,n=e.number;return new Promise((function(e,c){j.a.post(b,{name:t,number:n}).then((function(t){return e(t.data)})).catch(c)}))},remove:function(e){return new Promise((function(t,n){j.a.delete("".concat(b).concat(e)).then((function(e){return t(e.data)})).catch(n)}))},update:function(e,t){var n=t.name,c=t.number;return new Promise((function(t,a){j.a.put("".concat(b).concat(e),{name:n,number:c}).then((function(e){return t(e.data)})).catch(a)}))}},m=(n(41),function(){var e=Object(u.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(u.useState)(""),i=Object(r.a)(a,2),j=i[0],b=i[1],m=Object(u.useState)(""),f=Object(r.a)(m,2),h=f[0],l=f[1],O=Object(u.useState)([]),p=Object(r.a)(O,2),v=p[0],x=p[1],w=Object(u.useState)(null),g=Object(r.a)(w,2),k=g[0],C=g[1];Object(u.useEffect)((function(){n||(P(),c(!0))}),[v,n]);var P=function(){d.getAll().then((function(e){x(e)}))};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),k&&Object(o.jsx)("p",{className:k.className,children:k.text}),Object(o.jsx)(s,{persons:v,setPersons:x}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{type:"text",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(o.jsxs)("div",{children:["number: ",Object(o.jsx)("input",{type:"text",value:h,onChange:function(e){return l(e.target.value)}})]})]}),Object(o.jsx)("div",{})]}),Object(o.jsx)("button",{onClick:function(){if(j&&h){var e={name:j,number:h};v.some((function(t){return t.name===e.name}))?d.update(v.find((function(t){return t.name===e.name}))._id,e).then(P):d.add(e).then((function(e){x(v.concat(e)),b(""),l(""),C({text:"".concat(e.name," was added to the phonebook"),className:"success"})}))}else alert("Name and number are required")},children:"add"}),Object(o.jsx)("h2",{children:"Numbers"}),v.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("span",{children:[e.name," - ",e.number," "]}),Object(o.jsx)("button",{onClick:function(){return function(e){var t=e.name,n=e._id;window.confirm("Delete ".concat(t,"?"))&&d.remove(n).then((function(){return P()}))}(e)},children:"delete"})]},e.name)}))]})});a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3609bb0d.chunk.js.map