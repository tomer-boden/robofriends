(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=(a(15),a(1)),s=a(2),u=a.n(s),i=a(5),m=function(e){var t=e.name,a=(e.email,e.id,e.url),c=Object(n.useState)([]),o=Object(l.a)(c,2),s=o[0],m=o[1],h=Object(n.useState)([]),p=Object(l.a)(h,2),f=p[0],b=p[1],d=Object(n.useState)([]),v=Object(l.a)(d,2),E=v[0],g=v[1],j=Object(n.useState)(""),O=Object(l.a)(j,2),w=O[0],k=O[1];function x(){return(x=Object(i.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.next=8,m(n.sprites.front_default);case 8:return e.next=10,b(n.types[0].type.name);case 10:if(!n.types[1]){e.next=15;break}return e.next=13,g("/"+n.types[1].type.name);case 13:e.next=17;break;case 15:return e.next=17,g("");case 17:return e.next=19,k(n.id);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){x.apply(this,arguments)}(a)})),r.a.createElement("div",{className:"tc bg-light-green dib bg3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("h2",null,"#",w," ",t),r.a.createElement("img",{alt:"photo",src:s}),r.a.createElement("div",null),r.a.createElement("p",null,f,E))},h=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(m,{key:t,id:t,name:e.name,email:"lala",url:e.url})})))},p=function(e){var t=e.searchChange,a=e.place;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:a,onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},b=(a(17),a(6)),d=a(7),v=a(9),E=a(8),g=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={haserror:!1},n}return Object(d.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({haserror:!0})}},{key:"render",value:function(){return this.state.haserror?r.a.createElement("h1",null,"oops wrong"):this.props.children}}]),a}(n.Component);var j=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(l.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(0),b=Object(l.a)(m,2),d=b[0],v=b[1],E=Object(n.useState)(0),j=Object(l.a)(E,2),O=j[0],w=j[1];Object(n.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat(d,"&offset=").concat(O)).then((function(e){return e.json()})).then((function(e){return c(e.results)}))}),[d,O]);var k=a.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return a.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"pokedex!"),r.a.createElement(p,{searchChange:function(e){i(e.target.value)},place:"search pokemon"}),r.a.createElement("div",{className:"box"},r.a.createElement("h3",null,"show:"),r.a.createElement(p,{searchChange:function(e){v(e.target.value)},place:"20"}),r.a.createElement("h3",null,"from:"),r.a.createElement(p,{searchChange:function(e){e.target.value>=1?w(e.target.value-1):w(0)},place:"1"})),r.a.createElement(f,null,r.a.createElement(g,null,r.a.createElement(h,{robots:k})))):r.a.createElement("h1",{className:"tc"},"loading")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.4e53d728.chunk.js.map