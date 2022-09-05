(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [49], {
        "+tV+": function(e, n, l) {
            "use strict";
            l.r(n);
            var a = function() {
                var e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "assetContract"
                    },
                    n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chain"
                    },
                    l = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "description"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "externalLink"
                    },
                    i = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "imageFile"
                    },
                    s = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "isNsfw"
                    },
                    r = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "levels"
                    },
                    o = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "maxSupply"
                    },
                    c = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "mediaFile"
                    },
                    u = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "name"
                    },
                    d = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "properties"
                    },
                    m = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "recaptchaToken"
                    },
                    g = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "stats"
                    },
                    p = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "unlockableContent"
                    },
                    k = [{
                        kind: "Variable",
                        name: "assetContract",
                        variableName: "assetContract"
                    }, {
                        kind: "Variable",
                        name: "chain",
                        variableName: "chain"
                    }, {
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    }, {
                        kind: "Variable",
                        name: "description",
                        variableName: "description"
                    }, {
                        kind: "Variable",
                        name: "externalLink",
                        variableName: "externalLink"
                    }, {
                        kind: "Variable",
                        name: "imageFile",
                        variableName: "imageFile"
                    }, {
                        kind: "Variable",
                        name: "isNsfw",
                        variableName: "isNsfw"
                    }, {
                        kind: "Variable",
                        name: "levels",
                        variableName: "levels"
                    }, {
                        kind: "Variable",
                        name: "maxSupply",
                        variableName: "maxSupply"
                    }, {
                        kind: "Variable",
                        name: "mediaFile",
                        variableName: "mediaFile"
                    }, {
                        kind: "Variable",
                        name: "name",
                        variableName: "name"
                    }, {
                        kind: "Variable",
                        name: "properties",
                        variableName: "properties"
                    }, {
                        kind: "Variable",
                        name: "recaptchaToken",
                        variableName: "recaptchaToken"
                    }, {
                        kind: "Variable",
                        name: "stats",
                        variableName: "stats"
                    }, {
                        kind: "Variable",
                        name: "unlockableContent",
                        variableName: "unlockableContent"
                    }],
                    y = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "tokenId",
                        storageKey: null
                    },
                    f = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    },
                    b = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "chain",
                        storageKey: null
                    },
                    C = {
                        alias: null,
                        args: null,
                        concreteType: "AssetContractType",
                        kind: "LinkedField",
                        name: "assetContract",
                        plural: !1,
                        selections: [f],
                        storageKey: null
                    },
                    v = {
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
                    },
                    h = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    A = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [e, n, l, a, t, i, s, r, o, c, u, d, m, g, p],
                        kind: "Fragment",
                        metadata: null,
                        name: "AssetCreatePageMutation",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "AssetMutationType",
                            kind: "LinkedField",
                            name: "assets",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: k,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "create",
                                plural: !1,
                                selections: [y, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetContractType",
                                    kind: "LinkedField",
                                    name: "assetContract",
                                    plural: !1,
                                    selections: [f, b],
                                    storageKey: null
                                }, {
                                    kind: "InlineDataFragmentSpread",
                                    name: "asset_url",
                                    selections: [C, y, v]
                                }, {
                                    kind: "InlineDataFragmentSpread",
                                    name: "itemEvents_data",
                                    selections: [h, C, y, v]
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        type: "Mutation",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [e, l, a, t, i, o, c, u, n, p, s, d, r, g, m],
                        kind: "Operation",
                        name: "AssetCreatePageMutation",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "AssetMutationType",
                            kind: "LinkedField",
                            name: "assets",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: k,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "create",
                                plural: !1,
                                selections: [y, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetContractType",
                                    kind: "LinkedField",
                                    name: "assetContract",
                                    plural: !1,
                                    selections: [f, b, A],
                                    storageKey: null
                                }, v, h, A],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "0700c3649a7fa57ff6dce2490360f349",
                        id: null,
                        metadata: {},
                        name: "AssetCreatePageMutation",
                        operationKind: "mutation",
                        text: "mutation AssetCreatePageMutation(\n  $assetContract: AssetContractRelayID\n  $collection: CollectionSlug\n  $description: String\n  $externalLink: URL\n  $imageFile: Upload\n  $maxSupply: String\n  $mediaFile: Upload\n  $name: String!\n  $chain: ChainScalar!\n  $unlockableContent: String\n  $isNsfw: Boolean!\n  $properties: [StringTraitConfig!]\n  $levels: [NumericTraitConfig!]\n  $stats: [NumericTraitConfig!]\n  $recaptchaToken: String\n) {\n  assets {\n    create(assetContract: $assetContract, collection: $collection, description: $description, externalLink: $externalLink, imageFile: $imageFile, maxSupply: $maxSupply, mediaFile: $mediaFile, name: $name, chain: $chain, unlockableContent: $unlockableContent, isNsfw: $isNsfw, properties: $properties, levels: $levels, stats: $stats, recaptchaToken: $recaptchaToken) {\n      tokenId\n      assetContract {\n        address\n        chain\n        id\n      }\n      ...asset_url\n      ...itemEvents_data\n      id\n    }\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n\nfragment itemEvents_data on AssetType {\n  relayId\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n"
                    }
                }
            }();
            a.hash = "ef6cc11dc2401887c07f1930572987a6", n.default = a
        },
        ug6I: function(e, n, l) {
            "use strict";
            l.d(n, "a", (function() {
                return S
            }));
            var a, t, i = l("qd51"),
                s = l("/dBk"),
                r = l.n(s),
                o = l("mXGw"),
                c = l("O+LC"),
                u = (l("wcNg"), l("UutA")),
                d = l("XaKp"),
                m = l("Q5Gx"),
                g = l("jOHK"),
                p = l("+YaZ"),
                k = l("g8rX"),
                y = l("ZwbU"),
                f = l("SMcu"),
                b = l("h64z"),
                C = l("gP3Z"),
                v = l("dgii"),
                h = l("DWpj"),
                A = l("/Kpl"),
                j = l("kCmG"),
                F = l("YTPJ"),
                x = l("HSVd"),
                T = l("heV+"),
                L = l("oYCi"),
                S = function(e) {
                    var n, t, s, u, m, p = e.chain,
                        A = e.data,
                        T = Object(v.a)("assets"),
                        S = Object(o.useState)("form"),
                        O = S[0],
                        K = S[1],
                        w = Object(b.a)().mutate,
                        $ = Object(C.a)().isChainSupportingMintingTool,
                        N = function() {
                            var e = Object(i.a)(r.a.mark((function e(n) {
                                var t, i, s, o, u, d, m, g, p, k, y, f, b, C, v, F, L, S, V, O, $, N, M, D;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (u = n.chain, d = n.collectionOption, m = n.description, g = n.externalLink, p = n.imageFile, k = n.maxSupply, y = n.mediaFile, f = n.name, b = n.unlockableContent, C = n.isNsfw, v = n.properties, F = n.levels, L = n.stats, S = n.recaptchaToken, V = null !== (t = null === d || void 0 === d ? void 0 : d.value) && void 0 !== t ? t : null === A || void 0 === A || null === (i = A.assetCollection) || void 0 === i ? void 0 : i.slug, O = null !== (s = null === d || void 0 === d ? void 0 : d.defaultMintableAssetContract) && void 0 !== s ? s : null === A || void 0 === A || null === (o = A.assetCollection) || void 0 === o ? void 0 : o.defaultMintableAssetContract, K("sign"), e.prev = 4, null === O || void 0 === O || null === ($ = O.openseaVersion) || void 0 === $ || !$.startsWith("1.")) {
                                                e.next = 9;
                                                break
                                            }
                                            if (O.address) {
                                                e.next = 8;
                                                break
                                            }
                                            throw new Error(T("create.errors.missingCollection", "Missing collection"));
                                        case 8:
                                            throw new Error(T("create.errors.mintingNotSupported", "Minting for this collection is no longer supported. Please create a new collection to mint new items"));
                                        case 9:
                                            return K("wait"), e.next = 12, w(void 0 !== a ? a : a = l("+tV+"), {
                                                assetContract: (null === I || void 0 === I || null === (N = I.defaultMintableAssetContract) || void 0 === N ? void 0 : N.relayId) || null,
                                                collection: V,
                                                description: m || null,
                                                externalLink: g || null,
                                                imageFile: p || null,
                                                maxSupply: k,
                                                mediaFile: y || null,
                                                name: f,
                                                chain: u,
                                                unlockableContent: b,
                                                isNsfw: C,
                                                properties: Object.values(v),
                                                levels: Object.values(F),
                                                stats: Object.values(L),
                                                recaptchaToken: S
                                            }, {
                                                shouldAuthenticate: !0
                                            });
                                        case 12:
                                            M = e.sent, D = M.assets.create, K("done"), Object(h.m)(D, {
                                                collectionSlug: V,
                                                unlockableContent: !!b,
                                                isNsfw: C
                                            }), x.a.push("".concat(Object(j.c)(D), "?created=true")), e.next = 25;
                                            break;
                                        case 19:
                                            if (e.prev = 19, e.t0 = e.catch(4), K("form"), !(e.t0 instanceof c.RRNLRequestError)) {
                                                e.next = 24;
                                                break
                                            }
                                            throw e.t0;
                                        case 24:
                                            throw new Error(T("create.errors.serverError", "Error adding your item: {{message}}", {
                                                message: e.t0.message
                                            }, {
                                                forceString: !0
                                            }));
                                        case 25:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [4, 19]
                                ])
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        M = function() {
                            return Object(L.jsx)("div", {
                                className: "collectionManagerAssetCreate--loader",
                                children: Object(L.jsx)(k.a, {
                                    size: "large"
                                })
                            })
                        },
                        I = null === A || void 0 === A ? void 0 : A.assetCollection,
                        D = null !== (n = null === A || void 0 === A ? void 0 : A.assetCollection) && void 0 !== n ? n : null === A || void 0 === A || null === (t = A.getAccount) || void 0 === t ? void 0 : t.defaultCollection,
                        E = null !== p && void 0 !== p ? p : null === D || void 0 === D ? void 0 : D.defaultChain.identifier,
                        P = null === I || void 0 === I || null === (s = I.defaultMintableAssetContract) || void 0 === s || null === (u = s.openseaVersion) || void 0 === u ? void 0 : u.startsWith("1."),
                        _ = [{
                            href: "/collections",
                            label: "My collections"
                        }, {
                            href: D ? Object(F.g)(D) : "/collections",
                            label: null !== (m = null === I || void 0 === I ? void 0 : I.name) && void 0 !== m ? m : T("common:collection", "Collection")
                        }];
                    return Object(L.jsxs)(V, {
                        breadcrumbLinks: I ? _ : void 0,
                        title: T("create.title", "Create New Item"),
                        children: [Object(L.jsx)(f.a, {
                            title: Object(f.b)(T("create.pageTitle", "Create NFTs"))
                        }), A ? Object(L.jsx)(L.Fragment, {
                            children: Object(L.jsx)(g.a, {
                                asset: null,
                                defaultChain: E && $(E) ? E : void 0,
                                disableMaxSupply: P,
                                initialCollectionOption: D ? {
                                    value: D.slug,
                                    label: D.name,
                                    avatar: D.imageUrl ? {
                                        src: D.imageUrl
                                    } : void 0,
                                    defaultMintableAssetContract: D.defaultMintableAssetContract
                                } : void 0,
                                showRecaptcha: !0,
                                onSubmit: N
                            })
                        }) : Object(L.jsx)(d.a, {}), Object(L.jsx)(y.b, {
                            isOpen: "sign" === O || "minting" === O || "wait" === O,
                            children: "wait" === O ? Object(L.jsxs)(L.Fragment, {
                                children: [Object(L.jsx)(y.b.Header, {
                                    children: Object(L.jsx)(y.b.Title, {
                                        children: T("create.wait.title", "Please wait...")
                                    })
                                }), Object(L.jsx)(y.b.Body, {
                                    display: "flex",
                                    justifyContent: "center",
                                    children: M()
                                })]
                            }) : "sign" === O ? Object(L.jsxs)(L.Fragment, {
                                children: [Object(L.jsx)(y.b.Header, {
                                    children: Object(L.jsx)(y.b.Title, {
                                        children: T("create.sign.title", "Waiting for your wallet signature...")
                                    })
                                }), Object(L.jsx)(y.b.Body, {
                                    display: "flex",
                                    justifyContent: "center",
                                    children: M()
                                })]
                            }) : "minting" === O ? Object(L.jsxs)(L.Fragment, {
                                children: [Object(L.jsx)(y.b.Header, {
                                    children: Object(L.jsx)(y.b.Title, {
                                        children: T("create.minting.title", "Minting your token...")
                                    })
                                }), Object(L.jsx)(y.b.Body, {
                                    display: "flex",
                                    justifyContent: "center",
                                    children: Object(L.jsx)(d.a, {})
                                })]
                            }) : null
                        })]
                    })
                };
            S.query = void 0 !== t ? t : t = l("zFvi"), S.cachePolicy = {
                scope: "Private"
            }, S.getInitialProps = T.a.nextParser({
                chain: T.a.Optional(T.a.ChainIdentifier),
                collectionSlug: T.a.Optional(T.a.string)
            }, (function(e, n) {
                var l = e.chain,
                    a = e.collectionSlug;
                return {
                    chain: l,
                    variables: {
                        collection: null !== a && void 0 !== a ? a : void 0,
                        isExistingCollection: !!a,
                        useDefaultCollection: !a,
                        identity: A.a.fromContext(n).getActiveAddressStrict()
                    }
                }
            }));
            var V = Object(u.d)(p.a).withConfig({
                componentId: "sc-1fmugvm-0"
            })([".collectionManagerAssetCreate--loader{align-items:center;display:flex;height:100%;justify-content:center;padding:16px;width:100%;}", ""], Object(m.e)({
                tabletS: Object(u.c)(["width:100%;"])
            }))
        },
        zFvi: function(e, n, l) {
            "use strict";
            l.r(n);
            var a = function() {
                var e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    },
                    n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "identity"
                    },
                    l = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "isExistingCollection"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "useDefaultCollection"
                    },
                    t = [{
                        kind: "Variable",
                        name: "address",
                        variableName: "identity"
                    }],
                    i = {
                        alias: null,
                        args: null,
                        concreteType: "ChainType",
                        kind: "LinkedField",
                        name: "defaultChain",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "identifier",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    s = {
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
                        name: "address",
                        storageKey: null
                    },
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    d = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "openseaVersion",
                        storageKey: null
                    },
                    m = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCategory",
                        storageKey: null
                    },
                    g = {
                        kind: "InlineDataFragmentSpread",
                        name: "collection_url",
                        selections: [o, m]
                    },
                    p = [{
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    }],
                    k = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [e, n, l, a],
                        kind: "Fragment",
                        metadata: null,
                        name: "AssetCreatePageQuery",
                        selections: [{
                            condition: "useDefaultCollection",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [{
                                alias: null,
                                args: t,
                                concreteType: "AccountType",
                                kind: "LinkedField",
                                name: "getAccount",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "defaultCollection",
                                    plural: !1,
                                    selections: [i, s, r, o, {
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetContractType",
                                        kind: "LinkedField",
                                        name: "defaultMintableAssetContract",
                                        plural: !1,
                                        selections: [c, u, d],
                                        storageKey: null
                                    }, g],
                                    storageKey: null
                                }],
                                storageKey: null
                            }]
                        }, {
                            condition: "isExistingCollection",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [{
                                alias: "assetCollection",
                                args: p,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [i, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetContractType",
                                    kind: "LinkedField",
                                    name: "defaultMintableAssetContract",
                                    plural: !1,
                                    selections: [u, c, d],
                                    storageKey: null
                                }, s, o, r, g],
                                storageKey: null
                            }]
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, e, l, a],
                        kind: "Operation",
                        name: "AssetCreatePageQuery",
                        selections: [{
                            condition: "useDefaultCollection",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [{
                                alias: null,
                                args: t,
                                concreteType: "AccountType",
                                kind: "LinkedField",
                                name: "getAccount",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "defaultCollection",
                                    plural: !1,
                                    selections: [i, s, r, o, {
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetContractType",
                                        kind: "LinkedField",
                                        name: "defaultMintableAssetContract",
                                        plural: !1,
                                        selections: [c, u, d, k],
                                        storageKey: null
                                    }, m, k],
                                    storageKey: null
                                }, k],
                                storageKey: null
                            }]
                        }, {
                            condition: "isExistingCollection",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [{
                                alias: "assetCollection",
                                args: p,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [i, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetContractType",
                                    kind: "LinkedField",
                                    name: "defaultMintableAssetContract",
                                    plural: !1,
                                    selections: [u, c, d, k],
                                    storageKey: null
                                }, s, o, r, m, k],
                                storageKey: null
                            }]
                        }]
                    },
                    params: {
                        cacheID: "8b3146a579992c5094e4cfff08e19599",
                        id: null,
                        metadata: {},
                        name: "AssetCreatePageQuery",
                        operationKind: "query",
                        text: "query AssetCreatePageQuery(\n  $identity: AddressScalar!\n  $collection: CollectionSlug\n  $isExistingCollection: Boolean!\n  $useDefaultCollection: Boolean!\n) {\n  getAccount(address: $identity) @include(if: $useDefaultCollection) {\n    defaultCollection {\n      defaultChain {\n        identifier\n      }\n      name\n      imageUrl\n      slug\n      defaultMintableAssetContract {\n        address\n        relayId\n        openseaVersion\n        id\n      }\n      ...collection_url\n      id\n    }\n    id\n  }\n  assetCollection: collection(collection: $collection) @include(if: $isExistingCollection) {\n    defaultChain {\n      identifier\n    }\n    defaultMintableAssetContract {\n      relayId\n      address\n      openseaVersion\n      id\n    }\n    name\n    slug\n    imageUrl\n    ...collection_url\n    id\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "e0153551a7f493988d49f75572ae2762", n.default = a
        }
    }
]);
//# sourceMappingURL=fa04e2c2da5f442f63edf0ab58e2fe90b99c2683.99c0d9615f5972012185.js.map