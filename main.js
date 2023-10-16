(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;700&family=Poppins:wght@300;400;500;600;700&display=swap);"]),a.push([n.id,"@import url(https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css);"]),a.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: grey;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.bord {\n  position: relative;\n  background: rgb(63, 251, 208);\n  background: radial-gradient(\n    circle,\n    rgba(63, 251, 208, 1) 0%,\n    rgba(82, 166, 178, 1) 100%,\n    rgba(70, 220, 252, 1) 100%\n  );\n  width: 1300px;\n  height: 750px;\n  display: flex;\n  align-items: center;\n  border-radius: 40px;\n  box-shadow: 20px 20px 50px #878787;\n  padding: 15px;\n  font-family: poppins;\n}\n.right {\n  height: 720px;\n  width: 950px;\n  border-radius: 25px;\n  background: #ffffff;\n  box-shadow: 30px 30px 50px #878787;\n  margin-left: 15px;\n}\n.left {\n  color: #ffffff;\n  width: 305px;\n  height: 720px;\n  border-radius: 25px;\n  overflow: hidden;\n}\n\n.left img {\n  margin-right: 10px;\n}\n\n.left-projects {\n  height: 500px;\n  overflow-y: scroll;\n}\n.left-projects::-webkit-scrollbar {\n  display: none; /* Safari and Chrome */\n}\n\n.left-list-item {\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  background-color: #fff;\n  color: black;\n  border-radius: 10px;\n  cursor: pointer;\n  margin: 4px;\n  padding: 10px;\n}\n.left-list-item:hover {\n  filter: brightness(90%);\n}\n\n.upper-line {\n  background-color: #fff;\n  height: 3px;\n}\n.down-line {\n  background-color: #fff;\n  height: 3px;\n}\n\nform {\n  position: absolute;\n  bottom: 25px;\n  display: flex;\n  align-items: center;\n  margin: 4px;\n}\n\n.list-input {\n  background: local;\n  font-size: 20px;\n  border: none;\n  border-bottom: 2px solid black;\n  padding: 5px;\n}\n.list-input:focus {\n  outline: none;\n}\n\n.btn {\n  background: local;\n  border: none;\n  font-size: 30px;\n  color: black;\n  cursor: pointer;\n}\n.create {\n  margin-right: 3px;\n  padding-top: 3px;\n}\n.delete {\n  font-size: 20px;\n  color: red;\n  border: 1px solid white;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 4px;\n}\n.delete:hover {\n  background-color: red;\n  color: white;\n  border: none;\n}\n\n.left-projects .active-list {\n  filter: brightness(80%);\n}\n\n/* User Pic */\n.card {\n  width: 270px;\n  height: 70px;\n  margin: 20px 10px;\n}\n\n.card_load {\n  width: 70px;\n  height: 70px;\n  position: relative;\n  float: left;\n  background: linear-gradient(\n    120deg,\n    #e5e5e5 30%,\n    #f0f0f0 38%,\n    #f0f0f0 40%,\n    #e5e5e5 48%\n  );\n  border-radius: 50%;\n  background-size: 200% 100%;\n  background-position: 100% 0;\n  animation: load89234 2s infinite;\n}\n\n.card_load_extreme_title {\n  width: 180px;\n  height: 10px;\n  position: relative;\n  float: right;\n  border-radius: 5px;\n  background: linear-gradient(\n    120deg,\n    #e5e5e5 30%,\n    #f0f0f0 38%,\n    #f0f0f0 40%,\n    #e5e5e5 48%\n  );\n  background-size: 200% 100%;\n  background-position: 100% 0;\n  animation: load89234 2s infinite;\n}\n\n.card_load_extreme_descripion {\n  width: 180px;\n  height: 47px;\n  position: relative;\n  float: right;\n  border-radius: 5px;\n  background: linear-gradient(\n    120deg,\n    #e5e5e5 30%,\n    #f0f0f0 38%,\n    #f0f0f0 40%,\n    #e5e5e5 48%\n  );\n  margin-top: 10px;\n  background-size: 200% 100%;\n  background-position: 100% 0;\n  animation: load89234 2s infinite;\n}\n\n@keyframes load89234 {\n  100% {\n    background-position: -100% 0;\n  }\n}\n\n.title {\n  margin: 30px;\n}\n.task {\n  display: flex;\n  align-items: center;\n  background-color: grey;\n  color: white;\n  margin: 0px 30px 4px 30px;\n  border-radius: 10px;\n  font-size: 14px;\n}\n.line-throw {\n  text-decoration: 2px line-through;\n}\n\n.task > label {\n  margin: 12px;\n}\n\n/* Cool Check  */\n/* Hide the default checkbox */\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.container {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  font-size: 1.5rem;\n  user-select: none;\n}\n\n/* Create a custom checkbox */\n.checkmark {\n  --clr: rgb(63, 251, 208);\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 1em;\n  width: 1em;\n  background-color: #fff;\n  border-radius: 50%;\n  transition: 300ms;\n}\n\n/* When the checkbox is checked, add a blue background */\n.container input:checked ~ .checkmark {\n  background-color: var(--clr);\n  animation: pulse 500ms ease-in-out;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n  content: "";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n.container input:checked ~ .checkmark:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n  left: 0.35em;\n  top: 0.1em;\n  width: 0.2em;\n  height: 0.5em;\n  border: solid black;\n  border-width: 0 0.15em 0.15em 0;\n  transform: rotate(45deg);\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 #3ffbd070;\n    rotate: 20deg;\n  }\n\n  50% {\n    rotate: -20deg;\n  }\n\n  75% {\n    box-shadow: 0 0 0 10px #3ffbd040;\n  }\n\n  100% {\n    box-shadow: 0 0 0 13px #3ffbd010;\n    rotate: 0;\n  }\n}\n\n/* Checkboxes */\n[type="checkbox"] {\n  opacity: 0;\n  position: absolute;\n}\n.task label {\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n}\n\n.custom-checkbox {\n  --size: 1em;\n  display: inline-block;\n  width: var(--size);\n  height: var(--size);\n  margin-right: var(--size);\n  cursor: pointer;\n  border: 2px solid currentColor;\n  border-radius: 50%;\n  transform: scale(1);\n  transition: transform 300ms ease-in-out;\n}\n.task:hover .custom-checkbox {\n  transform: scale(1.2);\n  color: blue;\n}\n[type="checkbox"]:checked + label .custom-checkbox {\n  background: blue;\n  border-color: blue;\n  box-shadow: inset 0 0 0px 2px white;\n}\n[type="checkbox"]:checked + label {\n  opacity: 0.9;\n}\n\n.task label::after {\n  content: "";\n  position: absolute;\n  left: 1.6em;\n  right: 0;\n  height: 3px;\n  background: white;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 150ms ease-in-out;\n}\n\n[type="checkbox"]:checked + label::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n',""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=document.querySelector("[left-list]"),g=document.querySelector("[data-new-list-form"),b=document.querySelector("[data-new-list-input"),x=document.querySelector("[data-delete-list-button]"),k=document.querySelector("[data-list-display-container]"),v=document.querySelector("[data-list-title]"),y=document.querySelector("[data-task]"),w=document.getElementById("task-template"),S=document.querySelector("[data-new-task-form]"),C=document.querySelector("[data-new-task-input]"),E="left.lists",z="left.selectedListId";let I=JSON.parse(localStorage.getItem(E))||[],L=localStorage.getItem(z);function q(){localStorage.setItem(E,JSON.stringify(I)),localStorage.setItem(z,L)}function T(){_(m),I.forEach((n=>{const e=document.createElement("div");e.dataset.listId=n.id,e.classList.add("left-list-item"),e.innerText=n.name,n.id===L&&e.classList.add("active-list"),m.appendChild(e)}));const n=I.find((n=>n.id===L));null==L?k.style.display="none":(k.style.display="",v.innerText=n.name),_(y),function(n){n.tasks.forEach((n=>{const e=document.importNode(w.content,!0),t=e.querySelector("input");t.id=n.id,t.checked=n.complete;const r=e.querySelector("label");r.htmlFor=n.id,r.append(n.name),y.appendChild(e)}))}(n)}function N(){q(),T()}function _(n){for(;n.firstChild;)n.removeChild(n.firstChild)}m.addEventListener("click",(n=>{"div"===n.target.tagName.toLowerCase()&&(L=n.target.dataset.listId,N())})),y.addEventListener("click",(n=>{"input"===n.target.tagName.toLowerCase()&&(I.find((n=>n.id===L)).tasks.find((e=>e.id===n.target.id)).complete=n.target.checked,q())})),g.addEventListener("submit",(n=>{n.preventDefault();const e=b.value;if(null==e||""===e)return;const t=(r=e,{id:Date.now().toString(),name:r,tasks:[]});var r;b.value=null,I.push(t),N()})),S.addEventListener("submit",(n=>{n.preventDefault();const e=C.value;if(null==e||""===e)return;const t=(r=e,{id:Date.now().toString(),name:r,complete:!1});var r;C.value=null,I.find((n=>n.id===L)).tasks.push(t),N()})),x.addEventListener("click",(n=>{I=I.filter((n=>n.id!==L)),L=null,N()})),T()})()})();