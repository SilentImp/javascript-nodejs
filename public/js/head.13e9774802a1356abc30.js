!function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n=window.webpackJsonp;window.webpackJsonp=function(o,a){for(var s,u,c=0,l=[];c<o.length;c++)u=o[c],i[u]&&l.push.apply(l,i[u]),i[u]=0;for(s in a)t[s]=a[s];for(n&&n(o,a);l.length;)l.shift().call(null,e);a[0]&&(r[0]=0,e(0))};var r={},i={4:0};return e.e=function(t,n){if(0===i[t])return n.call(null,e);if(void 0!==i[t])i[t].push(n);else{i[t]=[n];var r=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.src=e.p+""+t+".13e9774802a1356abc30.js",r.appendChild(o)}},e.m=t,e.c=r,e.p="/js/",e(0)}([function(t,e,n){"use strict";n(13),n(2),e.init=n(3),e.login=n(4),n(5),e.Modal=n(6),e.fontTest=n(7),e.resizeOnload=n(14),n(8),n(9),n(10),n(11),n(12),n(15).init(),window.head=t.exports},,function(){"use strict";document.addEventListener("click",function(t){for(var e=t.target;e;){if(e.className.match(/_unready\b/))return void t.preventDefault();e=e.parentElement}}),document.addEventListener("submit",function(t){t.target.className.match(/_unready\b/)&&event.preventDefault()})},function(t){"use strict";function e(t){r[t]?r[t]():i[t]=!0}function n(t,e){i[t]?e():r[t]=e}var r={},i={};t.exports={whenReady:e,addHandler:n}},function(t,e,n){"use strict";function r(){var t=new o,e=new a;t.setContent(e.elem),e.start(),n.e(5,function(){t.remove();var e=n(40).AuthModal;new e},0)}var i=n(3),o=n(6),a=n(31);i.addHandler("login",function(){var t=document.querySelector(".sitetoolbar__login");t.onclick=function(t){t.preventDefault(),r()}}),t.exports=r},function(t){"use strict";function e(){var t=document.createElement("form");t.innerHTML='<input type="hidden" name="_csrf" value="'+window.csrf+'">',t.method="POST",t.action="/auth/logout",document.body.appendChild(t),t.submit()}document.addEventListener("click",function(t){t.target.hasAttribute("data-action-user-logout")&&(t.preventDefault(),e())}),t.exports=e},function(t){"use strict";function e(){this.render(),this.onClick=this.onClick.bind(this),this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.elem.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onDocumentKeyDown)}e.prototype.render=function(){document.body.insertAdjacentHTML("beforeEnd",'<div class="modal"><div class="modal-dialog"></div></div>'),this.elem=document.body.lastChild,this.contentElem=this.elem.lastChild},e.prototype.onClick=function(t){t.target.classList.contains("close-button")&&this.remove()},e.prototype.onDocumentKeyDown=function(t){27==t.keyCode&&(t.preventDefault(),this.remove())},e.prototype.showOverlay=function(){this.contentElem.classList.add("modal-overlay")},e.prototype.hideOverlay=function(){this.contentElem.classList.remove("modal-overlay")},e.prototype.setContent=function(t){"string"==typeof t?this.contentElem.innerHTML=t:(this.contentElem.innerHTML="",this.contentElem.appendChild(t));var e=this.contentElem.querySelector("[autofocus]");e&&e.focus()},e.prototype.remove=function(){document.body.removeChild(this.elem),document.removeEventListener("keydown",this.onDocumentKeyDown)},t.exports=e},function(t){"use strict";t.exports=function(){function t(){n!=e.offsetWidth?document.body.classList.remove("no-icons"):setTimeout(t,100)}var e=document.createElement("span");document.body.appendChild(e),e.className="font-test",e.style.fontFamily="serif";var n=e.offsetWidth;e.style.fontFamily="",t()}},function(){"use strict";function t(){o&&console.log.apply(console,arguments)}function e(){t("compactifySidebar");var e=document.querySelector(".sidebar"),n=e.querySelector(".sidebar__content"),r=e.querySelector(".sidebar__inner"),i=e.classList.contains("sidebar_sticky-footer"),o=e.classList.contains("sidebar_compact");if(o){var a;a=i?n.lastElementChild.getBoundingClientRect().top-n.lastElementChild.previousElementSibling.getBoundingClientRect().bottom:n.getBoundingClientRect().bottom-n.lastElementChild.getBoundingClientRect().bottom,t("decompact?",a),a>150&&e.classList.remove("sidebar_compact")}else t(r.scrollHeight,r.clientHeight),r.scrollHeight>r.clientHeight&&(t("compact!"),e.classList.add("sidebar_compact"))}function n(){var n=document.querySelector(".sitetoolbar");if(!n)return void t("no sitetoolbar");var i=(n.offsetHeight,document.querySelector(".sidebar"));i&&(i.style.top=Math.max(n.getBoundingClientRect().bottom,0)+"px",e()),r()}function r(){var t=document.documentElement.clientWidth<=a,e=document.querySelector('meta[name="viewport"]').content;e=e.replace(/user-scalable=\w+/,"user-scalable="+(t?"yes":"no")),document.querySelector('meta[name="viewport"]').content=e}var i,o=!1,a=840;!function(){function e(){t("onWindowScrollAndResizeThrottled",i),i||(i=window.requestAnimationFrame(function(){n(),i=null}))}window.addEventListener("scroll",e),window.addEventListener("resize",e),document.addEventListener("DOMContentLoaded",e)}()},function(){"use strict";function t(){document.querySelector(".page").classList.toggle("page_sidebar_on"),document.querySelector(".page").classList.contains("page_sidebar_on")?delete localStorage.noSidebar:localStorage.noSidebar=1}function e(e){void 0!==e.target.dataset.sidebarToggle&&t()}function n(e){if(!~["INPUT","TEXTAREA","SELECT"].indexOf(document.activeElement.tagName)&&e.keyCode=="S".charCodeAt(0)){if(~navigator.userAgent.toLowerCase().indexOf("mac os x")){if(!e.metaKey||!e.altKey)return}else if(!e.altKey)return;t(),e.preventDefault()}}document.addEventListener("click",e),document.addEventListener("keydown",n)},function(t,e,n){"use strict";function r(t){if(!~["INPUT","TEXTAREA","SELECT"].indexOf(document.activeElement.tagName)&&t[a+"Key"]){var e=null;switch(t.keyCode){case 37:e="prev";break;case 39:e="next";break;default:return}var n=document.querySelector('link[rel="'+e+'"]');n&&(document.location=n.href,t.preventDefault())}}function i(){var t,e=a[0].toUpperCase()+a.slice(1),n=document.querySelector('link[rel="next"]');n&&(t=document.querySelector('a[href="'+n.getAttribute("href")+'"] .page__nav-text-shortcut'),t.innerHTML=e+' + <span class="page__nav-text-arr">→</span>');var r=document.querySelector('link[rel="prev"]');r&&(t=document.querySelector('a[href="'+r.getAttribute("href")+'"] .page__nav-text-shortcut'),t.innerHTML=e+' + <span class="page__nav-text-arr">←</span>')}var o=n(30),a=~navigator.userAgent.toLowerCase().indexOf("mac os x")?"ctrl":"alt";o(document,{onRight:function(){var t=document.querySelector('link[rel="prev"]');t&&(document.location=t.href)},onLeft:function(){var t=document.querySelector('link[rel="next"]');t&&(document.location=t.href)}}),document.addEventListener("keydown",r),document.addEventListener("DOMContentLoaded",i)},function(){"use strict";var t;document.addEventListener("mouseover",function(e){var n=e.target.closest("[data-add-class-on-hover]");n&&(t=n,n.classList.add("hover"))}),document.addEventListener("touchend",function(){setTimeout(function(){t&&(t.classList.remove("hover"),t=null)},500)}),document.addEventListener("mouseout",function(e){var n=e.target.closest("[data-add-class-on-hover]");n!=t&&(t.classList.remove("hover"),t=null)})},function(module,exports,__webpack_require__){"use strict";window.runDemo=function(button){for(var demoElem,parent=button;(parent=parent.parentElement)&&!(demoElem=parent.querySelector("[data-demo]")););demoElem?eval(demoElem.textContent):alert("Ошибка, нет элемента с демо")}},function(t,e,n){"use strict";n(34)},function(t,e,n){"use strict";var r=n(37),i=n(41),o=[];e.iframe=function(t){function e(){r.async(t,function(e,n){n&&(t.style.height=n+"px")})}e()},e.codeTabs=function(t){function e(){var e=t.closest(".code-tabs"),n=(t.closest("[data-code-tabs-content]"),e.querySelector("[data-code-tabs-switches]")),r=n.firstElementChild;r.offsetWidth>n.offsetWidth?e.classList.add("code-tabs_scroll"):e.classList.remove("code-tabs_scroll")}e(),o.push(e)},window.addEventListener("resize",i(function(){o.forEach(function(t){t()})},200))},function(t,e,n){"use strict";function r(t){a=new u(t)}var i=function(t,e){t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),t.__proto__=e},o=function(t,e,n){e&&Object.defineProperties(t,e),n&&Object.defineProperties(t.prototype,n)};e.init=r;var a,s=n(21),u=function(){var t=function(t){void 0===t&&(t={}),this.notifications=[],this.verticalSpace=t.verticalSpace||8};return t.prototype.register=function(t){var e=this;this.notifications.unshift(t),setTimeout(function(){return e.recalculate()},20)},t.prototype.unregister=function(t){var e=this.notifications.indexOf(t);this.notifications.splice(e,1),this.recalculate()},t.prototype.recalculate=function(){var t=this,e=this.verticalSpace;this.notifications.forEach(function(n){n.top=e,e+=n.height+t.verticalSpace})},t}(),c=function(){var t=function(t,e){var n='<div class="notification notification_popup notification_'+e+'">\n    <div class="notification__content">'+t+'</div>\n    <button title="Закрыть" class="notification__close"></button></div>';document.body.insertAdjacentHTML("beforeEnd",n),this.elem=document.body.lastElementChild,a.register(this),this.setupCloseHandler(),this.setupCloseTimeout()};return t.prototype.close=function(){this.elem.parentNode&&(this.elem.remove(),a.unregister(this))},t.prototype.setupCloseHandler=function(){var t=this;this.delegate(".notification__close","click",function(){return t.close()})},t.prototype.setupCloseTimeout=function(){var t=this;setTimeout(function(){return t.close()},2500)},o(t,null,{height:{get:function(){return this.elem.offsetHeight}},top:{set:function(t){this.elem.style.transform="translateY("+t+"px)"}}}),t}();s.delegateMixin(c.prototype);var l=function(t){var e=function(e){t.call(this,e,"info")};return i(e,t),e}(c);e.Info=l;var f=function(t){var e=function(e){t.call(this,e,"warn")};return i(e,t),e}(c);e.Warn=f;var h=function(t){var e=function(e){t.call(this,e,"success")};return i(e,t),e}(c);e.Success=h;var d=function(t){var e=function(e){t.call(this,e,"error")};return i(e,t),e.prototype.setupCloseTimeout=function(){var t=this;setTimeout(function(){return t.close()},5e3)},e}(c);e.Error=d;var p=function(t){var e=function(e){t.call(this,e,"error")};return i(e,t),e.prototype.setupCloseTimeout=function(){},e}(c);e.Test=p,window.Test=h},,,,,,function(t){"use strict";function e(t,e){for(var n=t.target;n;){if(n.matches(e))return n;if(n==t.currentTarget)break;n=n.parentElement}return null}function n(t,n,r,i,o){t.addEventListener(r,function(t){var r=e(t,n);t.delegateTarget=r,r&&i.call(o||this,t)})}n.delegateMixin=function(t){t.delegate=function(t,e,r){n(this.elem,t,e,r,this)}},t.exports=n},,,,,,,,,function(t){"use strict";function e(t,e){e=e||{};var n,r,i,o,a,s=e.onRight||function(){},u=e.onLeft||function(){},c=e.tolerance||100,l=e.threshold||150,f=e.allowedTime||500;t.addEventListener("touchstart",function(t){var e=t.changedTouches[0];i=0,n=e.pageX,r=e.pageY,a=Date.now()},!1),t.addEventListener("touchend",function(t){var e=t.changedTouches[0];i=e.pageX-n,o=Date.now()-a,Math.abs(e.pageY-r)>c||o>f||(i>l&&s(t),-l>i&&u(t))},!1)}t.exports=e},function(t){"use strict";function e(t){if(t=t||{},this.elem=t.elem,this.size=t.size||"medium",this["class"]=t["class"]?" "+t["class"]:"",this.elemClass=t.elemClass,"medium"!=this.size&&"small"!=this.size)throw Error("Unsupported size: "+this.size);this.elem||(this.elem=document.createElement("div"))}e.prototype.start=function(){this.elemClass&&this.elem.classList.toggle(this.elemClass),this.elem.insertAdjacentHTML("beforeend",'<span class="spinner spinner_active spinner_'+this.size+this["class"]+'"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>')},e.prototype.stop=function(){var t=this.elem.querySelector(".spinner");t&&(t.remove(),this.elemClass&&this.elem.classList.toggle(this.elemClass))},t.exports=e},,,function(t,e,n){"use strict";function r(t){if(t.length){if(1===t.length)return"string"==typeof t[0]?document.createTextNode(t[0]):t[0];for(var e,n=document.createDocumentFragment(),r=t.length,i=-1;++i<r;)e=t[i],n.appendChild("string"==typeof e?document.createTextNode(e):e);return n}throw Error("DOM Exception 8")}var i={matches:Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector,replace:function(){this.parentNode&&this.parentNode.replaceChild(r(arguments),this)},prepend:function(){this.insertBefore(r(arguments),this.firstChild)},append:function(){this.appendChild(r(arguments))},remove:function(){var t=this.parentNode;return t?t.removeChild(this):void 0},before:function(){this.parentNode&&this.parentNode.insertBefore(r(arguments),this)},after:function(){this.parentNode&&this.parentNode.insertBefore(r(arguments),this.nextSibling)},closest:function(t){for(var e=this;e;){if(e.matches(t))return e;e=e.parentElement}return null}};for(var o in i)Element.prototype[o]||(Element.prototype[o]=i[o]);n(43)},,,function(t,e,n){"use strict";function r(t,e){function n(t,n){clearTimeout(r),e(t,n)}var r=setTimeout(function(){e(Error("timeout"))},500);try{(t.contentDocument||t.contentWindow.document).body}catch(a){i(t,n)}if(!t.offsetWidth){var s=t.cloneNode(!0);return s.name="",s.style.height="50px",s.style.position="absolute",s.style.display="block",s.style.top="10000px",s.onload=function(){var e=o(this.contentDocument);t.style.display="block",s.remove(),n(null,e)},void document.body.appendChild(s)}t.style.display="block",t.style.height="1px";var u=o(t.contentDocument);t.style.height="",n(null,u)}function i(){throw Error("Not implemented yet")}var o=n(61);r.async=function(t,e){setTimeout(function(){r(t,e)},0)},t.exports=r},,,,function(t){"use strict";function e(t,e){function n(){return o?(r=arguments,void(i=this)):(t.apply(this,arguments),o=!0,void setTimeout(function(){o=!1,r&&(n.apply(i,r),r=i=null)},e))}var r,i,o=!1;return n}t.exports=e},,function(){"use strict";try{new CustomEvent("IE has CustomEvent, but doesn't support constructor")}catch(t){window.CustomEvent=function(t,e){var n;return e=e||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n},CustomEvent.prototype=Object.create(window.Event.prototype)}},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){t=t||document;var e=Math.max(t.body.scrollHeight,t.documentElement.scrollHeight,t.body.offsetHeight,t.documentElement.offsetHeight,t.body.clientHeight,t.documentElement.clientHeight);return t.documentElement.scrollWidth>t.documentElement.clientWidth&&(i||(i=o()),e+=i),e}var i,o=n(64);t.exports=r},,,function(t){"use strict";function e(){var t=document.createElement("div");if(t.style.cssText="visibility:hidden;height:100px",!document.body)throw Error("getScrollbarHeight called to early: no document.body");document.body.appendChild(t);var e=t.offsetWidth;t.style.overflow="scroll";var n=document.createElement("div");n.style.width="100%",t.appendChild(n);var r=n.offsetWidth;return t.parentNode.removeChild(t),e-r}t.exports=e}]);