(()=>{"use strict";var e={766:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"html, body{\n    height: 100%;\n    margin: 0;\n\tpadding: 0;\n}\n\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;  /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n  \n    /* Support for all WebKit browsers. */\n    -webkit-font-smoothing: antialiased;\n    /* Support for Safari and Chrome. */\n    text-rendering: optimizeLegibility;\n  \n    /* Support for Firefox. */\n    -moz-osx-font-smoothing: grayscale;\n  \n    /* Support for IE. */\n    font-feature-settings: 'liga';\n  }\n\n.material-icons.green{color: #0F9D58;}\n.material-icons.blue{color: #4285F4;}\n\n\n\n.material-icons.md-18 { font-size: 18px; }\n.material-icons.md-24 { font-size: 24px; }\n.material-icons.md-36 { font-size: 36px; }\n.material-icons.md-48 { font-size: 48px; }\n.material-icons.md-128 { font-size: 128px; }\n\n\n.content{\n    height: 100%;\n    overflow: hidden;\n    display: flex;\n}\n\nnav{\n    background-color: lightgray;\n    height: 100%;\n    width: 15%;\n    display: flex;\n    flex-direction: column;\n\n}\n\nspan{\n    cursor: pointer;\n}\n\n.content-page{\n    font-size: 80px;\n    margin-left: 5%;\n    width: 65%;\n}\n\n#todo-form{\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    font-size: 55px;\n    margin-left: 5%;\n}\n\ninput, textarea{\n    font-size: 50px;\n}\n\ninput[type=checkbox] {\n    transform: scale(2.5);\n    padding: 10px;\n}\n\nlabel{\n    padding: 10px;\n}\n\nbutton{\n    font-size: 40px; \n    height: 50px;\n}\n\n#todo-display{\n    font-size: 40px;\n    display: column;\n    flex-direction: row;\n}\n\n.todo-item:hover{\n    background-color: gray;\n}\n\ndetails{\n    margin-top: 10%;\n    font-size: 60px;\n}",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],d=o.base?l[0]+o.base:l[0],s=i[d]||0,u="".concat(d," ").concat(s);i[d]=s+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(t[p].references++,t[p].updater(m)):t.push({identifier:u,updater:r(m,o),references:1}),a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var l=o(e,r),d=0;d<i.length;d++){var s=n(i[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};(()=>{n.d(o,{P:()=>I});var e=n(379),t=n.n(e),r=n(795),i=n.n(r),a=n(569),c=n.n(a),l=n(565),d=n.n(l),s=n(216),u=n.n(s),p=n(589),m=n.n(p),f=n(766),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;class g{createInputForm(e,t,n,o,r,i,a,c,l,d){(o=document.createElement("label")).className=n,o.setAttribute("for",r),o.innerText=i,(a=document.createElement(e)).setAttribute("type",t),a.setAttribute("id",c),a.setAttribute("placeholder",l),d.appendChild(o),d.appendChild(a)}createButtonForm(e,t,n){(e=document.createElement("button")).setAttribute("type","button"),e.classList.add(t),e.innerText="Submit",n.appendChild(e)}}class y{createDetails(e,t){let n=document.createElement("details");n.classList.add(e),t.appendChild(n)}createSummary(e,t,n){let o=document.createElement("summary");o.classList.add(e),o.textContent=t,n.appendChild(o)}createP(e,t,n){let o=document.createElement("p");o.classList.add(e),o.textContent=t,n.appendChild(o)}}const v=function(){const e=[];return{createList:(t,n,o,r,i)=>{i=e.length,e.push({title:t,desc:o,date:n,priority:r,itemID:i})},todoArray:e,itemSetup:function(){for(let t=0;t<e.length;t++){(new y).createDetails(`todo-item${[t]}`,I.getSelectors().todoContent);let n=e[t];for(let e in n){let o=new y;"title"==e&&o.createSummary("todo-summary",n.title,document.querySelector(`.todo-item${[t]}`)),"title"!=e&&"priority"!=e&&"itemID"!=e&&(console.log(e),o.createP("todo-para",n[e],document.querySelector(`.todo-item${[t]}`)))}}}}}(),b=function(){function e(){I.getSelectors().contentPage.textContent=""}function t(){if(e(),0==v.todoArray.length)v.createList("Date night","08/14/2021","Go out to dinner with my Fiance","false");else{let e=document.createElement("div");e.id="todo-display",I.getSelectors().contentPage.appendChild(e),v.itemSetup()}}return{newTodo:function(){e();let n=document.createElement("form");n.id="todo-form",I.getSelectors().contentPage.appendChild(n),(new g).createInputForm("input","null","todo-title","todo-title-label","todo-title-input","Title","input","todo-title-input","What do you need to do?",I.getSelectors().formDiv),(new g).createInputForm("input","date","todo-date","todo-date-label","todo-date-input","When?","date","todo-date-input",null,I.getSelectors().formDiv),(new g).createInputForm("textarea",null,"todo-description","todo-desc-label","todo-desc-area","Desciption","desc","todo-desc-area","Describe your activity..",I.getSelectors().formDiv),(new g).createInputForm("input","checkbox","todo-hp","todo-hp-label","todo-hp-radio","High Priority","radio","todo-radio-hp",null,I.getSelectors().formDiv),(new g).createButtonForm("btn","todo-submit-button",I.getSelectors().formDiv),I.getSelectors().todoSubmitBtn.onclick=function(){v.createList(I.getSelectors().todoTitleInpt.value,I.getSelectors().todoDateInpt.value,I.getSelectors().todoDescInpt.value,I.getSelectors().todoHp.checked),t()}},homePage:t}}(),S=function(){b.homePage()},x=function(){b.newTodo()},w=function(e){e.onclick=function(){S()}},C=function(e){e.onclick=function(){x()}},I={init:function(){b.homePage(),w(I.getSelectors().homeBtn),C(I.getSelectors().newListBtn)},getSelectors:function(){return{newListBtn:document.querySelector("#new-list"),homeBtn:document.querySelector("#home"),contentPage:document.querySelector(".content-page"),formDiv:document.querySelector("#todo-form"),todoSubmitBtn:document.querySelector(".todo-submit-button"),todoTitleInpt:document.querySelector("#todo-title-input"),todoDateInpt:document.querySelector("#todo-date-input"),todoDescInpt:document.querySelector("#todo-desc-area"),todoHp:document.querySelector("#todo-radio-hp"),todoContent:document.querySelector("#todo-display")}}};window.onload=I.init})()})();