var footer=webpackJsonp_name_([4],{0:function(e,t,n){"use strict";var a=n(2),r=n(3),i=n(4);t.init=function(){a(),window.devicePixelRatio>1&&r(),window.addEventListener("scroll",i),i()},t.trackSticky=i},2:function(e,t,n){"use strict";var a=n(43);e.exports=function(){function e(e){var t=e.clientX+i;t+r.offsetWidth>document.documentElement.clientWidth&&(t=Math.max(0,e.clientX-i-r.offsetWidth)),r.style.left=t+"px";var n=e.clientY+s;n+r.offsetHeight>document.documentElement.clientHeight&&(n=Math.max(0,e.clientY-s-r.offsetHeight)),r.style.top=n+"px"}function t(t){var n=t.target.closest("a, [data-tooltip]");n&&("A"==n.tagName&&n.closest(".toolbar")||(r=document.createElement("span"),r.className="link__type",n.getAttribute("data-tooltip")?r.setAttribute("data-tooltip",n.getAttribute("data-tooltip")):r.setAttribute("data-url",n.getAttribute("href")),document.body.appendChild(r),e(t),document.addEventListener("mousemove",e)))}function n(){r&&(document.removeEventListener("mousemove",e),r.remove(),r=null)}var r=null,i=8,s=10;a("a,[data-tooltip]",t,n)}},3:function(e){"use strict";e.exports=function(){for(var e=document.querySelectorAll('figure img[src$=".png"]'),t=0;t<e.length;t++)!function(){var n=e[t];n.onload=function(){if(delete this.onload,!this.src.match(/@2x.png$/)){var e=new Image;e.onload=function(){this.width&&this.height&&(n.src=this.src)},e.src=this.src.replace(".png","@2x.png")}},n.complete&&n.onload()}()}},4:function(e){"use strict";function t(){for(var e=document.querySelectorAll("[data-sticky]"),t=0;t<e.length;t++){var a=e[t],r=a.dataset.sticky?document.querySelector(a.dataset.sticky):document.body;if(a.getBoundingClientRect().top<0){if(a.style.cssText)return;var i=a.getBoundingClientRect().left,s=n(a);a.parentNode.insertBefore(s,a),r.appendChild(a),a.classList.add("sticky"),a.style.position="fixed",a.style.top=0,a.style.left=i+"px",a.style.zIndex=10001,a.style.background="white",a.style.margin=0,a.style.width=s.offsetWidth+"px",a.placeholder=s}else a.placeholder&&a.placeholder.getBoundingClientRect().top>0&&(a.style.cssText="",a.classList.remove("sticky"),a.placeholder.parentNode.insertBefore(a,a.placeholder),a.placeholder.remove(),a.placeholder=null)}}function n(e){var t=document.createElement("div"),n=getComputedStyle(e);return t.style.width=e.offsetWidth+"px",t.style.marginLeft=n.marginLeft,t.style.marginRight=n.marginRight,t.style.height=e.offsetHeight+"px",t.style.marginBottom=n.marginBottom,t.style.marginTop=n.marginTop,t}e.exports=t},43:function(e){"use strict";function t(e,t,n){u[e]={over:t,out:n}}function n(e){if(!i){var t=Math.sqrt(Math.pow(e.pageX-s,2)+Math.pow(e.pageY-o,2)),n=t/(Date.now()-l);if(c>n){var a=document.elementFromPoint(e.clientX,e.clientY);if(a!=r){for(var d in u){var p=a.closest(d);p&&(i={elem:p,out:u[d].out},u[d].over(e))}r=a}}s=e.pageX,o=e.pageY,l=Date.now()}}function a(e){if(i){for(var t=e.relatedTarget;t;){if(t==i.elem)return;t=t.parentElement}var n=i.out;i=null,n(e)}}var r,i,s=1/0,o=1/0,l=Date.now(),c=.2,u={};document.addEventListener("mousemove",n),document.addEventListener("mouseout",a),e.exports=t}});