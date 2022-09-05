_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [103], {
        "/Byz": function(e, n, l) {
            "use strict";
            l.r(n);
            var a = function() {
                var e = [{
                        defaultValue: 12,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    }, {
                        defaultValue: "SEVEN_DAY_VOLUME",
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    n = {
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
                    }, n];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "TopCollectionsListQuery",
                        selections: [{
                            args: [{
                                kind: "Variable",
                                name: "count",
                                variableName: "count"
                            }, {
                                kind: "Variable",
                                name: "cursor",
                                variableName: "cursor"
                            }, n],
                            kind: "FragmentSpread",
                            name: "TopCollectionsList_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "TopCollectionsListQuery",
                        selections: [{
                            alias: null,
                            args: l,
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
                                        name: "relayId",
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
                                    }, {
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
                            filters: ["sortBy"],
                            handle: "connection",
                            key: "TopCollectionsList_collections",
                            kind: "LinkedHandle",
                            name: "collections"
                        }]
                    },
                    params: {
                        cacheID: "4aab40c7739cf4b4a6d447bcfd20f642",
                        id: null,
                        metadata: {},
                        name: "TopCollectionsListQuery",
                        operationKind: "query",
                        text: "query TopCollectionsListQuery(\n  $count: Int = 12\n  $cursor: String\n  $sortBy: CollectionSort = SEVEN_DAY_VOLUME\n) {\n  ...TopCollectionsList_data_3m9EyQ\n}\n\nfragment CollectionsList_ListItem_data_3z3gbW on CollectionType {\n  relayId\n  ...GlobalCollectionCard_data_3z3gbW\n}\n\nfragment CollectionsList_data_3z3gbW on CollectionType {\n  relayId\n  ...CollectionsList_ListItem_data_3z3gbW\n}\n\nfragment GlobalCollectionCard_data_3z3gbW on CollectionType {\n  logo\n  banner\n  name\n  verificationStatus\n  ...collection_url\n}\n\nfragment TopCollectionsList_data_3m9EyQ on Query {\n  collections(sortBy: $sortBy, after: $cursor, first: $count) {\n    edges {\n      node {\n        ...CollectionsList_data_3z3gbW\n        logo\n        banner\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "afa70e3ef26a0e7b370a486bce60c3f0", n.default = a
        },
        "6Upm": function(e, n, l) {
            "use strict";
            l.r(n);
            l("mXGw");
            var a, t, i = l("aXrf"),
                o = l("LsOE"),
                r = l("NNy9"),
                s = l("Ax8a"),
                c = l("oYCi"),
                u = function(e) {
                    var n = e.dataKey,
                        t = Object(i.usePaginationFragment)(void 0 !== a ? a : a = l("XwgQ"), n),
                        u = t.data,
                        d = t.loadNext,
                        g = t.hasNext,
                        m = t.isLoadingNext;
                    return Object(c.jsx)(r.a, {
                        collections: u ? Object(o.c)(u.collections).filter((function(e) {
                            return Object(s.b)(e.logo, e.banner)
                        })) : void 0,
                        hasNext: g,
                        isLoadingNext: m,
                        loadNext: d
                    })
                },
                d = l("1gvz"),
                g = l("TGkK"),
                m = l("b7Z7"),
                y = l("JmDg"),
                p = l("SMcu"),
                b = l("0c5R"),
                f = l("dgii"),
                k = l("XHwO"),
                C = l("O4Bb"),
                _ = l("heV+"),
                x = l("+xY2"),
                h = l("UutA"),
                L = l("QrBS"),
                j = l("sX+s"),
                T = l("tiCW"),
                O = l("n0tG"),
                K = l("dAGg"),
                S = l("HSVd"),
                F = function(e) {
                    var n = e.tab;
                    return {
                        active: Object(K.useRouter)().query.tab === n,
                        href: "/explore-collections".concat(S.a.getMergedQueryString({
                            tab: n
                        }))
                    }
                },
                v = l("JiVo"),
                E = l("C/iq"),
                N = (Object(v.a)(E.h.map((function(e) {
                    return e.slug
                }))), [{
                    label: "Trending",
                    tab: void 0
                }, {
                    label: "Top",
                    tab: "top"
                }].concat(Object(v.a)(E.h.map((function(e) {
                    return {
                        label: e.name,
                        tab: e.slug
                    }
                }))))),
                V = l("D4YM"),
                I = function() {
                    var e = Object(f.a)("explore");
                    return Object(c.jsxs)(c.Fragment, {
                        children: [Object(c.jsx)(y.a, {
                            children: Object(c.jsxs)(L.a, {
                                justifyContent: "left",
                                marginTop: "62px",
                                children: [Object(c.jsx)(j.a, {
                                    lessThan: "sm",
                                    children: Object(c.jsx)(O.a.Display, {
                                        as: "h1",
                                        size: "medium",
                                        textAlign: "center",
                                        children: e("mobileTitle", "Explore collections")
                                    })
                                }), Object(c.jsx)(j.a, {
                                    greaterThanOrEqual: "sm",
                                    children: Object(c.jsx)(O.a.Display, {
                                        as: "h1",
                                        size: "large",
                                        textAlign: "center",
                                        children: e("desktopTitle", "Explore collections")
                                    })
                                })]
                            })
                        }), Object(c.jsxs)(y.a, {
                            overflow: "hidden",
                            padding: {
                                _: "0 0 0 16px",
                                sm: "0 16px",
                                xl: "0 32px",
                                xxl: "0 64px"
                            },
                            children: [Object(c.jsx)(z, {
                                children: N.map((function(e) {
                                    return Object(c.jsx)(A, {
                                        tab: e.tab,
                                        children: e.label
                                    }, e.label)
                                }))
                            }), Object(c.jsx)(w, {})]
                        })]
                    })
                },
                w = Object(h.d)(m.a).withConfig({
                    componentId: "sc-15fqy1p-0"
                })(["border-width:0.5px;border-style:solid;", " margin:0px -16px;", ""], (function(e) {
                    return Object(V.d)({
                        variants: {
                            light: {
                                borderColor: Object(x.c)(e.theme.colors.fog, .5)
                            },
                            dark: {
                                borderColor: Object(x.c)(e.theme.colors.oil, .5)
                            }
                        }
                    })
                }), Object(j.e)({
                    sm: Object(h.c)(["margin:unset;"])
                })),
                z = Object(h.d)(T.a).attrs({
                    direction: "horizontal"
                }).withConfig({
                    componentId: "sc-15fqy1p-1"
                })(["margin-top:48px;justify-content:left;gap:24px;", " &&&{padding-left:0px;}:hover{overflow:auto;}"], Object(j.e)({
                    lg: Object(h.c)(["gap:48px;"])
                })),
                A = function(e) {
                    var n = e.tab,
                        l = e.children,
                        a = F({
                            tab: n
                        }),
                        t = a.active,
                        i = a.href;
                    return Object(c.jsx)(P, {
                        active: t,
                        direction: "horizontal",
                        href: i,
                        scroll: !1,
                        children: Object(c.jsx)(T.a.Title, {
                            children: l
                        })
                    })
                },
                P = Object(h.d)(T.a.Item).withConfig({
                    componentId: "sc-15fqy1p-2"
                })(["display:flex;justify-content:center;height:100%;padding:12px 0px;", "{display:flex;align-items:center;justify-content:center;text-align:center;margin:0;flex:1;white-space:nowrap;}"], T.a.Title),
                Q = function(e) {
                    var n = e.variables,
                        l = e.data,
                        a = e.tab,
                        t = Object(f.a)("explore"),
                        i = n.isCategory;
                    return Object(b.a)((function() {
                        Object(C.p)()
                    })), Object(c.jsxs)(g.a, {
                        hideFooter: !0,
                        title: Object(p.b)(t("pageTitle", "Explore collections")),
                        children: [Object(c.jsx)(I, {}), Object(c.jsx)(y.a, {
                            children: Object(c.jsx)(m.a, {
                                marginTop: "16px",
                                children: Object(c.jsx)(k.a, {
                                    eventParams: {
                                        tab: a
                                    },
                                    eventSource: "ExplorePage",
                                    children: i ? Object(c.jsx)(d.a, {
                                        dataKey: l
                                    }) : Object(c.jsx)(u, {
                                        dataKey: l
                                    })
                                })
                            })
                        })]
                    })
                };
            Q.query = void 0 !== t ? t : t = l("sTKN"), Q.getInitialProps = _.a.nextParser({
                tab: _.a.Optional(_.a.string)
            }, (function(e) {
                var n = e.tab;
                return {
                    variables: {
                        categories: n && "top" !== n ? [n] : void 0,
                        isCategory: "top" !== n
                    },
                    tab: n
                }
            }));
            n.default = Q
        },
        HzIA: function(e, n, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/explore-collections", function() {
                return l("6Upm")
            }])
        },
        XwgQ: function(e, n, l) {
            "use strict";
            l.r(n);
            var a = function() {
                var e = ["collections"];
                return {
                    argumentDefinitions: [{
                        defaultValue: 12,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    }, {
                        defaultValue: "SEVEN_DAY_VOLUME",
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
                            operation: l("/Byz")
                        }
                    },
                    name: "TopCollectionsList_data",
                    selections: [{
                        alias: "collections",
                        args: [{
                            kind: "Variable",
                            name: "sortBy",
                            variableName: "sortBy"
                        }],
                        concreteType: "CollectionTypeConnection",
                        kind: "LinkedField",
                        name: "__TopCollectionsList_collections_connection",
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
                                    name: "__typename",
                                    storageKey: null
                                }, {
                                    args: [{
                                        kind: "Literal",
                                        name: "showContextMenu",
                                        value: !1
                                    }],
                                    kind: "FragmentSpread",
                                    name: "CollectionsList_data"
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
            a.hash = "afa70e3ef26a0e7b370a486bce60c3f0", n.default = a
        },
        sTKN: function(e, n, l) {
            "use strict";
            l.r(n);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "categories"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "isCategory"
                    }],
                    n = {
                        kind: "Variable",
                        name: "categories",
                        variableName: "categories"
                    },
                    l = {
                        kind: "Literal",
                        name: "first",
                        value: 12
                    },
                    a = [n, l],
                    t = [{
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
                                name: "relayId",
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
                            }, {
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
                    i = [l, {
                        kind: "Literal",
                        name: "sortBy",
                        value: "SEVEN_DAY_VOLUME"
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "ExplorePageQuery",
                        selections: [{
                            condition: "isCategory",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [{
                                args: [n],
                                kind: "FragmentSpread",
                                name: "TrendingCollectionsList_data"
                            }]
                        }, {
                            condition: "isCategory",
                            kind: "Condition",
                            passingValue: !1,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "TopCollectionsList_data"
                            }]
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "ExplorePageQuery",
                        selections: [{
                            condition: "isCategory",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [{
                                alias: null,
                                args: a,
                                concreteType: "CollectionTypeConnection",
                                kind: "LinkedField",
                                name: "trendingCollections",
                                plural: !1,
                                selections: t,
                                storageKey: null
                            }, {
                                alias: null,
                                args: a,
                                filters: ["categories", "chains"],
                                handle: "connection",
                                key: "TrendingCollectionsList_trendingCollections",
                                kind: "LinkedHandle",
                                name: "trendingCollections"
                            }]
                        }, {
                            condition: "isCategory",
                            kind: "Condition",
                            passingValue: !1,
                            selections: [{
                                alias: null,
                                args: i,
                                concreteType: "CollectionTypeConnection",
                                kind: "LinkedField",
                                name: "collections",
                                plural: !1,
                                selections: t,
                                storageKey: 'collections(first:12,sortBy:"SEVEN_DAY_VOLUME")'
                            }, {
                                alias: null,
                                args: i,
                                filters: ["sortBy"],
                                handle: "connection",
                                key: "TopCollectionsList_collections",
                                kind: "LinkedHandle",
                                name: "collections"
                            }]
                        }]
                    },
                    params: {
                        cacheID: "909a4c80f0af4c3d3c8a9fc8922768c3",
                        id: null,
                        metadata: {},
                        name: "ExplorePageQuery",
                        operationKind: "query",
                        text: "query ExplorePageQuery(\n  $categories: [CategorySlug!]\n  $isCategory: Boolean!\n) {\n  ...TrendingCollectionsList_data_34SC5f @include(if: $isCategory)\n  ...TopCollectionsList_data @skip(if: $isCategory)\n}\n\nfragment CollectionsList_ListItem_data_3z3gbW on CollectionType {\n  relayId\n  ...GlobalCollectionCard_data_3z3gbW\n}\n\nfragment CollectionsList_data_3z3gbW on CollectionType {\n  relayId\n  ...CollectionsList_ListItem_data_3z3gbW\n}\n\nfragment GlobalCollectionCard_data_3z3gbW on CollectionType {\n  logo\n  banner\n  name\n  verificationStatus\n  ...collection_url\n}\n\nfragment TopCollectionsList_data on Query {\n  collections(sortBy: SEVEN_DAY_VOLUME, first: 12) {\n    edges {\n      node {\n        ...CollectionsList_data_3z3gbW\n        logo\n        banner\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment TrendingCollectionsList_data_34SC5f on Query {\n  trendingCollections(categories: $categories, first: 12) {\n    edges {\n      node {\n        ...CollectionsList_data_3z3gbW\n        logo\n        banner\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "b5c749a8bfb573f1359e9eebe8abf031", n.default = a
        }
    },
    [
        ["HzIA", 1, 0, 6, 3, 5, 7, 9, 2, 4, 8, 11, 23, 36]
    ]
]);
//# sourceMappingURL=explore-collections-87e0d8d77efb5748d03b.js.map