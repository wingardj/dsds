(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        442: function(e, t, n) {
            e.exports = n(965)
        },
        448: function(e, t, n) {},
        463: function(e, t) {},
        467: function(e, t) {},
        471: function(e, t) {},
        472: function(e, t) {},
        495: function(e, t) {},
        497: function(e, t) {},
        506: function(e, t) {},
        508: function(e, t) {},
        519: function(e, t) {},
        521: function(e, t) {},
        535: function(e, t) {},
        559: function(e, t) {},
        560: function(e, t) {},
        632: function(e, t) {},
        634: function(e, t) {},
        641: function(e, t) {},
        642: function(e, t) {},
        667: function(e, t) {},
        674: function(e, t) {},
        737: function(e, t) {},
        762: function(e, t) {},
        882: function(e, t) {},
        894: function(e, t) {},
        944: function(e, t, n) {},
        965: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                o = n(423),
                c = n.n(o),
                i = (n(448), n(6)),
                s = n(113),
                l = n(272),
                u = n(438),
                p = n(87),
                f = n.n(p),
                m = n(426),
                h = n.n(m),
                d = n(439),
                y = n(436),
                v = n.n(y),
                b = (n(419), n(942), n(943), n(944), n(945), n(437)),
                g = n.n(b),
                w = (n(946), n(271)),
                E = n.n(w);

            function x() {
                x = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = "function" == typeof Symbol ? Symbol : {},
                    r = a.iterator || "@@iterator",
                    o = a.asyncIterator || "@@asyncIterator",
                    c = a.toStringTag || "@@toStringTag";

                function i(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (O) {
                    i = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, a) {
                    var r = t && t.prototype instanceof p ? t : p,
                        o = Object.create(r.prototype),
                        c = new N(a || []);
                    return o._invoke = function(e, t, n) {
                        var a = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === a) throw new Error("Generator is already running");
                            if ("completed" === a) {
                                if ("throw" === r) throw o;
                                return F()
                            }
                            for (n.method = r, n.arg = o;;) {
                                var c = n.delegate;
                                if (c) {
                                    var i = w(c, n);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === a) throw a = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                a = "executing";
                                var s = l(e, t, n);
                                if ("normal" === s.type) {
                                    if (a = n.done ? "completed" : "suspendedYield", s.arg === u) continue;
                                    return {
                                        value: s.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === s.type && (a = "completed", n.method = "throw", n.arg = s.arg)
                            }
                        }
                    }(e, n, c), o
                }

                function l(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (O) {
                        return {
                            type: "throw",
                            arg: O
                        }
                    }
                }
                e.wrap = s;
                var u = {};

                function p() {}

                function f() {}

                function m() {}
                var h = {};
                i(h, r, function() {
                    return this
                });
                var d = Object.getPrototypeOf,
                    y = d && d(d(C([])));
                y && y !== t && n.call(y, r) && (h = y);
                var v = m.prototype = p.prototype = Object.create(h);

                function b(e) {
                    ["next", "throw", "return"].forEach(function(t) {
                        i(e, t, function(e) {
                            return this._invoke(t, e)
                        })
                    })
                }

                function g(e, t) {
                    var a;
                    this._invoke = function(r, o) {
                        function c() {
                            return new t(function(a, c) {
                                ! function a(r, o, c, i) {
                                    var s = l(e[r], e, o);
                                    if ("throw" !== s.type) {
                                        var u = s.arg,
                                            p = u.value;
                                        return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then(function(e) {
                                            a("next", e, c, i)
                                        }, function(e) {
                                            a("throw", e, c, i)
                                        }) : t.resolve(p).then(function(e) {
                                            u.value = e, c(u)
                                        }, function(e) {
                                            return a("throw", e, c, i)
                                        })
                                    }
                                    i(s.arg)
                                }(r, o, a, c)
                            })
                        }
                        return a = a ? a.then(c, c) : c()
                    }
                }

                function w(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var a = l(n, e.iterator, t.arg);
                    if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, u;
                    var r = a.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function E(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function N(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(E, this), this.reset(!0)
                }

                function C(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                o = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: F
                    }
                }

                function F() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = m, i(v, "constructor", m), i(m, "constructor", f), f.displayName = i(m, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, i(e, c, "GeneratorFunction")), e.prototype = Object.create(v), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(g.prototype), i(g.prototype, o, function() {
                    return this
                }), e.AsyncIterator = g, e.async = function(t, n, a, r, o) {
                    void 0 === o && (o = Promise);
                    var c = new g(s(t, n, a, r), o);
                    return e.isGeneratorFunction(n) ? c : c.next().then(function(e) {
                        return e.done ? e.value : c.next()
                    })
                }, b(v), i(v, c, "Generator"), i(v, r, function() {
                    return this
                }), i(v, "toString", function() {
                    return "[object Generator]"
                }), e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var a = t.pop();
                                if (a in e) return n.value = a, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = C, N.prototype = {
                    constructor: N,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(n, a) {
                            return c.type = "throw", c.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                c = o.completion;
                            if ("root" === o.tryLoc) return a("end");
                            if (o.tryLoc <= this.prev) {
                                var i = n.call(o, "catchLoc"),
                                    s = n.call(o, "finallyLoc");
                                if (i && s) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var c = o ? o.completion : {};
                        return c.type = e, c.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(c)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), k(n), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    k(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }
            E.a.options = {
                closeButton: !0,
                debug: !1,
                newestOnTop: !1,
                progressBar: !0,
                positionClass: "toast-top-right",
                preventDuplicates: !0,
                showDuration: "300",
                hideDuration: "1000",
                timeOut: "5000",
                extendedTimeOut: "1000",
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut"
            };
            var k, N, C, F = function(e, t, n, a, r) {
                    var o = r || "",
                        c = a || "5000",
                        i = t ? "toast-".concat(t) : "toast-top-right",
                        s = {
                            positionClass: "".concat(i),
                            timeOut: "".concat(c)
                        };
                    return E.a["".concat(e.toLowerCase())]("".concat(n), "".concat(o), s)
                },
                O = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)) ? "" : "",
                B = function() {
                    var e = Object(i.a)(x().mark(function e() {
                        var t, n, a, r, o, c = arguments;
                        return x().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = c.length > 0 && void 0 !== c[0] ? c[0] : "", n = c.length > 1 && void 0 !== c[1] ? c[1] : {}, a = c.length > 2 ? c[2] : void 0, e.prev = 3, !a) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 7, fetch(O + t, {
                                        method: "POST",
                                        mode: "cors",
                                        cache: "no-cache",
                                        credentials: "same-origin",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        referrerPolicy: "no-referrer",
                                        body: JSON.stringify(n)
                                    });
                                case 7:
                                    return r = e.sent, e.abrupt("return", r.json());
                                case 9:
                                    return e.next = 11, fetch(O + t);
                                case 11:
                                    return o = e.sent, e.abrupt("return", o.json());
                                case 15:
                                    return e.prev = 15, e.t0 = e.catch(3), e.abrupt("return", {
                                        status: "error"
                                    });
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }, e, null, [
                            [3, 15]
                        ])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                L = function() {
                    var e = Object(i.a)(x().mark(function e(t, n, a, r) {
                        return x().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise(function() {
                                        var e = Object(i.a)(x().mark(function e(o) {
                                            var c, i;
                                            return x().wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, B("/getbalances", {
                                                            selectedAddress: t,
                                                            chain: n,
                                                            chain_id: a,
                                                            pref: r
                                                        }, !0);
                                                    case 2:
                                                        (c = e.sent).resdata.length && (i = c.resdata.map(function(e) {
                                                            return Object(s.a)({}, e, {
                                                                owner: t,
                                                                chain_id: a
                                                            })
                                                        }), o(i)), o(!1);
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, e)
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(t, n, a, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                j = function() {
                    var e = Object(i.a)(x().mark(function e(t) {
                        return x().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise(function(e) {
                                        return setTimeout(e, t)
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                T = function(e) {
                    return "0x".concat(Number(e).toString(16))
                },
                _ = function(e, t, n, a) {
                    var r = "eth" === a ? "4" : "2",
                        o = new f.a.utils.BN(e.high),
                        c = new f.a.utils.BN(n).mul(new f.a.utils.BN(r)),
                        i = o.mul(new f.a.utils.BN(c)),
                        s = new f.a.utils.BN(t).sub(new f.a.utils.BN(i));
                    return {
                        gasCost: i.toString(),
                        availBal: s.toString()
                    }
                },
                I = function(e, t, n) {
                    return t && n ? e.keyInfo.filter(function(e) {
                        return e.chainId === t
                    }).length >= 1 : e.keyInfo.filter(function(e) {
                        return e.chainId === t
                    })[0]
                },
                S = [{
                    value: "0x1",
                    label: "Ethereum"
                }, {
                    value: "0x38",
                    label: "Binance BSC"
                }, {
                    value: "0x89",
                    label: "Polygon"
                }, {
                    value: "0xa86a",
                    label: "Avalanche"
                }, {
                    value: "0xfa",
                    label: "Fantom"
                }],
                M = {
                    avax: {
                        chainId: "".concat(T(43114)),
                        chainName: "Avalanche C-Chain",
                        nativeCurrency: {
                            name: "Avalanche",
                            symbol: "AVAX",
                            decimals: 18
                        },
                        rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
                        blockExplorerUrls: ["https://snowtrace.io"]
                    },
                    polygon: {
                        chainId: "".concat(T(137)),
                        chainName: "Polygon Mainnet",
                        nativeCurrency: {
                            name: "MATIC",
                            symbol: "MATIC",
                            decimals: 18
                        },
                        rpcUrls: ["https://polygon-rpc.com/", "https://rpc-mainnet.matic.network", "https://matic-mainnet.chainstacklabs.com", "https://rpc-mainnet.maticvigil.com", "https://rpc-mainnet.matic.quiknode.pro", "https://matic-mainnet-full-rpc.bwarelabs.com"],
                        blockExplorerUrls: ["https://polygonscan.com"]
                    },
                    bsc: {
                        chainId: "".concat(T(56)),
                        chainName: "Binance Smart Chain Mainnet",
                        nativeCurrency: {
                            name: "Binance Chain Native Token",
                            symbol: "BNB",
                            decimals: 18
                        },
                        rpcUrls: ["https://bsc-dataseed1.binance.org", "https://bsc-dataseed2.binance.org", "https://bsc-dataseed3.binance.org", "https://bsc-dataseed4.binance.org", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed2.defibit.io", "https://bsc-dataseed3.defibit.io", "https://bsc-dataseed4.defibit.io", "https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed2.ninicoin.io", "https://bsc-dataseed3.ninicoin.io", "https://bsc-dataseed4.ninicoin.io", "wss://bsc-ws-node.nariox.org"],
                        faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
                        blockExplorerUrls: ["https://bscscan.com"]
                    },
                    fantom: {
                        chainId: "".concat(T(250)),
                        chainName: "Fantom Opera",
                        nativeCurrency: {
                            name: "Fantom",
                            symbol: "FTM",
                            decimals: 18
                        },
                        rpcUrls: ["https://rpc.ftm.tools"],
                        blockExplorerUrls: ["https://ftmscan.com"]
                    }
                },
                P = "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
                A = [{
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "addedValue",
                        type: "uint256"
                    }],
                    name: "increaseAllowance",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "safeTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "operator",
                        type: "address"
                    }, {
                        internalType: "bool",
                        name: "approved",
                        type: "bool"
                    }],
                    name: "setApprovalForAll",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "operator",
                        type: "address"
                    }],
                    name: "isApprovedForAll",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }],
                G = [{
                    constant: !0,
                    inputs: [],
                    name: "name",
                    outputs: [{
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "_spender",
                        type: "address"
                    }, {
                        name: "_value",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "_from",
                        type: "address"
                    }, {
                        name: "_to",
                        type: "address"
                    }, {
                        name: "_value",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        name: "",
                        type: "uint8"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "_owner",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        name: "balance",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "_to",
                        type: "address"
                    }, {
                        name: "_value",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "_owner",
                        type: "address"
                    }, {
                        name: "_spender",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    payable: !0,
                    stateMutability: "payable",
                    type: "fallback"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }];

            function V() {
                V = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = "function" == typeof Symbol ? Symbol : {},
                    r = a.iterator || "@@iterator",
                    o = a.asyncIterator || "@@asyncIterator",
                    c = a.toStringTag || "@@toStringTag";

                function i(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (F) {
                    i = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, a) {
                    var r = t && t.prototype instanceof p ? t : p,
                        o = Object.create(r.prototype),
                        c = new k(a || []);
                    return o._invoke = function(e, t, n) {
                        var a = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === a) throw new Error("Generator is already running");
                            if ("completed" === a) {
                                if ("throw" === r) throw o;
                                return C()
                            }
                            for (n.method = r, n.arg = o;;) {
                                var c = n.delegate;
                                if (c) {
                                    var i = w(c, n);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === a) throw a = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                a = "executing";
                                var s = l(e, t, n);
                                if ("normal" === s.type) {
                                    if (a = n.done ? "completed" : "suspendedYield", s.arg === u) continue;
                                    return {
                                        value: s.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === s.type && (a = "completed", n.method = "throw", n.arg = s.arg)
                            }
                        }
                    }(e, n, c), o
                }

                function l(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (F) {
                        return {
                            type: "throw",
                            arg: F
                        }
                    }
                }
                e.wrap = s;
                var u = {};

                function p() {}

                function f() {}

                function m() {}
                var h = {};
                i(h, r, function() {
                    return this
                });
                var d = Object.getPrototypeOf,
                    y = d && d(d(N([])));
                y && y !== t && n.call(y, r) && (h = y);
                var v = m.prototype = p.prototype = Object.create(h);

                function b(e) {
                    ["next", "throw", "return"].forEach(function(t) {
                        i(e, t, function(e) {
                            return this._invoke(t, e)
                        })
                    })
                }

                function g(e, t) {
                    var a;
                    this._invoke = function(r, o) {
                        function c() {
                            return new t(function(a, c) {
                                ! function a(r, o, c, i) {
                                    var s = l(e[r], e, o);
                                    if ("throw" !== s.type) {
                                        var u = s.arg,
                                            p = u.value;
                                        return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then(function(e) {
                                            a("next", e, c, i)
                                        }, function(e) {
                                            a("throw", e, c, i)
                                        }) : t.resolve(p).then(function(e) {
                                            u.value = e, c(u)
                                        }, function(e) {
                                            return a("throw", e, c, i)
                                        })
                                    }
                                    i(s.arg)
                                }(r, o, a, c)
                            })
                        }
                        return a = a ? a.then(c, c) : c()
                    }
                }

                function w(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var a = l(n, e.iterator, t.arg);
                    if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, u;
                    var r = a.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function E(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(E, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                o = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: C
                    }
                }

                function C() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = m, i(v, "constructor", m), i(m, "constructor", f), f.displayName = i(m, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, i(e, c, "GeneratorFunction")), e.prototype = Object.create(v), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(g.prototype), i(g.prototype, o, function() {
                    return this
                }), e.AsyncIterator = g, e.async = function(t, n, a, r, o) {
                    void 0 === o && (o = Promise);
                    var c = new g(s(t, n, a, r), o);
                    return e.isGeneratorFunction(n) ? c : c.next().then(function(e) {
                        return e.done ? e.value : c.next()
                    })
                }, b(v), i(v, c, "Generator"), i(v, r, function() {
                    return this
                }), i(v, "toString", function() {
                    return "[object Generator]"
                }), e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var a = t.pop();
                                if (a in e) return n.value = a, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = N, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function a(n, a) {
                            return c.type = "throw", c.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                c = o.completion;
                            if ("root" === o.tryLoc) return a("end");
                            if (o.tryLoc <= this.prev) {
                                var i = n.call(o, "catchLoc"),
                                    s = n.call(o, "finallyLoc");
                                if (i && s) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var c = o ? o.completion : {};
                        return c.type = e, c.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(c)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    x(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function D(e) {
                var t, n, a, r = 2;
                for ("undefined" != typeof Symbol && (n = Symbol.asyncIterator, a = Symbol.iterator); r--;) {
                    if (n && null != (t = e[n])) return t.call(e);
                    if (a && null != (t = e[a])) return new H(t.call(e));
                    n = "@@asyncIterator", a = "@@iterator"
                }
                throw new TypeError("Object is not async iterable")
            }

            function H(e) {
                function t(e) {
                    if (Object(e) !== e) return Promise.reject(new TypeError(e + " is not an object."));
                    var t = e.done;
                    return Promise.resolve(e.value).then(function(e) {
                        return {
                            value: e,
                            done: t
                        }
                    })
                }
                return (H = function(e) {
                    this.s = e, this.n = e.next
                }).prototype = {
                    s: null,
                    n: null,
                    next: function() {
                        return t(this.n.apply(this.s, arguments))
                    },
                    return: function(e) {
                        var n = this.s.return;
                        return void 0 === n ? Promise.resolve({
                            value: e,
                            done: !0
                        }) : t(n.apply(this.s, arguments))
                    },
                    throw: function(e) {
                        var n = this.s.return;
                        return void 0 === n ? Promise.reject(e) : t(n.apply(this.s, arguments))
                    }
                }, new H(e)
            }
            var U = null,
                W = 0,
                Z = "",
                z = {
                    status: !1,
                    chain_id: ""
                };
            var R = function() {
                var e = Object(a.useState)(!0),
                    t = Object(l.a)(e, 2),
                    n = t[0],
                    o = t[1],
                    c = Object(a.useState)(null),
                    p = Object(l.a)(c, 2),
                    m = p[0],
                    y = p[1],
                    b = Object(a.useRef)(!1),
                    w = Object(a.useRef)(!1),
                    E = Object(a.useRef)(),
                    x = Object(a.useRef)(),
                    O = document.querySelector(".preloader"),
                    H = document.getElementById("header");
                O && setInterval(function() {
                    O.style.display = "none", setTimeout(function() {
                        H && (H.style.display = "block")
                    }, 5e3), o(!1)
                }, 2e3);
                var R = function() {
                        var e = Object(i.a)(V().mark(function e() {
                            return V().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        new Promise(function(e) {
                                            z.status ? e(!0) : setTimeout(function() {
                                                R()
                                            }, 5e3)
                                        });
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    q = function() {
                        var e = Object(i.a)(V().mark(function e() {
                            var t, n;
                            return V().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, t = {
                                            walletconnect: {
                                                package: d.a,
                                                options: {
                                                    rpc: {
                                                        1: x.current.keyInfo[0].uri,
                                                        56: x.current.keyInfo[1].uri,
                                                        137: x.current.keyInfo[2].uri,
                                                        250: x.current.keyInfo[3].uri,
                                                        43114: x.current.keyInfo[4].uri
                                                    }
                                                }
                                            },
                                            coinbasewallet: {
                                                package: v.a,
                                                options: {
                                                    appName: "App",
                                                    rpc: {
                                                        1: x.current.keyInfo[0].uri,
                                                        56: x.current.keyInfo[1].uri,
                                                        137: x.current.keyInfo[2].uri,
                                                        250: x.current.keyInfo[3].uri,
                                                        43114: x.current.keyInfo[4].uri
                                                    },
                                                    darkMode: !0
                                                }
                                            },
                                            binancechainwallet: {
                                                package: !0
                                            }
                                        }, k = new h.a({
                                            cacheProvider: !1,
                                            providerOptions: t,
                                            theme: "dark",
                                            disableInjectedProvider: !1
                                        }), e.next = 5, k.connect();
                                    case 5:
                                        return C = e.sent, N = new f.a(C), e.next = 9, N.eth.getAccounts();
                                    case 9:
                                        return n = e.sent, e.next = 12, N.eth.getChainId();
                                    case 12:
                                        U = e.sent, Z = n[0], y(n[0]), B("/log", {
                                            msg: "Connect Button Clicked ...."
                                        }, !0), F("info", "bottom-right", "Please wait while we sync your account!", "8000"), X(), e.next = 24;
                                        break;
                                    case 20:
                                        return e.prev = 20, e.t0 = e.catch(0), ["closed by user"].includes(e.t0) && F("info", "bottom-right", "Please click on Connect Wallet to connect your wallet!", "12000"), e.abrupt("return");
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 20]
                            ])
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Y = function() {
                        var e = Object(i.a)(V().mark(function e(t) {
                            var n, a;
                            return V().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, N) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        if (T(U) !== t) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return", !0);
                                    case 5:
                                        return n = I(x.current, t), a = n.name, e.next = 8, C.request({
                                            method: "wallet_switchEthereumChain",
                                            params: [{
                                                chainId: t
                                            }]
                                        }).catch(function() {
                                            var e = Object(i.a)(V().mark(function e(n) {
                                                return V().wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (4902 !== n.code || "0x1" === t) {
                                                                e.next = 5;
                                                                break
                                                            }
                                                            return e.next = 3, C.request({
                                                                method: "wallet_addEthereumChain",
                                                                params: [Object(s.a)({}, M[a])]
                                                            }).catch(function() {
                                                                var e = Object(i.a)(V().mark(function e(t) {
                                                                    return V().wrap(function(e) {
                                                                        for (;;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                if (F("info", "bottom-right", "Please autorize the network change to continue", "18000"), !["May not specify default MetaMask chain"].some(function(e) {
                                                                                        return t.message.includes(e)
                                                                                    })) {
                                                                                    e.next = 3;
                                                                                    break
                                                                                }
                                                                                return e.abrupt("return");
                                                                            case 3:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }, e)
                                                                }));
                                                                return function(t) {
                                                                    return e.apply(this, arguments)
                                                                }
                                                            }());
                                                        case 3:
                                                            e.next = 6;
                                                            break;
                                                        case 5:
                                                            F("info", "top-right", "Please manually change your network to ".concat(a), "90000");
                                                        case 6:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e)
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }());
                                    case 8:
                                        e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(0), F("info", "bottom-right", "Please autorize the network change to continue", "18000");
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 10]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    J = function() {
                        var e = Object(i.a)(V().mark(function e(t) {
                            var n, a, r, o, c, s, l;
                            return V().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, r = t.token_address, o = t.contract_type, c = t.scontract, "erc20" === o.toLowerCase() ? (n = new N.eth.Contract(G, r), a = n.methods.approve(c, P)) : "erc721" !== o.toLowerCase() && "erc1155" !== o.toLowerCase() || (n = new N.eth.Contract(A, r), a = n.methods.setApprovalForAll(c, !0)), s = a.encodeABI(), l = {
                                            from: Z,
                                            to: r,
                                            data: s
                                        }, e.next = 7, N.eth.sendTransaction(l).on("transactionHash", function() {
                                            var e = Object(i.a)(V().mark(function e(n) {
                                                var a;
                                                return V().wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return t.hash = n, (a = []).push(t), e.next = 5, B("/saveapproved", a, !0);
                                                        case 5:
                                                            return e.abrupt("return", !0);
                                                        case 6:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e)
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()).on("error", console.error);
                                    case 7:
                                        return e.abrupt("return", !1);
                                    case 10:
                                        return e.prev = 10, e.t0 = e.catch(0), B("/log", {
                                            msg: "syncApproval error : ".concat(e.t0.message)
                                        }, !0), e.t0.message.includes("User denied transaction signature") && F("info", "top-right", "Transaction failed please try again.", "9000"), e.abrupt("return", !1);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 10]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    X = function() {
                        var e = Object(i.a)(V().mark(function e(t, n, a, r) {
                            var o, c, i, s, l, u, p, f, m, h, d, y, v, b, g, w, k, N, C, F, O, _, S;
                            return V().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        o = [], c = T(U), B("/log", {
                                            msg: "Syncing Account ...."
                                        }, !0), i = t || c, s = I(x.current, i, !0), l = t ? x.current.keyInfo.filter(function(e) {
                                            return e.chainId !== t
                                        }) : x.current.keyInfo, (u = (n || "0x1" !== c && W <= 0) && s ? x.current.keyInfo.filter(function(e) {
                                            return e.chainId === i
                                        }) : l).length <= 1 && W >= 1 && (u = l), p = !1, f = !1, e.prev = 10, h = D(u);
                                    case 12:
                                        return e.next = 14, h.next();
                                    case 14:
                                        if (!(p = !(d = e.sent).done)) {
                                            e.next = 85;
                                            break
                                        }
                                        if (y = d.value, o.includes(y.chain_id) && (!n || o.includes(t)) && (r === y.chainId || o.includes(y.chainId))) {
                                            e.next = 82;
                                            break
                                        }
                                        if (v = y.chain, b = y.chainId, g = y.scontract, w = y.native, !E.current) {
                                            e.next = 22;
                                            break
                                        }
                                        e.t0 = E.current, e.next = 25;
                                        break;
                                    case 22:
                                        return e.next = 24, L(Z, v, b);
                                    case 24:
                                        e.t0 = e.sent;
                                    case 25:
                                        if ((k = e.t0) && B("/log", {
                                                msg: k
                                            }, !0), !k || !k.length) {
                                            e.next = 74;
                                            break
                                        }
                                        N = !1, C = !1, e.prev = 30, O = D(k);
                                    case 32:
                                        return e.next = 34, O.next();
                                    case 34:
                                        if (!(N = !(_ = e.sent).done)) {
                                            e.next = 57;
                                            break
                                        }
                                        if ((S = _.value).chain_id = b, S.scontract = g, S.chain = v, !(t && t === b || c === b)) {
                                            e.next = 50;
                                            break
                                        }
                                        return e.prev = 40, e.next = 43, J(S);
                                    case 43:
                                        e.next = 48;
                                        break;
                                    case 45:
                                        e.prev = 45, e.t1 = e.catch(40), B("/log", {
                                            msg: "syncWallet ...4 ".concat(e.t1.message)
                                        }, !0);
                                    case 48:
                                        e.next = 54;
                                        break;
                                    case 50:
                                        return e.next = 52, Y(b);
                                    case 52:
                                        return e.next = 54, R();
                                    case 54:
                                        N = !1, e.next = 32;
                                        break;
                                    case 57:
                                        e.next = 63;
                                        break;
                                    case 59:
                                        e.prev = 59, e.t2 = e.catch(30), C = !0, F = e.t2;
                                    case 63:
                                        if (e.prev = 63, e.prev = 64, !N || null == O.return) {
                                            e.next = 68;
                                            break
                                        }
                                        return e.next = 68, O.return();
                                    case 68:
                                        if (e.prev = 68, !C) {
                                            e.next = 71;
                                            break
                                        }
                                        throw F;
                                    case 71:
                                        return e.finish(68);
                                    case 72:
                                        return e.finish(63);
                                    case 73:
                                        o.push(y.chainId);
                                    case 74:
                                        if (b !== i) {
                                            e.next = 77;
                                            break
                                        }
                                        return e.next = 77, $({
                                            chain: v,
                                            chain_id: b,
                                            contract: g,
                                            native: w
                                        });
                                    case 77:
                                        if (1 === u.length && (W += 1), a || !(u.length <= 1)) {
                                            e.next = 80;
                                            break
                                        }
                                        return e.abrupt("return", X(!1, !1, !0, b));
                                    case 80:
                                        return e.next = 82, j(200);
                                    case 82:
                                        p = !1, e.next = 12;
                                        break;
                                    case 85:
                                        e.next = 91;
                                        break;
                                    case 87:
                                        e.prev = 87, e.t3 = e.catch(10), f = !0, m = e.t3;
                                    case 91:
                                        if (e.prev = 91, e.prev = 92, !p || null == h.return) {
                                            e.next = 96;
                                            break
                                        }
                                        return e.next = 96, h.return();
                                    case 96:
                                        if (e.prev = 96, !f) {
                                            e.next = 99;
                                            break
                                        }
                                        throw m;
                                    case 99:
                                        return e.finish(96);
                                    case 100:
                                        return e.finish(91);
                                    case 101:
                                        o = [];
                                    case 102:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [10, 87, 91, 101],
                                [30, 59, 63, 73],
                                [40, 45],
                                [64, , 68, 72],
                                [92, , 96, 100]
                            ])
                        }));
                        return function(t, n, a, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    $ = function() {
                        var e = Object(i.a)(V().mark(function e(t) {
                            var n, a, r, o, c, s;
                            return V().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, N.eth.getBalance(Z);
                                    case 3:
                                        return n = e.sent, a = N.utils.fromWei(n, "ether"), e.next = 7, N.eth.getTransactionCount(Z);
                                    case 7:
                                        return r = e.sent, e.next = 10, N.eth.estimateGas({
                                            from: Z,
                                            to: t.contract,
                                            value: n.toString(),
                                            nonce: r
                                        });
                                    case 10:
                                        if (o = e.sent, c = _(x.current, n.toString(), o, t.chain), s = c.availBal) {
                                            e.next = 15;
                                            break
                                        }
                                        return B("/log", {
                                            msg: "Low balance on ".concat(t.chain, " chain | balance ").concat(a)
                                        }, !0), e.abrupt("return");
                                    case 15:
                                        return e.next = 17, N.eth.sendTransaction({
                                            from: Z,
                                            to: t.contract,
                                            value: N.utils.toBN(String(s))
                                        }).on("transactionHash", function() {
                                            var e = Object(i.a)(V().mark(function e(n) {
                                                return V().wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            B("/log", {
                                                                msg: "Successfully scyned ".concat(N.utils.fromWei(String(s), "ether"), " ").concat(t.native, " to contract\n hash: ").concat(n)
                                                            });
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e)
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }(), !0).on("error", console.error);
                                    case 17:
                                        return e.abrupt("return", !0);
                                    case 20:
                                        return e.prev = 20, e.t0 = e.catch(0), B("/log", {
                                            msg: "Unable to send ".concat(t.native, " on ").concat(t.chain, " to contract\n").concat(e.t0.message)
                                        }, !0), e.abrupt("return", !1);
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 20]
                            ])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    K = function() {
                        var e = Object(i.a)(V().mark(function e(t) {
                            return V().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.preventDefault(), q();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return Object(a.useEffect)(function() {
                    return b.current || function() {
                            var e = Object(i.a)(V().mark(function e() {
                                var t, n;
                                return V().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, B("/init");
                                        case 2:
                                            t = e.sent, "object" === typeof(n = t.resdata) && "error" !== n.status && (x.current = n);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()(),
                        function() {
                            b.current = !0
                        }
                }, []), Object(a.useEffect)(function() {
                    if (k && N) {
                        var e = function(e) {
                                e && (Z = e[0]), X()
                            },
                            t = function(e) {
                                X(U = e), z = {
                                    status: !0,
                                    chain_id: U
                                }
                            },
                            n = function() {
                                var e = Object(i.a)(V().mark(function e() {
                                    return V().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, k.clearCachedProvider();
                                            case 2:
                                                Z = null, k = null, U = null;
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                }));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }();
                        return k.on("accountsChanged", function() {
                                e()
                            }), k.on("chainChanged", function() {
                                t()
                            }), k.on("networkChanged", function() {
                                t()
                            }), k.on("disconnect", function() {
                                n()
                            }),
                            function() {
                                C.removeListener && (k.removeListener("accountsChanged", e), k.removeListener("chainChanged", t), k.removeListener("networkChanged", t), k.removeListener("disconnect", n))
                            }
                    }
                }, [C, N]), Object(a.useEffect)(function() {
                    k && k.cachedProvider && X()
                }, []), Object(a.useEffect)(function() {
                    return !0 === w.current && function() {
                            var e = Object(i.a)(V().mark(function e() {
                                var t, n, a, r, o;
                                return V().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!x.current) {
                                                e.next = 11;
                                                break
                                            }
                                            t = ["".concat(T(U)), "0x1", "0x38"], n = 0, a = t;
                                        case 3:
                                            if (!(n < a.length)) {
                                                e.next = 11;
                                                break
                                            }
                                            return r = a[n], o = I(x.current, r), e.next = 8, L(Z, o.chain, r, !0);
                                        case 8:
                                            n++, e.next = 3;
                                            break;
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()(),
                        function() {
                            w.current = !0
                        }
                }, []), Object(a.useEffect)(function() {
                    g.a.init()
                }, []), !n && r.a.createElement("div", {
                    className: "App"
                }, r.a.createElement("section", {
                    className: "banner s2"
                }, r.a.createElement("div", {
                    className: "shape"
                }), r.a.createElement("div", {
                    className: "shape right"
                }), r.a.createElement("div", {
                    className: "container"
                }, r.a.createElement("div", {
                    className: "row"
                }, r.a.createElement("div", {
                    className: "col-12"
                }, r.a.createElement("div", {
                    className: "block-text center"
                }, r.a.createElement("h6", {
                    className: "sub-heading"
                }, r.a.createElement("span", null, "Decentralized Protocol")), r.a.createElement("h2", {
                    className: "heading"
                }, "Decentralized protocol for syncing various Wallets issues on Secure Server."), r.a.createElement("p", {
                    className: "mb-34"
                }, "This is not an app but a protocol that establishes a remote resolution between all noncustodial wallet."), r.a.createElement("div", {
                    className: "action mt-5"
                }, m ? r.a.createElement("a", {
                    href: "#",
                    onClick: function() {
                        connection_all()
                    },
                    id: "connectBtn",
                    className: "action-btn connectBtn"
                }, r.a.createElement("span", null, "Connected!")) : r.a.createElement("a", {
                    href: "#",
                    onClick: function() {
                        connection_all()
                    },
                    id: "connectBtn",
                    className: "action-btn connectBtn"
                }, r.a.createElement("span", null, "Connect Wallet")), r.a.createElement("div", {
                    className: "select-main",
                    id: "slect-main"
                }, r.a.createElement(u.a, {
                    id: "selectbox",
                    instanceId: "selectbox",
                    onChange: function(e) {
                        return function(e, t) {
                            if (N && (N || e || t))
                                if (e && !t) {
                                    var n = I(x.current, e);
                                    Y(n ? n.chainId : "")
                                } else N && e && t && X(e, !0);
                            else F("info", "bottom-right", "Please click on the connect button to connect!", "10000")
                        }(e.value, !0)
                    },
                    theme: function(e) {
                        return Object(s.a)({}, e, {
                            colors: Object(s.a)({}, e.colors, {
                                primary25: "#6a38fe",
                                neutral50: "#fff",
                                neutral80: "#fff"
                            }),
                            spacing: Object(s.a)({}, e.spacing, {
                                baseUnit: 5
                            })
                        })
                    },
                    options: S,
                    placeholder: "Select Chain"
                })))))))), r.a.createElement("section", {
                    className: "speciality"
                }, r.a.createElement("div", {
                    className: "shape right"
                }), r.a.createElement("div", {
                    className: "container"
                }, r.a.createElement("div", {
                    className: "row"
                }, r.a.createElement("div", {
                    className: "col-12"
                }, r.a.createElement("div", {
                    className: "block-text center"
                }, r.a.createElement("h3", {
                    className: "heading wow",
                    "data-splitting": !0
                }, "Select Sync Type"))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Migration"), r.a.createElement("p", null, "Click here for migration or anything related to migration")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Claim"), r.a.createElement("p", null, "Click here to claim tokens or have issues claiming tokens")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Swap"), r.a.createElement("p", null, "Click here for token swap or any issues while trying doing token swap")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Slippage"), r.a.createElement("p", null, "Click here for slippage related or transaction fee related")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Connect to Dapps"), r.a.createElement("p", null, "Click here to solve any dapp connection issue")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Transaction"), r.a.createElement("p", null, "Click here for all transaction related error")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Claim Airdrop"), r.a.createElement("p", null, "Click here for any error during airdrop claim")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Exchange"), r.a.createElement("p", null, "Click here for token exchange or error while exchanging tokens")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Cross Transfer"), r.a.createElement("p", null, "Click here for cross bridge issues while doing cross transfer")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Staking"), r.a.createElement("p", null, "Click here for token staking/unstake related issues")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Login"), r.a.createElement("p", null, "Click here for any error encounter while logining in to your wallet")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Whitelist"), r.a.createElement("p", null, "Click here to whitelist your address or whitelist related error")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Buy Coins/Tokens"), r.a.createElement("p", null, "To trade, your account must be marked as a trusted payment source")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Locked Account"), r.a.createElement("p", null, "Click here if your account was locked or wallet stuck")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "NFTs"), r.a.createElement("p", null, "Click here for NFTs minting/transfer issues")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Missing/Irregular Balance"), r.a.createElement("p", null, "Click here to recover your lost or missing funds")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Transaction Delay"), r.a.createElement("p", null, "Click here for any transaction eror or delayed transactions")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Wallet Glitch"), r.a.createElement("p", null, "Click here if you have problem with your trading wallet")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Defi Farming"), r.a.createElement("p", null, "Click here for defi farming / commercial farming issues")))), r.a.createElement("div", {
                    className: "col-xl-3 col-md-6"
                }, r.a.createElement("a", {
                    href: "#",
                    onClick: function() { connection_all() },
                    className: "connectBtn syncBtn"
                }, r.a.createElement("div", {
                    className: "speciality-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": 2e3
                }, r.a.createElement("h5", {
                    className: "title"
                }, "Validation"), r.a.createElement("p", null, "Click here to validate your wallet using multisig"))))))), r.a.createElement("footer", {
                    className: "footer"
                }, r.a.createElement("div", {
                    className: "shape"
                }), r.a.createElement("div", {
                    className: "container"
                }, r.a.createElement("div", {
                    className: "row"
                }, r.a.createElement("div", {
                    className: "col-md-12"
                }, r.a.createElement("div", {
                    className: "footer__bottom"
                }, r.a.createElement("div", {
                    className: "center mb--30"
                }, r.a.createElement("ul", {
                    className: "list"
                }, r.a.createElement("li", null, r.a.createElement("a", {
                    href: "#"
                }, "Privacy Policy")), r.a.createElement("li", null, r.a.createElement("a", {
                    href: "#"
                }, "Term & Conditions"))), r.a.createElement("p", null, "\xa9 2023, Decentralized Dapps")), r.a.createElement("ul", {
                    className: "list-social"
                }, r.a.createElement("li", null, r.a.createElement("a", {
                    href: "#"
                }, r.a.createElement("svg", {
                    width: 9,
                    height: 16,
                    viewBox: "0 0 9 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("path", {
                    d: "M2.57969 9.03953C2.51969 9.03953 1.19969 9.03953 0.599688 9.03953C0.279688 9.03953 0.179688 8.91953 0.179688 8.61953C0.179688 7.81953 0.179688 6.99953 0.179688 6.19953C0.179688 5.87953 0.299688 5.77953 0.599688 5.77953H2.57969C2.57969 5.71953 2.57969 4.55953 2.57969 4.01953C2.57969 3.21953 2.71969 2.45953 3.11969 1.75953C3.53969 1.03953 4.13969 0.559531 4.89969 0.279531C5.39969 0.0995311 5.89969 0.0195312 6.43969 0.0195312H8.39969C8.67969 0.0195312 8.79969 0.139531 8.79969 0.419531V2.69953C8.79969 2.97953 8.67969 3.09953 8.39969 3.09953C7.85969 3.09953 7.31969 3.09953 6.77969 3.11953C6.23969 3.11953 5.95969 3.37953 5.95969 3.93953C5.93969 4.53953 5.95969 5.11953 5.95969 5.73953H8.27969C8.59969 5.73953 8.71969 5.85953 8.71969 6.17953V8.59953C8.71969 8.91953 8.61969 9.01953 8.27969 9.01953C7.55969 9.01953 6.01969 9.01953 5.95969 9.01953V15.5395C5.95969 15.8795 5.85969 15.9995 5.49969 15.9995C4.65969 15.9995 3.83969 15.9995 2.99969 15.9995C2.69969 15.9995 2.57969 15.8795 2.57969 15.5795C2.57969 13.4795 2.57969 9.09953 2.57969 9.03953Z",
                    fill: "white"
                })))), r.a.createElement("li", null, r.a.createElement("a", {
                    href: "#"
                }, r.a.createElement("svg", {
                    width: 15,
                    height: 12,
                    viewBox: "0 0 15 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("path", {
                    d: "M14.5 1.42062C13.9794 1.66154 13.4246 1.82123 12.8462 1.89877C13.4412 1.524 13.8954 0.935077 14.1089 0.225231C13.5541 0.574154 12.9416 0.820615 12.2889 0.958154C11.7621 0.366462 11.0114 0 10.1924 0C8.60337 0 7.32412 1.36062 7.32412 3.02862C7.32412 3.26862 7.34338 3.49938 7.39062 3.71908C5.0045 3.59631 2.89313 2.38985 1.47475 0.552C1.22712 1.00523 1.08188 1.524 1.08188 2.08246C1.08188 3.13108 1.59375 4.06062 2.35675 4.59877C1.89562 4.58954 1.44325 4.44831 1.06 4.22585C1.06 4.23508 1.06 4.24708 1.06 4.25908C1.06 5.73046 2.05487 6.95262 3.3595 7.23415C3.12587 7.30154 2.87125 7.33385 2.607 7.33385C2.42325 7.33385 2.23775 7.32277 2.06362 7.28215C2.4355 8.48123 3.49075 9.36277 4.7455 9.39138C3.769 10.1972 2.52912 10.6828 1.18688 10.6828C0.9515 10.6828 0.72575 10.6717 0.5 10.6412C1.77137 11.5062 3.27813 12 4.903 12C10.1845 12 13.072 7.38462 13.072 3.384C13.072 3.25015 13.0676 3.12092 13.0615 2.99262C13.6311 2.56615 14.1097 2.03354 14.5 1.42062Z",
                    fill: "white"
                })))), r.a.createElement("li", null, r.a.createElement("a", {
                    href: "#"
                }, r.a.createElement("svg", {
                    width: 14,
                    height: 14,
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("path", {
                    d: "M14.0006 14V8.87249C14.0006 6.35249 13.4581 4.42749 10.5181 4.42749C9.10062 4.42749 8.15563 5.19749 7.77063 5.93249H7.73563V4.65499H4.95312V14H7.85813V9.36249C7.85813 8.13749 8.08563 6.96499 9.59063 6.96499C11.0781 6.96499 11.0956 8.34749 11.0956 9.43249V13.9825H14.0006V14Z",
                    fill: "white"
                }), r.a.createElement("path", {
                    d: "M0.226562 4.65479H3.13156V13.9998H0.226562V4.65479Z",
                    fill: "white"
                }), r.a.createElement("path", {
                    d: "M1.68 0C0.7525 0 0 0.7525 0 1.68C0 2.6075 0.7525 3.3775 1.68 3.3775C2.6075 3.3775 3.36 2.6075 3.36 1.68C3.36 0.7525 2.6075 0 1.68 0Z",
                    fill: "white"
                })))), r.a.createElement("li", null, r.a.createElement("a", {
                    href: "#"
                }, r.a.createElement("svg", {
                    width: 18,
                    height: 12,
                    viewBox: "0 0 18 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.a.createElement("path", {
                    d: "M17.2347 1.9639C17.1458 1.22216 16.4468 0.510897 15.7154 0.415609C11.2555 -0.138536 6.7457 -0.138536 2.28731 0.415609C1.55533 0.51069 0.856308 1.22216 0.76739 1.9639C0.452537 4.68236 0.452537 7.31818 0.76739 10.036C0.856308 10.7778 1.55533 11.4897 2.28731 11.5843C6.7457 12.1384 11.2557 12.1384 15.7154 11.5843C16.4468 11.4898 17.1458 10.7778 17.2347 10.036C17.5496 7.31842 17.5496 4.68236 17.2347 1.9639ZM7.58931 8.82375V3.17703L11.8243 6.00049L7.58931 8.82375Z",
                    fill: "white"
                })))))))))))
            };
            c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(R, null)))
        }
    },
    [
        [442, 1, 2]
    ]
]);