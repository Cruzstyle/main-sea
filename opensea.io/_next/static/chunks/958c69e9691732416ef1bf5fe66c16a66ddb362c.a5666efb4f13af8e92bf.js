(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [31], {
        "0Ugu": function(t, e) {},
        "13DL": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return l
            }));
            var r = n("7L9N"),
                i = n("5jNi"),
                o = n("Fcif"),
                u = n("Uu+j"),
                s = n("d+k8"),
                a = n("MEa7"),
                c = function() {
                    function t(t) {
                        this.options = Object(o.a)({}, t.defaultOptions, t.options), this.mutationId = t.mutationId, this.mutationCache = t.mutationCache, this.observers = [], this.state = t.state || {
                            context: void 0,
                            data: void 0,
                            error: null,
                            failureCount: 0,
                            isPaused: !1,
                            status: "idle",
                            variables: void 0
                        }, this.meta = t.meta
                    }
                    var e = t.prototype;
                    return e.setState = function(t) {
                        this.dispatch({
                            type: "setState",
                            state: t
                        })
                    }, e.addObserver = function(t) {
                        -1 === this.observers.indexOf(t) && this.observers.push(t)
                    }, e.removeObserver = function(t) {
                        this.observers = this.observers.filter((function(e) {
                            return e !== t
                        }))
                    }, e.cancel = function() {
                        return this.retryer ? (this.retryer.cancel(), this.retryer.promise.then(a.j).catch(a.j)) : Promise.resolve()
                    }, e.continue = function() {
                        return this.retryer ? (this.retryer.continue(), this.retryer.promise) : this.execute()
                    }, e.execute = function() {
                        var t, e = this,
                            n = "loading" === this.state.status,
                            r = Promise.resolve();
                        return n || (this.dispatch({
                            type: "loading",
                            variables: this.options.variables
                        }), r = r.then((function() {
                            null == e.mutationCache.config.onMutate || e.mutationCache.config.onMutate(e.state.variables, e)
                        })).then((function() {
                            return null == e.options.onMutate ? void 0 : e.options.onMutate(e.state.variables)
                        })).then((function(t) {
                            t !== e.state.context && e.dispatch({
                                type: "loading",
                                context: t,
                                variables: e.state.variables
                            })
                        }))), r.then((function() {
                            return e.executeMutation()
                        })).then((function(n) {
                            t = n, null == e.mutationCache.config.onSuccess || e.mutationCache.config.onSuccess(t, e.state.variables, e.state.context, e)
                        })).then((function() {
                            return null == e.options.onSuccess ? void 0 : e.options.onSuccess(t, e.state.variables, e.state.context)
                        })).then((function() {
                            return null == e.options.onSettled ? void 0 : e.options.onSettled(t, null, e.state.variables, e.state.context)
                        })).then((function() {
                            return e.dispatch({
                                type: "success",
                                data: t
                            }), t
                        })).catch((function(t) {
                            return null == e.mutationCache.config.onError || e.mutationCache.config.onError(t, e.state.variables, e.state.context, e), Object(u.a)().error(t), Promise.resolve().then((function() {
                                return null == e.options.onError ? void 0 : e.options.onError(t, e.state.variables, e.state.context)
                            })).then((function() {
                                return null == e.options.onSettled ? void 0 : e.options.onSettled(void 0, t, e.state.variables, e.state.context)
                            })).then((function() {
                                throw e.dispatch({
                                    type: "error",
                                    error: t
                                }), t
                            }))
                        }))
                    }, e.executeMutation = function() {
                        var t, e = this;
                        return this.retryer = new s.a({
                            fn: function() {
                                return e.options.mutationFn ? e.options.mutationFn(e.state.variables) : Promise.reject("No mutationFn found")
                            },
                            onFail: function() {
                                e.dispatch({
                                    type: "failed"
                                })
                            },
                            onPause: function() {
                                e.dispatch({
                                    type: "pause"
                                })
                            },
                            onContinue: function() {
                                e.dispatch({
                                    type: "continue"
                                })
                            },
                            retry: null != (t = this.options.retry) ? t : 0,
                            retryDelay: this.options.retryDelay
                        }), this.retryer.promise
                    }, e.dispatch = function(t) {
                        var e = this;
                        this.state = function(t, e) {
                            switch (e.type) {
                                case "failed":
                                    return Object(o.a)({}, t, {
                                        failureCount: t.failureCount + 1
                                    });
                                case "pause":
                                    return Object(o.a)({}, t, {
                                        isPaused: !0
                                    });
                                case "continue":
                                    return Object(o.a)({}, t, {
                                        isPaused: !1
                                    });
                                case "loading":
                                    return Object(o.a)({}, t, {
                                        context: e.context,
                                        data: void 0,
                                        error: null,
                                        isPaused: !1,
                                        status: "loading",
                                        variables: e.variables
                                    });
                                case "success":
                                    return Object(o.a)({}, t, {
                                        data: e.data,
                                        error: null,
                                        status: "success",
                                        isPaused: !1
                                    });
                                case "error":
                                    return Object(o.a)({}, t, {
                                        data: void 0,
                                        error: e.error,
                                        failureCount: t.failureCount + 1,
                                        isPaused: !1,
                                        status: "error"
                                    });
                                case "setState":
                                    return Object(o.a)({}, t, e.state);
                                default:
                                    return t
                            }
                        }(this.state, t), i.a.batch((function() {
                            e.observers.forEach((function(e) {
                                e.onMutationUpdate(t)
                            })), e.mutationCache.notify(e)
                        }))
                    }, t
                }();
            var l = function(t) {
                function e(e) {
                    var n;
                    return (n = t.call(this) || this).config = e || {}, n.mutations = [], n.mutationId = 0, n
                }
                Object(r.a)(e, t);
                var n = e.prototype;
                return n.build = function(t, e, n) {
                    var r = new c({
                        mutationCache: this,
                        mutationId: ++this.mutationId,
                        options: t.defaultMutationOptions(e),
                        state: n,
                        defaultOptions: e.mutationKey ? t.getMutationDefaults(e.mutationKey) : void 0,
                        meta: e.meta
                    });
                    return this.add(r), r
                }, n.add = function(t) {
                    this.mutations.push(t), this.notify(t)
                }, n.remove = function(t) {
                    this.mutations = this.mutations.filter((function(e) {
                        return e !== t
                    })), t.cancel(), this.notify(t)
                }, n.clear = function() {
                    var t = this;
                    i.a.batch((function() {
                        t.mutations.forEach((function(e) {
                            t.remove(e)
                        }))
                    }))
                }, n.getAll = function() {
                    return this.mutations
                }, n.find = function(t) {
                    return "undefined" === typeof t.exact && (t.exact = !0), this.mutations.find((function(e) {
                        return Object(a.h)(t, e)
                    }))
                }, n.findAll = function(t) {
                    return this.mutations.filter((function(e) {
                        return Object(a.h)(t, e)
                    }))
                }, n.notify = function(t) {
                    var e = this;
                    i.a.batch((function() {
                        e.listeners.forEach((function(e) {
                            e(t)
                        }))
                    }))
                }, n.onFocus = function() {
                    this.resumePausedMutations()
                }, n.onOnline = function() {
                    this.resumePausedMutations()
                }, n.resumePausedMutations = function() {
                    var t = this.mutations.filter((function(t) {
                        return t.state.isPaused
                    }));
                    return i.a.batch((function() {
                        return t.reduce((function(t, e) {
                            return t.then((function() {
                                return e.continue().catch(a.j)
                            }))
                        }), Promise.resolve())
                    }))
                }, e
            }(n("7EV7").a)
        },
        "5jNi": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            }));
            var r = n("MEa7"),
                i = new(function() {
                    function t() {
                        this.queue = [], this.transactions = 0, this.notifyFn = function(t) {
                            t()
                        }, this.batchNotifyFn = function(t) {
                            t()
                        }
                    }
                    var e = t.prototype;
                    return e.batch = function(t) {
                        var e;
                        this.transactions++;
                        try {
                            e = t()
                        } finally {
                            this.transactions--, this.transactions || this.flush()
                        }
                        return e
                    }, e.schedule = function(t) {
                        var e = this;
                        this.transactions ? this.queue.push(t) : Object(r.o)((function() {
                            e.notifyFn(t)
                        }))
                    }, e.batchCalls = function(t) {
                        var e = this;
                        return function() {
                            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            e.schedule((function() {
                                t.apply(void 0, r)
                            }))
                        }
                    }, e.flush = function() {
                        var t = this,
                            e = this.queue;
                        this.queue = [], e.length && Object(r.o)((function() {
                            t.batchNotifyFn((function() {
                                e.forEach((function(e) {
                                    t.notifyFn(e)
                                }))
                            }))
                        }))
                    }, e.setNotifyFunction = function(t) {
                        this.notifyFn = t
                    }, e.setBatchNotifyFunction = function(t) {
                        this.batchNotifyFn = t
                    }, t
                }())
        },
        "7EV7": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = function() {
                function t() {
                    this.listeners = []
                }
                var e = t.prototype;
                return e.subscribe = function(t) {
                    var e = this,
                        n = t || function() {};
                    return this.listeners.push(n), this.onSubscribe(),
                        function() {
                            e.listeners = e.listeners.filter((function(t) {
                                return t !== n
                            })), e.onUnsubscribe()
                        }
                }, e.hasListeners = function() {
                    return this.listeners.length > 0
                }, e.onSubscribe = function() {}, e.onUnsubscribe = function() {}, t
            }()
        },
        "7L9N": function(t, e, n) {
            "use strict";

            function r(t, e) {
                return (r = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function i(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, r(t, e)
            }
            n.d(e, "a", (function() {
                return i
            }))
        },
        "9mw8": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return h
            }));
            var r = n("Fcif"),
                i = n("7L9N"),
                o = n("MEa7"),
                u = n("5jNi"),
                s = n("hB7h"),
                a = n("7EV7"),
                c = n("Uu+j"),
                l = n("d+k8"),
                h = function(t) {
                    function e(e, n) {
                        var r;
                        return (r = t.call(this) || this).client = e, r.options = n, r.trackedProps = [], r.selectError = null, r.bindMethods(), r.setOptions(n), r
                    }
                    Object(i.a)(e, t);
                    var n = e.prototype;
                    return n.bindMethods = function() {
                        this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
                    }, n.onSubscribe = function() {
                        1 === this.listeners.length && (this.currentQuery.addObserver(this), f(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
                    }, n.onUnsubscribe = function() {
                        this.listeners.length || this.destroy()
                    }, n.shouldFetchOnReconnect = function() {
                        return d(this.currentQuery, this.options, this.options.refetchOnReconnect)
                    }, n.shouldFetchOnWindowFocus = function() {
                        return d(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
                    }, n.destroy = function() {
                        this.listeners = [], this.clearTimers(), this.currentQuery.removeObserver(this)
                    }, n.setOptions = function(t, e) {
                        var n = this.options,
                            r = this.currentQuery;
                        if (this.options = this.client.defaultQueryObserverOptions(t), "undefined" !== typeof this.options.enabled && "boolean" !== typeof this.options.enabled) throw new Error("Expected enabled to be a boolean");
                        this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
                        var i = this.hasListeners();
                        i && p(this.currentQuery, r, this.options, n) && this.executeFetch(), this.updateResult(e), !i || this.currentQuery === r && this.options.enabled === n.enabled && this.options.staleTime === n.staleTime || this.updateStaleTimeout();
                        var o = this.computeRefetchInterval();
                        !i || this.currentQuery === r && this.options.enabled === n.enabled && o === this.currentRefetchInterval || this.updateRefetchInterval(o)
                    }, n.getOptimisticResult = function(t) {
                        var e = this.client.defaultQueryObserverOptions(t),
                            n = this.client.getQueryCache().build(this.client, e);
                        return this.createResult(n, e)
                    }, n.getCurrentResult = function() {
                        return this.currentResult
                    }, n.trackResult = function(t, e) {
                        var n = this,
                            r = {},
                            i = function(t) {
                                n.trackedProps.includes(t) || n.trackedProps.push(t)
                            };
                        return Object.keys(t).forEach((function(e) {
                            Object.defineProperty(r, e, {
                                configurable: !1,
                                enumerable: !0,
                                get: function() {
                                    return i(e), t[e]
                                }
                            })
                        })), (e.useErrorBoundary || e.suspense) && i("error"), r
                    }, n.getNextResult = function(t) {
                        var e = this;
                        return new Promise((function(n, r) {
                            var i = e.subscribe((function(e) {
                                e.isFetching || (i(), e.isError && (null == t ? void 0 : t.throwOnError) ? r(e.error) : n(e))
                            }))
                        }))
                    }, n.getCurrentQuery = function() {
                        return this.currentQuery
                    }, n.remove = function() {
                        this.client.getQueryCache().remove(this.currentQuery)
                    }, n.refetch = function(t) {
                        return this.fetch(Object(r.a)({}, t, {
                            meta: {
                                refetchPage: null == t ? void 0 : t.refetchPage
                            }
                        }))
                    }, n.fetchOptimistic = function(t) {
                        var e = this,
                            n = this.client.defaultQueryObserverOptions(t),
                            r = this.client.getQueryCache().build(this.client, n);
                        return r.fetch().then((function() {
                            return e.createResult(r, n)
                        }))
                    }, n.fetch = function(t) {
                        var e = this;
                        return this.executeFetch(t).then((function() {
                            return e.updateResult(), e.currentResult
                        }))
                    }, n.executeFetch = function(t) {
                        this.updateQuery();
                        var e = this.currentQuery.fetch(this.options, t);
                        return (null == t ? void 0 : t.throwOnError) || (e = e.catch(o.j)), e
                    }, n.updateStaleTimeout = function() {
                        var t = this;
                        if (this.clearStaleTimeout(), !o.f && !this.currentResult.isStale && Object(o.g)(this.options.staleTime)) {
                            var e = Object(o.r)(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
                            this.staleTimeoutId = setTimeout((function() {
                                t.currentResult.isStale || t.updateResult()
                            }), e)
                        }
                    }, n.computeRefetchInterval = function() {
                        var t;
                        return "function" === typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (t = this.options.refetchInterval) && t
                    }, n.updateRefetchInterval = function(t) {
                        var e = this;
                        this.clearRefetchInterval(), this.currentRefetchInterval = t, !o.f && !1 !== this.options.enabled && Object(o.g)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval((function() {
                            (e.options.refetchIntervalInBackground || s.a.isFocused()) && e.executeFetch()
                        }), this.currentRefetchInterval))
                    }, n.updateTimers = function() {
                        this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
                    }, n.clearTimers = function() {
                        this.clearStaleTimeout(), this.clearRefetchInterval()
                    }, n.clearStaleTimeout = function() {
                        this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
                    }, n.clearRefetchInterval = function() {
                        this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
                    }, n.createResult = function(t, e) {
                        var n, r = this.currentQuery,
                            i = this.options,
                            u = this.currentResult,
                            s = this.currentResultState,
                            a = this.currentResultOptions,
                            l = t !== r,
                            h = l ? t.state : this.currentQueryInitialState,
                            d = l ? this.currentResult : this.previousQueryResult,
                            y = t.state,
                            b = y.dataUpdatedAt,
                            m = y.error,
                            O = y.errorUpdatedAt,
                            g = y.isFetching,
                            j = y.status,
                            C = !1,
                            x = !1;
                        if (e.optimisticResults) {
                            var w = this.hasListeners(),
                                q = !w && f(t, e),
                                F = w && p(t, r, e, i);
                            (q || F) && (g = !0, b || (j = "loading"))
                        }
                        if (e.keepPreviousData && !y.dataUpdateCount && (null == d ? void 0 : d.isSuccess) && "error" !== j) n = d.data, b = d.dataUpdatedAt, j = d.status, C = !0;
                        else if (e.select && "undefined" !== typeof y.data)
                            if (u && y.data === (null == s ? void 0 : s.data) && e.select === this.selectFn) n = this.selectResult;
                            else try {
                                this.selectFn = e.select, n = e.select(y.data), !1 !== e.structuralSharing && (n = Object(o.n)(null == u ? void 0 : u.data, n)), this.selectResult = n, this.selectError = null
                            } catch (R) {
                                Object(c.a)().error(R), this.selectError = R
                            } else n = y.data;
                        if ("undefined" !== typeof e.placeholderData && "undefined" === typeof n && ("loading" === j || "idle" === j)) {
                            var Q;
                            if ((null == u ? void 0 : u.isPlaceholderData) && e.placeholderData === (null == a ? void 0 : a.placeholderData)) Q = u.data;
                            else if (Q = "function" === typeof e.placeholderData ? e.placeholderData() : e.placeholderData, e.select && "undefined" !== typeof Q) try {
                                Q = e.select(Q), !1 !== e.structuralSharing && (Q = Object(o.n)(null == u ? void 0 : u.data, Q)), this.selectError = null
                            } catch (R) {
                                Object(c.a)().error(R), this.selectError = R
                            }
                            "undefined" !== typeof Q && (j = "success", n = Q, x = !0)
                        }
                        return this.selectError && (m = this.selectError, n = this.selectResult, O = Date.now(), j = "error"), {
                            status: j,
                            isLoading: "loading" === j,
                            isSuccess: "success" === j,
                            isError: "error" === j,
                            isIdle: "idle" === j,
                            data: n,
                            dataUpdatedAt: b,
                            error: m,
                            errorUpdatedAt: O,
                            failureCount: y.fetchFailureCount,
                            errorUpdateCount: y.errorUpdateCount,
                            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                            isFetchedAfterMount: y.dataUpdateCount > h.dataUpdateCount || y.errorUpdateCount > h.errorUpdateCount,
                            isFetching: g,
                            isRefetching: g && "loading" !== j,
                            isLoadingError: "error" === j && 0 === y.dataUpdatedAt,
                            isPlaceholderData: x,
                            isPreviousData: C,
                            isRefetchError: "error" === j && 0 !== y.dataUpdatedAt,
                            isStale: v(t, e),
                            refetch: this.refetch,
                            remove: this.remove
                        }
                    }, n.shouldNotifyListeners = function(t, e) {
                        if (!e) return !0;
                        var n = this.options,
                            r = n.notifyOnChangeProps,
                            i = n.notifyOnChangePropsExclusions;
                        if (!r && !i) return !0;
                        if ("tracked" === r && !this.trackedProps.length) return !0;
                        var o = "tracked" === r ? this.trackedProps : r;
                        return Object.keys(t).some((function(n) {
                            var r = n,
                                u = t[r] !== e[r],
                                s = null == o ? void 0 : o.some((function(t) {
                                    return t === n
                                })),
                                a = null == i ? void 0 : i.some((function(t) {
                                    return t === n
                                }));
                            return u && !a && (!o || s)
                        }))
                    }, n.updateResult = function(t) {
                        var e = this.currentResult;
                        if (this.currentResult = this.createResult(this.currentQuery, this.options), this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, !Object(o.p)(this.currentResult, e)) {
                            var n = {
                                cache: !0
                            };
                            !1 !== (null == t ? void 0 : t.listeners) && this.shouldNotifyListeners(this.currentResult, e) && (n.listeners = !0), this.notify(Object(r.a)({}, n, t))
                        }
                    }, n.updateQuery = function() {
                        var t = this.client.getQueryCache().build(this.client, this.options);
                        if (t !== this.currentQuery) {
                            var e = this.currentQuery;
                            this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == e || e.removeObserver(this), t.addObserver(this))
                        }
                    }, n.onQueryUpdate = function(t) {
                        var e = {};
                        "success" === t.type ? e.onSuccess = !0 : "error" !== t.type || Object(l.c)(t.error) || (e.onError = !0), this.updateResult(e), this.hasListeners() && this.updateTimers()
                    }, n.notify = function(t) {
                        var e = this;
                        u.a.batch((function() {
                            t.onSuccess ? (null == e.options.onSuccess || e.options.onSuccess(e.currentResult.data), null == e.options.onSettled || e.options.onSettled(e.currentResult.data, null)) : t.onError && (null == e.options.onError || e.options.onError(e.currentResult.error), null == e.options.onSettled || e.options.onSettled(void 0, e.currentResult.error)), t.listeners && e.listeners.forEach((function(t) {
                                t(e.currentResult)
                            })), t.cache && e.client.getQueryCache().notify({
                                query: e.currentQuery,
                                type: "observerResultsUpdated"
                            })
                        }))
                    }, e
                }(a.a);

            function f(t, e) {
                return function(t, e) {
                    return !1 !== e.enabled && !t.state.dataUpdatedAt && !("error" === t.state.status && !1 === e.retryOnMount)
                }(t, e) || t.state.dataUpdatedAt > 0 && d(t, e, e.refetchOnMount)
            }

            function d(t, e, n) {
                if (!1 !== e.enabled) {
                    var r = "function" === typeof n ? n(t) : n;
                    return "always" === r || !1 !== r && v(t, e)
                }
                return !1
            }

            function p(t, e, n, r) {
                return !1 !== n.enabled && (t !== e || !1 === r.enabled) && (!n.suspense || "error" !== t.state.status) && v(t, n)
            }

            function v(t, e) {
                return t.isStaleByTime(e.staleTime)
            }
        },
        Ax8a: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return P
            })), n.d(e, "a", (function() {
                return E
            }));
            n("mXGw");
            var r, i, o = n("aXrf"),
                u = n("UutA"),
                s = n("NXiZ"),
                a = n("qymy"),
                c = n("Q5Gx"),
                l = n("b7Z7"),
                h = n("QrBS"),
                f = n("lqpq"),
                d = n("Uh/H"),
                p = n("3FBR"),
                v = n("sX+s"),
                y = n("1p8O"),
                b = n("inXz"),
                m = n("YTPJ"),
                O = n("B6yL"),
                g = n("b2pk"),
                j = n("D4YM"),
                C = n("67yl"),
                x = n("ocrj"),
                w = n("t3V9"),
                q = n("m5he"),
                F = n("oYCi"),
                Q = function(t) {
                    var e = t.dataKey,
                        i = Object(o.useFragment)(void 0 !== r ? r : r = n("hc1Z"), e);
                    return Object(F.jsx)(h.a, {
                        position: "absolute",
                        right: "12px",
                        top: "12px",
                        children: Object(F.jsx)(x.a, {
                            content: function(t) {
                                var e = t.List,
                                    n = t.Item;
                                return Object(F.jsxs)(e, {
                                    children: [Object(F.jsx)(R, {
                                        children: Object(F.jsxs)(n, {
                                            href: Object(m.d)(i),
                                            children: [Object(F.jsx)(n.Avatar, {
                                                icon: "edit"
                                            }), Object(F.jsx)(n.Content, {
                                                children: Object(F.jsx)(n.Title, {
                                                    children: "Edit"
                                                })
                                            })]
                                        })
                                    }), Object(F.jsx)(R, {
                                        children: Object(F.jsxs)(n, {
                                            href: Object(m.e)(i),
                                            children: [Object(F.jsx)(n.Avatar, {
                                                icon: "attach_money"
                                            }), Object(F.jsx)(n.Content, {
                                                children: Object(F.jsx)(n.Title, {
                                                    children: "Creator earnings"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            },
                            placement: "bottom-end",
                            children: Object(F.jsx)(S, {
                                children: Object(F.jsx)(w.a, {
                                    onClick: function(t) {
                                        t.stopPropagation(), t.preventDefault()
                                    },
                                    children: Object(F.jsx)(q.a, {
                                        "aria-label": "More",
                                        value: "more_vert"
                                    })
                                })
                            })
                        })
                    })
                },
                R = u.d.div.withConfig({
                    componentId: "sc-1267gkc-0"
                })(["opacity:0.85;:hover{opacity:1;}"]),
                S = Object(u.d)(C.a).withConfig({
                    componentId: "sc-1267gkc-1"
                })(["background-color:", ";border-radius:", ";color:", ";overflow:hidden;opacity:0.9;padding:4px;&:hover{box-shadow:", ";opacity:1;}"], (function(t) {
                    return t.theme.colors.card
                }), (function(t) {
                    return t.theme.borderRadius.default
                }), (function(t) {
                    return t.theme.colors.text.body
                }), (function(t) {
                    return t.theme.shadows.default
                })),
                P = function(t, e, n) {
                    return !!t && (!n || !!e)
                },
                E = Object.assign((function(t) {
                    var e = t.collection,
                        r = t.padding,
                        u = t.collectionIndex,
                        c = t.queryName,
                        d = t.resultArea,
                        p = t.resultType,
                        v = t.requireBannerImage,
                        y = t.showContextMenu,
                        j = t.subtitle,
                        C = t.onClick,
                        x = Object(o.useFragment)(void 0 !== i ? i : i = n("s8L/"), e);
                    if (!P(x.logo, x.banner, v)) return null;
                    var w = Object(m.g)(x);
                    return Object(F.jsx)(T, {
                        padding: r,
                        children: Object(F.jsx)(a.a, {
                            href: w,
                            onClick: function() {
                                return t = w, (e = u) && d && p && Object(b.d)({
                                    resultIndex: e,
                                    resultUrl: t,
                                    resultArea: d,
                                    resultType: p,
                                    query: c,
                                    path: window.location.pathname
                                }), void(null === C || void 0 === C || C());
                                var t, e
                            },
                            children: Object(F.jsxs)(k, {
                                children: [Object(F.jsx)(l.a, {
                                    height: "0",
                                    paddingBottom: "".concat(56.25, "%"),
                                    position: "relative",
                                    children: Object(F.jsx)(N, {
                                        alt: x.name,
                                        layout: "fill",
                                        objectFit: "cover",
                                        src: x.banner ? Object(O.t)(x.banner, {
                                            height: 400
                                        }) : "",
                                        unoptimized: !0
                                    })
                                }), y && Object(F.jsx)(I, {
                                    children: Object(F.jsx)(Q, {
                                        dataKey: x
                                    })
                                }), Object(F.jsxs)(K, {
                                    marginTop: "-26px",
                                    children: [Object(F.jsx)(A, {
                                        children: Object(F.jsx)(L, {
                                            alt: x.name,
                                            height: 70,
                                            layout: "fixed",
                                            objectFit: "cover",
                                            src: x.logo ? Object(O.t)(x.logo, {
                                                size: 70
                                            }) : "",
                                            unoptimized: !0,
                                            width: 70
                                        })
                                    }), Object(F.jsxs)(f.a, {
                                        overflow: "hidden",
                                        children: [Object(F.jsxs)(h.a, {
                                            alignItems: "center",
                                            justifyContent: "left",
                                            marginTop: j ? "26px" : "32px",
                                            overflow: "hidden",
                                            children: [Object(F.jsx)(H, {
                                                as: "div",
                                                variant: "h5",
                                                children: x.name
                                            }), Object(g.b)(x.verificationStatus) && Object(F.jsx)(s.a, {
                                                showTooltip: !1,
                                                size: "small",
                                                verificationStatus: x.verificationStatus
                                            })]
                                        }), j && Object(F.jsx)(H, {
                                            as: "div",
                                            paddingLeft: "16px",
                                            variant: "small-thin-subtle",
                                            children: j
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                }), {
                    Skeleton: function() {
                        return Object(F.jsx)(y.a, {
                            height: "auto",
                            padding: "4px",
                            position: "relative",
                            children: Object(F.jsxs)(k, {
                                children: [Object(F.jsx)(y.a.Row, {
                                    children: Object(F.jsx)(D, {
                                        direction: "rtl"
                                    })
                                }), Object(F.jsxs)(U, {
                                    children: [Object(F.jsx)(M, {
                                        variant: "full"
                                    }), Object(F.jsx)(h.a, {
                                        alignItems: "center",
                                        paddingTop: "8px",
                                        width: "100%",
                                        children: Object(F.jsx)(y.a.Line, {
                                            direction: "rtl",
                                            height: "18px",
                                            width: "200px"
                                        })
                                    })]
                                })]
                            })
                        })
                    }
                }),
                I = u.d.div.withConfig({
                    componentId: "sc-hthsq2-0"
                })(["display:block;@media ", "{display:none;}"], Object(c.d)(v.c.md)),
                k = Object(u.d)(l.a).withConfig({
                    componentId: "sc-hthsq2-1"
                })(["background-color:", ";border-radius:", ";box-shadow:0 4px 8px rgba(0,0,0,0.04);transition:box-shadow 0.25s 0s ease-in-out;@media (hover:hover){&:hover{box-shadow:0 2px 8px rgba(0,0,0,0.1);", " ", "{display:block;}}}"], (function(t) {
                    return t.theme.colors.card
                }), (function(t) {
                    return t.theme.borderRadius.default
                }), (function(t) {
                    return Object(j.d)({
                        variants: {
                            dark: {
                                backgroundColor: t.theme.colors.ash,
                                transition: "background-color 0.25s ease-in-out"
                            }
                        }
                    })
                }), I),
                A = u.d.div.withConfig({
                    componentId: "sc-hthsq2-2"
                })(["width:78px;height:78px;border:4px solid ", ";border-radius:", ";box-shadow:0px 5px 10px rgba(0,0,0,0.08);background-color:", ";position:relative;", ":hover &{", "}"], (function(t) {
                    return t.theme.colors.card
                }), (function(t) {
                    return t.theme.borderRadius.default
                }), (function(t) {
                    return t.theme.colors.card
                }), k, (function(t) {
                    return Object(j.d)({
                        variants: {
                            light: {
                                borderColor: t.theme.colors.card
                            },
                            dark: {
                                borderColor: t.theme.colors.ash,
                                transition: "border 0.25s ease-in-out"
                            }
                        }
                    })
                })),
                D = Object(u.d)(y.a.Block).withConfig({
                    componentId: "sc-hthsq2-3"
                })(["height:0;padding-bottom:", "%;border-top-right-radius:12px;border-top-left-radius:12px;"], 56.25),
                M = Object(u.d)(y.a.Block).withConfig({
                    componentId: "sc-hthsq2-4"
                })(["width:78px;height:78px;margin-top:-78px;padding:16px;border-radius:12px;"]),
                U = Object(u.d)(y.a).withConfig({
                    componentId: "sc-hthsq2-5"
                })(["justify-content:flex-end;flex-direction:column;padding:16px;border-radius:12px;border-top-right-radius:0px;border-top-left-radius:0px;background:", ";"], (function(t) {
                    return t.theme.colors.card
                })),
                T = Object(u.d)(l.a).withConfig({
                    componentId: "sc-hthsq2-6"
                })(["display:inline-block;position:relative;width:100%;"]),
                K = Object(u.d)(h.a).withConfig({
                    componentId: "sc-hthsq2-7"
                })(["padding:16px;border-radius:12px;z-index:99;"]),
                L = Object(u.d)(d.a).withConfig({
                    componentId: "sc-hthsq2-8"
                })(["border-radius:", ";"], (function(t) {
                    return t.theme.borderRadius.default
                })),
                N = Object(u.d)(d.a).withConfig({
                    componentId: "sc-hthsq2-9"
                })(["background-color:", ";border-top-left-radius:", ";border-top-right-radius:", ";position:absolute;top:0;right:0;bottom:0;left:0;.Image--image{position:absolute;}"], (function(t) {
                    return t.theme.colors.card
                }), (function(t) {
                    return t.theme.borderRadius.default
                }), (function(t) {
                    return t.theme.borderRadius.default
                })),
                H = Object(u.d)(p.a).withConfig({
                    componentId: "sc-hthsq2-10"
                })(["display:block;align-items:center;margin:0;padding-left:16px;overflow:hidden;word-break:break-all;text-overflow:ellipsis;white-space:nowrap;text-align:left;"])
        },
        B5kz: function(t, e, n) {
            "use strict";
            var r = n("lvKb");
            n.o(r, "Hydrate") && n.d(e, "Hydrate", (function() {
                return r.Hydrate
            })), n.o(r, "QueryClient") && n.d(e, "QueryClient", (function() {
                return r.QueryClient
            })), n.o(r, "QueryClientProvider") && n.d(e, "QueryClientProvider", (function() {
                return r.QueryClientProvider
            })), n.o(r, "useQuery") && n.d(e, "useQuery", (function() {
                return r.useQuery
            }));
            var i = n("xYUi");
            n.o(i, "Hydrate") && n.d(e, "Hydrate", (function() {
                return i.Hydrate
            })), n.o(i, "QueryClient") && n.d(e, "QueryClient", (function() {
                return i.QueryClient
            })), n.o(i, "QueryClientProvider") && n.d(e, "QueryClientProvider", (function() {
                return i.QueryClientProvider
            })), n.o(i, "useQuery") && n.d(e, "useQuery", (function() {
                return i.useQuery
            }))
        },
        BEJ5: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return u
            }));
            var r = n("7L9N"),
                i = n("7EV7"),
                o = n("MEa7"),
                u = new(function(t) {
                    function e() {
                        var e;
                        return (e = t.call(this) || this).setup = function(t) {
                            var e;
                            if (!o.f && (null == (e = window) ? void 0 : e.addEventListener)) {
                                var n = function() {
                                    return t()
                                };
                                return window.addEventListener("online", n, !1), window.addEventListener("offline", n, !1),
                                    function() {
                                        window.removeEventListener("online", n), window.removeEventListener("offline", n)
                                    }
                            }
                        }, e
                    }
                    Object(r.a)(e, t);
                    var n = e.prototype;
                    return n.onSubscribe = function() {
                        this.cleanup || this.setEventListener(this.setup)
                    }, n.onUnsubscribe = function() {
                        var t;
                        this.hasListeners() || (null == (t = this.cleanup) || t.call(this), this.cleanup = void 0)
                    }, n.setEventListener = function(t) {
                        var e, n = this;
                        this.setup = t, null == (e = this.cleanup) || e.call(this), this.cleanup = t((function(t) {
                            "boolean" === typeof t ? n.setOnline(t) : n.onOnline()
                        }))
                    }, n.setOnline = function(t) {
                        this.online = t, t && this.onOnline()
                    }, n.onOnline = function() {
                        this.listeners.forEach((function(t) {
                            t()
                        }))
                    }, n.isOnline = function() {
                        return "boolean" === typeof this.online ? this.online : "undefined" === typeof navigator || "undefined" === typeof navigator.onLine || navigator.onLine
                    }, e
                }(i.a))
        },
        EmAO: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return d
            }));
            var r = n("Fcif"),
                i = n("MEa7"),
                o = n("rmL9"),
                u = n("13DL"),
                s = n("hB7h"),
                a = n("BEJ5"),
                c = n("5jNi"),
                l = n("d+k8");

            function h(t, e) {
                return null == t.getNextPageParam ? void 0 : t.getNextPageParam(e[e.length - 1], e)
            }

            function f(t, e) {
                return null == t.getPreviousPageParam ? void 0 : t.getPreviousPageParam(e[0], e)
            }
            var d = function() {
                function t(t) {
                    void 0 === t && (t = {}), this.queryCache = t.queryCache || new o.a, this.mutationCache = t.mutationCache || new u.a, this.defaultOptions = t.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = []
                }
                var e = t.prototype;
                return e.mount = function() {
                    var t = this;
                    this.unsubscribeFocus = s.a.subscribe((function() {
                        s.a.isFocused() && a.a.isOnline() && (t.mutationCache.onFocus(), t.queryCache.onFocus())
                    })), this.unsubscribeOnline = a.a.subscribe((function() {
                        s.a.isFocused() && a.a.isOnline() && (t.mutationCache.onOnline(), t.queryCache.onOnline())
                    }))
                }, e.unmount = function() {
                    var t, e;
                    null == (t = this.unsubscribeFocus) || t.call(this), null == (e = this.unsubscribeOnline) || e.call(this)
                }, e.isFetching = function(t, e) {
                    var n = Object(i.k)(t, e)[0];
                    return n.fetching = !0, this.queryCache.findAll(n).length
                }, e.isMutating = function(t) {
                    return this.mutationCache.findAll(Object(r.a)({}, t, {
                        fetching: !0
                    })).length
                }, e.getQueryData = function(t, e) {
                    var n;
                    return null == (n = this.queryCache.find(t, e)) ? void 0 : n.state.data
                }, e.getQueriesData = function(t) {
                    return this.getQueryCache().findAll(t).map((function(t) {
                        return [t.queryKey, t.state.data]
                    }))
                }, e.setQueryData = function(t, e, n) {
                    var r = Object(i.l)(t),
                        o = this.defaultQueryOptions(r);
                    return this.queryCache.build(this, o).setData(e, n)
                }, e.setQueriesData = function(t, e, n) {
                    var r = this;
                    return c.a.batch((function() {
                        return r.getQueryCache().findAll(t).map((function(t) {
                            var i = t.queryKey;
                            return [i, r.setQueryData(i, e, n)]
                        }))
                    }))
                }, e.getQueryState = function(t, e) {
                    var n;
                    return null == (n = this.queryCache.find(t, e)) ? void 0 : n.state
                }, e.removeQueries = function(t, e) {
                    var n = Object(i.k)(t, e)[0],
                        r = this.queryCache;
                    c.a.batch((function() {
                        r.findAll(n).forEach((function(t) {
                            r.remove(t)
                        }))
                    }))
                }, e.resetQueries = function(t, e, n) {
                    var o = this,
                        u = Object(i.k)(t, e, n),
                        s = u[0],
                        a = u[1],
                        l = this.queryCache,
                        h = Object(r.a)({}, s, {
                            active: !0
                        });
                    return c.a.batch((function() {
                        return l.findAll(s).forEach((function(t) {
                            t.reset()
                        })), o.refetchQueries(h, a)
                    }))
                }, e.cancelQueries = function(t, e, n) {
                    var r = this,
                        o = Object(i.k)(t, e, n),
                        u = o[0],
                        s = o[1],
                        a = void 0 === s ? {} : s;
                    "undefined" === typeof a.revert && (a.revert = !0);
                    var l = c.a.batch((function() {
                        return r.queryCache.findAll(u).map((function(t) {
                            return t.cancel(a)
                        }))
                    }));
                    return Promise.all(l).then(i.j).catch(i.j)
                }, e.invalidateQueries = function(t, e, n) {
                    var o, u, s, a = this,
                        l = Object(i.k)(t, e, n),
                        h = l[0],
                        f = l[1],
                        d = Object(r.a)({}, h, {
                            active: null == (o = null != (u = h.refetchActive) ? u : h.active) || o,
                            inactive: null != (s = h.refetchInactive) && s
                        });
                    return c.a.batch((function() {
                        return a.queryCache.findAll(h).forEach((function(t) {
                            t.invalidate()
                        })), a.refetchQueries(d, f)
                    }))
                }, e.refetchQueries = function(t, e, n) {
                    var o = this,
                        u = Object(i.k)(t, e, n),
                        s = u[0],
                        a = u[1],
                        l = c.a.batch((function() {
                            return o.queryCache.findAll(s).map((function(t) {
                                return t.fetch(void 0, Object(r.a)({}, a, {
                                    meta: {
                                        refetchPage: null == s ? void 0 : s.refetchPage
                                    }
                                }))
                            }))
                        })),
                        h = Promise.all(l).then(i.j);
                    return (null == a ? void 0 : a.throwOnError) || (h = h.catch(i.j)), h
                }, e.fetchQuery = function(t, e, n) {
                    var r = Object(i.l)(t, e, n),
                        o = this.defaultQueryOptions(r);
                    "undefined" === typeof o.retry && (o.retry = !1);
                    var u = this.queryCache.build(this, o);
                    return u.isStaleByTime(o.staleTime) ? u.fetch(o) : Promise.resolve(u.state.data)
                }, e.prefetchQuery = function(t, e, n) {
                    return this.fetchQuery(t, e, n).then(i.j).catch(i.j)
                }, e.fetchInfiniteQuery = function(t, e, n) {
                    var r = Object(i.l)(t, e, n);
                    return r.behavior = {
                        onFetch: function(t) {
                            t.fetchFn = function() {
                                var e, n, r, o, u, s, a, c = null == (e = t.fetchOptions) || null == (n = e.meta) ? void 0 : n.refetchPage,
                                    d = null == (r = t.fetchOptions) || null == (o = r.meta) ? void 0 : o.fetchMore,
                                    p = null == d ? void 0 : d.pageParam,
                                    v = "forward" === (null == d ? void 0 : d.direction),
                                    y = "backward" === (null == d ? void 0 : d.direction),
                                    b = (null == (u = t.state.data) ? void 0 : u.pages) || [],
                                    m = (null == (s = t.state.data) ? void 0 : s.pageParams) || [],
                                    O = Object(i.c)(),
                                    g = null == O ? void 0 : O.signal,
                                    j = m,
                                    C = !1,
                                    x = t.options.queryFn || function() {
                                        return Promise.reject("Missing queryFn")
                                    },
                                    w = function(t, e, n, r) {
                                        return j = r ? [e].concat(j) : [].concat(j, [e]), r ? [n].concat(t) : [].concat(t, [n])
                                    },
                                    q = function(e, n, r, i) {
                                        if (C) return Promise.reject("Cancelled");
                                        if ("undefined" === typeof r && !n && e.length) return Promise.resolve(e);
                                        var o = {
                                                queryKey: t.queryKey,
                                                signal: g,
                                                pageParam: r,
                                                meta: t.meta
                                            },
                                            u = x(o),
                                            s = Promise.resolve(u).then((function(t) {
                                                return w(e, r, t, i)
                                            }));
                                        return Object(l.b)(u) && (s.cancel = u.cancel), s
                                    };
                                if (b.length)
                                    if (v) {
                                        var F = "undefined" !== typeof p,
                                            Q = F ? p : h(t.options, b);
                                        a = q(b, F, Q)
                                    } else if (y) {
                                    var R = "undefined" !== typeof p,
                                        S = R ? p : f(t.options, b);
                                    a = q(b, R, S, !0)
                                } else ! function() {
                                    j = [];
                                    var e = "undefined" === typeof t.options.getNextPageParam,
                                        n = !c || !b[0] || c(b[0], 0, b);
                                    a = n ? q([], e, m[0]) : Promise.resolve(w([], m[0], b[0]));
                                    for (var r = function(n) {
                                            a = a.then((function(r) {
                                                if (!c || !b[n] || c(b[n], n, b)) {
                                                    var i = e ? m[n] : h(t.options, r);
                                                    return q(r, e, i)
                                                }
                                                return Promise.resolve(w(r, m[n], b[n]))
                                            }))
                                        }, i = 1; i < b.length; i++) r(i)
                                }();
                                else a = q([]);
                                var P = a.then((function(t) {
                                    return {
                                        pages: t,
                                        pageParams: j
                                    }
                                }));
                                return P.cancel = function() {
                                    C = !0, null == O || O.abort(), Object(l.b)(a) && a.cancel()
                                }, P
                            }
                        }
                    }, this.fetchQuery(r)
                }, e.prefetchInfiniteQuery = function(t, e, n) {
                    return this.fetchInfiniteQuery(t, e, n).then(i.j).catch(i.j)
                }, e.cancelMutations = function() {
                    var t = this,
                        e = c.a.batch((function() {
                            return t.mutationCache.getAll().map((function(t) {
                                return t.cancel()
                            }))
                        }));
                    return Promise.all(e).then(i.j).catch(i.j)
                }, e.resumePausedMutations = function() {
                    return this.getMutationCache().resumePausedMutations()
                }, e.executeMutation = function(t) {
                    return this.mutationCache.build(this, t).execute()
                }, e.getQueryCache = function() {
                    return this.queryCache
                }, e.getMutationCache = function() {
                    return this.mutationCache
                }, e.getDefaultOptions = function() {
                    return this.defaultOptions
                }, e.setDefaultOptions = function(t) {
                    this.defaultOptions = t
                }, e.setQueryDefaults = function(t, e) {
                    var n = this.queryDefaults.find((function(e) {
                        return Object(i.d)(t) === Object(i.d)(e.queryKey)
                    }));
                    n ? n.defaultOptions = e : this.queryDefaults.push({
                        queryKey: t,
                        defaultOptions: e
                    })
                }, e.getQueryDefaults = function(t) {
                    var e;
                    return t ? null == (e = this.queryDefaults.find((function(e) {
                        return Object(i.m)(t, e.queryKey)
                    }))) ? void 0 : e.defaultOptions : void 0
                }, e.setMutationDefaults = function(t, e) {
                    var n = this.mutationDefaults.find((function(e) {
                        return Object(i.d)(t) === Object(i.d)(e.mutationKey)
                    }));
                    n ? n.defaultOptions = e : this.mutationDefaults.push({
                        mutationKey: t,
                        defaultOptions: e
                    })
                }, e.getMutationDefaults = function(t) {
                    var e;
                    return t ? null == (e = this.mutationDefaults.find((function(e) {
                        return Object(i.m)(t, e.mutationKey)
                    }))) ? void 0 : e.defaultOptions : void 0
                }, e.defaultQueryOptions = function(t) {
                    if (null == t ? void 0 : t._defaulted) return t;
                    var e = Object(r.a)({}, this.defaultOptions.queries, this.getQueryDefaults(null == t ? void 0 : t.queryKey), t, {
                        _defaulted: !0
                    });
                    return !e.queryHash && e.queryKey && (e.queryHash = Object(i.e)(e.queryKey, e)), e
                }, e.defaultQueryObserverOptions = function(t) {
                    return this.defaultQueryOptions(t)
                }, e.defaultMutationOptions = function(t) {
                    return (null == t ? void 0 : t._defaulted) ? t : Object(r.a)({}, this.defaultOptions.mutations, this.getMutationDefaults(null == t ? void 0 : t.mutationKey), t, {
                        _defaulted: !0
                    })
                }, e.clear = function() {
                    this.queryCache.clear(), this.mutationCache.clear()
                }, t
            }()
        },
        Fcif: function(t, e, n) {
            "use strict";

            function r() {
                return (r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        IKzN: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return a
            })), n.d(e, "a", (function() {
                return c
            }));
            var r = n("mXGw"),
                i = n.n(r),
                o = i.a.createContext(void 0),
                u = i.a.createContext(!1);

            function s(t) {
                return t && "undefined" !== typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = o), window.ReactQueryClientContext) : o
            }
            var a = function() {
                    var t = i.a.useContext(s(i.a.useContext(u)));
                    if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
                    return t
                },
                c = function(t) {
                    var e = t.client,
                        n = t.contextSharing,
                        r = void 0 !== n && n,
                        o = t.children;
                    i.a.useEffect((function() {
                        return e.mount(),
                            function() {
                                e.unmount()
                            }
                    }), [e]);
                    var a = s(r);
                    return i.a.createElement(u.Provider, {
                        value: r
                    }, i.a.createElement(a.Provider, {
                        value: e
                    }, o))
                }
        },
        JDII: function(t, e) {},
        JUQF: function(t, e, n) {
            "use strict";
            var r = n("Uu+j"),
                i = console;
            Object(r.b)(i)
        },
        MEa7: function(t, e, n) {
            "use strict";
            n.d(e, "f", (function() {
                return i
            })), n.d(e, "j", (function() {
                return o
            })), n.d(e, "b", (function() {
                return u
            })), n.d(e, "g", (function() {
                return s
            })), n.d(e, "a", (function() {
                return a
            })), n.d(e, "r", (function() {
                return c
            })), n.d(e, "l", (function() {
                return l
            })), n.d(e, "k", (function() {
                return h
            })), n.d(e, "i", (function() {
                return f
            })), n.d(e, "h", (function() {
                return d
            })), n.d(e, "e", (function() {
                return p
            })), n.d(e, "d", (function() {
                return v
            })), n.d(e, "m", (function() {
                return y
            })), n.d(e, "n", (function() {
                return m
            })), n.d(e, "p", (function() {
                return O
            })), n.d(e, "q", (function() {
                return x
            })), n.d(e, "o", (function() {
                return w
            })), n.d(e, "c", (function() {
                return q
            }));
            var r = n("Fcif"),
                i = "undefined" === typeof window;

            function o() {}

            function u(t, e) {
                return "function" === typeof t ? t(e) : t
            }

            function s(t) {
                return "number" === typeof t && t >= 0 && t !== 1 / 0
            }

            function a(t) {
                return Array.isArray(t) ? t : [t]
            }

            function c(t, e) {
                return Math.max(t + (e || 0) - Date.now(), 0)
            }

            function l(t, e, n) {
                return C(t) ? "function" === typeof e ? Object(r.a)({}, n, {
                    queryKey: t,
                    queryFn: e
                }) : Object(r.a)({}, e, {
                    queryKey: t
                }) : t
            }

            function h(t, e, n) {
                return C(t) ? [Object(r.a)({}, e, {
                    queryKey: t
                }), n] : [t || {}, e]
            }

            function f(t, e) {
                var n = t.active,
                    r = t.exact,
                    i = t.fetching,
                    o = t.inactive,
                    u = t.predicate,
                    s = t.queryKey,
                    a = t.stale;
                if (C(s))
                    if (r) {
                        if (e.queryHash !== p(s, e.options)) return !1
                    } else if (!y(e.queryKey, s)) return !1;
                var c = function(t, e) {
                    return !0 === t && !0 === e || null == t && null == e ? "all" : !1 === t && !1 === e ? "none" : (null != t ? t : !e) ? "active" : "inactive"
                }(n, o);
                if ("none" === c) return !1;
                if ("all" !== c) {
                    var l = e.isActive();
                    if ("active" === c && !l) return !1;
                    if ("inactive" === c && l) return !1
                }
                return ("boolean" !== typeof a || e.isStale() === a) && (("boolean" !== typeof i || e.isFetching() === i) && !(u && !u(e)))
            }

            function d(t, e) {
                var n = t.exact,
                    r = t.fetching,
                    i = t.predicate,
                    o = t.mutationKey;
                if (C(o)) {
                    if (!e.options.mutationKey) return !1;
                    if (n) {
                        if (v(e.options.mutationKey) !== v(o)) return !1
                    } else if (!y(e.options.mutationKey, o)) return !1
                }
                return ("boolean" !== typeof r || "loading" === e.state.status === r) && !(i && !i(e))
            }

            function p(t, e) {
                return ((null == e ? void 0 : e.queryKeyHashFn) || v)(t)
            }

            function v(t) {
                var e, n = a(t);
                return e = n, JSON.stringify(e, (function(t, e) {
                    return g(e) ? Object.keys(e).sort().reduce((function(t, n) {
                        return t[n] = e[n], t
                    }), {}) : e
                }))
            }

            function y(t, e) {
                return b(a(t), a(e))
            }

            function b(t, e) {
                return t === e || typeof t === typeof e && (!(!t || !e || "object" !== typeof t || "object" !== typeof e) && !Object.keys(e).some((function(n) {
                    return !b(t[n], e[n])
                })))
            }

            function m(t, e) {
                if (t === e) return t;
                var n = Array.isArray(t) && Array.isArray(e);
                if (n || g(t) && g(e)) {
                    for (var r = n ? t.length : Object.keys(t).length, i = n ? e : Object.keys(e), o = i.length, u = n ? [] : {}, s = 0, a = 0; a < o; a++) {
                        var c = n ? a : i[a];
                        u[c] = m(t[c], e[c]), u[c] === t[c] && s++
                    }
                    return r === o && s === r ? t : u
                }
                return e
            }

            function O(t, e) {
                if (t && !e || e && !t) return !1;
                for (var n in t)
                    if (t[n] !== e[n]) return !1;
                return !0
            }

            function g(t) {
                if (!j(t)) return !1;
                var e = t.constructor;
                if ("undefined" === typeof e) return !0;
                var n = e.prototype;
                return !!j(n) && !!n.hasOwnProperty("isPrototypeOf")
            }

            function j(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function C(t) {
                return "string" === typeof t || Array.isArray(t)
            }

            function x(t) {
                return new Promise((function(e) {
                    setTimeout(e, t)
                }))
            }

            function w(t) {
                Promise.resolve().then(t).catch((function(t) {
                    return setTimeout((function() {
                        throw t
                    }))
                }))
            }

            function q() {
                if ("function" === typeof AbortController) return new AbortController
            }
        },
        N2Mm: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            }));
            var r = n("Fcif");

            function i(t, e, n) {
                if ("object" === typeof e && null !== e) {
                    var i = t.getMutationCache(),
                        o = t.getQueryCache(),
                        u = e.mutations || [],
                        s = e.queries || [];
                    u.forEach((function(e) {
                        var o;
                        i.build(t, Object(r.a)({}, null == n || null == (o = n.defaultOptions) ? void 0 : o.mutations, {
                            mutationKey: e.mutationKey
                        }), e.state)
                    })), s.forEach((function(e) {
                        var i, u = o.get(e.queryHash);
                        u ? u.state.dataUpdatedAt < e.state.dataUpdatedAt && u.setState(e.state) : o.build(t, Object(r.a)({}, null == n || null == (i = n.defaultOptions) ? void 0 : i.queries, {
                            queryKey: e.queryKey,
                            queryHash: e.queryHash
                        }), e.state)
                    }))
                }
            }
        },
        PlEq: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n("mXGw"),
                i = n.n(r);

            function o() {
                var t = !1;
                return {
                    clearReset: function() {
                        t = !1
                    },
                    reset: function() {
                        t = !0
                    },
                    isReset: function() {
                        return t
                    }
                }
            }
            var u = i.a.createContext(o()),
                s = function() {
                    return i.a.useContext(u)
                }
        },
        "Uu+j": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            })), n.d(e, "b", (function() {
                return o
            }));
            var r = console;

            function i() {
                return r
            }

            function o(t) {
                r = t
            }
        },
        "d+k8": function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return s
            })), n.d(e, "c", (function() {
                return c
            })), n.d(e, "a", (function() {
                return l
            }));
            var r = n("hB7h"),
                i = n("BEJ5"),
                o = n("MEa7");

            function u(t) {
                return Math.min(1e3 * Math.pow(2, t), 3e4)
            }

            function s(t) {
                return "function" === typeof(null == t ? void 0 : t.cancel)
            }
            var a = function(t) {
                this.revert = null == t ? void 0 : t.revert, this.silent = null == t ? void 0 : t.silent
            };

            function c(t) {
                return t instanceof a
            }
            var l = function(t) {
                var e, n, c, l, h = this,
                    f = !1;
                this.abort = t.abort, this.cancel = function(t) {
                    return null == e ? void 0 : e(t)
                }, this.cancelRetry = function() {
                    f = !0
                }, this.continueRetry = function() {
                    f = !1
                }, this.continue = function() {
                    return null == n ? void 0 : n()
                }, this.failureCount = 0, this.isPaused = !1, this.isResolved = !1, this.isTransportCancelable = !1, this.promise = new Promise((function(t, e) {
                    c = t, l = e
                }));
                var d = function(e) {
                        h.isResolved || (h.isResolved = !0, null == t.onSuccess || t.onSuccess(e), null == n || n(), c(e))
                    },
                    p = function(e) {
                        h.isResolved || (h.isResolved = !0, null == t.onError || t.onError(e), null == n || n(), l(e))
                    };
                ! function c() {
                    if (!h.isResolved) {
                        var l;
                        try {
                            l = t.fn()
                        } catch (v) {
                            l = Promise.reject(v)
                        }
                        e = function(t) {
                            if (!h.isResolved && (p(new a(t)), null == h.abort || h.abort(), s(l))) try {
                                l.cancel()
                            } catch (e) {}
                        }, h.isTransportCancelable = s(l), Promise.resolve(l).then(d).catch((function(e) {
                            var s, a;
                            if (!h.isResolved) {
                                var l = null != (s = t.retry) ? s : 3,
                                    d = null != (a = t.retryDelay) ? a : u,
                                    v = "function" === typeof d ? d(h.failureCount, e) : d,
                                    y = !0 === l || "number" === typeof l && h.failureCount < l || "function" === typeof l && l(h.failureCount, e);
                                !f && y ? (h.failureCount++, null == t.onFail || t.onFail(h.failureCount, e), Object(o.q)(v).then((function() {
                                    if (!r.a.isFocused() || !i.a.isOnline()) return new Promise((function(e) {
                                        n = e, h.isPaused = !0, null == t.onPause || t.onPause()
                                    })).then((function() {
                                        n = void 0, h.isPaused = !1, null == t.onContinue || t.onContinue()
                                    }))
                                })).then((function() {
                                    f ? p(e) : c()
                                }))) : p(e)
                            }
                        }))
                    }
                }()
            }
        },
        hB7h: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return u
            }));
            var r = n("7L9N"),
                i = n("7EV7"),
                o = n("MEa7"),
                u = new(function(t) {
                    function e() {
                        var e;
                        return (e = t.call(this) || this).setup = function(t) {
                            var e;
                            if (!o.f && (null == (e = window) ? void 0 : e.addEventListener)) {
                                var n = function() {
                                    return t()
                                };
                                return window.addEventListener("visibilitychange", n, !1), window.addEventListener("focus", n, !1),
                                    function() {
                                        window.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n)
                                    }
                            }
                        }, e
                    }
                    Object(r.a)(e, t);
                    var n = e.prototype;
                    return n.onSubscribe = function() {
                        this.cleanup || this.setEventListener(this.setup)
                    }, n.onUnsubscribe = function() {
                        var t;
                        this.hasListeners() || (null == (t = this.cleanup) || t.call(this), this.cleanup = void 0)
                    }, n.setEventListener = function(t) {
                        var e, n = this;
                        this.setup = t, null == (e = this.cleanup) || e.call(this), this.cleanup = t((function(t) {
                            "boolean" === typeof t ? n.setFocused(t) : n.onFocus()
                        }))
                    }, n.setFocused = function(t) {
                        this.focused = t, t && this.onFocus()
                    }, n.onFocus = function() {
                        this.listeners.forEach((function(t) {
                            t()
                        }))
                    }, n.isFocused = function() {
                        return "boolean" === typeof this.focused ? this.focused : "undefined" === typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
                    }, e
                }(i.a))
        },
        hc1Z: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CollectionCardContextMenu_data",
                selections: [{
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
                type: "CollectionType",
                abstractKey: null,
                hash: "97b1d12017f765d3122871168f060d38"
            };
            e.default = r
        },
        lvKb: function(t, e, n) {
            "use strict";
            var r = n("EmAO");
            n.d(e, "QueryClient", (function() {
                return r.a
            }));
            var i = n("JDII");
            n.o(i, "Hydrate") && n.d(e, "Hydrate", (function() {
                return i.Hydrate
            })), n.o(i, "QueryClientProvider") && n.d(e, "QueryClientProvider", (function() {
                return i.QueryClientProvider
            })), n.o(i, "useQuery") && n.d(e, "useQuery", (function() {
                return i.useQuery
            }))
        },
        rmL9: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return l
            }));
            var r = n("7L9N"),
                i = n("MEa7"),
                o = n("Fcif"),
                u = n("5jNi"),
                s = n("Uu+j"),
                a = n("d+k8"),
                c = function() {
                    function t(t) {
                        this.abortSignalConsumed = !1, this.hadObservers = !1, this.defaultOptions = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.cache = t.cache, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.initialState = t.state || this.getDefaultState(this.options), this.state = this.initialState, this.meta = t.meta, this.scheduleGc()
                    }
                    var e = t.prototype;
                    return e.setOptions = function(t) {
                        var e;
                        this.options = Object(o.a)({}, this.defaultOptions, t), this.meta = null == t ? void 0 : t.meta, this.cacheTime = Math.max(this.cacheTime || 0, null != (e = this.options.cacheTime) ? e : 3e5)
                    }, e.setDefaultOptions = function(t) {
                        this.defaultOptions = t
                    }, e.scheduleGc = function() {
                        var t = this;
                        this.clearGcTimeout(), Object(i.g)(this.cacheTime) && (this.gcTimeout = setTimeout((function() {
                            t.optionalRemove()
                        }), this.cacheTime))
                    }, e.clearGcTimeout = function() {
                        this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
                    }, e.optionalRemove = function() {
                        this.observers.length || (this.state.isFetching ? this.hadObservers && this.scheduleGc() : this.cache.remove(this))
                    }, e.setData = function(t, e) {
                        var n, r, o = this.state.data,
                            u = Object(i.b)(t, o);
                        return (null == (n = (r = this.options).isDataEqual) ? void 0 : n.call(r, o, u)) ? u = o : !1 !== this.options.structuralSharing && (u = Object(i.n)(o, u)), this.dispatch({
                            data: u,
                            type: "success",
                            dataUpdatedAt: null == e ? void 0 : e.updatedAt
                        }), u
                    }, e.setState = function(t, e) {
                        this.dispatch({
                            type: "setState",
                            state: t,
                            setStateOptions: e
                        })
                    }, e.cancel = function(t) {
                        var e, n = this.promise;
                        return null == (e = this.retryer) || e.cancel(t), n ? n.then(i.j).catch(i.j) : Promise.resolve()
                    }, e.destroy = function() {
                        this.clearGcTimeout(), this.cancel({
                            silent: !0
                        })
                    }, e.reset = function() {
                        this.destroy(), this.setState(this.initialState)
                    }, e.isActive = function() {
                        return this.observers.some((function(t) {
                            return !1 !== t.options.enabled
                        }))
                    }, e.isFetching = function() {
                        return this.state.isFetching
                    }, e.isStale = function() {
                        return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((function(t) {
                            return t.getCurrentResult().isStale
                        }))
                    }, e.isStaleByTime = function(t) {
                        return void 0 === t && (t = 0), this.state.isInvalidated || !this.state.dataUpdatedAt || !Object(i.r)(this.state.dataUpdatedAt, t)
                    }, e.onFocus = function() {
                        var t, e = this.observers.find((function(t) {
                            return t.shouldFetchOnWindowFocus()
                        }));
                        e && e.refetch(), null == (t = this.retryer) || t.continue()
                    }, e.onOnline = function() {
                        var t, e = this.observers.find((function(t) {
                            return t.shouldFetchOnReconnect()
                        }));
                        e && e.refetch(), null == (t = this.retryer) || t.continue()
                    }, e.addObserver = function(t) {
                        -1 === this.observers.indexOf(t) && (this.observers.push(t), this.hadObservers = !0, this.clearGcTimeout(), this.cache.notify({
                            type: "observerAdded",
                            query: this,
                            observer: t
                        }))
                    }, e.removeObserver = function(t) {
                        -1 !== this.observers.indexOf(t) && (this.observers = this.observers.filter((function(e) {
                            return e !== t
                        })), this.observers.length || (this.retryer && (this.retryer.isTransportCancelable || this.abortSignalConsumed ? this.retryer.cancel({
                            revert: !0
                        }) : this.retryer.cancelRetry()), this.cacheTime ? this.scheduleGc() : this.cache.remove(this)), this.cache.notify({
                            type: "observerRemoved",
                            query: this,
                            observer: t
                        }))
                    }, e.getObserversCount = function() {
                        return this.observers.length
                    }, e.invalidate = function() {
                        this.state.isInvalidated || this.dispatch({
                            type: "invalidate"
                        })
                    }, e.fetch = function(t, e) {
                        var n, r, o, u = this;
                        if (this.state.isFetching)
                            if (this.state.dataUpdatedAt && (null == e ? void 0 : e.cancelRefetch)) this.cancel({
                                silent: !0
                            });
                            else if (this.promise) {
                            var c;
                            return null == (c = this.retryer) || c.continueRetry(), this.promise
                        }
                        if (t && this.setOptions(t), !this.options.queryFn) {
                            var l = this.observers.find((function(t) {
                                return t.options.queryFn
                            }));
                            l && this.setOptions(l.options)
                        }
                        var h = Object(i.a)(this.queryKey),
                            f = Object(i.c)(),
                            d = {
                                queryKey: h,
                                pageParam: void 0,
                                meta: this.meta
                            };
                        Object.defineProperty(d, "signal", {
                            enumerable: !0,
                            get: function() {
                                if (f) return u.abortSignalConsumed = !0, f.signal
                            }
                        });
                        var p, v, y = {
                            fetchOptions: e,
                            options: this.options,
                            queryKey: h,
                            state: this.state,
                            fetchFn: function() {
                                return u.options.queryFn ? (u.abortSignalConsumed = !1, u.options.queryFn(d)) : Promise.reject("Missing queryFn")
                            },
                            meta: this.meta
                        };
                        (null == (n = this.options.behavior) ? void 0 : n.onFetch) && (null == (p = this.options.behavior) || p.onFetch(y));
                        (this.revertState = this.state, this.state.isFetching && this.state.fetchMeta === (null == (r = y.fetchOptions) ? void 0 : r.meta)) || this.dispatch({
                            type: "fetch",
                            meta: null == (v = y.fetchOptions) ? void 0 : v.meta
                        });
                        return this.retryer = new a.a({
                            fn: y.fetchFn,
                            abort: null == f || null == (o = f.abort) ? void 0 : o.bind(f),
                            onSuccess: function(t) {
                                u.setData(t), null == u.cache.config.onSuccess || u.cache.config.onSuccess(t, u), 0 === u.cacheTime && u.optionalRemove()
                            },
                            onError: function(t) {
                                Object(a.c)(t) && t.silent || u.dispatch({
                                    type: "error",
                                    error: t
                                }), Object(a.c)(t) || (null == u.cache.config.onError || u.cache.config.onError(t, u), Object(s.a)().error(t)), 0 === u.cacheTime && u.optionalRemove()
                            },
                            onFail: function() {
                                u.dispatch({
                                    type: "failed"
                                })
                            },
                            onPause: function() {
                                u.dispatch({
                                    type: "pause"
                                })
                            },
                            onContinue: function() {
                                u.dispatch({
                                    type: "continue"
                                })
                            },
                            retry: y.options.retry,
                            retryDelay: y.options.retryDelay
                        }), this.promise = this.retryer.promise, this.promise
                    }, e.dispatch = function(t) {
                        var e = this;
                        this.state = this.reducer(this.state, t), u.a.batch((function() {
                            e.observers.forEach((function(e) {
                                e.onQueryUpdate(t)
                            })), e.cache.notify({
                                query: e,
                                type: "queryUpdated",
                                action: t
                            })
                        }))
                    }, e.getDefaultState = function(t) {
                        var e = "function" === typeof t.initialData ? t.initialData() : t.initialData,
                            n = "undefined" !== typeof t.initialData ? "function" === typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0,
                            r = "undefined" !== typeof e;
                        return {
                            data: e,
                            dataUpdateCount: 0,
                            dataUpdatedAt: r ? null != n ? n : Date.now() : 0,
                            error: null,
                            errorUpdateCount: 0,
                            errorUpdatedAt: 0,
                            fetchFailureCount: 0,
                            fetchMeta: null,
                            isFetching: !1,
                            isInvalidated: !1,
                            isPaused: !1,
                            status: r ? "success" : "idle"
                        }
                    }, e.reducer = function(t, e) {
                        var n, r;
                        switch (e.type) {
                            case "failed":
                                return Object(o.a)({}, t, {
                                    fetchFailureCount: t.fetchFailureCount + 1
                                });
                            case "pause":
                                return Object(o.a)({}, t, {
                                    isPaused: !0
                                });
                            case "continue":
                                return Object(o.a)({}, t, {
                                    isPaused: !1
                                });
                            case "fetch":
                                return Object(o.a)({}, t, {
                                    fetchFailureCount: 0,
                                    fetchMeta: null != (n = e.meta) ? n : null,
                                    isFetching: !0,
                                    isPaused: !1
                                }, !t.dataUpdatedAt && {
                                    error: null,
                                    status: "loading"
                                });
                            case "success":
                                return Object(o.a)({}, t, {
                                    data: e.data,
                                    dataUpdateCount: t.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (r = e.dataUpdatedAt) ? r : Date.now(),
                                    error: null,
                                    fetchFailureCount: 0,
                                    isFetching: !1,
                                    isInvalidated: !1,
                                    isPaused: !1,
                                    status: "success"
                                });
                            case "error":
                                var i = e.error;
                                return Object(a.c)(i) && i.revert && this.revertState ? Object(o.a)({}, this.revertState) : Object(o.a)({}, t, {
                                    error: i,
                                    errorUpdateCount: t.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: t.fetchFailureCount + 1,
                                    isFetching: !1,
                                    isPaused: !1,
                                    status: "error"
                                });
                            case "invalidate":
                                return Object(o.a)({}, t, {
                                    isInvalidated: !0
                                });
                            case "setState":
                                return Object(o.a)({}, t, e.state);
                            default:
                                return t
                        }
                    }, t
                }(),
                l = function(t) {
                    function e(e) {
                        var n;
                        return (n = t.call(this) || this).config = e || {}, n.queries = [], n.queriesMap = {}, n
                    }
                    Object(r.a)(e, t);
                    var n = e.prototype;
                    return n.build = function(t, e, n) {
                        var r, o = e.queryKey,
                            u = null != (r = e.queryHash) ? r : Object(i.e)(o, e),
                            s = this.get(u);
                        return s || (s = new c({
                            cache: this,
                            queryKey: o,
                            queryHash: u,
                            options: t.defaultQueryOptions(e),
                            state: n,
                            defaultOptions: t.getQueryDefaults(o),
                            meta: e.meta
                        }), this.add(s)), s
                    }, n.add = function(t) {
                        this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t, this.queries.push(t), this.notify({
                            type: "queryAdded",
                            query: t
                        }))
                    }, n.remove = function(t) {
                        var e = this.queriesMap[t.queryHash];
                        e && (t.destroy(), this.queries = this.queries.filter((function(e) {
                            return e !== t
                        })), e === t && delete this.queriesMap[t.queryHash], this.notify({
                            type: "queryRemoved",
                            query: t
                        }))
                    }, n.clear = function() {
                        var t = this;
                        u.a.batch((function() {
                            t.queries.forEach((function(e) {
                                t.remove(e)
                            }))
                        }))
                    }, n.get = function(t) {
                        return this.queriesMap[t]
                    }, n.getAll = function() {
                        return this.queries
                    }, n.find = function(t, e) {
                        var n = Object(i.k)(t, e)[0];
                        return "undefined" === typeof n.exact && (n.exact = !0), this.queries.find((function(t) {
                            return Object(i.i)(n, t)
                        }))
                    }, n.findAll = function(t, e) {
                        var n = Object(i.k)(t, e)[0];
                        return Object.keys(n).length > 0 ? this.queries.filter((function(t) {
                            return Object(i.i)(n, t)
                        })) : this.queries
                    }, n.notify = function(t) {
                        var e = this;
                        u.a.batch((function() {
                            e.listeners.forEach((function(e) {
                                e(t)
                            }))
                        }))
                    }, n.onFocus = function() {
                        var t = this;
                        u.a.batch((function() {
                            t.queries.forEach((function(t) {
                                t.onFocus()
                            }))
                        }))
                    }, n.onOnline = function() {
                        var t = this;
                        u.a.batch((function() {
                            t.queries.forEach((function(t) {
                                t.onOnline()
                            }))
                        }))
                    }, e
                }(n("7EV7").a)
        },
        ruvu: function(t, e, n) {
            "use strict";
            var r = n("5jNi"),
                i = n("xARA"),
                o = n.n(i).a.unstable_batchedUpdates;
            r.a.setBatchNotifyFunction(o)
        },
        "s8L/": function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                argumentDefinitions: [{
                    defaultValue: !1,
                    kind: "LocalArgument",
                    name: "showContextMenu"
                }],
                kind: "Fragment",
                metadata: null,
                name: "GlobalCollectionCard_data",
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
                    condition: "showContextMenu",
                    kind: "Condition",
                    passingValue: !0,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "CollectionCardContextMenu_data"
                    }]
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "77b01df41f0099bda1c3ecfdc39d74b0"
            };
            e.default = r
        },
        u6eo: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return l
            }));
            var r = n("9mw8"),
                i = n("MEa7"),
                o = n("mXGw"),
                u = n.n(o),
                s = n("5jNi"),
                a = n("PlEq"),
                c = n("IKzN");

            function l(t, e, n) {
                return function(t, e) {
                    var n = u.a.useRef(!1),
                        r = u.a.useState(0)[1],
                        i = Object(c.b)(),
                        o = Object(a.a)(),
                        l = i.defaultQueryObserverOptions(t);
                    l.optimisticResults = !0, l.onError && (l.onError = s.a.batchCalls(l.onError)), l.onSuccess && (l.onSuccess = s.a.batchCalls(l.onSuccess)), l.onSettled && (l.onSettled = s.a.batchCalls(l.onSettled)), l.suspense && ("number" !== typeof l.staleTime && (l.staleTime = 1e3), 0 === l.cacheTime && (l.cacheTime = 1)), (l.suspense || l.useErrorBoundary) && (o.isReset() || (l.retryOnMount = !1));
                    var h, f, d, p = u.a.useState((function() {
                            return new e(i, l)
                        }))[0],
                        v = p.getOptimisticResult(l);
                    if (u.a.useEffect((function() {
                            n.current = !0, o.clearReset();
                            var t = p.subscribe(s.a.batchCalls((function() {
                                n.current && r((function(t) {
                                    return t + 1
                                }))
                            })));
                            return p.updateResult(),
                                function() {
                                    n.current = !1, t()
                                }
                        }), [o, p]), u.a.useEffect((function() {
                            p.setOptions(l, {
                                listeners: !1
                            })
                        }), [l, p]), l.suspense && v.isLoading) throw p.fetchOptimistic(l).then((function(t) {
                        var e = t.data;
                        null == l.onSuccess || l.onSuccess(e), null == l.onSettled || l.onSettled(e, null)
                    })).catch((function(t) {
                        o.clearReset(), null == l.onError || l.onError(t), null == l.onSettled || l.onSettled(void 0, t)
                    }));
                    if (v.isError && !o.isReset() && !v.isFetching && (h = l.suspense, f = l.useErrorBoundary, d = [v.error, p.getCurrentQuery()], "function" === typeof f ? f.apply(void 0, d) : "boolean" === typeof f ? f : h)) throw v.error;
                    return "tracked" === l.notifyOnChangeProps && (v = p.trackResult(v, l)), v
                }(Object(i.l)(t, e, n), r.a)
            }
        },
        xYUi: function(t, e, n) {
            "use strict";
            n("ruvu"), n("JUQF");
            var r = n("IKzN");
            n.d(e, "QueryClientProvider", (function() {
                return r.a
            }));
            var i = n("u6eo");
            n.d(e, "useQuery", (function() {
                return i.a
            }));
            var o = n("z0RO");
            n.d(e, "Hydrate", (function() {
                return o.a
            }));
            var u = n("0Ugu");
            n.o(u, "QueryClient") && n.d(e, "QueryClient", (function() {
                return u.QueryClient
            }))
        },
        z0RO: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n("mXGw"),
                i = n.n(r),
                o = n("N2Mm"),
                u = n("IKzN");
            var s = function(t) {
                var e = t.children,
                    n = t.options;
                return function(t, e) {
                    var n = Object(u.b)(),
                        r = i.a.useRef(e);
                    r.current = e, i.a.useMemo((function() {
                        t && Object(o.a)(n, t, r.current)
                    }), [n, t])
                }(t.state, n), e
            }
        }
    }
]);
//# sourceMappingURL=958c69e9691732416ef1bf5fe66c16a66ddb362c.a5666efb4f13af8e92bf.js.map