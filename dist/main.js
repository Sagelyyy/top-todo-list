(()=>{"use strict";var t={766:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(645),r=n.n(o)()((function(t){return t[1]}));r.push([t.id,"html, body{\n    height: 100%;\n    margin: 0;\n\tpadding: 0;\n}\n\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;  /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n  \n    /* Support for all WebKit browsers. */\n    -webkit-font-smoothing: antialiased;\n    /* Support for Safari and Chrome. */\n    text-rendering: optimizeLegibility;\n  \n    /* Support for Firefox. */\n    -moz-osx-font-smoothing: grayscale;\n  \n    /* Support for IE. */\n    font-feature-settings: 'liga';\n  }\n\n.material-icons.green{color: #0F9D58;}\n.material-icons.blue{color: #4285F4;}\n\n\n\n.material-icons.md-18 { font-size: 18px; }\n.material-icons.md-24 { font-size: 24px; }\n.material-icons.md-36 { font-size: 36px; }\n.material-icons.md-48 { font-size: 48px; }\n.material-icons.md-128 { font-size: 128px; }\n\n\n.content{\n    height: 100%;\n    overflow: hidden;\n    display: flex;\n}\n\nnav{\n    background-color: lightgray;\n    height: 100%;\n    width: 15%;\n    display: flex;\n    flex-direction: column;\n\n}\n\nspan{\n    cursor: pointer;\n}\n\n.content-page{\n    font-size: 80px;\n    margin-left: 10%;\n}\n\n#todo-form{\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    font-size: 55px;\n    margin-left: 10%;\n}\n\ninput, textarea{\n    font-size: 50px;\n}\n\ninput[type=checkbox] {\n    transform: scale(2.5);\n    padding: 10px;\n}\n\nlabel{\n    padding: 10px;\n}\n\nbutton{\n    font-size: 40px; \n    height: 50px;\n}",""]);const i=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],c=0;c<t.length;c++){var l=t[c],d=o.base?l[0]+o.base:l[0],s=i[d]||0,u="".concat(d," ").concat(s);i[d]=s+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(e[p].references++,e[p].updater(f)):e.push({identifier:u,updater:r(f,o),references:1}),a.push(u)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var l=o(t,r),d=0;d<i.length;d++){var s=n(i[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=l}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var o={};(()=>{n.d(o,{P:()=>I});var t=n(379),e=n.n(t),r=n(795),i=n.n(r),a=n(569),c=n.n(a),l=n(565),d=n.n(l),s=n(216),u=n.n(s),p=n(589),f=n.n(p),m=n(766),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;class g{createInputForm(t,e,n,o,r,i,a,c,l,d){(o=document.createElement("label")).className=n,o.setAttribute("for",r),o.innerText=i,(a=document.createElement(t)).setAttribute("type",e),a.setAttribute("id",c),a.setAttribute("placeholder",l),d.appendChild(o),d.appendChild(a)}createButtonForm(t,e,n){(t=document.createElement("button")).setAttribute("type","button"),t.classList.add(e),t.innerText="Submit",n.appendChild(t)}}const v=function(){const t=[];return{createList:(e,n,o,r)=>{t.push({title:e,desc:o,date:n,priority:r})},todoArray:t}}(),b=function(){function t(){I.getSelectors().contentPage.textContent=""}return{newTodo:function(){t();let e=document.createElement("form");e.id="todo-form",I.getSelectors().contentPage.appendChild(e),(new g).createInputForm("input","null","todo-title","todo-title-label","todo-title-input","Title","input","todo-title-input","What do you need to do?",I.getSelectors().formDiv),(new g).createInputForm("input","date","todo-date","todo-date-label","todo-date-input","When?","date","todo-date-input",null,I.getSelectors().formDiv),(new g).createInputForm("textarea",null,"todo-description","todo-desc-label","todo-desc-area","Desciption","desc","todo-desc-area","Describe your activity..",I.getSelectors().formDiv),(new g).createInputForm("input","checkbox","todo-hp","todo-hp-label","todo-hp-radio","High Priority","radio","todo-radio-hp",null,I.getSelectors().formDiv),(new g).createButtonForm("btn","todo-submit-button",I.getSelectors().formDiv),I.getSelectors().todoSubmitBtn.onclick=function(){v.createList(I.getSelectors().todoTitleInpt.value,I.getSelectors().todoDateInpt.value,I.getSelectors().todoDescInpt.value,I.getSelectors().todoHp.checked),console.log(v.todoArray)}},homePage:function(){t(),0==v.todoArray.length?I.getSelectors().contentPage.textContent="Click the + button to add a new item!":v.todoArray.forEach((t=>console.log(t)))}}}(),y=function(){b.homePage()},x=function(){b.newTodo()},S=function(t){t.onclick=function(){y()}},w=function(t){t.onclick=function(){x()}},I={init:function(){b.homePage(),S(I.getSelectors().homeBtn),w(I.getSelectors().newListBtn)},getSelectors:function(){return{newListBtn:document.querySelector("#new-list"),homeBtn:document.querySelector("#home"),contentPage:document.querySelector(".content-page"),formDiv:document.querySelector("#todo-form"),todoSubmitBtn:document.querySelector(".todo-submit-button"),todoTitleInpt:document.querySelector("#todo-title-input"),todoDateInpt:document.querySelector("#todo-date-input"),todoDescInpt:document.querySelector("#todo-desc-area"),todoHp:document.querySelector("#todo-radio-hp")}}};window.onload=I.init})()})();