(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [40], {
        "+YaZ": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return O
            }));
            n("mXGw");
            var a = n("8Jek"),
                r = n.n(a),
                i = n("UutA"),
                l = n("ap0L"),
                o = n("m5he"),
                c = n("qymy"),
                s = n("Q5Gx"),
                u = n("TGkK"),
                d = n("QrBS"),
                b = n("lqpq"),
                m = n("3FBR"),
                p = n("8BrW"),
                h = n("7v7j"),
                j = n("u6YR"),
                f = n("K7R9"),
                g = n("oYCi"),
                O = function(e) {
                    var t = e.breadcrumbLinks,
                        n = e.children,
                        a = e.className,
                        i = e.containerClassName,
                        s = e.fullWidth,
                        f = e.title,
                        O = e.subtitle;
                    return Object(g.jsx)(u.a, {
                        hideFooter: !0,
                        children: Object(g.jsx)(y, {
                            children: Object(g.jsxs)("section", {
                                className: r()("CollectionManager--main", a),
                                children: [t && Object(g.jsxs)("div", {
                                    className: "CollectionManager--topbar",
                                    children: [t.map((function(e) {
                                        return Object(g.jsxs)(d.a, {
                                            children: [e.href ? Object(g.jsx)(c.a, {
                                                className: "CollectionManager--breadcrumb-link",
                                                href: e.href,
                                                children: Object(g.jsx)("span", {
                                                    children: Object(h.m)(e.label, 15)
                                                })
                                            }) : Object(g.jsx)("span", {
                                                className: "CollectionManager--breadcrumb-current",
                                                children: Object(h.m)(e.label, 15)
                                            }), (f || e.href) && Object(g.jsx)(p.a, {
                                                children: Object(g.jsx)(o.a, {
                                                    color: "gray",
                                                    size: 12,
                                                    value: "chevron_right"
                                                })
                                            })]
                                        }, e.label)
                                    })), f && Object(g.jsx)("span", {
                                        className: "CollectionManager--breadcrumb-current",
                                        children: Object(h.m)(f, 15)
                                    })]
                                }), Object(g.jsxs)(l.a, {
                                    className: Object(j.a)("CollectionManager", {
                                        container: !0,
                                        "narrow-container": !s
                                    }, i),
                                    children: [(f || O) && Object(g.jsxs)(b.a, {
                                        as: "header",
                                        children: [f && Object(g.jsx)(m.a, {
                                            as: "h1",
                                            marginBottom: "16px",
                                            variant: "h2",
                                            children: f
                                        }), O ? Object(g.jsx)(m.a, {
                                            as: "span",
                                            marginBottom: "16px",
                                            children: O
                                        }) : null]
                                    }), n]
                                })]
                            })
                        })
                    })
                },
                y = i.d.div.withConfig({
                    componentId: "sc-11rlifb-0"
                })(["", "{padding:24px;}.CollectionManager--sidebar-item{align-items:center;display:flex;justify-content:center;color:", ";padding:12px 16px;&:hover{background-color:", ";color:", ";font-weight:500;}.CollectionManager--sidebar-item-text{display:none;}", "}.CollectionManager--main{overflow:auto;display:flex;flex-direction:column;align-items:center;}.CollectionManager--topbar{align-items:center;background-color:", ";border-bottom:1px solid ", ";display:flex;align-items:center;height:", ";padding:0 8px;width:100%;z-index:4;.CollectionManager--breadcrumb-link{margin:0 8px;color:", ";font-size:11px;&:hover{text-decoration:underline;}}.CollectionManager--breadcrumb-current{margin:0 8px;color:", ";font-size:11px;}", "}.CollectionManager--container{&.CollectionManager--container-with-topbar{padding:", " 16px;&.container{padding-left:0;padding-right:0;}}&.CollectionManager--narrow-container{width:646px;max-width:100%;}width:1280px;max-width:100%;}.CollectionManager--title-badge{color:", ";position:relative;top:-10px;font-size:16px;left:8px;}"], l.a, (function(e) {
                    return e.theme.colors.withOpacity.text.body.heavy
                }), (function(e) {
                    return e.theme.colors.hover
                }), (function(e) {
                    return e.theme.colors.text.body
                }), Object(s.e)({
                    medium: Object(i.c)(["justify-content:initial;.CollectionManager--sidebar-item-text{display:initial;margin-left:8px;}"])
                }), (function(e) {
                    return e.theme.colors.surface
                }), (function(e) {
                    return e.theme.colors.border
                }), f.a, (function(e) {
                    return e.theme.colors.gray
                }), (function(e) {
                    return e.theme.colors.text.body
                }), Object(s.e)({
                    tabletS: Object(i.c)([".CollectionManager--breadcrumb-link,.CollectionManager--breadcrumb-current{font-size:14px;}"])
                }), f.a, (function(e) {
                    return e.theme.colors.seaHorse
                }))
        },
        "9Kd/": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var a = n("m6w3"),
                r = (n("mXGw"), n("vkv6")),
                i = n("06eW"),
                l = n("gP3Z"),
                o = n("oYCi");

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = function(e) {
                    return {
                        label: e.displayName,
                        value: e.identifier,
                        avatar: {
                            src: e.logo,
                            outline: 0,
                            size: 32,
                            alt: "".concat(e.displayName, " chain image")
                        }
                    }
                },
                d = function(e) {
                    var t = e.chain,
                        n = e.disabled,
                        a = e.onChange,
                        c = e.id,
                        d = e.name,
                        b = Object(l.a)(),
                        m = b.chains,
                        p = b.isChainSupportingMintingTool,
                        h = b.getChain,
                        j = null !== t && void 0 !== t ? t : m[0],
                        f = h(j),
                        g = u(f);
                    return Object(o.jsx)(i.a, {
                        clearable: !1,
                        disabled: n,
                        excludeSelectedOption: !0,
                        id: c,
                        name: d,
                        options: m.map((function(e) {
                            return s(s({}, u(h(e))), {}, {
                                disabled: !p(e)
                            })
                        })),
                        readOnly: !0,
                        startEnhancer: Object(o.jsx)(r.b, s(s({}, g.avatar), {}, {
                            alt: "".concat(g.label, " chain image")
                        })),
                        value: j,
                        onSelect: function(e) {
                            return null === a || void 0 === a ? void 0 : a(null === e || void 0 === e ? void 0 : e.value)
                        }
                    })
                }
        },
        C4qS: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "assetId"
                    }],
                    t = [{
                        alias: null,
                        args: null,
                        concreteType: "AssetMutationType",
                        kind: "LinkedField",
                        name: "assets",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: [{
                                kind: "Variable",
                                name: "asset",
                                variableName: "assetId"
                            }],
                            kind: "ScalarField",
                            name: "freezeMetadata",
                            storageKey: null
                        }],
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "FreezeAssetMetadataModalContentMutation",
                        selections: t,
                        type: "Mutation",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "FreezeAssetMetadataModalContentMutation",
                        selections: t
                    },
                    params: {
                        cacheID: "c17e48a69cffadeaa077e211ce314443",
                        id: null,
                        metadata: {},
                        name: "FreezeAssetMetadataModalContentMutation",
                        operationKind: "mutation",
                        text: "mutation FreezeAssetMetadataModalContentMutation(\n  $assetId: AssetRelayID!\n) {\n  assets {\n    freezeMetadata(asset: $assetId)\n  }\n}\n"
                    }
                }
            }();
            a.hash = "92fa2171b476eeff0e80da9f0b281712", t.default = a
        },
        EFOM: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            n("mXGw");
            var a = n("QrBS"),
                r = n("3FBR"),
                i = n("g8rX"),
                l = n("ZwbU"),
                o = n("oYCi"),
                c = function(e) {
                    var t = e.isOpen,
                        n = e.isCollection,
                        c = e.status,
                        s = e.onNevermind,
                        u = e.onDelete;
                    return Object(o.jsxs)(l.b, {
                        isOpen: t,
                        onClose: s,
                        children: [Object(o.jsx)(l.b.Header, {
                            children: Object(o.jsx)(l.b.Title, {
                                children: "Delete ".concat(n ? "Collection" : "Item")
                            })
                        }), Object(o.jsx)(l.b.Body, {
                            children: "wait" === c ? Object(o.jsx)(a.a, {
                                justifyContent: "center",
                                width: "100%",
                                children: Object(o.jsx)(i.a, {
                                    size: "large"
                                })
                            }) : Object(o.jsx)(r.a, {
                                textAlign: "center",
                                variant: "small",
                                children: n ? "Are you sure you want to delete this collection and hide all of its items? This can only be done if you own all items in the collection." : "Are you sure you want to delete this item? This can only be done if you own all copies in circulation."
                            })
                        }), "wait" !== c ? Object(o.jsxs)(l.b.Footer, {
                            children: [Object(o.jsx)(l.b.Footer.Button, {
                                variant: "secondary",
                                onClick: s,
                                children: "Never mind"
                            }), Object(o.jsx)(l.b.Footer.Button, {
                                onClick: u,
                                children: "Delete ".concat(n ? "collection" : "item")
                            })]
                        }) : null]
                    })
                }
        },
        Fwaq: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            }));
            var a, r = n("m6w3"),
                i = n("uEoR"),
                l = n("qd51"),
                o = n("oA/F"),
                c = n("/dBk"),
                s = n.n(c),
                u = n("mXGw"),
                d = n("vyUL"),
                b = n("vkv6"),
                m = n("LsOE"),
                p = n("oYCi"),
                h = ["value", "editor", "placeholder"];

            function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var g = function(e) {
                var t = e.value,
                    r = e.editor,
                    c = e.placeholder,
                    j = Object(o.a)(e, h),
                    g = Object(u.useCallback)(function() {
                        var e = Object(l.a)(s.a.mark((function e(t) {
                            var l, o, c;
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(m.a)(void 0 !== a ? a : a = n("qS/w"), {
                                            editor: r,
                                            query: t
                                        });
                                    case 2:
                                        return l = e.sent, o = Object(i.a)(l, 1), c = o[0].collections, e.abrupt("return", Object(m.c)(c).map((function(e) {
                                            var t = e.name,
                                                n = e.slug,
                                                a = e.imageUrl;
                                            return {
                                                label: t,
                                                value: n,
                                                avatar: a ? {
                                                    src: a,
                                                    outline: 0,
                                                    size: 32
                                                } : void 0,
                                                defaultMintableAssetContract: e.defaultMintableAssetContract
                                            }
                                        })));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [r]);
                return Object(p.jsx)(d.a, f({
                    clearable: !1,
                    loadingConfiguration: {
                        avatar: !0,
                        description: !0
                    },
                    maxHeight: "295px",
                    placeholder: null !== c && void 0 !== c ? c : "Select collection",
                    search: g,
                    startEnhancer: t ? Object(p.jsx)(b.b, f(f({}, t.avatar), {}, {
                        outline: 0,
                        size: 24
                    })) : null,
                    value: null === t || void 0 === t ? void 0 : t.label
                }, j))
            }
        },
        UMgi: function(e, t, n) {
            "use strict";
            var a = n("uEoR"),
                r = (n("wcNg"), n("mXGw"), n("UutA")),
                i = n("4u0K"),
                l = n("7v7j"),
                o = n("oYCi");
            t.a = function(e) {
                var t, n = e.className,
                    r = null === (t = e.error.res) || void 0 === t ? void 0 : t.errors;
                return r ? Object(o.jsx)(c, {
                    className: n,
                    children: Object(i.d)(r, (function(e) {
                        try {
                            return Object.entries(JSON.parse(e.message)).map((function(e) {
                                var t = Object(a.a)(e, 2),
                                    n = t[0],
                                    r = t[1];
                                return "".concat(Object(l.c)(n), ": ").concat(r.join(" "))
                            }))
                        } catch (t) {
                            return [e.message]
                        }
                    })).map((function(e) {
                        return Object(o.jsx)("li", {
                            children: e
                        }, e)
                    }))
                }) : null
            };
            var c = r.d.ul.withConfig({
                componentId: "sc-dzurfb-0"
            })(["color:red;display:flex;flex-direction:column;margin:0;"])
        },
        Z0gy: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            n("mXGw");
            var a = n("UutA"),
                r = n("LjoF"),
                i = n("7v7j"),
                l = n("oYCi"),
                o = function(e) {
                    var t = e.className,
                        n = e.type,
                        a = e.rankingMode,
                        o = e.value,
                        s = e.maxValue;
                    return Object(l.jsxs)(c, {
                        className: t,
                        children: [Object(l.jsxs)("div", {
                            className: "NumericTrait--label",
                            children: [Object(l.jsx)("div", {
                                className: "NumericTrait--type",
                                children: Object(i.j)(n)
                            }), Object(l.jsxs)("div", {
                                className: "NumericTrait--value",
                                children: [Object(r.f)(o), s && " of ".concat(Object(r.f)(s))]
                            })]
                        }), s && a ? Object(l.jsx)("div", {
                            className: "NumericTrait--bar",
                            children: Object(l.jsx)("div", {
                                className: "NumericTrait--bar-fill",
                                style: {
                                    width: "".concat(Object(r.d)(o).times(100).div(Object(r.d)(s)).integerValue(), "%")
                                }
                            })
                        }) : null]
                    })
                },
                c = a.d.div.withConfig({
                    componentId: "sc-1vpqa3a-0"
                })(["cursor:pointer;.NumericTrait--label{display:flex;font-weight:500;justify-content:space-between;.NumericTrait--type{color:", ";}.NumericTrait--value{color:", ";min-width:fit-content;padding-left:4px;}}.NumericTrait--bar{background-color:", ";border:1px solid ", ";border-radius:14px;height:14px;margin-top:4px;overflow:hidden;.NumericTrait--bar-fill{background-color:", ";height:100%;}}"], (function(e) {
                    return e.theme.colors.text.subtle
                }), (function(e) {
                    return e.theme.colors.text.subtle
                }), (function(e) {
                    return e.theme.colors.surface
                }), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.colors.primary
                }))
        },
        ap0L: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return l
            }));
            var a = n("UutA"),
                r = n("Q5Gx"),
                i = a.d.div.withConfig({
                    componentId: "sc-lfnuca-0"
                })(["margin:0 auto;max-width:1280px;"]),
                l = Object(a.d)(i).withConfig({
                    componentId: "sc-lfnuca-1"
                })(["width:90%;", ""], Object(r.e)({
                    small: Object(a.c)(["width:85%;"]),
                    large: Object(a.c)(["width:80%;"])
                }))
        },
        bwIB: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "assetId"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "jobId"
                    }],
                    t = [{
                        kind: "Variable",
                        name: "asset",
                        variableName: "assetId"
                    }, {
                        kind: "Variable",
                        name: "job",
                        variableName: "jobId"
                    }],
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "uri",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    },
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "value",
                        storageKey: null
                    },
                    i = [r];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "FreezeAssetMetadataModalContentActionQuery",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BlockchainType",
                            kind: "LinkedField",
                            name: "blockchain",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: t,
                                concreteType: "AssetFreezeMetadataActionType",
                                kind: "LinkedField",
                                name: "freezeAssetMetadataAction",
                                plural: !1,
                                selections: [n, {
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "AssetFreezeMetadataAction_data"
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
                        name: "FreezeAssetMetadataModalContentActionQuery",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BlockchainType",
                            kind: "LinkedField",
                            name: "blockchain",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: t,
                                concreteType: "AssetFreezeMetadataActionType",
                                kind: "LinkedField",
                                name: "freezeAssetMetadataAction",
                                plural: !1,
                                selections: [a, {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "method",
                                    plural: !1,
                                    selections: [a, {
                                        kind: "TypeDiscriminator",
                                        abstractKey: "__isTransactionMethodType"
                                    }, {
                                        kind: "InlineFragment",
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
                                            name: "chainIdentifier",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AddressDataType",
                                            kind: "LinkedField",
                                            name: "source",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AddressDataType",
                                            kind: "LinkedField",
                                            name: "destination",
                                            plural: !1,
                                            selections: i,
                                            storageKey: null
                                        }, r, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "data",
                                            storageKey: null
                                        }],
                                        type: "TransactionSubmissionDataType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "clientMessage",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "clientSignatureStandard",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "functionSignature",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "verifyingContract",
                                            storageKey: null
                                        }],
                                        type: "MetaTransactionDataType",
                                        abstractKey: null
                                    }],
                                    storageKey: null
                                }, n],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "be2b52ee65e5e3bf08a7dcb09764255c",
                        id: null,
                        metadata: {},
                        name: "FreezeAssetMetadataModalContentActionQuery",
                        operationKind: "query",
                        text: "query FreezeAssetMetadataModalContentActionQuery(\n  $assetId: AssetRelayID!\n  $jobId: JobScalar!\n) {\n  blockchain {\n    freezeAssetMetadataAction(asset: $assetId, job: $jobId) {\n      ...AssetFreezeMetadataAction_data\n      uri\n    }\n  }\n}\n\nfragment AssetFreezeMetadataAction_data on AssetFreezeMetadataActionType {\n  __typename\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      chain {\n        identifier\n      }\n    }\n  }\n  ...useHandleBlockchainActions_freeze_asset_metadata\n}\n\nfragment useHandleBlockchainActions_freeze_asset_metadata on AssetFreezeMetadataActionType {\n  method {\n    __typename\n    ...useHandleBlockchainActions_transaction_method\n  }\n}\n\nfragment useHandleBlockchainActions_transaction_method on TransactionMethodType {\n  __isTransactionMethodType: __typename\n  __typename\n  ... on TransactionSubmissionDataType {\n    ...useTransaction_transaction\n  }\n  ... on MetaTransactionDataType {\n    ...useTransaction_meta_transaction\n  }\n}\n\nfragment useTransaction_meta_transaction on MetaTransactionDataType {\n  clientMessage\n  clientSignatureStandard\n  functionSignature\n  verifyingContract\n}\n\nfragment useTransaction_transaction on TransactionSubmissionDataType {\n  chainIdentifier\n  source {\n    value\n  }\n  destination {\n    value\n  }\n  value\n  data\n}\n"
                    }
                }
            }();
            a.hash = "39f42b033ff96afca7b6db39736e42d3", t.default = a
        },
        dFFh: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            }));
            var a = n("m6w3"),
                r = (n("mXGw"), n("UutA")),
                i = n("j/Wi"),
                l = n("m5he"),
                o = n("qymy"),
                c = n("oYCi");

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = Object(r.d)(l.a).withConfig({
                    componentId: "sc-ydme6o-0"
                })(["color:", ";margin-left:4px;margin-bottom:2px;vertical-align:middle;&:hover{color:", ";}"], (function(e) {
                    return e.theme.colors.text.subtle
                }), (function(e) {
                    return e.theme.colors.text.body
                })),
                b = function(e) {
                    var t = e.name,
                        n = e.tooltipProps,
                        a = e.iconProps;
                    return Object(c.jsx)(i.b, u(u({}, n), {}, {
                        content: Object(c.jsxs)(c.Fragment, {
                            children: [Object(c.jsxs)("div", {
                                children: ["Setting your ", t, " as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing OpenSea."]
                            }), Object(c.jsx)(o.a, {
                                href: "https://support.opensea.io/hc/en-us/articles/1500010882222-Is-explicit-sensitive-content-allowed-on-OpenSea-",
                                children: "Learn more about explicit content at OpenSea here."
                            })]
                        }),
                        interactive: !0,
                        children: Object(c.jsx)(d, u({
                            cursor: "pointer",
                            size: 20,
                            value: "info",
                            variant: "outlined"
                        }, a))
                    }))
                }
        },
        dGyL: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n("UutA"),
                r = n("X9C2"),
                i = n("D4YM"),
                l = n("y7Mw"),
                o = a.d.textarea.withConfig({
                    componentId: "sc-ehtjq3-0"
                })(["width:100%;height:auto;padding:12px;resize:vertical;border:2px solid ", ";background-color:transparent;border-radius:", ";:focus{", ";outline:none;}:hover{", ";", "}&[disabled]{", ";}", " ", ""], (function(e) {
                    return e.theme.colors.inputBorder
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), l.d, l.e, (function(e) {
                    return Object(i.d)({
                        variants: {
                            dark: {
                                borderColor: e.theme.colors.gray
                            }
                        }
                    })
                }), l.b, (function(e) {
                    return e.error && !e.disabled && l.c
                }), r.b)
        },
        i0w7: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return k
            }));
            var a = n("mXGw"),
                r = n.n(a),
                i = n("8Jek"),
                l = n.n(i),
                o = n("UutA"),
                c = n("m5he"),
                s = n("m6w3"),
                u = n("oA/F"),
                d = n("t3V9"),
                b = n("u6YR"),
                m = n("oYCi"),
                p = ["children", "className", "isDisabled", "onClick"],
                h = ["children", "className"];

            function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        Object(s.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var g = function(e) {
                    var t = e.children,
                        n = e.className,
                        a = e.isDisabled,
                        r = e.onClick,
                        i = Object(u.a)(e, p);
                    return Object(m.jsx)(d.a, f(f({
                        className: Object(b.a)("BasePanel--header", {
                            isDisabled: a
                        }, l()("BasePanel--header", n)),
                        onClick: r
                    }, i), {}, {
                        children: t
                    }))
                },
                O = function(e) {
                    var t = e.children,
                        n = e.className,
                        a = Object(u.a)(e, h);
                    return Object(m.jsx)("div", f(f({
                        className: l()("BasePanel--body", n)
                    }, a), {}, {
                        children: t
                    }))
                },
                y = function(e) {
                    var t = e.children,
                        n = e.className;
                    return Object(m.jsx)("div", {
                        className: l()("BasePanel--footer", n),
                        children: t
                    })
                },
                v = Object(a.forwardRef)((function(e, t) {
                    var n = e.className,
                        a = e.children;
                    return Object(m.jsx)(x, {
                        className: n,
                        ref: t,
                        children: a({
                            Header: g,
                            Body: O,
                            Footer: y
                        })
                    })
                })),
                x = o.d.div.withConfig({
                    componentId: "sc-1d6z6bk-0"
                })(["border-radius:", ";border:1px solid ", ";border-top:none;color:", ";background-color:", ";overflow:hidden;.BasePanel--header{width:100%;align-items:center;border-radius:", ";border-top:1px solid ", ";cursor:pointer;display:flex;font-size:16px;font-weight:600;padding:20px;user-select:none;background-color:", ";&.BasePanel--header--isDisabled{cursor:initial;color:", ";}}.BasePanel--body{border-top:1px solid ", ";color:", ";background-color:", ";}.BasePanel--footer{border-top:1px solid ", ";color:", ";background-color:", ";}"], (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.colors.text.heading
                }), (function(e) {
                    return e.theme.colors.header
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.colors.header
                }), (function(e) {
                    return e.theme.colors.text.subtle
                }), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.colors.text.body
                }), (function(e) {
                    return e.theme.colors.panel
                }), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.colors.text.body
                }), (function(e) {
                    return e.theme.colors.header
                })),
                w = n("OsKK"),
                k = Object(a.forwardRef)((function(e, t) {
                    var n = e.bodyClassName,
                        i = e.children,
                        o = e.className,
                        s = e.headerClassName,
                        u = e.footerClassName,
                        d = e.FooterButton,
                        p = e.icon,
                        h = e.iconTheme,
                        j = e.iconColor,
                        f = e.id,
                        g = e.isContentPadded,
                        O = void 0 === g || g,
                        y = e.maxHeight,
                        x = e.mode,
                        k = void 0 === x ? "start-closed" : x,
                        C = e.open,
                        T = e.onClick,
                        A = e.title,
                        P = e.variant,
                        S = void 0 === P ? "default" : P,
                        N = e.unmountChildrenOnClose,
                        M = Object(a.useState)(0),
                        L = M[0],
                        z = M[1],
                        D = Object(a.useState)((function() {
                            return !!r.a.Children.count(i) && ("start-open" === k || "always-open" === k)
                        })),
                        K = D[0],
                        E = D[1],
                        R = !r.a.Children.count(i),
                        V = "controlled" === k,
                        I = V ? C : K,
                        B = Object(a.useRef)(null),
                        _ = function() {
                            V ? null === T || void 0 === T || T(!C) : r.a.Children.count(i) && "always-open" !== k && E(!K)
                        };
                    Object(a.useEffect)((function() {
                        var e;
                        return L && (e = window.setTimeout((function() {
                                z(void 0)
                            }), 100)),
                            function() {
                                e && clearTimeout(e)
                            }
                    }), [L]), Object(a.useEffect)((function() {
                        var e;
                        z(null === (e = B.current) || void 0 === e ? void 0 : e.getBoundingClientRect().height)
                    }), [K]);
                    var q = "Header ".concat(f),
                        U = "Body ".concat(f);
                    return Object(m.jsx)(w.a, {
                        children: function(e) {
                            var a = e.isFramed;
                            return Object(m.jsx)(F, {
                                className: Object(b.a)("Panel", {
                                    alwaysOpen: "always-open" === k,
                                    isOpen: I,
                                    isClosed: !I,
                                    isFramed: a,
                                    warning: "warning" === S
                                }, o),
                                "data-testid": "Panel",
                                ref: t,
                                children: Object(m.jsx)(v, {
                                    className: "Panel--panel",
                                    children: function(e) {
                                        var t = e.Header,
                                            a = e.Body,
                                            r = e.Footer;
                                        return Object(m.jsxs)(m.Fragment, {
                                            children: [Object(m.jsxs)(t, {
                                                "aria-controls": U,
                                                "aria-expanded": I ? "true" : "false",
                                                className: l()("Panel--header", s),
                                                id: q,
                                                isDisabled: R,
                                                onClick: _,
                                                children: [p && Object(m.jsx)(c.a, {
                                                    "aria-hidden": "true",
                                                    className: "Panel--icon",
                                                    color: j,
                                                    value: p,
                                                    variant: h
                                                }), "string" === typeof A ? Object(m.jsx)("span", {
                                                    children: A
                                                }) : A, Object(m.jsx)(c.a, {
                                                    "aria-hidden": "true",
                                                    className: Object(b.a)("Panel", {
                                                        toggle: !0,
                                                        isEnabled: !R
                                                    }),
                                                    value: I ? "expand_less" : "expand_more",
                                                    variant: h
                                                })]
                                            }), Object(m.jsx)(a, {
                                                "aria-labelledby": q,
                                                className: Object(b.a)("Panel", {
                                                    body: !0,
                                                    "body-warning": "warning" === S,
                                                    "body-is-closed": !I
                                                }),
                                                id: U,
                                                role: "region",
                                                children: Object(m.jsx)("div", {
                                                    className: "Panel--content-container",
                                                    ref: B,
                                                    style: {
                                                        height: I ? L || "initial" : 0,
                                                        maxHeight: y,
                                                        overflow: y ? "auto" : void 0
                                                    },
                                                    children: Object(m.jsx)("div", {
                                                        className: Object(b.a)("Panel", {
                                                            isContentPadded: O
                                                        }, n),
                                                        children: N && !I ? null : i
                                                    })
                                                })
                                            }), I && d && Object(m.jsx)(r, {
                                                className: l()("Panel--footer", u),
                                                children: d
                                            })]
                                        })
                                    }
                                })
                            })
                        }
                    })
                })),
                F = o.d.div.withConfig({
                    componentId: "sc-1uztusg-0"
                })(["&.Panel--isOpen{.Panel--content-container{overflow:visible;}}&.Panel--isClosed{.Panel--header{margin-bottom:2px;}.Panel--body{border:none;&.Panel--body-is-closed{display:none;}}}&.Panel--isFramed{.Panel--panel,.Panel--header,.Panel--body{border-radius:0;}.Panel--panel{border-top:none;border-left:none;border-right:none;margin-bottom:-1px;margin-top:1px;}.Panel--header{border:0;margin:0;}.Panel--body{border-left:0;border-right:0;}}.Panel--icon{margin-right:10px;}.Panel--toggle{margin-left:auto;color:", ";}.Panel--header{&:hover{.Panel--toggle.Panel--isEnabled{color:", ";}}.Panel--header-text{display:flex;align-items:center;}}.Panel--content-container{overflow:hidden;transition:height ", "ms;}.Panel--isContentPadded{padding:20px;border-bottom-left-radius:", ";border-bottom-right-radius:", ";}&.Panel--alwaysOpen{.Panel--header{cursor:initial;.Panel--toggle{display:none;}}}&.Panel--warning{border-radius:", ";.Panel--panel{border-bottom:none;}&.Panel--isClosed{border-bottom:1px solid ", ";.Panel--body-warning{border:none;}.Panel--header{border-radius:", ";}}.Panel--body-warning{background-color:", ";border:1px solid ", ";}.Panel--header{background-color:", ";border-color:", ";border-radius:inherit inherit 0px 0px;margin-bottom:0px;padding:20px 15px;}}"], (function(e) {
                    return e.theme.colors.withOpacity.text.heading.medium
                }), (function(e) {
                    return e.theme.colors.text.heading
                }), 100, (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.colors.warning
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.colors.withOpacity.warning.veryLight
                }), (function(e) {
                    return e.theme.colors.warning
                }), (function(e) {
                    return e.theme.colors.withOpacity.warning.veryLight
                }), (function(e) {
                    return e.theme.colors.warning
                }))
        },
        jOHK: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return ut
            }));
            var a, r, i = n("qd51"),
                l = n("m6w3"),
                o = n("uEoR"),
                c = n("/dBk"),
                s = n.n(c),
                u = n("mXGw"),
                d = n.n(u),
                b = n("9va6"),
                m = n.n(b),
                p = n("aXrf"),
                h = n("O+LC"),
                j = n("8EQ0"),
                f = n("UutA"),
                g = n("JHWp"),
                O = n("PP1p"),
                y = n("3FBR"),
                v = n("ZwbU"),
                x = n("6Ojl"),
                w = n("h64z"),
                k = n("DWpj"),
                F = n("Ujrs"),
                C = n("LsOE"),
                T = n("Ot2x"),
                A = n("WakB"),
                P = n("oYCi"),
                S = function(e) {
                    var t = e.assetId,
                        l = Object(x.b)(),
                        c = l.onReplace,
                        d = l.onPrevious,
                        b = Object(w.a)().mutate,
                        m = Object(u.useState)(),
                        p = m[0],
                        h = m[1],
                        j = Object(u.useState)(),
                        f = j[0],
                        S = j[1];
                    Object(u.useEffect)((function() {
                        (function() {
                            var e = Object(i.a)(s.a.mark((function e(t) {
                                var r;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, b(void 0 !== a ? a : a = n("C4qS"), {
                                                assetId: t
                                            });
                                        case 2:
                                            r = e.sent, h(r.assets.freezeMetadata);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        })()(t), Object(k.E)({
                            assetId: t
                        })
                    }), [t, b]), Object(g.a)((function() {
                        return Object(T.b)({
                            delay: 1e3,
                            fn: function() {
                                var e = Object(i.a)(s.a.mark((function e() {
                                    var a, i, l;
                                    return s.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return Object(F.b)(), e.prev = 1, e.next = 4, Object(C.a)(void 0 !== r ? r : r = n("bwIB"), {
                                                    assetId: t,
                                                    jobId: null !== p && void 0 !== p ? p : ""
                                                });
                                            case 4:
                                                if (a = e.sent, i = Object(o.a)(a, 1), !(l = i[0]).blockchain.freezeAssetMetadataAction.uri) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return S(l.blockchain.freezeAssetMetadataAction), e.abrupt("return", !0);
                                            case 10:
                                                return e.abrupt("return", void 0);
                                            case 13:
                                                return e.prev = 13, e.t0 = e.catch(1), e.abrupt("return", void 0);
                                            case 16:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [1, 13]
                                    ])
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }).cancel
                    }), [p]);
                    var N = f;
                    return Object(P.jsx)(P.Fragment, {
                        children: N ? Object(P.jsxs)(P.Fragment, {
                            children: [Object(P.jsx)(v.b.Header, {
                                onPrevious: d,
                                children: Object(P.jsx)(v.b.Title, {
                                    children: "Freezing Metadata"
                                })
                            }), Object(P.jsx)(v.b.Body, {
                                children: Object(P.jsx)(O.a, {
                                    dataKey: N,
                                    isOpen: !0,
                                    step: 1,
                                    onEnd: function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            n = e.transaction;
                                        return n && c(Object(P.jsx)(A.b, {
                                            mode: "frozen",
                                            transaction: n,
                                            variables: {
                                                assetIDs: [t]
                                            }
                                        }))
                                    }
                                })
                            })]
                        }) : Object(P.jsxs)(P.Fragment, {
                            children: [Object(P.jsx)(v.b.Header, {
                                onPrevious: d,
                                children: Object(P.jsx)(v.b.Title, {
                                    children: "Preparing to freeze your metadata"
                                })
                            }), Object(P.jsxs)(v.b.Body, {
                                children: [Object(P.jsx)(O.a.Skeleton, {
                                    step: 1
                                }), Object(P.jsx)(y.a, {
                                    textAlign: "center",
                                    variant: "small",
                                    children: "This may take a minute."
                                })]
                            })]
                        })
                    })
                },
                N = n("dFFh"),
                M = n("hs16"),
                L = n("UMgi"),
                z = n("m5he"),
                D = n("qymy"),
                K = n("B6yL"),
                E = n("/K/p"),
                R = function(e) {
                    var t = e.children,
                        n = e.disabled,
                        a = e.className,
                        r = e.inputValue,
                        i = e.onChange,
                        l = e.placeholder,
                        o = e.prefix,
                        c = e.value,
                        s = e.id,
                        u = e.name,
                        d = r.match(new RegExp("".concat(o, "(.*)")));
                    return Object(P.jsx)(E.a, {
                        className: a,
                        disabled: n,
                        errorInfo: "Invalid url.",
                        id: s,
                        inputValue: d ? d[1] : r,
                        name: u,
                        placeholder: l,
                        prefix: o,
                        resolve: function(e) {
                            var t = "".concat(null !== o && void 0 !== o ? o : "").concat(o ? e.replace(o, "") : e);
                            return o || !e || Object(K.j)(e) || (t = "http://".concat(e)), o && t === o && (t = ""), Object(K.n)(t) ? t : ""
                        },
                        value: c,
                        onChange: i,
                        children: t
                    })
                },
                V = n("i0w7"),
                I = n("EFOM"),
                B = n("kDvn"),
                _ = n("Z0gy"),
                q = n("mSlj"),
                U = n("naRb"),
                H = n("Q67c"),
                G = n("NFoh"),
                W = n("vkv6"),
                Y = n("b7Z7"),
                Q = n("LoMF"),
                X = n("67yl"),
                J = n("g/rM"),
                $ = n("QrBS"),
                Z = n("lqpq"),
                ee = n("RKEK"),
                te = n("YO/S"),
                ne = n("7//c"),
                ae = n("7bY5"),
                re = n("dGyL"),
                ie = n("EN0m"),
                le = n("j/Wi"),
                oe = n("t3V9"),
                ce = n("8BrW"),
                se = n("BmUw"),
                ue = n("Z2Bj"),
                de = function(e) {
                    return Object(K.o)(e) ? "video" : Object(K.k)(e) ? "audio" : Object(K.p)(e) ? "webgl" : Object(K.l)(e) ? "image" : void 0
                },
                be = n("/nRb"),
                me = n("HSVd"),
                pe = n("tQfM"),
                he = n("C/iq"),
                je = n("9Kd/"),
                fe = n("Fwaq"),
                ge = n("mEYO"),
                Oe = n("oA/F"),
                ye = n("Ld9l"),
                ve = n.n(ye),
                xe = n("uMSw"),
                we = n("ZcxW"),
                ke = n("0c5R"),
                Fe = n("UhaW"),
                Ce = n("Ly9W"),
                Te = ["onChange", "value", "height", "width", "maxHeight", "maxWidth"];

            function Ae(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Pe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ae(Object(n), !0).forEach((function(t) {
                        Object(l.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ae(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Se = "50px",
                Ne = Object(Fe.a)(he.O),
                Me = ve()((function() {
                    return Promise.all([n.e(46), n.e(52)]).then(n.bind(null, "PHJS")).then((function(e) {
                        return e.ModelScene
                    }))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return ["PHJS"]
                        },
                        modules: ["../components/forms/MediaInput/MediaInput.react.tsx -> components/viz/ModelScene.react"]
                    }
                }),
                Le = [".jpg", ".jpeg", ".png", ".gif", ".svg", ".mp4", ".webm", ".mp3", ".wav", ".ogg", ".glb", ".gltf"],
                ze = function(e) {
                    var t = e.name.split("."),
                        n = t[t.length - 1].toLowerCase();
                    return Le.includes(".".concat(n)) ? null : {
                        code: "invalid-file-type",
                        message: "Invalid file type"
                    }
                },
                De = function(e) {
                    var t = e.onChange,
                        n = e.value,
                        a = e.height,
                        r = e.width,
                        i = e.maxHeight,
                        l = e.maxWidth,
                        o = Object(Oe.a)(e, Te),
                        c = Object(u.useState)(),
                        s = c[0],
                        d = c[1];
                    Object(ke.a)((function() {
                        return function() {
                            s && URL.revokeObjectURL(s)
                        }
                    }));
                    var b = function(e) {
                            switch (e.type) {
                                case "audio":
                                    return function(e) {
                                        return Object(P.jsx)("audio", {
                                            autoPlay: !1,
                                            controls: !0,
                                            controlsList: "nodownload",
                                            loop: !0,
                                            preload: "auto",
                                            src: e.url,
                                            style: {
                                                width: "100%"
                                            }
                                        })
                                    }(e);
                                case "image":
                                    return function(e) {
                                        return Object(P.jsx)(xe.b, {
                                            alt: "".concat(e.url, " preview image"),
                                            imgStyle: {
                                                objectFit: "cover"
                                            },
                                            url: e.url
                                        })
                                    }(e);
                                case "video":
                                    return function(e) {
                                        return Object(P.jsx)("video", {
                                            autoPlay: !0,
                                            controls: !0,
                                            controlsList: "nodownload",
                                            loop: !0,
                                            preload: "auto",
                                            src: e.url,
                                            style: {
                                                width: "100%",
                                                height: "calc(100% - ".concat(Se, ")")
                                            }
                                        })
                                    }(e);
                                case "webgl":
                                    return function(e) {
                                        var t;
                                        return Object(P.jsx)(Y.a, {
                                            style: {
                                                width: "100%",
                                                height: "calc(".concat(null !== (t = null !== i && void 0 !== i ? i : a) && void 0 !== t ? t : "100%", " - ").concat(Se, ")")
                                            },
                                            children: Object(P.jsx)(Me, {
                                                backgroundColor: "white",
                                                url: e.url
                                            })
                                        })
                                    }(e);
                                default:
                                    throw new Ce.a(e.type)
                            }
                        },
                        m = function(e) {
                            if (s && URL.revokeObjectURL(s), e) {
                                var n = function(e) {
                                    var t = e.type,
                                        n = e.name;
                                    return t.startsWith("video/") ? "video" : t.startsWith("audio/") ? "audio" : t.startsWith("model/") ? "webgl" : t.startsWith("image/") ? "image" : de(n)
                                }(e);
                                if (!n) throw new Error("Failed to deduce media type for file: ".concat(e.name, " type: ").concat(e.type));
                                var a = URL.createObjectURL(e);
                                d(a), t({
                                    file: e,
                                    url: a,
                                    type: n
                                })
                            } else t(void 0)
                        };
                    return n && "image" !== n.type ? Object(P.jsxs)(Ke, {
                        height: "audio" === n.type ? "fit-content" : a,
                        maxHeight: i,
                        maxWidth: l,
                        width: r,
                        children: [b(n), Object(P.jsx)(Y.a, {
                            height: Se,
                            position: "relative",
                            children: Object(P.jsx)(we.a, Pe(Pe({
                                maxSize: Ne,
                                validator: ze,
                                variant: "overlay",
                                onChange: m
                            }, o), {}, {
                                children: Object(P.jsx)(y.a, {
                                    variant: "small-bold",
                                    children: "Change"
                                })
                            }))
                        })]
                    }) : Object(P.jsx)(we.a, Pe(Pe({}, o), {}, {
                        height: n ? a : null !== i && void 0 !== i ? i : a,
                        maxHeight: i,
                        maxSize: Ne,
                        maxWidth: l,
                        preview: n && b(n),
                        validator: ze,
                        width: r,
                        onChange: m
                    }))
                },
                Ke = Object(f.d)(Z.a).withConfig({
                    componentId: "sc-uyfxue-0"
                })(["", " border-radius:", ";"], we.b, (function(e) {
                    return e.theme.borderRadius.default
                })),
                Ee = n("pKap"),
                Re = function(e) {
                    var t = e.disabled,
                        n = e.icon,
                        a = e.header,
                        r = e.description,
                        i = e.renderModalContent,
                        l = e.children;
                    return Object(P.jsxs)(Ve, {
                        children: [Object(P.jsxs)("div", {
                            className: "AssetFormTraitSection--item",
                            children: [Object(P.jsxs)("div", {
                                className: "AssetFormTraitSection--content",
                                children: [Object(P.jsx)(z.a, {
                                    value: n
                                }), Object(P.jsxs)("div", {
                                    className: "AssetFormTraitSection--content-main",
                                    children: [Object(P.jsx)("span", {
                                        className: "AssetFormTraitSection-input-label",
                                        children: a
                                    }), Object(P.jsx)("p", {
                                        className: "AssetFormTraitSection--input-header",
                                        children: r
                                    })]
                                })]
                            }), Object(P.jsx)("div", {
                                className: "AssetFormTraitSection--side",
                                children: Object(P.jsx)(v.b, {
                                    trigger: function(e) {
                                        return Object(P.jsx)(Q.c, {
                                            "aria-label": "Add ".concat(a.toLowerCase()),
                                            disabled: t,
                                            icon: "add",
                                            variant: "secondary",
                                            onClick: e
                                        })
                                    },
                                    children: i
                                })
                            })]
                        }), l]
                    })
                },
                Ve = f.d.div.withConfig({
                    componentId: "sc-j28e67-0"
                })(["margin-top:16px;border-bottom:1px solid ", ";padding-bottom:16px;.AssetFormTraitSection--item{display:flex;justify-content:space-between;.AssetFormTraitSection--content{display:flex;.AssetFormTraitSection--content-main{margin-left:16px;.AssetFormTraitSection-input-label{font-weight:600;font-size:16px;display:block;}.AssetFormTraitSection-input-label,.AssetFormTraitSection--input-header{margin:0;}}}.AssetFormTraitSection-side{display:flex;flex-direction:column;justify-content:center;}}"], (function(e) {
                    return e.theme.colors.border
                })),
                Ie = n("A3AF");

            function Be(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function _e(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Be(Object(n), !0).forEach((function(t) {
                        Object(l.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Be(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var qe = function(e) {
                    var t = e.initialValues,
                        n = e.createEmptyValue,
                        a = e.keyGenerator,
                        r = void 0 === a ? Ie.a : a,
                        i = Object(u.useState)((function() {
                            return t && Object.keys(t).length > 0 ? t : Object(l.a)({}, r(), n())
                        })),
                        o = i[0],
                        c = i[1];
                    return {
                        values: o,
                        addNewValue: Object(u.useCallback)((function() {
                            c((function(e) {
                                return _e(_e({}, e), {}, Object(l.a)({}, r(), n()))
                            }))
                        }), [n, r]),
                        removeValue: Object(u.useCallback)((function(e) {
                            c((function(t) {
                                return Object.keys(t).length <= 1 ? Object(l.a)({}, r(), n()) : Object(b.pickBy)(t, (function(t, n) {
                                    return n !== e
                                }))
                            }))
                        }), [n, r]),
                        updateValue: Object(u.useCallback)((function(e, t, n) {
                            c((function(a) {
                                return _e(_e({}, a), {}, Object(l.a)({}, e, _e(_e({}, a[e]), {}, Object(l.a)({}, t, n))))
                            }))
                        }), [])
                    }
                },
                Ue = function(e) {
                    var t = e.header,
                        n = e.subheader,
                        a = e.tableHeaders,
                        r = e.onSave,
                        i = e.children,
                        l = e.onAddMore;
                    return Object(P.jsxs)(P.Fragment, {
                        children: [Object(P.jsx)(v.b.Header, {
                            children: Object(P.jsx)(v.b.Title, {
                                children: t
                            })
                        }), Object(P.jsxs)(He, {
                            children: [Object(P.jsx)(y.a, {
                                variant: "small",
                                children: n
                            }), Object(P.jsxs)("table", {
                                children: [Object(P.jsx)("thead", {
                                    className: "AssetTraitsForm--head",
                                    children: Object(P.jsx)("tr", {
                                        className: "AssetTraitsForm--head-row",
                                        children: a.map((function(e) {
                                            return Object(P.jsx)("th", {
                                                className: "AssetTraitsForm--head-column",
                                                children: e
                                            }, e)
                                        }))
                                    })
                                }), Object(P.jsx)("tbody", {
                                    className: "AssetTraitsForm--body",
                                    children: i
                                })]
                            }), Object(P.jsx)(Q.c, {
                                variant: "secondary",
                                onClick: l,
                                children: "Add more"
                            })]
                        }), Object(P.jsx)(v.b.Footer, {
                            children: Object(P.jsx)(v.b.Footer.Button, {
                                onClick: r,
                                children: "Save"
                            })
                        })]
                    })
                },
                He = Object(f.d)(v.b.Body).withConfig({
                    componentId: "sc-291wy6-0"
                })(["table{width:100%;}th{text-align:start;padding:15px 5px;}.AssetTraitsForm--head{border-bottom:none;.AssetTraitsForm--head-row{margin-bottom:20px;.AssetTraitsForm--head-column:first-of-type{padding-left:50px;}}}"]),
                Ge = n("LjoF"),
                We = function(e) {
                    var t = e.id,
                        n = e.name,
                        a = e.value,
                        r = e.max,
                        i = e.updateValue,
                        l = e.removeValue;
                    return Object(P.jsxs)(Ye, {
                        children: [Object(P.jsx)("td", {
                            className: "NumericTraitTableRow--column",
                            children: Object(P.jsx)(U.a, {
                                ariaLabel: "Provide the numeric trait name",
                                className: "NumericTraitTableRow--name-input",
                                placeholder: "Speed",
                                value: n,
                                onChange: function(e) {
                                    return i(t, "name", e)
                                },
                                children: Object(P.jsx)(oe.a, {
                                    "aria-label": "Remove Button",
                                    onClick: function() {
                                        return l(t)
                                    },
                                    children: Object(P.jsx)(z.a, {
                                        className: "NumericTraitTableRow--close",
                                        value: "close"
                                    })
                                })
                            })
                        }), Object(P.jsx)("td", {
                            className: "NumericTraitTableRow--column",
                            children: Object(P.jsx)(Ee.a, {
                                ariaLabel: "Provide the min number of the numeric trait",
                                className: "NumericTraitTableRow--value-input",
                                inputValue: String(a),
                                max: r ? Object(Ge.d)(r) : void 0,
                                placeholder: "Min",
                                right: Object(P.jsx)("div", {
                                    style: {
                                        padding: "0 16px"
                                    },
                                    children: "Of"
                                }),
                                type: "number",
                                value: String(a),
                                onChange: function(e) {
                                    var n = e.value;
                                    n && i(t, "value", parseFloat(n))
                                }
                            })
                        }), Object(P.jsx)("td", {
                            className: "NumericTraitTableRow--column",
                            children: Object(P.jsx)(Ee.a, {
                                ariaLabel: "Provide the max number of the numeric trait",
                                className: "NumericTraitTableRow--max-input",
                                inputValue: String(r),
                                placeholder: "Max",
                                type: "number",
                                value: String(r),
                                onChange: function(e) {
                                    var n = e.value;
                                    n && i(t, "max", parseFloat(n))
                                }
                            })
                        })]
                    })
                },
                Ye = f.d.tr.withConfig({
                    componentId: "sc-9k3q4g-0"
                })([".NumericTraitTableRow--close{padding:0 12px;cursor:pointer;}.NumericTraitTableRow--column{padding:0 0 20px 0;}.NumericTraitTableRow--name-input,.NumericTraitTableRow--value-input{border-top-right-radius:0;border-bottom-right-radius:0;}.NumericTraitTableRow--max-input,.NumericTraitTableRow--value-input{border-top-left-radius:0;border-bottom-left-radius:0;}.NumericTraitTableRow--max-input,.NumericTraitTableRow--value-input{input{width:50px;}}.NumericTraitTableRow--max-input{border-left:none;}"]);

            function Qe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Qe(Object(n), !0).forEach((function(t) {
                        Object(l.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Je = function() {
                    return {
                        name: "",
                        value: 3,
                        max: 5
                    }
                },
                $e = function(e) {
                    var t = e.initialValues,
                        n = e.onSave,
                        a = qe({
                            initialValues: t,
                            createEmptyValue: Je
                        }),
                        r = a.values,
                        i = a.addNewValue,
                        l = a.updateValue,
                        o = a.removeValue;
                    return Object(P.jsx)(Ue, {
                        header: "Add Levels",
                        subheader: "Levels show up underneath your item, are clickable, and can be filtered in your collection's sidebar.",
                        tableHeaders: ["Name", "Value"],
                        onAddMore: i,
                        onSave: function() {
                            return n(Object(b.pickBy)(r, (function(e) {
                                var t = e.name,
                                    n = e.value;
                                return t && Boolean(String(n))
                            })))
                        },
                        children: Object.keys(r).map((function(e) {
                            var t = r[e];
                            return Object(u.createElement)(We, Xe(Xe({}, t), {}, {
                                id: e,
                                key: e,
                                removeValue: o,
                                updateValue: l
                            }))
                        }))
                    })
                },
                Ze = function() {
                    return {
                        name: "",
                        value: ""
                    }
                },
                et = function(e) {
                    var t = e.initialValues,
                        n = e.onSave,
                        a = qe({
                            initialValues: t,
                            createEmptyValue: Ze
                        }),
                        r = a.values,
                        i = a.addNewValue,
                        l = a.updateValue,
                        o = a.removeValue;
                    return Object(P.jsx)(Ue, {
                        header: "Add Properties",
                        subheader: "Properties show up underneath your item, are clickable, and can be filtered in your collection's sidebar.",
                        tableHeaders: ["Type", "Name"],
                        onAddMore: i,
                        onSave: function() {
                            return n(Object(b.pickBy)(r, (function(e) {
                                var t = e.value;
                                return e.name && t
                            })))
                        },
                        children: Object.keys(r).map((function(e) {
                            var t = r[e];
                            return Object(P.jsxs)(tt, {
                                children: [Object(P.jsx)("td", {
                                    className: "AssetPropertiesForm--column",
                                    children: Object(P.jsx)(U.a, {
                                        ariaLabel: "Provide the property name",
                                        className: "AssetPropertiesForm--name-input",
                                        placeholder: "Character",
                                        value: t.name,
                                        onChange: function(t) {
                                            return l(e, "name", t)
                                        },
                                        children: Object(P.jsx)(oe.a, {
                                            "aria-label": "Remove Trait",
                                            onClick: function() {
                                                return o(e)
                                            },
                                            children: Object(P.jsx)(z.a, {
                                                className: "AssetPropertiesForm--close",
                                                value: "close"
                                            })
                                        })
                                    })
                                }), Object(P.jsx)("td", {
                                    className: "AssetPropertiesForm--column",
                                    children: Object(P.jsx)(U.a, {
                                        ariaLabel: "Provide the property value",
                                        className: "AssetPropertiesForm--value-input",
                                        placeholder: "Male",
                                        value: t.value,
                                        onChange: function(t) {
                                            return l(e, "value", t)
                                        }
                                    })
                                })]
                            }, e)
                        }))
                    })
                },
                tt = f.d.tr.withConfig({
                    componentId: "sc-g5scfi-0"
                })([".AssetPropertiesForm--close{padding:0 12px;cursor:pointer;}.AssetPropertiesForm--column{padding:0 0 20px 0;}.AssetPropertiesForm--name-input{border-top-right-radius:0;border-bottom-right-radius:0;}.AssetPropertiesForm--value-input{border-top-left-radius:0;border-bottom-left-radius:0;}"]);

            function nt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function at(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nt(Object(n), !0).forEach((function(t) {
                        Object(l.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var rt, it = function() {
                    return {
                        name: "",
                        value: 3,
                        max: 5
                    }
                },
                lt = function(e) {
                    var t = e.initialValues,
                        n = e.onSave,
                        a = qe({
                            initialValues: t,
                            createEmptyValue: it
                        }),
                        r = a.values,
                        i = a.addNewValue,
                        l = a.updateValue,
                        o = a.removeValue;
                    return Object(P.jsx)(Ue, {
                        header: "Add Stats",
                        subheader: "Stats show up underneath your item, are clickable, and can be filtered in your collection's sidebar.",
                        tableHeaders: ["Name", "Value"],
                        onAddMore: i,
                        onSave: function() {
                            return n(Object(b.pickBy)(r, (function(e) {
                                var t = e.name,
                                    n = e.value;
                                return t && Boolean(String(n))
                            })))
                        },
                        children: Object.keys(r).map((function(e) {
                            var t = r[e];
                            return Object(u.createElement)(We, at(at({}, t), {}, {
                                id: e,
                                key: e,
                                removeValue: o,
                                updateValue: l
                            }))
                        }))
                    })
                };

            function ot(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function ct(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ot(Object(n), !0).forEach((function(t) {
                        Object(l.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var st = function(e) {
                    var t = e.disabled,
                        n = e.handleSubmit,
                        a = e.setRecaptchaError,
                        r = e.setRecaptchaTokenValue,
                        i = e.buttonText,
                        l = e.showRecaptcha,
                        c = Object(J.a)().theme,
                        s = d.a.useState(!1),
                        u = Object(o.a)(s, 2),
                        b = u[0],
                        m = u[1];
                    return l && he.H && String(H.a).length > 0 && !b ? Object(P.jsxs)(v.b, {
                        size: "small",
                        trigger: function(e) {
                            return Object(P.jsx)(Q.c, {
                                disabled: t,
                                onClick: e,
                                children: i
                            })
                        },
                        children: [Object(P.jsx)(v.b.Header, {
                            children: Object(P.jsx)(v.b.Title, {
                                children: "Almost done"
                            })
                        }), Object(P.jsx)(v.b.Body, {
                            children: Object(P.jsxs)(X.a, {
                                children: [Object(P.jsx)(y.a, {
                                    variant: "info",
                                    width: "300px",
                                    children: "Before this item gets created, please check the box below to let us know you're human."
                                }), Object(P.jsx)(j.a, {
                                    sitekey: H.a,
                                    theme: c,
                                    onError: function() {
                                        return a("Network error loading reCAPTCHA. Please try again.")
                                    },
                                    onExpire: function() {
                                        return a("Expired reCAPTCHA. Please try again.")
                                    },
                                    onVerify: function(e) {
                                        if (m(!0), r(e), 0 === e.length) return a("Failed reCAPTCHA assessment. Please try again."), void m(!1);
                                        Object(k.f)({
                                            success: !0
                                        }), n(), m(!1)
                                    }
                                }, c)]
                            })
                        })]
                    }) : Object(P.jsx)(Q.c, {
                        disabled: t,
                        onClick: n,
                        children: i
                    })
                },
                ut = function(e) {
                    var t, a, r = e.asset,
                        o = e.initialCollectionOption,
                        c = e.defaultChain,
                        d = e.onDelete,
                        j = e.disableMaxSupply,
                        f = e.showRecaptcha,
                        g = e.onSubmit,
                        O = e.isHidden,
                        x = Object(p.useFragment)(void 0 !== rt ? rt : rt = n("z3AU"), r),
                        F = function() {
                            var e, t, n, a, r, i = null === x || void 0 === x ? void 0 : x.imageUrl,
                                c = null === x || void 0 === x ? void 0 : x.animationUrl;
                            return ct({
                                name: null !== (e = null === x || void 0 === x ? void 0 : x.name) && void 0 !== e ? e : "",
                                collectionOption: null !== o && void 0 !== o ? o : x ? {
                                    value: x.collection.slug,
                                    label: x.collection.name,
                                    avatar: x.collection.imageUrl ? {
                                        src: x.collection.imageUrl
                                    } : void 0,
                                    defaultMintableAssetContract: null
                                } : void 0,
                                description: null !== (t = null === x || void 0 === x ? void 0 : x.description) && void 0 !== t ? t : "",
                                externalLink: null !== (n = null === x || void 0 === x ? void 0 : x.externalLink) && void 0 !== n ? n : "",
                                image: i ? {
                                    url: i
                                } : void 0,
                                media: c ? {
                                    url: c,
                                    type: null !== (a = de(c)) && void 0 !== a ? a : "image"
                                } : void 0,
                                isNsfw: !(null === x || void 0 === x || !x.isNsfw),
                                unlockableContent: null !== (r = null === x || void 0 === x ? void 0 : x.unlockableContent) && void 0 !== r ? r : "",
                                hasUnlockableContent: !(null === x || void 0 === x || !x.unlockableContent)
                            }, function(e) {
                                var t = Object(b.sortBy)(Object(C.c)(null === e || void 0 === e ? void 0 : e.traits), ["traitType", "value"]),
                                    n = t.filter((function(e) {
                                        return null !== e.floatValue || null !== e.intValue
                                    })).map((function(e) {
                                        return ct(ct({}, e), {}, {
                                            numericValue: +(e.floatValue || e.intValue || 0)
                                        })
                                    })),
                                    a = t.reduce((function(e, t) {
                                        var n = t.value,
                                            a = t.relayId,
                                            r = t.traitType;
                                        return n ? ct(ct({}, e), {}, Object(l.a)({}, a, {
                                            value: n,
                                            name: r
                                        })) : e
                                    }), {}),
                                    r = function(t) {
                                        var n, a;
                                        return null !== (n = t.maxValue || (null === e || void 0 === e || null === (a = e.collection.numericTraits.find((function(e) {
                                            return e.key === t.traitType
                                        }))) || void 0 === a ? void 0 : a.value.max)) && void 0 !== n ? n : null
                                    };
                                return {
                                    properties: a,
                                    levels: n.reduce((function(e, t) {
                                        return t.displayType ? e : ct(ct({}, e), {}, Object(l.a)({}, t.relayId, {
                                            name: t.traitType,
                                            value: t.numericValue,
                                            max: r(t)
                                        }))
                                    }), {}),
                                    stats: n.reduce((function(e, t) {
                                        return "NUMBER" !== t.displayType ? e : ct(ct({}, e), {}, Object(l.a)({}, t.relayId, {
                                            name: t.traitType,
                                            value: t.numericValue,
                                            max: r(t)
                                        }))
                                    }), {})
                                }
                            }(x))
                        },
                        T = Object(w.a)().wallet,
                        A = Object(u.useState)(ct(ct({
                            inputExternalLink: (null === x || void 0 === x ? void 0 : x.externalLink) || "",
                            maxSupply: "1",
                            status: "standby",
                            showDeleteModal: !1,
                            chain: null !== (t = null !== (a = null === x || void 0 === x ? void 0 : x.assetContract.chain) && void 0 !== a ? a : c) && void 0 !== t ? t : Object(se.f)()
                        }, F()), {}, {
                            recaptchaToken: ""
                        })),
                        K = A[0],
                        E = A[1],
                        H = function(e) {
                            return {
                                collectionOption: e.collectionOption,
                                name: e.name,
                                description: e.description,
                                externalLink: e.externalLink,
                                image: e.image,
                                media: e.media,
                                properties: e.properties,
                                levels: e.levels,
                                stats: e.stats,
                                hasUnlockableContent: e.hasUnlockableContent,
                                unlockableContent: e.unlockableContent,
                                isNsfw: e.isNsfw
                            }
                        },
                        X = function() {
                            return (null === x || void 0 === x ? void 0 : x.isFrozen) || K.isFreezeMetadataChecked
                        },
                        J = function() {
                            return !x || x.isFrozen || !m.a.isEqual(H(K), H(F()))
                        },
                        Oe = function(e) {
                            E((function(t) {
                                return ct(ct(ct({}, t), e), {}, {
                                    status: "standby",
                                    error: void 0
                                })
                            }))
                        },
                        ye = function() {
                            var e = Object(i.a)(s.a.mark((function e() {
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (d) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new Error("Missing deletion action");
                                        case 2:
                                            return E((function(e) {
                                                return ct(ct({}, e), {}, {
                                                    error: void 0,
                                                    status: "submitting"
                                                })
                                            })), e.prev = 3, e.next = 6, d();
                                        case 6:
                                            E((function(e) {
                                                return ct(ct({}, e), {}, {
                                                    status: "deleted"
                                                })
                                            })), e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(3), E((function(t) {
                                                return ct(ct({}, t), {}, {
                                                    error: e.t0,
                                                    status: "standby"
                                                })
                                            }));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 9]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ve = function(e) {
                            Object(k.f)({
                                success: !1
                            }), E((function(t) {
                                return ct(ct({}, t), {}, {
                                    error: new Error(e)
                                })
                            }))
                        },
                        xe = function(e) {
                            E((function(t) {
                                return ct(ct({}, t), {}, {
                                    recaptchaToken: e
                                })
                            }))
                        },
                        we = function() {
                            var e = Object(i.a)(s.a.mark((function e() {
                                var t, n, a, r, i, l, o, c, u, d, b, m, p, h, j;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = K.chain, n = K.collectionOption, a = K.description, r = K.externalLink, i = K.image, l = K.media, o = K.maxSupply, c = K.name, u = K.unlockableContent, d = K.hasUnlockableContent, b = K.isNsfw, m = K.properties, p = K.levels, h = K.stats, j = K.recaptchaToken, i && c) {
                                                e.next = 4;
                                                break
                                            }
                                            return E((function(e) {
                                                return ct(ct({}, e), {}, {
                                                    error: new Error("Name and image are required")
                                                })
                                            })), e.abrupt("return");
                                        case 4:
                                            return E((function(e) {
                                                return ct(ct({}, e), {}, {
                                                    error: void 0,
                                                    status: "submitting"
                                                })
                                            })), e.prev = 5, e.next = 8, g({
                                                chain: t,
                                                collectionOption: n,
                                                description: a,
                                                externalLink: r,
                                                imageFile: i.file,
                                                mediaFile: null === l || void 0 === l ? void 0 : l.file,
                                                maxSupply: o,
                                                name: c,
                                                unlockableContent: d ? u : "",
                                                isNsfw: b,
                                                properties: m,
                                                stats: h,
                                                levels: p,
                                                recaptchaToken: j
                                            });
                                        case 8:
                                            E((function(e) {
                                                return ct(ct({}, e), {}, {
                                                    status: "done"
                                                })
                                            })), Object(k.e)(), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(5), E((function(t) {
                                                return ct(ct({}, t), {}, {
                                                    error: e.t0,
                                                    status: "standby"
                                                })
                                            }));
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 12]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ke = function(e) {
                            var t = e.traits,
                                n = e.getSearch,
                                a = e.renderTrait,
                                r = e.className,
                                i = null === x || void 0 === x ? void 0 : x.collection.slug;
                            return 0 === Object(be.c)(t).length ? null : Object(P.jsx)("div", {
                                className: r,
                                children: Object(be.c)(t).map((function(e) {
                                    var r = t[e],
                                        l = "/assets/".concat(i || "").concat(me.a.stringifyQueryParams({
                                            search: n(r)
                                        }));
                                    return Object(P.jsx)(D.a, {
                                        href: l,
                                        target: "_blank",
                                        children: a(r)
                                    }, e)
                                }))
                            })
                        },
                        Fe = K.chain,
                        Ce = K.description,
                        Te = K.error,
                        Ae = K.externalLink,
                        Pe = K.inputExternalLink,
                        Se = K.maxSupply,
                        Ne = K.name,
                        Me = K.status,
                        Le = K.isFreezeMetadataChecked,
                        ze = K.showDeleteModal,
                        Ke = K.media,
                        Ve = K.image,
                        Ie = null === x || void 0 === x ? void 0 : x.isEditable.reason;
                    return Object(P.jsxs)(dt, {
                        display: O ? "none" : void 0,
                        onSubmit: we,
                        children: [Object(P.jsxs)(y.a, {
                            variant: "info",
                            children: [Object(P.jsx)("span", {
                                className: "AssetForm--required-label",
                                children: "*"
                            }), " Required fields"]
                        }), Object(P.jsx)(ee.a.Control, {
                            label: "Image, Video, Audio, or 3D Model",
                            required: !0,
                            tip: "File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,\n            GLB, GLTF. Max size: ".concat(he.O, " MB"),
                            children: Object(P.jsx)(De, {
                                disabled: X(),
                                height: "257px",
                                id: "media",
                                name: "media",
                                value: null !== Ke && void 0 !== Ke ? Ke : Ve ? ct(ct({}, Ve), {}, {
                                    type: "image"
                                }) : void 0,
                                width: "350px",
                                onChange: function(e) {
                                    e ? "image" === e.type ? Oe({
                                        image: e,
                                        media: void 0
                                    }) : Oe({
                                        media: e,
                                        image: void 0
                                    }) : Oe({
                                        image: void 0,
                                        media: void 0
                                    })
                                }
                            })
                        }), Ke && Object(P.jsx)(ee.a.Control, {
                            label: "Preview Image",
                            required: !0,
                            tip: "Because you\u2019ve included multimedia, you\u2019ll need to provide an image (PNG, JPG, or GIF) for the card display of your item.",
                            children: Object(P.jsx)(ge.a, {
                                disabled: X(),
                                height: "160px",
                                name: "preview",
                                value: Ve,
                                width: "160px",
                                onChange: function(e) {
                                    return Oe({
                                        image: e
                                    })
                                }
                            })
                        }), Object(P.jsx)(ee.a.Control, {
                            label: "Name",
                            required: !0,
                            children: Object(P.jsx)(U.a, {
                                "aria-required": "true",
                                disabled: X(),
                                id: "name",
                                isRequired: !0,
                                name: "name",
                                placeholder: "Item name",
                                type: "text",
                                value: Ne,
                                onChange: function(e) {
                                    return Oe({
                                        name: e
                                    })
                                }
                            })
                        }), Object(P.jsx)(ee.a.Control, {
                            label: "External link",
                            tip: " OpenSea will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.",
                            children: Object(P.jsx)(R, {
                                disabled: X(),
                                id: "external_link",
                                inputValue: Pe,
                                name: "external_link",
                                placeholder: "https://yoursite.io/item/123",
                                value: Ae,
                                onChange: function(e) {
                                    var t = e.value,
                                        n = e.inputValue;
                                    return Oe({
                                        externalLink: t,
                                        inputExternalLink: n
                                    })
                                }
                            })
                        }), Object(P.jsx)(ee.a.Control, {
                            label: "Description",
                            tip: Object(P.jsxs)(P.Fragment, {
                                children: ["The description will be included on the item's detail page underneath its image.", " ", Object(P.jsx)(D.a, {
                                    href: "https://www.markdownguide.org/cheat-sheet/",
                                    children: "Markdown"
                                }), " ", "syntax is supported."]
                            }),
                            children: Object(P.jsx)(re.a, {
                                disabled: X(),
                                id: "description",
                                name: "description",
                                placeholder: "Provide a detailed description of your item.",
                                rows: 4,
                                value: Ce,
                                onChange: function(e) {
                                    return Oe({
                                        description: e.currentTarget.value
                                    })
                                }
                            })
                        }), Object(P.jsx)(ee.a.Control, {
                            htmlFor: "collection",
                            label: "Collection",
                            required: Boolean(x),
                            tip: Object(P.jsxs)(P.Fragment, {
                                children: ["This is the collection where your item will appear.", " ", Object(P.jsx)("div", {
                                    className: "AssetForm--info-cta",
                                    children: Object(P.jsx)(ne.b, {
                                        content: function() {
                                            return Object(P.jsxs)(P.Fragment, {
                                                children: ["Moving items to a different collection may take up to 30 minutes. You can", " ", Object(P.jsx)(D.a, {
                                                    href: "/collections",
                                                    target: "_blank",
                                                    children: "manage your collections here"
                                                }), "."]
                                            })
                                        },
                                        children: Object(P.jsx)(oe.a, {
                                            children: Object(P.jsx)(z.a, {
                                                size: 20,
                                                value: "info",
                                                variant: "outlined"
                                            })
                                        })
                                    })
                                })]
                            }),
                            children: Object(P.jsx)(fe.a, {
                                editor: T.getActiveAccountKey(),
                                id: "collection",
                                name: "collection",
                                value: K.collectionOption,
                                onSelect: function(e) {
                                    return Oe({
                                        collectionOption: e
                                    })
                                }
                            })
                        }), Object(P.jsxs)(Y.a, {
                            as: "section",
                            marginBottom: "24px",
                            children: [Object(P.jsx)(Re, {
                                description: "Textual traits that show up as rectangles",
                                disabled: X(),
                                header: "Properties",
                                icon: "list",
                                renderModalContent: function(e) {
                                    return Object(P.jsx)(et, {
                                        initialValues: K.properties,
                                        onSave: function(t) {
                                            Oe({
                                                properties: t
                                            }), e()
                                        }
                                    })
                                },
                                children: ke({
                                    className: "AssetForm--properties",
                                    traits: K.properties,
                                    getSearch: function(e) {
                                        return {
                                            stringTraits: [{
                                                name: e.name,
                                                values: [e.value]
                                            }]
                                        }
                                    },
                                    renderTrait: function(e) {
                                        var t = e.name,
                                            n = e.value;
                                        return Object(P.jsx)(q.a, {
                                            className: "item--property",
                                            disablePercentages: !0,
                                            type: t,
                                            value: n
                                        })
                                    }
                                })
                            }), Object(P.jsx)(Re, {
                                description: "Numerical traits that show as a progress bar",
                                disabled: X(),
                                header: "Levels",
                                icon: "star_rate",
                                renderModalContent: function(e) {
                                    return Object(P.jsx)($e, {
                                        initialValues: K.levels,
                                        onSave: function(t) {
                                            Oe({
                                                levels: t
                                            }), e()
                                        }
                                    })
                                },
                                children: ke({
                                    className: "AssetForm--levels",
                                    traits: K.levels,
                                    getSearch: function(e) {
                                        var t = e.name,
                                            n = e.max;
                                        return {
                                            numericTraits: [{
                                                name: t,
                                                ranges: [{
                                                    min: e.value,
                                                    max: n
                                                }]
                                            }]
                                        }
                                    },
                                    renderTrait: function(e) {
                                        var t = e.name,
                                            n = e.max,
                                            a = e.value;
                                        return Object(P.jsx)(_.a, {
                                            className: "item--numeric-trait",
                                            maxValue: n,
                                            rankingMode: !0,
                                            type: t,
                                            value: a
                                        })
                                    }
                                })
                            }), Object(P.jsx)(Re, {
                                description: "Numerical traits that just show as numbers",
                                disabled: X(),
                                header: "Stats",
                                icon: "bar_chart",
                                renderModalContent: function(e) {
                                    return Object(P.jsx)(lt, {
                                        initialValues: K.stats,
                                        onSave: function(t) {
                                            Oe({
                                                stats: t
                                            }), e()
                                        }
                                    })
                                },
                                children: ke({
                                    className: "AssetForm--stats",
                                    traits: K.stats,
                                    getSearch: function(e) {
                                        var t = e.name,
                                            n = e.max;
                                        return {
                                            numericTraits: [{
                                                name: t,
                                                ranges: [{
                                                    min: e.value,
                                                    max: n
                                                }]
                                            }]
                                        }
                                    },
                                    renderTrait: function(e) {
                                        var t = e.name,
                                            n = e.max,
                                            a = e.value;
                                        return Object(P.jsx)(_.a, {
                                            className: "item--numeric-trait",
                                            maxValue: n,
                                            type: t,
                                            value: a
                                        })
                                    }
                                })
                            }), Object(P.jsxs)("div", {
                                className: "AssetForm--has-unlockable-content",
                                children: [Object(P.jsxs)(ae.a, {
                                    children: [Object(P.jsx)("div", {
                                        children: Object(P.jsxs)($.a, {
                                            children: [Object(P.jsx)(z.a, {
                                                color: "purple",
                                                value: "lock_open"
                                            }), Object(P.jsxs)(Z.a, {
                                                marginLeft: "16px",
                                                children: [Object(P.jsx)(Y.a, {
                                                    as: "label",
                                                    className: "AssetForm-input-label",
                                                    htmlFor: "unlockable-content-toggle",
                                                    children: "Unlockable Content"
                                                }), Object(P.jsx)("header", {
                                                    className: "AssetForm--input-header",
                                                    children: "Include unlockable content that can only be revealed by the owner of the item."
                                                })]
                                            })]
                                        })
                                    }), Object(P.jsx)(ce.a, {
                                        children: Object(P.jsx)(ie.a, {
                                            checked: K.hasUnlockableContent,
                                            disabled: X(),
                                            id: "unlockable-content-toggle",
                                            onChange: function() {
                                                return Oe({
                                                    hasUnlockableContent: !K.hasUnlockableContent
                                                })
                                            }
                                        })
                                    })]
                                }), K.hasUnlockableContent && Object(P.jsxs)("div", {
                                    className: "AssetForm--unlockable-content",
                                    children: [Object(P.jsx)(re.a, {
                                        placeholder: "Enter content (access key, code to redeem, link to a file, etc.)",
                                        rows: 4,
                                        value: K.unlockableContent,
                                        onChange: function(e) {
                                            return Oe({
                                                unlockableContent: e.currentTarget.value
                                            })
                                        }
                                    }), Object(P.jsxs)("header", {
                                        className: "AssetForm--unlockable-content-caption",
                                        children: [Object(P.jsx)(D.a, {
                                            href: "https://www.markdownguide.org/cheat-sheet/",
                                            children: "Markdown"
                                        }), " ", "syntax is supported."]
                                    })]
                                })]
                            }), Object(P.jsx)("div", {
                                className: "AssetForm--is-explicit-content",
                                children: Object(P.jsxs)(ae.a, {
                                    children: [Object(P.jsx)("div", {
                                        children: Object(P.jsxs)($.a, {
                                            children: [Object(P.jsx)(z.a, {
                                                value: "warning"
                                            }), Object(P.jsxs)(Z.a, {
                                                marginLeft: "16px",
                                                children: [Object(P.jsx)(Y.a, {
                                                    as: "label",
                                                    className: "AssetForm-input-label",
                                                    htmlFor: "explicit-content-toggle",
                                                    children: "Explicit & Sensitive Content"
                                                }), Object(P.jsxs)(Y.a, {
                                                    as: "header",
                                                    className: "AssetForm--input-header",
                                                    children: ["Set this item as explicit and sensitive content", Object(P.jsx)(N.a, {
                                                        name: "asset"
                                                    })]
                                                })]
                                            })]
                                        })
                                    }), Object(P.jsx)(ce.a, {
                                        children: Object(P.jsx)(ie.a, {
                                            checked: K.isNsfw,
                                            disabled: X(),
                                            id: "explicit-content-toggle",
                                            onChange: function() {
                                                return Oe({
                                                    isNsfw: !K.isNsfw
                                                })
                                            }
                                        })
                                    })]
                                })
                            })]
                        }), !x && Object(P.jsx)(ee.a.Control, {
                            label: "Supply",
                            tip: Object(P.jsxs)(Y.a, {
                                as: "header",
                                className: "AssetForm--input-header",
                                children: ["The number of items that can be minted.", j ? null : " No gas cost to you!", " ", Object(P.jsx)("div", {
                                    className: "AssetForm--info-cta",
                                    children: Object(P.jsx)(v.b, {
                                        trigger: function(e) {
                                            return Object(P.jsx)(oe.a, {
                                                onClick: e,
                                                children: Object(P.jsx)(z.a, {
                                                    size: 20,
                                                    value: "info",
                                                    variant: "outlined"
                                                })
                                            })
                                        },
                                        children: function() {
                                            return Object(P.jsxs)(P.Fragment, {
                                                children: [Object(P.jsx)(v.b.Header, {
                                                    children: Object(P.jsx)(v.b.Title, {
                                                        children: " How does token supply work?"
                                                    })
                                                }), Object(P.jsx)(v.b.Body, {
                                                    children: j ? Object(P.jsxs)("section", {
                                                        children: [Object(P.jsx)("p", {
                                                            children: "This is a legacy NFT collection."
                                                        }), Object(P.jsxs)("p", {
                                                            children: ["You can now create collections and items without paying any gas! To take advantage of this, create a new gas-free", " ", Object(P.jsx)(D.a, {
                                                                href: "https://opensea.io/blog/announcements/erc1155-marketplace/",
                                                                children: "ERC1155"
                                                            }), " ", "collection."]
                                                        }), Object(P.jsx)("p", {
                                                            children: Object(P.jsx)("div", {
                                                                className: "AssetForm--create-new-collection",
                                                                children: Object(P.jsx)(Q.c, {
                                                                    href: "/collections",
                                                                    children: "Create a New Collection"
                                                                })
                                                            })
                                                        })]
                                                    }) : Object(P.jsxs)(P.Fragment, {
                                                        children: [Object(P.jsxs)(V.a, {
                                                            icon: "photo_filter",
                                                            id: "asset-form-1",
                                                            mode: "start-closed",
                                                            title: "What is minting?",
                                                            children: [Object(P.jsxs)("p", {
                                                                children: ["Minting is an action that brings an item into existence on the blockchain, and costs gas to do so. Minting using OpenSea\u2019s tools is ", Object(P.jsx)("em", {
                                                                    children: "lazy"
                                                                }), ", meaning it only occurs when necessary:", Object(P.jsxs)("ol", {
                                                                    children: [Object(P.jsx)("li", {
                                                                        children: "When you transfer an item to another account"
                                                                    }), Object(P.jsx)("li", {
                                                                        children: "When someone buys an item from you"
                                                                    })]
                                                                })]
                                                            }), Object(P.jsxs)("p", {
                                                                children: ["This means that you can create as much as you want here", " ", Object(P.jsx)("em", {
                                                                    children: "for free"
                                                                }), "."]
                                                            })]
                                                        }), Object(P.jsx)(Y.a, {
                                                            marginTop: "12px",
                                                            children: Object(P.jsx)(V.a, {
                                                                icon: "lock",
                                                                id: "asset-form-2",
                                                                mode: "start-closed",
                                                                title: "How are limits enforced?",
                                                                children: Object(P.jsxs)("p", {
                                                                    children: ['The maximum supply ("hard cap") of your NFT will be encoded in its ID. This allows the smart contract to check whether any more are allowed to be minted.', " ", Object(P.jsx)(M.a, {
                                                                        href: "/faq#max-supply",
                                                                        children: "Learn more here"
                                                                    }), "."]
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        }
                                    })
                                })]
                            }),
                            children: Object(P.jsx)(Ee.a, {
                                "aria-required": "true",
                                id: "supply",
                                inputValue: Se,
                                isRequired: !0,
                                maxDecimals: 0,
                                value: Se,
                                onChange: function(e) {
                                    var t = e.value;
                                    void 0 !== t && Oe({
                                        maxSupply: t
                                    })
                                }
                            })
                        }), Object(P.jsx)(ee.a.Control, {
                            htmlFor: "chain",
                            label: "Blockchain",
                            children: Object(P.jsx)(je.a, {
                                chain: Fe,
                                disabled: !!x,
                                id: "chain",
                                name: "chain",
                                onChange: function(e) {
                                    return Oe({
                                        chain: e
                                    })
                                }
                            })
                        }), Object(P.jsx)(ee.a.Control, {
                            htmlFor: "freezeMetadata",
                            inline: Boolean(x && x.isFreezable.value),
                            label: Object(P.jsxs)(P.Fragment, {
                                children: ["Freeze metadata", " ", Object(P.jsx)("div", {
                                    className: "AssetForm--info-cta",
                                    children: Object(P.jsx)(ne.b, {
                                        content: function() {
                                            return Object(P.jsxs)(P.Fragment, {
                                                children: ["Once locked, your content cannot be edited or removed as it is permanently stored in decentralized file storage, which will be accessible for other clients to view and use.", " ", Object(P.jsx)(D.a, {
                                                    href: "https://openseahelp.zendesk.com/hc/en-us/articles/1500012270982",
                                                    children: "Learn more about freezing metadata here"
                                                }), "."]
                                            })
                                        },
                                        children: Object(P.jsx)(z.a, {
                                            value: "info",
                                            variant: "outlined"
                                        })
                                    })
                                })]
                            }),
                            tip: "Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file storage.",
                            children: Object(P.jsxs)(P.Fragment, {
                                children: [Object(P.jsx)(ae.a, {
                                    children: x && x.isFreezable.value && Object(P.jsx)(ce.a, {
                                        marginLeft: "8px",
                                        children: Object(P.jsx)(le.b, {
                                            content: Object(P.jsx)(P.Fragment, {
                                                children: "To freeze your metadata, your item must be created, and any changes must be saved"
                                            }),
                                            disabled: !J(),
                                            children: Object(P.jsx)("span", {
                                                children: Object(P.jsx)(ie.a, {
                                                    checked: Le,
                                                    disabled: J(),
                                                    id: "freezeMetadata",
                                                    name: "freezeMetadata",
                                                    onChange: function(e) {
                                                        return E((function(t) {
                                                            return ct(ct({}, t), {}, {
                                                                isFreezeMetadataChecked: e
                                                            })
                                                        }))
                                                    }
                                                })
                                            })
                                        })
                                    })
                                }), null !== x && void 0 !== x && x.isFrozen ? Object(P.jsx)(G.a, {
                                    marginTop: "8px",
                                    children: Object(P.jsxs)($.a, {
                                        children: [Object(P.jsx)(W.b, {
                                            backgroundColor: pe.b.white,
                                            color: "aqua",
                                            icon: "ac_unit",
                                            outline: !0
                                        }), Object(P.jsxs)(Z.a, {
                                            marginLeft: "16px",
                                            children: [Object(P.jsxs)(y.a, {
                                                as: "span",
                                                children: ["Metadata frozen", " ", x.frozenAt ? "on ".concat(Object(ue.h)(x.frozenAt).local().format("LL [at] h:mm A")) : null]
                                            }), x.tokenMetadata ? Object(P.jsx)(D.a, {
                                                href: x.tokenMetadata,
                                                children: "View metadata"
                                            }) : null]
                                        })]
                                    })
                                }) : null !== x && void 0 !== x && x.isFreezable.reason ? Object(P.jsx)(G.a, {
                                    marginTop: "8px",
                                    children: x.isFreezable.reason
                                }) : x ? null : Object(P.jsx)(G.a, {
                                    marginTop: "8px",
                                    children: "To freeze your metadata, you must create your item first."
                                })]
                            })
                        }), Le && x ? Object(P.jsx)(Y.a, {
                            marginTop: "8px",
                            children: Object(P.jsx)(te.a, {
                                trigger: function(e) {
                                    return x.isFrozen ? null : Object(P.jsx)(Q.c, {
                                        variant: "tertiary",
                                        onClick: e,
                                        children: "Freeze"
                                    })
                                },
                                children: Object(P.jsx)(S, {
                                    assetId: x.relayId
                                })
                            })
                        }) : null, Object(P.jsx)("hr", {}), Object(P.jsxs)("div", {
                            className: "AssetForm--submit",
                            children: [Object(P.jsx)("div", {
                                className: "AssetForm--action",
                                children: Object(P.jsx)(le.b, {
                                    content: Ie,
                                    disabled: !(null !== x && void 0 !== x && x.isEditable.value) || !x.isFrozen,
                                    children: Object(P.jsx)("span", {
                                        children: function() {
                                            var e = K.externalLink,
                                                t = K.inputExternalLink,
                                                n = K.maxSupply,
                                                a = K.name,
                                                r = K.status,
                                                i = K.collectionOption,
                                                l = K.image,
                                                o = K.chain,
                                                c = Object(P.jsx)(st, {
                                                    buttonText: x ? "Submit changes" : "Create",
                                                    disabled: "standby" !== r || !!t && !e || !a || !n || !l || !1 === (null === x || void 0 === x ? void 0 : x.isEditable.value) || (null === x || void 0 === x ? void 0 : x.isFrozen) || !!x && !i,
                                                    handleSubmit: we,
                                                    setRecaptchaError: ve,
                                                    setRecaptchaTokenValue: xe,
                                                    showRecaptcha: Boolean(f)
                                                });
                                            return x ? c : Object(P.jsx)(B.a, {
                                                chainIdentifier: o,
                                                children: c
                                            })
                                        }()
                                    })
                                })
                            }), Object(P.jsxs)("div", {
                                className: "AssetForm--submit-spacer",
                                children: [Te && Object(P.jsx)("span", {
                                    className: "AssetForm-status AssetForm-status-error",
                                    children: Te instanceof h.RRNLRequestError ? Object(P.jsx)(L.a, {
                                        error: Te
                                    }) : Te.message
                                }), "submitting" === Me ? Object(P.jsx)("span", {
                                    className: "AssetForm-status AssetForm-status-submitting",
                                    children: "Please wait..."
                                }) : Object(P.jsxs)(P.Fragment, {
                                    children: ["done" === Me && Object(P.jsx)("span", {
                                        className: "AssetForm-status AssetForm-status-done",
                                        children: "Success!"
                                    }), "deleted" === Me && Object(P.jsx)("span", {
                                        className: "AssetForm-status AssetForm-status-done",
                                        children: "Deleted! Changes will take a minute to reflect."
                                    })]
                                })]
                            }), x && Object(P.jsx)("div", {
                                className: "AssetForm--action",
                                children: Object(P.jsx)(le.b, {
                                    content: "deleted" === Me ? "This item is already deleted" : Ie,
                                    disabled: x.isEditable.value,
                                    children: Object(P.jsx)("span", {
                                        children: Object(P.jsx)(Q.c, {
                                            disabled: "deleted" === Me || !x.isEditable.value,
                                            variant: "tertiary",
                                            onClick: function() {
                                                return E((function(e) {
                                                    return ct(ct({}, e), {}, {
                                                        showDeleteModal: !0
                                                    })
                                                }))
                                            },
                                            children: "Delete item"
                                        })
                                    })
                                })
                            })]
                        }), Object(P.jsx)(I.a, {
                            isOpen: ze,
                            status: Me,
                            onDelete: Object(i.a)(s.a.mark((function e() {
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, ye();
                                        case 2:
                                            E((function(e) {
                                                return ct(ct({}, e), {}, {
                                                    showDeleteModal: !1,
                                                    status: "deleted"
                                                })
                                            }));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))),
                            onNevermind: function() {
                                return E((function(e) {
                                    return ct(ct({}, e), {}, {
                                        showDeleteModal: !1
                                    })
                                }))
                            }
                        })]
                    })
                },
                dt = Object(f.d)(ee.a).withConfig({
                    componentId: "sc-1rb2baf-0"
                })(["margin-bottom:32px;max-width:772px;width:100%;.AssetForm--required-label{color:", ";}.AssetForm--submit{align-items:center;display:flex;.AssetForm--submit-spacer{flex:1;}}.AssetForm--has-unlockable-content,.AssetForm--is-explicit-content{padding:16px 0;}.AssetForm--unlockable-content{padding-top:16px;}.AssetForm--is-explicit-content,.AssetForm--has-unlockable-content{border-bottom:1px solid ", ";.AssetForm-input-label{margin-top:0;margin-bottom:0;}.AssetForm--input-header{margin-bottom:0;}}.AssetForm--item{display:flex;margin-bottom:8px;.AssetForm--item-icon{margin-right:8px;}.AssetForm--item-label{font-weight:600;font-size:16px;}}.AssetForm-status{display:inline-block;margin-left:24px;}.AssetForm-status-error{color:red;}.AssetForm-status-submitting{color:#888888;}.AssetForm-status-done{color:", ";}.AssetForm-input-label{font-weight:600;font-size:16px;display:block;margin-top:8px;margin-bottom:5px;text-transform:none;.AssetForm--new-badge{color:", ";position:relative;top:-5px;font-size:12px;}}.AssetForm--input-header,.AssetForm--unlockable-content-caption{margin-bottom:5px;}.AssetForm--unlockable-content-caption{margin-top:8px;}.AssetForm--info-tooltip{color:", ";margin-left:4px;&:hover{color:", ";}}.AssetForm--info-cta{cursor:pointer;display:inline-block;vertical-align:top;color:", ";margin-left:4px;&:hover{color:", ";}}.AssetForm--action{display:inline-block;margin-top:24px;}.AssetForm--properties,.AssetForm--levels,.AssetForm--stats{margin-top:16px;}.AssetForm--properties{display:flex;flex-wrap:wrap;.item--property{margin:5px;width:150px;}}.AssetForm--levels,.AssetForm--stats{.item--numeric-trait{border-radius:", ";border:1px solid ", ";padding:12px;max-width:428px;margin-top:8px;}}"], (function(e) {
                    return e.theme.colors.error
                }), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.colors.seaGrass
                }), (function(e) {
                    return e.theme.colors.seaHorse
                }), (function(e) {
                    return e.theme.colors.text.subtle
                }), (function(e) {
                    return e.theme.colors.text.body
                }), (function(e) {
                    return e.theme.colors.text.subtle
                }), (function(e) {
                    return e.theme.colors.text.body
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.colors.border
                }))
        },
        mSlj: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            n("mXGw");
            var a = n("UutA"),
                r = n("7v7j"),
                i = n("oYCi"),
                l = function(e) {
                    var t = e.className,
                        n = e.value,
                        a = e.type,
                        l = e.count,
                        c = e.percentage,
                        s = e.disablePercentages;
                    return Object(i.jsxs)(o, {
                        className: t,
                        children: [Object(i.jsx)("div", {
                            className: "Property--type",
                            children: Object(r.j)(a)
                        }), Object(i.jsx)("div", {
                            className: "Property--value",
                            "data-testid": "Property--value",
                            children: Object(r.j)(n)
                        }), !s && Object(i.jsx)("div", {
                            className: "Property--rarity",
                            children: void 0 === c ? "New trait" : c >= 1 ? "".concat(Math.round(c), "% have this trait") : c >= .01 ? "".concat(c.toFixed(2), "% have this trait") : "1 of ".concat(l)
                        })]
                    })
                },
                o = a.d.div.withConfig({
                    componentId: "sc-1smi6j9-0"
                })(["background-color:", ";border-radius:6px;border:1px solid ", ";padding:10px;text-align:center;.Property--type,.Property--value,.Property--rarity{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.Property--type{color:", ";font-size:11px;font-weight:500;text-transform:uppercase;}.Property--value{color:", ";font-size:15px;font-weight:500;line-height:30px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.Property--rarity{color:", ";font-size:13px;line-height:16px;min-height:16px;}"], (function(e) {
                    return e.theme.colors.withOpacity.secondary.veryLight
                }), (function(e) {
                    return e.theme.colors.secondary
                }), (function(e) {
                    return e.theme.colors.secondary
                }), (function(e) {
                    return e.theme.colors.text.body
                }), (function(e) {
                    return e.theme.colors.text.subtle
                }))
        },
        "qS/w": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "editor"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "query"
                    },
                    n = [{
                        kind: "Variable",
                        name: "editor",
                        variableName: "editor"
                    }, {
                        kind: "Literal",
                        name: "first",
                        value: 25
                    }, {
                        kind: "Variable",
                        name: "query",
                        variableName: "query"
                    }, {
                        kind: "Literal",
                        name: "sortBy",
                        value: "CREATED_DATE"
                    }],
                    a = {
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
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "openseaVersion",
                        storageKey: null
                    },
                    s = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [e, t],
                        kind: "Fragment",
                        metadata: null,
                        name: "CollectionSelectQuery",
                        selections: [{
                            alias: null,
                            args: n,
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
                                    selections: [a, r, i, {
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetContractType",
                                        kind: "LinkedField",
                                        name: "defaultMintableAssetContract",
                                        plural: !1,
                                        selections: [l, o, c],
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
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [t, e],
                        kind: "Operation",
                        name: "CollectionSelectQuery",
                        selections: [{
                            alias: null,
                            args: n,
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
                                    selections: [a, r, i, {
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetContractType",
                                        kind: "LinkedField",
                                        name: "defaultMintableAssetContract",
                                        plural: !1,
                                        selections: [l, o, c, s],
                                        storageKey: null
                                    }, s],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "8659c87c061a7e696e0d7e8b7809e1d4",
                        id: null,
                        metadata: {},
                        name: "CollectionSelectQuery",
                        operationKind: "query",
                        text: "query CollectionSelectQuery(\n  $query: String\n  $editor: IdentityInputType\n) {\n  collections(editor: $editor, first: 25, sortBy: CREATED_DATE, query: $query) {\n    edges {\n      node {\n        name\n        imageUrl\n        slug\n        defaultMintableAssetContract {\n          address\n          relayId\n          openseaVersion\n          id\n        }\n        id\n      }\n    }\n  }\n}\n"
                    }
                }
            }();
            a.hash = "3f573d9ddb999aa73901baa9e47ef82b", t.default = a
        },
        vyUL: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            }));
            var a = n("m6w3"),
                r = n("qd51"),
                i = n("oA/F"),
                l = n("/dBk"),
                o = n.n(l),
                c = n("mXGw"),
                s = n("9va6"),
                u = n("YrBu"),
                d = n("JHWp"),
                b = n("dA/+"),
                m = n("06eW"),
                p = n("oYCi"),
                h = ["loadingConfiguration", "value", "useCache", "search", "searchFilter"];

            function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }
            var f = function() {
                    return !0
                },
                g = function(e) {
                    var t, n = e.loadingConfiguration,
                        l = e.value,
                        g = e.useCache,
                        O = void 0 === g || g,
                        y = e.search,
                        v = e.searchFilter,
                        x = void 0 === v ? f : v,
                        w = Object(i.a)(e, h),
                        k = Object(b.a)(),
                        F = k.isOpen,
                        C = k.setIsOpen,
                        T = Object(c.useState)(!1),
                        A = T[0],
                        P = T[1],
                        S = Object(c.useRef)({}),
                        N = Object(c.useRef)(),
                        M = Object(c.useRef)(""),
                        L = Object(u.a)(),
                        z = Object(c.useCallback)(function() {
                            var e = Object(r.a)(o.a.mark((function e(t) {
                                var a;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (M.current = t, !O || !S.current[t]) {
                                                e.next = 4;
                                                break
                                            }
                                            return L(), e.abrupt("return");
                                        case 4:
                                            return P(null === n || void 0 === n || n), e.prev = 5, e.next = 8, y(t);
                                        case 8:
                                            a = e.sent, S.current[t] = a;
                                        case 10:
                                            return e.prev = 10, P(!1), e.finish(10);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, , 10, 13]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [L, y, O, n]);
                    Object(c.useEffect)((function() {
                        return N.current = Object(s.debounce)(z, 300),
                            function() {
                                N.current && N.current.cancel()
                            }
                    }), [z]);
                    var D = Object(c.useCallback)((function(e) {
                        N.current && N.current(e)
                    }), []);
                    Object(d.a)((function() {
                        M.current = "", z("")
                    }), [l, z, F]);
                    var K = null !== (t = S.current[M.current]) && void 0 !== t ? t : [];
                    return Object(p.jsx)(m.a, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? j(Object(n), !0).forEach((function(t) {
                                Object(a.a)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({
                        isLoading: A,
                        options: K,
                        searchFilter: x,
                        value: l,
                        onChange: D,
                        onOpenChange: C
                    }, w))
                }
        },
        z3AU: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "value",
                        storageKey: null
                    },
                    t = [e, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "reason",
                        storageKey: null
                    }],
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "AssetForm_data",
                    selections: [{
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
                            name: "chain",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "AbleToType",
                        kind: "LinkedField",
                        name: "isEditable",
                        plural: !1,
                        selections: t,
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "AbleToType",
                        kind: "LinkedField",
                        name: "isFreezable",
                        plural: !1,
                        selections: t,
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isFrozen",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "frozenAt",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "tokenMetadata",
                        storageKey: null
                    }, n, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "description",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "externalLink",
                        storageKey: null
                    }, a, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "animationUrl",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unlockableContent",
                        storageKey: null
                    }, r, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isNsfw",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "CollectionType",
                        kind: "LinkedField",
                        name: "collection",
                        plural: !1,
                        selections: [a, n, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "slug",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "NumericTraitTypePair",
                            kind: "LinkedField",
                            name: "numericTraits",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "key",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "NumericTraitType",
                                kind: "LinkedField",
                                name: "value",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "max",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: [{
                            kind: "Literal",
                            name: "first",
                            value: 100
                        }],
                        concreteType: "TraitTypeConnection",
                        kind: "LinkedField",
                        name: "traits",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "TraitTypeEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "TraitType",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [r, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "displayType",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "floatValue",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "intValue",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "traitType",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "maxValue",
                                    storageKey: null
                                }, e],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: "traits(first:100)"
                    }],
                    type: "AssetType",
                    abstractKey: null
                }
            }();
            a.hash = "538fdf7e90d05251cbcc57e723b3f9ef", t.default = a
        }
    }
]);
//# sourceMappingURL=ea893a6f4a1c4895a88194f2bc49a076b697bcf2.a88bcfb8041f607658ce.js.map