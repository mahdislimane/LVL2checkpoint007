(this.webpackJsonpLVL2checkpoint007=this.webpackJsonpLVL2checkpoint007||[]).push([[0],{40:function(e,a,t){e.exports=t(50)},45:function(e,a,t){},46:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),l=t.n(c),m=(t(45),t(46),t(39)),s=t(24),i=t(31),o=t(15),u=t(14);function E(e){var a=e.rateSearch+1,t=e.movieList.filter((function(a){return a.rating>=e.rateSearch})).filter((function(e){return e.rating<a}));return r.a.createElement("div",null,e.rateSearch?t.map((function(a){return r.a.createElement("div",null,r.a.createElement(u.a,{style:{width:280},onClick:function(){e.setmovieCard(a)}},a.name))})):e.movieList.map((function(a){return r.a.createElement("div",null,r.a.createElement(u.a,{style:{width:280},onClick:function(){e.setmovieCard(a)}},a.name))})))}var p=t(33),g=t.n(p);function d(e){return r.a.createElement("div",{className:"movieCard"},r.a.createElement("h3",null,e.movieCard.name),r.a.createElement("img",{className:"pic",src:e.movieCard.pic,alt:""}),r.a.createElement(g.a,{name:e.movieCard.name,value:e.movieCard.rating,starCount:"5",starColor:"#ffb400",emptyStarColor:"#333",editing:!1}),r.a.createElement("h4",null,e.movieCard.year))}var v=t(17),f=(t(30),t(56));function h(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),c=t[0],l=t[1],p=Object(n.useState)(""),g=Object(o.a)(p,2),h=g[0],N=g[1],C=Object(n.useState)({name:"",pic:"",rating:0,year:0}),b=Object(o.a)(C,2),y=b[0],j=b[1],O=Object(n.useState)({name:"SONIC LE FILM",pic:"https://fr.web.img3.acsta.net/pictures/20/02/10/17/16/0746079.jpg",rating:3.4,year:"2020"}),k=Object(o.a)(O,2),w=k[0],L=k[1],S=Object(n.useState)([{name:"SONIC LE FILM",pic:"https://fr.web.img3.acsta.net/pictures/20/02/10/17/16/0746079.jpg",rating:3.4,year:2020},{name:"L'APPEL DE LA FOR\xcaT",pic:"https://yc.cldmlk.com/tn029qswebz1gahz3xzzhb7x44/1578345436441_Poster.jpg",rating:4,year:2020},{name:"AVENGERS: ENDGAME",pic:"https://fr.web.img2.acsta.net/pictures/19/04/04/09/04/0472053.jpg",rating:4,year:2019}]),I=Object(o.a)(S,2),A=I[0],x=I[1],M=Object(n.useState)(!1),R=Object(o.a)(M,2),z=R[0],B=R[1],F=function(){return B(!1)},P=function(e){j(Object(i.a)({},y,Object(s.a)({},e.target.name,e.target.value)))};return Object(n.useEffect)((function(){document.title="".concat(w.name)}),[w]),r.a.createElement("div",{className:"container-fluid row"},r.a.createElement("div",{className:"col-4 movieList"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",placeholder:"search...",onChange:function(e){l(e.target.value)}}),r.a.createElement(f.a,null,r.a.createElement(f.a.Toggle,{id:"dropdown-basic-button"},"search by rating"),r.a.createElement(f.a.Menu,null,r.a.createElement(f.a.Item,{onClick:function(){return N(1)}},r.a.createElement("img",{className:"star",src:"./star.png",alt:""})),r.a.createElement(f.a.Item,{onClick:function(){return N(2)}},r.a.createElement("img",{className:"star",src:"./star.png",alt:""}),r.a.createElement("img",{className:"star",src:"./star.png",alt:""})),r.a.createElement(f.a.Item,{onClick:function(){return N(3)}},r.a.createElement("img",{className:"star",src:"./star.png",alt:""}),r.a.createElement("img",{className:"star",src:"./star.png",alt:""}),r.a.createElement("img",{className:"star",src:"./star.png",alt:""})),r.a.createElement(f.a.Item,{onClick:function(){return N(4)}},r.a.createElement("img",{className:"star",src:"./star.png",alt:""}),r.a.createElement("img",{className:"star",src:"./star.png",alt:""}),r.a.createElement("img",{className:"star",src:"./star.png",alt:""}),r.a.createElement("img",{className:"star",src:"./star.png",alt:""})),r.a.createElement(f.a.Item,{onClick:function(){return N(5)}},r.a.createElement("img",{className:"star",src:"./star.png",alt:""}),r.a.createElement("img",{className:"star",src:"./star.png",alt:""}),r.a.createElement("img",{className:"star",src:"./star.png",alt:""}),r.a.createElement("img",{className:"star",src:"./star.png",alt:""}),r.a.createElement("img",{className:"star",src:"./star.png",alt:""})),r.a.createElement(f.a.Item,{onClick:function(){return N("")}},"All")))),r.a.createElement(u.a,{onClick:function(){B(!0)}},"+")),r.a.createElement(E,{rateSearch:h,movieList:A.filter((function(e){return e.name.toUpperCase().includes(c.toUpperCase())})),setmovieCard:function(e){return L(e)}})),r.a.createElement("div",{className:"col-8"},r.a.createElement(d,{movieCard:w})),r.a.createElement("div",null,r.a.createElement(v.a,{show:z,onHide:F},r.a.createElement(v.a.Header,{closeButton:!0},r.a.createElement(v.a.Title,null,"Add Movie")),r.a.createElement(v.a.Body,null,r.a.createElement("div",{className:"container-fluid row"},r.a.createElement("div",{className:"col-4"},"Name: "),r.a.createElement("div",{className:"col-8"},r.a.createElement("input",{type:"text",onChange:P,name:"name"})),r.a.createElement("div",{className:"col-4"},"Picture URL: "),r.a.createElement("div",{className:"col-8"},r.a.createElement("input",{type:"text",onChange:P,name:"pic"})),r.a.createElement("div",{className:"col-4"},"Rate: "),r.a.createElement("div",{className:"col-8"},r.a.createElement("input",{type:"number",onChange:P,name:"rating"})),r.a.createElement("div",{className:"col-4"},"Year: "),r.a.createElement("div",{className:"col-8"},r.a.createElement("input",{type:"number",onChange:P,name:"year"})))),r.a.createElement(v.a.Footer,null,r.a.createElement(u.a,{variant:"secondary",onClick:F},"Close"),r.a.createElement(u.a,{variant:"primary",onClick:function(){y.name?y.pic?y.rating?y.year?x([].concat(Object(m.a)(A),[y])):alert("please insert a year"):alert("please insert a rate"):alert("please insert a picture URL"):alert("please insert a name"),F(),j({name:"",pic:"",rating:0,year:0}),alert("movie added")}},"Add Movie")))))}var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.dd56f0dd.chunk.js.map