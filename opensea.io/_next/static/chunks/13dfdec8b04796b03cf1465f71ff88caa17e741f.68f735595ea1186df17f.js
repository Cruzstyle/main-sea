(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [42], {
        "+pON": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "StatsV2HomepageCollectionCell_collection",
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
                hash: "775009776fca1f02ab2d435d4f96a686"
            };
            t.default = a
        },
        "28/w": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return O
            }));
            var a = n("oA/F"),
                l = n("m6w3"),
                r = n("mXGw"),
                i = n("UutA"),
                o = n("jQgF"),
                s = n("b7Z7"),
                c = n("sX+s"),
                d = n("oYCi"),
                u = ["targetBreakpoint"];

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        Object(l.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var p = Object(r.createContext)({
                    level: 0
                }),
                h = Object(r.forwardRef)((function(e, t) {
                    var n = Object(r.useContext)(p).level;
                    if (n >= 2 && !o.c) throw new Error("Grid is only allowed to be nested a maximum of ".concat(2, " layers"));
                    return Object(d.jsx)(p.Provider, {
                        value: {
                            level: n + 1
                        },
                        children: Object(d.jsx)(b, m(m({}, e), {}, {
                            ref: t
                        }))
                    })
                })),
                b = Object(i.d)(s.a).withConfig({
                    componentId: "sc-nk1ozs-0"
                })(["--template-grid-gap:8px;--template-grid-row-gap:", ";--template-num-columns:", ";display:grid;grid-template-columns:repeat(var(--template-num-columns),1fr);grid-gap:var(--template-grid-gap);grid-row-gap:var(--template-grid-row-gap);@media (min-width:", "px){--template-grid-gap:16px;}@media (min-width:", "px){--template-grid-gap:24px;}"], (function(e) {
                    return void 0 !== e.gridRowGap ? "".concat(e.gridRowGap, "px") : "8px"
                }), 12, c.c.md, c.c.xxl),
                j = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"],
                x = {
                    xxxl: 0,
                    xxl: 1,
                    xl: 2,
                    lg: 3,
                    md: 4,
                    sm: 5,
                    xs: 6
                };

            function y(e) {
                var t = e.targetBreakpoint,
                    n = Object(a.a)(e, u);
                if (void 0 !== n[t]) return n[t];
                var l = x[t],
                    r = j.find((function(e, t) {
                        return !!n[e] && l <= t
                    }));
                return r ? n[r] : 12
            }
            var f = Object(i.d)(s.a).withConfig({
                    componentId: "sc-nk1ozs-1"
                })(["--grid-item-col-span:", ";grid-column:span var(--grid-item-col-span);@media (min-width:", "px){--grid-item-col-span:", ";}@media (min-width:", "px){--grid-item-col-span:", ";}@media (min-width:", "px){--grid-item-col-span:", ";}@media (min-width:", "px){--grid-item-col-span:", ";}@media (min-width:", "px){--grid-item-col-span:", ";}@media (min-width:", "px){--grid-item-col-span:", ";}"], (function(e) {
                    return y(m({
                        targetBreakpoint: "xs"
                    }, e))
                }), c.c.sm, (function(e) {
                    return y(m({
                        targetBreakpoint: "sm"
                    }, e))
                }), c.c.md, (function(e) {
                    return y(m({
                        targetBreakpoint: "md"
                    }, e))
                }), c.c.lg, (function(e) {
                    return y(m({
                        targetBreakpoint: "lg"
                    }, e))
                }), c.c.xl, (function(e) {
                    return y(m({
                        targetBreakpoint: "xl"
                    }, e))
                }), c.c.xxl, (function(e) {
                    return y(m({
                        targetBreakpoint: "xxl"
                    }, e))
                }), c.c.xxxl, (function(e) {
                    return y(m({
                        targetBreakpoint: "xxxl"
                    }, e))
                })),
                O = Object.assign(h, {
                    Item: f
                })
        },
        "2t2L": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "MagellanLayout_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "HomePageFeaturedSectionCollectionType",
                    kind: "LinkedField",
                    name: "homePageFeaturedSectionCollections",
                    plural: !0,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "HomePageFeaturedCollections_data"
                    }],
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "HomePageHeader_data"
                }],
                type: "Query",
                abstractKey: null,
                hash: "be46744a231e79fe4a703b0bfc69c0c0"
            };
            t.default = a
        },
        "4TjO": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    t = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    a = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "TopCollectionsLazyQuery",
                        selections: [{
                            args: [t],
                            kind: "FragmentSpread",
                            name: "TopCollections_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "TopCollectionsLazyQuery",
                        selections: [{
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "first",
                                value: 15
                            }, {
                                kind: "Literal",
                                name: "includeHidden",
                                value: !0
                            }, {
                                kind: "Literal",
                                name: "sortAscending",
                                value: !1
                            }, t],
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "collections",
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
                                        name: "slug",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }, n, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
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
                                        name: "createdDate",
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
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "symbol",
                                            storageKey: null
                                        }, {
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
                                                name: "imageUrl",
                                                storageKey: null
                                            }, n],
                                            storageKey: null
                                        }, n],
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
                                            selections: a,
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
                                            selections: a,
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
                                            selections: a,
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
                                            selections: a,
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "ddee271baa03e0a8a55edc4ab2fdd9f8",
                        id: null,
                        metadata: {},
                        name: "TopCollectionsLazyQuery",
                        operationKind: "query",
                        text: "query TopCollectionsLazyQuery(\n  $sortBy: CollectionSort\n) {\n  ...TopCollections_data_34jhwD\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment TopCollections_data_34jhwD on Query {\n  collections(first: 15, sortBy: $sortBy, sortAscending: false, includeHidden: true) {\n    edges {\n      node {\n        ...collection_url\n        id\n        name\n        logo\n        createdDate\n        isVerified\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n          }\n          oneDayChange\n          oneDayVolume {\n            unit\n          }\n          sevenDayChange\n          sevenDayVolume {\n            unit\n          }\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "54074de55447e194b4a0d497071360dc", t.default = a
        },
        "6vc1": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            }));
            n("mXGw");
            var a, l = n("TiKg"),
                r = n.n(l),
                i = n("aXrf"),
                o = n("UutA"),
                s = n("bK7F"),
                c = n("Q5Gx"),
                d = n("QrBS"),
                u = n("x5RY"),
                g = n("oYCi"),
                m = function(e) {
                    var t = e.data,
                        l = e.title,
                        o = Object(i.useFragment)(void 0 !== a ? a : a = n("iCgP"), t),
                        c = (null !== o && void 0 !== o ? o : []).filter((function(e) {
                            return Boolean(e.saleStartTime)
                        }));
                    if (0 === c.length) return null;
                    var d = r()();
                    return Object(g.jsxs)(p, {
                        children: [l, Object(g.jsx)(s.a, {
                            slidesNumber: c.length,
                            children: c.map((function(e) {
                                return Object(g.jsx)(u.b, {
                                    now: d,
                                    promotion: e
                                }, e.relayId)
                            }))
                        })]
                    })
                },
                p = Object(o.d)(d.a).attrs({
                    as: "section"
                }).withConfig({
                    componentId: "sc-wzaqja-0"
                })(["width:100%;flex-direction:column;align-items:center;margin-top:40px;.Carousel--left-arrow{left:-17px;top:62.5%;}.Carousel--right-arrow{right:-17px;top:62.5%;}", ""], Object(c.e)({
                    extraLarge: Object(o.c)([".Carousel--left-arrow{top:63%;}.Carousel--right-arrow{top:63%;}"])
                }))
        },
        "9U3r": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return j
            })), n.d(t, "b", (function() {
                return x
            }));
            n("mXGw");
            var a = n("UutA"),
                l = n("Q5Gx"),
                r = n("b7Z7"),
                i = n("B6yL"),
                o = n("oYCi"),
                s = function(e) {
                    var t = e.url,
                        n = e.autoplay,
                        a = void 0 !== n && n,
                        l = e.loop,
                        r = e.showControls,
                        s = void 0 === r || r,
                        d = e.title,
                        u = e.playlist,
                        g = void 0 === u || u;
                    return Object(i.q)(t) ? Object(o.jsx)(c, {
                        children: Object(o.jsx)("iframe", {
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: !0,
                            frameBorder: "0",
                            height: "315",
                            sandbox: "allow-same-origin allow-scripts allow-presentation",
                            src: Object(i.d)(t, a, l, s, g),
                            title: d,
                            width: "560"
                        })
                    }) : null
                },
                c = Object(a.d)(r.a).withConfig({
                    componentId: "sc-1e7ikaq-0"
                })(["height:0;padding-bottom:56.25%;position:relative;iframe,object,embed{height:100%;left:0;position:absolute;top:0;width:100%;}"]),
                d = n("LoMF"),
                u = n("67yl"),
                g = n("QrBS"),
                m = n("3FBR"),
                p = n("dgii"),
                h = n("C/iq"),
                b = n("D4YM"),
                j = "meetopensea",
                x = function(e) {
                    var t = e.showButton,
                        n = Object(p.a)("common");
                    return Object(o.jsx)(y, {
                        id: j,
                        children: Object(o.jsx)(f, {
                            children: Object(o.jsxs)(O, {
                                children: [Object(o.jsx)(k, {
                                    children: n("intro.title", "Meet OpenSea")
                                }), Object(o.jsx)(w, {
                                    children: n("intro.subtitle", "The NFT marketplace with everything for everyone")
                                }), Object(o.jsx)(F, {
                                    children: Object(o.jsx)(s, {
                                        title: "Meet OpenSea",
                                        url: "https://www.youtube.com/watch?v=gfGuPd1CELo"
                                    })
                                }), t ? Object(o.jsx)(v, {
                                    children: Object(o.jsx)(d.c, {
                                        className: "MeetOpenSea--button",
                                        href: "/explore-collections",
                                        children: n("intro.mainCTA", "Explore the marketplace")
                                    })
                                }) : null]
                            })
                        })
                    })
                },
                y = Object(a.d)(r.a).withConfig({
                    componentId: "sc-b32ykt-0"
                })(["padding-top:40px;width:100%;"]),
                f = Object(a.d)(u.a).withConfig({
                    componentId: "sc-b32ykt-1"
                })(["width:100%;padding-top:40px;padding-bottom:40px;", " ", ";"], Object(l.e)({
                    medium: Object(a.c)(["padding-bottom:0;"])
                }), (function(e) {
                    var t = e.theme;
                    return Object(b.d)({
                        variants: {
                            light: {
                                "background-color": t.colors.lightMarina
                            },
                            dark: {
                                "background-color": t.colors.onyx
                            }
                        }
                    })
                })),
                O = Object(a.d)(r.a).withConfig({
                    componentId: "sc-b32ykt-2"
                })(["max-width:", ";width:100%;"], (function(e) {
                    return e.theme.maxWidth.largePadding
                })),
                k = Object(a.d)(m.a).attrs({
                    variant: "h2"
                }).withConfig({
                    componentId: "sc-b32ykt-3"
                })(["font-size:32px;margin-bottom:8px;margin-top:0;text-align:center;width:100%;", ""], Object(l.e)({
                    phoneXl: Object(a.c)(["font-size:40px;"])
                })),
                w = Object(a.d)(m.a).withConfig({
                    componentId: "sc-b32ykt-4"
                })(["text-align:center;margin-bottom:40px;", ""], Object(l.e)({
                    medium: Object(a.c)(["margin-bottom:20px;"])
                })),
                F = Object(a.d)(r.a).withConfig({
                    componentId: "sc-b32ykt-5"
                })(["", ""], Object(l.e)({
                    medium: Object(a.c)(["background:url(", ") center / contain no-repeat;padding:40px 100px 80px;"], h.wb)
                })),
                v = Object(a.d)(g.a).withConfig({
                    componentId: "sc-b32ykt-6"
                })(["justify-content:center;margin-bottom:0;margin-top:40px;.MeetOpenSea--button{text-align:center;}", ""], Object(l.e)({
                    medium: Object(a.c)(["margin-bottom:80px;margin-top:0;"])
                }))
        },
        Aujd: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    t = {
                        alias: null,
                        args: null,
                        concreteType: "AssetContractType",
                        kind: "LinkedField",
                        name: "assetContract",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "address",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "tokenId",
                        storageKey: null
                    },
                    a = {
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
                    };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "Featured_data",
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
                        name: "imagePreviewUrl",
                        storageKey: null
                    }, e, {
                        alias: null,
                        args: null,
                        concreteType: "AccountType",
                        kind: "LinkedField",
                        name: "creator",
                        plural: !1,
                        selections: [e, {
                            alias: null,
                            args: null,
                            concreteType: "UserType",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "publicUsername",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "asset_url",
                        selections: [t, n, a]
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "AssetMedia_asset"
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "itemEvents_data",
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "relayId",
                            storageKey: null
                        }, t, n, a]
                    }],
                    type: "AssetType",
                    abstractKey: null
                }
            }();
            a.hash = "ae43f6107aabc2c2064a6d9b29d8c9f4", t.default = a
        },
        Cwpy: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "HeaderCollectionItem_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "CollectionType",
                    kind: "LinkedField",
                    name: "collection",
                    plural: !1,
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
                        name: "logo",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "verificationStatus",
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
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "unit",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
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
                        }],
                        storageKey: null
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "collection_url",
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "slug",
                            storageKey: null
                        }, {
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
                    name: "shortDescription",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "overrideUrl",
                    storageKey: null
                }],
                type: "HomePageHeaderCarouselType",
                abstractKey: null,
                hash: "21ba70f6e6a8c8612787428a4e88285f"
            };
            t.default = a
        },
        DQ1a: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "unit",
                    storageKey: null
                }];
                return {
                    argumentDefinitions: [{
                        defaultValue: 15,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: !0,
                        kind: "LocalArgument",
                        name: "includeHidden"
                    }, {
                        defaultValue: !1,
                        kind: "LocalArgument",
                        name: "sortAscending"
                    }, {
                        defaultValue: "SEVEN_DAY_VOLUME",
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    kind: "Fragment",
                    metadata: null,
                    name: "TopCollections_data",
                    selections: [{
                        alias: null,
                        args: [{
                            kind: "Variable",
                            name: "first",
                            variableName: "count"
                        }, {
                            kind: "Variable",
                            name: "includeHidden",
                            variableName: "includeHidden"
                        }, {
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
                        name: "collections",
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
                                    name: "id",
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
                                    name: "logo",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "createdDate",
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
                                    concreteType: "PaymentAssetType",
                                    kind: "LinkedField",
                                    name: "nativePaymentAsset",
                                    plural: !1,
                                    selections: [{
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "CollectionDataTablePrice_logo"
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
                                        selections: e,
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
                                        selections: e,
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
                                        selections: e,
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
                                        selections: e,
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    kind: "InlineDataFragmentSpread",
                                    name: "collection_url",
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }]
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
            a.hash = "7c783d028d99fb8c5ee13a8659bdcb56", t.default = a
        },
        F0Z4: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "HomePageHeader_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "HomePageHeaderCarouselType",
                    kind: "LinkedField",
                    name: "homePageHeaderCarousel",
                    plural: !0,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "HomePageHeaderCarousel_data"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null,
                hash: "a5f7196dfc136feed90a95f493ce4cc3"
            };
            t.default = a
        },
        GMWB: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: {
                    plural: !0
                },
                name: "HomePageHeaderCarousel_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "CollectionType",
                    kind: "LinkedField",
                    name: "collection",
                    plural: !1,
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
                        name: "logo",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "overrideUrl",
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "HeaderCollectionItem_data"
                }],
                type: "HomePageHeaderCarouselType",
                abstractKey: null,
                hash: "0eb0dbf315e73ef340fd9d492ea45099"
            };
            t.default = a
        },
        Gyi1: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return f
            }));
            var a = n("m6w3"),
                l = n("oA/F"),
                r = n("mXGw"),
                i = n("K4Ra"),
                o = n("UutA"),
                s = n("FbDh"),
                c = n("Q5Gx"),
                d = n("LoMF"),
                u = n("3FBR"),
                g = n("D4YM"),
                m = n("vv0H"),
                p = n("oYCi"),
                h = ["startEnhancer", "endEnhancer", "foregroundColor", "children"];

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var x = function(e, t) {
                    var n = e.startEnhancer,
                        a = e.endEnhancer,
                        r = e.foregroundColor,
                        o = e.children,
                        s = Object(l.a)(e, h),
                        d = !Object(i.a)(Object(c.d)(c.a.large), !1) ? "bold" : "small-bold-h4";
                    return Object(p.jsx)(O, j(j({
                        foregroundColor: r,
                        ref: t,
                        variant: "secondary"
                    }, s), {}, {
                        children: Object(p.jsxs)(y, {
                            as: "span",
                            color: r,
                            variant: d,
                            children: [n, o, a]
                        })
                    }))
                },
                y = Object(o.d)(u.a).withConfig({
                    componentId: "sc-1iq8qg3-0"
                })(["display:flex;align-items:center;"]),
                f = Object(r.forwardRef)(x),
                O = Object(o.d)(d.c).withConfig({
                    componentId: "sc-1iq8qg3-1"
                })(["height:", "px;background:", ";border:2px solid ", ";border-radius:", ";", " ", " ", " ", " ", " ", " ", ""], m.a, (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    var t;
                    return null !== (t = e.foregroundColor) && void 0 !== t ? t : e.theme.colors.border
                }), (function(e) {
                    return e.theme.borderRadius.button
                }), s.borderRadius, s.boxShadow, (function(e) {
                    return Object(g.d)({
                        variants: {
                            light: {
                                ":hover:not([disabled]),:active:not([disabled]):active:not([disabled]),:focus:not([disabled]):focus:not([disabled])": {
                                    borderColor: e.theme.colors.fog,
                                    borderWidth: "2px"
                                }
                            },
                            dark: {
                                background: e.theme.colors.oil
                            }
                        }
                    })
                }), s.width, s.height, s.background, s.border)
        },
        HAVD: function(e, t, n) {
            "use strict";
            (function(e) {
                const n = {},
                    a = t => "undefined" !== typeof self && self && t in self ? self : "undefined" !== typeof window && window && t in window ? window : "undefined" !== typeof e && e && t in e ? e : "undefined" !== typeof globalThis && globalThis ? globalThis : void 0,
                    l = ["Headers", "Request", "Response", "ReadableStream", "fetch", "AbortController", "FormData"];
                for (const t of l) Object.defineProperty(n, t, {
                    get() {
                        const e = a(t),
                            n = e && e[t];
                        return "function" === typeof n ? n.bind(e) : n
                    }
                });
                const r = e => null !== e && "object" === typeof e,
                    i = "function" === typeof n.AbortController,
                    o = "function" === typeof n.ReadableStream,
                    s = "function" === typeof n.FormData,
                    c = (e, t) => {
                        const a = new n.Headers(e || {}),
                            l = t instanceof n.Headers,
                            r = new n.Headers(t || {});
                        for (const [n, i] of r) l && "undefined" === i || void 0 === i ? a.delete(n) : a.set(n, i);
                        return a
                    },
                    d = (...e) => {
                        let t = {},
                            n = {};
                        for (const a of e) {
                            if (Array.isArray(a)) Array.isArray(t) || (t = []), t = [...t, ...a];
                            else if (r(a)) {
                                for (let [e, n] of Object.entries(a)) r(n) && e in t && (n = d(t[e], n)), t = { ...t,
                                    [e]: n
                                };
                                r(a.headers) && (n = c(n, a.headers))
                            }
                            t.headers = n
                        }
                        return t
                    },
                    u = ["get", "post", "put", "patch", "head", "delete"],
                    g = {
                        json: "application/json",
                        text: "text/*",
                        formData: "multipart/form-data",
                        arrayBuffer: "*/*",
                        blob: "*/*"
                    },
                    m = [413, 429, 503],
                    p = Symbol("stop");
                class h extends Error {
                    constructor(e) {
                        super(e.statusText || String(0 === e.status || e.status ? e.status : "Unknown response error")), this.name = "HTTPError", this.response = e
                    }
                }
                class b extends Error {
                    constructor(e) {
                        super("Request timed out"), this.name = "TimeoutError", this.request = e
                    }
                }
                const j = e => new Promise((t => setTimeout(t, e))),
                    x = e => u.includes(e) ? e.toUpperCase() : e,
                    y = {
                        limit: 2,
                        methods: ["get", "put", "head", "delete", "options", "trace"],
                        statusCodes: [408, 413, 429, 500, 502, 503, 504],
                        afterStatusCodes: m
                    },
                    f = (e = {}) => {
                        if ("number" === typeof e) return { ...y,
                            limit: e
                        };
                        if (e.methods && !Array.isArray(e.methods)) throw new Error("retry.methods must be an array");
                        if (e.statusCodes && !Array.isArray(e.statusCodes)) throw new Error("retry.statusCodes must be an array");
                        return { ...y,
                            ...e,
                            afterStatusCodes: m
                        }
                    },
                    O = 2147483647;
                class k {
                    constructor(e, t = {}) {
                        if (this._retryCount = 0, this._input = e, this._options = {
                                credentials: this._input.credentials || "same-origin",
                                ...t,
                                headers: c(this._input.headers, t.headers),
                                hooks: d({
                                    beforeRequest: [],
                                    beforeRetry: [],
                                    afterResponse: []
                                }, t.hooks),
                                method: x(t.method || this._input.method),
                                prefixUrl: String(t.prefixUrl || ""),
                                retry: f(t.retry),
                                throwHttpErrors: !1 !== t.throwHttpErrors,
                                timeout: "undefined" === typeof t.timeout ? 1e4 : t.timeout,
                                fetch: t.fetch || n.fetch
                            }, "string" !== typeof this._input && !(this._input instanceof URL || this._input instanceof n.Request)) throw new TypeError("`input` must be a string, URL, or Request");
                        if (this._options.prefixUrl && "string" === typeof this._input) {
                            if (this._input.startsWith("/")) throw new Error("`input` must not begin with a slash when using `prefixUrl`");
                            this._options.prefixUrl.endsWith("/") || (this._options.prefixUrl += "/"), this._input = this._options.prefixUrl + this._input
                        }
                        if (i && (this.abortController = new n.AbortController, this._options.signal && this._options.signal.addEventListener("abort", (() => {
                                this.abortController.abort()
                            })), this._options.signal = this.abortController.signal), this.request = new n.Request(this._input, this._options), this._options.searchParams) {
                            const e = "?" + new URLSearchParams(this._options.searchParams).toString(),
                                t = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, e);
                            !(s && this._options.body instanceof n.FormData || this._options.body instanceof URLSearchParams) || this._options.headers && this._options.headers["content-type"] || this.request.headers.delete("content-type"), this.request = new n.Request(new n.Request(t, this.request), this._options)
                        }
                        void 0 !== this._options.json && (this._options.body = JSON.stringify(this._options.json), this.request.headers.set("content-type", "application/json"), this.request = new n.Request(this.request, {
                            body: this._options.body
                        }));
                        const a = async () => {
                                if (this._options.timeout > O) throw new RangeError("The `timeout` option cannot be greater than 2147483647");
                                await j(1);
                                let e = await this._fetch();
                                for (const t of this._options.hooks.afterResponse) {
                                    const a = await t(this.request, this._options, this._decorateResponse(e.clone()));
                                    a instanceof n.Response && (e = a)
                                }
                                if (this._decorateResponse(e), !e.ok && this._options.throwHttpErrors) throw new h(e);
                                if (this._options.onDownloadProgress) {
                                    if ("function" !== typeof this._options.onDownloadProgress) throw new TypeError("The `onDownloadProgress` option must be a function");
                                    if (!o) throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
                                    return this._stream(e.clone(), this._options.onDownloadProgress)
                                }
                                return e
                            },
                            l = this._options.retry.methods.includes(this.request.method.toLowerCase()) ? this._retry(a) : a();
                        for (const [n, r] of Object.entries(g)) l[n] = async () => {
                            this.request.headers.set("accept", this.request.headers.get("accept") || r);
                            const e = (await l).clone();
                            if ("json" === n) {
                                if (204 === e.status) return "";
                                if (t.parseJson) return t.parseJson(await e.text())
                            }
                            return e[n]()
                        };
                        return l
                    }
                    _calculateRetryDelay(e) {
                        if (this._retryCount++, this._retryCount < this._options.retry.limit && !(e instanceof b)) {
                            if (e instanceof h) {
                                if (!this._options.retry.statusCodes.includes(e.response.status)) return 0;
                                const t = e.response.headers.get("Retry-After");
                                if (t && this._options.retry.afterStatusCodes.includes(e.response.status)) {
                                    let e = Number(t);
                                    return Number.isNaN(e) ? e = Date.parse(t) - Date.now() : e *= 1e3, "undefined" !== typeof this._options.retry.maxRetryAfter && e > this._options.retry.maxRetryAfter ? 0 : e
                                }
                                if (413 === e.response.status) return 0
                            }
                            return .3 * 2 ** (this._retryCount - 1) * 1e3
                        }
                        return 0
                    }
                    _decorateResponse(e) {
                        return this._options.parseJson && (e.json = async () => this._options.parseJson(await e.text())), e
                    }
                    async _retry(e) {
                        try {
                            return await e()
                        } catch (t) {
                            const n = Math.min(this._calculateRetryDelay(t), O);
                            if (0 !== n && this._retryCount > 0) {
                                await j(n);
                                for (const e of this._options.hooks.beforeRetry) {
                                    if (await e({
                                            request: this.request,
                                            options: this._options,
                                            error: t,
                                            retryCount: this._retryCount
                                        }) === p) return
                                }
                                return this._retry(e)
                            }
                            if (this._options.throwHttpErrors) throw t
                        }
                    }
                    async _fetch() {
                        for (const a of this._options.hooks.beforeRequest) {
                            const e = await a(this.request, this._options);
                            if (e instanceof Request) {
                                this.request = e;
                                break
                            }
                            if (e instanceof Response) return e
                        }
                        return !1 === this._options.timeout ? this._options.fetch(this.request.clone()) : (e = this.request.clone(), t = this.abortController, n = this._options, new Promise(((a, l) => {
                            const r = setTimeout((() => {
                                t && t.abort(), l(new b(e))
                            }), n.timeout);
                            n.fetch(e).then(a).catch(l).then((() => {
                                clearTimeout(r)
                            }))
                        })));
                        var e, t, n
                    }
                    _stream(e, t) {
                        const a = Number(e.headers.get("content-length")) || 0;
                        let l = 0;
                        return new n.Response(new n.ReadableStream({
                            start(n) {
                                const r = e.body.getReader();
                                t && t({
                                    percent: 0,
                                    transferredBytes: 0,
                                    totalBytes: a
                                }, new Uint8Array), async function e() {
                                    const {
                                        done: i,
                                        value: o
                                    } = await r.read();
                                    if (i) n.close();
                                    else {
                                        if (t) {
                                            l += o.byteLength;
                                            t({
                                                percent: 0 === a ? 0 : l / a,
                                                transferredBytes: l,
                                                totalBytes: a
                                            }, o)
                                        }
                                        n.enqueue(o), e()
                                    }
                                }()
                            }
                        }))
                    }
                }
                const w = (...e) => {
                        for (const t of e)
                            if ((!r(t) || Array.isArray(t)) && "undefined" !== typeof t) throw new TypeError("The `options` argument must be an object");
                        return d({}, ...e)
                    },
                    F = e => {
                        const t = (t, n) => new k(t, w(e, n));
                        for (const n of u) t[n] = (t, a) => new k(t, w(e, a, {
                            method: n
                        }));
                        return t.HTTPError = h, t.TimeoutError = b, t.create = e => F(w(e)), t.extend = t => F(w(e, t)), t.stop = p, t
                    };
                t.a = F()
            }).call(this, n("bqPV"))
        },
        HMC2: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return Tn
            })), n.d(t, "a", (function() {
                return _n
            }));
            var a, l, r, i, o, s, c, d, u, g = n("mXGw"),
                m = n.n(g),
                p = n("UutA"),
                h = n("qymy"),
                b = n("h7iG"),
                j = n("Ojv9"),
                x = n("JiVo"),
                y = n("9va6"),
                f = n("xiTr"),
                O = n("bK7F"),
                k = n("Q5Gx"),
                w = n("b7Z7"),
                F = n("67yl"),
                v = n("QrBS"),
                C = n("28/w"),
                S = n("3FBR"),
                T = n("Weac"),
                _ = n("XHwO"),
                K = n("C/iq"),
                L = n("oYCi"),
                P = function() {
                    var e = Object(T.f)(),
                        t = Object(x.a)(K.h.map((function(e) {
                            return {
                                image: e.slug,
                                title: e.name,
                                url: "/category/".concat(e.slug),
                                text: e.text
                            }
                        }))),
                        n = Object(y.chunk)(t, 3);
                    return Object(L.jsx)(_.a, {
                        eventSource: "BrowseCategories",
                        children: e ? Object(L.jsxs)(L.Fragment, {
                            children: [Object(L.jsx)(C.a.Item, {
                                padding: "0 3%",
                                children: Object(L.jsx)(S.a, {
                                    margin: "0 0 28px",
                                    variant: "small-h2",
                                    children: "Browse by category"
                                })
                            }), Object(L.jsx)(C.a, {
                                gridRowGap: 24,
                                padding: "0 3%",
                                children: n.map((function(e, t) {
                                    return Object(L.jsx)(C.a.Item, {
                                        lg: 4,
                                        children: e.map((function(e) {
                                            return Object(L.jsx)(D, {
                                                href: e.url,
                                                imageUrl: "/static/images/categories/".concat(e.image, ".png"),
                                                children: Object(L.jsx)(v.a, {
                                                    alignItems: "center",
                                                    height: 40,
                                                    justifyContent: "center",
                                                    children: Object(L.jsx)(S.a, {
                                                        as: "span",
                                                        variant: "h5",
                                                        children: e.title
                                                    })
                                                })
                                            }, e.image)
                                        }))
                                    }, "grouped-cards-".concat(t))
                                }))
                            })]
                        }) : Object(L.jsx)(A, {
                            children: Object(L.jsxs)(O.b, {
                                children: [Object(L.jsx)(v.a, {
                                    textAlign: "center",
                                    children: Object(L.jsx)(S.a, {
                                        as: "h2",
                                        margin: "0",
                                        variant: "h3",
                                        children: "Browse by category"
                                    })
                                }), Object(L.jsx)(w.a, {
                                    className: "BrowseCategories--card-container",
                                    children: t.map((function(e) {
                                        return Object(L.jsx)(f.a, {
                                            containerClassName: "BrowseCategories--card",
                                            href: e.url,
                                            imageUrl: "/static/images/categories/".concat(e.image, ".png"),
                                            children: Object(L.jsx)(v.a, {
                                                alignItems: "center",
                                                height: 40,
                                                justifyContent: "center",
                                                children: Object(L.jsx)(S.a, {
                                                    as: "span",
                                                    className: "BrowseCategories--title",
                                                    variant: "h4",
                                                    children: e.title
                                                })
                                            })
                                        }, e.image)
                                    }))
                                })]
                            })
                        })
                    })
                },
                D = Object(p.d)(f.a).withConfig({
                    componentId: "sc-1c6tvgt-0"
                })(["margin-bottom:24px;"]),
                A = Object(p.d)(F.a).withConfig({
                    componentId: "sc-1c6tvgt-1"
                })(["flex-direction:column;align-items:center;margin-bottom:80px;margin-top:40px;.BrowseCategories--card{place-self:center;transition:transform 0.1s ease-out;border-radius:", ";&:hover{box-shadow:", ";}}.BrowseCategories--card-container{display:grid;justify-content:center;grid-gap:15px;margin-top:50px;width:100%;padding:0 20px;", "}.BrowseCategories--title{color:", ";}"], (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.shadows.default
                }), Object(k.e)({
                    extraLarge: Object(p.c)(["grid-template-columns:repeat(", ",340px);grid-template-rows:repeat( ", ",282px );"], 3, Math.ceil(K.h.length / 3)),
                    tabletS: Object(p.c)(["padding:0 30px;grid-template-columns:repeat(", ",182px);grid-template-rows:repeat( ", ",156px );"], 2, Math.ceil(K.h.length / 2)),
                    phoneXs: Object(p.c)(["grid-template-columns:340px;grid-template-rows:repeat(", ",282px);"], Math.ceil(K.h.length))
                }), (function(e) {
                    return e.theme.colors.text.body
                })),
                I = n("HAVD"),
                V = n("B5kz"),
                B = function() {
                    var e = Object(V.useQuery)("posts", (function() {
                            return N()
                        })),
                        t = e.data;
                    return e.isError ? null : t ? Object(L.jsx)(E, {
                        children: Object(L.jsxs)(v.a, {
                            className: "FromBlog--main",
                            children: [Object(L.jsx)(S.a, {
                                as: "h2",
                                className: "FromBlog--title",
                                variant: "h3",
                                children: "Resources for getting started"
                            }), Object(L.jsx)(O.a, {
                                children: t.map((function(e) {
                                    return Object(L.jsx)(f.a, {
                                        className: "FromBlog--card",
                                        containerClassName: "FromBlog--card-container",
                                        href: e.link,
                                        imageHeight: 265,
                                        imageUrl: e.image,
                                        children: Object(L.jsx)(S.a, {
                                            as: "div",
                                            className: "FromBlog--card-title",
                                            dangerouslySetInnerHTML: {
                                                __html: e.title
                                            },
                                            variant: "h4"
                                        })
                                    }, e.link)
                                }))
                            })]
                        })
                    }) : Object(L.jsx)(v.a, {
                        minHeight: "470px"
                    })
                },
                E = Object(p.d)(v.a).attrs({
                    as: "section"
                }).withConfig({
                    componentId: "sc-zaoynb-0"
                })(["flex-direction:column;align-items:center;margin-top:40px;margin-bottom:120px;.FromBlog--main{flex-direction:column;align-items:center;width:100%;.FromBlog--title{margin-bottom:48px;text-align:center;}.Carousel--left-arrow{left:-8px;top:247px;}.Carousel--right-arrow{right:-19px;top:247px;}.FromBlog--card-container{padding:0;", "}.FromBlog--card{", "}.FromBlog--card-title{color:", ";font-weight:600;font-size:16px;margin:10px 20px 10px 16px;height:50px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}}"], Object(k.e)({
                    small: Object(p.c)(["padding:2%;margin:0 10px;"]),
                    medium: Object(p.c)(["padding:1.3%;"])
                }), Object(k.e)({
                    small: Object(p.c)(["width:98%;"])
                }), (function(e) {
                    return e.theme.colors.text.body
                })),
                N = function() {
                    return I.a.get("https://opensea.io/blog/wp-json/wp/v2/posts?_fields=title,jetpack_featured_media_url,link&include=6314,6297,6295").json().then((function(e) {
                        return e.map((function(e) {
                            return {
                                title: e.title.rendered,
                                link: e.link,
                                image: e.jetpack_featured_media_url
                            }
                        }))
                    }))
                },
                H = n("JAph"),
                R = n.n(H),
                U = n("D4YM"),
                z = function() {
                    var e = [{
                        image: "wallet",
                        title: "Set up your wallet",
                        text: Object(L.jsxs)(S.a, {
                            marginTop: "4px",
                            children: ["Once you\u2019ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the", " ", Object(L.jsx)(h.a, {
                                className: "GettingStarted--link",
                                href: "https://openseahelp.zendesk.com/hc/en-us/articles/1500007978402-Wallets-supported-by-OpenSea",
                                children: "wallets we support"
                            }), "."]
                        })
                    }, {
                        image: "collection",
                        title: "Create your collection",
                        text: Object(L.jsxs)(S.a, {
                            marginTop: "4px",
                            children: ["Click", " ", Object(L.jsx)(h.a, {
                                className: "GettingStarted--link",
                                href: "/collections",
                                children: "My Collections"
                            }), " ", "and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."]
                        })
                    }, {
                        image: "nft",
                        title: "Add your NFTs",
                        text: Object(L.jsx)(S.a, {
                            marginTop: "4px",
                            children: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."
                        })
                    }, {
                        image: "sale",
                        title: "List them for sale",
                        text: Object(L.jsx)(S.a, {
                            marginTop: "4px",
                            children: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"
                        })
                    }];
                    return Object(L.jsx)(_.a, {
                        eventSource: "GettingStarted",
                        children: Object(L.jsx)(M, {
                            children: Object(L.jsxs)(O.b, {
                                textAlign: "center",
                                children: [Object(L.jsx)(S.a, {
                                    as: "h2",
                                    variant: "h3",
                                    children: "Create and sell your NFTs"
                                }), Object(L.jsx)(v.a, {
                                    className: "GettingStarted--step-container",
                                    children: e.map((function(e) {
                                        return Object(L.jsx)(q, {
                                            imageUrl: "/static/images/icons/".concat(e.image, ".svg"),
                                            text: e.text,
                                            title: e.title
                                        }, e.image)
                                    }))
                                })]
                            })
                        })
                    })
                },
                q = function(e) {
                    var t = e.imageUrl,
                        n = e.title,
                        a = e.text;
                    return Object(L.jsxs)(F.a, {
                        className: "GettingStarted--step",
                        children: [Object(L.jsx)(R.a, {
                            alt: n,
                            height: 40,
                            src: t,
                            unoptimized: !0,
                            width: 40
                        }), Object(L.jsx)(S.a, {
                            marginBottom: "4px",
                            variant: "bold",
                            children: n
                        }), a]
                    })
                },
                M = Object(p.d)(F.a).withConfig({
                    componentId: "sc-ukft4p-0"
                })(["width:100%;padding-top:40px;padding-bottom:40px;", " .GettingStarted--step-container{flex-wrap:wrap;justify-content:space-around;margin:40px 0 20px 0;width:100%;.GettingStarted--step{max-width:100%;margin-bottom:20px;margin-right:20px;margin-left:20px;padding:0 20px;justify-content:flex-start;", " .GettingStarted--link{font-weight:600;color:", ";&:hover{color:", ";}}}}"], (function(e) {
                    return Object(U.d)({
                        variants: {
                            light: {
                                backgroundColor: e.theme.colors.cloud
                            },
                            dark: {
                                backgroundColor: e.theme.colors.withOpacity.oil
                            }
                        }
                    })
                }), Object(k.e)({
                    small: Object(p.c)(["max-width:240px;padding:0px;"]),
                    medium: Object(p.c)(["max-width:300px;"]),
                    large: Object(p.c)(["max-width:360px;"]),
                    extraLarge: Object(p.c)(["max-width:260px;"])
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.colors.darkSeaBlue
                })),
                G = n("9U3r"),
                Q = n("6vc1"),
                W = n("aXrf"),
                Y = n("veNq"),
                X = n("4iFg"),
                Z = n("m5he"),
                J = n("8uvj"),
                $ = n("LoMF"),
                ee = n("ocrj"),
                te = n("dI2x"),
                ne = n("lqpq"),
                ae = n("TEgP"),
                le = n("9E9p"),
                re = n("sX+s"),
                ie = n("1p8O"),
                oe = n("t3V9"),
                se = n("LsOE"),
                ce = n("kCmG"),
                de = n("YTPJ"),
                ue = n("LjoF"),
                ge = n("tQfM"),
                me = n("jQgF"),
                pe = "\uff0d",
                he = [{
                    label: "last 24 hours",
                    value: "ONE_DAY_VOLUME"
                }, {
                    label: "last 7 days",
                    value: "SEVEN_DAY_VOLUME"
                }, {
                    label: "last 30 days",
                    value: "THIRTY_DAY_VOLUME"
                }],
                be = function() {
                    var e = Object(g.useState)(he[0]),
                        t = e[0],
                        n = e[1];
                    return Object(L.jsx)(_.a, {
                        eventSource: "TopCollections",
                        children: Object(L.jsx)(ke, {
                            children: Object(L.jsxs)(we, {
                                children: [Object(L.jsx)(F.a, {
                                    alignItems: "center",
                                    className: "title",
                                    flexDirection: "row",
                                    marginBottom: "56px",
                                    textAlign: "center",
                                    children: Object(L.jsxs)(S.a, {
                                        as: "h2",
                                        margin: "0px",
                                        variant: "h3",
                                        children: ["Top collections over", Object(L.jsx)(ee.a, {
                                            content: function(e) {
                                                var a = e.close,
                                                    l = e.List,
                                                    r = e.Item;
                                                return Object(L.jsx)(l, {
                                                    children: he.map((function(e) {
                                                        return Object(L.jsx)(r, {
                                                            onClick: function() {
                                                                e.value !== t.value && n(e), a()
                                                            },
                                                            children: Object(L.jsx)(r.Content, {
                                                                children: Object(L.jsx)(v.a, {
                                                                    alignItems: "center",
                                                                    children: Object(L.jsx)(r.Title, {
                                                                        children: e.label
                                                                    })
                                                                })
                                                            })
                                                        }, e.value)
                                                    }))
                                                })
                                            },
                                            children: Object(L.jsxs)(v.a, {
                                                as: oe.a,
                                                className: "TopCollections--dropdown",
                                                children: [Object(L.jsx)(S.a, {
                                                    className: "TopCollections--category",
                                                    fontSize: 24,
                                                    margin: "0",
                                                    textAlign: "center",
                                                    variant: "faux-link",
                                                    whiteSpace: "nowrap",
                                                    children: t.label
                                                }), Object(L.jsx)(Z.a, {
                                                    className: "TopCollections--icon",
                                                    color: "blue",
                                                    value: "expand_more"
                                                })]
                                            })
                                        })]
                                    })
                                }), me.d ? Object(L.jsx)(fe, {}) : Object(L.jsx)(g.Suspense, {
                                    fallback: Object(L.jsx)(fe, {}),
                                    children: Object(L.jsx)(je, {
                                        sortBy: t.value
                                    })
                                }), Object(L.jsx)($.c, {
                                    href: "/rankings",
                                    margin: "40px auto 0px",
                                    width: "fit-content",
                                    children: "Go to Rankings"
                                })]
                            })
                        })
                    })
                },
                je = function(e) {
                    var t = e.sortBy,
                        l = Object(W.useLazyLoadQuery)(void 0 !== a ? a : a = n("4TjO"), {
                            sortBy: t
                        });
                    return Object(L.jsx)(xe, {
                        dataKey: l,
                        sortBy: t
                    })
                },
                xe = function(e) {
                    var t = e.dataKey,
                        a = e.sortBy,
                        r = Object(T.a)("hide_collection_floor_prices"),
                        i = Object(W.useFragment)(void 0 !== l ? l : l = n("DQ1a"), t),
                        o = Object(se.c)(null === i || void 0 === i ? void 0 : i.collections).map((function(e, t) {
                            var n = e.name,
                                l = e.logo,
                                i = e.id,
                                o = e.isVerified,
                                s = e.statsV2,
                                c = e.nativePaymentAsset,
                                d = Object(ce.d)(new Date(e.createdDate)),
                                u = "ONE_DAY_VOLUME" === a && s.oneDayChange ? Object(ue.d)(s.oneDayChange) : "SEVEN_DAY_VOLUME" === a && s.sevenDayChange ? Object(ue.d)(s.sevenDayChange) : "THIRTY_DAY_VOLUME" === a && s.thirtyDayChange ? Object(ue.d)(s.thirtyDayChange) : Object(ue.d)(0),
                                g = u.isGreaterThan(0),
                                m = u.times(100).toFixed(2),
                                p = Object(ue.o)(m, {
                                    threshold: 1e4,
                                    formatDisplay: !0
                                }),
                                h = "ONE_DAY_VOLUME" !== a || Object(ue.d)(s.oneDayVolume.unit).isZero() ? "SEVEN_DAY_VOLUME" !== a || Object(ue.d)(s.sevenDayVolume.unit).isZero() ? "THIRTY_DAY_VOLUME" !== a || Object(ue.d)(s.thirtyDayVolume.unit).isZero() ? pe : Object(ue.j)(s.thirtyDayVolume.unit, 2) : Object(ue.j)(s.sevenDayVolume.unit, 2) : Object(ue.j)(s.oneDayVolume.unit, 2),
                                b = s.floorPrice && !Object(ue.d)(s.floorPrice.unit).isZero() ? Object(ue.n)(Object(ue.d)(s.floorPrice.unit), 2) : pe,
                                j = {
                                    collectionId: i,
                                    collectionIndex: t,
                                    collectionVolumeSort: a
                                };
                            return Object(L.jsxs)(le.a, {
                                className: "TopCollections--item",
                                eventParams: j,
                                height: 88,
                                href: Object(de.g)(e),
                                children: [Object(L.jsx)(F.a, {
                                    marginRight: "8px",
                                    children: Object(L.jsx)(S.a, {
                                        as: "span",
                                        fontSize: "16px",
                                        textAlign: "right",
                                        variant: "h4",
                                        children: Object(L.jsx)(J.a, {
                                            children: t + 1
                                        })
                                    })
                                }), Object(L.jsx)(Y.a, {
                                    isNew: d,
                                    isVerified: o,
                                    name: n,
                                    url: l
                                }), Object(L.jsxs)(le.a.Content, {
                                    children: [Object(L.jsx)(le.a.Title, {
                                        width: "100%",
                                        children: Object(L.jsx)(J.a, {
                                            children: n
                                        })
                                    }), !r && Object(L.jsx)(le.a.Description, {
                                        children: Object(L.jsxs)(v.a, {
                                            alignItems: "center",
                                            children: [Object(L.jsx)(w.a, {
                                                marginRight: "4px",
                                                marginTop: "2px",
                                                children: "Floor price:"
                                            }), b !== pe ? Object(L.jsx)(X.a, {
                                                color: ge.b.gray,
                                                fontSize: "14px",
                                                logo: c,
                                                value: b
                                            }) : pe]
                                        })
                                    })]
                                }), Object(L.jsx)(le.a.Side, {
                                    children: Object(L.jsxs)(ae.a, {
                                        alignItems: "flex-end",
                                        flexDirection: "column",
                                        children: [u.isEqualTo(0) ? Object(L.jsx)(te.e, {
                                            color: ge.b.gray,
                                            fontSize: "14px",
                                            margin: "0",
                                            children: pe
                                        }) : Object(L.jsx)(te.e, {
                                            as: "span",
                                            color: g ? "seaGrass" : "coral",
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            children: Object(L.jsx)(J.a, {
                                                children: "".concat(g ? "+" : "").concat(p, "%")
                                            })
                                        }), Object(L.jsx)(X.a, {
                                            color: ge.b.gray,
                                            fontSize: "14px",
                                            logo: c,
                                            value: h
                                        })]
                                    })
                                })]
                            }, i)
                        }));
                    return ye(o)
                },
                ye = function(e) {
                    return Object(L.jsxs)(we, {
                        children: [Object(L.jsx)(re.a, {
                            greaterThanOrEqual: "xl",
                            children: Object(L.jsxs)(v.a, {
                                children: [Object(L.jsx)(ne.a, {
                                    marginRight: "44px",
                                    minWidth: "30%",
                                    children: e.slice(0, 5)
                                }), Object(L.jsx)(ne.a, {
                                    marginRight: "44px",
                                    minWidth: "30%",
                                    children: e.slice(5, 10)
                                }), Object(L.jsx)(ne.a, {
                                    marginRight: "44px",
                                    minWidth: "30%",
                                    children: e.slice(10, 15)
                                })]
                            })
                        }), Object(L.jsx)(re.a, {
                            lessThan: "xl",
                            children: Object(L.jsx)(F.a, {
                                children: Object(L.jsx)(ne.a, {
                                    maxWidth: "440px",
                                    width: "100%",
                                    children: e
                                })
                            })
                        })]
                    })
                },
                fe = function() {
                    var e = Oe();
                    return ye(e)
                },
                Oe = function() {
                    return new Array(15).fill(null).map((function(e, t) {
                        return Object(L.jsxs)(le.a, {
                            className: "TopCollections--item",
                            height: 88,
                            width: "100%",
                            children: [Object(L.jsx)(F.a, {
                                marginRight: "8px",
                                children: Object(L.jsx)(ie.a.Line, {
                                    width: "16px"
                                })
                            }), Object(L.jsx)(ie.a.Circle, {
                                height: "50px",
                                width: "50px"
                            }), Object(L.jsxs)(le.a.Content, {
                                children: [Object(L.jsx)(ie.a.Row, {
                                    height: "100%",
                                    width: "100%",
                                    children: Object(L.jsx)(ie.a.Line, {})
                                }), Object(L.jsx)(ie.a.Row, {
                                    height: "100%",
                                    width: "100%",
                                    children: Object(L.jsx)(ie.a.Line, {})
                                })]
                            }), Object(L.jsx)(le.a.Side, {
                                children: Object(L.jsx)(ie.a.Line, {
                                    width: "64px"
                                })
                            })]
                        }, t)
                    }))
                },
                ke = Object(p.d)(w.a).withConfig({
                    componentId: "sc-1oks2s3-0"
                })(["padding:0;width:100%;max-width:1280px;margin-left:auto;margin-right:auto;", ""], Object(k.e)({
                    extraLarge: Object(p.c)(["padding:40px;"])
                })),
                we = Object(p.d)(ne.a).attrs({
                    as: "section"
                }).withConfig({
                    componentId: "sc-1oks2s3-1"
                })(["width:100%;.TopCollections--item{border-top:1px solid transparent;border-right:1px solid transparent;border-left:1px solid transparent;border-bottom:", ";&:hover{border-radius:", ";border:", ";}}.TopCollections--dropdown{display:inline-flex;align-items:center;cursor:pointer;justify-content:center;margin-left:8px;}"], (function(e) {
                    return "1px solid ".concat(e.theme.colors.border)
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return "1px solid ".concat(e.theme.colors.border)
                })),
                Fe = n("uiiN"),
                ve = n("ZwbU"),
                Ce = n("HSVd"),
                Se = function(e) {
                    var t = e.IpRightsTakedownDelistedMode;
                    return Object(L.jsx)(L.Fragment, {
                        children: Object(L.jsxs)(ve.b, {
                            isOpen: !0,
                            children: [Object(L.jsx)(ve.b.Header, {
                                children: Object(L.jsx)(ve.b.Title, {
                                    children: "This content is no longer accessible on OpenSea."
                                })
                            }), Object(L.jsx)(ve.b.Body, {
                                children: Object(L.jsxs)(w.a, {
                                    children: [Object(L.jsxs)(S.a, {
                                        children: ["This content is no longer accessible on OpenSea. It has been removed based on a claim of intellectual property infringement. Learn more about how OpenSea handles these claims", " ", Object(L.jsx)(h.a, {
                                            href: "".concat(K.D, "/hc/en-us/articles/4412092785043-What-can-I-do-if-my-copyrighted-works-are-being-sold-without-my-permission-"),
                                            children: "here"
                                        }), "."]
                                    }), "item-owner" == t && Object(L.jsxs)(S.a, {
                                        children: ["If this item has an active listing, you can remove it", " ", Object(L.jsx)(h.a, {
                                            href: "account/settings?tab=support",
                                            children: "here"
                                        }), "."]
                                    }), "collection-owner" == t && Object(L.jsxs)(S.a, {
                                        children: ["If this collection has active listings, you can remove them", " ", Object(L.jsx)(h.a, {
                                            href: "account/settings?tab=support",
                                            children: "here"
                                        }), "."]
                                    })]
                                })
                            }), Object(L.jsx)(ve.b.Footer, {
                                children: Object(L.jsx)(ve.b.Footer.Button, {
                                    variant: "secondary",
                                    onClick: function() {
                                        return Ce.a.push("/")
                                    },
                                    children: "Close"
                                })
                            })]
                        })
                    })
                },
                Te = n("TGkK"),
                _e = n("Uh/H"),
                Ke = n("Ld9l"),
                Le = n.n(Ke),
                Pe = n("2A7z"),
                De = n("nuco"),
                Ae = n("j/Wi"),
                Ie = n("dgii"),
                Ve = n("7Yyi"),
                Be = n("DWpj"),
                Ee = "Featured",
                Ne = Le()((function() {
                    return n.e(177).then(n.bind(null, "psbw")).then((function(e) {
                        return e.GetFeaturedModal
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["psbw"]
                        },
                        modules: ["../features/home/components/Featured/Featured.react.tsx -> features/home/components/GetFeaturedModal"]
                    }
                }),
                He = function(e) {
                    var t, a = e.data,
                        l = Object(Ie.a)("home"),
                        i = Object(W.useFragment)(void 0 !== r ? r : r = n("Aujd"), a),
                        o = {
                            backgroundImage: "url(".concat((null === i || void 0 === i ? void 0 : i.imagePreviewUrl) || (null === i || void 0 === i ? void 0 : i.imageUrl), ")")
                        },
                        s = function() {
                            return Object(L.jsx)(ve.b, {
                                trigger: function(e) {
                                    return Object(L.jsx)(Ae.b, {
                                        content: l("featured.getFeaturedPrompt", "Get featured on the homepage"),
                                        children: Object(L.jsx)(oe.a, {
                                            "aria-label": l("featured.getFeaturedLabel", "Get featured"),
                                            onClick: function(t) {
                                                t.preventDefault(), e(), Object(Ve.a)()
                                            },
                                            children: Object(L.jsx)(Z.a, {
                                                color: "gray",
                                                cursor: "pointer",
                                                value: "info",
                                                variant: "outlined"
                                            })
                                        })
                                    })
                                },
                                children: Object(L.jsx)(Ne, {})
                            })
                        },
                        c = function() {
                            return Object(L.jsx)(h.a, {
                                className: "Featured--learn-more",
                                href: "/#".concat(G.a),
                                children: Object(L.jsxs)(v.a, {
                                    className: "Featured--learn-more-container",
                                    children: [Object(L.jsx)(Z.a, {
                                        className: "Featured--learn-more-icon",
                                        color: "blue",
                                        value: "play_circle_filled"
                                    }), Object(L.jsx)(S.a, {
                                        className: "Featured--learn-more-text",
                                        children: l("featured.learnMorePrompt", "Learn more about OpenSea")
                                    })]
                                })
                            })
                        };
                    return Object(L.jsx)(L.Fragment, {
                        children: Object(L.jsxs)(Ue, {
                            children: [Object(L.jsx)(w.a, {
                                className: "Featured--background-container",
                                children: Object(L.jsx)(Re, {
                                    style: o
                                })
                            }), Object(L.jsxs)(v.a, {
                                className: "Featured--container",
                                children: [Object(L.jsxs)(v.a, {
                                    className: "Featured--title",
                                    children: [Object(L.jsx)(S.a, {
                                        className: "Featured--header",
                                        variant: "h1",
                                        children: K.E
                                    }), Object(L.jsx)(S.a, {
                                        as: "span",
                                        className: "Featured--subheader",
                                        variant: "subtitle",
                                        children: K.F
                                    }), Object(L.jsxs)(v.a, {
                                        className: "Featured--button-container",
                                        children: [Object(L.jsx)(w.a, {
                                            marginRight: "20px",
                                            children: Object(L.jsx)($.c, {
                                                className: "Featured--button",
                                                eventSource: Ee,
                                                href: "/explore-collections",
                                                children: l("featured.exploreCTA", "Explore")
                                            })
                                        }), Object(L.jsx)($.c, {
                                            className: "Featured--button",
                                            eventSource: Ee,
                                            href: "/asset/create",
                                            variant: "secondary",
                                            children: l("featured.createCTA", "Create")
                                        })]
                                    }), Object(L.jsx)(re.a, {
                                        greaterThanOrEqual: "lg",
                                        children: Object(L.jsx)(v.a, {
                                            alignItems: "flex-end",
                                            height: "100%",
                                            children: Object(L.jsx)(c, {})
                                        })
                                    })]
                                }), Object(L.jsx)(v.a, {
                                    className: "Featured--image",
                                    children: i ? Object(L.jsx)(v.a, {
                                        as: "article",
                                        className: "Featured--image-card",
                                        children: Object(L.jsxs)(h.a, {
                                            className: "Featured--image-link",
                                            href: Object(ce.c)(i),
                                            onClick: function() {
                                                var e, t;
                                                return Object(Be.i)(i, {
                                                    assetName: i.name,
                                                    creatorUsername: null === (e = i.creator) || void 0 === e || null === (t = e.user) || void 0 === t ? void 0 : t.publicUsername,
                                                    link: Object(ce.c)(i)
                                                })
                                            },
                                            children: [Object(L.jsx)(Pe.a, {
                                                alt: "",
                                                asset: i,
                                                autoPlay: !0,
                                                className: "Featured--image-media",
                                                isMuted: !0,
                                                objectFit: "cover",
                                                priority: !0,
                                                size: 550
                                            }), i.creator && Object(L.jsxs)(le.a, {
                                                as: "footer",
                                                className: "Featured--image-text-area",
                                                children: [Object(L.jsx)(le.a.Avatar, {
                                                    alt: l("featured.creatorImageAlt", "Featured creator"),
                                                    className: "Featured--image-avatar",
                                                    outline: 0,
                                                    size: 40,
                                                    src: i.creator.imageUrl
                                                }), Object(L.jsxs)(le.a.Content, {
                                                    className: "Featured--image-content",
                                                    children: [Object(L.jsx)(le.a.Title, {
                                                        children: i.name
                                                    }), Object(L.jsx)(le.a.Description, {
                                                        className: "Featured--image-creator",
                                                        fontSize: 14,
                                                        children: null === (t = i.creator.user) || void 0 === t ? void 0 : t.publicUsername
                                                    })]
                                                }), Object(L.jsx)(le.a.Side, {
                                                    children: Object(L.jsx)(s, {})
                                                })]
                                            })]
                                        })
                                    }) : Object(L.jsxs)(ie.a, {
                                        className: "Featured--skeleton",
                                        children: [Object(L.jsxs)(ie.a.Row, {
                                            className: "Featured--skeleton-row",
                                            children: [Object(L.jsx)(ie.a.Block, {
                                                className: "Featured--skeleton-block"
                                            }), Object(L.jsx)(ie.a.Block, {
                                                className: "Featured--skeleton-block",
                                                direction: "rtl"
                                            })]
                                        }), Object(L.jsx)(ie.a.Row, {
                                            children: Object(L.jsxs)(De.a, {
                                                children: [Object(L.jsx)(De.a.Avatar, {}), Object(L.jsxs)(De.a.Content, {
                                                    children: [Object(L.jsx)(De.a.Title, {}), Object(L.jsx)(De.a.Description, {})]
                                                }), Object(L.jsxs)(De.a.Side, {
                                                    children: [Object(L.jsx)(De.a.Title, {}), Object(L.jsx)(De.a.Description, {})]
                                                })]
                                            })
                                        })]
                                    })
                                }), Object(L.jsx)(re.a, {
                                    lessThan: "lg",
                                    children: Object(L.jsx)(v.a, {
                                        justifyContent: "center",
                                        width: "100%",
                                        children: Object(L.jsx)(c, {})
                                    })
                                })]
                            })]
                        })
                    })
                },
                Re = Object(p.d)(v.a).withConfig({
                    componentId: "sc-vt8n24-0"
                })(["height:780px;background-size:cover;background-color:", ";background-position:center;opacity:0.3;filter:blur(8px);-webkit-filter:blur(8px);mask:linear-gradient(#fff,transparent);-webkit-mask:linear-gradient(#fff,transparent);", ";"], (function(e) {
                    return e.theme.colors.background
                }), Object(k.e)({
                    tabletL: Object(p.c)(["height:586px;"])
                })),
                Ue = Object(p.d)(v.a).withConfig({
                    componentId: "sc-vt8n24-1"
                })(["height:780px;", " .Featured--background-container{width:100%;position:absolute;overflow:hidden;}.Featured--learn-more{z-index:2;cursor:pointer;align-self:flex-start;", " .Featured--learn-more-container{align-items:center;height:30px;&:hover{color:", ";}.Featured--learn-more-icon{color:inherit;}.Featured--learn-more-text{margin-left:8px;font-weight:600;color:", ";&:hover{color:inherit;}}}}.Featured--container{margin:0 auto;max-width:", ";width:100%;flex-wrap:wrap;&:hover{box-shadow:10px;}.Featured--title{flex-direction:column;align-items:center;width:100%;padding:30px 20px 20px 20px;", " .Featured--header{margin:0;font-size:28px;text-align:center;z-index:2;max-width:330px;", "}.Featured--subheader{margin-top:20px;max-width:400px;text-align:center;z-index:2;font-size:18px;", " ", "}.Featured--button-container{margin-top:20px;z-index:2;", " .Featured--button{width:120px;", "}}}.Featured--image{flex-direction:column;align-items:center;width:100%;padding-top:0;", " .AssetMedia--img{border-bottom-left-radius:0;border-bottom-right-radius:0;}.Featured--skeleton{max-width:355px;", " .Featured--skeleton-row{border-top-left-radius:10px;border-top-right-radius:10px;margin-bottom:-10px;.Featured--skeleton-block{height:300px;", "}}}.Featured--image-card{width:100%;background-color:", ";flex-direction:column;border-radius:10px;z-index:2;max-width:355px;box-shadow:0px 0px 10px 0px ", ";", " &:hover{transition:box-shadow 0.3s ease-in;box-shadow:0px 0px 50px 0px ", ";}.Image--image{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important;}.Featured--image-text-area{border:none;&:hover{box-shadow:none;border-bottom-left-radius:10px;border-bottom-right-radius:10px;}.Featured--image-avatar{object-fit:cover;}.Featured--image-creator{color:", ";&:hover{color:", ";}}}.Featured--image-link{border-radius:10px;.Featured--image-media{height:80vw;z-index:2;border-bottom:1px solid ", ";", "}}}}}"], Object(k.e)({
                    tabletL: Object(p.c)(["height:586px;"])
                }), Object(k.e)({
                    tabletL: Object(p.c)(["padding-top:40px;"])
                }), (function(e) {
                    return e.theme.colors.darkSeaBlue
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.maxWidth.smallPadding
                }), Object(k.e)({
                    tabletL: Object(p.c)(["width:50%;padding:110px 20px 44px 30px;align-items:flex-start;"])
                }), Object(k.e)({
                    small: Object(p.c)(["font-size:32px;max-width:", "px;"], 550),
                    tabletL: Object(p.c)(["text-align:left;max-width:100%;margin-right:10px;"]),
                    extraLarge: Object(p.c)(["font-size:45px;"])
                }), (function(e) {
                    return Object(U.d)({
                        variants: {
                            light: {
                                color: "".concat(e.theme.colors.oil, ";")
                            },
                            dark: {
                                color: "".concat(e.theme.colors.text.subtle, ";")
                            }
                        }
                    })
                }), Object(k.e)({
                    tabletL: Object(p.c)(["font-size:24px;text-align:left;"])
                }), Object(k.e)({
                    tabletL: Object(p.c)(["margin-top:40px;"])
                }), Object(k.e)({
                    tabletL: Object(p.c)(["width:167px;"])
                }), Object(k.e)({
                    tabletL: Object(p.c)(["width:50%;padding:40px 0px;align-items:flex-end;"])
                }), Object(k.e)({
                    tabletL: Object(p.c)(["max-width:550px;"])
                }), Object(k.e)({
                    tabletL: Object(p.c)(["height:420px;"])
                }), (function(e) {
                    return e.theme.colors.surface
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }), Object(k.e)({
                    tabletL: Object(p.c)(["max-width:550px;margin-right:30px;"])
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.colors.darkSeaBlue
                }), (function(e) {
                    return e.theme.colors.border
                }), Object(k.e)({
                    phoneL: Object(p.c)(["height:300px;"]),
                    tabletL: Object(p.c)(["height:420px;"])
                })),
                ze = n("RsrV"),
                qe = n("7bY5"),
                Me = n("Gyi1"),
                Ge = n("Ax8a"),
                Qe = n("NXiZ"),
                We = n("B6yL"),
                Ye = n("b2pk"),
                Xe = function(e) {
                    var t, a = e.data,
                        l = Object(W.useFragment)(void 0 !== i ? i : i = n("y4w7"), a),
                        r = l.collection,
                        o = l.collectionSubtitle,
                        s = r.logo,
                        c = r.banner,
                        d = r.name,
                        u = r.verificationStatus,
                        g = Object(de.g)(r);
                    if (!c || !s) return null;
                    var m = Object(L.jsx)(Ze, {
                        children: Object(L.jsx)(h.a, {
                            href: g,
                            children: Object(L.jsxs)(Je, {
                                boxShadow: {
                                    _: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                                    md: "0 4px 15px rgba(0, 0, 0, 0.08)"
                                },
                                children: [Object(L.jsx)(w.a, {
                                    height: "0",
                                    paddingBottom: "".concat(39.375, "%"),
                                    position: "relative",
                                    children: Object(L.jsx)(nt, {
                                        alt: d,
                                        layout: "fill",
                                        objectFit: "cover",
                                        src: c ? Object(We.t)(c, {
                                            height: 400
                                        }) : "",
                                        unoptimized: !0
                                    })
                                }), Object(L.jsx)(et, {
                                    marginTop: "-50px",
                                    children: Object(L.jsxs)(ne.a, {
                                        overflow: "hidden",
                                        children: [Object(L.jsx)($e, {
                                            children: Object(L.jsx)(tt, {
                                                alt: d,
                                                height: 48,
                                                layout: "fixed",
                                                objectFit: "cover",
                                                src: s ? Object(We.t)(s, {
                                                    size: 48
                                                }) : "",
                                                unoptimized: !0,
                                                width: 48
                                            })
                                        }), Object(L.jsxs)(v.a, {
                                            alignItems: "center",
                                            paddingLeft: "0px",
                                            paddingTop: "8px",
                                            children: [Object(L.jsx)(at, {
                                                as: "div",
                                                variant: "h5",
                                                children: d
                                            }), Object(Ye.b)(u) && Object(L.jsx)(Qe.a, {
                                                showTooltip: !1,
                                                size: "small",
                                                verificationStatus: u
                                            })]
                                        }), o && Object(L.jsx)(at, {
                                            as: "div",
                                            paddingLeft: "0px",
                                            variant: "small-thin-subtle",
                                            children: o
                                        })]
                                    })
                                })]
                            })
                        })
                    });
                    return Object(L.jsxs)(L.Fragment, {
                        children: [Object(L.jsx)(re.a, {
                            lessThan: "lg",
                            children: m
                        }), Object(L.jsx)(re.a, {
                            greaterThanOrEqual: "lg",
                            children: Object(L.jsx)(Ge.a, {
                                collection: l.collection,
                                subtitle: null !== (t = l.collectionSubtitle) && void 0 !== t ? t : void 0
                            })
                        })]
                    })
                },
                Ze = Object(p.d)(w.a).withConfig({
                    componentId: "sc-1f9e91k-0"
                })(["display:inline-block;position:relative;width:100%;"]),
                Je = Object(p.d)(w.a).withConfig({
                    componentId: "sc-1f9e91k-1"
                })(["background-color:", ";border-radius:", ";transition:box-shadow 0.25s 0s ease-in-out;@media (hover:hover){&:hover{box-shadow:0 6px 25px rgba(0,0,0,0.15);", "}}"], (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return Object(U.d)({
                        variants: {
                            dark: {
                                backgroundColor: e.theme.colors.ash,
                                transition: "background-color 0.25s ease-in-out"
                            }
                        }
                    })
                })),
                $e = p.d.div.withConfig({
                    componentId: "sc-1f9e91k-2"
                })(["width:54px;height:54px;border:3px solid ", ";border-radius:", ";box-shadow:0px 5px 10px rgba(0,0,0,0.08);background-color:", ";position:relative;", ":hover &{", "}"], (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.colors.card
                }), Je, (function(e) {
                    return Object(U.d)({
                        variants: {
                            dark: {
                                borderColor: e.theme.colors.ash,
                                transition: "border 0.25s ease-in-out"
                            }
                        }
                    })
                })),
                et = Object(p.d)(v.a).withConfig({
                    componentId: "sc-1f9e91k-3"
                })(["padding:16px;border-radius:12px;z-index:99;"]),
                tt = Object(p.d)(_e.a).withConfig({
                    componentId: "sc-1f9e91k-4"
                })(["border-radius:", ";"], (function(e) {
                    return e.theme.borderRadius.default
                })),
                nt = Object(p.d)(_e.a).withConfig({
                    componentId: "sc-1f9e91k-5"
                })(["background-color:", ";border-top-left-radius:", ";border-top-right-radius:", ";border-bottom-left-radius:0;border-bottom-right-radius:0;position:absolute;top:0;right:0;bottom:0;left:0;.Image--image{position:absolute;}"], (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.borderRadius.default
                })),
                at = Object(p.d)(S.a).withConfig({
                    componentId: "sc-1f9e91k-6"
                })(["display:block;align-items:center;margin:0;overflow:hidden;word-break:break-all;text-overflow:ellipsis;white-space:nowrap;"]),
                lt = "https://opensea.io",
                rt = {
                    default: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        slidesPerGroup: 1
                    },
                    xs: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        slidesPerGroup: 1
                    },
                    sm: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        slidesPerGroup: 1
                    }
                },
                it = function(e) {
                    var t = e.dataKey,
                        a = Object(W.useFragment)(void 0 !== o ? o : o = n("x0lM"), t);
                    if (!a || !a.length) return null;
                    for (var l = a.filter((function(e) {
                            return e.collection.logo && e.collection.banner
                        })), r = Object(y.groupBy)(l, (function(e) {
                            return e.section.relayId
                        })), i = Object.keys(r), s = 0, c = i; s < c.length; s++) {
                        var d = c[s];
                        r[d] = r[d].splice(0, 3)
                    }
                    var u = i.filter((function(e) {
                        return r[e].length <= 3
                    })).slice(0, 2);
                    return Object(L.jsx)(L.Fragment, {
                        children: u.map((function(e, t) {
                            var n = r[e],
                                a = r[e][0].section,
                                l = a.title,
                                i = a.titleUrl;
                            return i && Object(y.startsWith)(i, lt) && (i = i.split(lt)[1]), Object(L.jsxs)(w.a, {
                                marginBottom: 56,
                                children: [Object(L.jsx)(C.a.Item, {
                                    padding: "0 3%",
                                    children: Object(L.jsxs)(qe.a, {
                                        alignItems: "center",
                                        marginBottom: "36px",
                                        children: [Object(L.jsx)(S.a, {
                                            fontSize: {
                                                _: "20px",
                                                lg: "32px"
                                            },
                                            margin: 0,
                                            variant: "small-h2",
                                            children: l
                                        }), i && Object(L.jsx)(Me.a, {
                                            height: {
                                                _: "36px",
                                                lg: "48px"
                                            },
                                            href: i,
                                            children: Object(L.jsx)(S.a, {
                                                color: "text.heading",
                                                variant: S.b.SMALL_BOLD,
                                                children: "View all"
                                            })
                                        })]
                                    })
                                }), Object(L.jsxs)(C.a.Item, {
                                    children: [Object(L.jsx)(re.a, {
                                        lessThan: "lg",
                                        children: Object(L.jsx)(ze.a, {
                                            className: "featured_".concat(t, "_swiper"),
                                            enableArrowControls: !0,
                                            enableFreeScroll: !0,
                                            enableMousewheel: !0,
                                            loop: !0,
                                            loopedSlides: n.length,
                                            name: "featured_".concat(t),
                                            renderSlide: function(e) {
                                                return e.collection
                                            },
                                            responsiveConfig: rt,
                                            showScrollbar: !1,
                                            slides: n.map((function(e) {
                                                return {
                                                    id: e.collection.slug,
                                                    collection: Object(L.jsx)(w.a, {
                                                        margin: "8px",
                                                        children: Object(L.jsx)(Xe, {
                                                            data: e
                                                        })
                                                    })
                                                }
                                            }))
                                        })
                                    }), Object(L.jsx)(re.a, {
                                        greaterThanOrEqual: "lg",
                                        children: Object(L.jsx)(C.a, {
                                            gridGap: "24px",
                                            padding: "0 3%",
                                            children: n.map((function(e) {
                                                return Object(L.jsx)(C.a.Item, {
                                                    lg: 4,
                                                    children: Object(L.jsx)(Xe, {
                                                        data: e
                                                    })
                                                }, e.collection.slug)
                                            }))
                                        })
                                    })]
                                })]
                            }, l)
                        }))
                    })
                },
                ot = n("n0tG"),
                st = n("FUua"),
                ct = n("Vy0S"),
                dt = n("8BrW"),
                ut = function(e) {
                    var t = e.dataKey,
                        a = e.size,
                        l = Object(W.useFragment)(void 0 !== s ? s : s = n("Cwpy"), t);
                    if (!l) return null;
                    var r = l.collection,
                        i = l.shortDescription,
                        o = l.overrideUrl,
                        c = r.name,
                        d = r.logo,
                        u = r.verificationStatus,
                        g = r.statsV2,
                        m = r.nativePaymentAsset,
                        p = Object(de.g)(r),
                        b = null !== o && void 0 !== o ? o : d;
                    if (!b) return null;
                    var j = b && Object(We.t)(b, {
                            size: a,
                            cropToSquare: !0
                        }),
                        x = Object(We.g)(b),
                        y = null != x,
                        f = y ? x : j,
                        O = g.floorPrice && !Object(ue.d)(g.floorPrice.unit).isZero() ? Object(ue.n)(Object(ue.d)(g.floorPrice.unit), 2) : "\uff0d";
                    return Object(L.jsx)(v.a, {
                        justifyContent: "center",
                        children: Object(L.jsx)(h.a, {
                            href: p,
                            children: Object(L.jsxs)(mt, {
                                children: [Object(L.jsx)(_e.a, {
                                    alt: c,
                                    height: 500,
                                    src: f,
                                    unoptimized: !y,
                                    width: 500
                                }), Object(L.jsxs)(pt, {
                                    children: [Object(L.jsxs)(v.a, {
                                        alignItems: "center",
                                        children: [Object(L.jsx)(J.a, {
                                            lines: 1,
                                            children: Object(L.jsx)(S.a, {
                                                color: "white",
                                                lineHeight: "normal",
                                                margin: 0,
                                                variant: S.b.H5,
                                                children: c
                                            })
                                        }), Object(L.jsx)(v.a, {
                                            children: "VERIFIED" === u && Object(L.jsx)(ht, {
                                                size: "small"
                                            })
                                        })]
                                    }), Object(L.jsxs)("span", {
                                        children: [i && Object(L.jsx)(L.Fragment, {
                                            children: Object(L.jsx)(ot.a.Body, {
                                                color: "white",
                                                size: "small",
                                                weight: "semibold",
                                                children: i
                                            })
                                        }), i && "\uff0d" !== O && Object(L.jsx)(gt, {
                                            children: "\xb7"
                                        }), "\uff0d" !== O && Object(L.jsx)(ot.a.Body, {
                                            color: "white",
                                            size: "small",
                                            children: "Floor: ".concat(O, " ").concat(m.asset.symbol)
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                gt = p.d.span.withConfig({
                    componentId: "sc-y528ap-0"
                })(["color:white;margin:0 5px;"]),
                mt = Object(p.d)(v.a).withConfig({
                    componentId: "sc-y528ap-1"
                })(["max-height:100%;max-width:100%;overflow:hidden;position:relative;margin:0 3px;border-radius:", ";background:linear-gradient( 180deg,rgba(0,0,0,0) 60%,rgba(0,0,0,0.8) 100% );img{border-radius:inherit;z-index:-1;width:100%;height:auto;}@media (hover:hover){&:hover{img{transform:scale(1.12);transition-duration:0.4s;}}}&:not(:hover){img{transition:transform 0.4s;}}"], (function(e) {
                    return e.theme.borderRadius.pill
                })),
                pt = Object(p.d)(dt.a).withConfig({
                    componentId: "sc-y528ap-2"
                })(["position:absolute;gap:2px;bottom:0;padding-bottom:12px;z-index:1;padding-left:16px;"]),
                ht = Object(p.d)(ct.a).withConfig({
                    componentId: "sc-y528ap-3"
                })(["margin-left:4px;width:15px;height:15px;"]),
                bt = n("K4Ra"),
                jt = function(e) {
                    var t = e.responsiveConfig,
                        n = e.slides,
                        a = Object(bt.a)("(max-width: ".concat(re.c.lg, "px)"), !1),
                        l = Object(bt.a)("(min-width: ".concat(re.c.lg, "px)"), !1),
                        r = 1;
                    Object(bt.a)("(min-width: ".concat(re.c.xxxl, "px)"), !1) ? r = 6 : l && (r = 4);
                    var i = Object(g.useCallback)((function(e) {
                        return e.collection
                    }), []);
                    return Object(L.jsx)(w.a, {
                        alignSelf: "center",
                        width: "100%",
                        children: Object(L.jsx)(ze.a, {
                            autoplayConfig: {
                                delay: 5e3,
                                pauseOnMouseEnter: !0,
                                disableOnInteraction: !1
                            },
                            className: "home_header_swiper",
                            enableArrowControls: !0,
                            enableFreeScroll: !0,
                            enableMousewheel: !0,
                            loop: !0,
                            loopedSlides: r,
                            name: "home_header",
                            padding: a ? "0px 12px" : void 0,
                            renderSlide: i,
                            responsiveConfig: t,
                            showScrollbar: !1,
                            slides: n
                        })
                    })
                },
                xt = {
                    default: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 14
                    },
                    md: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                        spaceBetween: 14
                    },
                    lg: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 14
                    },
                    xl: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 14
                    },
                    xxl: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 14
                    },
                    xxxl: {
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                        spaceBetween: 14
                    }
                },
                yt = function() {
                    return Object(L.jsxs)(w.a, {
                        alignSelf: "center",
                        width: "100%",
                        children: [Object(L.jsx)(re.a, {
                            greaterThanOrEqual: "xxl",
                            children: Object(L.jsx)(ie.a, {
                                alignItems: "center",
                                children: Object(L.jsx)(Ot, {
                                    width: "100%",
                                    children: Object(x.a)(Array(5)).map((function(e, t) {
                                        return Object(L.jsx)(ie.a.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, t)
                                    }))
                                })
                            })
                        }), Object(L.jsx)(re.a, {
                            between: ["lg", "xxl"],
                            children: Object(L.jsx)(ie.a, {
                                alignItems: "center",
                                children: Object(L.jsx)(Ot, {
                                    width: "100%",
                                    children: Object(x.a)(Array(4)).map((function(e, t) {
                                        return Object(L.jsx)(ie.a.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, t)
                                    }))
                                })
                            })
                        }), Object(L.jsx)(re.a, {
                            between: ["md", "lg"],
                            children: Object(L.jsx)(ie.a, {
                                alignItems: "center",
                                children: Object(L.jsx)(Ot, {
                                    width: "100%",
                                    children: Object(x.a)(Array(3)).map((function(e, t) {
                                        return Object(L.jsx)(ie.a.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, t)
                                    }))
                                })
                            })
                        }), Object(L.jsx)(re.a, {
                            lessThan: "md",
                            children: Object(L.jsx)(ie.a, {
                                alignItems: "center",
                                children: Object(L.jsx)(Ot, {
                                    width: "100%",
                                    children: Object(x.a)(Array(2)).map((function(e, t) {
                                        return Object(L.jsx)(ie.a.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, t)
                                    }))
                                })
                            })
                        })]
                    })
                },
                ft = function(e) {
                    var t = e.dataKey,
                        a = Object(W.useFragment)(void 0 !== c ? c : c = n("GMWB"), t),
                        l = Object(st.a)();
                    if (!a || !a.length) return null;
                    if (!l) return Object(L.jsx)(yt, {});
                    for (var r = a.filter((function(e) {
                            return e.overrideUrl || e.collection.logo
                        })).map((function(e, t) {
                            return {
                                id: "".concat(e.collection.name).concat(t),
                                collection: Object(L.jsx)(ut, {
                                    dataKey: e,
                                    size: 500
                                })
                            }
                        })).slice(0, 12), i = 0; r.length < 12;) r.push({
                        id: "blank-".concat(i),
                        collection: Object(L.jsx)(L.Fragment, {})
                    }), i++;
                    return Object(L.jsx)(jt, {
                        responsiveConfig: xt,
                        slides: r
                    })
                },
                Ot = Object(p.d)(ie.a.Row).withConfig({
                    componentId: "sc-1g4334j-0"
                })(["gap:10px;"]),
                kt = function(e) {
                    switch (e) {
                        case "xxxl":
                        case "xxl":
                        case "xl":
                        case "lg":
                            return "0 50px";
                        case "md":
                        case "sm":
                        case "xs":
                        default:
                            return "0 16px"
                    }
                },
                wt = function() {
                    return Object(L.jsx)(Ft, {
                        size: "medium",
                        children: "Explore, collect, and sell NFTs"
                    })
                },
                Ft = Object(p.d)(ot.a.Display).withConfig({
                    componentId: "sc-htvmhj-0"
                })(["font-size:40px;line-height:48px;"]),
                vt = function(e) {
                    var t, a = e.dataKey,
                        l = Object(W.useFragment)(void 0 !== d ? d : d = n("F0Z4"), a);
                    return Object(L.jsxs)(L.Fragment, {
                        children: [Object(L.jsx)(re.a, {
                            greaterThanOrEqual: "lg",
                            children: Object(L.jsx)(C.a, {
                                padding: kt("lg"),
                                children: Object(L.jsx)(C.a.Item, {
                                    lg: 12,
                                    marginBottom: "44px",
                                    marginTop: "44px",
                                    children: Object(L.jsx)(wt, {})
                                })
                            })
                        }), Object(L.jsx)(re.a, {
                            lessThan: "lg",
                            children: Object(L.jsx)(C.a, {
                                padding: kt("md"),
                                children: Object(L.jsx)(C.a.Item, {
                                    marginBottom: "36px",
                                    marginTop: "36px",
                                    xs: 12,
                                    children: Object(L.jsx)(wt, {})
                                })
                            })
                        }), Object(L.jsx)(Ct, {
                            children: Object(L.jsx)(C.a.Item, {
                                xs: 12,
                                children: Object(L.jsx)(ft, {
                                    dataKey: null !== (t = null === l || void 0 === l ? void 0 : l.homePageHeaderCarousel) && void 0 !== t ? t : null
                                })
                            })
                        })]
                    })
                },
                Ct = Object(p.d)(C.a).withConfig({
                    componentId: "sc-htvmhj-1"
                })(["@media (min-width:", "px){padding:0 26px;}@media (max-width:", "px){padding:0 -8px;}"], re.c.lg, re.c.lg),
                St = n("06eW"),
                Tt = n("tf5u"),
                _t = n("a26R"),
                Kt = n("iZQ/"),
                Lt = n("3uPl"),
                Pt = n("8F/z"),
                Dt = n("JewV"),
                At = n("R952"),
                It = function(e) {
                    var t = e.collection,
                        a = e.index,
                        l = e.subtitle,
                        r = Object(W.useFragment)(void 0 !== u ? u : u = n("+pON"), t);
                    if (!r) return null;
                    var i = r.name,
                        o = r.isVerified,
                        s = Object(L.jsx)(v.a, {
                            alignItems: "center",
                            children: Object(L.jsx)(Ht, {
                                children: Object(L.jsxs)(J.a, {
                                    lines: 1,
                                    children: [i, o && Object(L.jsx)(At.a, {
                                        marginLeft: "4px",
                                        verticalAlign: "middle",
                                        children: Object(L.jsx)(ct.a, {
                                            size: "small"
                                        })
                                    })]
                                })
                            })
                        }),
                        c = function(e, t) {
                            return Object(L.jsx)(Et, {
                                $marginLeft: t,
                                style: {
                                    height: e + 8,
                                    width: e + 8
                                },
                                children: Object(L.jsx)(R.a, {
                                    alt: "Collection Image",
                                    height: e,
                                    layout: "fill",
                                    objectFit: "cover",
                                    src: r.imageUrl || K.eb,
                                    unoptimized: !0,
                                    width: e
                                })
                            })
                        },
                        d = a && Object(L.jsx)(v.a, {
                            children: Object(L.jsx)(Nt, {
                                alt: "Collection rank",
                                src: "/static/images/numbers/".concat(a, ".svg")
                            })
                        });
                    return Object(L.jsxs)(L.Fragment, {
                        children: [Object(L.jsx)(re.a, {
                            lessThan: "sm",
                            children: Object(L.jsxs)(Bt, {
                                alignItems: "center",
                                justifyContent: "center",
                                children: [c(48, "0px"), Object(L.jsxs)(Vt, {
                                    paddingLeft: "10px",
                                    children: [s, l]
                                })]
                            })
                        }), Object(L.jsx)(re.a, {
                            between: ["sm", "lg"],
                            children: Object(L.jsxs)(Bt, {
                                alignItems: "center",
                                justifyContent: "center",
                                children: [d, c(48), Object(L.jsxs)(Vt, {
                                    paddingLeft: "10px",
                                    children: [s, l]
                                })]
                            })
                        }), Object(L.jsx)(re.a, {
                            greaterThanOrEqual: "lg",
                            children: Object(L.jsxs)(Bt, {
                                alignItems: "center",
                                justifyContent: "center",
                                children: [d, c(64), Object(L.jsxs)(Vt, {
                                    paddingLeft: "24px",
                                    children: [s, l]
                                })]
                            })
                        })]
                    })
                },
                Vt = Object(p.d)(ne.a).withConfig({
                    componentId: "sc-yat1rq-0"
                })(["align-items:flex-start;align-self:center;"]),
                Bt = Object(p.d)(v.a).withConfig({
                    componentId: "sc-yat1rq-1"
                })(["color:inherit;:hover{color:inherit;}"]),
                Et = p.d.div.withConfig({
                    componentId: "sc-yat1rq-2"
                })(["background-color:", ";border:2px solid ", ";border-radius:", ";flex:none;overflow:hidden;position:relative;margin-left:", ';&::after{display:block;content:"";position:absolute;top:0;bottom:0;left:0;right:0;border:1px solid rgba(0,0,0,0.1);border-radius:10px;}'], (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return e.theme.borderRadius.button
                }), (function(e) {
                    return e.$marginLeft || "-21px"
                })),
                Nt = p.d.img.withConfig({
                    componentId: "sc-yat1rq-3"
                })(["width:64px;height:64px;"]),
                Ht = Object(p.d)(ot.a).attrs({
                    size: "medium",
                    weight: "semibold",
                    color: "text.heading"
                }).withConfig({
                    componentId: "sc-yat1rq-4"
                })([""]),
                Rt = function(e) {
                    var t, n = e.collectionCellWidth,
                        a = e.data,
                        l = e.index,
                        r = e.indexStart,
                        i = e.isSmallScreen,
                        o = void 0 !== i && i,
                        s = e.sortBy,
                        c = a.statsV2,
                        d = Object(Pt.o)(s, a, !0),
                        u = Object(ue.d)(Object(Pt.n)(s, a)),
                        g = Object(Pt.e)(u.times(100)),
                        m = u.isGreaterThan(0),
                        p = null !== (t = c.floorPrice) && void 0 !== t && t.unit ? Object(Pt.c)(c.floorPrice.unit) : void 0,
                        h = !(void 0 === p || "0" === p),
                        b = a.nativePaymentAsset.asset.symbol,
                        j = Object(L.jsx)(It, {
                            collection: a,
                            index: l + r,
                            subtitle: h && o ? Object(L.jsxs)(v.a, {
                                alignItems: "center",
                                children: [Object(L.jsx)(S.a, {
                                    fontWeight: 400,
                                    margin: "0",
                                    variant: "info-bold",
                                    children: "Floor:"
                                }), Object(L.jsxs)(S.a, {
                                    margin: "0 0 0 2px",
                                    variant: "info-bold",
                                    children: [p, " ", b]
                                })]
                            }) : void 0
                        }),
                        x = o ? Object(L.jsx)(v.a, {
                            alignItems: "center",
                            width: "100%",
                            children: Object(L.jsx)(Lt.a.Cell, {
                                justifyContent: "flex-start",
                                width: "100%",
                                children: j
                            })
                        }) : Object(L.jsx)(Lt.a.Cell, {
                            justifyContent: "flex-start",
                            width: n || "400px",
                            children: j
                        }),
                        y = Object(L.jsx)(Lt.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(L.jsx)(Dt.b, {
                                children: Object(L.jsx)(J.a, {
                                    children: "".concat(d, " ").concat(b)
                                })
                            })
                        }),
                        f = u.isEqualTo(0) ? Object(L.jsx)(Lt.a.StatText, {
                            margin: "0",
                            children: K.nb
                        }) : Object(L.jsx)(Lt.a.Cell, {
                            justifyContent: "flex-end",
                            children: Object(L.jsx)(ot.a.Body, {
                                color: m ? "seaGrass" : "darkCoral",
                                size: "small",
                                weight: "semibold",
                                children: "".concat(m ? "+" : "").concat(g, "%")
                            })
                        }),
                        O = Object(L.jsx)(Lt.a.Cell, {
                            justifyContent: "flex-end",
                            width: "20%",
                            children: Object(L.jsx)(Dt.b, {
                                children: Object(L.jsx)(J.a, {
                                    children: h ? "".concat(p, " ").concat(b) : K.nb
                                })
                            })
                        }),
                        k = Object(L.jsxs)(ne.a, {
                            alignItems: "flex-end",
                            justifyContent: "center",
                            width: "20%",
                            children: [Object(L.jsx)(v.a, {
                                textAlign: "center",
                                children: y
                            }), Object(L.jsx)(v.a, {
                                textAlign: "center",
                                children: f
                            })]
                        });
                    return Object(L.jsxs)(L.Fragment, {
                        children: [x, !o && O, k]
                    })
                },
                Ut = m.a.memo((function() {
                    return Object(L.jsxs)(L.Fragment, {
                        children: [Object(L.jsx)(Lt.a.Cell, {
                            height: "56px",
                            width: "400px",
                            children: Object(L.jsx)(ie.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(L.jsxs)(ie.a.Row, {
                                    alignItems: "center",
                                    children: [Object(L.jsx)(v.a, {
                                        marginRight: "16px",
                                        children: Object(L.jsx)(ie.a.Circle, {
                                            height: "50px",
                                            width: "50px"
                                        })
                                    }), Object(L.jsx)(ie.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })]
                                })
                            })
                        }), Object(L.jsx)(Lt.a.Cell, {
                            children: Object(L.jsx)(ie.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(L.jsx)(ie.a.Row, {
                                    children: Object(L.jsx)(ie.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })
                                })
                            })
                        }), Object(L.jsx)(Lt.a.Cell, {
                            children: Object(L.jsx)(ie.a, {
                                height: "auto",
                                justifyContent: "center",
                                children: Object(L.jsx)(ie.a.Row, {
                                    children: Object(L.jsx)(ie.a.Line, {
                                        height: "22px",
                                        width: "100%"
                                    })
                                })
                            })
                        })]
                    })
                })),
                zt = n("m6w3"),
                qt = n("6vT1"),
                Mt = n("i/1S"),
                Gt = n("EXqH"),
                Qt = n("K7R9");

            function Wt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Yt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Wt(Object(n), !0).forEach((function(t) {
                        Object(zt.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Xt, Zt, Jt, $t, en = function(e) {
                    var t = e.data,
                        n = e.indexStart,
                        a = e.isLoading,
                        l = e.rankingsSort,
                        r = e.sortableHeaders,
                        i = e.sortBy,
                        o = e.tableKey,
                        s = {
                            top: Qt.a,
                            overflowX: "auto",
                            overflowY: "visible",
                            padding: {
                                _: "8px",
                                xl: "16px"
                            },
                            borderColor: "border"
                        };
                    return Object(L.jsx)(tn, {
                        children: Object(L.jsx)(Lt.a, {
                            getHref: function(e) {
                                var t = e.data;
                                return t.slug ? Object(de.g)(t) : void 0
                            },
                            header: Object(L.jsxs)(L.Fragment, {
                                children: [Object(L.jsx)("div", {
                                    children: Object(L.jsx)(re.a, {
                                        greaterThanOrEqual: "xl",
                                        children: function(e, t) {
                                            return t && Object(L.jsx)(nn, Yt(Yt({}, s), {}, {
                                                $padding: "4px 0px 0px 0px",
                                                children: r.map((function(e, t) {
                                                    return Object(L.jsx)(Lt.a.Cell, {
                                                        justifyContent: 0 === t ? "flex-start" : "flex-end",
                                                        width: 0 === t ? "60%" : "20%",
                                                        children: e
                                                    }, t)
                                                }))
                                            }))
                                        }
                                    })
                                }), Object(L.jsx)("div", {
                                    children: Object(L.jsx)(re.a, {
                                        lessThan: "xl",
                                        children: Object(L.jsxs)(nn, {
                                            $padding: "4px 0px 0px 0px",
                                            children: [Object(L.jsx)(Lt.a.Cell, {
                                                justifyContent: "flex-start",
                                                children: Object(L.jsx)(ot.a.Body, {
                                                    color: "text.subtle",
                                                    size: "tiny",
                                                    weight: "semibold",
                                                    children: "COLLECTION"
                                                })
                                            }), Object(L.jsx)(Lt.a.Cell, {
                                                justifyContent: "flex-end",
                                                children: Object(L.jsx)(ot.a.Body, {
                                                    color: "text.subtle",
                                                    size: "tiny",
                                                    weight: "semibold",
                                                    children: "VOLUME"
                                                })
                                            })]
                                        })
                                    })
                                })]
                            }),
                            itemHeightEstimate: 90,
                            items: a || !t ? qt.a : Object(Pt.h)(t, l, !1, 0),
                            renderFullRow: function(e) {
                                return a ? Object(L.jsx)(Ut, {}) : Object(L.jsx)(Rt, Yt(Yt({}, e), {}, {
                                    collectionCellWidth: "60%",
                                    indexStart: n,
                                    sortBy: i
                                }))
                            },
                            renderMore: Mt.a,
                            renderPrimary: function(e) {
                                return a ? Object(L.jsx)(Gt.b, {}) : Object(L.jsx)(Rt, Yt(Yt({}, e), {}, {
                                    collectionCellWidth: "60%",
                                    indexStart: n,
                                    isSmallScreen: !0,
                                    sortBy: i
                                }))
                            },
                            showBorder: !1,
                            showInteractiveStyles: !0
                        }, o)
                    })
                },
                tn = Object(p.d)(w.a).withConfig({
                    componentId: "sc-u2wp6v-0"
                })(["a{padding:12px 0px 12px 0px;}"]),
                nn = Object(p.d)(Lt.a.HeaderContainer).withConfig({
                    componentId: "sc-u2wp6v-1"
                })(["border-bottom:0px;padding:", ";"], (function(e) {
                    return e.$padding
                })),
                an = ["FLOOR PRICE", "VOLUME"],
                ln = [{
                    id: "top",
                    label: "Top",
                    path: ""
                }, {
                    id: "trending",
                    label: "Trending",
                    path: ""
                }],
                rn = function(e) {
                    return e ? [{
                        edges: e.edges.slice(0, 5)
                    }, {
                        edges: e.edges.slice(5)
                    }] : null
                },
                on = function() {
                    var e = Object(g.useState)(Kt.j[0]),
                        t = e[0],
                        a = e[1],
                        l = Kt.h.get(t.value),
                        r = Object(W.useLazyLoadQuery)(void 0 !== Xt ? Xt : Xt = n("qIFE"), {
                            sortBy: l
                        });
                    return me.d ? Object(L.jsx)(cn, {}) : Object(L.jsx)(g.Suspense, {
                        fallback: Object(L.jsx)(cn, {}),
                        children: Object(L.jsx)(sn, {
                            dataKey: r,
                            setSortBy: a,
                            sortBy: t
                        })
                    })
                },
                sn = function(e) {
                    var t = e.dataKey,
                        a = e.sortBy,
                        l = e.setSortBy,
                        r = Object(W.useFragment)(void 0 !== Zt ? Zt : Zt = n("hNOp"), t),
                        i = Object(g.useState)(ln[0].id),
                        o = i[0],
                        s = i[1],
                        c = Object(Tt.a)(Object(g.useMemo)((function() {
                            return [{
                                header: Object(L.jsx)(dn, {
                                    children: "COLLECTION"
                                })
                            }].concat(Object(x.a)(an.map((function(e) {
                                return {
                                    header: Object(L.jsx)(dn, {
                                        children: e
                                    })
                                }
                            }))))
                        }), []), {
                            index: 1,
                            direction: "desc"
                        }),
                        d = o === ln[1].id,
                        u = rn(d ? (null === r || void 0 === r ? void 0 : r.trendingCollections) || null : (null === r || void 0 === r ? void 0 : r.collections) || null),
                        m = d ? "24 %" : "Volume",
                        p = Object(L.jsx)(_t.a, {
                            baseUrl: "/",
                            currentTab: o,
                            endEnhancer: Object(L.jsxs)(v.a, {
                                alignItems: "center",
                                marginBottom: {
                                    _: "12px",
                                    lg: "16px"
                                },
                                children: ["top" === o && Object(L.jsx)(v.a, {
                                    marginRight: "16px",
                                    children: Object(L.jsx)(St.a, {
                                        clearable: !1,
                                        endEnhancer: Object(L.jsx)(dt.a, {
                                            marginRight: "16px",
                                            children: Object(L.jsx)(Z.a, {
                                                "aria-label": "Show more",
                                                cursor: "pointer",
                                                value: "keyboard_arrow_down"
                                            })
                                        }),
                                        maxHeight: "370px",
                                        options: Kt.j,
                                        overrides: {
                                            Dropdown: {
                                                props: {
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
                                        value: a.value,
                                        variant: "item",
                                        onSelect: function(e) {
                                            e && e !== a && l(e)
                                        }
                                    })
                                }), Object(L.jsx)(Me.a, {
                                    height: {
                                        _: "36px",
                                        lg: "48px"
                                    },
                                    href: "/rankings".concat("trending" === o ? "/trending" : ""),
                                    children: Object(L.jsx)(S.a, {
                                        color: "text.heading",
                                        variant: S.b.SMALL_BOLD,
                                        whiteSpace: "nowrap",
                                        children: "View all"
                                    })
                                })]
                            }),
                            handleClick: function(e) {
                                e && s(e)
                            },
                            isLoading: !u,
                            labelVariant: "large",
                            tabs: [].concat(ln)
                        });
                    return Object(L.jsxs)(L.Fragment, {
                        children: [Object(L.jsx)(re.a, {
                            greaterThanOrEqual: "lg",
                            children: Object(L.jsxs)(C.a, {
                                padding: kt("lg"),
                                children: [Object(L.jsx)(C.a.Item, {
                                    marginBottom: 16,
                                    xs: 12,
                                    children: p
                                }), Object(L.jsx)(C.a.Item, {
                                    lg: 6,
                                    marginRight: "20px",
                                    children: Object(L.jsx)(en, {
                                        data: u ? u[0] : null,
                                        indexStart: 1,
                                        isLoading: !u,
                                        rankingsSort: m,
                                        sortBy: a,
                                        sortableHeaders: c
                                    })
                                }), Object(L.jsx)(C.a.Item, {
                                    lg: 6,
                                    marginLeft: "20px",
                                    children: Object(L.jsx)(en, {
                                        data: u ? u[1] : null,
                                        indexStart: 6,
                                        isLoading: !u,
                                        rankingsSort: m,
                                        sortBy: a,
                                        sortableHeaders: c
                                    })
                                })]
                            })
                        }), Object(L.jsx)(re.a, {
                            lessThan: "lg",
                            children: Object(L.jsxs)(C.a, {
                                padding: kt("md"),
                                children: [Object(L.jsx)(C.a.Item, {
                                    xs: 12,
                                    children: p
                                }), Object(L.jsx)(C.a.Item, {
                                    xs: 12,
                                    children: Object(L.jsx)(en, {
                                        data: u ? u[0] : null,
                                        indexStart: 1,
                                        isLoading: !u,
                                        rankingsSort: m,
                                        sortBy: a,
                                        sortableHeaders: c
                                    })
                                })]
                            })
                        })]
                    })
                },
                cn = function() {
                    return Object(L.jsxs)(L.Fragment, {
                        children: [Object(L.jsx)(re.a, {
                            greaterThanOrEqual: "lg",
                            children: Object(L.jsx)(C.a, {
                                padding: kt("lg"),
                                children: new Array(10).fill(null).map((function(e, t) {
                                    return Object(L.jsx)(C.a.Item, {
                                        children: Object(L.jsx)(v.a, {
                                            children: Object(L.jsx)(Ut, {})
                                        })
                                    }, t)
                                }))
                            })
                        }), Object(L.jsx)(re.a, {
                            lessThan: "lg",
                            children: Object(L.jsx)(C.a, {
                                padding: kt("md"),
                                children: new Array(10).fill(null).map((function(e, t) {
                                    return Object(L.jsx)(C.a.Item, {
                                        children: Object(L.jsx)(v.a, {
                                            children: Object(L.jsx)(Ut, {})
                                        })
                                    }, t)
                                }))
                            })
                        })]
                    })
                },
                dn = Object(p.d)(ot.a).attrs({
                    size: "tiny",
                    weight: "semibold",
                    color: "text.subtle"
                }).withConfig({
                    componentId: "sc-17l0ptc-0"
                })([""]),
                un = function(e) {
                    var t, a = e.dataKey,
                        l = Object(W.useFragment)(void 0 !== Jt ? Jt : Jt = n("2t2L"), a);
                    return Object(L.jsxs)(C.a, {
                        gridRowGap: 56,
                        marginBottom: 40,
                        children: [Object(L.jsx)(C.a.Item, {
                            xs: 12,
                            children: Object(L.jsx)(vt, {
                                dataKey: null !== l && void 0 !== l ? l : null
                            })
                        }), Object(L.jsx)(C.a.Item, {
                            xs: 12,
                            children: Object(L.jsx)(on, {})
                        }), Object(L.jsx)(C.a.Item, {
                            xs: 12,
                            children: Object(L.jsx)(it, {
                                dataKey: null !== (t = null === l || void 0 === l ? void 0 : l.homePageFeaturedSectionCollections) && void 0 !== t ? t : null
                            })
                        }), Object(L.jsx)(C.a.Item, {
                            children: Object(L.jsx)(P, {})
                        })]
                    })
                },
                gn = n("h64z"),
                mn = n("0c5R"),
                pn = n("O4Bb"),
                hn = n("heV+"),
                bn = n("TiKg"),
                jn = n.n(bn),
                xn = n("g/rM"),
                yn = n("fUaP"),
                fn = "Featured",
                On = {
                    name: "RTFKT Clone X Forging SZN 1",
                    description: "",
                    href: "/collection/clonexforging",
                    height: 367,
                    width: 550,
                    imageUrl: "https://storage.googleapis.com/opensea-prod.appspot.com/files/CloneX_Feature_550x367_opensea_homepage_UNFORGED_20220831.jpg",
                    creatorUsername: "RTFKT",
                    creatorImageUrl: "https://lh3.googleusercontent.com/GI7544nzneZOLVmngy8gSJYhrLSnPdpfryTw20APrXhVXt3JbqnrHca42YJWlfq9DuDGcQF0SFzj4SyhnSpg19Uj0ABM1pLfJ5_4nA=s168"
                },
                kn = function() {
                    var e = Object(Ie.a)("home"),
                        t = Object(xn.a)().theme,
                        n = {
                            backgroundImage: "url(".concat(On.imageUrl, ")")
                        },
                        a = Object(g.useState)(),
                        l = a[0],
                        r = a[1],
                        i = void 0 !== l && l <= 0;
                    Object(g.useEffect)((function() {
                        var e;
                        return requestAnimationFrame((function t() {
                                var n;
                                r(null === (n = On.dropTime) || void 0 === n ? void 0 : n.diff(jn.a.utc())), e = setTimeout((function() {
                                    requestAnimationFrame(t)
                                }), 1e3)
                            })),
                            function() {
                                return clearTimeout(e)
                            }
                    }), [r]);
                    var o = jn.a.duration(l),
                        s = o.days(),
                        c = o.hours(),
                        d = o.minutes(),
                        u = o.seconds(),
                        m = Object(yn.e)(s, c, d, u),
                        p = function() {
                            return Object(L.jsx)(h.a, {
                                className: "Featured--learn-more",
                                href: "/#".concat(G.a),
                                children: Object(L.jsxs)(v.a, {
                                    className: "Featured--learn-more-container",
                                    children: [Object(L.jsx)(Z.a, {
                                        className: "Featured--learn-more-icon",
                                        color: "blue",
                                        value: "play_circle_filled"
                                    }), Object(L.jsx)(S.a, {
                                        className: "Featured--learn-more-text",
                                        children: e("customFeatured.learnMorePrompt", "Learn more about OpenSea")
                                    })]
                                })
                            })
                        };
                    return Object(L.jsx)(L.Fragment, {
                        children: Object(L.jsxs)(Cn, {
                            children: [Object(L.jsx)(w.a, {
                                className: "Featured--background-container",
                                children: Object(L.jsx)(vn, {
                                    style: n
                                })
                            }), Object(L.jsxs)(v.a, {
                                className: "Featured--container",
                                children: [Object(L.jsxs)(v.a, {
                                    className: "Featured--title",
                                    children: [Object(L.jsx)(S.a, {
                                        className: "Featured--header",
                                        variant: "h1",
                                        children: K.E
                                    }), Object(L.jsx)(S.a, {
                                        as: "span",
                                        className: "Featured--subheader",
                                        variant: "subtitle",
                                        children: K.F
                                    }), Object(L.jsxs)(v.a, {
                                        className: "Featured--button-container",
                                        children: [Object(L.jsx)(w.a, {
                                            marginRight: "20px",
                                            children: Object(L.jsx)($.c, {
                                                className: "Featured--button",
                                                eventSource: fn,
                                                href: "/explore-collections",
                                                children: e("customFeatured.exploreCTA", "Explore")
                                            })
                                        }), Object(L.jsx)($.c, {
                                            className: "Featured--button",
                                            eventSource: fn,
                                            href: "/asset/create",
                                            variant: "secondary",
                                            children: e("customFeatured.createCTA", "Create")
                                        })]
                                    }), Object(L.jsx)(re.a, {
                                        greaterThanOrEqual: "lg",
                                        children: Object(L.jsx)(v.a, {
                                            alignItems: "flex-end",
                                            height: "100%",
                                            children: Object(L.jsx)(p, {})
                                        })
                                    })]
                                }), Object(L.jsx)(v.a, {
                                    className: "Featured--image",
                                    children: Object(L.jsx)(v.a, {
                                        as: "article",
                                        className: "Featured--image-card",
                                        children: Object(L.jsxs)(h.a, {
                                            className: "Featured--image-link",
                                            href: On.href,
                                            onClick: function() {
                                                return Object(Be.h)({
                                                    name: On.name,
                                                    creatorUsername: On.creatorUsername,
                                                    link: On.href
                                                })
                                            },
                                            children: [Object(L.jsx)(R.a, {
                                                alt: "",
                                                className: "Featured--image-media",
                                                height: On.height,
                                                priority: !0,
                                                src: On.imageUrl,
                                                unoptimized: !0,
                                                width: On.width
                                            }), Object(L.jsxs)(le.a, {
                                                as: "footer",
                                                className: "Featured--image-text-area",
                                                children: [Object(L.jsx)(le.a.Avatar, {
                                                    alt: "Featured creator",
                                                    className: "Featured--image-avatar",
                                                    outline: 0,
                                                    size: 38,
                                                    src: On.creatorImageUrl
                                                }), Object(L.jsxs)(le.a.Content, {
                                                    className: "Featured--image-content",
                                                    children: [Object(L.jsx)(le.a.Title, {
                                                        children: Object(L.jsx)("span", {
                                                            className: "Featured--image-title",
                                                            children: On.name
                                                        })
                                                    }), Object(L.jsxs)(le.a.Description, {
                                                        className: "Featured--image-creator",
                                                        children: [Object(L.jsx)("span", {
                                                            style: {
                                                                fontWeight: 400
                                                            },
                                                            children: "by"
                                                        }), " ", Object(L.jsx)("span", {
                                                            style: {
                                                                fontWeight: 500
                                                            },
                                                            children: On.creatorUsername
                                                        })]
                                                    })]
                                                }), (l || i) && Object(L.jsx)(le.a.Side, {
                                                    children: i ? Object(L.jsx)($.c, {
                                                        borderRadius: "8px",
                                                        fontSize: "14px",
                                                        fontWeight: 600,
                                                        size: "xsmall",
                                                        children: "Mint now"
                                                    }) : Object(L.jsxs)(L.Fragment, {
                                                        children: [Object(L.jsxs)(Fn, {
                                                            height: "",
                                                            children: [Object(L.jsx)(S.a, {
                                                                color: "light" === t ? "charcoal" : "white",
                                                                fontWeight: 400,
                                                                margin: 0,
                                                                variant: "small",
                                                                children: "Public mint"
                                                            }), Object(L.jsx)(S.a, {
                                                                color: "light" === t ? "charcoal" : "white",
                                                                fontWeight: 600,
                                                                margin: 0,
                                                                variant: "small-bold",
                                                                children: m
                                                            })]
                                                        }), Object(L.jsx)(wn, {
                                                            children: Object(L.jsx)($.c, {
                                                                borderRadius: "8px",
                                                                fontSize: "14px",
                                                                fontWeight: 600,
                                                                size: "xsmall",
                                                                children: "View drop"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            }), On.description && Object(L.jsx)("p", {
                                                className: "Featured--image-description",
                                                children: On.description
                                            })]
                                        })
                                    })
                                }), Object(L.jsx)(re.a, {
                                    lessThan: "lg",
                                    children: Object(L.jsx)(v.a, {
                                        justifyContent: "center",
                                        width: "100%",
                                        children: Object(L.jsx)(p, {})
                                    })
                                })]
                            })]
                        })
                    })
                },
                wn = Object(p.d)(w.a).withConfig({
                    componentId: "sc-1i1wkh1-0"
                })(["display:none;"]),
                Fn = Object(p.d)(w.a).withConfig({
                    componentId: "sc-1i1wkh1-1"
                })(["display:block;"]),
                vn = Object(p.d)(v.a).withConfig({
                    componentId: "sc-1i1wkh1-2"
                })(["height:780px;background-size:cover;background-color:", ";background-position:center;opacity:0.3;filter:blur(8px);-webkit-filter:blur(8px);mask:linear-gradient(#fff,transparent);-webkit-mask:linear-gradient(#fff,transparent);", ";"], (function(e) {
                    return e.theme.colors.background
                }), Object(k.e)({
                    tabletL: Object(p.c)(["height:586px;"])
                })),
                Cn = Object(p.d)(v.a).withConfig({
                    componentId: "sc-1i1wkh1-3"
                })(["height:780px;", " .Featured--background-container{width:100%;position:absolute;overflow:hidden;}.Featured--learn-more{z-index:2;cursor:pointer;align-self:flex-start;", " .Featured--learn-more-container{align-items:center;height:30px;&:hover{color:", ";}.Featured--learn-more-icon{color:inherit;}.Featured--learn-more-text{margin-left:8px;font-weight:600;color:", ";&:hover{color:inherit;}}}}.Featured--container{margin:0 auto;max-width:", ";width:100%;flex-wrap:wrap;&:hover{box-shadow:10px;}.Featured--title{flex-direction:column;align-items:center;width:100%;padding:30px 20px 20px 20px;", " .Featured--header{margin:0;font-size:28px;text-align:center;z-index:2;max-width:330px;", "}.Featured--subheader{margin-top:20px;max-width:400px;text-align:center;z-index:2;font-size:18px;", " ", "}.Featured--button-container{margin-top:20px;z-index:2;", " .Featured--button{width:120px;", "}}}.Featured--image{flex-direction:column;align-items:center;width:100%;padding-top:0;", " .AssetMedia--img{border-bottom-left-radius:0;border-bottom-right-radius:0;}.Featured--skeleton{max-width:355px;", " .Featured--skeleton-row{border-top-left-radius:10px;border-top-right-radius:10px;margin-bottom:-10px;.Featured--skeleton-block{height:300px;", "}}}.Featured--image-card{width:100%;background-color:", ";flex-direction:column;border-radius:10px;overflow:hidden;z-index:2;max-width:355px;box-shadow:0px 0px 10px 0px ", ";", " &:hover{transition:box-shadow 0.3s ease-in;box-shadow:0px 0px 50px 0px ", ";}@media (hover:hover){&:hover ", "{display:block;}&:hover ", "{display:none;}}.Image--image{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important;}.Featured--image-text-area{border:none;margin-top:-11px;padding-left:12px;padding-right:12px;padding-bottom:13px;", " &:hover{box-shadow:none;border-bottom-left-radius:10px;border-bottom-right-radius:10px;}.Featured--image-avatar{object-fit:cover;}.Featured--image-creator{font-size:14px;line-height:20px;margin-top:-1px;color:", ";", "}}.Featured--image-content{margin-left:-3px;}.Featured--image-title{font-size:14px;line-height:20px;color:", ";}.Featured--image-description{padding:0 52px 0 12px;margin-top:-4px;margin-bottom:12px;font-size:14px;line-height:20px;color:", ";", "}.Featured--image-link{border-radius:10px;.Featured--image-media{height:80vw;z-index:2;border-bottom:1px solid ", ";", "}}}}}"], Object(k.e)({
                    tabletL: Object(p.c)(["height:586px;"])
                }), Object(k.e)({
                    tabletL: Object(p.c)(["padding-top:40px;"])
                }), (function(e) {
                    return e.theme.colors.darkSeaBlue
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.maxWidth.smallPadding
                }), Object(k.e)({
                    tabletL: Object(p.c)(["width:50%;padding:110px 20px 44px 30px;align-items:flex-start;"])
                }), Object(k.e)({
                    small: Object(p.c)(["font-size:32px;max-width:", "px;"], 550),
                    tabletL: Object(p.c)(["text-align:left;max-width:100%;margin-right:10px;"]),
                    extraLarge: Object(p.c)(["font-size:45px;"])
                }), (function(e) {
                    return Object(U.d)({
                        variants: {
                            light: {
                                color: "".concat(e.theme.colors.oil, ";")
                            },
                            dark: {
                                color: "".concat(e.theme.colors.text.subtle, ";")
                            }
                        }
                    })
                }), Object(k.e)({
                    tabletL: Object(p.c)(["font-size:24px;text-align:left;"])
                }), Object(k.e)({
                    tabletL: Object(p.c)(["margin-top:40px;"])
                }), Object(k.e)({
                    tabletL: Object(p.c)(["width:167px;"])
                }), Object(k.e)({
                    tabletL: Object(p.c)(["width:50%;padding:80px 0px;align-items:flex-end;"])
                }), Object(k.e)({
                    tabletL: Object(p.c)(["max-width:480px;"])
                }), Object(k.e)({
                    tabletL: Object(p.c)(["height:420px;"])
                }), (function(e) {
                    return e.theme.colors.surface
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }), Object(k.e)({
                    tabletL: Object(p.c)(["max-width:480px;margin-right:30px;"])
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }), wn, Fn, Object(k.e)({
                    tabletL: Object(p.c)(["margin-top:-8px;padding-left:16px;padding-right:16px;padding-bottom:15px;"])
                }), (function(e) {
                    return "dark" === e.theme.type ? e.theme.colors.white : e.theme.colors.charcoal
                }), Object(k.e)({
                    tabletL: Object(p.c)(["margin-top:0;"])
                }), (function(e) {
                    return "dark" === e.theme.type ? e.theme.colors.white : e.theme.colors.charcoal
                }), (function(e) {
                    return "dark" === e.theme.type ? e.theme.colors.gray : e.theme.colors.darkGray
                }), Object(k.e)({
                    tabletL: Object(p.c)(["padding:0 16px;margin-top:-2px;margin-bottom:16px;"])
                }), (function(e) {
                    return e.theme.colors.border
                }), Object(k.e)({
                    phoneL: Object(p.c)(["height:300px;"]),
                    tabletL: Object(p.c)(["height:420px;"])
                })),
                Sn = void 0 !== $t ? $t : $t = n("eqlB"),
                Tn = function(e) {
                    var t, n, a = e.data,
                        l = Object(Ie.a)("home"),
                        r = Object(gn.a)().announcementBanner,
                        i = Object(T.a)("custom_featured_item"),
                        o = Object(T.a)("custom_featured_banner"),
                        s = Object(T.f)();
                    Object(mn.a)((function() {
                        Object(pn.r)()
                    }));
                    var c = hn.a.parse({
                            show_delisted_notice: hn.a.Optional(hn.a.boolean)
                        }).show_delisted_notice,
                        d = hn.a.parse({
                            show_ip_rights_delisted_notice: hn.a.Optional(hn.a.isIpRightsTakedownDelisted)
                        }).show_ip_rights_delisted_notice,
                        u = null === r || void 0 === r ? void 0 : r.announcementBanner,
                        g = "HOMEPAGE_ONLY" == (null === u || void 0 === u ? void 0 : u.displayMode);
                    return Object(L.jsxs)(L.Fragment, {
                        children: [Object(L.jsx)(_n, {}), Object(L.jsxs)(Te.a, {
                            announcement: g ? u : void 0,
                            children: [s ? Object(L.jsx)(un, {
                                dataKey: null !== a && void 0 !== a ? a : null
                            }) : Object(L.jsxs)(L.Fragment, {
                                children: [i ? Object(L.jsx)(kn, {}) : Object(L.jsx)(He, {
                                    data: null !== (t = null === a || void 0 === a ? void 0 : a.featuredAsset) && void 0 !== t ? t : null
                                }), Object(L.jsxs)(w.a, {
                                    marginBottom: "120px",
                                    marginTop: o ? "80px" : void 0,
                                    children: [o && Object(L.jsx)(Kn, {
                                        children: Object(L.jsxs)(Ln, {
                                            children: [Object(L.jsx)(re.a, {
                                                lessThan: "lg",
                                                children: Object(L.jsx)(h.a, {
                                                    href: "/collection/fwb-os",
                                                    children: Object(L.jsx)(_e.a, {
                                                        alt: "Friends With Benefits",
                                                        layout: "fill",
                                                        src: "static/images/promo/fbw_banner_mobile.jpg",
                                                        unoptimized: !0
                                                    })
                                                })
                                            }), Object(L.jsx)(re.a, {
                                                greaterThanOrEqual: "lg",
                                                children: Object(L.jsx)(h.a, {
                                                    href: "/collection/fwb-os",
                                                    children: Object(L.jsx)(_e.a, {
                                                        alt: "Friends With Benefits",
                                                        layout: "fill",
                                                        src: "static/images/promo/fbw_banner_desktop.jpg",
                                                        unoptimized: !0
                                                    })
                                                })
                                            })]
                                        })
                                    }), Object(L.jsx)(Q.a, {
                                        data: null !== (n = null === a || void 0 === a ? void 0 : a.promotions) && void 0 !== n ? n : null,
                                        title: Object(L.jsx)(S.a, {
                                            as: "h2",
                                            marginBottom: "8px",
                                            textAlign: "center",
                                            variant: "h3",
                                            children: o ? l("promotions.customTitle", "Curated by {{curator}}", {
                                                curator: "Friends with Benefits"
                                            }) : l("promotions.title", "Notable Drops")
                                        })
                                    })]
                                }), Object(L.jsx)(be, {}), Object(L.jsx)(b.a, {}), Object(L.jsx)(z, {}), Object(L.jsx)(B, {}), Object(L.jsx)(P, {}), Object(L.jsx)(G.b, {
                                    showButton: !0
                                }), Object(L.jsx)(j.a, {})]
                            }), c && Object(L.jsx)(ve.b, {
                                isOpen: !0,
                                children: Object(L.jsx)(Fe.a, {
                                    variant: "home",
                                    onClose: function() {
                                        return Ce.a.push("/")
                                    }
                                })
                            }), d && Object(L.jsx)(Se, {
                                IpRightsTakedownDelistedMode: d
                            })]
                        })]
                    })
                };
            Tn.query = Sn, Tn.cachePolicy = {
                maxAge: 300,
                revalidate: 360
            };
            var _n = Object(p.b)(["html{scroll-behavior:smooth;}"]),
                Kn = Object(p.d)(w.a).withConfig({
                    componentId: "sc-1398ys9-0"
                })(["margin-left:auto;margin-right:auto;padding-left:30px;padding-right:30px;max-width:", ";width:100%;flex-wrap:wrap;"], (function(e) {
                    return e.theme.maxWidth.smallPadding
                })),
                Ln = Object(p.d)(w.a).withConfig({
                    componentId: "sc-1398ys9-1"
                })(["border-radius:", ";height:20vw;max-height:200px;overflow:hidden;position:relative;cursor:pointer;box-shadow:0px 0px 10px 0px ", ";&:hover{transition:box-shadow 0.3s ease-in;box-shadow:0px 0px 50px 0px ", ";}"], (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }))
        },
        R952: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("UutA"),
                l = n("b7Z7"),
                r = Object(a.d)(l.a).withConfig({
                    componentId: "sc-9jbsog-0"
                })(["display:inline-flex;"])
        },
        YrBu: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("mXGw"),
                l = function(e) {
                    return (e + 1) % 1e6
                };

            function r() {
                return Object(a.useReducer)(l, 0)[1]
            }
        },
        a7GP: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return j
            })), n.d(t, "a", (function() {
                return x
            }));
            var a = n("oA/F"),
                l = n("m6w3"),
                r = n("mXGw"),
                i = n("9va6"),
                o = n("aXrf"),
                s = n("h64z"),
                c = n("/Q9m"),
                d = n("jQgF"),
                u = n("i/iV"),
                g = n("oYCi"),
                m = ["query"];

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        Object(l.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var b = function(e) {
                    var t = e.component,
                        n = e.handleError,
                        a = e.props,
                        l = e.query,
                        i = e.ssrData,
                        c = e.fetchPolicy,
                        d = void 0 === c ? "store-or-network" : c,
                        u = Object(r.useRef)(),
                        m = Object(o.useRelayEnvironment)(),
                        p = Object(s.a)(),
                        b = p.login,
                        j = p.logout,
                        x = p.refetchPublisher,
                        y = Object(r.useCallback)((function() {
                            x.publish()
                        }), [x]);
                    return Object(r.useEffect)((function() {
                        var e = x.subscribe((function() {
                            var e;
                            return null === (e = u.current) || void 0 === e ? void 0 : e.call(u)
                        }));
                        return function() {
                            e()
                        }
                    }), [x]), Object(g.jsx)(o.QueryRenderer, {
                        environment: m,
                        fetchPolicy: d,
                        query: l,
                        render: function(e) {
                            var l = e.error,
                                r = e.props,
                                o = e.retry;
                            return u.current = o, l && n(l, b, j), Object(g.jsx)(t, h(h({}, a), {}, {
                                data: null !== i && void 0 !== i ? i : r,
                                error: l,
                                refetch: y
                            }))
                        },
                        variables: a.variables
                    })
                },
                j = function(e, t, n) {
                    return function(a) {
                        return d.d ? Object(g.jsx)(e, h(h({}, a), {}, {
                            data: null,
                            error: null,
                            refetch: i.noop
                        })) : Object(g.jsx)(b, {
                            component: e,
                            fetchPolicy: n,
                            handleError: u.c,
                            props: a,
                            query: t
                        })
                    }
                },
                x = function(e) {
                    var t = e.query,
                        n = Object(a.a)(e, m),
                        l = Object(c.b)();
                    return Object(g.jsx)(b, h(h({}, n), {}, {
                        query: Object(i.isFunction)(t) ? t(l.queryParams) : t
                    }))
                }
        },
        eqlB: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                        kind: "Literal",
                        name: "promotionType",
                        value: "HOMEPAGE"
                    }],
                    t = [{
                        kind: "Literal",
                        name: "featuredAssetType",
                        value: "HOMEPAGE"
                    }],
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    },
                    r = {
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
                        name: "slug",
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "logo",
                        storageKey: null
                    },
                    s = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "verificationStatus",
                        storageKey: null
                    },
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCategory",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "HomePageQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "PromotionType",
                            kind: "LinkedField",
                            name: "promotions",
                            plural: !0,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "Promotions_promotions"
                            }],
                            storageKey: 'promotions(promotionType:"HOMEPAGE")'
                        }, {
                            alias: null,
                            args: t,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "featuredAsset",
                            plural: !1,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "Featured_data"
                            }],
                            storageKey: 'featuredAsset(featuredAssetType:"HOMEPAGE")'
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "MagellanLayout_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "HomePageQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "PromotionType",
                            kind: "LinkedField",
                            name: "promotions",
                            plural: !0,
                            selections: [n, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "saleStartTime",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoCardImg",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoCardLink",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoHeader",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoSubtitle",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "cardColor",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoCardVideo",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoCardVideoMimeType",
                                storageKey: null
                            }, a],
                            storageKey: 'promotions(promotionType:"HOMEPAGE")'
                        }, {
                            alias: null,
                            args: t,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "featuredAsset",
                            plural: !1,
                            selections: [l, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "imagePreviewUrl",
                                storageKey: null
                            }, r, {
                                alias: null,
                                args: null,
                                concreteType: "AccountType",
                                kind: "LinkedField",
                                name: "creator",
                                plural: !1,
                                selections: [r, {
                                    alias: null,
                                    args: null,
                                    concreteType: "UserType",
                                    kind: "LinkedField",
                                    name: "user",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "publicUsername",
                                        storageKey: null
                                    }, a],
                                    storageKey: null
                                }, a],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "AssetContractType",
                                kind: "LinkedField",
                                name: "assetContract",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "address",
                                    storageKey: null
                                }, a],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "tokenId",
                                storageKey: null
                            }, {
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
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "animationUrl",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "displayImageUrl",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "isDelisted",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "backgroundColor",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "DisplayDataType",
                                    kind: "LinkedField",
                                    name: "displayData",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "cardDisplayStyle",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, a],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "decimals",
                                storageKey: null
                            }, n, a],
                            storageKey: 'featuredAsset(featuredAssetType:"HOMEPAGE")'
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "HomePageFeaturedSectionCollectionType",
                            kind: "LinkedField",
                            name: "homePageFeaturedSectionCollections",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "HomePageFeaturedSectionType",
                                kind: "LinkedField",
                                name: "section",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "title",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "titleUrl",
                                    storageKey: null
                                }, n, a],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [i, o, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "banner",
                                    storageKey: null
                                }, a, l, s, c],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "collectionSubtitle",
                                storageKey: null
                            }, a],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "HomePageHeaderCarouselType",
                            kind: "LinkedField",
                            name: "homePageHeaderCarousel",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [l, o, a, i, c, s, {
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
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "unit",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
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
                                        }, a],
                                        storageKey: null
                                    }, a],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "overrideUrl",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "shortDescription",
                                storageKey: null
                            }, a],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "0e4478cae82da5408d8cfda313cc06b7",
                        id: null,
                        metadata: {},
                        name: "HomePageQuery",
                        operationKind: "query",
                        text: "query HomePageQuery {\n  promotions(promotionType: HOMEPAGE) {\n    ...Promotions_promotions\n    id\n  }\n  featuredAsset(featuredAssetType: HOMEPAGE) {\n    ...Featured_data\n    id\n  }\n  ...MagellanLayout_data\n}\n\nfragment AssetMediaAnimation_asset on AssetType {\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaAudio_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaContainer_asset_2V84VL on AssetType {\n  backgroundColor\n  ...AssetMediaEditions_asset_2V84VL\n}\n\nfragment AssetMediaEditions_asset_2V84VL on AssetType {\n  decimals\n}\n\nfragment AssetMediaImage_asset on AssetType {\n  backgroundColor\n  imageUrl\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n}\n\nfragment AssetMediaPlaceholderImage_asset on AssetType {\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n}\n\nfragment AssetMediaVideo_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaWebgl_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  displayImageUrl\n  imageUrl\n  isDelisted\n  ...AssetMediaAnimation_asset\n  ...AssetMediaAudio_asset\n  ...AssetMediaContainer_asset_2V84VL\n  ...AssetMediaImage_asset\n  ...AssetMediaPlaceholderImage_asset\n  ...AssetMediaVideo_asset\n  ...AssetMediaWebgl_asset\n}\n\nfragment Featured_data on AssetType {\n  name\n  imagePreviewUrl\n  imageUrl\n  creator {\n    imageUrl\n    user {\n      publicUsername\n      id\n    }\n    id\n  }\n  ...asset_url\n  ...AssetMedia_asset\n  ...itemEvents_data\n}\n\nfragment GlobalCollectionCard_data on CollectionType {\n  logo\n  banner\n  name\n  verificationStatus\n  ...collection_url\n}\n\nfragment HeaderCollectionItem_data on HomePageHeaderCarouselType {\n  collection {\n    name\n    logo\n    ...collection_url\n    verificationStatus\n    statsV2 {\n      floorPrice {\n        unit\n      }\n    }\n    nativePaymentAsset {\n      asset {\n        symbol\n        id\n      }\n      id\n    }\n    id\n  }\n  shortDescription\n  overrideUrl\n}\n\nfragment HomePageFeaturedCollectionCard_data on HomePageFeaturedSectionCollectionType {\n  collection {\n    logo\n    banner\n    name\n    verificationStatus\n    ...collection_url\n    ...GlobalCollectionCard_data\n    id\n  }\n  collectionSubtitle\n}\n\nfragment HomePageFeaturedCollections_data on HomePageFeaturedSectionCollectionType {\n  section {\n    title\n    titleUrl\n    relayId\n    id\n  }\n  collection {\n    slug\n    logo\n    banner\n    id\n  }\n  ...HomePageFeaturedCollectionCard_data\n}\n\nfragment HomePageHeaderCarousel_data on HomePageHeaderCarouselType {\n  collection {\n    name\n    logo\n    id\n  }\n  overrideUrl\n  ...HeaderCollectionItem_data\n}\n\nfragment HomePageHeader_data on Query {\n  homePageHeaderCarousel {\n    ...HomePageHeaderCarousel_data\n    id\n  }\n}\n\nfragment MagellanLayout_data on Query {\n  homePageFeaturedSectionCollections {\n    ...HomePageFeaturedCollections_data\n    id\n  }\n  ...HomePageHeader_data\n}\n\nfragment PromoCard_data on PromotionType {\n  relayId\n  promoCardImg\n  promoCardLink\n  promoHeader\n  promoSubtitle\n  cardColor\n  saleStartTime\n  promoCardVideo\n  promoCardVideoMimeType\n}\n\nfragment Promotions_promotions on PromotionType {\n  relayId\n  saleStartTime\n  ...PromoCard_data\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n\nfragment itemEvents_data on AssetType {\n  relayId\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n"
                    }
                }
            }();
            a.hash = "a7d8007ab1f1af45e3b0f85d3d07b1a2", t.default = a
        },
        h7iG: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return v
            }));
            var a, l = n("mXGw"),
                r = n("UutA"),
                i = n("g/rM"),
                o = n("ocrj"),
                s = n("QrBS"),
                c = n("3FBR"),
                d = n("t3V9"),
                u = n("XHwO"),
                g = n("7Yyi"),
                m = n("iSwZ"),
                p = n("Ax8a"),
                h = n("Q5Gx"),
                b = n("zMYZ"),
                j = n("LsOE"),
                x = n("a7GP"),
                y = n("bK7F"),
                f = n("oYCi"),
                O = Object(x.b)((function(e) {
                    var t = e.data,
                        n = Object(b.a)().showArrows;
                    if (!t) return Object(f.jsx)(k, {
                        children: new Array(n ? 12 : 6).fill(0).map((function() {
                            return Object(f.jsx)(p.a.Skeleton, {}, Math.random())
                        }))
                    });
                    var a = t.trendingCollections,
                        l = n ? Object(j.c)(a) : Object(j.c)(a).slice(0, 6);
                    return Object(f.jsx)(k, {
                        children: l.map((function(e, t) {
                            return Object(f.jsx)(p.a, {
                                collection: e,
                                padding: "8px",
                                requireBannerImage: !0
                            }, t)
                        }))
                    })
                }), void 0 !== a ? a : a = n("ukhD")),
                k = Object(r.d)(y.a).withConfig({
                    componentId: "sc-sodf7b-0"
                })([".Carousel--left-arrow{left:-17px;top:185px;}.Carousel--right-arrow{right:-17px;top:185px;}.CollectionsScroller--card-container{padding:10px;", "}"], Object(h.e)({
                    tabletS: Object(r.c)(["margin-bottom:10px;"])
                })),
                w = n("m5he"),
                F = n("uMSw"),
                v = function() {
                    var e = Object(l.useState)(),
                        t = e[0],
                        n = e[1],
                        a = Object(l.useState)(),
                        r = a[0],
                        p = a[1],
                        h = Object(l.useState)("all categories"),
                        b = h[0],
                        j = h[1],
                        x = Object(m.c)(),
                        y = Object(i.a)().theme;
                    return Object(f.jsxs)(C, {
                        children: [Object(f.jsx)(s.a, {
                            justifyContent: "center",
                            children: Object(f.jsxs)(c.a, {
                                as: "h2",
                                margin: "56px 8px",
                                textAlign: "center",
                                variant: "h3",
                                children: ["Trending in", " ", Object(f.jsx)(o.a, {
                                    content: function(e) {
                                        var a = e.close,
                                            l = e.List,
                                            r = e.Item;
                                        return Object(f.jsx)(l, {
                                            children: x.map((function(e) {
                                                return "New" !== e.label ? Object(f.jsx)(r, {
                                                    onClick: function() {
                                                        n(e.trendingData.category), p(e.trendingData.chain), j("/assets" === e.url ? "all categories" : e.label), Object(g.c)({
                                                            category: t,
                                                            label: b
                                                        }), a()
                                                    },
                                                    children: Object(f.jsx)(r.Content, {
                                                        children: Object(f.jsxs)(s.a, {
                                                            alignItems: "center",
                                                            children: [Object(f.jsx)(F.b, {
                                                                alt: "",
                                                                size: 24,
                                                                url: "".concat(e.image, "-").concat(y, ".svg")
                                                            }), Object(f.jsx)(r.Title, {
                                                                marginLeft: "8px",
                                                                children: "/assets" === e.url ? "All Categories" : e.label
                                                            })]
                                                        })
                                                    })
                                                }, e.url) : null
                                            }))
                                        })
                                    },
                                    children: Object(f.jsxs)(s.a, {
                                        as: d.a,
                                        className: "TrendingCollections--dropdown",
                                        children: [Object(f.jsx)(c.a, {
                                            className: "TrendingCollections--category",
                                            margin: "0",
                                            textAlign: "center",
                                            variant: "h3",
                                            children: b
                                        }), Object(f.jsx)(w.a, {
                                            className: "TrendingCollections--icon",
                                            color: "blue",
                                            value: "expand_more"
                                        })]
                                    })
                                })]
                            })
                        }), Object(f.jsx)(u.a, {
                            eventSource: "TrendingCollections",
                            children: Object(f.jsx)(O, {
                                variables: {
                                    categories: t ? [t] : void 0,
                                    chains: r ? [r] : void 0
                                }
                            })
                        })]
                    })
                },
                C = Object(r.d)(s.a).attrs({
                    as: "section"
                }).withConfig({
                    componentId: "sc-qjz2ad-0"
                })(["align-items:center;flex-direction:column;margin-top:60px;margin-bottom:100px;.TrendingCollections--dropdown{display:inline-flex;align-items:center;cursor:pointer;justify-content:center;.TrendingCollections--category{color:", ";&:hover{color:", ";}}}"], (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.colors.darkSeaBlue
                }))
        },
        hNOp: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = {
                        kind: "Literal",
                        name: "first",
                        value: 10
                    },
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    },
                    a = [n],
                    l = [{
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
                            }, t, {
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
                                    selections: [n, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "eth",
                                        storageKey: null
                                    }],
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
                                    selections: a,
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
                                    selections: a,
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
                                    selections: a,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "totalVolume",
                                    plural: !1,
                                    selections: a,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "totalListed",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                args: null,
                                kind: "FragmentSpread",
                                name: "StatsV2HomepageCollectionCell_collection"
                            }, {
                                kind: "InlineDataFragmentSpread",
                                name: "collection_url",
                                selections: [t, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "isCategory",
                                    storageKey: null
                                }]
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }];
                return {
                    argumentDefinitions: [{
                        defaultValue: "ONE_DAY_VOLUME",
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    kind: "Fragment",
                    metadata: null,
                    name: "HomePageStatsTables_data",
                    selections: [{
                        alias: null,
                        args: [e, {
                            kind: "Variable",
                            name: "sortBy",
                            variableName: "sortBy"
                        }],
                        concreteType: "CollectionTypeConnection",
                        kind: "LinkedField",
                        name: "collections",
                        plural: !1,
                        selections: l,
                        storageKey: null
                    }, {
                        alias: null,
                        args: [e, {
                            kind: "Literal",
                            name: "topCollectionLimit",
                            value: 500
                        }],
                        concreteType: "CollectionTypeConnection",
                        kind: "LinkedField",
                        name: "trendingCollections",
                        plural: !1,
                        selections: l,
                        storageKey: "trendingCollections(first:10,topCollectionLimit:500)"
                    }],
                    type: "Query",
                    abstractKey: null
                }
            }();
            a.hash = "f4df92273874ef6fcb2f3ff4484ea941", t.default = a
        },
        iCgP: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: {
                    plural: !0
                },
                name: "Promotions_promotions",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "relayId",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "saleStartTime",
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "PromoCard_data"
                }],
                type: "PromotionType",
                abstractKey: null,
                hash: "fb8978d8e2d952e76fef07db53c0e550"
            };
            t.default = a
        },
        qIFE: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    t = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    n = {
                        kind: "Literal",
                        name: "first",
                        value: 10
                    },
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
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    },
                    o = [i],
                    s = [{
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
                                    selections: [a, r, l],
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
                                    selections: [i, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "eth",
                                        storageKey: null
                                    }],
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
                                    selections: o,
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
                                    selections: o,
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
                                    selections: o,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "totalVolume",
                                    plural: !1,
                                    selections: o,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "totalListed",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, r],
                            storageKey: null
                        }],
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "HomePageStatsTablesLazyQuery",
                        selections: [{
                            args: [t],
                            kind: "FragmentSpread",
                            name: "HomePageStatsTables_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "HomePageStatsTablesLazyQuery",
                        selections: [{
                            alias: null,
                            args: [n, t],
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "collections",
                            plural: !1,
                            selections: s,
                            storageKey: null
                        }, {
                            alias: null,
                            args: [n, {
                                kind: "Literal",
                                name: "topCollectionLimit",
                                value: 500
                            }],
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "trendingCollections",
                            plural: !1,
                            selections: s,
                            storageKey: "trendingCollections(first:10,topCollectionLimit:500)"
                        }]
                    },
                    params: {
                        cacheID: "36dde5fa18555842e88edf154508d1cc",
                        id: null,
                        metadata: {},
                        name: "HomePageStatsTablesLazyQuery",
                        operationKind: "query",
                        text: "query HomePageStatsTablesLazyQuery(\n  $sortBy: CollectionSort\n) {\n  ...HomePageStatsTables_data_34jhwD\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment HomePageStatsTables_data_34jhwD on Query {\n  collections(first: 10, sortBy: $sortBy) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        ...StatsV2HomepageCollectionCell_collection\n        ...collection_url\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          ...StatsV2TablePrice_logo\n          asset {\n            symbol\n            id\n          }\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n            eth\n          }\n          numOwners\n          totalSupply\n          totalSales\n          sevenDaySales\n          sevenDayChange\n          sevenDayVolume {\n            unit\n          }\n          oneDaySales\n          oneDayChange\n          oneDayVolume {\n            unit\n          }\n          thirtyDaySales\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n          }\n          totalVolume {\n            unit\n          }\n          totalListed\n        }\n        id\n      }\n    }\n  }\n  trendingCollections(first: 10, topCollectionLimit: 500) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        ...StatsV2HomepageCollectionCell_collection\n        ...collection_url\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          ...StatsV2TablePrice_logo\n          asset {\n            symbol\n            id\n          }\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n            eth\n          }\n          numOwners\n          totalSupply\n          totalSales\n          sevenDaySales\n          sevenDayChange\n          sevenDayVolume {\n            unit\n          }\n          oneDaySales\n          oneDayChange\n          oneDayVolume {\n            unit\n          }\n          thirtyDaySales\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n          }\n          totalVolume {\n            unit\n          }\n          totalListed\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment StatsV2HomepageCollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "3eb3769899bab0208690cf6e4198b734", t.default = a
        },
        uiiN: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            n("mXGw");
            var a = n("qymy"),
                l = n("3FBR"),
                r = n("ZwbU"),
                i = n("C/iq"),
                o = n("oYCi"),
                s = function(e) {
                    var t = e.onClose,
                        n = e.variant;
                    return Object(o.jsxs)(o.Fragment, {
                        children: [Object(o.jsx)(r.b.Header, {
                            children: Object(o.jsxs)(r.b.Title, {
                                children: ["account" === n ? "This item" : "The item you tried to visit", " ", "is no longer available on OpenSea"]
                            })
                        }), Object(o.jsx)(r.b.Body, {
                            children: Object(o.jsxs)("div", {
                                className: "DelistedNotice--content",
                                children: [Object(o.jsxs)(l.a, {
                                    children: ["account" === n ? "This item" : "The item you tried to visit", " ", "is no longer available on OpenSea. It will not be visible or accessible to anyone browsing the marketplace", "account" === n ? " or your profile" : "", "."]
                                }), Object(o.jsxs)(l.a, {
                                    children: ["To learn more about why", " ", "account" === n ? "this item" : "the item you tried to visit", " ", "is no longer available on OpenSea, read", " ", Object(o.jsx)(a.a, {
                                        href: "https://openseahelp.zendesk.com/hc/en-us/articles/1500010625362",
                                        children: "our Help Center guide on this topic"
                                    }), ". If you have questions or concerns regarding this action, contact the OpenSea team ", Object(o.jsx)(a.a, {
                                        href: i.ob,
                                        children: "here"
                                    }), "."]
                                })]
                            })
                        }), Object(o.jsx)(r.b.Footer, {
                            children: Object(o.jsx)(r.b.Footer.Button, {
                                variant: "secondary",
                                onClick: t,
                                children: "Close"
                            })
                        })]
                    })
                }
        },
        ukhD: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "categories"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chains"
                    }],
                    t = [{
                        kind: "Variable",
                        name: "categories",
                        variableName: "categories"
                    }, {
                        kind: "Variable",
                        name: "chains",
                        variableName: "chains"
                    }, {
                        kind: "Literal",
                        name: "first",
                        value: 12
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "CollectionsScrollerQuery",
                        selections: [{
                            alias: null,
                            args: t,
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
                                        args: [{
                                            kind: "Literal",
                                            name: "showContextMenu",
                                            value: !1
                                        }],
                                        kind: "FragmentSpread",
                                        name: "GlobalCollectionCard_data"
                                    }],
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
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "CollectionsScrollerQuery",
                        selections: [{
                            alias: null,
                            args: t,
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
                                        name: "logo",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "banner",
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
                                        name: "verificationStatus",
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
                                        name: "isCategory",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "id",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "5261dda32143a37b4e059257d8d58155",
                        id: null,
                        metadata: {},
                        name: "CollectionsScrollerQuery",
                        operationKind: "query",
                        text: "query CollectionsScrollerQuery(\n  $categories: [CategorySlug!]\n  $chains: [ChainScalar!]\n) {\n  trendingCollections(first: 12, categories: $categories, chains: $chains) {\n    edges {\n      node {\n        ...GlobalCollectionCard_data_3z3gbW\n        id\n      }\n    }\n  }\n}\n\nfragment GlobalCollectionCard_data_3z3gbW on CollectionType {\n  logo\n  banner\n  name\n  verificationStatus\n  ...collection_url\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "5f120acea9b155ff014c28139600acc9", t.default = a
        },
        x0lM: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: {
                    plural: !0
                },
                name: "HomePageFeaturedCollections_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "HomePageFeaturedSectionType",
                    kind: "LinkedField",
                    name: "section",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "title",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "titleUrl",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "CollectionType",
                    kind: "LinkedField",
                    name: "collection",
                    plural: !1,
                    selections: [{
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
                        name: "banner",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "HomePageFeaturedCollectionCard_data"
                }],
                type: "HomePageFeaturedSectionCollectionType",
                abstractKey: null,
                hash: "c4d03e0f73ee651e11107f0e877a4780"
            };
            t.default = a
        },
        xiTr: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            n("mXGw");
            var a = n("UutA"),
                l = n("b7Z7"),
                r = n("QrBS"),
                i = n("u6YR"),
                o = n("uMSw"),
                s = n("qymy"),
                c = n("oYCi"),
                d = function(e) {
                    var t = e.imageUrl,
                        n = e.href,
                        a = e.imageWidth,
                        l = e.imageHeight,
                        d = e.containerClassName,
                        g = e.contentClassName,
                        m = e.className,
                        p = e.children,
                        h = e.eventSource,
                        b = e.alt;
                    return Object(c.jsx)(u, {
                        className: d,
                        children: Object(c.jsxs)(s.a, {
                            className: Object(i.a)("CarouselCard", {
                                main: !0
                            }, m),
                            eventSource: h,
                            href: n,
                            children: [Object(c.jsx)(o.b, {
                                alt: b,
                                className: "CarouselCard--image",
                                height: l,
                                sizing: "cover",
                                url: t,
                                width: a
                            }), Object(c.jsx)(r.a, {
                                className: Object(i.a)("CarouselCard", {
                                    content: !0
                                }, g),
                                children: p
                            })]
                        })
                    })
                },
                u = Object(a.d)(l.a).withConfig({
                    componentId: "sc-152cap8-0"
                })(["display:inline-block;width:100%;.CarouselCard--main{box-shadow:0px 4px 15px rgba(0,0,0,0.08);display:inline-block;background-color:", ";border-radius:", ";cursor:pointer;width:100%;&:hover{box-shadow:0px 6px 25px rgba(0,0,0,0.15);transition:0.1s;}.CarouselCard--image{border-radius:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:1px solid ", ";background-color:", ";}.CarouselCard--content{flex-direction:column;padding:10px;}}"], (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.colors.border
                }))
        },
        y4w7: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "HomePageFeaturedCollectionCard_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "CollectionType",
                    kind: "LinkedField",
                    name: "collection",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "logo",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "banner",
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
                        name: "verificationStatus",
                        storageKey: null
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "collection_url",
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "slug",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "isCategory",
                            storageKey: null
                        }]
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "GlobalCollectionCard_data"
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "collectionSubtitle",
                    storageKey: null
                }],
                type: "HomePageFeaturedSectionCollectionType",
                abstractKey: null,
                hash: "cbb5bec7a0ea367faf57fc1fcd94811c"
            };
            t.default = a
        }
    }
]);
//# sourceMappingURL=13dfdec8b04796b03cf1465f71ff88caa17e741f.68f735595ea1186df17f.js.map