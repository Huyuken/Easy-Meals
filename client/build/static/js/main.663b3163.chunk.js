(this["webpackJsonpeasymeals-client"]=this["webpackJsonpeasymeals-client"]||[]).push([[0],{88:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c,r,a,i,s=n(1),o=n.n(s),l=n(76),j=n.n(l),d=(n(88),n(14)),u=n(22),b=n(7),O=n(79),p=n(109),h=n(111),m=n(107),x=n(77),f=n(8),g=n(16),v=n(10),w=n(108),y=n(3),N=function(){var e=Object(s.useState)(""),t=Object(v.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)([]),a=Object(v.a)(r,2),i=a[0],o=a[1],l=function(){var e=Object(g.a)(Object(f.a)().mark((function e(t){var c,r;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={method:"GET",url:"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",params:{ingredients:n,number:"5",ignorePantry:"true",ranking:"1"},headers:{"X-RapidAPI-Key":"ce94e41f40msh8f5c5d68e2a9821p16852cjsne6566037f74c","X-RapidAPI-Host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"}},e.prev=2,e.next=5,w.a.request(c);case 5:r=e.sent,o(r.data),console.log(r.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsx)("form",{onSubmit:l,children:Object(y.jsxs)("div",{className:"flex-row",children:[Object(y.jsx)("input",{type:"search",placeholder:"Search...",onChange:function(e){e.preventDefault(),c(e.target.value)},value:n}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{type:"submit",children:"SEARCH"})})]})}),Object(y.jsx)("div",{children:i.map((function(e){return Object(y.jsxs)("div",{children:[Object(y.jsx)(u.b,{to:{pathname:"/recipes/".concat(e.id),state:{recipeId:e.id}},children:Object(y.jsx)("h2",{children:e.title})}),Object(y.jsx)("img",{src:e.image,alt:e.title}),Object(y.jsxs)("p",{children:["Missing Ingredients: ",e.missedIngredientCount]})]},e.id)}))})]})},k=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(N,{})})},I=n(17),S=n(103),C=n(30),$=n(110),_=Object($.a)(c||(c=Object(C.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),T=(Object($.a)(r||(r=Object(C.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Object($.a)(a||(a=Object(C.a)(["\n  mutation addRecipe(\n    $title: String!\n    $image: String!\n    $servings: Int!\n    $readyInMinutes: Int!\n    $ingredients: [String!]!\n    $instructions: [String!]!\n  ) {\n    addRecipe(\n      title: $title\n      image: $image\n      servings: $servings\n      readyInMinutes: $readyInMinutes\n      ingredients: $ingredients\n      instructions: $instructions\n    ) {\n      _id\n      title\n      image\n      servings\n      readyInMinutes\n      ingredients\n      instructions\n    }\n  }\n"])))),R=Object($.a)(i||(i=Object(C.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),E=n(20),A=n(21),D=n(65),P=n.n(D),M=new(function(){function e(){Object(E.a)(this,e)}return Object(A.a)(e,[{key:"getProfile",value:function(){return P()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return P()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}());var U=function(e){var t=Object(s.useState)({email:"",password:""}),n=Object(v.a)(t,2),c=n[0],r=n[1],a=Object(S.a)(_),i=Object(v.a)(a,2),o=i[0],l=i[1].error,j=function(){var e=Object(g.a)(Object(f.a)().mark((function e(t){var n,r;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,o({variables:{email:c.email,password:c.password}});case 4:n=e.sent,r=n.data.login.token,M.login(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,a=t.value;r(Object(d.a)(Object(d.a)({},c),{},Object(I.a)({},n,a)))};return Object(y.jsxs)("div",{className:"container my-1",children:[Object(y.jsx)(u.b,{to:"/signup",children:"\u2190 Sign Up"}),Object(y.jsx)("h2",{children:"Login"}),Object(y.jsxs)("form",{onSubmit:j,children:[Object(y.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(y.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(y.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(y.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(y.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(y.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),l?Object(y.jsx)("div",{children:Object(y.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(y.jsx)("div",{className:"flex-row flex-end",children:Object(y.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var L=function(e){var t=Object(s.useState)({email:"",password:""}),n=Object(v.a)(t,2),c=n[0],r=n[1],a=Object(S.a)(R),i=Object(v.a)(a,1)[0],o=function(){var e=Object(g.a)(Object(f.a)().mark((function e(t){var n,r;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,i({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:n=e.sent,r=n.data.addUser.token,M.login(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){var t=e.target,n=t.name,a=t.value;r(Object(d.a)(Object(d.a)({},c),{},Object(I.a)({},n,a)))};return Object(y.jsxs)("div",{className:"container my-1",children:[Object(y.jsx)(u.b,{to:"/login",children:"\u2190 Log In"}),Object(y.jsx)("h2",{children:"Sign Up"}),Object(y.jsxs)("form",{onSubmit:o,children:[Object(y.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(y.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(y.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:l})]}),Object(y.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(y.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(y.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:l})]}),Object(y.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(y.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(y.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:l})]}),Object(y.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(y.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(y.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:l})]}),Object(y.jsx)("div",{className:"flex-row flex-end",children:Object(y.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var F,W,G,q,B,X=function(){return Object(y.jsxs)("header",{className:"flex-row px-1",children:[Object(y.jsx)("h1",{children:Object(y.jsxs)(u.b,{to:"/",children:[Object(y.jsx)("span",{role:"img","aria-label":"spaghetti-plate",children:"\ud83c\udf5d "}),"EasyMeals"]})}),Object(y.jsx)("nav",{children:M.loggedIn()?Object(y.jsxs)("ul",{className:"flex-row",children:[Object(y.jsx)("li",{className:"mx-1",children:Object(y.jsx)(u.b,{to:"/profile",children:"My Profile"})}),Object(y.jsx)("li",{className:"mx-1",children:Object(y.jsx)(u.b,{to:"/ChefMode",children:"Chef Mode"})}),Object(y.jsx)("li",{className:"mx-1",children:Object(y.jsx)(u.b,{to:"/Recipes",children:"My Recipes"})}),Object(y.jsx)("li",{className:"mx-1",children:Object(y.jsx)(u.b,{to:"/DoGroceries",children:"Do Groceries"})}),Object(y.jsx)("li",{className:"mx-1",children:Object(y.jsx)("a",{href:"/",onClick:function(){return M.logout()},children:"Log Out"})})]}):Object(y.jsxs)("ul",{className:"flex-row",children:[Object(y.jsx)("li",{className:"mx-1",children:Object(y.jsx)(u.b,{to:"/login",children:"Log In"})}),Object(y.jsx)("li",{className:"mx-1",children:Object(y.jsx)(u.b,{to:"/signup",children:"Sign Up"})})]})})]})},z=function(e){e.recipe;var t=Object(s.useState)(null),n=Object(v.a)(t,2),c=n[0],r=n[1],a=window.location.href.split("/")[window.location.href.split("/").length-1],i=Object(S.a)(T),o=Object(v.a)(i,1)[0];if(Object(s.useEffect)((function(){var e={method:"GET",url:"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/".concat(a,"/information"),headers:{"X-RapidAPI-Key":"ce94e41f40msh8f5c5d68e2a9821p16852cjsne6566037f74c","X-RapidAPI-Host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"}};Object(w.a)(e).then((function(e){r(e.data),console.log(e.data)})).catch((function(e){console.error(e)}))}),[a]),!c)return Object(y.jsx)("div",{children:"Loading..."});var l=function(){var e=Object(g.a)(Object(f.a)().mark((function e(t){var n,r;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o({variables:{title:c.title,image:c.image,servings:c.servings,readyInMinutes:c.readyInMinutes,ingredients:c.extendedIngredients.map((function(e){return e.original})),instructions:c.analyzedInstructions[0].steps.map((function(e){return e.step}))}});case 3:n=e.sent,r=n.data,console.log(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:c.title}),Object(y.jsx)("img",{src:c.image,alt:c.title}),Object(y.jsxs)("p",{children:["Servings: ",c.servings]}),Object(y.jsxs)("p",{children:["Ready in: ",c.readyInMinutes," minutes"]}),Object(y.jsx)("h3",{children:"Ingredients:"}),Object(y.jsx)("ul",{children:c.extendedIngredients.map((function(e){return Object(y.jsxs)("li",{children:[e.name," (",e.amount," ",e.unit,")"]},e.id)}))}),Object(y.jsx)("h3",{children:"Instructions:"}),Object(y.jsx)("ol",{children:c.analyzedInstructions[0].steps.map((function(e){return Object(y.jsx)("li",{children:e.step},e.number)}))}),function(){if(M.loggedIn())return Object(y.jsx)("button",{onClick:l,children:"Save Recipe"})}()]})},H=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(z,{})})},K=n(112),Q=(Object($.a)(F||(F=Object(C.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),Object($.a)(W||(W=Object(C.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),Object($.a)(G||(G=Object(C.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object($.a)(q||(q=Object(C.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"]))),Object($.a)(B||(B=Object(C.a)(["\n  {\n    user {\n      firstName\n      lastName\n      favorites {\n        title\n        image\n        servings\n        readyInMinutes\n        ingredients\n        instructions\n        }\n    }\n  }\n"])))),J=function(){var e=Object(K.a)(Q),t=e.loading,n=e.error,c=e.data;if(t)return Object(y.jsx)("p",{children:"Loading..."});if(n)return Object(y.jsxs)("p",{children:["Error! ",n.message]});var r=c.user;return Object(y.jsxs)("div",{className:"user-page",children:[r?Object(y.jsxs)("h1",{children:["Welcome, ",r.firstName," ",r.lastName,"!"]}):Object(y.jsx)("p",{children:"No user found"}),Object(y.jsx)("div",{className:"saved-recipes-container",children:r&&r.favorites.map((function(e,t){return Object(y.jsxs)("div",{className:"recipe",children:[Object(y.jsx)("h2",{children:e.title}),Object(y.jsx)("img",{src:e.image,alt:"recipe image"})]},t)}))})]})},Y=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(J,{})})},V=n(80),Z=n(18),ee=function(e,t){switch(t.type){case"UPDATE_PRODUCTS":return Object(d.a)(Object(d.a)({},e),{},{products:Object(Z.a)(t.products)});case"ADD_TO_CART":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(Z.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(d.a)(Object(d.a)({},e),{},{cart:[].concat(Object(Z.a)(e.cart),Object(Z.a)(t.products))});case"UPDATE_CART_QUANTITY":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"REMOVE_FROM_CART":var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(d.a)(Object(d.a)({},e),{},{cartOpen:n.length>0,cart:n});case"CLEAR_CART":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!e.cartOpen});case"UPDATE_CATEGORIES":return Object(d.a)(Object(d.a)({},e),{},{categories:Object(Z.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(d.a)(Object(d.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var te=["value"],ne=Object(s.createContext)(),ce=ne.Provider,re=function(e){e.value;var t,n=Object(V.a)(e,te),c=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(s.useReducer)(ee,t)),r=Object(v.a)(c,2),a=r[0],i=r[1];return Object(y.jsx)(ce,Object(d.a)({value:[a,i]},n))},ae=function(e){var t=Object(s.useState)(e.list),n=Object(v.a)(t,2),c=n[0],r=n[1],a=Object(s.useState)(""),i=Object(v.a)(a,2),o=i[0],l=i[1];return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"ingredients List"}),Object(y.jsxs)("p",{children:[Object(y.jsx)("b",{children:"you entered:"}),o]}),Object(y.jsx)("input",{onKeyDown:function(e){13===e.keyCode&&(r([].concat(Object(Z.a)(c),[o])),l(""))},onChange:function(e){console.log("user input",e.target.value),l(e.target.value)},type:"text",placeholder:"Enter ingredient name"}),Object(y.jsx)("ul",{children:c.map((function(e,t){return Object(y.jsxs)("li",{style:{marginBottom:"10px"},children:[e," ",Object(y.jsx)("button",{onClick:function(){return function(e){window.confirm("Do you want to delete ".concat(c[e],"?"))&&r(c.filter((function(t,n){return n!==e})))}(t)},style:{marginLeft:"20px"},children:"X"})]},"ingredient-".concat(t))}))})]})},ie=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(ae,{list:["pasta","salad"]})})},se=Object(O.a)({uri:"/graphql"}),oe=Object(x.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(d.a)(Object(d.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),le=new p.a({link:oe.concat(se),cache:new h.a});var je=function(){return Object(y.jsx)(m.a,{client:le,children:Object(y.jsx)(u.a,{children:Object(y.jsx)("div",{children:Object(y.jsxs)(re,{children:[Object(y.jsx)(X,{}),Object(y.jsxs)(b.c,{children:[Object(y.jsx)(b.a,{exact:!0,path:"/",element:Object(y.jsx)(k,{})}),Object(y.jsx)(b.a,{path:"/login",element:Object(y.jsx)(U,{})}),Object(y.jsx)(b.a,{path:"/signup",element:Object(y.jsx)(L,{})}),Object(y.jsx)(b.a,{path:"/recipes/:id",element:Object(y.jsx)(H,{})}),Object(y.jsx)(b.a,{path:"/chefmode",element:Object(y.jsx)(ie,{})}),Object(y.jsx)(b.a,{path:"/profile",element:Object(y.jsx)(Y,{})})]})]})})})})},de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}j.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(je,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");de?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ue(t,e)}))}}()}},[[97,1,2]]]);
//# sourceMappingURL=main.663b3163.chunk.js.map