(function(e){function t(t){for(var n,r,i=t[0],u=t[1],c=t[2],p=0,h=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,i=1;i<s.length;i++){var u=s[i];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},o={app:0},a=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/bot-bakery/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("b3c3"),o=s.n(n);o.a},"0a2f":function(e,t,s){},"0e21":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("ChatBox")],1)},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"chat-box"},[n("img",{staticClass:"botimg",attrs:{src:s("9ded"),alt:"bot"}}),n("h1",{staticClass:"title"},[e._v("PASTELITO-BOT")]),n("div",{staticClass:"chat-box-list-container"},[n("ul",{staticClass:"chat-box-list"},e._l(e.messages,(function(t,s){return n("li",{key:s,staticClass:"message"},[n("p",{class:t.type},[n("span",{class:t.author},[e._v(" "+e._s(t.text))])])])})),0)]),e.messages.length<2?n("div",{staticClass:"chat-inputs row justify-center"},[n("q-input",{staticClass:"col-3",attrs:{type:"text",color:"#68a0ba",clearable:"",filled:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendName(t)}},model:{value:e.personName,callback:function(t){e.personName=t},expression:"personName"}})],1):e._e(),e.userSelect?n("div",{staticClass:"chat-btns q-gutter-sm row justify-center"},[n("q-btn",{staticClass:"col-2",attrs:{icon:"clear",color:"red-5",label:"No"},on:{click:function(t){return e.userSelectNo()}}}),n("q-btn",{staticClass:"col-2",attrs:{icon:"done",color:"green-5",label:"SI"},on:{click:function(t){return e.userSelectYes()}}})],1):e._e()])},i=[],u=s("bc3a"),c=s.n(u),l={name:"ChatBox",data:function(){return{personName:null,messages:[{text:"Hola, ¿como te llamas?",author:"bot",type:"left"}],dialogs:{bot:["Encantado de conocerte ","Yo soy Pastelito-Bot","Por cierto, ¿tienes hambre?"],human:[],step:0},userSelect:!1,time:null}},methods:{sendName:function(){var e=this;this.messages.push({text:"Me llamo ".concat(this.personName),author:"human",type:"right"}),this.time=setInterval((function(){e.nextDialog(),3==e.dialogs.step&&(e.stopStep(),e.userSelect=!0)}),2e3)},stopStep:function(){clearInterval(this.time)},userSelectYes:function(){var e=this;this.userSelect=!1,this.messages.push({text:"Si, ¡me muero de hambre!",author:"human",type:"right"}),setTimeout((function(){c.a.get("https://cors-anywhere.herokuapp.com/https://xz94zfs6u8.execute-api.eu-west-1.amazonaws.com/default/myBakery").then((function(t){var s=t.data;e.messages.push({text:"¡Seguro que te gusta un buen ".concat(s,"!"),author:"bot",type:"left"})})).catch((function(t){console.error("Error en coger de la API la comida",t),e.userSelect=!0,e.messages.push({text:"¡Ups! parece que tengo un error en mis circuitos, espera un rato hasta que lo arregle",author:"bot",type:"left"})}))}),2e3)},userSelectNo:function(){var e=this;this.messages.push({text:"No tengo mucha hambre",author:"human",type:"right"}),setTimeout((function(){e.messages.push({text:"¿Seguro que no?, ¡tengo unas sugerencias que te haran la boca agua!",author:"bot",type:"left"})}),2e3),this.userSelect=!0},nextDialog:function(){0==this.dialogs.step?(this.messages.push({text:this.dialogs.bot[this.dialogs.step]+this.personName,author:"bot",type:"left"}),this.dialogs.step++):(this.messages.push({text:this.dialogs.bot[this.dialogs.step],author:"bot",type:"left"}),this.dialogs.step++)}}},p=l,h=(s("839e"),s("2877")),f=s("fe09"),m=Object(h["a"])(p,r,i,!1,null,"e2cae838",null),d=m.exports;m.options.components=Object.assign({QInput:f["b"],QBtn:f["a"]},m.options.components||{});var g={name:"app",components:{ChatBox:d}},b=g,y=(s("034f"),Object(h["a"])(b,o,a,!1,null,null,null)),v=y.exports,x=(s("0e21"),s("df1a")),S=(s("e54f"),s("b05d"));n["a"].use(S["a"],{config:{},components:{},directives:{},plugins:{},lang:x["a"]}),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(v)}}).$mount("#app")},"839e":function(e,t,s){"use strict";var n=s("0a2f"),o=s.n(n);o.a},"9ded":function(e,t,s){e.exports=s.p+"img/bot.3259b2ba.png"},b3c3:function(e,t,s){}});
//# sourceMappingURL=app.e94ade55.js.map