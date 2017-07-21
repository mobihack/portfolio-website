/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */
function quoteLoop(e,o){var t=e[o];t.className="quote fadeIn",setTimeout(function(){t.className="quote fadeOut"},3e3),++o>=e.length&&(o=0),setTimeout(function(){quoteLoop(e,o)},4e3)}var elements=document.querySelectorAll("#quoteLoop > .quote");quoteLoop(elements,0);
/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */
window.onload=function(){var n=document.querySelector(".main_nav");window.onscroll=function(){window.pageYOffset>300?n.classList.add("sticky"):n.classList.remove("sticky")}};
// Mobile Navigation
document.querySelector(".mobile-toggle").onclick=function(e){var n=document.querySelector(".main_nav"),i="open-nav";if(n.classList)n.classList.toggle(i);else{var s=n.className.split(" "),a=s.indexOf(i);a>=0?s.splice(a,1):s.push(i),n.className=s.join(" ")}};var inputs=document.querySelectorAll(".main_nav li a");for(i=0;i<inputs.length;i++)!function(e){inputs[e].addEventListener("click",function(){var e=document.querySelector(".main_nav"),n="open-nav";e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")})}(i);

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */
!function(){"use strict";if("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach){var e=function(e,t){var n,o=window.pageYOffset,r=e.offsetTop,a=r-o,i=a/(t/16),c=function(){window.scrollBy(0,i),n()};n=i>=0?function(){var e=window.pageYOffset;(e>=r-i||window.innerHeight+e>=document.body.offsetHeight)&&clearInterval(f)}:function(){var e=window.pageYOffset;(r||0)>=e&&clearInterval(f)};var f=setInterval(c,16)},t=document.querySelectorAll("a[data-smoothscroll]");[].forEach.call(t,function(t){t.addEventListener("click",function(n){n.preventDefault();var o=t.getAttribute("href"),r=document.querySelector(o),a=t.getAttribute("data-speed");r&&e(r,a||500)},!1)})}}();

/* TweenMax Animation */
TweenMax.staggerFrom(".heading", 0.8, {
    opacity: 0,
    y: 20,
    delay: 0.2
}, 0.4);