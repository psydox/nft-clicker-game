(this["webpackJsonpnft-clicker-game"]=this["webpackJsonpnft-clicker-game"]||[]).push([[0],{31:function(e,t,c){},41:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var r=c(8),n=c.n(r),s=c(32),i=c.n(s),a=(c(41),c(31),c(12)),o=c(48),j=c(10),l=c(47),d=c(7);function b(e){var t=Object.assign({},e),c=Object(r.useRef)(),s=n.a.useRef(),i=Object(l.a)("/nft-clicker-game/btc.gltf"),o=i.nodes,b=i.materials;return Object(a.b)((function(e){var t=e.clock;s.current.rotation.z=t.getElapsedTime()})),Object(d.jsx)("group",Object(j.a)(Object(j.a)({style:{innerWidth:10},ref:c},t),{},{dispose:null,children:Object(d.jsx)("mesh",{ref:s,geometry:o.Cylinder.geometry,material:b["Material.001"],position:[0,0,0],rotation:[1.65,.25,0],scale:[2.5,.25,2.5]})}))}l.a.preload("/btc.gltf");var O=n.a.createContext();function m(){var e=Object(r.useContext)(O),t=e.incrementScore,c=e.state,n=c.reward_per_click,s=c.reward_per_second;return Object(d.jsxs)("div",{className:"clicker-section",children:[Object(d.jsxs)("p",{className:"reward-per-sec",children:["BTC per second: ",s.toFixed(8)]}),Object(d.jsxs)("p",{className:"reward-per-click",children:["BTC per click: ",n.toFixed(8)]}),Object(d.jsxs)(a.a,{resize:!1,className:"btc-canvas",children:[Object(d.jsx)(o.a,{enablePan:!0,enableZoom:!0,enableRotate:!0}),Object(d.jsx)("ambientLight",{intensity:.6}),Object(d.jsx)("directionalLight",{color:"red",position:[0,0,4]}),Object(d.jsx)(r.Suspense,{fallback:null,children:Object(d.jsx)(b,{onClick:function(){t(n)}})})]})]})}function u(e){var t=e.name,c=e.reward_per_sec,r=e.amount;return Object(d.jsxs)("div",{className:"bought-item-container",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{children:t}),Object(d.jsxs)("p",{children:[c.toFixed(8)," BTC per sec"]})]}),Object(d.jsxs)("h2",{children:["X",r]})]})}function p(){var e=Object(r.useContext)(O).state.items;return Object(d.jsx)("div",{className:"items",children:e.map((function(e,t){return Object(d.jsx)(u,{name:e.name,reward_per_sec:e.reward_per_second,amount:e.amount})}))})}var x=c(36),h=c.n(x);function f(){return Object(d.jsx)("div",{className:"news",children:Object(d.jsx)(h.a,{gradient:!1,children:["CHINA BANS BITCOIN      ","CHINA BANS BITCOIN MINING      ","SIM\xc3O FROM ESMAE JOINS A PUMP AND DUMP SCHEME      ","DIOGO VER\xcdSSIMO SELLS HIS FIRST NFT COLLECTION FOR OVER 50ETH      ","PEDRO AND MARCO, FOUNDERS OF APPLE 2, ARE JOINING THE NFT SPACE, FIND OUT WHY!      ","MAN FROM PORTO STEALS 500 HELIUM MINERS      ","GRETUA JOINS THE FRENZY AND ADDS 30BTC TO ITS FINANCIAL HOLDINGS      "].map((function(e){return Object(d.jsxs)("p",{children:[e,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]})}))})})}function _(){var e=Object(r.useContext)(O).state,t=e.score,c=e.fiat_score;return Object(d.jsxs)("div",{className:"score",children:[Object(d.jsxs)("p",{children:[t.toFixed(8)," BTC"]}),Object(d.jsxs)("h6",{children:[c.toFixed(5),"$"]})]})}function v(e){var t=e.name,c=e.inc_per_click,n=e.inc_per_sec,s=e.price,i=e.id,j=(e.img,Object(r.useContext)(O)),l=j.buyItem,b=j.state.score;return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsxs)("div",{className:"item-details",children:[Object(d.jsx)("div",{className:"item-image",children:Object(d.jsxs)(a.a,{children:[Object(d.jsx)(o.a,{enablePan:!0,enableZoom:!0,enableRotate:!0}),Object(d.jsx)("ambientLight",{intensity:.6}),Object(d.jsx)("directionalLight",{color:"red",position:[0,0,4]}),Object(d.jsx)(r.Suspense,{fallback:null,children:e.children})]})}),Object(d.jsxs)("div",{className:"item-info",children:[Object(d.jsx)("h4",{children:t}),Object(d.jsxs)("p",{children:["+",n," BTC per second"]}),Object(d.jsxs)("p",{children:["+",c," BTC per click"]})]})]}),Object(d.jsxs)("div",{className:"item-buy",children:[Object(d.jsxs)("p",{children:[s.toFixed(6)," BTC"]}),Object(d.jsx)("button",{disabled:s>b,onClick:function(){l(i,t,n,s)},children:"BUY"})]})]})}function N(e){var t=Object.assign({},e),c=Object(r.useRef)();Object(a.b)((function(e){var t=e.clock;c.current.rotation.z=t.getElapsedTime()}));var n=Object(l.a)("/nft-clicker-game/asicminerdemo.gltf"),s=n.nodes,i=n.materials;return Object(d.jsx)("group",Object(j.a)(Object(j.a)({ref:c},t),{},{dispose:null,children:Object(d.jsx)("mesh",{geometry:s.miner.geometry,material:i.palette,scale:[.8,.8,.8],rotation:[Math.PI/2,0,0]})}))}function S(e){return Object(d.jsxs)("div",{className:"store",children:[Object(d.jsx)(v,{name:"Pneumatic Hammer",id:1,inc_per_sec:1e-6,inc_per_click:"N/A",price:4e-4}),Object(d.jsx)(v,{name:"NVIDIA Graphics Card",id:2,inc_per_sec:2e-6,inc_per_click:"N/A",price:.0104}),Object(d.jsx)(v,{name:"ASIC Miner",id:3,inc_per_sec:1e-5,inc_per_click:"N/A",price:.104,children:Object(d.jsx)(N,{})})]})}function I(e){var t,c=Object(r.useContext)(O),n=c.state,s=c.incrementScore,i=n.reward_per_second,a=function e(){t=setTimeout((function(){s(i/2),e()}),500)};return Object(r.useEffect)((function(){return t&&clearTimeout(t),a(),function(){return clearTimeout(t)}}),[i]),Object(d.jsx)("div",{className:"app-container",children:e.children})}l.a.preload("/asicminerdemo.gltf");var C=c(13),g=c(0),k=c(1),w=c(3),T=c(4),A=1e-8,E=47397,R=function(e){Object(w.a)(c,e);var t=Object(T.a)(c);function c(){var e;Object(g.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={score:A,reward_per_click:1e-6,reward_per_second:0,fiat_score:47397e-8,items:[]},e.incrementScore=function(t){var c=e.state.score+t;e.setState({score:c,fiat_score:c*E})},e.improveRewardPerClick=function(t){var c=e.state.reward_per_click+t;e.setState({reward_per_click:c})},e.improveRewardPerSecond=function(t){var c=e.state.reward_per_second+t;e.setState({reward_per_second:c})},e.buyItem=function(t,c,r,n){if(!(n>e.state.score)){var s=Object(C.a)(e.state.items),i=e.state.reward_per_second+r,a=s.find((function(e){return e.id===t}));a?(a.amount++,a.reward_per_second+=r):s.push({id:t,name:c,amount:1,reward_per_second:r});var o=e.state.score-n;e.setState({items:s,reward_per_second:i,score:o}),console.log(e.state)}},e}return Object(k.a)(c,[{key:"render",value:function(){return Object(d.jsx)(O.Provider,{value:{state:this.state,incrementScore:this.incrementScore,improveRewardPerClick:this.improveRewardPerClick,improveRewardPerSecond:this.improveRewardPerSecond,buyItem:this.buyItem},children:this.props.children})}}]),c}(r.Component),P=R;var y=function(){return Object(d.jsxs)(P,{children:[Object(d.jsxs)(I,{children:[Object(d.jsx)(m,{}),Object(d.jsx)(p,{}),Object(d.jsx)(S,{}),Object(d.jsx)(_,{}),Object(d.jsx)("div",{className:"nft-items"}),Object(d.jsx)("div",{className:"level-items"})]}),Object(d.jsx)(f,{})]})};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.73796c95.chunk.js.map