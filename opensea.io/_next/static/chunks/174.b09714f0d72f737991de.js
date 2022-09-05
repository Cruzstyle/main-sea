(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [174], {
        "6FA4": function(e, t, n) {
            (function(t, n, i) {
                var o;
                o = function() {
                    "use strict";

                    function e(t) {
                        return (e = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(t)
                    }

                    function o(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function r(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    function s(e, t, n) {
                        return t && r(e.prototype, t), n && r(e, n), e
                    }

                    function a(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }

                    function u(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            })))), i.forEach((function(t) {
                                a(e, t, n[t])
                            }))
                        }
                        return e
                    }

                    function c(e) {
                        return function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n
                            }
                        }(e) || function(e) {
                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                    }
                    var p, l, d, h;

                    function f() {
                        return "object" === typeof window && void 0 !== (null === window || void 0 === window ? void 0 : window.document)
                    }! function(e) {
                        e.IDENTIFY = "$identify"
                    }(p || (p = {})),
                    function(e) {
                        e.SET = "$set", e.SET_ONCE = "$setOnce", e.ADD = "$add", e.APPEND = "$append", e.PREPEND = "$prepend", e.REMOVE = "$remove", e.PREINSERT = "$preinsert", e.POSTINSERT = "$postinsert", e.UNSET = "$unset", e.CLEAR_ALL = "$clearAll"
                    }(l || (l = {})),
                    function(e) {
                        e[e.None = 0] = "None", e[e.Error = 1] = "Error", e[e.Warn = 2] = "Warn", e[e.Verbose = 3] = "Verbose"
                    }(d || (d = {})),
                    function(e) {
                        e.Unknown = "unknown", e.Skipped = "skipped", e.Success = "success", e.RateLimit = "rate_limit", e.PayloadTooLarge = "payload_too_large", e.Invalid = "invalid", e.Failed = "failed"
                    }(h || (h = {})),
                    function(e) {
                        e.fromHttpCode = function(t) {
                            return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : 413 === t ? e.PayloadTooLarge : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown
                        }
                    }(h || (h = {})), h.Skipped;
                    var v = {},
                        g = function() {
                            return function() {
                                var e;
                                return "object" === typeof t && void 0 !== (null === (e = null === t || void 0 === t ? void 0 : t.versions) || void 0 === e ? void 0 : e.node)
                            }() ? n : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : v
                        },
                        y = function() {
                            var e = g();
                            return e.__AMPLITUDE__ = e.__AMPLITUDE__ || {}, e.__AMPLITUDE__
                        }(),
                        m = "Amplitude Logger ",
                        b = function() {
                            function e() {
                                this._logLevel = 0
                            }
                            return e.prototype.disable = function() {
                                this._logLevel = 0
                            }, e.prototype.enable = function(e) {
                                void 0 === e && (e = d.Warn), this._logLevel = e
                            }, e.prototype.log = function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this._logLevel < d.Verbose || n.console.log(m + "[Log]: " + e.join(" "))
                            }, e.prototype.warn = function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this._logLevel < d.Warn || n.console.warn(m + "[Warn]: " + e.join(" "))
                            }, e.prototype.error = function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                this._logLevel < d.Error || n.console.error(m + "[Error]: " + e.join(" "))
                            }, e
                        }(),
                        w = (y.logger || (y.logger = new b), "$default_instance"),
                        _ = 2,
                        I = 4096,
                        S = 1e3,
                        k = "$identify",
                        E = "$groupidentify",
                        O = "api.amplitude.com",
                        x = "api.eu.amplitude.com",
                        N = "regionconfig.amplitude.com",
                        C = "regionconfig.eu.amplitude.com",
                        A = 0,
                        P = 1,
                        T = 2,
                        j = 3,
                        q = 4,
                        R = 5,
                        D = 6,
                        U = 7,
                        K = "amp_cookie_test",
                        L = "amp",
                        z = "",
                        F = "cookies",
                        M = "none",
                        $ = "localStorage",
                        W = "sessionStorage",
                        G = "revenue_amount",
                        V = "$productId",
                        B = "$quantity",
                        J = "$price",
                        H = "$revenueType",
                        Q = "amp_device_id",
                        X = "referrer",
                        Z = "utm_source",
                        Y = "utm_medium",
                        ee = "utm_campaign",
                        te = "utm_term",
                        ne = "utm_content",
                        ie = "[Amplitude] Attribution Captured",
                        oe = "http",
                        re = "beacon",
                        se = function(e) {
                            for (var t = "", n = 0; n < e.length; n++) {
                                var i = e.charCodeAt(n);
                                i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192), t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128))
                            }
                            return t
                        },
                        ae = function(e) {
                            for (var t = "", n = 0, i = 0, o = 0, r = 0; n < e.length;)(i = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(i), n++) : i > 191 && i < 224 ? (o = e.charCodeAt(n + 1), t += String.fromCharCode((31 & i) << 6 | 63 & o), n += 2) : (o = e.charCodeAt(n + 1), r = e.charCodeAt(n + 2), t += String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & r), n += 3);
                            return t
                        },
                        ue = {
                            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            encode: function(e) {
                                try {
                                    if (window.btoa && window.atob) return window.btoa(unescape(encodeURIComponent(e)))
                                } catch (t) {}
                                return ue._encode(e)
                            },
                            _encode: function(e) {
                                var t, n, i, o, r, s, a, u = "",
                                    c = 0;
                                for (e = se(e); c < e.length;) o = (t = e.charCodeAt(c++)) >> 2, r = (3 & t) << 4 | (n = e.charCodeAt(c++)) >> 4, s = (15 & n) << 2 | (i = e.charCodeAt(c++)) >> 6, a = 63 & i, isNaN(n) ? s = a = 64 : isNaN(i) && (a = 64), u = u + ue._keyStr.charAt(o) + ue._keyStr.charAt(r) + ue._keyStr.charAt(s) + ue._keyStr.charAt(a);
                                return u
                            },
                            decode: function(e) {
                                try {
                                    if (window.btoa && window.atob) return decodeURIComponent(escape(window.atob(e)))
                                } catch (t) {}
                                return ue._decode(e)
                            },
                            _decode: function(e) {
                                var t, n, i, o, r, s, a = "",
                                    u = 0;
                                for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); u < e.length;) t = ue._keyStr.indexOf(e.charAt(u++)) << 2 | (o = ue._keyStr.indexOf(e.charAt(u++))) >> 4, n = (15 & o) << 4 | (r = ue._keyStr.indexOf(e.charAt(u++))) >> 2, i = (3 & r) << 6 | (s = ue._keyStr.indexOf(e.charAt(u++))), a += String.fromCharCode(t), 64 !== r && (a += String.fromCharCode(n)), 64 !== s && (a += String.fromCharCode(i));
                                return a = ae(a)
                            }
                        },
                        ce = Object.prototype.toString;

                    function pe(t) {
                        switch (ce.call(t)) {
                            case "[object Date]":
                                return "date";
                            case "[object RegExp]":
                                return "regexp";
                            case "[object Arguments]":
                                return "arguments";
                            case "[object Array]":
                                return "array";
                            case "[object Error]":
                                return "error"
                        }
                        return null === t ? "null" : void 0 === t ? "undefined" : t !== t ? "nan" : t && 1 === t.nodeType ? "element" : "undefined" !== typeof i && "function" === typeof i.isBuffer && i.isBuffer(t) ? "buffer" : e(t = t.valueOf ? t.valueOf() : Object.prototype.valueOf.apply(t))
                    }
                    var le, de = {
                            DISABLE: 0,
                            ERROR: 1,
                            WARN: 2,
                            INFO: 3
                        },
                        he = de.WARN,
                        fe = {
                            error: function(e) {
                                he >= de.ERROR && ve(e)
                            },
                            warn: function(e) {
                                he >= de.WARN && ve(e)
                            },
                            info: function(e) {
                                he >= de.INFO && ve(e)
                            }
                        },
                        ve = function(e) {
                            try {
                                console.log("[Amplitude] " + e)
                            } catch (t) {}
                        },
                        ge = function(e) {
                            return "string" === pe(e) && e.length > I ? e.substring(0, I) : e
                        },
                        ye = function(e, t, n) {
                            return pe(e) === n || (fe.error("Invalid " + t + " input type. Expected " + n + " but received " + pe(e)), !1)
                        },
                        me = function(e) {
                            var t = pe(e);
                            if ("object" !== t) return fe.error("Error: invalid properties format. Expecting Javascript object, received " + t + ", ignoring"), {};
                            if (Object.keys(e).length > S) return fe.error("Error: too many properties (more than 1000), ignoring"), {};
                            var n = {};
                            for (var i in e)
                                if (Object.prototype.hasOwnProperty.call(e, i)) {
                                    var o = i,
                                        r = pe(o);
                                    "string" !== r && (o = String(o), fe.warn("WARNING: Non-string property key, received type " + r + ', coercing to string "' + o + '"'));
                                    var s = we(o, e[i]);
                                    null !== s && (n[o] = s)
                                }
                            return n
                        },
                        be = ["nan", "function", "arguments", "regexp", "element"],
                        we = function e(t, n) {
                            var i = pe(n);
                            if (-1 !== be.indexOf(i)) fe.warn('WARNING: Property key "' + t + '" with invalid value type ' + i + ", ignoring"), n = null;
                            else if ("undefined" === i) n = null;
                            else if ("error" === i) n = String(n), fe.warn('WARNING: Property key "' + t + '" with value type error, coercing to ' + n);
                            else if ("array" === i) {
                                for (var o = [], r = 0; r < n.length; r++) {
                                    var s = n[r],
                                        a = pe(s);
                                    "array" !== a ? "object" === a ? o.push(me(s)) : o.push(e(t, s)) : fe.warn("WARNING: Cannot have " + a + " nested in an array property value, skipping")
                                }
                                n = o
                            } else "object" === i && (n = me(n));
                            return n
                        },
                        _e = function(e, t) {
                            var n = pe(t);
                            if ("string" === n) return t;
                            if ("date" === n || "number" === n || "boolean" === n) return t = String(t), fe.warn("WARNING: Non-string groupName, received type " + n + ', coercing to string "' + t + '"'), t;
                            if ("array" === n) {
                                for (var i = [], o = 0; o < t.length; o++) {
                                    var r = t[o],
                                        s = pe(r);
                                    "array" !== s && "object" !== s ? "string" === s ? i.push(r) : "date" !== s && "number" !== s && "boolean" !== s || (r = String(r), fe.warn("WARNING: Non-string groupName, received type " + s + ', coercing to string "' + r + '"'), i.push(r)) : fe.warn("WARNING: Skipping nested " + s + " in array groupName")
                                }
                                return i
                            }
                            fe.warn("WARNING: Non-string groupName, received type " + n + ". Please use strings or array of strings for groupName")
                        },
                        Ie = function(e) {
                            Object.prototype.hasOwnProperty.call(de, e) && (he = de[e])
                        },
                        Se = fe,
                        ke = function(e) {
                            return !e || 0 === e.length
                        },
                        Ee = function(e, t) {
                            e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                            var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                            return null === n ? void 0 : decodeURIComponent(n[1].replace(/\+/g, " "))
                        },
                        Oe = function e(t) {
                            if ("array" === pe(t))
                                for (var n = 0; n < t.length; n++) t[n] = e(t[n]);
                            else if ("object" === pe(t))
                                for (var i in t) i in t && (t[i] = e(t[i]));
                            else t = ge(t);
                            return t
                        },
                        xe = function(e) {
                            var t = pe(e);
                            if ("object" !== t) return fe.error("Error: invalid groups format. Expecting Javascript object, received " + t + ", ignoring"), {};
                            var n = {};
                            for (var i in e)
                                if (Object.prototype.hasOwnProperty.call(e, i)) {
                                    var o = i,
                                        r = pe(o);
                                    "string" !== r && (o = String(o), fe.warn("WARNING: Non-string groupType, received type " + r + ', coercing to string "' + o + '"'));
                                    var s = _e(o, e[i]);
                                    null !== s && (n[o] = s)
                                }
                            return n
                        },
                        Ne = ye,
                        Ce = me,
                        Ae = function(e) {
                            return !!ye(e, "deviceId", "string") && (!e.includes(".") || (fe.error("Device IDs may not contain '.' characters. Value will be ignored: \"".concat(e, '"')), !1))
                        },
                        Pe = function(e) {
                            return !!ye(e, "transport", "string") && (e !== oe && e !== re ? (fe.error("transport value must be one of '".concat(re, "' or '").concat(oe, "'")), !1) : !(e !== oe && !navigator.sendBeacon) || (fe.error("browser does not support sendBeacon, so transport must be HTTP"), !1))
                        },
                        Te = function() {
                            return window.location
                        },
                        je = function() {
                            for (var e = "", t = 0; t < 22; ++t) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Math.floor(64 * Math.random()));
                            return e
                        },
                        qe = function(e) {
                            try {
                                for (var t = document.cookie.split(";"), n = null, i = 0; i < t.length; i++) {
                                    for (var o = t[i];
                                        " " === o.charAt(0);) o = o.substring(1, o.length);
                                    if (0 === o.indexOf(e)) {
                                        n = o.substring(e.length, o.length);
                                        break
                                    }
                                }
                                return n
                            } catch (r) {
                                return null
                            }
                        },
                        Re = function(e, t, n) {
                            var i = null !== t ? n.expirationDays : -1;
                            if (i) {
                                var o = new Date;
                                o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3), i = o
                            }
                            var r = e + "=" + t;
                            i && (r += "; expires=" + i.toUTCString()), r += "; path=/", n.domain && (r += "; domain=" + n.domain), n.secure && (r += "; Secure"), n.sameSite && (r += "; SameSite=" + n.sameSite), document.cookie = r
                        },
                        De = function() {
                            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                n = t.split(".")[q];
                            return n && (e = parseInt(n, 32)), e || (Se.warn("unable to parse malformed cookie: ".concat(t)), 0)
                        },
                        Ue = Re,
                        Ke = qe,
                        Le = function(e) {
                            try {
                                var t = document.cookie.split(";").map((function(e) {
                                        return e.trimStart()
                                    })),
                                    n = [],
                                    i = !0,
                                    o = !1,
                                    r = void 0;
                                try {
                                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done); i = !0) {
                                        for (var u = s.value;
                                            " " === u.charAt(0);) u = u.substring(1);
                                        0 === u.indexOf(e) && n.push(u.substring(e.length))
                                    }
                                } catch (c) {
                                    o = !0, r = c
                                } finally {
                                    try {
                                        i || null == a.return || a.return()
                                    } finally {
                                        if (o) throw r
                                    }
                                }
                                return n
                            } catch (p) {
                                return []
                            }
                        },
                        ze = function(e) {
                            return c(e).sort((function(e, t) {
                                var n = De(e);
                                return De(t) - n
                            }))
                        },
                        Fe = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = K + je(),
                                n = !1;
                            try {
                                var i = String(new Date);
                                Re(t, i, e), Se.info("Testing if cookies available"), n = qe(t + "=") === i
                            } catch (o) {
                                Se.warn('Error thrown when checking for cookies. Reason: "'.concat(o, '"'))
                            } finally {
                                Se.info("Cleaning up cookies availability test"), Re(t, null, e)
                            }
                            return n
                        },
                        Me = function(e) {
                            var t = document.createElement("a");
                            return t.href = e, t.hostname || location.hostname
                        },
                        $e = function(e) {
                            for (var t = Me(e).split("."), n = [], i = "_tldtest_" + je(), o = t.length - 2; o >= 0; --o) n.push(t.slice(o).join("."));
                            for (var r = 0; r < n.length; ++r) {
                                var s = n[r],
                                    a = {
                                        domain: "." + s
                                    };
                                if (Ue(i, 1, a), Ke(i)) return Ue(i, null, a), s
                            }
                            return ""
                        },
                        We = {
                            expirationDays: void 0,
                            domain: void 0
                        },
                        Ge = function(e) {
                            var t = "";
                            return We.domain && (t = "." === We.domain.charAt(0) ? We.domain.substring(1) : We.domain), e + t
                        },
                        Ve = function(e) {
                            var t = Ge(e) + "=",
                                n = Ke(t);
                            try {
                                if (n) return JSON.parse(ue.decode(n))
                            } catch (i) {
                                return null
                            }
                            return null
                        },
                        Be = function(e, t) {
                            try {
                                return Ue(Ge(e), ue.encode(JSON.stringify(t)), We), !0
                            } catch (n) {
                                return !1
                            }
                        },
                        Je = function(e) {
                            try {
                                return Ue(Ge(e), null, We), !0
                            } catch (t) {
                                return !1
                            }
                        },
                        He = {
                            reset: function() {
                                We = {
                                    expirationDays: void 0,
                                    domain: void 0
                                }
                            },
                            options: function(e) {
                                if (0 === arguments.length) return We;
                                e = e || {}, We.expirationDays = e.expirationDays, We.secure = e.secure, We.sameSite = e.sameSite;
                                var t = ke(e.domain) ? "." + $e(Te().href) : e.domain,
                                    n = Math.random();
                                We.domain = t, Be("amplitude_test", n);
                                var i = Ve("amplitude_test");
                                return i && i === n || (t = null), Je("amplitude_test"), We.domain = t, We
                            },
                            get: Ve,
                            set: Be,
                            remove: Je,
                            setRaw: function(e, t) {
                                try {
                                    return Ue(Ge(e), t, We), !0
                                } catch (n) {
                                    return !1
                                }
                            },
                            getRaw: function(e) {
                                var t = Ge(e) + "=";
                                return Ke(t)
                            }
                        };
                    if (function() {
                            var e, t = new Date;
                            try {
                                return window.localStorage.setItem(t, t), e = window.localStorage.getItem(t) === String(t), window.localStorage.removeItem(t), e
                            } catch (n) {}
                            return !1
                        }()) le = window.localStorage;
                    else if ("undefined" !== typeof window && window.globalStorage) try {
                        le = window.globalStorage[window.location.hostname]
                    } catch (Wt) {} else if ("undefined" !== typeof document) {
                        var Qe = document.createElement("div"),
                            Xe = "localStorage";
                        Qe.style.display = "none", document.getElementsByTagName("head")[0].appendChild(Qe), Qe.addBehavior && (Qe.addBehavior("#default#userdata"), le = {
                            length: 0,
                            setItem: function(e, t) {
                                Qe.load(Xe), Qe.getAttribute(e) || this.length++, Qe.setAttribute(e, t), Qe.save(Xe)
                            },
                            getItem: function(e) {
                                return Qe.load(Xe), Qe.getAttribute(e)
                            },
                            removeItem: function(e) {
                                Qe.load(Xe), Qe.getAttribute(e) && this.length--, Qe.removeAttribute(e), Qe.save(Xe)
                            },
                            clear: function() {
                                Qe.load(Xe);
                                for (var e, t = 0; e = Qe.XMLDocument.documentElement.attributes[t++];) Qe.removeAttribute(e.name);
                                Qe.save(Xe), this.length = 0
                            },
                            key: function(e) {
                                return Qe.load(Xe), Qe.XMLDocument.documentElement.attributes[e]
                            }
                        }, Qe.load(Xe), le.length = Qe.XMLDocument.documentElement.attributes.length)
                    }
                    le || (le = {
                        length: 0,
                        setItem: function(e, t) {},
                        getItem: function(e) {},
                        removeItem: function(e) {},
                        clear: function() {},
                        key: function(e) {}
                    });
                    var Ze, Ye = le,
                        et = function() {
                            this.storage = null
                        };
                    et.prototype.getStorage = function() {
                        if (null !== this.storage) return this.storage;
                        if (Fe()) this.storage = He;
                        else {
                            var e = "amp_cookiestore_";
                            this.storage = {
                                _options: {
                                    expirationDays: void 0,
                                    domain: void 0,
                                    secure: !1
                                },
                                reset: function() {
                                    this._options = {
                                        expirationDays: void 0,
                                        domain: void 0,
                                        secure: !1
                                    }
                                },
                                options: function(e) {
                                    return 0 === arguments.length ? this._options : (e = e || {}, this._options.expirationDays = e.expirationDays || this._options.expirationDays, this._options.domain = e.domain || this._options.domain || window && window.location && window.location.hostname, this._options.secure = e.secure || !1)
                                },
                                get: function(t) {
                                    try {
                                        return JSON.parse(Ye.getItem(e + t))
                                    } catch (Wt) {}
                                    return null
                                },
                                set: function(t, n) {
                                    try {
                                        return Ye.setItem(e + t, JSON.stringify(n)), !0
                                    } catch (Wt) {}
                                    return !1
                                },
                                remove: function(t) {
                                    try {
                                        Ye.removeItem(e + t)
                                    } catch (Wt) {
                                        return !1
                                    }
                                }
                            }
                        }
                        return this.storage
                    };
                    var tt = (a(Ze = {}, F, !0), a(Ze, M, !0), a(Ze, $, !0), a(Ze, W, !0), Ze),
                        nt = function() {
                            function e(t) {
                                var n = t.storageKey,
                                    i = t.disableCookies,
                                    r = t.domain,
                                    s = t.secure,
                                    a = t.sameSite,
                                    u = t.expirationDays,
                                    c = t.storage;
                                o(this, e), this.storageKey = n, this.domain = r, this.secure = s, this.sameSite = a, this.expirationDays = u, this.cookieDomain = "";
                                var p = $e(Te().href);
                                if (this.cookieDomain = r || (p ? "." + p : null), tt[c]) this.storage = c;
                                else {
                                    var l = i || !Fe({
                                        domain: this.cookieDomain,
                                        secure: this.secure,
                                        sameSite: this.sameSite,
                                        expirationDays: this.expirationDays
                                    });
                                    this.storage = l ? $ : F
                                }
                            }
                            return s(e, [{
                                key: "getCookieStorageKey",
                                value: function() {
                                    if (!this.domain) return this.storageKey;
                                    var e = "." === this.domain.charAt(0) ? this.domain.substring(1) : this.domain;
                                    return "".concat(this.storageKey).concat(e ? "_".concat(e) : "")
                                }
                            }, {
                                key: "save",
                                value: function(e) {
                                    var t = e.deviceId,
                                        n = e.userId,
                                        i = e.optOut,
                                        o = e.sessionId,
                                        r = e.lastEventTime,
                                        s = e.eventId,
                                        a = e.identifyId,
                                        u = e.sequenceNumber;
                                    if (this.storage !== M) {
                                        var c = [t, ue.encode(n || ""), i ? "1" : "", o ? o.toString(32) : "0", r ? r.toString(32) : "0", s ? s.toString(32) : "0", a ? a.toString(32) : "0", u ? u.toString(32) : "0"].join(".");
                                        switch (this.storage) {
                                            case W:
                                                window.sessionStorage && window.sessionStorage.setItem(this.storageKey, c);
                                                break;
                                            case $:
                                                Ye.setItem(this.storageKey, c);
                                                break;
                                            case F:
                                                this.saveCookie(c)
                                        }
                                    }
                                }
                            }, {
                                key: "saveCookie",
                                value: function(e) {
                                    Ue(this.getCookieStorageKey(), e, {
                                        domain: this.cookieDomain,
                                        secure: this.secure,
                                        sameSite: this.sameSite,
                                        expirationDays: this.expirationDays
                                    })
                                }
                            }, {
                                key: "load",
                                value: function() {
                                    var e, t = this;
                                    if (this.storage === F) {
                                        var n = this.getCookieStorageKey() + "=",
                                            i = Le(n);
                                        if (0 === i.length || 1 === i.length) e = i[0];
                                        else {
                                            var o = ze(i)[0];
                                            i.forEach((function() {
                                                return Ue(t.getCookieStorageKey(), null, {})
                                            })), this.saveCookie(o), e = Ke(n)
                                        }
                                    }
                                    if (e || (e = Ye.getItem(this.storageKey)), !e) try {
                                        e = window.sessionStorage && window.sessionStorage.getItem(this.storageKey)
                                    } catch (Wt) {
                                        Se.info('window.sessionStorage unavailable. Reason: "'.concat(Wt, '"'))
                                    }
                                    if (!e) return null;
                                    var r = e.split("."),
                                        s = null;
                                    if (r[P]) try {
                                        s = ue.decode(r[P])
                                    } catch (Wt) {
                                        s = null
                                    }
                                    return {
                                        deviceId: r[A],
                                        userId: s,
                                        optOut: "1" === r[T],
                                        sessionId: parseInt(r[j], 32),
                                        lastEventTime: parseInt(r[q], 32),
                                        eventId: parseInt(r[R], 32),
                                        identifyId: parseInt(r[D], 32),
                                        sequenceNumber: parseInt(r[U], 32)
                                    }
                                }
                            }, {
                                key: "clear",
                                value: function() {
                                    var e;
                                    if (this.storage === F && (e = Ke(this.getCookieStorageKey() + "="), Ue(this.getCookieStorageKey(), null, {
                                            domain: this.cookieDomain,
                                            secure: this.secure,
                                            sameSite: this.sameSite,
                                            expirationDays: 0
                                        })), e || (e = Ye.getItem(this.storageKey), Ye.clear()), !e) try {
                                        e = window.sessionStorage && window.sessionStorage.getItem(this.storageKey), window.sessionStorage.clear()
                                    } catch (Wt) {
                                        Se.info('window.sessionStorage unavailable. Reason: "'.concat(Wt, '"'))
                                    }
                                    return !!e
                                }
                            }]), e
                        }(),
                        it = "$clearAll",
                        ot = function() {
                            this.userPropertiesOperations = {}, this.properties = []
                        };
                    ot.prototype.add = function(e, t) {
                        return "number" === pe(t) || "string" === pe(t) ? this._addOperation("$add", e, t) : Se.error("Unsupported type for value: " + pe(t) + ", expecting number or string"), this
                    }, ot.prototype.append = function(e, t) {
                        return this._addOperation("$append", e, t), this
                    }, ot.prototype.clearAll = function() {
                        return Object.keys(this.userPropertiesOperations).length > 0 ? (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, it) || Se.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"), this) : (this.userPropertiesOperations.$clearAll = "-", this)
                    }, ot.prototype.prepend = function(e, t) {
                        return this._addOperation("$prepend", e, t), this
                    }, ot.prototype.set = function(e, t) {
                        return this._addOperation("$set", e, t), this
                    }, ot.prototype.setOnce = function(e, t) {
                        return this._addOperation("$setOnce", e, t), this
                    }, ot.prototype.unset = function(e) {
                        return this._addOperation("$unset", e, "-"), this
                    }, ot.prototype.preInsert = function(e, t) {
                        return this._addOperation("$preInsert", e, t), this
                    }, ot.prototype.postInsert = function(e, t) {
                        return this._addOperation("$postInsert", e, t), this
                    }, ot.prototype.remove = function(e, t) {
                        return this._addOperation("$remove", e, t), this
                    }, ot.prototype._addOperation = function(e, t, n) {
                        Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, it) ? Se.error("This identify already contains a $clearAll operation, skipping operation " + e) : -1 === this.properties.indexOf(t) ? (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, e) || (this.userPropertiesOperations[e] = {}), this.userPropertiesOperations[e][t] = n, this.properties.push(t)) : Se.error('User property "' + t + '" already used in this identify, skipping operation ' + e)
                    };
                    var rt = "undefined" !== typeof window ? window : "undefined" !== typeof n ? n : "undefined" !== typeof self ? self : {};

                    function st(e, t) {
                        return e(t = {
                            exports: {}
                        }, t.exports), t.exports
                    }
                    var at = st((function(e) {
                            ! function(t) {
                                function n(e, t) {
                                    var n = (65535 & e) + (65535 & t);
                                    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                                }

                                function i(e, t, i, o, r, s) {
                                    return n((a = n(n(t, e), n(o, s))) << (u = r) | a >>> 32 - u, i);
                                    var a, u
                                }

                                function o(e, t, n, o, r, s, a) {
                                    return i(t & n | ~t & o, e, t, r, s, a)
                                }

                                function r(e, t, n, o, r, s, a) {
                                    return i(t & o | n & ~o, e, t, r, s, a)
                                }

                                function s(e, t, n, o, r, s, a) {
                                    return i(t ^ n ^ o, e, t, r, s, a)
                                }

                                function a(e, t, n, o, r, s, a) {
                                    return i(n ^ (t | ~o), e, t, r, s, a)
                                }

                                function u(e, t) {
                                    var i, u, c, p, l;
                                    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                                    var d = 1732584193,
                                        h = -271733879,
                                        f = -1732584194,
                                        v = 271733878;
                                    for (i = 0; i < e.length; i += 16) u = d, c = h, p = f, l = v, d = o(d, h, f, v, e[i], 7, -680876936), v = o(v, d, h, f, e[i + 1], 12, -389564586), f = o(f, v, d, h, e[i + 2], 17, 606105819), h = o(h, f, v, d, e[i + 3], 22, -1044525330), d = o(d, h, f, v, e[i + 4], 7, -176418897), v = o(v, d, h, f, e[i + 5], 12, 1200080426), f = o(f, v, d, h, e[i + 6], 17, -1473231341), h = o(h, f, v, d, e[i + 7], 22, -45705983), d = o(d, h, f, v, e[i + 8], 7, 1770035416), v = o(v, d, h, f, e[i + 9], 12, -1958414417), f = o(f, v, d, h, e[i + 10], 17, -42063), h = o(h, f, v, d, e[i + 11], 22, -1990404162), d = o(d, h, f, v, e[i + 12], 7, 1804603682), v = o(v, d, h, f, e[i + 13], 12, -40341101), f = o(f, v, d, h, e[i + 14], 17, -1502002290), d = r(d, h = o(h, f, v, d, e[i + 15], 22, 1236535329), f, v, e[i + 1], 5, -165796510), v = r(v, d, h, f, e[i + 6], 9, -1069501632), f = r(f, v, d, h, e[i + 11], 14, 643717713), h = r(h, f, v, d, e[i], 20, -373897302), d = r(d, h, f, v, e[i + 5], 5, -701558691), v = r(v, d, h, f, e[i + 10], 9, 38016083), f = r(f, v, d, h, e[i + 15], 14, -660478335), h = r(h, f, v, d, e[i + 4], 20, -405537848), d = r(d, h, f, v, e[i + 9], 5, 568446438), v = r(v, d, h, f, e[i + 14], 9, -1019803690), f = r(f, v, d, h, e[i + 3], 14, -187363961), h = r(h, f, v, d, e[i + 8], 20, 1163531501), d = r(d, h, f, v, e[i + 13], 5, -1444681467), v = r(v, d, h, f, e[i + 2], 9, -51403784), f = r(f, v, d, h, e[i + 7], 14, 1735328473), d = s(d, h = r(h, f, v, d, e[i + 12], 20, -1926607734), f, v, e[i + 5], 4, -378558), v = s(v, d, h, f, e[i + 8], 11, -2022574463), f = s(f, v, d, h, e[i + 11], 16, 1839030562), h = s(h, f, v, d, e[i + 14], 23, -35309556), d = s(d, h, f, v, e[i + 1], 4, -1530992060), v = s(v, d, h, f, e[i + 4], 11, 1272893353), f = s(f, v, d, h, e[i + 7], 16, -155497632), h = s(h, f, v, d, e[i + 10], 23, -1094730640), d = s(d, h, f, v, e[i + 13], 4, 681279174), v = s(v, d, h, f, e[i], 11, -358537222), f = s(f, v, d, h, e[i + 3], 16, -722521979), h = s(h, f, v, d, e[i + 6], 23, 76029189), d = s(d, h, f, v, e[i + 9], 4, -640364487), v = s(v, d, h, f, e[i + 12], 11, -421815835), f = s(f, v, d, h, e[i + 15], 16, 530742520), d = a(d, h = s(h, f, v, d, e[i + 2], 23, -995338651), f, v, e[i], 6, -198630844), v = a(v, d, h, f, e[i + 7], 10, 1126891415), f = a(f, v, d, h, e[i + 14], 15, -1416354905), h = a(h, f, v, d, e[i + 5], 21, -57434055), d = a(d, h, f, v, e[i + 12], 6, 1700485571), v = a(v, d, h, f, e[i + 3], 10, -1894986606), f = a(f, v, d, h, e[i + 10], 15, -1051523), h = a(h, f, v, d, e[i + 1], 21, -2054922799), d = a(d, h, f, v, e[i + 8], 6, 1873313359), v = a(v, d, h, f, e[i + 15], 10, -30611744), f = a(f, v, d, h, e[i + 6], 15, -1560198380), h = a(h, f, v, d, e[i + 13], 21, 1309151649), d = a(d, h, f, v, e[i + 4], 6, -145523070), v = a(v, d, h, f, e[i + 11], 10, -1120210379), f = a(f, v, d, h, e[i + 2], 15, 718787259), h = a(h, f, v, d, e[i + 9], 21, -343485551), d = n(d, u), h = n(h, c), f = n(f, p), v = n(v, l);
                                    return [d, h, f, v]
                                }

                                function c(e) {
                                    var t, n = "",
                                        i = 32 * e.length;
                                    for (t = 0; t < i; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                                    return n
                                }

                                function p(e) {
                                    var t, n = [];
                                    for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                                    var i = 8 * e.length;
                                    for (t = 0; t < i; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                                    return n
                                }

                                function l(e) {
                                    var t, n, i = "0123456789abcdef",
                                        o = "";
                                    for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), o += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
                                    return o
                                }

                                function d(e) {
                                    return unescape(encodeURIComponent(e))
                                }

                                function h(e) {
                                    return function(e) {
                                        return c(u(p(e), 8 * e.length))
                                    }(d(e))
                                }

                                function f(e, t) {
                                    return function(e, t) {
                                        var n, i, o = p(e),
                                            r = [],
                                            s = [];
                                        for (r[15] = s[15] = void 0, o.length > 16 && (o = u(o, 8 * e.length)), n = 0; n < 16; n += 1) r[n] = 909522486 ^ o[n], s[n] = 1549556828 ^ o[n];
                                        return i = u(r.concat(p(t)), 512 + 8 * t.length), c(u(s.concat(i), 640))
                                    }(d(e), d(t))
                                }

                                function v(e, t, n) {
                                    return t ? n ? f(t, e) : l(f(t, e)) : n ? h(e) : l(h(e))
                                }
                                e.exports ? e.exports = v : t.md5 = v
                            }(rt)
                        })),
                        ut = Object.getOwnPropertySymbols,
                        ct = Object.prototype.hasOwnProperty,
                        pt = Object.prototype.propertyIsEnumerable;

                    function lt(e) {
                        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }
                    var dt = function() {
                            try {
                                if (!Object.assign) return !1;
                                var e = new String("abc");
                                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                                if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                        return t[e]
                                    })).join("")) return !1;
                                var i = {};
                                return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                                    i[e] = e
                                })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                            } catch (o) {
                                return !1
                            }
                        }() ? Object.assign : function(e, t) {
                            for (var n, i, o = lt(e), r = 1; r < arguments.length; r++) {
                                for (var s in n = Object(arguments[r])) ct.call(n, s) && (o[s] = n[s]);
                                if (ut) {
                                    i = ut(n);
                                    for (var a = 0; a < i.length; a++) pt.call(n, i[a]) && (o[i[a]] = n[i[a]])
                                }
                            }
                            return o
                        },
                        ht = "%[a-f0-9]{2}";

                    function ft(e, t) {
                        return t.encode ? t.strict ? encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
                            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                        })) : encodeURIComponent(e) : e
                    }
                    new RegExp(ht, "gi"), new RegExp("(" + ht + ")+", "gi");
                    var vt = function(e, t) {
                            !1 === (t = dt({
                                encode: !0,
                                strict: !0,
                                arrayFormat: "none"
                            }, t)).sort && (t.sort = function() {});
                            var n = function(e) {
                                switch (e.arrayFormat) {
                                    case "index":
                                        return function(t, n, i) {
                                            return null === n ? [ft(t, e), "[", i, "]"].join("") : [ft(t, e), "[", ft(i, e), "]=", ft(n, e)].join("")
                                        };
                                    case "bracket":
                                        return function(t, n) {
                                            return null === n ? ft(t, e) : [ft(t, e), "[]=", ft(n, e)].join("")
                                        };
                                    default:
                                        return function(t, n) {
                                            return null === n ? ft(t, e) : [ft(t, e), "=", ft(n, e)].join("")
                                        }
                                }
                            }(t);
                            return e ? Object.keys(e).sort(t.sort).map((function(i) {
                                var o = e[i];
                                if (void 0 === o) return "";
                                if (null === o) return ft(i, t);
                                if (Array.isArray(o)) {
                                    var r = [];
                                    return o.slice().forEach((function(e) {
                                        void 0 !== e && r.push(n(i, e, r.length))
                                    })), r.join("&")
                                }
                                return ft(i, t) + "=" + ft(o, t)
                            })).filter((function(e) {
                                return e.length > 0
                            })).join("&") : ""
                        },
                        gt = function(e, t, n) {
                            this.url = e, this.data = t || {}, this.headers = n
                        };
                    gt.prototype.send = function(e) {
                        if (window.XDomainRequest) {
                            var t = new window.XDomainRequest;
                            t.open("POST", this.url, !0), t.onload = function() {
                                e(200, t.responseText)
                            }, t.onerror = function() {
                                "Request Entity Too Large" === t.responseText ? e(413, t.responseText) : e(500, t.responseText)
                            }, t.ontimeout = function() {}, t.onprogress = function() {}, t.send(vt(this.data))
                        } else {
                            var n = new XMLHttpRequest;
                            n.open("POST", this.url, !0), n.onreadystatechange = function() {
                                    4 === n.readyState && e(n.status, n.responseText)
                                },
                                function(e, t) {
                                    for (var n in t) e.setRequestHeader(n, t[n])
                                }(n, this.headers), n.send(vt(this.data))
                        }
                    };
                    var yt = function() {
                        this._price = null, this._productId = null, this._quantity = 1, this._revenueType = null, this._properties = null
                    };
                    yt.prototype.setProductId = function(e) {
                        return "string" !== pe(e) ? Se.error("Unsupported type for productId: " + pe(e) + ", expecting string") : ke(e) ? Se.error("Invalid empty productId") : this._productId = e, this
                    }, yt.prototype.setQuantity = function(e) {
                        return "number" !== pe(e) ? Se.error("Unsupported type for quantity: " + pe(e) + ", expecting number") : this._quantity = parseInt(e), this
                    }, yt.prototype.setPrice = function(e) {
                        return "number" !== pe(e) ? Se.error("Unsupported type for price: " + pe(e) + ", expecting number") : this._price = e, this
                    }, yt.prototype.setRevenueType = function(e) {
                        return "string" !== pe(e) ? Se.error("Unsupported type for revenueType: " + pe(e) + ", expecting string") : this._revenueType = e, this
                    }, yt.prototype.setEventProperties = function(e) {
                        return "object" !== pe(e) ? Se.error("Unsupported type for eventProperties: " + pe(e) + ", expecting object") : this._properties = Ce(e), this
                    }, yt.prototype._isValidRevenue = function() {
                        return "number" === pe(this._price) || (Se.error("Invalid revenue, need to set price field"), !1)
                    }, yt.prototype._toJSONObject = function() {
                        var e = "object" === pe(this._properties) ? this._properties : {};
                        return null !== this._productId && (e[V] = this._productId), null !== this._quantity && (e[B] = this._quantity), null !== this._price && (e[J] = this._price), null !== this._revenueType && (e[H] = this._revenueType), e
                    };
                    var mt = st((function(e, t) {
                            ! function(n, i) {
                                var o = "function",
                                    r = "undefined",
                                    s = "object",
                                    a = "string",
                                    u = "model",
                                    c = "name",
                                    p = "type",
                                    l = "vendor",
                                    d = "version",
                                    h = "architecture",
                                    f = "console",
                                    v = "mobile",
                                    g = "tablet",
                                    y = "smarttv",
                                    m = "wearable",
                                    b = "embedded",
                                    w = "Amazon",
                                    _ = "Apple",
                                    I = "ASUS",
                                    S = "BlackBerry",
                                    k = "Firefox",
                                    E = "Google",
                                    O = "Huawei",
                                    x = "LG",
                                    N = "Microsoft",
                                    C = "Motorola",
                                    A = "Opera",
                                    P = "Samsung",
                                    T = "Sony",
                                    j = "Xiaomi",
                                    q = "Zebra",
                                    R = function(e) {
                                        var t = {};
                                        for (var n in e) t[e[n].toUpperCase()] = e[n];
                                        return t
                                    },
                                    D = function(e, t) {
                                        return typeof e === a && -1 !== U(t).indexOf(U(e))
                                    },
                                    U = function(e) {
                                        return e.toLowerCase()
                                    },
                                    K = function(e, t) {
                                        if (typeof e === a) return e = e.replace(/^\s+|\s+$/g, ""), typeof t === r ? e : e.substring(0, 255)
                                    },
                                    L = function(e, t) {
                                        for (var n, r, a, u, c, p, l = 0; l < t.length && !c;) {
                                            var d = t[l],
                                                h = t[l + 1];
                                            for (n = r = 0; n < d.length && !c;)
                                                if (c = d[n++].exec(e))
                                                    for (a = 0; a < h.length; a++) p = c[++r], typeof(u = h[a]) === s && u.length > 0 ? 2 == u.length ? typeof u[1] == o ? this[u[0]] = u[1].call(this, p) : this[u[0]] = u[1] : 3 == u.length ? typeof u[1] !== o || u[1].exec && u[1].test ? this[u[0]] = p ? p.replace(u[1], u[2]) : i : this[u[0]] = p ? u[1].call(this, p, u[2]) : i : 4 == u.length && (this[u[0]] = p ? u[3].call(this, p.replace(u[1], u[2])) : i) : this[u] = p || i;
                                            l += 2
                                        }
                                    },
                                    z = function(e, t) {
                                        for (var n in t)
                                            if (typeof t[n] === s && t[n].length > 0) {
                                                for (var o = 0; o < t[n].length; o++)
                                                    if (D(t[n][o], e)) return "?" === n ? i : n
                                            } else if (D(t[n], e)) return "?" === n ? i : n;
                                        return e
                                    },
                                    F = {
                                        ME: "4.90",
                                        "NT 3.11": "NT3.51",
                                        "NT 4.0": "NT4.0",
                                        2e3: "NT 5.0",
                                        XP: ["NT 5.1", "NT 5.2"],
                                        Vista: "NT 6.0",
                                        7: "NT 6.1",
                                        8: "NT 6.2",
                                        8.1: "NT 6.3",
                                        10: ["NT 6.4", "NT 10.0"],
                                        RT: "ARM"
                                    },
                                    M = {
                                        browser: [
                                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                            [d, [c, "Chrome"]],
                                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                            [d, [c, "Edge"]],
                                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                            [c, d],
                                            [/opios[\/ ]+([\w\.]+)/i],
                                            [d, [c, "Opera Mini"]],
                                            [/\bopr\/([\w\.]+)/i],
                                            [d, [c, A]],
                                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                                            [c, d],
                                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                            [d, [c, "UCBrowser"]],
                                            [/\bqbcore\/([\w\.]+)/i],
                                            [d, [c, "WeChat(Win) Desktop"]],
                                            [/micromessenger\/([\w\.]+)/i],
                                            [d, [c, "WeChat"]],
                                            [/konqueror\/([\w\.]+)/i],
                                            [d, [c, "Konqueror"]],
                                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                            [d, [c, "IE"]],
                                            [/yabrowser\/([\w\.]+)/i],
                                            [d, [c, "Yandex"]],
                                            [/(avast|avg)\/([\w\.]+)/i],
                                            [
                                                [c, /(.+)/, "$1 Secure Browser"], d
                                            ],
                                            [/\bfocus\/([\w\.]+)/i],
                                            [d, [c, "Firefox Focus"]],
                                            [/\bopt\/([\w\.]+)/i],
                                            [d, [c, "Opera Touch"]],
                                            [/coc_coc\w+\/([\w\.]+)/i],
                                            [d, [c, "Coc Coc"]],
                                            [/dolfin\/([\w\.]+)/i],
                                            [d, [c, "Dolphin"]],
                                            [/coast\/([\w\.]+)/i],
                                            [d, [c, "Opera Coast"]],
                                            [/miuibrowser\/([\w\.]+)/i],
                                            [d, [c, "MIUI Browser"]],
                                            [/fxios\/([-\w\.]+)/i],
                                            [d, [c, k]],
                                            [/\bqihu|(qi?ho?o?|360)browser/i],
                                            [
                                                [c, "360 Browser"]
                                            ],
                                            [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                                            [
                                                [c, /(.+)/, "$1 Browser"], d
                                            ],
                                            [/(comodo_dragon)\/([\w\.]+)/i],
                                            [
                                                [c, /_/g, " "], d
                                            ],
                                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                            [c, d],
                                            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                                            [c],
                                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                            [
                                                [c, "Facebook"], d
                                            ],
                                            [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                            [c, d],
                                            [/\bgsa\/([\w\.]+) .*safari\//i],
                                            [d, [c, "GSA"]],
                                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                                            [d, [c, "Chrome Headless"]],
                                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                                            [
                                                [c, "Chrome WebView"], d
                                            ],
                                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                            [d, [c, "Android Browser"]],
                                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                            [c, d],
                                            [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                                            [d, [c, "Mobile Safari"]],
                                            [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                                            [d, c],
                                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                            [c, [d, z, {
                                                "1.0": "/8",
                                                1.2: "/1",
                                                1.3: "/3",
                                                "2.0": "/412",
                                                "2.0.2": "/416",
                                                "2.0.3": "/417",
                                                "2.0.4": "/419",
                                                "?": "/"
                                            }]],
                                            [/(webkit|khtml)\/([\w\.]+)/i],
                                            [c, d],
                                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                            [
                                                [c, "Netscape"], d
                                            ],
                                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                            [d, [c, "Firefox Reality"]],
                                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                                            [c, d]
                                        ],
                                        cpu: [
                                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                            [
                                                [h, "amd64"]
                                            ],
                                            [/(ia32(?=;))/i],
                                            [
                                                [h, U]
                                            ],
                                            [/((?:i[346]|x)86)[;\)]/i],
                                            [
                                                [h, "ia32"]
                                            ],
                                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                            [
                                                [h, "arm64"]
                                            ],
                                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                            [
                                                [h, "armhf"]
                                            ],
                                            [/windows (ce|mobile); ppc;/i],
                                            [
                                                [h, "arm"]
                                            ],
                                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                            [
                                                [h, /ower/, "", U]
                                            ],
                                            [/(sun4\w)[;\)]/i],
                                            [
                                                [h, "sparc"]
                                            ],
                                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                            [
                                                [h, U]
                                            ]
                                        ],
                                        device: [
                                            [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                            [u, [l, P],
                                                [p, g]
                                            ],
                                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                            [u, [l, P],
                                                [p, v]
                                            ],
                                            [/((ipod|iphone)\d+,\d+)/i],
                                            [u, [l, _],
                                                [p, v]
                                            ],
                                            [/(ipad\d+,\d+)/i],
                                            [u, [l, _],
                                                [p, g]
                                            ],
                                            [/\((ip(?:hone|od)[\w ]*);/i],
                                            [u, [l, _],
                                                [p, v]
                                            ],
                                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                            [u, [l, _],
                                                [p, g]
                                            ],
                                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                            [u, [l, O],
                                                [p, g]
                                            ],
                                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],
                                            [u, [l, O],
                                                [p, v]
                                            ],
                                            [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                            [
                                                [u, /_/g, " "],
                                                [l, j],
                                                [p, v]
                                            ],
                                            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                            [
                                                [u, /_/g, " "],
                                                [l, j],
                                                [p, g]
                                            ],
                                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                                            [u, [l, "OPPO"],
                                                [p, v]
                                            ],
                                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                            [u, [l, "Vivo"],
                                                [p, v]
                                            ],
                                            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                            [u, [l, "Realme"],
                                                [p, v]
                                            ],
                                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                            [u, [l, C],
                                                [p, v]
                                            ],
                                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                            [u, [l, C],
                                                [p, g]
                                            ],
                                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                            [u, [l, x],
                                                [p, g]
                                            ],
                                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                            [u, [l, x],
                                                [p, v]
                                            ],
                                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                            [u, [l, "Lenovo"],
                                                [p, g]
                                            ],
                                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                            [
                                                [u, /_/g, " "],
                                                [l, "Nokia"],
                                                [p, v]
                                            ],
                                            [/(pixel c)\b/i],
                                            [u, [l, E],
                                                [p, g]
                                            ],
                                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                            [u, [l, E],
                                                [p, v]
                                            ],
                                            [/droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                            [u, [l, T],
                                                [p, v]
                                            ],
                                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                            [
                                                [u, "Xperia Tablet"],
                                                [l, T],
                                                [p, g]
                                            ],
                                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                            [u, [l, "OnePlus"],
                                                [p, v]
                                            ],
                                            [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                            [u, [l, w],
                                                [p, g]
                                            ],
                                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                            [
                                                [u, /(.+)/g, "Fire Phone $1"],
                                                [l, w],
                                                [p, v]
                                            ],
                                            [/(playbook);[-\w\),; ]+(rim)/i],
                                            [u, l, [p, g]],
                                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                            [u, [l, S],
                                                [p, v]
                                            ],
                                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                            [u, [l, I],
                                                [p, g]
                                            ],
                                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                            [u, [l, I],
                                                [p, v]
                                            ],
                                            [/(nexus 9)/i],
                                            [u, [l, "HTC"],
                                                [p, g]
                                            ],
                                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],
                                            [l, [u, /_/g, " "],
                                                [p, v]
                                            ],
                                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                            [u, [l, "Acer"],
                                                [p, g]
                                            ],
                                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                            [u, [l, "Meizu"],
                                                [p, v]
                                            ],
                                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                            [u, [l, "Sharp"],
                                                [p, v]
                                            ],
                                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                            [l, u, [p, v]],
                                            [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                            [l, u, [p, g]],
                                            [/(surface duo)/i],
                                            [u, [l, N],
                                                [p, g]
                                            ],
                                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                            [u, [l, "Fairphone"],
                                                [p, v]
                                            ],
                                            [/(u304aa)/i],
                                            [u, [l, "AT&T"],
                                                [p, v]
                                            ],
                                            [/\bsie-(\w*)/i],
                                            [u, [l, "Siemens"],
                                                [p, v]
                                            ],
                                            [/\b(rct\w+) b/i],
                                            [u, [l, "RCA"],
                                                [p, g]
                                            ],
                                            [/\b(venue[\d ]{2,7}) b/i],
                                            [u, [l, "Dell"],
                                                [p, g]
                                            ],
                                            [/\b(q(?:mv|ta)\w+) b/i],
                                            [u, [l, "Verizon"],
                                                [p, g]
                                            ],
                                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                            [u, [l, "Barnes & Noble"],
                                                [p, g]
                                            ],
                                            [/\b(tm\d{3}\w+) b/i],
                                            [u, [l, "NuVision"],
                                                [p, g]
                                            ],
                                            [/\b(k88) b/i],
                                            [u, [l, "ZTE"],
                                                [p, g]
                                            ],
                                            [/\b(nx\d{3}j) b/i],
                                            [u, [l, "ZTE"],
                                                [p, v]
                                            ],
                                            [/\b(gen\d{3}) b.+49h/i],
                                            [u, [l, "Swiss"],
                                                [p, v]
                                            ],
                                            [/\b(zur\d{3}) b/i],
                                            [u, [l, "Swiss"],
                                                [p, g]
                                            ],
                                            [/\b((zeki)?tb.*\b) b/i],
                                            [u, [l, "Zeki"],
                                                [p, g]
                                            ],
                                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                            [
                                                [l, "Dragon Touch"], u, [p, g]
                                            ],
                                            [/\b(ns-?\w{0,9}) b/i],
                                            [u, [l, "Insignia"],
                                                [p, g]
                                            ],
                                            [/\b((nxa|next)-?\w{0,9}) b/i],
                                            [u, [l, "NextBook"],
                                                [p, g]
                                            ],
                                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                            [
                                                [l, "Voice"], u, [p, v]
                                            ],
                                            [/\b(lvtel\-)?(v1[12]) b/i],
                                            [
                                                [l, "LvTel"], u, [p, v]
                                            ],
                                            [/\b(ph-1) /i],
                                            [u, [l, "Essential"],
                                                [p, v]
                                            ],
                                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                            [u, [l, "Envizen"],
                                                [p, g]
                                            ],
                                            [/\b(trio[-\w\. ]+) b/i],
                                            [u, [l, "MachSpeed"],
                                                [p, g]
                                            ],
                                            [/\btu_(1491) b/i],
                                            [u, [l, "Rotor"],
                                                [p, g]
                                            ],
                                            [/(shield[\w ]+) b/i],
                                            [u, [l, "Nvidia"],
                                                [p, g]
                                            ],
                                            [/(sprint) (\w+)/i],
                                            [l, u, [p, v]],
                                            [/(kin\.[onetw]{3})/i],
                                            [
                                                [u, /\./g, " "],
                                                [l, N],
                                                [p, v]
                                            ],
                                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                            [u, [l, q],
                                                [p, g]
                                            ],
                                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                            [u, [l, q],
                                                [p, v]
                                            ],
                                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                            [l, u, [p, f]],
                                            [/droid.+; (shield) bui/i],
                                            [u, [l, "Nvidia"],
                                                [p, f]
                                            ],
                                            [/(playstation [345portablevi]+)/i],
                                            [u, [l, T],
                                                [p, f]
                                            ],
                                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                            [u, [l, N],
                                                [p, f]
                                            ],
                                            [/smart-tv.+(samsung)/i],
                                            [l, [p, y]],
                                            [/hbbtv.+maple;(\d+)/i],
                                            [
                                                [u, /^/, "SmartTV"],
                                                [l, P],
                                                [p, y]
                                            ],
                                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                            [
                                                [l, x],
                                                [p, y]
                                            ],
                                            [/(apple) ?tv/i],
                                            [l, [u, "Apple TV"],
                                                [p, y]
                                            ],
                                            [/crkey/i],
                                            [
                                                [u, "Chromecast"],
                                                [l, E],
                                                [p, y]
                                            ],
                                            [/droid.+aft(\w)( bui|\))/i],
                                            [u, [l, w],
                                                [p, y]
                                            ],
                                            [/\(dtv[\);].+(aquos)/i],
                                            [u, [l, "Sharp"],
                                                [p, y]
                                            ],
                                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                                            [
                                                [l, K],
                                                [u, K],
                                                [p, y]
                                            ],
                                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                            [
                                                [p, y]
                                            ],
                                            [/((pebble))app/i],
                                            [l, u, [p, m]],
                                            [/droid.+; (glass) \d/i],
                                            [u, [l, E],
                                                [p, m]
                                            ],
                                            [/droid.+; (wt63?0{2,3})\)/i],
                                            [u, [l, q],
                                                [p, m]
                                            ],
                                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                            [l, [p, b]],
                                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                            [u, [p, v]],
                                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                            [u, [p, g]],
                                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                            [
                                                [p, g]
                                            ],
                                            [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                                            [
                                                [p, v]
                                            ],
                                            [/(android[-\w\. ]{0,9});.+buil/i],
                                            [u, [l, "Generic"]]
                                        ],
                                        engine: [
                                            [/windows.+ edge\/([\w\.]+)/i],
                                            [d, [c, "EdgeHTML"]],
                                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                            [d, [c, "Blink"]],
                                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                                            [c, d],
                                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                            [d, c]
                                        ],
                                        os: [
                                            [/microsoft (windows) (vista|xp)/i],
                                            [c, d],
                                            [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                            [c, [d, z, F]],
                                            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                            [
                                                [c, "Windows"],
                                                [d, z, F]
                                            ],
                                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                                            [
                                                [d, /_/g, "."],
                                                [c, "iOS"]
                                            ],
                                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                            [
                                                [c, "Mac OS"],
                                                [d, /_/g, "."]
                                            ],
                                            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                                            [d, c],
                                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                            [c, d],
                                            [/\(bb(10);/i],
                                            [d, [c, S]],
                                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                            [d, [c, "Symbian"]],
                                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                            [d, [c, "Firefox OS"]],
                                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                            [d, [c, "webOS"]],
                                            [/crkey\/([\d\.]+)/i],
                                            [d, [c, "Chromecast"]],
                                            [/(cros) [\w]+ ([\w\.]+\w)/i],
                                            [
                                                [c, "Chromium OS"], d
                                            ],
                                            [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                            [c, d],
                                            [/(sunos) ?([\w\.\d]*)/i],
                                            [
                                                [c, "Solaris"], d
                                            ],
                                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                                            [c, d]
                                        ]
                                    },
                                    $ = function(e, t) {
                                        if (typeof e === s && (t = e, e = i), !(this instanceof $)) return new $(e, t).getResult();
                                        var o = e || (typeof n !== r && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""),
                                            u = t ? function(e, t) {
                                                var n = {};
                                                for (var i in e) t[i] && t[i].length % 2 === 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                                                return n
                                            }(M, t) : M;
                                        return this.getBrowser = function() {
                                            var e = {};
                                            return e.name = i, e.version = i, L.call(e, o, u.browser), e.major = function(e) {
                                                return typeof e === a ? e.replace(/[^\d\.]/g, "").split(".")[0] : i
                                            }(e.version), e
                                        }, this.getCPU = function() {
                                            var e = {};
                                            return e.architecture = i, L.call(e, o, u.cpu), e
                                        }, this.getDevice = function() {
                                            var e = {};
                                            return e.vendor = i, e.model = i, e.type = i, L.call(e, o, u.device), e
                                        }, this.getEngine = function() {
                                            var e = {};
                                            return e.name = i, e.version = i, L.call(e, o, u.engine), e
                                        }, this.getOS = function() {
                                            var e = {};
                                            return e.name = i, e.version = i, L.call(e, o, u.os), e
                                        }, this.getResult = function() {
                                            return {
                                                ua: this.getUA(),
                                                browser: this.getBrowser(),
                                                engine: this.getEngine(),
                                                os: this.getOS(),
                                                device: this.getDevice(),
                                                cpu: this.getCPU()
                                            }
                                        }, this.getUA = function() {
                                            return o
                                        }, this.setUA = function(e) {
                                            return o = typeof e === a && e.length > 255 ? K(e, 255) : e, this
                                        }, this.setUA(o), this
                                    };
                                $.VERSION = "0.7.28", $.BROWSER = R([c, d, "major"]), $.CPU = R([h]), $.DEVICE = R([u, l, p, f, v, y, g, m, b]), $.ENGINE = $.OS = R([c, d]), e.exports && (t = e.exports = $), t.UAParser = $;
                                var W = typeof n !== r && (n.jQuery || n.Zepto);
                                if (W && !W.ua) {
                                    var G = new $;
                                    W.ua = G.getResult(), W.ua.get = function() {
                                        return G.getUA()
                                    }, W.ua.set = function(e) {
                                        G.setUA(e);
                                        var t = G.getResult();
                                        for (var n in t) W.ua[n] = t[n]
                                    }
                                }
                            }("object" === typeof window ? window : rt)
                        })),
                        bt = (mt.UAParser, function e(t) {
                            return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
                        }),
                        wt = "US",
                        _t = "EU",
                        It = "8.10.0",
                        St = {
                            apiEndpoint: O,
                            batchEvents: !1,
                            cookieExpiration: 365,
                            cookieName: "amplitude_id",
                            sameSiteCookie: "Lax",
                            cookieForceUpgrade: !1,
                            deferInitialization: !1,
                            disableCookies: !1,
                            deviceIdFromUrlParam: !1,
                            domain: "",
                            eventUploadPeriodMillis: 3e4,
                            eventUploadThreshold: 30,
                            forceHttps: !0,
                            includeFbclid: !1,
                            includeGclid: !1,
                            includeReferrer: !1,
                            includeUtm: !1,
                            language: "undefined" !== typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage) || "",
                            library: {
                                name: "amplitude-js",
                                version: It
                            },
                            logLevel: "WARN",
                            logAttributionCapturedEvent: !1,
                            optOut: !1,
                            onError: function() {},
                            onExitPage: function() {},
                            plan: {
                                branch: "",
                                source: "",
                                version: ""
                            },
                            platform: "Web",
                            savedMaxCount: 1e3,
                            saveEvents: !0,
                            saveParamsReferrerOncePerSession: !0,
                            secureCookie: !1,
                            sessionTimeout: 18e5,
                            storage: z,
                            trackingOptions: {
                                city: !0,
                                country: !0,
                                carrier: !0,
                                device_manufacturer: !0,
                                device_model: !0,
                                dma: !0,
                                ip_address: !0,
                                language: !0,
                                os_name: !0,
                                os_version: !0,
                                platform: !0,
                                region: !0,
                                version_name: !0
                            },
                            transport: oe,
                            unsetParamsReferrerOnNewSession: !1,
                            unsentKey: "amplitude_unsent",
                            unsentIdentifyKey: "amplitude_unsent_identify",
                            uploadBatchSize: 100,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                "Cross-Origin-Resource-Policy": "cross-origin"
                            },
                            serverZone: wt,
                            useDynamicConfig: !1,
                            serverZoneBasedApi: !1
                        },
                        kt = new(function() {
                            function e() {
                                return o(this, e), e.instance || (this.ingestionEndpoint = O, e.instance = this), e.instance
                            }
                            return s(e, [{
                                key: "refresh",
                                value: function(e, t, n) {
                                    var i = "https";
                                    t || "https:" === window.location.protocol || (i = "http");
                                    var o = i + "://" + function(e) {
                                            var t = N;
                                            switch (e) {
                                                case _t:
                                                    t = C;
                                                    break;
                                                case wt:
                                                    t = N
                                            }
                                            return t
                                        }(e),
                                        r = this;
                                    if (window.XDomainRequest) {
                                        var s = new window.XDomainRequest;
                                        s.open("GET", o, !0), s.onload = function() {
                                            var e = JSON.parse(s.responseText);
                                            r.ingestionEndpoint = e.ingestionEndpoint, n && n()
                                        }, s.onerror = function() {}, s.ontimeout = function() {}, s.onprogress = function() {}, s.send()
                                    } else {
                                        var a = new XMLHttpRequest;
                                        a.open("GET", o, !0), a.onreadystatechange = function() {
                                            if (4 === a.readyState && 200 === a.status) {
                                                var e = JSON.parse(a.responseText);
                                                r.ingestionEndpoint = e.ingestionEndpoint, n && n()
                                            }
                                        }, a.send()
                                    }
                                }
                            }]), e
                        }()),
                        Et = function(e) {
                            f() || Se.warn("amplitude-js will not work in a non-browser environment. If you are planning to add Amplitude to a node environment, please use @amplitude/node"), this._instanceName = ke(e) ? w : e.toLowerCase(), this._unsentEvents = [], this._unsentIdentifys = [], this._ua = new mt(navigator.userAgent).getResult(), this.options = u({}, St, {
                                trackingOptions: u({}, St.trackingOptions)
                            }), this.cookieStorage = (new et).getStorage(), this._q = [], this._sending = !1, this._updateScheduled = !1, this._onInit = [], this._eventId = 0, this._identifyId = 0, this._lastEventTime = null, this._newSession = !1, this._sequenceNumber = 0, this._sessionId = null, this._isInitialized = !1, this._userAgent = navigator && navigator.userAgent || null
                        };
                    Et.prototype.Identify = ot, Et.prototype.Revenue = yt, Et.prototype.init = function(e, t, n, i) {
                        var o = this;
                        if ("string" !== pe(e) || ke(e)) Se.error("Invalid apiKey. Please re-initialize with a valid apiKey");
                        else try {
                            xt(this.options, n), f() && void 0 !== window.Prototype && Array.prototype.toJSON && (function() {
                                var e;
                                if (f()) {
                                    var t = window,
                                        n = Array;
                                    if (void 0 !== t.Prototype && void 0 !== (null === (e = n.prototype) || void 0 === e ? void 0 : e.toJSON)) delete n.prototype.toJSON
                                }
                            }(), Se.warn("Prototype.js injected Array.prototype.toJSON. Deleting Array.prototype.toJSON to prevent double-stringify")), this.options.cookieName !== St.cookieName && Se.warn("The cookieName option is deprecated. We will be ignoring it for newer cookies"), this.options.serverZoneBasedApi && (this.options.apiEndpoint = function(e) {
                                var t = O;
                                switch (e) {
                                    case _t:
                                        t = x;
                                        break;
                                    case wt:
                                        t = O
                                }
                                return t
                            }(this.options.serverZone)), this._refreshDynamicConfig(), this.options.apiKey = e, this._storageSuffix = "_" + e + (this._instanceName === w ? "" : "_" + this._instanceName), this._storageSuffixV5 = e.slice(0, 6), this._oldCookiename = this.options.cookieName + this._storageSuffix, this._unsentKey = this.options.unsentKey + this._storageSuffix, this._unsentIdentifyKey = this.options.unsentIdentifyKey + this._storageSuffix, this._cookieName = L + "_" + this._storageSuffixV5, this.cookieStorage.options({
                                expirationDays: this.options.cookieExpiration,
                                domain: this.options.domain,
                                secure: this.options.secureCookie,
                                sameSite: this.options.sameSiteCookie
                            }), this._metadataStorage = new nt({
                                storageKey: this._cookieName,
                                disableCookies: this.options.disableCookies,
                                expirationDays: this.options.cookieExpiration,
                                domain: this.options.domain,
                                secure: this.options.secureCookie,
                                sameSite: this.options.sameSiteCookie,
                                storage: this.options.storage
                            });
                            var r = !!this.cookieStorage.get(this._oldCookiename),
                                s = !!this._metadataStorage.load();
                            this._useOldCookie = !s && r && !this.options.cookieForceUpgrade;
                            var a = s || r;
                            if (this.options.domain = this.cookieStorage.options().domain, this.options.deferInitialization && !a) return void this._deferInitialization(e, t, n, i);
                            "string" === pe(this.options.logLevel) && Ie(this.options.logLevel);
                            var u = Dt(this);
                            this._apiPropertiesTrackingOptions = Object.keys(u).length > 0 ? {
                                    tracking_options: u
                                } : {}, this.options.cookieForceUpgrade && r && (s || Ct(this), this.cookieStorage.remove(this._oldCookiename)), Nt(this), this._pendingReadStorage = !0, this.options.saveEvents && (this._unsentEvents = this._loadSavedUnsentEvents(this.options.unsentKey).map((function(e) {
                                    return {
                                        event: e
                                    }
                                })).concat(this._unsentEvents), this._unsentIdentifys = this._loadSavedUnsentEvents(this.options.unsentIdentifyKey).map((function(e) {
                                    return {
                                        event: e
                                    }
                                })).concat(this._unsentIdentifys)),
                                function(e) {
                                    n && n.deviceId && !Ae(n.deviceId) && (Se.error('Invalid device ID rejected. Randomly generated UUID will be used instead of "'.concat(n.deviceId, '"')), delete n.deviceId), o.options.deviceId = o._getInitialDeviceId(n && n.deviceId, e), o.options.userId = "string" === pe(t) && !ke(t) && t || "number" === pe(t) && t.toString() || o.options.userId || null;
                                    var i = (new Date).getTime();
                                    (!o._sessionId || !o._lastEventTime || i - o._lastEventTime > o.options.sessionTimeout) && (o.options.unsetParamsReferrerOnNewSession && o._unsetUTMParams(), o._newSession = !0, o._sessionId = i, o.options.saveParamsReferrerOncePerSession && o._trackParamsAndReferrer()), o.options.saveParamsReferrerOncePerSession || o._trackParamsAndReferrer(), o.options.saveEvents && (Ot(o._unsentEvents), Ot(o._unsentIdentifys)), o._lastEventTime = i, Pt(o), o._pendingReadStorage = !1, o._sendEventsIfReady();
                                    for (var r = 0; r < o._onInit.length; r++) o._onInit[r](o);
                                    o._onInit = [], o._isInitialized = !0
                                }(), this.runQueuedFunctions(), "function" === pe(i) && i(this);
                            var c = this.options.onExitPage;
                            "function" !== pe(c) || this.pageHandlersAdded || (this.pageHandlersAdded = !0, window.addEventListener("pagehide", (function() {
                                ! function() {
                                    var e = o.options.transport;
                                    o.setTransport(re), c(), o.setTransport(e)
                                }()
                            }), !1))
                        } catch (p) {
                            Se.error(p), "function" === pe(n.onError) && n.onError(p)
                        }
                    }, Et.prototype.deleteLowerLevelDomainCookies = function() {
                        var e = Me(),
                            t = this.options.domain && "." === this.options.domain[0] ? this.options.domain.slice(1) : this.options.domain;
                        if (t && e !== t && new RegExp(t + "$").test(e)) {
                            for (var n = e.split("."), i = t.split("."), o = n.length; o > i.length; --o) {
                                var r = n.slice(n.length - o).join(".");
                                Ue(this._cookieName, null, {
                                    domain: "." + r
                                })
                            }
                            Ue(this._cookieName, null, {})
                        }
                    }, Et.prototype._getInitialDeviceId = function(e, t) {
                        if (e) return e;
                        if (this.options.deviceIdFromUrlParam) {
                            var n = this._getDeviceIdFromUrlParam(this._getUrlParams());
                            if (n) return n
                        }
                        return this.options.deviceId ? this.options.deviceId : t || je()
                    };
                    var Ot = function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t].event.user_properties,
                                i = e[t].event.event_properties,
                                o = e[t].event.groups;
                            e[t].event.user_properties = Ce(n), e[t].event.event_properties = Ce(i), e[t].event.groups = xe(o)
                        }
                    };
                    Et.prototype._trackParamsAndReferrer = function() {
                        var e, t, n, i;
                        if (this.options.includeUtm && (e = this._initUtmData()), this.options.includeReferrer && (t = this._saveReferrer(this._getReferrer())), this.options.includeGclid && (n = this._saveGclid(this._getUrlParams())), this.options.includeFbclid && (i = this._saveFbclid(this._getUrlParams())), this.options.logAttributionCapturedEvent) {
                            var o = u({}, e, t, n, i);
                            Object.keys(o).length > 0 && this.logEvent(ie, o)
                        }
                    };
                    var xt = function e(t, n) {
                        if ("object" === pe(n)) {
                            var i = new Set(["headers"]),
                                o = function(i) {
                                    if (Object.prototype.hasOwnProperty.call(t, i)) {
                                        var o = n[i],
                                            r = pe(t[i]);
                                        ("transport" !== i || Pe(o)) && Ne(o, i + " option", r) && ("boolean" === r ? t[i] = !!o : "string" === r && !ke(o) || "number" === r && o > 0 || "function" === r ? t[i] = o : "object" === r && e(t[i], o))
                                    }
                                };
                            for (var r in n) i.has(r) ? t[r] = u({}, t[r], n[r]) : Object.prototype.hasOwnProperty.call(n, r) && o(r)
                        }
                    };
                    Et.prototype.runQueuedFunctions = function() {
                        var e = this._q;
                        this._q = [];
                        for (var t = 0; t < e.length; t++) {
                            var n = this[e[t][0]];
                            "function" === pe(n) && n.apply(this, e[t].slice(1))
                        }
                    }, Et.prototype._apiKeySet = function(e) {
                        return !ke(this.options.apiKey) || (Se.error("Invalid apiKey. Please set a valid apiKey with init() before calling " + e), !1)
                    }, Et.prototype._loadSavedUnsentEvents = function(e) {
                        var t = this._getFromStorage(Ye, e),
                            n = this._parseSavedUnsentEventsString(t, e);
                        return this._setInStorage(Ye, e, JSON.stringify(n)), n
                    }, Et.prototype._parseSavedUnsentEventsString = function(e, t) {
                        if (ke(e)) return [];
                        if ("string" === pe(e)) try {
                            var n = JSON.parse(e);
                            if ("array" === pe(n)) return n
                        } catch (Wt) {}
                        return Se.error("Unable to load " + t + " events. Restart with a new empty queue."), []
                    }, Et.prototype.isNewSession = function() {
                        return this._newSession
                    }, Et.prototype.onInit = function(e) {
                        this._isInitialized ? e(this) : this._onInit.push(e)
                    }, Et.prototype.getSessionId = function() {
                        return this._sessionId
                    }, Et.prototype.nextEventId = function() {
                        return this._eventId++, this._eventId
                    }, Et.prototype.nextIdentifyId = function() {
                        return this._identifyId++, this._identifyId
                    }, Et.prototype.nextSequenceNumber = function() {
                        return this._sequenceNumber++, this._sequenceNumber
                    }, Et.prototype._unsentCount = function() {
                        return this._unsentEvents.length + this._unsentIdentifys.length
                    }, Et.prototype._sendEventsIfReady = function() {
                        return 0 !== this._unsentCount() && (this.options.batchEvents ? this._unsentCount() >= this.options.eventUploadThreshold || this.options.transport === re ? (this.sendEvents(), !0) : (this._updateScheduled || (this._updateScheduled = !0, setTimeout(function() {
                            this._updateScheduled = !1, this.sendEvents()
                        }.bind(this), this.options.eventUploadPeriodMillis)), !1) : (this.sendEvents(), !0))
                    }, Et.prototype.clearStorage = function() {
                        return this._metadataStorage.clear()
                    }, Et.prototype._getFromStorage = function(e, t) {
                        return e.getItem(t + this._storageSuffix)
                    }, Et.prototype._setInStorage = function(e, t, n) {
                        e.setItem(t + this._storageSuffix, n)
                    };
                    var Nt = function(e) {
                            if (e._useOldCookie) {
                                var t = e.cookieStorage.get(e._oldCookiename);
                                "object" !== pe(t) || At(e, t)
                            } else {
                                var n = e._metadataStorage.load();
                                "object" === pe(n) && At(e, n)
                            }
                        },
                        Ct = function(e) {
                            var t = e.cookieStorage.get(e._oldCookiename);
                            "object" === pe(t) && (At(e, t), Pt(e))
                        },
                        At = function(e, t) {
                            t.deviceId && (e.options.deviceId = t.deviceId), t.userId && (e.options.userId = t.userId), null !== t.optOut && void 0 !== t.optOut && !1 !== t.optOut && (e.options.optOut = t.optOut), t.sessionId && (e._sessionId = parseInt(t.sessionId, 10)), t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime, 10)), t.eventId && (e._eventId = parseInt(t.eventId, 10)), t.identifyId && (e._identifyId = parseInt(t.identifyId, 10)), t.sequenceNumber && (e._sequenceNumber = parseInt(t.sequenceNumber, 10))
                        },
                        Pt = function(e) {
                            var t = {
                                deviceId: e.options.deviceId,
                                userId: e.options.userId,
                                optOut: e.options.optOut,
                                sessionId: e._sessionId,
                                lastEventTime: e._lastEventTime,
                                eventId: e._eventId,
                                identifyId: e._identifyId,
                                sequenceNumber: e._sequenceNumber
                            };
                            e._useOldCookie ? e.cookieStorage.set(e.options.cookieName + e._storageSuffix, t) : e._metadataStorage.save(t)
                        };
                    Et.prototype._initUtmData = function(e, t) {
                        e = e || this._getUrlParams();
                        var n = function(e, t) {
                            var n = e ? "?" + e.split(".").slice(-1)[0].replace(/\|/g, "&") : "",
                                i = function(e, t, n, i) {
                                    return Ee(e, t) || Ee(n, i)
                                },
                                o = i(Z, t, "utmcsr", n),
                                r = i(Y, t, "utmcmd", n),
                                s = i(ee, t, "utmccn", n),
                                a = i(te, t, "utmctr", n),
                                u = i(ne, t, "utmcct", n),
                                c = {},
                                p = function(e, t) {
                                    ke(t) || (c[e] = t)
                                };
                            return p(Z, o), p(Y, r), p(ee, s), p(te, a), p(ne, u), c
                        }(t = t || this.cookieStorage.get("__utmz"), e);
                        return Tt(this, n), n
                    }, Et.prototype._unsetUTMParams = function() {
                        var e = new ot;
                        e.unset(X), e.unset(Z), e.unset(Y), e.unset(ee), e.unset(te), e.unset(ne), this.identify(e)
                    };
                    var Tt = function(e, t) {
                        if ("object" === pe(t) && 0 !== Object.keys(t).length) {
                            var n = new ot;
                            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n.setOnce("initial_" + i, t[i]), n.set(i, t[i]));
                            e.identify(n)
                        }
                    };
                    Et.prototype._getReferrer = function() {
                        return document.referrer
                    }, Et.prototype._getUrlParams = function() {
                        return location.search
                    }, Et.prototype._saveGclid = function(e) {
                        var t = Ee("gclid", e);
                        if (!ke(t)) {
                            var n = {
                                gclid: t
                            };
                            return Tt(this, n), n
                        }
                    }, Et.prototype._saveFbclid = function(e) {
                        var t = Ee("fbclid", e);
                        if (!ke(t)) {
                            var n = {
                                fbclid: t
                            };
                            return Tt(this, n), n
                        }
                    }, Et.prototype._getDeviceIdFromUrlParam = function(e) {
                        return Ee(Q, e)
                    }, Et.prototype._getReferringDomain = function(e) {
                        if (ke(e)) return null;
                        var t = e.split("/");
                        return t.length >= 3 ? t[2] : null
                    }, Et.prototype._saveReferrer = function(e) {
                        if (!ke(e)) {
                            var t = {
                                referrer: e,
                                referring_domain: this._getReferringDomain(e)
                            };
                            return Tt(this, t), t
                        }
                    }, Et.prototype.saveEvents = function() {
                        try {
                            var e = JSON.stringify(this._unsentEvents.map((function(e) {
                                return e.event
                            })));
                            this._setInStorage(Ye, this.options.unsentKey, e)
                        } catch (Wt) {}
                        try {
                            var t = JSON.stringify(this._unsentIdentifys.map((function(e) {
                                return e.event
                            })));
                            this._setInStorage(Ye, this.options.unsentIdentifyKey, t)
                        } catch (Wt) {}
                    }, Et.prototype.setDomain = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setDomain"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (Ne(e, "domain", "string")) try {
                            this.cookieStorage.options({
                                expirationDays: this.options.cookieExpiration,
                                secure: this.options.secureCookie,
                                domain: e,
                                sameSite: this.options.sameSiteCookie
                            }), this.options.domain = this.cookieStorage.options().domain, Nt(this), Pt(this)
                        } catch (Wt) {
                            Se.error(Wt)
                        }
                    }, Et.prototype.setUserId = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setUserId"].concat(Array.prototype.slice.call(arguments, 0)));
                        try {
                            this.options.userId = void 0 !== e && null !== e && "" + e || null, Pt(this)
                        } catch (Wt) {
                            Se.error(Wt)
                        }
                    }, Et.prototype.setGroup = function(e, t) {
                        if (this._shouldDeferCall()) return this._q.push(["setGroup"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("setGroup()") && Ne(e, "groupType", "string") && !ke(e)) {
                            var n = {};
                            n[e] = t;
                            var i = (new ot).set(e, t);
                            this._logEvent(k, null, null, i.userPropertiesOperations, n, null, null, null)
                        }
                    }, Et.prototype.setOptOut = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setOptOut"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (Ne(e, "enable", "boolean")) try {
                            this.options.optOut = e, Pt(this)
                        } catch (Wt) {
                            Se.error(Wt)
                        }
                    }, Et.prototype.setSessionId = function(e) {
                        if (Ne(e, "sessionId", "number")) try {
                            this._sessionId = e, Pt(this)
                        } catch (Wt) {
                            Se.error(Wt)
                        }
                    }, Et.prototype.resetSessionId = function() {
                        this.setSessionId((new Date).getTime())
                    }, Et.prototype.regenerateDeviceId = function() {
                        if (this._shouldDeferCall()) return this._q.push(["regenerateDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
                        this.setDeviceId(je())
                    }, Et.prototype.setDeviceId = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (Ae(e)) try {
                            ke(e) || (this.options.deviceId = "" + e, Pt(this))
                        } catch (Wt) {
                            Se.error(Wt)
                        }
                    }, Et.prototype.setTransport = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setTransport"].concat(Array.prototype.slice.call(arguments, 0)));
                        Pe(e) && (this.options.transport = e)
                    }, Et.prototype.setUserProperties = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("setUserProperties()") && Ne(e, "userProperties", "object")) {
                            var t = Oe(Ce(e));
                            if (0 !== Object.keys(t).length) {
                                var n = new ot;
                                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && n.set(i, t[i]);
                                this.identify(n)
                            }
                        }
                    }, Et.prototype.clearUserProperties = function() {
                        if (this._shouldDeferCall()) return this._q.push(["clearUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("clearUserProperties()")) {
                            var e = new ot;
                            e.clearAll(), this.identify(e)
                        }
                    };
                    var jt = function(e, t) {
                        for (var n = 0; n < t._q.length; n++) {
                            var i = e[t._q[n][0]];
                            "function" === pe(i) && i.apply(e, t._q[n].slice(1))
                        }
                        return e
                    };
                    Et.prototype.identify = function(e, t, n) {
                        if (this._shouldDeferCall()) return this._q.push(["identify"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("identify()"))
                            if ("object" === pe(e) && Object.prototype.hasOwnProperty.call(e, "_q") && (e = jt(new ot, e)), e instanceof ot) {
                                if (Object.keys(e.userPropertiesOperations).length > 0) return this._logEvent(k, null, null, e.userPropertiesOperations, null, null, null, t, n);
                                Kt(t, n, 0, "No request sent", {
                                    reason: "No user property operations"
                                })
                            } else Se.error("Invalid identify input type. Expected Identify object but saw " + pe(e)), Kt(t, n, 0, "No request sent", {
                                reason: "Invalid identify input type"
                            });
                        else Kt(t, n, 0, "No request sent", {
                            reason: "API key is not set"
                        })
                    }, Et.prototype.groupIdentify = function(e, t, n, i, o) {
                        if (this._shouldDeferCall()) return this._q.push(["groupIdentify"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("groupIdentify()"))
                            if (Ne(e, "group_type", "string") && !ke(e))
                                if (null !== t && void 0 !== t)
                                    if ("object" === pe(n) && Object.prototype.hasOwnProperty.call(n, "_q") && (n = jt(new ot, n)), n instanceof ot) {
                                        if (Object.keys(n.userPropertiesOperations).length > 0) return this._logEvent(E, null, null, null, a({}, e, t), n.userPropertiesOperations, null, i, o);
                                        Kt(i, o, 0, "No request sent", {
                                            reason: "No group property operations"
                                        })
                                    } else Se.error("Invalid identify input type. Expected Identify object but saw " + pe(n)), Kt(i, o, 0, "No request sent", {
                                        reason: "Invalid identify input type"
                                    });
                        else Kt(i, o, 0, "No request sent", {
                            reason: "Invalid group name"
                        });
                        else Kt(i, o, 0, "No request sent", {
                            reason: "Invalid group type"
                        });
                        else Kt(i, o, 0, "No request sent", {
                            reason: "API key is not set"
                        })
                    }, Et.prototype.setVersionName = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["setVersionName"].concat(Array.prototype.slice.call(arguments, 0)));
                        Ne(e, "versionName", "string") && (this.options.versionName = e)
                    }, Et.prototype._logEvent = function(e, t, n, i, o, r, s, a, c) {
                        if (Nt(this), e)
                            if (this.options.optOut) Kt(a, c, 0, "No request sent", {
                                reason: "optOut is set to true"
                            });
                            else try {
                                var p;
                                p = e === k || e === E ? this.nextIdentifyId() : this.nextEventId();
                                var l = this.nextSequenceNumber(),
                                    d = "number" === pe(s) ? s : (new Date).getTime();
                                (!this._sessionId || !this._lastEventTime || d - this._lastEventTime > this.options.sessionTimeout) && (this._sessionId = d), this._lastEventTime = d, Pt(this);
                                var h = this._ua.browser.name,
                                    f = this._ua.browser.major,
                                    v = this._ua.device.model || this._ua.os.name,
                                    g = this._ua.device.vendor;
                                i = i || {};
                                var y = u({}, this._apiPropertiesTrackingOptions);
                                n = u({}, n || {}, y), t = t || {}, o = o || {}, r = r || {};
                                var m = {
                                    device_id: this.options.deviceId,
                                    user_id: this.options.userId,
                                    timestamp: d,
                                    event_id: p,
                                    session_id: this._sessionId || -1,
                                    event_type: e,
                                    version_name: this.options.versionName || null,
                                    platform: Rt(this, "platform") ? this.options.platform : null,
                                    os_name: Rt(this, "os_name") && h || null,
                                    os_version: Rt(this, "os_version") && f || null,
                                    device_model: Rt(this, "device_model") && v || null,
                                    device_manufacturer: Rt(this, "device_manufacturer") && g || null,
                                    language: Rt(this, "language") ? this.options.language : null,
                                    api_properties: n,
                                    event_properties: Oe(Ce(t)),
                                    user_properties: Oe(Ce(i)),
                                    uuid: bt(),
                                    library: this.options.library,
                                    sequence_number: l,
                                    groups: Oe(xe(o)),
                                    group_properties: Oe(Ce(r)),
                                    user_agent: this._userAgent
                                };
                                return qt(this) && (m.plan = {
                                    branch: this.options.plan.branch || void 0,
                                    source: this.options.plan.source || void 0,
                                    version: this.options.plan.version || void 0
                                }), e === k || e === E ? (this._unsentIdentifys.push({
                                    event: m,
                                    callback: a,
                                    errorCallback: c
                                }), this._limitEventsQueued(this._unsentIdentifys)) : (this._unsentEvents.push({
                                    event: m,
                                    callback: a,
                                    errorCallback: c
                                }), this._limitEventsQueued(this._unsentEvents)), this.options.saveEvents && this.saveEvents(), this._sendEventsIfReady(), p
                            } catch (Wt) {
                                Se.error(Wt)
                            } else Kt(a, c, 0, "No request sent", {
                                reason: "Missing eventType"
                            })
                    };
                    var qt = function(e) {
                            return e.options.plan && (e.options.plan.source || e.options.plan.branch || e.options.plan.version)
                        },
                        Rt = function(e, t) {
                            return !!e.options.trackingOptions[t]
                        },
                        Dt = function(e) {
                            for (var t = ["city", "country", "dma", "ip_address", "region"], n = {}, i = 0; i < t.length; i++) {
                                var o = t[i];
                                Rt(e, o) || (n[o] = !1)
                            }
                            return n
                        };
                    Et.prototype._limitEventsQueued = function(e) {
                        e.length > this.options.savedMaxCount && e.splice(0, e.length - this.options.savedMaxCount).forEach((function(e) {
                            Kt(e.callback, e.errorCallback, 0, "No request sent", {
                                reason: "Event dropped because options.savedMaxCount exceeded. User may be offline or have a content blocker"
                            })
                        }))
                    }, Et.prototype.logEvent = function(e, t, n, i) {
                        return this._shouldDeferCall() ? this._q.push(["logEvent"].concat(Array.prototype.slice.call(arguments, 0))) : this.logEventWithTimestamp(e, t, null, n, i)
                    }, Et.prototype.logEventWithTimestamp = function(e, t, n, i, o) {
                        return this._shouldDeferCall() ? this._q.push(["logEventWithTimestamp"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEvent()") ? Ne(e, "eventType", "string") ? ke(e) ? (Kt(i, o, 0, "No request sent", {
                            reason: "Missing eventType"
                        }), -1) : this._logEvent(e, t, null, null, null, null, n, i, o) : (Kt(i, o, 0, "No request sent", {
                            reason: "Invalid type for eventType"
                        }), -1) : (Kt(i, o, 0, "No request sent", {
                            reason: "API key not set"
                        }), -1)
                    }, Et.prototype.logEventWithGroups = function(e, t, n, i, o) {
                        return this._shouldDeferCall() ? this._q.push(["logEventWithGroups"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEventWithGroups()") ? Ne(e, "eventType", "string") ? this._logEvent(e, t, null, null, n, null, null, i, o) : (Kt(event.callback, event.errorCallback, 0, "No request sent", {
                            reason: "Invalid type for eventType"
                        }), -1) : (Kt(event.callback, event.errorCallback, 0, "No request sent", {
                            reason: "API key not set"
                        }), -1)
                    };
                    var Ut = function(e) {
                            return !isNaN(parseFloat(e)) && isFinite(e)
                        },
                        Kt = function(e, t, n, i, o) {
                            "function" === pe(e) && e(n, i, o), "function" === pe(t) && t(n, i, o)
                        };
                    Et.prototype.logRevenueV2 = function(e) {
                        if (this._shouldDeferCall()) return this._q.push(["logRevenueV2"].concat(Array.prototype.slice.call(arguments, 0)));
                        if (this._apiKeySet("logRevenueV2()"))
                            if ("object" === pe(e) && Object.prototype.hasOwnProperty.call(e, "_q") && (e = jt(new yt, e)), e instanceof yt) {
                                if (e && e._isValidRevenue()) return this.logEvent(G, e._toJSONObject())
                            } else Se.error("Invalid revenue input type. Expected Revenue object but saw " + pe(e))
                    }, Et.prototype.logRevenue = function(e, t, n) {
                        return this._shouldDeferCall() ? this._q.push(["logRevenue"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logRevenue()") && Ut(e) && (void 0 === t || Ut(t)) ? this._logEvent(G, {}, {
                            productId: n,
                            special: "revenue_amount",
                            quantity: t || 1,
                            price: e
                        }, null, null, null, null, null) : -1
                    }, Et.prototype._logErrorsOnEvents = function(e, t, n, i) {
                        for (var o = ["_unsentEvents", "_unsentIdentifys"], r = 0; r < o.length; r++)
                            for (var s = o[r], a = "_unsentEvents" === s ? e : t, u = 0; u < this[s].length; u++) {
                                var c = this[s][u];
                                c.event.event_id <= a && c.errorCallback && c.errorCallback(n, i)
                            }
                    }, Et.prototype.removeEvents = function(e, t, n, i) {
                        Lt(this, "_unsentEvents", e, n, i), Lt(this, "_unsentIdentifys", t, n, i)
                    };
                    var Lt = function(e, t, n, i, o) {
                        if (!(n < 0)) {
                            for (var r = [], s = 0; s < e[t].length; s++) {
                                var a = e[t][s];
                                a.event.event_id > n ? r.push(a) : a.callback && a.callback(i, o)
                            }
                            e[t] = r
                        }
                    };
                    Et.prototype.sendEvents = function() {
                        if (this._apiKeySet("sendEvents()")) {
                            if (this.options.optOut) this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                                reason: "Opt out is set to true"
                            });
                            else if (0 !== this._unsentCount()) {
                                if (this.options.transport !== re) {
                                    if (this._sending) return;
                                    this._sending = !0
                                }
                                var e = (this.options.forceHttps || "https:" === window.location.protocol ? "https" : "http") + "://" + this.options.apiEndpoint,
                                    t = Math.min(this._unsentCount(), this.options.uploadBatchSize),
                                    n = this._mergeEventsAndIdentifys(t),
                                    i = n.maxEventId,
                                    o = n.maxIdentifyId,
                                    r = JSON.stringify(n.eventsToSend.map((function(e) {
                                        return e.event
                                    }))),
                                    s = (new Date).getTime(),
                                    a = {
                                        client: this.options.apiKey,
                                        e: r,
                                        v: _,
                                        upload_time: s,
                                        checksum: at(_ + this.options.apiKey + r + s)
                                    };
                                if (this.options.transport !== re) {
                                    var u = this;
                                    new gt(e, a, this.options.headers).send((function(e, n) {
                                        u._sending = !1;
                                        try {
                                            200 === e && "success" === n ? (u.removeEvents(i, o, e, n), u.options.saveEvents && u.saveEvents(), u._sendEventsIfReady()) : (u._logErrorsOnEvents(i, o, e, n), 413 === e && (1 === u.options.uploadBatchSize && u.removeEvents(i, o, e, n), u.options.uploadBatchSize = Math.ceil(t / 2), u.sendEvents()))
                                        } catch (Wt) {}
                                    }))
                                } else navigator.sendBeacon(e, new URLSearchParams(a)) ? (this.removeEvents(i, o, 200, "success"), this.options.saveEvents && this.saveEvents()) : this._logErrorsOnEvents(i, o, 0, "")
                            }
                        } else this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                            reason: "API key not set"
                        })
                    }, Et.prototype._mergeEventsAndIdentifys = function(e) {
                        for (var t = [], n = 0, i = -1, o = 0, r = -1; t.length < e;) {
                            var s = void 0,
                                a = o >= this._unsentIdentifys.length,
                                u = n >= this._unsentEvents.length;
                            if (u && a) {
                                Se.error("Merging Events and Identifys, less events and identifys than expected");
                                break
                            }
                            a ? i = (s = this._unsentEvents[n++]).event.event_id : u ? r = (s = this._unsentIdentifys[o++]).event.event_id : !("sequence_number" in this._unsentEvents[n].event) || this._unsentEvents[n].event.sequence_number < this._unsentIdentifys[o].event.sequence_number ? i = (s = this._unsentEvents[n++]).event.event_id : r = (s = this._unsentIdentifys[o++]).event.event_id, t.push(s)
                        }
                        return {
                            eventsToSend: t,
                            maxEventId: i,
                            maxIdentifyId: r
                        }
                    }, Et.prototype.setGlobalUserProperties = function(e) {
                        this.setUserProperties(e)
                    }, Et.prototype.__VERSION__ = function() {
                        return this.options.library.version
                    }, Et.prototype.setLibrary = function(e, t) {
                        this.options.library = {
                            name: e,
                            version: t
                        }
                    }, Et.prototype._shouldDeferCall = function() {
                        return this._pendingReadStorage || this._initializationDeferred
                    }, Et.prototype._deferInitialization = function() {
                        this._initializationDeferred = !0, this._q.push(["init"].concat(Array.prototype.slice.call(arguments, 0)))
                    }, Et.prototype.enableTracking = function() {
                        this._initializationDeferred = !1, Pt(this), this.runQueuedFunctions()
                    }, Et.prototype._refreshDynamicConfig = function() {
                        this.options.useDynamicConfig && kt.refresh(this.options.serverZone, this.options.forceHttps, function() {
                            this.options.apiEndpoint = kt.ingestionEndpoint
                        }.bind(this))
                    };
                    var zt = function() {
                        this.options = u({}, St), this._q = [], this._instances = {}
                    };
                    zt.prototype.Identify = ot, zt.prototype.Revenue = yt, zt.prototype.getInstance = function(e) {
                        e = ke(e) ? w : e.toLowerCase();
                        var t = this._instances[e];
                        return void 0 === t && (t = new Et(e), this._instances[e] = t), t
                    }, zt.prototype.runQueuedFunctions = function() {
                        for (var e = 0; e < this._q.length; e++) {
                            var t = this[this._q[e][0]];
                            "function" === pe(t) && t.apply(this, this._q[e].slice(1))
                        }
                        for (var n in this._q = [], this._instances) Object.prototype.hasOwnProperty.call(this._instances, n) && this._instances[n].runQueuedFunctions()
                    }, zt.prototype.init = function(e, t, n, i) {
                        this.getInstance().init(e, t, n, function(e) {
                            this.options = e.options, "function" === pe(i) && i(e)
                        }.bind(this))
                    }, zt.prototype.isNewSession = function() {
                        return this.getInstance().isNewSession()
                    }, zt.prototype.getSessionId = function() {
                        return this.getInstance().getSessionId()
                    }, zt.prototype.nextEventId = function() {
                        return this.getInstance().nextEventId()
                    }, zt.prototype.nextIdentifyId = function() {
                        return this.getInstance().nextIdentifyId()
                    }, zt.prototype.nextSequenceNumber = function() {
                        return this.getInstance().nextSequenceNumber()
                    }, zt.prototype.saveEvents = function() {
                        this.getInstance().saveEvents()
                    }, zt.prototype.setDomain = function(e) {
                        this.getInstance().setDomain(e)
                    }, zt.prototype.setUserId = function(e) {
                        this.getInstance().setUserId(e)
                    }, zt.prototype.setGroup = function(e, t) {
                        this.getInstance().setGroup(e, t)
                    }, zt.prototype.setOptOut = function(e) {
                        this.getInstance().setOptOut(e)
                    }, zt.prototype.regenerateDeviceId = function() {
                        this.getInstance().regenerateDeviceId()
                    }, zt.prototype.setDeviceId = function(e) {
                        this.getInstance().setDeviceId(e)
                    }, zt.prototype.setUserProperties = function(e) {
                        this.getInstance().setUserProperties(e)
                    }, zt.prototype.clearUserProperties = function() {
                        this.getInstance().clearUserProperties()
                    }, zt.prototype.identify = function(e, t) {
                        this.getInstance().identify(e, t)
                    }, zt.prototype.setVersionName = function(e) {
                        this.getInstance().setVersionName(e)
                    }, zt.prototype.logEvent = function(e, t, n) {
                        return this.getInstance().logEvent(e, t, n)
                    }, zt.prototype.logEventWithGroups = function(e, t, n, i) {
                        return this.getInstance().logEventWithGroups(e, t, n, i)
                    }, zt.prototype.logRevenueV2 = function(e) {
                        return this.getInstance().logRevenueV2(e)
                    }, zt.prototype.logRevenue = function(e, t, n) {
                        return this.getInstance().logRevenue(e, t, n)
                    }, zt.prototype.removeEvents = function(e, t) {
                        this.getInstance().removeEvents(e, t)
                    }, zt.prototype.sendEvents = function(e) {
                        this.getInstance().sendEvents(e)
                    }, zt.prototype.setGlobalUserProperties = function(e) {
                        this.getInstance().setUserProperties(e)
                    }, zt.prototype.__VERSION__ = It;
                    var Ft = "undefined" !== typeof window && window.amplitude || {},
                        Mt = new zt;
                    for (var $t in Mt._q = Ft._q || [], Ft._iq) Object.prototype.hasOwnProperty.call(Ft._iq, $t) && (Mt.getInstance($t)._q = Ft._iq[$t]._q || []);
                    return Mt.runQueuedFunctions(), Mt
                }, e.exports = o()
            }).call(this, n("5IsQ"), n("bqPV"), n("qykS").Buffer)
        }
    }
]);
//# sourceMappingURL=174.b09714f0d72f737991de.js.map