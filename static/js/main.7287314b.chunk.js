(this.webpackJsonpmangiare=this.webpackJsonpmangiare||[]).push([[0],{29:function(e,n,t){"use strict";t.r(n);var c,r,a,i,o,s,b,d,l,j,p,u,h,f=t(1),x=t.n(f),g=t(13),O=t.n(g),m=t(3),v=t(11),k=t.n(v),w=t(14),y=t(7),S=t(4),C=t(32),F=t(16),z=t(15),N=t(31),E=t(2),R=Object(S.b)(N.a.div)(c||(c=Object(m.a)(["\n    width: 25rem;\n    border-radius: 1rem;\n    box-shadow: 0px 5px 20px #424b54;\n    margin: 12px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    background: #6e9d9c;\n    color: #fedbd0;\n    overflow: hidden;\n    border: 4px solid #eed0c6;\n    &:hover {\n        box-shadow: 0px 5px 20px black;\n    }\n"]))),_=S.b.h1(r||(r=Object(m.a)(["\n    padding: 1rem;\n"]))),B=S.b.img(a||(a=Object(m.a)(["\n    width: 25rem;\n    height: 35vh;\n    padding-top: 1vh;\n    object-fit: cover;\n    \n"]))),D=S.b.ul(i||(i=Object(m.a)(["\n    text-align: center;\n    padding: 1rem;\n"]))),I=S.b.li(o||(o=Object(m.a)(["\n    list-style: none;\n"]))),J=S.b.a(s||(s=Object(m.a)(["\n    text-decoration: none;\n    color: #eed0c6;\n    font-size: 1.2rem;\n    font-weight: 700;\n    padding: 1rem;\n    &:hover {\n        color: black;\n    }\n"]))),L=function(e){var n=e.title,t=e.ingredients,c=e.image,r=e.link,a=Object(f.useState)(!1),i=Object(y.a)(a,2),o=i[0],s=i[1];return Object(E.jsxs)(R,{drag:!0,dragConstraints:{top:-100,left:-70,right:100,bottom:90},children:[Object(E.jsx)(_,{children:n}),Object(E.jsx)(N.a.div,{whileHover:{scale:1.3},children:Object(E.jsx)(z.a,{size:"2em",onClick:function(){return s(!o)}})}),o&&Object(E.jsx)(D,{children:t.map((function(e){return Object(E.jsx)(I,{children:e.text},Object(C.a)())}))},Object(C.a)()),Object(E.jsx)(B,{src:c,alt:n}),Object(E.jsxs)(J,{href:r,target:"_blank",rel:"noopener noreferrer",children:["Source ",Object(E.jsx)(F.a,{})]})]})},M=Object(S.a)(b||(b=Object(m.a)(["\n     * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n\n    }\n    "])));var P=S.b.div(d||(d=Object(m.a)(["\n  min-height: 100vh;\n  background: #eed0c6;\n"]))),T=S.b.h1(l||(l=Object(m.a)(["\n  padding-top: 4vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family:'RocknRoll One', sans-serif; \n  font-size: 7vh;\n"]))),q=S.b.form(j||(j=Object(m.a)(["\n  min-height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),A=S.b.input(p||(p=Object(m.a)(["\n  width: 40%;\n  border: 5px solid #fedbd0;\n  border-radius: 3vh;\n  outline: none;\n  padding: 10px;\n  margin-left: 15vh;\n  &:hover {\n    box-shadow: 0px 5px 20px darkgrey;\n  }\n"]))),H=S.b.button(u||(u=Object(m.a)(["\n  background: #e37f6d;\n  border:none;\n  border-radius: 3vh;\n  padding: 10px 20px;\n  margin: 1vh;\n  color: #feeae6;\n  border: 5px solid #fedbd0;\n  &:hover {\n    background: #6e9d9c;\n    box-shadow: 0px 5px 20px darkgrey;\n  }\n"]))),G=S.b.div(h||(h=Object(m.a)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  padding-left: 5rem;\n  padding-right: 5rem;\n"]))),K=function(){var e=Object(f.useState)([]),n=Object(y.a)(e,2),t=n[0],c=n[1],r=Object(f.useState)(""),a=Object(y.a)(r,2),i=a[0],o=a[1],s=Object(f.useState)("souvlaki"),b=Object(y.a)(s,2),d=b[0],l=b[1],j=Object(f.useRef)();Object(f.useEffect)((function(){p()}),[d]),Object(f.useEffect)((function(){j.current.focus()}),[]);var p=function(){var e=Object(w.a)(k.a.mark((function e(){var n,t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("741f35bb","&app_key=").concat("a263817d6f28b69fb2807ca40c21b53c"));case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,c(t.hits),console.log(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(M,{}),Object(E.jsxs)(P,{className:"App",children:[Object(E.jsx)(T,{children:"Mangiare "}),Object(E.jsxs)(q,{onSubmit:function(e){e.preventDefault(),l(i),o("")},className:"search-form",children:[Object(E.jsx)(A,{className:"searc-bar",type:"text",placeholder:"Search recipe",autoComplete:"off",ref:j,value:i,onChange:function(e){o(e.target.value)}}),Object(E.jsx)(H,{className:"search-button",type:"submit",children:"Search"})]}),Object(E.jsx)(G,{children:t.map((function(e){return Object(E.jsx)(L,{title:e.recipe.label,calories:e.recipe.calories,ingredients:e.recipe.ingredients,image:e.recipe.image,dish:e.recipe.weight,link:e.recipe.url},Object(C.a)())}))})]})]})},Q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))};O.a.render(Object(E.jsx)(x.a.StrictMode,{children:Object(E.jsx)(K,{})}),document.getElementById("root")),Q()}},[[29,1,2]]]);
//# sourceMappingURL=main.7287314b.chunk.js.map