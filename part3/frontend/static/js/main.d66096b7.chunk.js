(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n.n(c),r=n(3),s=n(2),o=n(0),u=function(e){var t=e.persons,n=e.setPersons,c=Object(s.useState)(""),a=Object(r.a)(c,2),u=a[0],i=a[1];return Object(s.useEffect)((function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));n(e)}),[u]),Object(o.jsxs)("div",{children:["filter shown with: ",Object(o.jsx)("input",{value:u,onChange:function(e){i(e.target.value)}})]})},i=n(5),j=n.n(i),d="https://espress-joshua.herokuapp.com/api/persons/",b={getAll:function(){return new Promise((function(e,t){j.a.get(d).then((function(t){return e(t.data)})).catch(t)}))},add:function(e){var t=e.name,n=e.number;return new Promise((function(e,c){j.a.post(d,{name:t,number:n}).then((function(t){return e(t.data)})).catch(c)}))},remove:function(e){return new Promise((function(t,n){j.a.delete("".concat(d).concat(e)).then((function(e){return t(e.data)})).catch(n)}))}},l=(n(41),function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(r.a)(a,2),j=i[0],d=i[1],l=Object(s.useState)(null),h=Object(r.a)(l,2),f=h[0],m=h[1],O=Object(s.useState)([]),p=Object(r.a)(O,2),x=p[0],v=p[1];Object(s.useEffect)((function(){b.getAll().then((function(e){v(e)}))}),[]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),f&&Object(o.jsx)("p",{className:f.className,children:f.text}),Object(o.jsx)(u,{persons:x,setPersons:v}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(o.jsxs)("div",{children:["number: ",Object(o.jsx)("input",{type:"text",value:j,onChange:function(e){return d(e.target.value)}})]})]}),Object(o.jsx)("div",{})]}),Object(o.jsx)("button",{onClick:function(){if(n&&j){var e={name:n,number:j};x.some((function(t){return t.name===e.name}))?alert("".concat(e.name," is already added to phonebook")):b.add(e).then((function(e){v(x.concat(e)),c(""),d(""),m({text:"".concat(e.name," was added to the phonebook"),className:"success"})}))}else alert("Name and number are required")},children:"add"}),Object(o.jsx)("h2",{children:"Numbers"}),x.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("span",{children:[e.name," - ",e.number," "]}),Object(o.jsx)("button",{onClick:function(){return function(e){var t=e.name,n=e.id;window.confirm("Delete ".concat(t,"?"))&&b.remove(n).then((function(){v(x.filter((function(e){return e.id!==n})))}))}(e)},children:"delete"})]},e.name)}))]})});a.a.render(Object(o.jsx)(l,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.d66096b7.chunk.js.map