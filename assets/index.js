var Ic = e => {
    throw TypeError(e)
}
;
var Ca = (e, t, n) => t.has(e) || Ic("Cannot " + n);
var P = (e, t, n) => (Ca(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , Z = (e, t, n) => t.has(e) ? Ic("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , U = (e, t, n, r) => (Ca(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Ne = (e, t, n) => (Ca(e, t, "access private method"),
n);
var Pi = (e, t, n, r) => ({
    set _(o) {
        U(e, t, o, n)
    },
    get _() {
        return P(e, t, r)
    }
});
function r0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function Bf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Uf = {
    exports: {}
}
  , Ks = {}
  , Vf = {
    exports: {}
}
  , G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mi = Symbol.for("react.element")
  , o0 = Symbol.for("react.portal")
  , i0 = Symbol.for("react.fragment")
  , s0 = Symbol.for("react.strict_mode")
  , a0 = Symbol.for("react.profiler")
  , l0 = Symbol.for("react.provider")
  , u0 = Symbol.for("react.context")
  , c0 = Symbol.for("react.forward_ref")
  , d0 = Symbol.for("react.suspense")
  , f0 = Symbol.for("react.memo")
  , p0 = Symbol.for("react.lazy")
  , zc = Symbol.iterator;
function h0(e) {
    return e === null || typeof e != "object" ? null : (e = zc && e[zc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Hf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Wf = Object.assign
  , Kf = {};
function ao(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Kf,
    this.updater = n || Hf
}
ao.prototype.isReactComponent = {};
ao.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
ao.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Qf() {}
Qf.prototype = ao.prototype;
function hu(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Kf,
    this.updater = n || Hf
}
var mu = hu.prototype = new Qf;
mu.constructor = hu;
Wf(mu, ao.prototype);
mu.isPureReactComponent = !0;
var Fc = Array.isArray
  , Gf = Object.prototype.hasOwnProperty
  , gu = {
    current: null
}
  , Yf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Xf(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Gf.call(t, r) && !Yf.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: mi,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: gu.current
    }
}
function m0(e, t) {
    return {
        $$typeof: mi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function vu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === mi
}
function g0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var $c = /\/+/g;
function ba(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? g0("" + e.key) : t.toString(36)
}
function Yi(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case mi:
            case o0:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + ba(s, 0) : r,
        Fc(o) ? (n = "",
        e != null && (n = e.replace($c, "$&/") + "/"),
        Yi(o, t, n, "", function(u) {
            return u
        })) : o != null && (vu(o) && (o = m0(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace($c, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    Fc(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + ba(i, a);
            s += Yi(i, t, n, l, o)
        }
    else if (l = h0(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            l = r + ba(i, a++),
            s += Yi(i, t, n, l, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Ni(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Yi(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function v0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ze = {
    current: null
}
  , Xi = {
    transition: null
}
  , y0 = {
    ReactCurrentDispatcher: ze,
    ReactCurrentBatchConfig: Xi,
    ReactCurrentOwner: gu
};
function qf() {
    throw Error("act(...) is not supported in production builds of React.")
}
G.Children = {
    map: Ni,
    forEach: function(e, t, n) {
        Ni(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ni(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ni(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!vu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
G.Component = ao;
G.Fragment = i0;
G.Profiler = a0;
G.PureComponent = hu;
G.StrictMode = s0;
G.Suspense = d0;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = y0;
G.act = qf;
G.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Wf({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = gu.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Gf.call(t, l) && !Yf.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: mi,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
G.createContext = function(e) {
    return e = {
        $$typeof: u0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: l0,
        _context: e
    },
    e.Consumer = e
}
;
G.createElement = Xf;
G.createFactory = function(e) {
    var t = Xf.bind(null, e);
    return t.type = e,
    t
}
;
G.createRef = function() {
    return {
        current: null
    }
}
;
G.forwardRef = function(e) {
    return {
        $$typeof: c0,
        render: e
    }
}
;
G.isValidElement = vu;
G.lazy = function(e) {
    return {
        $$typeof: p0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: v0
    }
}
;
G.memo = function(e, t) {
    return {
        $$typeof: f0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
G.startTransition = function(e) {
    var t = Xi.transition;
    Xi.transition = {};
    try {
        e()
    } finally {
        Xi.transition = t
    }
}
;
G.unstable_act = qf;
G.useCallback = function(e, t) {
    return ze.current.useCallback(e, t)
}
;
G.useContext = function(e) {
    return ze.current.useContext(e)
}
;
G.useDebugValue = function() {}
;
G.useDeferredValue = function(e) {
    return ze.current.useDeferredValue(e)
}
;
G.useEffect = function(e, t) {
    return ze.current.useEffect(e, t)
}
;
G.useId = function() {
    return ze.current.useId()
}
;
G.useImperativeHandle = function(e, t, n) {
    return ze.current.useImperativeHandle(e, t, n)
}
;
G.useInsertionEffect = function(e, t) {
    return ze.current.useInsertionEffect(e, t)
}
;
G.useLayoutEffect = function(e, t) {
    return ze.current.useLayoutEffect(e, t)
}
;
G.useMemo = function(e, t) {
    return ze.current.useMemo(e, t)
}
;
G.useReducer = function(e, t, n) {
    return ze.current.useReducer(e, t, n)
}
;
G.useRef = function(e) {
    return ze.current.useRef(e)
}
;
G.useState = function(e) {
    return ze.current.useState(e)
}
;
G.useSyncExternalStore = function(e, t, n) {
    return ze.current.useSyncExternalStore(e, t, n)
}
;
G.useTransition = function() {
    return ze.current.useTransition()
}
;
G.version = "18.3.1";
Vf.exports = G;
var x = Vf.exports;
const O = Bf(x)
  , Zf = r0({
    __proto__: null,
    default: O
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x0 = x
  , w0 = Symbol.for("react.element")
  , S0 = Symbol.for("react.fragment")
  , E0 = Object.prototype.hasOwnProperty
  , C0 = x0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , b0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Jf(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        E0.call(t, r) && !b0.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: w0,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: C0.current
    }
}
Ks.Fragment = S0;
Ks.jsx = Jf;
Ks.jsxs = Jf;
Uf.exports = Ks;
var c = Uf.exports
  , ep = {
    exports: {}
}
  , et = {}
  , tp = {
    exports: {}
}
  , np = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, T) {
        var D = N.length;
        N.push(T);
        e: for (; 0 < D; ) {
            var H = D - 1 >>> 1
              , z = N[H];
            if (0 < o(z, T))
                N[H] = T,
                N[D] = z,
                D = H;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var T = N[0]
          , D = N.pop();
        if (D !== T) {
            N[0] = D;
            e: for (var H = 0, z = N.length, Q = z >>> 1; H < Q; ) {
                var X = 2 * (H + 1) - 1
                  , ge = N[X]
                  , Pe = X + 1
                  , J = N[Pe];
                if (0 > o(ge, D))
                    Pe < z && 0 > o(J, ge) ? (N[H] = J,
                    N[Pe] = D,
                    H = Pe) : (N[H] = ge,
                    N[X] = D,
                    H = X);
                else if (Pe < z && 0 > o(J, D))
                    N[H] = J,
                    N[Pe] = D,
                    H = Pe;
                else
                    break e
            }
        }
        return T
    }
    function o(N, T) {
        var D = N.sortIndex - T.sortIndex;
        return D !== 0 ? D : N.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = []
      , u = []
      , d = 1
      , f = null
      , m = 3
      , p = !1
      , S = !1
      , y = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(N) {
        for (var T = n(u); T !== null; ) {
            if (T.callback === null)
                r(u);
            else if (T.startTime <= N)
                r(u),
                T.sortIndex = T.expirationTime,
                t(l, T);
            else
                break;
            T = n(u)
        }
    }
    function E(N) {
        if (y = !1,
        v(N),
        !S)
            if (n(l) !== null)
                S = !0,
                $(C);
            else {
                var T = n(u);
                T !== null && V(E, T.startTime - N)
            }
    }
    function C(N, T) {
        S = !1,
        y && (y = !1,
        g(j),
        j = -1),
        p = !0;
        var D = m;
        try {
            for (v(T),
            f = n(l); f !== null && (!(f.expirationTime > T) || N && !F()); ) {
                var H = f.callback;
                if (typeof H == "function") {
                    f.callback = null,
                    m = f.priorityLevel;
                    var z = H(f.expirationTime <= T);
                    T = e.unstable_now(),
                    typeof z == "function" ? f.callback = z : f === n(l) && r(l),
                    v(T)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var Q = !0;
            else {
                var X = n(u);
                X !== null && V(E, X.startTime - T),
                Q = !1
            }
            return Q
        } finally {
            f = null,
            m = D,
            p = !1
        }
    }
    var b = !1
      , k = null
      , j = -1
      , A = 5
      , M = -1;
    function F() {
        return !(e.unstable_now() - M < A)
    }
    function I() {
        if (k !== null) {
            var N = e.unstable_now();
            M = N;
            var T = !0;
            try {
                T = k(!0, N)
            } finally {
                T ? K() : (b = !1,
                k = null)
            }
        } else
            b = !1
    }
    var K;
    if (typeof h == "function")
        K = function() {
            h(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var L = new MessageChannel
          , Y = L.port2;
        L.port1.onmessage = I,
        K = function() {
            Y.postMessage(null)
        }
    } else
        K = function() {
            w(I, 0)
        }
        ;
    function $(N) {
        k = N,
        b || (b = !0,
        K())
    }
    function V(N, T) {
        j = w(function() {
            N(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(N) {
        N.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || p || (S = !0,
        $(C))
    }
    ,
    e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(N) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var T = 3;
            break;
        default:
            T = m
        }
        var D = m;
        m = T;
        try {
            return N()
        } finally {
            m = D
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(N, T) {
        switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            N = 3
        }
        var D = m;
        m = N;
        try {
            return T()
        } finally {
            m = D
        }
    }
    ,
    e.unstable_scheduleCallback = function(N, T, D) {
        var H = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay,
        D = typeof D == "number" && 0 < D ? H + D : H) : D = H,
        N) {
        case 1:
            var z = -1;
            break;
        case 2:
            z = 250;
            break;
        case 5:
            z = 1073741823;
            break;
        case 4:
            z = 1e4;
            break;
        default:
            z = 5e3
        }
        return z = D + z,
        N = {
            id: d++,
            callback: T,
            priorityLevel: N,
            startTime: D,
            expirationTime: z,
            sortIndex: -1
        },
        D > H ? (N.sortIndex = D,
        t(u, N),
        n(l) === null && N === n(u) && (y ? (g(j),
        j = -1) : y = !0,
        V(E, D - H))) : (N.sortIndex = z,
        t(l, N),
        S || p || (S = !0,
        $(C))),
        N
    }
    ,
    e.unstable_shouldYield = F,
    e.unstable_wrapCallback = function(N) {
        var T = m;
        return function() {
            var D = m;
            m = T;
            try {
                return N.apply(this, arguments)
            } finally {
                m = D
            }
        }
    }
}
)(np);
tp.exports = np;
var k0 = tp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var P0 = x
  , Je = k0;
function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var rp = new Set
  , Vo = {};
function hr(e, t) {
    Zr(e, t),
    Zr(e + "Capture", t)
}
function Zr(e, t) {
    for (Vo[e] = t,
    e = 0; e < t.length; e++)
        rp.add(t[e])
}
var Xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , il = Object.prototype.hasOwnProperty
  , N0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Bc = {}
  , Uc = {};
function T0(e) {
    return il.call(Uc, e) ? !0 : il.call(Bc, e) ? !1 : N0.test(e) ? Uc[e] = !0 : (Bc[e] = !0,
    !1)
}
function j0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function R0(e, t, n, r) {
    if (t === null || typeof t > "u" || j0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Fe(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ke[e] = new Fe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ke[t] = new Fe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ke[e] = new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ke[e] = new Fe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ke[e] = new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ke[e] = new Fe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ke[e] = new Fe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ke[e] = new Fe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ke[e] = new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var yu = /[\-:]([a-z])/g;
function xu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(yu, xu);
    ke[t] = new Fe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(yu, xu);
    ke[t] = new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(yu, xu);
    ke[t] = new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ke[e] = new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ke.xlinkHref = new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ke[e] = new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function wu(e, t, n, r) {
    var o = ke.hasOwnProperty(t) ? ke[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (R0(t, n, o, r) && (n = null),
    r || o === null ? T0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var nn = P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ti = Symbol.for("react.element")
  , Cr = Symbol.for("react.portal")
  , br = Symbol.for("react.fragment")
  , Su = Symbol.for("react.strict_mode")
  , sl = Symbol.for("react.profiler")
  , op = Symbol.for("react.provider")
  , ip = Symbol.for("react.context")
  , Eu = Symbol.for("react.forward_ref")
  , al = Symbol.for("react.suspense")
  , ll = Symbol.for("react.suspense_list")
  , Cu = Symbol.for("react.memo")
  , mn = Symbol.for("react.lazy")
  , sp = Symbol.for("react.offscreen")
  , Vc = Symbol.iterator;
function xo(e) {
    return e === null || typeof e != "object" ? null : (e = Vc && e[Vc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var de = Object.assign, ka;
function jo(e) {
    if (ka === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ka = t && t[1] || ""
        }
    return `
` + ka + e
}
var Pa = !1;
function Na(e, t) {
    if (!e || Pa)
        return "";
    Pa = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || o[s] !== i[a]) {
                                var l = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        Pa = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? jo(e) : ""
}
function O0(e) {
    switch (e.tag) {
    case 5:
        return jo(e.type);
    case 16:
        return jo("Lazy");
    case 13:
        return jo("Suspense");
    case 19:
        return jo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Na(e.type, !1),
        e;
    case 11:
        return e = Na(e.type.render, !1),
        e;
    case 1:
        return e = Na(e.type, !0),
        e;
    default:
        return ""
    }
}
function ul(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case br:
        return "Fragment";
    case Cr:
        return "Portal";
    case sl:
        return "Profiler";
    case Su:
        return "StrictMode";
    case al:
        return "Suspense";
    case ll:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case ip:
            return (e.displayName || "Context") + ".Consumer";
        case op:
            return (e._context.displayName || "Context") + ".Provider";
        case Eu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Cu:
            return t = e.displayName || null,
            t !== null ? t : ul(e.type) || "Memo";
        case mn:
            t = e._payload,
            e = e._init;
            try {
                return ul(e(t))
            } catch {}
        }
    return null
}
function M0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ul(t);
    case 8:
        return t === Su ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function _n(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function ap(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function A0(e) {
    var t = ap(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ji(e) {
    e._valueTracker || (e._valueTracker = A0(e))
}
function lp(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = ap(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function ds(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function cl(e, t) {
    var n = t.checked;
    return de({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Hc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = _n(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function up(e, t) {
    t = t.checked,
    t != null && wu(e, "checked", t, !1)
}
function dl(e, t) {
    up(e, t);
    var n = _n(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? fl(e, t.type, n) : t.hasOwnProperty("defaultValue") && fl(e, t.type, _n(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Wc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function fl(e, t, n) {
    (t !== "number" || ds(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Ro = Array.isArray;
function Dr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + _n(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function pl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(R(91));
    return de({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Kc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(R(92));
            if (Ro(n)) {
                if (1 < n.length)
                    throw Error(R(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: _n(n)
    }
}
function cp(e, t) {
    var n = _n(t.value)
      , r = _n(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Qc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function dp(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function hl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? dp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ri, fp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ri = Ri || document.createElement("div"),
        Ri.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ri.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ho(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ao = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , L0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ao).forEach(function(e) {
    L0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Ao[t] = Ao[e]
    })
});
function pp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ao.hasOwnProperty(e) && Ao[e] ? ("" + t).trim() : t + "px"
}
function hp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = pp(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var D0 = de({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ml(e, t) {
    if (t) {
        if (D0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(R(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(R(62))
    }
}
function gl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var vl = null;
function bu(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var yl = null
  , _r = null
  , Ir = null;
function Gc(e) {
    if (e = yi(e)) {
        if (typeof yl != "function")
            throw Error(R(280));
        var t = e.stateNode;
        t && (t = qs(t),
        yl(e.stateNode, e.type, t))
    }
}
function mp(e) {
    _r ? Ir ? Ir.push(e) : Ir = [e] : _r = e
}
function gp() {
    if (_r) {
        var e = _r
          , t = Ir;
        if (Ir = _r = null,
        Gc(e),
        t)
            for (e = 0; e < t.length; e++)
                Gc(t[e])
    }
}
function vp(e, t) {
    return e(t)
}
function yp() {}
var Ta = !1;
function xp(e, t, n) {
    if (Ta)
        return e(t, n);
    Ta = !0;
    try {
        return vp(e, t, n)
    } finally {
        Ta = !1,
        (_r !== null || Ir !== null) && (yp(),
        gp())
    }
}
function Wo(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = qs(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(R(231, t, typeof n));
    return n
}
var xl = !1;
if (Xt)
    try {
        var wo = {};
        Object.defineProperty(wo, "passive", {
            get: function() {
                xl = !0
            }
        }),
        window.addEventListener("test", wo, wo),
        window.removeEventListener("test", wo, wo)
    } catch {
        xl = !1
    }
function _0(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var Lo = !1
  , fs = null
  , ps = !1
  , wl = null
  , I0 = {
    onError: function(e) {
        Lo = !0,
        fs = e
    }
};
function z0(e, t, n, r, o, i, s, a, l) {
    Lo = !1,
    fs = null,
    _0.apply(I0, arguments)
}
function F0(e, t, n, r, o, i, s, a, l) {
    if (z0.apply(this, arguments),
    Lo) {
        if (Lo) {
            var u = fs;
            Lo = !1,
            fs = null
        } else
            throw Error(R(198));
        ps || (ps = !0,
        wl = u)
    }
}
function mr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function wp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Yc(e) {
    if (mr(e) !== e)
        throw Error(R(188))
}
function $0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = mr(e),
        t === null)
            throw Error(R(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return Yc(o),
                    e;
                if (i === r)
                    return Yc(o),
                    t;
                i = i.sibling
            }
            throw Error(R(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, a = o.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(R(189))
            }
        }
        if (n.alternate !== r)
            throw Error(R(190))
    }
    if (n.tag !== 3)
        throw Error(R(188));
    return n.stateNode.current === n ? e : t
}
function Sp(e) {
    return e = $0(e),
    e !== null ? Ep(e) : null
}
function Ep(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Ep(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Cp = Je.unstable_scheduleCallback
  , Xc = Je.unstable_cancelCallback
  , B0 = Je.unstable_shouldYield
  , U0 = Je.unstable_requestPaint
  , he = Je.unstable_now
  , V0 = Je.unstable_getCurrentPriorityLevel
  , ku = Je.unstable_ImmediatePriority
  , bp = Je.unstable_UserBlockingPriority
  , hs = Je.unstable_NormalPriority
  , H0 = Je.unstable_LowPriority
  , kp = Je.unstable_IdlePriority
  , Qs = null
  , Dt = null;
function W0(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
        try {
            Dt.onCommitFiberRoot(Qs, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Et = Math.clz32 ? Math.clz32 : G0
  , K0 = Math.log
  , Q0 = Math.LN2;
function G0(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (K0(e) / Q0 | 0) | 0
}
var Oi = 64
  , Mi = 4194304;
function Oo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ms(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? r = Oo(a) : (i &= s,
        i !== 0 && (r = Oo(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = Oo(s) : i !== 0 && (r = Oo(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Et(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Y0(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function X0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - Et(i)
          , a = 1 << s
          , l = o[s];
        l === -1 ? (!(a & n) || a & r) && (o[s] = Y0(a, t)) : l <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function Sl(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Pp() {
    var e = Oi;
    return Oi <<= 1,
    !(Oi & 4194240) && (Oi = 64),
    e
}
function ja(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function gi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Et(t),
    e[t] = n
}
function q0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Et(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function Pu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Et(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var ee = 0;
function Np(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Tp, Nu, jp, Rp, Op, El = !1, Ai = [], Nn = null, Tn = null, jn = null, Ko = new Map, Qo = new Map, vn = [], Z0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function qc(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Nn = null;
        break;
    case "dragenter":
    case "dragleave":
        Tn = null;
        break;
    case "mouseover":
    case "mouseout":
        jn = null;
        break;
    case "pointerover":
    case "pointerout":
        Ko.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Qo.delete(t.pointerId)
    }
}
function So(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = yi(t),
    t !== null && Nu(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function J0(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Nn = So(Nn, e, t, n, r, o),
        !0;
    case "dragenter":
        return Tn = So(Tn, e, t, n, r, o),
        !0;
    case "mouseover":
        return jn = So(jn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Ko.set(i, So(Ko.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Qo.set(i, So(Qo.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Mp(e) {
    var t = qn(e.target);
    if (t !== null) {
        var n = mr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = wp(n),
                t !== null) {
                    e.blockedOn = t,
                    Op(e.priority, function() {
                        jp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function qi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Cl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            vl = r,
            n.target.dispatchEvent(r),
            vl = null
        } else
            return t = yi(n),
            t !== null && Nu(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Zc(e, t, n) {
    qi(e) && n.delete(t)
}
function ev() {
    El = !1,
    Nn !== null && qi(Nn) && (Nn = null),
    Tn !== null && qi(Tn) && (Tn = null),
    jn !== null && qi(jn) && (jn = null),
    Ko.forEach(Zc),
    Qo.forEach(Zc)
}
function Eo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    El || (El = !0,
    Je.unstable_scheduleCallback(Je.unstable_NormalPriority, ev)))
}
function Go(e) {
    function t(o) {
        return Eo(o, e)
    }
    if (0 < Ai.length) {
        Eo(Ai[0], e);
        for (var n = 1; n < Ai.length; n++) {
            var r = Ai[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Nn !== null && Eo(Nn, e),
    Tn !== null && Eo(Tn, e),
    jn !== null && Eo(jn, e),
    Ko.forEach(t),
    Qo.forEach(t),
    n = 0; n < vn.length; n++)
        r = vn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < vn.length && (n = vn[0],
    n.blockedOn === null); )
        Mp(n),
        n.blockedOn === null && vn.shift()
}
var zr = nn.ReactCurrentBatchConfig
  , gs = !0;
function tv(e, t, n, r) {
    var o = ee
      , i = zr.transition;
    zr.transition = null;
    try {
        ee = 1,
        Tu(e, t, n, r)
    } finally {
        ee = o,
        zr.transition = i
    }
}
function nv(e, t, n, r) {
    var o = ee
      , i = zr.transition;
    zr.transition = null;
    try {
        ee = 4,
        Tu(e, t, n, r)
    } finally {
        ee = o,
        zr.transition = i
    }
}
function Tu(e, t, n, r) {
    if (gs) {
        var o = Cl(e, t, n, r);
        if (o === null)
            Fa(e, t, r, vs, n),
            qc(e, r);
        else if (J0(o, e, t, n, r))
            r.stopPropagation();
        else if (qc(e, r),
        t & 4 && -1 < Z0.indexOf(e)) {
            for (; o !== null; ) {
                var i = yi(o);
                if (i !== null && Tp(i),
                i = Cl(e, t, n, r),
                i === null && Fa(e, t, r, vs, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            Fa(e, t, r, null, n)
    }
}
var vs = null;
function Cl(e, t, n, r) {
    if (vs = null,
    e = bu(r),
    e = qn(e),
    e !== null)
        if (t = mr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = wp(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return vs = e,
    null
}
function Ap(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (V0()) {
        case ku:
            return 1;
        case bp:
            return 4;
        case hs:
        case H0:
            return 16;
        case kp:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var bn = null
  , ju = null
  , Zi = null;
function Lp() {
    if (Zi)
        return Zi;
    var e, t = ju, n = t.length, r, o = "value"in bn ? bn.value : bn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return Zi = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Ji(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Li() {
    return !0
}
function Jc() {
    return !1
}
function tt(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Li : Jc,
        this.isPropagationStopped = Jc,
        this
    }
    return de(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Li)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Li)
        },
        persist: function() {},
        isPersistent: Li
    }),
    t
}
var lo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ru = tt(lo), vi = de({}, lo, {
    view: 0,
    detail: 0
}), rv = tt(vi), Ra, Oa, Co, Gs = de({}, vi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ou,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Co && (Co && e.type === "mousemove" ? (Ra = e.screenX - Co.screenX,
        Oa = e.screenY - Co.screenY) : Oa = Ra = 0,
        Co = e),
        Ra)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Oa
    }
}), ed = tt(Gs), ov = de({}, Gs, {
    dataTransfer: 0
}), iv = tt(ov), sv = de({}, vi, {
    relatedTarget: 0
}), Ma = tt(sv), av = de({}, lo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), lv = tt(av), uv = de({}, lo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), cv = tt(uv), dv = de({}, lo, {
    data: 0
}), td = tt(dv), fv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, pv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, hv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function mv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = hv[e]) ? !!t[e] : !1
}
function Ou() {
    return mv
}
var gv = de({}, vi, {
    key: function(e) {
        if (e.key) {
            var t = fv[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ji(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pv[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ou,
    charCode: function(e) {
        return e.type === "keypress" ? Ji(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ji(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , vv = tt(gv)
  , yv = de({}, Gs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , nd = tt(yv)
  , xv = de({}, vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ou
})
  , wv = tt(xv)
  , Sv = de({}, lo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Ev = tt(Sv)
  , Cv = de({}, Gs, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , bv = tt(Cv)
  , kv = [9, 13, 27, 32]
  , Mu = Xt && "CompositionEvent"in window
  , Do = null;
Xt && "documentMode"in document && (Do = document.documentMode);
var Pv = Xt && "TextEvent"in window && !Do
  , Dp = Xt && (!Mu || Do && 8 < Do && 11 >= Do)
  , rd = " "
  , od = !1;
function _p(e, t) {
    switch (e) {
    case "keyup":
        return kv.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Ip(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var kr = !1;
function Nv(e, t) {
    switch (e) {
    case "compositionend":
        return Ip(t);
    case "keypress":
        return t.which !== 32 ? null : (od = !0,
        rd);
    case "textInput":
        return e = t.data,
        e === rd && od ? null : e;
    default:
        return null
    }
}
function Tv(e, t) {
    if (kr)
        return e === "compositionend" || !Mu && _p(e, t) ? (e = Lp(),
        Zi = ju = bn = null,
        kr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Dp && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var jv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function id(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!jv[e.type] : t === "textarea"
}
function zp(e, t, n, r) {
    mp(r),
    t = ys(t, "onChange"),
    0 < t.length && (n = new Ru("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var _o = null
  , Yo = null;
function Rv(e) {
    Yp(e, 0)
}
function Ys(e) {
    var t = Tr(e);
    if (lp(t))
        return e
}
function Ov(e, t) {
    if (e === "change")
        return t
}
var Fp = !1;
if (Xt) {
    var Aa;
    if (Xt) {
        var La = "oninput"in document;
        if (!La) {
            var sd = document.createElement("div");
            sd.setAttribute("oninput", "return;"),
            La = typeof sd.oninput == "function"
        }
        Aa = La
    } else
        Aa = !1;
    Fp = Aa && (!document.documentMode || 9 < document.documentMode)
}
function ad() {
    _o && (_o.detachEvent("onpropertychange", $p),
    Yo = _o = null)
}
function $p(e) {
    if (e.propertyName === "value" && Ys(Yo)) {
        var t = [];
        zp(t, Yo, e, bu(e)),
        xp(Rv, t)
    }
}
function Mv(e, t, n) {
    e === "focusin" ? (ad(),
    _o = t,
    Yo = n,
    _o.attachEvent("onpropertychange", $p)) : e === "focusout" && ad()
}
function Av(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ys(Yo)
}
function Lv(e, t) {
    if (e === "click")
        return Ys(t)
}
function Dv(e, t) {
    if (e === "input" || e === "change")
        return Ys(t)
}
function _v(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var bt = typeof Object.is == "function" ? Object.is : _v;
function Xo(e, t) {
    if (bt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!il.call(t, o) || !bt(e[o], t[o]))
            return !1
    }
    return !0
}
function ld(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function ud(e, t) {
    var n = ld(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ld(n)
    }
}
function Bp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bp(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Up() {
    for (var e = window, t = ds(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ds(e.document)
    }
    return t
}
function Au(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Iv(e) {
    var t = Up()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Bp(n.ownerDocument.documentElement, n)) {
        if (r !== null && Au(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = ud(n, i);
                var s = ud(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var zv = Xt && "documentMode"in document && 11 >= document.documentMode
  , Pr = null
  , bl = null
  , Io = null
  , kl = !1;
function cd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    kl || Pr == null || Pr !== ds(r) || (r = Pr,
    "selectionStart"in r && Au(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Io && Xo(Io, r) || (Io = r,
    r = ys(bl, "onSelect"),
    0 < r.length && (t = new Ru("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Pr)))
}
function Di(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Nr = {
    animationend: Di("Animation", "AnimationEnd"),
    animationiteration: Di("Animation", "AnimationIteration"),
    animationstart: Di("Animation", "AnimationStart"),
    transitionend: Di("Transition", "TransitionEnd")
}
  , Da = {}
  , Vp = {};
Xt && (Vp = document.createElement("div").style,
"AnimationEvent"in window || (delete Nr.animationend.animation,
delete Nr.animationiteration.animation,
delete Nr.animationstart.animation),
"TransitionEvent"in window || delete Nr.transitionend.transition);
function Xs(e) {
    if (Da[e])
        return Da[e];
    if (!Nr[e])
        return e;
    var t = Nr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Vp)
            return Da[e] = t[n];
    return e
}
var Hp = Xs("animationend")
  , Wp = Xs("animationiteration")
  , Kp = Xs("animationstart")
  , Qp = Xs("transitionend")
  , Gp = new Map
  , dd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Un(e, t) {
    Gp.set(e, t),
    hr(t, [e])
}
for (var _a = 0; _a < dd.length; _a++) {
    var Ia = dd[_a]
      , Fv = Ia.toLowerCase()
      , $v = Ia[0].toUpperCase() + Ia.slice(1);
    Un(Fv, "on" + $v)
}
Un(Hp, "onAnimationEnd");
Un(Wp, "onAnimationIteration");
Un(Kp, "onAnimationStart");
Un("dblclick", "onDoubleClick");
Un("focusin", "onFocus");
Un("focusout", "onBlur");
Un(Qp, "onTransitionEnd");
Zr("onMouseEnter", ["mouseout", "mouseover"]);
Zr("onMouseLeave", ["mouseout", "mouseover"]);
Zr("onPointerEnter", ["pointerout", "pointerover"]);
Zr("onPointerLeave", ["pointerout", "pointerover"]);
hr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
hr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
hr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
hr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Bv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));
function fd(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    F0(r, t, void 0, e),
    e.currentTarget = null
}
function Yp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    fd(o, a, u),
                    i = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    fd(o, a, u),
                    i = l
                }
        }
    }
    if (ps)
        throw e = wl,
        ps = !1,
        wl = null,
        e
}
function oe(e, t) {
    var n = t[Rl];
    n === void 0 && (n = t[Rl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Xp(t, e, 2, !1),
    n.add(r))
}
function za(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Xp(n, e, r, t)
}
var _i = "_reactListening" + Math.random().toString(36).slice(2);
function qo(e) {
    if (!e[_i]) {
        e[_i] = !0,
        rp.forEach(function(n) {
            n !== "selectionchange" && (Bv.has(n) || za(n, !1, e),
            za(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_i] || (t[_i] = !0,
        za("selectionchange", !1, t))
    }
}
function Xp(e, t, n, r) {
    switch (Ap(t)) {
    case 1:
        var o = tv;
        break;
    case 4:
        o = nv;
        break;
    default:
        o = Tu
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !xl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Fa(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = qn(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = i = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    xp(function() {
        var u = i
          , d = bu(n)
          , f = [];
        e: {
            var m = Gp.get(e);
            if (m !== void 0) {
                var p = Ru
                  , S = e;
                switch (e) {
                case "keypress":
                    if (Ji(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    p = vv;
                    break;
                case "focusin":
                    S = "focus",
                    p = Ma;
                    break;
                case "focusout":
                    S = "blur",
                    p = Ma;
                    break;
                case "beforeblur":
                case "afterblur":
                    p = Ma;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    p = ed;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    p = iv;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    p = wv;
                    break;
                case Hp:
                case Wp:
                case Kp:
                    p = lv;
                    break;
                case Qp:
                    p = Ev;
                    break;
                case "scroll":
                    p = rv;
                    break;
                case "wheel":
                    p = bv;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    p = cv;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    p = nd
                }
                var y = (t & 4) !== 0
                  , w = !y && e === "scroll"
                  , g = y ? m !== null ? m + "Capture" : null : m;
                y = [];
                for (var h = u, v; h !== null; ) {
                    v = h;
                    var E = v.stateNode;
                    if (v.tag === 5 && E !== null && (v = E,
                    g !== null && (E = Wo(h, g),
                    E != null && y.push(Zo(h, E, v)))),
                    w)
                        break;
                    h = h.return
                }
                0 < y.length && (m = new p(m,S,null,n,d),
                f.push({
                    event: m,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                p = e === "mouseout" || e === "pointerout",
                m && n !== vl && (S = n.relatedTarget || n.fromElement) && (qn(S) || S[qt]))
                    break e;
                if ((p || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window,
                p ? (S = n.relatedTarget || n.toElement,
                p = u,
                S = S ? qn(S) : null,
                S !== null && (w = mr(S),
                S !== w || S.tag !== 5 && S.tag !== 6) && (S = null)) : (p = null,
                S = u),
                p !== S)) {
                    if (y = ed,
                    E = "onMouseLeave",
                    g = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = nd,
                    E = "onPointerLeave",
                    g = "onPointerEnter",
                    h = "pointer"),
                    w = p == null ? m : Tr(p),
                    v = S == null ? m : Tr(S),
                    m = new y(E,h + "leave",p,n,d),
                    m.target = w,
                    m.relatedTarget = v,
                    E = null,
                    qn(d) === u && (y = new y(g,h + "enter",S,n,d),
                    y.target = v,
                    y.relatedTarget = w,
                    E = y),
                    w = E,
                    p && S)
                        t: {
                            for (y = p,
                            g = S,
                            h = 0,
                            v = y; v; v = Er(v))
                                h++;
                            for (v = 0,
                            E = g; E; E = Er(E))
                                v++;
                            for (; 0 < h - v; )
                                y = Er(y),
                                h--;
                            for (; 0 < v - h; )
                                g = Er(g),
                                v--;
                            for (; h--; ) {
                                if (y === g || g !== null && y === g.alternate)
                                    break t;
                                y = Er(y),
                                g = Er(g)
                            }
                            y = null
                        }
                    else
                        y = null;
                    p !== null && pd(f, m, p, y, !1),
                    S !== null && w !== null && pd(f, w, S, y, !0)
                }
            }
            e: {
                if (m = u ? Tr(u) : window,
                p = m.nodeName && m.nodeName.toLowerCase(),
                p === "select" || p === "input" && m.type === "file")
                    var C = Ov;
                else if (id(m))
                    if (Fp)
                        C = Dv;
                    else {
                        C = Av;
                        var b = Mv
                    }
                else
                    (p = m.nodeName) && p.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = Lv);
                if (C && (C = C(e, u))) {
                    zp(f, C, n, d);
                    break e
                }
                b && b(e, m, u),
                e === "focusout" && (b = m._wrapperState) && b.controlled && m.type === "number" && fl(m, "number", m.value)
            }
            switch (b = u ? Tr(u) : window,
            e) {
            case "focusin":
                (id(b) || b.contentEditable === "true") && (Pr = b,
                bl = u,
                Io = null);
                break;
            case "focusout":
                Io = bl = Pr = null;
                break;
            case "mousedown":
                kl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                kl = !1,
                cd(f, n, d);
                break;
            case "selectionchange":
                if (zv)
                    break;
            case "keydown":
            case "keyup":
                cd(f, n, d)
            }
            var k;
            if (Mu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                kr ? _p(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (Dp && n.locale !== "ko" && (kr || j !== "onCompositionStart" ? j === "onCompositionEnd" && kr && (k = Lp()) : (bn = d,
            ju = "value"in bn ? bn.value : bn.textContent,
            kr = !0)),
            b = ys(u, j),
            0 < b.length && (j = new td(j,e,null,n,d),
            f.push({
                event: j,
                listeners: b
            }),
            k ? j.data = k : (k = Ip(n),
            k !== null && (j.data = k)))),
            (k = Pv ? Nv(e, n) : Tv(e, n)) && (u = ys(u, "onBeforeInput"),
            0 < u.length && (d = new td("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: u
            }),
            d.data = k))
        }
        Yp(f, t)
    })
}
function Zo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ys(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Wo(e, n),
        i != null && r.unshift(Zo(e, i, o)),
        i = Wo(e, t),
        i != null && r.push(Zo(e, i, o))),
        e = e.return
    }
    return r
}
function Er(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function pd(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        o ? (l = Wo(n, i),
        l != null && s.unshift(Zo(n, l, a))) : o || (l = Wo(n, i),
        l != null && s.push(Zo(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Uv = /\r\n?/g
  , Vv = /\u0000|\uFFFD/g;
function hd(e) {
    return (typeof e == "string" ? e : "" + e).replace(Uv, `
`).replace(Vv, "")
}
function Ii(e, t, n) {
    if (t = hd(t),
    hd(e) !== t && n)
        throw Error(R(425))
}
function xs() {}
var Pl = null
  , Nl = null;
function Tl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var jl = typeof setTimeout == "function" ? setTimeout : void 0
  , Hv = typeof clearTimeout == "function" ? clearTimeout : void 0
  , md = typeof Promise == "function" ? Promise : void 0
  , Wv = typeof queueMicrotask == "function" ? queueMicrotask : typeof md < "u" ? function(e) {
    return md.resolve(null).then(e).catch(Kv)
}
: jl;
function Kv(e) {
    setTimeout(function() {
        throw e
    })
}
function $a(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Go(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Go(t)
}
function Rn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function gd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var uo = Math.random().toString(36).slice(2)
  , At = "__reactFiber$" + uo
  , Jo = "__reactProps$" + uo
  , qt = "__reactContainer$" + uo
  , Rl = "__reactEvents$" + uo
  , Qv = "__reactListeners$" + uo
  , Gv = "__reactHandles$" + uo;
function qn(e) {
    var t = e[At];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[qt] || n[At]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = gd(e); e !== null; ) {
                    if (n = e[At])
                        return n;
                    e = gd(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function yi(e) {
    return e = e[At] || e[qt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Tr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(R(33))
}
function qs(e) {
    return e[Jo] || null
}
var Ol = []
  , jr = -1;
function Vn(e) {
    return {
        current: e
    }
}
function ie(e) {
    0 > jr || (e.current = Ol[jr],
    Ol[jr] = null,
    jr--)
}
function ne(e, t) {
    jr++,
    Ol[jr] = e.current,
    e.current = t
}
var In = {}
  , Ae = Vn(In)
  , He = Vn(!1)
  , lr = In;
function Jr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return In;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function We(e) {
    return e = e.childContextTypes,
    e != null
}
function ws() {
    ie(He),
    ie(Ae)
}
function vd(e, t, n) {
    if (Ae.current !== In)
        throw Error(R(168));
    ne(Ae, t),
    ne(He, n)
}
function qp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(R(108, M0(e) || "Unknown", o));
    return de({}, n, r)
}
function Ss(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || In,
    lr = Ae.current,
    ne(Ae, e),
    ne(He, He.current),
    !0
}
function yd(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(R(169));
    n ? (e = qp(e, t, lr),
    r.__reactInternalMemoizedMergedChildContext = e,
    ie(He),
    ie(Ae),
    ne(Ae, e)) : ie(He),
    ne(He, n)
}
var Ht = null
  , Zs = !1
  , Ba = !1;
function Zp(e) {
    Ht === null ? Ht = [e] : Ht.push(e)
}
function Yv(e) {
    Zs = !0,
    Zp(e)
}
function Hn() {
    if (!Ba && Ht !== null) {
        Ba = !0;
        var e = 0
          , t = ee;
        try {
            var n = Ht;
            for (ee = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ht = null,
            Zs = !1
        } catch (o) {
            throw Ht !== null && (Ht = Ht.slice(e + 1)),
            Cp(ku, Hn),
            o
        } finally {
            ee = t,
            Ba = !1
        }
    }
    return null
}
var Rr = []
  , Or = 0
  , Es = null
  , Cs = 0
  , ot = []
  , it = 0
  , ur = null
  , Kt = 1
  , Qt = "";
function Yn(e, t) {
    Rr[Or++] = Cs,
    Rr[Or++] = Es,
    Es = e,
    Cs = t
}
function Jp(e, t, n) {
    ot[it++] = Kt,
    ot[it++] = Qt,
    ot[it++] = ur,
    ur = e;
    var r = Kt;
    e = Qt;
    var o = 32 - Et(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - Et(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        Kt = 1 << 32 - Et(t) + o | n << o | r,
        Qt = i + e
    } else
        Kt = 1 << i | n << o | r,
        Qt = e
}
function Lu(e) {
    e.return !== null && (Yn(e, 1),
    Jp(e, 1, 0))
}
function Du(e) {
    for (; e === Es; )
        Es = Rr[--Or],
        Rr[Or] = null,
        Cs = Rr[--Or],
        Rr[Or] = null;
    for (; e === ur; )
        ur = ot[--it],
        ot[it] = null,
        Qt = ot[--it],
        ot[it] = null,
        Kt = ot[--it],
        ot[it] = null
}
var qe = null
  , Xe = null
  , ae = !1
  , wt = null;
function eh(e, t) {
    var n = st(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function xd(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        qe = e,
        Xe = Rn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        qe = e,
        Xe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = ur !== null ? {
            id: Kt,
            overflow: Qt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = st(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        qe = e,
        Xe = null,
        !0) : !1;
    default:
        return !1
    }
}
function Ml(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Al(e) {
    if (ae) {
        var t = Xe;
        if (t) {
            var n = t;
            if (!xd(e, t)) {
                if (Ml(e))
                    throw Error(R(418));
                t = Rn(n.nextSibling);
                var r = qe;
                t && xd(e, t) ? eh(r, n) : (e.flags = e.flags & -4097 | 2,
                ae = !1,
                qe = e)
            }
        } else {
            if (Ml(e))
                throw Error(R(418));
            e.flags = e.flags & -4097 | 2,
            ae = !1,
            qe = e
        }
    }
}
function wd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    qe = e
}
function zi(e) {
    if (e !== qe)
        return !1;
    if (!ae)
        return wd(e),
        ae = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Tl(e.type, e.memoizedProps)),
    t && (t = Xe)) {
        if (Ml(e))
            throw th(),
            Error(R(418));
        for (; t; )
            eh(e, t),
            t = Rn(t.nextSibling)
    }
    if (wd(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(R(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Xe = Rn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Xe = null
        }
    } else
        Xe = qe ? Rn(e.stateNode.nextSibling) : null;
    return !0
}
function th() {
    for (var e = Xe; e; )
        e = Rn(e.nextSibling)
}
function eo() {
    Xe = qe = null,
    ae = !1
}
function _u(e) {
    wt === null ? wt = [e] : wt.push(e)
}
var Xv = nn.ReactCurrentBatchConfig;
function bo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(R(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(R(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var a = o.refs;
                s === null ? delete a[i] : a[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(R(284));
        if (!n._owner)
            throw Error(R(290, e))
    }
    return e
}
function Fi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Sd(e) {
    var t = e._init;
    return t(e._payload)
}
function nh(e) {
    function t(g, h) {
        if (e) {
            var v = g.deletions;
            v === null ? (g.deletions = [h],
            g.flags |= 16) : v.push(h)
        }
    }
    function n(g, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(g, h),
            h = h.sibling;
        return null
    }
    function r(g, h) {
        for (g = new Map; h !== null; )
            h.key !== null ? g.set(h.key, h) : g.set(h.index, h),
            h = h.sibling;
        return g
    }
    function o(g, h) {
        return g = Ln(g, h),
        g.index = 0,
        g.sibling = null,
        g
    }
    function i(g, h, v) {
        return g.index = v,
        e ? (v = g.alternate,
        v !== null ? (v = v.index,
        v < h ? (g.flags |= 2,
        h) : v) : (g.flags |= 2,
        h)) : (g.flags |= 1048576,
        h)
    }
    function s(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function a(g, h, v, E) {
        return h === null || h.tag !== 6 ? (h = Ga(v, g.mode, E),
        h.return = g,
        h) : (h = o(h, v),
        h.return = g,
        h)
    }
    function l(g, h, v, E) {
        var C = v.type;
        return C === br ? d(g, h, v.props.children, E, v.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === mn && Sd(C) === h.type) ? (E = o(h, v.props),
        E.ref = bo(g, h, v),
        E.return = g,
        E) : (E = ss(v.type, v.key, v.props, null, g.mode, E),
        E.ref = bo(g, h, v),
        E.return = g,
        E)
    }
    function u(g, h, v, E) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Ya(v, g.mode, E),
        h.return = g,
        h) : (h = o(h, v.children || []),
        h.return = g,
        h)
    }
    function d(g, h, v, E, C) {
        return h === null || h.tag !== 7 ? (h = ar(v, g.mode, E, C),
        h.return = g,
        h) : (h = o(h, v),
        h.return = g,
        h)
    }
    function f(g, h, v) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = Ga("" + h, g.mode, v),
            h.return = g,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Ti:
                return v = ss(h.type, h.key, h.props, null, g.mode, v),
                v.ref = bo(g, null, h),
                v.return = g,
                v;
            case Cr:
                return h = Ya(h, g.mode, v),
                h.return = g,
                h;
            case mn:
                var E = h._init;
                return f(g, E(h._payload), v)
            }
            if (Ro(h) || xo(h))
                return h = ar(h, g.mode, v, null),
                h.return = g,
                h;
            Fi(g, h)
        }
        return null
    }
    function m(g, h, v, E) {
        var C = h !== null ? h.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return C !== null ? null : a(g, h, "" + v, E);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Ti:
                return v.key === C ? l(g, h, v, E) : null;
            case Cr:
                return v.key === C ? u(g, h, v, E) : null;
            case mn:
                return C = v._init,
                m(g, h, C(v._payload), E)
            }
            if (Ro(v) || xo(v))
                return C !== null ? null : d(g, h, v, E, null);
            Fi(g, v)
        }
        return null
    }
    function p(g, h, v, E, C) {
        if (typeof E == "string" && E !== "" || typeof E == "number")
            return g = g.get(v) || null,
            a(h, g, "" + E, C);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
            case Ti:
                return g = g.get(E.key === null ? v : E.key) || null,
                l(h, g, E, C);
            case Cr:
                return g = g.get(E.key === null ? v : E.key) || null,
                u(h, g, E, C);
            case mn:
                var b = E._init;
                return p(g, h, v, b(E._payload), C)
            }
            if (Ro(E) || xo(E))
                return g = g.get(v) || null,
                d(h, g, E, C, null);
            Fi(h, E)
        }
        return null
    }
    function S(g, h, v, E) {
        for (var C = null, b = null, k = h, j = h = 0, A = null; k !== null && j < v.length; j++) {
            k.index > j ? (A = k,
            k = null) : A = k.sibling;
            var M = m(g, k, v[j], E);
            if (M === null) {
                k === null && (k = A);
                break
            }
            e && k && M.alternate === null && t(g, k),
            h = i(M, h, j),
            b === null ? C = M : b.sibling = M,
            b = M,
            k = A
        }
        if (j === v.length)
            return n(g, k),
            ae && Yn(g, j),
            C;
        if (k === null) {
            for (; j < v.length; j++)
                k = f(g, v[j], E),
                k !== null && (h = i(k, h, j),
                b === null ? C = k : b.sibling = k,
                b = k);
            return ae && Yn(g, j),
            C
        }
        for (k = r(g, k); j < v.length; j++)
            A = p(k, g, j, v[j], E),
            A !== null && (e && A.alternate !== null && k.delete(A.key === null ? j : A.key),
            h = i(A, h, j),
            b === null ? C = A : b.sibling = A,
            b = A);
        return e && k.forEach(function(F) {
            return t(g, F)
        }),
        ae && Yn(g, j),
        C
    }
    function y(g, h, v, E) {
        var C = xo(v);
        if (typeof C != "function")
            throw Error(R(150));
        if (v = C.call(v),
        v == null)
            throw Error(R(151));
        for (var b = C = null, k = h, j = h = 0, A = null, M = v.next(); k !== null && !M.done; j++,
        M = v.next()) {
            k.index > j ? (A = k,
            k = null) : A = k.sibling;
            var F = m(g, k, M.value, E);
            if (F === null) {
                k === null && (k = A);
                break
            }
            e && k && F.alternate === null && t(g, k),
            h = i(F, h, j),
            b === null ? C = F : b.sibling = F,
            b = F,
            k = A
        }
        if (M.done)
            return n(g, k),
            ae && Yn(g, j),
            C;
        if (k === null) {
            for (; !M.done; j++,
            M = v.next())
                M = f(g, M.value, E),
                M !== null && (h = i(M, h, j),
                b === null ? C = M : b.sibling = M,
                b = M);
            return ae && Yn(g, j),
            C
        }
        for (k = r(g, k); !M.done; j++,
        M = v.next())
            M = p(k, g, j, M.value, E),
            M !== null && (e && M.alternate !== null && k.delete(M.key === null ? j : M.key),
            h = i(M, h, j),
            b === null ? C = M : b.sibling = M,
            b = M);
        return e && k.forEach(function(I) {
            return t(g, I)
        }),
        ae && Yn(g, j),
        C
    }
    function w(g, h, v, E) {
        if (typeof v == "object" && v !== null && v.type === br && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Ti:
                e: {
                    for (var C = v.key, b = h; b !== null; ) {
                        if (b.key === C) {
                            if (C = v.type,
                            C === br) {
                                if (b.tag === 7) {
                                    n(g, b.sibling),
                                    h = o(b, v.props.children),
                                    h.return = g,
                                    g = h;
                                    break e
                                }
                            } else if (b.elementType === C || typeof C == "object" && C !== null && C.$$typeof === mn && Sd(C) === b.type) {
                                n(g, b.sibling),
                                h = o(b, v.props),
                                h.ref = bo(g, b, v),
                                h.return = g,
                                g = h;
                                break e
                            }
                            n(g, b);
                            break
                        } else
                            t(g, b);
                        b = b.sibling
                    }
                    v.type === br ? (h = ar(v.props.children, g.mode, E, v.key),
                    h.return = g,
                    g = h) : (E = ss(v.type, v.key, v.props, null, g.mode, E),
                    E.ref = bo(g, h, v),
                    E.return = g,
                    g = E)
                }
                return s(g);
            case Cr:
                e: {
                    for (b = v.key; h !== null; ) {
                        if (h.key === b)
                            if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                                n(g, h.sibling),
                                h = o(h, v.children || []),
                                h.return = g,
                                g = h;
                                break e
                            } else {
                                n(g, h);
                                break
                            }
                        else
                            t(g, h);
                        h = h.sibling
                    }
                    h = Ya(v, g.mode, E),
                    h.return = g,
                    g = h
                }
                return s(g);
            case mn:
                return b = v._init,
                w(g, h, b(v._payload), E)
            }
            if (Ro(v))
                return S(g, h, v, E);
            if (xo(v))
                return y(g, h, v, E);
            Fi(g, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        h !== null && h.tag === 6 ? (n(g, h.sibling),
        h = o(h, v),
        h.return = g,
        g = h) : (n(g, h),
        h = Ga(v, g.mode, E),
        h.return = g,
        g = h),
        s(g)) : n(g, h)
    }
    return w
}
var to = nh(!0)
  , rh = nh(!1)
  , bs = Vn(null)
  , ks = null
  , Mr = null
  , Iu = null;
function zu() {
    Iu = Mr = ks = null
}
function Fu(e) {
    var t = bs.current;
    ie(bs),
    e._currentValue = t
}
function Ll(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Fr(e, t) {
    ks = e,
    Iu = Mr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0),
    e.firstContext = null)
}
function lt(e) {
    var t = e._currentValue;
    if (Iu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Mr === null) {
            if (ks === null)
                throw Error(R(308));
            Mr = e,
            ks.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Mr = Mr.next = e;
    return t
}
var Zn = null;
function $u(e) {
    Zn === null ? Zn = [e] : Zn.push(e)
}
function oh(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    $u(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Zt(e, r)
}
function Zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var gn = !1;
function Bu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function ih(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Gt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function On(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    q & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Zt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    $u(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Zt(e, n)
}
function es(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Pu(e, n)
    }
}
function Ed(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Ps(e, t, n, r) {
    var o = e.updateQueue;
    gn = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        s === null ? i = u : s.next = u,
        s = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        a = d.lastBaseUpdate,
        a !== s && (a === null ? d.firstBaseUpdate = u : a.next = u,
        d.lastBaseUpdate = l))
    }
    if (i !== null) {
        var f = o.baseState;
        s = 0,
        d = u = l = null,
        a = i;
        do {
            var m = a.lane
              , p = a.eventTime;
            if ((r & m) === m) {
                d !== null && (d = d.next = {
                    eventTime: p,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var S = e
                      , y = a;
                    switch (m = t,
                    p = n,
                    y.tag) {
                    case 1:
                        if (S = y.payload,
                        typeof S == "function") {
                            f = S.call(p, f, m);
                            break e
                        }
                        f = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = y.payload,
                        m = typeof S == "function" ? S.call(p, f, m) : S,
                        m == null)
                            break e;
                        f = de({}, f, m);
                        break e;
                    case 2:
                        gn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                m = o.effects,
                m === null ? o.effects = [a] : m.push(a))
            } else
                p = {
                    eventTime: p,
                    lane: m,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                d === null ? (u = d = p,
                l = f) : d = d.next = p,
                s |= m;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                m = a,
                a = m.next,
                m.next = null,
                o.lastBaseUpdate = m,
                o.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = f),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        dr |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function Cd(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(R(191, o));
                o.call(r)
            }
        }
}
var xi = {}
  , _t = Vn(xi)
  , ei = Vn(xi)
  , ti = Vn(xi);
function Jn(e) {
    if (e === xi)
        throw Error(R(174));
    return e
}
function Uu(e, t) {
    switch (ne(ti, t),
    ne(ei, e),
    ne(_t, xi),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : hl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = hl(t, e)
    }
    ie(_t),
    ne(_t, t)
}
function no() {
    ie(_t),
    ie(ei),
    ie(ti)
}
function sh(e) {
    Jn(ti.current);
    var t = Jn(_t.current)
      , n = hl(t, e.type);
    t !== n && (ne(ei, e),
    ne(_t, n))
}
function Vu(e) {
    ei.current === e && (ie(_t),
    ie(ei))
}
var ue = Vn(0);
function Ns(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ua = [];
function Hu() {
    for (var e = 0; e < Ua.length; e++)
        Ua[e]._workInProgressVersionPrimary = null;
    Ua.length = 0
}
var ts = nn.ReactCurrentDispatcher
  , Va = nn.ReactCurrentBatchConfig
  , cr = 0
  , ce = null
  , ye = null
  , Se = null
  , Ts = !1
  , zo = !1
  , ni = 0
  , qv = 0;
function Te() {
    throw Error(R(321))
}
function Wu(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!bt(e[n], t[n]))
            return !1;
    return !0
}
function Ku(e, t, n, r, o, i) {
    if (cr = i,
    ce = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ts.current = e === null || e.memoizedState === null ? ty : ny,
    e = n(r, o),
    zo) {
        i = 0;
        do {
            if (zo = !1,
            ni = 0,
            25 <= i)
                throw Error(R(301));
            i += 1,
            Se = ye = null,
            t.updateQueue = null,
            ts.current = ry,
            e = n(r, o)
        } while (zo)
    }
    if (ts.current = js,
    t = ye !== null && ye.next !== null,
    cr = 0,
    Se = ye = ce = null,
    Ts = !1,
    t)
        throw Error(R(300));
    return e
}
function Qu() {
    var e = ni !== 0;
    return ni = 0,
    e
}
function jt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Se === null ? ce.memoizedState = Se = e : Se = Se.next = e,
    Se
}
function ut() {
    if (ye === null) {
        var e = ce.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ye.next;
    var t = Se === null ? ce.memoizedState : Se.next;
    if (t !== null)
        Se = t,
        ye = e;
    else {
        if (e === null)
            throw Error(R(310));
        ye = e,
        e = {
            memoizedState: ye.memoizedState,
            baseState: ye.baseState,
            baseQueue: ye.baseQueue,
            queue: ye.queue,
            next: null
        },
        Se === null ? ce.memoizedState = Se = e : Se = Se.next = e
    }
    return Se
}
function ri(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Ha(e) {
    var t = ut()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = ye
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , u = i;
        do {
            var d = u.lane;
            if ((cr & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f,
                s = r) : l = l.next = f,
                ce.lanes |= d,
                dr |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? s = r : l.next = a,
        bt(r, t.memoizedState) || (Ve = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ce.lanes |= i,
            dr |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Wa(e) {
    var t = ut()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        bt(i, t.memoizedState) || (Ve = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function ah() {}
function lh(e, t) {
    var n = ce
      , r = ut()
      , o = t()
      , i = !bt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Ve = !0),
    r = r.queue,
    Gu(dh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || Se !== null && Se.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        oi(9, ch.bind(null, n, r, o, t), void 0, null),
        Ee === null)
            throw Error(R(349));
        cr & 30 || uh(n, t, o)
    }
    return o
}
function uh(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ce.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ce.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function ch(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    fh(t) && ph(e)
}
function dh(e, t, n) {
    return n(function() {
        fh(t) && ph(e)
    })
}
function fh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !bt(e, n)
    } catch {
        return !0
    }
}
function ph(e) {
    var t = Zt(e, 1);
    t !== null && Ct(t, e, 1, -1)
}
function bd(e) {
    var t = jt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ri,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = ey.bind(null, ce, e),
    [t.memoizedState, e]
}
function oi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ce.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ce.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function hh() {
    return ut().memoizedState
}
function ns(e, t, n, r) {
    var o = jt();
    ce.flags |= e,
    o.memoizedState = oi(1 | t, n, void 0, r === void 0 ? null : r)
}
function Js(e, t, n, r) {
    var o = ut();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ye !== null) {
        var s = ye.memoizedState;
        if (i = s.destroy,
        r !== null && Wu(r, s.deps)) {
            o.memoizedState = oi(t, n, i, r);
            return
        }
    }
    ce.flags |= e,
    o.memoizedState = oi(1 | t, n, i, r)
}
function kd(e, t) {
    return ns(8390656, 8, e, t)
}
function Gu(e, t) {
    return Js(2048, 8, e, t)
}
function mh(e, t) {
    return Js(4, 2, e, t)
}
function gh(e, t) {
    return Js(4, 4, e, t)
}
function vh(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function yh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Js(4, 4, vh.bind(null, t, e), n)
}
function Yu() {}
function xh(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wu(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function wh(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wu(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Sh(e, t, n) {
    return cr & 21 ? (bt(n, t) || (n = Pp(),
    ce.lanes |= n,
    dr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ve = !0),
    e.memoizedState = n)
}
function Zv(e, t) {
    var n = ee;
    ee = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Va.transition;
    Va.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ee = n,
        Va.transition = r
    }
}
function Eh() {
    return ut().memoizedState
}
function Jv(e, t, n) {
    var r = An(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ch(e))
        bh(t, n);
    else if (n = oh(e, t, n, r),
    n !== null) {
        var o = Ie();
        Ct(n, e, r, o),
        kh(n, t, r)
    }
}
function ey(e, t, n) {
    var r = An(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ch(e))
        bh(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , a = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                bt(a, s)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    $u(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = oh(e, t, o, r),
        n !== null && (o = Ie(),
        Ct(n, e, r, o),
        kh(n, t, r))
    }
}
function Ch(e) {
    var t = e.alternate;
    return e === ce || t !== null && t === ce
}
function bh(e, t) {
    zo = Ts = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function kh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Pu(e, n)
    }
}
var js = {
    readContext: lt,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1
}
  , ty = {
    readContext: lt,
    useCallback: function(e, t) {
        return jt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: lt,
    useEffect: kd,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        ns(4194308, 4, vh.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return ns(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return ns(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = jt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = jt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Jv.bind(null, ce, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = jt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: bd,
    useDebugValue: Yu,
    useDeferredValue: function(e) {
        return jt().memoizedState = e
    },
    useTransition: function() {
        var e = bd(!1)
          , t = e[0];
        return e = Zv.bind(null, e[1]),
        jt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ce
          , o = jt();
        if (ae) {
            if (n === void 0)
                throw Error(R(407));
            n = n()
        } else {
            if (n = t(),
            Ee === null)
                throw Error(R(349));
            cr & 30 || uh(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        kd(dh.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        oi(9, ch.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = jt()
          , t = Ee.identifierPrefix;
        if (ae) {
            var n = Qt
              , r = Kt;
            n = (r & ~(1 << 32 - Et(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ni++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = qv++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , ny = {
    readContext: lt,
    useCallback: xh,
    useContext: lt,
    useEffect: Gu,
    useImperativeHandle: yh,
    useInsertionEffect: mh,
    useLayoutEffect: gh,
    useMemo: wh,
    useReducer: Ha,
    useRef: hh,
    useState: function() {
        return Ha(ri)
    },
    useDebugValue: Yu,
    useDeferredValue: function(e) {
        var t = ut();
        return Sh(t, ye.memoizedState, e)
    },
    useTransition: function() {
        var e = Ha(ri)[0]
          , t = ut().memoizedState;
        return [e, t]
    },
    useMutableSource: ah,
    useSyncExternalStore: lh,
    useId: Eh,
    unstable_isNewReconciler: !1
}
  , ry = {
    readContext: lt,
    useCallback: xh,
    useContext: lt,
    useEffect: Gu,
    useImperativeHandle: yh,
    useInsertionEffect: mh,
    useLayoutEffect: gh,
    useMemo: wh,
    useReducer: Wa,
    useRef: hh,
    useState: function() {
        return Wa(ri)
    },
    useDebugValue: Yu,
    useDeferredValue: function(e) {
        var t = ut();
        return ye === null ? t.memoizedState = e : Sh(t, ye.memoizedState, e)
    },
    useTransition: function() {
        var e = Wa(ri)[0]
          , t = ut().memoizedState;
        return [e, t]
    },
    useMutableSource: ah,
    useSyncExternalStore: lh,
    useId: Eh,
    unstable_isNewReconciler: !1
};
function mt(e, t) {
    if (e && e.defaultProps) {
        t = de({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Dl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : de({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ea = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? mr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ie()
          , o = An(e)
          , i = Gt(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = On(e, i, o),
        t !== null && (Ct(t, e, o, r),
        es(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ie()
          , o = An(e)
          , i = Gt(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = On(e, i, o),
        t !== null && (Ct(t, e, o, r),
        es(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ie()
          , r = An(e)
          , o = Gt(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = On(e, o, r),
        t !== null && (Ct(t, e, r, n),
        es(t, e, r))
    }
};
function Pd(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Xo(n, r) || !Xo(o, i) : !0
}
function Ph(e, t, n) {
    var r = !1
      , o = In
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = lt(i) : (o = We(t) ? lr : Ae.current,
    r = t.contextTypes,
    i = (r = r != null) ? Jr(e, o) : In),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ea,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Nd(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ea.enqueueReplaceState(t, t.state, null)
}
function _l(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Bu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = lt(i) : (i = We(t) ? lr : Ae.current,
    o.context = Jr(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Dl(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && ea.enqueueReplaceState(o, o.state, null),
    Ps(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function ro(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += O0(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Ka(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Il(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var oy = typeof WeakMap == "function" ? WeakMap : Map;
function Nh(e, t, n) {
    n = Gt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Os || (Os = !0,
        Ql = r),
        Il(e, t)
    }
    ,
    n
}
function Th(e, t, n) {
    n = Gt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            Il(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Il(e, t),
        typeof r != "function" && (Mn === null ? Mn = new Set([this]) : Mn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Td(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new oy;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = yy.bind(null, e, t, n),
    t.then(e, e))
}
function jd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Rd(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Gt(-1, 1),
    t.tag = 2,
    On(n, t, 1))),
    n.lanes |= 1),
    e)
}
var iy = nn.ReactCurrentOwner
  , Ve = !1;
function De(e, t, n, r) {
    t.child = e === null ? rh(t, null, n, r) : to(t, e.child, n, r)
}
function Od(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Fr(t, o),
    r = Ku(e, t, n, r, i, o),
    n = Qu(),
    e !== null && !Ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Jt(e, t, o)) : (ae && n && Lu(t),
    t.flags |= 1,
    De(e, t, r, o),
    t.child)
}
function Md(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !rc(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        jh(e, t, i, r, o)) : (e = ss(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Xo,
        n(s, r) && e.ref === t.ref)
            return Jt(e, t, o)
    }
    return t.flags |= 1,
    e = Ln(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function jh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Xo(i, r) && e.ref === t.ref)
            if (Ve = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Ve = !0);
            else
                return t.lanes = e.lanes,
                Jt(e, t, o)
    }
    return zl(e, t, n, r, o)
}
function Rh(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ne(Lr, Ge),
            Ge |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ne(Lr, Ge),
                Ge |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            ne(Lr, Ge),
            Ge |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        ne(Lr, Ge),
        Ge |= r;
    return De(e, t, o, n),
    t.child
}
function Oh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function zl(e, t, n, r, o) {
    var i = We(n) ? lr : Ae.current;
    return i = Jr(t, i),
    Fr(t, o),
    n = Ku(e, t, n, r, i, o),
    r = Qu(),
    e !== null && !Ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Jt(e, t, o)) : (ae && r && Lu(t),
    t.flags |= 1,
    De(e, t, n, o),
    t.child)
}
function Ad(e, t, n, r, o) {
    if (We(n)) {
        var i = !0;
        Ss(t)
    } else
        i = !1;
    if (Fr(t, o),
    t.stateNode === null)
        rs(e, t),
        Ph(t, n, r),
        _l(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var l = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = lt(u) : (u = We(n) ? lr : Ae.current,
        u = Jr(t, u));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Nd(t, s, r, u),
        gn = !1;
        var m = t.memoizedState;
        s.state = m,
        Ps(t, r, s, o),
        l = t.memoizedState,
        a !== r || m !== l || He.current || gn ? (typeof d == "function" && (Dl(t, n, d, r),
        l = t.memoizedState),
        (a = gn || Pd(t, n, a, r, m, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = u,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        ih(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : mt(t.type, a),
        s.props = u,
        f = t.pendingProps,
        m = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = lt(l) : (l = We(n) ? lr : Ae.current,
        l = Jr(t, l));
        var p = n.getDerivedStateFromProps;
        (d = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || m !== l) && Nd(t, s, r, l),
        gn = !1,
        m = t.memoizedState,
        s.state = m,
        Ps(t, r, s, o);
        var S = t.memoizedState;
        a !== f || m !== S || He.current || gn ? (typeof p == "function" && (Dl(t, n, p, r),
        S = t.memoizedState),
        (u = gn || Pd(t, n, u, r, m, S, l) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = S),
        s.props = r,
        s.state = S,
        s.context = l,
        r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Fl(e, t, n, r, i, o)
}
function Fl(e, t, n, r, o, i) {
    Oh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && yd(t, n, !1),
        Jt(e, t, i);
    r = t.stateNode,
    iy.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = to(t, e.child, null, i),
    t.child = to(t, null, a, i)) : De(e, t, a, i),
    t.memoizedState = r.state,
    o && yd(t, n, !0),
    t.child
}
function Mh(e) {
    var t = e.stateNode;
    t.pendingContext ? vd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vd(e, t.context, !1),
    Uu(e, t.containerInfo)
}
function Ld(e, t, n, r, o) {
    return eo(),
    _u(o),
    t.flags |= 256,
    De(e, t, n, r),
    t.child
}
var $l = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Bl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ah(e, t, n) {
    var r = t.pendingProps, o = ue.current, i = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ue, o & 1),
    e === null)
        return Al(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = ra(s, r, 0, null),
        e = ar(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Bl(n),
        t.memoizedState = $l,
        e) : Xu(t, s));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return sy(e, t, s, r, a, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Ln(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? i = Ln(a, i) : (i = ar(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? Bl(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = $l,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Ln(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Xu(e, t) {
    return t = ra({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function $i(e, t, n, r) {
    return r !== null && _u(r),
    to(t, e.child, null, n),
    e = Xu(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function sy(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Ka(Error(R(422))),
        $i(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = ra({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = ar(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && to(t, e.child, null, s),
        t.child.memoizedState = Bl(s),
        t.memoizedState = $l,
        i);
    if (!(t.mode & 1))
        return $i(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(R(419)),
        r = Ka(i, r, void 0),
        $i(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    Ve || a) {
        if (r = Ee,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Zt(e, o),
            Ct(r, e, o, -1))
        }
        return nc(),
        r = Ka(Error(R(421))),
        $i(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = xy.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    Xe = Rn(o.nextSibling),
    qe = t,
    ae = !0,
    wt = null,
    e !== null && (ot[it++] = Kt,
    ot[it++] = Qt,
    ot[it++] = ur,
    Kt = e.id,
    Qt = e.overflow,
    ur = t),
    t = Xu(t, r.children),
    t.flags |= 4096,
    t)
}
function Dd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ll(e.return, t, n)
}
function Qa(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function Lh(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (De(e, t, r.children, n),
    r = ue.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Dd(e, n, t);
                else if (e.tag === 19)
                    Dd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ne(ue, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Ns(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Qa(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ns(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Qa(t, !0, n, null, i);
            break;
        case "together":
            Qa(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function rs(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Jt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    dr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Ln(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Ln(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function ay(e, t, n) {
    switch (t.tag) {
    case 3:
        Mh(t),
        eo();
        break;
    case 5:
        sh(t);
        break;
    case 1:
        We(t.type) && Ss(t);
        break;
    case 4:
        Uu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ne(bs, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ne(ue, ue.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Ah(e, t, n) : (ne(ue, ue.current & 1),
            e = Jt(e, t, n),
            e !== null ? e.sibling : null);
        ne(ue, ue.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Lh(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ne(ue, ue.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Rh(e, t, n)
    }
    return Jt(e, t, n)
}
var Dh, Ul, _h, Ih;
Dh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ul = function() {}
;
_h = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Jn(_t.current);
        var i = null;
        switch (n) {
        case "input":
            o = cl(e, o),
            r = cl(e, r),
            i = [];
            break;
        case "select":
            o = de({}, o, {
                value: void 0
            }),
            r = de({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = pl(e, o),
            r = pl(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = xs)
        }
        ml(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Vo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Vo.hasOwnProperty(u) ? (l != null && u === "onScroll" && oe("scroll", e),
                    i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Ih = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function ko(e, t) {
    if (!ae)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function ly(e, t, n) {
    var r = t.pendingProps;
    switch (Du(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return je(t),
        null;
    case 1:
        return We(t.type) && ws(),
        je(t),
        null;
    case 3:
        return r = t.stateNode,
        no(),
        ie(He),
        ie(Ae),
        Hu(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (zi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        wt !== null && (Xl(wt),
        wt = null))),
        Ul(e, t),
        je(t),
        null;
    case 5:
        Vu(t);
        var o = Jn(ti.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            _h(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(R(166));
                return je(t),
                null
            }
            if (e = Jn(_t.current),
            zi(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[At] = t,
                r[Jo] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Mo.length; o++)
                        oe(Mo[o], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    Hc(r, i),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    Kc(r, i),
                    oe("invalid", r)
                }
                ml(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var a = i[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Ii(r.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Ii(r.textContent, a, e),
                        o = ["children", "" + a]) : Vo.hasOwnProperty(s) && a != null && s === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    ji(r),
                    Wc(r, i, !0);
                    break;
                case "textarea":
                    ji(r),
                    Qc(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = xs)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = dp(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[At] = t,
                e[Jo] = r,
                Dh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = gl(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Mo.length; o++)
                            oe(Mo[o], e);
                        o = r;
                        break;
                    case "source":
                        oe("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        o = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Hc(e, r),
                        o = cl(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = de({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        Kc(e, r),
                        o = pl(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    ml(n, o),
                    a = o;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? hp(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && fp(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ho(e, l) : typeof l == "number" && Ho(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Vo.hasOwnProperty(i) ? l != null && i === "onScroll" && oe("scroll", e) : l != null && wu(e, i, l, s))
                        }
                    switch (n) {
                    case "input":
                        ji(e),
                        Wc(e, r, !1);
                        break;
                    case "textarea":
                        ji(e),
                        Qc(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + _n(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Dr(e, !!r.multiple, i, !1) : r.defaultValue != null && Dr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = xs)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return je(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Ih(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(R(166));
            if (n = Jn(ti.current),
            Jn(_t.current),
            zi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[At] = t,
                (i = r.nodeValue !== n) && (e = qe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Ii(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ii(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[At] = t,
                t.stateNode = r
        }
        return je(t),
        null;
    case 13:
        if (ie(ue),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ae && Xe !== null && t.mode & 1 && !(t.flags & 128))
                th(),
                eo(),
                t.flags |= 98560,
                i = !1;
            else if (i = zi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(R(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(R(317));
                    i[At] = t
                } else
                    eo(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                je(t),
                i = !1
            } else
                wt !== null && (Xl(wt),
                wt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ue.current & 1 ? we === 0 && (we = 3) : nc())),
        t.updateQueue !== null && (t.flags |= 4),
        je(t),
        null);
    case 4:
        return no(),
        Ul(e, t),
        e === null && qo(t.stateNode.containerInfo),
        je(t),
        null;
    case 10:
        return Fu(t.type._context),
        je(t),
        null;
    case 17:
        return We(t.type) && ws(),
        je(t),
        null;
    case 19:
        if (ie(ue),
        i = t.memoizedState,
        i === null)
            return je(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                ko(i, !1);
            else {
                if (we !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = Ns(e),
                        s !== null) {
                            for (t.flags |= 128,
                            ko(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ne(ue, ue.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && he() > oo && (t.flags |= 128,
                r = !0,
                ko(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ns(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    ko(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !ae)
                        return je(t),
                        null
                } else
                    2 * he() - i.renderingStartTime > oo && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    ko(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = he(),
        t.sibling = null,
        n = ue.current,
        ne(ue, r ? n & 1 | 2 : n & 1),
        t) : (je(t),
        null);
    case 22:
    case 23:
        return tc(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ge & 1073741824 && (je(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(R(156, t.tag))
}
function uy(e, t) {
    switch (Du(t),
    t.tag) {
    case 1:
        return We(t.type) && ws(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return no(),
        ie(He),
        ie(Ae),
        Hu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Vu(t),
        null;
    case 13:
        if (ie(ue),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(R(340));
            eo()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ie(ue),
        null;
    case 4:
        return no(),
        null;
    case 10:
        return Fu(t.type._context),
        null;
    case 22:
    case 23:
        return tc(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Bi = !1
  , Oe = !1
  , cy = typeof WeakSet == "function" ? WeakSet : Set
  , _ = null;
function Ar(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                pe(e, t, r)
            }
        else
            n.current = null
}
function Vl(e, t, n) {
    try {
        n()
    } catch (r) {
        pe(e, t, r)
    }
}
var _d = !1;
function dy(e, t) {
    if (Pl = gs,
    e = Up(),
    Au(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , d = 0
                      , f = e
                      , m = null;
                    t: for (; ; ) {
                        for (var p; f !== n || o !== 0 && f.nodeType !== 3 || (a = s + o),
                        f !== i || r !== 0 && f.nodeType !== 3 || (l = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (p = f.firstChild) !== null; )
                            m = f,
                            f = p;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (m === n && ++u === o && (a = s),
                            m === i && ++d === r && (l = s),
                            (p = f.nextSibling) !== null)
                                break;
                            f = m,
                            m = f.parentNode
                        }
                        f = p
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Nl = {
        focusedElem: e,
        selectionRange: n
    },
    gs = !1,
    _ = t; _ !== null; )
        if (t = _,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            _ = e;
        else
            for (; _ !== null; ) {
                t = _;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var y = S.memoizedProps
                                  , w = S.memoizedState
                                  , g = t.stateNode
                                  , h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : mt(t.type, y), w);
                                g.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(R(163))
                        }
                } catch (E) {
                    pe(t, t.return, E)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    _ = e;
                    break
                }
                _ = t.return
            }
    return S = _d,
    _d = !1,
    S
}
function Fo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && Vl(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function ta(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Hl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function zh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    zh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[At],
    delete t[Jo],
    delete t[Rl],
    delete t[Qv],
    delete t[Gv])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Fh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Id(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Fh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Wl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = xs));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Wl(e, t, n),
        e = e.sibling; e !== null; )
            Wl(e, t, n),
            e = e.sibling
}
function Kl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Kl(e, t, n),
        e = e.sibling; e !== null; )
            Kl(e, t, n),
            e = e.sibling
}
var Ce = null
  , xt = !1;
function dn(e, t, n) {
    for (n = n.child; n !== null; )
        $h(e, t, n),
        n = n.sibling
}
function $h(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
        try {
            Dt.onCommitFiberUnmount(Qs, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Oe || Ar(n, t);
    case 6:
        var r = Ce
          , o = xt;
        Ce = null,
        dn(e, t, n),
        Ce = r,
        xt = o,
        Ce !== null && (xt ? (e = Ce,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
        break;
    case 18:
        Ce !== null && (xt ? (e = Ce,
        n = n.stateNode,
        e.nodeType === 8 ? $a(e.parentNode, n) : e.nodeType === 1 && $a(e, n),
        Go(e)) : $a(Ce, n.stateNode));
        break;
    case 4:
        r = Ce,
        o = xt,
        Ce = n.stateNode.containerInfo,
        xt = !0,
        dn(e, t, n),
        Ce = r,
        xt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Oe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && Vl(n, t, s),
                o = o.next
            } while (o !== r)
        }
        dn(e, t, n);
        break;
    case 1:
        if (!Oe && (Ar(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                pe(n, t, a)
            }
        dn(e, t, n);
        break;
    case 21:
        dn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Oe = (r = Oe) || n.memoizedState !== null,
        dn(e, t, n),
        Oe = r) : dn(e, t, n);
        break;
    default:
        dn(e, t, n)
    }
}
function zd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new cy),
        t.forEach(function(r) {
            var o = wy.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function pt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Ce = a.stateNode,
                        xt = !1;
                        break e;
                    case 3:
                        Ce = a.stateNode.containerInfo,
                        xt = !0;
                        break e;
                    case 4:
                        Ce = a.stateNode.containerInfo,
                        xt = !0;
                        break e
                    }
                    a = a.return
                }
                if (Ce === null)
                    throw Error(R(160));
                $h(i, s, o),
                Ce = null,
                xt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                pe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Bh(t, e),
            t = t.sibling
}
function Bh(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (pt(t, e),
        Tt(e),
        r & 4) {
            try {
                Fo(3, e, e.return),
                ta(3, e)
            } catch (y) {
                pe(e, e.return, y)
            }
            try {
                Fo(5, e, e.return)
            } catch (y) {
                pe(e, e.return, y)
            }
        }
        break;
    case 1:
        pt(t, e),
        Tt(e),
        r & 512 && n !== null && Ar(n, n.return);
        break;
    case 5:
        if (pt(t, e),
        Tt(e),
        r & 512 && n !== null && Ar(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Ho(o, "")
            } catch (y) {
                pe(e, e.return, y)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && up(o, i),
                    gl(a, s);
                    var u = gl(a, i);
                    for (s = 0; s < l.length; s += 2) {
                        var d = l[s]
                          , f = l[s + 1];
                        d === "style" ? hp(o, f) : d === "dangerouslySetInnerHTML" ? fp(o, f) : d === "children" ? Ho(o, f) : wu(o, d, f, u)
                    }
                    switch (a) {
                    case "input":
                        dl(o, i);
                        break;
                    case "textarea":
                        cp(o, i);
                        break;
                    case "select":
                        var m = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var p = i.value;
                        p != null ? Dr(o, !!i.multiple, p, !1) : m !== !!i.multiple && (i.defaultValue != null ? Dr(o, !!i.multiple, i.defaultValue, !0) : Dr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Jo] = i
                } catch (y) {
                    pe(e, e.return, y)
                }
        }
        break;
    case 6:
        if (pt(t, e),
        Tt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(R(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (y) {
                pe(e, e.return, y)
            }
        }
        break;
    case 3:
        if (pt(t, e),
        Tt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Go(t.containerInfo)
            } catch (y) {
                pe(e, e.return, y)
            }
        break;
    case 4:
        pt(t, e),
        Tt(e);
        break;
    case 13:
        pt(t, e),
        Tt(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ju = he())),
        r & 4 && zd(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Oe = (u = Oe) || d,
        pt(t, e),
        Oe = u) : pt(t, e),
        Tt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (_ = e,
                d = e.child; d !== null; ) {
                    for (f = _ = d; _ !== null; ) {
                        switch (m = _,
                        p = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Fo(4, m, m.return);
                            break;
                        case 1:
                            Ar(m, m.return);
                            var S = m.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (y) {
                                    pe(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            Ar(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                $d(f);
                                continue
                            }
                        }
                        p !== null ? (p.return = m,
                        _ = p) : $d(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            o = f.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode,
                            l = f.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = pp("display", s))
                        } catch (y) {
                            pe(e, e.return, y)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (y) {
                            pe(e, e.return, y)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        pt(t, e),
        Tt(e),
        r & 4 && zd(e);
        break;
    case 21:
        break;
    default:
        pt(t, e),
        Tt(e)
    }
}
function Tt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Fh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(R(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Ho(o, ""),
                r.flags &= -33);
                var i = Id(e);
                Kl(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = Id(e);
                Wl(e, a, s);
                break;
            default:
                throw Error(R(161))
            }
        } catch (l) {
            pe(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function fy(e, t, n) {
    _ = e,
    Uh(e)
}
function Uh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
        var o = _
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Bi;
            if (!s) {
                var a = o.alternate
                  , l = a !== null && a.memoizedState !== null || Oe;
                a = Bi;
                var u = Oe;
                if (Bi = s,
                (Oe = l) && !u)
                    for (_ = o; _ !== null; )
                        s = _,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Bd(o) : l !== null ? (l.return = s,
                        _ = l) : Bd(o);
                for (; i !== null; )
                    _ = i,
                    Uh(i),
                    i = i.sibling;
                _ = o,
                Bi = a,
                Oe = u
            }
            Fd(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            _ = i) : Fd(e)
    }
}
function Fd(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Oe || ta(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Oe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Cd(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Cd(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && Go(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(R(163))
                    }
                Oe || t.flags & 512 && Hl(t)
            } catch (m) {
                pe(t, t.return, m)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function $d(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function Bd(e) {
    for (; _ !== null; ) {
        var t = _;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ta(4, t)
                } catch (l) {
                    pe(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        pe(t, o, l)
                    }
                }
                var i = t.return;
                try {
                    Hl(t)
                } catch (l) {
                    pe(t, i, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Hl(t)
                } catch (l) {
                    pe(t, s, l)
                }
            }
        } catch (l) {
            pe(t, t.return, l)
        }
        if (t === e) {
            _ = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            _ = a;
            break
        }
        _ = t.return
    }
}
var py = Math.ceil
  , Rs = nn.ReactCurrentDispatcher
  , qu = nn.ReactCurrentOwner
  , at = nn.ReactCurrentBatchConfig
  , q = 0
  , Ee = null
  , ve = null
  , be = 0
  , Ge = 0
  , Lr = Vn(0)
  , we = 0
  , ii = null
  , dr = 0
  , na = 0
  , Zu = 0
  , $o = null
  , Ue = null
  , Ju = 0
  , oo = 1 / 0
  , Vt = null
  , Os = !1
  , Ql = null
  , Mn = null
  , Ui = !1
  , kn = null
  , Ms = 0
  , Bo = 0
  , Gl = null
  , os = -1
  , is = 0;
function Ie() {
    return q & 6 ? he() : os !== -1 ? os : os = he()
}
function An(e) {
    return e.mode & 1 ? q & 2 && be !== 0 ? be & -be : Xv.transition !== null ? (is === 0 && (is = Pp()),
    is) : (e = ee,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Ap(e.type)),
    e) : 1
}
function Ct(e, t, n, r) {
    if (50 < Bo)
        throw Bo = 0,
        Gl = null,
        Error(R(185));
    gi(e, n, r),
    (!(q & 2) || e !== Ee) && (e === Ee && (!(q & 2) && (na |= n),
    we === 4 && yn(e, be)),
    Ke(e, r),
    n === 1 && q === 0 && !(t.mode & 1) && (oo = he() + 500,
    Zs && Hn()))
}
function Ke(e, t) {
    var n = e.callbackNode;
    X0(e, t);
    var r = ms(e, e === Ee ? be : 0);
    if (r === 0)
        n !== null && Xc(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Xc(n),
        t === 1)
            e.tag === 0 ? Yv(Ud.bind(null, e)) : Zp(Ud.bind(null, e)),
            Wv(function() {
                !(q & 6) && Hn()
            }),
            n = null;
        else {
            switch (Np(r)) {
            case 1:
                n = ku;
                break;
            case 4:
                n = bp;
                break;
            case 16:
                n = hs;
                break;
            case 536870912:
                n = kp;
                break;
            default:
                n = hs
            }
            n = Xh(n, Vh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Vh(e, t) {
    if (os = -1,
    is = 0,
    q & 6)
        throw Error(R(327));
    var n = e.callbackNode;
    if ($r() && e.callbackNode !== n)
        return null;
    var r = ms(e, e === Ee ? be : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = As(e, r);
    else {
        t = r;
        var o = q;
        q |= 2;
        var i = Wh();
        (Ee !== e || be !== t) && (Vt = null,
        oo = he() + 500,
        sr(e, t));
        do
            try {
                gy();
                break
            } catch (a) {
                Hh(e, a)
            }
        while (!0);
        zu(),
        Rs.current = i,
        q = o,
        ve !== null ? t = 0 : (Ee = null,
        be = 0,
        t = we)
    }
    if (t !== 0) {
        if (t === 2 && (o = Sl(e),
        o !== 0 && (r = o,
        t = Yl(e, o))),
        t === 1)
            throw n = ii,
            sr(e, 0),
            yn(e, r),
            Ke(e, he()),
            n;
        if (t === 6)
            yn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !hy(o) && (t = As(e, r),
            t === 2 && (i = Sl(e),
            i !== 0 && (r = i,
            t = Yl(e, i))),
            t === 1))
                throw n = ii,
                sr(e, 0),
                yn(e, r),
                Ke(e, he()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(R(345));
            case 2:
                Xn(e, Ue, Vt);
                break;
            case 3:
                if (yn(e, r),
                (r & 130023424) === r && (t = Ju + 500 - he(),
                10 < t)) {
                    if (ms(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Ie(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = jl(Xn.bind(null, e, Ue, Vt), t);
                    break
                }
                Xn(e, Ue, Vt);
                break;
            case 4:
                if (yn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - Et(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = he() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * py(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = jl(Xn.bind(null, e, Ue, Vt), r);
                    break
                }
                Xn(e, Ue, Vt);
                break;
            case 5:
                Xn(e, Ue, Vt);
                break;
            default:
                throw Error(R(329))
            }
        }
    }
    return Ke(e, he()),
    e.callbackNode === n ? Vh.bind(null, e) : null
}
function Yl(e, t) {
    var n = $o;
    return e.current.memoizedState.isDehydrated && (sr(e, t).flags |= 256),
    e = As(e, t),
    e !== 2 && (t = Ue,
    Ue = n,
    t !== null && Xl(t)),
    e
}
function Xl(e) {
    Ue === null ? Ue = e : Ue.push.apply(Ue, e)
}
function hy(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!bt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function yn(e, t) {
    for (t &= ~Zu,
    t &= ~na,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Et(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Ud(e) {
    if (q & 6)
        throw Error(R(327));
    $r();
    var t = ms(e, 0);
    if (!(t & 1))
        return Ke(e, he()),
        null;
    var n = As(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Sl(e);
        r !== 0 && (t = r,
        n = Yl(e, r))
    }
    if (n === 1)
        throw n = ii,
        sr(e, 0),
        yn(e, t),
        Ke(e, he()),
        n;
    if (n === 6)
        throw Error(R(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Xn(e, Ue, Vt),
    Ke(e, he()),
    null
}
function ec(e, t) {
    var n = q;
    q |= 1;
    try {
        return e(t)
    } finally {
        q = n,
        q === 0 && (oo = he() + 500,
        Zs && Hn())
    }
}
function fr(e) {
    kn !== null && kn.tag === 0 && !(q & 6) && $r();
    var t = q;
    q |= 1;
    var n = at.transition
      , r = ee;
    try {
        if (at.transition = null,
        ee = 1,
        e)
            return e()
    } finally {
        ee = r,
        at.transition = n,
        q = t,
        !(q & 6) && Hn()
    }
}
function tc() {
    Ge = Lr.current,
    ie(Lr)
}
function sr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Hv(n)),
    ve !== null)
        for (n = ve.return; n !== null; ) {
            var r = n;
            switch (Du(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ws();
                break;
            case 3:
                no(),
                ie(He),
                ie(Ae),
                Hu();
                break;
            case 5:
                Vu(r);
                break;
            case 4:
                no();
                break;
            case 13:
                ie(ue);
                break;
            case 19:
                ie(ue);
                break;
            case 10:
                Fu(r.type._context);
                break;
            case 22:
            case 23:
                tc()
            }
            n = n.return
        }
    if (Ee = e,
    ve = e = Ln(e.current, null),
    be = Ge = t,
    we = 0,
    ii = null,
    Zu = na = dr = 0,
    Ue = $o = null,
    Zn !== null) {
        for (t = 0; t < Zn.length; t++)
            if (n = Zn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        Zn = null
    }
    return e
}
function Hh(e, t) {
    do {
        var n = ve;
        try {
            if (zu(),
            ts.current = js,
            Ts) {
                for (var r = ce.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                Ts = !1
            }
            if (cr = 0,
            Se = ye = ce = null,
            zo = !1,
            ni = 0,
            qu.current = null,
            n === null || n.return === null) {
                we = 1,
                ii = t,
                ve = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , a = n
                  , l = t;
                if (t = be,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , d = a
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var m = d.alternate;
                        m ? (d.updateQueue = m.updateQueue,
                        d.memoizedState = m.memoizedState,
                        d.lanes = m.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var p = jd(s);
                    if (p !== null) {
                        p.flags &= -257,
                        Rd(p, s, a, i, t),
                        p.mode & 1 && Td(i, u, t),
                        t = p,
                        l = u;
                        var S = t.updateQueue;
                        if (S === null) {
                            var y = new Set;
                            y.add(l),
                            t.updateQueue = y
                        } else
                            S.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Td(i, u, t),
                            nc();
                            break e
                        }
                        l = Error(R(426))
                    }
                } else if (ae && a.mode & 1) {
                    var w = jd(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Rd(w, s, a, i, t),
                        _u(ro(l, a));
                        break e
                    }
                }
                i = l = ro(l, a),
                we !== 4 && (we = 2),
                $o === null ? $o = [i] : $o.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var g = Nh(i, l, t);
                        Ed(i, g);
                        break e;
                    case 1:
                        a = l;
                        var h = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Mn === null || !Mn.has(v)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var E = Th(i, a, t);
                            Ed(i, E);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Qh(n)
        } catch (C) {
            t = C,
            ve === n && n !== null && (ve = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Wh() {
    var e = Rs.current;
    return Rs.current = js,
    e === null ? js : e
}
function nc() {
    (we === 0 || we === 3 || we === 2) && (we = 4),
    Ee === null || !(dr & 268435455) && !(na & 268435455) || yn(Ee, be)
}
function As(e, t) {
    var n = q;
    q |= 2;
    var r = Wh();
    (Ee !== e || be !== t) && (Vt = null,
    sr(e, t));
    do
        try {
            my();
            break
        } catch (o) {
            Hh(e, o)
        }
    while (!0);
    if (zu(),
    q = n,
    Rs.current = r,
    ve !== null)
        throw Error(R(261));
    return Ee = null,
    be = 0,
    we
}
function my() {
    for (; ve !== null; )
        Kh(ve)
}
function gy() {
    for (; ve !== null && !B0(); )
        Kh(ve)
}
function Kh(e) {
    var t = Yh(e.alternate, e, Ge);
    e.memoizedProps = e.pendingProps,
    t === null ? Qh(e) : ve = t,
    qu.current = null
}
function Qh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = uy(n, t),
            n !== null) {
                n.flags &= 32767,
                ve = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                we = 6,
                ve = null;
                return
            }
        } else if (n = ly(n, t, Ge),
        n !== null) {
            ve = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ve = t;
            return
        }
        ve = t = e
    } while (t !== null);
    we === 0 && (we = 5)
}
function Xn(e, t, n) {
    var r = ee
      , o = at.transition;
    try {
        at.transition = null,
        ee = 1,
        vy(e, t, n, r)
    } finally {
        at.transition = o,
        ee = r
    }
    return null
}
function vy(e, t, n, r) {
    do
        $r();
    while (kn !== null);
    if (q & 6)
        throw Error(R(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(R(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (q0(e, i),
    e === Ee && (ve = Ee = null,
    be = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ui || (Ui = !0,
    Xh(hs, function() {
        return $r(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = at.transition,
        at.transition = null;
        var s = ee;
        ee = 1;
        var a = q;
        q |= 4,
        qu.current = null,
        dy(e, n),
        Bh(n, e),
        Iv(Nl),
        gs = !!Pl,
        Nl = Pl = null,
        e.current = n,
        fy(n),
        U0(),
        q = a,
        ee = s,
        at.transition = i
    } else
        e.current = n;
    if (Ui && (Ui = !1,
    kn = e,
    Ms = o),
    i = e.pendingLanes,
    i === 0 && (Mn = null),
    W0(n.stateNode),
    Ke(e, he()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Os)
        throw Os = !1,
        e = Ql,
        Ql = null,
        e;
    return Ms & 1 && e.tag !== 0 && $r(),
    i = e.pendingLanes,
    i & 1 ? e === Gl ? Bo++ : (Bo = 0,
    Gl = e) : Bo = 0,
    Hn(),
    null
}
function $r() {
    if (kn !== null) {
        var e = Np(Ms)
          , t = at.transition
          , n = ee;
        try {
            if (at.transition = null,
            ee = 16 > e ? 16 : e,
            kn === null)
                var r = !1;
            else {
                if (e = kn,
                kn = null,
                Ms = 0,
                q & 6)
                    throw Error(R(331));
                var o = q;
                for (q |= 4,
                _ = e.current; _ !== null; ) {
                    var i = _
                      , s = i.child;
                    if (_.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (_ = u; _ !== null; ) {
                                    var d = _;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Fo(8, d, i)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        _ = f;
                                    else
                                        for (; _ !== null; ) {
                                            d = _;
                                            var m = d.sibling
                                              , p = d.return;
                                            if (zh(d),
                                            d === u) {
                                                _ = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = p,
                                                _ = m;
                                                break
                                            }
                                            _ = p
                                        }
                                }
                            }
                            var S = i.alternate;
                            if (S !== null) {
                                var y = S.child;
                                if (y !== null) {
                                    S.child = null;
                                    do {
                                        var w = y.sibling;
                                        y.sibling = null,
                                        y = w
                                    } while (y !== null)
                                }
                            }
                            _ = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        _ = s;
                    else
                        e: for (; _ !== null; ) {
                            if (i = _,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Fo(9, i, i.return)
                                }
                            var g = i.sibling;
                            if (g !== null) {
                                g.return = i.return,
                                _ = g;
                                break e
                            }
                            _ = i.return
                        }
                }
                var h = e.current;
                for (_ = h; _ !== null; ) {
                    s = _;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        v.return = s,
                        _ = v;
                    else
                        e: for (s = h; _ !== null; ) {
                            if (a = _,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ta(9, a)
                                    }
                                } catch (C) {
                                    pe(a, a.return, C)
                                }
                            if (a === s) {
                                _ = null;
                                break e
                            }
                            var E = a.sibling;
                            if (E !== null) {
                                E.return = a.return,
                                _ = E;
                                break e
                            }
                            _ = a.return
                        }
                }
                if (q = o,
                Hn(),
                Dt && typeof Dt.onPostCommitFiberRoot == "function")
                    try {
                        Dt.onPostCommitFiberRoot(Qs, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ee = n,
            at.transition = t
        }
    }
    return !1
}
function Vd(e, t, n) {
    t = ro(n, t),
    t = Nh(e, t, 1),
    e = On(e, t, 1),
    t = Ie(),
    e !== null && (gi(e, 1, t),
    Ke(e, t))
}
function pe(e, t, n) {
    if (e.tag === 3)
        Vd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Vd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Mn === null || !Mn.has(r))) {
                    e = ro(n, e),
                    e = Th(t, e, 1),
                    t = On(t, e, 1),
                    e = Ie(),
                    t !== null && (gi(t, 1, e),
                    Ke(t, e));
                    break
                }
            }
            t = t.return
        }
}
function yy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ie(),
    e.pingedLanes |= e.suspendedLanes & n,
    Ee === e && (be & n) === n && (we === 4 || we === 3 && (be & 130023424) === be && 500 > he() - Ju ? sr(e, 0) : Zu |= n),
    Ke(e, t)
}
function Gh(e, t) {
    t === 0 && (e.mode & 1 ? (t = Mi,
    Mi <<= 1,
    !(Mi & 130023424) && (Mi = 4194304)) : t = 1);
    var n = Ie();
    e = Zt(e, t),
    e !== null && (gi(e, t, n),
    Ke(e, n))
}
function xy(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Gh(e, n)
}
function wy(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(R(314))
    }
    r !== null && r.delete(t),
    Gh(e, n)
}
var Yh;
Yh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || He.current)
            Ve = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ve = !1,
                ay(e, t, n);
            Ve = !!(e.flags & 131072)
        }
    else
        Ve = !1,
        ae && t.flags & 1048576 && Jp(t, Cs, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        rs(e, t),
        e = t.pendingProps;
        var o = Jr(t, Ae.current);
        Fr(t, n),
        o = Ku(null, t, r, e, o, n);
        var i = Qu();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        We(r) ? (i = !0,
        Ss(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Bu(t),
        o.updater = ea,
        t.stateNode = o,
        o._reactInternals = t,
        _l(t, r, e, n),
        t = Fl(null, t, r, !0, i, n)) : (t.tag = 0,
        ae && i && Lu(t),
        De(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (rs(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = Ey(r),
            e = mt(r, e),
            o) {
            case 0:
                t = zl(null, t, r, e, n);
                break e;
            case 1:
                t = Ad(null, t, r, e, n);
                break e;
            case 11:
                t = Od(null, t, r, e, n);
                break e;
            case 14:
                t = Md(null, t, r, mt(r.type, e), n);
                break e
            }
            throw Error(R(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : mt(r, o),
        zl(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : mt(r, o),
        Ad(e, t, r, o, n);
    case 3:
        e: {
            if (Mh(t),
            e === null)
                throw Error(R(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            ih(e, t),
            Ps(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = ro(Error(R(423)), t),
                    t = Ld(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = ro(Error(R(424)), t),
                    t = Ld(e, t, r, n, o);
                    break e
                } else
                    for (Xe = Rn(t.stateNode.containerInfo.firstChild),
                    qe = t,
                    ae = !0,
                    wt = null,
                    n = rh(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (eo(),
                r === o) {
                    t = Jt(e, t, n);
                    break e
                }
                De(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return sh(t),
        e === null && Al(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        Tl(r, o) ? s = null : i !== null && Tl(r, i) && (t.flags |= 32),
        Oh(e, t),
        De(e, t, s, n),
        t.child;
    case 6:
        return e === null && Al(t),
        null;
    case 13:
        return Ah(e, t, n);
    case 4:
        return Uu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = to(t, null, r, n) : De(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : mt(r, o),
        Od(e, t, r, o, n);
    case 7:
        return De(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return De(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return De(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            ne(bs, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (bt(i.value, s)) {
                    if (i.children === o.children && !He.current) {
                        t = Jt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            s = i.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = Gt(-1, n & -n),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= n,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= n),
                                    Ll(i.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(R(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            Ll(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            De(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Fr(t, n),
        o = lt(o),
        r = r(o),
        t.flags |= 1,
        De(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = mt(r, t.pendingProps),
        o = mt(r.type, o),
        Md(e, t, r, o, n);
    case 15:
        return jh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : mt(r, o),
        rs(e, t),
        t.tag = 1,
        We(r) ? (e = !0,
        Ss(t)) : e = !1,
        Fr(t, n),
        Ph(t, r, o),
        _l(t, r, o, n),
        Fl(null, t, r, !0, e, n);
    case 19:
        return Lh(e, t, n);
    case 22:
        return Rh(e, t, n)
    }
    throw Error(R(156, t.tag))
}
;
function Xh(e, t) {
    return Cp(e, t)
}
function Sy(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function st(e, t, n, r) {
    return new Sy(e,t,n,r)
}
function rc(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Ey(e) {
    if (typeof e == "function")
        return rc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Eu)
            return 11;
        if (e === Cu)
            return 14
    }
    return 2
}
function Ln(e, t) {
    var n = e.alternate;
    return n === null ? (n = st(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ss(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        rc(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case br:
            return ar(n.children, o, i, t);
        case Su:
            s = 8,
            o |= 8;
            break;
        case sl:
            return e = st(12, n, t, o | 2),
            e.elementType = sl,
            e.lanes = i,
            e;
        case al:
            return e = st(13, n, t, o),
            e.elementType = al,
            e.lanes = i,
            e;
        case ll:
            return e = st(19, n, t, o),
            e.elementType = ll,
            e.lanes = i,
            e;
        case sp:
            return ra(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case op:
                    s = 10;
                    break e;
                case ip:
                    s = 9;
                    break e;
                case Eu:
                    s = 11;
                    break e;
                case Cu:
                    s = 14;
                    break e;
                case mn:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(R(130, e == null ? e : typeof e, ""))
        }
    return t = st(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function ar(e, t, n, r) {
    return e = st(7, e, r, t),
    e.lanes = n,
    e
}
function ra(e, t, n, r) {
    return e = st(22, e, r, t),
    e.elementType = sp,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ga(e, t, n) {
    return e = st(6, e, null, t),
    e.lanes = n,
    e
}
function Ya(e, t, n) {
    return t = st(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Cy(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ja(0),
    this.expirationTimes = ja(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ja(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function oc(e, t, n, r, o, i, s, a, l) {
    return e = new Cy(e,t,n,a,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = st(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Bu(i),
    e
}
function by(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Cr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function qh(e) {
    if (!e)
        return In;
    e = e._reactInternals;
    e: {
        if (mr(e) !== e || e.tag !== 1)
            throw Error(R(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (We(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(R(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (We(n))
            return qp(e, n, t)
    }
    return t
}
function Zh(e, t, n, r, o, i, s, a, l) {
    return e = oc(n, r, !0, e, o, i, s, a, l),
    e.context = qh(null),
    n = e.current,
    r = Ie(),
    o = An(n),
    i = Gt(r, o),
    i.callback = t ?? null,
    On(n, i, o),
    e.current.lanes = o,
    gi(e, o, r),
    Ke(e, r),
    e
}
function oa(e, t, n, r) {
    var o = t.current
      , i = Ie()
      , s = An(o);
    return n = qh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Gt(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = On(o, t, s),
    e !== null && (Ct(e, o, s, i),
    es(e, o, s)),
    s
}
function Ls(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Hd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function ic(e, t) {
    Hd(e, t),
    (e = e.alternate) && Hd(e, t)
}
function ky() {
    return null
}
var Jh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function sc(e) {
    this._internalRoot = e
}
ia.prototype.render = sc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(R(409));
    oa(e, t, null, null)
}
;
ia.prototype.unmount = sc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        fr(function() {
            oa(null, e, null, null)
        }),
        t[qt] = null
    }
}
;
function ia(e) {
    this._internalRoot = e
}
ia.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Rp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < vn.length && t !== 0 && t < vn[n].priority; n++)
            ;
        vn.splice(n, 0, e),
        n === 0 && Mp(e)
    }
}
;
function ac(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function sa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Wd() {}
function Py(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Ls(s);
                i.call(u)
            }
        }
        var s = Zh(t, r, e, 0, null, !1, !1, "", Wd);
        return e._reactRootContainer = s,
        e[qt] = s.current,
        qo(e.nodeType === 8 ? e.parentNode : e),
        fr(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Ls(l);
            a.call(u)
        }
    }
    var l = oc(e, 0, !1, null, null, !1, !1, "", Wd);
    return e._reactRootContainer = l,
    e[qt] = l.current,
    qo(e.nodeType === 8 ? e.parentNode : e),
    fr(function() {
        oa(t, l, n, r)
    }),
    l
}
function aa(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = Ls(s);
                a.call(l)
            }
        }
        oa(t, s, e, o)
    } else
        s = Py(n, t, e, o, r);
    return Ls(s)
}
Tp = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Oo(t.pendingLanes);
            n !== 0 && (Pu(t, n | 1),
            Ke(t, he()),
            !(q & 6) && (oo = he() + 500,
            Hn()))
        }
        break;
    case 13:
        fr(function() {
            var r = Zt(e, 1);
            if (r !== null) {
                var o = Ie();
                Ct(r, e, 1, o)
            }
        }),
        ic(e, 1)
    }
}
;
Nu = function(e) {
    if (e.tag === 13) {
        var t = Zt(e, 134217728);
        if (t !== null) {
            var n = Ie();
            Ct(t, e, 134217728, n)
        }
        ic(e, 134217728)
    }
}
;
jp = function(e) {
    if (e.tag === 13) {
        var t = An(e)
          , n = Zt(e, t);
        if (n !== null) {
            var r = Ie();
            Ct(n, e, t, r)
        }
        ic(e, t)
    }
}
;
Rp = function() {
    return ee
}
;
Op = function(e, t) {
    var n = ee;
    try {
        return ee = e,
        t()
    } finally {
        ee = n
    }
}
;
yl = function(e, t, n) {
    switch (t) {
    case "input":
        if (dl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = qs(r);
                    if (!o)
                        throw Error(R(90));
                    lp(r),
                    dl(r, o)
                }
            }
        }
        break;
    case "textarea":
        cp(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Dr(e, !!n.multiple, t, !1)
    }
}
;
vp = ec;
yp = fr;
var Ny = {
    usingClientEntryPoint: !1,
    Events: [yi, Tr, qs, mp, gp, ec]
}
  , Po = {
    findFiberByHostInstance: qn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Ty = {
    bundleType: Po.bundleType,
    version: Po.version,
    rendererPackageName: Po.rendererPackageName,
    rendererConfig: Po.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Sp(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Po.findFiberByHostInstance || ky,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vi.isDisabled && Vi.supportsFiber)
        try {
            Qs = Vi.inject(Ty),
            Dt = Vi
        } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ny;
et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ac(t))
        throw Error(R(200));
    return by(e, t, null, n)
}
;
et.createRoot = function(e, t) {
    if (!ac(e))
        throw Error(R(299));
    var n = !1
      , r = ""
      , o = Jh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = oc(e, 1, !1, null, null, n, !1, r, o),
    e[qt] = t.current,
    qo(e.nodeType === 8 ? e.parentNode : e),
    new sc(t)
}
;
et.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","),
        Error(R(268, e)));
    return e = Sp(t),
    e = e === null ? null : e.stateNode,
    e
}
;
et.flushSync = function(e) {
    return fr(e)
}
;
et.hydrate = function(e, t, n) {
    if (!sa(t))
        throw Error(R(200));
    return aa(null, e, t, !0, n)
}
;
et.hydrateRoot = function(e, t, n) {
    if (!ac(e))
        throw Error(R(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = Jh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Zh(t, null, e, 1, n ?? null, o, !1, i, s),
    e[qt] = t.current,
    qo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new ia(t)
}
;
et.render = function(e, t, n) {
    if (!sa(t))
        throw Error(R(200));
    return aa(null, e, t, !1, n)
}
;
et.unmountComponentAtNode = function(e) {
    if (!sa(e))
        throw Error(R(40));
    return e._reactRootContainer ? (fr(function() {
        aa(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[qt] = null
        })
    }),
    !0) : !1
}
;
et.unstable_batchedUpdates = ec;
et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!sa(n))
        throw Error(R(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(R(38));
    return aa(e, t, n, !1, r)
}
;
et.version = "18.3.1-next-f1338f8080-20240426";
function em() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(em)
        } catch (e) {
            console.error(e)
        }
}
em(),
ep.exports = et;
var wi = ep.exports;
const tm = Bf(wi);
var nm, Kd = wi;
nm = Kd.createRoot,
Kd.hydrateRoot;
const jy = 1
  , Ry = 1e6;
let Xa = 0;
function Oy() {
    return Xa = (Xa + 1) % Number.MAX_SAFE_INTEGER,
    Xa.toString()
}
const qa = new Map
  , Qd = e => {
    if (qa.has(e))
        return;
    const t = setTimeout( () => {
        qa.delete(e),
        Uo({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , Ry);
    qa.set(e, t)
}
  , My = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, jy)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Qd(n) : e.toasts.forEach(r => {
                Qd(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , as = [];
let ls = {
    toasts: []
};
function Uo(e) {
    ls = My(ls, e),
    as.forEach(t => {
        t(ls)
    }
    )
}
function Ay({...e}) {
    const t = Oy()
      , n = o => Uo({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Uo({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Uo({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function Ly() {
    const [e,t] = x.useState(ls);
    return x.useEffect( () => (as.push(t),
    () => {
        const n = as.indexOf(t);
        n > -1 && as.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: Ay,
        dismiss: n => Uo({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function xe(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Gd(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function rm(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = Gd(o, t);
            return !n && typeof i == "function" && (n = !0),
            i
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : Gd(e[o], null)
                }
            }
    }
}
function kt(...e) {
    return x.useCallback(rm(...e), e)
}
function la(e, t=[]) {
    let n = [];
    function r(i, s) {
        const a = x.createContext(s)
          , l = n.length;
        n = [...n, s];
        const u = f => {
            var g;
            const {scope: m, children: p, ...S} = f
              , y = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[l]) || a
              , w = x.useMemo( () => S, Object.values(S));
            return c.jsx(y.Provider, {
                value: w,
                children: p
            })
        }
        ;
        u.displayName = i + "Provider";
        function d(f, m) {
            var y;
            const p = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[l]) || a
              , S = x.useContext(p);
            if (S)
                return S;
            if (s !== void 0)
                return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return [u, d]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, Dy(o, ...t)]
}
function Dy(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const f = l(i)[`__scope${u}`];
                return {
                    ...a,
                    ...f
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function Ds(e) {
    const t = Iy(e)
      , n = x.forwardRef( (r, o) => {
        const {children: i, ...s} = r
          , a = x.Children.toArray(i)
          , l = a.find(Fy);
        if (l) {
            const u = l.props.children
              , d = a.map(f => f === l ? x.Children.count(u) > 1 ? x.Children.only(null) : x.isValidElement(u) ? u.props.children : null : f);
            return c.jsx(t, {
                ...s,
                ref: o,
                children: x.isValidElement(u) ? x.cloneElement(u, void 0, d) : null
            })
        }
        return c.jsx(t, {
            ...s,
            ref: o,
            children: i
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var _y = Ds("Slot");
function Iy(e) {
    const t = x.forwardRef( (n, r) => {
        const {children: o, ...i} = n;
        if (x.isValidElement(o)) {
            const s = By(o)
              , a = $y(i, o.props);
            return o.type !== x.Fragment && (a.ref = r ? rm(r, s) : s),
            x.cloneElement(o, a)
        }
        return x.Children.count(o) > 1 ? x.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var om = Symbol("radix.slottable");
function zy(e) {
    const t = ({children: n}) => c.jsx(c.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = om,
    t
}
function Fy(e) {
    return x.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === om
}
function $y(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
            const l = i(...a);
            return o(...a),
            l
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function By(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Uy(e) {
    const t = e + "CollectionProvider"
      , [n,r] = la(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = y => {
        const {scope: w, children: g} = y
          , h = O.useRef(null)
          , v = O.useRef(new Map).current;
        return c.jsx(o, {
            scope: w,
            itemMap: v,
            collectionRef: h,
            children: g
        })
    }
    ;
    s.displayName = t;
    const a = e + "CollectionSlot"
      , l = Ds(a)
      , u = O.forwardRef( (y, w) => {
        const {scope: g, children: h} = y
          , v = i(a, g)
          , E = kt(w, v.collectionRef);
        return c.jsx(l, {
            ref: E,
            children: h
        })
    }
    );
    u.displayName = a;
    const d = e + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , m = Ds(d)
      , p = O.forwardRef( (y, w) => {
        const {scope: g, children: h, ...v} = y
          , E = O.useRef(null)
          , C = kt(w, E)
          , b = i(d, g);
        return O.useEffect( () => (b.itemMap.set(E, {
            ref: E,
            ...v
        }),
        () => void b.itemMap.delete(E))),
        c.jsx(m, {
            [f]: "",
            ref: C,
            children: h
        })
    }
    );
    p.displayName = d;
    function S(y) {
        const w = i(e + "CollectionConsumer", y);
        return O.useCallback( () => {
            const h = w.collectionRef.current;
            if (!h)
                return [];
            const v = Array.from(h.querySelectorAll(`[${f}]`));
            return Array.from(w.itemMap.values()).sort( (b, k) => v.indexOf(b.ref.current) - v.indexOf(k.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: p
    }, S, r]
}
var Vy = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , Qe = Vy.reduce( (e, t) => {
    const n = Ds(`Primitive.${t}`)
      , r = x.forwardRef( (o, i) => {
        const {asChild: s, ...a} = o
          , l = s ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        c.jsx(l, {
            ...a,
            ref: i
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function im(e, t) {
    e && wi.flushSync( () => e.dispatchEvent(t))
}
function zn(e) {
    const t = x.useRef(e);
    return x.useEffect( () => {
        t.current = e
    }
    ),
    x.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function Hy(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = zn(e);
    x.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var Wy = "DismissableLayer", ql = "dismissableLayer.update", Ky = "dismissableLayer.pointerDownOutside", Qy = "dismissableLayer.focusOutside", Yd, sm = x.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), lc = x.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: a, ...l} = e
      , u = x.useContext(sm)
      , [d,f] = x.useState(null)
      , m = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,p] = x.useState({})
      , S = kt(t, k => f(k))
      , y = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , g = y.indexOf(w)
      , h = d ? y.indexOf(d) : -1
      , v = u.layersWithOutsidePointerEventsDisabled.size > 0
      , E = h >= g
      , C = Yy(k => {
        const j = k.target
          , A = [...u.branches].some(M => M.contains(j));
        !E || A || (o == null || o(k),
        s == null || s(k),
        k.defaultPrevented || a == null || a())
    }
    , m)
      , b = Xy(k => {
        const j = k.target;
        [...u.branches].some(M => M.contains(j)) || (i == null || i(k),
        s == null || s(k),
        k.defaultPrevented || a == null || a())
    }
    , m);
    return Hy(k => {
        h === u.layers.size - 1 && (r == null || r(k),
        !k.defaultPrevented && a && (k.preventDefault(),
        a()))
    }
    , m),
    x.useEffect( () => {
        if (d)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Yd = m.body.style.pointerEvents,
            m.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Xd(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Yd)
            }
    }
    , [d, m, n, u]),
    x.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        Xd())
    }
    , [d, u]),
    x.useEffect( () => {
        const k = () => p({});
        return document.addEventListener(ql, k),
        () => document.removeEventListener(ql, k)
    }
    , []),
    c.jsx(Qe.div, {
        ...l,
        ref: S,
        style: {
            pointerEvents: v ? E ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: xe(e.onFocusCapture, b.onFocusCapture),
        onBlurCapture: xe(e.onBlurCapture, b.onBlurCapture),
        onPointerDownCapture: xe(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
lc.displayName = Wy;
var Gy = "DismissableLayerBranch"
  , am = x.forwardRef( (e, t) => {
    const n = x.useContext(sm)
      , r = x.useRef(null)
      , o = kt(t, r);
    return x.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    c.jsx(Qe.div, {
        ...e,
        ref: o
    })
}
);
am.displayName = Gy;
function Yy(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = zn(e)
      , r = x.useRef(!1)
      , o = x.useRef( () => {}
    );
    return x.useEffect( () => {
        const i = a => {
            if (a.target && !r.current) {
                let l = function() {
                    lm(Ky, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function Xy(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = zn(e)
      , r = x.useRef(!1);
    return x.useEffect( () => {
        const o = i => {
            i.target && !r.current && lm(Qy, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Xd() {
    const e = new CustomEvent(ql);
    document.dispatchEvent(e)
}
function lm(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? im(o, i) : o.dispatchEvent(i)
}
var qy = lc
  , Zy = am
  , Fn = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {}
  , Jy = "Portal"
  , um = x.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [o,i] = x.useState(!1);
    Fn( () => i(!0), []);
    const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return s ? tm.createPortal(c.jsx(Qe.div, {
        ...r,
        ref: t
    }), s) : null
}
);
um.displayName = Jy;
function ex(e, t) {
    return x.useReducer( (n, r) => t[n][r] ?? n, e)
}
var uc = e => {
    const {present: t, children: n} = e
      , r = tx(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : x.Children.only(n)
      , i = kt(r.ref, nx(o));
    return typeof n == "function" || r.isPresent ? x.cloneElement(o, {
        ref: i
    }) : null
}
;
uc.displayName = "Presence";
function tx(e) {
    const [t,n] = x.useState()
      , r = x.useRef(null)
      , o = x.useRef(e)
      , i = x.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [a,l] = ex(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return x.useEffect( () => {
        const u = Hi(r.current);
        i.current = a === "mounted" ? u : "none"
    }
    , [a]),
    Fn( () => {
        const u = r.current
          , d = o.current;
        if (d !== e) {
            const m = i.current
              , p = Hi(u);
            e ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && m !== p ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    Fn( () => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window
              , f = p => {
                const y = Hi(r.current).includes(p.animationName);
                if (p.target === t && y && (l("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , m = p => {
                p.target === t && (i.current = Hi(r.current))
            }
            ;
            return t.addEventListener("animationstart", m),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
                d.clearTimeout(u),
                t.removeEventListener("animationstart", m),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: x.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function Hi(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function nx(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var rx = Zf[" useInsertionEffect ".trim().toString()] || Fn;
function ox({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,i,s] = ix({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : o;
    {
        const d = x.useRef(e !== void 0);
        x.useEffect( () => {
            const f = d.current;
            f !== a && console.warn(`${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            d.current = a
        }
        , [a, r])
    }
    const u = x.useCallback(d => {
        var f;
        if (a) {
            const m = sx(d) ? d(e) : d;
            m !== e && ((f = s.current) == null || f.call(s, m))
        } else
            i(d)
    }
    , [a, e, i, s]);
    return [l, u]
}
function ix({defaultProp: e, onChange: t}) {
    const [n,r] = x.useState(e)
      , o = x.useRef(n)
      , i = x.useRef(t);
    return rx( () => {
        i.current = t
    }
    , [t]),
    x.useEffect( () => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, i]
}
function sx(e) {
    return typeof e == "function"
}
var ax = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , lx = "VisuallyHidden"
  , ua = x.forwardRef( (e, t) => c.jsx(Qe.span, {
    ...e,
    ref: t,
    style: {
        ...ax,
        ...e.style
    }
}));
ua.displayName = lx;
var ux = ua
  , cc = "ToastProvider"
  , [dc,cx,dx] = Uy("Toast")
  , [cm,TE] = la("Toast", [dx])
  , [fx,ca] = cm(cc)
  , dm = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [a,l] = x.useState(null)
      , [u,d] = x.useState(0)
      , f = x.useRef(!1)
      , m = x.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${cc}\`. Expected non-empty \`string\`.`),
    c.jsx(dc.Provider, {
        scope: t,
        children: c.jsx(fx, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: x.useCallback( () => d(p => p + 1), []),
            onToastRemove: x.useCallback( () => d(p => p - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: m,
            children: s
        })
    })
}
;
dm.displayName = cc;
var fm = "ToastViewport"
  , px = ["F8"]
  , Zl = "toast.viewportPause"
  , Jl = "toast.viewportResume"
  , pm = x.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=px, label: o="Notifications ({hotkey})", ...i} = e
      , s = ca(fm, n)
      , a = cx(n)
      , l = x.useRef(null)
      , u = x.useRef(null)
      , d = x.useRef(null)
      , f = x.useRef(null)
      , m = kt(t, f, s.onViewportChange)
      , p = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , S = s.toastCount > 0;
    x.useEffect( () => {
        const w = g => {
            var v;
            r.length !== 0 && r.every(E => g[E] || g.code === E) && ((v = f.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    x.useEffect( () => {
        const w = l.current
          , g = f.current;
        if (S && w && g) {
            const h = () => {
                if (!s.isClosePausedRef.current) {
                    const b = new CustomEvent(Zl);
                    g.dispatchEvent(b),
                    s.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (s.isClosePausedRef.current) {
                    const b = new CustomEvent(Jl);
                    g.dispatchEvent(b),
                    s.isClosePausedRef.current = !1
                }
            }
              , E = b => {
                !w.contains(b.relatedTarget) && v()
            }
              , C = () => {
                w.contains(document.activeElement) || v()
            }
            ;
            return w.addEventListener("focusin", h),
            w.addEventListener("focusout", E),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", h),
            window.addEventListener("focus", v),
            () => {
                w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", E),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [S, s.isClosePausedRef]);
    const y = x.useCallback( ({tabbingDirection: w}) => {
        const h = a().map(v => {
            const E = v.ref.current
              , C = [E, ...Px(E)];
            return w === "forwards" ? C : C.reverse()
        }
        );
        return (w === "forwards" ? h.reverse() : h).flat()
    }
    , [a]);
    return x.useEffect( () => {
        const w = f.current;
        if (w) {
            const g = h => {
                var C, b, k;
                const v = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !v) {
                    const j = document.activeElement
                      , A = h.shiftKey;
                    if (h.target === w && A) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const I = y({
                        tabbingDirection: A ? "backwards" : "forwards"
                    })
                      , K = I.findIndex(L => L === j);
                    Za(I.slice(K + 1)) ? h.preventDefault() : A ? (b = u.current) == null || b.focus() : (k = d.current) == null || k.focus()
                }
            }
            ;
            return w.addEventListener("keydown", g),
            () => w.removeEventListener("keydown", g)
        }
    }
    , [a, y]),
    c.jsxs(Zy, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: {
            pointerEvents: S ? void 0 : "none"
        },
        children: [S && c.jsx(eu, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = y({
                    tabbingDirection: "forwards"
                });
                Za(w)
            }
        }), c.jsx(dc.Slot, {
            scope: n,
            children: c.jsx(Qe.ol, {
                tabIndex: -1,
                ...i,
                ref: m
            })
        }), S && c.jsx(eu, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const w = y({
                    tabbingDirection: "backwards"
                });
                Za(w)
            }
        })]
    })
}
);
pm.displayName = fm;
var hm = "ToastFocusProxy"
  , eu = x.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = ca(hm, n);
    return c.jsx(ua, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const a = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
eu.displayName = hm;
var Si = "Toast"
  , hx = "toast.swipeStart"
  , mx = "toast.swipeMove"
  , gx = "toast.swipeCancel"
  , vx = "toast.swipeEnd"
  , mm = x.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [a,l] = ox({
        prop: r,
        defaultProp: o ?? !0,
        onChange: i,
        caller: Si
    });
    return c.jsx(uc, {
        present: n || a,
        children: c.jsx(wx, {
            open: a,
            ...s,
            ref: t,
            onClose: () => l(!1),
            onPause: zn(e.onPause),
            onResume: zn(e.onResume),
            onSwipeStart: xe(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: xe(e.onSwipeMove, u => {
                const {x: d, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
            }
            ),
            onSwipeCancel: xe(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: xe(e.onSwipeEnd, u => {
                const {x: d, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                l(!1)
            }
            )
        })
    })
}
);
mm.displayName = Si;
var [yx,xx] = cm(Si, {
    onClose() {}
})
  , wx = x.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: d, onSwipeMove: f, onSwipeCancel: m, onSwipeEnd: p, ...S} = e
      , y = ca(Si, n)
      , [w,g] = x.useState(null)
      , h = kt(t, L => g(L))
      , v = x.useRef(null)
      , E = x.useRef(null)
      , C = o || y.duration
      , b = x.useRef(0)
      , k = x.useRef(C)
      , j = x.useRef(0)
      , {onToastAdd: A, onToastRemove: M} = y
      , F = zn( () => {
        var Y;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((Y = y.viewport) == null || Y.focus()),
        s()
    }
    )
      , I = x.useCallback(L => {
        !L || L === 1 / 0 || (window.clearTimeout(j.current),
        b.current = new Date().getTime(),
        j.current = window.setTimeout(F, L))
    }
    , [F]);
    x.useEffect( () => {
        const L = y.viewport;
        if (L) {
            const Y = () => {
                I(k.current),
                u == null || u()
            }
              , $ = () => {
                const V = new Date().getTime() - b.current;
                k.current = k.current - V,
                window.clearTimeout(j.current),
                l == null || l()
            }
            ;
            return L.addEventListener(Zl, $),
            L.addEventListener(Jl, Y),
            () => {
                L.removeEventListener(Zl, $),
                L.removeEventListener(Jl, Y)
            }
        }
    }
    , [y.viewport, C, l, u, I]),
    x.useEffect( () => {
        i && !y.isClosePausedRef.current && I(C)
    }
    , [i, C, y.isClosePausedRef, I]),
    x.useEffect( () => (A(),
    () => M()), [A, M]);
    const K = x.useMemo( () => w ? Em(w) : null, [w]);
    return y.viewport ? c.jsxs(c.Fragment, {
        children: [K && c.jsx(Sx, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: K
        }), c.jsx(yx, {
            scope: n,
            onClose: F,
            children: wi.createPortal(c.jsx(dc.ItemSlot, {
                scope: n,
                children: c.jsx(qy, {
                    asChild: !0,
                    onEscapeKeyDown: xe(a, () => {
                        y.isFocusedToastEscapeKeyDownRef.current || F(),
                        y.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: c.jsx(Qe.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": y.swipeDirection,
                        ...S,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: xe(e.onKeyDown, L => {
                            L.key === "Escape" && (a == null || a(L.nativeEvent),
                            L.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0,
                            F()))
                        }
                        ),
                        onPointerDown: xe(e.onPointerDown, L => {
                            L.button === 0 && (v.current = {
                                x: L.clientX,
                                y: L.clientY
                            })
                        }
                        ),
                        onPointerMove: xe(e.onPointerMove, L => {
                            if (!v.current)
                                return;
                            const Y = L.clientX - v.current.x
                              , $ = L.clientY - v.current.y
                              , V = !!E.current
                              , N = ["left", "right"].includes(y.swipeDirection)
                              , T = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max
                              , D = N ? T(0, Y) : 0
                              , H = N ? 0 : T(0, $)
                              , z = L.pointerType === "touch" ? 10 : 2
                              , Q = {
                                x: D,
                                y: H
                            }
                              , X = {
                                originalEvent: L,
                                delta: Q
                            };
                            V ? (E.current = Q,
                            Wi(mx, f, X, {
                                discrete: !1
                            })) : qd(Q, y.swipeDirection, z) ? (E.current = Q,
                            Wi(hx, d, X, {
                                discrete: !1
                            }),
                            L.target.setPointerCapture(L.pointerId)) : (Math.abs(Y) > z || Math.abs($) > z) && (v.current = null)
                        }
                        ),
                        onPointerUp: xe(e.onPointerUp, L => {
                            const Y = E.current
                              , $ = L.target;
                            if ($.hasPointerCapture(L.pointerId) && $.releasePointerCapture(L.pointerId),
                            E.current = null,
                            v.current = null,
                            Y) {
                                const V = L.currentTarget
                                  , N = {
                                    originalEvent: L,
                                    delta: Y
                                };
                                qd(Y, y.swipeDirection, y.swipeThreshold) ? Wi(vx, p, N, {
                                    discrete: !0
                                }) : Wi(gx, m, N, {
                                    discrete: !0
                                }),
                                V.addEventListener("click", T => T.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), y.viewport)
        })]
    }) : null
}
)
  , Sx = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = ca(Si, t)
      , [i,s] = x.useState(!1)
      , [a,l] = x.useState(!1);
    return bx( () => s(!0)),
    x.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : c.jsx(um, {
        asChild: !0,
        children: c.jsx(ua, {
            ...r,
            children: i && c.jsxs(c.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , Ex = "ToastTitle"
  , gm = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(Qe.div, {
        ...r,
        ref: t
    })
}
);
gm.displayName = Ex;
var Cx = "ToastDescription"
  , vm = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(Qe.div, {
        ...r,
        ref: t
    })
}
);
vm.displayName = Cx;
var ym = "ToastAction"
  , xm = x.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? c.jsx(Sm, {
        altText: n,
        asChild: !0,
        children: c.jsx(fc, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${ym}\`. Expected non-empty \`string\`.`),
    null)
}
);
xm.displayName = ym;
var wm = "ToastClose"
  , fc = x.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = xx(wm, n);
    return c.jsx(Sm, {
        asChild: !0,
        children: c.jsx(Qe.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: xe(e.onClick, o.onClose)
        })
    })
}
);
fc.displayName = wm;
var Sm = x.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return c.jsx(Qe.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Em(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        kx(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...Em(r))
        }
    }
    ),
    t
}
function Wi(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? im(o, i) : o.dispatchEvent(i)
}
var qd = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function bx(e= () => {}
) {
    const t = zn(e);
    Fn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function kx(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function Px(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Za(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var Nx = dm
  , Cm = pm
  , bm = mm
  , km = gm
  , Pm = vm
  , Nm = xm
  , Tm = fc;
function jm(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = jm(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Rm() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = jm(e)) && (r && (r += " "),
        r += t);
    return r
}
const Zd = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Jd = Rm
  , pc = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Jd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const d = n == null ? void 0 : n[u]
          , f = i == null ? void 0 : i[u];
        if (d === null)
            return null;
        const m = Zd(d) || Zd(f);
        return o[u][m]
    }
    )
      , a = n && Object.entries(n).reduce( (u, d) => {
        let[f,m] = d;
        return m === void 0 || (u[f] = m),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, d) => {
        let {class: f, className: m, ...p} = d;
        return Object.entries(p).every(S => {
            let[y,w] = S;
            return Array.isArray(w) ? w.includes({
                ...i,
                ...a
            }[y]) : {
                ...i,
                ...a
            }[y] === w
        }
        ) ? [...u, f, m] : u
    }
    , []);
    return Jd(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tx = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Om = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jx = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rx = x.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: s, ...a}, l) => x.createElement("svg", {
    ref: l,
    ...jx,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Om("lucide", o),
    ...a
}, [...s.map( ([u,d]) => x.createElement(u, d)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const le = (e, t) => {
    const n = x.forwardRef( ({className: r, ...o}, i) => x.createElement(Rx, {
        ref: i,
        iconNode: t,
        className: Om(`lucide-${Tx(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = le("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ox = le("Award", [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mm = le("Bed", [["path", {
    d: "M2 4v16",
    key: "vw9hq8"
}], ["path", {
    d: "M2 8h18a2 2 0 0 1 2 2v10",
    key: "1dgv2r"
}], ["path", {
    d: "M2 17h20",
    key: "18nfp3"
}], ["path", {
    d: "M6 8v9",
    key: "1yriud"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Am = le("Camera", [["path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
    key: "1tc9qg"
}], ["circle", {
    cx: "12",
    cy: "13",
    r: "3",
    key: "1vg3eu"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lm = le("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mx = le("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ax = le("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lx = le("Eye", [["path", {
    d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
    key: "1nclc0"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dx = le("Filter", [["polygon", {
    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
    key: "1yg77f"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = le("Headphones", [["path", {
    d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
    key: "1xhozi"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = le("House", [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dm = le("Laptop", [["path", {
    d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
    key: "tarvll"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ix = le("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tu = le("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zx = le("Package", [["path", {
    d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
    key: "1a0edw"
}], ["path", {
    d: "M12 22V12",
    key: "d0xqtd"
}], ["path", {
    d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",
    key: "yx3hmr"
}], ["path", {
    d: "m7.5 4.27 9 5.15",
    key: "1c824w"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nu = le("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _m = le("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ef = le("ShoppingBag", [["path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
    key: "hou9p0"
}], ["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M16 10a4 4 0 0 1-8 0",
    key: "1ltviw"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Im = le("Smartphone", [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fx = le("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zm = le("Truck", [["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fm = le("Tv", [["rect", {
    width: "20",
    height: "15",
    x: "2",
    y: "7",
    rx: "2",
    ry: "2",
    key: "10ag99"
}], ["polyline", {
    points: "17 2 12 7 7 2",
    key: "11pgbg"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $x = le("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = le("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , hc = "-"
  , Bx = e => {
    const t = Vx(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const a = s.split(hc);
            return a[0] === "" && a.length !== 1 && a.shift(),
            $m(a, t) || Ux(s)
        }
        ,
        getConflictingClassGroupIds: (s, a) => {
            const l = n[s] || [];
            return a && r[s] ? [...l, ...r[s]] : l
        }
    }
}
  , $m = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? $m(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(hc);
    return (s = t.validators.find( ({validator: a}) => a(i))) == null ? void 0 : s.classGroupId
}
  , tf = /^\[(.+)\]$/
  , Ux = e => {
    if (tf.test(e)) {
        const t = tf.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , Vx = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return Wx(Object.entries(e.classGroups), n).forEach( ([i,s]) => {
        ru(s, r, i, t)
    }
    ),
    r
}
  , ru = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : nf(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (Hx(o)) {
                ru(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,s]) => {
            ru(s, nf(t, i), n, r)
        }
        )
    }
    )
}
  , nf = (e, t) => {
    let n = e;
    return t.split(hc).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , Hx = e => e.isThemeGetter
  , Wx = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([s,a]) => [t + s, a])) : i);
    return [n, o]
}
) : e
  , Kx = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, s) => {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0)
                return s;
            if ((s = r.get(i)) !== void 0)
                return o(i, s),
                s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
  , Bm = "!"
  , Qx = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , s = a => {
        const l = [];
        let u = 0, d = 0, f;
        for (let w = 0; w < a.length; w++) {
            let g = a[w];
            if (u === 0) {
                if (g === o && (r || a.slice(w, w + i) === t)) {
                    l.push(a.slice(d, w)),
                    d = w + i;
                    continue
                }
                if (g === "/") {
                    f = w;
                    continue
                }
            }
            g === "[" ? u++ : g === "]" && u--
        }
        const m = l.length === 0 ? a : a.substring(d)
          , p = m.startsWith(Bm)
          , S = p ? m.substring(1) : m
          , y = f && f > d ? f - d : void 0;
        return {
            modifiers: l,
            hasImportantModifier: p,
            baseClassName: S,
            maybePostfixModifierPosition: y
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: s
    }) : s
}
  , Gx = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , Yx = e => ({
    cache: Kx(e.cacheSize),
    parseClassName: Qx(e),
    ...Bx(e)
})
  , Xx = /\s+/
  , qx = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , s = e.trim().split(Xx);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
        const u = s[l]
          , {modifiers: d, hasImportantModifier: f, baseClassName: m, maybePostfixModifierPosition: p} = n(u);
        let S = !!p
          , y = r(S ? m.substring(0, p) : m);
        if (!y) {
            if (!S) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (y = r(m),
            !y) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            S = !1
        }
        const w = Gx(d).join(":")
          , g = f ? w + Bm : w
          , h = g + y;
        if (i.includes(h))
            continue;
        i.push(h);
        const v = o(y, S);
        for (let E = 0; E < v.length; ++E) {
            const C = v[E];
            i.push(g + C)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function Zx() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = Um(t)) && (r && (r += " "),
        r += n);
    return r
}
const Um = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = Um(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function Jx(e, ...t) {
    let n, r, o, i = s;
    function s(l) {
        const u = t.reduce( (d, f) => f(d), e());
        return n = Yx(u),
        r = n.cache.get,
        o = n.cache.set,
        i = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const d = qx(l, n);
        return o(l, d),
        d
    }
    return function() {
        return i(Zx.apply(null, arguments))
    }
}
const re = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Vm = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , e1 = /^\d+\/\d+$/
  , t1 = new Set(["px", "full", "screen"])
  , n1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , r1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , o1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , i1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , s1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Bt = e => Ur(e) || t1.has(e) || e1.test(e)
  , fn = e => co(e, "length", h1)
  , Ur = e => !!e && !Number.isNaN(Number(e))
  , Ja = e => co(e, "number", Ur)
  , No = e => !!e && Number.isInteger(Number(e))
  , a1 = e => e.endsWith("%") && Ur(e.slice(0, -1))
  , W = e => Vm.test(e)
  , pn = e => n1.test(e)
  , l1 = new Set(["length", "size", "percentage"])
  , u1 = e => co(e, l1, Hm)
  , c1 = e => co(e, "position", Hm)
  , d1 = new Set(["image", "url"])
  , f1 = e => co(e, d1, g1)
  , p1 = e => co(e, "", m1)
  , To = () => !0
  , co = (e, t, n) => {
    const r = Vm.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , h1 = e => r1.test(e) && !o1.test(e)
  , Hm = () => !1
  , m1 = e => i1.test(e)
  , g1 = e => s1.test(e)
  , v1 = () => {
    const e = re("colors")
      , t = re("spacing")
      , n = re("blur")
      , r = re("brightness")
      , o = re("borderColor")
      , i = re("borderRadius")
      , s = re("borderSpacing")
      , a = re("borderWidth")
      , l = re("contrast")
      , u = re("grayscale")
      , d = re("hueRotate")
      , f = re("invert")
      , m = re("gap")
      , p = re("gradientColorStops")
      , S = re("gradientColorStopPositions")
      , y = re("inset")
      , w = re("margin")
      , g = re("opacity")
      , h = re("padding")
      , v = re("saturate")
      , E = re("scale")
      , C = re("sepia")
      , b = re("skew")
      , k = re("space")
      , j = re("translate")
      , A = () => ["auto", "contain", "none"]
      , M = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , F = () => ["auto", W, t]
      , I = () => [W, t]
      , K = () => ["", Bt, fn]
      , L = () => ["auto", Ur, W]
      , Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , $ = () => ["solid", "dashed", "dotted", "double", "none"]
      , V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , T = () => ["", "0", W]
      , D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , H = () => [Ur, W];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [To],
            spacing: [Bt, fn],
            blur: ["none", "", pn, W],
            brightness: H(),
            borderColor: [e],
            borderRadius: ["none", "", "full", pn, W],
            borderSpacing: I(),
            borderWidth: K(),
            contrast: H(),
            grayscale: T(),
            hueRotate: H(),
            invert: T(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [a1, fn],
            inset: F(),
            margin: F(),
            opacity: H(),
            padding: I(),
            saturate: H(),
            scale: H(),
            sepia: T(),
            skew: H(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", W]
            }],
            container: ["container"],
            columns: [{
                columns: [pn]
            }],
            "break-after": [{
                "break-after": D()
            }],
            "break-before": [{
                "break-before": D()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Y(), W]
            }],
            overflow: [{
                overflow: M()
            }],
            "overflow-x": [{
                "overflow-x": M()
            }],
            "overflow-y": [{
                "overflow-y": M()
            }],
            overscroll: [{
                overscroll: A()
            }],
            "overscroll-x": [{
                "overscroll-x": A()
            }],
            "overscroll-y": [{
                "overscroll-y": A()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", No, W]
            }],
            basis: [{
                basis: F()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", W]
            }],
            grow: [{
                grow: T()
            }],
            shrink: [{
                shrink: T()
            }],
            order: [{
                order: ["first", "last", "none", No, W]
            }],
            "grid-cols": [{
                "grid-cols": [To]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", No, W]
                }, W]
            }],
            "col-start": [{
                "col-start": L()
            }],
            "col-end": [{
                "col-end": L()
            }],
            "grid-rows": [{
                "grid-rows": [To]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [No, W]
                }, W]
            }],
            "row-start": [{
                "row-start": L()
            }],
            "row-end": [{
                "row-end": L()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", W]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", W]
            }],
            gap: [{
                gap: [m]
            }],
            "gap-x": [{
                "gap-x": [m]
            }],
            "gap-y": [{
                "gap-y": [m]
            }],
            "justify-content": [{
                justify: ["normal", ...N()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...N(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...N(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [k]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [k]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", W, t]
            }],
            "min-w": [{
                "min-w": [W, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [W, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [pn]
                }, pn]
            }],
            h: [{
                h: [W, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [W, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", pn, fn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ja]
            }],
            "font-family": [{
                font: [To]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", W]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Ur, Ja]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Bt, W]
            }],
            "list-image": [{
                "list-image": ["none", W]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", W]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [g]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [g]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...$(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Bt, fn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Bt, W]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", W]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [g]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Y(), c1]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", u1]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, f1]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [S]
            }],
            "gradient-via-pos": [{
                via: [S]
            }],
            "gradient-to-pos": [{
                to: [S]
            }],
            "gradient-from": [{
                from: [p]
            }],
            "gradient-via": [{
                via: [p]
            }],
            "gradient-to": [{
                to: [p]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [g]
            }],
            "border-style": [{
                border: [...$(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [g]
            }],
            "divide-style": [{
                divide: $()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...$()]
            }],
            "outline-offset": [{
                "outline-offset": [Bt, W]
            }],
            "outline-w": [{
                outline: [Bt, fn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: K()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [g]
            }],
            "ring-offset-w": [{
                "ring-offset": [Bt, fn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", pn, p1]
            }],
            "shadow-color": [{
                shadow: [To]
            }],
            opacity: [{
                opacity: [g]
            }],
            "mix-blend": [{
                "mix-blend": [...V(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": V()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", pn, W]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [g]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", W]
            }],
            duration: [{
                duration: H()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", W]
            }],
            delay: [{
                delay: H()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", W]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [E]
            }],
            "scale-x": [{
                "scale-x": [E]
            }],
            "scale-y": [{
                "scale-y": [E]
            }],
            rotate: [{
                rotate: [No, W]
            }],
            "translate-x": [{
                "translate-x": [j]
            }],
            "translate-y": [{
                "translate-y": [j]
            }],
            "skew-x": [{
                "skew-x": [b]
            }],
            "skew-y": [{
                "skew-y": [b]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", W]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", W]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Bt, fn, Ja]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , y1 = Jx(v1);
function Ft(...e) {
    return y1(Rm(e))
}
const x1 = Nx
  , Wm = x.forwardRef( ({className: e, ...t}, n) => c.jsx(Cm, {
    ref: n,
    className: Ft("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Wm.displayName = Cm.displayName;
const w1 = pc("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Km = x.forwardRef( ({className: e, variant: t, ...n}, r) => c.jsx(bm, {
    ref: r,
    className: Ft(w1({
        variant: t
    }), e),
    ...n
}));
Km.displayName = bm.displayName;
const S1 = x.forwardRef( ({className: e, ...t}, n) => c.jsx(Nm, {
    ref: n,
    className: Ft("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
S1.displayName = Nm.displayName;
const Qm = x.forwardRef( ({className: e, ...t}, n) => c.jsx(Tm, {
    ref: n,
    className: Ft("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: c.jsx(Br, {
        className: "h-4 w-4"
    })
}));
Qm.displayName = Tm.displayName;
const Gm = x.forwardRef( ({className: e, ...t}, n) => c.jsx(km, {
    ref: n,
    className: Ft("text-sm font-semibold", e),
    ...t
}));
Gm.displayName = km.displayName;
const Ym = x.forwardRef( ({className: e, ...t}, n) => c.jsx(Pm, {
    ref: n,
    className: Ft("text-sm opacity-90", e),
    ...t
}));
Ym.displayName = Pm.displayName;
function E1() {
    const {toasts: e} = Ly();
    return c.jsxs(x1, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return c.jsxs(Km, {
                ...i,
                children: [c.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && c.jsx(Gm, {
                        children: n
                    }), r && c.jsx(Ym, {
                        children: r
                    })]
                }), o, c.jsx(Qm, {})]
            }, t)
        }), c.jsx(Wm, {})]
    })
}
var rf = ["light", "dark"]
  , C1 = "(prefers-color-scheme: dark)"
  , b1 = x.createContext(void 0)
  , k1 = {
    setTheme: e => {}
    ,
    themes: []
}
  , P1 = () => {
    var e;
    return (e = x.useContext(b1)) != null ? e : k1
}
;
x.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: a, nonce: l}) => {
    let u = i === "system"
      , d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(S => `'${S}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , f = o ? rf.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , m = (S, y=!1, w=!0) => {
        let g = s ? s[S] : S
          , h = y ? S + "|| ''" : `'${g}'`
          , v = "";
        return o && w && !y && rf.includes(S) && (v += `d.style.colorScheme = '${S}';`),
        n === "class" ? y || g ? v += `c.add(${h})` : v += "null" : g && (v += `d[s](n,${h})`),
        v
    }
      , p = e ? `!function(){${d}${m(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${C1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${m(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + m(i, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${m(s ? "x[e]" : "e", !0)}}else{${m(i, !1, !1)};}${f}}catch(t){}}();`;
    return x.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: p
        }
    })
}
);
var N1 = e => {
    switch (e) {
    case "success":
        return R1;
    case "info":
        return M1;
    case "warning":
        return O1;
    case "error":
        return A1;
    default:
        return null
    }
}
  , T1 = Array(12).fill(0)
  , j1 = ({visible: e, className: t}) => O.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, O.createElement("div", {
    className: "sonner-spinner"
}, T1.map( (n, r) => O.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , R1 = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , O1 = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , M1 = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , A1 = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , L1 = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, O.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), O.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , D1 = () => {
    let[e,t] = O.useState(document.hidden);
    return O.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , ou = 1
  , _1 = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : ou++
              , i = this.toasts.find(a => a.id === o)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({
                ...a,
                ...e,
                id: o,
                title: n
            }),
            {
                ...a,
                ...e,
                id: o,
                dismissible: s,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, i, s = r.then(async l => {
                if (i = ["resolve", l],
                O.isValidElement(l))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (z1(l) && !l.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , d = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: d
                    })
                }
            }
            ).catch(async l => {
                if (i = ["reject", l],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , d = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                }
            }
            ).finally( () => {
                var l;
                o && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => s.then( () => i[0] === "reject" ? u(i[1]) : l(i[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || ou++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , $e = new _1
  , I1 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || ou++;
    return $e.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , z1 = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , F1 = I1
  , $1 = () => $e.toasts
  , B1 = () => $e.getActiveToasts();
Object.assign(F1, {
    success: $e.success,
    info: $e.info,
    warning: $e.warning,
    error: $e.error,
    custom: $e.custom,
    message: $e.message,
    promise: $e.promise,
    dismiss: $e.dismiss,
    loading: $e.loading
}, {
    getHistory: $1,
    getToasts: B1
});
function U1(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
U1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Ki(e) {
    return e.label !== void 0
}
var V1 = 3
  , H1 = "32px"
  , W1 = "16px"
  , of = 4e3
  , K1 = 356
  , Q1 = 14
  , G1 = 20
  , Y1 = 200;
function ht(...e) {
    return e.filter(Boolean).join(" ")
}
function X1(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var q1 = e => {
    var t, n, r, o, i, s, a, l, u, d, f;
    let {invert: m, toast: p, unstyled: S, interacting: y, setHeights: w, visibleToasts: g, heights: h, index: v, toasts: E, expanded: C, removeToast: b, defaultRichColors: k, closeButton: j, style: A, cancelButtonStyle: M, actionButtonStyle: F, className: I="", descriptionClassName: K="", duration: L, position: Y, gap: $, loadingIcon: V, expandByDefault: N, classNames: T, icons: D, closeButtonAriaLabel: H="Close toast", pauseWhenPageIsHidden: z} = e
      , [Q,X] = O.useState(null)
      , [ge,Pe] = O.useState(null)
      , [J,gr] = O.useState(!1)
      , [on,Kn] = O.useState(!1)
      , [sn,vr] = O.useState(!1)
      , [an,Ci] = O.useState(!1)
      , [xa,bi] = O.useState(!1)
      , [wa,vo] = O.useState(0)
      , [yr,Oc] = O.useState(0)
      , yo = O.useRef(p.duration || L || of)
      , Mc = O.useRef(null)
      , Qn = O.useRef(null)
      , Gg = v === 0
      , Yg = v + 1 <= g
      , nt = p.type
      , xr = p.dismissible !== !1
      , Xg = p.className || ""
      , qg = p.descriptionClassName || ""
      , ki = O.useMemo( () => h.findIndex(B => B.toastId === p.id) || 0, [h, p.id])
      , Zg = O.useMemo( () => {
        var B;
        return (B = p.closeButton) != null ? B : j
    }
    , [p.closeButton, j])
      , Ac = O.useMemo( () => p.duration || L || of, [p.duration, L])
      , Sa = O.useRef(0)
      , wr = O.useRef(0)
      , Lc = O.useRef(0)
      , Sr = O.useRef(null)
      , [Jg,e0] = Y.split("-")
      , Dc = O.useMemo( () => h.reduce( (B, te, se) => se >= ki ? B : B + te.height, 0), [h, ki])
      , _c = D1()
      , t0 = p.invert || m
      , Ea = nt === "loading";
    wr.current = O.useMemo( () => ki * $ + Dc, [ki, Dc]),
    O.useEffect( () => {
        yo.current = Ac
    }
    , [Ac]),
    O.useEffect( () => {
        gr(!0)
    }
    , []),
    O.useEffect( () => {
        let B = Qn.current;
        if (B) {
            let te = B.getBoundingClientRect().height;
            return Oc(te),
            w(se => [{
                toastId: p.id,
                height: te,
                position: p.position
            }, ...se]),
            () => w(se => se.filter(ct => ct.toastId !== p.id))
        }
    }
    , [w, p.id]),
    O.useLayoutEffect( () => {
        if (!J)
            return;
        let B = Qn.current
          , te = B.style.height;
        B.style.height = "auto";
        let se = B.getBoundingClientRect().height;
        B.style.height = te,
        Oc(se),
        w(ct => ct.find(dt => dt.toastId === p.id) ? ct.map(dt => dt.toastId === p.id ? {
            ...dt,
            height: se
        } : dt) : [{
            toastId: p.id,
            height: se,
            position: p.position
        }, ...ct])
    }
    , [J, p.title, p.description, w, p.id]);
    let ln = O.useCallback( () => {
        Kn(!0),
        vo(wr.current),
        w(B => B.filter(te => te.toastId !== p.id)),
        setTimeout( () => {
            b(p)
        }
        , Y1)
    }
    , [p, b, w, wr]);
    O.useEffect( () => {
        if (p.promise && nt === "loading" || p.duration === 1 / 0 || p.type === "loading")
            return;
        let B;
        return C || y || z && _c ? ( () => {
            if (Lc.current < Sa.current) {
                let te = new Date().getTime() - Sa.current;
                yo.current = yo.current - te
            }
            Lc.current = new Date().getTime()
        }
        )() : yo.current !== 1 / 0 && (Sa.current = new Date().getTime(),
        B = setTimeout( () => {
            var te;
            (te = p.onAutoClose) == null || te.call(p, p),
            ln()
        }
        , yo.current)),
        () => clearTimeout(B)
    }
    , [C, y, p, nt, z, _c, ln]),
    O.useEffect( () => {
        p.delete && ln()
    }
    , [ln, p.delete]);
    function n0() {
        var B, te, se;
        return D != null && D.loading ? O.createElement("div", {
            className: ht(T == null ? void 0 : T.loader, (B = p == null ? void 0 : p.classNames) == null ? void 0 : B.loader, "sonner-loader"),
            "data-visible": nt === "loading"
        }, D.loading) : V ? O.createElement("div", {
            className: ht(T == null ? void 0 : T.loader, (te = p == null ? void 0 : p.classNames) == null ? void 0 : te.loader, "sonner-loader"),
            "data-visible": nt === "loading"
        }, V) : O.createElement(j1, {
            className: ht(T == null ? void 0 : T.loader, (se = p == null ? void 0 : p.classNames) == null ? void 0 : se.loader),
            visible: nt === "loading"
        })
    }
    return O.createElement("li", {
        tabIndex: 0,
        ref: Qn,
        className: ht(I, Xg, T == null ? void 0 : T.toast, (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast, T == null ? void 0 : T.default, T == null ? void 0 : T[nt], (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[nt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = p.richColors) != null ? r : k,
        "data-styled": !(p.jsx || p.unstyled || S),
        "data-mounted": J,
        "data-promise": !!p.promise,
        "data-swiped": xa,
        "data-removed": on,
        "data-visible": Yg,
        "data-y-position": Jg,
        "data-x-position": e0,
        "data-index": v,
        "data-front": Gg,
        "data-swiping": sn,
        "data-dismissible": xr,
        "data-type": nt,
        "data-invert": t0,
        "data-swipe-out": an,
        "data-swipe-direction": ge,
        "data-expanded": !!(C || N && J),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": E.length - v,
            "--offset": `${on ? wa : wr.current}px`,
            "--initial-height": N ? "auto" : `${yr}px`,
            ...A,
            ...p.style
        },
        onDragEnd: () => {
            vr(!1),
            X(null),
            Sr.current = null
        }
        ,
        onPointerDown: B => {
            Ea || !xr || (Mc.current = new Date,
            vo(wr.current),
            B.target.setPointerCapture(B.pointerId),
            B.target.tagName !== "BUTTON" && (vr(!0),
            Sr.current = {
                x: B.clientX,
                y: B.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var B, te, se, ct;
            if (an || !xr)
                return;
            Sr.current = null;
            let dt = Number(((B = Qn.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , un = Number(((te = Qn.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Gn = new Date().getTime() - ((se = Mc.current) == null ? void 0 : se.getTime())
              , ft = Q === "x" ? dt : un
              , cn = Math.abs(ft) / Gn;
            if (Math.abs(ft) >= G1 || cn > .11) {
                vo(wr.current),
                (ct = p.onDismiss) == null || ct.call(p, p),
                Pe(Q === "x" ? dt > 0 ? "right" : "left" : un > 0 ? "down" : "up"),
                ln(),
                Ci(!0),
                bi(!1);
                return
            }
            vr(!1),
            X(null)
        }
        ,
        onPointerMove: B => {
            var te, se, ct, dt;
            if (!Sr.current || !xr || ((te = window.getSelection()) == null ? void 0 : te.toString().length) > 0)
                return;
            let un = B.clientY - Sr.current.y
              , Gn = B.clientX - Sr.current.x
              , ft = (se = e.swipeDirections) != null ? se : X1(Y);
            !Q && (Math.abs(Gn) > 1 || Math.abs(un) > 1) && X(Math.abs(Gn) > Math.abs(un) ? "x" : "y");
            let cn = {
                x: 0,
                y: 0
            };
            Q === "y" ? (ft.includes("top") || ft.includes("bottom")) && (ft.includes("top") && un < 0 || ft.includes("bottom") && un > 0) && (cn.y = un) : Q === "x" && (ft.includes("left") || ft.includes("right")) && (ft.includes("left") && Gn < 0 || ft.includes("right") && Gn > 0) && (cn.x = Gn),
            (Math.abs(cn.x) > 0 || Math.abs(cn.y) > 0) && bi(!0),
            (ct = Qn.current) == null || ct.style.setProperty("--swipe-amount-x", `${cn.x}px`),
            (dt = Qn.current) == null || dt.style.setProperty("--swipe-amount-y", `${cn.y}px`)
        }
    }, Zg && !p.jsx ? O.createElement("button", {
        "aria-label": H,
        "data-disabled": Ea,
        "data-close-button": !0,
        onClick: Ea || !xr ? () => {}
        : () => {
            var B;
            ln(),
            (B = p.onDismiss) == null || B.call(p, p)
        }
        ,
        className: ht(T == null ? void 0 : T.closeButton, (o = p == null ? void 0 : p.classNames) == null ? void 0 : o.closeButton)
    }, (i = D == null ? void 0 : D.close) != null ? i : L1) : null, p.jsx || x.isValidElement(p.title) ? p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title : O.createElement(O.Fragment, null, nt || p.icon || p.promise ? O.createElement("div", {
        "data-icon": "",
        className: ht(T == null ? void 0 : T.icon, (s = p == null ? void 0 : p.classNames) == null ? void 0 : s.icon)
    }, p.promise || p.type === "loading" && !p.icon ? p.icon || n0() : null, p.type !== "loading" ? p.icon || (D == null ? void 0 : D[nt]) || N1(nt) : null) : null, O.createElement("div", {
        "data-content": "",
        className: ht(T == null ? void 0 : T.content, (a = p == null ? void 0 : p.classNames) == null ? void 0 : a.content)
    }, O.createElement("div", {
        "data-title": "",
        className: ht(T == null ? void 0 : T.title, (l = p == null ? void 0 : p.classNames) == null ? void 0 : l.title)
    }, typeof p.title == "function" ? p.title() : p.title), p.description ? O.createElement("div", {
        "data-description": "",
        className: ht(K, qg, T == null ? void 0 : T.description, (u = p == null ? void 0 : p.classNames) == null ? void 0 : u.description)
    }, typeof p.description == "function" ? p.description() : p.description) : null), x.isValidElement(p.cancel) ? p.cancel : p.cancel && Ki(p.cancel) ? O.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: p.cancelButtonStyle || M,
        onClick: B => {
            var te, se;
            Ki(p.cancel) && xr && ((se = (te = p.cancel).onClick) == null || se.call(te, B),
            ln())
        }
        ,
        className: ht(T == null ? void 0 : T.cancelButton, (d = p == null ? void 0 : p.classNames) == null ? void 0 : d.cancelButton)
    }, p.cancel.label) : null, x.isValidElement(p.action) ? p.action : p.action && Ki(p.action) ? O.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: p.actionButtonStyle || F,
        onClick: B => {
            var te, se;
            Ki(p.action) && ((se = (te = p.action).onClick) == null || se.call(te, B),
            !B.defaultPrevented && ln())
        }
        ,
        className: ht(T == null ? void 0 : T.actionButton, (f = p == null ? void 0 : p.classNames) == null ? void 0 : f.actionButton)
    }, p.action.label) : null))
}
;
function sf() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function Z1(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let i = o === 1
          , s = i ? "--mobile-offset" : "--offset"
          , a = i ? W1 : H1;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(d => {
                n[`${s}-${d}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = a : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
    n
}
var J1 = x.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: i, closeButton: s, className: a, offset: l, mobileOffset: u, theme: d="light", richColors: f, duration: m, style: p, visibleToasts: S=V1, toastOptions: y, dir: w=sf(), gap: g=Q1, loadingIcon: h, icons: v, containerAriaLabel: E="Notifications", pauseWhenPageIsHidden: C} = e
      , [b,k] = O.useState([])
      , j = O.useMemo( () => Array.from(new Set([r].concat(b.filter(z => z.position).map(z => z.position)))), [b, r])
      , [A,M] = O.useState([])
      , [F,I] = O.useState(!1)
      , [K,L] = O.useState(!1)
      , [Y,$] = O.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , V = O.useRef(null)
      , N = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , T = O.useRef(null)
      , D = O.useRef(!1)
      , H = O.useCallback(z => {
        k(Q => {
            var X;
            return (X = Q.find(ge => ge.id === z.id)) != null && X.delete || $e.dismiss(z.id),
            Q.filter( ({id: ge}) => ge !== z.id)
        }
        )
    }
    , []);
    return O.useEffect( () => $e.subscribe(z => {
        if (z.dismiss) {
            k(Q => Q.map(X => X.id === z.id ? {
                ...X,
                delete: !0
            } : X));
            return
        }
        setTimeout( () => {
            tm.flushSync( () => {
                k(Q => {
                    let X = Q.findIndex(ge => ge.id === z.id);
                    return X !== -1 ? [...Q.slice(0, X), {
                        ...Q[X],
                        ...z
                    }, ...Q.slice(X + 1)] : [z, ...Q]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    O.useEffect( () => {
        if (d !== "system") {
            $(d);
            return
        }
        if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")),
        typeof window > "u")
            return;
        let z = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            z.addEventListener("change", ({matches: Q}) => {
                $(Q ? "dark" : "light")
            }
            )
        } catch {
            z.addListener( ({matches: X}) => {
                try {
                    $(X ? "dark" : "light")
                } catch (ge) {
                    console.error(ge)
                }
            }
            )
        }
    }
    , [d]),
    O.useEffect( () => {
        b.length <= 1 && I(!1)
    }
    , [b]),
    O.useEffect( () => {
        let z = Q => {
            var X, ge;
            o.every(Pe => Q[Pe] || Q.code === Pe) && (I(!0),
            (X = V.current) == null || X.focus()),
            Q.code === "Escape" && (document.activeElement === V.current || (ge = V.current) != null && ge.contains(document.activeElement)) && I(!1)
        }
        ;
        return document.addEventListener("keydown", z),
        () => document.removeEventListener("keydown", z)
    }
    , [o]),
    O.useEffect( () => {
        if (V.current)
            return () => {
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null,
                D.current = !1)
            }
    }
    , [V.current]),
    O.createElement("section", {
        ref: t,
        "aria-label": `${E} ${N}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, j.map( (z, Q) => {
        var X;
        let[ge,Pe] = z.split("-");
        return b.length ? O.createElement("ol", {
            key: z,
            dir: w === "auto" ? sf() : w,
            tabIndex: -1,
            ref: V,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": Y,
            "data-y-position": ge,
            "data-lifted": F && b.length > 1 && !i,
            "data-x-position": Pe,
            style: {
                "--front-toast-height": `${((X = A[0]) == null ? void 0 : X.height) || 0}px`,
                "--width": `${K1}px`,
                "--gap": `${g}px`,
                ...p,
                ...Z1(l, u)
            },
            onBlur: J => {
                D.current && !J.currentTarget.contains(J.relatedTarget) && (D.current = !1,
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null))
            }
            ,
            onFocus: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || D.current || (D.current = !0,
                T.current = J.relatedTarget)
            }
            ,
            onMouseEnter: () => I(!0),
            onMouseMove: () => I(!0),
            onMouseLeave: () => {
                K || I(!1)
            }
            ,
            onDragEnd: () => I(!1),
            onPointerDown: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || L(!0)
            }
            ,
            onPointerUp: () => L(!1)
        }, b.filter(J => !J.position && Q === 0 || J.position === z).map( (J, gr) => {
            var on, Kn;
            return O.createElement(q1, {
                key: J.id,
                icons: v,
                index: gr,
                toast: J,
                defaultRichColors: f,
                duration: (on = y == null ? void 0 : y.duration) != null ? on : m,
                className: y == null ? void 0 : y.className,
                descriptionClassName: y == null ? void 0 : y.descriptionClassName,
                invert: n,
                visibleToasts: S,
                closeButton: (Kn = y == null ? void 0 : y.closeButton) != null ? Kn : s,
                interacting: K,
                position: z,
                style: y == null ? void 0 : y.style,
                unstyled: y == null ? void 0 : y.unstyled,
                classNames: y == null ? void 0 : y.classNames,
                cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                removeToast: H,
                toasts: b.filter(sn => sn.position == J.position),
                heights: A.filter(sn => sn.position == J.position),
                setHeights: M,
                expandByDefault: i,
                gap: g,
                loadingIcon: h,
                expanded: F,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const ew = ({...e}) => {
    const {theme: t="system"} = P1();
    return c.jsx(J1, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , tw = ["top", "right", "bottom", "left"]
  , $n = Math.min
  , Ye = Math.max
  , zs = Math.round
  , Qi = Math.floor
  , It = e => ({
    x: e,
    y: e
})
  , nw = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , rw = {
    start: "end",
    end: "start"
};
function iu(e, t, n) {
    return Ye(e, $n(t, n))
}
function en(e, t) {
    return typeof e == "function" ? e(t) : e
}
function tn(e) {
    return e.split("-")[0]
}
function fo(e) {
    return e.split("-")[1]
}
function mc(e) {
    return e === "x" ? "y" : "x"
}
function gc(e) {
    return e === "y" ? "height" : "width"
}
const ow = new Set(["top", "bottom"]);
function Lt(e) {
    return ow.has(tn(e)) ? "y" : "x"
}
function vc(e) {
    return mc(Lt(e))
}
function iw(e, t, n) {
    n === void 0 && (n = !1);
    const r = fo(e)
      , o = vc(e)
      , i = gc(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Fs(s)),
    [s, Fs(s)]
}
function sw(e) {
    const t = Fs(e);
    return [su(e), t, su(t)]
}
function su(e) {
    return e.replace(/start|end/g, t => rw[t])
}
const af = ["left", "right"]
  , lf = ["right", "left"]
  , aw = ["top", "bottom"]
  , lw = ["bottom", "top"];
function uw(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? lf : af : t ? af : lf;
    case "left":
    case "right":
        return t ? aw : lw;
    default:
        return []
    }
}
function cw(e, t, n, r) {
    const o = fo(e);
    let i = uw(tn(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(su)))),
    i
}
function Fs(e) {
    return e.replace(/left|right|bottom|top/g, t => nw[t])
}
function dw(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Xm(e) {
    return typeof e != "number" ? dw(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function $s(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function uf(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = Lt(t)
      , s = vc(t)
      , a = gc(s)
      , l = tn(t)
      , u = i === "y"
      , d = r.x + r.width / 2 - o.width / 2
      , f = r.y + r.height / 2 - o.height / 2
      , m = r[a] / 2 - o[a] / 2;
    let p;
    switch (l) {
    case "top":
        p = {
            x: d,
            y: r.y - o.height
        };
        break;
    case "bottom":
        p = {
            x: d,
            y: r.y + r.height
        };
        break;
    case "right":
        p = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        p = {
            x: r.x - o.width,
            y: f
        };
        break;
    default:
        p = {
            x: r.x,
            y: r.y
        }
    }
    switch (fo(t)) {
    case "start":
        p[s] -= m * (n && u ? -1 : 1);
        break;
    case "end":
        p[s] += m * (n && u ? -1 : 1);
        break
    }
    return p
}
const fw = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , a = i.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: d, y: f} = uf(u, r, l)
      , m = r
      , p = {}
      , S = 0;
    for (let y = 0; y < a.length; y++) {
        const {name: w, fn: g} = a[y]
          , {x: h, y: v, data: E, reset: C} = await g({
            x: d,
            y: f,
            initialPlacement: r,
            placement: m,
            strategy: o,
            middlewareData: p,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = h ?? d,
        f = v ?? f,
        p = {
            ...p,
            [w]: {
                ...p[w],
                ...E
            }
        },
        C && S <= 50 && (S++,
        typeof C == "object" && (C.placement && (m = C.placement),
        C.rects && (u = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: d, y: f} = uf(u, m, l)),
        y = -1)
    }
    return {
        x: d,
        y: f,
        placement: m,
        strategy: o,
        middlewareData: p
    }
}
;
async function si(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: f="floating", altBoundary: m=!1, padding: p=0} = en(t, e)
      , S = Xm(p)
      , w = a[m ? f === "floating" ? "reference" : "floating" : f]
      , g = $s(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: l
    }))
      , h = f === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating))
      , E = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = $s(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: h,
        offsetParent: v,
        strategy: l
    }) : h);
    return {
        top: (g.top - C.top + S.top) / E.y,
        bottom: (C.bottom - g.bottom + S.bottom) / E.y,
        left: (g.left - C.left + S.left) / E.x,
        right: (C.right - g.right + S.right) / E.x
    }
}
const pw = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: a, middlewareData: l} = t
          , {element: u, padding: d=0} = en(e, t) || {};
        if (u == null)
            return {};
        const f = Xm(d)
          , m = {
            x: n,
            y: r
        }
          , p = vc(o)
          , S = gc(p)
          , y = await s.getDimensions(u)
          , w = p === "y"
          , g = w ? "top" : "left"
          , h = w ? "bottom" : "right"
          , v = w ? "clientHeight" : "clientWidth"
          , E = i.reference[S] + i.reference[p] - m[p] - i.floating[S]
          , C = m[p] - i.reference[p]
          , b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let k = b ? b[v] : 0;
        (!k || !await (s.isElement == null ? void 0 : s.isElement(b))) && (k = a.floating[v] || i.floating[S]);
        const j = E / 2 - C / 2
          , A = k / 2 - y[S] / 2 - 1
          , M = $n(f[g], A)
          , F = $n(f[h], A)
          , I = M
          , K = k - y[S] - F
          , L = k / 2 - y[S] / 2 + j
          , Y = iu(I, L, K)
          , $ = !l.arrow && fo(o) != null && L !== Y && i.reference[S] / 2 - (L < I ? M : F) - y[S] / 2 < 0
          , V = $ ? L < I ? L - I : L - K : 0;
        return {
            [p]: m[p] + V,
            data: {
                [p]: Y,
                centerOffset: L - Y - V,
                ...$ && {
                    alignmentOffset: V
                }
            },
            reset: $
        }
    }
})
  , hw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: d=!0, crossAxis: f=!0, fallbackPlacements: m, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: S="none", flipAlignment: y=!0, ...w} = en(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const g = tn(o)
              , h = Lt(a)
              , v = tn(a) === a
              , E = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , C = m || (v || !y ? [Fs(a)] : sw(a))
              , b = S !== "none";
            !m && b && C.push(...cw(a, y, S, E));
            const k = [a, ...C]
              , j = await si(t, w)
              , A = [];
            let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (d && A.push(j[g]),
            f) {
                const L = iw(o, s, E);
                A.push(j[L[0]], j[L[1]])
            }
            if (M = [...M, {
                placement: o,
                overflows: A
            }],
            !A.every(L => L <= 0)) {
                var F, I;
                const L = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1
                  , Y = k[L];
                if (Y && (!(f === "alignment" ? h !== Lt(Y) : !1) || M.every(N => N.overflows[0] > 0 && Lt(N.placement) === h)))
                    return {
                        data: {
                            index: L,
                            overflows: M
                        },
                        reset: {
                            placement: Y
                        }
                    };
                let $ = (I = M.filter(V => V.overflows[0] <= 0).sort( (V, N) => V.overflows[1] - N.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!$)
                    switch (p) {
                    case "bestFit":
                        {
                            var K;
                            const V = (K = M.filter(N => {
                                if (b) {
                                    const T = Lt(N.placement);
                                    return T === h || T === "y"
                                }
                                return !0
                            }
                            ).map(N => [N.placement, N.overflows.filter(T => T > 0).reduce( (T, D) => T + D, 0)]).sort( (N, T) => N[1] - T[1])[0]) == null ? void 0 : K[0];
                            V && ($ = V);
                            break
                        }
                    case "initialPlacement":
                        $ = a;
                        break
                    }
                if (o !== $)
                    return {
                        reset: {
                            placement: $
                        }
                    }
            }
            return {}
        }
    }
};
function cf(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function df(e) {
    return tw.some(t => e[t] >= 0)
}
const mw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = en(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await si(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = cf(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: df(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await si(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = cf(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: df(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , qm = new Set(["left", "top"]);
async function gw(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = tn(n)
      , a = fo(n)
      , l = Lt(n) === "y"
      , u = qm.has(s) ? -1 : 1
      , d = i && l ? -1 : 1
      , f = en(t, e);
    let {mainAxis: m, crossAxis: p, alignmentAxis: S} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return a && typeof S == "number" && (p = a === "end" ? S * -1 : S),
    l ? {
        x: p * d,
        y: m * u
    } : {
        x: m * u,
        y: p * d
    }
}
const vw = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: a} = t
              , l = await gw(t, e);
            return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: s
                }
            }
        }
    }
}
  , yw = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: a={
                fn: w => {
                    let {x: g, y: h} = w;
                    return {
                        x: g,
                        y: h
                    }
                }
            }, ...l} = en(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = await si(t, l)
              , f = Lt(tn(o))
              , m = mc(f);
            let p = u[m]
              , S = u[f];
            if (i) {
                const w = m === "y" ? "top" : "left"
                  , g = m === "y" ? "bottom" : "right"
                  , h = p + d[w]
                  , v = p - d[g];
                p = iu(h, p, v)
            }
            if (s) {
                const w = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , h = S + d[w]
                  , v = S - d[g];
                S = iu(h, S, v)
            }
            const y = a.fn({
                ...t,
                [m]: p,
                [f]: S
            });
            return {
                ...y,
                data: {
                    x: y.x - n,
                    y: y.y - r,
                    enabled: {
                        [m]: i,
                        [f]: s
                    }
                }
            }
        }
    }
}
  , xw = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = en(e, t)
              , d = {
                x: n,
                y: r
            }
              , f = Lt(o)
              , m = mc(f);
            let p = d[m]
              , S = d[f];
            const y = en(a, t)
              , w = typeof y == "number" ? {
                mainAxis: y,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...y
            };
            if (l) {
                const v = m === "y" ? "height" : "width"
                  , E = i.reference[m] - i.floating[v] + w.mainAxis
                  , C = i.reference[m] + i.reference[v] - w.mainAxis;
                p < E ? p = E : p > C && (p = C)
            }
            if (u) {
                var g, h;
                const v = m === "y" ? "width" : "height"
                  , E = qm.has(tn(o))
                  , C = i.reference[f] - i.floating[v] + (E && ((g = s.offset) == null ? void 0 : g[f]) || 0) + (E ? 0 : w.crossAxis)
                  , b = i.reference[f] + i.reference[v] + (E ? 0 : ((h = s.offset) == null ? void 0 : h[f]) || 0) - (E ? w.crossAxis : 0);
                S < C ? S = C : S > b && (S = b)
            }
            return {
                [m]: p,
                [f]: S
            }
        }
    }
}
  , ww = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: a} = t
              , {apply: l= () => {}
            , ...u} = en(e, t)
              , d = await si(t, u)
              , f = tn(o)
              , m = fo(o)
              , p = Lt(o) === "y"
              , {width: S, height: y} = i.floating;
            let w, g;
            f === "top" || f === "bottom" ? (w = f,
            g = m === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = f,
            w = m === "end" ? "top" : "bottom");
            const h = y - d.top - d.bottom
              , v = S - d.left - d.right
              , E = $n(y - d[w], h)
              , C = $n(S - d[g], v)
              , b = !t.middlewareData.shift;
            let k = E
              , j = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (j = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = h),
            b && !m) {
                const M = Ye(d.left, 0)
                  , F = Ye(d.right, 0)
                  , I = Ye(d.top, 0)
                  , K = Ye(d.bottom, 0);
                p ? j = S - 2 * (M !== 0 || F !== 0 ? M + F : Ye(d.left, d.right)) : k = y - 2 * (I !== 0 || K !== 0 ? I + K : Ye(d.top, d.bottom))
            }
            await l({
                ...t,
                availableWidth: j,
                availableHeight: k
            });
            const A = await s.getDimensions(a.floating);
            return S !== A.width || y !== A.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function da() {
    return typeof window < "u"
}
function po(e) {
    return Zm(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Ze(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function $t(e) {
    var t;
    return (t = (Zm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Zm(e) {
    return da() ? e instanceof Node || e instanceof Ze(e).Node : !1
}
function Pt(e) {
    return da() ? e instanceof Element || e instanceof Ze(e).Element : !1
}
function zt(e) {
    return da() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1
}
function ff(e) {
    return !da() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot
}
const Sw = new Set(["inline", "contents"]);
function Ei(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = Nt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Sw.has(o)
}
const Ew = new Set(["table", "td", "th"]);
function Cw(e) {
    return Ew.has(po(e))
}
const bw = [":popover-open", ":modal"];
function fa(e) {
    return bw.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const kw = ["transform", "translate", "scale", "rotate", "perspective"]
  , Pw = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , Nw = ["paint", "layout", "strict", "content"];
function yc(e) {
    const t = xc()
      , n = Pt(e) ? Nt(e) : e;
    return kw.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Pw.some(r => (n.willChange || "").includes(r)) || Nw.some(r => (n.contain || "").includes(r))
}
function Tw(e) {
    let t = Bn(e);
    for (; zt(t) && !io(t); ) {
        if (yc(t))
            return t;
        if (fa(t))
            return null;
        t = Bn(t)
    }
    return null
}
function xc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const jw = new Set(["html", "body", "#document"]);
function io(e) {
    return jw.has(po(e))
}
function Nt(e) {
    return Ze(e).getComputedStyle(e)
}
function pa(e) {
    return Pt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Bn(e) {
    if (po(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || ff(e) && e.host || $t(e);
    return ff(t) ? t.host : t
}
function Jm(e) {
    const t = Bn(e);
    return io(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : zt(t) && Ei(t) ? t : Jm(t)
}
function ai(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Jm(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = Ze(o);
    if (i) {
        const a = au(s);
        return t.concat(s, s.visualViewport || [], Ei(o) ? o : [], a && n ? ai(a) : [])
    }
    return t.concat(o, ai(o, [], n))
}
function au(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function eg(e) {
    const t = Nt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = zt(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , a = zs(n) !== i || zs(r) !== s;
    return a && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: a
    }
}
function wc(e) {
    return Pt(e) ? e : e.contextElement
}
function Vr(e) {
    const t = wc(e);
    if (!zt(t))
        return It(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = eg(t);
    let s = (i ? zs(n.width) : n.width) / r
      , a = (i ? zs(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: s,
        y: a
    }
}
const Rw = It(0);
function tg(e) {
    const t = Ze(e);
    return !xc() || !t.visualViewport ? Rw : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Ow(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Ze(e) ? !1 : t
}
function pr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = wc(e);
    let s = It(1);
    t && (r ? Pt(r) && (s = Vr(r)) : s = Vr(e));
    const a = Ow(i, n, r) ? tg(i) : It(0);
    let l = (o.left + a.x) / s.x
      , u = (o.top + a.y) / s.y
      , d = o.width / s.x
      , f = o.height / s.y;
    if (i) {
        const m = Ze(i)
          , p = r && Pt(r) ? Ze(r) : r;
        let S = m
          , y = au(S);
        for (; y && r && p !== S; ) {
            const w = Vr(y)
              , g = y.getBoundingClientRect()
              , h = Nt(y)
              , v = g.left + (y.clientLeft + parseFloat(h.paddingLeft)) * w.x
              , E = g.top + (y.clientTop + parseFloat(h.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            d *= w.x,
            f *= w.y,
            l += v,
            u += E,
            S = Ze(y),
            y = au(S)
        }
    }
    return $s({
        width: d,
        height: f,
        x: l,
        y: u
    })
}
function Sc(e, t) {
    const n = pa(e).scrollLeft;
    return t ? t.left + n : pr($t(e)).left + n
}
function ng(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : Sc(e, r))
      , i = r.top + t.scrollTop;
    return {
        x: o,
        y: i
    }
}
function Mw(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = $t(r)
      , a = t ? fa(t.floating) : !1;
    if (r === s || a && i)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = It(1);
    const d = It(0)
      , f = zt(r);
    if ((f || !f && !i) && ((po(r) !== "body" || Ei(s)) && (l = pa(r)),
    zt(r))) {
        const p = pr(r);
        u = Vr(r),
        d.x = p.x + r.clientLeft,
        d.y = p.y + r.clientTop
    }
    const m = s && !f && !i ? ng(s, l, !0) : It(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + d.x + m.x,
        y: n.y * u.y - l.scrollTop * u.y + d.y + m.y
    }
}
function Aw(e) {
    return Array.from(e.getClientRects())
}
function Lw(e) {
    const t = $t(e)
      , n = pa(e)
      , r = e.ownerDocument.body
      , o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Sc(e);
    const a = -n.scrollTop;
    return Nt(r).direction === "rtl" && (s += Ye(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: a
    }
}
function Dw(e, t) {
    const n = Ze(e)
      , r = $t(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , a = 0
      , l = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const u = xc();
        (!u || u && t === "fixed") && (a = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: a,
        y: l
    }
}
const _w = new Set(["absolute", "fixed"]);
function Iw(e, t) {
    const n = pr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = zt(e) ? Vr(e) : It(1)
      , s = e.clientWidth * i.x
      , a = e.clientHeight * i.y
      , l = o * i.x
      , u = r * i.y;
    return {
        width: s,
        height: a,
        x: l,
        y: u
    }
}
function pf(e, t, n) {
    let r;
    if (t === "viewport")
        r = Dw(e, n);
    else if (t === "document")
        r = Lw($t(e));
    else if (Pt(t))
        r = Iw(t, n);
    else {
        const o = tg(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return $s(r)
}
function rg(e, t) {
    const n = Bn(e);
    return n === t || !Pt(n) || io(n) ? !1 : Nt(n).position === "fixed" || rg(n, t)
}
function zw(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = ai(e, [], !1).filter(a => Pt(a) && po(a) !== "body")
      , o = null;
    const i = Nt(e).position === "fixed";
    let s = i ? Bn(e) : e;
    for (; Pt(s) && !io(s); ) {
        const a = Nt(s)
          , l = yc(s);
        !l && a.position === "fixed" && (o = null),
        (i ? !l && !o : !l && a.position === "static" && !!o && _w.has(o.position) || Ei(s) && !l && rg(e, s)) ? r = r.filter(d => d !== s) : o = a,
        s = Bn(s)
    }
    return t.set(e, r),
    r
}
function Fw(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? fa(t) ? [] : zw(t, this._c) : [].concat(n), r]
      , a = s[0]
      , l = s.reduce( (u, d) => {
        const f = pf(t, d, o);
        return u.top = Ye(f.top, u.top),
        u.right = $n(f.right, u.right),
        u.bottom = $n(f.bottom, u.bottom),
        u.left = Ye(f.left, u.left),
        u
    }
    , pf(t, a, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function $w(e) {
    const {width: t, height: n} = eg(e);
    return {
        width: t,
        height: n
    }
}
function Bw(e, t, n) {
    const r = zt(t)
      , o = $t(t)
      , i = n === "fixed"
      , s = pr(e, !0, i, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = It(0);
    function u() {
        l.x = Sc(o)
    }
    if (r || !r && !i)
        if ((po(t) !== "body" || Ei(o)) && (a = pa(t)),
        r) {
            const p = pr(t, !0, i, t);
            l.x = p.x + t.clientLeft,
            l.y = p.y + t.clientTop
        } else
            o && u();
    i && !r && o && u();
    const d = o && !r && !i ? ng(o, a) : It(0)
      , f = s.left + a.scrollLeft - l.x - d.x
      , m = s.top + a.scrollTop - l.y - d.y;
    return {
        x: f,
        y: m,
        width: s.width,
        height: s.height
    }
}
function el(e) {
    return Nt(e).position === "static"
}
function hf(e, t) {
    if (!zt(e) || Nt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return $t(e) === n && (n = n.ownerDocument.body),
    n
}
function og(e, t) {
    const n = Ze(e);
    if (fa(e))
        return n;
    if (!zt(e)) {
        let o = Bn(e);
        for (; o && !io(o); ) {
            if (Pt(o) && !el(o))
                return o;
            o = Bn(o)
        }
        return n
    }
    let r = hf(e, t);
    for (; r && Cw(r) && el(r); )
        r = hf(r, t);
    return r && io(r) && el(r) && !yc(r) ? n : r || Tw(e) || n
}
const Uw = async function(e) {
    const t = this.getOffsetParent || og
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: Bw(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function Vw(e) {
    return Nt(e).direction === "rtl"
}
const Hw = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Mw,
    getDocumentElement: $t,
    getClippingRect: Fw,
    getOffsetParent: og,
    getElementRects: Uw,
    getClientRects: Aw,
    getDimensions: $w,
    getScale: Vr,
    isElement: Pt,
    isRTL: Vw
};
function ig(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function Ww(e, t) {
    let n = null, r;
    const o = $t(e);
    function i() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function s(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        i();
        const u = e.getBoundingClientRect()
          , {left: d, top: f, width: m, height: p} = u;
        if (a || t(),
        !m || !p)
            return;
        const S = Qi(f)
          , y = Qi(o.clientWidth - (d + m))
          , w = Qi(o.clientHeight - (f + p))
          , g = Qi(d)
          , v = {
            rootMargin: -S + "px " + -y + "px " + -w + "px " + -g + "px",
            threshold: Ye(0, $n(1, l)) || 1
        };
        let E = !0;
        function C(b) {
            const k = b[0].intersectionRatio;
            if (k !== l) {
                if (!E)
                    return s();
                k ? s(!1, k) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            k === 1 && !ig(u, e.getBoundingClientRect()) && s(),
            E = !1
        }
        try {
            n = new IntersectionObserver(C,{
                ...v,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C,v)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function Kw(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = wc(e)
      , d = o || i ? [...u ? ai(u) : [], ...ai(t)] : [];
    d.forEach(g => {
        o && g.addEventListener("scroll", n, {
            passive: !0
        }),
        i && g.addEventListener("resize", n)
    }
    );
    const f = u && a ? Ww(u, n) : null;
    let m = -1
      , p = null;
    s && (p = new ResizeObserver(g => {
        let[h] = g;
        h && h.target === u && p && (p.unobserve(t),
        cancelAnimationFrame(m),
        m = requestAnimationFrame( () => {
            var v;
            (v = p) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && p.observe(u),
    p.observe(t));
    let S, y = l ? pr(e) : null;
    l && w();
    function w() {
        const g = pr(e);
        y && !ig(y, g) && n(),
        y = g,
        S = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var g;
        d.forEach(h => {
            o && h.removeEventListener("scroll", n),
            i && h.removeEventListener("resize", n)
        }
        ),
        f == null || f(),
        (g = p) == null || g.disconnect(),
        p = null,
        l && cancelAnimationFrame(S)
    }
}
const Qw = vw
  , Gw = yw
  , Yw = hw
  , Xw = ww
  , qw = mw
  , mf = pw
  , Zw = xw
  , Jw = (e, t, n) => {
    const r = new Map
      , o = {
        platform: Hw,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return fw(e, t, {
        ...o,
        platform: i
    })
}
;
var e2 = typeof document < "u"
  , t2 = function() {}
  , us = e2 ? x.useLayoutEffect : t2;
function Bs(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Bs(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Bs(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function sg(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function gf(e, t) {
    const n = sg(e);
    return Math.round(t * n) / n
}
function tl(e) {
    const t = x.useRef(e);
    return us( () => {
        t.current = e
    }
    ),
    t
}
function n2(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [d,f] = x.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [m,p] = x.useState(r);
    Bs(m, r) || p(r);
    const [S,y] = x.useState(null)
      , [w,g] = x.useState(null)
      , h = x.useCallback(N => {
        N !== b.current && (b.current = N,
        y(N))
    }
    , [])
      , v = x.useCallback(N => {
        N !== k.current && (k.current = N,
        g(N))
    }
    , [])
      , E = i || S
      , C = s || w
      , b = x.useRef(null)
      , k = x.useRef(null)
      , j = x.useRef(d)
      , A = l != null
      , M = tl(l)
      , F = tl(o)
      , I = tl(u)
      , K = x.useCallback( () => {
        if (!b.current || !k.current)
            return;
        const N = {
            placement: t,
            strategy: n,
            middleware: m
        };
        F.current && (N.platform = F.current),
        Jw(b.current, k.current, N).then(T => {
            const D = {
                ...T,
                isPositioned: I.current !== !1
            };
            L.current && !Bs(j.current, D) && (j.current = D,
            wi.flushSync( () => {
                f(D)
            }
            ))
        }
        )
    }
    , [m, t, n, F, I]);
    us( () => {
        u === !1 && j.current.isPositioned && (j.current.isPositioned = !1,
        f(N => ({
            ...N,
            isPositioned: !1
        })))
    }
    , [u]);
    const L = x.useRef(!1);
    us( () => (L.current = !0,
    () => {
        L.current = !1
    }
    ), []),
    us( () => {
        if (E && (b.current = E),
        C && (k.current = C),
        E && C) {
            if (M.current)
                return M.current(E, C, K);
            K()
        }
    }
    , [E, C, K, M, A]);
    const Y = x.useMemo( () => ({
        reference: b,
        floating: k,
        setReference: h,
        setFloating: v
    }), [h, v])
      , $ = x.useMemo( () => ({
        reference: E,
        floating: C
    }), [E, C])
      , V = x.useMemo( () => {
        const N = {
            position: n,
            left: 0,
            top: 0
        };
        if (!$.floating)
            return N;
        const T = gf($.floating, d.x)
          , D = gf($.floating, d.y);
        return a ? {
            ...N,
            transform: "translate(" + T + "px, " + D + "px)",
            ...sg($.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: T,
            top: D
        }
    }
    , [n, a, $.floating, d.x, d.y]);
    return x.useMemo( () => ({
        ...d,
        update: K,
        refs: Y,
        elements: $,
        floatingStyles: V
    }), [d, K, Y, $, V])
}
const r2 = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? mf({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? mf({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , o2 = (e, t) => ({
    ...Qw(e),
    options: [e, t]
})
  , i2 = (e, t) => ({
    ...Gw(e),
    options: [e, t]
})
  , s2 = (e, t) => ({
    ...Zw(e),
    options: [e, t]
})
  , a2 = (e, t) => ({
    ...Yw(e),
    options: [e, t]
})
  , l2 = (e, t) => ({
    ...Xw(e),
    options: [e, t]
})
  , u2 = (e, t) => ({
    ...qw(e),
    options: [e, t]
})
  , c2 = (e, t) => ({
    ...r2(e),
    options: [e, t]
});
var d2 = "Arrow"
  , ag = x.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return c.jsx(Qe.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : c.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
ag.displayName = d2;
var f2 = ag;
function p2(e) {
    const [t,n] = x.useState(void 0);
    return Fn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, a;
                if ("borderBoxSize"in i) {
                    const l = i.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    s = u.inlineSize,
                    a = u.blockSize
                } else
                    s = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: s,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var lg = "Popper"
  , [ug,cg] = la(lg)
  , [jE,dg] = ug(lg)
  , fg = "PopperAnchor"
  , pg = x.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = dg(fg, n)
      , s = x.useRef(null)
      , a = kt(t, s);
    return x.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : c.jsx(Qe.div, {
        ...o,
        ref: a
    })
}
);
pg.displayName = fg;
var Ec = "PopperContent"
  , [h2,m2] = ug(Ec)
  , hg = x.forwardRef( (e, t) => {
    var J, gr, on, Kn, sn, vr;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: d=0, sticky: f="partial", hideWhenDetached: m=!1, updatePositionStrategy: p="optimized", onPlaced: S, ...y} = e
      , w = dg(Ec, n)
      , [g,h] = x.useState(null)
      , v = kt(t, an => h(an))
      , [E,C] = x.useState(null)
      , b = p2(E)
      , k = (b == null ? void 0 : b.width) ?? 0
      , j = (b == null ? void 0 : b.height) ?? 0
      , A = r + (i !== "center" ? "-" + i : "")
      , M = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , F = Array.isArray(u) ? u : [u]
      , I = F.length > 0
      , K = {
        padding: M,
        boundary: F.filter(v2),
        altBoundary: I
    }
      , {refs: L, floatingStyles: Y, placement: $, isPositioned: V, middlewareData: N} = n2({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...an) => Kw(...an, {
            animationFrame: p === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [o2({
            mainAxis: o + j,
            alignmentAxis: s
        }), l && i2({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? s2() : void 0,
            ...K
        }), l && a2({
            ...K
        }), l2({
            ...K,
            apply: ({elements: an, rects: Ci, availableWidth: xa, availableHeight: bi}) => {
                const {width: wa, height: vo} = Ci.reference
                  , yr = an.floating.style;
                yr.setProperty("--radix-popper-available-width", `${xa}px`),
                yr.setProperty("--radix-popper-available-height", `${bi}px`),
                yr.setProperty("--radix-popper-anchor-width", `${wa}px`),
                yr.setProperty("--radix-popper-anchor-height", `${vo}px`)
            }
        }), E && c2({
            element: E,
            padding: a
        }), y2({
            arrowWidth: k,
            arrowHeight: j
        }), m && u2({
            strategy: "referenceHidden",
            ...K
        })]
    })
      , [T,D] = vg($)
      , H = zn(S);
    Fn( () => {
        V && (H == null || H())
    }
    , [V, H]);
    const z = (J = N.arrow) == null ? void 0 : J.x
      , Q = (gr = N.arrow) == null ? void 0 : gr.y
      , X = ((on = N.arrow) == null ? void 0 : on.centerOffset) !== 0
      , [ge,Pe] = x.useState();
    return Fn( () => {
        g && Pe(window.getComputedStyle(g).zIndex)
    }
    , [g]),
    c.jsx("div", {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Y,
            transform: V ? Y.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ge,
            "--radix-popper-transform-origin": [(Kn = N.transformOrigin) == null ? void 0 : Kn.x, (sn = N.transformOrigin) == null ? void 0 : sn.y].join(" "),
            ...((vr = N.hide) == null ? void 0 : vr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: c.jsx(h2, {
            scope: n,
            placedSide: T,
            onArrowChange: C,
            arrowX: z,
            arrowY: Q,
            shouldHideArrow: X,
            children: c.jsx(Qe.div, {
                "data-side": T,
                "data-align": D,
                ...y,
                ref: v,
                style: {
                    ...y.style,
                    animation: V ? void 0 : "none"
                }
            })
        })
    })
}
);
hg.displayName = Ec;
var mg = "PopperArrow"
  , g2 = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , gg = x.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = m2(mg, r)
      , s = g2[i.placedSide];
    return c.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: c.jsx(f2, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
gg.displayName = mg;
function v2(e) {
    return e !== null
}
var y2 = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, g, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , a = s ? 0 : e.arrowWidth
          , l = s ? 0 : e.arrowHeight
          , [u,d] = vg(n)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , m = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + a / 2
          , p = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
        let S = ""
          , y = "";
        return u === "bottom" ? (S = s ? f : `${m}px`,
        y = `${-l}px`) : u === "top" ? (S = s ? f : `${m}px`,
        y = `${r.floating.height + l}px`) : u === "right" ? (S = `${-l}px`,
        y = s ? f : `${p}px`) : u === "left" && (S = `${r.floating.width + l}px`,
        y = s ? f : `${p}px`),
        {
            data: {
                x: S,
                y
            }
        }
    }
});
function vg(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var x2 = pg
  , w2 = hg
  , S2 = gg
  , [ha,RE] = la("Tooltip", [cg])
  , Cc = cg()
  , yg = "TooltipProvider"
  , E2 = 700
  , vf = "tooltip.open"
  , [C2,xg] = ha(yg)
  , wg = e => {
    const {__scopeTooltip: t, delayDuration: n=E2, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , s = x.useRef(!0)
      , a = x.useRef(!1)
      , l = x.useRef(0);
    return x.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    c.jsx(C2, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: x.useCallback( () => {
            window.clearTimeout(l.current),
            s.current = !1
        }
        , []),
        onClose: x.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => s.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: x.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
wg.displayName = yg;
var Sg = "Tooltip"
  , [OE,ma] = ha(Sg)
  , lu = "TooltipTrigger"
  , b2 = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = ma(lu, n)
      , i = xg(lu, n)
      , s = Cc(n)
      , a = x.useRef(null)
      , l = kt(t, a, o.onTriggerChange)
      , u = x.useRef(!1)
      , d = x.useRef(!1)
      , f = x.useCallback( () => u.current = !1, []);
    return x.useEffect( () => () => document.removeEventListener("pointerup", f), [f]),
    c.jsx(x2, {
        asChild: !0,
        ...s,
        children: c.jsx(Qe.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: xe(e.onPointerMove, m => {
                m.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: xe(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: xe(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", f, {
                    once: !0
                })
            }
            ),
            onFocus: xe(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: xe(e.onBlur, o.onClose),
            onClick: xe(e.onClick, o.onClose)
        })
    })
}
);
b2.displayName = lu;
var k2 = "TooltipPortal"
  , [ME,P2] = ha(k2, {
    forceMount: void 0
})
  , so = "TooltipContent"
  , Eg = x.forwardRef( (e, t) => {
    const n = P2(so, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = ma(so, e.__scopeTooltip);
    return c.jsx(uc, {
        present: r || s.open,
        children: s.disableHoverableContent ? c.jsx(Cg, {
            side: o,
            ...i,
            ref: t
        }) : c.jsx(N2, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , N2 = x.forwardRef( (e, t) => {
    const n = ma(so, e.__scopeTooltip)
      , r = xg(so, e.__scopeTooltip)
      , o = x.useRef(null)
      , i = kt(t, o)
      , [s,a] = x.useState(null)
      , {trigger: l, onClose: u} = n
      , d = o.current
      , {onPointerInTransitChange: f} = r
      , m = x.useCallback( () => {
        a(null),
        f(!1)
    }
    , [f])
      , p = x.useCallback( (S, y) => {
        const w = S.currentTarget
          , g = {
            x: S.clientX,
            y: S.clientY
        }
          , h = M2(g, w.getBoundingClientRect())
          , v = A2(g, h)
          , E = L2(y.getBoundingClientRect())
          , C = _2([...v, ...E]);
        a(C),
        f(!0)
    }
    , [f]);
    return x.useEffect( () => () => m(), [m]),
    x.useEffect( () => {
        if (l && d) {
            const S = w => p(w, d)
              , y = w => p(w, l);
            return l.addEventListener("pointerleave", S),
            d.addEventListener("pointerleave", y),
            () => {
                l.removeEventListener("pointerleave", S),
                d.removeEventListener("pointerleave", y)
            }
        }
    }
    , [l, d, p, m]),
    x.useEffect( () => {
        if (s) {
            const S = y => {
                const w = y.target
                  , g = {
                    x: y.clientX,
                    y: y.clientY
                }
                  , h = (l == null ? void 0 : l.contains(w)) || (d == null ? void 0 : d.contains(w))
                  , v = !D2(g, s);
                h ? m() : v && (m(),
                u())
            }
            ;
            return document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
        }
    }
    , [l, d, s, u, m]),
    c.jsx(Cg, {
        ...e,
        ref: i
    })
}
)
  , [T2,j2] = ha(Sg, {
    isInside: !1
})
  , R2 = zy("TooltipContent")
  , Cg = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...a} = e
      , l = ma(so, n)
      , u = Cc(n)
      , {onClose: d} = l;
    return x.useEffect( () => (document.addEventListener(vf, d),
    () => document.removeEventListener(vf, d)), [d]),
    x.useEffect( () => {
        if (l.trigger) {
            const f = m => {
                const p = m.target;
                p != null && p.contains(l.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", f, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", f, {
                capture: !0
            })
        }
    }
    , [l.trigger, d]),
    c.jsx(lc, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: d,
        children: c.jsxs(w2, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [c.jsx(R2, {
                children: r
            }), c.jsx(T2, {
                scope: n,
                isInside: !0,
                children: c.jsx(ux, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
Eg.displayName = so;
var bg = "TooltipArrow"
  , O2 = x.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Cc(n);
    return j2(bg, n).isInside ? null : c.jsx(S2, {
        ...o,
        ...r,
        ref: t
    })
}
);
O2.displayName = bg;
function M2(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function A2(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function L2(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function D2(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const a = t[i]
          , l = t[s]
          , u = a.x
          , d = a.y
          , f = l.x
          , m = l.y;
        d > r != m > r && n < (f - u) * (r - d) / (m - d) + u && (o = !o)
    }
    return o
}
function _2(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    I2(t)
}
function I2(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var z2 = wg
  , kg = Eg;
const F2 = z2
  , $2 = x.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => c.jsx(kg, {
    ref: r,
    sideOffset: t,
    className: Ft("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
$2.displayName = kg.displayName;
var ga = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , va = typeof window > "u" || "Deno"in globalThis;
function gt() {}
function B2(e, t) {
    return typeof e == "function" ? e(t) : e
}
function U2(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function V2(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function uu(e, t) {
    return typeof e == "function" ? e(t) : e
}
function H2(e, t) {
    return typeof e == "function" ? e(t) : e
}
function yf(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: a} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== bc(s, t.options))
                return !1
        } else if (!ui(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || i && !i(t))
}
function xf(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (li(t.options.mutationKey) !== li(i))
                return !1
        } else if (!ui(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function bc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || li)(e)
}
function li(e) {
    return JSON.stringify(e, (t, n) => cu(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function ui(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => ui(e[n], t[n])) : !1
}
function Pg(e, t) {
    if (e === t)
        return e;
    const n = wf(e) && wf(t);
    if (n || cu(e) && cu(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , s = i.length
          , a = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let d = 0; d < s; d++) {
            const f = n ? d : i[d];
            (!n && l.has(f) || n) && e[f] === void 0 && t[f] === void 0 ? (a[f] = void 0,
            u++) : (a[f] = Pg(e[f], t[f]),
            a[f] === e[f] && e[f] !== void 0 && u++)
        }
        return o === s && u === o ? e : a
    }
    return t
}
function wf(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function cu(e) {
    if (!Sf(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Sf(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Sf(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function W2(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function K2(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Pg(e, t) : t
}
function Q2(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function G2(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var kc = Symbol();
function Ng(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === kc ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var er, xn, Hr, Af, Y2 = (Af = class extends ga {
    constructor() {
        super();
        Z(this, er);
        Z(this, xn);
        Z(this, Hr);
        U(this, Hr, t => {
            if (!va && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, xn) || this.setEventListener(P(this, Hr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, xn)) == null || t.call(this),
        U(this, xn, void 0))
    }
    setEventListener(t) {
        var n;
        U(this, Hr, t),
        (n = P(this, xn)) == null || n.call(this),
        U(this, xn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        P(this, er) !== t && (U(this, er, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof P(this, er) == "boolean" ? P(this, er) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
er = new WeakMap,
xn = new WeakMap,
Hr = new WeakMap,
Af), Tg = new Y2, Wr, wn, Kr, Lf, X2 = (Lf = class extends ga {
    constructor() {
        super();
        Z(this, Wr, !0);
        Z(this, wn);
        Z(this, Kr);
        U(this, Kr, t => {
            if (!va && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, wn) || this.setEventListener(P(this, Kr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, wn)) == null || t.call(this),
        U(this, wn, void 0))
    }
    setEventListener(t) {
        var n;
        U(this, Kr, t),
        (n = P(this, wn)) == null || n.call(this),
        U(this, wn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        P(this, Wr) !== t && (U(this, Wr, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return P(this, Wr)
    }
}
,
Wr = new WeakMap,
wn = new WeakMap,
Kr = new WeakMap,
Lf), Us = new X2;
function q2() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function Z2(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function jg(e) {
    return (e ?? "online") === "online" ? Us.isOnline() : !0
}
var Rg = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function nl(e) {
    return e instanceof Rg
}
function Og(e) {
    let t = !1, n = 0, r = !1, o;
    const i = q2()
      , s = y => {
        var w;
        r || (m(new Rg(y)),
        (w = e.abort) == null || w.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => Tg.isFocused() && (e.networkMode === "always" || Us.isOnline()) && e.canRun()
      , d = () => jg(e.networkMode) && e.canRun()
      , f = y => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, y),
        o == null || o(),
        i.resolve(y))
    }
      , m = y => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, y),
        o == null || o(),
        i.reject(y))
    }
      , p = () => new Promise(y => {
        var w;
        o = g => {
            (r || u()) && y(g)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var y;
        o = void 0,
        r || (y = e.onContinue) == null || y.call(e)
    }
    )
      , S = () => {
        if (r)
            return;
        let y;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            y = w ?? e.fn()
        } catch (g) {
            y = Promise.reject(g)
        }
        Promise.resolve(y).then(f).catch(g => {
            var b;
            if (r)
                return;
            const h = e.retry ?? (va ? 0 : 3)
              , v = e.retryDelay ?? Z2
              , E = typeof v == "function" ? v(n, g) : v
              , C = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, g);
            if (t || !C) {
                m(g);
                return
            }
            n++,
            (b = e.onFail) == null || b.call(e, n, g),
            W2(E).then( () => u() ? void 0 : p()).then( () => {
                t ? m(g) : S()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(),
        i),
        cancelRetry: a,
        continueRetry: l,
        canStart: d,
        start: () => (d() ? S() : p().then(S),
        i)
    }
}
var J2 = e => setTimeout(e, 0);
function eS() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , o = J2;
    const i = a => {
        t ? e.push(a) : o( () => {
            n(a)
        }
        )
    }
      , s = () => {
        const a = e;
        e = [],
        a.length && o( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || s()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            i( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            o = a
        }
    }
}
var _e = eS(), tr, Df, Mg = (Df = class {
    constructor() {
        Z(this, tr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        U2(this.gcTime) && U(this, tr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (va ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        P(this, tr) && (clearTimeout(P(this, tr)),
        U(this, tr, void 0))
    }
}
,
tr = new WeakMap,
Df), Qr, nr, rt, rr, Re, pi, or, vt, Ut, _f, tS = (_f = class extends Mg {
    constructor(t) {
        super();
        Z(this, vt);
        Z(this, Qr);
        Z(this, nr);
        Z(this, rt);
        Z(this, rr);
        Z(this, Re);
        Z(this, pi);
        Z(this, or);
        U(this, or, !1),
        U(this, pi, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        U(this, rr, t.client),
        U(this, rt, P(this, rr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        U(this, Qr, rS(this.options)),
        this.state = t.state ?? P(this, Qr),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = P(this, Re)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...P(this, pi),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && P(this, rt).remove(this)
    }
    setData(t, n) {
        const r = K2(this.state.data, t, this.options);
        return Ne(this, vt, Ut).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Ne(this, vt, Ut).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = P(this, Re)) == null ? void 0 : r.promise;
        return (o = P(this, Re)) == null || o.cancel(t),
        n ? n.then(gt).catch(gt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(P(this, Qr))
    }
    isActive() {
        return this.observers.some(t => H2(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === kc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => uu(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !V2(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, Re)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, Re)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        P(this, rt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (P(this, Re) && (P(this, or) ? P(this, Re).cancel({
            revert: !0
        }) : P(this, Re).cancelRetry()),
        this.scheduleGc()),
        P(this, rt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ne(this, vt, Ut).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, d, f;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (P(this, Re))
                return P(this, Re).continueRetry(),
                P(this, Re).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const m = this.observers.find(p => p.options.queryFn);
            m && this.setOptions(m.options)
        }
        const r = new AbortController
          , o = m => {
            Object.defineProperty(m, "signal", {
                enumerable: !0,
                get: () => (U(this, or, !0),
                r.signal)
            })
        }
          , i = () => {
            const m = Ng(this.options, n)
              , S = ( () => {
                const y = {
                    client: P(this, rr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(y),
                y
            }
            )();
            return U(this, or, !1),
            this.options.persister ? this.options.persister(m, S, this) : m(S)
        }
          , a = ( () => {
            const m = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: P(this, rr),
                state: this.state,
                fetchFn: i
            };
            return o(m),
            m
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        U(this, nr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = a.fetchOptions) == null ? void 0 : d.meta)) && Ne(this, vt, Ut).call(this, {
            type: "fetch",
            meta: (f = a.fetchOptions) == null ? void 0 : f.meta
        });
        const l = m => {
            var p, S, y, w;
            nl(m) && m.silent || Ne(this, vt, Ut).call(this, {
                type: "error",
                error: m
            }),
            nl(m) || ((S = (p = P(this, rt).config).onError) == null || S.call(p, m, this),
            (w = (y = P(this, rt).config).onSettled) == null || w.call(y, this.state.data, m, this)),
            this.scheduleGc()
        }
        ;
        return U(this, Re, Og({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: m => {
                var p, S, y, w;
                if (m === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(m)
                } catch (g) {
                    l(g);
                    return
                }
                (S = (p = P(this, rt).config).onSuccess) == null || S.call(p, m, this),
                (w = (y = P(this, rt).config).onSettled) == null || w.call(y, m, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (m, p) => {
                Ne(this, vt, Ut).call(this, {
                    type: "failed",
                    failureCount: m,
                    error: p
                })
            }
            ,
            onPause: () => {
                Ne(this, vt, Ut).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ne(this, vt, Ut).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        P(this, Re).start()
    }
}
,
Qr = new WeakMap,
nr = new WeakMap,
rt = new WeakMap,
rr = new WeakMap,
Re = new WeakMap,
pi = new WeakMap,
or = new WeakMap,
vt = new WeakSet,
Ut = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...nS(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return U(this, nr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return nl(o) && o.revert && P(this, nr) ? {
                ...P(this, nr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    _e.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        P(this, rt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
_f);
function nS(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: jg(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function rS(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Rt, If, oS = (If = class extends ga {
    constructor(t={}) {
        super();
        Z(this, Rt);
        this.config = t,
        U(this, Rt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? bc(o, n);
        let s = this.get(i);
        return s || (s = new tS({
            client: t,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(s)),
        s
    }
    add(t) {
        P(this, Rt).has(t.queryHash) || (P(this, Rt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = P(this, Rt).get(t.queryHash);
        n && (t.destroy(),
        n === t && P(this, Rt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return P(this, Rt).get(t)
    }
    getAll() {
        return [...P(this, Rt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => yf(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => yf(t, r)) : n
    }
    notify(t) {
        _e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        _e.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Rt = new WeakMap,
If), Ot, Le, ir, Mt, hn, zf, iS = (zf = class extends Mg {
    constructor(t) {
        super();
        Z(this, Mt);
        Z(this, Ot);
        Z(this, Le);
        Z(this, ir);
        this.mutationId = t.mutationId,
        U(this, Le, t.mutationCache),
        U(this, Ot, []),
        this.state = t.state || sS(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        P(this, Ot).includes(t) || (P(this, Ot).push(t),
        this.clearGcTimeout(),
        P(this, Le).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        U(this, Ot, P(this, Ot).filter(n => n !== t)),
        this.scheduleGc(),
        P(this, Le).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        P(this, Ot).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, Le).remove(this))
    }
    continue() {
        var t;
        return ((t = P(this, ir)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var i, s, a, l, u, d, f, m, p, S, y, w, g, h, v, E, C, b, k, j;
        const n = () => {
            Ne(this, Mt, hn).call(this, {
                type: "continue"
            })
        }
        ;
        U(this, ir, Og({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, M) => {
                Ne(this, Mt, hn).call(this, {
                    type: "failed",
                    failureCount: A,
                    error: M
                })
            }
            ,
            onPause: () => {
                Ne(this, Mt, hn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Le).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !P(this, ir).canStart();
        try {
            if (r)
                n();
            else {
                Ne(this, Mt, hn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((s = (i = P(this, Le).config).onMutate) == null ? void 0 : s.call(i, t, this));
                const M = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                M !== this.state.context && Ne(this, Mt, hn).call(this, {
                    type: "pending",
                    context: M,
                    variables: t,
                    isPaused: o
                })
            }
            const A = await P(this, ir).start();
            return await ((d = (u = P(this, Le).config).onSuccess) == null ? void 0 : d.call(u, A, t, this.state.context, this)),
            await ((m = (f = this.options).onSuccess) == null ? void 0 : m.call(f, A, t, this.state.context)),
            await ((S = (p = P(this, Le).config).onSettled) == null ? void 0 : S.call(p, A, null, this.state.variables, this.state.context, this)),
            await ((w = (y = this.options).onSettled) == null ? void 0 : w.call(y, A, null, t, this.state.context)),
            Ne(this, Mt, hn).call(this, {
                type: "success",
                data: A
            }),
            A
        } catch (A) {
            try {
                throw await ((h = (g = P(this, Le).config).onError) == null ? void 0 : h.call(g, A, t, this.state.context, this)),
                await ((E = (v = this.options).onError) == null ? void 0 : E.call(v, A, t, this.state.context)),
                await ((b = (C = P(this, Le).config).onSettled) == null ? void 0 : b.call(C, void 0, A, this.state.variables, this.state.context, this)),
                await ((j = (k = this.options).onSettled) == null ? void 0 : j.call(k, void 0, A, t, this.state.context)),
                A
            } finally {
                Ne(this, Mt, hn).call(this, {
                    type: "error",
                    error: A
                })
            }
        } finally {
            P(this, Le).runNext(this)
        }
    }
}
,
Ot = new WeakMap,
Le = new WeakMap,
ir = new WeakMap,
Mt = new WeakSet,
hn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    _e.batch( () => {
        P(this, Ot).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        P(this, Le).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
zf);
function sS() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Wt, yt, hi, Ff, aS = (Ff = class extends ga {
    constructor(t={}) {
        super();
        Z(this, Wt);
        Z(this, yt);
        Z(this, hi);
        this.config = t,
        U(this, Wt, new Set),
        U(this, yt, new Map),
        U(this, hi, 0)
    }
    build(t, n, r) {
        const o = new iS({
            mutationCache: this,
            mutationId: ++Pi(this, hi)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        P(this, Wt).add(t);
        const n = Gi(t);
        if (typeof n == "string") {
            const r = P(this, yt).get(n);
            r ? r.push(t) : P(this, yt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (P(this, Wt).delete(t)) {
            const n = Gi(t);
            if (typeof n == "string") {
                const r = P(this, yt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && P(this, yt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = Gi(t);
        if (typeof n == "string") {
            const r = P(this, yt).get(n)
              , o = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = Gi(t);
        if (typeof n == "string") {
            const o = (r = P(this, yt).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        _e.batch( () => {
            P(this, Wt).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            P(this, Wt).clear(),
            P(this, yt).clear()
        }
        )
    }
    getAll() {
        return Array.from(P(this, Wt))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => xf(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => xf(t, n))
    }
    notify(t) {
        _e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return _e.batch( () => Promise.all(t.map(n => n.continue().catch(gt))))
    }
}
,
Wt = new WeakMap,
yt = new WeakMap,
hi = new WeakMap,
Ff);
function Gi(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Ef(e) {
    return {
        onFetch: (t, n) => {
            var d, f, m, p, S;
            const r = t.options
              , o = (m = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : m.direction
              , i = ((p = t.state.data) == null ? void 0 : p.pages) || []
              , s = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let y = !1;
                const w = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? y = !0 : t.signal.addEventListener("abort", () => {
                            y = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , g = Ng(t.options, t.fetchOptions)
                  , h = async (v, E, C) => {
                    if (y)
                        return Promise.reject();
                    if (E == null && v.pages.length)
                        return Promise.resolve(v);
                    const k = ( () => {
                        const F = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: E,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w(F),
                        F
                    }
                    )()
                      , j = await g(k)
                      , {maxPages: A} = t.options
                      , M = C ? G2 : Q2;
                    return {
                        pages: M(v.pages, j, A),
                        pageParams: M(v.pageParams, E, A)
                    }
                }
                ;
                if (o && i.length) {
                    const v = o === "backward"
                      , E = v ? lS : Cf
                      , C = {
                        pages: i,
                        pageParams: s
                    }
                      , b = E(r, C);
                    a = await h(C, b, v)
                } else {
                    const v = e ?? i.length;
                    do {
                        const E = l === 0 ? s[0] ?? r.initialPageParam : Cf(r, a);
                        if (l > 0 && E == null)
                            break;
                        a = await h(a, E),
                        l++
                    } while (l < v)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var y, w;
                return (w = (y = t.options).persister) == null ? void 0 : w.call(y, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Cf(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function lS(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var fe, Sn, En, Gr, Yr, Cn, Xr, qr, $f, uS = ($f = class {
    constructor(e={}) {
        Z(this, fe);
        Z(this, Sn);
        Z(this, En);
        Z(this, Gr);
        Z(this, Yr);
        Z(this, Cn);
        Z(this, Xr);
        Z(this, qr);
        U(this, fe, e.queryCache || new oS),
        U(this, Sn, e.mutationCache || new aS),
        U(this, En, e.defaultOptions || {}),
        U(this, Gr, new Map),
        U(this, Yr, new Map),
        U(this, Cn, 0)
    }
    mount() {
        Pi(this, Cn)._++,
        P(this, Cn) === 1 && (U(this, Xr, Tg.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, fe).onFocus())
        }
        )),
        U(this, qr, Us.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, fe).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Pi(this, Cn)._--,
        P(this, Cn) === 0 && ((e = P(this, Xr)) == null || e.call(this),
        U(this, Xr, void 0),
        (t = P(this, qr)) == null || t.call(this),
        U(this, qr, void 0))
    }
    isFetching(e) {
        return P(this, fe).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return P(this, Sn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, fe).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = P(this, fe).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(uu(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return P(this, fe).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = P(this, fe).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , s = B2(t, i);
        if (s !== void 0)
            return P(this, fe).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return _e.batch( () => P(this, fe).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, fe).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = P(this, fe);
        _e.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = P(this, fe);
        return _e.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = _e.batch( () => P(this, fe).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(gt).catch(gt)
    }
    invalidateQueries(e, t={}) {
        return _e.batch( () => (P(this, fe).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = _e.batch( () => P(this, fe).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(gt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(gt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, fe).build(this, t);
        return n.isStaleByTime(uu(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(gt).catch(gt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Ef(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(gt).catch(gt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Ef(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Us.isOnline() ? P(this, Sn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return P(this, fe)
    }
    getMutationCache() {
        return P(this, Sn)
    }
    getDefaultOptions() {
        return P(this, En)
    }
    setDefaultOptions(e) {
        U(this, En, e)
    }
    setQueryDefaults(e, t) {
        P(this, Gr).set(li(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...P(this, Gr).values()]
          , n = {};
        return t.forEach(r => {
            ui(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        P(this, Yr).set(li(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...P(this, Yr).values()]
          , n = {};
        return t.forEach(r => {
            ui(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...P(this, En).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = bc(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === kc && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...P(this, En).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        P(this, fe).clear(),
        P(this, Sn).clear()
    }
}
,
fe = new WeakMap,
Sn = new WeakMap,
En = new WeakMap,
Gr = new WeakMap,
Yr = new WeakMap,
Cn = new WeakMap,
Xr = new WeakMap,
qr = new WeakMap,
$f), cS = x.createContext(void 0), dS = ({client: e, children: t}) => (x.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
c.jsx(cS.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ci() {
    return ci = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ci.apply(this, arguments)
}
var Pn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Pn || (Pn = {}));
const bf = "popstate";
function fS(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: a} = r.location;
        return du("", {
            pathname: i,
            search: s,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Vs(o)
    }
    return hS(t, n, null, e)
}
function me(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Ag(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function pS() {
    return Math.random().toString(36).substr(2, 8)
}
function kf(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function du(e, t, n, r) {
    return n === void 0 && (n = null),
    ci({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? ho(t) : t, {
        state: n,
        key: t && t.key || r || pS()
    })
}
function Vs(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function ho(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function hS(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , a = Pn.Pop
      , l = null
      , u = d();
    u == null && (u = 0,
    s.replaceState(ci({}, s.state, {
        idx: u
    }), ""));
    function d() {
        return (s.state || {
            idx: null
        }).idx
    }
    function f() {
        a = Pn.Pop;
        let w = d()
          , g = w == null ? null : w - u;
        u = w,
        l && l({
            action: a,
            location: y.location,
            delta: g
        })
    }
    function m(w, g) {
        a = Pn.Push;
        let h = du(y.location, w, g);
        u = d() + 1;
        let v = kf(h, u)
          , E = y.createHref(h);
        try {
            s.pushState(v, "", E)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            o.location.assign(E)
        }
        i && l && l({
            action: a,
            location: y.location,
            delta: 1
        })
    }
    function p(w, g) {
        a = Pn.Replace;
        let h = du(y.location, w, g);
        u = d();
        let v = kf(h, u)
          , E = y.createHref(h);
        s.replaceState(v, "", E),
        i && l && l({
            action: a,
            location: y.location,
            delta: 0
        })
    }
    function S(w) {
        let g = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof w == "string" ? w : Vs(w);
        return h = h.replace(/ $/, "%20"),
        me(g, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,g)
    }
    let y = {
        get action() {
            return a
        },
        get location() {
            return e(o, s)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(bf, f),
            l = w,
            () => {
                o.removeEventListener(bf, f),
                l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: S,
        encodeLocation(w) {
            let g = S(w);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: m,
        replace: p,
        go(w) {
            return s.go(w)
        }
    };
    return y
}
var Pf;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Pf || (Pf = {}));
function mS(e, t, n) {
    return n === void 0 && (n = "/"),
    gS(e, t, n, !1)
}
function gS(e, t, n, r) {
    let o = typeof t == "string" ? ho(t) : t
      , i = Pc(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = Lg(e);
    vS(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = TS(i);
        a = PS(s[l], u, r)
    }
    return a
}
function Lg(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        l.relativePath.startsWith("/") && (me(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = Dn([r, l.relativePath])
          , d = n.concat(l);
        i.children && i.children.length > 0 && (me(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Lg(i.children, t, d, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: bS(u, i.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (i, s) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            o(i, s);
        else
            for (let l of Dg(i.path))
                o(i, s, l)
    }
    ),
    t
}
function Dg(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = Dg(r.join("/"))
      , a = [];
    return a.push(...s.map(l => l === "" ? i : [i, l].join("/"))),
    o && a.push(...s),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function vS(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : kS(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const yS = /^:[\w-]+$/
  , xS = 3
  , wS = 2
  , SS = 1
  , ES = 10
  , CS = -2
  , Nf = e => e === "*";
function bS(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Nf) && (r += CS),
    t && (r += wS),
    n.filter(o => !Nf(o)).reduce( (o, i) => o + (yS.test(i) ? xS : i === "" ? SS : ES), r)
}
function kS(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function PS(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , d = i === "/" ? t : t.slice(i.length) || "/"
          , f = Tf({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, d)
          , m = l.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = Tf({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, d)),
        !f)
            return null;
        Object.assign(o, f.params),
        s.push({
            params: o,
            pathname: Dn([i, f.pathname]),
            pathnameBase: MS(Dn([i, f.pathnameBase])),
            route: m
        }),
        f.pathnameBase !== "/" && (i = Dn([i, f.pathnameBase]))
    }
    return s
}
function Tf(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = NS(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , a = o.slice(1);
    return {
        params: r.reduce( (u, d, f) => {
            let {paramName: m, isOptional: p} = d;
            if (m === "*") {
                let y = a[f] || "";
                s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const S = a[f];
            return p && !S ? u[m] = void 0 : u[m] = (S || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function NS(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ag(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function TS(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Ag(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Pc(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function jS(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? ho(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : RS(n, t) : t,
        search: AS(r),
        hash: LS(o)
    }
}
function RS(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function rl(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function OS(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Nc(e, t) {
    let n = OS(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Tc(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = ho(e) : (o = ci({}, e),
    me(!o.pathname || !o.pathname.includes("?"), rl("?", "pathname", "search", o)),
    me(!o.pathname || !o.pathname.includes("#"), rl("#", "pathname", "hash", o)),
    me(!o.search || !o.search.includes("#"), rl("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "", s = i ? "/" : o.pathname, a;
    if (s == null)
        a = n;
    else {
        let f = t.length - 1;
        if (!r && s.startsWith("..")) {
            let m = s.split("/");
            for (; m[0] === ".."; )
                m.shift(),
                f -= 1;
            o.pathname = m.join("/")
        }
        a = f >= 0 ? t[f] : "/"
    }
    let l = jS(o, a)
      , u = s && s !== "/" && s.endsWith("/")
      , d = (i || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"),
    l
}
const Dn = e => e.join("/").replace(/\/\/+/g, "/")
  , MS = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , AS = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , LS = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function DS(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const _g = ["post", "put", "patch", "delete"];
new Set(_g);
const _S = ["get", ..._g];
new Set(_S);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function di() {
    return di = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    di.apply(this, arguments)
}
const jc = x.createContext(null)
  , IS = x.createContext(null)
  , Wn = x.createContext(null)
  , ya = x.createContext(null)
  , rn = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Ig = x.createContext(null);
function zS(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    mo() || me(!1);
    let {basename: r, navigator: o} = x.useContext(Wn)
      , {hash: i, pathname: s, search: a} = $g(e, {
        relative: n
    })
      , l = s;
    return r !== "/" && (l = s === "/" ? r : Dn([r, s])),
    o.createHref({
        pathname: l,
        search: a,
        hash: i
    })
}
function mo() {
    return x.useContext(ya) != null
}
function go() {
    return mo() || me(!1),
    x.useContext(ya).location
}
function zg(e) {
    x.useContext(Wn).static || x.useLayoutEffect(e)
}
function Fg() {
    let {isDataRoute: e} = x.useContext(rn);
    return e ? ZS() : FS()
}
function FS() {
    mo() || me(!1);
    let e = x.useContext(jc)
      , {basename: t, future: n, navigator: r} = x.useContext(Wn)
      , {matches: o} = x.useContext(rn)
      , {pathname: i} = go()
      , s = JSON.stringify(Nc(o, n.v7_relativeSplatPath))
      , a = x.useRef(!1);
    return zg( () => {
        a.current = !0
    }
    ),
    x.useCallback(function(u, d) {
        if (d === void 0 && (d = {}),
        !a.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let f = Tc(u, JSON.parse(s), i, d.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Dn([t, f.pathname])),
        (d.replace ? r.replace : r.push)(f, d.state, d)
    }, [t, r, s, i, e])
}
function $S() {
    let {matches: e} = x.useContext(rn)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function $g(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = x.useContext(Wn)
      , {matches: o} = x.useContext(rn)
      , {pathname: i} = go()
      , s = JSON.stringify(Nc(o, r.v7_relativeSplatPath));
    return x.useMemo( () => Tc(e, JSON.parse(s), i, n === "path"), [e, s, i, n])
}
function BS(e, t) {
    return US(e, t)
}
function US(e, t, n, r) {
    mo() || me(!1);
    let {navigator: o} = x.useContext(Wn)
      , {matches: i} = x.useContext(rn)
      , s = i[i.length - 1]
      , a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = go(), d;
    if (t) {
        var f;
        let w = typeof t == "string" ? ho(t) : t;
        l === "/" || (f = w.pathname) != null && f.startsWith(l) || me(!1),
        d = w
    } else
        d = u;
    let m = d.pathname || "/"
      , p = m;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        p = "/" + m.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let S = mS(e, {
        pathname: p
    })
      , y = QS(S && S.map(w => Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: Dn([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : Dn([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), i, n, r);
    return t && y ? x.createElement(ya.Provider, {
        value: {
            location: di({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Pn.Pop
        }
    }, y) : y
}
function VS() {
    let e = qS()
      , t = DS(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: o
    }, n) : null, null)
}
const HS = x.createElement(VS, null);
class WS extends x.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(rn.Provider, {
            value: this.props.routeContext
        }, x.createElement(Ig.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function KS(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = x.useContext(jc);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(rn.Provider, {
        value: t
    }, r)
}
function QS(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let d = s.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        d >= 0 || me(!1),
        s = s.slice(0, Math.min(s.length, d + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < s.length; d++) {
            let f = s[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
            f.route.id) {
                let {loaderData: m, errors: p} = n
                  , S = f.route.loader && m[f.route.id] === void 0 && (!p || p[f.route.id] === void 0);
                if (f.route.lazy || S) {
                    l = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (d, f, m) => {
        let p, S = !1, y = null, w = null;
        n && (p = a && f.route.id ? a[f.route.id] : void 0,
        y = f.route.errorElement || HS,
        l && (u < 0 && m === 0 ? (S = !0,
        w = null) : u === m && (S = !0,
        w = f.route.hydrateFallbackElement || null)));
        let g = t.concat(s.slice(0, m + 1))
          , h = () => {
            let v;
            return p ? v = y : S ? v = w : f.route.Component ? v = x.createElement(f.route.Component, null) : f.route.element ? v = f.route.element : v = d,
            x.createElement(KS, {
                match: f,
                routeContext: {
                    outlet: d,
                    matches: g,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0) ? x.createElement(WS, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: p,
            children: h(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var Bg = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Bg || {})
  , Hs = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Hs || {});
function GS(e) {
    let t = x.useContext(jc);
    return t || me(!1),
    t
}
function YS(e) {
    let t = x.useContext(IS);
    return t || me(!1),
    t
}
function XS(e) {
    let t = x.useContext(rn);
    return t || me(!1),
    t
}
function Ug(e) {
    let t = XS()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || me(!1),
    n.route.id
}
function qS() {
    var e;
    let t = x.useContext(Ig)
      , n = YS(Hs.UseRouteError)
      , r = Ug(Hs.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function ZS() {
    let {router: e} = GS(Bg.UseNavigateStable)
      , t = Ug(Hs.UseNavigateStable)
      , n = x.useRef(!1);
    return zg( () => {
        n.current = !0
    }
    ),
    x.useCallback(function(o, i) {
        i === void 0 && (i = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, di({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
function JS(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function eE(e) {
    let {to: t, replace: n, state: r, relative: o} = e;
    mo() || me(!1);
    let {future: i, static: s} = x.useContext(Wn)
      , {matches: a} = x.useContext(rn)
      , {pathname: l} = go()
      , u = Fg()
      , d = Tc(t, Nc(a, i.v7_relativeSplatPath), l, o === "path")
      , f = JSON.stringify(d);
    return x.useEffect( () => u(JSON.parse(f), {
        replace: n,
        state: r,
        relative: o
    }), [u, f, o, n, r]),
    null
}
function cs(e) {
    me(!1)
}
function tE(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Pn.Pop, navigator: i, static: s=!1, future: a} = e;
    mo() && me(!1);
    let l = t.replace(/^\/*/, "/")
      , u = x.useMemo( () => ({
        basename: l,
        navigator: i,
        static: s,
        future: di({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, i, s]);
    typeof r == "string" && (r = ho(r));
    let {pathname: d="/", search: f="", hash: m="", state: p=null, key: S="default"} = r
      , y = x.useMemo( () => {
        let w = Pc(d, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: f,
                hash: m,
                state: p,
                key: S
            },
            navigationType: o
        }
    }
    , [l, d, f, m, p, S, o]);
    return y == null ? null : x.createElement(Wn.Provider, {
        value: u
    }, x.createElement(ya.Provider, {
        children: n,
        value: y
    }))
}
function nE(e) {
    let {children: t, location: n} = e;
    return BS(fu(t), n)
}
new Promise( () => {}
);
function fu(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return x.Children.forEach(e, (r, o) => {
        if (!x.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === x.Fragment) {
            n.push.apply(n, fu(r.props.children, i));
            return
        }
        r.type !== cs && me(!1),
        !r.props.index || !r.props.children || me(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = fu(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function pu() {
    return pu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    pu.apply(this, arguments)
}
function rE(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, i;
    for (i = 0; i < r.length; i++)
        o = r[i],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function oE(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function iE(e, t) {
    return e.button === 0 && (!t || t === "_self") && !oE(e)
}
const sE = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , aE = "6";
try {
    window.__reactRouterVersion = aE
} catch {}
const lE = "startTransition"
  , jf = Zf[lE];
function uE(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = x.useRef();
    i.current == null && (i.current = fS({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [a,l] = x.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , d = x.useCallback(f => {
        u && jf ? jf( () => l(f)) : l(f)
    }
    , [l, u]);
    return x.useLayoutEffect( () => s.listen(d), [s, d]),
    x.useEffect( () => JS(r), [r]),
    x.createElement(tE, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: s,
        future: r
    })
}
const cE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , dE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , St = x.forwardRef(function(t, n) {
    let {onClick: r, relative: o, reloadDocument: i, replace: s, state: a, target: l, to: u, preventScrollReset: d, viewTransition: f} = t, m = rE(t, sE), {basename: p} = x.useContext(Wn), S, y = !1;
    if (typeof u == "string" && dE.test(u) && (S = u,
    cE))
        try {
            let v = new URL(window.location.href)
              , E = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u)
              , C = Pc(E.pathname, p);
            E.origin === v.origin && C != null ? u = C + E.search + E.hash : y = !0
        } catch {}
    let w = zS(u, {
        relative: o
    })
      , g = fE(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: o,
        viewTransition: f
    });
    function h(v) {
        r && r(v),
        v.defaultPrevented || g(v)
    }
    return x.createElement("a", pu({}, m, {
        href: S || w,
        onClick: y || i ? r : h,
        ref: n,
        target: l
    }))
});
var Rf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Rf || (Rf = {}));
var Of;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Of || (Of = {}));
function fE(e, t) {
    let {target: n, replace: r, state: o, preventScrollReset: i, relative: s, viewTransition: a} = t === void 0 ? {} : t
      , l = Fg()
      , u = go()
      , d = $g(e, {
        relative: s
    });
    return x.useCallback(f => {
        if (iE(f, n)) {
            f.preventDefault();
            let m = r !== void 0 ? r : Vs(u) === Vs(d);
            l(e, {
                replace: m,
                state: o,
                preventScrollReset: i,
                relative: s,
                viewTransition: a
            })
        }
    }
    , [u, l, d, r, o, n, e, i, s, a])
}
const pE = pc("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            hero: "bg-gradient-primary text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
            whatsapp: "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp-hover shadow-sm hover:shadow-md transition-all duration-200",
            premium: "bg-gradient-to-r from-primary via-primary-light to-primary text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            xl: "h-14 rounded-lg px-12 text-lg",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Me = x.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, i) => {
    const s = r ? _y : "button";
    return c.jsx(s, {
        className: Ft(pE({
            variant: t,
            size: n,
            className: e
        })),
        ref: i,
        ...o
    })
}
);
Me.displayName = "Button";
const fi = [{
    id: "phones",
    name: "Phones",
    slug: "phones",
    description: "Latest smartphones and mobile devices",
    icon: "Smartphone"
}, {
    id: "tvs",
    name: "TVs",
    slug: "tvs",
    description: "Smart TVs and entertainment systems",
    icon: "Tv"
}, {
    id: "cctv",
    name: "CCTV Cameras",
    slug: "cctv",
    description: "Security cameras and surveillance systems",
    icon: "Camera"
}, {
    id: "laptops",
    name: "Laptops",
    slug: "laptops",
    description: "Computers and computing devices",
    icon: "Laptop"
}, {
    id: "mattresses",
    name: "Mattresses",
    slug: "mattresses",
    description: "Comfortable beds and sleep solutions",
    icon: "Bed"
}]
  , Vg = [{
    id: "phone-001",
    name: "iPhone 15 Pro Max",
    category: "phones",
    price: 145999,
    originalPrice: 159999,
    sku: "IPH-15PM-001",
    image: "https://images.unsplash.com/photo-1592899677977-9c10c23f31e3?w=400&h=300&fit=crop",
    description: "The ultimate iPhone experience with titanium design, A17 Pro chip, and advanced camera system.",
    specifications: {
        Display: "6.7-inch Super Retina XDR",
        Storage: "256GB",
        Camera: "48MP Main + 12MP Ultra Wide",
        Battery: "Up to 29 hours video",
        Color: "Natural Titanium"
    },
    featured: !0,
    inStock: !0
}, {
    id: "phone-002",
    name: "Samsung Galaxy S24 Ultra",
    category: "phones",
    price: 134999,
    originalPrice: 149999,
    sku: "SAM-S24U-001",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
    description: "Galaxy AI-powered smartphone with S Pen, 200MP camera, and titanium frame.",
    specifications: {
        Display: "6.8-inch Dynamic AMOLED 2X",
        Storage: "256GB",
        Camera: "200MP Main + 50MP Periscope",
        Battery: "5000mAh",
        Color: "Titanium Gray"
    },
    featured: !0,
    inStock: !0
}, {
    id: "phone-003",
    name: "Google Pixel 8 Pro",
    category: "phones",
    price: 89999,
    originalPrice: 99999,
    sku: "GOO-P8P-001",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    description: "AI-powered photography and advanced Google features in a premium design.",
    specifications: {
        Display: "6.7-inch LTPO OLED",
        Storage: "128GB",
        Camera: "50MP Main + 48MP Ultra Wide",
        Battery: "5050mAh",
        Color: "Obsidian"
    },
    inStock: !0
}, {
    id: "phone-004",
    name: "OnePlus 12",
    category: "phones",
    price: 74999,
    sku: "ONE-12-001",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
    description: "Flagship performance with Snapdragon 8 Gen 3 and Hasselblad cameras.",
    specifications: {
        Display: "6.82-inch AMOLED",
        Storage: "256GB",
        Camera: "50MP Triple Camera",
        Battery: "5400mAh",
        Color: "Silky Black"
    },
    inStock: !0
}, {
    id: "phone-005",
    name: "iPhone 14",
    category: "phones",
    price: 89999,
    originalPrice: 99999,
    sku: "IPH-14-001",
    image: "https://images.unsplash.com/photo-1674763183521-ca7a8a0bf3dc?w=400&h=300&fit=crop",
    description: "Reliable iPhone performance with advanced dual-camera system.",
    specifications: {
        Display: "6.1-inch Super Retina XDR",
        Storage: "128GB",
        Camera: "12MP Dual Camera",
        Battery: "Up to 20 hours video",
        Color: "Blue"
    },
    inStock: !0
}, {
    id: "phone-006",
    name: "Xiaomi 14 Ultra",
    category: "phones",
    price: 64999,
    sku: "XIA-14U-001",
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=300&fit=crop",
    description: "Professional photography with Leica cameras and flagship performance.",
    specifications: {
        Display: "6.73-inch AMOLED",
        Storage: "512GB",
        Camera: "50MP Leica Quad Camera",
        Battery: "5300mAh",
        Color: "Black"
    },
    inStock: !0
}, {
    id: "tv-001",
    name: 'Samsung 65" Neo QLED 8K TV',
    category: "tvs",
    price: 284999,
    originalPrice: 319999,
    sku: "SAM-NEO65-001",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
    description: "Premium 8K TV with Quantum Matrix Technology and Neural Quantum Processor.",
    specifications: {
        "Screen Size": "65 inches",
        Resolution: "8K (7680 x 4320)",
        "Display Type": "Neo QLED",
        HDR: "HDR10+ Adaptive",
        "Smart TV": "Tizen OS"
    },
    featured: !0,
    inStock: !0
}, {
    id: "tv-002",
    name: 'LG 55" OLED C3 4K TV',
    category: "tvs",
    price: 169999,
    originalPrice: 189999,
    sku: "LG-C355-001",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
    description: "Self-lit OLED pixels deliver perfect blacks and vibrant colors.",
    specifications: {
        "Screen Size": "55 inches",
        Resolution: "4K (3840 x 2160)",
        "Display Type": "OLED",
        HDR: "Dolby Vision IQ",
        "Smart TV": "webOS 23"
    },
    featured: !0,
    inStock: !0
}, {
    id: "tv-003",
    name: 'Sony 75" X90L LED 4K TV',
    category: "tvs",
    price: 229999,
    sku: "SON-X90L75-001",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop",
    description: "Full Array LED with XR Cognitive Processor for enhanced picture quality.",
    specifications: {
        "Screen Size": "75 inches",
        Resolution: "4K (3840 x 2160)",
        "Display Type": "Full Array LED",
        HDR: "HDR10 & Dolby Vision",
        "Smart TV": "Google TV"
    },
    inStock: !0
}, {
    id: "tv-004",
    name: 'TCL 43" P735 QLED 4K TV',
    category: "tvs",
    price: 54999,
    originalPrice: 64999,
    sku: "TCL-P735-001",
    image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400&h=300&fit=crop",
    description: "Affordable QLED technology with Android TV and wide color gamut.",
    specifications: {
        "Screen Size": "43 inches",
        Resolution: "4K (3840 x 2160)",
        "Display Type": "QLED",
        HDR: "HDR10+ & Dolby Vision",
        "Smart TV": "Android TV"
    },
    inStock: !0
}, {
    id: "tv-005",
    name: 'Hisense 65" U8K ULED TV',
    category: "tvs",
    price: 119999,
    sku: "HIS-U8K65-001",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop",
    description: "Mini-LED backlight technology with Quantum Dot Color and Dolby Vision.",
    specifications: {
        "Screen Size": "65 inches",
        Resolution: "4K (3840 x 2160)",
        "Display Type": "ULED Mini-LED",
        HDR: "Dolby Vision & HDR10+",
        "Smart TV": "VIDAA Smart OS"
    },
    inStock: !0
}, {
    id: "tv-006",
    name: 'Philips 50" The One OLED TV',
    category: "tvs",
    price: 134999,
    sku: "PHI-ONE50-001",
    image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400&h=300&fit=crop",
    description: "OLED Ambilight TV with P5 Perfect Picture Engine and Android TV.",
    specifications: {
        "Screen Size": "50 inches",
        Resolution: "4K (3840 x 2160)",
        "Display Type": "OLED",
        HDR: "HDR10+ & Dolby Vision",
        "Smart TV": "Android TV with Ambilight"
    },
    inStock: !1
}, {
    id: "cctv-001",
    name: "Hikvision DS-2CD2086G2 8MP IP Camera",
    category: "cctv",
    price: 24999,
    sku: "HIK-2086G2-001",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description: "Professional 8MP IP camera with ColorVu technology for 24/7 color imaging.",
    specifications: {
        Resolution: "8MP (3840 × 2160)",
        Lens: "2.8mm fixed",
        "Night Vision": "ColorVu Technology",
        Storage: "MicroSD up to 256GB",
        Connectivity: "PoE, Ethernet"
    },
    featured: !0,
    inStock: !0
}, {
    id: "cctv-002",
    name: "Dahua IPC-HFW2831S 8MP Bullet Camera",
    category: "cctv",
    price: 18999,
    originalPrice: 22999,
    sku: "DAH-HFW2831-001",
    image: "https://images.unsplash.com/photo-1567473030688-788865d5bda8?w=400&h=300&fit=crop",
    description: "AI-powered surveillance with human and vehicle detection.",
    specifications: {
        Resolution: "8MP (3840 × 2160)",
        Lens: "2.8mm-12mm varifocal",
        "Night Vision": "IR up to 60m",
        Features: "AI Detection, SMD+",
        "Weather Rating": "IP67"
    },
    inStock: !0
}, {
    id: "cctv-003",
    name: "Axis M3047-P Panoramic Camera",
    category: "cctv",
    price: 89999,
    sku: "AXI-M3047-001",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    description: "360° overview camera with multi-sensor technology and dewarping.",
    specifications: {
        Resolution: "12MP (4000 × 3000)",
        "View Angle": "360° panoramic",
        "Night Vision": "Day/Night functionality",
        Analytics: "Video motion detection",
        Installation: "Ceiling mount"
    },
    inStock: !0
}, {
    id: "cctv-004",
    name: "Reolink 4K Security Camera System",
    category: "cctv",
    price: 64999,
    originalPrice: 74999,
    sku: "REO-4KSYS-001",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    description: "Complete 8-channel 4K security system with NVR and cameras.",
    specifications: {
        Cameras: "4× 4K (8MP) Cameras",
        NVR: "8-channel 4K NVR",
        Storage: "2TB HDD included",
        "Night Vision": "100ft IR range",
        "Mobile App": "Reolink App"
    },
    inStock: !0
}, {
    id: "cctv-005",
    name: "Uniview IPC2128LR3 Bullet Camera",
    category: "cctv",
    price: 16999,
    sku: "UNI-2128LR3-001",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    description: "Professional surveillance with Smart IR and vandal resistance.",
    specifications: {
        Resolution: "8MP (3840 × 2160)",
        Lens: "4mm fixed",
        "Night Vision": "Smart IR up to 30m",
        Features: "WDR, 3D DNR",
        Housing: "Metal vandal-resistant"
    },
    inStock: !0
}, {
    id: "cctv-006",
    name: "Bosch FLEXIDOME IP 4000i",
    category: "cctv",
    price: 45999,
    sku: "BOS-FLEX4000-001",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    description: "Intelligent dome camera with advanced analytics and cybersecurity.",
    specifications: {
        Resolution: "5MP (2592 × 1944)",
        Lens: "2.3mm-9mm auto zoom",
        Analytics: "Intelligent Video Analytics",
        Cybersecurity: "RSA2048 encryption",
        Installation: "Flush or surface mount"
    },
    inStock: !0
}, {
    id: "laptop-001",
    name: 'MacBook Pro 16" M3 Max',
    category: "laptops",
    price: 389999,
    originalPrice: 429999,
    sku: "APL-MBP16M3-001",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    description: "Ultimate creative powerhouse with M3 Max chip, Liquid Retina XDR display.",
    specifications: {
        Processor: "Apple M3 Max 14-core CPU",
        Memory: "36GB Unified Memory",
        Storage: "1TB SSD",
        Display: "16.2-inch Liquid Retina XDR",
        Battery: "Up to 22 hours"
    },
    featured: !0,
    inStock: !0
}, {
    id: "laptop-002",
    name: "Dell XPS 13 Plus",
    category: "laptops",
    price: 134999,
    originalPrice: 149999,
    sku: "DEL-XPS13P-001",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
    description: "Premium ultrabook with 13th Gen Intel, stunning OLED display.",
    specifications: {
        Processor: "Intel Core i7-1360P",
        Memory: "16GB LPDDR5",
        Storage: "512GB SSD",
        Display: "13.4-inch 3.5K OLED",
        Weight: "1.26kg"
    },
    featured: !0,
    inStock: !0
}, {
    id: "laptop-003",
    name: "ASUS ROG Zephyrus G16",
    category: "laptops",
    price: 224999,
    sku: "ASU-ROGG16-001",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    description: "Gaming laptop with RTX 4070, AMD Ryzen 9, and 240Hz display.",
    specifications: {
        Processor: "AMD Ryzen 9 7940HS",
        Graphics: "NVIDIA RTX 4070 8GB",
        Memory: "32GB DDR5",
        Display: "16-inch 2.5K 240Hz",
        Cooling: "ROG Intelligent Cooling"
    },
    inStock: !0
}, {
    id: "laptop-004",
    name: "HP Spectre x360 14",
    category: "laptops",
    price: 119999,
    originalPrice: 134999,
    sku: "HP-SPECX360-001",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
    description: "2-in-1 convertible laptop with gem-cut design and privacy features.",
    specifications: {
        Processor: "Intel Core i7-1355U",
        Memory: "16GB LPDDR4x",
        Storage: "1TB SSD",
        Display: "13.5-inch 3K2K OLED Touch",
        Features: "360° hinge, Privacy Screen"
    },
    inStock: !0
}, {
    id: "laptop-005",
    name: "Lenovo ThinkPad X1 Carbon Gen 11",
    category: "laptops",
    price: 159999,
    sku: "LEN-X1C11-001",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    description: "Business ultrabook with military-grade durability and security.",
    specifications: {
        Processor: "Intel Core i7-1365U",
        Memory: "32GB LPDDR5",
        Storage: "1TB SSD",
        Display: "14-inch 2.8K OLED",
        Security: "TPM 2.0, Fingerprint reader"
    },
    inStock: !0
}, {
    id: "laptop-006",
    name: "Microsoft Surface Laptop Studio 2",
    category: "laptops",
    price: 279999,
    sku: "MIC-SLS2-001",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
    description: "Creative powerhouse with unique hinge design and Surface Pen support.",
    specifications: {
        Processor: "Intel Core i7-13700H",
        Graphics: "NVIDIA RTX 4050 6GB",
        Memory: "32GB LPDDR5x",
        Display: "14.4-inch PixelSense touchscreen",
        Features: "Surface Pen included"
    },
    inStock: !1
}, {
    id: "mattress-001",
    name: "Emma Original Hybrid Mattress - Queen",
    category: "mattresses",
    price: 89999,
    originalPrice: 119999,
    sku: "EMM-ORIG-Q001",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    description: "Award-winning hybrid mattress combining memory foam and pocket springs.",
    specifications: {
        Size: "Queen (160×200cm)",
        Type: "Hybrid (Foam + Springs)",
        Firmness: "Medium-firm",
        Height: "25cm",
        Trial: "100-night trial"
    },
    featured: !0,
    inStock: !0
}, {
    id: "mattress-002",
    name: "Sealy Posturepedic Exquisite - King",
    category: "mattresses",
    price: 159999,
    originalPrice: 189999,
    sku: "SEA-EXQU-K001",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
    description: "Luxury mattress with zoned support and cooling gel technology.",
    specifications: {
        Size: "King (180×200cm)",
        Type: "Pocket Spring with Gel",
        Firmness: "Firm support",
        Height: "32cm",
        Warranty: "10-year warranty"
    },
    featured: !0,
    inStock: !0
}, {
    id: "mattress-003",
    name: "Simba Hybrid Pro - Double",
    category: "mattresses",
    price: 74999,
    originalPrice: 89999,
    sku: "SIM-HYBP-D001",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    description: "Advanced hybrid with titanium springs and bamboo wool comfort layer.",
    specifications: {
        Size: "Double (135×190cm)",
        Type: "Hybrid with Titanium Springs",
        Firmness: "Medium",
        Height: "28cm",
        Features: "Temperature regulating"
    },
    inStock: !0
}, {
    id: "mattress-004",
    name: "Tempur-Pedic Cloud Supreme - Queen",
    category: "mattresses",
    price: 199999,
    sku: "TEM-CLOU-Q001",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
    description: "NASA-developed TEMPUR material for personalized comfort and support.",
    specifications: {
        Size: "Queen (160×200cm)",
        Type: "Memory Foam (TEMPUR)",
        Firmness: "Medium-soft",
        Height: "27cm",
        Warranty: "15-year warranty"
    },
    inStock: !0
}, {
    id: "mattress-005",
    name: "Casper Wave Hybrid - King",
    category: "mattresses",
    price: 179999,
    originalPrice: 199999,
    sku: "CAS-WAVE-K001",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    description: "Ergonomic design with zoned layers for spinal alignment and cooling.",
    specifications: {
        Size: "King (180×200cm)",
        Type: "Hybrid with Zoned Support",
        Firmness: "Medium",
        Height: "33cm",
        Features: "Cooling technology"
    },
    inStock: !0
}, {
    id: "mattress-006",
    name: "Purple RestorePlus - Double",
    category: "mattresses",
    price: 94999,
    sku: "PUR-REST-D001",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
    description: "Innovative gel grid technology for temperature-neutral sleep.",
    specifications: {
        Size: "Double (135×190cm)",
        Type: "Gel Grid + Foam",
        Firmness: "Medium-firm",
        Height: "29cm",
        Features: "No-flip design"
    },
    inStock: !1
}]
  , Ws = e => Vg.filter(t => t.category === e)
  , hE = (e, t) => {
    let n = t ? Ws(t) : Vg;
    if (!e.trim())
        return n;
    const r = e.toLowerCase();
    return n.filter(o => o.name.toLowerCase().includes(r) || o.description.toLowerCase().includes(r) || o.sku.toLowerCase().includes(r))
}
  , Be = e => new Intl.NumberFormat("en-KE",{
    style: "currency",
    currency: "KES",
    minimumFractionDigits: 0
}).format(e)
  , Hg = e => {
    const t = `I'd like to order ${e.name} (SKU: ${e.sku}) - ${Be(e.price)}`;
    return `https://wa.me/254796020142?text=${encodeURIComponent(t)}`
}
  , mE = pc("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Yt({className: e, variant: t, ...n}) {
    return c.jsx("div", {
        className: Ft(mE({
            variant: t
        }), e),
        ...n
    })
}
function Wg({product: e, onViewDetails: t, className: n=""}) {
    const r = s => {
        s.preventDefault(),
        s.stopPropagation(),
        window.open(Hg(e), "_blank", "noopener,noreferrer")
    }
      , o = s => {
        s.preventDefault(),
        s.stopPropagation(),
        t(e)
    }
      , i = s => {
        (s.key === "Enter" || s.key === " ") && (s.preventDefault(),
        t(e))
    }
    ;
    return c.jsxs("article", {
        className: `product-card group cursor-pointer transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50 ${n}`,
        tabIndex: 0,
        onClick: o,
        onKeyDown: i,
        role: "button",
        "aria-label": `View details for ${e.name}`,
        children: [c.jsxs("div", {
            className: "aspect-product overflow-hidden rounded-t-xl bg-muted/30",
            children: [c.jsx("img", {
                src: e.image,
                alt: e.name,
                loading: "lazy",
                className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
                sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }), c.jsxs("div", {
                className: "absolute top-3 left-3 flex flex-col gap-2",
                children: [e.featured && c.jsx(Yt, {
                    className: "bg-primary text-primary-foreground shadow-sm",
                    children: "Featured"
                }), e.originalPrice && c.jsxs(Yt, {
                    variant: "destructive",
                    className: "shadow-sm",
                    children: ["Save ", Math.round((e.originalPrice - e.price) / e.originalPrice * 100), "%"]
                }), !e.inStock && c.jsx(Yt, {
                    variant: "secondary",
                    className: "shadow-sm",
                    children: "Out of Stock"
                })]
            })]
        }), c.jsxs("div", {
            className: "p-4 space-y-3",
            children: [c.jsxs("div", {
                className: "space-y-1",
                children: [c.jsx("h3", {
                    className: "text-lg font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors",
                    children: e.name
                }), c.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [c.jsx("span", {
                        className: "text-xl font-bold text-primary",
                        children: Be(e.price)
                    }), e.originalPrice && c.jsx("span", {
                        className: "text-sm text-muted-foreground line-through",
                        children: Be(e.originalPrice)
                    })]
                })]
            }), c.jsx("p", {
                className: "text-sm text-muted-foreground line-clamp-2",
                children: e.description
            }), c.jsx("div", {
                className: "space-y-1",
                children: Object.entries(e.specifications).slice(0, 2).map( ([s,a]) => c.jsxs("div", {
                    className: "flex justify-between text-xs",
                    children: [c.jsxs("span", {
                        className: "text-muted-foreground",
                        children: [s, ":"]
                    }), c.jsx("span", {
                        className: "text-card-foreground font-medium",
                        children: a
                    })]
                }, s))
            }), c.jsxs("div", {
                className: "flex gap-2 pt-2",
                children: [c.jsxs(Me, {
                    variant: "outline",
                    size: "sm",
                    onClick: o,
                    className: "flex-1 transition-all duration-200 hover:bg-primary hover:text-primary-foreground",
                    "aria-label": `View details for ${e.name}`,
                    children: [c.jsx(Lx, {
                        className: "h-4 w-4 mr-1"
                    }), "View"]
                }), c.jsxs(Me, {
                    onClick: r,
                    disabled: !e.inStock,
                    variant: "whatsapp",
                    className: "flex-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                    size: "sm",
                    "aria-label": `Order ${e.name} via WhatsApp`,
                    children: [c.jsx(tu, {
                        className: "h-4 w-4 mr-1"
                    }), "Order"]
                })]
            }), c.jsxs("div", {
                className: "text-xs text-muted-foreground pt-1 border-t",
                children: ["SKU: ", e.sku]
            })]
        })]
    })
}
function gE({title: e, products: t, categorySlug: n, onViewProduct: r, className: o=""}) {
    const i = x.useRef(null)
      , [s,a] = x.useState(!1)
      , [l,u] = x.useState(!0)
      , [d,f] = x.useState(!1)
      , m = () => {
        if (!i.current)
            return;
        const {scrollLeft: y, scrollWidth: w, clientWidth: g} = i.current;
        a(y > 0),
        u(y < w - g - 1)
    }
    ;
    x.useEffect( () => {
        m();
        const y = () => m();
        return window.addEventListener("resize", y),
        () => window.removeEventListener("resize", y)
    }
    , [t]);
    const p = y => {
        if (!i.current || d)
            return;
        f(!0);
        const w = i.current
          , h = 320 * 2
          , v = y === "left" ? w.scrollLeft - h : w.scrollLeft + h;
        w.scrollTo({
            left: v,
            behavior: "smooth"
        }),
        setTimeout( () => {
            f(!1),
            m()
        }
        , 350)
    }
      , S = (y, w) => {
        (y.key === "Enter" || y.key === " ") && (y.preventDefault(),
        p(w))
    }
    ;
    return t.length === 0 ? null : c.jsxs("section", {
        className: `scroll-reveal ${o}`,
        "aria-labelledby": `${n}-heading`,
        children: [c.jsxs("div", {
            className: "flex items-center justify-between mb-6",
            children: [c.jsxs("div", {
                children: [c.jsx("h2", {
                    id: `${n}-heading`,
                    className: "text-3xl font-bold text-foreground mb-2",
                    children: e
                }), c.jsxs("p", {
                    className: "text-muted-foreground",
                    children: ["Discover our latest ", e.toLowerCase(), " collection"]
                })]
            }), c.jsx(St, {
                to: `/category/${n}`,
                children: c.jsxs(Me, {
                    variant: "outline",
                    className: "group transition-all duration-200 hover:bg-primary hover:text-primary-foreground",
                    "aria-label": `View all ${e}`,
                    children: ["Show All", c.jsx(_s, {
                        className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    })]
                })
            })]
        }), c.jsxs("div", {
            className: "carousel-container",
            role: "region",
            "aria-label": `${e} product carousel`,
            children: [c.jsx("button", {
                onClick: () => p("left"),
                onKeyDown: y => S(y, "left"),
                disabled: !s,
                className: "carousel-nav-btn left-2 disabled:opacity-40 disabled:cursor-not-allowed z-20",
                "aria-label": "Scroll left to see previous products",
                type: "button",
                children: c.jsx(Mx, {
                    className: "h-5 w-5"
                })
            }), c.jsx("button", {
                onClick: () => p("right"),
                onKeyDown: y => S(y, "right"),
                disabled: !l,
                className: "carousel-nav-btn right-2 disabled:opacity-40 disabled:cursor-not-allowed z-20",
                "aria-label": "Scroll right to see more products",
                type: "button",
                children: c.jsx(Ax, {
                    className: "h-5 w-5"
                })
            }), c.jsx("div", {
                ref: i,
                className: "carousel-track pb-4",
                onScroll: m,
                role: "list",
                "aria-live": "polite",
                children: t.map( (y, w) => c.jsx("div", {
                    className: "carousel-item w-80",
                    role: "listitem",
                    children: c.jsx(Wg, {
                        product: y,
                        onViewDetails: r,
                        className: "h-full"
                    })
                }, y.id))
            })]
        }), c.jsx("div", {
            className: "md:hidden mt-4 text-center",
            children: c.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Swipe left or right to browse products"
            })
        })]
    })
}
function Kg({product: e, isOpen: t, onClose: n}) {
    if (x.useEffect( () => {
        if (!t)
            return;
        const i = a => {
            a.key === "Escape" && n()
        }
          , s = a => {
            if (a.key === "Tab") {
                const l = document.getElementById("product-modal");
                if (!l)
                    return;
                const u = l.querySelectorAll('button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
                  , d = u[0]
                  , f = u[u.length - 1];
                a.shiftKey ? document.activeElement === d && (a.preventDefault(),
                f.focus()) : document.activeElement === f && (a.preventDefault(),
                d.focus())
            }
        }
        ;
        return document.addEventListener("keydown", i),
        document.addEventListener("keydown", s),
        setTimeout( () => {
            const a = document.getElementById("modal-close-btn");
            a == null || a.focus()
        }
        , 100),
        document.body.style.overflow = "hidden",
        () => {
            document.removeEventListener("keydown", i),
            document.removeEventListener("keydown", s),
            document.body.style.overflow = "unset"
        }
    }
    , [t, n]),
    !t || !e)
        return null;
    const r = () => {
        window.open(Hg(e), "_blank", "noopener,noreferrer")
    }
      , o = i => {
        i.target === i.currentTarget && n()
    }
    ;
    return c.jsx("div", {
        className: "modal-overlay animate-fade-in",
        onClick: o,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        "aria-describedby": "modal-description",
        children: c.jsxs("div", {
            id: "product-modal",
            className: "modal-content animate-slide-up relative",
            children: [c.jsx("button", {
                id: "modal-close-btn",
                onClick: n,
                className: "absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary",
                "aria-label": "Close product details",
                type: "button",
                children: c.jsx(Br, {
                    className: "h-5 w-5"
                })
            }), c.jsxs("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: [c.jsxs("div", {
                    className: "relative",
                    children: [c.jsx("div", {
                        className: "aspect-square overflow-hidden rounded-xl bg-muted/30",
                        children: c.jsx("img", {
                            src: e.image,
                            alt: e.name,
                            className: "h-full w-full object-cover",
                            sizes: "(max-width: 768px) 100vw, 50vw"
                        })
                    }), c.jsxs("div", {
                        className: "absolute top-3 left-3 flex flex-col gap-2",
                        children: [e.featured && c.jsx(Yt, {
                            className: "bg-primary text-primary-foreground shadow-sm",
                            children: "Featured"
                        }), e.originalPrice && c.jsxs(Yt, {
                            variant: "destructive",
                            className: "shadow-sm",
                            children: ["Save ", Math.round((e.originalPrice - e.price) / e.originalPrice * 100), "%"]
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "p-6 space-y-6",
                    children: [c.jsxs("div", {
                        children: [c.jsx("h1", {
                            id: "modal-title",
                            className: "text-2xl md:text-3xl font-bold text-foreground mb-2",
                            children: e.name
                        }), c.jsxs("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [c.jsx("span", {
                                className: "text-3xl font-bold text-primary",
                                children: Be(e.price)
                            }), e.originalPrice && c.jsx("span", {
                                className: "text-lg text-muted-foreground line-through",
                                children: Be(e.originalPrice)
                            })]
                        }), c.jsx("div", {
                            className: "flex items-center gap-2 mb-4",
                            children: e.inStock ? c.jsxs(c.Fragment, {
                                children: [c.jsx("div", {
                                    className: "h-2 w-2 bg-green-500 rounded-full"
                                }), c.jsx("span", {
                                    className: "text-sm text-green-600 font-medium",
                                    children: "In Stock"
                                })]
                            }) : c.jsxs(c.Fragment, {
                                children: [c.jsx("div", {
                                    className: "h-2 w-2 bg-red-500 rounded-full"
                                }), c.jsx("span", {
                                    className: "text-sm text-red-600 font-medium",
                                    children: "Out of Stock"
                                })]
                            })
                        })]
                    }), c.jsx("div", {
                        children: c.jsx("p", {
                            id: "modal-description",
                            className: "text-muted-foreground leading-relaxed",
                            children: e.description
                        })
                    }), c.jsxs("div", {
                        children: [c.jsx("h2", {
                            className: "text-lg font-semibold mb-3",
                            children: "Specifications"
                        }), c.jsx("div", {
                            className: "space-y-2",
                            children: Object.entries(e.specifications).map( ([i,s]) => c.jsxs("div", {
                                className: "flex justify-between py-2 border-b border-border/50",
                                children: [c.jsx("span", {
                                    className: "text-muted-foreground font-medium",
                                    children: i
                                }), c.jsx("span", {
                                    className: "text-foreground",
                                    children: s
                                })]
                            }, i))
                        })]
                    }), c.jsxs("div", {
                        className: "grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-xl",
                        children: [c.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [c.jsx(zx, {
                                className: "h-4 w-4 text-primary"
                            }), c.jsxs("span", {
                                className: "text-xs text-muted-foreground",
                                children: ["SKU: ", e.sku]
                            })]
                        }), c.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [c.jsx(_m, {
                                className: "h-4 w-4 text-primary"
                            }), c.jsx("span", {
                                className: "text-xs text-muted-foreground",
                                children: "Warranty Included"
                            })]
                        }), c.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [c.jsx(zm, {
                                className: "h-4 w-4 text-primary"
                            }), c.jsx("span", {
                                className: "text-xs text-muted-foreground",
                                children: "Fast Delivery"
                            })]
                        }), c.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [c.jsx(tu, {
                                className: "h-4 w-4 text-primary"
                            }), c.jsx("span", {
                                className: "text-xs text-muted-foreground",
                                children: "WhatsApp Support"
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "space-y-3 pt-4",
                        children: [c.jsxs(Me, {
                            onClick: r,
                            disabled: !e.inStock,
                            variant: "whatsapp",
                            className: "w-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg py-6",
                            size: "lg",
                            "aria-label": `Order ${e.name} via WhatsApp`,
                            children: [c.jsx(tu, {
                                className: "h-5 w-5 mr-2"
                            }), e.inStock ? "Order via WhatsApp" : "Currently Unavailable"]
                        }), c.jsx("p", {
                            className: "text-xs text-muted-foreground text-center",
                            children: "Click to start a WhatsApp conversation with our sales team"
                        })]
                    })]
                })]
            })]
        })
    })
}
const vE = "/assets/hero-tech-products-C_VawAuS.jpg"
  , yE = "/assets/hero-smart-tv-dySb39u9.jpg"
  , xE = "/assets/hero-security-cctv-CSeF-PIG.jpg"
  , ol = [{
    id: 1,
    title: "Latest Tech at Unbeatable Prices",
    subtitle: "Discover premium electronics with authentic warranties and fast delivery across Kenya",
    image: vE,
    cta: {
        text: "Shop Now",
        link: "/category/phones"
    },
    features: ["Free Delivery", "Warranty Included", "24/7 Support"]
}, {
    id: 2,
    title: "Transform Your Entertainment",
    subtitle: "Experience cinema-quality visuals with our premium TV collection featuring the latest smart features",
    image: yE,
    cta: {
        text: "Explore TVs",
        link: "/category/tvs"
    },
    features: ["4K & 8K Options", "Smart TV Features", "Professional Installation"]
}, {
    id: 3,
    title: "Secure Your World",
    subtitle: "Professional CCTV systems and security cameras for complete peace of mind and property protection",
    image: xE,
    cta: {
        text: "View Security",
        link: "/category/cctv"
    },
    features: ["Professional Setup", "24/7 Monitoring", "Mobile Access"]
}];
function wE() {
    const [e,t] = x.useState(0)
      , [n,r] = x.useState(!0);
    x.useEffect( () => {
        if (!n)
            return;
        const s = setInterval( () => {
            t(a => (a + 1) % ol.length)
        }
        , 6e3);
        return () => clearInterval(s)
    }
    , [n]);
    const o = s => {
        t(s),
        r(!1),
        setTimeout( () => r(!0), 1e4)
    }
      , i = ol[e];
    return c.jsxs("section", {
        className: "hero-section relative min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center",
        "aria-label": "Featured products and promotions",
        children: [c.jsxs("div", {
            className: "absolute inset-0 z-0",
            children: [c.jsx("img", {
                src: i.image,
                alt: "",
                className: "w-full h-full object-cover transition-opacity duration-1000",
                loading: "eager"
            }), c.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"
            })]
        }), c.jsx("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
            children: c.jsxs("div", {
                className: "max-w-3xl",
                children: [c.jsx("h1", {
                    className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in",
                    children: c.jsx("span", {
                        className: "block",
                        children: i.title
                    })
                }), c.jsx("p", {
                    className: "text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up",
                    children: i.subtitle
                }), c.jsx("div", {
                    className: "flex flex-wrap gap-4 mb-8 animate-slide-up",
                    children: i.features.map( (s, a) => c.jsxs("div", {
                        className: "flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90",
                        style: {
                            animationDelay: `${a * 100}ms`
                        },
                        children: [c.jsx("div", {
                            className: "w-2 h-2 bg-primary rounded-full mr-2"
                        }), c.jsx("span", {
                            className: "text-sm font-medium",
                            children: s
                        })]
                    }, s))
                }), c.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 animate-slide-up",
                    children: [c.jsx(Me, {
                        asChild: !0,
                        size: "lg",
                        className: "bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-lg",
                        children: c.jsxs(St, {
                            to: i.cta.link,
                            children: [c.jsx(ef, {
                                className: "mr-2 h-5 w-5"
                            }), i.cta.text, c.jsx(_s, {
                                className: "ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                            })]
                        })
                    }), c.jsx(Me, {
                        asChild: !0,
                        variant: "outline",
                        size: "lg",
                        className: "bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg transition-all duration-300",
                        children: c.jsxs("a", {
                            href: "https://wa.me/254796020142?text=Hello%2C%20I'd%20like%20to%20learn%20more%20about%20your%20products",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [c.jsx(Is, {
                                className: "mr-2 h-5 w-5"
                            }), "Get Expert Help"]
                        })
                    })]
                })]
            })
        }), c.jsx("div", {
            className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20",
            children: ol.map( (s, a) => c.jsx("button", {
                onClick: () => o(a),
                className: `w-3 h-3 rounded-full transition-all duration-300 ${a === e ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/70"}`,
                "aria-label": `Go to slide ${a + 1}`,
                type: "button"
            }, a))
        }), c.jsx("div", {
            className: "absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-white/20 z-10",
            children: c.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                children: c.jsxs("div", {
                    className: "grid grid-cols-2 lg:grid-cols-4 gap-4 text-center",
                    children: [c.jsxs("div", {
                        className: "flex items-center justify-center space-x-2",
                        children: [c.jsx(zm, {
                            className: "h-5 w-5 text-primary"
                        }), c.jsx("span", {
                            className: "text-sm font-medium text-foreground",
                            children: "Free Delivery"
                        })]
                    }), c.jsxs("div", {
                        className: "flex items-center justify-center space-x-2",
                        children: [c.jsx(_m, {
                            className: "h-5 w-5 text-primary"
                        }), c.jsx("span", {
                            className: "text-sm font-medium text-foreground",
                            children: "Warranty Included"
                        })]
                    }), c.jsxs("div", {
                        className: "flex items-center justify-center space-x-2",
                        children: [c.jsx(Is, {
                            className: "h-5 w-5 text-primary"
                        }), c.jsx("span", {
                            className: "text-sm font-medium text-foreground",
                            children: "24/7 Support"
                        })]
                    }), c.jsxs("div", {
                        className: "flex items-center justify-center space-x-2",
                        children: [c.jsx(ef, {
                            className: "h-5 w-5 text-primary"
                        }), c.jsx("span", {
                            className: "text-sm font-medium text-foreground",
                            children: "Authentic Products"
                        })]
                    })]
                })
            })
        })]
    })
}
const Mf = {
    Smartphone: Im,
    Tv: Fm,
    Camera: Am,
    Laptop: Dm,
    Bed: Mm
};
function Rc() {
    const [e,t] = x.useState(!1)
      , [n,r] = x.useState(!1)
      , o = go()
      , i = x.useRef(null)
      , s = x.useRef(null);
    x.useEffect( () => {
        t(!1),
        r(!1)
    }
    , [o.pathname]),
    x.useEffect( () => {
        const d = f => {
            i.current && !i.current.contains(f.target) && r(!1)
        }
        ;
        return n && document.addEventListener("mousedown", d),
        () => {
            document.removeEventListener("mousedown", d)
        }
    }
    , [n]);
    const a = d => {
        var f;
        d.key === "Escape" ? (r(!1),
        (f = s.current) == null || f.focus()) : (d.key === "Enter" || d.key === " ") && (d.preventDefault(),
        r(!n))
    }
      , l = () => {
        t(!e)
    }
      , u = () => {
        r(!n)
    }
    ;
    return c.jsxs(c.Fragment, {
        children: [c.jsx("a", {
            href: "#main-content",
            className: "skip-link",
            children: "Skip to main content"
        }), c.jsx("header", {
            className: "bg-white/95 backdrop-blur-md border-b border-border sticky top-0 z-40 shadow-sm",
            children: c.jsxs("nav", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                role: "navigation",
                "aria-label": "Main navigation",
                children: [c.jsxs("div", {
                    className: "flex justify-between items-center h-16",
                    children: [c.jsxs(St, {
                        to: "/",
                        className: "flex items-center space-x-2 font-bold text-xl text-primary hover:text-primary-dark transition-colors duration-200",
                        "aria-label": "TechStore - Go to homepage",
                        children: [c.jsx("div", {
                            className: "h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center",
                            children: c.jsx("span", {
                                className: "text-white font-bold text-sm",
                                children: "T"
                            })
                        }), c.jsx("span", {
                            children: "TechStore"
                        })]
                    }), c.jsxs("div", {
                        className: "hidden md:flex items-center space-x-8",
                        children: [c.jsx(St, {
                            to: "/",
                            className: `text-foreground hover:text-primary transition-colors duration-200 font-medium ${o.pathname === "/" ? "text-primary" : ""}`,
                            children: "Home"
                        }), c.jsxs("div", {
                            className: "relative",
                            ref: i,
                            children: [c.jsxs("button", {
                                ref: s,
                                onClick: u,
                                onKeyDown: a,
                                className: "flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium",
                                "aria-expanded": n,
                                "aria-haspopup": "true",
                                type: "button",
                                children: [c.jsx("span", {
                                    children: "Products"
                                }), c.jsx(Lm, {
                                    className: `h-4 w-4 transition-transform duration-200 ${n ? "rotate-180" : ""}`
                                })]
                            }), n && c.jsx("div", {
                                className: "absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-border z-50 py-2",
                                role: "menu",
                                "aria-label": "Product categories",
                                children: fi.map(d => {
                                    const f = Mf[d.icon];
                                    return c.jsxs(St, {
                                        to: `/category/${d.slug}`,
                                        className: "flex items-center px-4 py-3 text-foreground hover:bg-muted/50 hover:text-primary transition-colors duration-200",
                                        role: "menuitem",
                                        children: [f && c.jsx(f, {
                                            className: "h-5 w-5 mr-3 text-primary"
                                        }), c.jsxs("div", {
                                            children: [c.jsx("div", {
                                                className: "font-medium",
                                                children: d.name
                                            }), c.jsx("div", {
                                                className: "text-xs text-muted-foreground",
                                                children: d.description
                                            })]
                                        })]
                                    }, d.id)
                                }
                                )
                            })]
                        }), c.jsx("a", {
                            href: "tel:+254796020142",
                            className: "text-foreground hover:text-primary transition-colors duration-200 font-medium",
                            children: "Contact"
                        })]
                    }), c.jsx("div", {
                        className: "hidden md:block",
                        children: c.jsx(Me, {
                            asChild: !0,
                            className: "whatsapp-btn transition-all duration-200 hover:scale-105",
                            children: c.jsx("a", {
                                href: "https://wa.me/254796020142?text=Hello%2C%20I'm%20interested%20in%20your%20products",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "Contact us on WhatsApp",
                                children: "WhatsApp Us"
                            })
                        })
                    }), c.jsx("button", {
                        onClick: l,
                        className: "md:hidden p-2 text-foreground hover:text-primary transition-colors duration-200",
                        "aria-expanded": e,
                        "aria-label": "Toggle mobile menu",
                        type: "button",
                        children: e ? c.jsx(Br, {
                            className: "h-6 w-6"
                        }) : c.jsx(Ix, {
                            className: "h-6 w-6"
                        })
                    })]
                }), e && c.jsxs("div", {
                    className: "md:hidden py-4 space-y-2 border-t border-border mt-4 animate-fade-in",
                    children: [c.jsx(St, {
                        to: "/",
                        className: `block px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors duration-200 font-medium ${o.pathname === "/" ? "text-primary bg-muted/50" : ""}`,
                        children: "Home"
                    }), c.jsxs("div", {
                        className: "space-y-1",
                        children: [c.jsx("div", {
                            className: "px-4 py-2 text-sm font-semibold text-muted-foreground",
                            children: "Categories"
                        }), fi.map(d => {
                            const f = Mf[d.icon];
                            return c.jsxs(St, {
                                to: `/category/${d.slug}`,
                                className: `flex items-center px-4 py-3 ml-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors duration-200 ${o.pathname === `/category/${d.slug}` ? "text-primary bg-muted/50" : ""}`,
                                children: [f && c.jsx(f, {
                                    className: "h-4 w-4 mr-3"
                                }), d.name]
                            }, d.id)
                        }
                        )]
                    }), c.jsx("a", {
                        href: "tel:+254796020142",
                        className: "block px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors duration-200 font-medium",
                        children: "Contact Us"
                    }), c.jsx("div", {
                        className: "px-4 pt-4",
                        children: c.jsx(Me, {
                            asChild: !0,
                            className: "w-full whatsapp-btn transition-all duration-200",
                            children: c.jsx("a", {
                                href: "https://wa.me/254796020142?text=Hello%2C%20I'm%20interested%20in%20your%20products",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "Contact us on WhatsApp",
                                children: "WhatsApp Us"
                            })
                        })
                    })]
                })]
            })
        })]
    })
}
const SE = {
    phones: Im,
    tvs: Fm,
    cctv: Am,
    laptops: Dm,
    mattresses: Mm
};
function EE() {
    const [e,t] = x.useState(null);
    return x.useEffect( () => ( () => {
        const o = document.querySelectorAll(".scroll-reveal")
          , i = new IntersectionObserver(s => {
            s.forEach(a => {
                a.isIntersecting && a.target.classList.add("revealed")
            }
            )
        }
        ,{
            threshold: .1,
            rootMargin: "0px 0px -100px 0px"
        });
        return o.forEach(s => i.observe(s)),
        () => i.disconnect()
    }
    )(), []),
    x.useEffect( () => {
        document.title = "TechStore Kenya - Premium Electronics & Technology Products";
        const n = document.querySelector('meta[name="description"]');
        n && n.setAttribute("content", "Shop premium electronics in Kenya. Phones, TVs, CCTV cameras, laptops, and mattresses with free delivery, warranty included, and 24/7 WhatsApp support.")
    }
    , []),
    c.jsxs(c.Fragment, {
        children: [c.jsx(Rc, {}), c.jsxs("main", {
            id: "main-content",
            children: [c.jsx(wE, {}), c.jsx("section", {
                className: "py-20 bg-background",
                children: c.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [c.jsxs("div", {
                        className: "text-center mb-16 scroll-reveal",
                        children: [c.jsx("h2", {
                            className: "text-4xl font-bold text-foreground mb-4",
                            children: "Shop by Category"
                        }), c.jsx("p", {
                            className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                            children: "Discover our comprehensive range of premium electronics and technology products"
                        })]
                    }), c.jsx("div", {
                        className: "space-y-16",
                        children: fi.map(n => {
                            const r = Ws(n.id).slice(0, 8);
                            return r.length === 0 ? null : c.jsx(gE, {
                                title: n.name,
                                products: r,
                                categorySlug: n.slug,
                                onViewProduct: t,
                                className: "scroll-reveal"
                            }, n.id)
                        }
                        )
                    })]
                })
            }), c.jsx("section", {
                className: "py-20 bg-gradient-hero",
                children: c.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [c.jsxs("div", {
                        className: "text-center mb-12 scroll-reveal",
                        children: [c.jsx("h2", {
                            className: "text-4xl font-bold text-foreground mb-4",
                            children: "Explore All Categories"
                        }), c.jsx("p", {
                            className: "text-xl text-muted-foreground",
                            children: "Find exactly what you're looking for"
                        })]
                    }), c.jsx("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: fi.map( (n, r) => {
                            const o = SE[n.id]
                              , i = Ws(n.id).length;
                            return c.jsx(St, {
                                to: `/category/${n.slug}`,
                                className: "group scroll-reveal",
                                style: {
                                    animationDelay: `${r * 150}ms`
                                },
                                children: c.jsxs("div", {
                                    className: "product-card p-8 text-center hover:scale-105 transition-all duration-300",
                                    children: [c.jsx("div", {
                                        className: "w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4",
                                        children: o && c.jsx(o, {
                                            className: "h-8 w-8 text-white"
                                        })
                                    }), c.jsx("h3", {
                                        className: "text-xl font-bold text-foreground mb-2 group-hover:text-primary",
                                        children: n.name
                                    }), c.jsx("p", {
                                        className: "text-muted-foreground mb-4",
                                        children: n.description
                                    }), c.jsxs(Yt, {
                                        variant: "secondary",
                                        className: "mb-4",
                                        children: [i, " Products"]
                                    }), c.jsxs("div", {
                                        className: "flex items-center justify-center text-primary group-hover:translate-x-2 transition-transform duration-300",
                                        children: [c.jsx("span", {
                                            className: "mr-2",
                                            children: "Explore"
                                        }), c.jsx(_s, {
                                            className: "h-4 w-4"
                                        })]
                                    })]
                                })
                            }, n.id)
                        }
                        )
                    })]
                })
            }), c.jsx("section", {
                className: "py-16 bg-muted/30",
                children: c.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [c.jsxs("div", {
                        className: "text-center mb-12 scroll-reveal",
                        children: [c.jsx("h2", {
                            className: "text-3xl font-bold text-foreground mb-4",
                            children: "Why Choose TechStore?"
                        }), c.jsx("p", {
                            className: "text-xl text-muted-foreground",
                            children: "Your trusted partner for premium electronics in Kenya"
                        })]
                    }), c.jsxs("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                        children: [c.jsxs("div", {
                            className: "text-center scroll-reveal",
                            children: [c.jsx("div", {
                                className: "w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4",
                                children: c.jsx(Ox, {
                                    className: "h-8 w-8 text-primary"
                                })
                            }), c.jsx("h3", {
                                className: "text-lg font-bold text-foreground mb-2",
                                children: "Authentic Products"
                            }), c.jsx("p", {
                                className: "text-muted-foreground",
                                children: "100% genuine products with official warranties from authorized dealers"
                            })]
                        }), c.jsxs("div", {
                            className: "text-center scroll-reveal",
                            style: {
                                animationDelay: "150ms"
                            },
                            children: [c.jsx("div", {
                                className: "w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4",
                                children: c.jsx(Is, {
                                    className: "h-8 w-8 text-primary"
                                })
                            }), c.jsx("h3", {
                                className: "text-lg font-bold text-foreground mb-2",
                                children: "24/7 Support"
                            }), c.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Round-the-clock customer support via WhatsApp for all your needs"
                            })]
                        }), c.jsxs("div", {
                            className: "text-center scroll-reveal",
                            style: {
                                animationDelay: "300ms"
                            },
                            children: [c.jsx("div", {
                                className: "w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4",
                                children: c.jsx(Fx, {
                                    className: "h-8 w-8 text-primary"
                                })
                            }), c.jsx("h3", {
                                className: "text-lg font-bold text-foreground mb-2",
                                children: "Premium Quality"
                            }), c.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Carefully curated selection of top-tier electronics and technology"
                            })]
                        }), c.jsxs("div", {
                            className: "text-center scroll-reveal",
                            style: {
                                animationDelay: "450ms"
                            },
                            children: [c.jsx("div", {
                                className: "w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4",
                                children: c.jsx($x, {
                                    className: "h-8 w-8 text-primary"
                                })
                            }), c.jsx("h3", {
                                className: "text-lg font-bold text-foreground mb-2",
                                children: "Trusted Service"
                            }), c.jsx("p", {
                                className: "text-muted-foreground",
                                children: "Thousands of satisfied customers across Kenya trust our service"
                            })]
                        })]
                    })]
                })
            }), c.jsxs("section", {
                className: "py-20 bg-gradient-primary relative overflow-hidden",
                children: [c.jsx("div", {
                    className: "absolute inset-0 bg-primary/90"
                }), c.jsx("div", {
                    className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: c.jsxs("div", {
                        className: "scroll-reveal",
                        children: [c.jsx("h2", {
                            className: "text-4xl font-bold text-white mb-6",
                            children: "Ready to Find Your Perfect Tech?"
                        }), c.jsx("p", {
                            className: "text-xl text-white/90 mb-8 leading-relaxed",
                            children: "Browse our extensive collection or get personalized recommendations from our experts. We're here to help you make the right choice."
                        }), c.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [c.jsx(Me, {
                                asChild: !0,
                                size: "lg",
                                variant: "secondary",
                                className: "px-8 py-6 text-lg hover:scale-105 transition-all duration-300",
                                children: c.jsxs(St, {
                                    to: "/category/phones",
                                    children: ["Browse Products", c.jsx(_s, {
                                        className: "ml-2 h-5 w-5"
                                    })]
                                })
                            }), c.jsx(Me, {
                                asChild: !0,
                                size: "lg",
                                variant: "outline",
                                className: "px-8 py-6 text-lg border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300",
                                children: c.jsxs("a", {
                                    href: "https://wa.me/254796020142?text=Hello%2C%20I%20need%20help%20choosing%20the%20right%20product",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: ["Get Expert Help", c.jsx(Is, {
                                        className: "ml-2 h-5 w-5"
                                    })]
                                })
                            })]
                        })]
                    })
                })]
            }), c.jsx(Kg, {
                product: e,
                isOpen: !!e,
                onClose: () => t(null)
            })]
        })]
    })
}
const Qg = x.forwardRef( ({className: e, type: t, ...n}, r) => c.jsx("input", {
    type: t,
    className: Ft("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
Qg.displayName = "Input";
function CE() {
    const {categorySlug: e} = $S()
      , [t,n] = x.useState("")
      , [r,o] = x.useState(null)
      , [i,s] = x.useState("featured")
      , [a,l] = x.useState(null)
      , [u,d] = x.useState(!1)
      , f = fi.find(h => h.slug === e);
    if (!f)
        return c.jsx(eE, {
            to: "/404",
            replace: !0
        });
    const m = Ws(f.id)
      , p = m.map(h => h.price).sort( (h, v) => h - v);
    p[0],
    p[p.length - 1];
    const S = [{
        label: "All Prices",
        range: null
    }, {
        label: `Under ${Be(5e4)}`,
        range: [0, 5e4]
    }, {
        label: `${Be(5e4)} - ${Be(1e5)}`,
        range: [5e4, 1e5]
    }, {
        label: `${Be(1e5)} - ${Be(2e5)}`,
        range: [1e5, 2e5]
    }, {
        label: `Over ${Be(2e5)}`,
        range: [2e5, 1 / 0]
    }]
      , y = x.useMemo( () => {
        let h = t ? hE(t, f.id) : m;
        switch (r && (h = h.filter(v => v.price >= r[0] && v.price <= r[1])),
        i) {
        case "name":
            h.sort( (v, E) => v.name.localeCompare(E.name));
            break;
        case "price-low":
            h.sort( (v, E) => v.price - E.price);
            break;
        case "price-high":
            h.sort( (v, E) => E.price - v.price);
            break;
        case "featured":
            h.sort( (v, E) => v.featured && !E.featured ? -1 : !v.featured && E.featured ? 1 : 0);
            break
        }
        return h
    }
    , [m, t, r, i, f.id]);
    x.useEffect( () => ( () => {
        const E = document.querySelectorAll(".scroll-reveal")
          , C = new IntersectionObserver(b => {
            b.forEach(k => {
                k.isIntersecting && k.target.classList.add("revealed")
            }
            )
        }
        ,{
            threshold: .1,
            rootMargin: "0px 0px -50px 0px"
        });
        return E.forEach(b => C.observe(b)),
        () => C.disconnect()
    }
    )(), [y]);
    const w = () => {
        n(""),
        o(null),
        s("featured")
    }
      , g = t || r || i !== "featured";
    return c.jsxs(c.Fragment, {
        children: [c.jsx(Rc, {}), c.jsxs("main", {
            id: "main-content",
            className: "min-h-screen bg-background",
            children: [c.jsx("section", {
                className: "bg-gradient-hero py-16",
                children: c.jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: c.jsxs("div", {
                        className: "text-center scroll-reveal",
                        children: [c.jsx("h1", {
                            className: "text-4xl sm:text-5xl font-bold text-foreground mb-4",
                            children: f.name
                        }), c.jsx("p", {
                            className: "text-xl text-muted-foreground mb-6 max-w-2xl mx-auto",
                            children: f.description
                        }), c.jsxs(Yt, {
                            variant: "outline",
                            className: "text-lg px-4 py-2",
                            children: [y.length, " Products Available"]
                        })]
                    })
                })
            }), c.jsx("section", {
                className: "bg-white border-b border-border",
                children: c.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
                    children: [c.jsxs("div", {
                        className: "flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between",
                        children: [c.jsxs("div", {
                            className: "relative flex-1 max-w-md",
                            children: [c.jsx(nu, {
                                className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                            }), c.jsx(Qg, {
                                type: "search",
                                placeholder: `Search ${f.name.toLowerCase()}...`,
                                value: t,
                                onChange: h => n(h.target.value),
                                className: "pl-10 pr-4 py-2",
                                "aria-label": `Search ${f.name}`
                            })]
                        }), c.jsxs("div", {
                            className: "flex flex-wrap gap-3 items-center",
                            children: [c.jsxs("div", {
                                className: "relative",
                                children: [c.jsxs(Me, {
                                    variant: "outline",
                                    onClick: () => d(!u),
                                    className: "flex items-center gap-2",
                                    "aria-expanded": u,
                                    "aria-haspopup": "true",
                                    children: [c.jsx(Dx, {
                                        className: "h-4 w-4"
                                    }), "Price Filter", c.jsx(Lm, {
                                        className: `h-4 w-4 transition-transform ${u ? "rotate-180" : ""}`
                                    })]
                                }), u && c.jsx("div", {
                                    className: "absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border z-50 py-2",
                                    children: S.map(h => c.jsx("button", {
                                        onClick: () => {
                                            o(h.range),
                                            d(!1)
                                        }
                                        ,
                                        className: `w-full text-left px-4 py-2 hover:bg-muted/50 transition-colors ${JSON.stringify(r) === JSON.stringify(h.range) ? "bg-muted text-primary font-medium" : ""}`,
                                        type: "button",
                                        children: h.label
                                    }, h.label))
                                })]
                            }), c.jsxs("select", {
                                value: i,
                                onChange: h => s(h.target.value),
                                className: "px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                "aria-label": "Sort products by",
                                children: [c.jsx("option", {
                                    value: "featured",
                                    children: "Featured First"
                                }), c.jsx("option", {
                                    value: "name",
                                    children: "Name A-Z"
                                }), c.jsx("option", {
                                    value: "price-low",
                                    children: "Price: Low to High"
                                }), c.jsx("option", {
                                    value: "price-high",
                                    children: "Price: High to Low"
                                })]
                            }), g && c.jsxs(Me, {
                                variant: "outline",
                                onClick: w,
                                className: "flex items-center gap-2 text-muted-foreground hover:text-foreground",
                                children: [c.jsx(Br, {
                                    className: "h-4 w-4"
                                }), "Clear Filters"]
                            })]
                        })]
                    }), g && c.jsxs("div", {
                        className: "flex flex-wrap gap-2 mt-4",
                        children: [t && c.jsxs(Yt, {
                            variant: "secondary",
                            className: "flex items-center gap-1",
                            children: ['Search: "', t, '"', c.jsx("button", {
                                onClick: () => n(""),
                                className: "ml-1 hover:text-foreground",
                                "aria-label": "Clear search",
                                type: "button",
                                children: c.jsx(Br, {
                                    className: "h-3 w-3"
                                })
                            })]
                        }), r && c.jsxs(Yt, {
                            variant: "secondary",
                            className: "flex items-center gap-1",
                            children: ["Price: ", r[1] === 1 / 0 ? `Over ${Be(r[0])}` : `${Be(r[0])} - ${Be(r[1])}`, c.jsx("button", {
                                onClick: () => o(null),
                                className: "ml-1 hover:text-foreground",
                                "aria-label": "Clear price filter",
                                type: "button",
                                children: c.jsx(Br, {
                                    className: "h-3 w-3"
                                })
                            })]
                        })]
                    })]
                })
            }), c.jsx("section", {
                className: "py-12",
                children: c.jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: y.length > 0 ? c.jsx("div", {
                        className: "products-grid",
                        children: y.map( (h, v) => c.jsx("div", {
                            className: "scroll-reveal",
                            style: {
                                animationDelay: `${Math.min(v * 100, 800)}ms`
                            },
                            children: c.jsx(Wg, {
                                product: h,
                                onViewDetails: l
                            })
                        }, h.id))
                    }) : c.jsx("div", {
                        className: "text-center py-16",
                        children: c.jsxs("div", {
                            className: "max-w-md mx-auto",
                            children: [c.jsx(nu, {
                                className: "h-16 w-16 text-muted-foreground mx-auto mb-4"
                            }), c.jsx("h3", {
                                className: "text-2xl font-bold text-foreground mb-2",
                                children: "No products found"
                            }), c.jsx("p", {
                                className: "text-muted-foreground mb-6",
                                children: t ? `No products match "${t}" in ${f.name}` : "No products match your current filters"
                            }), g && c.jsx(Me, {
                                onClick: w,
                                variant: "outline",
                                children: "Clear all filters"
                            })]
                        })
                    })
                })
            }), c.jsx(Kg, {
                product: a,
                isOpen: !!a,
                onClose: () => l(null)
            })]
        })]
    })
}
const bE = () => c.jsxs(c.Fragment, {
    children: [c.jsx(Rc, {}), c.jsx("main", {
        className: "min-h-screen bg-background flex items-center justify-center",
        children: c.jsxs("div", {
            className: "max-w-md mx-auto text-center px-4",
            children: [c.jsxs("div", {
                className: "mb-8",
                children: [c.jsx("div", {
                    className: "text-9xl font-bold text-primary/20 mb-4",
                    children: "404"
                }), c.jsx("h1", {
                    className: "text-4xl font-bold text-foreground mb-4",
                    children: "Page Not Found"
                }), c.jsx("p", {
                    className: "text-xl text-muted-foreground mb-8",
                    children: "Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist."
                })]
            }), c.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [c.jsx(Me, {
                    asChild: !0,
                    size: "lg",
                    className: "group",
                    children: c.jsxs(St, {
                        to: "/",
                        children: [c.jsx(_x, {
                            className: "mr-2 h-5 w-5"
                        }), "Go Home"]
                    })
                }), c.jsx(Me, {
                    asChild: !0,
                    variant: "outline",
                    size: "lg",
                    className: "group",
                    children: c.jsxs(St, {
                        to: "/category/phones",
                        children: [c.jsx(nu, {
                            className: "mr-2 h-5 w-5"
                        }), "Browse Products"]
                    })
                })]
            }), c.jsx("div", {
                className: "mt-8 pt-8 border-t border-border",
                children: c.jsxs("p", {
                    className: "text-sm text-muted-foreground",
                    children: ["Need help? Contact us on", " ", c.jsx("a", {
                        href: "https://wa.me/254796020142?text=Hello%2C%20I%20need%20help%20with%20the%20website",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-primary hover:underline font-medium",
                        children: "WhatsApp"
                    })]
                })
            })]
        })
    })]
})
  , kE = new uS
  , PE = () => c.jsx(dS, {
    client: kE,
    children: c.jsxs(F2, {
        children: [c.jsx(E1, {}), c.jsx(ew, {}), c.jsx(uE, {
            children: c.jsxs(nE, {
                children: [c.jsx(cs, {
                    path: "/",
                    element: c.jsx(EE, {})
                }), c.jsx(cs, {
                    path: "/category/:categorySlug",
                    element: c.jsx(CE, {})
                }), c.jsx(cs, {
                    path: "*",
                    element: c.jsx(bE, {})
                })]
            })
        })]
    })
});
nm(document.getElementById("root")).render(c.jsx(PE, {}));
