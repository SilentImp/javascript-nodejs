var footer=webpackJsonp_name_([2],{0:function(e,t,n){"use strict";var o=n(19),r=n(20),i=n(21);t.init=function(){o(),window.devicePixelRatio>1&&r(),i()}},19:function(e,t,n){"use strict";var o=n(46);e.exports=function(){function e(e){var t=e.clientX+i;t+r.offsetWidth>document.documentElement.clientWidth&&(t=Math.max(0,e.clientX-i-r.offsetWidth)),r.style.left=t+"px";var n=e.clientY+s;n+r.offsetHeight>document.documentElement.clientHeight&&(n=Math.max(0,e.clientY-s-r.offsetHeight)),r.style.top=n+"px"}function t(t){var n=t.target.closest("a");n&&(n.closest(".toolbar")||(r=document.createElement("span"),r.className="link__type",n.getAttribute("data-tooltip")?r.setAttribute("data-tooltip",n.getAttribute("data-tooltip")):r.setAttribute("data-url",n.getAttribute("href")),document.body.appendChild(r),e(t),document.addEventListener("mousemove",e)))}function n(){r&&(document.removeEventListener("mousemove",e),r.remove(),r=null)}var r=null,i=8,s=10,a=o(t,n);document.addEventListener("mouseover",function(e){e.target.closest("a")&&a.call(this,e)}),document.addEventListener("mouseout",a)}},20:function(e){"use strict";e.exports=function(){for(var e=document.querySelectorAll('figure img[src$=".png"]'),t=0;t<e.length;t++)!function(){var n=e[t];n.onload=function(){if(delete this.onload,!this.src.match(/@2x.png$/)){var e=new Image;e.onload=function(){this.width&&this.height&&(n.src=this.src)},e.src=this.src.replace(".png","@2x.png")}},n.complete&&n.onload()}()}},21:function(e){"use strict";function t(){for(var e=document.querySelectorAll("[data-sticky]"),t=0;t<e.length;t++){var o=e[t];if(o.getBoundingClientRect().top<0){if(o.style.cssText)throw Error("data-sticky element may not have style");var r=n(o);o.parentNode.insertBefore(r,o),o.style.position="fixed",o.style.top=0,o.style.zIndex=1,o.style.background="white",o.style.margin=0,o.style.width=r.offsetWidth+"px",o.placeholder=r}else o.placeholder&&o.placeholder.getBoundingClientRect().top>0&&(o.style.cssText="",o.placeholder.remove(),o.placeholder=null)}}function n(e){var t=document.createElement("div"),n=getComputedStyle(e);return t.style.width=e.offsetWidth+"px",t.style.marginLeft=n.marginLeft,t.style.marginRight=n.marginRight,t.style.height=e.offsetHeight+"px",t.style.marginBottom=n.marginBottom,t.style.marginTop=n.marginTop,t}e.exports=function(){window.addEventListener("scroll",t),t()}},46:function(e){"use strict";function t(e,t){function n(e){r=e.pageX,i=e.pageY}function o(e,t){return t.hoverIntentTimer=clearTimeout(t.hoverIntentTimer),Math.sqrt((s-r)*(s-r)+(a-i)*(a-i))<c.sensitivity?(t.removeEventListener("mousemove",n),t.hoverIntentState=!0,void c.over.call(t,e)):(s=r,a=i,void(t.hoverIntentTimer=setTimeout(function(){o(e,t)},c.interval)))}var r,i,s,a,c={interval:150,sensitivity:8,timeout:0,over:e,out:t};return function(e){this.hoverIntentTimer&&(clearTimeout(this.hoverIntentTimer),delete this.hoverIntentTimer),"mouseover"===e.type?(s=e.pageX,a=e.pageY,this.addEventListener("mousemove",n),this.hoverIntentState||(this.hoverIntentTimer=setTimeout(function(){o(e,this)}.bind(this),c.interval))):(this.removeEventListener("mousemove",n),this.hoverIntentState&&(this.hoverIntentTimer=setTimeout(function(){this.hoverIntentState=!1,c.out.call(this,e)}.bind(this),c.timeout)))}}e.exports=void 0===document.ontouchstart?t:function(){return function(){}}}});