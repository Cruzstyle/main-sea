(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [33], {
        "16fh": function(e, t, a) {},
        RsrV: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return Je
            }));
            var n = a("m6w3"),
                r = a("JiVo"),
                i = a("mXGw"),
                s = a.n(i),
                l = a("UutA"),
                o = a("etRO"),
                d = a("4jfz");

            function c(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Object.keys(t).forEach((function(a) {
                    "undefined" === typeof e[a] ? e[a] = t[a] : c(t[a]) && c(e[a]) && Object.keys(t[a]).length > 0 && u(e[a], t[a])
                }))
            }
            var p = {
                body: {},
                addEventListener: function() {},
                removeEventListener: function() {},
                activeElement: {
                    blur: function() {},
                    nodeName: ""
                },
                querySelector: function() {
                    return null
                },
                querySelectorAll: function() {
                    return []
                },
                getElementById: function() {
                    return null
                },
                createEvent: function() {
                    return {
                        initEvent: function() {}
                    }
                },
                createElement: function() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function() {},
                        getElementsByTagName: function() {
                            return []
                        }
                    }
                },
                createElementNS: function() {
                    return {}
                },
                importNode: function() {
                    return null
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function f() {
                var e = "undefined" !== typeof document ? document : {};
                return u(e, p), e
            }
            var v = {
                document: p,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState: function() {},
                    pushState: function() {},
                    go: function() {},
                    back: function() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {},
                matchMedia: function() {
                    return {}
                },
                requestAnimationFrame: function(e) {
                    return "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0)
                },
                cancelAnimationFrame: function(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function h() {
                var e = window;
                return u(e, v), e
            }
            var m = a("g2+O"),
                g = a("mHfP"),
                b = a("1U+3"),
                w = a("DY1Z"),
                y = a("Y7ZB");

            function C(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Object(w.a)(e);
                    if (t) {
                        var r = Object(w.a)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Object(b.a)(this, a)
                }
            }
            var x = function(e) {
                Object(g.a)(a, e);
                var t = C(a);

                function a(e) {
                    var n;
                    return Object(o.a)(this, a), "number" === typeof e ? n = t.call(this, e) : (n = t.call.apply(t, [this].concat(Object(r.a)(e || []))), function(e) {
                        var t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: function() {
                                return t
                            },
                            set: function(e) {
                                t.__proto__ = e
                            }
                        })
                    }(Object(m.a)(n))), Object(b.a)(n)
                }
                return a
            }(Object(y.a)(Array));

            function T() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = [];
                return e.forEach((function(e) {
                    Array.isArray(e) ? t.push.apply(t, Object(r.a)(T(e))) : t.push(e)
                })), t
            }

            function S(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function E(e, t) {
                var a = h(),
                    n = f(),
                    r = [];
                if (!t && e instanceof x) return e;
                if (!e) return new x(r);
                if ("string" === typeof e) {
                    var i = e.trim();
                    if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
                        var s = "div";
                        0 === i.indexOf("<li") && (s = "ul"), 0 === i.indexOf("<tr") && (s = "tbody"), 0 !== i.indexOf("<td") && 0 !== i.indexOf("<th") || (s = "tr"), 0 === i.indexOf("<tbody") && (s = "table"), 0 === i.indexOf("<option") && (s = "select");
                        var l = n.createElement(s);
                        l.innerHTML = i;
                        for (var o = 0; o < l.childNodes.length; o += 1) r.push(l.childNodes[o])
                    } else r = function(e, t) {
                        if ("string" !== typeof e) return [e];
                        for (var a = [], n = t.querySelectorAll(e), r = 0; r < n.length; r += 1) a.push(n[r]);
                        return a
                    }(e.trim(), t || n)
                } else if (e.nodeType || e === a || e === n) r.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof x) return e;
                    r = e
                }
                return new x(function(e) {
                    for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
                    return t
                }(r))
            }
            E.fn = x.prototype;
            var O = "resize scroll".split(" ");

            function M(e) {
                return function() {
                    for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++) a[n] = arguments[n];
                    if ("undefined" === typeof a[0]) {
                        for (var r = 0; r < this.length; r += 1) O.indexOf(e) < 0 && (e in this[r] ? this[r][e]() : E(this[r]).trigger(e));
                        return this
                    }
                    return this.on.apply(this, [e].concat(a))
                }
            }
            M("click"), M("blur"), M("focus"), M("focusin"), M("focusout"), M("keyup"), M("keydown"), M("keypress"), M("submit"), M("change"), M("mousedown"), M("mousemove"), M("mouseup"), M("mouseenter"), M("mouseleave"), M("mouseout"), M("mouseover"), M("touchstart"), M("touchend"), M("touchmove"), M("resize"), M("scroll");
            var k = {
                addClass: function() {
                    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    var n = T(t.map((function(e) {
                        return e.split(" ")
                    })));
                    return this.forEach((function(e) {
                        var t;
                        (t = e.classList).add.apply(t, Object(r.a)(n))
                    })), this
                },
                removeClass: function() {
                    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    var n = T(t.map((function(e) {
                        return e.split(" ")
                    })));
                    return this.forEach((function(e) {
                        var t;
                        (t = e.classList).remove.apply(t, Object(r.a)(n))
                    })), this
                },
                hasClass: function() {
                    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    var n = T(t.map((function(e) {
                        return e.split(" ")
                    })));
                    return S(this, (function(e) {
                        return n.filter((function(t) {
                            return e.classList.contains(t)
                        })).length > 0
                    })).length > 0
                },
                toggleClass: function() {
                    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    var n = T(t.map((function(e) {
                        return e.split(" ")
                    })));
                    this.forEach((function(e) {
                        n.forEach((function(t) {
                            e.classList.toggle(t)
                        }))
                    }))
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" === typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var a = 0; a < this.length; a += 1)
                        if (2 === arguments.length) this[a].setAttribute(e, t);
                        else
                            for (var n in e) this[a][n] = e[n], this[a].setAttribute(n, e[n]);
                    return this
                },
                removeAttr: function(e) {
                    for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" !== typeof e ? "".concat(e, "ms") : e;
                    return this
                },
                on: function() {
                    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        s = t[3];

                    function l(e) {
                        var t = e.target;
                        if (t) {
                            var a = e.target.dom7EventData || [];
                            if (a.indexOf(e) < 0 && a.unshift(e), E(t).is(r)) i.apply(t, a);
                            else
                                for (var n = E(t).parents(), s = 0; s < n.length; s += 1) E(n[s]).is(r) && i.apply(n[s], a)
                        }
                    }

                    function o(e) {
                        var t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t)
                    }
                    "function" === typeof t[1] && (n = t[0], i = t[1], s = t[2], r = void 0), s || (s = !1);
                    for (var d, c = n.split(" "), u = 0; u < this.length; u += 1) {
                        var p = this[u];
                        if (r)
                            for (d = 0; d < c.length; d += 1) {
                                var f = c[d];
                                p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({
                                    listener: i,
                                    proxyListener: l
                                }), p.addEventListener(f, l, s)
                            } else
                                for (d = 0; d < c.length; d += 1) {
                                    var v = c[d];
                                    p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[v] || (p.dom7Listeners[v] = []), p.dom7Listeners[v].push({
                                        listener: i,
                                        proxyListener: o
                                    }), p.addEventListener(v, o, s)
                                }
                    }
                    return this
                },
                off: function() {
                    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        s = t[3];
                    "function" === typeof t[1] && (n = t[0], i = t[1], s = t[2], r = void 0), s || (s = !1);
                    for (var l = n.split(" "), o = 0; o < l.length; o += 1)
                        for (var d = l[o], c = 0; c < this.length; c += 1) {
                            var u = this[c],
                                p = void 0;
                            if (!r && u.dom7Listeners ? p = u.dom7Listeners[d] : r && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]), p && p.length)
                                for (var f = p.length - 1; f >= 0; f -= 1) {
                                    var v = p[f];
                                    i && v.listener === i || i && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === i ? (u.removeEventListener(d, v.proxyListener, s), p.splice(f, 1)) : i || (u.removeEventListener(d, v.proxyListener, s), p.splice(f, 1))
                                }
                        }
                    return this
                },
                trigger: function() {
                    for (var e = h(), t = arguments.length, a = new Array(t), n = 0; n < t; n++) a[n] = arguments[n];
                    for (var r = a[0].split(" "), i = a[1], s = 0; s < r.length; s += 1)
                        for (var l = r[s], o = 0; o < this.length; o += 1) {
                            var d = this[o];
                            if (e.CustomEvent) {
                                var c = new e.CustomEvent(l, {
                                    detail: i,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                d.dom7EventData = a.filter((function(e, t) {
                                    return t > 0
                                })), d.dispatchEvent(c), d.dom7EventData = [], delete d.dom7EventData
                            }
                        }
                    return this
                },
                transitionEnd: function(e) {
                    var t = this;
                    return e && t.on("transitionend", (function a(n) {
                        n.target === this && (e.call(this, n), t.off("transitionend", a))
                    })), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    var e = h();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = h(),
                            t = f(),
                            a = this[0],
                            n = a.getBoundingClientRect(),
                            r = t.body,
                            i = a.clientTop || r.clientTop || 0,
                            s = a.clientLeft || r.clientLeft || 0,
                            l = a === e ? e.scrollY : a.scrollTop,
                            o = a === e ? e.scrollX : a.scrollLeft;
                        return {
                            top: n.top + l - i,
                            left: n.left + o - s
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    var a, n = h();
                    if (1 === arguments.length) {
                        if ("string" !== typeof e) {
                            for (a = 0; a < this.length; a += 1)
                                for (var r in e) this[a].style[r] = e[r];
                            return this
                        }
                        if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" === typeof e) {
                        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    return e ? (this.forEach((function(t, a) {
                        e.apply(t, [t, a])
                    })), this) : this
                },
                html: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].innerHTML : null;
                    for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    var t, a, n = h(),
                        r = f(),
                        i = this[0];
                    if (!i || "undefined" === typeof e) return !1;
                    if ("string" === typeof e) {
                        if (i.matches) return i.matches(e);
                        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                        if (i.msMatchesSelector) return i.msMatchesSelector(e);
                        for (t = E(e), a = 0; a < t.length; a += 1)
                            if (t[a] === i) return !0;
                        return !1
                    }
                    if (e === r) return i === r;
                    if (e === n) return i === n;
                    if (e.nodeType || e instanceof x) {
                        for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
                            if (t[a] === i) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    var e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if ("undefined" === typeof e) return this;
                    var t = this.length;
                    if (e > t - 1) return E([]);
                    if (e < 0) {
                        var a = t + e;
                        return E(a < 0 ? [] : [this[a]])
                    }
                    return E([this[e]])
                },
                append: function() {
                    for (var e, t = f(), a = 0; a < arguments.length; a += 1) {
                        e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
                        for (var n = 0; n < this.length; n += 1)
                            if ("string" === typeof e) {
                                var r = t.createElement("div");
                                for (r.innerHTML = e; r.firstChild;) this[n].appendChild(r.firstChild)
                            } else if (e instanceof x)
                            for (var i = 0; i < e.length; i += 1) this[n].appendChild(e[i]);
                        else this[n].appendChild(e)
                    }
                    return this
                },
                prepend: function(e) {
                    var t, a, n = f();
                    for (t = 0; t < this.length; t += 1)
                        if ("string" === typeof e) {
                            var r = n.createElement("div");
                            for (r.innerHTML = e, a = r.childNodes.length - 1; a >= 0; a -= 1) this[t].insertBefore(r.childNodes[a], this[t].childNodes[0])
                        } else if (e instanceof x)
                        for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && E(this[0].nextElementSibling).is(e) ? E([this[0].nextElementSibling]) : E([]) : this[0].nextElementSibling ? E([this[0].nextElementSibling]) : E([]) : E([])
                },
                nextAll: function(e) {
                    var t = [],
                        a = this[0];
                    if (!a) return E([]);
                    for (; a.nextElementSibling;) {
                        var n = a.nextElementSibling;
                        e ? E(n).is(e) && t.push(n) : t.push(n), a = n
                    }
                    return E(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        var t = this[0];
                        return e ? t.previousElementSibling && E(t.previousElementSibling).is(e) ? E([t.previousElementSibling]) : E([]) : t.previousElementSibling ? E([t.previousElementSibling]) : E([])
                    }
                    return E([])
                },
                prevAll: function(e) {
                    var t = [],
                        a = this[0];
                    if (!a) return E([]);
                    for (; a.previousElementSibling;) {
                        var n = a.previousElementSibling;
                        e ? E(n).is(e) && t.push(n) : t.push(n), a = n
                    }
                    return E(t)
                },
                parent: function(e) {
                    for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? E(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
                    return E(t)
                },
                parents: function(e) {
                    for (var t = [], a = 0; a < this.length; a += 1)
                        for (var n = this[a].parentNode; n;) e ? E(n).is(e) && t.push(n) : t.push(n), n = n.parentNode;
                    return E(t)
                },
                closest: function(e) {
                    var t = this;
                    return "undefined" === typeof e ? E([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    for (var t = [], a = 0; a < this.length; a += 1)
                        for (var n = this[a].querySelectorAll(e), r = 0; r < n.length; r += 1) t.push(n[r]);
                    return E(t)
                },
                children: function(e) {
                    for (var t = [], a = 0; a < this.length; a += 1)
                        for (var n = this[a].children, r = 0; r < n.length; r += 1) e && !E(n[r]).is(e) || t.push(n[r]);
                    return E(t)
                },
                filter: function(e) {
                    return E(S(this, e))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };
            Object.keys(k).forEach((function(e) {
                Object.defineProperty(E.fn, e, {
                    value: k[e],
                    writable: !0
                })
            }));
            var P, j, L, z = E;

            function D(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function A() {
                return Date.now()
            }

            function I(e, t) {
                void 0 === t && (t = "x");
                var a, n, r, i = h(),
                    s = function(e) {
                        var t, a = h();
                        return a.getComputedStyle && (t = a.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                    }(e);
                return i.WebKitCSSMatrix ? ((n = s.transform || s.webkitTransform).split(",").length > 6 && (n = n.split(", ").map((function(e) {
                    return e.replace(",", ".")
                })).join(", ")), r = new i.WebKitCSSMatrix("none" === n ? "" : n)) : a = (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = i.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (n = i.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), n || 0
            }

            function _(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function $(e) {
                return "undefined" !== typeof window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
            }

            function N() {
                for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], a = 1; a < arguments.length; a += 1) {
                    var n = a < 0 || arguments.length <= a ? void 0 : arguments[a];
                    if (void 0 !== n && null !== n && !$(n))
                        for (var r = Object.keys(Object(n)).filter((function(e) {
                                return t.indexOf(e) < 0
                            })), i = 0, s = r.length; i < s; i += 1) {
                            var l = r[i],
                                o = Object.getOwnPropertyDescriptor(n, l);
                            void 0 !== o && o.enumerable && (_(e[l]) && _(n[l]) ? n[l].__swiper__ ? e[l] = n[l] : N(e[l], n[l]) : !_(e[l]) && _(n[l]) ? (e[l] = {}, n[l].__swiper__ ? e[l] = n[l] : N(e[l], n[l])) : e[l] = n[l])
                        }
                }
                return e
            }

            function B(e, t, a) {
                e.style.setProperty(t, a)
            }

            function G(e) {
                var t, a = e.swiper,
                    r = e.targetPosition,
                    i = e.side,
                    s = h(),
                    l = -a.translate,
                    o = null,
                    d = a.params.speed;
                a.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(a.cssModeFrameID);
                var c = r > l ? "next" : "prev",
                    u = function(e, t) {
                        return "next" === c && e >= t || "prev" === c && e <= t
                    };
                ! function e() {
                    t = (new Date).getTime(), null === o && (o = t);
                    var c = Math.max(Math.min((t - o) / d, 1), 0),
                        p = .5 - Math.cos(c * Math.PI) / 2,
                        f = l + p * (r - l);
                    if (u(f, r) && (f = r), a.wrapperEl.scrollTo(Object(n.a)({}, i, f)), u(f, r)) return a.wrapperEl.style.overflow = "hidden", a.wrapperEl.style.scrollSnapType = "", setTimeout((function() {
                        a.wrapperEl.style.overflow = "", a.wrapperEl.scrollTo(Object(n.a)({}, i, f))
                    })), void s.cancelAnimationFrame(a.cssModeFrameID);
                    a.cssModeFrameID = s.requestAnimationFrame(e)
                }()
            }

            function H() {
                return P || (P = function() {
                    var e = h(),
                        t = f();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function() {
                            var t = !1;
                            try {
                                var a = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, a)
                            } catch (n) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), P
            }

            function V(e) {
                return void 0 === e && (e = {}), j || (j = function(e) {
                    var t = (void 0 === e ? {} : e).userAgent,
                        a = H(),
                        n = h(),
                        r = n.navigator.platform,
                        i = t || n.navigator.userAgent,
                        s = {
                            ios: !1,
                            android: !1
                        },
                        l = n.screen.width,
                        o = n.screen.height,
                        d = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                        c = i.match(/(iPad).*OS\s([\d_]+)/),
                        u = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                        p = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        f = "Win32" === r,
                        v = "MacIntel" === r;
                    return !c && v && a.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(l, "x").concat(o)) >= 0 && ((c = i.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]), v = !1), d && !f && (s.os = "android", s.android = !0), (c || p || u) && (s.os = "ios", s.ios = !0), s
                }(e)), j
            }

            function R() {
                return L || (L = function() {
                    var e = h();
                    return {
                        isSafari: function() {
                            var t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), L
            }

            function F(e) {
                var t = e.swiper,
                    a = e.runCallbacks,
                    n = e.direction,
                    r = e.step,
                    i = t.activeIndex,
                    s = t.previousIndex,
                    l = n;
                if (l || (l = i > s ? "next" : i < s ? "prev" : "reset"), t.emit("transition".concat(r)), a && i !== s) {
                    if ("reset" === l) return void t.emit("slideResetTransition".concat(r));
                    t.emit("slideChangeTransition".concat(r)), "next" === l ? t.emit("slideNextTransition".concat(r)) : t.emit("slidePrevTransition".concat(r))
                }
            }

            function q(e) {
                var t = this,
                    a = f(),
                    n = h(),
                    r = t.touchEventsData,
                    i = t.params,
                    s = t.touches;
                if (t.enabled && (!t.animating || !i.preventInteractionOnTransition)) {
                    !t.animating && i.cssMode && i.loop && t.loopFix();
                    var l = e;
                    l.originalEvent && (l = l.originalEvent);
                    var o = z(l.target);
                    if (("wrapper" !== i.touchEventsTarget || o.closest(t.wrapperEl).length) && (r.isTouchEvent = "touchstart" === l.type, (r.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!r.isTouchEvent && "button" in l && l.button > 0) && (!r.isTouched || !r.isMoved))) {
                        !!i.noSwipingClass && "" !== i.noSwipingClass && l.target && l.target.shadowRoot && e.path && e.path[0] && (o = z(e.path[0]));
                        var d = i.noSwipingSelector ? i.noSwipingSelector : ".".concat(i.noSwipingClass),
                            c = !(!l.target || !l.target.shadowRoot);
                        if (i.noSwiping && (c ? function(e, t) {
                                return void 0 === t && (t = this),
                                    function t(a) {
                                        if (!a || a === f() || a === h()) return null;
                                        a.assignedSlot && (a = a.assignedSlot);
                                        var n = a.closest(e);
                                        return n || a.getRootNode ? n || t(a.getRootNode().host) : null
                                    }(t)
                            }(d, o[0]) : o.closest(d)[0])) t.allowClick = !0;
                        else if (!i.swipeHandler || o.closest(i.swipeHandler)[0]) {
                            s.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, s.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                            var u = s.currentX,
                                p = s.currentY,
                                v = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                                m = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                            if (v && (u <= m || u >= n.innerWidth - m)) {
                                if ("prevent" !== v) return;
                                e.preventDefault()
                            }
                            if (Object.assign(r, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), s.startX = u, s.startY = p, r.touchStartTime = A(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, i.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== l.type) {
                                var g = !0;
                                o.is(r.focusableElements) && (g = !1, "SELECT" === o[0].nodeName && (r.isTouched = !1)), a.activeElement && z(a.activeElement).is(r.focusableElements) && a.activeElement !== o[0] && a.activeElement.blur();
                                var b = g && t.allowTouchMove && i.touchStartPreventDefault;
                                !i.touchStartForcePreventDefault && !b || o[0].isContentEditable || l.preventDefault()
                            }
                            t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !i.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", l)
                        }
                    }
                }
            }

            function W(e) {
                var t = f(),
                    a = this,
                    n = a.touchEventsData,
                    r = a.params,
                    i = a.touches,
                    s = a.rtlTranslate;
                if (a.enabled) {
                    var l = e;
                    if (l.originalEvent && (l = l.originalEvent), n.isTouched) {
                        if (!n.isTouchEvent || "touchmove" === l.type) {
                            var o = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                                d = "touchmove" === l.type ? o.pageX : l.pageX,
                                c = "touchmove" === l.type ? o.pageY : l.pageY;
                            if (l.preventedByNestedSwiper) return i.startX = d, void(i.startY = c);
                            if (!a.allowTouchMove) return z(l.target).is(n.focusableElements) || (a.allowClick = !1), void(n.isTouched && (Object.assign(i, {
                                startX: d,
                                startY: c,
                                currentX: d,
                                currentY: c
                            }), n.touchStartTime = A()));
                            if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                                if (a.isVertical()) {
                                    if (c < i.startY && a.translate <= a.maxTranslate() || c > i.startY && a.translate >= a.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
                                } else if (d < i.startX && a.translate <= a.maxTranslate() || d > i.startX && a.translate >= a.minTranslate()) return;
                            if (n.isTouchEvent && t.activeElement && l.target === t.activeElement && z(l.target).is(n.focusableElements)) return n.isMoved = !0, void(a.allowClick = !1);
                            if (n.allowTouchCallbacks && a.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                                i.currentX = d, i.currentY = c;
                                var u = i.currentX - i.startX,
                                    p = i.currentY - i.startY;
                                if (!(a.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(p, 2)) < a.params.threshold)) {
                                    var v;
                                    if ("undefined" === typeof n.isScrolling) a.isHorizontal() && i.currentY === i.startY || a.isVertical() && i.currentX === i.startX ? n.isScrolling = !1 : u * u + p * p >= 25 && (v = 180 * Math.atan2(Math.abs(p), Math.abs(u)) / Math.PI, n.isScrolling = a.isHorizontal() ? v > r.touchAngle : 90 - v > r.touchAngle);
                                    if (n.isScrolling && a.emit("touchMoveOpposite", l), "undefined" === typeof n.startMoving && (i.currentX === i.startX && i.currentY === i.startY || (n.startMoving = !0)), n.isScrolling) n.isTouched = !1;
                                    else if (n.startMoving) {
                                        a.allowClick = !1, !r.cssMode && l.cancelable && l.preventDefault(), r.touchMoveStopPropagation && !r.nested && l.stopPropagation(), n.isMoved || (r.loop && !r.cssMode && a.loopFix(), n.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !r.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", l)), a.emit("sliderMove", l), n.isMoved = !0;
                                        var h = a.isHorizontal() ? u : p;
                                        i.diff = h, h *= r.touchRatio, s && (h = -h), a.swipeDirection = h > 0 ? "prev" : "next", n.currentTranslate = h + n.startTranslate;
                                        var m = !0,
                                            g = r.resistanceRatio;
                                        if (r.touchReleaseOnEdges && (g = 0), h > 0 && n.currentTranslate > a.minTranslate() ? (m = !1, r.resistance && (n.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + n.startTranslate + h, g))) : h < 0 && n.currentTranslate < a.maxTranslate() && (m = !1, r.resistance && (n.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - n.startTranslate - h, g))), m && (l.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), a.allowSlidePrev || a.allowSlideNext || (n.currentTranslate = n.startTranslate), r.threshold > 0) {
                                            if (!(Math.abs(h) > r.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                                            if (!n.allowThresholdMove) return n.allowThresholdMove = !0, i.startX = i.currentX, i.startY = i.currentY, n.currentTranslate = n.startTranslate, void(i.diff = a.isHorizontal() ? i.currentX - i.startX : i.currentY - i.startY)
                                        }
                                        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && a.freeMode || r.watchSlidesProgress) && (a.updateActiveIndex(), a.updateSlidesClasses()), a.params.freeMode && r.freeMode.enabled && a.freeMode && a.freeMode.onTouchMove(), a.updateProgress(n.currentTranslate), a.setTranslate(n.currentTranslate))
                                    }
                                }
                            }
                        }
                    } else n.startMoving && n.isScrolling && a.emit("touchMoveOpposite", l)
                }
            }

            function Y(e) {
                var t = this,
                    a = t.touchEventsData,
                    n = t.params,
                    r = t.touches,
                    i = t.rtlTranslate,
                    s = t.slidesGrid;
                if (t.enabled) {
                    var l = e;
                    if (l.originalEvent && (l = l.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", l), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && n.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void(a.startMoving = !1);
                    n.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var o, d = A(),
                        c = d - a.touchStartTime;
                    if (t.allowClick) {
                        var u = l.path || l.composedPath && l.composedPath();
                        t.updateClickedSlide(u && u[0] || l.target), t.emit("tap click", l), c < 300 && d - a.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
                    }
                    if (a.lastClickTime = A(), D((function() {
                            t.destroyed || (t.allowClick = !0)
                        })), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === r.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void(a.startMoving = !1);
                    if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, o = n.followFinger ? i ? t.translate : -t.translate : -a.currentTranslate, !n.cssMode)
                        if (t.params.freeMode && n.freeMode.enabled) t.freeMode.onTouchEnd({
                            currentPos: o
                        });
                        else {
                            for (var p = 0, f = t.slidesSizesGrid[0], v = 0; v < s.length; v += v < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                                var h = v < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                                "undefined" !== typeof s[v + h] ? o >= s[v] && o < s[v + h] && (p = v, f = s[v + h] - s[v]) : o >= s[v] && (p = v, f = s[s.length - 1] - s[s.length - 2])
                            }
                            var m = null,
                                g = null;
                            n.rewind && (t.isBeginning ? g = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (m = 0));
                            var b = (o - s[p]) / f,
                                w = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                            if (c > n.longSwipesMs) {
                                if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && (b >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? m : p + w) : t.slideTo(p)), "prev" === t.swipeDirection && (b > 1 - n.longSwipesRatio ? t.slideTo(p + w) : null !== g && b < 0 && Math.abs(b) > n.longSwipesRatio ? t.slideTo(g) : t.slideTo(p))
                            } else {
                                if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                                t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(p + w) : t.slideTo(p) : ("next" === t.swipeDirection && t.slideTo(null !== m ? m : p + w), "prev" === t.swipeDirection && t.slideTo(null !== g ? g : p))
                            }
                        }
                }
            }

            function X() {
                var e = this,
                    t = e.params,
                    a = e.el;
                if (!a || 0 !== a.offsetWidth) {
                    t.breakpoints && e.setBreakpoint();
                    var n = e.allowSlideNext,
                        r = e.allowSlidePrev,
                        i = e.snapGrid;
                    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = r, e.allowSlideNext = n, e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow()
                }
            }

            function U(e) {
                var t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function K() {
                var e = this,
                    t = e.wrapperEl,
                    a = e.rtlTranslate;
                if (e.enabled) {
                    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                    var n = e.maxTranslate() - e.minTranslate();
                    (0 === n ? 0 : (e.translate - e.minTranslate()) / n) !== e.progress && e.updateProgress(a ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
                }
            }
            var Z = !1;

            function J() {}
            var Q = function(e, t) {
                var a = f(),
                    n = e.params,
                    r = e.touchEvents,
                    i = e.el,
                    s = e.wrapperEl,
                    l = e.device,
                    o = e.support,
                    d = !!n.nested,
                    c = "on" === t ? "addEventListener" : "removeEventListener",
                    u = t;
                if (o.touch) {
                    var p = !("touchstart" !== r.start || !o.passiveListener || !n.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    i[c](r.start, e.onTouchStart, p), i[c](r.move, e.onTouchMove, o.passiveListener ? {
                        passive: !1,
                        capture: d
                    } : d), i[c](r.end, e.onTouchEnd, p), r.cancel && i[c](r.cancel, e.onTouchEnd, p)
                } else i[c](r.start, e.onTouchStart, !1), a[c](r.move, e.onTouchMove, d), a[c](r.end, e.onTouchEnd, !1);
                (n.preventClicks || n.preventClicksPropagation) && i[c]("click", e.onClick, !0), n.cssMode && s[c]("scroll", e.onScroll), n.updateOnWindowResize ? e[u](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", X, !0) : e[u]("observerUpdate", X, !0)
            };
            var ee = function(e, t) {
                return e.grid && t.grid && t.grid.rows > 1
            };
            var te = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function ae(e, t) {
                return function(a) {
                    void 0 === a && (a = {});
                    var n = Object.keys(a)[0],
                        r = a[n];
                    "object" === typeof r && null !== r ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === e[n] && (e[n] = {
                        auto: !0
                    }), n in e && "enabled" in r ? (!0 === e[n] && (e[n] = {
                        enabled: !0
                    }), "object" !== typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
                        enabled: !1
                    }), N(t, a)) : N(t, a)) : N(t, a)
                }
            }
            var ne = {
                    eventsEmitter: {
                        on: function(e, t, a) {
                            var n = this;
                            if (!n.eventsListeners || n.destroyed) return n;
                            if ("function" !== typeof t) return n;
                            var r = a ? "unshift" : "push";
                            return e.split(" ").forEach((function(e) {
                                n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][r](t)
                            })), n
                        },
                        once: function(e, t, a) {
                            var n = this;
                            if (!n.eventsListeners || n.destroyed) return n;
                            if ("function" !== typeof t) return n;

                            function r() {
                                n.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                                for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
                                t.apply(n, i)
                            }
                            return r.__emitterProxy = t, n.on(e, r, a)
                        },
                        onAny: function(e, t) {
                            var a = this;
                            if (!a.eventsListeners || a.destroyed) return a;
                            if ("function" !== typeof e) return a;
                            var n = t ? "unshift" : "push";
                            return a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[n](e), a
                        },
                        offAny: function(e) {
                            var t = this;
                            if (!t.eventsListeners || t.destroyed) return t;
                            if (!t.eventsAnyListeners) return t;
                            var a = t.eventsAnyListeners.indexOf(e);
                            return a >= 0 && t.eventsAnyListeners.splice(a, 1), t
                        },
                        off: function(e, t) {
                            var a = this;
                            return !a.eventsListeners || a.destroyed ? a : a.eventsListeners ? (e.split(" ").forEach((function(e) {
                                "undefined" === typeof t ? a.eventsListeners[e] = [] : a.eventsListeners[e] && a.eventsListeners[e].forEach((function(n, r) {
                                    (n === t || n.__emitterProxy && n.__emitterProxy === t) && a.eventsListeners[e].splice(r, 1)
                                }))
                            })), a) : a
                        },
                        emit: function() {
                            var e, t, a, n = this;
                            if (!n.eventsListeners || n.destroyed) return n;
                            if (!n.eventsListeners) return n;
                            for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
                            "string" === typeof s[0] || Array.isArray(s[0]) ? (e = s[0], t = s.slice(1, s.length), a = n) : (e = s[0].events, t = s[0].data, a = s[0].context || n), t.unshift(a);
                            var o = Array.isArray(e) ? e : e.split(" ");
                            return o.forEach((function(e) {
                                n.eventsAnyListeners && n.eventsAnyListeners.length && n.eventsAnyListeners.forEach((function(n) {
                                    n.apply(a, [e].concat(Object(r.a)(t)))
                                })), n.eventsListeners && n.eventsListeners[e] && n.eventsListeners[e].forEach((function(e) {
                                    e.apply(a, t)
                                }))
                            })), n
                        }
                    },
                    update: {
                        updateSize: function() {
                            var e, t, a = this,
                                n = a.$el;
                            e = "undefined" !== typeof a.params.width && null !== a.params.width ? a.params.width : n[0].clientWidth, t = "undefined" !== typeof a.params.height && null !== a.params.height ? a.params.height : n[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10), t = t - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(a, {
                                width: e,
                                height: t,
                                size: a.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            var e = this;

                            function t(t) {
                                return e.isHorizontal() ? t : {
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                }[t]
                            }

                            function a(e, a) {
                                return parseFloat(e.getPropertyValue(t(a)) || 0)
                            }
                            var r = e.params,
                                i = e.$wrapperEl,
                                s = e.size,
                                l = e.rtlTranslate,
                                o = e.wrongRTL,
                                d = e.virtual && r.virtual.enabled,
                                c = d ? e.virtual.slides.length : e.slides.length,
                                u = i.children(".".concat(e.params.slideClass)),
                                p = d ? e.virtual.slides.length : u.length,
                                f = [],
                                v = [],
                                h = [],
                                m = r.slidesOffsetBefore;
                            "function" === typeof m && (m = r.slidesOffsetBefore.call(e));
                            var g = r.slidesOffsetAfter;
                            "function" === typeof g && (g = r.slidesOffsetAfter.call(e));
                            var b = e.snapGrid.length,
                                w = e.slidesGrid.length,
                                y = r.spaceBetween,
                                C = -m,
                                x = 0,
                                T = 0;
                            if ("undefined" !== typeof s) {
                                "string" === typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * s), e.virtualSize = -y, l ? u.css({
                                    marginLeft: "",
                                    marginBottom: "",
                                    marginTop: ""
                                }) : u.css({
                                    marginRight: "",
                                    marginBottom: "",
                                    marginTop: ""
                                }), r.centeredSlides && r.cssMode && (B(e.wrapperEl, "--swiper-centered-offset-before", ""), B(e.wrapperEl, "--swiper-centered-offset-after", ""));
                                var S, E = r.grid && r.grid.rows > 1 && e.grid;
                                E && e.grid.initSlides(p);
                                for (var O = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((function(e) {
                                        return "undefined" !== typeof r.breakpoints[e].slidesPerView
                                    })).length > 0, M = 0; M < p; M += 1) {
                                    S = 0;
                                    var k = u.eq(M);
                                    if (E && e.grid.updateSlide(M, k, p, t), "none" !== k.css("display")) {
                                        if ("auto" === r.slidesPerView) {
                                            O && (u[M].style[t("width")] = "");
                                            var P = getComputedStyle(k[0]),
                                                j = k[0].style.transform,
                                                L = k[0].style.webkitTransform;
                                            if (j && (k[0].style.transform = "none"), L && (k[0].style.webkitTransform = "none"), r.roundLengths) S = e.isHorizontal() ? k.outerWidth(!0) : k.outerHeight(!0);
                                            else {
                                                var z = a(P, "width"),
                                                    D = a(P, "padding-left"),
                                                    A = a(P, "padding-right"),
                                                    I = a(P, "margin-left"),
                                                    _ = a(P, "margin-right"),
                                                    $ = P.getPropertyValue("box-sizing");
                                                if ($ && "border-box" === $) S = z + I + _;
                                                else {
                                                    var N = k[0],
                                                        G = N.clientWidth;
                                                    S = z + D + A + I + _ + (N.offsetWidth - G)
                                                }
                                            }
                                            j && (k[0].style.transform = j), L && (k[0].style.webkitTransform = L), r.roundLengths && (S = Math.floor(S))
                                        } else S = (s - (r.slidesPerView - 1) * y) / r.slidesPerView, r.roundLengths && (S = Math.floor(S)), u[M] && (u[M].style[t("width")] = "".concat(S, "px"));
                                        u[M] && (u[M].swiperSlideSize = S), h.push(S), r.centeredSlides ? (C = C + S / 2 + x / 2 + y, 0 === x && 0 !== M && (C = C - s / 2 - y), 0 === M && (C = C - s / 2 - y), Math.abs(C) < .001 && (C = 0), r.roundLengths && (C = Math.floor(C)), T % r.slidesPerGroup === 0 && f.push(C), v.push(C)) : (r.roundLengths && (C = Math.floor(C)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup === 0 && f.push(C), v.push(C), C = C + S + y), e.virtualSize += S + y, x = S, T += 1
                                    }
                                }
                                if (e.virtualSize = Math.max(e.virtualSize, s) + g, l && o && ("slide" === r.effect || "coverflow" === r.effect) && i.css({
                                        width: "".concat(e.virtualSize + r.spaceBetween, "px")
                                    }), r.setWrapperSize && i.css(Object(n.a)({}, t("width"), "".concat(e.virtualSize + r.spaceBetween, "px"))), E && e.grid.updateWrapperSize(S, f, t), !r.centeredSlides) {
                                    for (var H = [], V = 0; V < f.length; V += 1) {
                                        var R = f[V];
                                        r.roundLengths && (R = Math.floor(R)), f[V] <= e.virtualSize - s && H.push(R)
                                    }
                                    f = H, Math.floor(e.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - s)
                                }
                                if (0 === f.length && (f = [0]), 0 !== r.spaceBetween) {
                                    var F = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
                                    u.filter((function(e, t) {
                                        return !r.cssMode || t !== u.length - 1
                                    })).css(Object(n.a)({}, F, "".concat(y, "px")))
                                }
                                if (r.centeredSlides && r.centeredSlidesBounds) {
                                    var q = 0;
                                    h.forEach((function(e) {
                                        q += e + (r.spaceBetween ? r.spaceBetween : 0)
                                    }));
                                    var W = (q -= r.spaceBetween) - s;
                                    f = f.map((function(e) {
                                        return e < 0 ? -m : e > W ? W + g : e
                                    }))
                                }
                                if (r.centerInsufficientSlides) {
                                    var Y = 0;
                                    if (h.forEach((function(e) {
                                            Y += e + (r.spaceBetween ? r.spaceBetween : 0)
                                        })), (Y -= r.spaceBetween) < s) {
                                        var X = (s - Y) / 2;
                                        f.forEach((function(e, t) {
                                            f[t] = e - X
                                        })), v.forEach((function(e, t) {
                                            v[t] = e + X
                                        }))
                                    }
                                }
                                if (Object.assign(e, {
                                        slides: u,
                                        snapGrid: f,
                                        slidesGrid: v,
                                        slidesSizesGrid: h
                                    }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                                    B(e.wrapperEl, "--swiper-centered-offset-before", "".concat(-f[0], "px")), B(e.wrapperEl, "--swiper-centered-offset-after", "".concat(e.size / 2 - h[h.length - 1] / 2, "px"));
                                    var U = -e.snapGrid[0],
                                        K = -e.slidesGrid[0];
                                    e.snapGrid = e.snapGrid.map((function(e) {
                                        return e + U
                                    })), e.slidesGrid = e.slidesGrid.map((function(e) {
                                        return e + K
                                    }))
                                }
                                if (p !== c && e.emit("slidesLengthChange"), f.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), v.length !== w && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), !d && !r.cssMode && ("slide" === r.effect || "fade" === r.effect)) {
                                    var Z = "".concat(r.containerModifierClass, "backface-hidden"),
                                        J = e.$el.hasClass(Z);
                                    p <= r.maxBackfaceHiddenSlides ? J || e.$el.addClass(Z) : J && e.$el.removeClass(Z)
                                }
                            }
                        },
                        updateAutoHeight: function(e) {
                            var t, a = this,
                                n = [],
                                r = a.virtual && a.params.virtual.enabled,
                                i = 0;
                            "number" === typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed);
                            var s = function(e) {
                                return r ? a.slides.filter((function(t) {
                                    return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
                                }))[0] : a.slides.eq(e)[0]
                            };
                            if ("auto" !== a.params.slidesPerView && a.params.slidesPerView > 1)
                                if (a.params.centeredSlides)(a.visibleSlides || z([])).each((function(e) {
                                    n.push(e)
                                }));
                                else
                                    for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                                        var l = a.activeIndex + t;
                                        if (l > a.slides.length && !r) break;
                                        n.push(s(l))
                                    } else n.push(s(a.activeIndex));
                            for (t = 0; t < n.length; t += 1)
                                if ("undefined" !== typeof n[t]) {
                                    var o = n[t].offsetHeight;
                                    i = o > i ? o : i
                                }(i || 0 === i) && a.$wrapperEl.css("height", "".concat(i, "px"))
                        },
                        updateSlidesOffset: function() {
                            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                        },
                        updateSlidesProgress: function(e) {
                            void 0 === e && (e = this && this.translate || 0);
                            var t = this,
                                a = t.params,
                                n = t.slides,
                                r = t.rtlTranslate,
                                i = t.snapGrid;
                            if (0 !== n.length) {
                                "undefined" === typeof n[0].swiperSlideOffset && t.updateSlidesOffset();
                                var s = -e;
                                r && (s = e), n.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                                for (var l = 0; l < n.length; l += 1) {
                                    var o = n[l],
                                        d = o.swiperSlideOffset;
                                    a.cssMode && a.centeredSlides && (d -= n[0].swiperSlideOffset);
                                    var c = (s + (a.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + a.spaceBetween),
                                        u = (s - i[0] + (a.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + a.spaceBetween),
                                        p = -(s - d),
                                        f = p + t.slidesSizesGrid[l];
                                    (p >= 0 && p < t.size - 1 || f > 1 && f <= t.size || p <= 0 && f >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(l), n.eq(l).addClass(a.slideVisibleClass)), o.progress = r ? -c : c, o.originalProgress = r ? -u : u
                                }
                                t.visibleSlides = z(t.visibleSlides)
                            }
                        },
                        updateProgress: function(e) {
                            var t = this;
                            if ("undefined" === typeof e) {
                                var a = t.rtlTranslate ? -1 : 1;
                                e = t && t.translate && t.translate * a || 0
                            }
                            var n = t.params,
                                r = t.maxTranslate() - t.minTranslate(),
                                i = t.progress,
                                s = t.isBeginning,
                                l = t.isEnd,
                                o = s,
                                d = l;
                            0 === r ? (i = 0, s = !0, l = !0) : (s = (i = (e - t.minTranslate()) / r) <= 0, l = i >= 1), Object.assign(t, {
                                progress: i,
                                isBeginning: s,
                                isEnd: l
                            }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), s && !o && t.emit("reachBeginning toEdge"), l && !d && t.emit("reachEnd toEdge"), (o && !s || d && !l) && t.emit("fromEdge"), t.emit("progress", i)
                        },
                        updateSlidesClasses: function() {
                            var e, t = this,
                                a = t.slides,
                                n = t.params,
                                r = t.$wrapperEl,
                                i = t.activeIndex,
                                s = t.realIndex,
                                l = t.virtual && n.virtual.enabled;
                            a.removeClass("".concat(n.slideActiveClass, " ").concat(n.slideNextClass, " ").concat(n.slidePrevClass, " ").concat(n.slideDuplicateActiveClass, " ").concat(n.slideDuplicateNextClass, " ").concat(n.slideDuplicatePrevClass)), (e = l ? t.$wrapperEl.find(".".concat(n.slideClass, '[data-swiper-slide-index="').concat(i, '"]')) : a.eq(i)).addClass(n.slideActiveClass), n.loop && (e.hasClass(n.slideDuplicateClass) ? r.children(".".concat(n.slideClass, ":not(.").concat(n.slideDuplicateClass, ')[data-swiper-slide-index="').concat(s, '"]')).addClass(n.slideDuplicateActiveClass) : r.children(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass, '[data-swiper-slide-index="').concat(s, '"]')).addClass(n.slideDuplicateActiveClass));
                            var o = e.nextAll(".".concat(n.slideClass)).eq(0).addClass(n.slideNextClass);
                            n.loop && 0 === o.length && (o = a.eq(0)).addClass(n.slideNextClass);
                            var d = e.prevAll(".".concat(n.slideClass)).eq(0).addClass(n.slidePrevClass);
                            n.loop && 0 === d.length && (d = a.eq(-1)).addClass(n.slidePrevClass), n.loop && (o.hasClass(n.slideDuplicateClass) ? r.children(".".concat(n.slideClass, ":not(.").concat(n.slideDuplicateClass, ')[data-swiper-slide-index="').concat(o.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicateNextClass) : r.children(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass, '[data-swiper-slide-index="').concat(o.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicateNextClass), d.hasClass(n.slideDuplicateClass) ? r.children(".".concat(n.slideClass, ":not(.").concat(n.slideDuplicateClass, ')[data-swiper-slide-index="').concat(d.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicatePrevClass) : r.children(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass, '[data-swiper-slide-index="').concat(d.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicatePrevClass)), t.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            var t, a = this,
                                n = a.rtlTranslate ? a.translate : -a.translate,
                                r = a.slidesGrid,
                                i = a.snapGrid,
                                s = a.params,
                                l = a.activeIndex,
                                o = a.realIndex,
                                d = a.snapIndex,
                                c = e;
                            if ("undefined" === typeof c) {
                                for (var u = 0; u < r.length; u += 1) "undefined" !== typeof r[u + 1] ? n >= r[u] && n < r[u + 1] - (r[u + 1] - r[u]) / 2 ? c = u : n >= r[u] && n < r[u + 1] && (c = u + 1) : n >= r[u] && (c = u);
                                s.normalizeSlideIndex && (c < 0 || "undefined" === typeof c) && (c = 0)
                            }
                            if (i.indexOf(n) >= 0) t = i.indexOf(n);
                            else {
                                var p = Math.min(s.slidesPerGroupSkip, c);
                                t = p + Math.floor((c - p) / s.slidesPerGroup)
                            }
                            if (t >= i.length && (t = i.length - 1), c !== l) {
                                var f = parseInt(a.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                                Object.assign(a, {
                                    snapIndex: t,
                                    realIndex: f,
                                    previousIndex: l,
                                    activeIndex: c
                                }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), o !== f && a.emit("realIndexChange"), (a.initialized || a.params.runCallbacksOnInit) && a.emit("slideChange")
                            } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
                        },
                        updateClickedSlide: function(e) {
                            var t, a = this,
                                n = a.params,
                                r = z(e).closest(".".concat(n.slideClass))[0],
                                i = !1;
                            if (r)
                                for (var s = 0; s < a.slides.length; s += 1)
                                    if (a.slides[s] === r) {
                                        i = !0, t = s;
                                        break
                                    }
                            if (!r || !i) return a.clickedSlide = void 0, void(a.clickedIndex = void 0);
                            a.clickedSlide = r, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(z(r).attr("data-swiper-slide-index"), 10) : a.clickedIndex = t, n.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e) {
                            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                            var t = this,
                                a = t.params,
                                n = t.rtlTranslate,
                                r = t.translate,
                                i = t.$wrapperEl;
                            if (a.virtualTranslate) return n ? -r : r;
                            if (a.cssMode) return r;
                            var s = I(i[0], e);
                            return n && (s = -s), s || 0
                        },
                        setTranslate: function(e, t) {
                            var a = this,
                                n = a.rtlTranslate,
                                r = a.params,
                                i = a.$wrapperEl,
                                s = a.wrapperEl,
                                l = a.progress,
                                o = 0,
                                d = 0;
                            a.isHorizontal() ? o = n ? -e : e : d = e, r.roundLengths && (o = Math.floor(o), d = Math.floor(d)), r.cssMode ? s[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -o : -d : r.virtualTranslate || i.transform("translate3d(".concat(o, "px, ").concat(d, "px, ").concat(0, "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : d;
                            var c = a.maxTranslate() - a.minTranslate();
                            (0 === c ? 0 : (e - a.minTranslate()) / c) !== l && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e, t, a, r, i) {
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), void 0 === r && (r = !0);
                            var s = this,
                                l = s.params,
                                o = s.wrapperEl;
                            if (s.animating && l.preventInteractionOnTransition) return !1;
                            var d, c = s.minTranslate(),
                                u = s.maxTranslate();
                            if (d = r && e > c ? c : r && e < u ? u : e, s.updateProgress(d), l.cssMode) {
                                var p = s.isHorizontal();
                                if (0 === t) o[p ? "scrollLeft" : "scrollTop"] = -d;
                                else {
                                    var f;
                                    if (!s.support.smoothScroll) return G({
                                        swiper: s,
                                        targetPosition: -d,
                                        side: p ? "left" : "top"
                                    }), !0;
                                    o.scrollTo((f = {}, Object(n.a)(f, p ? "left" : "top", -d), Object(n.a)(f, "behavior", "smooth"), f))
                                }
                                return !0
                            }
                            return 0 === t ? (s.setTransition(0), s.setTranslate(d), a && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(d), a && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(e) {
                                s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, a && s.emit("transitionEnd"))
                            }), s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            var a = this;
                            a.params.cssMode || a.$wrapperEl.transition(e), a.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            var a = this,
                                n = a.params;
                            n.cssMode || (n.autoHeight && a.updateAutoHeight(), F({
                                swiper: a,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            var a = this,
                                n = a.params;
                            a.animating = !1, n.cssMode || (a.setTransition(0), F({
                                swiper: a,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e, t, a, r, i) {
                            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), "number" !== typeof e && "string" !== typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(typeof e, "] given."));
                            if ("string" === typeof e) {
                                var s = parseInt(e, 10);
                                if (!isFinite(s)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
                                e = s
                            }
                            var l = this,
                                o = e;
                            o < 0 && (o = 0);
                            var d = l.params,
                                c = l.snapGrid,
                                u = l.slidesGrid,
                                p = l.previousIndex,
                                f = l.activeIndex,
                                v = l.rtlTranslate,
                                h = l.wrapperEl,
                                m = l.enabled;
                            if (l.animating && d.preventInteractionOnTransition || !m && !r && !i) return !1;
                            var g = Math.min(l.params.slidesPerGroupSkip, o),
                                b = g + Math.floor((o - g) / l.params.slidesPerGroup);
                            b >= c.length && (b = c.length - 1), (f || d.initialSlide || 0) === (p || 0) && a && l.emit("beforeSlideChangeStart");
                            var w, y = -c[b];
                            if (l.updateProgress(y), d.normalizeSlideIndex)
                                for (var C = 0; C < u.length; C += 1) {
                                    var x = -Math.floor(100 * y),
                                        T = Math.floor(100 * u[C]),
                                        S = Math.floor(100 * u[C + 1]);
                                    "undefined" !== typeof u[C + 1] ? x >= T && x < S - (S - T) / 2 ? o = C : x >= T && x < S && (o = C + 1) : x >= T && (o = C)
                                }
                            if (l.initialized && o !== f) {
                                if (!l.allowSlideNext && y < l.translate && y < l.minTranslate()) return !1;
                                if (!l.allowSlidePrev && y > l.translate && y > l.maxTranslate() && (f || 0) !== o) return !1
                            }
                            if (w = o > f ? "next" : o < f ? "prev" : "reset", v && -y === l.translate || !v && y === l.translate) return l.updateActiveIndex(o), d.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== d.effect && l.setTranslate(y), "reset" !== w && (l.transitionStart(a, w), l.transitionEnd(a, w)), !1;
                            if (d.cssMode) {
                                var E = l.isHorizontal(),
                                    O = v ? y : -y;
                                if (0 === t) {
                                    var M = l.virtual && l.params.virtual.enabled;
                                    M && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), h[E ? "scrollLeft" : "scrollTop"] = O, M && requestAnimationFrame((function() {
                                        l.wrapperEl.style.scrollSnapType = "", l._swiperImmediateVirtual = !1
                                    }))
                                } else {
                                    var k;
                                    if (!l.support.smoothScroll) return G({
                                        swiper: l,
                                        targetPosition: O,
                                        side: E ? "left" : "top"
                                    }), !0;
                                    h.scrollTo((k = {}, Object(n.a)(k, E ? "left" : "top", O), Object(n.a)(k, "behavior", "smooth"), k))
                                }
                                return !0
                            }
                            return l.setTransition(t), l.setTranslate(y), l.updateActiveIndex(o), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, r), l.transitionStart(a, w), 0 === t ? l.transitionEnd(a, w) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.$wrapperEl[0].removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.$wrapperEl[0].removeEventListener("webkitTransitionEnd", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(a, w))
                            }), l.$wrapperEl[0].addEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.$wrapperEl[0].addEventListener("webkitTransitionEnd", l.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e, t, a, n) {
                            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), "string" === typeof e) {
                                var r = parseInt(e, 10);
                                if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
                                e = r
                            }
                            var i = this,
                                s = e;
                            return i.params.loop && (s += i.loopedSlides), i.slideTo(s, t, a, n)
                        },
                        slideNext: function(e, t, a) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            var n = this,
                                r = n.animating,
                                i = n.enabled,
                                s = n.params;
                            if (!i) return n;
                            var l = s.slidesPerGroup;
                            "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (l = Math.max(n.slidesPerViewDynamic("current", !0), 1));
                            var o = n.activeIndex < s.slidesPerGroupSkip ? 1 : l;
                            if (s.loop) {
                                if (r && s.loopPreventsSlide) return !1;
                                n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                            }
                            return s.rewind && n.isEnd ? n.slideTo(0, e, t, a) : n.slideTo(n.activeIndex + o, e, t, a)
                        },
                        slidePrev: function(e, t, a) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            var n = this,
                                r = n.params,
                                i = n.animating,
                                s = n.snapGrid,
                                l = n.slidesGrid,
                                o = n.rtlTranslate;
                            if (!n.enabled) return n;
                            if (r.loop) {
                                if (i && r.loopPreventsSlide) return !1;
                                n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                            }

                            function d(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            var c, u = d(o ? n.translate : -n.translate),
                                p = s.map((function(e) {
                                    return d(e)
                                })),
                                f = s[p.indexOf(u) - 1];
                            "undefined" === typeof f && r.cssMode && (s.forEach((function(e, t) {
                                u >= e && (c = t)
                            })), "undefined" !== typeof c && (f = s[c > 0 ? c - 1 : c]));
                            var v = 0;
                            if ("undefined" !== typeof f && ((v = l.indexOf(f)) < 0 && (v = n.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (v = v - n.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), r.rewind && n.isBeginning) {
                                var h = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
                                return n.slideTo(h, e, t, a)
                            }
                            return n.slideTo(v, e, t, a)
                        },
                        slideReset: function(e, t, a) {
                            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
                        },
                        slideToClosest: function(e, t, a, n) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = .5);
                            var r = this,
                                i = r.activeIndex,
                                s = Math.min(r.params.slidesPerGroupSkip, i),
                                l = s + Math.floor((i - s) / r.params.slidesPerGroup),
                                o = r.rtlTranslate ? r.translate : -r.translate;
                            if (o >= r.snapGrid[l]) {
                                var d = r.snapGrid[l];
                                o - d > (r.snapGrid[l + 1] - d) * n && (i += r.params.slidesPerGroup)
                            } else {
                                var c = r.snapGrid[l - 1];
                                o - c <= (r.snapGrid[l] - c) * n && (i -= r.params.slidesPerGroup)
                            }
                            return i = Math.max(i, 0), i = Math.min(i, r.slidesGrid.length - 1), r.slideTo(i, e, t, a)
                        },
                        slideToClickedSlide: function() {
                            var e, t = this,
                                a = t.params,
                                n = t.$wrapperEl,
                                r = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
                                i = t.clickedIndex;
                            if (a.loop) {
                                if (t.animating) return;
                                e = parseInt(z(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? i < t.loopedSlides - r / 2 || i > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), i = n.children(".".concat(a.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(a.slideDuplicateClass, ")")).eq(0).index(), D((function() {
                                    t.slideTo(i)
                                }))) : t.slideTo(i) : i > t.slides.length - r ? (t.loopFix(), i = n.children(".".concat(a.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(a.slideDuplicateClass, ")")).eq(0).index(), D((function() {
                                    t.slideTo(i)
                                }))) : t.slideTo(i)
                            } else t.slideTo(i)
                        }
                    },
                    loop: {
                        loopCreate: function() {
                            var e = this,
                                t = f(),
                                a = e.params,
                                n = e.$wrapperEl,
                                r = n.children().length > 0 ? z(n.children()[0].parentNode) : n;
                            r.children(".".concat(a.slideClass, ".").concat(a.slideDuplicateClass)).remove();
                            var i = r.children(".".concat(a.slideClass));
                            if (a.loopFillGroupWithBlank) {
                                var s = a.slidesPerGroup - i.length % a.slidesPerGroup;
                                if (s !== a.slidesPerGroup) {
                                    for (var l = 0; l < s; l += 1) {
                                        var o = z(t.createElement("div")).addClass("".concat(a.slideClass, " ").concat(a.slideBlankClass));
                                        r.append(o)
                                    }
                                    i = r.children(".".concat(a.slideClass))
                                }
                            }
                            "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = i.length), e.loopedSlides = Math.ceil(parseFloat(a.loopedSlides || a.slidesPerView, 10)), e.loopedSlides += a.loopAdditionalSlides, e.loopedSlides > i.length && e.params.loopedSlidesLimit && (e.loopedSlides = i.length);
                            var d = [],
                                c = [];
                            i.each((function(e, t) {
                                z(e).attr("data-swiper-slide-index", t)
                            }));
                            for (var u = 0; u < e.loopedSlides; u += 1) {
                                var p = u - Math.floor(u / i.length) * i.length;
                                c.push(i.eq(p)[0]), d.unshift(i.eq(i.length - p - 1)[0])
                            }
                            for (var v = 0; v < c.length; v += 1) r.append(z(c[v].cloneNode(!0)).addClass(a.slideDuplicateClass));
                            for (var h = d.length - 1; h >= 0; h -= 1) r.prepend(z(d[h].cloneNode(!0)).addClass(a.slideDuplicateClass))
                        },
                        loopFix: function() {
                            var e = this;
                            e.emit("beforeLoopFix");
                            var t, a = e.activeIndex,
                                n = e.slides,
                                r = e.loopedSlides,
                                i = e.allowSlidePrev,
                                s = e.allowSlideNext,
                                l = e.snapGrid,
                                o = e.rtlTranslate;
                            e.allowSlidePrev = !0, e.allowSlideNext = !0;
                            var d = -l[a] - e.getTranslate();
                            if (a < r) t = n.length - 3 * r + a, t += r, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);
                            else if (a >= n.length - r) {
                                t = -n.length + a + r, t += r, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)
                            }
                            e.allowSlidePrev = i, e.allowSlideNext = s, e.emit("loopFix")
                        },
                        loopDestroy: function() {
                            var e = this,
                                t = e.$wrapperEl,
                                a = e.params,
                                n = e.slides;
                            t.children(".".concat(a.slideClass, ".").concat(a.slideDuplicateClass, ",.").concat(a.slideClass, ".").concat(a.slideBlankClass)).remove(), n.removeAttr("data-swiper-slide-index")
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            var t = this;
                            if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
                                var a = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                                a.style.cursor = "move", a.style.cursor = e ? "grabbing" : "grab"
                            }
                        },
                        unsetGrabCursor: function() {
                            var e = this;
                            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: {
                        attachEvents: function() {
                            var e = this,
                                t = f(),
                                a = e.params,
                                n = e.support;
                            e.onTouchStart = q.bind(e), e.onTouchMove = W.bind(e), e.onTouchEnd = Y.bind(e), a.cssMode && (e.onScroll = K.bind(e)), e.onClick = U.bind(e), n.touch && !Z && (t.addEventListener("touchstart", J), Z = !0), Q(e, "on")
                        },
                        detachEvents: function() {
                            Q(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            var e = this,
                                t = e.activeIndex,
                                a = e.initialized,
                                n = e.loopedSlides,
                                r = void 0 === n ? 0 : n,
                                i = e.params,
                                s = e.$el,
                                l = i.breakpoints;
                            if (l && (!l || 0 !== Object.keys(l).length)) {
                                var o = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
                                if (o && e.currentBreakpoint !== o) {
                                    var d = (o in l ? l[o] : void 0) || e.originalParams,
                                        c = ee(e, i),
                                        u = ee(e, d),
                                        p = i.enabled;
                                    c && !u ? (s.removeClass("".concat(i.containerModifierClass, "grid ").concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !c && u && (s.addClass("".concat(i.containerModifierClass, "grid")), (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === i.grid.fill) && s.addClass("".concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((function(t) {
                                        var a = i[t] && i[t].enabled,
                                            n = d[t] && d[t].enabled;
                                        a && !n && e[t].disable(), !a && n && e[t].enable()
                                    }));
                                    var f = d.direction && d.direction !== i.direction,
                                        v = i.loop && (d.slidesPerView !== i.slidesPerView || f);
                                    f && a && e.changeDirection(), N(e.params, d);
                                    var h = e.params.enabled;
                                    Object.assign(e, {
                                        allowTouchMove: e.params.allowTouchMove,
                                        allowSlideNext: e.params.allowSlideNext,
                                        allowSlidePrev: e.params.allowSlidePrev
                                    }), p && !h ? e.disable() : !p && h && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", d), v && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - r + e.loopedSlides, 0, !1)), e.emit("breakpoint", d)
                                }
                            }
                        },
                        getBreakpoint: function(e, t, a) {
                            if (void 0 === t && (t = "window"), e && ("container" !== t || a)) {
                                var n = !1,
                                    r = h(),
                                    i = "window" === t ? r.innerHeight : a.clientHeight,
                                    s = Object.keys(e).map((function(e) {
                                        if ("string" === typeof e && 0 === e.indexOf("@")) {
                                            var t = parseFloat(e.substr(1));
                                            return {
                                                value: i * t,
                                                point: e
                                            }
                                        }
                                        return {
                                            value: e,
                                            point: e
                                        }
                                    }));
                                s.sort((function(e, t) {
                                    return parseInt(e.value, 10) - parseInt(t.value, 10)
                                }));
                                for (var l = 0; l < s.length; l += 1) {
                                    var o = s[l],
                                        d = o.point,
                                        c = o.value;
                                    "window" === t ? r.matchMedia("(min-width: ".concat(c, "px)")).matches && (n = d) : c <= a.clientWidth && (n = d)
                                }
                                return n || "max"
                            }
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            var e = this,
                                t = e.isLocked,
                                a = e.params,
                                n = a.slidesOffsetBefore;
                            if (n) {
                                var r = e.slides.length - 1,
                                    i = e.slidesGrid[r] + e.slidesSizesGrid[r] + 2 * n;
                                e.isLocked = e.size > i
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === a.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === a.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            var e = this,
                                t = e.classNames,
                                a = e.params,
                                n = e.rtl,
                                i = e.$el,
                                s = e.device,
                                l = e.support,
                                o = function(e, t) {
                                    var a = [];
                                    return e.forEach((function(e) {
                                        "object" === typeof e ? Object.keys(e).forEach((function(n) {
                                            e[n] && a.push(t + n)
                                        })) : "string" === typeof e && a.push(t + e)
                                    })), a
                                }(["initialized", a.direction, {
                                    "pointer-events": !l.touch
                                }, {
                                    "free-mode": e.params.freeMode && a.freeMode.enabled
                                }, {
                                    autoheight: a.autoHeight
                                }, {
                                    rtl: n
                                }, {
                                    grid: a.grid && a.grid.rows > 1
                                }, {
                                    "grid-column": a.grid && a.grid.rows > 1 && "column" === a.grid.fill
                                }, {
                                    android: s.android
                                }, {
                                    ios: s.ios
                                }, {
                                    "css-mode": a.cssMode
                                }, {
                                    centered: a.cssMode && a.centeredSlides
                                }, {
                                    "watch-progress": a.watchSlidesProgress
                                }], a.containerModifierClass);
                            t.push.apply(t, Object(r.a)(o)), i.addClass(Object(r.a)(t).join(" ")), e.emitContainerClasses()
                        },
                        removeClasses: function() {
                            var e = this,
                                t = e.$el,
                                a = e.classNames;
                            t.removeClass(a.join(" ")), e.emitContainerClasses()
                        }
                    },
                    images: {
                        loadImage: function(e, t, a, n, r, i) {
                            var s, l = h();

                            function o() {
                                i && i()
                            }
                            z(e).parent("picture")[0] || e.complete && r ? o() : t ? ((s = new l.Image).onload = o, s.onerror = o, n && (s.sizes = n), a && (s.srcset = a), t && (s.src = t)) : o()
                        },
                        preloadImages: function() {
                            var e = this;

                            function t() {
                                "undefined" !== typeof e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                                var n = e.imagesToLoad[a];
                                e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                re = {},
                ie = function() {
                    function e() {
                        var t, a;
                        Object(o.a)(this, e);
                        for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s];
                        if (1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? a = i[0] : (t = i[0], a = i[1]), a || (a = {}), a = N({}, a), t && !a.el && (a.el = t), a.el && z(a.el).length > 1) {
                            var l = [];
                            return z(a.el).each((function(t) {
                                var n = N({}, a, {
                                    el: t
                                });
                                l.push(new e(n))
                            })), l
                        }
                        var d, c = this;
                        (c.__swiper__ = !0, c.support = H(), c.device = V({
                            userAgent: a.userAgent
                        }), c.browser = R(), c.eventsListeners = {}, c.eventsAnyListeners = [], c.modules = Object(r.a)(c.__modules__), a.modules && Array.isArray(a.modules)) && (d = c.modules).push.apply(d, Object(r.a)(a.modules));
                        var u = {};
                        c.modules.forEach((function(e) {
                            e({
                                swiper: c,
                                extendParams: ae(a, u),
                                on: c.on.bind(c),
                                once: c.once.bind(c),
                                off: c.off.bind(c),
                                emit: c.emit.bind(c)
                            })
                        }));
                        var p = N({}, te, u);
                        return c.params = N({}, p, re, a), c.originalParams = N({}, c.params), c.passedParams = N({}, a), c.params && c.params.on && Object.keys(c.params.on).forEach((function(e) {
                            c.on(e, c.params.on[e])
                        })), c.params && c.params.onAny && c.onAny(c.params.onAny), c.$ = z, Object.assign(c, {
                            enabled: c.params.enabled,
                            el: t,
                            classNames: [],
                            slides: z(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === c.params.direction
                            },
                            isVertical: function() {
                                return "vertical" === c.params.direction
                            },
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: c.params.allowSlideNext,
                            allowSlidePrev: c.params.allowSlidePrev,
                            touchEvents: function() {
                                var e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                    t = ["pointerdown", "pointermove", "pointerup"];
                                return c.touchEventsTouch = {
                                    start: e[0],
                                    move: e[1],
                                    end: e[2],
                                    cancel: e[3]
                                }, c.touchEventsDesktop = {
                                    start: t[0],
                                    move: t[1],
                                    end: t[2]
                                }, c.support.touch || !c.params.simulateTouch ? c.touchEventsTouch : c.touchEventsDesktop
                            }(),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                focusableElements: c.params.focusableElements,
                                lastClickTime: A(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: c.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), c.emit("_swiper"), c.params.init && c.init(), c
                    }
                    return Object(d.a)(e, [{
                        key: "enable",
                        value: function() {
                            var e = this;
                            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            var e = this;
                            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                        }
                    }, {
                        key: "setProgress",
                        value: function(e, t) {
                            var a = this;
                            e = Math.min(Math.max(e, 0), 1);
                            var n = a.minTranslate(),
                                r = (a.maxTranslate() - n) * e + n;
                            a.translateTo(r, "undefined" === typeof t ? 0 : t), a.updateActiveIndex(), a.updateSlidesClasses()
                        }
                    }, {
                        key: "emitContainerClasses",
                        value: function() {
                            var e = this;
                            if (e.params._emitClasses && e.el) {
                                var t = e.el.className.split(" ").filter((function(t) {
                                    return 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)
                                }));
                                e.emit("_containerClasses", t.join(" "))
                            }
                        }
                    }, {
                        key: "getSlideClasses",
                        value: function(e) {
                            var t = this;
                            return t.destroyed ? "" : e.className.split(" ").filter((function(e) {
                                return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
                            })).join(" ")
                        }
                    }, {
                        key: "emitSlidesClasses",
                        value: function() {
                            var e = this;
                            if (e.params._emitClasses && e.el) {
                                var t = [];
                                e.slides.each((function(a) {
                                    var n = e.getSlideClasses(a);
                                    t.push({
                                        slideEl: a,
                                        classNames: n
                                    }), e.emit("_slideClass", a, n)
                                })), e.emit("_slideClasses", t)
                            }
                        }
                    }, {
                        key: "slidesPerViewDynamic",
                        value: function(e, t) {
                            void 0 === e && (e = "current"), void 0 === t && (t = !1);
                            var a = this,
                                n = a.params,
                                r = a.slides,
                                i = a.slidesGrid,
                                s = a.slidesSizesGrid,
                                l = a.size,
                                o = a.activeIndex,
                                d = 1;
                            if (n.centeredSlides) {
                                for (var c, u = r[o].swiperSlideSize, p = o + 1; p < r.length; p += 1) r[p] && !c && (d += 1, (u += r[p].swiperSlideSize) > l && (c = !0));
                                for (var f = o - 1; f >= 0; f -= 1) r[f] && !c && (d += 1, (u += r[f].swiperSlideSize) > l && (c = !0))
                            } else if ("current" === e)
                                for (var v = o + 1; v < r.length; v += 1) {
                                    (t ? i[v] + s[v] - i[o] < l : i[v] - i[o] < l) && (d += 1)
                                } else
                                    for (var h = o - 1; h >= 0; h -= 1) {
                                        i[o] - i[h] < l && (d += 1)
                                    }
                            return d
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var e = this;
                            if (e && !e.destroyed) {
                                var t = e.snapGrid,
                                    a = e.params;
                                a.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(), a.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                            }

                            function n() {
                                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                                    a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                                e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses()
                            }
                        }
                    }, {
                        key: "changeDirection",
                        value: function(e, t) {
                            void 0 === t && (t = !0);
                            var a = this,
                                n = a.params.direction;
                            return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (a.$el.removeClass("".concat(a.params.containerModifierClass).concat(n)).addClass("".concat(a.params.containerModifierClass).concat(e)), a.emitContainerClasses(), a.params.direction = e, a.slides.each((function(t) {
                                "vertical" === e ? t.style.width = "" : t.style.height = ""
                            })), a.emit("changeDirection"), t && a.update()), a
                        }
                    }, {
                        key: "changeLanguageDirection",
                        value: function(e) {
                            var t = this;
                            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "rtl") : (t.$el.removeClass("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "ltr"), t.update())
                        }
                    }, {
                        key: "mount",
                        value: function(e) {
                            var t = this;
                            if (t.mounted) return !0;
                            var a = z(e || t.params.el);
                            if (!(e = a[0])) return !1;
                            e.swiper = t;
                            var n = function() {
                                    return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."))
                                },
                                r = function() {
                                    if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                                        var t = z(e.shadowRoot.querySelector(n()));
                                        return t.children = function(e) {
                                            return a.children(e)
                                        }, t
                                    }
                                    return a.children ? a.children(n()) : z(a).children(n())
                                }();
                            if (0 === r.length && t.params.createElements) {
                                var i = f().createElement("div");
                                r = z(i), i.className = t.params.wrapperClass, a.append(i), a.children(".".concat(t.params.slideClass)).each((function(e) {
                                    r.append(e)
                                }))
                            }
                            return Object.assign(t, {
                                $el: a,
                                el: e,
                                $wrapperEl: r,
                                wrapperEl: r[0],
                                mounted: !0,
                                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction"),
                                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction")),
                                wrongRTL: "-webkit-box" === r.css("display")
                            }), !0
                        }
                    }, {
                        key: "init",
                        value: function(e) {
                            var t = this;
                            return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                        }
                    }, {
                        key: "destroy",
                        value: function(e, t) {
                            void 0 === e && (e = !0), void 0 === t && (t = !0);
                            var a = this,
                                n = a.params,
                                r = a.$el,
                                i = a.$wrapperEl,
                                s = a.slides;
                            return "undefined" === typeof a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), n.loop && a.loopDestroy(), t && (a.removeClasses(), r.removeAttr("style"), i.removeAttr("style"), s && s.length && s.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach((function(e) {
                                a.off(e)
                            })), !1 !== e && (a.$el[0].swiper = null, function(e) {
                                var t = e;
                                Object.keys(t).forEach((function(e) {
                                    try {
                                        t[e] = null
                                    } catch (a) {}
                                    try {
                                        delete t[e]
                                    } catch (a) {}
                                }))
                            }(a)), a.destroyed = !0), null
                        }
                    }], [{
                        key: "extendDefaults",
                        value: function(e) {
                            N(re, e)
                        }
                    }, {
                        key: "extendedDefaults",
                        get: function() {
                            return re
                        }
                    }, {
                        key: "defaults",
                        get: function() {
                            return te
                        }
                    }, {
                        key: "installModule",
                        value: function(t) {
                            e.prototype.__modules__ || (e.prototype.__modules__ = []);
                            var a = e.prototype.__modules__;
                            "function" === typeof t && a.indexOf(t) < 0 && a.push(t)
                        }
                    }, {
                        key: "use",
                        value: function(t) {
                            return Array.isArray(t) ? (t.forEach((function(t) {
                                return e.installModule(t)
                            })), e) : (e.installModule(t), e)
                        }
                    }]), e
                }();
            Object.keys(ne).forEach((function(e) {
                Object.keys(ne[e]).forEach((function(t) {
                    ie.prototype[t] = ne[e][t]
                }))
            })), ie.use([function(e) {
                var t = e.swiper,
                    a = e.on,
                    n = e.emit,
                    r = h(),
                    i = null,
                    s = null,
                    l = function() {
                        t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
                    },
                    o = function() {
                        t && !t.destroyed && t.initialized && n("orientationchange")
                    };
                a("init", (function() {
                    t.params.resizeObserver && "undefined" !== typeof r.ResizeObserver ? t && !t.destroyed && t.initialized && (i = new ResizeObserver((function(e) {
                        s = r.requestAnimationFrame((function() {
                            var a = t.width,
                                n = t.height,
                                r = a,
                                i = n;
                            e.forEach((function(e) {
                                var a = e.contentBoxSize,
                                    n = e.contentRect,
                                    s = e.target;
                                s && s !== t.el || (r = n ? n.width : (a[0] || a).inlineSize, i = n ? n.height : (a[0] || a).blockSize)
                            })), r === a && i === n || l()
                        }))
                    }))).observe(t.el) : (r.addEventListener("resize", l), r.addEventListener("orientationchange", o))
                })), a("destroy", (function() {
                    s && r.cancelAnimationFrame(s), i && i.unobserve && t.el && (i.unobserve(t.el), i = null), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", o)
                }))
            }, function(e) {
                var t = e.swiper,
                    a = e.extendParams,
                    n = e.on,
                    r = e.emit,
                    i = [],
                    s = h(),
                    l = function(e, t) {
                        void 0 === t && (t = {});
                        var a = new(s.MutationObserver || s.WebkitMutationObserver)((function(e) {
                            if (1 !== e.length) {
                                var t = function() {
                                    r("observerUpdate", e[0])
                                };
                                s.requestAnimationFrame ? s.requestAnimationFrame(t) : s.setTimeout(t, 0)
                            } else r("observerUpdate", e[0])
                        }));
                        a.observe(e, {
                            attributes: "undefined" === typeof t.attributes || t.attributes,
                            childList: "undefined" === typeof t.childList || t.childList,
                            characterData: "undefined" === typeof t.characterData || t.characterData
                        }), i.push(a)
                    };
                a({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), n("init", (function() {
                    if (t.params.observer) {
                        if (t.params.observeParents)
                            for (var e = t.$el.parents(), a = 0; a < e.length; a += 1) l(e[a]);
                        l(t.$el[0], {
                            childList: t.params.observeSlideChildren
                        }), l(t.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                })), n("destroy", (function() {
                    i.forEach((function(e) {
                        e.disconnect()
                    })), i.splice(0, i.length)
                }))
            }]);
            var se = ie;

            function le(e) {
                var t = e.swiper,
                    a = e.extendParams,
                    n = e.on,
                    r = e.emit,
                    i = f(),
                    s = h();

                function l(e) {
                    if (t.enabled) {
                        var a = t.rtlTranslate,
                            n = e;
                        n.originalEvent && (n = n.originalEvent);
                        var l = n.keyCode || n.charCode,
                            o = t.params.keyboard.pageUpDown,
                            d = o && 33 === l,
                            c = o && 34 === l,
                            u = 37 === l,
                            p = 39 === l,
                            f = 38 === l,
                            v = 40 === l;
                        if (!t.allowSlideNext && (t.isHorizontal() && p || t.isVertical() && v || c)) return !1;
                        if (!t.allowSlidePrev && (t.isHorizontal() && u || t.isVertical() && f || d)) return !1;
                        if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey) && (!i.activeElement || !i.activeElement.nodeName || "input" !== i.activeElement.nodeName.toLowerCase() && "textarea" !== i.activeElement.nodeName.toLowerCase())) {
                            if (t.params.keyboard.onlyInViewport && (d || c || u || p || f || v)) {
                                var h = !1;
                                if (t.$el.parents(".".concat(t.params.slideClass)).length > 0 && 0 === t.$el.parents(".".concat(t.params.slideActiveClass)).length) return;
                                var m = t.$el,
                                    g = m[0].clientWidth,
                                    b = m[0].clientHeight,
                                    w = s.innerWidth,
                                    y = s.innerHeight,
                                    C = t.$el.offset();
                                a && (C.left -= t.$el[0].scrollLeft);
                                for (var x = [
                                        [C.left, C.top],
                                        [C.left + g, C.top],
                                        [C.left, C.top + b],
                                        [C.left + g, C.top + b]
                                    ], T = 0; T < x.length; T += 1) {
                                    var S = x[T];
                                    if (S[0] >= 0 && S[0] <= w && S[1] >= 0 && S[1] <= y) {
                                        if (0 === S[0] && 0 === S[1]) continue;
                                        h = !0
                                    }
                                }
                                if (!h) return
                            }
                            t.isHorizontal() ? ((d || c || u || p) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((c || p) && !a || (d || u) && a) && t.slideNext(), ((d || u) && !a || (c || p) && a) && t.slidePrev()) : ((d || c || f || v) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (c || v) && t.slideNext(), (d || f) && t.slidePrev()), r("keyPress", l)
                        }
                    }
                }

                function o() {
                    t.keyboard.enabled || (z(i).on("keydown", l), t.keyboard.enabled = !0)
                }

                function d() {
                    t.keyboard.enabled && (z(i).off("keydown", l), t.keyboard.enabled = !1)
                }
                t.keyboard = {
                    enabled: !1
                }, a({
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0,
                        pageUpDown: !0
                    }
                }), n("init", (function() {
                    t.params.keyboard.enabled && o()
                })), n("destroy", (function() {
                    t.keyboard.enabled && d()
                })), Object.assign(t.keyboard, {
                    enable: o,
                    disable: d
                })
            }

            function oe(e) {
                var t, a = e.swiper,
                    n = e.extendParams,
                    r = e.on,
                    i = e.emit,
                    s = h();
                n({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null
                    }
                }), a.mousewheel = {
                    enabled: !1
                };
                var l, o = A(),
                    d = [];

                function c() {
                    a.enabled && (a.mouseEntered = !0)
                }

                function u() {
                    a.enabled && (a.mouseEntered = !1)
                }

                function p(e) {
                    return !(a.params.mousewheel.thresholdDelta && e.delta < a.params.mousewheel.thresholdDelta) && (!(a.params.mousewheel.thresholdTime && A() - o < a.params.mousewheel.thresholdTime) && (e.delta >= 6 && A() - o < 60 || (e.direction < 0 ? a.isEnd && !a.params.loop || a.animating || (a.slideNext(), i("scroll", e.raw)) : a.isBeginning && !a.params.loop || a.animating || (a.slidePrev(), i("scroll", e.raw)), o = (new s.Date).getTime(), !1)))
                }

                function f(e) {
                    var n = e;
                    if (a.enabled) {
                        var r = a.params.mousewheel;
                        a.params.cssMode && n.preventDefault();
                        var s = a.$el;
                        if ("container" !== a.params.mousewheel.eventsTarget && (s = z(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !s[0].contains(n.target) && !r.releaseOnEdges) return !0;
                        n.originalEvent && (n = n.originalEvent);
                        var o = 0,
                            c = a.rtlTranslate ? -1 : 1,
                            u = function(e) {
                                var t = 0,
                                    a = 0,
                                    n = 0,
                                    r = 0;
                                return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), n = 10 * t, r = 10 * a, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (n = e.deltaX), e.shiftKey && !n && (n = r, r = 0), (n || r) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, r *= 40) : (n *= 800, r *= 800)), n && !t && (t = n < 1 ? -1 : 1), r && !a && (a = r < 1 ? -1 : 1), {
                                    spinX: t,
                                    spinY: a,
                                    pixelX: n,
                                    pixelY: r
                                }
                            }(n);
                        if (r.forceToAxis)
                            if (a.isHorizontal()) {
                                if (!(Math.abs(u.pixelX) > Math.abs(u.pixelY))) return !0;
                                o = -u.pixelX * c
                            } else {
                                if (!(Math.abs(u.pixelY) > Math.abs(u.pixelX))) return !0;
                                o = -u.pixelY
                            }
                        else o = Math.abs(u.pixelX) > Math.abs(u.pixelY) ? -u.pixelX * c : -u.pixelY;
                        if (0 === o) return !0;
                        r.invert && (o = -o);
                        var f = a.getTranslate() + o * r.sensitivity;
                        if (f >= a.minTranslate() && (f = a.minTranslate()), f <= a.maxTranslate() && (f = a.maxTranslate()), (!!a.params.loop || !(f === a.minTranslate() || f === a.maxTranslate())) && a.params.nested && n.stopPropagation(), a.params.freeMode && a.params.freeMode.enabled) {
                            var v = {
                                    time: A(),
                                    delta: Math.abs(o),
                                    direction: Math.sign(o)
                                },
                                h = l && v.time < l.time + 500 && v.delta <= l.delta && v.direction === l.direction;
                            if (!h) {
                                l = void 0, a.params.loop && a.loopFix();
                                var m = a.getTranslate() + o * r.sensitivity,
                                    g = a.isBeginning,
                                    b = a.isEnd;
                                if (m >= a.minTranslate() && (m = a.minTranslate()), m <= a.maxTranslate() && (m = a.maxTranslate()), a.setTransition(0), a.setTranslate(m), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!g && a.isBeginning || !b && a.isEnd) && a.updateSlidesClasses(), a.params.freeMode.sticky) {
                                    clearTimeout(t), t = void 0, d.length >= 15 && d.shift();
                                    var w = d.length ? d[d.length - 1] : void 0,
                                        y = d[0];
                                    if (d.push(v), w && (v.delta > w.delta || v.direction !== w.direction)) d.splice(0);
                                    else if (d.length >= 15 && v.time - y.time < 500 && y.delta - v.delta >= 1 && v.delta <= 6) {
                                        var C = o > 0 ? .8 : .2;
                                        l = v, d.splice(0), t = D((function() {
                                            a.slideToClosest(a.params.speed, !0, void 0, C)
                                        }), 0)
                                    }
                                    t || (t = D((function() {
                                        l = v, d.splice(0), a.slideToClosest(a.params.speed, !0, void 0, .5)
                                    }), 500))
                                }
                                if (h || i("scroll", n), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), m === a.minTranslate() || m === a.maxTranslate()) return !0
                            }
                        } else {
                            var x = {
                                time: A(),
                                delta: Math.abs(o),
                                direction: Math.sign(o),
                                raw: e
                            };
                            d.length >= 2 && d.shift();
                            var T = d.length ? d[d.length - 1] : void 0;
                            if (d.push(x), T ? (x.direction !== T.direction || x.delta > T.delta || x.time > T.time + 150) && p(x) : p(x), function(e) {
                                    var t = a.params.mousewheel;
                                    if (e.direction < 0) {
                                        if (a.isEnd && !a.params.loop && t.releaseOnEdges) return !0
                                    } else if (a.isBeginning && !a.params.loop && t.releaseOnEdges) return !0;
                                    return !1
                                }(x)) return !0
                        }
                        return n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1
                    }
                }

                function v(e) {
                    var t = a.$el;
                    "container" !== a.params.mousewheel.eventsTarget && (t = z(a.params.mousewheel.eventsTarget)), t[e]("mouseenter", c), t[e]("mouseleave", u), t[e]("wheel", f)
                }

                function m() {
                    return a.params.cssMode ? (a.wrapperEl.removeEventListener("wheel", f), !0) : !a.mousewheel.enabled && (v("on"), a.mousewheel.enabled = !0, !0)
                }

                function g() {
                    return a.params.cssMode ? (a.wrapperEl.addEventListener(event, f), !0) : !!a.mousewheel.enabled && (v("off"), a.mousewheel.enabled = !1, !0)
                }
                r("init", (function() {
                    !a.params.mousewheel.enabled && a.params.cssMode && g(), a.params.mousewheel.enabled && m()
                })), r("destroy", (function() {
                    a.params.cssMode && m(), a.mousewheel.enabled && g()
                })), Object.assign(a.mousewheel, {
                    enable: m,
                    disable: g
                })
            }

            function de(e, t, a, n) {
                var r = f();
                return e.params.createElements && Object.keys(n).forEach((function(i) {
                    if (!a[i] && !0 === a.auto) {
                        var s = e.$el.children(".".concat(n[i]))[0];
                        s || ((s = r.createElement("div")).className = n[i], e.$el.append(s)), a[i] = s, t[i] = s
                    }
                })), a
            }

            function ce(e) {
                var t = e.swiper,
                    a = e.extendParams,
                    n = e.on,
                    r = e.emit;

                function i(e) {
                    var a;
                    return e && (a = z(e), t.params.uniqueNavElements && "string" === typeof e && a.length > 1 && 1 === t.$el.find(e).length && (a = t.$el.find(e))), a
                }

                function s(e, a) {
                    var n = t.params.navigation;
                    e && e.length > 0 && (e[a ? "addClass" : "removeClass"](n.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = a), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](n.lockClass))
                }

                function l() {
                    if (!t.params.loop) {
                        var e = t.navigation,
                            a = e.$nextEl;
                        s(e.$prevEl, t.isBeginning && !t.params.rewind), s(a, t.isEnd && !t.params.rewind)
                    }
                }

                function o(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), r("navigationPrev"))
                }

                function d(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), r("navigationNext"))
                }

                function c() {
                    var e = t.params.navigation;
                    if (t.params.navigation = de(t, t.originalParams.navigation, t.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), e.nextEl || e.prevEl) {
                        var a = i(e.nextEl),
                            n = i(e.prevEl);
                        a && a.length > 0 && a.on("click", d), n && n.length > 0 && n.on("click", o), Object.assign(t.navigation, {
                            $nextEl: a,
                            nextEl: a && a[0],
                            $prevEl: n,
                            prevEl: n && n[0]
                        }), t.enabled || (a && a.addClass(e.lockClass), n && n.addClass(e.lockClass))
                    }
                }

                function u() {
                    var e = t.navigation,
                        a = e.$nextEl,
                        n = e.$prevEl;
                    a && a.length && (a.off("click", d), a.removeClass(t.params.navigation.disabledClass)), n && n.length && (n.off("click", o), n.removeClass(t.params.navigation.disabledClass))
                }
                a({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), t.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                }, n("init", (function() {
                    !1 === t.params.navigation.enabled ? p() : (c(), l())
                })), n("toEdge fromEdge lock unlock", (function() {
                    l()
                })), n("destroy", (function() {
                    u()
                })), n("enable disable", (function() {
                    var e = t.navigation,
                        a = e.$nextEl,
                        n = e.$prevEl;
                    a && a[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), n && n[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
                })), n("click", (function(e, a) {
                    var n = t.navigation,
                        i = n.$nextEl,
                        s = n.$prevEl,
                        l = a.target;
                    if (t.params.navigation.hideOnClick && !z(l).is(s) && !z(l).is(i)) {
                        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l))) return;
                        var o;
                        i ? o = i.hasClass(t.params.navigation.hiddenClass) : s && (o = s.hasClass(t.params.navigation.hiddenClass)), r(!0 === o ? "navigationShow" : "navigationHide"), i && i.toggleClass(t.params.navigation.hiddenClass), s && s.toggleClass(t.params.navigation.hiddenClass)
                    }
                }));
                var p = function() {
                    t.$el.addClass(t.params.navigation.navigationDisabledClass), u()
                };
                Object.assign(t.navigation, {
                    enable: function() {
                        t.$el.removeClass(t.params.navigation.navigationDisabledClass), c(), l()
                    },
                    disable: p,
                    update: l,
                    init: c,
                    destroy: u
                })
            }

            function ue(e) {
                return void 0 === e && (e = ""), ".".concat(e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, "."))
            }

            function pe(e) {
                var t, a = e.swiper,
                    n = e.extendParams,
                    r = e.on,
                    i = e.emit,
                    s = "swiper-pagination";
                n({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function(e) {
                            return e
                        },
                        formatFractionTotal: function(e) {
                            return e
                        },
                        bulletClass: "".concat(s, "-bullet"),
                        bulletActiveClass: "".concat(s, "-bullet-active"),
                        modifierClass: "".concat(s, "-"),
                        currentClass: "".concat(s, "-current"),
                        totalClass: "".concat(s, "-total"),
                        hiddenClass: "".concat(s, "-hidden"),
                        progressbarFillClass: "".concat(s, "-progressbar-fill"),
                        progressbarOppositeClass: "".concat(s, "-progressbar-opposite"),
                        clickableClass: "".concat(s, "-clickable"),
                        lockClass: "".concat(s, "-lock"),
                        horizontalClass: "".concat(s, "-horizontal"),
                        verticalClass: "".concat(s, "-vertical"),
                        paginationDisabledClass: "".concat(s, "-disabled")
                    }
                }), a.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                var l = 0;

                function o() {
                    return !a.params.pagination.el || !a.pagination.el || !a.pagination.$el || 0 === a.pagination.$el.length
                }

                function d(e, t) {
                    var n = a.params.pagination.bulletActiveClass;
                    e[t]().addClass("".concat(n, "-").concat(t))[t]().addClass("".concat(n, "-").concat(t, "-").concat(t))
                }

                function c() {
                    var e = a.rtl,
                        n = a.params.pagination;
                    if (!o()) {
                        var r, s = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length,
                            c = a.pagination.$el,
                            u = a.params.loop ? Math.ceil((s - 2 * a.loopedSlides) / a.params.slidesPerGroup) : a.snapGrid.length;
                        if (a.params.loop ? ((r = Math.ceil((a.activeIndex - a.loopedSlides) / a.params.slidesPerGroup)) > s - 1 - 2 * a.loopedSlides && (r -= s - 2 * a.loopedSlides), r > u - 1 && (r -= u), r < 0 && "bullets" !== a.params.paginationType && (r = u + r)) : r = "undefined" !== typeof a.snapIndex ? a.snapIndex : a.activeIndex || 0, "bullets" === n.type && a.pagination.bullets && a.pagination.bullets.length > 0) {
                            var p, f, v, h = a.pagination.bullets;
                            if (n.dynamicBullets && (t = h.eq(0)[a.isHorizontal() ? "outerWidth" : "outerHeight"](!0), c.css(a.isHorizontal() ? "width" : "height", "".concat(t * (n.dynamicMainBullets + 4), "px")), n.dynamicMainBullets > 1 && void 0 !== a.previousIndex && ((l += r - (a.previousIndex - a.loopedSlides || 0)) > n.dynamicMainBullets - 1 ? l = n.dynamicMainBullets - 1 : l < 0 && (l = 0)), p = Math.max(r - l, 0), v = ((f = p + (Math.min(h.length, n.dynamicMainBullets) - 1)) + p) / 2), h.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((function(e) {
                                    return "".concat(n.bulletActiveClass).concat(e)
                                })).join(" ")), c.length > 1) h.each((function(e) {
                                var t = z(e),
                                    a = t.index();
                                a === r && t.addClass(n.bulletActiveClass), n.dynamicBullets && (a >= p && a <= f && t.addClass("".concat(n.bulletActiveClass, "-main")), a === p && d(t, "prev"), a === f && d(t, "next"))
                            }));
                            else {
                                var m = h.eq(r),
                                    g = m.index();
                                if (m.addClass(n.bulletActiveClass), n.dynamicBullets) {
                                    for (var b = h.eq(p), w = h.eq(f), y = p; y <= f; y += 1) h.eq(y).addClass("".concat(n.bulletActiveClass, "-main"));
                                    if (a.params.loop)
                                        if (g >= h.length) {
                                            for (var C = n.dynamicMainBullets; C >= 0; C -= 1) h.eq(h.length - C).addClass("".concat(n.bulletActiveClass, "-main"));
                                            h.eq(h.length - n.dynamicMainBullets - 1).addClass("".concat(n.bulletActiveClass, "-prev"))
                                        } else d(b, "prev"), d(w, "next");
                                    else d(b, "prev"), d(w, "next")
                                }
                            }
                            if (n.dynamicBullets) {
                                var x = Math.min(h.length, n.dynamicMainBullets + 4),
                                    T = (t * x - t) / 2 - v * t,
                                    S = e ? "right" : "left";
                                h.css(a.isHorizontal() ? S : "top", "".concat(T, "px"))
                            }
                        }
                        if ("fraction" === n.type && (c.find(ue(n.currentClass)).text(n.formatFractionCurrent(r + 1)), c.find(ue(n.totalClass)).text(n.formatFractionTotal(u))), "progressbar" === n.type) {
                            var E;
                            E = n.progressbarOpposite ? a.isHorizontal() ? "vertical" : "horizontal" : a.isHorizontal() ? "horizontal" : "vertical";
                            var O = (r + 1) / u,
                                M = 1,
                                k = 1;
                            "horizontal" === E ? M = O : k = O, c.find(ue(n.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(M, ") scaleY(").concat(k, ")")).transition(a.params.speed)
                        }
                        "custom" === n.type && n.renderCustom ? (c.html(n.renderCustom(a, r + 1, u)), i("paginationRender", c[0])) : i("paginationUpdate", c[0]), a.params.watchOverflow && a.enabled && c[a.isLocked ? "addClass" : "removeClass"](n.lockClass)
                    }
                }

                function u() {
                    var e = a.params.pagination;
                    if (!o()) {
                        var t = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length,
                            n = a.pagination.$el,
                            r = "";
                        if ("bullets" === e.type) {
                            var s = a.params.loop ? Math.ceil((t - 2 * a.loopedSlides) / a.params.slidesPerGroup) : a.snapGrid.length;
                            a.params.freeMode && a.params.freeMode.enabled && !a.params.loop && s > t && (s = t);
                            for (var l = 0; l < s; l += 1) e.renderBullet ? r += e.renderBullet.call(a, l, e.bulletClass) : r += "<".concat(e.bulletElement, ' class="').concat(e.bulletClass, '"></').concat(e.bulletElement, ">");
                            n.html(r), a.pagination.bullets = n.find(ue(e.bulletClass))
                        }
                        "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(a, e.currentClass, e.totalClass) : '<span class="'.concat(e.currentClass, '"></span>') + " / " + '<span class="'.concat(e.totalClass, '"></span>'), n.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(a, e.progressbarFillClass) : '<span class="'.concat(e.progressbarFillClass, '"></span>'), n.html(r)), "custom" !== e.type && i("paginationRender", a.pagination.$el[0])
                    }
                }

                function p() {
                    a.params.pagination = de(a, a.originalParams.pagination, a.params.pagination, {
                        el: "swiper-pagination"
                    });
                    var e = a.params.pagination;
                    if (e.el) {
                        var t = z(e.el);
                        0 !== t.length && (a.params.uniqueNavElements && "string" === typeof e.el && t.length > 1 && (t = a.$el.find(e.el)).length > 1 && (t = t.filter((function(e) {
                            return z(e).parents(".swiper")[0] === a.el
                        }))), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), t.addClass(a.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (t.addClass("".concat(e.modifierClass).concat(e.type, "-dynamic")), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", ue(e.bulletClass), (function(e) {
                            e.preventDefault();
                            var t = z(this).index() * a.params.slidesPerGroup;
                            a.params.loop && (t += a.loopedSlides), a.slideTo(t)
                        })), Object.assign(a.pagination, {
                            $el: t,
                            el: t[0]
                        }), a.enabled || t.addClass(e.lockClass))
                    }
                }

                function f() {
                    var e = a.params.pagination;
                    if (!o()) {
                        var t = a.pagination.$el;
                        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), t.removeClass(a.isHorizontal() ? e.horizontalClass : e.verticalClass), a.pagination.bullets && a.pagination.bullets.removeClass && a.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", ue(e.bulletClass))
                    }
                }
                r("init", (function() {
                    !1 === a.params.pagination.enabled ? v() : (p(), u(), c())
                })), r("activeIndexChange", (function() {
                    (a.params.loop || "undefined" === typeof a.snapIndex) && c()
                })), r("snapIndexChange", (function() {
                    a.params.loop || c()
                })), r("slidesLengthChange", (function() {
                    a.params.loop && (u(), c())
                })), r("snapGridLengthChange", (function() {
                    a.params.loop || (u(), c())
                })), r("destroy", (function() {
                    f()
                })), r("enable disable", (function() {
                    var e = a.pagination.$el;
                    e && e[a.enabled ? "removeClass" : "addClass"](a.params.pagination.lockClass)
                })), r("lock unlock", (function() {
                    c()
                })), r("click", (function(e, t) {
                    var n = t.target,
                        r = a.pagination.$el;
                    if (a.params.pagination.el && a.params.pagination.hideOnClick && r && r.length > 0 && !z(n).hasClass(a.params.pagination.bulletClass)) {
                        if (a.navigation && (a.navigation.nextEl && n === a.navigation.nextEl || a.navigation.prevEl && n === a.navigation.prevEl)) return;
                        var s = r.hasClass(a.params.pagination.hiddenClass);
                        i(!0 === s ? "paginationShow" : "paginationHide"), r.toggleClass(a.params.pagination.hiddenClass)
                    }
                }));
                var v = function() {
                    a.$el.addClass(a.params.pagination.paginationDisabledClass), a.pagination.$el && a.pagination.$el.addClass(a.params.pagination.paginationDisabledClass), f()
                };
                Object.assign(a.pagination, {
                    enable: function() {
                        a.$el.removeClass(a.params.pagination.paginationDisabledClass), a.pagination.$el && a.pagination.$el.removeClass(a.params.pagination.paginationDisabledClass), p(), u(), c()
                    },
                    disable: v,
                    render: u,
                    update: c,
                    init: p,
                    destroy: f
                })
            }

            function fe(e) {
                var t, a, n, r, i = e.swiper,
                    s = e.extendParams,
                    l = e.on,
                    o = e.emit,
                    d = f(),
                    c = !1,
                    u = null,
                    p = null;

                function v() {
                    if (i.params.scrollbar.el && i.scrollbar.el) {
                        var e = i.scrollbar,
                            t = i.rtlTranslate,
                            r = i.progress,
                            s = e.$dragEl,
                            l = e.$el,
                            o = i.params.scrollbar,
                            d = a,
                            c = (n - a) * r;
                        t ? (c = -c) > 0 ? (d = a - c, c = 0) : -c + a > n && (d = n + c) : c < 0 ? (d = a + c, c = 0) : c + a > n && (d = n - c), i.isHorizontal() ? (s.transform("translate3d(".concat(c, "px, 0, 0)")), s[0].style.width = "".concat(d, "px")) : (s.transform("translate3d(0px, ".concat(c, "px, 0)")), s[0].style.height = "".concat(d, "px")), o.hide && (clearTimeout(u), l[0].style.opacity = 1, u = setTimeout((function() {
                            l[0].style.opacity = 0, l.transition(400)
                        }), 1e3))
                    }
                }

                function h() {
                    if (i.params.scrollbar.el && i.scrollbar.el) {
                        var e = i.scrollbar,
                            t = e.$dragEl,
                            s = e.$el;
                        t[0].style.width = "", t[0].style.height = "", n = i.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight, r = i.size / (i.virtualSize + i.params.slidesOffsetBefore - (i.params.centeredSlides ? i.snapGrid[0] : 0)), a = "auto" === i.params.scrollbar.dragSize ? n * r : parseInt(i.params.scrollbar.dragSize, 10), i.isHorizontal() ? t[0].style.width = "".concat(a, "px") : t[0].style.height = "".concat(a, "px"), s[0].style.display = r >= 1 ? "none" : "", i.params.scrollbar.hide && (s[0].style.opacity = 0), i.params.watchOverflow && i.enabled && e.$el[i.isLocked ? "addClass" : "removeClass"](i.params.scrollbar.lockClass)
                    }
                }

                function m(e) {
                    return i.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
                }

                function g(e) {
                    var r, s = i.scrollbar,
                        l = i.rtlTranslate,
                        o = s.$el;
                    r = (m(e) - o.offset()[i.isHorizontal() ? "left" : "top"] - (null !== t ? t : a / 2)) / (n - a), r = Math.max(Math.min(r, 1), 0), l && (r = 1 - r);
                    var d = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * r;
                    i.updateProgress(d), i.setTranslate(d), i.updateActiveIndex(), i.updateSlidesClasses()
                }

                function b(e) {
                    var a = i.params.scrollbar,
                        n = i.scrollbar,
                        r = i.$wrapperEl,
                        s = n.$el,
                        l = n.$dragEl;
                    c = !0, t = e.target === l[0] || e.target === l ? m(e) - e.target.getBoundingClientRect()[i.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), r.transition(100), l.transition(100), g(e), clearTimeout(p), s.transition(0), a.hide && s.css("opacity", 1), i.params.cssMode && i.$wrapperEl.css("scroll-snap-type", "none"), o("scrollbarDragStart", e)
                }

                function w(e) {
                    var t = i.scrollbar,
                        a = i.$wrapperEl,
                        n = t.$el,
                        r = t.$dragEl;
                    c && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, g(e), a.transition(0), n.transition(0), r.transition(0), o("scrollbarDragMove", e))
                }

                function y(e) {
                    var t = i.params.scrollbar,
                        a = i.scrollbar,
                        n = i.$wrapperEl,
                        r = a.$el;
                    c && (c = !1, i.params.cssMode && (i.$wrapperEl.css("scroll-snap-type", ""), n.transition("")), t.hide && (clearTimeout(p), p = D((function() {
                        r.css("opacity", 0), r.transition(400)
                    }), 1e3)), o("scrollbarDragEnd", e), t.snapOnRelease && i.slideToClosest())
                }

                function C(e) {
                    var t = i.scrollbar,
                        a = i.touchEventsTouch,
                        n = i.touchEventsDesktop,
                        r = i.params,
                        s = i.support,
                        l = t.$el;
                    if (l) {
                        var o = l[0],
                            c = !(!s.passiveListener || !r.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            },
                            u = !(!s.passiveListener || !r.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        if (o) {
                            var p = "on" === e ? "addEventListener" : "removeEventListener";
                            s.touch ? (o[p](a.start, b, c), o[p](a.move, w, c), o[p](a.end, y, u)) : (o[p](n.start, b, c), d[p](n.move, w, c), d[p](n.end, y, u))
                        }
                    }
                }

                function x() {
                    var e = i.scrollbar,
                        t = i.$el;
                    i.params.scrollbar = de(i, i.originalParams.scrollbar, i.params.scrollbar, {
                        el: "swiper-scrollbar"
                    });
                    var a = i.params.scrollbar;
                    if (a.el) {
                        var n = z(a.el);
                        i.params.uniqueNavElements && "string" === typeof a.el && n.length > 1 && 1 === t.find(a.el).length && (n = t.find(a.el)), n.addClass(i.isHorizontal() ? a.horizontalClass : a.verticalClass);
                        var r = n.find(".".concat(i.params.scrollbar.dragClass));
                        0 === r.length && (r = z('<div class="'.concat(i.params.scrollbar.dragClass, '"></div>')), n.append(r)), Object.assign(e, {
                            $el: n,
                            el: n[0],
                            $dragEl: r,
                            dragEl: r[0]
                        }), a.draggable && i.params.scrollbar.el && i.scrollbar.el && C("on"), n && n[i.enabled ? "removeClass" : "addClass"](i.params.scrollbar.lockClass)
                    }
                }

                function T() {
                    var e = i.params.scrollbar,
                        t = i.scrollbar.$el;
                    t && t.removeClass(i.isHorizontal() ? e.horizontalClass : e.verticalClass), i.params.scrollbar.el && i.scrollbar.el && C("off")
                }
                s({
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                        scrollbarDisabledClass: "swiper-scrollbar-disabled",
                        horizontalClass: "swiper-scrollbar-horizontal",
                        verticalClass: "swiper-scrollbar-vertical"
                    }
                }), i.scrollbar = {
                    el: null,
                    dragEl: null,
                    $el: null,
                    $dragEl: null
                }, l("init", (function() {
                    !1 === i.params.scrollbar.enabled ? S() : (x(), h(), v())
                })), l("update resize observerUpdate lock unlock", (function() {
                    h()
                })), l("setTranslate", (function() {
                    v()
                })), l("setTransition", (function(e, t) {
                    ! function(e) {
                        i.params.scrollbar.el && i.scrollbar.el && i.scrollbar.$dragEl.transition(e)
                    }(t)
                })), l("enable disable", (function() {
                    var e = i.scrollbar.$el;
                    e && e[i.enabled ? "removeClass" : "addClass"](i.params.scrollbar.lockClass)
                })), l("destroy", (function() {
                    T()
                }));
                var S = function() {
                    i.$el.addClass(i.params.scrollbar.scrollbarDisabledClass), i.scrollbar.$el && i.scrollbar.$el.addClass(i.params.scrollbar.scrollbarDisabledClass), T()
                };
                Object.assign(i.scrollbar, {
                    enable: function() {
                        i.$el.removeClass(i.params.scrollbar.scrollbarDisabledClass), i.scrollbar.$el && i.scrollbar.$el.removeClass(i.params.scrollbar.scrollbarDisabledClass), x(), h(), v()
                    },
                    disable: S,
                    updateSize: h,
                    setTranslate: v,
                    init: x,
                    destroy: T
                })
            }

            function ve(e) {
                var t, a = e.swiper,
                    n = e.extendParams,
                    r = e.on,
                    i = e.emit;

                function s() {
                    if (!a.size) return a.autoplay.running = !1, void(a.autoplay.paused = !1);
                    var e = a.slides.eq(a.activeIndex),
                        n = a.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (n = e.attr("data-swiper-autoplay") || a.params.autoplay.delay), clearTimeout(t), t = D((function() {
                        var e;
                        a.params.autoplay.reverseDirection ? a.params.loop ? (a.loopFix(), e = a.slidePrev(a.params.speed, !0, !0), i("autoplay")) : a.isBeginning ? a.params.autoplay.stopOnLastSlide ? o() : (e = a.slideTo(a.slides.length - 1, a.params.speed, !0, !0), i("autoplay")) : (e = a.slidePrev(a.params.speed, !0, !0), i("autoplay")) : a.params.loop ? (a.loopFix(), e = a.slideNext(a.params.speed, !0, !0), i("autoplay")) : a.isEnd ? a.params.autoplay.stopOnLastSlide ? o() : (e = a.slideTo(0, a.params.speed, !0, !0), i("autoplay")) : (e = a.slideNext(a.params.speed, !0, !0), i("autoplay")), (a.params.cssMode && a.autoplay.running || !1 === e) && s()
                    }), n)
                }

                function l() {
                    return "undefined" === typeof t && (!a.autoplay.running && (a.autoplay.running = !0, i("autoplayStart"), s(), !0))
                }

                function o() {
                    return !!a.autoplay.running && ("undefined" !== typeof t && (t && (clearTimeout(t), t = void 0), a.autoplay.running = !1, i("autoplayStop"), !0))
                }

                function d(e) {
                    a.autoplay.running && (a.autoplay.paused || (t && clearTimeout(t), a.autoplay.paused = !0, 0 !== e && a.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((function(e) {
                        a.$wrapperEl[0].addEventListener(e, u)
                    })) : (a.autoplay.paused = !1, s())))
                }

                function c() {
                    var e = f();
                    "hidden" === e.visibilityState && a.autoplay.running && d(), "visible" === e.visibilityState && a.autoplay.paused && (s(), a.autoplay.paused = !1)
                }

                function u(e) {
                    a && !a.destroyed && a.$wrapperEl && e.target === a.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((function(e) {
                        a.$wrapperEl[0].removeEventListener(e, u)
                    })), a.autoplay.paused = !1, a.autoplay.running ? s() : o())
                }

                function p() {
                    a.params.autoplay.disableOnInteraction ? o() : (i("autoplayPause"), d()), ["transitionend", "webkitTransitionEnd"].forEach((function(e) {
                        a.$wrapperEl[0].removeEventListener(e, u)
                    }))
                }

                function v() {
                    a.params.autoplay.disableOnInteraction || (a.autoplay.paused = !1, i("autoplayResume"), s())
                }
                a.autoplay = {
                    running: !1,
                    paused: !1
                }, n({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), r("init", (function() {
                    a.params.autoplay.enabled && (l(), f().addEventListener("visibilitychange", c), a.params.autoplay.pauseOnMouseEnter && (a.$el.on("mouseenter", p), a.$el.on("mouseleave", v)))
                })), r("beforeTransitionStart", (function(e, t, n) {
                    a.autoplay.running && (n || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(t) : o())
                })), r("sliderFirstMove", (function() {
                    a.autoplay.running && (a.params.autoplay.disableOnInteraction ? o() : d())
                })), r("touchEnd", (function() {
                    a.params.cssMode && a.autoplay.paused && !a.params.autoplay.disableOnInteraction && s()
                })), r("destroy", (function() {
                    a.$el.off("mouseenter", p), a.$el.off("mouseleave", v), a.autoplay.running && o(), f().removeEventListener("visibilitychange", c)
                })), Object.assign(a.autoplay, {
                    pause: d,
                    run: s,
                    start: l,
                    stop: o
                })
            }

            function he(e) {
                var t = e.swiper,
                    a = e.extendParams,
                    n = e.on;
                a({
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-thumbs"
                    }
                });
                var r = !1,
                    i = !1;

                function s() {
                    var e = t.thumbs.swiper;
                    if (e && !e.destroyed) {
                        var a = e.clickedIndex,
                            n = e.clickedSlide;
                        if ((!n || !z(n).hasClass(t.params.thumbs.slideThumbActiveClass)) && "undefined" !== typeof a && null !== a) {
                            var r;
                            if (r = e.params.loop ? parseInt(z(e.clickedSlide).attr("data-swiper-slide-index"), 10) : a, t.params.loop) {
                                var i = t.activeIndex;
                                t.slides.eq(i).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, i = t.activeIndex);
                                var s = t.slides.eq(i).prevAll('[data-swiper-slide-index="'.concat(r, '"]')).eq(0).index(),
                                    l = t.slides.eq(i).nextAll('[data-swiper-slide-index="'.concat(r, '"]')).eq(0).index();
                                r = "undefined" === typeof s ? l : "undefined" === typeof l ? s : l - i < i - s ? l : s
                            }
                            t.slideTo(r)
                        }
                    }
                }

                function l() {
                    var e = t.params.thumbs;
                    if (r) return !1;
                    r = !0;
                    var a = t.constructor;
                    if (e.swiper instanceof a) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), Object.assign(t.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    });
                    else if (_(e.swiper)) {
                        var n = Object.assign({}, e.swiper);
                        Object.assign(n, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        }), t.thumbs.swiper = new a(n), i = !0
                    }
                    return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", s), !0
                }

                function o(e) {
                    var a = t.thumbs.swiper;
                    if (a && !a.destroyed) {
                        var n = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView,
                            r = 1,
                            i = t.params.thumbs.slideThumbActiveClass;
                        if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (r = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), a.slides.removeClass(i), a.params.loop || a.params.virtual && a.params.virtual.enabled)
                            for (var s = 0; s < r; s += 1) a.$wrapperEl.children('[data-swiper-slide-index="'.concat(t.realIndex + s, '"]')).addClass(i);
                        else
                            for (var l = 0; l < r; l += 1) a.slides.eq(t.realIndex + l).addClass(i);
                        var o = t.params.thumbs.autoScrollOffset,
                            d = o && !a.params.loop;
                        if (t.realIndex !== a.realIndex || d) {
                            var c, u, p = a.activeIndex;
                            if (a.params.loop) {
                                a.slides.eq(p).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, p = a.activeIndex);
                                var f = a.slides.eq(p).prevAll('[data-swiper-slide-index="'.concat(t.realIndex, '"]')).eq(0).index(),
                                    v = a.slides.eq(p).nextAll('[data-swiper-slide-index="'.concat(t.realIndex, '"]')).eq(0).index();
                                c = "undefined" === typeof f ? v : "undefined" === typeof v ? f : v - p === p - f ? a.params.slidesPerGroup > 1 ? v : p : v - p < p - f ? v : f, u = t.activeIndex > t.previousIndex ? "next" : "prev"
                            } else u = (c = t.realIndex) > t.previousIndex ? "next" : "prev";
                            d && (c += "next" === u ? o : -1 * o), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(c) < 0 && (a.params.centeredSlides ? c = c > p ? c - Math.floor(n / 2) + 1 : c + Math.floor(n / 2) - 1 : c > p && a.params.slidesPerGroup, a.slideTo(c, e ? 0 : void 0))
                        }
                    }
                }
                t.thumbs = {
                    swiper: null
                }, n("beforeInit", (function() {
                    var e = t.params.thumbs;
                    e && e.swiper && (l(), o(!0))
                })), n("slideChange update resize observerUpdate", (function() {
                    o()
                })), n("setTransition", (function(e, a) {
                    var n = t.thumbs.swiper;
                    n && !n.destroyed && n.setTransition(a)
                })), n("beforeDestroy", (function() {
                    var e = t.thumbs.swiper;
                    e && !e.destroyed && i && e.destroy()
                })), Object.assign(t.thumbs, {
                    init: l,
                    update: o
                })
            }

            function me(e) {
                var t = e.swiper,
                    a = e.extendParams,
                    n = e.emit,
                    r = e.once;
                a({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: .02
                    }
                }), Object.assign(t, {
                    freeMode: {
                        onTouchStart: function() {
                            var e = t.getTranslate();
                            t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                                currentPos: t.rtl ? t.translate : -t.translate
                            })
                        },
                        onTouchMove: function() {
                            var e = t.touchEventsData,
                                a = t.touches;
                            0 === e.velocities.length && e.velocities.push({
                                position: a[t.isHorizontal() ? "startX" : "startY"],
                                time: e.touchStartTime
                            }), e.velocities.push({
                                position: a[t.isHorizontal() ? "currentX" : "currentY"],
                                time: A()
                            })
                        },
                        onTouchEnd: function(e) {
                            var a = e.currentPos,
                                i = t.params,
                                s = t.$wrapperEl,
                                l = t.rtlTranslate,
                                o = t.snapGrid,
                                d = t.touchEventsData,
                                c = A() - d.touchStartTime;
                            if (a < -t.minTranslate()) t.slideTo(t.activeIndex);
                            else if (a > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
                            else {
                                if (i.freeMode.momentum) {
                                    if (d.velocities.length > 1) {
                                        var u = d.velocities.pop(),
                                            p = d.velocities.pop(),
                                            f = u.position - p.position,
                                            v = u.time - p.time;
                                        t.velocity = f / v, t.velocity /= 2, Math.abs(t.velocity) < i.freeMode.minimumVelocity && (t.velocity = 0), (v > 150 || A() - u.time > 300) && (t.velocity = 0)
                                    } else t.velocity = 0;
                                    t.velocity *= i.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                                    var h = 1e3 * i.freeMode.momentumRatio,
                                        m = t.velocity * h,
                                        g = t.translate + m;
                                    l && (g = -g);
                                    var b, w, y = !1,
                                        C = 20 * Math.abs(t.velocity) * i.freeMode.momentumBounceRatio;
                                    if (g < t.maxTranslate()) i.freeMode.momentumBounce ? (g + t.maxTranslate() < -C && (g = t.maxTranslate() - C), b = t.maxTranslate(), y = !0, d.allowMomentumBounce = !0) : g = t.maxTranslate(), i.loop && i.centeredSlides && (w = !0);
                                    else if (g > t.minTranslate()) i.freeMode.momentumBounce ? (g - t.minTranslate() > C && (g = t.minTranslate() + C), b = t.minTranslate(), y = !0, d.allowMomentumBounce = !0) : g = t.minTranslate(), i.loop && i.centeredSlides && (w = !0);
                                    else if (i.freeMode.sticky) {
                                        for (var x, T = 0; T < o.length; T += 1)
                                            if (o[T] > -g) {
                                                x = T;
                                                break
                                            }
                                        g = -(g = Math.abs(o[x] - g) < Math.abs(o[x - 1] - g) || "next" === t.swipeDirection ? o[x] : o[x - 1])
                                    }
                                    if (w && r("transitionEnd", (function() {
                                            t.loopFix()
                                        })), 0 !== t.velocity) {
                                        if (h = l ? Math.abs((-g - t.translate) / t.velocity) : Math.abs((g - t.translate) / t.velocity), i.freeMode.sticky) {
                                            var S = Math.abs((l ? -g : g) - t.translate),
                                                E = t.slidesSizesGrid[t.activeIndex];
                                            h = S < E ? i.speed : S < 2 * E ? 1.5 * i.speed : 2.5 * i.speed
                                        }
                                    } else if (i.freeMode.sticky) return void t.slideToClosest();
                                    i.freeMode.momentumBounce && y ? (t.updateProgress(b), t.setTransition(h), t.setTranslate(g), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd((function() {
                                        t && !t.destroyed && d.allowMomentumBounce && (n("momentumBounce"), t.setTransition(i.speed), setTimeout((function() {
                                            t.setTranslate(b), s.transitionEnd((function() {
                                                t && !t.destroyed && t.transitionEnd()
                                            }))
                                        }), 0))
                                    }))) : t.velocity ? (n("_freeModeNoMomentumRelease"), t.updateProgress(g), t.setTransition(h), t.setTranslate(g), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd((function() {
                                        t && !t.destroyed && t.transitionEnd()
                                    })))) : t.updateProgress(g), t.updateActiveIndex(), t.updateSlidesClasses()
                                } else {
                                    if (i.freeMode.sticky) return void t.slideToClosest();
                                    i.freeMode && n("_freeModeNoMomentumRelease")
                                }(!i.freeMode.momentum || c >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                            }
                        }
                    }
                })
            }
            var ge = a("oA/F");

            function be(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function we(e, t) {
                var a = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((function(e) {
                    return a.indexOf(e) < 0
                })).forEach((function(a) {
                    "undefined" === typeof e[a] ? e[a] = t[a] : be(t[a]) && be(e[a]) && Object.keys(t[a]).length > 0 ? t[a].__swiper__ ? e[a] = t[a] : we(e[a], t[a]) : e[a] = t[a]
                }))
            }

            function ye(e) {
                return void 0 === e && (e = {}), e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
            }

            function Ce(e) {
                return void 0 === e && (e = {}), e.pagination && "undefined" === typeof e.pagination.el
            }

            function xe(e) {
                return void 0 === e && (e = {}), e.scrollbar && "undefined" === typeof e.scrollbar.el
            }

            function Te(e) {
                void 0 === e && (e = "");
                var t = e.split(" ").map((function(e) {
                        return e.trim()
                    })).filter((function(e) {
                        return !!e
                    })),
                    a = [];
                return t.forEach((function(e) {
                    a.indexOf(e) < 0 && a.push(e)
                })), a.join(" ")
            }
            var Se = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];

            function Ee(e, t) {
                var a = t.slidesPerView;
                if (t.breakpoints) {
                    var n = se.prototype.getBreakpoint(t.breakpoints),
                        r = n in t.breakpoints ? t.breakpoints[n] : void 0;
                    r && r.slidesPerView && (a = r.slidesPerView)
                }
                var i = Math.ceil(parseFloat(t.loopedSlides || a, 10));
                return (i += t.loopAdditionalSlides) > e.length && t.loopedSlidesLimit && (i = e.length), i
            }

            function Oe(e) {
                var t = [];
                return s.a.Children.toArray(e).forEach((function(e) {
                    e.type && "SwiperSlide" === e.type.displayName ? t.push(e) : e.props && e.props.children && Oe(e.props.children).forEach((function(e) {
                        return t.push(e)
                    }))
                })), t
            }

            function Me(e) {
                var t = [],
                    a = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return s.a.Children.toArray(e).forEach((function(e) {
                    if (e.type && "SwiperSlide" === e.type.displayName) t.push(e);
                    else if (e.props && e.props.slot && a[e.props.slot]) a[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        var n = Oe(e.props.children);
                        n.length > 0 ? n.forEach((function(e) {
                            return t.push(e)
                        })) : a["container-end"].push(e)
                    } else a["container-end"].push(e)
                })), {
                    slides: t,
                    slots: a
                }
            }

            function ke(e) {
                var t, a, n, r, i, s = e.swiper,
                    l = e.slides,
                    o = e.passedParams,
                    d = e.changedParams,
                    c = e.nextEl,
                    u = e.prevEl,
                    p = e.scrollbarEl,
                    f = e.paginationEl,
                    v = d.filter((function(e) {
                        return "children" !== e && "direction" !== e
                    })),
                    h = s.params,
                    m = s.pagination,
                    g = s.navigation,
                    b = s.scrollbar,
                    w = s.virtual,
                    y = s.thumbs;
                d.includes("thumbs") && o.thumbs && o.thumbs.swiper && h.thumbs && !h.thumbs.swiper && (t = !0), d.includes("controller") && o.controller && o.controller.control && h.controller && !h.controller.control && (a = !0), d.includes("pagination") && o.pagination && (o.pagination.el || f) && (h.pagination || !1 === h.pagination) && m && !m.el && (n = !0), d.includes("scrollbar") && o.scrollbar && (o.scrollbar.el || p) && (h.scrollbar || !1 === h.scrollbar) && b && !b.el && (r = !0), d.includes("navigation") && o.navigation && (o.navigation.prevEl || u) && (o.navigation.nextEl || c) && (h.navigation || !1 === h.navigation) && g && !g.prevEl && !g.nextEl && (i = !0);
                (v.forEach((function(e) {
                    if (be(h[e]) && be(o[e])) we(h[e], o[e]);
                    else {
                        var t = o[e];
                        !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? h[e] = o[e] : !1 === t && s[a = e] && (s[a].destroy(), "navigation" === a ? (h[a].prevEl = void 0, h[a].nextEl = void 0, s[a].prevEl = void 0, s[a].nextEl = void 0) : (h[a].el = void 0, s[a].el = void 0))
                    }
                    var a
                })), v.includes("controller") && !a && s.controller && s.controller.control && h.controller && h.controller.control && (s.controller.control = h.controller.control), d.includes("children") && l && w && h.virtual.enabled ? (w.slides = l, w.update(!0)) : d.includes("children") && s.lazy && s.params.lazy.enabled && s.lazy.load(), t) && (y.init() && y.update(!0));
                a && (s.controller.control = h.controller.control), n && (f && (h.pagination.el = f), m.init(), m.render(), m.update()), r && (p && (h.scrollbar.el = p), b.init(), b.updateSize(), b.setTranslate()), i && (c && (h.navigation.nextEl = c), u && (h.navigation.prevEl = u), g.init(), g.update()), d.includes("allowSlideNext") && (s.allowSlideNext = o.allowSlideNext), d.includes("allowSlidePrev") && (s.allowSlidePrev = o.allowSlidePrev), d.includes("direction") && s.changeDirection(o.direction, !1), s.update()
            }

            function Pe(e, t) {
                return Object(i.useLayoutEffect)(e, t)
            }
            var je = Object(i.createContext)(null),
                Le = Object(i.createContext)(null),
                ze = ["className", "tag", "wrapperTag", "children", "onSwiper"];

            function De() {
                return (De = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var Ae = Object(i.forwardRef)((function(e, t) {
                var a = void 0 === e ? {} : e,
                    l = a.className,
                    o = a.tag,
                    d = void 0 === o ? "div" : o,
                    c = a.wrapperTag,
                    u = void 0 === c ? "div" : c,
                    p = a.children,
                    f = a.onSwiper,
                    v = Object(ge.a)(a, ze),
                    h = !1,
                    m = Object(i.useState)("swiper"),
                    g = m[0],
                    b = m[1],
                    w = Object(i.useState)(null),
                    y = w[0],
                    C = w[1],
                    x = Object(i.useState)(!1),
                    T = x[0],
                    S = x[1],
                    E = Object(i.useRef)(!1),
                    O = Object(i.useRef)(null),
                    M = Object(i.useRef)(null),
                    k = Object(i.useRef)(null),
                    P = Object(i.useRef)(null),
                    j = Object(i.useRef)(null),
                    L = Object(i.useRef)(null),
                    z = Object(i.useRef)(null),
                    D = Object(i.useRef)(null),
                    A = function(e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = !0);
                        var a = {
                                on: {}
                            },
                            n = {},
                            r = {};
                        we(a, se.defaults), we(a, se.extendedDefaults), a._emitClasses = !0, a.init = !1;
                        var i = {},
                            s = Se.map((function(e) {
                                return e.replace(/_/, "")
                            })),
                            l = Object.assign({}, e);
                        return Object.keys(l).forEach((function(l) {
                            "undefined" !== typeof e[l] && (s.indexOf(l) >= 0 ? be(e[l]) ? (a[l] = {}, r[l] = {}, we(a[l], e[l]), we(r[l], e[l])) : (a[l] = e[l], r[l] = e[l]) : 0 === l.search(/on[A-Z]/) && "function" === typeof e[l] ? t ? n["".concat(l[2].toLowerCase()).concat(l.substr(3))] = e[l] : a.on["".concat(l[2].toLowerCase()).concat(l.substr(3))] = e[l] : i[l] = e[l])
                        })), ["navigation", "pagination", "scrollbar"].forEach((function(e) {
                            !0 === a[e] && (a[e] = {}), !1 === a[e] && delete a[e]
                        })), {
                            params: a,
                            passedParams: r,
                            rest: i,
                            events: n
                        }
                    }(v),
                    I = A.params,
                    _ = A.passedParams,
                    $ = A.rest,
                    N = A.events,
                    B = Me(p),
                    G = B.slides,
                    H = B.slots,
                    V = function() {
                        S(!T)
                    };
                Object.assign(I.on, {
                    _containerClasses: function(e, t) {
                        b(t)
                    }
                });
                var R = function() {
                    if (Object.assign(I.on, N), h = !0, M.current = new se(I), M.current.loopCreate = function() {}, M.current.loopDestroy = function() {}, I.loop && (M.current.loopedSlides = Ee(G, I)), M.current.virtual && M.current.params.virtual.enabled) {
                        M.current.virtual.slides = G;
                        var e = {
                            cache: !1,
                            slides: G,
                            renderExternal: C,
                            renderExternalUpdate: !1
                        };
                        we(M.current.params.virtual, e), we(M.current.originalParams.virtual, e)
                    }
                };
                O.current || R(), M.current && M.current.on("_beforeBreakpoint", V);
                return Object(i.useEffect)((function() {
                    return function() {
                        M.current && M.current.off("_beforeBreakpoint", V)
                    }
                })), Object(i.useEffect)((function() {
                    !E.current && M.current && (M.current.emitSlidesClasses(), E.current = !0)
                })), Pe((function() {
                    if (t && (t.current = O.current), O.current) return M.current.destroyed && R(),
                        function(e, t) {
                            var a = e.el,
                                n = e.nextEl,
                                r = e.prevEl,
                                i = e.paginationEl,
                                s = e.scrollbarEl,
                                l = e.swiper;
                            ye(t) && n && r && (l.params.navigation.nextEl = n, l.originalParams.navigation.nextEl = n, l.params.navigation.prevEl = r, l.originalParams.navigation.prevEl = r), Ce(t) && i && (l.params.pagination.el = i, l.originalParams.pagination.el = i), xe(t) && s && (l.params.scrollbar.el = s, l.originalParams.scrollbar.el = s), l.init(a)
                        }({
                            el: O.current,
                            nextEl: j.current,
                            prevEl: L.current,
                            paginationEl: z.current,
                            scrollbarEl: D.current,
                            swiper: M.current
                        }, I), f && f(M.current),
                        function() {
                            M.current && !M.current.destroyed && M.current.destroy(!0, !1)
                        }
                }), []), Pe((function() {
                    !h && N && M.current && Object.keys(N).forEach((function(e) {
                        M.current.on(e, N[e])
                    }));
                    var e = function(e, t, a, n, r) {
                        var i = [];
                        if (!t) return i;
                        var s = function(e) {
                            i.indexOf(e) < 0 && i.push(e)
                        };
                        if (a && n) {
                            var l = n.map(r),
                                o = a.map(r);
                            l.join("") !== o.join("") && s("children"), n.length !== a.length && s("children")
                        }
                        return Se.filter((function(e) {
                            return "_" === e[0]
                        })).map((function(e) {
                            return e.replace(/_/, "")
                        })).forEach((function(a) {
                            if (a in e && a in t)
                                if (be(e[a]) && be(t[a])) {
                                    var n = Object.keys(e[a]),
                                        r = Object.keys(t[a]);
                                    n.length !== r.length ? s(a) : (n.forEach((function(n) {
                                        e[a][n] !== t[a][n] && s(a)
                                    })), r.forEach((function(n) {
                                        e[a][n] !== t[a][n] && s(a)
                                    })))
                                } else e[a] !== t[a] && s(a)
                        })), i
                    }(_, k.current, G, P.current, (function(e) {
                        return e.key
                    }));
                    return k.current = _, P.current = G, e.length && M.current && !M.current.destroyed && ke({
                            swiper: M.current,
                            slides: G,
                            passedParams: _,
                            changedParams: e,
                            nextEl: j.current,
                            prevEl: L.current,
                            scrollbarEl: D.current,
                            paginationEl: z.current
                        }),
                        function() {
                            N && M.current && Object.keys(N).forEach((function(e) {
                                M.current.off(e, N[e])
                            }))
                        }
                })), Pe((function() {
                    var e;
                    !(e = M.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                }), [y]), s.a.createElement(d, De({
                    ref: O,
                    className: Te("".concat(g).concat(l ? " ".concat(l) : ""))
                }, $), s.a.createElement(Le.Provider, {
                    value: M.current
                }, H["container-start"], s.a.createElement(u, {
                    className: "swiper-wrapper"
                }, H["wrapper-start"], I.virtual ? function(e, t, a) {
                    if (!a) return null;
                    var r = e.isHorizontal() ? Object(n.a)({}, e.rtlTranslate ? "right" : "left", "".concat(a.offset, "px")) : {
                        top: "".concat(a.offset, "px")
                    };
                    return t.filter((function(e, t) {
                        return t >= a.from && t <= a.to
                    })).map((function(t) {
                        return s.a.cloneElement(t, {
                            swiper: e,
                            style: r
                        })
                    }))
                }(M.current, G, y) : !I.loop || M.current && M.current.destroyed ? G.map((function(e) {
                    return s.a.cloneElement(e, {
                        swiper: M.current
                    })
                })) : function(e, t, a) {
                    var n = t.map((function(t, a) {
                        return s.a.cloneElement(t, {
                            swiper: e,
                            "data-swiper-slide-index": a
                        })
                    }));

                    function i(e, t, n) {
                        return s.a.cloneElement(e, {
                            key: "".concat(e.key, "-duplicate-").concat(t, "-").concat(n),
                            className: "".concat(e.props.className || "", " ").concat(a.slideDuplicateClass)
                        })
                    }
                    if (a.loopFillGroupWithBlank) {
                        var l = a.slidesPerGroup - n.length % a.slidesPerGroup;
                        if (l !== a.slidesPerGroup)
                            for (var o = 0; o < l; o += 1) {
                                var d = s.a.createElement("div", {
                                    className: "".concat(a.slideClass, " ").concat(a.slideBlankClass)
                                });
                                n.push(d)
                            }
                    }
                    "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = n.length);
                    for (var c = Ee(n, a), u = [], p = [], f = 0; f < c; f += 1) {
                        var v = f - Math.floor(f / n.length) * n.length;
                        p.push(i(n[v], f, "append")), u.unshift(i(n[n.length - v - 1], f, "prepend"))
                    }
                    return e && (e.loopedSlides = c), [].concat(u, Object(r.a)(n), p)
                }(M.current, G, I), H["wrapper-end"]), ye(I) && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                    ref: L,
                    className: "swiper-button-prev"
                }), s.a.createElement("div", {
                    ref: j,
                    className: "swiper-button-next"
                })), xe(I) && s.a.createElement("div", {
                    ref: D,
                    className: "swiper-scrollbar"
                }), Ce(I) && s.a.createElement("div", {
                    ref: z,
                    className: "swiper-pagination"
                }), H["container-end"]))
            }));
            Ae.displayName = "Swiper";
            var Ie = ["tag", "children", "className", "swiper", "zoom", "virtualIndex"];

            function _e() {
                return (_e = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var $e = Object(i.forwardRef)((function(e, t) {
                var a = void 0 === e ? {} : e,
                    n = a.tag,
                    r = void 0 === n ? "div" : n,
                    l = a.children,
                    o = a.className,
                    d = void 0 === o ? "" : o,
                    c = a.swiper,
                    u = a.zoom,
                    p = a.virtualIndex,
                    f = Object(ge.a)(a, Ie),
                    v = Object(i.useRef)(null),
                    h = Object(i.useState)("swiper-slide"),
                    m = h[0],
                    g = h[1];

                function b(e, t, a) {
                    t === v.current && g(a)
                }
                Pe((function() {
                    if (t && (t.current = v.current), v.current && c) {
                        if (!c.destroyed) return c.on("_slideClass", b),
                            function() {
                                c && c.off("_slideClass", b)
                            };
                        "swiper-slide" !== m && g("swiper-slide")
                    }
                })), Pe((function() {
                    c && v.current && !c.destroyed && g(c.getSlideClasses(v.current))
                }), [c]);
                var w = {
                        isActive: m.indexOf("swiper-slide-active") >= 0 || m.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: m.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: m.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: m.indexOf("swiper-slide-prev") >= 0 || m.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: m.indexOf("swiper-slide-next") >= 0 || m.indexOf("swiper-slide-duplicate-next") >= 0
                    },
                    y = function() {
                        return "function" === typeof l ? l(w) : l
                    };
                return s.a.createElement(r, _e({
                    ref: v,
                    className: Te("".concat(m).concat(d ? " ".concat(d) : "")),
                    "data-swiper-slide-index": p
                }, f), s.a.createElement(je.Provider, {
                    value: w
                }, u ? s.a.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof u ? u : void 0
                }, y()) : y()))
            }));
            $e.displayName = "SwiperSlide";
            var Ne = a("m5he"),
                Be = a("b7Z7"),
                Ge = a("sX+s"),
                He = a("t3V9"),
                Ve = a("D4YM"),
                Re = (a("16fh"), a("oYCi"));

            function Fe(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function qe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Fe(Object(a), !0).forEach((function(t) {
                        Object(n.a)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Fe(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var We = function(e) {
                    var t = e.className,
                        a = e.direction;
                    return Object(Re.jsx)(Ze, {
                        $direction: a,
                        "aria-label": "left" === a ? "Previous slide" : "Next slide",
                        className: t,
                        children: Object(Re.jsx)(Ne.a, {
                            size: 40,
                            value: "chevron_".concat(a)
                        })
                    })
                },
                Ye = "swiper-nav-left",
                Xe = "swiper-nav-right",
                Ue = {
                    nextEl: ".".concat(Xe),
                    prevEl: ".".concat(Ye)
                },
                Ke = {
                    forceToAxis: !0
                },
                Ze = Object(l.d)(He.a).withConfig({
                    componentId: "sc-dn790e-0"
                })(["position:absolute;top:50%;z-index:2;border-radius:50%;transform:translateY(-50%);box-shadow:0px 4px 10px rgba(0,0,0,0.15);background-color:", ";padding:4px;&:hover{box-shadow:0px 4px 10px rgba(0,0,0,0.25);", "}", ""], (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return Object(Ve.d)({
                        variants: {
                            dark: {
                                background: e.theme.colors.oil
                            }
                        }
                    })
                }), (function(e) {
                    return "left" === e.$direction ? Object(l.c)(["left:3px;"]) : Object(l.c)(["right:3px;"])
                })),
                Je = function(e) {
                    var t, a, s, l, o, d, c, u, p, f = e.enableArrowControls,
                        v = void 0 === f || f,
                        h = e.autoplayConfig,
                        m = e.carouselConfigOverride,
                        g = e.className,
                        b = e.enableMousewheel,
                        w = void 0 === b || b,
                        y = e.enableCssMode,
                        C = void 0 !== y && y,
                        x = e.enableDotPagination,
                        T = void 0 !== x && x,
                        S = e.enableFreeScroll,
                        E = void 0 === S || S,
                        O = e.enableThumbPagination,
                        M = void 0 !== O && O,
                        k = e.loop,
                        P = void 0 !== k && k,
                        j = e.loopedSlides,
                        L = e.name,
                        z = void 0 === L ? "" : L,
                        D = e.padding,
                        A = e.speed,
                        I = e.responsiveConfig,
                        _ = e.showScrollbar,
                        $ = void 0 === _ || _,
                        N = e.slides,
                        B = e.slidesPerView,
                        G = void 0 === B ? 1 : B,
                        H = e.spaceBetween,
                        V = void 0 === H ? 16 : H,
                        R = e.thumbnailNavigationConfigOverride,
                        F = e.renderSlide,
                        q = e.renderThumb,
                        W = Object(i.useState)((function() {
                            return [le].concat(Object(r.a)(w ? [oe, fe] : []), Object(r.a)(E ? [me] : []), Object(r.a)(h ? [ve] : []), Object(r.a)(T ? [pe] : []), Object(r.a)(M ? [he] : []), Object(r.a)(v || M ? [ce] : []))
                        }))[0],
                        Y = Object(i.useState)(h ? qe({
                            delay: 3e3,
                            disableOnInteraction: !0,
                            pauseOnMouseEnter: !0
                        }, h) : void 0)[0],
                        X = Object(i.useState)(I ? (u = {}, Object(n.a)(u, Ge.c.xs, null !== (t = I.xs) && void 0 !== t ? t : I.default), Object(n.a)(u, Ge.c.sm, null !== (a = I.sm) && void 0 !== a ? a : I.default), Object(n.a)(u, Ge.c.md, null !== (s = I.md) && void 0 !== s ? s : I.default), Object(n.a)(u, Ge.c.lg, null !== (l = I.lg) && void 0 !== l ? l : I.default), Object(n.a)(u, Ge.c.xl, null !== (o = I.xl) && void 0 !== o ? o : I.default), Object(n.a)(u, Ge.c.xxl, null !== (d = I.xxl) && void 0 !== d ? d : I.default), Object(n.a)(u, Ge.c.xxxl, null !== (c = I.xxxl) && void 0 !== c ? c : I.default), u) : void 0)[0],
                        U = Object(i.useState)(T ? {
                            clickable: !0
                        } : void 0)[0],
                        K = Object(i.useState)(null),
                        Z = K[0],
                        J = K[1],
                        Q = Object(i.useMemo)((function() {
                            return {
                                swiper: Z,
                                autoScrollOffset: 1
                            }
                        }), [Z]),
                        ee = Object(i.useState)(0),
                        te = ee[0],
                        ae = ee[1],
                        ne = function(e, t) {
                            var a = t || 1;
                            return e && Object.values(e).map((function(e) {
                                var t = e.slidesPerView;
                                a = Math.max(a, t)
                            })), a
                        }(I, G),
                        re = !!v && N.length > ne,
                        ie = Object(i.useMemo)((function() {
                            return N.map((function(e) {
                                return Object(Re.jsx)($e, {
                                    children: F(e)
                                }, e.id)
                            }))
                        }), [N, F]),
                        se = Object(i.useCallback)((function(e) {
                            var t = e.activeIndex;
                            return ae(t)
                        }), [ae]);
                    return z && (Ue.nextEl = ".".concat(z).concat(Xe), Ue.prevEl = ".".concat(z).concat(Ye)), Object(Re.jsxs)(Re.Fragment, {
                        children: [Object(Re.jsxs)(Be.a, {
                            padding: D || (re ? "0 24px" : 0),
                            position: "relative",
                            children: [re && Object(Re.jsx)(We, {
                                className: "".concat(z).concat(Ye),
                                direction: "left"
                            }), Object(Re.jsx)(Ae, qe(qe(qe({
                                autoplay: Y,
                                breakpoints: X,
                                className: g,
                                cssMode: C,
                                direction: "horizontal",
                                keyboard: !0,
                                loop: P,
                                loopAdditionalSlides: j,
                                loopedSlides: j,
                                modules: W,
                                mousewheel: w ? Ke : void 0,
                                navigation: v ? Ue : void 0,
                                observeParents: !0,
                                observeSlideChildren: !0,
                                observer: !0,
                                pagination: U,
                                preventInteractionOnTransition: !0,
                                resizeObserver: !0,
                                scrollbar: $,
                                slidesPerView: G,
                                spaceBetween: V,
                                speed: A,
                                thumbs: M ? Q : void 0,
                                onActiveIndexChange: se
                            }, null === I || void 0 === I ? void 0 : I.default), m), {}, {
                                children: ie
                            })), re && Object(Re.jsx)(We, {
                                className: "".concat(z).concat(Xe),
                                direction: "right"
                            })]
                        }), M && Object(Re.jsx)(Be.a, {
                            marginTop: {
                                _: "8px",
                                sm: "16px"
                            },
                            padding: re ? "0 24px" : 0,
                            children: Object(Re.jsx)(Ae, qe(qe({
                                breakpoints: (p = {}, Object(n.a)(p, Ge.c.xs, {
                                    spaceBetween: 8
                                }), Object(n.a)(p, Ge.c.lg, {
                                    spaceBetween: 12
                                }), p),
                                modules: W,
                                slidesPerView: 4,
                                watchSlidesProgress: !0,
                                onSwiper: J
                            }, R), {}, {
                                children: N.map((function(e, t) {
                                    return Object(Re.jsx)($e, {
                                        children: q ? q(e, t === te) : F(e)
                                    }, "thumb-".concat(e.id))
                                }))
                            }))
                        })]
                    })
                }
        }
    }
]);
//# sourceMappingURL=0842887b8fc3c79c482ab6453361c2ed93b1e96f.5f496166253a85a4d6aa.js.map