(this["webpackJsonpnft-clicker-game"]=this["webpackJsonpnft-clicker-game"]||[]).push([[0],{30:function(e,t,c){},40:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var r=c(7),n=c.n(r),s=c(31),i=c.n(s),a=(c(40),c(30),c(14)),o=c(47),d=c(10),j=c(46),l=c(8);function b(e){var t=Object.assign({},e),c=Object(r.useRef)(),s=n.a.useRef(),i=Object(j.a)("/nft-clicker-game/btc.gltf"),o=i.nodes,b=i.materials;return Object(a.b)((function(e){var t=e.clock;s.current.rotation.z=t.getElapsedTime()})),Object(l.jsx)("group",Object(d.a)(Object(d.a)({style:{innerWidth:10},ref:c},t),{},{dispose:null,children:Object(l.jsx)("mesh",{ref:s,geometry:o.Cylinder.geometry,material:b["Material.001"],position:[0,0,0],rotation:[1.65,.25,0],scale:[2.5,.25,2.5]})}))}j.a.preload("/btc.gltf");var m=n.a.createContext();function u(){var e=Object(r.useContext)(m),t=e.incrementScore,c=e.state,n=c.reward_per_click,s=c.reward_per_second;return Object(l.jsxs)("div",{className:"clicker-section",children:[Object(l.jsxs)("p",{className:"reward-per-sec",children:["BTC per second: ",s.toFixed(8)]}),Object(l.jsxs)("p",{className:"reward-per-click",children:["BTC per click: ",n.toFixed(8)]}),Object(l.jsxs)(a.a,{resize:!1,className:"btc-canvas",children:[Object(l.jsx)(o.a,{enablePan:!0,enableZoom:!0,enableRotate:!0}),Object(l.jsx)("ambientLight",{intensity:.6}),Object(l.jsx)("directionalLight",{color:"red",position:[0,0,4]}),Object(l.jsx)(r.Suspense,{fallback:null,children:Object(l.jsx)(b,{onClick:function(){t(n)}})})]})]})}function p(e){var t=e.name,c=e.reward_per_sec,r=e.amount;return Object(l.jsxs)("div",{className:"bought-item-container",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h5",{children:t}),Object(l.jsxs)("p",{children:[c.toFixed(8)," BTC per sec"]})]}),Object(l.jsxs)("h2",{children:["X",r]})]})}function O(){var e=Object(r.useContext)(m).state.items;return Object(l.jsx)("div",{className:"items",children:e.map((function(e,t){return Object(l.jsx)(p,{name:e.name,reward_per_sec:e.reward_per_second,amount:e.amount})}))})}function x(){var e=Object(r.useContext)(m).state,t=e.score,c=e.fiat_score;return Object(l.jsxs)("div",{className:"score",children:[Object(l.jsxs)("p",{children:[t.toFixed(8)," BTC"]}),Object(l.jsxs)("h6",{children:[c.toFixed(5),"$"]})]})}function h(e){var t=e.name,c=e.inc_per_click,n=e.inc_per_sec,s=e.price,i=e.id,a=(e.img,Object(r.useContext)(m)),o=a.buyItem,d=a.state.score;return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsxs)("div",{className:"item-details",children:[Object(l.jsx)("div",{className:"item-image"}),Object(l.jsxs)("div",{className:"item-info",children:[Object(l.jsx)("h4",{children:t}),Object(l.jsxs)("p",{children:["+",n," BTC per second"]}),Object(l.jsxs)("p",{children:["+",c," BTC per click"]})]})]}),Object(l.jsxs)("div",{className:"item-buy",children:[Object(l.jsxs)("p",{children:[s.toFixed(6)," BTC"]}),Object(l.jsx)("button",{disabled:s>d,onClick:function(){o(i,t,n,s)},children:"BUY"})]})]})}function _(e){return Object(l.jsxs)("div",{className:"store",children:[Object(l.jsx)(h,{name:"Pneumatic Hammer",id:1,inc_per_sec:1e-6,inc_per_click:"N/A",price:4e-4}),Object(l.jsx)(h,{name:"NVIDIA Graphics Card",id:2,inc_per_sec:2e-6,inc_per_click:"N/A",price:.0104}),Object(l.jsx)(h,{name:"ASIC Miner",id:3,inc_per_sec:1e-5,inc_per_click:"N/A",price:.104})]})}function f(e){var t,c=Object(r.useContext)(m),n=c.state,s=c.incrementScore,i=n.reward_per_second,a=function e(){t=setTimeout((function(){s(i/2),e()}),500)};return Object(r.useEffect)((function(){return t&&clearTimeout(t),a(),function(){return clearTimeout(t)}}),[i]),Object(l.jsx)("div",{className:"app-container",children:e.children})}var v=c(12),w=c(0),k=c(1),C=c(3),N=c(4),g=1e-8,S=47397,y=function(e){Object(C.a)(c,e);var t=Object(N.a)(c);function c(){var e;Object(w.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={score:g,reward_per_click:1e-6,reward_per_second:0,fiat_score:47397e-8,items:[]},e.incrementScore=function(t){var c=e.state.score+t;e.setState({score:c,fiat_score:c*S})},e.improveRewardPerClick=function(t){var c=e.state.reward_per_click+t;e.setState({reward_per_click:c})},e.improveRewardPerSecond=function(t){var c=e.state.reward_per_second+t;e.setState({reward_per_second:c})},e.buyItem=function(t,c,r,n){if(!(n>e.state.score)){var s=Object(v.a)(e.state.items),i=e.state.reward_per_second+r,a=s.find((function(e){return e.id===t}));a?(a.amount++,a.reward_per_second+=r):s.push({id:t,name:c,amount:1,reward_per_second:r});var o=e.state.score-n;e.setState({items:s,reward_per_second:i,score:o}),console.log(e.state)}},e}return Object(k.a)(c,[{key:"render",value:function(){return Object(l.jsx)(m.Provider,{value:{state:this.state,incrementScore:this.incrementScore,improveRewardPerClick:this.improveRewardPerClick,improveRewardPerSecond:this.improveRewardPerSecond,buyItem:this.buyItem},children:this.props.children})}}]),c}(r.Component),T=y;var B=function(){return Object(l.jsx)(T,{children:Object(l.jsxs)(f,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(O,{}),Object(l.jsx)(_,{}),Object(l.jsx)(x,{}),Object(l.jsx)("div",{className:"nft-items"}),Object(l.jsx)("div",{className:"level-items"})]})})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.b12e7cf7.chunk.js.map