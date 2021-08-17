(()=>{"use strict";var e={766:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(645),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,"html, body{\n    height: 100%;\n    margin: 0;\n\tpadding: 0;\n}\n\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;  /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n  \n    /* Support for all WebKit browsers. */\n    -webkit-font-smoothing: antialiased;\n    /* Support for Safari and Chrome. */\n    text-rendering: optimizeLegibility;\n  \n    /* Support for Firefox. */\n    -moz-osx-font-smoothing: grayscale;\n  \n    /* Support for IE. */\n    font-feature-settings: 'liga';\n  }\n\n.material-icons.green{color: #0F9D58;}\n.material-icons.blue{color: #4285F4;}\n\n\n\n.material-icons.md-18 { font-size: 18px; }\n.material-icons.md-24 { font-size: 24px; }\n.material-icons.md-36 { font-size: 36px; }\n.material-icons.md-48 { font-size: 48px; }\n.material-icons.md-128 { font-size: 128px; }\n\n\n.content{\n    height: 100%;\n    overflow: hidden;\n    display: flex;\n}\n\nnav{\n    background-color: lightgray;\n    height: 100%;\n    width: 15%;\n    display: flex;\n    flex-direction: column;\n\n}\n\nspan{\n    cursor: pointer;\n}\n\n.content-page{\n    font-size: 60px;\n    margin-left: 5%;\n    width: 65%;\n}\n\n#todo-form{\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    font-size: 45px;\n    margin-left: 5%;\n}\n\ninput, textarea, select{\n    font-size: 30px;\n}\n\ninput[type=checkbox] {\n    transform: scale(2.5);\n    padding: 10px;\n}\n\nlabel{\n    padding: 10px;\n}\n\nbutton{\n    font-size: 40px; \n    height: 50px;\n}\n\n#todo-display{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    height: 100%;\n}\n\n.todo-item:hover{\n    background-color: gray;\n}\n\ndetails{\n    margin-top: 10%;\n    font-size: 60px;\n}\n\n.cat-div{\n    margin-top: 5rem;\n    margin: 20px;\n    box-shadow: 10px 10px 10px black;\n    overflow: hidden;\n    width: 20rem;\n    height: 20rem;\n    background-color: slategray;\n    text-align: center;\n}\n.cat-div:hover{\n    cursor: pointer;\n    background-color: lightgray;\n}",""]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&r[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),t.push(l))}},t}},379:e=>{var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],d=n.base?l[0]+n.base:l[0],s=a[d]||0,u="".concat(d," ").concat(s);a[d]=s+1;var m=o(u),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==m?(t[m].references++,t[m].updater(p)):t.push({identifier:u,updater:r(p,n),references:1}),i.push(u)}return i}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var a=n(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=o(a[i]);t[c].references--}for(var l=n(e,r),d=0;d<a.length;d++){var s=o(a[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n=o.css,r=o.media,a=o.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};(()=>{o.d(n,{P:()=>w});var e=o(379),t=o.n(e),r=o(795),a=o.n(r),i=o(569),c=o.n(i),l=o(565),d=o.n(l),s=o(216),u=o.n(s),m=o(589),p=o.n(m),f=o(766),g={};g.styleTagTransform=p(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;class h{createInputForm(e,t,o,n,r,a,i,c,l,d,s){(r=document.createElement("label")).className=n,r.setAttribute("for",a),r.innerText=i,(c=document.createElement(e)).setAttribute("type",t),c.setAttribute("id",l),c.setAttribute("placeholder",d),c.required=o,s.appendChild(r),s.appendChild(c)}createButtonForm(e,t,o){(e=document.createElement("button")).setAttribute("type","submit"),e.classList.add(t),e.innerText="Submit",o.appendChild(e)}}class y{createDiv(e,t){let o=document.createElement("div");o.classList.add("cat-div"),o.textContent=e,t.appendChild(o)}createDetails(e,t){let o=document.createElement("details");o.classList.add(e),t.appendChild(o)}createSummary(e,t,o){let n=document.createElement("summary");n.classList.add(e),n.textContent=t,o.appendChild(n)}createP(e,t,o){let n=document.createElement("p");n.classList.add(e),n.textContent=t,o.appendChild(n)}}const v=function(){const e=[],t=[],o=[];function n(){t.length=0;for(let o=0;o<e.length;o++){let n=e[o];for(let e in n)if(n[e]==document.querySelector(".cat-header").textContent){t.push(n);break}}}function r(){return[...new Set(o)]}return{createList:(t,o,n,r,a,i,c)=>{c=e.length,e.push({cat:t,title:o,date:n,time:r,desc:a,priority:i,itemID:c})},todoArray:e,itemSetup:function(){e.length>1&&e.forEach((function(t,o){1==t.priority&&(e.splice(o,1),e.unshift(t))})),n();for(let e=0;e<t.length;e++){(new y).createDetails(`todo-item${[e]}`,w.getSelectors().todoContainer);let o=t[e];for(let t in o){let n=new y;"title"==t&&(1==o.priority?n.createSummary("todo-summary-hp",`⚠️ ${o.title}`,document.querySelector(`.todo-item${[e]}`)):n.createSummary("todo-summary",o.title,document.querySelector(`.todo-item${[e]}`))),"title"!=t&&"priority"!=t&&"itemID"!=t&&"time"!=t&&"cat"!=t&&("desc"==t?n.createP("todo-para",o[t],document.querySelector(`.todo-item${[e]}`)):n.createP("todo-para",`${o.date} at ${o.time}`,document.querySelector(`.todo-item${[e]}`)))}}},createNewCategory:function(e){o.push(e)},setupCategory:function(){let e=document.createElement("option");e.textContent="New category",document.createElement("option"),w.getSelectors().todoCategory.appendChild(e);let t=r();if(t.length>0)for(let e=0;e<t.length;e++){let o=document.createElement("option");o.textContent=t[e],w.getSelectors().todoCategory.appendChild(o)}},categoryArray:o,categoryDisplay:function(){let e=r();for(let t=0;t<e.length;t++)(new y).createDiv(e[t],w.getSelectors().todoContent),document.querySelectorAll(".cat-div").forEach((e=>e.addEventListener("click",(e=>{b.showCatPage(e.target.textContent)}))))},todoBuffer:t,selectCorrectItems:n}}(),S=function(){function e(){w.getSelectors().contentPage.textContent=""}function t(){if(e(),console.log(v.todoBuffer),0==v.categoryArray.length)w.getSelectors().contentPage.textContent="Click the + button to add a new item!";else{let e=document.createElement("div");e.id="todo-display",w.getSelectors().contentPage.appendChild(e),v.categoryDisplay()}}return{newTodo:function(){e();let o=document.createElement("form");o.id="todo-form",w.getSelectors().contentPage.appendChild(o),(new h).createInputForm("select","select",!0,"todo-category","todo-category-label","todo-category-input","Category:","select","todo-category-input",null,w.getSelectors().formDiv),(new h).createInputForm("input","null",!0,"cat-name",null,null,null,"inputCat","cat-name","Enter category name",w.getSelectors().formDiv),w.getSelectors().todoCatName.style.visibility="visible",(new h).createInputForm("input","null",!0,"todo-title","todo-title-label","todo-title-input","Title","input","todo-title-input","What do you need to do?",w.getSelectors().formDiv),(new h).createInputForm("input","date",!0,"todo-date","todo-date-label","todo-date-input","When?","date","todo-date-input",null,w.getSelectors().formDiv),(new h).createInputForm("input","time",!0,"todo-time","todo-time-label","todo-time-input","What time?","time","todo-time-input",null,w.getSelectors().formDiv),(new h).createInputForm("textarea",null,!1,"todo-description","todo-desc-label","todo-desc-area","Desciption","desc","todo-desc-area","Describe your activity..",w.getSelectors().formDiv),(new h).createInputForm("input","checkbox",!1,"todo-hp","todo-hp-label","todo-hp-radio","High Priority","radio","todo-radio-hp",null,w.getSelectors().formDiv),(new h).createButtonForm("btn","todo-submit-button",w.getSelectors().formDiv),w.getSelectors().todoCategory.addEventListener("change",(e=>{switch(e.target.value){case"New category":w.getSelectors().todoCatName.style.visibility="visible";break;default:w.getSelectors().todoCatName.style.visibility="hidden"}})),w.getSelectors().todoSubmitBtn.onclick=function(){if(""!=w.getSelectors().todoTitleInpt.value&&""!=w.getSelectors().todoDateInpt.value&&""!=w.getSelectors().todoTimeInpt.value)switch(w.getSelectors().todoCatName.style.visibility){case"visible":v.createList(w.getSelectors().todoCatName.value,w.getSelectors().todoTitleInpt.value,w.getSelectors().todoDateInpt.value,w.getSelectors().todoTimeInpt.value,w.getSelectors().todoDescInpt.value,w.getSelectors().todoHp.checked,v.todoArray.length),v.createNewCategory(w.getSelectors().todoCatName.value);break;case"hidden":v.createList(w.getSelectors().todoCategory.value,w.getSelectors().todoTitleInpt.value,w.getSelectors().todoDateInpt.value,w.getSelectors().todoTimeInpt.value,w.getSelectors().todoDescInpt.value,w.getSelectors().todoHp.checked,v.todoArray.length),v.createNewCategory(w.getSelectors().todoCategory.value)}t()},v.setupCategory()},homePage:t,categoryPage:function(t){e();let o=document.createElement("h1");o.classList.add("cat-header"),o.textContent=t;let n=document.createElement("div");n.id="todo-display",w.getSelectors().contentPage.appendChild(n),w.getSelectors().todoContent.appendChild(o);let r=document.createElement("div");r.id="todo-container",w.getSelectors().todoContent.appendChild(r),w.getSelectors().todoContent.style.flexDirection="column",v.itemSetup()}}}(),b={home:function(){S.homePage()},newTask:function(){S.newTodo()},showCatPage:function(e){S.categoryPage(e)}},C=function(e){e.onclick=function(){b.home()}},x=function(e){e.onclick=function(){b.newTask()}},w={init:function(){S.homePage(),C(w.getSelectors().homeBtn),x(w.getSelectors().newListBtn)},getSelectors:function(){const e=document.querySelector("#new-list"),t=document.querySelector("#home"),o=document.querySelector(".content-page"),n=document.querySelector("#todo-form"),r=document.querySelector(".todo-submit-button"),a=document.querySelector("#todo-title-input"),i=document.querySelector("#todo-date-input"),c=document.querySelector("#todo-time-input"),l=document.querySelector("#todo-desc-area"),d=document.querySelector("#todo-radio-hp"),s=document.querySelector("#todo-display"),u=document.querySelector("#todo-container");return{newListBtn:e,homeBtn:t,contentPage:o,formDiv:n,todoSubmitBtn:r,todoTitleInpt:a,todoDateInpt:i,todoTimeInpt:c,todoDescInpt:l,todoHp:d,todoContent:s,todoCategory:document.querySelector("#todo-category-input"),todoCatName:document.querySelector("#cat-name"),todoContainer:u}}};window.onload=w.init})()})();