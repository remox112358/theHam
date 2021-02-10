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
//# sourceMappingURL=yandexMap.js.map
