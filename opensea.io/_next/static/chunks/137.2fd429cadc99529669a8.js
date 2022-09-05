(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [137], {
        qLiu: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "DefaultPrivacyLevel", (function() {
                return Xt
            })), n.d(e, "datadogRum", (function() {
                return Oo
            }));
            var r = {
                    log: "log",
                    debug: "debug",
                    info: "info",
                    warn: "warn",
                    error: "error"
                },
                i = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    Object.prototype.hasOwnProperty.call(r, t) || (t = r.log), i[t].apply(i, e)
                };

            function o(t, e) {
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    try {
                        return t.apply(void 0, n)
                    } catch (o) {
                        i.error(e, o)
                    }
                }
            }
            i.debug = console.debug.bind(console), i.log = console.log.bind(console), i.info = console.info.bind(console), i.warn = console.warn.bind(console), i.error = console.error.bind(console);
            var a, u = function(t, e, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
                    return t.concat(r || Array.prototype.slice.call(e))
                },
                s = !1;

            function c(t) {
                s = t
            }

            function f(t) {
                return function() {
                    return d(t, this, arguments)
                }
            }

            function d(t, e, n) {
                try {
                    return t.apply(e, n)
                } catch (i) {
                    if (l(r.error, i), a) try {
                        a(i)
                    } catch (i) {
                        l(r.error, i)
                    }
                }
            }

            function l(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                s && i.apply(void 0, u([t, "[MONITOR]"], e, !1))
            }
            var p = 1e3,
                v = 6e4;

            function m(t, e, n) {
                var r, i, o = !n || void 0 === n.leading || n.leading,
                    a = !n || void 0 === n.trailing || n.trailing,
                    u = !1;
                return {
                    throttled: function() {
                        for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
                        u ? r = n : (o ? t.apply(void 0, n) : r = n, u = !0, i = setTimeout((function() {
                            a && r && t.apply(void 0, r), u = !1, r = void 0
                        }), e))
                    },
                    cancel: function() {
                        clearTimeout(i), u = !1, r = void 0
                    }
                }
            }

            function h(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return e.forEach((function(e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })), t
            }

            function g(t) {
                return h({}, t)
            }

            function y(t) {
                return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, y)
            }

            function b(t) {
                return 0 !== t && 100 * Math.random() <= t
            }

            function w(t, e) {
                return +t.toFixed(e)
            }

            function T() {}

            function S(t, e, n) {
                if ("object" !== typeof t || null === t) return JSON.stringify(t);
                var r = C(Object.prototype),
                    i = C(Array.prototype),
                    o = C(Object.getPrototypeOf(t)),
                    a = C(t);
                try {
                    return JSON.stringify(t, e, n)
                } catch (u) {
                    return "<error: unable to serialize object>"
                } finally {
                    r(), i(), o(), a()
                }
            }

            function C(t) {
                var e = t,
                    n = e.toJSON;
                return n ? (delete e.toJSON, function() {
                    e.toJSON = n
                }) : T
            }

            function k(t, e) {
                return -1 !== t.indexOf(e)
            }

            function E(t) {
                if (Array.from) return Array.from(t);
                var e = [];
                if (t instanceof Set) t.forEach((function(t) {
                    return e.push(t)
                }));
                else
                    for (var n = 0; n < t.length; n++) e.push(t[n]);
                return e
            }

            function x(t, e) {
                for (var n = 0; n < t.length; n += 1) {
                    var r = t[n];
                    if (e(r, n)) return r
                }
            }

            function I(t) {
                return _(t) && t >= 0 && t <= 100
            }

            function _(t) {
                return "number" === typeof t
            }

            function A(t) {
                return Object.keys(t).map((function(e) {
                    return t[e]
                }))
            }

            function N(t) {
                return Object.keys(t).map((function(e) {
                    return [e, t[e]]
                }))
            }

            function O(t) {
                return 0 === Object.keys(t).length
            }

            function L() {
                if ("object" === typeof globalThis) return globalThis;
                Object.defineProperty(Object.prototype, "_dd_temp_", {
                    get: function() {
                        return this
                    },
                    configurable: !0
                });
                var t = _dd_temp_;
                return delete Object.prototype._dd_temp_, "object" !== typeof t && (t = "object" === typeof self ? self : "object" === typeof window ? window : {}), t
            }

            function R(t) {
                if (t.origin) return t.origin;
                var e = t.host.replace(/(:80|:443)$/, "");
                return "".concat(t.protocol, "//").concat(e)
            }

            function M(t, e) {
                var n = new RegExp("(?:^|;)\\s*".concat(e, "\\s*=\\s*([^;]+)")).exec(t);
                return n ? n[1] : void 0
            }

            function P(t, e, n) {
                void 0 === n && (n = "");
                var r = t.charCodeAt(e - 1),
                    i = r >= 55296 && r <= 56319 ? e + 1 : e;
                return t.length <= i ? t : "".concat(t.slice(0, i)).concat(n)
            }

            function D(t, e, n, r) {
                return U(t, [e], n, r)
            }

            function U(t, e, n, r) {
                var i = void 0 === r ? {} : r,
                    o = i.once,
                    a = i.capture,
                    u = i.passive,
                    s = f(o ? function(t) {
                        d(), n(t)
                    } : n),
                    c = u ? {
                        capture: a,
                        passive: u
                    } : a;
                e.forEach((function(e) {
                    return t.addEventListener(e, s, c)
                }));
                var d = function() {
                    return e.forEach((function(e) {
                        return t.removeEventListener(e, s, c)
                    }))
                };
                return {
                    stop: d
                }
            }

            function B(t, e) {
                return t.matches ? t.matches(e) : !!t.msMatchesSelector && t.msMatchesSelector(e)
            }

            function j(t, e) {
                document.readyState === t || "complete" === document.readyState ? e() : D(window, "complete" === t ? "load" : "DOMContentLoaded", e, {
                    once: !0
                })
            }

            function V(t) {
                return null === t ? "null" : Array.isArray(t) ? "array" : typeof t
            }

            function q(t, e, n) {
                if (void 0 === n && (n = function() {
                        if ("undefined" !== typeof WeakSet) {
                            var t = new WeakSet;
                            return {
                                hasAlreadyBeenSeen: function(e) {
                                    var n = t.has(e);
                                    return n || t.add(e), n
                                }
                            }
                        }
                        var e = [];
                        return {
                            hasAlreadyBeenSeen: function(t) {
                                var n = e.indexOf(t) >= 0;
                                return n || e.push(t), n
                            }
                        }
                    }()), void 0 === e) return t;
                if ("object" !== typeof e || null === e) return e;
                if (e instanceof Date) return new Date(e.getTime());
                if (e instanceof RegExp) {
                    var r = e.flags || [e.global ? "g" : "", e.ignoreCase ? "i" : "", e.multiline ? "m" : "", e.sticky ? "y" : "", e.unicode ? "u" : ""].join("");
                    return new RegExp(e.source, r)
                }
                if (!n.hasAlreadyBeenSeen(e)) {
                    if (Array.isArray(e)) {
                        for (var i = Array.isArray(t) ? t : [], o = 0; o < e.length; ++o) i[o] = q(i[o], e[o], n);
                        return i
                    }
                    var a = "object" === V(t) ? t : {};
                    for (var u in e) Object.prototype.hasOwnProperty.call(e, u) && (a[u] = q(a[u], e[u], n));
                    return a
                }
            }

            function F(t) {
                return q(void 0, t)
            }

            function H() {
                for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                for (var r = 0, i = e; r < i.length; r++) {
                    var o = i[r];
                    void 0 !== o && null !== o && (t = q(t, o))
                }
                return t
            }

            function z(t, e) {
                return t.some((function(t) {
                    return t === e || t instanceof RegExp && t.test(e)
                }))
            }

            function G(t) {
                return window.CSS && window.CSS.escape ? window.CSS.escape(t) : t.replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(t, e) {
                    return e ? "\0" === t ? "\ufffd" : "".concat(t.slice(0, -1), "\\").concat(t.charCodeAt(t.length - 1).toString(16), " ") : "\\".concat(t)
                }))
            }

            function W() {
                var t = {};
                return {
                    get: function() {
                        return t
                    },
                    add: function(e, n) {
                        t[e] = n
                    },
                    remove: function(e) {
                        delete t[e]
                    },
                    set: function(e) {
                        t = e
                    },
                    getContext: function() {
                        return F(t)
                    },
                    setContext: function(e) {
                        t = F(e)
                    },
                    setContextProperty: function(e, n) {
                        t[e] = F(n)
                    },
                    removeContextProperty: function(e) {
                        delete t[e]
                    },
                    clearContext: function() {
                        t = {}
                    }
                }
            }
            var X, Y = function() {
                function t() {
                    this.buffer = []
                }
                return t.prototype.add = function(t) {
                    this.buffer.push(t) > 500 && this.buffer.splice(0, 1)
                }, t.prototype.drain = function() {
                    this.buffer.forEach((function(t) {
                        return t()
                    })), this.buffer.length = 0
                }, t
            }();

            function K(t) {
                return {
                    relative: t,
                    timeStamp: J(t)
                }
            }

            function J(t) {
                var e = Z() - performance.now();
                return e > ot() ? Math.round(e + t) : function(t) {
                    return Math.round(ot() + t)
                }(t)
            }

            function $(t) {
                return _(t) ? w(1e6 * t, 0) : t
            }

            function Z() {
                return (new Date).getTime()
            }

            function Q() {
                return Z()
            }

            function tt() {
                return performance.now()
            }

            function et() {
                return {
                    relative: tt(),
                    timeStamp: Q()
                }
            }

            function nt() {
                return {
                    relative: 0,
                    timeStamp: ot()
                }
            }

            function rt(t, e) {
                return e - t
            }

            function it(t) {
                return t - ot()
            }

            function ot() {
                return void 0 === X && (X = performance.timing.navigationStart), X
            }
            var at;

            function ut(t, e, n, r) {
                var i = new Date;
                i.setTime(i.getTime() + n);
                var o = "expires=".concat(i.toUTCString()),
                    a = r && r.crossSite ? "none" : "strict",
                    u = r && r.domain ? ";domain=".concat(r.domain) : "",
                    s = r && r.secure ? ";secure" : "";
                document.cookie = "".concat(t, "=").concat(e, ";").concat(o, ";path=/;samesite=").concat(a).concat(u).concat(s)
            }

            function st(t) {
                return M(document.cookie, t)
            }

            function ct(t, e) {
                ut(t, "", 0, e)
            }

            function ft() {
                return Boolean(window._DATADOG_SYNTHETICS_INJECTS_RUM || st("datadog-synthetics-injects-rum"))
            }

            function dt() {
                var t = L().DatadogEventBridge;
                if (t) return {
                    getAllowedWebViewHosts: function() {
                        return JSON.parse(t.getAllowedWebViewHosts())
                    },
                    send: function(e, n) {
                        t.send(JSON.stringify({
                            eventType: e,
                            event: n
                        }))
                    }
                }
            }

            function lt(t) {
                var e;
                void 0 === t && (t = null === (e = L().location) || void 0 === e ? void 0 : e.hostname);
                var n = dt();
                return !!n && n.getAllowedWebViewHosts().some((function(e) {
                    return t === e || (n = t, r = ".".concat(e), n.slice(-r.length) === r);
                    var n, r
                }))
            }
            var pt = "?";

            function vt(t) {
                var e = [],
                    n = Ct(t, "stack");
                return n && n.split("\n").forEach((function(t) {
                    var n = function(t) {
                        var e = gt.exec(t);
                        if (!e) return;
                        var n = e[2] && 0 === e[2].indexOf("native"),
                            r = e[2] && 0 === e[2].indexOf("eval"),
                            i = yt.exec(e[2]);
                        r && i && (e[2] = i[1], e[3] = i[2], e[4] = i[3]);
                        return {
                            args: n ? [e[2]] : [],
                            column: e[4] ? +e[4] : void 0,
                            func: e[1] || pt,
                            line: e[3] ? +e[3] : void 0,
                            url: n ? void 0 : e[2]
                        }
                    }(t) || function(t) {
                        var e = bt.exec(t);
                        if (!e) return;
                        return {
                            args: [],
                            column: e[3] ? +e[3] : void 0,
                            func: pt,
                            line: e[2] ? +e[2] : void 0,
                            url: e[1]
                        }
                    }(t) || function(t) {
                        var e = wt.exec(t);
                        if (!e) return;
                        return {
                            args: [],
                            column: e[4] ? +e[4] : void 0,
                            func: e[1] || pt,
                            line: +e[3],
                            url: e[2]
                        }
                    }(t) || function(t) {
                        var e = Tt.exec(t);
                        if (!e) return;
                        var n = e[3] && e[3].indexOf(" > eval") > -1,
                            r = St.exec(e[3]);
                        n && r && (e[3] = r[1], e[4] = r[2], e[5] = void 0);
                        return {
                            args: e[2] ? e[2].split(",") : [],
                            column: e[5] ? +e[5] : void 0,
                            func: e[1] || pt,
                            line: e[4] ? +e[4] : void 0,
                            url: e[3]
                        }
                    }(t);
                    n && (!n.func && n.line && (n.func = pt), e.push(n))
                })), {
                    message: Ct(t, "message"),
                    name: Ct(t, "name"),
                    stack: e
                }
            }
            var mt = "((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\\w+\\.|\\/).*?)",
                ht = "(?::(\\d+))",
                gt = new RegExp("^\\s*at (.*?) ?\\(".concat(mt).concat(ht, "?").concat(ht, "?\\)?\\s*$"), "i"),
                yt = new RegExp("\\((\\S*)".concat(ht).concat(ht, "\\)"));
            var bt = new RegExp("^\\s*at ?".concat(mt).concat(ht, "?").concat(ht, "??\\s*$"), "i");
            var wt = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
            var Tt = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                St = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

            function Ct(t, e) {
                if ("object" === typeof t && t && e in t) {
                    var n = t[e];
                    return "string" === typeof n ? n : void 0
                }
            }
            var kt, Et, xt = "agent",
                It = "console",
                _t = "custom",
                At = "source",
                Nt = "report";

            function Ot(t, e, n, r) {
                return t && (void 0 !== t.message || e instanceof Error) ? {
                    message: t.message || "Empty message",
                    stack: Lt(t),
                    handlingStack: r,
                    type: t.name
                } : {
                    message: "".concat(n, " ").concat(S(e)),
                    stack: "No stack, consider using an instance of Error",
                    handlingStack: r,
                    type: t && t.name
                }
            }

            function Lt(t) {
                var e = Rt(t);
                return t.stack.forEach((function(t) {
                    var n = "?" === t.func ? "<anonymous>" : t.func,
                        r = t.args && t.args.length > 0 ? "(".concat(t.args.join(", "), ")") : "",
                        i = t.line ? ":".concat(t.line) : "",
                        o = t.line && t.column ? ":".concat(t.column) : "";
                    e += "\n  at ".concat(n).concat(r, " @ ").concat(t.url).concat(i).concat(o)
                })), e
            }

            function Rt(t) {
                return "".concat(t.name || "Error", ": ").concat(t.message)
            }

            function Mt() {
                var t, e = new Error;
                if (!e.stack) try {
                    throw e
                } catch (n) {}
                return d((function() {
                    var n = vt(e);
                    n.stack = n.stack.slice(2), t = Lt(n)
                })), t
            }

            function Pt(t) {
                return !!kt && kt.has(t)
            }

            function Dt() {
                return kt || new Set
            }

            function Ut(t) {
                return jt(t, R(window.location)).href
            }

            function Bt(t) {
                return R(jt(t))
            }

            function jt(t, e) {
                if (function() {
                        if (void 0 !== Et) return Et;
                        try {
                            var t = new URL("http://test/path");
                            return Et = "http://test/path" === t.href
                        } catch (e) {
                            Et = !1
                        }
                        return Et
                    }()) return void 0 !== e ? new URL(t, e) : new URL(t);
                if (void 0 === e && !/:/.test(t)) throw new Error("Invalid URL: '".concat(t, "'"));
                var n = document,
                    r = n.createElement("a");
                if (void 0 !== e) {
                    var i = (n = document.implementation.createHTMLDocument("")).createElement("base");
                    i.href = e, n.head.appendChild(i), n.body.appendChild(r)
                }
                return r.href = t, r
            }
            var Vt = "datadoghq.com",
                qt = {
                    logs: "logs",
                    rum: "rum",
                    sessionReplay: "session-replay"
                },
                Ft = {
                    logs: "logs",
                    rum: "rum",
                    sessionReplay: "replay"
                };

            function Ht(t, e, n) {
                var r = t.site,
                    i = void 0 === r ? Vt : r,
                    o = t.clientToken,
                    a = i.split("."),
                    u = a.pop(),
                    s = "".concat(qt[e], ".browser-intake-").concat(a.join("-"), ".").concat(u),
                    c = "https://".concat(s, "/api/v2/").concat(Ft[e]),
                    f = t.proxyUrl && Ut(t.proxyUrl);
                return {
                    build: function() {
                        var t = "ddsource=browser" + "&ddtags=".concat(encodeURIComponent(["sdk_version:".concat("4.17.2")].concat(n).join(","))) + "&dd-api-key=".concat(o) + "&dd-evp-origin-version=".concat(encodeURIComponent("4.17.2")) + "&dd-evp-origin=browser" + "&dd-request-id=".concat(y());
                        "rum" === e && (t += "&batch_time=".concat(Q()));
                        var r = "".concat(c, "?").concat(t);
                        return f ? "".concat(f, "?ddforward=").concat(encodeURIComponent(r)) : r
                    },
                    buildIntakeUrl: function() {
                        return f ? "".concat(f, "?ddforward") : c
                    },
                    endpointType: e
                }
            }
            var zt = /[^a-z0-9_:./-]/;

            function Gt(t, e) {
                var n = 200 - t.length - 1;
                (e.length > n || zt.test(e)) && i.warn("".concat(t, " value doesn't meet tag requirements and will be sanitized"));
                var r = e.replace(/,/g, "_");
                return "".concat(t, ":").concat(r)
            }

            function Wt(t) {
                var e = function(t) {
                        var e = t.env,
                            n = t.service,
                            r = t.version,
                            i = t.datacenter,
                            o = [];
                        return e && o.push(Gt("env", e)), n && o.push(Gt("service", n)), r && o.push(Gt("version", r)), i && o.push(Gt("datacenter", i)), o
                    }(t),
                    n = function(t, e) {
                        return {
                            logsEndpointBuilder: Ht(t, "logs", e),
                            rumEndpointBuilder: Ht(t, "rum", e),
                            sessionReplayEndpointBuilder: Ht(t, "sessionReplay", e)
                        }
                    }(t, e),
                    r = A(n).map((function(t) {
                        return t.buildIntakeUrl()
                    })),
                    i = function(t, e, n) {
                        if (!t.replica) return;
                        var r = h({}, t, {
                                site: Vt,
                                clientToken: t.replica.clientToken
                            }),
                            i = {
                                logsEndpointBuilder: Ht(r, "logs", n),
                                rumEndpointBuilder: Ht(r, "rum", n)
                            };
                        return e.push.apply(e, A(i).map((function(t) {
                            return t.buildIntakeUrl()
                        }))), h({
                            applicationId: t.replica.applicationId
                        }, i)
                    }(t, r, e);
                return h({
                    isIntakeUrl: function(t) {
                        return r.some((function(e) {
                            return 0 === t.indexOf(e)
                        }))
                    },
                    replica: i,
                    site: t.site || Vt
                }, n)
            }
            var Xt = {
                ALLOW: "allow",
                MASK: "mask",
                MASK_USER_INPUT: "mask-user-input"
            };

            function Yt(t) {
                var e, n;
                if (t && t.clientToken)
                    if (void 0 === t.sampleRate || I(t.sampleRate)) {
                        var r;
                        if (void 0 === t.telemetrySampleRate || I(t.telemetrySampleRate)) return r = t.enableExperimentalFeatures, Array.isArray(r) && (kt || (kt = new Set(r)), r.filter((function(t) {
                            return "string" === typeof t
                        })).forEach((function(t) {
                            kt.add(t)
                        }))), h({
                            beforeSend: t.beforeSend && o(t.beforeSend, "beforeSend threw an error:"),
                            cookieOptions: Kt(t),
                            sampleRate: null !== (e = t.sampleRate) && void 0 !== e ? e : 100,
                            telemetrySampleRate: null !== (n = t.telemetrySampleRate) && void 0 !== n ? n : 20,
                            service: t.service,
                            silentMultipleInit: !!t.silentMultipleInit,
                            batchBytesLimit: 16384,
                            eventRateLimiterThreshold: 3e3,
                            maxTelemetryEventsPerPage: 15,
                            flushTimeout: 3e4,
                            batchMessagesLimit: 50,
                            messageBytesLimit: 262144
                        }, Wt(t));
                        i.error("Telemetry Sample Rate should be a number between 0 and 100")
                    } else i.error("Sample Rate should be a number between 0 and 100");
                else i.error("Client Token is not configured, we will not send any data.")
            }

            function Kt(t) {
                var e = {};
                return e.secure = function(t) {
                    return !!t.useSecureSessionCookie || !!t.useCrossSiteSessionCookie
                }(t), e.crossSite = !!t.useCrossSiteSessionCookie, t.trackSessionAcrossSubdomains && (e.domain = function() {
                    if (void 0 === at) {
                        for (var t = "dd_site_test_".concat(y()), e = window.location.hostname.split("."), n = e.pop(); e.length && !st(t);) n = "".concat(e.pop(), ".").concat(n), ut(t, "test", p, {
                            domain: n
                        });
                        ct(t, {
                            domain: n
                        }), at = n
                    }
                    return at
                }()), e
            }
            var Jt = function() {
                function t(t) {
                    this.onFirstSubscribe = t, this.observers = []
                }
                return t.prototype.subscribe = function(t) {
                    var e = this;
                    return !this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe() || void 0), this.observers.push(t), {
                        unsubscribe: function() {
                            e.observers = e.observers.filter((function(e) {
                                return t !== e
                            })), !e.observers.length && e.onLastUnsubscribe && e.onLastUnsubscribe()
                        }
                    }
                }, t.prototype.notify = function(t) {
                    this.observers.forEach((function(e) {
                        return e(t)
                    }))
                }, t
            }();

            function $t() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = new Jt((function() {
                    var e = t.map((function(t) {
                        return t.subscribe((function(t) {
                            return n.notify(t)
                        }))
                    }));
                    return function() {
                        return e.forEach((function(t) {
                            return t.unsubscribe()
                        }))
                    }
                }));
                return n
            }
            var Zt, Qt = ["https://www.datadoghq-browser-agent.com", "https://www.datad0g-browser-agent.com", "http://localhost", "<anonymous>"],
                te = ["ddog-gov.com"],
                ee = {
                    maxEventsPerPage: 0,
                    sentEventCount: 0,
                    telemetryEnabled: !1
                };

            function ne(t) {
                var e, n = new Jt;
                return ee.telemetryEnabled = b(t.telemetrySampleRate), Zt = function(r) {
                    !k(te, t.site) && ee.telemetryEnabled && n.notify(function(t) {
                        return H({
                            type: "telemetry",
                            date: Q(),
                            service: "browser-sdk",
                            version: "4.17.2",
                            source: "browser",
                            _dd: {
                                format_version: 2
                            },
                            telemetry: t,
                            experimental_features: E(Dt())
                        }, void 0 !== e ? e() : {})
                    }(r))
                }, a = ie, h(ee, {
                    maxEventsPerPage: t.maxTelemetryEventsPerPage,
                    sentEventCount: 0
                }), {
                    setContextProvider: function(t) {
                        e = t
                    },
                    observable: n
                }
            }

            function re(t, e) {
                l(r.debug, t, e), oe(h({
                    message: t,
                    status: "debug"
                }, e))
            }

            function ie(t) {
                oe(h({
                    status: "error"
                }, function(t) {
                    if (t instanceof Error) {
                        var e = vt(t);
                        return {
                            error: {
                                kind: e.name,
                                stack: Lt(ae(e))
                            },
                            message: e.message
                        }
                    }
                    return {
                        error: {
                            stack: "Not an instance of error"
                        },
                        message: "Uncaught ".concat(S(t))
                    }
                }(t)))
            }

            function oe(t) {
                Zt && ee.sentEventCount < ee.maxEventsPerPage && (ee.sentEventCount += 1, Zt(t))
            }

            function ae(t) {
                return t.stack = t.stack.filter((function(t) {
                    return !t.url || Qt.some((function(e) {
                        return n = t.url, r = e, n.slice(0, r.length) === r;
                        var n, r
                    }))
                })), t
            }

            function ue() {
                var t, e = window;
                if (e.Zone) {
                    var n = e.Zone.__symbol__;
                    if (!(t = e[n("MutationObserver")]) && e.MutationObserver) {
                        var r = new e.MutationObserver(T)[n("originalInstance")];
                        t = r && r.constructor
                    }
                }
                return t || (t = e.MutationObserver), t
            }
            var se = "initial_document",
                ce = [
                    ["document", function(t) {
                        return se === t
                    }],
                    ["xhr", function(t) {
                        return "xmlhttprequest" === t
                    }],
                    ["fetch", function(t) {
                        return "fetch" === t
                    }],
                    ["beacon", function(t) {
                        return "beacon" === t
                    }],
                    ["css", function(t, e) {
                        return /\.css$/i.test(e)
                    }],
                    ["js", function(t, e) {
                        return /\.js$/i.test(e)
                    }],
                    ["image", function(t, e) {
                        return k(["image", "img", "icon"], t) || null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e)
                    }],
                    ["font", function(t, e) {
                        return null !== /\.(woff|eot|woff2|ttf)$/i.exec(e)
                    }],
                    ["media", function(t, e) {
                        return k(["audio", "video"], t) || null !== /\.(mp3|mp4)$/i.exec(e)
                    }]
                ];

            function fe(t) {
                var e = t.name;
                if (! function(t) {
                        try {
                            return !!jt(t)
                        } catch (o) {
                            return !1
                        }
                    }(e)) return re('Failed to construct URL for "'.concat(t.name, '"')), "other";
                for (var n = function(t) {
                        var e = jt(t).pathname;
                        return "/" === e[0] ? e : "/".concat(e)
                    }(e), r = 0, i = ce; r < i.length; r++) {
                    var o = i[r],
                        a = o[0];
                    if ((0, o[1])(t.initiatorType, n)) return a
                }
                return "other"
            }

            function de() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = 1; n < t.length; n += 1)
                    if (t[n - 1] > t[n]) return !1;
                return !0
            }

            function le(t) {
                var e = t.duration,
                    n = t.startTime,
                    r = t.responseEnd;
                return $(0 === e && n < r ? rt(n, r) : e)
            }

            function pe(t) {
                var e = ve(t);
                if (e) {
                    var n = e.startTime,
                        r = e.fetchStart,
                        i = e.redirectStart,
                        o = e.redirectEnd,
                        a = e.domainLookupStart,
                        u = e.domainLookupEnd,
                        s = e.connectStart,
                        c = e.secureConnectionStart,
                        f = e.connectEnd,
                        d = e.requestStart,
                        l = e.responseStart,
                        p = {
                            download: he(n, l, e.responseEnd),
                            first_byte: he(n, d, l)
                        };
                    return f !== r && (p.connect = he(n, s, f), de(s, c, f) && (p.ssl = he(n, c, f))), u !== r && (p.dns = he(n, a, u)), me(t) && (p.redirect = he(n, i, o)), p
                }
            }

            function ve(t) {
                if (de(t.startTime, t.fetchStart, t.domainLookupStart, t.domainLookupEnd, t.connectStart, t.connectEnd, t.requestStart, t.responseStart, t.responseEnd)) {
                    if (!me(t)) return t;
                    var e = t.redirectStart,
                        n = t.redirectEnd;
                    if (e < t.startTime && (e = t.startTime), n < t.startTime && (n = t.fetchStart), de(t.startTime, e, n, t.fetchStart)) return h({}, t, {
                        redirectEnd: n,
                        redirectStart: e
                    })
                }
            }

            function me(t) {
                return t.fetchStart !== t.startTime
            }

            function he(t, e, n) {
                return {
                    duration: $(rt(e, n)),
                    start: $(rt(t, e))
                }
            }

            function ge(t) {
                if (t.startTime < t.responseStart) return t.decodedBodySize
            }

            function ye(t, e) {
                return e && !t.isIntakeUrl(e)
            }
            var be, we;

            function Te(t) {
                var e = function(t) {
                    var e = t.querySelector("meta[name=dd-trace-id]"),
                        n = t.querySelector("meta[name=dd-trace-time]");
                    return Se(e && e.content, n && n.content)
                }(t) || function(t) {
                    var e = function(t) {
                        for (var e = 0; e < t.childNodes.length; e += 1) {
                            if (n = Ce(t.childNodes[e])) return n
                        }
                        if (t.body)
                            for (e = t.body.childNodes.length - 1; e >= 0; e -= 1) {
                                var n, r = t.body.childNodes[e];
                                if (n = Ce(r)) return n;
                                if (!ke(r)) break
                            }
                    }(t);
                    if (!e) return;
                    return Se(M(e, "trace-id"), M(e, "trace-time"))
                }(t);
                if (e && !(e.traceTime <= Z() - 12e4)) return e.traceId
            }

            function Se(t, e) {
                var n = e && Number(e);
                if (t && n) return {
                    traceId: t,
                    traceTime: n
                }
            }

            function Ce(t) {
                if (t && function(t) {
                        return "#comment" === t.nodeName
                    }(t)) {
                    var e = /^\s*DATADOG;(.*?)\s*$/.exec(t.data);
                    if (e) return e[1]
                }
            }

            function ke(t) {
                return "#text" === t.nodeName
            }

            function Ee() {
                return void 0 !== window.performance && "getEntries" in performance
            }

            function xe(t) {
                return window.PerformanceObserver && void 0 !== PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(t)
            }

            function Ie(t, e) {
                var n;
                if (n = function(n) {
                        Ae(t, e, [n])
                    }, j("interactive", (function() {
                        var t, e = {
                            entryType: "resource",
                            initiatorType: se,
                            traceId: Te(document)
                        };
                        if (xe("navigation") && performance.getEntriesByType("navigation").length > 0) t = h(performance.getEntriesByType("navigation")[0].toJSON(), e);
                        else {
                            var r = _e();
                            t = h(r, {
                                decodedBodySize: 0,
                                duration: r.responseEnd,
                                name: window.location.href,
                                startTime: 0
                            }, e)
                        }
                        n(t)
                    })), Ee()) {
                    var r = performance.getEntries();
                    setTimeout(f((function() {
                        return Ae(t, e, r)
                    })))
                }
                if (window.PerformanceObserver) {
                    var i = f((function(n) {
                            return Ae(t, e, n.getEntries())
                        })),
                        o = ["resource", "navigation", "longtask", "paint"],
                        a = ["largest-contentful-paint", "first-input", "layout-shift"];
                    try {
                        a.forEach((function(t) {
                            new PerformanceObserver(i).observe({
                                type: t,
                                buffered: !0
                            })
                        }))
                    } catch (u) {
                        o.push.apply(o, a)
                    }
                    new PerformanceObserver(i).observe({
                        entryTypes: o
                    }), Ee() && "addEventListener" in performance && performance.addEventListener("resourcetimingbufferfull", (function() {
                        performance.clearResourceTimings()
                    }))
                }
                xe("navigation") || function(t) {
                    function e() {
                        t(h(_e(), {
                            entryType: "navigation"
                        }))
                    }
                    j("complete", (function() {
                        setTimeout(f(e))
                    }))
                }((function(n) {
                    Ae(t, e, [n])
                })), xe("first-input") || function(t) {
                    var e = Z(),
                        n = !1,
                        r = U(window, ["click", "mousedown", "keydown", "touchstart", "pointerdown"], (function(t) {
                            if (t.cancelable) {
                                var e = {
                                    entryType: "first-input",
                                    processingStart: tt(),
                                    startTime: t.timeStamp
                                };
                                "pointerdown" === t.type ? i(e) : o(e)
                            }
                        }), {
                            passive: !0,
                            capture: !0
                        }).stop;

                    function i(t) {
                        U(window, ["pointerup", "pointercancel"], (function(e) {
                            "pointerup" === e.type && o(t)
                        }), {
                            once: !0
                        })
                    }

                    function o(i) {
                        if (!n) {
                            n = !0, r();
                            var o = i.processingStart - i.startTime;
                            o >= 0 && o < Z() - e && t(i)
                        }
                    }
                }((function(n) {
                    Ae(t, e, [n])
                }))
            }

            function _e() {
                var t = {},
                    e = performance.timing;
                for (var n in e)
                    if (_(e[n])) {
                        var r = n,
                            i = e[r];
                        t[r] = 0 === i ? 0 : it(i)
                    }
                return t
            }

            function Ae(t, e, n) {
                var r = n.filter((function(t) {
                    return "resource" === t.entryType || "navigation" === t.entryType || "paint" === t.entryType || "longtask" === t.entryType || "largest-contentful-paint" === t.entryType || "first-input" === t.entryType || "layout-shift" === t.entryType
                })).filter((function(t) {
                    return ! function(t) {
                        return "navigation" === t.entryType && t.loadEventEnd <= 0
                    }(t) && ! function(t, e) {
                        return "resource" === e.entryType && !ye(t, e.name)
                    }(e, t)
                }));
                r.length && t.notify(0, r)
            }

            function Ne(t, e, n) {
                var r = 0,
                    i = !1;
                return {
                    isLimitReached: function() {
                        if (0 === r && setTimeout((function() {
                                r = 0
                            }), v), (r += 1) <= e || i) return i = !1, !1;
                        if (r === e + 1) {
                            i = !0;
                            try {
                                n({
                                    message: "Reached max number of ".concat(t, "s by minute: ").concat(e),
                                    source: xt,
                                    startClocks: et()
                                })
                            } finally {
                                i = !1
                            }
                        }
                        return !0
                    }
                }
            }

            function Oe(t, e) {
                for (var n = t, r = 0, i = e.split("."); r < i.length; r++) {
                    var o = i[r];
                    if (!Re(n, o)) return;
                    n = n[o]
                }
                return n
            }

            function Le(t, e, n) {
                for (var r = t, i = e.split("."), o = 0; o < i.length; o += 1) {
                    var a = i[o];
                    if (!Re(r, a)) return;
                    o !== i.length - 1 ? r = r[a] : r[a] = n
                }
            }

            function Re(t, e) {
                return "object" === typeof t && null !== t && Object.prototype.hasOwnProperty.call(t, e)
            }

            function Me() {
                var t = function() {
                        var t = window._DATADOG_SYNTHETICS_PUBLIC_ID || st("datadog-synthetics-public-id");
                        return "string" === typeof t ? t : void 0
                    }(),
                    e = function() {
                        var t = window._DATADOG_SYNTHETICS_RESULT_ID || st("datadog-synthetics-result-id");
                        return "string" === typeof t ? t : void 0
                    }();
                if (t && e) return {
                    test_id: t,
                    result_id: e,
                    injected: ft()
                }
            }

            function Pe() {
                return be || (be = function() {
                    var t = new Jt((function() {
                        var e = m(f((function() {
                            t.notify(De())
                        })), 200).throttled;
                        return D(window, "resize", e, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }));
                    return t
                }()), be
            }

            function De() {
                var t = window.visualViewport;
                return t ? {
                    width: Number(t.width * t.scale),
                    height: Number(t.height * t.scale)
                } : {
                    width: Number(window.innerWidth || 0),
                    height: Number(window.innerHeight || 0)
                }
            }

            function Ue() {
                if (Pt("clickmap")) return we || (we = De(), Pe().subscribe((function(t) {
                    we = t
                })).unsubscribe), {
                    viewport: we
                }
            }
            var Be = ["view.url", "view.referrer", "action.target.name", "error.message", "error.stack", "error.resource.url", "resource.url"],
                je = Be.concat(["context"]);

            function Ve(t, e, n, r, o, a, u) {
                var s, c = function(t) {
                        e.notify(12, {
                            error: t
                        })
                    },
                    f = ((s = {}).error = Ne("error", t.eventRateLimiterThreshold, c), s.action = Ne("action", t.eventRateLimiterThreshold, c), s),
                    d = Me(),
                    l = function() {
                        var t, e = null === (t = window.Cypress) || void 0 === t ? void 0 : t.env("traceId");
                        if ("string" === typeof e) return {
                            test_execution_id: e
                        }
                    }();
                e.subscribe(10, (function(s) {
                    var c, p = s.startTime,
                        v = s.rawRumEvent,
                        m = s.domainContext,
                        h = s.savedCommonContext,
                        g = s.customerContext,
                        y = r.findView(p),
                        b = o.findUrl(p),
                        w = n.findTrackedSession("view" !== v.type ? p : void 0);
                    if (w && y && b) {
                        var T = h || u(),
                            S = a.findActionId(p),
                            C = H({
                                _dd: {
                                    format_version: 2,
                                    drift: Math.round(Z() - (ot() + performance.now())),
                                    session: {
                                        plan: w.hasPremiumPlan ? 2 : 1
                                    },
                                    browser_sdk_version: lt() ? "4.17.2" : void 0
                                },
                                application: {
                                    id: t.applicationId
                                },
                                date: Q(),
                                service: y.service || t.service,
                                version: y.version || t.version,
                                source: "browser",
                                session: {
                                    id: w.id,
                                    type: d ? "synthetics" : l ? "ci_test" : "user"
                                },
                                view: {
                                    id: y.id,
                                    name: y.name,
                                    url: b.url,
                                    referrer: b.referrer
                                },
                                action: (c = v, -1 !== ["error", "resource", "long_task"].indexOf(c.type) && S ? {
                                    id: S
                                } : void 0),
                                synthetics: d,
                                ci_test: l,
                                display: Ue()
                            }, v);
                        C.context = H(T.context, g), "has_replay" in C.session || (C.session.has_replay = T.hasReplay), O(T.user) || (C.usr = T.user),
                            function(t, e, n, r) {
                                var o;
                                if (e) {
                                    var a = function(t, e, n) {
                                        var r = F(t),
                                            i = n(r);
                                        return e.forEach((function(e) {
                                            var n = Oe(t, e),
                                                i = Oe(r, e),
                                                o = V(n),
                                                a = V(i);
                                            a === o ? Le(t, e, i) : "object" !== o || "undefined" !== a && "null" !== a || Le(t, e, {})
                                        })), i
                                    }(t, "view" === t.type ? Be : je, (function(t) {
                                        return e(t, n)
                                    }));
                                    if (!1 === a && "view" !== t.type) return !1;
                                    !1 === a && i.warn("Can't dismiss view events using beforeSend!")
                                }
                                return !(null === (o = r[t.type]) || void 0 === o ? void 0 : o.isLimitReached())
                            }(C, t.beforeSend, m, f) && (O(C.context) && delete C.context, e.notify(11, C))
                    }
                }))
            }
            var qe = [];

            function Fe() {
                document.hasFocus() && He();
                var t, e, n = (t = He, D(window, "focus", (function(e) {
                        e.isTrusted && t()
                    }))).stop,
                    r = (e = ze, D(window, "blur", (function(t) {
                        t.isTrusted && e()
                    }))).stop;
                return {
                    isInForegroundAt: Ge,
                    selectInForegroundPeriodsFor: We,
                    stop: function() {
                        qe = [], n(), r()
                    }
                }
            }

            function He() {
                if (!(qe.length > 2500)) {
                    var t = qe[qe.length - 1],
                        e = tt();
                    void 0 !== t && void 0 === t.end || qe.push({
                        start: e
                    })
                }
            }

            function ze() {
                if (0 !== qe.length) {
                    var t = qe[qe.length - 1],
                        e = tt();
                    void 0 === t.end && (t.end = e)
                }
            }

            function Ge(t) {
                for (var e = qe.length - 1; e >= 0; e--) {
                    var n = qe[e];
                    if (void 0 !== n.end && t > n.end) break;
                    if (t > n.start && (void 0 === n.end || t < n.end)) return !0
                }
                return !1
            }

            function We(t, e) {
                for (var n = t + e, r = [], i = Math.max(0, qe.length - 500), o = qe.length - 1; o >= i; o--) {
                    var a = qe[o];
                    if (void 0 !== a.end && t > a.end) break;
                    if (!(n < a.start)) {
                        var u = t > a.start ? t : a.start,
                            s = rt(t, u),
                            c = rt(u, void 0 === a.end || n < a.end ? n : a.end);
                        r.unshift({
                            start: $(s),
                            duration: $(c)
                        })
                    }
                }
                return r
            }
            var Xe, Ye = function() {
                    function t() {
                        this.callbacks = {}
                    }
                    return t.prototype.notify = function(t, e) {
                        var n = this.callbacks[t];
                        n && n.forEach((function(t) {
                            return t(e)
                        }))
                    }, t.prototype.subscribe = function(t, e) {
                        var n = this;
                        return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), {
                            unsubscribe: function() {
                                n.callbacks[t] = n.callbacks[t].filter((function(t) {
                                    return e !== t
                                }))
                            }
                        }
                    }, t
                }(),
                Ke = 144e5,
                Je = 9e5,
                $e = 1 / 0,
                Ze = function() {
                    function t(t) {
                        var e = this;
                        this.expireDelay = t, this.entries = [], this.clearOldContextsInterval = setInterval((function() {
                            return e.clearOldContexts()
                        }), 6e4)
                    }
                    return t.prototype.add = function(t, e) {
                        var n = this,
                            r = {
                                context: t,
                                startTime: e,
                                endTime: $e,
                                remove: function() {
                                    var t = n.entries.indexOf(r);
                                    t >= 0 && n.entries.splice(t, 1)
                                },
                                close: function(t) {
                                    r.endTime = t
                                }
                            };
                        return this.entries.unshift(r), r
                    }, t.prototype.find = function(t) {
                        void 0 === t && (t = $e);
                        for (var e = 0, n = this.entries; e < n.length; e++) {
                            var r = n[e];
                            if (r.startTime <= t) {
                                if (t <= r.endTime) return r.context;
                                break
                            }
                        }
                    }, t.prototype.closeActive = function(t) {
                        var e = this.entries[0];
                        e && e.endTime === $e && e.close(t)
                    }, t.prototype.findAll = function(t) {
                        return void 0 === t && (t = $e), this.entries.filter((function(e) {
                            return e.startTime <= t && t <= e.endTime
                        })).map((function(t) {
                            return t.context
                        }))
                    }, t.prototype.reset = function() {
                        this.entries = []
                    }, t.prototype.stop = function() {
                        clearInterval(this.clearOldContextsInterval)
                    }, t.prototype.clearOldContexts = function() {
                        for (var t = tt() - this.expireDelay; this.entries.length > 0 && this.entries[this.entries.length - 1].endTime < t;) this.entries.pop()
                    }, t
                }();

            function Qe(t, e, n) {
                var r = t[e],
                    i = n(r),
                    o = function() {
                        return i.apply(this, arguments)
                    };
                return t[e] = o, {
                    stop: function() {
                        t[e] === o ? t[e] = r : i = r
                    }
                }
            }

            function tn(t, e, n) {
                var r = n.before,
                    i = n.after;
                return Qe(t, e, (function(t) {
                    return function() {
                        var e, n = arguments;
                        return r && d(r, this, n), "function" === typeof t && (e = t.apply(this, n)), i && d(i, this, n), e
                    }
                }))
            }

            function en(t, e, n) {
                var r = Object.getOwnPropertyDescriptor(t, e);
                if (!r || !r.set || !r.configurable) return {
                    stop: T
                };
                var i = function(t, e) {
                        setTimeout(f((function() {
                            n(t, e)
                        })), 0)
                    },
                    o = function(t) {
                        r.set.call(this, t), i(this, t)
                    };
                return Object.defineProperty(t, e, {
                    set: o
                }), {
                    stop: function() {
                        var n;
                        (null === (n = Object.getOwnPropertyDescriptor(t, e)) || void 0 === n ? void 0 : n.set) === o ? Object.defineProperty(t, e, r) : i = T
                    }
                }
            }
            var nn, rn = new WeakMap;

            function on() {
                return Xe || (Xe = function() {
                    var t = new Jt((function() {
                        var e = tn(XMLHttpRequest.prototype, "open", {
                                before: an
                            }).stop,
                            n = tn(XMLHttpRequest.prototype, "send", {
                                before: function() {
                                    un.call(this, t)
                                }
                            }).stop,
                            r = tn(XMLHttpRequest.prototype, "abort", {
                                before: sn
                            }).stop;
                        return function() {
                            e(), n(), r()
                        }
                    }));
                    return t
                }()), Xe
            }

            function an(t, e) {
                rn.set(this, {
                    state: "open",
                    method: t,
                    url: Ut(String(e))
                })
            }

            function un(t) {
                var e = this,
                    n = rn.get(this);
                if (n) {
                    var r = n;
                    r.state = "start", r.startTime = tt(), r.startClocks = et(), r.isAborted = !1, r.xhr = this;
                    var i = !1,
                        o = tn(this, "onreadystatechange", {
                            before: function() {
                                this.readyState === XMLHttpRequest.DONE && a()
                            }
                        }).stop,
                        a = f((function() {
                            if (e.removeEventListener("loadend", a), o(), !i) {
                                i = !0;
                                var u = n;
                                u.state = "complete", u.duration = rt(r.startClocks.timeStamp, Q()), u.status = e.status, t.notify(g(u))
                            }
                        }));
                    this.addEventListener("loadend", a), t.notify(r)
                }
            }

            function sn() {
                var t = rn.get(this);
                t && (t.isAborted = !0)
            }

            function cn() {
                return nn || (nn = function() {
                    var t = new Jt((function() {
                        if (window.fetch) return Qe(window, "fetch", (function(e) {
                            return function(n, r) {
                                var i, o = d(fn, null, [t, n, r]);
                                return o ? (i = e.call(this, o.input, o.init), d(dn, null, [t, i, o])) : i = e.call(this, n, r), i
                            }
                        })).stop
                    }));
                    return t
                }()), nn
            }

            function fn(t, e, n) {
                var r = n && n.method || "object" === typeof e && e.method || "GET",
                    i = Ut("object" === typeof e && e.url || e),
                    o = {
                        state: "start",
                        init: n,
                        input: e,
                        method: r,
                        startClocks: et(),
                        url: i
                    };
                return t.notify(o), o
            }

            function dn(t, e, n) {
                var r = function(e) {
                    var r = n;
                    r.state = "complete", r.duration = rt(r.startClocks.timeStamp, Q()), "stack" in e || e instanceof Error ? (r.status = 0, r.isAborted = e instanceof DOMException && e.code === DOMException.ABORT_ERR, r.error = e, t.notify(r)) : "status" in e && (r.response = e, r.responseType = e.type, r.status = e.status, r.isAborted = !1, t.notify(r))
                };
                e.then(f(r), f(r))
            }

            function ln(t) {
                0 !== t.status || t.isAborted || (t.traceId = void 0, t.spanId = void 0, t.traceSampled = void 0)
            }

            function pn(t, e, n, r) {
                var i, o, a;
                void 0 !== vn() && function(t, e) {
                    return z(t.allowedTracingOrigins, Bt(e))
                }(t, e.url) && n.findTrackedSession() && (e.traceId = new mn, e.spanId = new mn, e.traceSampled = b(t.tracingSampleRate), r((i = e.traceId, o = e.spanId, a = e.traceSampled, {
                    "x-datadog-origin": "rum",
                    "x-datadog-parent-id": o.toDecimalString(),
                    "x-datadog-sampling-priority": a ? "1" : "0",
                    "x-datadog-trace-id": i.toDecimalString()
                })))
            }

            function vn() {
                return window.crypto || window.msCrypto
            }
            var mn = function() {
                    function t() {
                        this.buffer = new Uint8Array(8), vn().getRandomValues(this.buffer), this.buffer[0] = 127 & this.buffer[0]
                    }
                    return t.prototype.toString = function(t) {
                        var e = this.readInt32(0),
                            n = this.readInt32(4),
                            r = "";
                        do {
                            var i = e % t * 4294967296 + n;
                            e = Math.floor(e / t), n = Math.floor(i / t), r = (i % t).toString(t) + r
                        } while (e || n);
                        return r
                    }, t.prototype.toDecimalString = function() {
                        return this.toString(10)
                    }, t.prototype.readInt32 = function(t) {
                        return 16777216 * this.buffer[t] + (this.buffer[t + 1] << 16) + (this.buffer[t + 2] << 8) + this.buffer[t + 3]
                    }, t
                }(),
                hn = 1;

            function gn(t, e, n) {
                var r = function(t, e) {
                    return {
                        clearTracingIfNeeded: ln,
                        traceFetch: function(n) {
                            return pn(t, n, e, (function(t) {
                                var e;
                                if (n.input instanceof Request && !(null === (e = n.init) || void 0 === e ? void 0 : e.headers)) n.input = new Request(n.input), Object.keys(t).forEach((function(e) {
                                    n.input.headers.append(e, t[e])
                                }));
                                else {
                                    n.init = g(n.init);
                                    var r = [];
                                    n.init.headers instanceof Headers ? n.init.headers.forEach((function(t, e) {
                                        r.push([e, t])
                                    })) : Array.isArray(n.init.headers) ? n.init.headers.forEach((function(t) {
                                        r.push(t)
                                    })) : n.init.headers && Object.keys(n.init.headers).forEach((function(t) {
                                        r.push([t, n.init.headers[t]])
                                    })), n.init.headers = r.concat(N(t))
                                }
                            }))
                        },
                        traceXhr: function(n, r) {
                            return pn(t, n, e, (function(t) {
                                Object.keys(t).forEach((function(e) {
                                    r.setRequestHeader(e, t[e])
                                }))
                            }))
                        }
                    }
                }(e, n);
                ! function(t, e, n) {
                    var r = on().subscribe((function(r) {
                        var i = r;
                        if (ye(e, i.url)) switch (i.state) {
                            case "start":
                                n.traceXhr(i, i.xhr), i.requestIndex = yn(), t.notify(5, {
                                    requestIndex: i.requestIndex,
                                    url: i.url
                                });
                                break;
                            case "complete":
                                n.clearTracingIfNeeded(i), t.notify(6, {
                                    duration: i.duration,
                                    method: i.method,
                                    requestIndex: i.requestIndex,
                                    spanId: i.spanId,
                                    startClocks: i.startClocks,
                                    status: i.status,
                                    traceId: i.traceId,
                                    traceSampled: i.traceSampled,
                                    type: "xhr",
                                    url: i.url,
                                    xhr: i.xhr
                                })
                        }
                    }))
                }(t, e, r),
                function(t, e, n) {
                    var r = cn().subscribe((function(r) {
                        var i = r;
                        if (ye(e, i.url)) switch (i.state) {
                            case "start":
                                n.traceFetch(i), i.requestIndex = yn(), t.notify(5, {
                                    requestIndex: i.requestIndex,
                                    url: i.url
                                });
                                break;
                            case "complete":
                                n.clearTracingIfNeeded(i), t.notify(6, {
                                    duration: i.duration,
                                    method: i.method,
                                    requestIndex: i.requestIndex,
                                    responseType: i.responseType,
                                    spanId: i.spanId,
                                    startClocks: i.startClocks,
                                    status: i.status,
                                    traceId: i.traceId,
                                    traceSampled: i.traceSampled,
                                    type: "fetch",
                                    url: i.url,
                                    response: i.response,
                                    init: i.init,
                                    input: i.input
                                })
                        }
                    }))
                }(t, e, r)
            }

            function yn() {
                var t = hn;
                return hn += 1, t
            }

            function bn(t, e) {
                void 0 === e && (e = T);
                var n = {
                        errorCount: 0,
                        longTaskCount: 0,
                        resourceCount: 0,
                        actionCount: 0,
                        frustrationCount: 0
                    },
                    r = t.subscribe(11, (function(t) {
                        switch (t.type) {
                            case "error":
                                n.errorCount += 1, e(n);
                                break;
                            case "action":
                                n.actionCount += 1, t.action.frustration && (n.frustrationCount += t.action.frustration.type.length), e(n);
                                break;
                            case "long_task":
                                n.longTaskCount += 1, e(n);
                                break;
                            case "resource":
                                n.resourceCount += 1, e(n)
                        }
                    }));
                return {
                    stop: function() {
                        r.unsubscribe()
                    },
                    eventCounts: n
                }
            }

            function wn(t, e, n, r, i) {
                return function(t, e, n) {
                    var r, i = !1,
                        o = setTimeout(f((function() {
                            return c({
                                hadActivity: !1
                            })
                        })), 100),
                        a = n && setTimeout(f((function() {
                            return c({
                                hadActivity: !0,
                                end: Q()
                            })
                        })), n),
                        u = t.subscribe((function(t) {
                            var e = t.isBusy;
                            clearTimeout(o), clearTimeout(r);
                            var n = Q();
                            e || (r = setTimeout(f((function() {
                                return c({
                                    hadActivity: !0,
                                    end: n
                                })
                            })), 100))
                        })),
                        s = function() {
                            i = !0, clearTimeout(o), clearTimeout(r), clearTimeout(a), u.unsubscribe()
                        };

                    function c(t) {
                        i || (s(), e(t))
                    }
                    return {
                        stop: s
                    }
                }(function(t, e, n) {
                    var r = new Jt((function() {
                        var i, o = [],
                            a = 0;
                        o.push(e.subscribe(c), t.subscribe(0, (function(t) {
                            t.some((function(t) {
                                return "resource" === t.entryType && !Tn(n, t.name)
                            })) && c()
                        })), t.subscribe(5, (function(t) {
                            Tn(n, t.url) || (void 0 === i && (i = t.requestIndex), a += 1, c())
                        })), t.subscribe(6, (function(t) {
                            Tn(n, t.url) || void 0 === i || t.requestIndex < i || (a -= 1, c())
                        })));
                        var u, s = (u = c, tn(window, "open", {
                            before: u
                        })).stop;
                        return function() {
                            s(), o.forEach((function(t) {
                                return t.unsubscribe()
                            }))
                        };

                        function c() {
                            r.notify({
                                isBusy: a > 0
                            })
                        }
                    }));
                    return r
                }(t, e, n), r, i)
            }

            function Tn(t, e) {
                return z(t.excludedActivityUrls, e)
            }
            var Sn = p;

            function Cn(t, e) {
                var n, r = [],
                    i = 0;

                function o(t) {
                    t.stopObservable.subscribe(a), r.push(t), clearTimeout(n), n = setTimeout(f(u), 1e3)
                }

                function a() {
                    1 === i && r.every((function(t) {
                        return t.isStopped()
                    })) && (i = 2, e(r))
                }

                function u() {
                    clearTimeout(n), 0 === i && (i = 1, a())
                }
                return o(t), {
                    tryAppend: function(t) {
                        return 0 === i && (r.length > 0 && ! function(t, e) {
                            return t.target === e.target && (n = t, r = e, Math.sqrt(Math.pow(n.clientX - r.clientX, 2) + Math.pow(n.clientY - r.clientY, 2)) <= 100) && t.timeStamp - e.timeStamp <= Sn;
                            var n, r
                        }(r[r.length - 1].event, t.event) ? (u(), !1) : (o(t), !0))
                    },
                    stop: function() {
                        u()
                    }
                }
            }
            var kn = "data-dd-action-name";

            function En(t, e) {
                return xn(t, kn) || e && xn(t, e) || On(t, e, An) || On(t, e, Nn) || ""
            }

            function xn(t, e) {
                var n;
                if (function() {
                        void 0 === _n && (_n = "closest" in HTMLElement.prototype);
                        return _n
                    }()) n = t.closest("[".concat(e, "]"));
                else
                    for (var r = t; r;) {
                        if (r.hasAttribute(e)) {
                            n = r;
                            break
                        }
                        r = r.parentElement
                    }
                if (n) return Rn(Ln(n.getAttribute(e).trim()))
            }
            var In, _n, An = [function(t, e) {
                    if (function() {
                            void 0 === In && (In = "labels" in HTMLInputElement.prototype);
                            return In
                        }()) {
                        if ("labels" in t && t.labels && t.labels.length > 0) return Mn(t.labels[0], e)
                    } else if (t.id) {
                        var n = t.ownerDocument && x(t.ownerDocument.querySelectorAll("label"), (function(e) {
                            return e.htmlFor === t.id
                        }));
                        return n && Mn(n, e)
                    }
                }, function(t) {
                    if ("INPUT" === t.nodeName) {
                        var e = t,
                            n = e.getAttribute("type");
                        if ("button" === n || "submit" === n || "reset" === n) return e.value
                    }
                }, function(t, e) {
                    if ("BUTTON" === t.nodeName || "LABEL" === t.nodeName || "button" === t.getAttribute("role")) return Mn(t, e)
                }, function(t) {
                    return t.getAttribute("aria-label")
                }, function(t, e) {
                    var n = t.getAttribute("aria-labelledby");
                    if (n) return n.split(/\s+/).map((function(e) {
                        return function(t, e) {
                            return t.ownerDocument ? t.ownerDocument.getElementById(e) : null
                        }(t, e)
                    })).filter((function(t) {
                        return Boolean(t)
                    })).map((function(t) {
                        return Mn(t, e)
                    })).join(" ")
                }, function(t) {
                    return t.getAttribute("alt")
                }, function(t) {
                    return t.getAttribute("name")
                }, function(t) {
                    return t.getAttribute("title")
                }, function(t) {
                    return t.getAttribute("placeholder")
                }, function(t, e) {
                    if ("options" in t && t.options.length > 0) return Mn(t.options[0], e)
                }],
                Nn = [function(t, e) {
                    return Mn(t, e)
                }];

            function On(t, e, n) {
                for (var r = t, i = 0; i <= 10 && r && "BODY" !== r.nodeName && "HTML" !== r.nodeName && "HEAD" !== r.nodeName;) {
                    for (var o = 0, a = n; o < a.length; o++) {
                        var u = (0, a[o])(r, e);
                        if ("string" === typeof u) {
                            var s = u.trim();
                            if (s) return Rn(Ln(s))
                        }
                    }
                    if ("FORM" === r.nodeName) break;
                    r = r.parentElement, i += 1
                }
            }

            function Ln(t) {
                return t.replace(/\s+/g, " ")
            }

            function Rn(t) {
                return t.length > 100 ? "".concat(P(t, 100), " [...]") : t
            }

            function Mn(t, e) {
                if (!t.isContentEditable) {
                    if ("innerText" in t) {
                        var n = t.innerText,
                            r = function(e) {
                                for (var r = t.querySelectorAll(e), i = 0; i < r.length; i += 1) {
                                    var o = r[i];
                                    if ("innerText" in o) {
                                        var a = o.innerText;
                                        a && a.trim().length > 0 && (n = n.replace(a, ""))
                                    }
                                }
                            };
                        return Boolean(document.documentMode) && r("script, style"), r("[".concat(kn, "]")), e && r("[".concat(e, "]")), n
                    }
                    return t.textContent
                }
            }
            var Pn, Dn = ["data-dd-action-name", "data-testid", "data-test", "data-qa", "data-cy", "data-test-id", "data-qa-id", "data-testing", "data-component", "data-element", "data-source-file"];

            function Un(t, e) {
                var n = function() {
                    Pn || (Pn = Dn.map((function(t) {
                        return function(e) {
                            return qn(t, e)
                        }
                    })));
                    return Pn
                }();
                return e && (n = [function(t) {
                    return qn(e, t)
                }].concat(n)), {
                    selector: Bn(t, [jn], [Vn]),
                    selector_with_stable_attributes: Bn(t, n.concat(jn), n.concat(Vn)),
                    selector_without_classes: Bn(t, n.concat(jn), n)
                }
            }

            function Bn(t, e, n) {
                for (var r = [], i = t; i && "HTML" !== i.nodeName;) {
                    var o = Hn(i, e, zn);
                    if (o) {
                        r.unshift(o);
                        break
                    }
                    var a = Hn(i, n, Gn);
                    a ? r.unshift(a) : r.unshift(Fn(i)), i = i.parentElement
                }
                return r.join(">")
            }

            function jn(t) {
                if (t.id) return "#".concat(G(t.id))
            }

            function Vn(t) {
                if (t.classList.length > 0) {
                    var e = E(t.classList).sort();
                    return "".concat(t.tagName).concat(e.map((function(t) {
                        return ".".concat(G(t))
                    })).join(""))
                }
            }

            function qn(t, e) {
                if (e.hasAttribute(t)) return "".concat(e.tagName, "[").concat(t, '="').concat(G(e.getAttribute(t)), '"]')
            }

            function Fn(t) {
                for (var e, n = t.parentElement.firstElementChild, r = 0; n && !(n.tagName === t.tagName && (r += 1, n === t && (e = r), void 0 !== e && r > 1));) n = n.nextElementSibling;
                return 1 === r ? t.tagName : "".concat(t.tagName, ":nth-of-type(").concat(e, ")")
            }

            function Hn(t, e, n) {
                for (var r = 0, i = e; r < i.length; r++) {
                    var o = (0, i[r])(t);
                    if (o && n(t, o)) return o
                }
            }

            function zn(t, e) {
                return 1 === t.ownerDocument.body.querySelectorAll(e).length
            }

            function Gn(t, e) {
                for (var n = 0; n < t.parentElement.children.length; n++) {
                    var r = t.parentElement.children[n];
                    if (r !== t && B(r, e)) return !1
                }
                return !0
            }

            function Wn() {
                var t = window.getSelection();
                return !t || t.isCollapsed
            }

            function Xn(t, e) {
                if (function(t) {
                        if (t.some((function(t) {
                                return t.getUserActivity().selection
                            }))) return !1;
                        for (var e = 0; e < t.length - 2; e += 1)
                            if (t[e + 3 - 1].event.timeStamp - t[e].event.timeStamp <= p) return !0;
                        return !1
                    }(t)) return e.addFrustration("rage_click"), t.some(Yn) && e.addFrustration("dead_click"), e.hasError && e.addFrustration("error_click"), {
                    isRage: !0
                };
                var n = t.some((function(t) {
                    return t.getUserActivity().selection
                }));
                return t.forEach((function(t) {
                    t.hasError && t.addFrustration("error_click"), Yn(t) && !n && t.addFrustration("dead_click")
                })), {
                    isRage: !1
                }
            }

            function Yn(t) {
                return !t.hasPageActivity && !t.getUserActivity().input && !B(t.event.target, 'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,canvas,a[href],a[href] *')
            }

            function Kn(t, e, n) {
                var r, i = new Ze(3e5),
                    o = new Jt,
                    a = n.trackFrustrations;
                t.subscribe(8, (function() {
                    i.reset()
                })), t.subscribe(9, s), t.subscribe(4, s);
                var u = function(t) {
                    var e, n = t.onClick,
                        r = !1,
                        i = !1,
                        o = [D(window, "mousedown", (function() {
                            r = !1, e = Wn()
                        }), {
                            capture: !0
                        }), D(window, "selectionchange", (function() {
                            e && Wn() || (r = !0)
                        }), {
                            capture: !0
                        }), D(window, "click", (function(t) {
                            if (t.target instanceof Element) {
                                var e = {
                                    selection: r,
                                    input: i
                                };
                                i || setTimeout(f((function() {
                                    e.input = i
                                }))), n({
                                    event: t,
                                    getUserActivity: function() {
                                        return e
                                    }
                                })
                            }
                        }), {
                            capture: !0
                        }), D(window, "input", (function() {
                            i = !0
                        }), {
                            capture: !0
                        })];
                    return {
                        stop: function() {
                            o.forEach((function(t) {
                                return t.stop()
                            }))
                        }
                    }
                }({
                    onClick: function(u) {
                        var s = u.event,
                            c = u.getUserActivity;
                        if (!a && i.find()) return;
                        var f = function(t, e) {
                            var n, r;
                            if (Pt("clickmap")) {
                                var i = t.target.getBoundingClientRect();
                                n = h({
                                    width: Math.round(i.width),
                                    height: Math.round(i.height)
                                }, Un(t.target, e)), r = {
                                    x: Math.round(t.clientX - i.left),
                                    y: Math.round(t.clientY - i.top)
                                }
                            }
                            return {
                                type: "click",
                                target: n,
                                position: r,
                                name: En(t.target, e),
                                event: t,
                                startClocks: et()
                            }
                        }(s, n.actionNameAttribute);
                        if (!a && !f.name) return;
                        var d = Jn(t, i, c, f);
                        if (a && (!r || !r.tryAppend(d))) {
                            var l = d.clone();
                            r = Cn(d, (function(t) {
                                ! function(t, e) {
                                    Xn(t, e).isRage ? (t.forEach((function(t) {
                                        return t.discard()
                                    })), e.stop(Q()), e.validate(t.map((function(t) {
                                        return t.event
                                    })))) : (e.discard(), t.forEach((function(t) {
                                        return t.validate()
                                    })))
                                }(t, l)
                            }))
                        }
                        var p = wn(t, e, n, (function(t) {
                                t.hadActivity && t.end < f.startClocks.timeStamp ? d.discard() : (d.stop(t.hadActivity ? t.end : void 0), a || (t.hadActivity ? d.validate() : d.discard()))
                            }), 1e4).stop,
                            v = t.subscribe(4, (function(t) {
                                var e = t.endClocks;
                                d.stop(e.timeStamp)
                            })),
                            m = o.subscribe((function() {
                                d.stop()
                            }));
                        d.stopObservable.subscribe((function() {
                            v.unsubscribe(), p(), m.unsubscribe()
                        }))
                    }
                }).stop;
                return {
                    stop: function() {
                        s(), o.notify(), u()
                    },
                    actionContexts: {
                        findActionId: function(t) {
                            return a ? i.findAll(t) : i.find(t)
                        }
                    }
                };

                function s() {
                    r && r.stop()
                }
            }

            function Jn(t, e, n, r) {
                var i, o = y(),
                    a = e.add(o, r.startClocks.relative),
                    u = bn(t),
                    s = 0,
                    c = [],
                    f = new Jt;

                function d(t) {
                    0 === s && (s = 1, (i = t) ? a.close(it(i)) : a.remove(), u.stop(), f.notify())
                }
                return {
                    event: r.event,
                    stop: d,
                    stopObservable: f,
                    get hasError() {
                        return u.eventCounts.errorCount > 0
                    },
                    get hasPageActivity() {
                        return void 0 !== i
                    },
                    getUserActivity: n,
                    addFrustration: function(t) {
                        c.push(t)
                    },
                    isStopped: function() {
                        return 1 === s || 2 === s
                    },
                    clone: function() {
                        return Jn(t, e, n, r)
                    },
                    validate: function(e) {
                        if (d(), 1 === s) {
                            var n = u.eventCounts,
                                a = n.resourceCount,
                                f = n.errorCount,
                                l = n.longTaskCount,
                                p = h({
                                    type: "click",
                                    duration: i && rt(r.startClocks.timeStamp, i),
                                    id: o,
                                    frustrationTypes: c,
                                    counts: {
                                        resourceCount: a,
                                        errorCount: f,
                                        longTaskCount: l
                                    },
                                    events: null !== e && void 0 !== e ? e : [r.event]
                                }, r);
                            t.notify(1, p), s = 2
                        }
                    },
                    discard: function() {
                        d(), s = 2
                    }
                }
            }

            function $n(t, e) {
                var n = Zn(t) ? {
                        action: {
                            id: t.id,
                            loading_time: $(t.duration),
                            frustration: {
                                type: t.frustrationTypes
                            },
                            error: {
                                count: t.counts.errorCount
                            },
                            long_task: {
                                count: t.counts.longTaskCount
                            },
                            resource: {
                                count: t.counts.resourceCount
                            }
                        },
                        _dd: {
                            action: {
                                target: t.target,
                                position: t.position
                            }
                        }
                    } : void 0,
                    r = Zn(t) ? void 0 : t.context,
                    i = H({
                        action: {
                            id: y(),
                            target: {
                                name: t.name
                            },
                            type: t.type
                        },
                        date: t.startClocks.timeStamp,
                        type: "action"
                    }, n),
                    o = e.isInForegroundAt(t.startClocks.relative);
                return void 0 !== o && (i.view = {
                    in_foreground: o
                }), {
                    customerContext: r,
                    rawRumEvent: i,
                    startTime: t.startClocks.relative,
                    domainContext: Zn(t) ? {
                        event: t.event,
                        events: t.events
                    } : {}
                }
            }

            function Zn(t) {
                return "custom" !== t.type
            }
            var Qn = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

            function tr(t) {
                var e = function(t) {
                        return tn(window, "onerror", {
                            before: function(e, n, r, i, o) {
                                var a;
                                if (o) a = vt(o), t(a, o);
                                else {
                                    var u, s = {
                                            url: n,
                                            column: i,
                                            line: r
                                        },
                                        c = e;
                                    if ("[object String]" === {}.toString.call(e)) {
                                        var f = Qn.exec(c);
                                        f && (u = f[1], c = f[2])
                                    }
                                    t(a = {
                                        name: u,
                                        message: "string" === typeof c ? c : void 0,
                                        stack: [s]
                                    }, e)
                                }
                            }
                        })
                    }(t).stop,
                    n = function(t) {
                        return tn(window, "onunhandledrejection", {
                            before: function(e) {
                                var n = e.reason || "Empty reason",
                                    r = vt(n);
                                t(r, n)
                            }
                        })
                    }(t).stop;
                return {
                    stop: function() {
                        e(), n()
                    }
                }
            }
            var er = {};

            function nr(t) {
                var e = t.map((function(t) {
                    return er[t] || (er[t] = function(t) {
                        var e = new Jt((function() {
                            var n = console[t];
                            return console[t] = function() {
                                    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                                    n.apply(console, r);
                                    var o = Mt();
                                    d((function() {
                                        e.notify(rr(r, t, o))
                                    }))
                                },
                                function() {
                                    console[t] = n
                                }
                        }));
                        return e
                    }(t)), er[t]
                }));
                return $t.apply(void 0, e)
            }

            function rr(t, e, n) {
                var i, o = t.map((function(t) {
                    return function(t) {
                        if ("string" === typeof t) return t;
                        if (t instanceof Error) return Rt(vt(t));
                        return S(t, void 0, 2)
                    }(t)
                })).join(" ");
                if (e === r.error) {
                    var a = x(t, (function(t) {
                        return t instanceof Error
                    }));
                    i = a ? Lt(vt(a)) : void 0, o = "console error: ".concat(o)
                }
                return {
                    api: e,
                    message: o,
                    stack: i,
                    handlingStack: n
                }
            }
            var ir, or, ar = "intervention",
                ur = "csp_violation";

            function sr(t) {
                var e = [];
                k(t, ur) && e.push(function() {
                    var t = new Jt((function() {
                        var e = f((function(e) {
                            t.notify(function(t) {
                                var e = ur,
                                    n = "'".concat(t.blockedURI, "' blocked by '").concat(t.effectiveDirective, "' directive");
                                return {
                                    type: ur,
                                    subtype: t.effectiveDirective,
                                    message: "".concat(e, ": ").concat(n),
                                    stack: cr(t.effectiveDirective, "".concat(n, ' of the policy "').concat(P(t.originalPolicy, 100, "..."), '"'), t.sourceFile, t.lineNumber, t.columnNumber)
                                }
                            }(e))
                        }));
                        return D(document, "securitypolicyviolation", e).stop
                    }));
                    return t
                }());
                var n = t.filter((function(t) {
                    return t !== ur
                }));
                return n.length && e.push(function(t) {
                    var e = new Jt((function() {
                        if (window.ReportingObserver) {
                            var n = f((function(t) {
                                    return t.forEach((function(t) {
                                        e.notify(function(t) {
                                            var e = t.type,
                                                n = t.body;
                                            return {
                                                type: e,
                                                subtype: n.id,
                                                message: "".concat(e, ": ").concat(n.message),
                                                stack: cr(n.id, n.message, n.sourceFile, n.lineNumber, n.columnNumber)
                                            }
                                        }(t))
                                    }))
                                })),
                                r = new window.ReportingObserver(n, {
                                    types: t,
                                    buffered: !0
                                });
                            return r.observe(),
                                function() {
                                    r.disconnect()
                                }
                        }
                    }));
                    return e
                }(n)), $t.apply(void 0, e)
            }

            function cr(t, e, n, r, i) {
                return n && Lt({
                    name: t,
                    message: e,
                    stack: [{
                        func: "?",
                        url: n,
                        line: r,
                        column: i
                    }]
                })
            }

            function fr(t, e) {
                var n = new Jt;
                return function(t) {
                        var e = nr([r.error]).subscribe((function(e) {
                            return t.notify({
                                startClocks: et(),
                                message: e.message,
                                stack: e.stack,
                                source: It,
                                handling: "handled",
                                handlingStack: e.handlingStack
                            })
                        }))
                    }(n),
                    function(t) {
                        tr((function(e, n) {
                            var r = Ot(e, n, "Uncaught"),
                                i = r.stack,
                                o = r.message,
                                a = r.type;
                            t.notify({
                                message: o,
                                stack: i,
                                type: a,
                                source: At,
                                startClocks: et(),
                                originalError: n,
                                handling: "unhandled"
                            })
                        }))
                    }(n),
                    function(t) {
                        var e = sr([ur, ar]).subscribe((function(e) {
                            return t.notify({
                                startClocks: et(),
                                message: e.message,
                                stack: e.stack,
                                type: e.subtype,
                                source: Nt,
                                handling: "unhandled"
                            })
                        }))
                    }(n), n.subscribe((function(e) {
                        return t.notify(12, {
                            error: e
                        })
                    })),
                    function(t, e) {
                        return t.subscribe(12, (function(n) {
                            var r = n.error,
                                i = n.customerContext,
                                o = n.savedCommonContext;
                            t.notify(10, h({
                                customerContext: i,
                                savedCommonContext: o
                            }, function(t, e) {
                                var n = {
                                        date: t.startClocks.timeStamp,
                                        error: {
                                            id: y(),
                                            message: t.message,
                                            source: t.source,
                                            stack: t.stack,
                                            handling_stack: t.handlingStack,
                                            type: t.type,
                                            handling: t.handling,
                                            source_type: "browser"
                                        },
                                        type: "error"
                                    },
                                    r = e.isInForegroundAt(t.startClocks.relative);
                                void 0 !== r && (n.view = {
                                    in_foreground: r
                                });
                                return {
                                    rawRumEvent: n,
                                    startTime: t.startClocks.relative,
                                    domainContext: {
                                        error: t.originalError
                                    }
                                }
                            }(r, e)))
                        })), {
                            addError: function(e, n) {
                                var r = e.error,
                                    i = e.handlingStack,
                                    o = e.startClocks,
                                    a = e.context,
                                    u = function(t, e, n) {
                                        var r = t instanceof Error ? vt(t) : void 0;
                                        return h({
                                            startClocks: n,
                                            source: _t,
                                            originalError: t,
                                            handling: "handled"
                                        }, Ot(r, t, "Provided", e))
                                    }(r, i, o);
                                t.notify(12, {
                                    customerContext: a,
                                    savedCommonContext: n,
                                    error: u
                                })
                            }
                        }
                    }(t, e)
            }

            function dr(t) {
                if (performance && "getEntriesByName" in performance) {
                    var e = performance.getEntriesByName(t.url, "resource");
                    if (e.length && "toJSON" in e[0]) {
                        var n, r = e.map((function(t) {
                            return t.toJSON()
                        })).filter(ve).filter((function(e) {
                            return function(t, e, n) {
                                var r = 1;
                                return t.startTime >= e - r && lr(t) <= n + r
                            }(e, t.startClocks.relative, lr({
                                startTime: t.startClocks.relative,
                                duration: t.duration
                            }))
                        }));
                        return 1 === r.length ? r[0] : 2 === r.length && lr((n = r)[0]) <= n[1].startTime ? r[1] : void 0
                    }
                }
            }

            function lr(t) {
                return t.startTime + t.duration
            }

            function pr(t) {
                t.subscribe(6, (function(e) {
                    t.notify(10, function(t) {
                        var e = "xhr" === t.type ? "xhr" : "fetch",
                            n = dr(t),
                            r = n ? K(n.startTime) : t.startClocks,
                            i = n ? mr(n) : void 0,
                            o = function(t) {
                                if (!(t.traceSampled && t.traceId && t.spanId)) return;
                                return {
                                    _dd: {
                                        span_id: t.spanId.toDecimalString(),
                                        trace_id: t.traceId.toDecimalString()
                                    }
                                }
                            }(t),
                            a = H({
                                date: r.timeStamp,
                                resource: {
                                    id: y(),
                                    type: e,
                                    duration: $(t.duration),
                                    method: t.method,
                                    status_code: t.status,
                                    url: t.url
                                },
                                type: "resource"
                            }, o, i);
                        return {
                            startTime: r.relative,
                            rawRumEvent: a,
                            domainContext: {
                                performanceEntry: n && hr(n),
                                xhr: t.xhr,
                                response: t.response,
                                requestInput: t.input,
                                requestInit: t.init,
                                error: t.error
                            }
                        }
                    }(e))
                })), t.subscribe(0, (function(e) {
                    for (var n = 0, r = e; n < r.length; n++) {
                        var i = r[n];
                        "resource" === i.entryType && ("xmlhttprequest" !== (o = i).initiatorType && "fetch" !== o.initiatorType) && t.notify(10, vr(i))
                    }
                    var o
                }))
            }

            function vr(t) {
                var e = fe(t),
                    n = mr(t),
                    r = function(t) {
                        return t.traceId ? {
                            _dd: {
                                trace_id: t.traceId
                            }
                        } : void 0
                    }(t),
                    i = K(t.startTime),
                    o = H({
                        date: i.timeStamp,
                        resource: {
                            id: y(),
                            type: e,
                            url: t.name
                        },
                        type: "resource"
                    }, r, n);
                return {
                    startTime: i.relative,
                    rawRumEvent: o,
                    domainContext: {
                        performanceEntry: hr(t)
                    }
                }
            }

            function mr(t) {
                return {
                    resource: h({
                        duration: le(t),
                        size: ge(t)
                    }, pe(t))
                }
            }

            function hr(t) {
                return "function" === typeof PerformanceEntry && t instanceof PerformanceEntry && t.toJSON(), t
            }

            function gr(t) {
                return void 0 === t && (t = window), ir || ("hidden" === document.visibilityState ? ir = {
                    timeStamp: 0
                } : (ir = {
                    timeStamp: 1 / 0
                }, or = U(t, ["pagehide", "visibilitychange"], (function(t) {
                    "pagehide" !== t.type && "hidden" !== document.visibilityState || (ir.timeStamp = t.timeStamp, or())
                }), {
                    capture: !0
                }).stop)), ir
            }
            var yr = 6e5;

            function br(t, e) {
                var n = {};

                function r(t) {
                    h(n, t), e(n)
                }
                var i = function(t, e) {
                        return {
                            stop: t.subscribe(0, (function(t) {
                                for (var n = 0, r = t; n < r.length; n++) {
                                    var i = r[n];
                                    "navigation" === i.entryType && e({
                                        domComplete: i.domComplete,
                                        domContentLoaded: i.domContentLoadedEventEnd,
                                        domInteractive: i.domInteractive,
                                        loadEvent: i.loadEventEnd
                                    })
                                }
                            })).unsubscribe
                        }
                    }(t, r).stop,
                    o = function(t, e) {
                        var n = gr();
                        return {
                            stop: t.subscribe(0, (function(t) {
                                var r = x(t, (function(t) {
                                    return "paint" === t.entryType && "first-contentful-paint" === t.name && t.startTime < n.timeStamp && t.startTime < yr
                                }));
                                r && e(r.startTime)
                            })).unsubscribe
                        }
                    }(t, (function(t) {
                        return r({
                            firstContentfulPaint: t
                        })
                    })).stop,
                    a = function(t, e, n) {
                        var r = gr(),
                            i = 1 / 0,
                            o = U(e, ["pointerdown", "keydown"], (function(t) {
                                i = t.timeStamp
                            }), {
                                capture: !0,
                                once: !0
                            }).stop,
                            a = t.subscribe(0, (function(t) {
                                var e = function(t, e) {
                                    for (var n = t.length - 1; n >= 0; n -= 1) {
                                        var r = t[n];
                                        if (e(r, n, t)) return r
                                    }
                                }(t, (function(t) {
                                    return "largest-contentful-paint" === t.entryType && t.startTime < i && t.startTime < r.timeStamp && t.startTime < yr
                                }));
                                e && n(e.startTime)
                            })).unsubscribe;
                        return {
                            stop: function() {
                                o(), a()
                            }
                        }
                    }(t, window, (function(t) {
                        r({
                            largestContentfulPaint: t
                        })
                    })).stop,
                    u = function(t, e) {
                        var n = gr();
                        return {
                            stop: t.subscribe(0, (function(t) {
                                var r = x(t, (function(t) {
                                    return "first-input" === t.entryType && t.startTime < n.timeStamp
                                }));
                                if (r) {
                                    var i = rt(r.startTime, r.processingStart);
                                    e({
                                        firstInputDelay: i >= 0 ? i : 0,
                                        firstInputTime: r.startTime
                                    })
                                }
                            })).unsubscribe
                        }
                    }(t, (function(t) {
                        r({
                            firstInputDelay: t.firstInputDelay,
                            firstInputTime: t.firstInputTime
                        })
                    })).stop;
                return {
                    stop: function() {
                        i(), o(), a(), u()
                    }
                }
            }

            function wr(t, e, n, r, i, o) {
                var a, u = {
                        eventCounts: {
                            errorCount: 0,
                            longTaskCount: 0,
                            resourceCount: 0,
                            actionCount: 0,
                            frustrationCount: 0
                        }
                    },
                    s = bn(t, (function(t) {
                        u.eventCounts = t, r()
                    })).stop,
                    c = function(t, e, n, r, i, o) {
                        var a = "initial_load" === r,
                            u = !0,
                            s = [];

                        function c() {
                            !u && !a && s.length > 0 && o(Math.max.apply(Math, s))
                        }
                        return {
                            stop: wn(t, e, n, (function(t) {
                                u && (u = !1, t.hadActivity && s.push(rt(i.timeStamp, t.end)), c())
                            })).stop,
                            setLoadEvent: function(t) {
                                a && (a = !1, s.push(t), c())
                            }
                        }
                    }(t, e, n, i, o, (function(t) {
                        u.loadingTime = t, r()
                    })),
                    f = c.stop,
                    d = c.setLoadEvent;
                return xe("layout-shift") ? (u.cumulativeLayoutShift = 0, a = function(t, e) {
                    var n = 0,
                        r = function() {
                            var t, e, n = 0;
                            return {
                                update: function(r) {
                                    void 0 === t || r.startTime - e >= p || r.startTime - t >= 5e3 ? (t = e = r.startTime, n = r.value) : (n += r.value, e = r.startTime)
                                },
                                value: function() {
                                    return n
                                }
                            }
                        }();
                    return {
                        stop: t.subscribe(0, (function(t) {
                            for (var i = 0, o = t; i < o.length; i++) {
                                var a = o[i];
                                "layout-shift" !== a.entryType || a.hadRecentInput || (r.update(a), r.value() > n && (n = r.value(), e(w(n, 4))))
                            }
                        })).unsubscribe
                    }
                }(t, (function(t) {
                    u.cumulativeLayoutShift = t, r()
                })).stop) : a = T, {
                    stop: function() {
                        s(), f(), a()
                    },
                    setLoadEvent: d,
                    viewMetrics: u
                }
            }

            function Tr(t, e, n, r, i, o, a) {
                var u, s = function(i) {
                        var o = Sr(e, n, r, t, "initial_load", nt(), i),
                            a = br(e, (function(t) {
                                o.updateTimings(t), o.scheduleUpdate()
                            })).stop;
                        return {
                            initialView: o,
                            stop: a
                        }
                    }(a),
                    c = s.stop,
                    d = s.initialView,
                    l = function() {
                        e.subscribe(8, (function() {
                            d.end(), d = p(void 0, {
                                name: d.name,
                                service: d.service,
                                version: d.version
                            })
                        })), e.subscribe(9, (function() {
                            d.end(), d.triggerUpdate()
                        }));
                        var t = window.setInterval(f((function() {
                            d.triggerUpdate()
                        })), 3e5);
                        return {
                            stop: function() {
                                clearInterval(t)
                            }
                        }
                    }().stop;

                function p(i, o) {
                    return Sr(e, n, r, t, "route_change", i, o)
                }
                return o && (u = function(t) {
                    return t.subscribe((function(t) {
                        var e, n, r = t.oldLocation,
                            i = t.newLocation;
                        if (n = i, (e = r).pathname !== n.pathname || ! function(t) {
                                var e = t.substr(1);
                                return !!document.getElementById(e)
                            }(n.hash) && Cr(n.hash) !== Cr(e.hash)) return d.end(), d.triggerUpdate(), void(d = p())
                    }))
                }(i)), {
                    addTiming: function(t, e) {
                        void 0 === e && (e = Q()), d.addTiming(t, e), d.scheduleUpdate()
                    },
                    startView: function(t, e) {
                        d.end(e), d.triggerUpdate(), d = p(e, t)
                    },
                    stop: function() {
                        null === u || void 0 === u || u.unsubscribe(), c(), l(), d.end()
                    }
                }
            }

            function Sr(t, e, n, r, o, a, u) {
                void 0 === a && (a = et());
                var s, c, d, l, p = y(),
                    v = {},
                    b = {},
                    w = 0,
                    T = g(r);
                u && (c = u.name, d = u.service, l = u.version), t.notify(2, {
                    id: p,
                    name: c,
                    startClocks: a,
                    service: d,
                    version: l
                });
                var S = m(f(A), 3e3, {
                        leading: !1
                    }),
                    C = S.throttled,
                    k = S.cancel,
                    E = wr(t, e, n, C, o, a),
                    x = E.setLoadEvent,
                    I = E.stop,
                    _ = E.viewMetrics;

                function A() {
                    w += 1;
                    var e = void 0 === s ? Q() : s.timeStamp;
                    t.notify(3, h({
                        customTimings: b,
                        documentVersion: w,
                        id: p,
                        name: c,
                        service: d,
                        version: l,
                        loadingType: o,
                        location: T,
                        startClocks: a,
                        timings: v,
                        duration: rt(a.timeStamp, e),
                        isActive: void 0 === s
                    }, _))
                }
                return A(), {
                    name: c,
                    service: d,
                    version: l,
                    scheduleUpdate: C,
                    end: function(e) {
                        void 0 === e && (e = et()), s = e, t.notify(4, {
                            endClocks: s
                        }), I()
                    },
                    triggerUpdate: function() {
                        k(), A()
                    },
                    updateTimings: function(t) {
                        v = t, void 0 !== t.loadEvent && x(t.loadEvent)
                    },
                    addTiming: function(t, e) {
                        var n = function(t) {
                            return t < 31536e6
                        }(e) ? e : rt(a.timeStamp, e);
                        b[function(t) {
                            var e = t.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
                            e !== t && i.warn("Invalid timing name: ".concat(t, ", sanitized to: ").concat(e));
                            return e
                        }(t)] = n
                    }
                }
            }

            function Cr(t) {
                var e = t.indexOf("?");
                return e < 0 ? t : t.slice(0, e)
            }

            function kr(t, e, n, r, i, o, a, u) {
                return t.subscribe(3, (function(e) {
                    return t.notify(10, function(t, e, n) {
                        var r = n.getReplayStats(t.id),
                            i = {
                                _dd: {
                                    document_version: t.documentVersion,
                                    replay_stats: r
                                },
                                date: t.startClocks.timeStamp,
                                type: "view",
                                view: {
                                    action: {
                                        count: t.eventCounts.actionCount
                                    },
                                    frustration: {
                                        count: t.eventCounts.frustrationCount
                                    },
                                    cumulative_layout_shift: t.cumulativeLayoutShift,
                                    dom_complete: $(t.timings.domComplete),
                                    dom_content_loaded: $(t.timings.domContentLoaded),
                                    dom_interactive: $(t.timings.domInteractive),
                                    error: {
                                        count: t.eventCounts.errorCount
                                    },
                                    first_contentful_paint: $(t.timings.firstContentfulPaint),
                                    first_input_delay: $(t.timings.firstInputDelay),
                                    first_input_time: $(t.timings.firstInputTime),
                                    is_active: t.isActive,
                                    name: t.name,
                                    largest_contentful_paint: $(t.timings.largestContentfulPaint),
                                    load_event: $(t.timings.loadEvent),
                                    loading_time: Er($(t.loadingTime)),
                                    loading_type: t.loadingType,
                                    long_task: {
                                        count: t.eventCounts.longTaskCount
                                    },
                                    resource: {
                                        count: t.eventCounts.resourceCount
                                    },
                                    time_spent: $(t.duration),
                                    in_foreground_periods: e.selectInForegroundPeriodsFor(t.startClocks.relative, t.duration)
                                },
                                session: {
                                    has_replay: !!r || void 0
                                }
                            };
                        O(t.customTimings) || (i.view.custom_timings = function(t, e) {
                            for (var n = {}, r = 0, i = Object.keys(t); r < i.length; r++) {
                                var o = i[r];
                                n[o] = e(t[o])
                            }
                            return n
                        }(t.customTimings, $));
                        return {
                            rawRumEvent: i,
                            startTime: t.startClocks.relative,
                            domainContext: {
                                location: t.location
                            }
                        }
                    }(e, o, a))
                })), Tr(n, t, r, e, i, !e.trackViewsManually, u)
            }

            function Er(t) {
                return _(t) && t < 0 ? void 0 : t
            }
            var xr, Ir = /^([a-z]+)=([a-z0-9-]+)$/,
                _r = "&",
                Ar = "_dd_s",
                Nr = [];

            function Or(t, e) {
                var n;
                if (void 0 === e && (e = 0), xr || (xr = t), t === xr)
                    if (e >= 100) Mr();
                    else {
                        var r, i = Ur();
                        if (Lr()) {
                            if (i.lock) return void Rr(t, e);
                            if (r = y(), i.lock = r, Dr(i, t.options), (i = Ur()).lock !== r) return void Rr(t, e)
                        }
                        var o = t.process(i);
                        if (Lr() && (i = Ur()).lock !== r) Rr(t, e);
                        else {
                            if (o && Pr(o, t.options), Lr() && (!o || !Br(o))) {
                                if ((i = Ur()).lock !== r) return void Rr(t, e);
                                delete i.lock, Dr(i, t.options), o = i
                            }
                            null === (n = t.after) || void 0 === n || n.call(t, o || i), Mr()
                        }
                    }
                else Nr.push(t)
            }

            function Lr() {
                return !!window.chrome || /HeadlessChrome/.test(window.navigator.userAgent)
            }

            function Rr(t, e) {
                setTimeout(f((function() {
                    Or(t, e + 1)
                })), 10)
            }

            function Mr() {
                xr = void 0;
                var t = Nr.shift();
                t && Or(t)
            }

            function Pr(t, e) {
                Br(t) ? function(t) {
                    ut(Ar, "", 0, t)
                }(e) : (t.expire = String(Z() + Je), Dr(t, e))
            }

            function Dr(t, e) {
                ut(Ar, function(t) {
                    return N(t).map((function(t) {
                        var e = t[0],
                            n = t[1];
                        return "".concat(e, "=").concat(n)
                    })).join(_r)
                }(t), Je, e)
            }

            function Ur() {
                var t = st(Ar),
                    e = {};
                return function(t) {
                    return void 0 !== t && (-1 !== t.indexOf(_r) || Ir.test(t))
                }(t) && t.split(_r).forEach((function(t) {
                    var n = Ir.exec(t);
                    if (null !== n) {
                        var r = n[1],
                            i = n[2];
                        e[r] = i
                    }
                })), e
            }

            function Br(t) {
                return O(t)
            }

            function jr(t, e, n) {
                var r = new Jt,
                    i = new Jt,
                    o = setInterval(f((function() {
                        Or({
                            options: t,
                            process: function(t) {
                                return c(t) ? void 0 : {}
                            },
                            after: u
                        })
                    })), 1e3),
                    a = function() {
                        var t = Ur();
                        if (c(t)) return t;
                        return {}
                    }();

                function u(t) {
                    return c(t) || (t = {}), s() && (! function(t) {
                        return a.id !== t.id || a[e] !== t[e]
                    }(t) ? a = t : (a = {}, i.notify())), t
                }

                function s() {
                    return void 0 !== a[e]
                }

                function c(t) {
                    return (void 0 === t.created || Z() - Number(t.created) < Ke) && (void 0 === t.expire || Z() < Number(t.expire))
                }
                return {
                    expandOrRenewSession: m(f((function() {
                        var i;
                        Or({
                            options: t,
                            process: function(t) {
                                var r = u(t);
                                return i = function(t) {
                                    var r = n(t[e]),
                                        i = r.trackingType,
                                        o = r.isTracked;
                                    t[e] = i, o && !t.id && (t.id = y(), t.created = String(Z()));
                                    return o
                                }(r), r
                            },
                            after: function(t) {
                                i && !s() && function(t) {
                                    a = t, r.notify()
                                }(t), a = t
                            }
                        })
                    })), 1e3).throttled,
                    expandSession: function() {
                        Or({
                            options: t,
                            process: function(t) {
                                return s() ? u(t) : void 0
                            }
                        })
                    },
                    getSession: function() {
                        return a
                    },
                    renewObservable: r,
                    expireObservable: i,
                    stop: function() {
                        clearInterval(o)
                    }
                }
            }
            var Vr = [];

            function qr(t, e, n) {
                ! function(t) {
                    var e = st(Ar),
                        n = st("_dd"),
                        r = st("_dd_r"),
                        i = st("_dd_l");
                    if (!e) {
                        var o = {};
                        n && (o.id = n), i && /^[01]$/.test(i) && (o.logs = i), r && /^[012]$/.test(r) && (o.rum = r), Pr(o, t)
                    }
                }(t);
                var r = jr(t, e, n);
                Vr.push((function() {
                    return r.stop()
                }));
                var i = new Ze(144e5);

                function o() {
                    return {
                        id: r.getSession().id,
                        trackingType: r.getSession()[e]
                    }
                }
                return Vr.push((function() {
                        return i.stop()
                    })), r.renewObservable.subscribe((function() {
                        i.add(o(), tt())
                    })), r.expireObservable.subscribe((function() {
                        i.closeActive(tt())
                    })), r.expandOrRenewSession(), i.add(o(), nt().relative),
                    function(t) {
                        var e = U(window, ["click", "touchstart", "keydown", "scroll"], t, {
                            capture: !0,
                            passive: !0
                        }).stop;
                        Vr.push(e)
                    }((function() {
                        return r.expandOrRenewSession()
                    })),
                    function(t) {
                        var e = f((function() {
                                "visible" === document.visibilityState && t()
                            })),
                            n = D(document, "visibilitychange", e).stop;
                        Vr.push(n);
                        var r = setInterval(e, 6e4);
                        Vr.push((function() {
                            clearInterval(r)
                        }))
                    }((function() {
                        return r.expandSession()
                    })), {
                        findActiveSession: function(t) {
                            return i.find(t)
                        },
                        renewObservable: r.renewObservable,
                        expireObservable: r.expireObservable
                    }
            }

            function Fr(t, e) {
                var n = qr(t.cookieOptions, "rum", (function(e) {
                    return function(t, e) {
                        var n;
                        n = function(t) {
                            return "0" === t || "1" === t || "2" === t
                        }(e) ? e : b(t.sampleRate) ? b(t.premiumSampleRate) ? "1" : "2" : "0";
                        return {
                            trackingType: n,
                            isTracked: Hr(n)
                        }
                    }(t, e)
                }));
                return n.expireObservable.subscribe((function() {
                    e.notify(7)
                })), n.renewObservable.subscribe((function() {
                    e.notify(8)
                })), {
                    findTrackedSession: function(t) {
                        var e = n.findActiveSession(t);
                        if (e && Hr(e.trackingType)) return {
                            id: e.id,
                            hasPremiumPlan: "1" === e.trackingType,
                            hasLitePlan: "2" === e.trackingType
                        }
                    }
                }
            }

            function Hr(t) {
                return "2" === t || "1" === t
            }
            var zr = /[^\u0000-\u007F]/,
                Gr = function() {
                    function t(t, e, n, r, i, o) {
                        void 0 === o && (o = T), this.request = t, this.batchMessagesLimit = e, this.batchBytesLimit = n, this.messageBytesLimit = r, this.flushTimeout = i, this.beforeUnloadCallback = o, this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.bufferBytesCount = 0, this.bufferMessagesCount = 0, this.flushOnVisibilityHidden(), this.flushPeriodically()
                    }
                    return t.prototype.add = function(t) {
                        this.addOrUpdate(t)
                    }, t.prototype.upsert = function(t, e) {
                        this.addOrUpdate(t, e)
                    }, t.prototype.flush = function() {
                        if (0 !== this.bufferMessagesCount) {
                            var t = this.pushOnlyBuffer.concat(A(this.upsertBuffer)),
                                e = this.bufferBytesCount;
                            this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.bufferBytesCount = 0, this.bufferMessagesCount = 0, this.request.send(t.join("\n"), e)
                        }
                    }, t.prototype.computeBytesCount = function(t) {
                        return zr.test(t) ? void 0 !== window.TextEncoder ? (new TextEncoder).encode(t).length : new Blob([t]).size : t.length
                    }, t.prototype.addOrUpdate = function(t, e) {
                        var n = this.process(t),
                            r = n.processedMessage,
                            o = n.messageBytesCount;
                        o >= this.messageBytesLimit ? i.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(this.messageBytesLimit, "KB.")) : (this.hasMessageFor(e) && this.remove(e), this.willReachedBytesLimitWith(o) && this.flush(), this.push(r, o, e), this.isFull() && this.flush())
                    }, t.prototype.process = function(t) {
                        var e = S(t);
                        return {
                            processedMessage: e,
                            messageBytesCount: this.computeBytesCount(e)
                        }
                    }, t.prototype.push = function(t, e, n) {
                        this.bufferMessagesCount > 0 && (this.bufferBytesCount += 1), void 0 !== n ? this.upsertBuffer[n] = t : this.pushOnlyBuffer.push(t), this.bufferBytesCount += e, this.bufferMessagesCount += 1
                    }, t.prototype.remove = function(t) {
                        var e = this.upsertBuffer[t];
                        delete this.upsertBuffer[t];
                        var n = this.computeBytesCount(e);
                        this.bufferBytesCount -= n, this.bufferMessagesCount -= 1, this.bufferMessagesCount > 0 && (this.bufferBytesCount -= 1)
                    }, t.prototype.hasMessageFor = function(t) {
                        return void 0 !== t && void 0 !== this.upsertBuffer[t]
                    }, t.prototype.willReachedBytesLimitWith = function(t) {
                        return this.bufferBytesCount + t + 1 >= this.batchBytesLimit
                    }, t.prototype.isFull = function() {
                        return this.bufferMessagesCount === this.batchMessagesLimit || this.bufferBytesCount >= this.batchBytesLimit
                    }, t.prototype.flushPeriodically = function() {
                        var t = this;
                        setTimeout(f((function() {
                            t.flush(), t.flushPeriodically()
                        })), this.flushTimeout)
                    }, t.prototype.flushOnVisibilityHidden = function() {
                        var t = this;
                        navigator.sendBeacon && (D(window, "beforeunload", this.beforeUnloadCallback), D(document, "visibilitychange", (function() {
                            "hidden" === document.visibilityState && t.flush()
                        })), D(window, "beforeunload", (function() {
                            return t.flush()
                        })))
                    }, t
                }(),
                Wr = function() {
                    function t(t, e) {
                        this.endpointBuilder = t, this.bytesLimit = e
                    }
                    return t.prototype.send = function(t, e) {
                        var n = this.endpointBuilder.build();
                        if (!!navigator.sendBeacon && e < this.bytesLimit) try {
                            if (navigator.sendBeacon(n, t)) return
                        } catch (i) {
                            ! function(t) {
                                Xr || (Xr = !0, ie(t))
                            }(i)
                        }
                        var r = new XMLHttpRequest;
                        r.open("POST", n, !0), r.send(t)
                    }, t
                }(),
                Xr = !1;

            function Yr(t, e, n) {
                var r = function(t, e) {
                    var n, r = o(t.rumEndpointBuilder, (function() {
                            return e.notify(9)
                        })),
                        i = t.replica;
                    void 0 !== i && (n = o(i.rumEndpointBuilder));

                    function o(e, n) {
                        return new Gr(new Wr(e, t.batchBytesLimit), t.batchMessagesLimit, t.batchBytesLimit, t.messageBytesLimit, t.flushTimeout, n)
                    }

                    function a(t) {
                        return H(t, {
                            application: {
                                id: i.applicationId
                            }
                        })
                    }
                    return {
                        add: function(t, e) {
                            void 0 === e && (e = !0), r.add(t), n && e && n.add(a(t))
                        },
                        upsert: function(t, e) {
                            r.upsert(t, e), n && n.upsert(a(t), e)
                        }
                    }
                }(t, e);
                e.subscribe(11, (function(t) {
                    "view" === t.type ? r.upsert(t, t.view.id) : r.add(t)
                })), n.subscribe((function(e) {
                    return r.add(e, function(t) {
                        return "datad0g.com" === t.site
                    }(t))
                }))
            }

            function Kr(t) {
                var e = g(t),
                    n = new Jt((function() {
                        var t, e = function(t) {
                                var e = tn(history, "pushState", {
                                        after: t
                                    }).stop,
                                    n = tn(history, "replaceState", {
                                        after: t
                                    }).stop,
                                    r = D(window, "popstate", t).stop;
                                return {
                                    stop: function() {
                                        e(), n(), r()
                                    }
                                }
                            }(r).stop,
                            n = (t = r, D(window, "hashchange", t)).stop;
                        return function() {
                            e(), n()
                        }
                    }));

                function r() {
                    if (e.href !== t.href) {
                        var r = g(t);
                        n.notify({
                            newLocation: r,
                            oldLocation: e
                        }), e = r
                    }
                }
                return n
            }
            var Jr = 2,
                $r = 3,
                Zr = 4,
                Qr = 6,
                ti = 7,
                ei = 8,
                ni = 9,
                ri = 0,
                ii = 1,
                oi = 2,
                ai = 3,
                ui = 4,
                si = 0,
                ci = 1,
                fi = 2,
                di = 3,
                li = 4,
                pi = 5,
                vi = 6,
                mi = 7,
                hi = 8,
                gi = 0,
                yi = 1,
                bi = 2,
                wi = 3,
                Ti = 4,
                Si = 5,
                Ci = 6,
                ki = 7,
                Ei = 9,
                xi = 0,
                Ii = 1,
                _i = {
                    IGNORE: "ignore",
                    HIDDEN: "hidden",
                    ALLOW: Xt.ALLOW,
                    MASK: Xt.MASK,
                    MASK_USER_INPUT: Xt.MASK_USER_INPUT
                },
                Ai = "data-dd-privacy",
                Ni = "hidden",
                Oi = "***",
                Li = {
                    INPUT: !0,
                    OUTPUT: !0,
                    TEXTAREA: !0,
                    SELECT: !0,
                    OPTION: !0,
                    DATALIST: !0,
                    OPTGROUP: !0
                };

            function Ri(t, e) {
                var n = t.parentNode ? Ri(t.parentNode, e) : e;
                return Mi(Pi(t), n)
            }

            function Mi(t, e) {
                switch (e) {
                    case _i.HIDDEN:
                    case _i.IGNORE:
                        return e
                }
                switch (t) {
                    case _i.ALLOW:
                    case _i.MASK:
                    case _i.MASK_USER_INPUT:
                    case _i.HIDDEN:
                    case _i.IGNORE:
                        return t;
                    default:
                        return e
                }
            }

            function Pi(t) {
                if (function(t) {
                        return t.nodeType === t.ELEMENT_NODE
                    }(t)) {
                    var e = t.getAttribute(Ai);
                    if ("BASE" === t.tagName) return _i.ALLOW;
                    if ("INPUT" === t.tagName) {
                        var n = t;
                        if ("password" === n.type || "email" === n.type || "tel" === n.type) return _i.MASK;
                        if ("hidden" === n.type) return _i.MASK;
                        var r = n.getAttribute("autocomplete");
                        if (r && 0 === r.indexOf("cc-")) return _i.MASK
                    }
                    return e === Ni || t.classList.contains("dd-privacy-hidden") ? _i.HIDDEN : "mask" === e || t.classList.contains("dd-privacy-mask") ? _i.MASK : "mask-user-input" === e || t.classList.contains("dd-privacy-mask-user-input") ? _i.MASK_USER_INPUT : "allow" === e || t.classList.contains("dd-privacy-allow") ? _i.ALLOW : function(t) {
                        if ("SCRIPT" === t.nodeName) return !0;
                        if ("LINK" === t.nodeName) {
                            return "preload" === (n = i("rel")) && "script" === i("as") || "shortcut icon" === n || "icon" === n
                        }
                        if ("META" === t.nodeName) {
                            var e = i("name"),
                                n = i("rel"),
                                r = i("property");
                            return /^msapplication-tile(image|color)$/.test(e) || "application-name" === e || "icon" === n || "apple-touch-icon" === n || "shortcut icon" === n || "keywords" === e || "description" === e || /^(og|twitter|fb):/.test(r) || /^(og|twitter):/.test(e) || "pinterest" === e || "robots" === e || "googlebot" === e || "bingbot" === e || t.hasAttribute("http-equiv") || "author" === e || "generator" === e || "framework" === e || "publisher" === e || "progid" === e || /^article:/.test(r) || /^product:/.test(r) || "google-site-verification" === e || "yandex-verification" === e || "csrf-token" === e || "p:domain_verify" === e || "verify-v1" === e || "verification" === e || "shopify-checkout-api-token" === e
                        }

                        function i(e) {
                            return (t.getAttribute(e) || "").toLowerCase()
                        }
                        return !1
                    }(t) ? _i.IGNORE : void 0
                }
            }

            function Di(t, e) {
                switch (e) {
                    case _i.MASK:
                    case _i.HIDDEN:
                    case _i.IGNORE:
                        return !0;
                    case _i.MASK_USER_INPUT:
                        return function(t) {
                            return t.nodeType === t.TEXT_NODE
                        }(t) ? Ui(t.parentNode) : Ui(t);
                    default:
                        return !1
                }
            }

            function Ui(t) {
                if (!t || t.nodeType !== t.ELEMENT_NODE) return !1;
                var e = t;
                if ("INPUT" === e.tagName) switch (e.type) {
                    case "button":
                    case "color":
                    case "reset":
                    case "submit":
                        return !1
                }
                return !!Li[e.tagName]
            }

            function Bi(t, e, n) {
                var r, i = null === (r = t.parentElement) || void 0 === r ? void 0 : r.tagName,
                    o = t.textContent || "";
                if (!e || o.trim()) {
                    var a = "STYLE" === i || void 0;
                    if ("SCRIPT" === i) o = Oi;
                    else if (n === _i.HIDDEN) o = Oi;
                    else if (Di(t, n) && !a)
                        if ("DATALIST" === i || "SELECT" === i || "OPTGROUP" === i) {
                            if (!o.trim()) return
                        } else o = "OPTION" === i ? Oi : o.replace(/\S/g, "x");
                    return o
                }
            }
            var ji = new WeakMap;

            function Vi(t) {
                return ji.has(t)
            }

            function qi(t) {
                return ji.get(t)
            }

            function Fi(t, e) {
                var n = t.tagName,
                    r = t.value;
                if (Di(t, e)) {
                    var i = t.type;
                    if ("INPUT" === n && ("button" === i || "submit" === i || "reset" === i)) return r;
                    if (!r || "OPTION" === n) return;
                    return Oi
                }
                return "OPTION" === n || "SELECT" === n ? t.value : "INPUT" === n || "TEXTAREA" === n ? r : void 0
            }

            function Hi(t) {
                return Boolean(t.changedTouches)
            }

            function zi(t, e) {
                Array.prototype.forEach.call(t, e)
            }

            function Gi(t, e) {
                return {
                    data: h({
                        source: t
                    }, e),
                    type: $r,
                    timestamp: Q()
                }
            }

            function Wi(t, e, n) {
                return Xi(t, {
                    document: t,
                    parentNodePrivacyLevel: e,
                    serializationContext: n
                })
            }

            function Xi(t, e) {
                var n = function(t, e) {
                    switch (t.nodeType) {
                        case t.DOCUMENT_NODE:
                            return function(t, e) {
                                return {
                                    type: ri,
                                    childNodes: Yi(t, e)
                                }
                            }(t, e);
                        case t.DOCUMENT_TYPE_NODE:
                            return {
                                type: ii,
                                name: (n = t).name,
                                publicId: n.publicId,
                                systemId: n.systemId
                            };
                        case t.ELEMENT_NODE:
                            return function(t, e) {
                                var n, r = Zi(t.tagName),
                                    i = (a = t, "svg" === a.tagName || a instanceof SVGElement || void 0),
                                    o = Mi(Pi(t), e.parentNodePrivacyLevel);
                                var a;
                                if (o === _i.HIDDEN) {
                                    var u = t.getBoundingClientRect(),
                                        s = u.width,
                                        c = u.height;
                                    return {
                                        type: oi,
                                        tagName: r,
                                        attributes: (n = {
                                            rr_width: "".concat(s, "px"),
                                            rr_height: "".concat(c, "px")
                                        }, n[Ai] = Ni, n),
                                        childNodes: [],
                                        isSVG: i
                                    }
                                }
                                if (o === _i.IGNORE) return;
                                var f = function(t, e, n) {
                                        var r;
                                        if (e === _i.HIDDEN) return {};
                                        for (var i = {}, o = Zi(t.tagName), a = t.ownerDocument, u = 0; u < t.attributes.length; u += 1) {
                                            var s = t.attributes.item(u).name,
                                                c = Ki(t, e, s);
                                            null !== c && (i[s] = c)
                                        }
                                        if (t.value && ("textarea" === o || "select" === o || "option" === o || "input" === o)) {
                                            var f = Fi(t, e);
                                            void 0 !== f && (i.value = f)
                                        }
                                        if ("option" === o && e === _i.ALLOW) {
                                            var d = t;
                                            d.selected && (i.selected = d.selected)
                                        }
                                        if ("link" === o) {
                                            var l = Array.from(a.styleSheets).find((function(e) {
                                                return e.href === t.href
                                            }));
                                            (p = Qi(l)) && l && (delete i.rel, delete i.href, i._cssText = p)
                                        }
                                        if ("style" === o && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                                            var p;
                                            (p = Qi(t.sheet)) && (i._cssText = p)
                                        }
                                        var v, m, h = t;
                                        "input" !== o || "radio" !== h.type && "checkbox" !== h.type || (e === _i.ALLOW ? i.checked = !!h.checked : Di(h, e) && (i.checked = Oi));
                                        if ("audio" === o || "video" === o) {
                                            var g = t;
                                            i.rr_mediaState = g.paused ? "paused" : "played"
                                        }
                                        switch (n.status) {
                                            case 0:
                                                v = Math.round(t.scrollTop), m = Math.round(t.scrollLeft), (v || m) && n.elementsScrollPositions.set(t, {
                                                    scrollTop: v,
                                                    scrollLeft: m
                                                });
                                                break;
                                            case 1:
                                                n.elementsScrollPositions.has(t) && (v = (r = n.elementsScrollPositions.get(t)).scrollTop, m = r.scrollLeft)
                                        }
                                        m && (i.rr_scrollLeft = m);
                                        v && (i.rr_scrollTop = v);
                                        return i
                                    }(t, o, e.serializationContext),
                                    d = [];
                                if (t.childNodes.length) {
                                    d = Yi(t, e.parentNodePrivacyLevel === o && e.ignoreWhiteSpace === ("head" === r) ? e : h({}, e, {
                                        parentNodePrivacyLevel: o,
                                        ignoreWhiteSpace: "head" === r
                                    }))
                                }
                                return {
                                    type: oi,
                                    tagName: r,
                                    attributes: f,
                                    childNodes: d,
                                    isSVG: i
                                }
                            }(t, e);
                        case t.TEXT_NODE:
                            return function(t, e) {
                                var n, r = null === (n = t.parentElement) || void 0 === n ? void 0 : n.tagName,
                                    i = Bi(t, e.ignoreWhiteSpace || !1, e.parentNodePrivacyLevel);
                                if (!i) return;
                                return {
                                    type: ai,
                                    textContent: i,
                                    isStyle: "STYLE" === r || void 0
                                }
                            }(t, e);
                        case t.CDATA_SECTION_NODE:
                            return {
                                type: ui,
                                textContent: ""
                            }
                    }
                    var n
                }(t, e);
                if (!n) return null;
                var r = qi(t) || Ji++,
                    i = n;
                return i.id = r,
                    function(t, e) {
                        ji.set(t, e)
                    }(t, r), e.serializedNodeIds && e.serializedNodeIds.add(r), i
            }

            function Yi(t, e) {
                var n = [];
                return zi(t.childNodes, (function(t) {
                    var r = Xi(t, e);
                    r && n.push(r)
                })), n
            }

            function Ki(t, e, n) {
                if (e === _i.HIDDEN) return null;
                var r = t.getAttribute(n);
                if (e === _i.MASK) {
                    var i = t.tagName;
                    switch (n) {
                        case "title":
                        case "alt":
                        case "placeholder":
                            return Oi
                    }
                    if (("IMG" === i || "SOURCE" === i) && ("src" === n || "srcset" === n)) return "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
                    if ("A" === i && "href" === n) return Oi;
                    if (r && 0 === n.indexOf("data-") && n !== Ai) return Oi
                }
                return r && "string" === typeof r && r.length > 1e5 && "data:" === r.slice(0, 5) ? "data:truncated" : r
            }
            var Ji = 1;
            var $i = /[^a-z1-6-_]/;

            function Zi(t) {
                var e = t.toLowerCase().trim();
                return $i.test(e) ? "div" : e
            }

            function Qi(t) {
                try {
                    var e = t.rules || t.cssRules;
                    return e ? Array.from(e).map(to).join("") : null
                } catch (n) {
                    return null
                }
            }

            function to(t) {
                return function(t) {
                    return "styleSheet" in t
                }(t) ? Qi(t.styleSheet) || "" : t.cssText
            }

            function eo(t) {
                var e = T,
                    n = [];

                function r() {
                    e(), t(n), n = []
                }
                return {
                    addMutations: function(t) {
                        0 === n.length && (e = function(t, e) {
                            if (window.requestIdleCallback) {
                                var n = window.requestIdleCallback(f(t), e);
                                return function() {
                                    return window.cancelIdleCallback(n)
                                }
                            }
                            var r = window.requestAnimationFrame(f(t));
                            return function() {
                                return window.cancelAnimationFrame(r)
                            }
                        }(r, {
                            timeout: 100
                        })), n.push.apply(n, t)
                    },
                    flush: r,
                    stop: function() {
                        e()
                    }
                }
            }

            function no(t, e, n) {
                var r = ue();
                if (!r) return {
                    stop: T
                };
                var i = eo((function(t) {
                        ! function(t, e, n) {
                            var r = t.filter((function(t) {
                                    return document.contains(t.target) && function(t) {
                                        for (var e = t; e;) {
                                            if (!Vi(e)) return !1;
                                            e = e.parentNode
                                        }
                                        return !0
                                    }(t.target) && Ri(t.target, n) !== _i.HIDDEN
                                })),
                                i = function(t, e) {
                                    for (var n = new Set, r = new Map, i = function(t) {
                                            zi(t.addedNodes, (function(t) {
                                                n.add(t)
                                            })), zi(t.removedNodes, (function(e) {
                                                n.has(e) || r.set(e, t.target), n.delete(e)
                                            }))
                                        }, o = 0, a = t; o < a.length; o++) {
                                        i(a[o])
                                    }
                                    var u = Array.from(n);
                                    s = u, s.sort((function(t, e) {
                                        var n = t.compareDocumentPosition(e);
                                        return n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_CONTAINS || n & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : n & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0
                                    }));
                                    var s;
                                    for (var c = new Set, f = [], d = 0, l = u; d < l.length; d++) {
                                        var p = l[d];
                                        if (!g(p)) {
                                            var v = Ri(p.parentNode, e);
                                            if (v !== _i.HIDDEN && v !== _i.IGNORE) {
                                                var m = Xi(p, {
                                                    document: document,
                                                    serializedNodeIds: c,
                                                    parentNodePrivacyLevel: v,
                                                    serializationContext: {
                                                        status: 2
                                                    }
                                                });
                                                m && f.push({
                                                    nextId: y(p),
                                                    parentId: qi(p.parentNode),
                                                    node: m
                                                })
                                            }
                                        }
                                    }
                                    var h = [];
                                    return r.forEach((function(t, e) {
                                        Vi(e) && h.push({
                                            parentId: qi(t),
                                            id: qi(e)
                                        })
                                    })), {
                                        adds: f,
                                        removes: h,
                                        hasBeenSerialized: g
                                    };

                                    function g(t) {
                                        return Vi(t) && c.has(qi(t))
                                    }

                                    function y(t) {
                                        for (var e = t.nextSibling; e;) {
                                            if (Vi(e)) return qi(e);
                                            e = e.nextSibling
                                        }
                                        return null
                                    }
                                }(r.filter((function(t) {
                                    return "childList" === t.type
                                })), n),
                                o = i.adds,
                                a = i.removes,
                                u = i.hasBeenSerialized,
                                s = function(t, e) {
                                    for (var n, r = [], i = new Set, o = t.filter((function(t) {
                                            return !i.has(t.target) && (i.add(t.target), !0)
                                        })), a = 0, u = o; a < u.length; a++) {
                                        var s = u[a];
                                        if (s.target.textContent !== s.oldValue) {
                                            var c = Ri(s.target.parentNode, e);
                                            c !== _i.HIDDEN && c !== _i.IGNORE && r.push({
                                                id: qi(s.target),
                                                value: null !== (n = Bi(s.target, !1, c)) && void 0 !== n ? n : null
                                            })
                                        }
                                    }
                                    return r
                                }(r.filter((function(t) {
                                    return "characterData" === t.type && !u(t.target)
                                })), n),
                                c = function(t, e) {
                                    for (var n = [], r = new Map, i = t.filter((function(t) {
                                            var e = r.get(t.target);
                                            return !(null === e || void 0 === e ? void 0 : e.has(t.attributeName)) && (e ? e.add(t.attributeName) : r.set(t.target, new Set([t.attributeName])), !0)
                                        })), o = new Map, a = 0, u = i; a < u.length; a++) {
                                        var s = u[a];
                                        if (s.target.getAttribute(s.attributeName) !== s.oldValue) {
                                            var c = Ri(s.target, e),
                                                f = Ki(s.target, c, s.attributeName),
                                                d = void 0;
                                            if ("value" === s.attributeName) {
                                                var l = Fi(s.target, c);
                                                if (void 0 === l) continue;
                                                d = l
                                            } else d = "string" === typeof f ? f : null;
                                            var p = o.get(s.target);
                                            p || (p = {
                                                id: qi(s.target),
                                                attributes: {}
                                            }, n.push(p), o.set(s.target, p)), p.attributes[s.attributeName] = d
                                        }
                                    }
                                    return n
                                }(r.filter((function(t) {
                                    return "attributes" === t.type && !u(t.target)
                                })), n);
                            if (!s.length && !c.length && !a.length && !o.length) return;
                            e({
                                adds: o,
                                removes: a,
                                texts: s,
                                attributes: c
                            })
                        }(t.concat(o.takeRecords()), e, n)
                    })),
                    o = new r(f(i.addMutations));
                return o.observe(document, {
                    attributeOldValue: !0,
                    attributes: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), t.onFlush(i.flush), {
                    stop: function() {
                        o.disconnect(), i.stop()
                    }
                }
            }
            var ro = function() {
                function t() {}
                return t.prototype.flush = function() {
                    var t;
                    null === (t = this.flushListener) || void 0 === t || t.call(this)
                }, t.prototype.onFlush = function(t) {
                    this.flushListener = t
                }, t
            }();
            var io, oo = function(t, e) {
                    var n = window.visualViewport,
                        r = {
                            layoutViewportX: t,
                            layoutViewportY: e,
                            visualViewportX: t,
                            visualViewportY: e
                        };
                    return n ? (! function() {
                        var t = window.visualViewport;
                        return Math.abs(t.pageTop - t.offsetTop - window.scrollY) > 25 || Math.abs(t.pageLeft - t.offsetLeft - window.scrollX) > 25
                    }() ? (r.visualViewportX = Math.round(t - n.offsetLeft), r.visualViewportY = Math.round(e - n.offsetTop)) : (r.layoutViewportX = Math.round(t + n.offsetLeft), r.layoutViewportY = Math.round(e + n.offsetTop)), r) : r
                },
                ao = function() {
                    var t = window.visualViewport;
                    return {
                        scale: t.scale,
                        offsetLeft: t.offsetLeft,
                        offsetTop: t.offsetTop,
                        pageLeft: t.pageLeft,
                        pageTop: t.pageTop,
                        height: t.height,
                        width: t.width
                    }
                };

            function uo() {
                var t, e = window.visualViewport;
                return t = e ? e.pageLeft - e.offsetLeft : void 0 !== window.scrollX ? window.scrollX : window.pageXOffset || 0, Math.round(t)
            }

            function so() {
                var t, e = window.visualViewport;
                return t = e ? e.pageTop - e.offsetTop : void 0 !== window.scrollY ? window.scrollY : window.pageYOffset || 0, Math.round(t)
            }
            var co = new WeakMap,
                fo = 1;

            function lo(t) {
                return co.has(t) || co.set(t, fo++), co.get(t)
            }

            function po(t) {
                var e, n, r, i, o, a, u = (e = t.mutationController, n = t.mutationCb, r = t.defaultPrivacyLevel, no(e, n, r).stop),
                    s = function(t) {
                        var e = m(f((function(e) {
                            var n = e.target;
                            if (Vi(n)) {
                                var r = Hi(e) ? e.changedTouches[0] : e,
                                    i = r.clientX,
                                    o = r.clientY,
                                    a = {
                                        id: qi(n),
                                        timeOffset: 0,
                                        x: i,
                                        y: o
                                    };
                                if (window.visualViewport) {
                                    var u = oo(i, o),
                                        s = u.visualViewportX,
                                        c = u.visualViewportY;
                                    a.x = s, a.y = c
                                }
                                t([a], Hi(e) ? vi : ci)
                            }
                        })), 50, {
                            trailing: !1
                        }).throttled;
                        return U(document, ["mousemove", "touchmove"], e, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }(t.mousemoveCb),
                    c = function(t, e) {
                        var n = function(n) {
                            var r = n.target;
                            if (Ri(r, e) !== _i.HIDDEN && Vi(r)) {
                                var i = Hi(n) ? n.changedTouches[0] : n,
                                    o = i.clientX,
                                    a = i.clientY,
                                    u = {
                                        id: qi(r),
                                        type: vo[n.type],
                                        x: o,
                                        y: a
                                    };
                                if (window.visualViewport) {
                                    var s = oo(o, a),
                                        c = s.visualViewportX,
                                        f = s.visualViewportY;
                                    u.x = c, u.y = f
                                }
                                var d = h({
                                    id: lo(n)
                                }, Gi(fi, u));
                                t(d)
                            }
                        };
                        return U(document, Object.keys(vo), n, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }(t.mouseInteractionCb, t.defaultPrivacyLevel),
                    d = function(t, e, n) {
                        var r = m(f((function(r) {
                            var i = r.target;
                            if (i && Ri(i, e) !== _i.HIDDEN && Vi(i)) {
                                var o = qi(i),
                                    a = i === document ? {
                                        scrollTop: so(),
                                        scrollLeft: uo()
                                    } : {
                                        scrollTop: Math.round(i.scrollTop),
                                        scrollLeft: Math.round(i.scrollLeft)
                                    };
                                n.set(i, a), t({
                                    id: o,
                                    x: a.scrollLeft,
                                    y: a.scrollTop
                                })
                            }
                        })), 100).throttled;
                        return D(document, "scroll", r, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }(t.scrollCb, t.defaultPrivacyLevel, t.elementsScrollPositions),
                    l = function(t) {
                        return Pe().subscribe(t).unsubscribe
                    }(t.viewportResizeCb),
                    p = function(t, e) {
                        var n = new WeakMap;

                        function r(t) {
                            var n = Ri(t, e);
                            if (n !== _i.HIDDEN) {
                                var r, o = t.type;
                                if ("radio" === o || "checkbox" === o) {
                                    if (Di(t, n)) return;
                                    r = {
                                        isChecked: t.checked
                                    }
                                } else {
                                    var a = Fi(t, n);
                                    if (void 0 === a) return;
                                    r = {
                                        text: a
                                    }
                                }
                                i(t, r);
                                var u = t.name;
                                "radio" === o && u && t.checked && zi(document.querySelectorAll('input[type="radio"][name="'.concat(u, '"]')), (function(e) {
                                    e !== t && i(e, {
                                        isChecked: !1
                                    })
                                }))
                            }
                        }

                        function i(e, r) {
                            if (Vi(e)) {
                                var i = n.get(e);
                                i && i.text === r.text && i.isChecked === r.isChecked || (n.set(e, r), t(h({
                                    id: qi(e)
                                }, r)))
                            }
                        }
                        var o = U(document, ["input", "change"], (function(t) {
                                (t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement || t.target instanceof HTMLSelectElement) && r(t.target)
                            }), {
                                capture: !0,
                                passive: !0
                            }).stop,
                            a = [en(HTMLInputElement.prototype, "value", r), en(HTMLInputElement.prototype, "checked", r), en(HTMLSelectElement.prototype, "value", r), en(HTMLTextAreaElement.prototype, "value", r), en(HTMLSelectElement.prototype, "selectedIndex", r)];
                        return function() {
                            a.forEach((function(t) {
                                return t.stop()
                            })), o()
                        }
                    }(t.inputCb, t.defaultPrivacyLevel),
                    v = function(t, e) {
                        return U(document, ["play", "pause"], (function(n) {
                            var r = n.target;
                            r && Ri(r, e) !== _i.HIDDEN && Vi(r) && t({
                                id: qi(r),
                                type: "play" === n.type ? xi : Ii
                            })
                        }), {
                            capture: !0,
                            passive: !0
                        }).stop
                    }(t.mediaInteractionCb, t.defaultPrivacyLevel),
                    g = function(t) {
                        var e = tn(CSSStyleSheet.prototype, "insertRule", {
                                before: function(e, n) {
                                    Vi(this.ownerNode) && t({
                                        id: qi(this.ownerNode),
                                        adds: [{
                                            rule: e,
                                            index: n
                                        }]
                                    })
                                }
                            }).stop,
                            n = tn(CSSStyleSheet.prototype, "deleteRule", {
                                before: function(e) {
                                    Vi(this.ownerNode) && t({
                                        id: qi(this.ownerNode),
                                        removes: [{
                                            index: e
                                        }]
                                    })
                                }
                            }).stop;
                        return function() {
                            e(), n()
                        }
                    }(t.styleSheetRuleCb),
                    y = (i = t.focusCb, U(window, ["focus", "blur"], (function() {
                        i({
                            has_focus: document.hasFocus()
                        })
                    })).stop),
                    b = function(t) {
                        if (!window.visualViewport) return T;
                        var e = m(f((function() {
                                t(ao())
                            })), 200, {
                                trailing: !1
                            }),
                            n = e.throttled,
                            r = e.cancel,
                            i = U(window.visualViewport, ["resize", "scroll"], n, {
                                capture: !0,
                                passive: !0
                            }).stop;
                        return function() {
                            i(), r()
                        }
                    }(t.visualViewportResizeCb),
                    w = (o = t.lifeCycle, a = t.frustrationCb, o.subscribe(10, (function(t) {
                        var e, n, r;
                        "action" === t.rawRumEvent.type && "click" === t.rawRumEvent.action.type && (null === (n = null === (e = t.rawRumEvent.action.frustration) || void 0 === e ? void 0 : e.type) || void 0 === n ? void 0 : n.length) && "events" in t.domainContext && (null === (r = t.domainContext.events) || void 0 === r ? void 0 : r.length) && a({
                            timestamp: t.rawRumEvent.date,
                            type: ni,
                            data: {
                                frustrationTypes: t.rawRumEvent.action.frustration.type,
                                recordIds: t.domainContext.events.map((function(t) {
                                    return lo(t)
                                }))
                            }
                        })
                    })).unsubscribe);
                return function() {
                    u(), s(), c(), d(), l(), p(), v(), g(), y(), b(), w()
                }
            }
            var vo = ((io = {}).mouseup = gi, io.mousedown = yi, io.click = bi, io.contextmenu = wi, io.dblclick = Ti, io.focus = Si, io.blur = Ci, io.touchstart = ki, io.touchend = Ei, io);

            function mo(t) {
                var e = t.emit;
                if (!e) throw new Error("emit function is required");
                var n = new ro,
                    r = function() {
                        var t = new WeakMap;
                        return {
                            set: function(e, n) {
                                (e !== document || document.scrollingElement) && t.set(e === document ? document.scrollingElement : e, n)
                            },
                            get: function(e) {
                                return t.get(e)
                            },
                            has: function(e) {
                                return t.has(e)
                            }
                        }
                    }(),
                    i = function(i, o) {
                        void 0 === i && (i = Q()), void 0 === o && (o = {
                            status: 0,
                            elementsScrollPositions: r
                        }), n.flush();
                        var a = De(),
                            u = a.width,
                            s = a.height;
                        e({
                            data: {
                                height: s,
                                href: window.location.href,
                                width: u
                            },
                            type: Zr,
                            timestamp: i
                        }), e({
                            data: {
                                has_focus: document.hasFocus()
                            },
                            type: Qr,
                            timestamp: i
                        }), e({
                            data: {
                                node: Wi(document, t.defaultPrivacyLevel, o),
                                initialOffset: {
                                    left: uo(),
                                    top: so()
                                }
                            },
                            type: Jr,
                            timestamp: i
                        }), window.visualViewport && e({
                            data: ao(),
                            type: ei,
                            timestamp: i
                        })
                    };
                return i(), {
                    stop: po({
                        lifeCycle: t.lifeCycle,
                        mutationController: n,
                        elementsScrollPositions: r,
                        defaultPrivacyLevel: t.defaultPrivacyLevel,
                        inputCb: function(t) {
                            return e(Gi(pi, t))
                        },
                        mediaInteractionCb: function(t) {
                            return e(Gi(mi, t))
                        },
                        mouseInteractionCb: function(t) {
                            return e(t)
                        },
                        mousemoveCb: function(t, n) {
                            return e(Gi(n, {
                                positions: t
                            }))
                        },
                        mutationCb: function(t) {
                            return e(Gi(si, t))
                        },
                        scrollCb: function(t) {
                            return e(Gi(di, t))
                        },
                        styleSheetRuleCb: function(t) {
                            return e(Gi(hi, t))
                        },
                        viewportResizeCb: function(t) {
                            return e(Gi(li, t))
                        },
                        frustrationCb: function(t) {
                            return e(t)
                        },
                        focusCb: function(t) {
                            return e({
                                data: t,
                                type: Qr,
                                timestamp: Q()
                            })
                        },
                        visualViewportResizeCb: function(t) {
                            e({
                                data: t,
                                type: ei,
                                timestamp: Q()
                            })
                        }
                    }),
                    takeSubsequentFullSnapshot: function(t) {
                        return i(t, {
                            status: 1,
                            elementsScrollPositions: r
                        })
                    },
                    flushMutations: function() {
                        return n.flush()
                    }
                }
            }
            var ho;

            function go(t) {
                return wo(t).segments_count
            }

            function yo(t) {
                wo(t).records_count += 1
            }

            function bo(t) {
                return null === ho || void 0 === ho ? void 0 : ho.get(t)
            }

            function wo(t) {
                var e;
                return ho || (ho = new Map), ho.has(t) ? e = ho.get(t) : (e = {
                    records_count: 0,
                    segments_count: 0,
                    segments_total_raw_size: 0
                }, ho.set(t, e), ho.size > 10 && function() {
                    if (!ho) return;
                    if (ho.keys) ho.delete(ho.keys().next().value);
                    else {
                        var t = !0;
                        ho.forEach((function(e, n) {
                            t && (ho.delete(n), t = !1)
                        }))
                    }
                }()), e
            }
            var To = 0,
                So = function() {
                    function t(t, e, n, r, i, o) {
                        var a = this;
                        this.worker = t, this.isFlushed = !1, this.id = To++;
                        var u = e.view.id;
                        this.metadata = h({
                                start: r.timestamp,
                                end: r.timestamp,
                                creation_reason: n,
                                records_count: 1,
                                has_full_snapshot: r.type === Jr,
                                index_in_view: go(u),
                                source: "browser"
                            }, e),
                            function(t) {
                                wo(t).segments_count += 1
                            }(u), yo(u);
                        var s = f((function(e) {
                            var n = e.data;
                            "errored" !== n.type && "initialized" !== n.type && (n.id === a.id ? (! function(t, e) {
                                wo(t).segments_total_raw_size += e
                            }(u, n.additionalBytesCount), "flushed" === n.type ? (o(n.result, n.rawBytesCount), t.removeEventListener("message", s)) : i(n.compressedBytesCount)) : n.id > a.id && (t.removeEventListener("message", s), re("Segment did not receive a 'flush' response before being replaced.")))
                        }));
                        t.addEventListener("message", s), this.worker.postMessage({
                            data: '{"records":['.concat(JSON.stringify(r)),
                            id: this.id,
                            action: "write"
                        })
                    }
                    return t.prototype.addRecord = function(t) {
                        var e;
                        this.metadata.start = Math.min(this.metadata.start, t.timestamp), this.metadata.end = Math.max(this.metadata.end, t.timestamp), this.metadata.records_count += 1, yo(this.metadata.view.id), (e = this.metadata).has_full_snapshot || (e.has_full_snapshot = t.type === Jr), this.worker.postMessage({
                            data: ",".concat(JSON.stringify(t)),
                            id: this.id,
                            action: "write"
                        })
                    }, t.prototype.flush = function() {
                        this.worker.postMessage({
                            data: "],".concat(JSON.stringify(this.metadata).slice(1), "\n"),
                            id: this.id,
                            action: "flush"
                        }), this.isFlushed = !0
                    }, t
                }(),
                Co = 6e4;

            function ko(t, e, n, r, i, o) {
                return function(t, e, n, r, i) {
                    void 0 === i && (i = window);
                    var o = {
                            status: 0,
                            nextSegmentCreationReason: "init"
                        },
                        a = t.subscribe(2, (function() {
                            c("view_change")
                        })).unsubscribe,
                        u = t.subscribe(9, (function() {
                            c("before_unload")
                        })).unsubscribe,
                        s = D(i, "visibilitychange", (function() {
                            "hidden" === document.visibilityState && c("visibility_hidden")
                        }), {
                            capture: !0
                        }).stop;

                    function c(t) {
                        1 === o.status && (o.segment.flush(), clearTimeout(o.expirationTimeoutId)), o = t ? {
                            status: 0,
                            nextSegmentCreationReason: t
                        } : {
                            status: 2
                        }
                    }

                    function d(t, i) {
                        var a = e();
                        if (a) {
                            var u = new So(r, a, t, i, (function(t) {
                                !u.isFlushed && t > Co && c("segment_bytes_limit")
                            }), (function(t, e) {
                                n(t, u.metadata, e)
                            }));
                            o = {
                                status: 1,
                                segment: u,
                                expirationTimeoutId: setTimeout(f((function() {
                                    c("segment_duration_limit")
                                })), 3e4)
                            }
                        }
                    }
                    return {
                        addRecord: function(t) {
                            switch (o.status) {
                                case 0:
                                    d(o.nextSegmentCreationReason, t);
                                    break;
                                case 1:
                                    o.segment.addRecord(t)
                            }
                        },
                        stop: function() {
                            c(), a(), u(), s()
                        }
                    }
                }(t, (function() {
                    return function(t, e, n) {
                        var r = e.findTrackedSession(),
                            i = n.findView();
                        if (!r || !i) return;
                        return {
                            application: {
                                id: t
                            },
                            session: {
                                id: r.id
                            },
                            view: {
                                id: i.id
                            }
                        }
                    }(e, n, r)
                }), i, o)
            }
            var Eo = n("uRZ1"),
                xo = {
                    status: 0
                };

            function Io(t, e) {
                switch (void 0 === e && (e = Eo.a), xo.status) {
                    case 0:
                        xo = {
                                status: 1,
                                callbacks: [t]
                            },
                            function(t) {
                                void 0 === t && (t = Eo.a);
                                try {
                                    var e = t();
                                    e.addEventListener("error", f(_o)), e.addEventListener("message", f((function(t) {
                                        var n, r = t.data;
                                        "errored" === r.type ? _o(r.error) : "initialized" === r.type && (n = e, 1 === xo.status && (xo.callbacks.forEach((function(t) {
                                            return t(n)
                                        })), xo = {
                                            status: 3,
                                            worker: n
                                        }))
                                    }))), e.postMessage({
                                        action: "init"
                                    })
                                } catch (n) {
                                    _o(n)
                                }
                            }(e);
                        break;
                    case 1:
                        xo.callbacks.push(t);
                        break;
                    case 2:
                        t();
                        break;
                    case 3:
                        t(xo.worker)
                }
            }

            function _o(t) {
                1 === xo.status ? (i.error("Session Replay recording failed to start: an error occurred while creating the Worker:", t), t instanceof Event || t instanceof Error && k(t.message, "Content Security Policy") ? i.error("Please make sure CSP is correctly configured https://docs.datadoghq.com/real_user_monitoring/faq/content_security_policy") : ie(t), xo.callbacks.forEach((function(t) {
                    return t()
                })), xo = {
                    status: 2
                }) : ie(t)
            }

            function Ao(t, e, n, r) {
                var i = new FormData;
                i.append("segment", new Blob([e], {
                    type: "application/octet-stream"
                }), "".concat(n.session.id, "-").concat(n.start)), No(n, (function(t, e) {
                    return i.append(t, e)
                })), i.append("raw_segment_size", r.toString()), new Wr(t, Co).send(i, e.byteLength)
            }

            function No(t, e, n) {
                void 0 === n && (n = ""), N(t).forEach((function(t) {
                    var r = t[0],
                        i = t[1];
                    "object" === typeof i && null !== i ? No(i, e, "".concat(n).concat(r, ".")) : e("".concat(n).concat(r), String(i))
                }))
            }
            var Oo = function(t, e, n) {
                var r = (void 0 === n ? {} : n).ignoreInitIfSyntheticsWillInjectRum,
                    o = void 0 === r || r,
                    a = !1,
                    u = W(),
                    s = W(),
                    l = function() {},
                    v = function() {},
                    m = new Y,
                    g = function(t, e) {
                        void 0 === e && (e = Q()), m.add((function() {
                            return g(t, e)
                        }))
                    },
                    b = function(t, e) {
                        void 0 === e && (e = et()), m.add((function() {
                            return b(t, e)
                        }))
                    },
                    w = function(t, e) {
                        void 0 === e && (e = {
                            context: u.getContext(),
                            user: s.getContext()
                        }), m.add((function() {
                            return w(t, e)
                        }))
                    },
                    T = function(t, e) {
                        void 0 === e && (e = {
                            context: u.getContext(),
                            user: s.getContext()
                        }), m.add((function() {
                            return T(t, e)
                        }))
                    };

                function S(n, r) {
                    var i = t(n, (function() {
                        return {
                            user: s.getContext(),
                            context: u.getContext(),
                            hasReplay: !!e.isRecording() || void 0
                        }
                    }), e, r);
                    b = i.startView, w = i.addAction, T = i.addError, g = i.addTiming, l = i.getInternalContext, m.drain(), e.onRumStart(i.lifeCycle, n, i.session, i.viewContexts)
                }
                var C = f((function(t) {
                    b("object" === typeof t ? t : {
                        name: t
                    })
                }));
                return function(t) {
                    var e = h({
                        version: "4.17.2",
                        onReady: function(t) {
                            t()
                        }
                    }, t);
                    return Object.defineProperty(e, "_setDebug", {
                        get: function() {
                            return c
                        },
                        enumerable: !1
                    }), e
                }({
                    init: f((function(t) {
                        if (!o || !ft()) {
                            if (lt()) t = function(t) {
                                return h({}, t, {
                                    applicationId: "00000000-aaaa-0000-aaaa-000000000000",
                                    clientToken: "empty",
                                    sampleRate: 100
                                })
                            }(t);
                            else if (! function(t) {
                                    if (! function(t) {
                                            if (void 0 === document.cookie || null === document.cookie) return !1;
                                            try {
                                                var e = "dd_cookie_test_".concat(y()),
                                                    n = "test";
                                                ut(e, n, p, t);
                                                var r = st(e) === n;
                                                return ct(e, t), r
                                            } catch (o) {
                                                return i.error(o), !1
                                            }
                                        }(Kt(t))) return i.warn("Cookies are not authorized, we will not send any data."), !1;
                                    if ("file:" === window.location.protocol) return i.error("Execution is not allowed in the current context."), !1;
                                    return !0
                                }(t)) return;
                            if (function(t) {
                                    if (a) return t.silentMultipleInit || i.error("DD_RUM is already initialized."), !1;
                                    return !0
                                }(t)) {
                                var e = function(t) {
                                    var e, n, r, o;
                                    if (t.applicationId) {
                                        var a = null !== (e = t.premiumSampleRate) && void 0 !== e ? e : t.replaySampleRate;
                                        if (void 0 === a || I(a))
                                            if (void 0 === t.tracingSampleRate || I(t.tracingSampleRate)) {
                                                if (void 0 !== t.allowedTracingOrigins) {
                                                    if (!Array.isArray(t.allowedTracingOrigins)) return void i.error("Allowed Tracing Origins should be an array");
                                                    if (0 !== t.allowedTracingOrigins.length && void 0 === t.service) return void i.error("Service need to be configured when tracing is enabled")
                                                }
                                                if (void 0 === t.excludedActivityUrls || Array.isArray(t.excludedActivityUrls)) {
                                                    var u = Yt(t);
                                                    if (u) {
                                                        var s, c, f = !!t.trackFrustrations;
                                                        return h({
                                                            applicationId: t.applicationId,
                                                            version: t.version,
                                                            actionNameAttribute: t.actionNameAttribute,
                                                            premiumSampleRate: null !== a && void 0 !== a ? a : 100,
                                                            allowedTracingOrigins: null !== (n = t.allowedTracingOrigins) && void 0 !== n ? n : [],
                                                            tracingSampleRate: null !== (r = t.tracingSampleRate) && void 0 !== r ? r : 100,
                                                            excludedActivityUrls: null !== (o = t.excludedActivityUrls) && void 0 !== o ? o : [],
                                                            trackInteractions: !!t.trackInteractions || f,
                                                            trackFrustrations: f,
                                                            trackViewsManually: !!t.trackViewsManually,
                                                            defaultPrivacyLevel: (s = Xt, c = t.defaultPrivacyLevel, Object.keys(s).some((function(t) {
                                                                return s[t] === c
                                                            })) ? t.defaultPrivacyLevel : Xt.MASK_USER_INPUT)
                                                        }, u)
                                                    }
                                                } else i.error("Excluded Activity Urls should be an array")
                                            } else i.error("Tracing Sample Rate should be a number between 0 and 100");
                                        else i.error("Premium Sample Rate should be a number between 0 and 100")
                                    } else i.error("Application ID is not configured, no RUM data will be collected.")
                                }(t);
                                if (e) {
                                    if (e.trackViewsManually) {
                                        var n = m;
                                        m = new Y, b = function(t) {
                                            S(e, t)
                                        }, n.drain()
                                    } else S(e);
                                    v = function() {
                                        return F(t)
                                    }, a = !0
                                }
                            }
                        }
                    })),
                    addRumGlobalContext: f(u.add),
                    setGlobalContextProperty: f(u.setContextProperty),
                    removeRumGlobalContext: f(u.remove),
                    removeGlobalContextProperty: f(u.removeContextProperty),
                    getRumGlobalContext: f(u.get),
                    getGlobalContext: f(u.getContext),
                    setRumGlobalContext: f(u.set),
                    setGlobalContext: f(u.setContext),
                    clearGlobalContext: f(u.clearContext),
                    getInternalContext: f((function(t) {
                        return l(t)
                    })),
                    getInitConfiguration: f((function() {
                        return v()
                    })),
                    addAction: f((function(t, e) {
                        w({
                            name: t,
                            context: F(e),
                            startClocks: et(),
                            type: "custom"
                        })
                    })),
                    addError: function(t, e) {
                        var n = Mt();
                        d((function() {
                            T({
                                error: t,
                                handlingStack: n,
                                context: F(e),
                                startClocks: et()
                            })
                        }))
                    },
                    addTiming: f((function(t, e) {
                        g(t, e)
                    })),
                    setUser: f((function(t) {
                        "object" === typeof t && t ? s.setContext(k(t)) : i.error("Unsupported user:", t)
                    })),
                    getUser: f(s.getContext),
                    setUserProperty: f((function(t, e) {
                        var n, r = k((n = {}, n[t] = e, n))[t];
                        s.setContextProperty(t, r)
                    })),
                    removeUserProperty: f(s.removeContextProperty),
                    removeUser: f(s.clearContext),
                    clearUser: f(s.clearContext),
                    startView: C,
                    startSessionReplayRecording: f(e.start),
                    stopSessionReplayRecording: f(e.stop)
                });

                function k(t) {
                    var e = h(t, {});
                    return "id" in e && (e.id = String(e.id)), "name" in e && (e.name = String(e.name)), "email" in e && (e.email = String(e.email)), e
                }
            }((function(t, e, n, r) {
                var i = new Ye,
                    o = function(t) {
                        var e = ne(t);
                        if (lt()) {
                            var n = dt();
                            e.observable.subscribe((function(t) {
                                return n.send("internal_telemetry", t)
                            }))
                        }
                        return e
                    }(t);
                o.setContextProvider((function() {
                    var e, n;
                    return {
                        application: {
                            id: t.applicationId
                        },
                        session: {
                            id: null === (e = a.findTrackedSession()) || void 0 === e ? void 0 : e.id
                        },
                        view: {
                            id: null === (n = d.findView()) || void 0 === n ? void 0 : n.id
                        },
                        action: {
                            id: v.findActionId()
                        }
                    }
                })), lt() ? function(t) {
                    var e = dt();
                    t.subscribe(11, (function(t) {
                        e.send("rum", t)
                    }))
                }(i) : Yr(t, i, o.observable);
                var a = lt() ? function() {
                        var t = {
                            id: "00000000-aaaa-0000-aaaa-000000000000",
                            hasPremiumPlan: !0,
                            hasLitePlan: !1
                        };
                        return {
                            findTrackedSession: function() {
                                return t
                            }
                        }
                    }() : Fr(t, i),
                    u = function() {
                        var t = ue(),
                            e = new Jt((function() {
                                if (t) {
                                    var n = new t(f((function() {
                                        return e.notify()
                                    })));
                                    return n.observe(document, {
                                            attributes: !0,
                                            characterData: !0,
                                            childList: !0,
                                            subtree: !0
                                        }),
                                        function() {
                                            return n.disconnect()
                                        }
                                }
                            }));
                        return e
                    }(),
                    s = Kr(location),
                    c = function(t, e, n, r, i, o, a) {
                        var u = function(t) {
                                var e = new Ze(144e5);
                                return t.subscribe(2, (function(t) {
                                    e.add(function(t) {
                                        return {
                                            service: t.service,
                                            version: t.version,
                                            id: t.id,
                                            name: t.name
                                        }
                                    }(t), t.startClocks.relative)
                                })), t.subscribe(4, (function(t) {
                                    var n = t.endClocks;
                                    e.closeActive(n.relative)
                                })), t.subscribe(8, (function() {
                                    e.reset()
                                })), {
                                    findView: function(t) {
                                        return e.find(t)
                                    },
                                    stop: function() {
                                        e.stop()
                                    }
                                }
                            }(t),
                            s = function(t, e, n) {
                                var r, i = new Ze(144e5);
                                t.subscribe(4, (function(t) {
                                    var e = t.endClocks;
                                    i.closeActive(e.relative)
                                })), t.subscribe(2, (function(t) {
                                    var e = t.startClocks,
                                        o = n.href;
                                    i.add(a({
                                        url: o,
                                        referrer: r || document.referrer
                                    }), e.relative), r = o
                                }));
                                var o = e.subscribe((function(t) {
                                    var e = t.newLocation,
                                        n = i.find();
                                    if (n) {
                                        var r = tt();
                                        i.closeActive(r), i.add(a({
                                            url: e.href,
                                            referrer: n.referrer
                                        }), r)
                                    }
                                }));

                                function a(t) {
                                    return {
                                        url: t.url,
                                        referrer: t.referrer
                                    }
                                }
                                return {
                                    findUrl: function(t) {
                                        return i.find(t)
                                    },
                                    stop: function() {
                                        o.unsubscribe(), i.stop()
                                    }
                                }
                            }(t, i, n),
                            c = Fe(),
                            f = function(t, e, n, r) {
                                t.subscribe(1, (function(e) {
                                    return t.notify(10, $n(e, r))
                                }));
                                var i = {
                                    findActionId: T
                                };
                                return n.trackInteractions && (i = Kn(t, e, n).actionContexts), {
                                    addAction: function(e, n) {
                                        t.notify(10, h({
                                            savedCommonContext: n
                                        }, $n(e, r)))
                                    },
                                    actionContexts: i
                                }
                            }(t, o, e, c),
                            d = f.addAction,
                            l = f.actionContexts;
                        return Ve(e, t, r, u, s, l, a), {
                            viewContexts: u,
                            foregroundContexts: c,
                            urlContexts: s,
                            addAction: d,
                            actionContexts: l,
                            stop: function() {
                                u.stop(), c.stop()
                            }
                        }
                    }(i, t, location, a, s, u, e),
                    d = c.viewContexts,
                    l = c.foregroundContexts,
                    p = c.urlContexts,
                    v = c.actionContexts,
                    m = c.addAction;
                ! function(t, e) {
                    t.subscribe(0, (function(n) {
                        for (var r = 0, i = n; r < i.length; r++) {
                            var o = i[r];
                            if ("longtask" !== o.entryType) break;
                            var a = e.findTrackedSession(o.startTime);
                            if (!a || a.hasLitePlan) break;
                            var u = K(o.startTime),
                                s = {
                                    date: u.timeStamp,
                                    long_task: {
                                        id: y(),
                                        duration: $(o.duration)
                                    },
                                    type: "long_task"
                                };
                            t.notify(10, {
                                rawRumEvent: s,
                                startTime: u.relative,
                                domainContext: {
                                    performanceEntry: o.toJSON()
                                }
                            })
                        }
                    }))
                }(i, a), pr(i);
                var g = kr(i, t, location, u, s, l, n, r),
                    b = g.addTiming,
                    w = g.startView,
                    S = fr(i, l).addError;
                gn(i, t, a), Ie(i, t);
                var C = function(t, e, n, r, i) {
                    return {
                        get: function(o) {
                            var a = n.findView(o),
                                u = i.findUrl(o),
                                s = e.findTrackedSession(o);
                            if (s && a && u) {
                                var c = r.findActionId(o);
                                return {
                                    application_id: t,
                                    session_id: s.id,
                                    user_action: c ? {
                                        id: c
                                    } : void 0,
                                    view: {
                                        id: a.id,
                                        name: a.name,
                                        referrer: u.referrer,
                                        url: u.url
                                    }
                                }
                            }
                        }
                    }
                }(t.applicationId, a, d, v, p);
                return {
                    addAction: m,
                    addError: S,
                    addTiming: b,
                    startView: w,
                    lifeCycle: i,
                    viewContexts: d,
                    session: a,
                    getInternalContext: C.get
                }
            }), function(t, e) {
                if (void 0 === e && (e = Io), lt()) return {
                    start: T,
                    stop: T,
                    getReplayStats: function() {},
                    onRumStart: T,
                    isRecording: function() {
                        return !1
                    }
                };
                var n = {
                        status: 0
                    },
                    r = function() {
                        n = {
                            status: 1
                        }
                    },
                    i = function() {
                        n = {
                            status: 0
                        }
                    };
                return {
                    start: function() {
                        return r()
                    },
                    stop: function() {
                        return i()
                    },
                    getReplayStats: bo,
                    onRumStart: function(o, a, u, s) {
                        o.subscribe(7, (function() {
                            2 !== n.status && 3 !== n.status || (i(), n = {
                                status: 1
                            })
                        })), o.subscribe(8, (function() {
                            1 === n.status && r()
                        })), r = function() {
                            var r = u.findTrackedSession();
                            r && r.hasPremiumPlan ? 2 !== n.status && 3 !== n.status && (n = {
                                status: 2
                            }, j("interactive", (function() {
                                2 === n.status && e((function(e) {
                                    if (2 === n.status)
                                        if (e) {
                                            var r = t(o, a, u, s, e).stop;
                                            n = {
                                                status: 3,
                                                stopRecording: r
                                            }
                                        } else n = {
                                            status: 0
                                        }
                                }))
                            }))) : n = {
                                status: 1
                            }
                        }, i = function() {
                            0 !== n.status && (3 === n.status && n.stopRecording(), n = {
                                status: 0
                            })
                        }, 1 === n.status && r()
                    },
                    isRecording: function() {
                        return 3 === n.status
                    }
                }
            }((function(t, e, n, r, i) {
                var o = ko(t, e.applicationId, n, r, (function(t, n, r) {
                        return Ao(e.sessionReplayEndpointBuilder, t, n, r)
                    }), i),
                    a = o.addRecord,
                    u = o.stop,
                    s = mo({
                        emit: a,
                        defaultPrivacyLevel: e.defaultPrivacyLevel,
                        lifeCycle: t
                    }),
                    c = s.stop,
                    f = s.takeSubsequentFullSnapshot,
                    d = s.flushMutations,
                    l = t.subscribe(4, (function() {
                        d(), a({
                            timestamp: Q(),
                            type: ti
                        })
                    })).unsubscribe,
                    p = t.subscribe(2, (function(t) {
                        f(t.startClocks.timeStamp)
                    })).unsubscribe;
                return {
                    stop: function() {
                        l(), p(), c(), u()
                    }
                }
            })));
            ! function(t, e, n) {
                var r = t[e];
                t[e] = n, r && r.q && r.q.forEach((function(t) {
                    return o(t, "onReady callback threw an error:")()
                }))
            }(L(), "DD_RUM", Oo)
        }
    }
]);
//# sourceMappingURL=137.2fd429cadc99529669a8.js.map