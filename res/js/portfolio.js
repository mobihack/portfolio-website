/* Quote Loop
------------------------------------------------------ */
function quoteLoop(elements, currIndex) { //elements list, the index to show
    var el = elements[currIndex];
    el.className = 'quote fadeIn';
    setTimeout(function() {
        el.className = 'quote fadeOut';
    }, 3000);
    if (++currIndex >= elements.length) currIndex = 0;
    timer = setTimeout(function() {
        quoteLoop(elements, currIndex);
    }, 4000);
    document.querySelector("a#refreshQuote").onclick = function(e) {
        if (timer) {
            el.className = 'quote';
            clearTimeout(timer);
            timer = 0;
        }
        quoteLoop(elements, currIndex);
    }

}
var elements = document.querySelectorAll('#quoteLoop > .quote');
quoteLoop(elements, 0);

/*----------------------------------------------------*/
/* Navigation & Header Curved Cut Anim
------------------------------------------------------ */
function inViewport(el) {
    var H = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? H-t : (b<H?b:H));  
}

window.onload = function() {
    var n = document.querySelector(".main_nav");
    var o = document.querySelector("#scroll");
    window.onscroll = function() {
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
            scrollBottom = Math.max(document.body.offsetHeight - (scrollTop + window.innerHeight), 0);
        (scrollTop > 600 && scrollBottom > 250) ? (n.classList.add("is-sticky")) : (n.classList.remove("is-sticky"));
        scrollTop > 600 ? (o.classList.add("is-active")) : (o.classList.remove("is-active"));

        var window_offset = inViewport(document.querySelector('header')); 
        document.querySelector('.overlay').style.height=window_offset + "px";
        document.querySelector('.title').style.bottom=(window_offset / 4) + "px";

    }
};
// Mobile Navigation
document.querySelector(".mobile-toggle").onclick = function(e) {
    var n = document.querySelector(".main_nav"),
        i = "is-open-nav";
    if (n.classList) n.classList.toggle(i);
    else {
        var s = n.className.split(" "),
            a = s.indexOf(i);
        a >= 0 ? s.splice(a, 1) : s.push(i), n.className = s.join(" ")
    }
};
var inputs = document.querySelectorAll(".main_nav li a");
for (i = 0; i < inputs.length; i++) ! function(e) {
    inputs[e].addEventListener("click", function() {
        var e = document.querySelector(".main_nav"),
            n = "is-open-nav";
        e.classList ? e.classList.remove(n) : e.className = e.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    })
}(i);

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */
! function() {
    "use strict";
    if ("querySelector" in document && "addEventListener" in window && Array.prototype.forEach) {
        var e = function(e, t) {
                var n, o = window.pageYOffset,
                    r = e.offsetTop,
                    a = r - o,
                    i = a / (t / 16),
                    c = function() {
                        window.scrollBy(0, i), n()
                    };
                n = i >= 0 ? function() {
                    var e = window.pageYOffset;
                    (e >= r - i || window.innerHeight + e >= document.body.offsetHeight) && clearInterval(f)
                } : function() {
                    var e = window.pageYOffset;
                    (r || 0) >= e && clearInterval(f)
                };
                var f = setInterval(c, 16)
            },
            t = document.querySelectorAll("a[data-smoothscroll]");
        [].forEach.call(t, function(t) {
            t.addEventListener("click", function(n) {
                n.preventDefault();
                var o = t.getAttribute("href"),
                    r = document.querySelector(o),
                    a = t.getAttribute("data-speed");
                r && e(r, a || 500)
            }, !1)
        })
    }
}();