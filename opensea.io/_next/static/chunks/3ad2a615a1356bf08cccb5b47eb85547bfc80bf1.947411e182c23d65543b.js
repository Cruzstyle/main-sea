(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [29], {
        "/yvF": function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return y
            }));
            a("mXGw");
            var l, t = a("aXrf"),
                i = a("3+lx"),
                r = a("8uvj"),
                s = a("3Eee"),
                o = a("QrBS"),
                c = a("n0tG"),
                u = a("C/iq"),
                d = a("JewV"),
                g = a("oYCi"),
                y = function(e) {
                    var n, y = e.value,
                        m = e.logo,
                        p = e.subtleText,
                        b = void 0 !== p && p,
                        h = e.size,
                        j = void 0 === h ? "medium" : h,
                        f = e.useAssetLogo,
                        k = Object(t.useFragment)(void 0 !== l ? l : l = a("AqLa"), null !== m && void 0 !== m ? m : null),
                        O = "small" === j ? 12 : 14,
                        x = !(void 0 === y || "0" === y),
                        v = x && f,
                        S = null !== (n = null === k || void 0 === k ? void 0 : k.symbol) && void 0 !== n ? n : "ETH",
                        F = x ? f ? y : y + " ".concat(S) : u.nb;
                    return Object(g.jsxs)(o.a, {
                        alignItems: "center",
                        children: [v && Object(g.jsx)(o.a, {
                            alignItems: "center",
                            display: "inline-flex",
                            height: "small" === j ? "20px" : "22px",
                            marginRight: "small" === j ? "2px" : "4px",
                            children: k ? Object(g.jsx)(s.a, {
                                data: k,
                                size: O
                            }) : Object(g.jsx)(i.a, {
                                size: O
                            })
                        }), b ? Object(g.jsx)(d.c, {
                            children: Object(g.jsx)(r.a, {
                                children: F
                            })
                        }) : Object(g.jsx)(c.a.Body, {
                            color: "text.heading",
                            size: j,
                            weight: "semibold",
                            children: Object(g.jsx)(r.a, {
                                children: F
                            })
                        })]
                    })
                }
        },
        "6vT1": function(e, n, a) {
            "use strict";
            a.d(n, "d", (function() {
                return b
            })), a.d(n, "e", (function() {
                return h
            })), a.d(n, "f", (function() {
                return W
            })), a.d(n, "g", (function() {
                return g.i
            })), a.d(n, "b", (function() {
                return g.e
            })), a.d(n, "c", (function() {
                return g.f
            })), a.d(n, "a", (function() {
                return g.d
            }));
            var l, t, i, r, s = a("mXGw"),
                o = a("Nmkv"),
                c = a("z2//"),
                u = a("aXrf"),
                d = a("heV+"),
                g = a("iZQ/"),
                y = a("xLhm"),
                m = a("8F/z"),
                p = a("oYCi"),
                b = function(e) {
                    var n, t = e.data,
                        i = Object(u.usePaginationFragment)(void 0 !== l ? l : l = a("nswt"), t);
                    return Object(p.jsx)(y.a, {
                        currentTab: "top",
                        rankings: (null === (n = i.data) || void 0 === n ? void 0 : n.rankings) || null,
                        rankingsPaginationFragment: i
                    })
                };
            b.query = void 0 !== t ? t : t = a("zjQZ"), b.cachePolicy = {
                maxAge: 30,
                revalidate: 60
            }, b.getInitialProps = d.a.nextParser({
                category: d.a.Optional(d.a.CategorySlug),
                chain: d.a.Optional(d.a.ChainIdentifier),
                sortBy: d.a.Optional(d.a.string)
            }, (function(e) {
                var n, a = e.category,
                    l = e.chain,
                    t = e.sortBy,
                    i = null === (n = Object(m.g)({
                        isStatsV2Enabled: !1
                    }).find((function(e) {
                        return e.value === a && "new" !== a
                    }))) || void 0 === n ? void 0 : n.value;
                return {
                    categorySlug: a,
                    variables: {
                        chain: l ? [l] : void 0,
                        count: Object(m.k)(a, l),
                        createdAfter: "new" === a ? Object(o.a)(Object(c.a)(new Date, g.e)) : void 0,
                        sortBy: g.h.get(t || "one_day_volume"),
                        parents: i ? [i] : void 0
                    }
                }
            }));
            var h = function(e) {
                var n, l = e.data,
                    t = Object(u.usePaginationFragment)(void 0 !== i ? i : i = a("QVso"), l);
                return Object(p.jsx)(y.a, {
                    currentTab: "trending",
                    rankings: (null === (n = t.data) || void 0 === n ? void 0 : n.trendingCollections) || null,
                    rankingsPaginationFragment: t
                })
            };
            h.query = void 0 !== r ? r : r = a("L1pF"), h.cachePolicy = {
                maxAge: 30,
                revalidate: 60
            }, h.getInitialProps = d.a.nextParser({
                category: d.a.Optional(d.a.CategorySlug),
                chain: d.a.Optional(d.a.ChainIdentifier),
                sortBy: d.a.Optional(d.a.string)
            }, (function(e) {
                var n = e.category,
                    a = e.chain;
                return {
                    variables: {
                        chain: a ? [a] : void 0,
                        count: m.b,
                        categories: n ? [n] : [],
                        eligibleCount: m.a
                    }
                }
            }));
            var j = a("h64z"),
                f = a("XHwO"),
                k = a("O4Bb"),
                O = a("/Kpl"),
                x = a("m6w3"),
                v = a("UutA"),
                S = a("LoMF"),
                F = a("67yl"),
                C = a("sX+s"),
                T = a("n0tG");

            function w(e, n) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n && (l = l.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function K(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? w(Object(a), !0).forEach((function(n) {
                        Object(x.a)(e, n, a[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : w(Object(a)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
                    }))
                }
                return e
            }
            var P, V, L = Object(v.d)(F.a).withConfig({
                    componentId: "sc-t7txpy-0"
                })(["", ""], Object(C.e)({
                    sm: Object(v.c)(["display:none;"])
                })),
                D = Object(v.d)(F.a).withConfig({
                    componentId: "sc-t7txpy-1"
                })(["display:none;", ""], Object(C.e)({
                    sm: Object(v.c)(["display:flex;"])
                })),
                A = function(e) {
                    var n = e.text,
                        a = e.buttonText,
                        l = e.buttonProps;
                    return Object(p.jsxs)(p.Fragment, {
                        children: [Object(p.jsxs)(L, {
                            padding: "64px 0",
                            children: [Object(p.jsx)(T.a.Body, {
                                color: "text.subtle",
                                paddingBottom: "24px",
                                size: "medium",
                                textAlign: "center",
                                weight: "semibold",
                                children: n
                            }), Object(p.jsx)(S.c, K(K({}, l), {}, {
                                size: "xsmall",
                                children: a
                            }))]
                        }), Object(p.jsxs)(D, {
                            padding: "64px 0",
                            children: [Object(p.jsx)(T.a.Heading, {
                                color: "text.subtle",
                                paddingBottom: "24px",
                                size: "small",
                                textAlign: "center",
                                children: n
                            }), Object(p.jsx)(S.c, K(K({}, l), {}, {
                                size: "small",
                                children: a
                            }))]
                        })]
                    })
                },
                _ = function() {
                    var e = Object(j.a)().updateContext;
                    return Object(p.jsx)(A, {
                        buttonProps: {
                            onClick: function() {
                                return e({
                                    isWalletSidebarOpen: !0
                                })
                            }
                        },
                        buttonText: "Connect wallet",
                        text: "Connect your wallet to view your watchlist."
                    })
                },
                I = function() {
                    return Object(p.jsx)(A, {
                        buttonProps: {
                            href: "/explore-collections"
                        },
                        buttonText: "Explore collections",
                        text: "Collections you add to your watchlist will appear here."
                    })
                },
                R = a("qpQ5"),
                B = function(e) {
                    var n, l, t = e.data,
                        i = e.identity,
                        r = Object(u.usePaginationFragment)(void 0 !== P ? P : P = a("CYed"), t);
                    return Object(p.jsx)(y.a, {
                        currentTab: "watchlist",
                        displayRankIndex: !1,
                        emptyView: Object(p.jsx)(I, {}),
                        paginateViaLoadNext: !0,
                        rankings: i && (null === (n = r.data) || void 0 === n || null === (l = n.getAccount.user) || void 0 === l ? void 0 : l.collectionWatchlist) || null,
                        rankingsPaginationFragment: r,
                        showCategoryAndChainFilters: !1
                    })
                },
                N = function() {
                    return Object(s.useEffect)((function() {
                        Object(k.v)({
                            category: "allnfts",
                            chain: "all",
                            currentTab: "watchlist",
                            sortBy: null,
                            columnSort: "Volume",
                            sortAscending: !1,
                            currentPage: null
                        })
                    }), []), Object(p.jsx)(f.a, {
                        eventParams: {
                            currentTab: "watchlist"
                        },
                        eventSource: g.c,
                        children: Object(p.jsx)(R.a, {
                            chainLabel: "",
                            chainValue: "all",
                            currentTab: "watchlist",
                            pagination: Object(p.jsx)(p.Fragment, {}),
                            tableContent: Object(p.jsx)(_, {})
                        })
                    })
                },
                W = function(e) {
                    var n, a = e.data,
                        l = null === (n = Object(j.a)().wallet.getActiveAccountKey()) || void 0 === n ? void 0 : n.address;
                    return l ? Object(p.jsx)(B, {
                        data: a,
                        identity: l
                    }) : Object(p.jsx)(N, {})
                };
            W.query = void 0 !== V ? V : V = a("ffdF"), W.getInitialProps = function(e) {
                var n, a = null === (n = O.a.fromContext(e).getActiveAccountKey()) || void 0 === n ? void 0 : n.address;
                return {
                    identity: a,
                    variables: {
                        count: Object(m.k)(void 0, void 0, !0),
                        identity: a,
                        noIdentity: !a
                    }
                }
            }
        },
        "8F/z": function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return g
            })), a.d(n, "b", (function() {
                return y
            })), a.d(n, "h", (function() {
                return h
            })), a.d(n, "l", (function() {
                return j
            })), a.d(n, "i", (function() {
                return k
            })), a.d(n, "q", (function() {
                return O
            })), a.d(n, "p", (function() {
                return x
            })), a.d(n, "k", (function() {
                return v
            })), a.d(n, "e", (function() {
                return S
            })), a.d(n, "f", (function() {
                return F
            })), a.d(n, "d", (function() {
                return C
            })), a.d(n, "c", (function() {
                return T
            })), a.d(n, "o", (function() {
                return K
            })), a.d(n, "g", (function() {
                return P
            })), a.d(n, "n", (function() {
                return V
            })), a.d(n, "m", (function() {
                return L
            })), a.d(n, "j", (function() {
                return D
            }));
            var l = a("m6w3"),
                t = a("ZmYT"),
                i = a("LsOE"),
                r = a("BmUw"),
                s = a("LjoF"),
                o = a("C/iq"),
                c = a("iZQ/");

            function u(e, n) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n && (l = l.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function d(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? u(Object(a), !0).forEach((function(n) {
                        Object(l.a)(e, n, a[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : u(Object(a)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
                    }))
                }
                return e
            }
            var g = 500,
                y = 100,
                m = 1e-5,
                p = ["oneDayChange", "sevenDayChange", "thirtyDayChange"],
                b = ["percentUniqueOwners", "percentListed"],
                h = function(e, n, a, l) {
                    var t = Object(i.c)(e).length,
                        r = Object(i.c)(e).map((function(e, n) {
                            return d(d({}, e), {}, {
                                index: n
                            })
                        })).slice(0, t);
                    return "24h %" === n && r.sort((function(e, n) {
                        return function(e, n, a) {
                            var l = e.statsV2[a],
                                t = n.statsV2[a];
                            return l && t ? l > t ? -1 : t > l ? 1 : 0 : l ? -1 : 1
                        }(e, n, "oneDayChange")
                    })), (a ? r.reverse() : r).slice(l * c.g, (l + 1) * c.g)
                },
                j = function(e, n, a, l, t, r) {
                    var o, u;
                    r ? (o = 0, u = Object(i.c)(e).length) : (o = l * c.g, u = (l + 1) * c.g);
                    var g = Object(i.c)(e).map((function(e, n) {
                            return d(d({}, e), {}, {
                                index: n
                            })
                        })).slice(o, u),
                        y = f(n, t);
                    y && g.sort((function(e, n) {
                        return function(e, n, l) {
                            var t, i, r = a ? -1 : 1,
                                s = a ? 1 : -1;
                            if ("percentUniqueOwners" === l) t = e.statsV2.numOwners / parseFloat(e.statsV2.totalQuantity), i = n.statsV2.numOwners / parseFloat(n.statsV2.totalQuantity);
                            else if ("percentListed" === l) {
                                if (t = e.statsV2.totalListed / e.statsV2.totalSupply, i = n.statsV2.totalListed / n.statsV2.totalSupply, e.statsV2.totalSupply !== parseFloat(e.statsV2.totalQuantity)) return r;
                                if (n.statsV2.totalSupply !== parseFloat(n.statsV2.totalQuantity)) return s
                            } else if ("floorPrice" === l) {
                                var o, c, u, d;
                                if (t = parseFloat(null !== (o = null === (c = e.statsV2.floorPrice) || void 0 === c ? void 0 : c.eth) && void 0 !== o ? o : "0"), i = parseFloat(null !== (u = null === (d = n.statsV2.floorPrice) || void 0 === d ? void 0 : d.eth) && void 0 !== u ? u : "0"), 0 === t || 0 === e.statsV2.totalListed) return r;
                                if (0 === i || 0 === n.statsV2.totalListed) return s
                            } else t = e.statsV2[l], i = n.statsV2[l];
                            if (b.includes(l)) {
                                if (t > 1 || t < m) return r;
                                if (i > 1 || i < m) return s
                            }
                            if (p.includes(l)) {
                                if (0 === t) return r;
                                if (0 === i) return s
                            }
                            return t && i ? t > i ? -1 : i > t ? 1 : 0 : t ? -1 : 1
                        }(e, n, y)
                    })), "VOLUME" === n && g.sort((function(e, n) {
                        return function(e, n, a) {
                            var l = w(e.statsV2, a).eth,
                                t = w(n.statsV2, a).eth;
                            return Object(s.d)(l).isGreaterThan(t) ? -1 : Object(s.d)(t).isGreaterThan(l) ? 1 : 0
                        }(e, n, t)
                    }));
                    var h = a ? g.reverse() : g;
                    return r ? h.slice(l * c.g, (l + 1) * c.g) : h
                },
                f = function(e, n) {
                    if ("7d %" === e) return "sevenDayChange";
                    if ("24h %" === e) return "oneDayChange";
                    if ("Items" === e) return "totalSupply";
                    if ("Owners" === e) return "numOwners";
                    if ("Floor Price" === e) return "floorPrice";
                    if ("FLOOR PRICE" === e) return "floorPrice";
                    if ("% CHANGE" === e && n) {
                        if ("one_day_volume" === n.value) return "oneDayChange";
                        if ("seven_day_volume" === n.value) return "sevenDayChange";
                        if ("thirty_day_volume" === n.value) return "thirtyDayChange"
                    }
                    if ("SALES" === e && n) {
                        if ("one_day_volume" === n.value) return "oneDaySales";
                        if ("seven_day_volume" === n.value) return "sevenDaySales";
                        if ("thirty_day_volume" === n.value) return "thirtyDaySales";
                        if ("total_volume" === n.value) return "totalSales"
                    }
                    return "% UNIQUE OWNERS" === e ? "percentUniqueOwners" : "% ITEMS LISTED" === e && "percentListed"
                },
                k = function(e, n, a) {
                    var l;
                    return e && null !== (l = n.find((function(n) {
                        return n.value === e
                    }))) && void 0 !== l ? l : a
                },
                O = function(e) {
                    return e.value
                },
                x = function(e, n) {
                    return !t.a && "art" === e && ("matic" === n || "klaytn" === n)
                },
                v = function(e, n, a) {
                    if (a) return 100;
                    if (!t.a) {
                        if ("art" === e) return 500;
                        if (void 0 === n || Object(r.k)(n) || Object(r.o)(n)) return 1e3
                    }
                    return 100
                },
                S = function(e) {
                    return "".concat(e.absoluteValue().isLessThan(1) ? e.toFixed(2) : e.absoluteValue().isLessThan(1e4) ? Number(e.toFixed(0)).toLocaleString() : Object(s.o)(e, {
                        digits: 0,
                        threshold: 1e4
                    }))
                },
                F = function(e) {
                    return "".concat(e.absoluteValue().isLessThan(1) ? e.toFixed(2) : Math.min(Number(e.toFixed(0)), 999999999).toLocaleString())
                },
                C = function(e) {
                    return "".concat(e.absoluteValue().isLessThan(1e4) ? Number(e.toFixed(0)).toLocaleString() : Object(s.o)(e, {
                        digits: 0,
                        threshold: 1e4
                    }))
                },
                T = function(e) {
                    var n = Object(s.d)(e);
                    if (n.isZero()) return "0";
                    var a = Object(s.d)(.01);
                    return n.isGreaterThan(a) ? n.isInteger() ? Number(n).toLocaleString() : "".concat(n.toFixed(2)) : "< ".concat(a.toFixed(2))
                },
                w = function(e, n) {
                    var a = null === n || void 0 === n ? void 0 : n.value;
                    return "one_day_volume" === a ? e.oneDayVolume : "seven_day_volume" === a ? e.sevenDayVolume : "thirty_day_volume" === a ? e.thirtyDayVolume : e.totalVolume
                },
                K = function(e, n) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = w(n.statsV2, e).unit;
                    return a ? S(Object(s.d)(l)) : Object(s.j)(l, 2)
                },
                P = function(e) {
                    var n = e.isStatsV2Enabled;
                    return [{
                        slug: "allnfts",
                        name: "All categories"
                    }, {
                        slug: "new",
                        name: "New"
                    }].concat(o.h).map((function(e) {
                        return {
                            label: e.name,
                            value: e.slug,
                            avatar: n ? void 0 : d(d({}, c.m), {}, {
                                src: "/static/images/icons/".concat(e.slug, "-light.svg"),
                                alt: e.name
                            })
                        }
                    }))
                },
                V = function(e, n) {
                    var a = n.statsV2;
                    return "one_day_volume" === e.value ? a.oneDayChange : "seven_day_volume" === e.value ? a.sevenDayChange : "thirty_day_volume" === e.value ? a.thirtyDayChange : 0
                },
                L = function(e, n) {
                    var a = n.statsV2;
                    return "one_day_volume" === e.value ? a.oneDaySales : "seven_day_volume" === e.value ? a.sevenDaySales : "thirty_day_volume" === e.value ? a.thirtyDaySales : a.totalSales
                },
                D = function(e) {
                    return e.isLessThan(1) ? e.dp(2).toLocaleString() : e.toFixed(0).toLocaleString()
                }
        },
        "9l97": function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return j
            }));
            var l = a("m6w3"),
                t = a("oA/F"),
                i = a("mXGw"),
                r = a("UutA"),
                s = a("LoMF"),
                o = a("QrBS"),
                c = a("oYCi"),
                u = ["variant", "size"];

            function d(e, n) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n && (l = l.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function g(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? d(Object(a), !0).forEach((function(n) {
                        Object(l.a)(e, n, a[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
                    }))
                }
                return e
            }
            var y = Object(i.createContext)({
                    variant: s.b.primary,
                    size: s.a.medium
                }),
                m = Object(i.forwardRef)((function(e, n) {
                    var a = e.variant,
                        l = void 0 === a ? s.b.primary : a,
                        r = e.size,
                        o = void 0 === r ? s.a.medium : r,
                        d = Object(t.a)(e, u),
                        m = Object(i.useMemo)((function() {
                            return {
                                variant: l,
                                size: o
                            }
                        }), [l, o]);
                    return Object(c.jsx)(y.Provider, {
                        value: m,
                        children: Object(c.jsx)(h, g(g({}, d), {}, {
                            ref: n
                        }))
                    })
                })),
                p = Object(r.d)(s.c).withConfig({
                    componentId: "sc-1skvztv-0"
                })(["border-radius:0;&&:not(:first-child){margin-left:-2px;}:first-child{border-top-left-radius:", ";border-bottom-left-radius:", ";}:last-child{border-top-right-radius:", ";border-bottom-right-radius:", ";}:hover{z-index:1;}"], (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.borderRadius.default
                })),
                b = Object(i.forwardRef)((function(e, n) {
                    var a = Object(i.useContext)(y),
                        l = a.variant,
                        t = a.size;
                    return Object(c.jsx)(p, g(g({}, e), {}, {
                        ref: n,
                        size: t,
                        variant: l
                    }))
                })),
                h = Object(r.d)(o.a).withConfig({
                    componentId: "sc-1skvztv-1"
                })(["width:fit-content;"]),
                j = Object.assign(m, {
                    Button: b
                })
        },
        "A+I/": function(e, n, a) {
            "use strict";
            a.r(n);
            var l = function() {
                var e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    },
                    n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "identity"
                    },
                    l = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortAscending"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    },
                    i = [{
                        kind: "Variable",
                        name: "address",
                        variableName: "identity"
                    }],
                    r = {
                        kind: "Variable",
                        name: "sortAscending",
                        variableName: "sortAscending"
                    },
                    s = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    },
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "cursor",
                        storageKey: null
                    },
                    d = {
                        alias: null,
                        args: null,
                        concreteType: "PageInfo",
                        kind: "LinkedField",
                        name: "pageInfo",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "endCursor",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "hasNextPage",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    g = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, r, s],
                    y = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [e, n, a, l, t],
                        kind: "Fragment",
                        metadata: null,
                        name: "StatsV2TableQuery",
                        selections: [{
                            alias: null,
                            args: i,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "getAccount",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "UserType",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [{
                                    alias: "collectionWatchlist",
                                    args: [r, s],
                                    concreteType: "CollectionTypeConnection",
                                    kind: "LinkedField",
                                    name: "__StatsV2Table_collectionWatchlist_connection",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionTypeEdge",
                                        kind: "LinkedField",
                                        name: "edges",
                                        plural: !0,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "CollectionType",
                                            kind: "LinkedField",
                                            name: "node",
                                            plural: !1,
                                            selections: [o, c, {
                                                args: null,
                                                kind: "FragmentSpread",
                                                name: "StatsV2WatchlistButton_data"
                                            }],
                                            storageKey: null
                                        }, u],
                                        storageKey: null
                                    }, d],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [e, n, t, l, a],
                        kind: "Operation",
                        name: "StatsV2TableQuery",
                        selections: [{
                            alias: null,
                            args: i,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "getAccount",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "UserType",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: g,
                                    concreteType: "CollectionTypeConnection",
                                    kind: "LinkedField",
                                    name: "collectionWatchlist",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionTypeEdge",
                                        kind: "LinkedField",
                                        name: "edges",
                                        plural: !0,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "CollectionType",
                                            kind: "LinkedField",
                                            name: "node",
                                            plural: !1,
                                            selections: [o, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "isWatching",
                                                storageKey: null
                                            }, y, c],
                                            storageKey: null
                                        }, u],
                                        storageKey: null
                                    }, d],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: g,
                                    filters: ["sortBy", "sortAscending"],
                                    handle: "connection",
                                    key: "StatsV2Table_collectionWatchlist",
                                    kind: "LinkedHandle",
                                    name: "collectionWatchlist"
                                }, y],
                                storageKey: null
                            }, y],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "d2cf0a5bb028d878b697e1d3892de953",
                        id: null,
                        metadata: {
                            connection: [{
                                count: "count",
                                cursor: "cursor",
                                direction: "forward",
                                path: ["getAccount", "user", "collectionWatchlist"]
                            }]
                        },
                        name: "StatsV2TableQuery",
                        operationKind: "query",
                        text: "query StatsV2TableQuery(\n  $count: Int!\n  $cursor: String\n  $sortBy: CollectionWatchlistSort\n  $sortAscending: Boolean\n  $identity: AddressScalar!\n) {\n  getAccount(address: $identity) {\n    user {\n      collectionWatchlist(after: $cursor, first: $count, sortBy: $sortBy, sortAscending: $sortAscending) {\n        edges {\n          node {\n            slug\n            ...StatsV2WatchlistButton_data\n            id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment StatsV2WatchlistButton_data on CollectionType {\n  isWatching\n}\n"
                    }
                }
            }();
            l.hash = "d55133a3245a897fc359f3dd5610b3e3", n.default = l
        },
        AqLa: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "StatsV2TablePrice_logo",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "symbol",
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "PaymentAssetLogo_data"
                }],
                type: "PaymentAssetType",
                abstractKey: null,
                hash: "a5613f5ff48d20708087076bc6d91fdb"
            };
            n.default = l
        },
        CYed: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = function() {
                var e = ["getAccount", "user", "collectionWatchlist"],
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    l = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    argumentDefinitions: [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "identity"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortAscending"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    kind: "Fragment",
                    metadata: {
                        connection: [{
                            count: "count",
                            cursor: "cursor",
                            direction: "forward",
                            path: e
                        }],
                        refetch: {
                            connection: {
                                forward: {
                                    count: "count",
                                    cursor: "cursor"
                                },
                                backward: null,
                                path: e
                            },
                            fragmentPathInResult: [],
                            operation: a("gfJQ")
                        }
                    },
                    name: "RankingsPageWatchlist_data",
                    selections: [{
                        alias: null,
                        args: [{
                            kind: "Variable",
                            name: "address",
                            variableName: "identity"
                        }],
                        concreteType: "AccountType",
                        kind: "LinkedField",
                        name: "getAccount",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "UserType",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [{
                                alias: "collectionWatchlist",
                                args: [{
                                    kind: "Variable",
                                    name: "sortAscending",
                                    variableName: "sortAscending"
                                }, {
                                    kind: "Variable",
                                    name: "sortBy",
                                    variableName: "sortBy"
                                }],
                                concreteType: "CollectionTypeConnection",
                                kind: "LinkedField",
                                name: "__RankingsPageWatchlist_collectionWatchlist_connection",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionTypeEdge",
                                    kind: "LinkedField",
                                    name: "edges",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionType",
                                        kind: "LinkedField",
                                        name: "node",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "createdDate",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "name",
                                            storageKey: null
                                        }, n, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "logo",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "isVerified",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "relayId",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PaymentAssetType",
                                            kind: "LinkedField",
                                            name: "nativePaymentAsset",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "AssetType",
                                                kind: "LinkedField",
                                                name: "asset",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "symbol",
                                                    storageKey: null
                                                }],
                                                storageKey: null
                                            }, {
                                                args: null,
                                                kind: "FragmentSpread",
                                                name: "CollectionDataTablePrice_logo"
                                            }, {
                                                args: null,
                                                kind: "FragmentSpread",
                                                name: "StatsV2TablePrice_logo"
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "CollectionStatsV2Type",
                                            kind: "LinkedField",
                                            name: "statsV2",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "floorPrice",
                                                plural: !1,
                                                selections: l,
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "numOwners",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "totalSupply",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "totalQuantity",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "totalListed",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "totalSales",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "sevenDaySales",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "sevenDayChange",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "sevenDayVolume",
                                                plural: !1,
                                                selections: l,
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "oneDaySales",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "oneDayChange",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "oneDayVolume",
                                                plural: !1,
                                                selections: l,
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "thirtyDaySales",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "thirtyDayChange",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "thirtyDayVolume",
                                                plural: !1,
                                                selections: l,
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "totalVolume",
                                                plural: !1,
                                                selections: l,
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "__typename",
                                            storageKey: null
                                        }, {
                                            args: null,
                                            kind: "FragmentSpread",
                                            name: "StatsV2CollectionCell_collection"
                                        }, {
                                            kind: "InlineDataFragmentSpread",
                                            name: "collection_url",
                                            selections: [n, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "isCategory",
                                                storageKey: null
                                            }]
                                        }],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "cursor",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PageInfo",
                                    kind: "LinkedField",
                                    name: "pageInfo",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "endCursor",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "hasNextPage",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Query",
                    abstractKey: null
                }
            }();
            l.hash = "d9357c54f83d70621cf81e6bfec0fdf4", n.default = l
        },
        EXqH: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return c
            })), a.d(n, "b", (function() {
                return g
            }));
            var l = a("mXGw"),
                t = a.n(l),
                i = a("3uPl"),
                r = a("QrBS"),
                s = a("1p8O"),
                o = a("oYCi"),
                c = t.a.memo((function() {
                    return Object(o.jsxs)(o.Fragment, {
                        children: [Object(o.jsx)(i.a.Cell, {
                            height: "56px",
                            width: "400px",
                            children: Object(o.jsx)(s.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(o.jsxs)(s.a.Row, {
                                    alignItems: "center",
                                    children: [Object(o.jsx)(r.a, {
                                        marginRight: "16px",
                                        children: Object(o.jsx)(s.a.Circle, {
                                            height: "50px",
                                            width: "50px"
                                        })
                                    }), Object(o.jsx)(s.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })]
                                })
                            })
                        }), Object(o.jsx)(i.a.Cell, {
                            children: Object(o.jsx)(s.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(o.jsx)(s.a.Row, {
                                    children: Object(o.jsx)(s.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })
                                })
                            })
                        }), Object(o.jsx)(i.a.Cell, {
                            children: Object(o.jsx)(s.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(o.jsx)(s.a.Row, {
                                    children: Object(o.jsx)(s.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })
                                })
                            })
                        }), Object(o.jsx)(i.a.Cell, {
                            children: Object(o.jsx)(s.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(o.jsx)(s.a.Row, {
                                    children: Object(o.jsx)(s.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })
                                })
                            })
                        }), Object(o.jsx)(i.a.Cell, {
                            children: Object(o.jsx)(s.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(o.jsx)(s.a.Row, {
                                    children: Object(o.jsx)(s.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })
                                })
                            })
                        }), Object(o.jsx)(i.a.Cell, {
                            children: Object(o.jsx)(s.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(o.jsx)(s.a.Row, {
                                    children: Object(o.jsx)(s.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })
                                })
                            })
                        }), Object(o.jsx)(i.a.Cell, {
                            children: Object(o.jsx)(s.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(o.jsx)(s.a.Row, {
                                    children: Object(o.jsx)(s.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })
                                })
                            })
                        })]
                    })
                })),
                u = a("nuco"),
                d = a("7bY5"),
                g = t.a.memo((function() {
                    return Object(o.jsxs)(d.a, {
                        height: "88px",
                        width: "100%",
                        children: [Object(o.jsx)(u.a.Avatar, {
                            size: 50
                        }), Object(o.jsx)(u.a.Content, {
                            children: Object(o.jsx)(u.a.Title, {})
                        }), Object(o.jsxs)(u.a.Side, {
                            children: [Object(o.jsx)(u.a.Title, {}), Object(o.jsx)(u.a.Description, {})]
                        })]
                    })
                }))
        },
        FJj2: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "StatsV2CollectionCell_collection",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "imageUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "isVerified",
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "c8158da4f48fec19cc6413d5eb28ec72"
            };
            n.default = l
        },
        JewV: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return R
            })), a.d(n, "b", (function() {
                return B
            })), a.d(n, "c", (function() {
                return N
            }));
            var l, t, i = a("mXGw"),
                r = a("UutA"),
                s = a("8uvj"),
                o = a("b7Z7"),
                c = a("3uPl"),
                u = a("QrBS"),
                d = a("lqpq"),
                g = a("n0tG"),
                y = a("j/Wi"),
                m = a("8F/z"),
                p = a("kCmG"),
                b = a("LjoF"),
                h = a("C/iq"),
                j = a("X4ML"),
                f = a("/yvF"),
                k = a("qd51"),
                O = a("/dBk"),
                x = a.n(O),
                v = a("aXrf"),
                S = a("+r1X"),
                F = a("qymy"),
                C = a("ZSkh"),
                T = a("FhJN"),
                w = a("xLhm"),
                K = a("h64z"),
                P = a("Nbt0"),
                V = a("Ph7r"),
                L = a("D4YM"),
                D = a("oYCi"),
                A = function(e) {
                    var n = e.data,
                        r = e.slug,
                        s = e.collectionId,
                        c = e.hideCollections,
                        d = void 0 !== c && c,
                        g = Object(i.useContext)(w.b),
                        m = g.setWatchlist,
                        p = g.watchlist,
                        b = g.setHiddenCollections,
                        h = g.hiddenCollections,
                        j = Object(v.useFragment)(void 0 !== l ? l : l = a("sc7p"), n);
                    Object(i.useEffect)((function() {
                        C(!(null === j || void 0 === j || !j.isWatching) || p.includes(r))
                    }), [null === j || void 0 === j ? void 0 : j.isWatching, p, r]);
                    var f = Object(i.useState)(p.includes(r)),
                        O = f[0],
                        C = f[1],
                        T = Object(K.a)(),
                        L = T.wallet,
                        A = T.mutate,
                        R = T.updateContext,
                        B = Object(P.a)(),
                        N = B.attempt,
                        W = B.showSuccessMessage,
                        E = L.getActiveAccountKey(),
                        Q = function() {
                            var e = Object(k.a)(x.a.mark((function e(n) {
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n.preventDefault(), n.stopPropagation(), E) {
                                                e.next = 6;
                                                break
                                            }
                                            return Object(V.c)({
                                                collectionSlug: r
                                            }), R({
                                                isWalletSidebarOpen: !0
                                            }), e.abrupt("return");
                                        case 6:
                                            return e.next = 8, N(Object(k.a)(x.a.mark((function e() {
                                                var n;
                                                return x.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, A(void 0 !== t ? t : t = a("eO3H"), {
                                                                collectionId: s,
                                                                isWatching: !O
                                                            }, {
                                                                shouldAuthenticate: !0,
                                                                updater: function(e) {
                                                                    var n;
                                                                    if (null !== (n = L.activeAccount) && void 0 !== n && n.user && "" !== s) {
                                                                        O ? (d && b(h.concat(r)), m(p.filter((function(e) {
                                                                            return e !== r
                                                                        })))) : m(p.concat(r));
                                                                        var a = e.get(s),
                                                                            l = S.ConnectionHandler.getConnectionID(L.activeAccount.user.relayId, "StatsV2Table_collectionWatchlist"),
                                                                            t = e.get(l);
                                                                        if (t && a)
                                                                            if (a.setValue(!O, "isWatching"), O) S.ConnectionHandler.deleteNode(t, s);
                                                                            else {
                                                                                var i = S.ConnectionHandler.createEdge(e, t, a, "CollectionTypeEdge");
                                                                                S.ConnectionHandler.insertEdgeAfter(t, i)
                                                                            }
                                                                    }
                                                                }
                                                            });
                                                        case 2:
                                                            n = e.sent, n.collections.updateWatchlist && (O ? Object(V.b)({
                                                                collectionSlug: r
                                                            }) : Object(V.a)({
                                                                collectionSlug: r
                                                            }), W(Object(D.jsxs)(u.a, {
                                                                children: ["".concat(O ? "Removed from" : "Added to", " watchlist."), !d && Object(D.jsx)(o.a, {
                                                                    marginLeft: "8px",
                                                                    children: Object(D.jsx)(F.a, {
                                                                        href: "/rankings/watchlist",
                                                                        children: "View"
                                                                    })
                                                                })]
                                                            })), C(!O));
                                                        case 5:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(D.jsx)(y.b, {
                        content: O ? "Watching" : "Add to watchlist",
                        hideOnClick: !0,
                        children: Object(D.jsx)(_, {
                            "aria-label": O ? "Watching" : "Add to watchlist",
                            "data-testid": "rankings-watchlist-button",
                            onClick: Q,
                            children: Object(D.jsx)(I, {
                                active: O
                            })
                        })
                    })
                },
                _ = Object(r.d)(T.a).withConfig({
                    componentId: "sc-e6fqz9-0"
                })(["background-color:transparent;width:24px;height:24px;padding:0px;:hover:not([disabled]),:active:not([disabled]):active:not([disabled]),:focus:not([disabled]):focus:not([disabled]){border:none;background-color:transparent;box-shadow:none;}"]),
                I = Object(r.d)(C.a).withConfig({
                    componentId: "sc-e6fqz9-1"
                })(["width:24px;height:24px;transition:color 0.25s ease-in-out;color:", ";:hover{color:", ";}:active{", "}"], (function(e) {
                    return e.theme.colors.text.heading
                }), (function(e) {
                    return e.theme.colors.text.subtle
                }), (function(e) {
                    return Object(L.d)({
                        variants: {
                            dark: {
                                color: e.theme.colors.darkGray
                            },
                            light: {
                                color: e.theme.colors.gray
                            }
                        }
                    })
                })),
                R = function(e) {
                    var n, a = e.data,
                        l = e.sortBy,
                        t = e.displayRankIndex,
                        i = void 0 === t || t,
                        r = e.watchlistData,
                        k = e.isWatchlistEnabled,
                        O = e.isWatchlistTab,
                        x = e.useAssetLogo,
                        v = a.createdDate,
                        S = a.statsV2,
                        F = a.slug,
                        C = a.relayId,
                        T = Object(p.d)(new Date(v)),
                        w = parseFloat(S.totalQuantity),
                        K = null !== (n = S.floorPrice) && void 0 !== n && n.unit ? Object(m.c)(S.floorPrice.unit) : void 0,
                        P = Object(m.o)(l, a, !0),
                        V = Object(b.d)(Object(m.n)(l, a)),
                        L = Object(m.f)(V.times(100)),
                        _ = V.isGreaterThan(0),
                        I = Object(m.m)(l, a),
                        R = Object(m.d)(Object(b.d)(I)),
                        W = Object(b.d)(S.numOwners / w).times(100),
                        E = Object(m.j)(W),
                        Q = S.numOwners.toLocaleString(),
                        z = Object(b.d)(S.totalListed / S.totalSupply).times(100),
                        q = Object(m.j)(z),
                        $ = S.totalSupply.toLocaleString(),
                        H = S.totalListed.toLocaleString(),
                        M = w != S.totalSupply || z.isGreaterThan(100) || 0 === w,
                        U = Object(D.jsxs)(c.a.Cell, {
                            justifyContent: "flex-start",
                            width: "492px",
                            children: [i && Object(D.jsx)(o.a, {
                                minWidth: "52px",
                                paddingRight: "12px",
                                children: Object(D.jsx)(N, {
                                    children: Object(D.jsx)(s.a, {
                                        children: a.index + 1
                                    })
                                })
                            }), Object(D.jsx)(j.a, {
                                collection: a
                            })]
                        }),
                        G = Object(D.jsx)(c.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(D.jsx)(f.a, {
                                logo: a.nativePaymentAsset,
                                useAssetLogo: x,
                                value: P
                            })
                        }),
                        X = Object(D.jsx)(c.a.Cell, {
                            justifyContent: "flex-end",
                            children: V.isEqualTo(0) ? Object(D.jsx)(B, {
                                children: h.nb
                            }) : Object(D.jsx)(g.a.Body, {
                                color: _ ? "seaGrass" : "darkCoral",
                                size: "medium",
                                weight: "semibold",
                                children: Object(D.jsx)(s.a, {
                                    children: "".concat(_ ? "+" : "").concat(L, "%")
                                })
                            })
                        });
                    T && V.isEqualTo(0) && (X = Object(D.jsx)(y.b, {
                        content: "New",
                        offset: [0, 10],
                        placement: y.a.RIGHT,
                        children: X
                    }));
                    var Y = Object(D.jsx)(c.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(D.jsx)(f.a, {
                                logo: a.nativePaymentAsset,
                                useAssetLogo: x,
                                value: K
                            })
                        }),
                        Z = Object(D.jsx)(c.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(D.jsx)(B, {
                                children: Object(D.jsx)(s.a, {
                                    children: R
                                })
                            })
                        }),
                        J = Object(D.jsx)(c.a.Cell, {
                            justifyContent: "flex-end",
                            children: W.isGreaterThan(100) || 0 === w ? Object(D.jsx)(B, {
                                children: h.nb
                            }) : Object(D.jsx)(B, {
                                children: Object(D.jsx)(s.a, {
                                    children: "".concat(E, "%")
                                })
                            })
                        }),
                        ee = Object(D.jsx)(c.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(D.jsx)(N, {
                                children: "".concat(Q, " owners")
                            })
                        }),
                        ne = Object(D.jsxs)(d.a, {
                            alignItems: "flex-end",
                            alignSelf: "center",
                            children: [Object(D.jsx)(u.a, {
                                textAlign: "right",
                                children: J
                            }), Object(D.jsx)(u.a, {
                                textAlign: "right",
                                children: ee
                            })]
                        }),
                        ae = Object(D.jsx)(c.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(D.jsx)(B, {
                                children: Object(D.jsx)(s.a, {
                                    children: "".concat(q, "%")
                                })
                            })
                        }),
                        le = Object(D.jsx)(c.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(D.jsx)(N, {
                                children: "".concat(H, " of ").concat($)
                            })
                        }),
                        te = M ? Object(D.jsx)(c.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(D.jsx)(B, {
                                children: h.nb
                            })
                        }) : Object(D.jsxs)(d.a, {
                            alignItems: "flex-end",
                            alignSelf: "center",
                            children: [Object(D.jsx)(u.a, {
                                textAlign: "right",
                                children: ae
                            }), Object(D.jsx)(u.a, {
                                textAlign: "right",
                                children: le
                            })]
                        }),
                        ie = Object(D.jsx)(u.a, {
                            alignItems: "center",
                            children: Object(D.jsx)(A, {
                                collectionId: C,
                                data: r,
                                hideCollections: O,
                                slug: F
                            })
                        });
                    return Object(D.jsxs)(D.Fragment, {
                        children: [U, G, X, Y, Z, ne, te, k && ie]
                    })
                },
                B = Object(r.d)(g.a).attrs({
                    size: "medium",
                    weight: "semibold",
                    color: "text.heading"
                }).withConfig({
                    componentId: "sc-3y0wkn-0"
                })([""]),
                N = Object(r.d)(g.a).attrs({
                    size: "small",
                    weight: "semibold",
                    color: "text.subtle"
                }).withConfig({
                    componentId: "sc-3y0wkn-1"
                })([""])
        },
        JmDg: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return s
            }));
            var l = a("UutA"),
                t = a("FbDh"),
                i = a("b7Z7"),
                r = a("sX+s"),
                s = Object(l.d)(i.a).withConfig({
                    componentId: "sc-17boio7-0"
                })(["margin:0 auto;padding:0 16px;width:100%;max-width:2560px;", " ", " ", " ", " @media (min-width:", "px){padding:0 32px;}@media (min-width:", "px){padding:0 64px;}"], t.space, t.flex, t.height, t.padding, r.c.xl, r.c.xxl)
        },
        "Krv/": function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return m
            })), a.d(n, "b", (function() {
                return p
            }));
            var l = a("m6w3"),
                t = a("JiVo"),
                i = a("mXGw"),
                r = a("dAGg"),
                s = a("Nbt0"),
                o = a("dgii"),
                c = a("ozTS"),
                u = a("jmfQ"),
                d = a("oYCi");

            function g(e, n) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n && (l = l.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function y(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? g(Object(a), !0).forEach((function(n) {
                        Object(l.a)(e, n, a[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : g(Object(a)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
                    }))
                }
                return e
            }
            var m = Object(i.createContext)({
                    action: void 0,
                    isOpen: !1,
                    selection: [],
                    setAction: function() {
                        return null
                    },
                    onClear: function() {
                        return null
                    },
                    onDelete: function() {
                        return null
                    },
                    onSelect: function() {
                        return null
                    }
                }),
                p = function(e) {
                    var n = e.children,
                        a = e.initialSelectAction,
                        l = Object(o.a)("assets"),
                        g = Object(i.useState)(a),
                        p = g[0],
                        b = g[1],
                        h = Object(i.useState)([]),
                        j = h[0],
                        f = h[1],
                        k = Object(s.a)().showErrorMessage,
                        O = Object(r.useRouter)(),
                        x = Object(i.useCallback)((function() {
                            b(void 0), f([]);
                            var e = O.query;
                            delete e.select, O.push({
                                pathname: O.pathname,
                                query: e
                            }, void 0, {
                                shallow: !0
                            })
                        }), [O]),
                        v = Object(i.useCallback)((function(e) {
                            j.length === c.b && p && Object(u.a)(p) ? k(l("errors.exceededBundleMax", "A bundle can't have more than {{count}} items.", {
                                count: c.b
                            })) : f([].concat(Object(t.a)(j), [e]))
                        }), [p, j, k, l]),
                        S = Object(i.useCallback)((function(e) {
                            f(j.filter((function(n) {
                                return n.relayId !== e
                            })))
                        }), [j]),
                        F = Object(i.useMemo)((function() {
                            return {
                                action: p,
                                isOpen: !!p,
                                selection: j,
                                setAction: function(e) {
                                    b(e), O.push({
                                        pathname: O.pathname,
                                        query: y(y({}, O.query), {}, {
                                            select: e
                                        })
                                    }, void 0, {
                                        shallow: !0
                                    })
                                },
                                onClear: x,
                                onDelete: S,
                                onSelect: v
                            }
                        }), [p, j, x, S, v, O]);
                    return Object(d.jsx)(m.Provider, {
                        value: F,
                        children: n
                    })
                }
        },
        L1pF: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = function() {
                var e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "categories"
                    },
                    n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chain"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    },
                    l = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "eligibleCount"
                    },
                    i = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "categories",
                        variableName: "categories"
                    }, {
                        kind: "Variable",
                        name: "chains",
                        variableName: "chain"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, {
                        kind: "Variable",
                        name: "topCollectionLimit",
                        variableName: "eligibleCount"
                    }],
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    s = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    c = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: [e, n, a, l, t],
                        kind: "Fragment",
                        metadata: null,
                        name: "RankingsPageTrendingQuery",
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "RankingsPageTrending_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, a, l, e, t],
                        kind: "Operation",
                        name: "RankingsPageTrendingQuery",
                        selections: [{
                            alias: null,
                            args: i,
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "trendingCollections",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "createdDate",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "logo",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isVerified",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "relayId",
                                        storageKey: null
                                    }, r, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PaymentAssetType",
                                        kind: "LinkedField",
                                        name: "nativePaymentAsset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "ChainType",
                                            kind: "LinkedField",
                                            name: "chain",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "identifier",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, s, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "asset",
                                            plural: !1,
                                            selections: [r, o, s],
                                            storageKey: null
                                        }, o],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionStatsV2Type",
                                        kind: "LinkedField",
                                        name: "statsV2",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "floorPrice",
                                            plural: !1,
                                            selections: c,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "numOwners",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSupply",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalQuantity",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalListed",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "sevenDayVolume",
                                            plural: !1,
                                            selections: c,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "oneDayVolume",
                                            plural: !1,
                                            selections: c,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "thirtyDayVolume",
                                            plural: !1,
                                            selections: c,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "totalVolume",
                                            plural: !1,
                                            selections: c,
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, o, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "__typename",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "cursor",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PageInfo",
                                kind: "LinkedField",
                                name: "pageInfo",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "endCursor",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "hasNextPage",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: i,
                            filters: ["chains", "categories", "topCollectionLimit"],
                            handle: "connection",
                            key: "RankingsPageTrending_trendingCollections",
                            kind: "LinkedHandle",
                            name: "trendingCollections"
                        }]
                    },
                    params: {
                        cacheID: "c052688df2e944a14334ca7972c8ebb5",
                        id: null,
                        metadata: {},
                        name: "RankingsPageTrendingQuery",
                        operationKind: "query",
                        text: "query RankingsPageTrendingQuery(\n  $chain: [ChainScalar!]\n  $count: Int!\n  $cursor: String\n  $categories: [CategorySlug!]\n  $eligibleCount: Int!\n) {\n  ...RankingsPageTrending_data\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment RankingsPageTrending_data on Query {\n  trendingCollections(after: $cursor, chains: $chain, first: $count, categories: $categories, topCollectionLimit: $eligibleCount) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        relayId\n        ...StatsV2CollectionCell_collection\n        ...collection_url\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          ...StatsV2TablePrice_logo\n          asset {\n            symbol\n            id\n          }\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n            eth\n          }\n          numOwners\n          totalSupply\n          totalQuantity\n          totalListed\n          totalSales\n          sevenDaySales\n          sevenDayChange\n          sevenDayVolume {\n            unit\n            eth\n          }\n          oneDaySales\n          oneDayChange\n          oneDayVolume {\n            unit\n            eth\n          }\n          thirtyDaySales\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n            eth\n          }\n          totalVolume {\n            unit\n            eth\n          }\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment StatsV2CollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            l.hash = "6fa70d9e90626d826278bfb84d1e36dc", n.default = l
        },
        Nmkv: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return r
            }));
            var l = a("uq6L"),
                t = a("ZS70"),
                i = a("BOW+");

            function r(e, n) {
                var a, r;
                Object(i.a)(1, arguments);
                var s = Object(l.a)(e);
                if (isNaN(s.getTime())) throw new RangeError("Invalid time value");
                var o = String(null !== (a = null === n || void 0 === n ? void 0 : n.format) && void 0 !== a ? a : "extended"),
                    c = String(null !== (r = null === n || void 0 === n ? void 0 : n.representation) && void 0 !== r ? r : "complete");
                if ("extended" !== o && "basic" !== o) throw new RangeError("format must be 'extended' or 'basic'");
                if ("date" !== c && "time" !== c && "complete" !== c) throw new RangeError("representation must be 'date', 'time', or 'complete'");
                var u = "",
                    d = "",
                    g = "extended" === o ? "-" : "",
                    y = "extended" === o ? ":" : "";
                if ("time" !== c) {
                    var m = Object(t.a)(s.getDate(), 2),
                        p = Object(t.a)(s.getMonth() + 1, 2),
                        b = Object(t.a)(s.getFullYear(), 4);
                    u = "".concat(b).concat(g).concat(p).concat(g).concat(m)
                }
                if ("date" !== c) {
                    var h = s.getTimezoneOffset();
                    if (0 !== h) {
                        var j = Math.abs(h),
                            f = Object(t.a)(Math.floor(j / 60), 2),
                            k = Object(t.a)(j % 60, 2),
                            O = h < 0 ? "+" : "-";
                        d = "".concat(O).concat(f, ":").concat(k)
                    } else d = "Z";
                    var x = Object(t.a)(s.getHours(), 2),
                        v = Object(t.a)(s.getMinutes(), 2),
                        S = Object(t.a)(s.getSeconds(), 2),
                        F = "" === u ? "" : "T",
                        C = [x, v, S].join(y);
                    u = "".concat(u).concat(F).concat(C).concat(d)
                }
                return u
            }
        },
        OZCt: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chain"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "createdAfter"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "parents"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    n = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "chains",
                        variableName: "chain"
                    }, {
                        kind: "Variable",
                        name: "createdAfter",
                        variableName: "createdAfter"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, {
                        kind: "Variable",
                        name: "parents",
                        variableName: "parents"
                    }, {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    }],
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    i = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "RankingsPageTopPaginationQuery",
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "RankingsPageTop_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "RankingsPageTopPaginationQuery",
                        selections: [{
                            alias: null,
                            args: n,
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "rankings",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "createdDate",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "logo",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isVerified",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "relayId",
                                        storageKey: null
                                    }, a, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PaymentAssetType",
                                        kind: "LinkedField",
                                        name: "nativePaymentAsset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "ChainType",
                                            kind: "LinkedField",
                                            name: "chain",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "identifier",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, l, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "asset",
                                            plural: !1,
                                            selections: [a, t, l],
                                            storageKey: null
                                        }, t],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionStatsV2Type",
                                        kind: "LinkedField",
                                        name: "statsV2",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "floorPrice",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "numOwners",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSupply",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalQuantity",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalListed",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "sevenDayVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "oneDayVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "thirtyDayVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "totalVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, t, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "__typename",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "cursor",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PageInfo",
                                kind: "LinkedField",
                                name: "pageInfo",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "endCursor",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "hasNextPage",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: n,
                            filters: ["chains", "sortBy", "parents", "createdAfter"],
                            handle: "connection",
                            key: "RankingsPageTop_rankings",
                            kind: "LinkedHandle",
                            name: "rankings"
                        }]
                    },
                    params: {
                        cacheID: "92c6e8bb4bd3206a492519fa1d9fe3b7",
                        id: null,
                        metadata: {},
                        name: "RankingsPageTopPaginationQuery",
                        operationKind: "query",
                        text: "query RankingsPageTopPaginationQuery(\n  $chain: [ChainScalar!]\n  $count: Int\n  $createdAfter: DateTime\n  $cursor: String\n  $parents: [CollectionSlug!]\n  $sortBy: CollectionSort\n) {\n  ...RankingsPageTop_data\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment RankingsPageTop_data on Query {\n  rankings(after: $cursor, chains: $chain, first: $count, sortBy: $sortBy, parents: $parents, createdAfter: $createdAfter) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        relayId\n        ...StatsV2CollectionCell_collection\n        ...collection_url\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          ...StatsV2TablePrice_logo\n          asset {\n            symbol\n            id\n          }\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n            eth\n          }\n          numOwners\n          totalSupply\n          totalQuantity\n          totalListed\n          totalSales\n          sevenDaySales\n          sevenDayChange\n          sevenDayVolume {\n            unit\n            eth\n          }\n          oneDaySales\n          oneDayChange\n          oneDayVolume {\n            unit\n            eth\n          }\n          thirtyDaySales\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n            eth\n          }\n          totalVolume {\n            unit\n            eth\n          }\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment StatsV2CollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            l.hash = "703a46c3cf86fb7d43ede5de4d5d3d9c", n.default = l
        },
        QVso: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = function() {
                var e = ["trendingCollections"],
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    l = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    argumentDefinitions: [{
                        kind: "RootArgument",
                        name: "categories"
                    }, {
                        kind: "RootArgument",
                        name: "chain"
                    }, {
                        kind: "RootArgument",
                        name: "count"
                    }, {
                        kind: "RootArgument",
                        name: "cursor"
                    }, {
                        kind: "RootArgument",
                        name: "eligibleCount"
                    }],
                    kind: "Fragment",
                    metadata: {
                        connection: [{
                            count: "count",
                            cursor: "cursor",
                            direction: "forward",
                            path: e
                        }],
                        refetch: {
                            connection: {
                                forward: {
                                    count: "count",
                                    cursor: "cursor"
                                },
                                backward: null,
                                path: e
                            },
                            fragmentPathInResult: [],
                            operation: a("RA/A")
                        }
                    },
                    name: "RankingsPageTrending_data",
                    selections: [{
                        alias: "trendingCollections",
                        args: [{
                            kind: "Variable",
                            name: "categories",
                            variableName: "categories"
                        }, {
                            kind: "Variable",
                            name: "chains",
                            variableName: "chain"
                        }, {
                            kind: "Variable",
                            name: "topCollectionLimit",
                            variableName: "eligibleCount"
                        }],
                        concreteType: "CollectionTypeConnection",
                        kind: "LinkedField",
                        name: "__RankingsPageTrending_trendingCollections_connection",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionTypeEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "createdDate",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "name",
                                    storageKey: null
                                }, n, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "logo",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "isVerified",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "relayId",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PaymentAssetType",
                                    kind: "LinkedField",
                                    name: "nativePaymentAsset",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetType",
                                        kind: "LinkedField",
                                        name: "asset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "symbol",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, {
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "CollectionDataTablePrice_logo"
                                    }, {
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "StatsV2TablePrice_logo"
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionStatsV2Type",
                                    kind: "LinkedField",
                                    name: "statsV2",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "floorPrice",
                                        plural: !1,
                                        selections: l,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "numOwners",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalSupply",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalQuantity",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalListed",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalSales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "sevenDaySales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "sevenDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "sevenDayVolume",
                                        plural: !1,
                                        selections: l,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "oneDaySales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "oneDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "oneDayVolume",
                                        plural: !1,
                                        selections: l,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "thirtyDaySales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "thirtyDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "thirtyDayVolume",
                                        plural: !1,
                                        selections: l,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "totalVolume",
                                        plural: !1,
                                        selections: l,
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "__typename",
                                    storageKey: null
                                }, {
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "StatsV2CollectionCell_collection"
                                }, {
                                    kind: "InlineDataFragmentSpread",
                                    name: "collection_url",
                                    selections: [n, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }]
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "cursor",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PageInfo",
                            kind: "LinkedField",
                            name: "pageInfo",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "endCursor",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "hasNextPage",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Query",
                    abstractKey: null
                }
            }();
            l.hash = "382098f0ec135e11ce11b5f1ba80d594", n.default = l
        },
        "RA/A": function(e, n, a) {
            "use strict";
            a.r(n);
            var l = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "categories"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chain"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "eligibleCount"
                    }],
                    n = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "categories",
                        variableName: "categories"
                    }, {
                        kind: "Variable",
                        name: "chains",
                        variableName: "chain"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, {
                        kind: "Variable",
                        name: "topCollectionLimit",
                        variableName: "eligibleCount"
                    }],
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    i = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "RankingsPageTrendingPaginationQuery",
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "RankingsPageTrending_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "RankingsPageTrendingPaginationQuery",
                        selections: [{
                            alias: null,
                            args: n,
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "trendingCollections",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "createdDate",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "logo",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isVerified",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "relayId",
                                        storageKey: null
                                    }, a, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PaymentAssetType",
                                        kind: "LinkedField",
                                        name: "nativePaymentAsset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "ChainType",
                                            kind: "LinkedField",
                                            name: "chain",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "identifier",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, l, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "asset",
                                            plural: !1,
                                            selections: [a, t, l],
                                            storageKey: null
                                        }, t],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionStatsV2Type",
                                        kind: "LinkedField",
                                        name: "statsV2",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "floorPrice",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "numOwners",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSupply",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalQuantity",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalListed",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "sevenDayVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "oneDayVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "thirtyDayVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "totalVolume",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, t, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "__typename",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "cursor",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PageInfo",
                                kind: "LinkedField",
                                name: "pageInfo",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "endCursor",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "hasNextPage",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: n,
                            filters: ["chains", "categories", "topCollectionLimit"],
                            handle: "connection",
                            key: "RankingsPageTrending_trendingCollections",
                            kind: "LinkedHandle",
                            name: "trendingCollections"
                        }]
                    },
                    params: {
                        cacheID: "8b25e7b80daa37a6fdc5cc2d59e09ac6",
                        id: null,
                        metadata: {},
                        name: "RankingsPageTrendingPaginationQuery",
                        operationKind: "query",
                        text: "query RankingsPageTrendingPaginationQuery(\n  $categories: [CategorySlug!]\n  $chain: [ChainScalar!]\n  $count: Int\n  $cursor: String\n  $eligibleCount: Int\n) {\n  ...RankingsPageTrending_data\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment RankingsPageTrending_data on Query {\n  trendingCollections(after: $cursor, chains: $chain, first: $count, categories: $categories, topCollectionLimit: $eligibleCount) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        relayId\n        ...StatsV2CollectionCell_collection\n        ...collection_url\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          ...StatsV2TablePrice_logo\n          asset {\n            symbol\n            id\n          }\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n            eth\n          }\n          numOwners\n          totalSupply\n          totalQuantity\n          totalListed\n          totalSales\n          sevenDaySales\n          sevenDayChange\n          sevenDayVolume {\n            unit\n            eth\n          }\n          oneDaySales\n          oneDayChange\n          oneDayVolume {\n            unit\n            eth\n          }\n          thirtyDaySales\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n            eth\n          }\n          totalVolume {\n            unit\n            eth\n          }\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment StatsV2CollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            l.hash = "382098f0ec135e11ce11b5f1ba80d594", n.default = l
        },
        T8Ry: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return i
            }));
            var l = a("mXGw"),
                t = a("Krv/"),
                i = function() {
                    return Object(l.useContext)(t.a)
                }
        },
        X4ML: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return b
            }));
            a("mXGw");
            var l, t = a("JAph"),
                i = a.n(t),
                r = a("aXrf"),
                s = a("UutA"),
                o = a("NXiZ"),
                c = a("8uvj"),
                u = a("b7Z7"),
                d = a("QrBS"),
                g = a("lqpq"),
                y = a("n0tG"),
                m = a("C/iq"),
                p = a("oYCi"),
                b = function(e) {
                    var n = e.collection,
                        t = e.subtitle,
                        s = Object(r.useFragment)(void 0 !== l ? l : l = a("FJj2"), n);
                    if (!s) return null;
                    var d = void 0 !== t,
                        b = d ? "small" : "medium",
                        k = d ? "tiny" : "small",
                        O = s.name,
                        x = s.isVerified,
                        v = d ? 48 : 64,
                        S = Object(p.jsx)(u.a, {
                            display: "inline-flex",
                            marginBottom: "3px",
                            verticalAlign: "middle",
                            children: Object(p.jsx)(o.a, {
                                showTooltip: !1,
                                size: k,
                                verificationStatus: "VERIFIED"
                            })
                        }),
                        F = Object(p.jsx)(f, {
                            alignItems: "center",
                            alignSelf: "left",
                            children: Object(p.jsx)(y.a.Body, {
                                color: "text.heading",
                                margin: "0px",
                                size: b,
                                weight: "semibold",
                                width: "100%",
                                children: Object(p.jsxs)(c.a, {
                                    lines: 1,
                                    children: [O, x && S]
                                })
                            })
                        });
                    return Object(p.jsxs)(h, {
                        alignItems: "center",
                        justifyContent: "center",
                        children: [Object(p.jsx)(j, {
                            style: {
                                height: v,
                                width: v
                            },
                            children: Object(p.jsx)(i.a, {
                                alt: "Collection Image",
                                layout: "fill",
                                objectFit: "cover",
                                src: s.imageUrl || m.eb,
                                unoptimized: !0
                            })
                        }), Object(p.jsxs)(g.a, {
                            alignItems: "flex-start",
                            alignSelf: "center",
                            paddingLeft: d ? "10px" : "24px",
                            children: [F, d && t]
                        })]
                    })
                },
                h = Object(s.d)(d.a).withConfig({
                    componentId: "sc-18waj7n-0"
                })(["color:inherit;:hover{color:inherit;}"]),
                j = s.d.div.withConfig({
                    componentId: "sc-18waj7n-1"
                })(["border:1px solid ", ";border-radius:", ";flex:none;overflow:hidden;position:relative;"], (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.borderRadius.default
                })),
                f = Object(s.d)(d.a).withConfig({
                    componentId: "sc-18waj7n-2"
                })(["gap:4px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"])
        },
        ZSkh: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return t
            }));
            a("mXGw");
            var l = a("oYCi"),
                t = function(e) {
                    var n = e.color,
                        a = e.className,
                        t = e.width,
                        i = e.height,
                        r = e.active;
                    return Object(l.jsx)("svg", {
                        className: a,
                        color: n,
                        style: {
                            height: "".concat(i, "px"),
                            width: "".concat(t, "px")
                        },
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: r ? Object(l.jsx)(l.Fragment, {
                            children: Object(l.jsx)("path", {
                                d: "M12.6317 3.9063L14.8341 8.33148C14.9415 8.54756 15.15 8.69669 15.3893 8.73017L20.3125 9.43929C20.9168 9.52755 21.1591 10.2641 20.7204 10.6871L17.1592 14.1323C16.9844 14.2997 16.9077 14.5432 16.9475 14.7805L17.788 19.644C17.8923 20.2405 17.2604 20.697 16.7206 20.414L12.3188 18.1162C12.1041 18.0036 11.8465 18.0036 11.6348 18.1162L7.23309 20.414C6.69323 20.697 6.06134 20.2405 6.16563 19.644L7.0061 14.7805C7.04598 14.5432 6.96929 14.3027 6.79445 14.1323L3.224 10.6871C2.78536 10.2641 3.02768 9.52755 3.63196 9.43929L8.55514 8.73017C8.7944 8.69669 9.00298 8.54756 9.11034 8.33148L11.3097 3.9063C11.5796 3.36457 12.3618 3.36457 12.6317 3.9063Z",
                                fill: "currentColor",
                                stroke: "currentColor",
                                strokeMiterlimit: "10",
                                strokeWidth: "2"
                            })
                        }) : Object(l.jsx)("path", {
                            d: "M12.6,3.9l2.2,4.4c0.1,0.2,0.3,0.4,0.6,0.4l4.9,0.7c0.6,0.1,0.8,0.8,0.4,1.2l-3.6,3.4c-0.2,0.2-0.3,0.4-0.2,0.6 l0.8,4.9c0.1,0.6-0.5,1.1-1.1,0.8l-4.4-2.3c-0.2-0.1-0.5-0.1-0.7,0l-4.4,2.3c-0.5,0.3-1.2-0.2-1.1-0.8L7,14.8c0-0.2,0-0.5-0.2-0.6 l-3.6-3.4C2.8,10.3,3,9.5,3.6,9.4l4.9-0.7c0.2,0,0.4-0.2,0.6-0.4l2.2-4.4C11.6,3.4,12.4,3.4,12.6,3.9z",
                            fill: "none",
                            stroke: "currentColor",
                            strokeMiterlimit: "10",
                            strokeWidth: "2.5"
                        })
                    })
                }
        },
        a26R: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return v
            }));
            var l = a("m6w3"),
                t = a("oA/F"),
                i = (a("mXGw"), a("+xY2")),
                r = a("UutA"),
                s = a("m5he"),
                o = a("b7Z7"),
                c = a("ocrj"),
                u = a("QrBS"),
                d = a("sX+s"),
                g = a("tiCW"),
                y = a("1p8O"),
                m = a("7bY5"),
                p = a("dgii"),
                b = a("LjoF"),
                h = a("HSVd"),
                j = a("D4YM"),
                f = a("oYCi"),
                k = ["tabs", "currentTab", "handleClick", "baseUrl", "isLoading", "endEnhancer", "labelVariant"];

            function O(e, n) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n && (l = l.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function x(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? O(Object(a), !0).forEach((function(n) {
                        Object(l.a)(e, n, a[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : O(Object(a)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
                    }))
                }
                return e
            }
            var v = function(e) {
                    var n = e.tabs,
                        a = e.currentTab,
                        l = e.handleClick,
                        i = e.baseUrl,
                        r = e.isLoading,
                        s = e.endEnhancer,
                        c = e.labelVariant,
                        g = Object(t.a)(e, k),
                        b = Object(p.a)("phoenix");
                    return r ? Object(f.jsx)(w, {
                        children: Object(f.jsx)(y.a.Row, {
                            children: Object(f.jsxs)(u.a, {
                                children: [Object(f.jsx)(d.a, {
                                    greaterThanOrEqual: "sm",
                                    children: Object(f.jsx)(y.a.Line, {
                                        height: "44px",
                                        width: "700px"
                                    })
                                }), Object(f.jsx)(d.a, {
                                    lessThan: "sm",
                                    children: Object(f.jsx)(y.a.Line, {
                                        height: "32px",
                                        width: "300px"
                                    })
                                })]
                            })
                        })
                    }) : Object(f.jsx)(w, {
                        "data-testid": "ProfilePage--navbar",
                        children: Object(f.jsxs)(o.a, {
                            as: "nav",
                            overflow: "hidden",
                            width: "100%",
                            children: [Object(f.jsxs)(m.a, {
                                alignItems: "flex-end",
                                children: [Object(f.jsx)(F, {
                                    children: Object(f.jsx)(C, x(x({}, g), {}, {
                                        $gap: "large" === c ? "40px" : "48px",
                                        children: n.map((function(e, n) {
                                            if (Array.isArray(e)) {
                                                var t = e.filter((function(e) {
                                                    return e.id === a
                                                })).length > 0;
                                                return Object(f.jsx)(K, {
                                                    active: t,
                                                    baseUrl: i,
                                                    currentTab: a,
                                                    items: e,
                                                    label: b("more", "More"),
                                                    labelVariant: c
                                                }, "more-dropdown")
                                            }
                                            return Object(f.jsx)(P, {
                                                active: e.id === a,
                                                baseUrl: i,
                                                count: e.count,
                                                handleClick: l,
                                                id: e.id,
                                                label: e.label,
                                                labelVariant: c,
                                                path: e.path
                                            }, e.id || n)
                                        }))
                                    }))
                                }), s]
                            }), Object(f.jsx)(S, {})]
                        })
                    })
                },
                S = Object(r.d)(o.a).withConfig({
                    componentId: "sc-151637b-0"
                })(["border-width:0.5px;border-style:solid;", " margin:0px -16px;", ""], (function(e) {
                    return Object(j.d)({
                        variants: {
                            light: {
                                borderColor: Object(i.c)(e.theme.colors.fog, .5)
                            },
                            dark: {
                                borderColor: Object(i.c)(e.theme.colors.oil, .5)
                            }
                        }
                    })
                }), Object(d.e)({
                    sm: Object(r.c)(["margin:unset;"])
                })),
                F = Object(r.d)(g.a).attrs({
                    direction: "horizontal"
                }).withConfig({
                    componentId: "sc-151637b-1"
                })(["justify-content:left;width:100%;margin:0px;:hover{overflow:auto;}"]),
                C = Object(r.d)(u.a).withConfig({
                    componentId: "sc-151637b-2"
                })(["gap:24px;margin:0px;margin-left:-8px;", ""], (function(e) {
                    return Object(d.e)({
                        lg: Object(r.c)(["gap:", ";"], e.$gap)
                    })
                })),
                T = Object(r.d)(g.a.Item).withConfig({
                    componentId: "sc-151637b-3"
                })(["display:flex;padding:0px;padding-bottom:10px;cursor:pointer;"]),
                w = Object(r.d)(u.a).withConfig({
                    componentId: "sc-151637b-4"
                })(["width:100%;"]),
                K = function(e) {
                    var n = e.label,
                        a = e.items,
                        l = e.active,
                        t = e.baseUrl,
                        i = e.labelVariant;
                    return Object(f.jsx)(c.a, {
                        content: function(e) {
                            var n = e.List,
                                l = e.Item,
                                i = e.close;
                            return Object(f.jsx)(n, {
                                children: a.map((function(e) {
                                    var n;
                                    return Object(f.jsxs)(l, {
                                        href: "".concat(t).concat(null !== (n = e.path) && void 0 !== n ? n : h.a.getMergedQueryString({
                                            tab: e.id
                                        })),
                                        scroll: !1,
                                        onClick: i,
                                        children: [Object(f.jsx)(l.Content, {
                                            children: e.label
                                        }), Object(f.jsx)(l.Action, {
                                            children: !!e.count && Object(b.o)(e.count)
                                        })]
                                    }, e.id)
                                }))
                            })
                        },
                        maxHeight: "358px",
                        popperOptions: {
                            modifiers: [{
                                name: "flip",
                                enabled: !1
                            }]
                        },
                        children: Object(f.jsxs)(T, {
                            active: l,
                            "data-testid": "profile-nav-more",
                            direction: "horizontal",
                            children: ["large" === i ? Object(f.jsx)(D, {
                                children: n
                            }) : Object(f.jsx)(L, {
                                children: n
                            }), Object(f.jsx)(g.a.Side, {
                                children: Object(f.jsx)(s.a, {
                                    color: l ? void 0 : "gray",
                                    fontWeight: "600",
                                    value: "expand_more"
                                })
                            })]
                        })
                    })
                },
                P = function(e) {
                    var n = e.label,
                        a = e.count,
                        l = e.id,
                        t = e.active,
                        i = e.handleClick,
                        r = e.baseUrl,
                        s = e.path,
                        o = e.labelVariant;
                    return Object(f.jsxs)(T, {
                        active: t,
                        direction: "horizontal",
                        href: "".concat(r).concat(null !== s && void 0 !== s ? s : h.a.getMergedQueryString({
                            tab: l
                        })),
                        scroll: !1,
                        onClick: function() {
                            i && i(l)
                        },
                        children: ["large" === o ? Object(f.jsx)(D, {
                            children: n
                        }) : Object(f.jsx)(L, {
                            children: n
                        }), !!a && Object(f.jsx)(V, {
                            active: t,
                            marginLeft: "8px",
                            children: Object(b.o)(a)
                        })]
                    })
                },
                V = Object(r.d)(g.a.Side).attrs({
                    as: "span"
                }).withConfig({
                    componentId: "sc-151637b-5"
                })(["color:", ";"], (function(e) {
                    return e.active ? e.theme.colors.text.heading : e.theme.colors.text.subtle
                })),
                L = Object(r.d)(g.a.Title).withConfig({
                    componentId: "sc-151637b-6"
                })(["margin-right:0px;"]),
                D = Object(r.d)(g.a.Title).attrs({
                    variant: "small-h2"
                }).withConfig({
                    componentId: "sc-151637b-7"
                })(["margin-right:0px;"])
        },
        ab75: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return o
            }));
            a("mXGw");
            var l = a("3uPl"),
                t = a("j/Wi"),
                i = a("LjoF"),
                r = a("C/iq"),
                s = a("oYCi"),
                o = function(e) {
                    var n = e.value;
                    return Object(s.jsx)(t.b, {
                        content: Object(i.m)(n),
                        children: Object(s.jsx)(l.a.StatText, {
                            children: n ? Object(i.o)(n) : r.t
                        })
                    })
                }
        },
        bEAz: function(e, n, a) {
            "use strict";
            var l = a("6vT1");
            a.d(n, "a", (function() {
                return l.d
            })), a.d(n, "b", (function() {
                return l.e
            })), a.d(n, "c", (function() {
                return l.f
            })), a.d(n, "d", (function() {
                return l.g
            }))
        },
        eO3H: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collectionId"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "isWatching"
                    }],
                    n = [{
                        alias: null,
                        args: null,
                        concreteType: "CollectionMutationType",
                        kind: "LinkedField",
                        name: "collections",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: [{
                                kind: "Variable",
                                name: "collection",
                                variableName: "collectionId"
                            }, {
                                kind: "Variable",
                                name: "isWatching",
                                variableName: "isWatching"
                            }],
                            kind: "ScalarField",
                            name: "updateWatchlist",
                            storageKey: null
                        }],
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "StatsV2WatchlistButtonMutation",
                        selections: n,
                        type: "Mutation",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "StatsV2WatchlistButtonMutation",
                        selections: n
                    },
                    params: {
                        cacheID: "b638b8bd551ac680bdbbdb6288e78073",
                        id: null,
                        metadata: {},
                        name: "StatsV2WatchlistButtonMutation",
                        operationKind: "mutation",
                        text: "mutation StatsV2WatchlistButtonMutation(\n  $collectionId: CollectionRelayID!\n  $isWatching: Boolean!\n) {\n  collections {\n    updateWatchlist(collection: $collectionId, isWatching: $isWatching)\n  }\n}\n"
                    }
                }
            }();
            l.hash = "1e37f2ea421ecdce5d11e9dac82be52e", n.default = l
        },
        ffdF: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = function() {
                var e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    },
                    n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    },
                    a = {
                        defaultValue: "0x0000000000000000000000000000000000000000",
                        kind: "LocalArgument",
                        name: "identity"
                    },
                    l = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "noIdentity"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortAscending"
                    },
                    i = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    },
                    r = {
                        kind: "Variable",
                        name: "sortAscending",
                        variableName: "sortAscending"
                    },
                    s = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    o = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, r, s],
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    d = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    g = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: [e, n, a, l, t, i],
                        kind: "Fragment",
                        metadata: null,
                        name: "RankingsPageWatchlistQuery",
                        selections: [{
                            condition: "noIdentity",
                            kind: "Condition",
                            passingValue: !1,
                            selections: [{
                                args: [{
                                    kind: "Variable",
                                    name: "count",
                                    variableName: "count"
                                }, {
                                    kind: "Variable",
                                    name: "cursor",
                                    variableName: "cursor"
                                }, {
                                    kind: "Variable",
                                    name: "identity",
                                    variableName: "identity"
                                }, r, s],
                                kind: "FragmentSpread",
                                name: "RankingsPageWatchlist_data"
                            }]
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [e, n, i, t, a, l],
                        kind: "Operation",
                        name: "RankingsPageWatchlistQuery",
                        selections: [{
                            condition: "noIdentity",
                            kind: "Condition",
                            passingValue: !1,
                            selections: [{
                                alias: null,
                                args: [{
                                    kind: "Variable",
                                    name: "address",
                                    variableName: "identity"
                                }],
                                concreteType: "AccountType",
                                kind: "LinkedField",
                                name: "getAccount",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "UserType",
                                    kind: "LinkedField",
                                    name: "user",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: o,
                                        concreteType: "CollectionTypeConnection",
                                        kind: "LinkedField",
                                        name: "collectionWatchlist",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "CollectionTypeEdge",
                                            kind: "LinkedField",
                                            name: "edges",
                                            plural: !0,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "CollectionType",
                                                kind: "LinkedField",
                                                name: "node",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "createdDate",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "name",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "slug",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "logo",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "isVerified",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "relayId",
                                                    storageKey: null
                                                }, c, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "isCategory",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PaymentAssetType",
                                                    kind: "LinkedField",
                                                    name: "nativePaymentAsset",
                                                    plural: !1,
                                                    selections: [{
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ChainType",
                                                        kind: "LinkedField",
                                                        name: "chain",
                                                        plural: !1,
                                                        selections: [{
                                                            alias: null,
                                                            args: null,
                                                            kind: "ScalarField",
                                                            name: "identifier",
                                                            storageKey: null
                                                        }],
                                                        storageKey: null
                                                    }, u, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "AssetType",
                                                        kind: "LinkedField",
                                                        name: "asset",
                                                        plural: !1,
                                                        selections: [c, d, u],
                                                        storageKey: null
                                                    }, d],
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "CollectionStatsV2Type",
                                                    kind: "LinkedField",
                                                    name: "statsV2",
                                                    plural: !1,
                                                    selections: [{
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "PriceType",
                                                        kind: "LinkedField",
                                                        name: "floorPrice",
                                                        plural: !1,
                                                        selections: g,
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "numOwners",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "totalSupply",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "totalQuantity",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "totalListed",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "totalSales",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "sevenDaySales",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "sevenDayChange",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "PriceType",
                                                        kind: "LinkedField",
                                                        name: "sevenDayVolume",
                                                        plural: !1,
                                                        selections: g,
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "oneDaySales",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "oneDayChange",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "PriceType",
                                                        kind: "LinkedField",
                                                        name: "oneDayVolume",
                                                        plural: !1,
                                                        selections: g,
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "thirtyDaySales",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "thirtyDayChange",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "PriceType",
                                                        kind: "LinkedField",
                                                        name: "thirtyDayVolume",
                                                        plural: !1,
                                                        selections: g,
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "PriceType",
                                                        kind: "LinkedField",
                                                        name: "totalVolume",
                                                        plural: !1,
                                                        selections: g,
                                                        storageKey: null
                                                    }],
                                                    storageKey: null
                                                }, d, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "__typename",
                                                    storageKey: null
                                                }],
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "cursor",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PageInfo",
                                            kind: "LinkedField",
                                            name: "pageInfo",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "endCursor",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "hasNextPage",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: o,
                                        filters: ["sortBy", "sortAscending"],
                                        handle: "connection",
                                        key: "RankingsPageWatchlist_collectionWatchlist",
                                        kind: "LinkedHandle",
                                        name: "collectionWatchlist"
                                    }, d],
                                    storageKey: null
                                }, d],
                                storageKey: null
                            }]
                        }]
                    },
                    params: {
                        cacheID: "6706bca231dfb7d8f5d2fff6c45068cf",
                        id: null,
                        metadata: {},
                        name: "RankingsPageWatchlistQuery",
                        operationKind: "query",
                        text: 'query RankingsPageWatchlistQuery(\n  $count: Int!\n  $cursor: String\n  $sortBy: CollectionWatchlistSort\n  $sortAscending: Boolean\n  $identity: AddressScalar = "0x0000000000000000000000000000000000000000"\n  $noIdentity: Boolean!\n) {\n  ...RankingsPageWatchlist_data_2NhXcF @skip(if: $noIdentity)\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment RankingsPageWatchlist_data_2NhXcF on Query {\n  getAccount(address: $identity) {\n    user {\n      collectionWatchlist(after: $cursor, first: $count, sortBy: $sortBy, sortAscending: $sortAscending) {\n        edges {\n          node {\n            createdDate\n            name\n            slug\n            logo\n            isVerified\n            relayId\n            ...StatsV2CollectionCell_collection\n            ...collection_url\n            nativePaymentAsset {\n              ...CollectionDataTablePrice_logo\n              ...StatsV2TablePrice_logo\n              asset {\n                symbol\n                id\n              }\n              id\n            }\n            statsV2 {\n              floorPrice {\n                unit\n                eth\n              }\n              numOwners\n              totalSupply\n              totalQuantity\n              totalListed\n              totalSales\n              sevenDaySales\n              sevenDayChange\n              sevenDayVolume {\n                unit\n                eth\n              }\n              oneDaySales\n              oneDayChange\n              oneDayVolume {\n                unit\n                eth\n              }\n              thirtyDaySales\n              thirtyDayChange\n              thirtyDayVolume {\n                unit\n                eth\n              }\n              totalVolume {\n                unit\n                eth\n              }\n            }\n            id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment StatsV2CollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n'
                    }
                }
            }();
            l.hash = "c1998e549eaafbc4666bb7101b78b657", n.default = l
        },
        gfJQ: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "identity"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortAscending"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    n = {
                        kind: "Variable",
                        name: "sortAscending",
                        variableName: "sortAscending"
                    },
                    a = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    l = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, n, a],
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    s = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "RankingsPageWatchlistPaginationQuery",
                        selections: [{
                            args: [{
                                kind: "Variable",
                                name: "count",
                                variableName: "count"
                            }, {
                                kind: "Variable",
                                name: "cursor",
                                variableName: "cursor"
                            }, {
                                kind: "Variable",
                                name: "identity",
                                variableName: "identity"
                            }, n, a],
                            kind: "FragmentSpread",
                            name: "RankingsPageWatchlist_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "RankingsPageWatchlistPaginationQuery",
                        selections: [{
                            alias: null,
                            args: [{
                                kind: "Variable",
                                name: "address",
                                variableName: "identity"
                            }],
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "getAccount",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "UserType",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: l,
                                    concreteType: "CollectionTypeConnection",
                                    kind: "LinkedField",
                                    name: "collectionWatchlist",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionTypeEdge",
                                        kind: "LinkedField",
                                        name: "edges",
                                        plural: !0,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "CollectionType",
                                            kind: "LinkedField",
                                            name: "node",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "createdDate",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "name",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "slug",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "logo",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "isVerified",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "relayId",
                                                storageKey: null
                                            }, t, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "isCategory",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PaymentAssetType",
                                                kind: "LinkedField",
                                                name: "nativePaymentAsset",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "ChainType",
                                                    kind: "LinkedField",
                                                    name: "chain",
                                                    plural: !1,
                                                    selections: [{
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "identifier",
                                                        storageKey: null
                                                    }],
                                                    storageKey: null
                                                }, i, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "AssetType",
                                                    kind: "LinkedField",
                                                    name: "asset",
                                                    plural: !1,
                                                    selections: [t, r, i],
                                                    storageKey: null
                                                }, r],
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "CollectionStatsV2Type",
                                                kind: "LinkedField",
                                                name: "statsV2",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PriceType",
                                                    kind: "LinkedField",
                                                    name: "floorPrice",
                                                    plural: !1,
                                                    selections: s,
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "numOwners",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "totalSupply",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "totalQuantity",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "totalListed",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "totalSales",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "sevenDaySales",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "sevenDayChange",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PriceType",
                                                    kind: "LinkedField",
                                                    name: "sevenDayVolume",
                                                    plural: !1,
                                                    selections: s,
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "oneDaySales",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "oneDayChange",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PriceType",
                                                    kind: "LinkedField",
                                                    name: "oneDayVolume",
                                                    plural: !1,
                                                    selections: s,
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "thirtyDaySales",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "thirtyDayChange",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PriceType",
                                                    kind: "LinkedField",
                                                    name: "thirtyDayVolume",
                                                    plural: !1,
                                                    selections: s,
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "PriceType",
                                                    kind: "LinkedField",
                                                    name: "totalVolume",
                                                    plural: !1,
                                                    selections: s,
                                                    storageKey: null
                                                }],
                                                storageKey: null
                                            }, r, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "__typename",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "cursor",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PageInfo",
                                        kind: "LinkedField",
                                        name: "pageInfo",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "endCursor",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "hasNextPage",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: l,
                                    filters: ["sortBy", "sortAscending"],
                                    handle: "connection",
                                    key: "RankingsPageWatchlist_collectionWatchlist",
                                    kind: "LinkedHandle",
                                    name: "collectionWatchlist"
                                }, r],
                                storageKey: null
                            }, r],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "1a6a2237b2689c3e7366eb90e93c76ac",
                        id: null,
                        metadata: {},
                        name: "RankingsPageWatchlistPaginationQuery",
                        operationKind: "query",
                        text: "query RankingsPageWatchlistPaginationQuery(\n  $count: Int!\n  $cursor: String\n  $identity: AddressScalar!\n  $sortAscending: Boolean\n  $sortBy: CollectionWatchlistSort\n) {\n  ...RankingsPageWatchlist_data_2NhXcF\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment RankingsPageWatchlist_data_2NhXcF on Query {\n  getAccount(address: $identity) {\n    user {\n      collectionWatchlist(after: $cursor, first: $count, sortBy: $sortBy, sortAscending: $sortAscending) {\n        edges {\n          node {\n            createdDate\n            name\n            slug\n            logo\n            isVerified\n            relayId\n            ...StatsV2CollectionCell_collection\n            ...collection_url\n            nativePaymentAsset {\n              ...CollectionDataTablePrice_logo\n              ...StatsV2TablePrice_logo\n              asset {\n                symbol\n                id\n              }\n              id\n            }\n            statsV2 {\n              floorPrice {\n                unit\n                eth\n              }\n              numOwners\n              totalSupply\n              totalQuantity\n              totalListed\n              totalSales\n              sevenDaySales\n              sevenDayChange\n              sevenDayVolume {\n                unit\n                eth\n              }\n              oneDaySales\n              oneDayChange\n              oneDayVolume {\n                unit\n                eth\n              }\n              thirtyDaySales\n              thirtyDayChange\n              thirtyDayVolume {\n                unit\n                eth\n              }\n              totalVolume {\n                unit\n                eth\n              }\n            }\n            id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment StatsV2CollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            l.hash = "d9357c54f83d70621cf81e6bfec0fdf4", n.default = l
        },
        "i/1S": function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return c
            }));
            a("mXGw");
            var l = a("4iFg"),
                t = a("8uvj"),
                i = a("3uPl"),
                r = a("LjoF"),
                s = a("ab75"),
                o = a("oYCi"),
                c = function(e) {
                    var n, a = e.data,
                        c = a.statsV2,
                        u = a.nativePaymentAsset,
                        d = Object(r.d)(c.sevenDayChange),
                        g = null !== (n = c.floorPrice) && void 0 !== n && n.unit ? Object(r.n)(c.floorPrice.unit) : void 0,
                        y = d.times(100).toFixed(2).toLocaleString(),
                        m = d.isGreaterThan(0);
                    return Object(o.jsxs)(o.Fragment, {
                        children: [Object(o.jsxs)(i.a.StatContainer, {
                            children: [Object(o.jsx)(i.a.StatHeader, {
                                children: "7d %"
                            }), d.isEqualTo(0) ? Object(o.jsx)(i.a.StatText, {
                                children: "---"
                            }) : Object(o.jsx)(i.a.StatText, {
                                as: "span",
                                color: m ? "seaGrass" : "coral",
                                children: Object(o.jsx)(t.a, {
                                    children: "".concat(m ? "+" : "").concat(y, "%")
                                })
                            })]
                        }), Object(o.jsxs)(i.a.StatContainer, {
                            children: [Object(o.jsx)(i.a.StatHeader, {
                                children: "Floor Price"
                            }), Object(o.jsx)(l.a, {
                                logo: u,
                                value: g
                            })]
                        }), Object(o.jsxs)(i.a.StatContainer, {
                            children: [Object(o.jsx)(i.a.StatHeader, {
                                children: "Owners"
                            }), Object(o.jsx)(s.a, {
                                value: c.numOwners
                            })]
                        }), Object(o.jsxs)(i.a.StatContainer, {
                            children: [Object(o.jsx)(i.a.StatHeader, {
                                children: "Items"
                            }), Object(o.jsx)(s.a, {
                                value: c.totalSupply
                            })]
                        })]
                    })
                }
        },
        jmfQ: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return l
            })), a.d(n, "b", (function() {
                return t
            }));
            var l = function(e) {
                    return "sell" === e || "transfer" === e
                },
                t = function(e) {
                    return "sell" === e
                }
        },
        nswt: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = function() {
                var e = ["rankings"],
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    l = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    argumentDefinitions: [{
                        kind: "RootArgument",
                        name: "chain"
                    }, {
                        kind: "RootArgument",
                        name: "count"
                    }, {
                        kind: "RootArgument",
                        name: "createdAfter"
                    }, {
                        kind: "RootArgument",
                        name: "cursor"
                    }, {
                        kind: "RootArgument",
                        name: "parents"
                    }, {
                        kind: "RootArgument",
                        name: "sortBy"
                    }],
                    kind: "Fragment",
                    metadata: {
                        connection: [{
                            count: "count",
                            cursor: "cursor",
                            direction: "forward",
                            path: e
                        }],
                        refetch: {
                            connection: {
                                forward: {
                                    count: "count",
                                    cursor: "cursor"
                                },
                                backward: null,
                                path: e
                            },
                            fragmentPathInResult: [],
                            operation: a("OZCt")
                        }
                    },
                    name: "RankingsPageTop_data",
                    selections: [{
                        alias: "rankings",
                        args: [{
                            kind: "Variable",
                            name: "chains",
                            variableName: "chain"
                        }, {
                            kind: "Variable",
                            name: "createdAfter",
                            variableName: "createdAfter"
                        }, {
                            kind: "Variable",
                            name: "parents",
                            variableName: "parents"
                        }, {
                            kind: "Variable",
                            name: "sortBy",
                            variableName: "sortBy"
                        }],
                        concreteType: "CollectionTypeConnection",
                        kind: "LinkedField",
                        name: "__RankingsPageTop_rankings_connection",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionTypeEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "createdDate",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "name",
                                    storageKey: null
                                }, n, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "logo",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "isVerified",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "relayId",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PaymentAssetType",
                                    kind: "LinkedField",
                                    name: "nativePaymentAsset",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetType",
                                        kind: "LinkedField",
                                        name: "asset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "symbol",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, {
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "CollectionDataTablePrice_logo"
                                    }, {
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "StatsV2TablePrice_logo"
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionStatsV2Type",
                                    kind: "LinkedField",
                                    name: "statsV2",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "floorPrice",
                                        plural: !1,
                                        selections: l,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "numOwners",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalSupply",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalQuantity",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalListed",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "totalSales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "sevenDaySales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "sevenDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "sevenDayVolume",
                                        plural: !1,
                                        selections: l,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "oneDaySales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "oneDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "oneDayVolume",
                                        plural: !1,
                                        selections: l,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "thirtyDaySales",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "thirtyDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "thirtyDayVolume",
                                        plural: !1,
                                        selections: l,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "totalVolume",
                                        plural: !1,
                                        selections: l,
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "__typename",
                                    storageKey: null
                                }, {
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "StatsV2CollectionCell_collection"
                                }, {
                                    kind: "InlineDataFragmentSpread",
                                    name: "collection_url",
                                    selections: [n, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }]
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "cursor",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PageInfo",
                            kind: "LinkedField",
                            name: "pageInfo",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "endCursor",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "hasNextPage",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Query",
                    abstractKey: null
                }
            }();
            l.hash = "703a46c3cf86fb7d43ede5de4d5d3d9c", n.default = l
        },
        ozTS: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return l
            })), a.d(n, "b", (function() {
                return t
            }));
            var l = 359,
                t = 20
        },
        qpQ5: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return f
            }));
            var l = a("JiVo"),
                t = a("mXGw"),
                i = a("UutA"),
                r = a("TGkK"),
                s = a("b7Z7"),
                o = a("JmDg"),
                c = a("QrBS"),
                u = a("sX+s"),
                d = a("n0tG"),
                g = a("dnM+"),
                y = a("a26R"),
                m = a("SMcu"),
                p = a("Weac"),
                b = a("oYCi"),
                h = [{
                    id: "top",
                    label: "Top",
                    path: ""
                }, {
                    id: "trending",
                    label: "Trending",
                    path: "trending"
                }],
                j = [].concat(h, [{
                    id: "watchlist",
                    label: "Watchlist",
                    path: "watchlist"
                }]),
                f = function(e) {
                    var n = e.currentTab,
                        a = e.tableContent,
                        i = e.pagination,
                        o = e.chainLabel,
                        f = e.chainValue,
                        O = Object(p.m)(),
                        x = Object(t.useRef)(null),
                        v = Object(b.jsxs)(c.a, {
                            paddingBottom: "48px",
                            paddingTop: "64px",
                            children: [Object(b.jsx)(u.a, {
                                greaterThanOrEqual: "xl",
                                children: Object(b.jsx)(d.a.Display, {
                                    size: "large",
                                    children: "Collection stats"
                                })
                            }), Object(b.jsx)(u.a, {
                                lessThan: "xl",
                                children: Object(b.jsx)(d.a.Display, {
                                    size: "medium",
                                    children: "Collection stats"
                                })
                            })]
                        }),
                        S = Object(b.jsxs)(b.Fragment, {
                            children: [v, Object(b.jsx)(s.a, {
                                margin: {
                                    _: "0 -16px",
                                    xl: 0
                                },
                                paddingBottom: "10px",
                                children: Object(b.jsx)(y.a, {
                                    baseUrl: "/rankings/",
                                    currentTab: n,
                                    isLoading: !1,
                                    padding: {
                                        _: "0 16px",
                                        xl: 0
                                    },
                                    tabs: Object(l.a)(O ? j : h)
                                })
                            }), a]
                        });
                    return Object(b.jsx)(g.b, {
                        children: Object(b.jsxs)(r.a, {
                            className: "Rankings",
                            hideFooter: !0,
                            children: [Object(b.jsx)(m.a, {
                                description: "Browse through the top ".concat(o, "NFT collections ranked by volume, floor price and other statistics."),
                                title: Object(m.b)("Top ".concat(o, "NFTs")),
                                url: "https://opensea.io/rankings?chain=".concat(f)
                            }), Object(b.jsx)(k, {
                                marginBottom: "trending" === n ? {
                                    _: "32px",
                                    xl: "64px"
                                } : 0,
                                ref: x,
                                children: S
                            }), i]
                        })
                    })
                },
                k = Object(i.d)(o.a).withConfig({
                    componentId: "sc-hm7vkf-0"
                })(["max-width:1920px;"])
        },
        rI3A: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return k
            }));
            var l = a("m6w3"),
                t = a("mXGw"),
                i = a("SUdF"),
                r = a("K4Ra"),
                s = a("UutA"),
                o = a("Q5Gx"),
                c = a("gCP0"),
                u = a("b7Z7"),
                d = a("g/rM"),
                g = a("QrBS"),
                y = a("sX+s"),
                m = a("ozTS"),
                p = a("T8Ry"),
                b = a("n70p"),
                h = a("0c5R");
            var j = a("tQfM"),
                f = a("oYCi");

            function k(e) {
                var n = e.children,
                    a = e.className,
                    s = e.elementId,
                    c = e.height,
                    g = e.fullWidth,
                    k = void 0 === g || g,
                    v = e.stickyFromBreakpoint,
                    S = void 0 === v ? "lg" : v,
                    F = Object(b.a)(),
                    C = F.setHasStickyElement,
                    T = F.filterTopOffset,
                    w = F.setHasScrolledPastFilter,
                    K = Object(t.useState)(0),
                    P = K[0],
                    V = K[1],
                    L = Object(r.a)(Object(o.c)(y.c.sm), !1),
                    D = Object(p.a)().isOpen,
                    A = Object(i.a)({
                        initialInView: !0,
                        rootMargin: "-".concat((T || 0) + 4, "px 0px ").concat((T || 0) + 4, "px 0px"),
                        threshold: [.6]
                    }),
                    _ = A.ref,
                    I = A.inView,
                    R = Object(d.a)().theme,
                    B = Object(i.a)({
                        initialInView: !1
                    }),
                    N = B.ref,
                    W = B.inView,
                    E = B.entry;
                Object(t.useEffect)((function() {
                    C(!I)
                }), [I, C]), Object(t.useEffect)((function() {
                    var e = !(null === E || void 0 === E || !E.boundingClientRect.top) && E.boundingClientRect.top < 0;
                    w(!W && e)
                }), [W, w, E]), Object(h.a)((function() {
                    V(function() {
                        var e = document.createElement("p");
                        e.style.width = "100%", e.style.height = "200px";
                        var n = document.createElement("div");
                        n.style.position = "absolute", n.style.top = "0px", n.style.left = "0px", n.style.visibility = "hidden", n.style.width = "200px", n.style.height = "150px", n.style.overflow = "hidden", n.appendChild(e), document.body.appendChild(n);
                        var a = e.offsetWidth;
                        n.style.overflow = "scroll";
                        var l = e.offsetWidth;
                        return a === l && (l = n.clientWidth), document.body.removeChild(n), a - l
                    }())
                }));
                var Q = D && !L ? P + m.a : P;
                return Object(f.jsxs)(f.Fragment, {
                    children: [Object(f.jsx)("span", {
                        id: s,
                        ref: _
                    }), Object(f.jsx)(O, {
                        className: a,
                        largeBPHeight: c,
                        stickyFromBreakpoint: S,
                        top: T - 1,
                        children: Object(f.jsx)(x, {
                            boxShadow: Object(l.a)({
                                _: "none"
                            }, S, "\n              ".concat(I ? "" : "light" === R ? j.e.light.shadows.button : j.e.dark.shadows.button, "\n            ")),
                            fullWidth: k,
                            height: "100%",
                            inView: I,
                            stickyFromBreakpoint: S,
                            top: "0",
                            width: "calc(100vw - ".concat(Q, "px)"),
                            widthOffset: Q,
                            children: n
                        })
                    }), Object(f.jsx)(y.a, {
                        lessThan: S,
                        children: Object(f.jsx)(u.a, {
                            position: "relative",
                            ref: N,
                            top: "-".concat(T - c, "px")
                        })
                    })]
                })
            }
            var O = Object(s.d)(g.a).withConfig({
                    componentId: "sc-1nezdhs-0"
                })(["z-index:", ";@media ", "{position:sticky;height:", "px;}"], c.a.PHOENIX_HEADER, (function(e) {
                    return Object(o.d)(y.c[e.stickyFromBreakpoint])
                }), (function(e) {
                    return e.largeBPHeight
                })),
                x = Object(s.d)(u.a).withConfig({
                    componentId: "sc-1nezdhs-1"
                })(["@media ", "{position:absolute;background:", ";", "}"], (function(e) {
                    return Object(o.d)(y.c[e.stickyFromBreakpoint])
                }), (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return e.fullWidth ? "\n      left: calc((100vw - (100% + ".concat(e.widthOffset, "px)) / -2);\n      right: calc((100vw - (100% + ").concat(e.widthOffset, "px)) / -2);\n      ") : "\n      margin-left: calc(-1 * ((100vw - (100% + ".concat(e.widthOffset, "px)) / 2));\n      margin-right: calc(-1 * ((100vw - (100% + ").concat(e.widthOffset, "px)) / 2));\n      padding-left: calc((100vw - (100% + ").concat(e.widthOffset, "px)) / 2);\n      padding-right: calc((100vw - (100% + ").concat(e.widthOffset, "px)) / 2);\n      ")
                }))
        },
        s44c: function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return h
            }));
            var l = a("oA/F"),
                t = a("m6w3"),
                i = a("mXGw"),
                r = a("UutA"),
                s = a("D4YM"),
                o = a("9l97"),
                c = a("oYCi"),
                u = ["selected", "disabled", "flexDirection"];

            function d(e, n) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n && (l = l.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function g(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? d(Object(a), !0).forEach((function(n) {
                        Object(t.a)(e, n, a[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
                    }))
                }
                return e
            }
            var y = Object(i.forwardRef)((function(e, n) {
                    return Object(c.jsx)(o.a, g(g({
                        variant: "tertiary"
                    }, e), {}, {
                        ref: n
                    }))
                })),
                m = Object(r.c)(["&&&{color:", ";opacity:1;", "}"], (function(e) {
                    return e.theme.colors.text.heading
                }), (function(e) {
                    var n = e.theme;
                    return Object(s.d)({
                        variants: {
                            dark: {
                                backgroundColor: n.colors.onyx,
                                borderColor: "cloud",
                                borderLeft: "2px solid",
                                "&:not(:first-child)": {
                                    marginLeft: "-2px",
                                    zIndex: 1
                                }
                            },
                            light: {
                                backgroundColor: n.colors.lightMarina
                            }
                        }
                    })
                })),
                p = Object(r.d)(o.a.Button).withConfig({
                    componentId: "sc-1kkabdn-0"
                })(["", ";"], (function(e) {
                    return e.$selected && m
                })),
                b = Object(i.forwardRef)((function(e, n) {
                    var a = e.selected,
                        t = e.disabled,
                        i = e.flexDirection,
                        r = void 0 === i ? "column" : i,
                        s = Object(l.a)(e, u);
                    return Object(c.jsx)(p, g(g({}, s), {}, {
                        $selected: a,
                        "aria-pressed": a,
                        disabled: t || a,
                        flexDirection: r,
                        ref: n
                    }))
                })),
                h = Object.assign(y, {
                    Button: b
                })
        },
        sc7p: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "StatsV2WatchlistButton_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "isWatching",
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "5633d5e292df5969a3ebb3e016835ed0"
            };
            n.default = l
        },
        xLhm: function(e, n, a) {
            "use strict";
            a.d(n, "b", (function() {
                return rn
            })), a.d(n, "a", (function() {
                return sn
            }));
            var l = a("qd51"),
                t = a("JiVo"),
                i = a("oA/F"),
                r = a("m6w3"),
                s = a("/dBk"),
                o = a.n(s),
                c = a("mXGw"),
                u = a.n(c),
                d = a("9va6"),
                g = a("JHWp"),
                y = a("K4Ra"),
                m = a("UutA"),
                p = a("A3AF"),
                b = a("Q5Gx"),
                h = a("dAGg"),
                j = a("m5he"),
                f = a("LoMF"),
                k = a("QrBS"),
                O = a("Weac"),
                x = a("oYCi"),
                v = function(e) {
                    var n = e.className,
                        a = e.currentPage,
                        t = e.setCurrentPage,
                        i = e.hasMore,
                        r = e.loadNext,
                        s = e.pageSize,
                        u = e.limit,
                        d = Object(h.useRouter)(),
                        y = Object(c.useState)(a),
                        m = y[0],
                        p = y[1],
                        b = Object(O.l)();
                    Object(g.a)((function() {
                        p(0)
                    }), [d.query]);
                    var v = function() {
                            var e = Object(l.a)(o.a.mark((function e() {
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(a + 1 > m)) {
                                                e.next = 6;
                                                break
                                            }
                                            if (p(a + 1), void 0 === r) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 6, r();
                                        case 6:
                                            t(a + 1);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        S = (a || 1) * s,
                        F = "".concat(((a || 1) - 1) * s + 1, " - ").concat(S),
                        C = (a + 1) * s + 1,
                        T = (a + 2) * s,
                        w = "".concat(C, " - ").concat(T),
                        K = !u || C < u;
                    return Object(x.jsxs)(k.a, {
                        backgroundColor: "background",
                        bottom: 0,
                        boxShadow: {
                            _: "default",
                            xl: "none"
                        },
                        className: n,
                        justifyContent: "center",
                        left: 0,
                        paddingBottom: {
                            _: "10px",
                            xl: "40px"
                        },
                        paddingTop: {
                            _: "10px",
                            xl: "20px"
                        },
                        position: b ? "initial" : {
                            _: "fixed",
                            xl: "initial"
                        },
                        width: "100%",
                        children: [Object(x.jsxs)(f.c, {
                            disabled: 0 === a,
                            marginRight: "10px",
                            variant: "tertiary",
                            onClick: function() {
                                return t(a - 1)
                            },
                            children: [Object(x.jsx)(j.a, {
                                size: 16,
                                value: "arrow_back_ios_new"
                            }), "\xa0", F]
                        }), i && K && Object(x.jsxs)(f.c, {
                            marginLeft: "10px",
                            variant: "tertiary",
                            onClick: v,
                            children: [w, "\xa0", Object(x.jsx)(j.a, {
                                size: 16,
                                value: "arrow_forward_ios"
                            })]
                        })]
                    })
                },
                S = a("b7Z7"),
                F = a("3uPl"),
                C = a("sX+s"),
                T = a("7bY5"),
                w = a("tf5u"),
                K = a("n0tG"),
                P = a("uEoR"),
                V = a("6vT1"),
                L = a("i/1S"),
                D = a("h64z"),
                A = a("NBRX"),
                _ = a("LsOE"),
                I = a("YTPJ"),
                R = a("1p8O"),
                B = u.a.memo((function() {
                    return Object(x.jsxs)(x.Fragment, {
                        children: [Object(x.jsx)(F.a.Cell, {
                            height: "56px",
                            width: "500px",
                            children: Object(x.jsx)(R.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(x.jsxs)(R.a.Row, {
                                    alignItems: "center",
                                    children: [Object(x.jsx)(k.a, {
                                        marginLeft: "52px",
                                        marginRight: "24px",
                                        children: Object(x.jsx)(R.a.Block, {
                                            borderRadius: "10px",
                                            height: "62px",
                                            width: "62px"
                                        })
                                    }), Object(x.jsx)(R.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })]
                                })
                            })
                        }), Object(x.jsx)(F.a.Cell, {
                            children: Object(x.jsx)(R.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(x.jsx)(R.a.Row, {
                                    children: Object(x.jsx)(R.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })
                                })
                            })
                        }), Object(x.jsx)(F.a.Cell, {
                            children: Object(x.jsx)(R.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(x.jsx)(R.a.Row, {
                                    children: Object(x.jsx)(R.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })
                                })
                            })
                        }), Object(x.jsx)(F.a.Cell, {
                            children: Object(x.jsx)(R.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(x.jsx)(R.a.Row, {
                                    children: Object(x.jsx)(R.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })
                                })
                            })
                        }), Object(x.jsx)(F.a.Cell, {
                            children: Object(x.jsx)(R.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(x.jsx)(R.a.Row, {
                                    children: Object(x.jsx)(R.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })
                                })
                            })
                        }), Object(x.jsx)(F.a.Cell, {
                            children: Object(x.jsx)(R.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(x.jsx)(R.a.Row, {
                                    children: Object(x.jsx)(R.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })
                                })
                            })
                        }), Object(x.jsx)(F.a.Cell, {
                            children: Object(x.jsx)(R.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(x.jsx)(R.a.Row, {
                                    children: Object(x.jsx)(R.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })
                                })
                            })
                        })]
                    })
                })),
                N = a("nuco"),
                W = u.a.memo((function() {
                    return Object(x.jsxs)(T.a, {
                        alignItems: "center",
                        height: "64px",
                        width: "100%",
                        children: [Object(x.jsx)(k.a, {
                            marginRight: "16px",
                            children: Object(x.jsx)(R.a.Block, {
                                borderRadius: "10px",
                                height: "46px",
                                width: "46px"
                            })
                        }), Object(x.jsxs)(N.a.Content, {
                            children: [Object(x.jsx)(N.a.Title, {}), Object(x.jsx)(N.a.Description, {})]
                        }), Object(x.jsxs)(N.a.Side, {
                            children: [Object(x.jsx)(N.a.Title, {}), Object(x.jsx)(N.a.Description, {})]
                        })]
                    })
                })),
                E = a("JewV"),
                Q = a("rI3A"),
                z = a("K7R9");

            function q(e, n) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n && (l = l.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function $(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? q(Object(a), !0).forEach((function(n) {
                        Object(r.a)(e, n, a[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : q(Object(a)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
                    }))
                }
                return e
            }
            var H, M = function(e) {
                    var n = e.filters,
                        a = e.sortableHeaders,
                        l = e.displayRankIndex,
                        t = void 0 === l || l,
                        i = {
                            top: z.a,
                            overflowX: "auto",
                            overflowY: "visible",
                            padding: {
                                _: "8px",
                                xl: "0px"
                            },
                            borderColor: "border"
                        },
                        r = Object(O.m)();
                    return Object(x.jsxs)(x.Fragment, {
                        children: [Object(x.jsx)(Z, {
                            children: n
                        }), Object(x.jsx)(G, {
                            fullWidth: !1,
                            height: 38,
                            stickyFromBreakpoint: "xs",
                            children: Object(x.jsxs)(X, $($({}, i), {}, {
                                children: [a.map((function(e, n) {
                                    return Object(x.jsx)(F.a.Cell, {
                                        color: 0 === n ? "text.subtle" : void 0,
                                        justifyContent: 0 === n ? "flex-start" : "flex-end",
                                        paddingLeft: 0 === n ? t ? "64px" : "12px" : "0px",
                                        width: 0 === n ? "510px" : void 0,
                                        children: e
                                    }, n)
                                })), r && Object(x.jsx)(F.a.Cell, {
                                    width: "24px"
                                })]
                            }))
                        }), Object(x.jsx)(U, {
                            fullWidth: !1,
                            height: 32,
                            stickyFromBreakpoint: "xs",
                            children: Object(x.jsxs)(Y, {
                                children: [Object(x.jsx)(F.a.Cell, {
                                    justifyContent: "flex-start",
                                    paddingLeft: t ? "24px" : "0px",
                                    children: Object(x.jsx)(K.a.Body, {
                                        color: "text.subtle",
                                        size: "tiny",
                                        weight: "semibold",
                                        children: "COLLECTION"
                                    })
                                }), Object(x.jsx)(F.a.Cell, {
                                    justifyContent: "flex-end",
                                    children: Object(x.jsx)(K.a.Body, {
                                        color: "text.subtle",
                                        size: "tiny",
                                        weight: "semibold",
                                        children: "VOLUME"
                                    })
                                })]
                            })
                        })]
                    })
                },
                U = Object(m.d)(Q.a).withConfig({
                    componentId: "sc-1tg3f6q-0"
                })(["", ""], Object(C.e)({
                    xl: Object(m.c)(["display:none;"])
                })),
                G = Object(m.d)(Q.a).withConfig({
                    componentId: "sc-1tg3f6q-1"
                })(["display:none;", ""], Object(C.e)({
                    xl: Object(m.c)(["display:block;"])
                })),
                X = Object(m.d)(T.a).withConfig({
                    componentId: "sc-1tg3f6q-2"
                })(["border-bottom:0px;display:flex;align-items:center;height:100%;position:sticky;top:", ";z-index:", ";border:0px none transparent;overflow:hidden;"], (function(e) {
                    var n;
                    return null !== (n = e.top) && void 0 !== n ? n : 0
                }), (function(e) {
                    var n;
                    return null !== (n = e.zIndex) && void 0 !== n ? n : 1
                })),
                Y = Object(m.d)(F.a.HeaderContainer).withConfig({
                    componentId: "sc-1tg3f6q-3"
                })(["border-bottom:0px;padding-top:0;padding-bottom:0;padding-left:16px;padding-right:16px;height:100%;display:flex;align-items:center;"]),
                Z = Object(m.d)(S.a).withConfig({
                    componentId: "sc-1tg3f6q-4"
                })(["padding-bottom:16px;"]),
                J = a("8uvj"),
                ee = a("lqpq"),
                ne = a("8F/z"),
                ae = a("LjoF"),
                le = a("C/iq"),
                te = a("X4ML"),
                ie = a("/yvF"),
                re = function(e) {
                    var n, a = e.data,
                        l = e.sortBy,
                        t = e.displayRankIndex,
                        i = void 0 === t || t,
                        r = e.useAssetLogo,
                        s = a.statsV2,
                        o = Object(ne.o)(l, a, !0),
                        c = Object(ae.d)(Object(ne.n)(l, a)),
                        u = Object(ne.f)(c.times(100)),
                        d = c.isGreaterThan(0),
                        g = a.index + 1,
                        y = g < 101 ? "24px" : g < 901 ? "28px" : "30px",
                        m = null !== (n = s.floorPrice) && void 0 !== n && n.unit ? Object(ne.c)(s.floorPrice.unit) : void 0,
                        p = !(void 0 === m || "0" === m),
                        b = Object(x.jsxs)(k.a, {
                            alignItems: "center",
                            display: "block",
                            children: [Object(x.jsx)(K.a.Body, {
                                color: "text.subtle",
                                paddingRight: "3px",
                                size: "small",
                                children: Object(x.jsx)(J.a, {
                                    lines: 1,
                                    children: p ? "Floor price:" : "No floor price"
                                })
                            }), p && Object(x.jsx)(ie.a, {
                                logo: a.nativePaymentAsset,
                                size: "small",
                                subtleText: !0,
                                useAssetLogo: r,
                                value: m
                            })]
                        }),
                        h = Object(x.jsxs)(k.a, {
                            alignItems: "center",
                            paddingRight: "8px",
                            width: "100%",
                            children: [i && Object(x.jsx)(S.a, {
                                minWidth: y,
                                children: Object(x.jsx)(K.a.Body, {
                                    color: "text.subtle",
                                    size: "tiny",
                                    weight: "semibold",
                                    children: Object(x.jsx)(J.a, {
                                        children: g
                                    })
                                })
                            }), Object(x.jsx)(te.a, {
                                collection: a,
                                subtitle: b
                            })]
                        }),
                        j = Object(x.jsx)(ie.a, {
                            logo: a.nativePaymentAsset,
                            size: "small",
                            useAssetLogo: r,
                            value: o
                        }),
                        f = c.isEqualTo(0) ? Object(x.jsx)(K.a.Body, {
                            color: "text.heading",
                            size: "small",
                            weight: "semibold",
                            children: le.nb
                        }) : Object(x.jsx)(K.a.Body, {
                            color: d ? "seaGrass" : "darkCoral",
                            size: "small",
                            weight: "semibold",
                            children: "".concat(d ? "+" : "").concat(u, "%")
                        }),
                        O = Object(x.jsxs)(ee.a, {
                            alignItems: "flex-end",
                            alignSelf: "center",
                            width: "auto",
                            children: [Object(x.jsx)(k.a, {
                                textAlign: "right",
                                children: j
                            }), Object(x.jsx)(k.a, {
                                textAlign: "right",
                                children: f
                            })]
                        });
                    return Object(x.jsxs)(x.Fragment, {
                        children: [h, O]
                    })
                };

            function se(e, n) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n && (l = l.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function oe(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? se(Object(a), !0).forEach((function(n) {
                        Object(r.a)(e, n, a[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : se(Object(a)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
                    }))
                }
                return e
            }
            var ce = u.a.memo((function(e) {
                    var n, l, t = e.displayRankIndex,
                        i = void 0 === t || t,
                        r = e.isLoading,
                        s = e.filters,
                        o = e.sortableHeaders,
                        c = e.sortBy,
                        u = e.rows,
                        d = e.tableKey,
                        g = e.isWatchlistTab,
                        y = null !== (n = null === (l = Object(D.a)().wallet.getActiveAccountKey()) || void 0 === l ? void 0 : l.address) && void 0 !== n ? n : null,
                        m = Object(O.m)(),
                        p = Object(A.a)(void 0 !== H ? H : H = a("A+I/"), {
                            identity: null !== y && void 0 !== y ? y : "",
                            count: 100
                        }, {
                            skip: !y || !m
                        }),
                        b = Object(P.a)(p, 1)[0],
                        h = b && y && m;
                    return Object(x.jsx)(F.a, {
                        getHref: function(e) {
                            var n = e.data;
                            return n.slug ? Object(I.g)(n) : void 0
                        },
                        header: Object(x.jsx)(M, {
                            displayRankIndex: i,
                            filters: s,
                            sortableHeaders: o
                        }),
                        itemHeightEstimate: 90,
                        items: r ? V.c : u,
                        renderFullRow: function(e) {
                            var n;
                            return r ? Object(x.jsx)(B, {}) : Object(x.jsx)(E.a, oe(oe({}, e), {}, {
                                displayRankIndex: i,
                                isWatchlistEnabled: m,
                                isWatchlistTab: g,
                                sortBy: c,
                                useAssetLogo: !m,
                                watchlistData: h && Object(_.c)(null === (n = b.getAccount.user) || void 0 === n ? void 0 : n.collectionWatchlist).find((function(n) {
                                    return n.slug === e.data.slug
                                })) || null
                            }))
                        },
                        renderMore: L.a,
                        renderPrimary: function(e) {
                            return r ? Object(x.jsx)(W, {}) : Object(x.jsx)(re, oe(oe({}, e), {}, {
                                displayRankIndex: i,
                                sortBy: c,
                                useAssetLogo: !m
                            }))
                        },
                        showBorder: !1,
                        showInteractiveStyles: !0
                    }, d)
                })),
                ue = a("XHwO"),
                de = a("O4Bb"),
                ge = a("DqVd"),
                ye = Object(ge.b)("Rankings page sorting selected"),
                me = Object(ge.b)("Rankings page category filter selected"),
                pe = Object(ge.b)("Rankings page chain filter selected"),
                be = Object(ge.b)("Rankings page time window filter selected"),
                he = a("+xY2"),
                je = a("06eW"),
                fe = a("s44c"),
                ke = a("D4YM"),
                Oe = function(e) {
                    var n = e.className,
                        a = e.options,
                        l = e.value,
                        t = e.setValue,
                        i = e.testId,
                        r = e.appendTo,
                        s = e.timeVariant,
                        o = Object(O.l)();
                    return Object(x.jsx)(S.a, {
                        className: n,
                        "data-testid": i,
                        display: "inline-block",
                        edge: "both",
                        margin: {
                            _: "0 4px",
                            xl: "12px 0px 12px 12px"
                        },
                        whiteSpace: "nowrap",
                        width: s ? {} : {
                            sm: "100%",
                            xl: o ? "100%" : "240px"
                        },
                        children: s ? Object(x.jsxs)(x.Fragment, {
                            children: [Object(x.jsx)(C.a, {
                                lessThan: "md",
                                children: Object(x.jsx)(je.a, {
                                    clearable: !1,
                                    maxHeight: "370px",
                                    options: a,
                                    overrides: {
                                        Dropdown: {
                                            props: {
                                                appendTo: r,
                                                popperOptions: {
                                                    strategy: "fixed"
                                                }
                                            }
                                        },
                                        ContentItem: {
                                            props: {
                                                height: {
                                                    _: "36px",
                                                    lg: "48px"
                                                },
                                                style: {
                                                    padding: "8px 12px"
                                                }
                                            }
                                        }
                                    },
                                    readOnly: !0,
                                    value: l.value,
                                    variant: "item",
                                    onSelect: function(e) {
                                        e && e !== l && t(e)
                                    }
                                })
                            }), Object(x.jsx)(C.a, {
                                greaterThanOrEqual: "md",
                                children: Object(x.jsx)(fe.a, {
                                    children: a.map((function(e, n) {
                                        return Object(x.jsx)(xe, {
                                            selected: e.value === l.value,
                                            size: "small",
                                            style: {
                                                padding: "8px 12px",
                                                width: "48px",
                                                margin: 0
                                            },
                                            onClick: function() {
                                                var n;
                                                (n = e) && n !== l && t(n)
                                            },
                                            children: e.label
                                        }, n)
                                    }))
                                })
                            })]
                        }) : o ? Object(x.jsx)(x.Fragment, {
                            children: Object(x.jsx)(je.a, {
                                clearable: !1,
                                maxHeight: "370px",
                                options: a,
                                overrides: {
                                    Dropdown: {
                                        props: {
                                            appendTo: r,
                                            popperOptions: {
                                                strategy: "fixed"
                                            }
                                        }
                                    },
                                    ContentItem: {
                                        props: {
                                            height: {
                                                _: "36px",
                                                lg: "48px"
                                            },
                                            style: {
                                                padding: "8px 12px"
                                            }
                                        }
                                    }
                                },
                                readOnly: !0,
                                value: l.value,
                                variant: "item",
                                onSelect: function(e) {
                                    e && e !== l && t(e)
                                }
                            })
                        }) : Object(x.jsx)(je.a, {
                            clearable: !1,
                            maxHeight: "370px",
                            options: a,
                            overrides: {
                                Dropdown: {
                                    props: {
                                        appendTo: r,
                                        popperOptions: {
                                            strategy: "fixed"
                                        }
                                    }
                                },
                                ContentItem: {
                                    props: {
                                        height: {
                                            _: "50px",
                                            xl: "revert"
                                        }
                                    }
                                }
                            },
                            readOnly: !0,
                            value: l.value,
                            variant: "item",
                            onSelect: function(e) {
                                e && e !== l && t(e)
                            }
                        })
                    })
                },
                xe = Object(m.d)(fe.a.Button).withConfig({
                    componentId: "sc-ak4bu7-0"
                })(["&&&{border-color:", ";height:36px;font-size:14px;", " :not(:first-child):not(:last-child){border-right:none;border-left:none;}:last-child{border-left:none;}:first-child{border-right:none;}color:", ";", " ", " ", ";}"], (function(e) {
                    return e.theme.colors.border
                }), Object(C.e)({
                    lg: Object(m.c)(["height:48px;font-size:16px;"])
                }), (function(e) {
                    return e.theme.colors.text.subtle
                }), (function(e) {
                    return Object(ke.d)({
                        variants: {
                            dark: {
                                borderColor: e.theme.colors.ash
                            }
                        }
                    })
                }), (function(e) {
                    return e.selected && Object(m.c)(["color:", ";"], e.theme.colors.text.heading)
                }), (function(e) {
                    return e.selected ? Object(ke.d)({
                        variants: {
                            light: {
                                backgroundColor: "".concat(Object(he.c)(e.theme.colors.fog, .5)),
                                boxShadow: "none"
                            },
                            dark: {
                                background: "".concat(e.theme.colors.oil),
                                borderColor: e.theme.colors.ash
                            }
                        }
                    }) : Object(ke.d)({
                        variants: {
                            dark: {
                                ":hover": {
                                    background: "".concat(e.theme.colors.ash)
                                }
                            }
                        }
                    })
                })),
                ve = a("67yl"),
                Se = a("3FBR"),
                Fe = function(e) {
                    var n = e.message;
                    return Object(x.jsx)(ve.a, {
                        paddingX: "20px",
                        paddingY: "40px",
                        children: "string" === typeof n ? Object(x.jsx)(Se.a, {
                            fontSize: {
                                _: "20px",
                                lg: "26px"
                            },
                            children: n
                        }) : n
                    })
                },
                Ce = a("iZQ/"),
                Te = a("qpQ5"),
                we = a("veNq"),
                Ke = a("4iFg"),
                Pe = a("kCmG"),
                Ve = a("ab75"),
                Le = function(e) {
                    var n, a = e.data,
                        l = e.sortBy,
                        t = a.createdDate,
                        i = a.name,
                        r = a.logo,
                        s = a.statsV2,
                        o = a.isVerified,
                        c = a.nativePaymentAsset,
                        u = Object(Pe.d)(new Date(t)),
                        d = Object(ne.o)(l, a),
                        g = Object(ae.d)(s.oneDayChange),
                        y = g.isGreaterThan(0),
                        m = g.times(100).toFixed(2).toLocaleString(),
                        p = Object(ae.d)(s.sevenDayChange),
                        b = null !== (n = s.floorPrice) && void 0 !== n && n.unit ? Object(ae.n)(s.floorPrice.unit) : void 0,
                        h = p.times(100).toFixed(2).toLocaleString(),
                        j = p.isGreaterThan(0);
                    return Object(x.jsxs)(x.Fragment, {
                        children: [Object(x.jsxs)(F.a.Cell, {
                            className: "Ranking--collection-info",
                            width: "400px",
                            children: [Object(x.jsx)(S.a, {
                                maxWidth: "34px",
                                children: Object(x.jsx)(Se.a, {
                                    as: "span",
                                    textAlign: "right",
                                    variant: "h6",
                                    children: Object(x.jsx)(J.a, {
                                        children: a.index + 1
                                    })
                                })
                            }), Object(x.jsx)(we.a, {
                                isNew: u,
                                isVerified: o,
                                url: r
                            }), Object(x.jsx)(S.a, {
                                overflow: "hidden",
                                width: "100%",
                                children: Object(x.jsx)(Se.a, {
                                    as: "span",
                                    fontSize: ["14px", "16px"],
                                    variant: "h6",
                                    children: Object(x.jsx)(J.a, {
                                        className: "Ranking--collection-name-overflow",
                                        children: i
                                    })
                                })
                            })]
                        }), Object(x.jsx)(F.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(x.jsx)(Ke.a, {
                                logo: c,
                                value: d
                            })
                        }), Object(x.jsx)(F.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(x.jsx)(k.a, {
                                textAlign: "right",
                                children: g.isEqualTo(0) ? Object(x.jsx)(F.a.StatText, {
                                    children: "---"
                                }) : Object(x.jsx)(F.a.StatText, {
                                    as: "span",
                                    color: y ? "seaGrass" : "coral",
                                    children: Object(x.jsx)(J.a, {
                                        children: "".concat(y ? "+" : "").concat(m, "%")
                                    })
                                })
                            })
                        }), Object(x.jsx)(F.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(x.jsx)(k.a, {
                                children: p.isEqualTo(0) ? Object(x.jsx)(F.a.StatText, {
                                    margin: "0",
                                    children: "---"
                                }) : Object(x.jsx)(F.a.StatText, {
                                    as: "span",
                                    color: j ? "seaGrass" : "coral",
                                    children: Object(x.jsx)(J.a, {
                                        children: "".concat(j ? "+" : "").concat(h, "%")
                                    })
                                })
                            })
                        }), Object(x.jsx)(F.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(x.jsx)(Ke.a, {
                                logo: c,
                                value: b
                            })
                        }), Object(x.jsx)(F.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(x.jsx)(Ve.a, {
                                value: s.numOwners
                            })
                        }), Object(x.jsx)(F.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(x.jsx)(Ve.a, {
                                value: s.totalSupply
                            })
                        })]
                    })
                },
                De = a("TiKg"),
                Ae = a.n(De),
                _e = a("9E9p"),
                Ie = function(e) {
                    var n = e.data,
                        a = e.ShowMoreButton,
                        l = e.sortBy,
                        t = n.createdDate,
                        i = n.name,
                        r = n.logo,
                        s = n.statsV2,
                        o = n.nativePaymentAsset,
                        c = Ae()().diff(Ae.a.utc(t), "days") < V.b,
                        u = Object(ne.o)(l, n),
                        d = Object(ae.d)(s.oneDayChange),
                        g = d.isGreaterThan(0),
                        y = d.times(100).toFixed(2).toLocaleString();
                    return Object(x.jsxs)(x.Fragment, {
                        children: [Object(x.jsxs)(k.a, {
                            alignItems: "center",
                            height: "87px",
                            maxWidth: "calc(100vw - 72px)",
                            width: "100%",
                            children: [Object(x.jsx)(S.a, {
                                width: "34px",
                                children: Object(x.jsx)(Se.a, {
                                    as: "span",
                                    fontSize: "14px",
                                    textAlign: "right",
                                    variant: "h6",
                                    children: Object(x.jsx)(J.a, {
                                        children: n.index + 1
                                    })
                                })
                            }), Object(x.jsx)(we.a, {
                                isNew: c,
                                url: r
                            }), Object(x.jsxs)(S.a, {
                                overflow: "hidden",
                                width: "100%",
                                children: [Object(x.jsx)(Se.a, {
                                    as: "span",
                                    fontSize: ["14px", "16px"],
                                    variant: "h6",
                                    children: Object(x.jsx)(J.a, {
                                        lines: 2,
                                        children: i
                                    })
                                }), Object(x.jsx)(a, {})]
                            })]
                        }), Object(x.jsxs)(_e.a.Side, {
                            alignItems: "flex-end",
                            children: [Object(x.jsx)(Ke.a, {
                                logo: o,
                                textVariant: "h6",
                                value: u
                            }), Object(x.jsx)(k.a, {
                                textAlign: "right",
                                children: d.isEqualTo(0) ? Object(x.jsx)(F.a.StatText, {
                                    margin: 0,
                                    children: "---"
                                }) : Object(x.jsx)(F.a.StatText, {
                                    as: "span",
                                    color: g ? "seaGrass" : "coral",
                                    fontSize: "14px",
                                    children: Object(x.jsx)(J.a, {
                                        children: "".concat(g ? "+" : "").concat(y, "%")
                                    })
                                })
                            })]
                        })]
                    })
                },
                Re = a("EXqH");

            function Be(e, n) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n && (l = l.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function Ne(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Be(Object(a), !0).forEach((function(n) {
                        Object(r.a)(e, n, a[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Be(Object(a)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
                    }))
                }
                return e
            }
            var We = {
                    top: z.a,
                    overflowX: "auto",
                    overflowY: "visible",
                    padding: {
                        _: "8px",
                        xl: "16px"
                    },
                    borderColor: "border"
                },
                Ee = function(e) {
                    var n = e.filters,
                        a = e.sortableHeaders,
                        l = Object(O.l)();
                    return Object(x.jsxs)(x.Fragment, {
                        children: [Object(x.jsxs)(C.a, {
                            greaterThanOrEqual: "xl",
                            children: [l && n, Object(x.jsx)(F.a.HeaderContainer, Ne(Ne({}, We), {}, {
                                children: a.map((function(e, n) {
                                    return Object(x.jsx)(F.a.Cell, {
                                        justifyContent: 0 === n ? "flex-start" : "flex-end",
                                        width: 0 === n ? "400px" : void 0,
                                        children: e
                                    }, n)
                                }))
                            }))]
                        }), Object(x.jsx)(C.a, {
                            lessThan: "xl",
                            children: !l && Object(x.jsx)(F.a.HeaderContainer, Ne(Ne({}, We), {}, {
                                children: n
                            }))
                        })]
                    })
                },
                Qe = u.a.memo((function(e) {
                    var n = e.isLoading,
                        a = e.filters,
                        l = e.sortableHeaders,
                        t = e.sortBy,
                        i = e.rows,
                        r = e.key;
                    return Object(x.jsx)(F.a, {
                        getHref: function(e) {
                            var n = e.data;
                            return n.slug ? "/collection/".concat(n.slug) : void 0
                        },
                        header: Object(x.jsx)(Ee, {
                            filters: a,
                            sortableHeaders: l
                        }),
                        itemHeightEstimate: 90,
                        items: n ? Ce.f : i,
                        renderFullRow: function(e) {
                            return n ? Object(x.jsx)(Re.a, {}) : Object(x.jsx)(Le, Ne(Ne({}, e), {}, {
                                sortBy: t
                            }))
                        },
                        renderMore: L.a,
                        renderPrimary: function(e) {
                            return n ? Object(x.jsx)(Re.b, {}) : Object(x.jsx)(Ie, Ne(Ne({}, e), {}, {
                                sortBy: t
                            }))
                        }
                    }, r)
                })),
                ze = a("gP3Z");

            function qe(e, n) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n && (l = l.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function $e(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? qe(Object(a), !0).forEach((function(n) {
                        Object(r.a)(e, n, a[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : qe(Object(a)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
                    }))
                }
                return e
            }
            var He = function() {
                    var e = Object(ze.a)(),
                        n = e.chains,
                        a = e.getChainName,
                        l = e.getChainLogo;
                    return Object(c.useMemo)((function() {
                        return [{
                            label: "All chains",
                            value: "all",
                            avatar: $e($e({}, Ce.m), {}, {
                                backgroundColor: "inherit",
                                icon: "link"
                            })
                        }].concat(Object(t.a)(n.map((function(e) {
                            return {
                                label: a(e),
                                value: le.i[e],
                                avatar: $e($e({}, Ce.m), {}, {
                                    src: l(e),
                                    backgroundColor: "inherit"
                                })
                            }
                        }))))
                    }), [n, a, l])
                },
                Me = a("bEAz"),
                Ue = function(e, n) {
                    var a = n.defaultValue,
                        l = n.serializer,
                        t = void 0 === l ? JSON.stringify : l,
                        i = n.deserializer,
                        r = Object(h.useRouter)(),
                        s = null === i || void 0 === i ? void 0 : i(r.query[e]),
                        o = Object(c.useState)(null !== s && void 0 !== s ? s : a),
                        u = o[0],
                        d = o[1];
                    return Object(g.a)((function() {
                        if (s !== u) {
                            var n = t(u);
                            void 0 === n ? delete r.query[e] : r.query[e] = n, r.push({
                                query: r.query
                            })
                        }
                    }), [u]), [u, d]
                },
                Ge = ["avatar"];

            function Xe(e, n) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n && (l = l.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), a.push.apply(a, l)
                }
                return a
            }

            function Ye(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Xe(Object(a), !0).forEach((function(n) {
                        Object(r.a)(e, n, a[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Xe(Object(a)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
                    }))
                }
                return e
            }
            var Ze = ["All chains", "Ethereum", "Solana", "Polygon", "Klaytn"],
                Je = function(e, n) {
                    var a = Ze.indexOf(e.label),
                        l = Ze.indexOf(n.label);
                    return -1 === a && -1 === l ? -1 : a - l
                },
                en = Ce.k.map((function(e) {
                    e.avatar;
                    return Object(i.a)(e, Ge)
                })),
                nn = en.map((function(e) {
                    return "All categories" === e.label ? Ye(Ye({}, e), {}, {
                        label: "Category"
                    }) : e
                })),
                an = Object(m.d)(S.a).withConfig({
                    componentId: "sc-1mf4nh1-0"
                })(["::-webkit-scrollbar{display:none;}", ""], Object(C.e)({
                    md: Object(m.c)(["display:none;"])
                })),
                ln = Object(m.d)(S.a).withConfig({
                    componentId: "sc-1mf4nh1-1"
                })(["display:none;", ""], Object(C.e)({
                    md: Object(m.c)(["display:block;"])
                })),
                tn = {
                    watchlist: [],
                    setWatchlist: d.noop,
                    hiddenCollections: [],
                    setHiddenCollections: d.noop
                },
                rn = Object(c.createContext)(tn),
                sn = function(e) {
                    var n = e.currentTab,
                        a = e.emptyView,
                        i = e.paginateViaLoadNext,
                        r = e.rankingsPaginationFragment,
                        s = e.rankings,
                        u = e.displayRankIndex,
                        d = void 0 === u || u,
                        m = e.showCategoryAndChainFilters,
                        h = void 0 === m || m,
                        j = r.data,
                        f = r.hasNext,
                        K = r.loadNext,
                        V = r.isLoadingNext,
                        L = Object(O.l)(),
                        D = 0 === (null === s || void 0 === s ? void 0 : s.edges.length),
                        A = function(e) {
                            var n = Object(O.l)(),
                                a = He(),
                                l = Object(ne.g)({
                                    isStatsV2Enabled: n
                                }),
                                t = Ue("sortBy", {
                                    serializer: ne.q,
                                    defaultValue: Me.d[0],
                                    deserializer: function(e) {
                                        return Object(ne.i)(e, Me.d, Me.d[0])
                                    }
                                }),
                                i = Object(P.a)(t, 2),
                                r = i[0],
                                s = i[1],
                                o = Ue("category", {
                                    serializer: function(e) {
                                        return "allnfts" === e.value ? void 0 : Object(ne.q)(e)
                                    },
                                    defaultValue: l[0],
                                    deserializer: function(e) {
                                        return Object(ne.i)(e, l, l[0])
                                    }
                                }),
                                u = Object(P.a)(o, 2),
                                d = u[0],
                                g = u[1],
                                y = Ue("chain", {
                                    serializer: function(e) {
                                        return "all" === e.value ? void 0 : Object(ne.q)(e)
                                    },
                                    defaultValue: a[0],
                                    deserializer: function(e) {
                                        return Object(ne.i)(e, a, a[0])
                                    }
                                }),
                                m = Object(P.a)(y, 2),
                                p = m[0],
                                b = m[1],
                                h = Object(c.useState)(e.isLoadingNewFilter),
                                j = h[0],
                                f = h[1];
                            return {
                                sortBy: r,
                                setSortBy: Object(c.useCallback)((function(e) {
                                    s(e), f(!0)
                                }), [s, f]),
                                category: d,
                                setCategory: Object(c.useCallback)((function(e) {
                                    g(e), f(!0)
                                }), [g, f]),
                                chain: p,
                                setChain: Object(c.useCallback)((function(e) {
                                    b(e), f(!0)
                                }), [b, f]),
                                isLoadingNewFilter: j,
                                setIsLoadingNewFilter: f
                            }
                        }({
                            isLoadingNewFilter: !j
                        }),
                        I = A.sortBy,
                        R = A.setSortBy,
                        B = A.category,
                        N = A.setCategory,
                        W = A.chain,
                        E = A.setChain,
                        Q = A.isLoadingNewFilter,
                        q = A.setIsLoadingNewFilter,
                        $ = Object(c.useState)([]),
                        H = $[0],
                        M = $[1],
                        U = Object(c.useState)([]),
                        G = U[0],
                        X = U[1],
                        Y = Object(c.useState)("Volume"),
                        Z = Y[0],
                        J = Y[1],
                        ee = Object(c.useState)(!1),
                        ae = ee[0],
                        le = ee[1],
                        te = Object(c.useState)(0),
                        ie = te[0],
                        re = te[1],
                        se = He().sort(Je);
                    Object(g.a)((function() {
                        M([]), X([])
                    }), [n]), Object(c.useEffect)((function() {
                        Object(de.v)({
                            category: B.value,
                            chain: W.value,
                            sortBy: "trending" === n ? null : I.value,
                            columnSort: Z,
                            sortAscending: ae,
                            currentTab: n,
                            currentPage: "trending" === n ? null : ie
                        })
                    }), [n, ie, B.value, W.value, I.value, ae, Z]);
                    var oe = Object(c.useMemo)((function() {
                            return function(e) {
                                return e.map((function(e) {
                                    return "All chains" === e.label ? Ye(Ye({}, e), {}, {
                                        label: "Chain",
                                        avatar: void 0
                                    }) : Ye(Ye({}, e), {}, {
                                        avatar: void 0
                                    })
                                }))
                            }(se)
                        }), [se]),
                        ge = Object(c.useRef)(null),
                        he = Object(c.useRef)(null),
                        je = Object(y.a)(Object(b.d)(Object(C.d)("xl"))),
                        fe = Object(c.useCallback)((function() {
                            var e, n, a, l;
                            if (je) {
                                var t, i, r = (null !== (t = null === (i = he.current) || void 0 === i ? void 0 : i.offsetTop) && void 0 !== t ? t : 232) - z.b;
                                window.scrollY > r && window.scrollTo(0, r)
                            } else {
                                var s = (null !== (e = null === (n = ge.current) || void 0 === n ? void 0 : n.offsetTop) && void 0 !== e ? e : 246) - (null !== (a = null === (l = he.current) || void 0 === l ? void 0 : l.clientHeight) && void 0 !== a ? a : 67);
                                window.scrollY > s && window.scrollTo(0, s)
                            }
                        }), [je]),
                        ke = function(e) {
                            re(e), fe()
                        },
                        xe = Object(c.useMemo)((function() {
                            return j && s ? (q(!1), {
                                rows: Object(ne.l)(s, Z, ae, ie, I, L).filter((function(e) {
                                    return !G.includes(e.slug)
                                })),
                                key: Object(p.a)()
                            }) : (q(!0), {
                                rows: [],
                                key: void 0
                            })
                        }), [j, s, q, Z, ae, ie, I, L, G]),
                        ve = xe.rows,
                        Se = xe.key;
                    Object(g.a)((function() {
                        re(0)
                    }), [W, B, I, Z]);
                    var we = L ? Ce.l : Ce.b,
                        Ke = L ? "COLLECTION" : "Collection",
                        Pe = L ? un : on,
                        Ve = L ? cn : on,
                        Le = L ? "top" === n ? 1 : void 0 : 2,
                        De = Object(c.useCallback)((function(e, a) {
                            var l = {
                                    columnSort: e,
                                    sortAscending: a
                                },
                                t = {
                                    category: B.value,
                                    chain: W.value,
                                    sortBy: "trending" === n ? null : I.value,
                                    columnSort: Z,
                                    sortAscending: ae,
                                    currentTab: n,
                                    currentPage: "trending" === n ? null : ie,
                                    newValue: l
                                };
                            J(e), le(a), ye(t)
                        }), [B.value, W.value, I.value, n, ie, Z, ae]),
                        Ae = Object(w.a)(Object(c.useMemo)((function() {
                            return [{
                                header: Object(x.jsx)(Ve, {
                                    children: Ke
                                })
                            }].concat(Object(t.a)(we.map((function(e) {
                                return {
                                    header: Object(x.jsx)(Pe, {
                                        children: e
                                    }),
                                    sortIndicatorHideMode: "remove",
                                    sort: function(n) {
                                        De(e, "asc" === n), fe()
                                    },
                                    showSelectedHeader: !0
                                }
                            }))))
                        }), [we, Ke, Ve, Pe, fe, De]), {
                            index: Le,
                            direction: "desc"
                        }),
                        _e = function(e, a) {
                            return function(l) {
                                e(l);
                                var t = {
                                    path: window.location.pathname,
                                    category: B.value,
                                    chain: W.value,
                                    sortBy: "trending" === n ? null : I.value,
                                    columnSort: Z,
                                    sortAscending: ae,
                                    currentTab: n,
                                    currentPage: "trending" === n ? null : ie,
                                    newValue: l.value
                                };
                                a(t)
                            }
                        },
                        Ie = Object(c.useMemo)((function() {
                            var e, a, l, t, i, r, s, o, c;
                            return L ? Object(x.jsxs)(x.Fragment, {
                                children: [Object(x.jsx)(an, {
                                    width: "100%",
                                    children: Object(x.jsxs)(dn, {
                                        overflowX: "auto",
                                        padding: {
                                            _: "0 16px",
                                            xl: "initial"
                                        },
                                        width: "100%",
                                        children: [Object(x.jsx)(k.a, {
                                            paddingRight: "4px",
                                            children: h && Object(x.jsxs)(x.Fragment, {
                                                children: [Object(x.jsx)(Oe, {
                                                    appendTo: null !== (t = ge.current) && void 0 !== t ? t : void 0,
                                                    options: nn,
                                                    setValue: _e(N, me),
                                                    testId: "Rankings--category-dropdown-small",
                                                    value: B
                                                }), Object(x.jsx)(Oe, {
                                                    appendTo: null !== (i = ge.current) && void 0 !== i ? i : void 0,
                                                    options: oe,
                                                    setValue: _e(E, pe),
                                                    testId: "Rankings--chain-dropdown-small",
                                                    value: W
                                                })]
                                            })
                                        }), "trending" !== n && Object(x.jsx)(Oe, {
                                            appendTo: null !== (r = ge.current) && void 0 !== r ? r : void 0,
                                            options: Ce.j,
                                            setValue: _e(R, be),
                                            testId: "Rankings--sortBy-dropdown-small",
                                            timeVariant: !0,
                                            value: I
                                        })]
                                    })
                                }), Object(x.jsx)(ln, {
                                    width: "100%",
                                    children: Object(x.jsxs)(T.a, {
                                        overflowX: "auto",
                                        padding: {
                                            _: "0 16px",
                                            xl: "initial"
                                        },
                                        width: "100%",
                                        children: [Object(x.jsx)(k.a, {
                                            children: h && Object(x.jsxs)(x.Fragment, {
                                                children: [Object(x.jsx)(Oe, {
                                                    appendTo: null !== (s = ge.current) && void 0 !== s ? s : void 0,
                                                    options: en,
                                                    setValue: _e(N, me),
                                                    testId: "Rankings--category-dropdown",
                                                    value: B
                                                }), Object(x.jsx)(Oe, {
                                                    appendTo: null !== (o = ge.current) && void 0 !== o ? o : void 0,
                                                    options: se,
                                                    setValue: _e(E, pe),
                                                    testId: "Rankings--chain-dropdown",
                                                    value: W
                                                })]
                                            })
                                        }), "trending" !== n && Object(x.jsx)(Oe, {
                                            appendTo: null !== (c = ge.current) && void 0 !== c ? c : void 0,
                                            options: Ce.j,
                                            setValue: _e(R, be),
                                            testId: "Rankings--sortBy-dropdown",
                                            timeVariant: !0,
                                            value: I
                                        })]
                                    })
                                })]
                            }) : Object(x.jsxs)(T.a, {
                                width: {
                                    _: "fit-content",
                                    sm: "100%"
                                },
                                children: [Object(x.jsx)(Oe, {
                                    appendTo: null !== (e = ge.current) && void 0 !== e ? e : void 0,
                                    options: Ce.i,
                                    setValue: _e(R, be),
                                    testId: "Rankings--sortBy-dropdown-legacy",
                                    value: I
                                }), Object(x.jsx)(Oe, {
                                    appendTo: null !== (a = ge.current) && void 0 !== a ? a : void 0,
                                    options: Ce.a,
                                    setValue: _e(N, me),
                                    testId: "Rankings--category-dropdown-legacy",
                                    value: B
                                }), Object(x.jsx)(Oe, {
                                    appendTo: null !== (l = ge.current) && void 0 !== l ? l : void 0,
                                    options: se,
                                    setValue: _e(E, me),
                                    testId: "Rankings--chain-dropdown-legacy",
                                    value: W
                                })]
                            })
                        }), [B, W, N, n, E, R, I, se, L, oe, _e, h]),
                        Re = {
                            top: z.a,
                            overflowX: "auto",
                            overflowY: "visible",
                            padding: {
                                _: "8px",
                                xl: "16px"
                            },
                            borderColor: L ? "transparent" : "border",
                            borderBottom: L ? "0px" : void 0
                        },
                        Be = Object(ne.p)(B.value, W.value),
                        Ne = D || Be,
                        We = Be ? "Stats for these collections are coming soon" : "No items found for this search",
                        Ee = !!s && (Object(_.c)(s).length > Ce.g || Object(_.c)(s).length === Ce.g && f),
                        ze = "trending" === n || Ne || !Ee && "watchlist" === n,
                        qe = L ? gn : F.a.HeaderContainer,
                        $e = Object(x.jsx)(x.Fragment, {
                            children: Ne ? Object(x.jsxs)(x.Fragment, {
                                children: [Object(x.jsx)(qe, Ye(Ye({
                                    ref: he
                                }, Re), {}, {
                                    children: Ie
                                })), Object(x.jsx)(Fe, {
                                    message: null !== a && void 0 !== a ? a : We
                                })]
                            }) : L ? Object(x.jsx)(S.a, {
                                margin: {
                                    _: "0 -16px",
                                    xl: "initial"
                                },
                                children: Object(x.jsx)(ce, {
                                    displayRankIndex: d,
                                    filters: Ie,
                                    isLoading: Q || V,
                                    isWatchlistTab: "watchlist" === n,
                                    rows: ve,
                                    sortBy: I,
                                    sortableHeaders: Ae
                                })
                            }) : Object(x.jsx)(Qe, {
                                filters: Ie,
                                isLoading: Q,
                                rows: ve,
                                sortBy: I,
                                sortableHeaders: Ae
                            }, Se)
                        }),
                        Ge = "All chains" !== W.label ? "".concat(W.label, " ") : "";
                    return Object(x.jsx)(ue.a, {
                        eventParams: {
                            chain: W.value,
                            category: B.value,
                            sortBy: I.value,
                            columnSort: Z,
                            sortAscending: ae,
                            currentTab: n,
                            currentPage: ie
                        },
                        eventSource: Ce.c,
                        children: Object(x.jsx)(rn.Provider, {
                            value: {
                                watchlist: H,
                                setWatchlist: M,
                                hiddenCollections: G,
                                setHiddenCollections: X
                            },
                            children: Object(x.jsx)(Te.a, {
                                chainLabel: Ge,
                                chainValue: W.value,
                                currentTab: n,
                                pagination: !ze && (i ? Object(x.jsx)(v, {
                                    currentPage: ie,
                                    hasMore: f || !!s && Object(_.c)(s).length > (ie + 1) * Ce.g,
                                    limit: void 0,
                                    loadNext: Object(l.a)(o.a.mark((function e() {
                                        return o.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, K(Ce.g);
                                                case 2:
                                                    return e.abrupt("return", e.sent);
                                                case 3:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))),
                                    pageSize: Ce.g,
                                    setCurrentPage: ke
                                }) : Object(x.jsx)(v, {
                                    currentPage: ie,
                                    hasMore: !0,
                                    limit: s ? Object(_.c)(s).length : Ce.g,
                                    pageSize: Ce.g,
                                    setCurrentPage: ke
                                })),
                                tableContent: $e
                            })
                        })
                    })
                },
                on = Object(m.d)(K.a).attrs({
                    weight: "semibold",
                    size: "medium",
                    color: "text.heading"
                }).withConfig({
                    componentId: "sc-1mf4nh1-2"
                })([""]),
                cn = Object(m.d)(K.a).attrs({
                    size: "tiny",
                    weight: "semibold"
                }).withConfig({
                    componentId: "sc-1mf4nh1-3"
                })(["color:inherit;white-space:nowrap;"]),
                un = Object(m.d)(K.a).attrs({
                    size: "tiny",
                    weight: "semibold"
                }).withConfig({
                    componentId: "sc-1mf4nh1-4"
                })(["color:inherit;white-space:nowrap;:hover{color:", " !important;}"], (function(e) {
                    return e.theme.colors.text.heading
                })),
                dn = Object(m.d)(T.a).withConfig({
                    componentId: "sc-1mf4nh1-5"
                })(["-ms-overflow-style:none;scrollbar-width:none;::-webkit-scrollbar{display:none;}"]),
                gn = Object(m.d)(F.a.HeaderContainer).withConfig({
                    componentId: "sc-1mf4nh1-6"
                })(["border-bottom:0px;width:100%;padding:0px;"])
        },
        "z2//": function(e, n, a) {
            "use strict";
            a.d(n, "a", (function() {
                return r
            }));
            var l = a("rx0e"),
                t = a("BOW+"),
                i = a("YYXE");

            function r(e, n) {
                Object(t.a)(2, arguments);
                var a = Object(i.a)(n);
                return Object(l.a)(e, -a)
            }
        },
        zjQZ: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = function() {
                var e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chain"
                    },
                    n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "count"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "createdAfter"
                    },
                    l = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "parents"
                    },
                    i = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    },
                    r = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "chains",
                        variableName: "chain"
                    }, {
                        kind: "Variable",
                        name: "createdAfter",
                        variableName: "createdAfter"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, {
                        kind: "Variable",
                        name: "parents",
                        variableName: "parents"
                    }, {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    }],
                    s = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    u = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: [e, n, a, l, t, i],
                        kind: "Fragment",
                        metadata: null,
                        name: "RankingsPageTopQuery",
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "RankingsPageTop_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [e, n, l, i, t, a],
                        kind: "Operation",
                        name: "RankingsPageTopQuery",
                        selections: [{
                            alias: null,
                            args: r,
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "rankings",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "createdDate",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "logo",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isVerified",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "relayId",
                                        storageKey: null
                                    }, s, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PaymentAssetType",
                                        kind: "LinkedField",
                                        name: "nativePaymentAsset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "ChainType",
                                            kind: "LinkedField",
                                            name: "chain",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "identifier",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, o, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "asset",
                                            plural: !1,
                                            selections: [s, c, o],
                                            storageKey: null
                                        }, c],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionStatsV2Type",
                                        kind: "LinkedField",
                                        name: "statsV2",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "floorPrice",
                                            plural: !1,
                                            selections: u,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "numOwners",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSupply",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalQuantity",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalListed",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "totalSales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "sevenDayVolume",
                                            plural: !1,
                                            selections: u,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "oneDayVolume",
                                            plural: !1,
                                            selections: u,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDaySales",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "thirtyDayVolume",
                                            plural: !1,
                                            selections: u,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "totalVolume",
                                            plural: !1,
                                            selections: u,
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, c, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "__typename",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "cursor",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PageInfo",
                                kind: "LinkedField",
                                name: "pageInfo",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "endCursor",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "hasNextPage",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: r,
                            filters: ["chains", "sortBy", "parents", "createdAfter"],
                            handle: "connection",
                            key: "RankingsPageTop_rankings",
                            kind: "LinkedHandle",
                            name: "rankings"
                        }]
                    },
                    params: {
                        cacheID: "843d2a1452ab7598f3910d981b9ffc21",
                        id: null,
                        metadata: {},
                        name: "RankingsPageTopQuery",
                        operationKind: "query",
                        text: "query RankingsPageTopQuery(\n  $chain: [ChainScalar!]\n  $count: Int!\n  $cursor: String\n  $sortBy: CollectionSort\n  $parents: [CollectionSlug!]\n  $createdAfter: DateTime\n) {\n  ...RankingsPageTop_data\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment RankingsPageTop_data on Query {\n  rankings(after: $cursor, chains: $chain, first: $count, sortBy: $sortBy, parents: $parents, createdAfter: $createdAfter) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        relayId\n        ...StatsV2CollectionCell_collection\n        ...collection_url\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          ...StatsV2TablePrice_logo\n          asset {\n            symbol\n            id\n          }\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n            eth\n          }\n          numOwners\n          totalSupply\n          totalQuantity\n          totalListed\n          totalSales\n          sevenDaySales\n          sevenDayChange\n          sevenDayVolume {\n            unit\n            eth\n          }\n          oneDaySales\n          oneDayChange\n          oneDayVolume {\n            unit\n            eth\n          }\n          thirtyDaySales\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n            eth\n          }\n          totalVolume {\n            unit\n            eth\n          }\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment StatsV2CollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            l.hash = "16b7505d147e48b4fd0e455bab17dac0", n.default = l
        }
    }
]);
//# sourceMappingURL=3ad2a615a1356bf08cccb5b47eb85547bfc80bf1.947411e182c23d65543b.js.map