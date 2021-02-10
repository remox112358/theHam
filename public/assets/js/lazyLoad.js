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
    }, {} ]
}, {}, [ 1 ]);
//# sourceMappingURL=lazyLoad.js.map
