/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */
function quoteLoop(elements, currIndex) {

    var el = elements[currIndex];
    el.className='quote fadeIn';
    setTimeout(function() {
        el.className='quote fadeOut';
    }, 3000);

    currIndex++;
    if (currIndex == elements.length) {
        currIndex = 0;
    }
    setTimeout(function() {
        quoteLoop(elements, currIndex);
    }, 4000);
}

function startQuotes() {
    var elements = document.querySelectorAll('#quoteLoop > .quote');
    quoteLoop(elements, 0);
}
startQuotes();
/*function fade($ele) {
    $ele.fadeIn(750).delay(3000).fadeOut(750, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
    });
}
fade($('.quoteLoop > .quote').first());*/
/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */
window.onload = function() {
    var body = document.querySelector('.main_nav');
    window.onscroll = function() {
        if (window.pageYOffset > 300) {
            body.classList.add('sticky');
        } else {
            body.classList.remove('sticky');
        }
    }
}
// Mobile Navigation
document.querySelector('.mobile-toggle').onclick = function(event) {
    var el = document.querySelector('.main_nav'),
        className = 'open-nav';
    if (el.classList) {
        el.classList.toggle(className);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(className);
        if (existingIndex >= 0) classes.splice(existingIndex, 1);
        else classes.push(className);
        el.className = classes.join(' ');
    }
};
var inputs = document.querySelectorAll('.main_nav li a')
for (i = 0; i < inputs.length; i++) {
    (function(i) {
        inputs[i].addEventListener('click', function() {
            var el = document.querySelector('.main_nav'),
                className = 'open-nav';
            if (el.classList) el.classList.remove(className);
            else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        });
    })(i);
}
/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */
/*
 * - autoSmoothScroll -
 * Licence MIT
 * Written by Gabriel Delépine
 * Current version  1.3.1 (2014-10-22)
 * Previous version 1.3.0 (2014-07-23)
 * Previous version 1.2.0 (2014-02-13)
 * Previous version 1.0.1 (2013-11-08)
 * Previous version 1.0.0 (2013-10-27)
 * Requirement : None, it is a framework-free function (i.e. you do not need to include any other file in your page such as jQuery)
 * Fork-me on github : https://github.com/Yappli/smooth-scroll
 * */
(function(window, undefined) // Code in a function to create an isolate scope
    {
        'use strict';
        var height_fixed_header = 0, // For layout with header with position:fixed. Write here the height of your header for your anchor don't be hiden behind
            speed = 500,
            moving_frequency = 15, // Affects performance ! High number makes scroll more smooth
            links = document.getElementsByTagName('a'),
            href;
        for (var i = 0; i < links.length; i++) {
            href = (links[i].attributes.href === undefined) ? null : links[i].getAttribute("href");
            if (href !== null && href.length > 1 && href.indexOf('#') != -1) // href.substr(0, 1) == '#'
            {
                links[i].onclick = function() {
                    var element,
                        href = this.attributes.href.nodeValue.toString(),
                        url = href.substr(0, href.indexOf('#')),
                        id = href.substr(href.indexOf('#') + 1);
                    if (element = document.getElementById(id)) {
                        var hop_count = (speed - (speed % moving_frequency)) / moving_frequency, // Always make an integer
                            getScrollTopDocumentAtBegin = getScrollTopDocument(),
                            gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;
                        if (window.history && typeof window.history.pushState == 'function') window.history.pushState({}, undefined, url + '#' + id); // Change URL for modern browser
                        for (var i = 1; i <= hop_count; i++) {
                            (function() {
                                var hop_top_position = gap * i;
                                setTimeout(function() {
                                    window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin);
                                }, moving_frequency * i);
                            })();
                        }
                        return false;
                    }
                };
            }
        }
        var getScrollTopElement = function(e) {
            var top = height_fixed_header * -1;
            while (e.offsetParent != undefined && e.offsetParent != null) {
                top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
                e = e.offsetParent;
            }
            return top;
        };
        var getScrollTopDocument = function() {
            return window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop !== undefined ? document.documentElement.scrollTop : document.body.scrollTop;
        };
    })(window);
/* TweenMax Animation */
TweenMax.staggerFrom(".heading", 0.8, {
    opacity: 0,
    y: 20,
    delay: 0.2
}, 0.4);