(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [38], {
        GMTB: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chain"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "contractAddress"
                    },
                    n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "tokenId"
                    },
                    a = [{
                        kind: "Variable",
                        name: "chain",
                        variableName: "chain"
                    }, {
                        kind: "Variable",
                        name: "contractAddress",
                        variableName: "contractAddress"
                    }, {
                        kind: "Variable",
                        name: "tokenId",
                        variableName: "tokenId"
                    }],
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [e, t, n],
                        kind: "Fragment",
                        metadata: null,
                        name: "utilsNFTQuery",
                        selections: [{
                            alias: null,
                            args: a,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "nft",
                            plural: !1,
                            selections: [r, {
                                args: null,
                                kind: "FragmentSpread",
                                name: "utils_asset"
                            }],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, t, e],
                        kind: "Operation",
                        name: "utilsNFTQuery",
                        selections: [{
                            alias: null,
                            args: a,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "nft",
                            plural: !1,
                            selections: [r, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "displayName",
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "5bdf8424c3ce0fdf1555ae2b874284f2",
                        id: null,
                        metadata: {},
                        name: "utilsNFTQuery",
                        operationKind: "query",
                        text: "query utilsNFTQuery(\n  $tokenId: String!\n  $contractAddress: AddressScalar!\n  $chain: ChainScalar!\n) {\n  nft(tokenId: $tokenId, contractAddress: $contractAddress, chain: $chain) {\n    id\n    ...utils_asset\n  }\n}\n\nfragment utils_asset on AssetType {\n  displayName\n}\n"
                    }
                }
            }();
            a.hash = "1205657db583aff35e70bf8648d72cbc", t.default = a
        },
        Hqel: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "utils_asset",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "displayName",
                    storageKey: null
                }],
                type: "AssetType",
                abstractKey: null,
                hash: "50e1a531f515bd5843c08d12e0fe062e"
            };
            t.default = a
        },
        Ok8A: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "recaptchaToken"
                    }],
                    t = [{
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
                                variableName: "collection"
                            }, {
                                kind: "Variable",
                                name: "recaptchaToken",
                                variableName: "recaptchaToken"
                            }],
                            kind: "ScalarField",
                            name: "createMintTransaction",
                            storageKey: null
                        }],
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "utilsPrimaryDropsCreateMintTransactionMutation",
                        selections: t,
                        type: "Mutation",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "utilsPrimaryDropsCreateMintTransactionMutation",
                        selections: t
                    },
                    params: {
                        cacheID: "bbc1454857c4f920626ae41397b55f32",
                        id: null,
                        metadata: {},
                        name: "utilsPrimaryDropsCreateMintTransactionMutation",
                        operationKind: "mutation",
                        text: "mutation utilsPrimaryDropsCreateMintTransactionMutation(\n  $collection: CollectionSlug!\n  $recaptchaToken: String!\n) {\n  collections {\n    createMintTransaction(collection: $collection, recaptchaToken: $recaptchaToken)\n  }\n}\n"
                    }
                }
            }();
            a.hash = "38ad690ce8af922e88bc99cb28b1b879", t.default = a
        },
        RXnZ: function(e, t, n) {
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
                        name: "identity"
                    }],
                    t = [{
                        alias: null,
                        args: null,
                        concreteType: "BlockchainType",
                        kind: "LinkedField",
                        name: "blockchain",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: [{
                                kind: "Variable",
                                name: "asset",
                                variableName: "assetId"
                            }, {
                                kind: "Variable",
                                name: "identity",
                                variableName: "identity"
                            }],
                            kind: "ScalarField",
                            name: "balance",
                            storageKey: null
                        }],
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "utilsPrimaryDropsBalanceQuery",
                        selections: t,
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "utilsPrimaryDropsBalanceQuery",
                        selections: t
                    },
                    params: {
                        cacheID: "9923d609de9a94cfeed7d467fc34a2b7",
                        id: null,
                        metadata: {},
                        name: "utilsPrimaryDropsBalanceQuery",
                        operationKind: "query",
                        text: "query utilsPrimaryDropsBalanceQuery(\n  $assetId: AssetRelayID!\n  $identity: IdentityInputType!\n) {\n  blockchain {\n    balance(asset: $assetId, identity: $identity)\n  }\n}\n"
                    }
                }
            }();
            a.hash = "699e901c98ef776b35a53fb3845e4591", t.default = a
        },
        fUaP: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return U
            })), n.d(t, "k", (function() {
                return Q
            })), n.d(t, "i", (function() {
                return W
            })), n.d(t, "d", (function() {
                return _
            })), n.d(t, "l", (function() {
                return G
            })), n.d(t, "b", (function() {
                return K
            })), n.d(t, "j", (function() {
                return L
            })), n.d(t, "h", (function() {
                return F
            })), n.d(t, "c", (function() {
                return R
            })), n.d(t, "f", (function() {
                return V
            })), n.d(t, "g", (function() {
                return $
            })), n.d(t, "m", (function() {
                return q
            })), n.d(t, "e", (function() {
                return M
            }));
            var a, r, i, c, l = n("m6w3"),
                o = n("uEoR"),
                u = n("qd51"),
                s = n("/dBk"),
                d = n.n(s),
                m = n("mXGw"),
                f = n("2aPM"),
                p = n.n(f),
                b = n("/DEc"),
                y = n("876n"),
                v = n("TiKg"),
                g = n.n(v),
                h = n("dAGg"),
                k = n("aXrf"),
                O = n("YrBu"),
                T = n("d8b/"),
                S = n("xVed"),
                w = n("jg/+"),
                D = n("gsyy"),
                I = n("h64z"),
                E = n("Nbt0"),
                N = n("Oe7D"),
                A = n("LsOE"),
                P = n("BmUw");

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

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        Object(l.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var L = function() {
                    var e = Object(O.a)();
                    Object(T.a)(e, 1e3)
                },
                x = function(e, t) {
                    var n = Object(b.a)(e, t),
                        a = 864e5,
                        r = Math.floor(n / a);
                    n -= r * a;
                    var i = 36e5,
                        c = Math.floor(n / i);
                    n -= c * i;
                    var l = Math.floor(n / 6e4);
                    n -= 6e4 * l;
                    return {
                        days: r,
                        hours: c,
                        minutes: l,
                        seconds: Math.floor(n / 1e3)
                    }
                },
                M = function(e, t, n, a) {
                    return [e > 0 ? "".concat(e, "d") : "", e + t > 0 ? "".concat(t, "h") : "", e + t + n > 0 ? "".concat(n, "m") : "", "".concat(a, "s")].filter((function(e) {
                        return !!e
                    })).join(" ")
                },
                F = function(e) {
                    var t = g()(),
                        n = g()(e.startTime),
                        a = g()(e.endTime),
                        r = !e.endTime;
                    return t.isSameOrAfter(n) && (r || t.isSameOrBefore(a))
                },
                K = function(e) {
                    var t, n, a = e.ctaStage,
                        r = e.mintedItemCount,
                        i = e.totalItemCount,
                        c = new Date,
                        l = new Date(a.startTime),
                        o = a.stageType === D.a.PRESALE,
                        u = a.stageType === D.a.PUBLIC;
                    if (r === i) return "Sold out";
                    if (!o && !u) return "Stay tuned for updates!";
                    if (Object(y.a)(c, l)) {
                        var s = x(l, c),
                            d = s.days,
                            m = s.hours,
                            f = s.minutes,
                            p = s.seconds,
                            b = M(d, m, f, p);
                        return "".concat(b)
                    }
                    return F(a) ? "".concat(null === (t = a.priceType) || void 0 === t ? void 0 : t.unit, " ").concat(null === (n = a.priceType) || void 0 === n ? void 0 : n.symbol) : o ? "Presale ended" : "Public sale ended"
                },
                R = function(e) {
                    var t = e.isAuthenticated,
                        n = e.ctaStage,
                        a = e.mintedItemCount,
                        r = e.totalItemCount,
                        i = e.contextUserData;
                    if (!t || a === r) return "";
                    if (n.perWalletLimit && i.mintedItemCount && n.perWalletLimit === i.mintedItemCount) return "You've reached your mint limit.";
                    var c = new Date,
                        l = new Date(n.startTime);
                    if (Object(y.a)(c, l)) return i.isEligibleNow ? "You're eligible for this ".concat(n.stageType === D.a.PRESALE ? "presale" : "public sale") : "You aren't eligible for the ".concat(n.stageType === D.a.PRESALE ? "".concat(n.label, " presale") : "".concat(n.label, " public sale"), ".");
                    if (F(n)) {
                        if (i.isEligibleNow) {
                            if (!n.perWalletLimit || !i.mintedItemCount) return "";
                            var o = n.perWalletLimit - i.mintedItemCount,
                                u = 1 === o ? "1 mint" : "".concat(o, " mints");
                            return "You have ".concat(u, " left")
                        }
                        return "You aren't eligible for the ".concat(n.stageType === D.a.PRESALE ? "".concat(n.label, " presale") : "".concat(n.label, " public sale"), ".")
                    }
                    return ""
                };

            function B(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e)
                }))
            }
            var V = function(e) {
                    var t, n, a = e.ctaStage,
                        r = e.mintedItemCount;
                    if (r === e.totalItemCount) return "All ".concat(r, " items were minted");
                    if (F(a)) {
                        if (a.endTime) {
                            var i = x(new Date(a.endTime), new Date),
                                c = i.days,
                                l = i.hours,
                                o = i.minutes,
                                u = i.seconds,
                                s = M(c, l, o, u);
                            return "Ends in ".concat(s)
                        }
                        return "Ends when fully minted"
                    }
                    return "".concat(null === (t = a.priceType) || void 0 === t ? void 0 : t.unit, " ").concat(null === (n = a.priceType) || void 0 === n ? void 0 : n.symbol)
                },
                U = {
                    NO_MONEY: "You don't have enough money",
                    UNKOWN: "Something went wrong."
                },
                $ = function() {
                    var e = Object(u.a)(d.a.mark((function e(t, i, c, l, u, s, m) {
                        var f, b, y, v, g, h, k, O, T, w, I, E, P, j;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i(void 0 !== a ? a : a = n("Ok8A"), {
                                        collection: l,
                                        recaptchaToken: u
                                    });
                                case 2:
                                    return v = e.sent, e.next = 5, Object(A.a)(void 0 !== r ? r : r = n("RXnZ"), {
                                        assetId: s.id,
                                        identity: c.getActiveAccountKeyStrict()
                                    });
                                case 5:
                                    if (g = e.sent, h = Object(o.a)(g, 1), k = h[0], !new p.a(null === k || void 0 === k || null === (f = k.blockchain) || void 0 === f ? void 0 : f.balance).dividedBy(new p.a(10).pow(s.decimals || 18)).lte(new p.a(null !== (b = null === (y = m.priceType) || void 0 === y ? void 0 : y.unit) && void 0 !== b ? b : 0).dividedBy(s.decimals || 18))) {
                                        e.next = 10;
                                        break
                                    }
                                    throw new Error(U.NO_MONEY);
                                case 10:
                                    return e.prev = 10, T = null === (O = v.collections) || void 0 === O ? void 0 : O.createMintTransaction, e.next = 14, c.getProvider();
                                case 14:
                                    return w = e.sent, e.next = 17, c.transact({
                                        data: T
                                    });
                                case 17:
                                    return I = e.sent, e.abrupt("return", {
                                        data: w.buildTransactionFromData(T),
                                        transactionHash: I,
                                        status: D.b.PENDING,
                                        chain: t
                                    });
                                case 21:
                                    if (e.prev = 21, e.t0 = e.catch(10), e.t0) {
                                        e.next = 25;
                                        break
                                    }
                                    throw new Error(U.UNKOWN);
                                case 25:
                                    if (E = null === c || void 0 === c ? void 0 : c.getActiveWallet(), P = E === S.g.Phantom && e.t0.code > 0, j = E === S.g.Glow && e.t0.code > 0, !P && !j) {
                                        e.next = 32;
                                        break
                                    }
                                    throw e.t0;
                                case 32:
                                    throw Object(N.d)(e.t0), new Error(U.UNKOWN);
                                case 34:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [10, 21]
                        ])
                    })));
                    return function(t, n, a, r, i, c, l) {
                        return e.apply(this, arguments)
                    }
                }(),
                q = function() {
                    var e = Object(E.a)().showErrorMessage,
                        t = Object(I.a)().wallet,
                        a = Object(m.useState)(void 0),
                        r = a[0],
                        c = a[1];
                    return [r, Object(m.useCallback)(function() {
                        var a = Object(u.a)(d.a.mark((function a(r) {
                            var l, s, m, f, p, b, y, v, g, h, k, O, T;
                            return d.a.wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (c(r), (null === r || void 0 === r ? void 0 : r.status) !== D.b.PENDING) {
                                            a.next = 42;
                                            break
                                        }
                                        return a.next = 4, t.getProvider();
                                    case 4:
                                        f = a.sent, p = function() {
                                            var e = Object(u.a)(d.a.mark((function e() {
                                                var t, n;
                                                return d.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.prev = 0, e.next = 3, f.getSignatureStatus(r.transactionHash);
                                                        case 3:
                                                            return n = e.sent, e.abrupt("return", f.transactionIsPending(n) && !(null !== (t = n.value) && void 0 !== t && t.err));
                                                        case 7:
                                                            return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !0);
                                                        case 10:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e, null, [
                                                    [0, 7]
                                                ])
                                            })));
                                            return function() {
                                                return e.apply(this, arguments)
                                            }
                                        }();
                                    case 6:
                                        return a.next = 8, p();
                                    case 8:
                                        if (!a.sent) {
                                            a.next = 13;
                                            break
                                        }
                                        return a.next = 11, B(3e3);
                                    case 11:
                                        a.next = 6;
                                        break;
                                    case 13:
                                        return a.next = 15, f.getSignatureStatus(r.transactionHash);
                                    case 15:
                                        if (b = a.sent, !(y = null === (l = b.value) || void 0 === l ? void 0 : l.err)) {
                                            a.next = 21;
                                            break
                                        }
                                        return "string" === typeof y && e(y), c(C(C({}, r), {}, {
                                            status: D.b.FAILED
                                        })), a.abrupt("return");
                                    case 21:
                                        g = 0;
                                    case 22:
                                        if (null !== (h = v) && void 0 !== h && null !== (k = h.nft) && void 0 !== k && k.id || !(g < 3)) {
                                            a.next = 41;
                                            break
                                        }
                                        return a.next = 25, B(3e3);
                                    case 25:
                                        return a.prev = 25, a.next = 29, Object(A.a)(void 0 !== i ? i : i = n("GMTB"), {
                                            contractAddress: P.b,
                                            tokenId: _(r),
                                            chain: r.chain
                                        }, {
                                            force: !0
                                        });
                                    case 29:
                                        O = a.sent, T = Object(o.a)(O, 1), v = T[0], a.next = 36;
                                        break;
                                    case 34:
                                        a.prev = 34, a.t0 = a.catch(25);
                                    case 36:
                                        return a.prev = 36, g++, a.finish(36);
                                    case 39:
                                        a.next = 22;
                                        break;
                                    case 41:
                                        null !== (s = v) && void 0 !== s && null !== (m = s.nft) && void 0 !== m && m.id ? c(C(C({}, r), {}, {
                                            itemDataKey: v.nft,
                                            status: D.b.SUCCESS
                                        })) : c(C(C({}, r), {}, {
                                            status: D.b.CONFIRMED
                                        }));
                                    case 42:
                                    case "end":
                                        return a.stop()
                                }
                            }), a, null, [
                                [25, 34, 36, 39]
                            ])
                        })));
                        return function(e) {
                            return a.apply(this, arguments)
                        }
                    }(), [t, e])]
                },
                Q = function(e) {
                    var t = Object(k.useFragment)(void 0 !== c ? c : c = n("Hqel"), (null === e || void 0 === e ? void 0 : e.itemDataKey) || null);
                    return {
                        name: null === t || void 0 === t ? void 0 : t.displayName
                    }
                },
                W = function() {
                    var e = Object(h.useRouter)();
                    return e.query.collectionSlug ? e.query.collectionSlug : void 0
                },
                _ = function(e) {
                    return e.data.signatures[1].publicKey.toString()
                },
                G = function(e) {
                    var t = e.ctaStage,
                        n = e.contextUserData,
                        a = e.mintedItemCount,
                        r = e.totalItemCount,
                        i = Object(I.a)().isAuthenticated,
                        c = Object(w.c)().chain,
                        l = W(),
                        o = !i || !c,
                        u = !o && n.mintedItemCount && t.perWalletLimit && n.mintedItemCount === t.perWalletLimit,
                        s = a === r,
                        d = t.stageType === D.a.PUBLIC;
                    return {
                        collectionSlug: l,
                        userNeedsToLogin: o,
                        userReachTheLimitOfMints: u,
                        collectionIsFullyMinted: s,
                        primaryDropAlreadyStarted: a > 1,
                        primaryDropEnded: s || d && t.endTime && g()().isSameOrAfter(t.endTime)
                    }
                }
        },
        gsyy: function(e, t, n) {
            "use strict";
            var a, r;
            n.d(t, "a", (function() {
                    return a
                })), n.d(t, "b", (function() {
                    return r
                })),
                function(e) {
                    e.PUBLIC = "PUBLIC", e.PRESALE = "PRESALE"
                }(a || (a = {})),
                function(e) {
                    e.PENDING = "PENDING", e.CONFIRMED = "CONFIRMED", e.SUCCESS = "SUCCESS", e.FAILED = "FAILED"
                }(r || (r = {}))
        }
    }
]);
//# sourceMappingURL=c25f288053d84fcdb959ace53890f66097cf1118.9266feca6df30eedd3ec.js.map