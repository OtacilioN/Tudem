(this.webpackJsonptudem=this.webpackJsonptudem||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),c=(a(77),a(10)),l=a(148),s=a(147),u=a(150),m=a(149),f=a(151),d=a(152),g=a(65),p=a.n(g),v=a(64),b=a.n(v),h=a(66),E=a.n(h),y=(a(78),a(142)),w=(a(79),function(e){return r.a.createElement("div",{style:{display:"flex",borderTop:"1px solid black",marginTop:16}},r.a.createElement("div",{style:{textAlign:"initial",display:"flex",justifyContent:"space-around",padding:16}},r.a.createElement("img",{src:e.image,alt:"Foto de perfil",style:{height:90,width:90,borderRadius:8}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",marginLeft:32}},e.children)))}),x=a(138),S=function(e){return r.a.createElement("div",{style:{display:"flex",margin:4}},r.a.createElement(x.a,null,e.icon),r.a.createElement(y.a,{style:{marginLeft:8}},e.text))},j=function(e){var t=JSON.parse(localStorage.getItem("matchList"))||{},a=Object.keys(t);return console.log("matchList",t),r.a.createElement("div",{className:"Match-container"},r.a.createElement(y.a,null,"Match List"),a.map((function(e){return r.a.createElement(w,{image:t[e].image},r.a.createElement(S,{icon:"assignment_ind",text:t[e].name}),r.a.createElement(S,{icon:"chat",text:t[e].whatsapp}))})))},k=a(11),O=a.n(k),N=a(143),C=a(144),P=a(145),L=(a(26),function(e){var t=e.image,a=e.handleReject,o=e.handleLike,i=Object(n.useState)(),l=Object(c.a)(i,2),s=l[0],u=l[1];return r.a.createElement(n.Fragment,null,s&&r.a.createElement("div",{style:{zIndex:1,marginTop:42,marginLeft:42,position:"absolute"}},r.a.createElement("div",{style:{border:"2px solid",borderColor:"like"===s?"#3f51b5":"#f50057",padding:4}},r.a.createElement(y.a,{color:"like"===s?"#3f51b5":"#f50057",style:{fontWeight:"bold"}},"like"===s?"Like!":"Pr\xf3ximo"))),r.a.createElement("div",{style:{margin:8,borderRadius:16,display:"flex",flex:1,backgroundImage:"url(".concat(t,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",flexDirection:"column",justifyContent:"flex-end"}},e.children),r.a.createElement("div",{style:{zIndex:1,marginTop:-42,width:"90%",display:"flex",justifyContent:"space-between",marginLeft:"5%",marginRight:"5%"}},"like"!==s?r.a.createElement(N.a,{onClick:function(){u("reject"),setTimeout((function(){u(""),a()}),500)},color:"secondary","aria-label":"Cancel"},r.a.createElement(C.a,null)):r.a.createElement("div",null),"reject"!==s?r.a.createElement(N.a,{onClick:function(){u("like"),setTimeout((function(){u(""),o()}),500)},color:"primary","aria-label":"favorite"},r.a.createElement(P.a,null)):r.a.createElement("div",null)))}),T=function(e){var t=e.name,a=e.bio;return r.a.createElement("div",{className:"Find-text-container"},r.a.createElement(y.a,{className:"Find-text-style"},t,": ",a))},I=function(e){return r.a.createElement("div",{className:"Find-text-container"},r.a.createElement(y.a,{className:"Find-text-style",color:"primary"},r.a.createElement("span",{role:"img","aria-label":"Cone de Festa"},"\ud83c\udf89")," ","Parab\xe9ns, voc\xea conseguiu um match!"," ",r.a.createElement("span",{role:"img","aria-label":"Cone de Festa"},"\ud83c\udf89")," ","Acesse agora a aba de Matches e encontre o contato deste estudante para que voc\xeas possam juntos nunca parar de aprender!"))},U=a(61),H=a.n(U),R=function(e){return r.a.createElement("div",{style:{margin:8,borderRadius:16,padding:16,display:"flex",backgroundColor:"darkgrey",marginTop:32,flexDirection:"column",alignItems:"center"}},r.a.createElement(y.a,{color:"error"},"Preencha todas as informa\xe7\xf5es na aba de Perfil primeiro para come\xe7ar a usar o Tudem!"),r.a.createElement(H.a,{style:{marginTop:16},fontSize:"large",color:"error"}))},W=a(37),A=a.n(W),D=(a(85),a(62));A.a.initializeApp(D);var z=A.a.firestore(),F=function(){var e,t;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.awrap(z.collection("users").get());case 2:return e=a.sent,t={},e.forEach((function(e){t[e.id]=e.data()})),console.log(t),a.abrupt("return",t);case 7:case"end":return a.stop()}}))},J=function(e,t){var a={};a[t]=!0,z.collection("likes").doc(e.gitHubUser).set(a,{merge:!0})},M=function(e){var t,a;return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.a.awrap(z.collection("likes").get());case 2:return t=n.sent,console.log("THE QUERY",t),a=t&&t.docs.filter((function(t){return t.id===e}))[0],n.abrupt("return",a.data());case 6:case"end":return n.stop()}}))},B=function(e){var t=Object(n.useState)(0),a=Object(c.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(),s=Object(c.a)(l,2),u=s[0],m=s[1],f=Object(n.useState)(),d=Object(c.a)(f,2),g=d[0],p=d[1],v=Object(n.useState)(),b=Object(c.a)(v,2),h=b[0],E=b[1],w=Object(n.useState)(!1),x=Object(c.a)(w,2),S=x[0],j=x[1],k=(JSON.parse(localStorage.getItem("userData"))||{}).gitHubUser,N=function(){var e;return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.awrap(F());case 2:return e=t.sent,t.abrupt("return",Object.keys(e));case 4:case"end":return t.stop()}}))};Object(n.useEffect)((function(){!function(){var e,t;O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.awrap(N());case 2:return e=a.sent,t=e.filter((function(e){return e!==k})),console.log(e,t),navigator.geolocation.getCurrentPosition((function(e){console.log("Localiza\xe7\xe3o do usu\xe1rio",e.coords.latitude,e.coords.longitude)})),p(t),a.t0=E,a.next=10,O.a.awrap(F());case 10:a.t1=a.sent,(0,a.t0)(a.t1),m(e[0]);case 13:case"end":return a.stop()}}))}()}),[]);var C=function(){var e=o+1;i(e),m(g[e])},P=function(e,t){j(!0);var a=JSON.parse(localStorage.getItem("matchList"))||{};a[e]={name:h[e].name,whatsapp:h[e].whatsapp,image:h[e].image},localStorage.setItem("matchList",JSON.stringify(a)),function(e,t){var a={},n={};a[e.gitHubUser]=!0,n[t]=!0,z.collection("matchs").doc(t).set(a,{merge:!0}),z.collection("matchs").doc(e.gitHubUser).set(n,{merge:!0})}(h[e],t),navigator.vibrate([200,200,400,400,800,800,200,200]),setTimeout((function(){j(!1),C()}),3e3)};return r.a.createElement("div",{className:"Find-container"},r.a.createElement(y.a,null,"Encontre Estudantes"),k?h&&h[u]&&r.a.createElement(L,{image:h[u].image,handleReject:C,handleLike:function(){var e;return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return J(h[u],k),t.next=3,O.a.awrap(M(k));case 3:e=t.sent,e&&e[h[u].gitHubUser]?P(u,k):C();case 6:case"end":return t.stop()}}))}},S?r.a.createElement(I,null):r.a.createElement(T,{name:h[u].name,bio:h[u].bio})):r.a.createElement(R,null))},Q=a(153),_=a(146),q=(a(88),a(63)),G=a.n(q),K=function(e){var t=JSON.parse(localStorage.getItem("userData"))||{},a=r.a.useState(t.gitHubUser||""),n=Object(c.a)(a,2),o=n[0],i=n[1],l=r.a.useState(t.name||""),s=Object(c.a)(l,2),u=s[0],m=s[1],f=r.a.useState(t.whatsapp||""),d=Object(c.a)(f,2),g=d[0],p=d[1],v=r.a.useState(t.bio||""),b=Object(c.a)(v,2),h=b[0],E=b[1],w=r.a.useState(t.image||"https://avatars2.githubusercontent.com/u/54108471?v=4"),x=Object(c.a)(w,2),S=x[0],j=x[1];return r.a.createElement("div",{className:"Profile-container"},r.a.createElement(y.a,null,"Perfil do Estudante"),r.a.createElement("div",{className:"Profile-info"},r.a.createElement("div",{className:"Profile-picture-wrapper"},r.a.createElement("img",{src:S,alt:"Foto de perfil",style:{height:140,width:140}})),r.a.createElement("form",{className:"Profile-flex-full",noValidate:!0,autoComplete:"off"},r.a.createElement("div",{className:"Profile-form-wrapper"},r.a.createElement(Q.a,{className:"Profile-flex-full",id:"github-username",value:o,onChange:function(e){i(e.target.value)},label:"Usuario do GitHub"}),r.a.createElement(Q.a,{value:u,onChange:function(e){m(e.target.value)},className:"Profile-flex-full",id:"name",label:"Nome"}),r.a.createElement(Q.a,{value:g,onChange:function(e){p(e.target.value)},className:"Profile-flex-full",id:"whatsapp",label:"Whatsapp"})))),r.a.createElement("div",{className:"Profile-info"},r.a.createElement(Q.a,{multiline:!0,rowsMax:"4",onChange:function(e){E(e.target.value)},value:h,className:"Profile-flex-full",id:"bio",label:"bio"})),r.a.createElement("div",{style:{display:"flex",flex:1,alignItems:"flex-end",justifyContent:"space-around"}},r.a.createElement(_.a,{onClick:function(){G.a.get("https://api.github.com/users/"+o).then((function(e){var t=e.data,a=t.name,n=t.bio,r=t.avatar_url;t.followers,t.public_repos;a&&m(a),n&&E(n),r&&j(r),console.log(e)})).catch((function(e){console.log(e)})).finally((function(){}))}},"Buscar GitHub"),r.a.createElement(_.a,{onClick:function(){var t,a={gitHubUser:o,name:u,whatsapp:g,bio:h,image:S};t=a,z.collection("users").doc(t.gitHubUser).set(t,{merge:!0}),localStorage.setItem("userData",JSON.stringify(a)),e.onSave()},color:"primary"},"Salvar")))},V=Object(s.a)({card:{flex:1,marginTop:"1%",display:"flex",marginBottom:"1%",flexDirection:"column",width:"100%",maxWidth:600},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),Y=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}};var $=function(){var e=(JSON.parse(localStorage.getItem("userData"))||{}).gitHubUser,t=r.a.useState(e?1:2),a=Object(c.a)(t,2),n=a[0],o=a[1],i=V(),s=function(){var e=r.a.useState(Y()),t=Object(c.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){function e(){n(Y())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}().height,g=[r.a.createElement(j,null),r.a.createElement(B,null),r.a.createElement(K,{onSave:function(){return o(1)}})];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-body",style:{minHeight:s}},r.a.createElement(l.a,{className:i.card},r.a.createElement(m.a,{style:{flex:1,display:"flex",flexDirection:"column"}},g[n]),r.a.createElement(u.a,{style:{display:"flex"}},r.a.createElement(f.a,{value:n,onChange:function(e,t){o(t)},showLabels:!0,style:{flex:1}},r.a.createElement(d.a,{label:"Matches",icon:r.a.createElement(b.a,null)}),r.a.createElement(d.a,{label:"Estudantes",icon:r.a.createElement(p.a,null)}),r.a.createElement(d.a,{label:"Perfil",icon:r.a.createElement(E.a,null)}))))))},X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement($,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Tudem",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Tudem","/service-worker.js");X?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Z(t,e)}))}}()},26:function(e,t,a){},62:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyDirMjRQSt0dkNCSCuMq4UTkaQv9M6-y80","authDomain":"tudem-acc4a.firebaseapp.com","projectId":"tudem-acc4a"}')},72:function(e,t,a){e.exports=a(105)},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},88:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.1ef74313.chunk.js.map