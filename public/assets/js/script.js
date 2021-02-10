!function r(e, n, t) {
    function o(i, f) {
        if (!n[i]) {
            if (!e[i]) {
                var c = "function" == typeof require && require;
                if (!f && c) return c(i, !0);
                if (u) return u(i, !0);
                var a = new Error("Cannot find module '" + i + "'");
                throw a.code = "MODULE_NOT_FOUND", a;
            }
            var p = n[i] = {
                exports: {}
            };
            e[i][0].call(p.exports, function(r) {
                return o(e[i][1][r] || r);
            }, p, p.exports, r, e, n, t);
        }
        return n[i].exports;
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
}({
    1: [ function(require, module, exports) {
        "use strict";
        var _lazyLoad = require("../vendor/lazyLoad.js"), _yandexMap = require("../vendor/yandexMap.js");
        require("../vendor/jQuerySimpleCounter.js"), jQuery(function($) {
            (0, _lazyLoad.lazyLoad)(), $(document).ready(function() {
                (0, _yandexMap.yandexMap)(), isotopeInit(), slidersInit(), dropdownsInit(), scrollEventsInit();
            });
        });
        /**
 * Starting isotope initialization.
 */
        var isotopeInit = function() {
            $("#works").isotope({
                filter: "*"
            }), $(document).on("click", ".filters--work .filter", function() {
                var siblings = $(this).siblings();
                $.map(siblings, function(sibling) {
                    $(sibling).removeClass("active");
                }), $(this).addClass("active"), $("#works").isotope({
                    filter: $(this).attr("data-filter")
                });
            });
        }, slidersInit = function() {
            $("#slider-feedbacks").slick({
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 1e4,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0,
                prevArrow: $(".slider--feedbacks .prev"),
                nextArrow: $(".slider--feedbacks .next"),
                appendDots: $(".slider__tools .slider__dots"),
                customPaging: function(slider, index) {
                    var src = $(slider.$slides[index]).find(".author__thumbnail img").attr("src"), alt = $(slider.$slider[index]).find(".author__name").text();
                    return '<img src="'.concat(src, '" alt="').concat(alt, '" />');
                }
            });
        }, dropdownsInit = function() {
            $('[data-role="activator"]').on("click", function() {
                var area = $("".concat($(this).data("href")));
                $(this).toggleClass("active"), area.toggleClass("active");
            });
        }, scrollEventsInit = function() {
            var reached = {
                about: !1,
                facts: !1
            };
            $(window).scroll(function() {
                $("#about").offset().top + $("#about").outerHeight() - $(window).height() < $(this).scrollTop() && !reached.about && (reached.about = !0, 
                function(argument_0) {
                    var transition = 0 < arguments.length && void 0 !== argument_0 ? argument_0 : 2;
                    [ {
                        element: $("#skill-ui .skill__bar"),
                        width: 75,
                        color: "#9c5da5"
                    }, {
                        element: $("#skill-wd .skill__bar"),
                        width: 85,
                        color: "#11b0de"
                    }, {
                        element: $("#skill-wp .skill__bar"),
                        width: 70,
                        color: "#d67f7f"
                    }, {
                        element: $("#skill-hc .skill__bar"),
                        width: 90,
                        color: "#20bc9d"
                    }, {
                        element: $("#skill-ad .skill__bar"),
                        width: 85,
                        color: "#bb8a36"
                    } ].forEach(function(bar) {
                        bar.element.css({
                            transition: String(transition) + "s",
                            width: String(bar.width) + "%",
                            background: bar.color
                        });
                    });
                }());
            }), $(window).scroll(function() {
                $("#facts").offset().top + $("#facts").outerHeight() - $(window).height() < $(this).scrollTop() && !reached.facts && (reached.facts = !0, 
                $("#facts .fact .fact__count").each(function(index, element) {
                    var end = parseInt($(element).data("count"));
                    $(element).jQuerySimpleCounter({
                        start: 1,
                        end: end,
                        easing: "swing",
                        duration: 3e3
                    });
                }));
            });
        };
        /**
 * Starting sliders initialization.
 */    }, {
        "../vendor/jQuerySimpleCounter.js": 2,
        "../vendor/lazyLoad.js": 3,
        "../vendor/yandexMap.js": 4
    } ],
    2: [ function(require, module, exports) {
        "use strict";
        var $;
        ($ = jQuery).fn.jQuerySimpleCounter = function(options) {
            var settings = $.extend({
                start: 0,
                end: 100,
                easing: "swing",
                duration: 400,
                complete: ""
            }, options), thisElement = $(this);
            $({
                count: settings.start
            }).animate({
                count: settings.end
            }, {
                duration: settings.duration,
                easing: settings.easing,
                step: function() {
                    var mathCount = Math.ceil(this.count);
                    thisElement.text(mathCount);
                },
                complete: settings.complete
            });
        };
    }, {} ],
    3: [ function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.lazyLoad = void 0;
        exports.lazyLoad = function() {
            window.lazyLoad = function() {
                var lazyImageObserver, lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
                "IntersectionObserver" in window && (lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(entry) {
                        var lazyImage;
                        entry.isIntersecting && ((lazyImage = entry.target).src = lazyImage.dataset.src, 
                        lazyImage.classList.remove("lazy"), lazyImage.classList.add("lazy--loaded"), lazyImageObserver.unobserve(lazyImage));
                    });
                }), lazyImages.forEach(function(lazyImage) {
                    lazyImageObserver.observe(lazyImage);
                }));
            }, window.onload = function() {
                window.lazyLoad();
            };
        };
    }, {} ],
    4: [ function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.yandexMap = void 0;
        exports.yandexMap = function() {
            ymaps.ready(function() {
                new ymaps.Map("map", {
                    center: [ 34.052235, -118.243683 ],
                    zoom: 10
                }, {
                    searchControlProvider: "yandex#search"
                });
            });
        };
    }, {} ]
}, {}, [ 1 ]);
//# sourceMappingURL=script.js.map
