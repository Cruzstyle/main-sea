(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [22], {
        "3eQP": function(n, e, a) {
            "use strict";
            a.r(e);
            var t = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sender"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "transferAssetInputs"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "sender",
                        variableName: "sender"
                    }, {
                        kind: "Variable",
                        name: "transferAssetInputs",
                        variableName: "transferAssetInputs"
                    }],
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    },
                    t = {
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
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "chainIdentifier",
                        storageKey: null
                    },
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "value",
                        storageKey: null
                    },
                    s = [l],
                    r = {
                        alias: null,
                        args: null,
                        concreteType: "AddressDataType",
                        kind: "LinkedField",
                        name: "source",
                        plural: !1,
                        selections: s,
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        concreteType: "AddressDataType",
                        kind: "LinkedField",
                        name: "destination",
                        plural: !1,
                        selections: s,
                        storageKey: null
                    },
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "data",
                        storageKey: null
                    },
                    d = {
                        kind: "InlineFragment",
                        selections: [t, i, r, o, l, c],
                        type: "TransactionSubmissionDataType",
                        abstractKey: null
                    },
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "clientMessage",
                        storageKey: null
                    },
                    p = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "clientSignatureStandard",
                        storageKey: null
                    },
                    y = {
                        kind: "InlineFragment",
                        selections: [u, p, {
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
                    },
                    m = {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "method",
                        plural: !1,
                        selections: [a, {
                            kind: "TypeDiscriminator",
                            abstractKey: "__isTransactionMethodType"
                        }, d, y],
                        storageKey: null
                    },
                    g = [m],
                    _ = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "decimals",
                        storageKey: null
                    },
                    A = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    T = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    h = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "minQuantity",
                        storageKey: null
                    },
                    k = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    f = {
                        kind: "InlineFragment",
                        selections: [i, r, o, l, c],
                        type: "TransactionSubmissionDataType",
                        abstractKey: null
                    },
                    b = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "serverSignature",
                        storageKey: null
                    },
                    F = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "side",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "TransferActionsModalContentQuery",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BlockchainType",
                            kind: "LinkedField",
                            name: "blockchain",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: e,
                                concreteType: "ActionDataType",
                                kind: "LinkedField",
                                name: "transferActions",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "actionsV2",
                                    plural: !0,
                                    selections: [{
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "BlockchainActionList_data"
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
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "TransferActionsModalContentQuery",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BlockchainType",
                            kind: "LinkedField",
                            name: "blockchain",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: e,
                                concreteType: "ActionDataType",
                                kind: "LinkedField",
                                name: "transferActions",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "actionsV2",
                                    plural: !0,
                                    selections: [a, {
                                        kind: "TypeDiscriminator",
                                        abstractKey: "__isBlockchainActionType"
                                    }, {
                                        kind: "InlineFragment",
                                        selections: g,
                                        type: "AssetApprovalActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "asset",
                                            plural: !1,
                                            selections: [t, _, A, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "usdSpotPrice",
                                                storageKey: null
                                            }, T],
                                            storageKey: null
                                        }, h],
                                        type: "AskForDepositType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "fromAsset",
                                            plural: !1,
                                            selections: [t, _, A, T, k],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "toAsset",
                                            plural: !1,
                                            selections: [t, A, T, k],
                                            storageKey: null
                                        }, h, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "maxQuantity",
                                            storageKey: null
                                        }],
                                        type: "AskForSwapType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: g,
                                        type: "AssetFreezeMetadataActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "TransactionSubmissionDataType",
                                            kind: "LinkedField",
                                            name: "method",
                                            plural: !1,
                                            selections: [t, {
                                                kind: "InlineFragment",
                                                selections: [a, f, y],
                                                type: "TransactionMethodType",
                                                abstractKey: "__isTransactionMethodType"
                                            }],
                                            storageKey: null
                                        }],
                                        type: "AssetSwapActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: g,
                                        type: "AssetTransferActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "SignAndPostType",
                                            kind: "LinkedField",
                                            name: "method",
                                            plural: !1,
                                            selections: [t, u, p, b, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "orderData",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "OrderDataType",
                                            kind: "LinkedField",
                                            name: "orderData",
                                            plural: !1,
                                            selections: [F, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "isCounterOrder",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        type: "CreateOrderActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "method",
                                            plural: !1,
                                            selections: [a, d, {
                                                kind: "InlineFragment",
                                                selections: [{
                                                    alias: "cancelOrderData",
                                                    args: null,
                                                    concreteType: "SignAndPostOrderCancelDataType",
                                                    kind: "LinkedField",
                                                    name: "data",
                                                    plural: !1,
                                                    selections: [{
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "payload",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "message",
                                                        storageKey: null
                                                    }],
                                                    storageKey: null
                                                }, b, p],
                                                type: "SignAndPostOrderCancelType",
                                                abstractKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        type: "CancelOrderActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [m, {
                                            alias: null,
                                            args: null,
                                            concreteType: "OrderDataType",
                                            kind: "LinkedField",
                                            name: "orderData",
                                            plural: !1,
                                            selections: [F, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "openedAt",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        type: "FulfillOrderActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [m, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "asset",
                                            plural: !1,
                                            selections: [A, T],
                                            storageKey: null
                                        }],
                                        type: "PaymentAssetApprovalActionType",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "TransactionSubmissionDataType",
                                            kind: "LinkedField",
                                            name: "method",
                                            plural: !1,
                                            selections: [a, t, {
                                                kind: "InlineFragment",
                                                selections: [f, y],
                                                type: "TransactionMethodType",
                                                abstractKey: "__isTransactionMethodType"
                                            }],
                                            storageKey: null
                                        }],
                                        type: "MintActionType",
                                        abstractKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "bd7c499fba5ea911978b00477e107288",
                        id: null,
                        metadata: {},
                        name: "TransferActionsModalContentQuery",
                        operationKind: "query",
                        text: "query TransferActionsModalContentQuery(\n  $sender: AddressScalar!\n  $transferAssetInputs: [TransferAssetInputType!]!\n) {\n  blockchain {\n    transferActions(sender: $sender, transferAssetInputs: $transferAssetInputs) {\n      actionsV2 {\n        __typename\n        ...BlockchainActionList_data\n      }\n    }\n  }\n}\n\nfragment AskForDepositAction_data on AskForDepositType {\n  asset {\n    chain {\n      identifier\n    }\n    decimals\n    symbol\n    usdSpotPrice\n    id\n  }\n  minQuantity\n}\n\nfragment AskForSwapAction_data on AskForSwapType {\n  __typename\n  fromAsset {\n    chain {\n      identifier\n    }\n    decimals\n    symbol\n    id\n  }\n  toAsset {\n    chain {\n      identifier\n    }\n    symbol\n    id\n  }\n  minQuantity\n  maxQuantity\n  ...useHandleBlockchainActions_ask_for_asset_swap\n}\n\nfragment AssetApprovalAction_data on AssetApprovalActionType {\n  __typename\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      chain {\n        identifier\n      }\n    }\n  }\n  ...useHandleBlockchainActions_approve_asset\n}\n\nfragment AssetFreezeMetadataAction_data on AssetFreezeMetadataActionType {\n  __typename\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      chain {\n        identifier\n      }\n    }\n  }\n  ...useHandleBlockchainActions_freeze_asset_metadata\n}\n\nfragment AssetSwapAction_data on AssetSwapActionType {\n  __typename\n  method {\n    chain {\n      identifier\n    }\n  }\n  ...useHandleBlockchainActions_swap_asset\n}\n\nfragment AssetTransferAction_data on AssetTransferActionType {\n  __typename\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      chain {\n        identifier\n      }\n    }\n  }\n  ...useHandleBlockchainActions_transfer_asset\n}\n\nfragment BlockchainActionList_data on BlockchainActionType {\n  __isBlockchainActionType: __typename\n  __typename\n  ... on AssetApprovalActionType {\n    ...AssetApprovalAction_data\n  }\n  ... on AskForDepositType {\n    __typename\n    ...AskForDepositAction_data\n  }\n  ... on AskForSwapType {\n    __typename\n    ...AskForSwapAction_data\n  }\n  ... on AssetFreezeMetadataActionType {\n    __typename\n    ...AssetFreezeMetadataAction_data\n  }\n  ... on AssetSwapActionType {\n    __typename\n    ...AssetSwapAction_data\n  }\n  ... on AssetTransferActionType {\n    __typename\n    ...AssetTransferAction_data\n  }\n  ... on CreateOrderActionType {\n    __typename\n    ...CreateOrderAction_data\n  }\n  ... on CancelOrderActionType {\n    __typename\n    ...CancelOrderAction_data\n  }\n  ... on FulfillOrderActionType {\n    __typename\n    ...FulfillOrderAction_data\n  }\n  ... on PaymentAssetApprovalActionType {\n    __typename\n    ...PaymentAssetApprovalAction_data\n  }\n  ... on WaitForBalanceActionType {\n    __typename\n    ...WaitForBalanceAction_data\n  }\n  ... on MintActionType {\n    __typename\n    ...MintAction_data\n  }\n}\n\nfragment CancelOrderAction_data on CancelOrderActionType {\n  __typename\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      chain {\n        identifier\n      }\n    }\n  }\n  ...useHandleBlockchainActions_cancel_orders\n}\n\nfragment CreateOrderAction_data on CreateOrderActionType {\n  __typename\n  method {\n    chain {\n      identifier\n    }\n  }\n  orderData {\n    side\n    isCounterOrder\n  }\n  ...useHandleBlockchainActions_create_order\n}\n\nfragment FulfillOrderAction_data on FulfillOrderActionType {\n  __typename\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      chain {\n        identifier\n      }\n    }\n  }\n  orderData {\n    side\n  }\n  ...useHandleBlockchainActions_fulfill_order\n}\n\nfragment MintAction_data on MintActionType {\n  __typename\n  method {\n    __typename\n    chain {\n      identifier\n    }\n  }\n  ...useHandleBlockchainActions_mint_asset\n}\n\nfragment PaymentAssetApprovalAction_data on PaymentAssetApprovalActionType {\n  __typename\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      chain {\n        identifier\n      }\n    }\n  }\n  asset {\n    symbol\n    id\n  }\n  ...useHandleBlockchainActions_approve_payment_asset\n}\n\nfragment WaitForBalanceAction_data on WaitForBalanceActionType {\n  __typename\n}\n\nfragment useHandleBlockchainActions_approve_asset on AssetApprovalActionType {\n  method {\n    __typename\n    ...useHandleBlockchainActions_transaction_method\n  }\n}\n\nfragment useHandleBlockchainActions_approve_payment_asset on PaymentAssetApprovalActionType {\n  method {\n    __typename\n    ...useHandleBlockchainActions_transaction_method\n  }\n}\n\nfragment useHandleBlockchainActions_ask_for_asset_swap on AskForSwapType {\n  fromAsset {\n    decimals\n    relayId\n    id\n  }\n  toAsset {\n    relayId\n    id\n  }\n}\n\nfragment useHandleBlockchainActions_cancel_orders on CancelOrderActionType {\n  method {\n    __typename\n    ... on TransactionSubmissionDataType {\n      ...useTransaction_transaction\n    }\n    ... on SignAndPostOrderCancelType {\n      cancelOrderData: data {\n        payload\n        message\n      }\n      serverSignature\n      clientSignatureStandard\n    }\n  }\n}\n\nfragment useHandleBlockchainActions_create_order on CreateOrderActionType {\n  method {\n    clientMessage\n    clientSignatureStandard\n    serverSignature\n    orderData\n    chain {\n      identifier\n    }\n  }\n}\n\nfragment useHandleBlockchainActions_freeze_asset_metadata on AssetFreezeMetadataActionType {\n  method {\n    __typename\n    ...useHandleBlockchainActions_transaction_method\n  }\n}\n\nfragment useHandleBlockchainActions_fulfill_order on FulfillOrderActionType {\n  method {\n    __typename\n    ...useHandleBlockchainActions_transaction_method\n  }\n  orderData {\n    openedAt\n  }\n}\n\nfragment useHandleBlockchainActions_mint_asset on MintActionType {\n  method {\n    ...useHandleBlockchainActions_transaction_method\n  }\n}\n\nfragment useHandleBlockchainActions_swap_asset on AssetSwapActionType {\n  method {\n    ...useHandleBlockchainActions_transaction_method\n  }\n}\n\nfragment useHandleBlockchainActions_transaction_method on TransactionMethodType {\n  __isTransactionMethodType: __typename\n  __typename\n  ... on TransactionSubmissionDataType {\n    ...useTransaction_transaction\n  }\n  ... on MetaTransactionDataType {\n    ...useTransaction_meta_transaction\n  }\n}\n\nfragment useHandleBlockchainActions_transfer_asset on AssetTransferActionType {\n  method {\n    __typename\n    ...useHandleBlockchainActions_transaction_method\n  }\n}\n\nfragment useTransaction_meta_transaction on MetaTransactionDataType {\n  clientMessage\n  clientSignatureStandard\n  functionSignature\n  verifyingContract\n}\n\nfragment useTransaction_transaction on TransactionSubmissionDataType {\n  chainIdentifier\n  source {\n    value\n  }\n  destination {\n    value\n  }\n  value\n  data\n}\n"
                    }
                }
            }();
            t.hash = "54e3d8defdccca33da98c46116587f53", e.default = t
        },
        "6Tiu": function(n, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return A
            }));
            a("mXGw");
            var t = a("UutA"),
                i = a("m5he"),
                l = a("qymy"),
                s = a("Q5Gx"),
                r = a("NFoh"),
                o = a("b7Z7"),
                c = a("QrBS"),
                d = a("3FBR"),
                u = a("sX+s"),
                p = a("0c5R"),
                y = a("dgii"),
                m = a("DWpj"),
                g = a("Ly9W"),
                _ = a("oYCi"),
                A = function(n) {
                    var e = n.isBundle,
                        a = n.variant,
                        t = Object(y.a)("assets"),
                        s = e ? t("listingWarning.oneOrMore", "one or more of these items") : t("listingWarning.thisItem", "this item"),
                        r = e ? t("listingWarning.them", "them") : t("listingWarning.theItem", "the item"),
                        A = "preTransfer" === a ? "error" : "warning";
                    return Object(p.a)((function() {
                        Object(m.q)({
                            variant: a
                        })
                    })), Object(_.jsxs)(T, {
                        $isCritical: "preTransfer" === a,
                        variant: A,
                        children: [Object(_.jsxs)(c.a, {
                            alignItems: "center",
                            marginRight: "24px",
                            children: [Object(_.jsx)(u.a, {
                                greaterThan: "sm",
                                children: function(n, e) {
                                    return "prePurchase" === a && e && Object(_.jsx)(o.a, {
                                        marginRight: "16px",
                                        children: Object(_.jsx)(i.a, {
                                            color: "dark-yellow",
                                            value: "report_problem",
                                            variant: "outlined"
                                        })
                                    })
                                }
                            }), Object(_.jsxs)(o.a, {
                                children: [Object(_.jsx)(d.a, {
                                    margin: "0",
                                    variant: "h6",
                                    children: t("listingWarning.reviewPrompt", "Review {{type}} listings", {
                                        type: "postTransfer" !== a ? t("listingWarning.inactive", "inactive") : t("listingWarning.active", "active")
                                    })
                                }), Object(_.jsx)(d.a, {
                                    margin: "8px 0 0 0",
                                    variant: "small",
                                    children: function() {
                                        switch (a) {
                                            case "preTransfer":
                                                return t("listingWarning.preTransferPrompt", "This destination wallet has listings for {{itemText}} which will reactivate on transfer - alert the wallet owner to review and cancel those listings.", {
                                                    itemText: s
                                                });
                                            case "postTransfer":
                                                return t("listingWarning.postTransferPrompt", "You have listings for {{itemText}} which will reactivate if you later transfer {{itemReference}} back to this wallet. Please review and determine if you wish to cancel these listings.", {
                                                    itemText: s,
                                                    itemReference: r
                                                });
                                            case "prePurchase":
                                                return t("listingWarning.prePurchasePrompt", "You have inactive listings for {{itemText}} which will reactivate upon purchase.", {
                                                    itemText: s
                                                });
                                            default:
                                                throw new g.a(a)
                                        }
                                    }()
                                })]
                            })]
                        }), "postTransfer" === a ? Object(_.jsx)(l.a, {
                            href: "https://support.opensea.io/hc/en-us/articles/4415742560403",
                            children: t("listingWarning.learnMoreCTA", "Learn more")
                        }) : Object(_.jsx)(l.a, {
                            href: "/account?tab=listings_inactive",
                            target: "_blank",
                            children: t("listingWarning.reviewCTA", "Review")
                        })]
                    })
                },
                T = Object(t.d)(r.a).withConfig({
                    componentId: "sc-1lpd4vk-0"
                })(["display:flex;justify-content:space-between;width:100%;max-width:800px;flex-direction:column;align-items:flex-start;& ", "{text-align:left;}a{color:", ";font-weight:bold;flex-shrink:0;margin-top:16px;&:hover,&:active{color:", ";}}", ""], d.a, (function(n) {
                    var e = n.theme;
                    return n.$isCritical ? e.colors.error : e.colors.darkStarFish
                }), (function(n) {
                    var e = n.theme;
                    return n.$isCritical ? e.colors.error : e.colors.darkStarFish
                }), Object(s.e)({
                    small: Object(t.c)(["flex-direction:row;align-items:center;a{margin-top:0;}"])
                }))
        },
        "a+Nb": function(n, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return g
            }));
            var t, i = a("mXGw"),
                l = a("aXrf"),
                s = a("zWif"),
                r = a("WakB"),
                o = a("ZwbU"),
                c = a("6Ojl"),
                d = a("h64z"),
                u = a("4u0K"),
                p = a("7v7j"),
                y = a("oYCi"),
                m = function(n) {
                    var e = n.sender,
                        i = n.transferAssetInputs,
                        d = n.onEnd,
                        m = Object(c.b)().onReplace,
                        g = Object(l.useLazyLoadQuery)(void 0 !== t ? t : t = a("3eQP"), {
                            sender: e,
                            transferAssetInputs: i
                        }, {
                            fetchPolicy: "network-only"
                        }),
                        _ = Object(u.b)(i.map((function(n) {
                            var e;
                            return null === (e = n.assetQuantity) || void 0 === e ? void 0 : e.asset
                        })));
                    return Object(y.jsxs)(y.Fragment, {
                        children: [Object(y.jsx)(o.b.Header, {
                            children: Object(y.jsxs)(o.b.Title, {
                                children: ["Transfer your ", Object(p.h)("item", i.length)]
                            })
                        }), Object(y.jsx)(o.b.Body, {
                            children: Object(y.jsx)(s.BlockchainActionList, {
                                dataKey: g.blockchain.transferActions.actionsV2,
                                onEnd: function() {
                                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        e = n.transaction;
                                    e && (m(Object(y.jsx)(r.b, {
                                        mode: "transferred",
                                        transaction: e,
                                        variables: {
                                            assetIDs: _
                                        }
                                    })), null === d || void 0 === d || d(e.transactionHash))
                                }
                            })
                        })]
                    })
                },
                g = function(n) {
                    var e, a = n.transferAssetInputs,
                        t = n.onEnd,
                        l = null === (e = Object(d.a)().wallet.getActiveAccountKey()) || void 0 === e ? void 0 : e.address;
                    return l ? Object(y.jsx)(i.Suspense, {
                        fallback: Object(y.jsx)(s.BlockchainActionListModalSkeleton, {}),
                        children: Object(y.jsx)(m, {
                            sender: l,
                            transferAssetInputs: a,
                            onEnd: t
                        })
                    }) : null
                }
        }
    }
]);
//# sourceMappingURL=4e044d6d797df751250b2f73de6a7e275667d5b6.af8e5c0784affff6224a.js.map