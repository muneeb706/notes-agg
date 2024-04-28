var Bh = Object.defineProperty;
var Uh = (e, t, n) =>
  t in e
    ? Bh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Ra = (e, t, n) => (Uh(e, typeof t != 'symbol' ? t + '' : t, n), n);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function ho(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Sf = { exports: {} },
  zi = {},
  Cf = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vo = Symbol.for('react.element'),
  Hh = Symbol.for('react.portal'),
  Wh = Symbol.for('react.fragment'),
  Vh = Symbol.for('react.strict_mode'),
  Kh = Symbol.for('react.profiler'),
  bh = Symbol.for('react.provider'),
  Qh = Symbol.for('react.context'),
  Xh = Symbol.for('react.forward_ref'),
  Gh = Symbol.for('react.suspense'),
  Yh = Symbol.for('react.memo'),
  Jh = Symbol.for('react.lazy'),
  Ta = Symbol.iterator;
function qh(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ta && e[Ta]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var kf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Of = Object.assign,
  Nf = {};
function cr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nf),
    (this.updater = n || kf);
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
cr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Rf() {}
Rf.prototype = cr.prototype;
function ou(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nf),
    (this.updater = n || kf);
}
var iu = (ou.prototype = new Rf());
iu.constructor = ou;
Of(iu, cr.prototype);
iu.isPureReactComponent = !0;
var Pa = Array.isArray,
  Tf = Object.prototype.hasOwnProperty,
  lu = { current: null },
  Pf = { key: !0, ref: !0, __self: !0, __source: !0 };
function jf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Tf.call(t, r) && !Pf.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: vo,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: lu.current,
  };
}
function Zh(e, t) {
  return {
    $$typeof: vo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function su(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === vo;
}
function ev(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ja = /\/+/g;
function pl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? ev('' + e.key)
    : t.toString(36);
}
function Xo(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case vo:
          case Hh:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + pl(l, 0) : r),
      Pa(o)
        ? ((n = ''),
          e != null && (n = e.replace(ja, '$&/') + '/'),
          Xo(o, t, n, '', function (a) {
            return a;
          }))
        : o != null &&
          (su(o) &&
            (o = Zh(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ''
                  : ('' + o.key).replace(ja, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), Pa(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + pl(i, s);
      l += Xo(i, t, n, u, o);
    }
  else if (((u = qh(e)), typeof u == 'function'))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + pl(i, s++)), (l += Xo(i, t, n, u, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return l;
}
function To(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Xo(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function tv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Re = { current: null },
  Go = { transition: null },
  nv = {
    ReactCurrentDispatcher: Re,
    ReactCurrentBatchConfig: Go,
    ReactCurrentOwner: lu,
  };
z.Children = {
  map: To,
  forEach: function (e, t, n) {
    To(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      To(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      To(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!su(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
z.Component = cr;
z.Fragment = Wh;
z.Profiler = Kh;
z.PureComponent = ou;
z.StrictMode = Vh;
z.Suspense = Gh;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nv;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var r = Of({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = lu.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Tf.call(t, u) &&
        !Pf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: vo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Qh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: bh, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = jf;
z.createFactory = function (e) {
  var t = jf.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Xh, render: e };
};
z.isValidElement = su;
z.lazy = function (e) {
  return { $$typeof: Jh, _payload: { _status: -1, _result: e }, _init: tv };
};
z.memo = function (e, t) {
  return { $$typeof: Yh, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Go.transition;
  Go.transition = {};
  try {
    e();
  } finally {
    Go.transition = t;
  }
};
z.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
z.useCallback = function (e, t) {
  return Re.current.useCallback(e, t);
};
z.useContext = function (e) {
  return Re.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Re.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return Re.current.useEffect(e, t);
};
z.useId = function () {
  return Re.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return Re.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return Re.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return Re.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return Re.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return Re.current.useRef(e);
};
z.useState = function (e) {
  return Re.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return Re.current.useTransition();
};
z.version = '18.2.0';
Cf.exports = z;
var y = Cf.exports;
const ye = ho(y);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rv = y,
  ov = Symbol.for('react.element'),
  iv = Symbol.for('react.fragment'),
  lv = Object.prototype.hasOwnProperty,
  sv = rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  uv = { key: !0, ref: !0, __self: !0, __source: !0 };
function _f(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) lv.call(t, r) && !uv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: ov,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: sv.current,
  };
}
zi.Fragment = iv;
zi.jsx = _f;
zi.jsxs = _f;
Sf.exports = zi;
var N = Sf.exports,
  ql = {},
  $f = { exports: {} },
  Ue = {},
  Df = { exports: {} },
  Lf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, D) {
    var $ = P.length;
    P.push(D);
    e: for (; 0 < $; ) {
      var U = ($ - 1) >>> 1,
        K = P[U];
      if (0 < o(K, D)) (P[U] = D), (P[$] = K), ($ = U);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var D = P[0],
      $ = P.pop();
    if ($ !== D) {
      P[0] = $;
      e: for (var U = 0, K = P.length, xe = K >>> 1; U < xe; ) {
        var se = 2 * (U + 1) - 1,
          Q = P[se],
          fe = se + 1,
          qe = P[fe];
        if (0 > o(Q, $))
          fe < K && 0 > o(qe, Q)
            ? ((P[U] = qe), (P[fe] = $), (U = fe))
            : ((P[U] = Q), (P[se] = $), (U = se));
        else if (fe < K && 0 > o(qe, $)) (P[U] = qe), (P[fe] = $), (U = fe);
        else break e;
      }
    }
    return D;
  }
  function o(P, D) {
    var $ = P.sortIndex - D.sortIndex;
    return $ !== 0 ? $ : P.id - D.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var u = [],
    a = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    v = !1,
    w = !1,
    E = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(P) {
    for (var D = n(a); D !== null; ) {
      if (D.callback === null) r(a);
      else if (D.startTime <= P)
        r(a), (D.sortIndex = D.expirationTime), t(u, D);
      else break;
      D = n(a);
    }
  }
  function x(P) {
    if (((w = !1), h(P), !v))
      if (n(u) !== null) (v = !0), V(S);
      else {
        var D = n(a);
        D !== null && Y(x, D.startTime - P);
      }
  }
  function S(P, D) {
    (v = !1), w && ((w = !1), m(R), (R = -1)), (g = !0);
    var $ = d;
    try {
      for (
        h(D), f = n(u);
        f !== null && (!(f.expirationTime > D) || (P && !L()));

      ) {
        var U = f.callback;
        if (typeof U == 'function') {
          (f.callback = null), (d = f.priorityLevel);
          var K = U(f.expirationTime <= D);
          (D = e.unstable_now()),
            typeof K == 'function' ? (f.callback = K) : f === n(u) && r(u),
            h(D);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var xe = !0;
      else {
        var se = n(a);
        se !== null && Y(x, se.startTime - D), (xe = !1);
      }
      return xe;
    } finally {
      (f = null), (d = $), (g = !1);
    }
  }
  var C = !1,
    O = null,
    R = -1,
    A = 5,
    j = -1;
  function L() {
    return !(e.unstable_now() - j < A);
  }
  function M() {
    if (O !== null) {
      var P = e.unstable_now();
      j = P;
      var D = !0;
      try {
        D = O(!0, P);
      } finally {
        D ? I() : ((C = !1), (O = null));
      }
    } else C = !1;
  }
  var I;
  if (typeof p == 'function')
    I = function () {
      p(M);
    };
  else if (typeof MessageChannel < 'u') {
    var X = new MessageChannel(),
      oe = X.port2;
    (X.port1.onmessage = M),
      (I = function () {
        oe.postMessage(null);
      });
  } else
    I = function () {
      E(M, 0);
    };
  function V(P) {
    (O = P), C || ((C = !0), I());
  }
  function Y(P, D) {
    R = E(function () {
      P(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), V(S));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (A = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (P) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = d;
      }
      var $ = d;
      d = D;
      try {
        return P();
      } finally {
        d = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, D) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var $ = d;
      d = P;
      try {
        return D();
      } finally {
        d = $;
      }
    }),
    (e.unstable_scheduleCallback = function (P, D, $) {
      var U = e.unstable_now();
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? U + $ : U))
          : ($ = U),
        P)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = $ + K),
        (P = {
          id: c++,
          callback: D,
          priorityLevel: P,
          startTime: $,
          expirationTime: K,
          sortIndex: -1,
        }),
        $ > U
          ? ((P.sortIndex = $),
            t(a, P),
            n(u) === null &&
              P === n(a) &&
              (w ? (m(R), (R = -1)) : (w = !0), Y(x, $ - U)))
          : ((P.sortIndex = K), t(u, P), v || g || ((v = !0), V(S))),
        P
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (P) {
      var D = d;
      return function () {
        var $ = d;
        d = D;
        try {
          return P.apply(this, arguments);
        } finally {
          d = $;
        }
      };
    });
})(Lf);
Df.exports = Lf;
var av = Df.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Af = y,
  ze = av;
function T(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Mf = new Set(),
  br = {};
function Cn(e, t) {
  qn(e, t), qn(e + 'Capture', t);
}
function qn(e, t) {
  for (br[e] = t, e = 0; e < t.length; e++) Mf.add(t[e]);
}
var Nt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Zl = Object.prototype.hasOwnProperty,
  cv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _a = {},
  $a = {};
function fv(e) {
  return Zl.call($a, e)
    ? !0
    : Zl.call(_a, e)
      ? !1
      : cv.test(e)
        ? ($a[e] = !0)
        : ((_a[e] = !0), !1);
}
function dv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function pv(e, t, n, r) {
  if (t === null || typeof t > 'u' || dv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Te(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var we = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    we[e] = new Te(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  we[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  we[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  we[e] = new Te(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    we[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  we[e] = new Te(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  we[e] = new Te(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  we[e] = new Te(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  we[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var uu = /[\-:]([a-z])/g;
function au(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(uu, au);
    we[t] = new Te(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(uu, au);
    we[t] = new Te(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(uu, au);
  we[t] = new Te(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  we[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new Te(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  we[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cu(e, t, n, r) {
  var o = we.hasOwnProperty(t) ? we[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (pv(t, n, o, r) && (n = null),
    r || o === null
      ? fv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = Af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Po = Symbol.for('react.element'),
  Dn = Symbol.for('react.portal'),
  Ln = Symbol.for('react.fragment'),
  fu = Symbol.for('react.strict_mode'),
  es = Symbol.for('react.profiler'),
  If = Symbol.for('react.provider'),
  Ff = Symbol.for('react.context'),
  du = Symbol.for('react.forward_ref'),
  ts = Symbol.for('react.suspense'),
  ns = Symbol.for('react.suspense_list'),
  pu = Symbol.for('react.memo'),
  At = Symbol.for('react.lazy'),
  zf = Symbol.for('react.offscreen'),
  Da = Symbol.iterator;
function gr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Da && e[Da]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var re = Object.assign,
  ml;
function Pr(e) {
  if (ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ml = (t && t[1]) || '';
    }
  return (
    `
` +
    ml +
    e
  );
}
var hl = !1;
function vl(e, t) {
  if (!e || hl) return '';
  hl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var u =
                  `
` + o[l].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (hl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Pr(e) : '';
}
function mv(e) {
  switch (e.tag) {
    case 5:
      return Pr(e.type);
    case 16:
      return Pr('Lazy');
    case 13:
      return Pr('Suspense');
    case 19:
      return Pr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = vl(e.type, !1)), e;
    case 11:
      return (e = vl(e.type.render, !1)), e;
    case 1:
      return (e = vl(e.type, !0)), e;
    default:
      return '';
  }
}
function rs(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Ln:
      return 'Fragment';
    case Dn:
      return 'Portal';
    case es:
      return 'Profiler';
    case fu:
      return 'StrictMode';
    case ts:
      return 'Suspense';
    case ns:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ff:
        return (e.displayName || 'Context') + '.Consumer';
      case If:
        return (e._context.displayName || 'Context') + '.Provider';
      case du:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case pu:
        return (
          (t = e.displayName || null), t !== null ? t : rs(e.type) || 'Memo'
        );
      case At:
        (t = e._payload), (e = e._init);
        try {
          return rs(e(t));
        } catch {}
    }
  return null;
}
function hv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return rs(t);
    case 8:
      return t === fu ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Jt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Bf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function vv(e) {
  var t = Bf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = '' + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = '' + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function jo(e) {
  e._valueTracker || (e._valueTracker = vv(e));
}
function Uf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Bf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ci(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function os(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function La(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Jt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Hf(e, t) {
  (t = t.checked), t != null && cu(e, 'checked', t, !1);
}
function is(e, t) {
  Hf(e, t);
  var n = Jt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? ls(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ls(e, t.type, Jt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Aa(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function ls(e, t, n) {
  (t !== 'number' || ci(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var jr = Array.isArray;
function bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Jt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ss(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ma(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (jr(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Jt(n) };
}
function Wf(e, t) {
  var n = Jt(t.value),
    r = Jt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Ia(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Vf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function us(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Vf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var _o,
  Kf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        _o = _o || document.createElement('div'),
          _o.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = _o.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Lr = {
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
    strokeWidth: !0,
  },
  yv = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Lr).forEach(function (e) {
  yv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Lr[t] = Lr[e]);
  });
});
function bf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Lr.hasOwnProperty(e) && Lr[e])
      ? ('' + t).trim()
      : t + 'px';
}
function Qf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = bf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var gv = re(
  { menuitem: !0 },
  {
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
    wbr: !0,
  },
);
function as(e, t) {
  if (t) {
    if (gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(T(62));
  }
}
function cs(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var fs = null;
function mu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ds = null,
  Qn = null,
  Xn = null;
function Fa(e) {
  if ((e = wo(e))) {
    if (typeof ds != 'function') throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Vi(t)), ds(e.stateNode, e.type, t));
  }
}
function Xf(e) {
  Qn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Qn = e);
}
function Gf() {
  if (Qn) {
    var e = Qn,
      t = Xn;
    if (((Xn = Qn = null), Fa(e), t)) for (e = 0; e < t.length; e++) Fa(t[e]);
  }
}
function Yf(e, t) {
  return e(t);
}
function Jf() {}
var yl = !1;
function qf(e, t, n) {
  if (yl) return e(t, n);
  yl = !0;
  try {
    return Yf(e, t, n);
  } finally {
    (yl = !1), (Qn !== null || Xn !== null) && (Jf(), Gf());
  }
}
function Xr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Vi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(T(231, t, typeof n));
  return n;
}
var ps = !1;
if (Nt)
  try {
    var wr = {};
    Object.defineProperty(wr, 'passive', {
      get: function () {
        ps = !0;
      },
    }),
      window.addEventListener('test', wr, wr),
      window.removeEventListener('test', wr, wr);
  } catch {
    ps = !1;
  }
function wv(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var Ar = !1,
  fi = null,
  di = !1,
  ms = null,
  xv = {
    onError: function (e) {
      (Ar = !0), (fi = e);
    },
  };
function Ev(e, t, n, r, o, i, l, s, u) {
  (Ar = !1), (fi = null), wv.apply(xv, arguments);
}
function Sv(e, t, n, r, o, i, l, s, u) {
  if ((Ev.apply(this, arguments), Ar)) {
    if (Ar) {
      var a = fi;
      (Ar = !1), (fi = null);
    } else throw Error(T(198));
    di || ((di = !0), (ms = a));
  }
}
function kn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Zf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function za(e) {
  if (kn(e) !== e) throw Error(T(188));
}
function Cv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = kn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return za(o), e;
        if (i === r) return za(o), t;
        i = i.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function ed(e) {
  return (e = Cv(e)), e !== null ? td(e) : null;
}
function td(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = td(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var nd = ze.unstable_scheduleCallback,
  Ba = ze.unstable_cancelCallback,
  kv = ze.unstable_shouldYield,
  Ov = ze.unstable_requestPaint,
  le = ze.unstable_now,
  Nv = ze.unstable_getCurrentPriorityLevel,
  hu = ze.unstable_ImmediatePriority,
  rd = ze.unstable_UserBlockingPriority,
  pi = ze.unstable_NormalPriority,
  Rv = ze.unstable_LowPriority,
  od = ze.unstable_IdlePriority,
  Bi = null,
  ft = null;
function Tv(e) {
  if (ft && typeof ft.onCommitFiberRoot == 'function')
    try {
      ft.onCommitFiberRoot(Bi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ot = Math.clz32 ? Math.clz32 : _v,
  Pv = Math.log,
  jv = Math.LN2;
function _v(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Pv(e) / jv) | 0)) | 0;
}
var $o = 64,
  Do = 4194304;
function _r(e) {
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
      return e;
  }
}
function mi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = _r(s)) : ((i &= l), i !== 0 && (r = _r(i)));
  } else (l = n & ~o), l !== 0 ? (r = _r(l)) : i !== 0 && (r = _r(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ot(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function $v(e, t) {
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
      return -1;
  }
}
function Dv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - ot(i),
      s = 1 << l,
      u = o[l];
    u === -1
      ? (!(s & n) || s & r) && (o[l] = $v(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function hs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function id() {
  var e = $o;
  return ($o <<= 1), !($o & 4194240) && ($o = 64), e;
}
function gl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function yo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ot(t)),
    (e[t] = n);
}
function Lv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ot(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function vu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ot(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var b = 0;
function ld(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var sd,
  yu,
  ud,
  ad,
  cd,
  vs = !1,
  Lo = [],
  Wt = null,
  Vt = null,
  Kt = null,
  Gr = new Map(),
  Yr = new Map(),
  Ft = [],
  Av =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Ua(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Wt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Vt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Kt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Gr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Yr.delete(t.pointerId);
  }
}
function xr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = wo(t)), t !== null && yu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Mv(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Wt = xr(Wt, e, t, n, r, o)), !0;
    case 'dragenter':
      return (Vt = xr(Vt, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Kt = xr(Kt, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Gr.set(i, xr(Gr.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), Yr.set(i, xr(Yr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function fd(e) {
  var t = an(e.target);
  if (t !== null) {
    var n = kn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zf(n)), t !== null)) {
          (e.blockedOn = t),
            cd(e.priority, function () {
              ud(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Yo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ys(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (fs = r), n.target.dispatchEvent(r), (fs = null);
    } else return (t = wo(n)), t !== null && yu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ha(e, t, n) {
  Yo(e) && n.delete(t);
}
function Iv() {
  (vs = !1),
    Wt !== null && Yo(Wt) && (Wt = null),
    Vt !== null && Yo(Vt) && (Vt = null),
    Kt !== null && Yo(Kt) && (Kt = null),
    Gr.forEach(Ha),
    Yr.forEach(Ha);
}
function Er(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vs ||
      ((vs = !0),
      ze.unstable_scheduleCallback(ze.unstable_NormalPriority, Iv)));
}
function Jr(e) {
  function t(o) {
    return Er(o, e);
  }
  if (0 < Lo.length) {
    Er(Lo[0], e);
    for (var n = 1; n < Lo.length; n++) {
      var r = Lo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wt !== null && Er(Wt, e),
      Vt !== null && Er(Vt, e),
      Kt !== null && Er(Kt, e),
      Gr.forEach(t),
      Yr.forEach(t),
      n = 0;
    n < Ft.length;
    n++
  )
    (r = Ft[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ft.length && ((n = Ft[0]), n.blockedOn === null); )
    fd(n), n.blockedOn === null && Ft.shift();
}
var Gn = _t.ReactCurrentBatchConfig,
  hi = !0;
function Fv(e, t, n, r) {
  var o = b,
    i = Gn.transition;
  Gn.transition = null;
  try {
    (b = 1), gu(e, t, n, r);
  } finally {
    (b = o), (Gn.transition = i);
  }
}
function zv(e, t, n, r) {
  var o = b,
    i = Gn.transition;
  Gn.transition = null;
  try {
    (b = 4), gu(e, t, n, r);
  } finally {
    (b = o), (Gn.transition = i);
  }
}
function gu(e, t, n, r) {
  if (hi) {
    var o = ys(e, t, n, r);
    if (o === null) Tl(e, t, r, vi, n), Ua(e, r);
    else if (Mv(o, e, t, n, r)) r.stopPropagation();
    else if ((Ua(e, r), t & 4 && -1 < Av.indexOf(e))) {
      for (; o !== null; ) {
        var i = wo(o);
        if (
          (i !== null && sd(i),
          (i = ys(e, t, n, r)),
          i === null && Tl(e, t, r, vi, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Tl(e, t, r, null, n);
  }
}
var vi = null;
function ys(e, t, n, r) {
  if (((vi = null), (e = mu(r)), (e = an(e)), e !== null))
    if (((t = kn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (vi = e), null;
}
function dd(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Nv()) {
        case hu:
          return 1;
        case rd:
          return 4;
        case pi:
        case Rv:
          return 16;
        case od:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bt = null,
  wu = null,
  Jo = null;
function pd() {
  if (Jo) return Jo;
  var e,
    t = wu,
    n = t.length,
    r,
    o = 'value' in Bt ? Bt.value : Bt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Jo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function qo(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ao() {
  return !0;
}
function Wa() {
  return !1;
}
function He(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ao
        : Wa),
      (this.isPropagationStopped = Wa),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ao));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ao));
      },
      persist: function () {},
      isPersistent: Ao,
    }),
    t
  );
}
var fr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xu = He(fr),
  go = re({}, fr, { view: 0, detail: 0 }),
  Bv = He(go),
  wl,
  xl,
  Sr,
  Ui = re({}, go, {
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
    getModifierState: Eu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Sr &&
            (Sr && e.type === 'mousemove'
              ? ((wl = e.screenX - Sr.screenX), (xl = e.screenY - Sr.screenY))
              : (xl = wl = 0),
            (Sr = e)),
          wl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : xl;
    },
  }),
  Va = He(Ui),
  Uv = re({}, Ui, { dataTransfer: 0 }),
  Hv = He(Uv),
  Wv = re({}, go, { relatedTarget: 0 }),
  El = He(Wv),
  Vv = re({}, fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kv = He(Vv),
  bv = re({}, fr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Qv = He(bv),
  Xv = re({}, fr, { data: 0 }),
  Ka = He(Xv),
  Gv = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Yv = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Jv = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function qv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Jv[e]) ? !!t[e] : !1;
}
function Eu() {
  return qv;
}
var Zv = re({}, go, {
    key: function (e) {
      if (e.key) {
        var t = Gv[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = qo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Yv[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Eu,
    charCode: function (e) {
      return e.type === 'keypress' ? qo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? qo(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  ey = He(Zv),
  ty = re({}, Ui, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ba = He(ty),
  ny = re({}, go, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Eu,
  }),
  ry = He(ny),
  oy = re({}, fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iy = He(oy),
  ly = re({}, Ui, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  sy = He(ly),
  uy = [9, 13, 27, 32],
  Su = Nt && 'CompositionEvent' in window,
  Mr = null;
Nt && 'documentMode' in document && (Mr = document.documentMode);
var ay = Nt && 'TextEvent' in window && !Mr,
  md = Nt && (!Su || (Mr && 8 < Mr && 11 >= Mr)),
  Qa = ' ',
  Xa = !1;
function hd(e, t) {
  switch (e) {
    case 'keyup':
      return uy.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function vd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var An = !1;
function cy(e, t) {
  switch (e) {
    case 'compositionend':
      return vd(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Xa = !0), Qa);
    case 'textInput':
      return (e = t.data), e === Qa && Xa ? null : e;
    default:
      return null;
  }
}
function fy(e, t) {
  if (An)
    return e === 'compositionend' || (!Su && hd(e, t))
      ? ((e = pd()), (Jo = wu = Bt = null), (An = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return md && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var dy = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
  week: !0,
};
function Ga(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!dy[e.type] : t === 'textarea';
}
function yd(e, t, n, r) {
  Xf(r),
    (t = yi(t, 'onChange')),
    0 < t.length &&
      ((n = new xu('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ir = null,
  qr = null;
function py(e) {
  Td(e, 0);
}
function Hi(e) {
  var t = Fn(e);
  if (Uf(t)) return e;
}
function my(e, t) {
  if (e === 'change') return t;
}
var gd = !1;
if (Nt) {
  var Sl;
  if (Nt) {
    var Cl = 'oninput' in document;
    if (!Cl) {
      var Ya = document.createElement('div');
      Ya.setAttribute('oninput', 'return;'),
        (Cl = typeof Ya.oninput == 'function');
    }
    Sl = Cl;
  } else Sl = !1;
  gd = Sl && (!document.documentMode || 9 < document.documentMode);
}
function Ja() {
  Ir && (Ir.detachEvent('onpropertychange', wd), (qr = Ir = null));
}
function wd(e) {
  if (e.propertyName === 'value' && Hi(qr)) {
    var t = [];
    yd(t, qr, e, mu(e)), qf(py, t);
  }
}
function hy(e, t, n) {
  e === 'focusin'
    ? (Ja(), (Ir = t), (qr = n), Ir.attachEvent('onpropertychange', wd))
    : e === 'focusout' && Ja();
}
function vy(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Hi(qr);
}
function yy(e, t) {
  if (e === 'click') return Hi(t);
}
function gy(e, t) {
  if (e === 'input' || e === 'change') return Hi(t);
}
function wy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var lt = typeof Object.is == 'function' ? Object.is : wy;
function Zr(e, t) {
  if (lt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Zl.call(t, o) || !lt(e[o], t[o])) return !1;
  }
  return !0;
}
function qa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Za(e, t) {
  var n = qa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = qa(n);
  }
}
function xd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? xd(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Ed() {
  for (var e = window, t = ci(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ci(e.document);
  }
  return t;
}
function Cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function xy(e) {
  var t = Ed(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    xd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Cu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Za(n, i));
        var l = Za(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ey = Nt && 'documentMode' in document && 11 >= document.documentMode,
  Mn = null,
  gs = null,
  Fr = null,
  ws = !1;
function ec(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ws ||
    Mn == null ||
    Mn !== ci(r) ||
    ((r = Mn),
    'selectionStart' in r && Cu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fr && Zr(Fr, r)) ||
      ((Fr = r),
      (r = yi(gs, 'onSelect')),
      0 < r.length &&
        ((t = new xu('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mn))));
}
function Mo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var In = {
    animationend: Mo('Animation', 'AnimationEnd'),
    animationiteration: Mo('Animation', 'AnimationIteration'),
    animationstart: Mo('Animation', 'AnimationStart'),
    transitionend: Mo('Transition', 'TransitionEnd'),
  },
  kl = {},
  Sd = {};
Nt &&
  ((Sd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete In.animationend.animation,
    delete In.animationiteration.animation,
    delete In.animationstart.animation),
  'TransitionEvent' in window || delete In.transitionend.transition);
function Wi(e) {
  if (kl[e]) return kl[e];
  if (!In[e]) return e;
  var t = In[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Sd) return (kl[e] = t[n]);
  return e;
}
var Cd = Wi('animationend'),
  kd = Wi('animationiteration'),
  Od = Wi('animationstart'),
  Nd = Wi('transitionend'),
  Rd = new Map(),
  tc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function en(e, t) {
  Rd.set(e, t), Cn(t, [e]);
}
for (var Ol = 0; Ol < tc.length; Ol++) {
  var Nl = tc[Ol],
    Sy = Nl.toLowerCase(),
    Cy = Nl[0].toUpperCase() + Nl.slice(1);
  en(Sy, 'on' + Cy);
}
en(Cd, 'onAnimationEnd');
en(kd, 'onAnimationIteration');
en(Od, 'onAnimationStart');
en('dblclick', 'onDoubleClick');
en('focusin', 'onFocus');
en('focusout', 'onBlur');
en(Nd, 'onTransitionEnd');
qn('onMouseEnter', ['mouseout', 'mouseover']);
qn('onMouseLeave', ['mouseout', 'mouseover']);
qn('onPointerEnter', ['pointerout', 'pointerover']);
qn('onPointerLeave', ['pointerout', 'pointerover']);
Cn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
Cn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
Cn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Cn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
Cn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
Cn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var $r =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  ky = new Set('cancel close invalid load scroll toggle'.split(' ').concat($r));
function nc(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Sv(r, t, void 0, e), (e.currentTarget = null);
}
function Td(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== i && o.isPropagationStopped())) break e;
          nc(o, s, a), (i = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          nc(o, s, a), (i = u);
        }
    }
  }
  if (di) throw ((e = ms), (di = !1), (ms = null), e);
}
function J(e, t) {
  var n = t[ks];
  n === void 0 && (n = t[ks] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Pd(t, e, 2, !1), n.add(r));
}
function Rl(e, t, n) {
  var r = 0;
  t && (r |= 4), Pd(n, e, r, t);
}
var Io = '_reactListening' + Math.random().toString(36).slice(2);
function eo(e) {
  if (!e[Io]) {
    (e[Io] = !0),
      Mf.forEach(function (n) {
        n !== 'selectionchange' && (ky.has(n) || Rl(n, !1, e), Rl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Io] || ((t[Io] = !0), Rl('selectionchange', !1, t));
  }
}
function Pd(e, t, n, r) {
  switch (dd(t)) {
    case 1:
      var o = Fv;
      break;
    case 4:
      o = zv;
      break;
    default:
      o = gu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ps ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Tl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = an(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  qf(function () {
    var a = i,
      c = mu(n),
      f = [];
    e: {
      var d = Rd.get(e);
      if (d !== void 0) {
        var g = xu,
          v = e;
        switch (e) {
          case 'keypress':
            if (qo(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = ey;
            break;
          case 'focusin':
            (v = 'focus'), (g = El);
            break;
          case 'focusout':
            (v = 'blur'), (g = El);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = El;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = Va;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = Hv;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = ry;
            break;
          case Cd:
          case kd:
          case Od:
            g = Kv;
            break;
          case Nd:
            g = iy;
            break;
          case 'scroll':
            g = Bv;
            break;
          case 'wheel':
            g = sy;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = Qv;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = ba;
        }
        var w = (t & 4) !== 0,
          E = !w && e === 'scroll',
          m = w ? (d !== null ? d + 'Capture' : null) : d;
        w = [];
        for (var p = a, h; p !== null; ) {
          h = p;
          var x = h.stateNode;
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x),
              m !== null && ((x = Xr(p, m)), x != null && w.push(to(p, x, h)))),
            E)
          )
            break;
          p = p.return;
        }
        0 < w.length &&
          ((d = new g(d, v, null, n, c)), f.push({ event: d, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== fs &&
            (v = n.relatedTarget || n.fromElement) &&
            (an(v) || v[Rt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = a),
              (v = v ? an(v) : null),
              v !== null &&
                ((E = kn(v)), v !== E || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = a)),
          g !== v)
        ) {
          if (
            ((w = Va),
            (x = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = ba),
              (x = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (p = 'pointer')),
            (E = g == null ? d : Fn(g)),
            (h = v == null ? d : Fn(v)),
            (d = new w(x, p + 'leave', g, n, c)),
            (d.target = E),
            (d.relatedTarget = h),
            (x = null),
            an(c) === a &&
              ((w = new w(m, p + 'enter', v, n, c)),
              (w.target = h),
              (w.relatedTarget = E),
              (x = w)),
            (E = x),
            g && v)
          )
            t: {
              for (w = g, m = v, p = 0, h = w; h; h = jn(h)) p++;
              for (h = 0, x = m; x; x = jn(x)) h++;
              for (; 0 < p - h; ) (w = jn(w)), p--;
              for (; 0 < h - p; ) (m = jn(m)), h--;
              for (; p--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = jn(w)), (m = jn(m));
              }
              w = null;
            }
          else w = null;
          g !== null && rc(f, d, g, w, !1),
            v !== null && E !== null && rc(f, E, v, w, !0);
        }
      }
      e: {
        if (
          ((d = a ? Fn(a) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var S = my;
        else if (Ga(d))
          if (gd) S = gy;
          else {
            S = vy;
            var C = hy;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (S = yy);
        if (S && (S = S(e, a))) {
          yd(f, S, n, c);
          break e;
        }
        C && C(e, d, a),
          e === 'focusout' &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === 'number' &&
            ls(d, 'number', d.value);
      }
      switch (((C = a ? Fn(a) : window), e)) {
        case 'focusin':
          (Ga(C) || C.contentEditable === 'true') &&
            ((Mn = C), (gs = a), (Fr = null));
          break;
        case 'focusout':
          Fr = gs = Mn = null;
          break;
        case 'mousedown':
          ws = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (ws = !1), ec(f, n, c);
          break;
        case 'selectionchange':
          if (Ey) break;
        case 'keydown':
        case 'keyup':
          ec(f, n, c);
      }
      var O;
      if (Su)
        e: {
          switch (e) {
            case 'compositionstart':
              var R = 'onCompositionStart';
              break e;
            case 'compositionend':
              R = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              R = 'onCompositionUpdate';
              break e;
          }
          R = void 0;
        }
      else
        An
          ? hd(e, n) && (R = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart');
      R &&
        (md &&
          n.locale !== 'ko' &&
          (An || R !== 'onCompositionStart'
            ? R === 'onCompositionEnd' && An && (O = pd())
            : ((Bt = c),
              (wu = 'value' in Bt ? Bt.value : Bt.textContent),
              (An = !0))),
        (C = yi(a, R)),
        0 < C.length &&
          ((R = new Ka(R, e, null, n, c)),
          f.push({ event: R, listeners: C }),
          O ? (R.data = O) : ((O = vd(n)), O !== null && (R.data = O)))),
        (O = ay ? cy(e, n) : fy(e, n)) &&
          ((a = yi(a, 'onBeforeInput')),
          0 < a.length &&
            ((c = new Ka('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: a }),
            (c.data = O)));
    }
    Td(f, t);
  });
}
function to(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function yi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Xr(e, n)),
      i != null && r.unshift(to(e, i, o)),
      (i = Xr(e, t)),
      i != null && r.push(to(e, i, o))),
      (e = e.return);
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function rc(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = Xr(n, i)), u != null && l.unshift(to(n, u, s)))
        : o || ((u = Xr(n, i)), u != null && l.push(to(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Oy = /\r\n?/g,
  Ny = /\u0000|\uFFFD/g;
function oc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Oy,
      `
`,
    )
    .replace(Ny, '');
}
function Fo(e, t, n) {
  if (((t = oc(t)), oc(e) !== t && n)) throw Error(T(425));
}
function gi() {}
var xs = null,
  Es = null;
function Ss(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Cs = typeof setTimeout == 'function' ? setTimeout : void 0,
  Ry = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  ic = typeof Promise == 'function' ? Promise : void 0,
  Ty =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ic < 'u'
        ? function (e) {
            return ic.resolve(null).then(e).catch(Py);
          }
        : Cs;
function Py(e) {
  setTimeout(function () {
    throw e;
  });
}
function Pl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Jr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Jr(t);
}
function bt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function lc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var dr = Math.random().toString(36).slice(2),
  at = '__reactFiber$' + dr,
  no = '__reactProps$' + dr,
  Rt = '__reactContainer$' + dr,
  ks = '__reactEvents$' + dr,
  jy = '__reactListeners$' + dr,
  _y = '__reactHandles$' + dr;
function an(e) {
  var t = e[at];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rt] || n[at])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = lc(e); e !== null; ) {
          if ((n = e[at])) return n;
          e = lc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function wo(e) {
  return (
    (e = e[at] || e[Rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Vi(e) {
  return e[no] || null;
}
var Os = [],
  zn = -1;
function tn(e) {
  return { current: e };
}
function q(e) {
  0 > zn || ((e.current = Os[zn]), (Os[zn] = null), zn--);
}
function G(e, t) {
  zn++, (Os[zn] = e.current), (e.current = t);
}
var qt = {},
  ke = tn(qt),
  _e = tn(!1),
  vn = qt;
function Zn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function $e(e) {
  return (e = e.childContextTypes), e != null;
}
function wi() {
  q(_e), q(ke);
}
function sc(e, t, n) {
  if (ke.current !== qt) throw Error(T(168));
  G(ke, t), G(_e, n);
}
function jd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(T(108, hv(e) || 'Unknown', o));
  return re({}, n, r);
}
function xi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || qt),
    (vn = ke.current),
    G(ke, e),
    G(_e, _e.current),
    !0
  );
}
function uc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = jd(e, t, vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(_e),
      q(ke),
      G(ke, e))
    : q(_e),
    G(_e, n);
}
var gt = null,
  Ki = !1,
  jl = !1;
function _d(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
function $y(e) {
  (Ki = !0), _d(e);
}
function nn() {
  if (!jl && gt !== null) {
    jl = !0;
    var e = 0,
      t = b;
    try {
      var n = gt;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (gt = null), (Ki = !1);
    } catch (o) {
      throw (gt !== null && (gt = gt.slice(e + 1)), nd(hu, nn), o);
    } finally {
      (b = t), (jl = !1);
    }
  }
  return null;
}
var Bn = [],
  Un = 0,
  Ei = null,
  Si = 0,
  We = [],
  Ve = 0,
  yn = null,
  Et = 1,
  St = '';
function sn(e, t) {
  (Bn[Un++] = Si), (Bn[Un++] = Ei), (Ei = e), (Si = t);
}
function $d(e, t, n) {
  (We[Ve++] = Et), (We[Ve++] = St), (We[Ve++] = yn), (yn = e);
  var r = Et;
  e = St;
  var o = 32 - ot(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - ot(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Et = (1 << (32 - ot(t) + o)) | (n << o) | r),
      (St = i + e);
  } else (Et = (1 << i) | (n << o) | r), (St = e);
}
function ku(e) {
  e.return !== null && (sn(e, 1), $d(e, 1, 0));
}
function Ou(e) {
  for (; e === Ei; )
    (Ei = Bn[--Un]), (Bn[Un] = null), (Si = Bn[--Un]), (Bn[Un] = null);
  for (; e === yn; )
    (yn = We[--Ve]),
      (We[Ve] = null),
      (St = We[--Ve]),
      (We[Ve] = null),
      (Et = We[--Ve]),
      (We[Ve] = null);
}
var Fe = null,
  Ie = null,
  Z = !1,
  nt = null;
function Dd(e, t) {
  var n = Ke(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ac(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Fe = e), (Ie = bt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Fe = e), (Ie = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = yn !== null ? { id: Et, overflow: St } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ke(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Fe = e),
            (Ie = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ns(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Rs(e) {
  if (Z) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!ac(e, t)) {
        if (Ns(e)) throw Error(T(418));
        t = bt(n.nextSibling);
        var r = Fe;
        t && ac(e, t)
          ? Dd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Fe = e));
      }
    } else {
      if (Ns(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (Fe = e);
    }
  }
}
function cc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function zo(e) {
  if (e !== Fe) return !1;
  if (!Z) return cc(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Ss(e.type, e.memoizedProps))),
    t && (t = Ie))
  ) {
    if (Ns(e)) throw (Ld(), Error(T(418)));
    for (; t; ) Dd(e, t), (t = bt(t.nextSibling));
  }
  if ((cc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ie = bt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = Fe ? bt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ld() {
  for (var e = Ie; e; ) e = bt(e.nextSibling);
}
function er() {
  (Ie = Fe = null), (Z = !1);
}
function Nu(e) {
  nt === null ? (nt = [e]) : nt.push(e);
}
var Dy = _t.ReactCurrentBatchConfig;
function et(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ci = tn(null),
  ki = null,
  Hn = null,
  Ru = null;
function Tu() {
  Ru = Hn = ki = null;
}
function Pu(e) {
  var t = Ci.current;
  q(Ci), (e._currentValue = t);
}
function Ts(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yn(e, t) {
  (ki = e),
    (Ru = Hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (je = !0), (e.firstContext = null));
}
function Xe(e) {
  var t = e._currentValue;
  if (Ru !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
      if (ki === null) throw Error(T(308));
      (Hn = e), (ki.dependencies = { lanes: 0, firstContext: e });
    } else Hn = Hn.next = e;
  return t;
}
var cn = null;
function ju(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function Ad(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ju(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Tt(e, r)
  );
}
function Tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Mt = !1;
function _u(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Md(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), W & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Tt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ju(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Tt(e, n)
  );
}
function Zo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vu(e, n);
  }
}
function fc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Oi(e, t, n, r) {
  var o = e.updateQueue;
  Mt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), l === null ? (i = a) : (l.next = a), (l = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== l &&
        (s === null ? (c.firstBaseUpdate = a) : (s.next = a),
        (c.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var f = o.baseState;
    (l = 0), (c = a = u = null), (s = i);
    do {
      var d = s.lane,
        g = s.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            w = s;
          switch (((d = t), (g = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == 'function')) {
                f = v.call(g, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (d = typeof v == 'function' ? v.call(g, f, d) : v),
                d == null)
              )
                break e;
              f = re({}, f, d);
              break e;
            case 2:
              Mt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [s]) : d.push(s));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((a = c = g), (u = f)) : (c = c.next = g),
          (l |= d);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (d = s),
          (s = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = f),
      (o.baseState = u),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (wn |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function dc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(T(191, o));
        o.call(r);
      }
    }
}
var Id = new Af.Component().refs;
function Ps(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? kn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      o = Gt(e),
      i = Ct(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Qt(e, i, o)),
      t !== null && (it(t, e, o, r), Zo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      o = Gt(e),
      i = Ct(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Qt(e, i, o)),
      t !== null && (it(t, e, o, r), Zo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = Gt(e),
      o = Ct(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Qt(e, o, r)),
      t !== null && (it(t, e, r, n), Zo(t, e, r));
  },
};
function pc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Zr(n, r) || !Zr(o, i)
        : !0
  );
}
function Fd(e, t, n) {
  var r = !1,
    o = qt,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Xe(i))
      : ((o = $e(t) ? vn : ke.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Zn(e, o) : qt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = bi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function mc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && bi.enqueueReplaceState(t, t.state, null);
}
function js(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Id), _u(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = Xe(i))
    : ((i = $e(t) ? vn : ke.current), (o.context = Zn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Ps(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && bi.enqueueReplaceState(o, o.state, null),
      Oi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Cr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            s === Id && (s = o.refs = {}),
              l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Bo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function hc(e) {
  var t = e._init;
  return t(e._payload);
}
function zd(e) {
  function t(m, p) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [p]), (m.flags |= 16)) : h.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function o(m, p) {
    return (m = Yt(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, p, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((m.flags |= 2), p) : h)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, p, h, x) {
    return p === null || p.tag !== 6
      ? ((p = Il(h, m.mode, x)), (p.return = m), p)
      : ((p = o(p, h)), (p.return = m), p);
  }
  function u(m, p, h, x) {
    var S = h.type;
    return S === Ln
      ? c(m, p, h.props.children, x, h.key)
      : p !== null &&
          (p.elementType === S ||
            (typeof S == 'object' &&
              S !== null &&
              S.$$typeof === At &&
              hc(S) === p.type))
        ? ((x = o(p, h.props)), (x.ref = Cr(m, p, h)), (x.return = m), x)
        : ((x = ii(h.type, h.key, h.props, null, m.mode, x)),
          (x.ref = Cr(m, p, h)),
          (x.return = m),
          x);
  }
  function a(m, p, h, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = Fl(h, m.mode, x)), (p.return = m), p)
      : ((p = o(p, h.children || [])), (p.return = m), p);
  }
  function c(m, p, h, x, S) {
    return p === null || p.tag !== 7
      ? ((p = mn(h, m.mode, x, S)), (p.return = m), p)
      : ((p = o(p, h)), (p.return = m), p);
  }
  function f(m, p, h) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Il('' + p, m.mode, h)), (p.return = m), p;
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Po:
          return (
            (h = ii(p.type, p.key, p.props, null, m.mode, h)),
            (h.ref = Cr(m, null, p)),
            (h.return = m),
            h
          );
        case Dn:
          return (p = Fl(p, m.mode, h)), (p.return = m), p;
        case At:
          var x = p._init;
          return f(m, x(p._payload), h);
      }
      if (jr(p) || gr(p))
        return (p = mn(p, m.mode, h, null)), (p.return = m), p;
      Bo(m, p);
    }
    return null;
  }
  function d(m, p, h, x) {
    var S = p !== null ? p.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return S !== null ? null : s(m, p, '' + h, x);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Po:
          return h.key === S ? u(m, p, h, x) : null;
        case Dn:
          return h.key === S ? a(m, p, h, x) : null;
        case At:
          return (S = h._init), d(m, p, S(h._payload), x);
      }
      if (jr(h) || gr(h)) return S !== null ? null : c(m, p, h, x, null);
      Bo(m, h);
    }
    return null;
  }
  function g(m, p, h, x, S) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (m = m.get(h) || null), s(p, m, '' + x, S);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case Po:
          return (m = m.get(x.key === null ? h : x.key) || null), u(p, m, x, S);
        case Dn:
          return (m = m.get(x.key === null ? h : x.key) || null), a(p, m, x, S);
        case At:
          var C = x._init;
          return g(m, p, h, C(x._payload), S);
      }
      if (jr(x) || gr(x)) return (m = m.get(h) || null), c(p, m, x, S, null);
      Bo(p, x);
    }
    return null;
  }
  function v(m, p, h, x) {
    for (
      var S = null, C = null, O = p, R = (p = 0), A = null;
      O !== null && R < h.length;
      R++
    ) {
      O.index > R ? ((A = O), (O = null)) : (A = O.sibling);
      var j = d(m, O, h[R], x);
      if (j === null) {
        O === null && (O = A);
        break;
      }
      e && O && j.alternate === null && t(m, O),
        (p = i(j, p, R)),
        C === null ? (S = j) : (C.sibling = j),
        (C = j),
        (O = A);
    }
    if (R === h.length) return n(m, O), Z && sn(m, R), S;
    if (O === null) {
      for (; R < h.length; R++)
        (O = f(m, h[R], x)),
          O !== null &&
            ((p = i(O, p, R)), C === null ? (S = O) : (C.sibling = O), (C = O));
      return Z && sn(m, R), S;
    }
    for (O = r(m, O); R < h.length; R++)
      (A = g(O, m, R, h[R], x)),
        A !== null &&
          (e && A.alternate !== null && O.delete(A.key === null ? R : A.key),
          (p = i(A, p, R)),
          C === null ? (S = A) : (C.sibling = A),
          (C = A));
    return (
      e &&
        O.forEach(function (L) {
          return t(m, L);
        }),
      Z && sn(m, R),
      S
    );
  }
  function w(m, p, h, x) {
    var S = gr(h);
    if (typeof S != 'function') throw Error(T(150));
    if (((h = S.call(h)), h == null)) throw Error(T(151));
    for (
      var C = (S = null), O = p, R = (p = 0), A = null, j = h.next();
      O !== null && !j.done;
      R++, j = h.next()
    ) {
      O.index > R ? ((A = O), (O = null)) : (A = O.sibling);
      var L = d(m, O, j.value, x);
      if (L === null) {
        O === null && (O = A);
        break;
      }
      e && O && L.alternate === null && t(m, O),
        (p = i(L, p, R)),
        C === null ? (S = L) : (C.sibling = L),
        (C = L),
        (O = A);
    }
    if (j.done) return n(m, O), Z && sn(m, R), S;
    if (O === null) {
      for (; !j.done; R++, j = h.next())
        (j = f(m, j.value, x)),
          j !== null &&
            ((p = i(j, p, R)), C === null ? (S = j) : (C.sibling = j), (C = j));
      return Z && sn(m, R), S;
    }
    for (O = r(m, O); !j.done; R++, j = h.next())
      (j = g(O, m, R, j.value, x)),
        j !== null &&
          (e && j.alternate !== null && O.delete(j.key === null ? R : j.key),
          (p = i(j, p, R)),
          C === null ? (S = j) : (C.sibling = j),
          (C = j));
    return (
      e &&
        O.forEach(function (M) {
          return t(m, M);
        }),
      Z && sn(m, R),
      S
    );
  }
  function E(m, p, h, x) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === Ln &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case Po:
          e: {
            for (var S = h.key, C = p; C !== null; ) {
              if (C.key === S) {
                if (((S = h.type), S === Ln)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (p = o(C, h.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == 'object' &&
                    S !== null &&
                    S.$$typeof === At &&
                    hc(S) === C.type)
                ) {
                  n(m, C.sibling),
                    (p = o(C, h.props)),
                    (p.ref = Cr(m, C, h)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            h.type === Ln
              ? ((p = mn(h.props.children, m.mode, x, h.key)),
                (p.return = m),
                (m = p))
              : ((x = ii(h.type, h.key, h.props, null, m.mode, x)),
                (x.ref = Cr(m, p, h)),
                (x.return = m),
                (m = x));
          }
          return l(m);
        case Dn:
          e: {
            for (C = h.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  n(m, p.sibling),
                    (p = o(p, h.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Fl(h, m.mode, x)), (p.return = m), (m = p);
          }
          return l(m);
        case At:
          return (C = h._init), E(m, p, C(h._payload), x);
      }
      if (jr(h)) return v(m, p, h, x);
      if (gr(h)) return w(m, p, h, x);
      Bo(m, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, h)), (p.return = m), (m = p))
          : (n(m, p), (p = Il(h, m.mode, x)), (p.return = m), (m = p)),
        l(m))
      : n(m, p);
  }
  return E;
}
var tr = zd(!0),
  Bd = zd(!1),
  xo = {},
  dt = tn(xo),
  ro = tn(xo),
  oo = tn(xo);
function fn(e) {
  if (e === xo) throw Error(T(174));
  return e;
}
function $u(e, t) {
  switch ((G(oo, t), G(ro, e), G(dt, xo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : us(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = us(t, e));
  }
  q(dt), G(dt, t);
}
function nr() {
  q(dt), q(ro), q(oo);
}
function Ud(e) {
  fn(oo.current);
  var t = fn(dt.current),
    n = us(t, e.type);
  t !== n && (G(ro, e), G(dt, n));
}
function Du(e) {
  ro.current === e && (q(dt), q(ro));
}
var te = tn(0);
function Ni(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var _l = [];
function Lu() {
  for (var e = 0; e < _l.length; e++)
    _l[e]._workInProgressVersionPrimary = null;
  _l.length = 0;
}
var ei = _t.ReactCurrentDispatcher,
  $l = _t.ReactCurrentBatchConfig,
  gn = 0,
  ne = null,
  de = null,
  me = null,
  Ri = !1,
  zr = !1,
  io = 0,
  Ly = 0;
function Ee() {
  throw Error(T(321));
}
function Au(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!lt(e[n], t[n])) return !1;
  return !0;
}
function Mu(e, t, n, r, o, i) {
  if (
    ((gn = i),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ei.current = e === null || e.memoizedState === null ? Fy : zy),
    (e = n(r, o)),
    zr)
  ) {
    i = 0;
    do {
      if (((zr = !1), (io = 0), 25 <= i)) throw Error(T(301));
      (i += 1),
        (me = de = null),
        (t.updateQueue = null),
        (ei.current = By),
        (e = n(r, o));
    } while (zr);
  }
  if (
    ((ei.current = Ti),
    (t = de !== null && de.next !== null),
    (gn = 0),
    (me = de = ne = null),
    (Ri = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Iu() {
  var e = io !== 0;
  return (io = 0), e;
}
function ut() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return me === null ? (ne.memoizedState = me = e) : (me = me.next = e), me;
}
function Ge() {
  if (de === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = me === null ? ne.memoizedState : me.next;
  if (t !== null) (me = t), (de = e);
  else {
    if (e === null) throw Error(T(310));
    (de = e),
      (e = {
        memoizedState: de.memoizedState,
        baseState: de.baseState,
        baseQueue: de.baseQueue,
        queue: de.queue,
        next: null,
      }),
      me === null ? (ne.memoizedState = me = e) : (me = me.next = e);
  }
  return me;
}
function lo(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Dl(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = de,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      u = null,
      a = i;
    do {
      var c = a.lane;
      if ((gn & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var f = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = f), (l = r)) : (u = u.next = f),
          (ne.lanes |= c),
          (wn |= c);
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? (l = r) : (u.next = s),
      lt(r, t.memoizedState) || (je = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ne.lanes |= i), (wn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ll(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    lt(i, t.memoizedState) || (je = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Hd() {}
function Wd(e, t) {
  var n = ne,
    r = Ge(),
    o = t(),
    i = !lt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (je = !0)),
    (r = r.queue),
    Fu(bd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (me !== null && me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      so(9, Kd.bind(null, n, r, o, t), void 0, null),
      he === null)
    )
      throw Error(T(349));
    gn & 30 || Vd(n, t, o);
  }
  return o;
}
function Vd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Kd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Qd(t) && Xd(e);
}
function bd(e, t, n) {
  return n(function () {
    Qd(t) && Xd(e);
  });
}
function Qd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lt(e, n);
  } catch {
    return !0;
  }
}
function Xd(e) {
  var t = Tt(e, 1);
  t !== null && it(t, e, 1, -1);
}
function vc(e) {
  var t = ut();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Iy.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function so(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Gd() {
  return Ge().memoizedState;
}
function ti(e, t, n, r) {
  var o = ut();
  (ne.flags |= e),
    (o.memoizedState = so(1 | t, n, void 0, r === void 0 ? null : r));
}
function Qi(e, t, n, r) {
  var o = Ge();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (de !== null) {
    var l = de.memoizedState;
    if (((i = l.destroy), r !== null && Au(r, l.deps))) {
      o.memoizedState = so(t, n, i, r);
      return;
    }
  }
  (ne.flags |= e), (o.memoizedState = so(1 | t, n, i, r));
}
function yc(e, t) {
  return ti(8390656, 8, e, t);
}
function Fu(e, t) {
  return Qi(2048, 8, e, t);
}
function Yd(e, t) {
  return Qi(4, 2, e, t);
}
function Jd(e, t) {
  return Qi(4, 4, e, t);
}
function qd(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Zd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Qi(4, 4, qd.bind(null, t, e), n)
  );
}
function zu() {}
function ep(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Au(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function tp(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Au(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function np(e, t, n) {
  return gn & 21
    ? (lt(n, t) || ((n = id()), (ne.lanes |= n), (wn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = n));
}
function Ay(e, t) {
  var n = b;
  (b = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), t();
  } finally {
    (b = n), ($l.transition = r);
  }
}
function rp() {
  return Ge().memoizedState;
}
function My(e, t, n) {
  var r = Gt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    op(e))
  )
    ip(t, n);
  else if (((n = Ad(e, t, n, r)), n !== null)) {
    var o = Ne();
    it(n, e, r, o), lp(n, t, r);
  }
}
function Iy(e, t, n) {
  var r = Gt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (op(e)) ip(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), lt(s, l))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), ju(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ad(e, t, o, r)),
      n !== null && ((o = Ne()), it(n, e, r, o), lp(n, t, r));
  }
}
function op(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function ip(e, t) {
  zr = Ri = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function lp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vu(e, n);
  }
}
var Ti = {
    readContext: Xe,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1,
  },
  Fy = {
    readContext: Xe,
    useCallback: function (e, t) {
      return (ut().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Xe,
    useEffect: yc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ti(4194308, 4, qd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ti(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ti(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ut();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ut();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = My.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ut();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: vc,
    useDebugValue: zu,
    useDeferredValue: function (e) {
      return (ut().memoizedState = e);
    },
    useTransition: function () {
      var e = vc(!1),
        t = e[0];
      return (e = Ay.bind(null, e[1])), (ut().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        o = ut();
      if (Z) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), he === null)) throw Error(T(349));
        gn & 30 || Vd(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        yc(bd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        so(9, Kd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ut(),
        t = he.identifierPrefix;
      if (Z) {
        var n = St,
          r = Et;
        (n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = io++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Ly++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  zy = {
    readContext: Xe,
    useCallback: ep,
    useContext: Xe,
    useEffect: Fu,
    useImperativeHandle: Zd,
    useInsertionEffect: Yd,
    useLayoutEffect: Jd,
    useMemo: tp,
    useReducer: Dl,
    useRef: Gd,
    useState: function () {
      return Dl(lo);
    },
    useDebugValue: zu,
    useDeferredValue: function (e) {
      var t = Ge();
      return np(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = Dl(lo)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: Hd,
    useSyncExternalStore: Wd,
    useId: rp,
    unstable_isNewReconciler: !1,
  },
  By = {
    readContext: Xe,
    useCallback: ep,
    useContext: Xe,
    useEffect: Fu,
    useImperativeHandle: Zd,
    useInsertionEffect: Yd,
    useLayoutEffect: Jd,
    useMemo: tp,
    useReducer: Ll,
    useRef: Gd,
    useState: function () {
      return Ll(lo);
    },
    useDebugValue: zu,
    useDeferredValue: function (e) {
      var t = Ge();
      return de === null ? (t.memoizedState = e) : np(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = Ll(lo)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: Hd,
    useSyncExternalStore: Wd,
    useId: rp,
    unstable_isNewReconciler: !1,
  };
function rr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += mv(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Al(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _s(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Uy = typeof WeakMap == 'function' ? WeakMap : Map;
function sp(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ji || ((ji = !0), (Us = r)), _s(e, t);
    }),
    n
  );
}
function up(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        _s(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        _s(e, t),
          typeof r != 'function' &&
            (Xt === null ? (Xt = new Set([this])) : Xt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : '',
        });
      }),
    n
  );
}
function gc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Uy();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = tg.bind(null, e, t, n)), t.then(e, e));
}
function wc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ct(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Hy = _t.ReactCurrentOwner,
  je = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? Bd(t, null, n, r) : tr(t, e.child, n, r);
}
function Ec(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Yn(t, o),
    (r = Mu(e, t, n, r, i, o)),
    (n = Iu()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Pt(e, t, o))
      : (Z && n && ku(t), (t.flags |= 1), Oe(e, t, r, o), t.child)
  );
}
function Sc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Qu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ap(e, t, i, r, o))
      : ((e = ii(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Zr), n(l, r) && e.ref === t.ref)
    )
      return Pt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Yt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ap(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Zr(i, r) && e.ref === t.ref)
      if (((je = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (je = !0);
      else return (t.lanes = e.lanes), Pt(e, t, o);
  }
  return $s(e, t, n, r, o);
}
function cp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(Vn, Me),
        (Me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          G(Vn, Me),
          (Me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        G(Vn, Me),
        (Me |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(Vn, Me),
      (Me |= r);
  return Oe(e, t, o, n), t.child;
}
function fp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $s(e, t, n, r, o) {
  var i = $e(n) ? vn : ke.current;
  return (
    (i = Zn(t, i)),
    Yn(t, o),
    (n = Mu(e, t, n, r, i, o)),
    (r = Iu()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Pt(e, t, o))
      : (Z && r && ku(t), (t.flags |= 1), Oe(e, t, n, o), t.child)
  );
}
function Cc(e, t, n, r, o) {
  if ($e(n)) {
    var i = !0;
    xi(t);
  } else i = !1;
  if ((Yn(t, o), t.stateNode === null))
    ni(e, t), Fd(t, n, r), js(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = Xe(a))
      : ((a = $e(n) ? vn : ke.current), (a = Zn(t, a)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== r || u !== a) && mc(t, l, r, a)),
      (Mt = !1);
    var d = t.memoizedState;
    (l.state = d),
      Oi(t, r, l, o),
      (u = t.memoizedState),
      s !== r || d !== u || _e.current || Mt
        ? (typeof c == 'function' && (Ps(t, n, c, r), (u = t.memoizedState)),
          (s = Mt || pc(t, n, s, r, d, u, a))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = a),
          (r = s))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Md(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : et(t.type, s)),
      (l.props = a),
      (f = t.pendingProps),
      (d = l.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = Xe(u))
        : ((u = $e(n) ? vn : ke.current), (u = Zn(t, u)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== f || d !== u) && mc(t, l, r, u)),
      (Mt = !1),
      (d = t.memoizedState),
      (l.state = d),
      Oi(t, r, l, o);
    var v = t.memoizedState;
    s !== f || d !== v || _e.current || Mt
      ? (typeof g == 'function' && (Ps(t, n, g, r), (v = t.memoizedState)),
        (a = Mt || pc(t, n, a, r, d, v, u) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, v, u),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, v, u)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (l.props = r),
        (l.state = v),
        (l.context = u),
        (r = a))
      : (typeof l.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ds(e, t, n, r, i, o);
}
function Ds(e, t, n, r, o, i) {
  fp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && uc(t, n, !1), Pt(e, t, i);
  (r = t.stateNode), (Hy.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = tr(t, e.child, null, i)), (t.child = tr(t, null, s, i)))
      : Oe(e, t, s, i),
    (t.memoizedState = r.state),
    o && uc(t, n, !0),
    t.child
  );
}
function dp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? sc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sc(e, t.context, !1),
    $u(e, t.containerInfo);
}
function kc(e, t, n, r, o) {
  return er(), Nu(o), (t.flags |= 256), Oe(e, t, n, r), t.child;
}
var Ls = { dehydrated: null, treeContext: null, retryLane: 0 };
function As(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pp(e, t, n) {
  var r = t.pendingProps,
    o = te.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    G(te, o & 1),
    e === null)
  )
    return (
      Rs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Yi(l, r, 0, null)),
              (e = mn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = As(n)),
              (t.memoizedState = Ls),
              e)
            : Bu(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Wy(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Yt(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Yt(s, i)) : ((i = mn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? As(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ls),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Yt(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bu(e, t) {
  return (
    (t = Yi({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Uo(e, t, n, r) {
  return (
    r !== null && Nu(r),
    tr(t, e.child, null, n),
    (e = Bu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Wy(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Al(Error(T(422)))), Uo(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Yi({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = mn(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && tr(t, e.child, null, l),
          (t.child.memoizedState = As(l)),
          (t.memoizedState = Ls),
          i);
  if (!(t.mode & 1)) return Uo(e, t, l, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(T(419))), (r = Al(i, r, void 0)), Uo(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), je || s)) {
    if (((r = he), r !== null)) {
      switch (l & -l) {
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
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Tt(e, o), it(r, e, o, -1));
    }
    return bu(), (r = Al(Error(T(421)))), Uo(e, t, l, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ng.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ie = bt(o.nextSibling)),
      (Fe = t),
      (Z = !0),
      (nt = null),
      e !== null &&
        ((We[Ve++] = Et),
        (We[Ve++] = St),
        (We[Ve++] = yn),
        (Et = e.id),
        (St = e.overflow),
        (yn = t)),
      (t = Bu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Oc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ts(e.return, t, n);
}
function Ml(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function mp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Oe(e, t, r.children, n), (r = te.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Oc(e, n, t);
        else if (e.tag === 19) Oc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((G(te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ni(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ml(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ni(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Ml(t, !0, n, null, i);
        break;
      case 'together':
        Ml(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ni(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (wn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Yt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Vy(e, t, n) {
  switch (t.tag) {
    case 3:
      dp(t), er();
      break;
    case 5:
      Ud(t);
      break;
    case 1:
      $e(t.type) && xi(t);
      break;
    case 4:
      $u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      G(Ci, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? pp(e, t, n)
            : (G(te, te.current & 1),
              (e = Pt(e, t, n)),
              e !== null ? e.sibling : null);
      G(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return mp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        G(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), cp(e, t, n);
  }
  return Pt(e, t, n);
}
var hp, Ms, vp, yp;
hp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ms = function () {};
vp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), fn(dt.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = os(e, o)), (r = os(e, r)), (i = []);
        break;
      case 'select':
        (o = re({}, o, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = ss(e, o)), (r = ss(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = gi);
    }
    as(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var s = o[a];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (br.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === 'style')
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ''));
            for (l in u)
              u.hasOwnProperty(l) &&
                s[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (i || (i = []), i.push(a, n)), (n = u);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(a, u))
            : a === 'children'
              ? (typeof u != 'string' && typeof u != 'number') ||
                (i = i || []).push(a, '' + u)
              : a !== 'suppressContentEditableWarning' &&
                a !== 'suppressHydrationWarning' &&
                (br.hasOwnProperty(a)
                  ? (u != null && a === 'onScroll' && J('scroll', e),
                    i || s === u || (i = []))
                  : (i = i || []).push(a, u));
    }
    n && (i = i || []).push('style', n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
yp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kr(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ky(e, t, n) {
  var r = t.pendingProps;
  switch ((Ou(t), t.tag)) {
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
      return Se(t), null;
    case 1:
      return $e(t.type) && wi(), Se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nr(),
        q(_e),
        q(ke),
        Lu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (zo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), nt !== null && (Vs(nt), (nt = null)))),
        Ms(e, t),
        Se(t),
        null
      );
    case 5:
      Du(t);
      var o = fn(oo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        vp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return Se(t), null;
        }
        if (((e = fn(dt.current)), zo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[at] = t), (r[no] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              J('cancel', r), J('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              J('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < $r.length; o++) J($r[o], r);
              break;
            case 'source':
              J('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              J('error', r), J('load', r);
              break;
            case 'details':
              J('toggle', r);
              break;
            case 'input':
              La(r, i), J('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                J('invalid', r);
              break;
            case 'textarea':
              Ma(r, i), J('invalid', r);
          }
          as(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Fo(r.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Fo(r.textContent, s, e),
                    (o = ['children', '' + s]))
                : br.hasOwnProperty(l) &&
                  s != null &&
                  l === 'onScroll' &&
                  J('scroll', r);
            }
          switch (n) {
            case 'input':
              jo(r), Aa(r, i, !0);
              break;
            case 'textarea':
              jo(r), Ia(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = gi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Vf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === 'select' &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[at] = t),
            (e[no] = r),
            hp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = cs(n, r)), n)) {
              case 'dialog':
                J('cancel', e), J('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                J('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < $r.length; o++) J($r[o], e);
                o = r;
                break;
              case 'source':
                J('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                J('error', e), J('load', e), (o = r);
                break;
              case 'details':
                J('toggle', e), (o = r);
                break;
              case 'input':
                La(e, r), (o = os(e, r)), J('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = re({}, r, { value: void 0 })),
                  J('invalid', e);
                break;
              case 'textarea':
                Ma(e, r), (o = ss(e, r)), J('invalid', e);
                break;
              default:
                o = r;
            }
            as(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === 'style'
                  ? Qf(e, u)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && Kf(e, u))
                    : i === 'children'
                      ? typeof u == 'string'
                        ? (n !== 'textarea' || u !== '') && Qr(e, u)
                        : typeof u == 'number' && Qr(e, '' + u)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (br.hasOwnProperty(i)
                          ? u != null && i === 'onScroll' && J('scroll', e)
                          : u != null && cu(e, i, u, l));
              }
            switch (n) {
              case 'input':
                jo(e), Aa(e, r, !1);
                break;
              case 'textarea':
                jo(e), Ia(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Jt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? bn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = gi);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null) yp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(T(166));
        if (((n = fn(oo.current)), fn(dt.current), zo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[at] = t),
            (i = r.nodeValue !== n) && ((e = Fe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Fo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Fo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[at] = t),
            (t.stateNode = r);
      }
      return Se(t), null;
    case 13:
      if (
        (q(te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && Ie !== null && t.mode & 1 && !(t.flags & 128))
          Ld(), er(), (t.flags |= 98560), (i = !1);
        else if (((i = zo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(T(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(T(317));
            i[at] = t;
          } else
            er(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Se(t), (i = !1);
        } else nt !== null && (Vs(nt), (nt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || te.current & 1 ? pe === 0 && (pe = 3) : bu())),
          t.updateQueue !== null && (t.flags |= 4),
          Se(t),
          null);
    case 4:
      return (
        nr(), Ms(e, t), e === null && eo(t.stateNode.containerInfo), Se(t), null
      );
    case 10:
      return Pu(t.type._context), Se(t), null;
    case 17:
      return $e(t.type) && wi(), Se(t), null;
    case 19:
      if ((q(te), (i = t.memoizedState), i === null)) return Se(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) kr(i, !1);
        else {
          if (pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Ni(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    kr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return G(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            le() > or &&
            ((t.flags |= 128), (r = !0), kr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ni(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              kr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !Z)
            )
              return Se(t), null;
          } else
            2 * le() - i.renderingStartTime > or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), kr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = le()),
          (t.sibling = null),
          (n = te.current),
          G(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (Se(t), null);
    case 22:
    case 23:
      return (
        Ku(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Me & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function by(e, t) {
  switch ((Ou(t), t.tag)) {
    case 1:
      return (
        $e(t.type) && wi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nr(),
        q(_e),
        q(ke),
        Lu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Du(t), null;
    case 13:
      if ((q(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        er();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(te), null;
    case 4:
      return nr(), null;
    case 10:
      return Pu(t.type._context), null;
    case 22:
    case 23:
      return Ku(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ho = !1,
  Ce = !1,
  Qy = typeof WeakSet == 'function' ? WeakSet : Set,
  _ = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function Is(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var Nc = !1;
function Xy(e, t) {
  if (((xs = hi), (e = Ed()), Cu(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            u = -1,
            a = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = l + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (u = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++a === o && (s = l),
                d === i && ++c === r && (u = l),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Es = { focusedElem: e, selectionRange: n }, hi = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    E = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : et(t.type, w),
                      E,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = '')
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (x) {
          ie(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (v = Nc), (Nc = !1), v;
}
function Br(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Is(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Xi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Fs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function gp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), gp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[at], delete t[no], delete t[ks], delete t[jy], delete t[_y])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function wp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || wp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function zs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = gi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zs(e, t, n), e = e.sibling; e !== null; ) zs(e, t, n), (e = e.sibling);
}
function Bs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bs(e, t, n), e = e.sibling; e !== null; ) Bs(e, t, n), (e = e.sibling);
}
var ve = null,
  tt = !1;
function Dt(e, t, n) {
  for (n = n.child; n !== null; ) xp(e, t, n), (n = n.sibling);
}
function xp(e, t, n) {
  if (ft && typeof ft.onCommitFiberUnmount == 'function')
    try {
      ft.onCommitFiberUnmount(Bi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ce || Wn(n, t);
    case 6:
      var r = ve,
        o = tt;
      (ve = null),
        Dt(e, t, n),
        (ve = r),
        (tt = o),
        ve !== null &&
          (tt
            ? ((e = ve),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ve.removeChild(n.stateNode));
      break;
    case 18:
      ve !== null &&
        (tt
          ? ((e = ve),
            (n = n.stateNode),
            e.nodeType === 8
              ? Pl(e.parentNode, n)
              : e.nodeType === 1 && Pl(e, n),
            Jr(e))
          : Pl(ve, n.stateNode));
      break;
    case 4:
      (r = ve),
        (o = tt),
        (ve = n.stateNode.containerInfo),
        (tt = !0),
        Dt(e, t, n),
        (ve = r),
        (tt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Is(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Dt(e, t, n);
      break;
    case 1:
      if (
        !Ce &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ie(n, t, s);
        }
      Dt(e, t, n);
      break;
    case 21:
      Dt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ce = (r = Ce) || n.memoizedState !== null), Dt(e, t, n), (Ce = r))
        : Dt(e, t, n);
      break;
    default:
      Dt(e, t, n);
  }
}
function Tc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qy()),
      t.forEach(function (r) {
        var o = rg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ve = s.stateNode), (tt = !1);
              break e;
            case 3:
              (ve = s.stateNode.containerInfo), (tt = !0);
              break e;
            case 4:
              (ve = s.stateNode.containerInfo), (tt = !0);
              break e;
          }
          s = s.return;
        }
        if (ve === null) throw Error(T(160));
        xp(i, l, o), (ve = null), (tt = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        ie(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ep(t, e), (t = t.sibling);
}
function Ep(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ze(t, e), st(e), r & 4)) {
        try {
          Br(3, e, e.return), Xi(3, e);
        } catch (w) {
          ie(e, e.return, w);
        }
        try {
          Br(5, e, e.return);
        } catch (w) {
          ie(e, e.return, w);
        }
      }
      break;
    case 1:
      Ze(t, e), st(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if (
        (Ze(t, e),
        st(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Qr(o, '');
        } catch (w) {
          ie(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && Hf(o, i),
              cs(s, l);
            var a = cs(s, i);
            for (l = 0; l < u.length; l += 2) {
              var c = u[l],
                f = u[l + 1];
              c === 'style'
                ? Qf(o, f)
                : c === 'dangerouslySetInnerHTML'
                  ? Kf(o, f)
                  : c === 'children'
                    ? Qr(o, f)
                    : cu(o, c, f, a);
            }
            switch (s) {
              case 'input':
                is(o, i);
                break;
              case 'textarea':
                Wf(o, i);
                break;
              case 'select':
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? bn(o, !!i.multiple, g, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? bn(o, !!i.multiple, i.defaultValue, !0)
                      : bn(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[no] = i;
          } catch (w) {
            ie(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ze(t, e), st(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          ie(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ze(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jr(t.containerInfo);
        } catch (w) {
          ie(e, e.return, w);
        }
      break;
    case 4:
      Ze(t, e), st(e);
      break;
    case 13:
      Ze(t, e),
        st(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Wu = le())),
        r & 4 && Tc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ce = (a = Ce) || c), Ze(t, e), (Ce = a)) : Ze(t, e),
        st(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (_ = e, c = e.child; c !== null; ) {
            for (f = _ = c; _ !== null; ) {
              switch (((d = _), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Br(4, d, d.return);
                  break;
                case 1:
                  Wn(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      ie(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Wn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    jc(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (_ = g)) : jc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  a
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = f.stateNode),
                      (u = f.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (s.style.display = bf('display', l)));
              } catch (w) {
                ie(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = a ? '' : f.memoizedProps;
              } catch (w) {
                ie(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ze(t, e), st(e), r & 4 && Tc(e);
      break;
    case 21:
      break;
    default:
      Ze(t, e), st(e);
  }
}
function st(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (wp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Qr(o, ''), (r.flags &= -33));
          var i = Rc(e);
          Bs(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Rc(e);
          zs(e, s, l);
          break;
        default:
          throw Error(T(161));
      }
    } catch (u) {
      ie(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gy(e, t, n) {
  (_ = e), Sp(e);
}
function Sp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Ho;
      if (!l) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || Ce;
        s = Ho;
        var a = Ce;
        if (((Ho = l), (Ce = u) && !a))
          for (_ = o; _ !== null; )
            (l = _),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? _c(o)
                : u !== null
                  ? ((u.return = l), (_ = u))
                  : _c(o);
        for (; i !== null; ) (_ = i), Sp(i), (i = i.sibling);
        (_ = o), (Ho = s), (Ce = a);
      }
      Pc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (_ = i)) : Pc(e);
  }
}
function Pc(e) {
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
              Ce || Xi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ce)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && dc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                dc(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
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
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Jr(f);
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
              throw Error(T(163));
          }
        Ce || (t.flags & 512 && Fs(t));
      } catch (d) {
        ie(t, t.return, d);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function jc(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function _c(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xi(4, t);
          } catch (u) {
            ie(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ie(t, o, u);
            }
          }
          var i = t.return;
          try {
            Fs(t);
          } catch (u) {
            ie(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Fs(t);
          } catch (u) {
            ie(t, l, u);
          }
      }
    } catch (u) {
      ie(t, t.return, u);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (_ = s);
      break;
    }
    _ = t.return;
  }
}
var Yy = Math.ceil,
  Pi = _t.ReactCurrentDispatcher,
  Uu = _t.ReactCurrentOwner,
  be = _t.ReactCurrentBatchConfig,
  W = 0,
  he = null,
  ue = null,
  ge = 0,
  Me = 0,
  Vn = tn(0),
  pe = 0,
  uo = null,
  wn = 0,
  Gi = 0,
  Hu = 0,
  Ur = null,
  Pe = null,
  Wu = 0,
  or = 1 / 0,
  yt = null,
  ji = !1,
  Us = null,
  Xt = null,
  Wo = !1,
  Ut = null,
  _i = 0,
  Hr = 0,
  Hs = null,
  ri = -1,
  oi = 0;
function Ne() {
  return W & 6 ? le() : ri !== -1 ? ri : (ri = le());
}
function Gt(e) {
  return e.mode & 1
    ? W & 2 && ge !== 0
      ? ge & -ge
      : Dy.transition !== null
        ? (oi === 0 && (oi = id()), oi)
        : ((e = b),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : dd(e.type))),
          e)
    : 1;
}
function it(e, t, n, r) {
  if (50 < Hr) throw ((Hr = 0), (Hs = null), Error(T(185)));
  yo(e, n, r),
    (!(W & 2) || e !== he) &&
      (e === he && (!(W & 2) && (Gi |= n), pe === 4 && zt(e, ge)),
      De(e, r),
      n === 1 && W === 0 && !(t.mode & 1) && ((or = le() + 500), Ki && nn()));
}
function De(e, t) {
  var n = e.callbackNode;
  Dv(e, t);
  var r = mi(e, e === he ? ge : 0);
  if (r === 0)
    n !== null && Ba(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ba(n), t === 1))
      e.tag === 0 ? $y($c.bind(null, e)) : _d($c.bind(null, e)),
        Ty(function () {
          !(W & 6) && nn();
        }),
        (n = null);
    else {
      switch (ld(r)) {
        case 1:
          n = hu;
          break;
        case 4:
          n = rd;
          break;
        case 16:
          n = pi;
          break;
        case 536870912:
          n = od;
          break;
        default:
          n = pi;
      }
      n = jp(n, Cp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Cp(e, t) {
  if (((ri = -1), (oi = 0), W & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (Jn() && e.callbackNode !== n) return null;
  var r = mi(e, e === he ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = $i(e, r);
  else {
    t = r;
    var o = W;
    W |= 2;
    var i = Op();
    (he !== e || ge !== t) && ((yt = null), (or = le() + 500), pn(e, t));
    do
      try {
        Zy();
        break;
      } catch (s) {
        kp(e, s);
      }
    while (!0);
    Tu(),
      (Pi.current = i),
      (W = o),
      ue !== null ? (t = 0) : ((he = null), (ge = 0), (t = pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = hs(e)), o !== 0 && ((r = o), (t = Ws(e, o)))), t === 1)
    )
      throw ((n = uo), pn(e, 0), zt(e, r), De(e, le()), n);
    if (t === 6) zt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Jy(o) &&
          ((t = $i(e, r)),
          t === 2 && ((i = hs(e)), i !== 0 && ((r = i), (t = Ws(e, i)))),
          t === 1))
      )
        throw ((n = uo), pn(e, 0), zt(e, r), De(e, le()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          un(e, Pe, yt);
          break;
        case 3:
          if (
            (zt(e, r), (r & 130023424) === r && ((t = Wu + 500 - le()), 10 < t))
          ) {
            if (mi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ne(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Cs(un.bind(null, e, Pe, yt), t);
            break;
          }
          un(e, Pe, yt);
          break;
        case 4:
          if ((zt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - ot(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = le() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Yy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Cs(un.bind(null, e, Pe, yt), r);
            break;
          }
          un(e, Pe, yt);
          break;
        case 5:
          un(e, Pe, yt);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return De(e, le()), e.callbackNode === n ? Cp.bind(null, e) : null;
}
function Ws(e, t) {
  var n = Ur;
  return (
    e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
    (e = $i(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && Vs(t)),
    e
  );
}
function Vs(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function Jy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!lt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function zt(e, t) {
  for (
    t &= ~Hu,
      t &= ~Gi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ot(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function $c(e) {
  if (W & 6) throw Error(T(327));
  Jn();
  var t = mi(e, 0);
  if (!(t & 1)) return De(e, le()), null;
  var n = $i(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hs(e);
    r !== 0 && ((t = r), (n = Ws(e, r)));
  }
  if (n === 1) throw ((n = uo), pn(e, 0), zt(e, t), De(e, le()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    un(e, Pe, yt),
    De(e, le()),
    null
  );
}
function Vu(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = n), W === 0 && ((or = le() + 500), Ki && nn());
  }
}
function xn(e) {
  Ut !== null && Ut.tag === 0 && !(W & 6) && Jn();
  var t = W;
  W |= 1;
  var n = be.transition,
    r = b;
  try {
    if (((be.transition = null), (b = 1), e)) return e();
  } finally {
    (b = r), (be.transition = n), (W = t), !(W & 6) && nn();
  }
}
function Ku() {
  (Me = Vn.current), q(Vn);
}
function pn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ry(n)), ue !== null))
    for (n = ue.return; n !== null; ) {
      var r = n;
      switch ((Ou(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && wi();
          break;
        case 3:
          nr(), q(_e), q(ke), Lu();
          break;
        case 5:
          Du(r);
          break;
        case 4:
          nr();
          break;
        case 13:
          q(te);
          break;
        case 19:
          q(te);
          break;
        case 10:
          Pu(r.type._context);
          break;
        case 22:
        case 23:
          Ku();
      }
      n = n.return;
    }
  if (
    ((he = e),
    (ue = e = Yt(e.current, null)),
    (ge = Me = t),
    (pe = 0),
    (uo = null),
    (Hu = Gi = wn = 0),
    (Pe = Ur = null),
    cn !== null)
  ) {
    for (t = 0; t < cn.length; t++)
      if (((n = cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    cn = null;
  }
  return e;
}
function kp(e, t) {
  do {
    var n = ue;
    try {
      if ((Tu(), (ei.current = Ti), Ri)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ri = !1;
      }
      if (
        ((gn = 0),
        (me = de = ne = null),
        (zr = !1),
        (io = 0),
        (Uu.current = null),
        n === null || n.return === null)
      ) {
        (pe = 1), (uo = t), (ue = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          u = t;
        if (
          ((t = ge),
          (s.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var a = u,
            c = s,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = wc(l);
          if (g !== null) {
            (g.flags &= -257),
              xc(g, l, s, i, t),
              g.mode & 1 && gc(i, a, t),
              (t = g),
              (u = a);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              gc(i, a, t), bu();
              break e;
            }
            u = Error(T(426));
          }
        } else if (Z && s.mode & 1) {
          var E = wc(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              xc(E, l, s, i, t),
              Nu(rr(u, s));
            break e;
          }
        }
        (i = u = rr(u, s)),
          pe !== 4 && (pe = 2),
          Ur === null ? (Ur = [i]) : Ur.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = sp(i, u, t);
              fc(i, m);
              break e;
            case 1:
              s = u;
              var p = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (h !== null &&
                    typeof h.componentDidCatch == 'function' &&
                    (Xt === null || !Xt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = up(i, s, t);
                fc(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Rp(n);
    } catch (S) {
      (t = S), ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Op() {
  var e = Pi.current;
  return (Pi.current = Ti), e === null ? Ti : e;
}
function bu() {
  (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
    he === null || (!(wn & 268435455) && !(Gi & 268435455)) || zt(he, ge);
}
function $i(e, t) {
  var n = W;
  W |= 2;
  var r = Op();
  (he !== e || ge !== t) && ((yt = null), pn(e, t));
  do
    try {
      qy();
      break;
    } catch (o) {
      kp(e, o);
    }
  while (!0);
  if ((Tu(), (W = n), (Pi.current = r), ue !== null)) throw Error(T(261));
  return (he = null), (ge = 0), pe;
}
function qy() {
  for (; ue !== null; ) Np(ue);
}
function Zy() {
  for (; ue !== null && !kv(); ) Np(ue);
}
function Np(e) {
  var t = Pp(e.alternate, e, Me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Rp(e) : (ue = t),
    (Uu.current = null);
}
function Rp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = by(n, t)), n !== null)) {
        (n.flags &= 32767), (ue = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (pe = 6), (ue = null);
        return;
      }
    } else if (((n = Ky(n, t, Me)), n !== null)) {
      ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  pe === 0 && (pe = 5);
}
function un(e, t, n) {
  var r = b,
    o = be.transition;
  try {
    (be.transition = null), (b = 1), eg(e, t, n, r);
  } finally {
    (be.transition = o), (b = r);
  }
  return null;
}
function eg(e, t, n, r) {
  do Jn();
  while (Ut !== null);
  if (W & 6) throw Error(T(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Lv(e, i),
    e === he && ((ue = he = null), (ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Wo ||
      ((Wo = !0),
      jp(pi, function () {
        return Jn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = be.transition), (be.transition = null);
    var l = b;
    b = 1;
    var s = W;
    (W |= 4),
      (Uu.current = null),
      Xy(e, n),
      Ep(n, e),
      xy(Es),
      (hi = !!xs),
      (Es = xs = null),
      (e.current = n),
      Gy(n),
      Ov(),
      (W = s),
      (b = l),
      (be.transition = i);
  } else e.current = n;
  if (
    (Wo && ((Wo = !1), (Ut = e), (_i = o)),
    (i = e.pendingLanes),
    i === 0 && (Xt = null),
    Tv(n.stateNode),
    De(e, le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ji) throw ((ji = !1), (e = Us), (Us = null), e);
  return (
    _i & 1 && e.tag !== 0 && Jn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Hs ? Hr++ : ((Hr = 0), (Hs = e))) : (Hr = 0),
    nn(),
    null
  );
}
function Jn() {
  if (Ut !== null) {
    var e = ld(_i),
      t = be.transition,
      n = b;
    try {
      if (((be.transition = null), (b = 16 > e ? 16 : e), Ut === null))
        var r = !1;
      else {
        if (((e = Ut), (Ut = null), (_i = 0), W & 6)) throw Error(T(331));
        var o = W;
        for (W |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            l = i.child;
          if (_.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (_ = a; _ !== null; ) {
                  var c = _;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Br(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (_ = f);
                  else
                    for (; _ !== null; ) {
                      c = _;
                      var d = c.sibling,
                        g = c.return;
                      if ((gp(c), c === a)) {
                        _ = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (_ = d);
                        break;
                      }
                      _ = g;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var E = w.sibling;
                    (w.sibling = null), (w = E);
                  } while (w !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (_ = l);
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Br(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (_ = m);
                break e;
              }
              _ = i.return;
            }
        }
        var p = e.current;
        for (_ = p; _ !== null; ) {
          l = _;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (_ = h);
          else
            e: for (l = p; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi(9, s);
                  }
                } catch (S) {
                  ie(s, s.return, S);
                }
              if (s === l) {
                _ = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (_ = x);
                break e;
              }
              _ = s.return;
            }
        }
        if (
          ((W = o), nn(), ft && typeof ft.onPostCommitFiberRoot == 'function')
        )
          try {
            ft.onPostCommitFiberRoot(Bi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (b = n), (be.transition = t);
    }
  }
  return !1;
}
function Dc(e, t, n) {
  (t = rr(n, t)),
    (t = sp(e, t, 1)),
    (e = Qt(e, t, 1)),
    (t = Ne()),
    e !== null && (yo(e, 1, t), De(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) Dc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Dc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Xt === null || !Xt.has(r)))
        ) {
          (e = rr(n, e)),
            (e = up(t, e, 1)),
            (t = Qt(t, e, 1)),
            (e = Ne()),
            t !== null && (yo(t, 1, e), De(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function tg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
      (ge & n) === n &&
      (pe === 4 || (pe === 3 && (ge & 130023424) === ge && 500 > le() - Wu)
        ? pn(e, 0)
        : (Hu |= n)),
    De(e, t);
}
function Tp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Do), (Do <<= 1), !(Do & 130023424) && (Do = 4194304))
      : (t = 1));
  var n = Ne();
  (e = Tt(e, t)), e !== null && (yo(e, t, n), De(e, n));
}
function ng(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Tp(e, n);
}
function rg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Tp(e, n);
}
var Pp;
Pp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _e.current) je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (je = !1), Vy(e, t, n);
      je = !!(e.flags & 131072);
    }
  else (je = !1), Z && t.flags & 1048576 && $d(t, Si, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ni(e, t), (e = t.pendingProps);
      var o = Zn(t, ke.current);
      Yn(t, n), (o = Mu(null, t, r, e, o, n));
      var i = Iu();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $e(r) ? ((i = !0), xi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            _u(t),
            (o.updater = bi),
            (t.stateNode = o),
            (o._reactInternals = t),
            js(t, r, e, n),
            (t = Ds(null, t, r, !0, i, n)))
          : ((t.tag = 0), Z && i && ku(t), Oe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ni(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = ig(r)),
          (e = et(r, e)),
          o)
        ) {
          case 0:
            t = $s(null, t, r, e, n);
            break e;
          case 1:
            t = Cc(null, t, r, e, n);
            break e;
          case 11:
            t = Ec(null, t, r, e, n);
            break e;
          case 14:
            t = Sc(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        $s(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Cc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((dp(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Md(e, t),
          Oi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = rr(Error(T(423)), t)), (t = kc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = rr(Error(T(424)), t)), (t = kc(e, t, r, n, o));
            break e;
          } else
            for (
              Ie = bt(t.stateNode.containerInfo.firstChild),
                Fe = t,
                Z = !0,
                nt = null,
                n = Bd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((er(), r === o)) {
            t = Pt(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ud(t),
        e === null && Rs(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Ss(r, o) ? (l = null) : i !== null && Ss(r, i) && (t.flags |= 32),
        fp(e, t),
        Oe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Rs(t), null;
    case 13:
      return pp(e, t, n);
    case 4:
      return (
        $u(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tr(t, null, r, n)) : Oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Ec(e, t, r, o, n)
      );
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          G(Ci, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (lt(i.value, l)) {
            if (i.children === o.children && !_e.current) {
              t = Pt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Ct(-1, n & -n)), (u.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (a.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Ts(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(T(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Ts(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Oe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Yn(t, n),
        (o = Xe(o)),
        (r = r(o)),
        (t.flags |= 1),
        Oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = et(r, t.pendingProps)),
        (o = et(r.type, o)),
        Sc(e, t, r, o, n)
      );
    case 15:
      return ap(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        ni(e, t),
        (t.tag = 1),
        $e(r) ? ((e = !0), xi(t)) : (e = !1),
        Yn(t, n),
        Fd(t, r, o),
        js(t, r, o, n),
        Ds(null, t, r, !0, e, n)
      );
    case 19:
      return mp(e, t, n);
    case 22:
      return cp(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function jp(e, t) {
  return nd(e, t);
}
function og(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ke(e, t, n, r) {
  return new og(e, t, n, r);
}
function Qu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ig(e) {
  if (typeof e == 'function') return Qu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === du)) return 11;
    if (e === pu) return 14;
  }
  return 2;
}
function Yt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ke(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ii(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == 'function')) Qu(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case Ln:
        return mn(n.children, o, i, t);
      case fu:
        (l = 8), (o |= 8);
        break;
      case es:
        return (
          (e = Ke(12, n, t, o | 2)), (e.elementType = es), (e.lanes = i), e
        );
      case ts:
        return (e = Ke(13, n, t, o)), (e.elementType = ts), (e.lanes = i), e;
      case ns:
        return (e = Ke(19, n, t, o)), (e.elementType = ns), (e.lanes = i), e;
      case zf:
        return Yi(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case If:
              l = 10;
              break e;
            case Ff:
              l = 9;
              break e;
            case du:
              l = 11;
              break e;
            case pu:
              l = 14;
              break e;
            case At:
              (l = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ke(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function mn(e, t, n, r) {
  return (e = Ke(7, e, r, t)), (e.lanes = n), e;
}
function Yi(e, t, n, r) {
  return (
    (e = Ke(22, e, r, t)),
    (e.elementType = zf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Il(e, t, n) {
  return (e = Ke(6, e, null, t)), (e.lanes = n), e;
}
function Fl(e, t, n) {
  return (
    (t = Ke(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function lg(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = gl(0)),
    (this.expirationTimes = gl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = gl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Xu(e, t, n, r, o, i, l, s, u) {
  return (
    (e = new lg(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ke(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    _u(i),
    e
  );
}
function sg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function _p(e) {
  if (!e) return qt;
  e = e._reactInternals;
  e: {
    if (kn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return jd(e, n, t);
  }
  return t;
}
function $p(e, t, n, r, o, i, l, s, u) {
  return (
    (e = Xu(n, r, !0, e, o, i, l, s, u)),
    (e.context = _p(null)),
    (n = e.current),
    (r = Ne()),
    (o = Gt(n)),
    (i = Ct(r, o)),
    (i.callback = t ?? null),
    Qt(n, i, o),
    (e.current.lanes = o),
    yo(e, o, r),
    De(e, r),
    e
  );
}
function Ji(e, t, n, r) {
  var o = t.current,
    i = Ne(),
    l = Gt(o);
  return (
    (n = _p(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ct(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Qt(o, t, l)),
    e !== null && (it(e, o, l, i), Zo(e, o, l)),
    l
  );
}
function Di(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Gu(e, t) {
  Lc(e, t), (e = e.alternate) && Lc(e, t);
}
function ug() {
  return null;
}
var Dp =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yu(e) {
  this._internalRoot = e;
}
qi.prototype.render = Yu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Ji(e, t, null, null);
};
qi.prototype.unmount = Yu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xn(function () {
      Ji(null, e, null, null);
    }),
      (t[Rt] = null);
  }
};
function qi(e) {
  this._internalRoot = e;
}
qi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ad();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++);
    Ft.splice(n, 0, e), n === 0 && fd(e);
  }
};
function Ju(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Ac() {}
function ag(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var a = Di(l);
        i.call(a);
      };
    }
    var l = $p(t, r, e, 0, null, !1, !1, '', Ac);
    return (
      (e._reactRootContainer = l),
      (e[Rt] = l.current),
      eo(e.nodeType === 8 ? e.parentNode : e),
      xn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var a = Di(u);
      s.call(a);
    };
  }
  var u = Xu(e, 0, !1, null, null, !1, !1, '', Ac);
  return (
    (e._reactRootContainer = u),
    (e[Rt] = u.current),
    eo(e.nodeType === 8 ? e.parentNode : e),
    xn(function () {
      Ji(t, u, n, r);
    }),
    u
  );
}
function el(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == 'function') {
      var s = o;
      o = function () {
        var u = Di(l);
        s.call(u);
      };
    }
    Ji(t, l, e, o);
  } else l = ag(n, t, e, o, r);
  return Di(l);
}
sd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 &&
          (vu(t, n | 1), De(t, le()), !(W & 6) && ((or = le() + 500), nn()));
      }
      break;
    case 13:
      xn(function () {
        var r = Tt(e, 1);
        if (r !== null) {
          var o = Ne();
          it(r, e, 1, o);
        }
      }),
        Gu(e, 1);
  }
};
yu = function (e) {
  if (e.tag === 13) {
    var t = Tt(e, 134217728);
    if (t !== null) {
      var n = Ne();
      it(t, e, 134217728, n);
    }
    Gu(e, 134217728);
  }
};
ud = function (e) {
  if (e.tag === 13) {
    var t = Gt(e),
      n = Tt(e, t);
    if (n !== null) {
      var r = Ne();
      it(n, e, t, r);
    }
    Gu(e, t);
  }
};
ad = function () {
  return b;
};
cd = function (e, t) {
  var n = b;
  try {
    return (b = e), t();
  } finally {
    b = n;
  }
};
ds = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((is(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Vi(r);
            if (!o) throw Error(T(90));
            Uf(r), is(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Wf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && bn(e, !!n.multiple, t, !1);
  }
};
Yf = Vu;
Jf = xn;
var cg = { usingClientEntryPoint: !1, Events: [wo, Fn, Vi, Xf, Gf, Vu] },
  Or = {
    findFiberByHostInstance: an,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  fg = {
    bundleType: Or.bundleType,
    version: Or.version,
    rendererPackageName: Or.rendererPackageName,
    rendererConfig: Or.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ed(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Or.findFiberByHostInstance || ug,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vo.isDisabled && Vo.supportsFiber)
    try {
      (Bi = Vo.inject(fg)), (ft = Vo);
    } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cg;
Ue.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ju(t)) throw Error(T(200));
  return sg(e, t, null, n);
};
Ue.createRoot = function (e, t) {
  if (!Ju(e)) throw Error(T(299));
  var n = !1,
    r = '',
    o = Dp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Xu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Rt] = t.current),
    eo(e.nodeType === 8 ? e.parentNode : e),
    new Yu(t)
  );
};
Ue.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(T(188))
      : ((e = Object.keys(e).join(',')), Error(T(268, e)));
  return (e = ed(t)), (e = e === null ? null : e.stateNode), e;
};
Ue.flushSync = function (e) {
  return xn(e);
};
Ue.hydrate = function (e, t, n) {
  if (!Zi(t)) throw Error(T(200));
  return el(null, e, t, !0, n);
};
Ue.hydrateRoot = function (e, t, n) {
  if (!Ju(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = Dp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = $p(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Rt] = t.current),
    eo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new qi(t);
};
Ue.render = function (e, t, n) {
  if (!Zi(t)) throw Error(T(200));
  return el(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function (e) {
  if (!Zi(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (xn(function () {
        el(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rt] = null);
        });
      }),
      !0)
    : !1;
};
Ue.unstable_batchedUpdates = Vu;
Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Zi(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return el(e, t, n, !1, r);
};
Ue.version = '18.2.0-next-9e3b772b8-20220608';
function Lp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lp);
    } catch (e) {
      console.error(e);
    }
}
Lp(), ($f.exports = Ue);
var Ap = $f.exports;
const Kn = ho(Ap);
var Mc = Ap;
(ql.createRoot = Mc.createRoot), (ql.hydrateRoot = Mc.hydrateRoot);
class dg {
  constructor(t) {
    Ra(this, 'apiClient');
    this.apiClient = t;
  }
  async logout() {
    try {
      const t = await this.apiClient.post(
        '/accounts/logout/',
        {},
        { maxRedirects: 0 },
      );
      t.status === 200 && (window.location.href = t.data.location);
    } catch (t) {
      console.log(t);
    }
  }
  async getUserProfile() {
    try {
      const t = await this.apiClient.get('/api/v1/profile/', {
        withCredentials: !0,
      });
      if (t.status === 200) return t.data;
    } catch (t) {
      console.log(t);
    }
  }
  async getNotes() {
    try {
      const t = await this.apiClient.get('/api/v1/notes/', {
        withCredentials: !0,
      });
      if (t.status === 200) return t.data;
    } catch (t) {
      console.log(t);
    }
  }
}
function Mp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: pg } = Object.prototype,
  { getPrototypeOf: qu } = Object,
  tl = ((e) => (t) => {
    const n = pg.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ht = (e) => ((e = e.toLowerCase()), (t) => tl(t) === e),
  nl = (e) => (t) => typeof t === e,
  { isArray: pr } = Array,
  ao = nl('undefined');
function mg(e) {
  return (
    e !== null &&
    !ao(e) &&
    e.constructor !== null &&
    !ao(e.constructor) &&
    Qe(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Ip = ht('ArrayBuffer');
function hg(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Ip(e.buffer)),
    t
  );
}
const vg = nl('string'),
  Qe = nl('function'),
  Fp = nl('number'),
  rl = (e) => e !== null && typeof e == 'object',
  yg = (e) => e === !0 || e === !1,
  li = (e) => {
    if (tl(e) !== 'object') return !1;
    const t = qu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  gg = ht('Date'),
  wg = ht('File'),
  xg = ht('Blob'),
  Eg = ht('FileList'),
  Sg = (e) => rl(e) && Qe(e.pipe),
  Cg = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Qe(e.append) &&
          ((t = tl(e)) === 'formdata' ||
            (t === 'object' &&
              Qe(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  kg = ht('URLSearchParams'),
  Og = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Eo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, o;
  if ((typeof e != 'object' && (e = [e]), pr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length;
    let s;
    for (r = 0; r < l; r++) (s = i[r]), t.call(null, e[s], s, e);
  }
}
function zp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Bp =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Up = (e) => !ao(e) && e !== Bp;
function Ks() {
  const { caseless: e } = (Up(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && zp(t, o)) || o;
      li(t[i]) && li(r)
        ? (t[i] = Ks(t[i], r))
        : li(r)
          ? (t[i] = Ks({}, r))
          : pr(r)
            ? (t[i] = r.slice())
            : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Eo(arguments[r], n);
  return t;
}
const Ng = (e, t, n, { allOwnKeys: r } = {}) => (
    Eo(
      t,
      (o, i) => {
        n && Qe(o) ? (e[i] = Mp(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  Rg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Tg = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Pg = (e, t, n, r) => {
    let o, i, l;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !s[l] && ((t[l] = e[l]), (s[l] = !0));
      e = n !== !1 && qu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  jg = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  _g = (e) => {
    if (!e) return null;
    if (pr(e)) return e;
    let t = e.length;
    if (!Fp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  $g = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && qu(Uint8Array)),
  Dg = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  Lg = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Ag = ht('HTMLFormElement'),
  Mg = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Ic = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Ig = ht('RegExp'),
  Hp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Eo(n, (o, i) => {
      let l;
      (l = t(o, i, e)) !== !1 && (r[i] = l || o);
    }),
      Object.defineProperties(e, r);
  },
  Fg = (e) => {
    Hp(e, (t, n) => {
      if (Qe(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Qe(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  zg = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return pr(e) ? r(e) : r(String(e).split(t)), n;
  },
  Bg = () => {},
  Ug = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  zl = 'abcdefghijklmnopqrstuvwxyz',
  Fc = '0123456789',
  Wp = { DIGIT: Fc, ALPHA: zl, ALPHA_DIGIT: zl + zl.toUpperCase() + Fc },
  Hg = (e = 16, t = Wp.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Wg(e) {
  return !!(
    e &&
    Qe(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const Vg = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (rl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[o] = r;
            const i = pr(r) ? [] : {};
            return (
              Eo(r, (l, s) => {
                const u = n(l, o + 1);
                !ao(u) && (i[s] = u);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Kg = ht('AsyncFunction'),
  bg = (e) => e && (rl(e) || Qe(e)) && Qe(e.then) && Qe(e.catch),
  k = {
    isArray: pr,
    isArrayBuffer: Ip,
    isBuffer: mg,
    isFormData: Cg,
    isArrayBufferView: hg,
    isString: vg,
    isNumber: Fp,
    isBoolean: yg,
    isObject: rl,
    isPlainObject: li,
    isUndefined: ao,
    isDate: gg,
    isFile: wg,
    isBlob: xg,
    isRegExp: Ig,
    isFunction: Qe,
    isStream: Sg,
    isURLSearchParams: kg,
    isTypedArray: $g,
    isFileList: Eg,
    forEach: Eo,
    merge: Ks,
    extend: Ng,
    trim: Og,
    stripBOM: Rg,
    inherits: Tg,
    toFlatObject: Pg,
    kindOf: tl,
    kindOfTest: ht,
    endsWith: jg,
    toArray: _g,
    forEachEntry: Dg,
    matchAll: Lg,
    isHTMLForm: Ag,
    hasOwnProperty: Ic,
    hasOwnProp: Ic,
    reduceDescriptors: Hp,
    freezeMethods: Fg,
    toObjectSet: zg,
    toCamelCase: Mg,
    noop: Bg,
    toFiniteNumber: Ug,
    findKey: zp,
    global: Bp,
    isContextDefined: Up,
    ALPHABET: Wp,
    generateString: Hg,
    isSpecCompliantForm: Wg,
    toJSONObject: Vg,
    isAsyncFn: Kg,
    isThenable: bg,
  };
function H(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
k.inherits(H, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: k.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Vp = H.prototype,
  Kp = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  Kp[e] = { value: e };
});
Object.defineProperties(H, Kp);
Object.defineProperty(Vp, 'isAxiosError', { value: !0 });
H.from = (e, t, n, r, o, i) => {
  const l = Object.create(Vp);
  return (
    k.toFlatObject(
      e,
      l,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== 'isAxiosError',
    ),
    H.call(l, e.message, t, n, r, o),
    (l.cause = e),
    (l.name = e.name),
    i && Object.assign(l, i),
    l
  );
};
const Qg = null;
function bs(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function bp(e) {
  return k.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function zc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = bp(o)), !n && i ? '[' + o + ']' : o;
        })
        .join(n ? '.' : '')
    : t;
}
function Xg(e) {
  return k.isArray(e) && !e.some(bs);
}
const Gg = k.toFlatObject(k, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ol(e, t, n) {
  if (!k.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = k.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, E) {
        return !k.isUndefined(E[w]);
      },
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    l = n.indexes,
    u = (n.Blob || (typeof Blob < 'u' && Blob)) && k.isSpecCompliantForm(t);
  if (!k.isFunction(o)) throw new TypeError('visitor must be a function');
  function a(v) {
    if (v === null) return '';
    if (k.isDate(v)) return v.toISOString();
    if (!u && k.isBlob(v))
      throw new H('Blob is not supported. Use a Buffer instead.');
    return k.isArrayBuffer(v) || k.isTypedArray(v)
      ? u && typeof Blob == 'function'
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, w, E) {
    let m = v;
    if (v && !E && typeof v == 'object') {
      if (k.endsWith(w, '{}'))
        (w = r ? w : w.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (k.isArray(v) && Xg(v)) ||
        ((k.isFileList(v) || k.endsWith(w, '[]')) && (m = k.toArray(v)))
      )
        return (
          (w = bp(w)),
          m.forEach(function (h, x) {
            !(k.isUndefined(h) || h === null) &&
              t.append(
                l === !0 ? zc([w], x, i) : l === null ? w : w + '[]',
                a(h),
              );
          }),
          !1
        );
    }
    return bs(v) ? !0 : (t.append(zc(E, w, i), a(v)), !1);
  }
  const f = [],
    d = Object.assign(Gg, {
      defaultVisitor: c,
      convertValue: a,
      isVisitable: bs,
    });
  function g(v, w) {
    if (!k.isUndefined(v)) {
      if (f.indexOf(v) !== -1)
        throw Error('Circular reference detected in ' + w.join('.'));
      f.push(v),
        k.forEach(v, function (m, p) {
          (!(k.isUndefined(m) || m === null) &&
            o.call(t, m, k.isString(p) ? p.trim() : p, w, d)) === !0 &&
            g(m, w ? w.concat(p) : [p]);
        }),
        f.pop();
    }
  }
  if (!k.isObject(e)) throw new TypeError('data must be an object');
  return g(e), t;
}
function Bc(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Zu(e, t) {
  (this._pairs = []), e && ol(e, this, t);
}
const Qp = Zu.prototype;
Qp.append = function (t, n) {
  this._pairs.push([t, n]);
};
Qp.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Bc);
      }
    : Bc;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1]);
    }, '')
    .join('&');
};
function Yg(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Xp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Yg,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = k.isURLSearchParams(t) ? t.toString() : new Zu(t, n).toString(r)),
    i)
  ) {
    const l = e.indexOf('#');
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}
class Uc {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    k.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Gp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Jg = typeof URLSearchParams < 'u' ? URLSearchParams : Zu,
  qg = typeof FormData < 'u' ? FormData : null,
  Zg = typeof Blob < 'u' ? Blob : null,
  e0 = {
    isBrowser: !0,
    classes: { URLSearchParams: Jg, FormData: qg, Blob: Zg },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  Yp = typeof window < 'u' && typeof document < 'u',
  t0 = ((e) => Yp && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product,
  ),
  n0 =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  r0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Yp,
        hasStandardBrowserEnv: t0,
        hasStandardBrowserWebWorkerEnv: n0,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  ct = { ...r0, ...e0 };
function o0(e, t) {
  return ol(
    e,
    new ct.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return ct.isNode && k.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function i0(e) {
  return k
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function l0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Jp(e) {
  function t(n, r, o, i) {
    let l = n[i++];
    if (l === '__proto__') return !0;
    const s = Number.isFinite(+l),
      u = i >= n.length;
    return (
      (l = !l && k.isArray(o) ? o.length : l),
      u
        ? (k.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !s)
        : ((!o[l] || !k.isObject(o[l])) && (o[l] = []),
          t(n, r, o[l], i) && k.isArray(o[l]) && (o[l] = l0(o[l])),
          !s)
    );
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const n = {};
    return (
      k.forEachEntry(e, (r, o) => {
        t(i0(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function s0(e, t, n) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const ea = {
  transitional: Gp,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = k.isObject(t);
      if ((i && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)))
        return o ? JSON.stringify(Jp(t)) : t;
      if (
        k.isArrayBuffer(t) ||
        k.isBuffer(t) ||
        k.isStream(t) ||
        k.isFile(t) ||
        k.isBlob(t)
      )
        return t;
      if (k.isArrayBufferView(t)) return t.buffer;
      if (k.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          t.toString()
        );
      let s;
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return o0(t, this.formSerializer).toString();
        if ((s = k.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const u = this.env && this.env.FormData;
          return ol(
            s ? { 'files[]': t } : t,
            u && new u(),
            this.formSerializer,
          );
        }
      }
      return i || o ? (n.setContentType('application/json', !1), s0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ea.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json';
      if (t && k.isString(t) && ((r && !this.responseType) || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (l)
            throw s.name === 'SyntaxError'
              ? H.from(s, H.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ct.classes.FormData, Blob: ct.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
k.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  ea.headers[e] = {};
});
const ta = ea,
  u0 = k.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  a0 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (l) {
            (o = l.indexOf(':')),
              (n = l.substring(0, o).trim().toLowerCase()),
              (r = l.substring(o + 1).trim()),
              !(!n || (t[n] && u0[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  Hc = Symbol('internals');
function Nr(e) {
  return e && String(e).trim().toLowerCase();
}
function si(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(si) : String(e);
}
function c0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const f0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Bl(e, t, n, r, o) {
  if (k.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!k.isString(t))) {
    if (k.isString(r)) return t.indexOf(r) !== -1;
    if (k.isRegExp(r)) return r.test(t);
  }
}
function d0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function p0(e, t) {
  const n = k.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, l) {
        return this[r].call(this, t, o, i, l);
      },
      configurable: !0,
    });
  });
}
class il {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(s, u, a) {
      const c = Nr(u);
      if (!c) throw new Error('header name must be a non-empty string');
      const f = k.findKey(o, c);
      (!f || o[f] === void 0 || a === !0 || (a === void 0 && o[f] !== !1)) &&
        (o[f || u] = si(s));
    }
    const l = (s, u) => k.forEach(s, (a, c) => i(a, c, u));
    return (
      k.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : k.isString(t) && (t = t.trim()) && !f0(t)
          ? l(a0(t), n)
          : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Nr(t)), t)) {
      const r = k.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return c0(o);
        if (k.isFunction(n)) return n.call(this, o, r);
        if (k.isRegExp(n)) return n.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = Nr(t)), t)) {
      const r = k.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Bl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(l) {
      if (((l = Nr(l)), l)) {
        const s = k.findKey(r, l);
        s && (!n || Bl(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return k.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Bl(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      k.forEach(this, (o, i) => {
        const l = k.findKey(r, i);
        if (l) {
          (n[l] = si(o)), delete n[i];
          return;
        }
        const s = t ? d0(i) : String(i).trim();
        s !== i && delete n[i], (n[s] = si(o)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      k.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && k.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Hc] = this[Hc] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(l) {
      const s = Nr(l);
      r[s] || (p0(o, l), (r[s] = !0));
    }
    return k.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
il.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
k.reduceDescriptors(il.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
k.freezeMethods(il);
const kt = il;
function Ul(e, t) {
  const n = this || ta,
    r = t || n,
    o = kt.from(r.headers);
  let i = r.data;
  return (
    k.forEach(e, function (s) {
      i = s.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function qp(e) {
  return !!(e && e.__CANCEL__);
}
function So(e, t, n) {
  H.call(this, e ?? 'canceled', H.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
k.inherits(So, H, { __CANCEL__: !0 });
function m0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new H(
          'Request failed with status code ' + n.status,
          [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
const h0 = ct.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const l = [e + '=' + encodeURIComponent(t)];
        k.isNumber(n) && l.push('expires=' + new Date(n).toGMTString()),
          k.isString(r) && l.push('path=' + r),
          k.isString(o) && l.push('domain=' + o),
          i === !0 && l.push('secure'),
          (document.cookie = l.join('; '));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function v0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function y0(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Zp(e, t) {
  return e && !v0(t) ? y0(e, t) : t;
}
const g0 = ct.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function o(i) {
        let l = i;
        return (
          t && (n.setAttribute('href', l), (l = n.href)),
          n.setAttribute('href', l),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (l) {
          const s = k.isString(l) ? o(l) : l;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function w0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function x0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        c = r[i];
      l || (l = a), (n[o] = u), (r[o] = a);
      let f = i,
        d = 0;
      for (; f !== o; ) (d += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), a - l < t)) return;
      const g = c && a - c;
      return g ? Math.round((d * 1e3) / g) : void 0;
    }
  );
}
function Wc(e, t) {
  let n = 0;
  const r = x0(50, 250);
  return (o) => {
    const i = o.loaded,
      l = o.lengthComputable ? o.total : void 0,
      s = i - n,
      u = r(s),
      a = i <= l;
    n = i;
    const c = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && l && a ? (l - i) / u : void 0,
      event: o,
    };
    (c[t ? 'download' : 'upload'] = !0), e(c);
  };
}
const E0 = typeof XMLHttpRequest < 'u',
  S0 =
    E0 &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = kt.from(e.headers).normalize();
        let { responseType: l, withXSRFToken: s } = e,
          u;
        function a() {
          e.cancelToken && e.cancelToken.unsubscribe(u),
            e.signal && e.signal.removeEventListener('abort', u);
        }
        let c;
        if (k.isFormData(o)) {
          if (ct.hasStandardBrowserEnv || ct.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((c = i.getContentType()) !== !1) {
            const [w, ...E] = c
              ? c
                  .split(';')
                  .map((m) => m.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([w || 'multipart/form-data', ...E].join('; '));
          }
        }
        let f = new XMLHttpRequest();
        if (e.auth) {
          const w = e.auth.username || '',
            E = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : '';
          i.set('Authorization', 'Basic ' + btoa(w + ':' + E));
        }
        const d = Zp(e.baseURL, e.url);
        f.open(e.method.toUpperCase(), Xp(d, e.params, e.paramsSerializer), !0),
          (f.timeout = e.timeout);
        function g() {
          if (!f) return;
          const w = kt.from(
              'getAllResponseHeaders' in f && f.getAllResponseHeaders(),
            ),
            m = {
              data:
                !l || l === 'text' || l === 'json'
                  ? f.responseText
                  : f.response,
              status: f.status,
              statusText: f.statusText,
              headers: w,
              config: e,
              request: f,
            };
          m0(
            function (h) {
              n(h), a();
            },
            function (h) {
              r(h), a();
            },
            m,
          ),
            (f = null);
        }
        if (
          ('onloadend' in f
            ? (f.onloadend = g)
            : (f.onreadystatechange = function () {
                !f ||
                  f.readyState !== 4 ||
                  (f.status === 0 &&
                    !(f.responseURL && f.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(g);
              }),
          (f.onabort = function () {
            f &&
              (r(new H('Request aborted', H.ECONNABORTED, e, f)), (f = null));
          }),
          (f.onerror = function () {
            r(new H('Network Error', H.ERR_NETWORK, e, f)), (f = null);
          }),
          (f.ontimeout = function () {
            let E = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const m = e.transitional || Gp;
            e.timeoutErrorMessage && (E = e.timeoutErrorMessage),
              r(
                new H(
                  E,
                  m.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
                  e,
                  f,
                ),
              ),
              (f = null);
          }),
          ct.hasStandardBrowserEnv &&
            (s && k.isFunction(s) && (s = s(e)), s || (s !== !1 && g0(d))))
        ) {
          const w =
            e.xsrfHeaderName && e.xsrfCookieName && h0.read(e.xsrfCookieName);
          w && i.set(e.xsrfHeaderName, w);
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in f &&
            k.forEach(i.toJSON(), function (E, m) {
              f.setRequestHeader(m, E);
            }),
          k.isUndefined(e.withCredentials) ||
            (f.withCredentials = !!e.withCredentials),
          l && l !== 'json' && (f.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            f.addEventListener('progress', Wc(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            f.upload &&
            f.upload.addEventListener('progress', Wc(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (w) => {
              f &&
                (r(!w || w.type ? new So(null, e, f) : w),
                f.abort(),
                (f = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal &&
              (e.signal.aborted ? u() : e.signal.addEventListener('abort', u)));
        const v = w0(d);
        if (v && ct.protocols.indexOf(v) === -1) {
          r(new H('Unsupported protocol ' + v + ':', H.ERR_BAD_REQUEST, e));
          return;
        }
        f.send(o || null);
      });
    },
  Qs = { http: Qg, xhr: S0 };
k.forEach(Qs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const Vc = (e) => `- ${e}`,
  C0 = (e) => k.isFunction(e) || e === null || e === !1,
  em = {
    getAdapter: (e) => {
      e = k.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let l;
        if (
          ((r = n),
          !C0(n) && ((r = Qs[(l = String(n)).toLowerCase()]), r === void 0))
        )
          throw new H(`Unknown adapter '${l}'`);
        if (r) break;
        o[l || '#' + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([s, u]) =>
            `adapter ${s} ` +
            (u === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        );
        let l = t
          ? i.length > 1
            ? `since :
` +
              i.map(Vc).join(`
`)
            : ' ' + Vc(i[0])
          : 'as no adapter specified';
        throw new H(
          'There is no suitable adapter to dispatch the request ' + l,
          'ERR_NOT_SUPPORT',
        );
      }
      return r;
    },
    adapters: Qs,
  };
function Hl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new So(null, e);
}
function Kc(e) {
  return (
    Hl(e),
    (e.headers = kt.from(e.headers)),
    (e.data = Ul.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    em
      .getAdapter(e.adapter || ta.adapter)(e)
      .then(
        function (r) {
          return (
            Hl(e),
            (r.data = Ul.call(e, e.transformResponse, r)),
            (r.headers = kt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            qp(r) ||
              (Hl(e),
              r &&
                r.response &&
                ((r.response.data = Ul.call(
                  e,
                  e.transformResponse,
                  r.response,
                )),
                (r.response.headers = kt.from(r.response.headers)))),
            Promise.reject(r)
          );
        },
      )
  );
}
const bc = (e) => (e instanceof kt ? { ...e } : e);
function ir(e, t) {
  t = t || {};
  const n = {};
  function r(a, c, f) {
    return k.isPlainObject(a) && k.isPlainObject(c)
      ? k.merge.call({ caseless: f }, a, c)
      : k.isPlainObject(c)
        ? k.merge({}, c)
        : k.isArray(c)
          ? c.slice()
          : c;
  }
  function o(a, c, f) {
    if (k.isUndefined(c)) {
      if (!k.isUndefined(a)) return r(void 0, a, f);
    } else return r(a, c, f);
  }
  function i(a, c) {
    if (!k.isUndefined(c)) return r(void 0, c);
  }
  function l(a, c) {
    if (k.isUndefined(c)) {
      if (!k.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, c);
  }
  function s(a, c, f) {
    if (f in t) return r(a, c);
    if (f in e) return r(void 0, a);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: s,
    headers: (a, c) => o(bc(a), bc(c), !0),
  };
  return (
    k.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = u[c] || o,
        d = f(e[c], t[c], c);
      (k.isUndefined(d) && f !== s) || (n[c] = d);
    }),
    n
  );
}
const tm = '1.6.8',
  na = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    na[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  },
);
const Qc = {};
na.transitional = function (t, n, r) {
  function o(i, l) {
    return (
      '[Axios v' +
      tm +
      "] Transitional option '" +
      i +
      "'" +
      l +
      (r ? '. ' + r : '')
    );
  }
  return (i, l, s) => {
    if (t === !1)
      throw new H(
        o(l, ' has been removed' + (n ? ' in ' + n : '')),
        H.ERR_DEPRECATED,
      );
    return (
      n &&
        !Qc[l] &&
        ((Qc[l] = !0),
        console.warn(
          o(
            l,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future',
          ),
        )),
      t ? t(i, l, s) : !0
    );
  };
};
function k0(e, t, n) {
  if (typeof e != 'object')
    throw new H('options must be an object', H.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      l = t[i];
    if (l) {
      const s = e[i],
        u = s === void 0 || l(s, i, e);
      if (u !== !0)
        throw new H('option ' + i + ' must be ' + u, H.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new H('Unknown option ' + i, H.ERR_BAD_OPTION);
  }
}
const Xs = { assertOptions: k0, validators: na },
  Lt = Xs.validators;
class Li {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Uc(), response: new Uc() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, '') : '';
        r.stack
          ? i &&
            !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, '')) &&
            (r.stack +=
              `
` + i)
          : (r.stack = i);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = ir(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Xs.assertOptions(
        r,
        {
          silentJSONParsing: Lt.transitional(Lt.boolean),
          forcedJSONParsing: Lt.transitional(Lt.boolean),
          clarifyTimeoutError: Lt.transitional(Lt.boolean),
        },
        !1,
      ),
      o != null &&
        (k.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Xs.assertOptions(
              o,
              { encode: Lt.function, serialize: Lt.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let l = i && k.merge(i.common, i[n.method]);
    i &&
      k.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (v) => {
          delete i[v];
        },
      ),
      (n.headers = kt.concat(l, i));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (w) {
      (typeof w.runWhen == 'function' && w.runWhen(n) === !1) ||
        ((u = u && w.synchronous), s.unshift(w.fulfilled, w.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (w) {
      a.push(w.fulfilled, w.rejected);
    });
    let c,
      f = 0,
      d;
    if (!u) {
      const v = [Kc.bind(this), void 0];
      for (
        v.unshift.apply(v, s),
          v.push.apply(v, a),
          d = v.length,
          c = Promise.resolve(n);
        f < d;

      )
        c = c.then(v[f++], v[f++]);
      return c;
    }
    d = s.length;
    let g = n;
    for (f = 0; f < d; ) {
      const v = s[f++],
        w = s[f++];
      try {
        g = v(g);
      } catch (E) {
        w.call(this, E);
        break;
      }
    }
    try {
      c = Kc.call(this, g);
    } catch (v) {
      return Promise.reject(v);
    }
    for (f = 0, d = a.length; f < d; ) c = c.then(a[f++], a[f++]);
    return c;
  }
  getUri(t) {
    t = ir(this.defaults, t);
    const n = Zp(t.baseURL, t.url);
    return Xp(n, t.params, t.paramsSerializer);
  }
}
k.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Li.prototype[t] = function (n, r) {
    return this.request(
      ir(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
k.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, l, s) {
      return this.request(
        ir(s || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: l,
        }),
      );
    };
  }
  (Li.prototype[t] = n()), (Li.prototype[t + 'Form'] = n(!0));
});
const ui = Li;
class ra {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const l = new Promise((s) => {
          r.subscribe(s), (i = s);
        }).then(o);
        return (
          (l.cancel = function () {
            r.unsubscribe(i);
          }),
          l
        );
      }),
      t(function (i, l, s) {
        r.reason || ((r.reason = new So(i, l, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new ra(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const O0 = ra;
function N0(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function R0(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const Gs = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Gs).forEach(([e, t]) => {
  Gs[t] = e;
});
const T0 = Gs;
function nm(e) {
  const t = new ui(e),
    n = Mp(ui.prototype.request, t);
  return (
    k.extend(n, ui.prototype, t, { allOwnKeys: !0 }),
    k.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return nm(ir(e, o));
    }),
    n
  );
}
const ce = nm(ta);
ce.Axios = ui;
ce.CanceledError = So;
ce.CancelToken = O0;
ce.isCancel = qp;
ce.VERSION = tm;
ce.toFormData = ol;
ce.AxiosError = H;
ce.Cancel = ce.CanceledError;
ce.all = function (t) {
  return Promise.all(t);
};
ce.spread = N0;
ce.isAxiosError = R0;
ce.mergeConfig = ir;
ce.AxiosHeaders = kt;
ce.formToJSON = (e) => Jp(k.isHTMLForm(e) ? new FormData(e) : e);
ce.getAdapter = em.getAdapter;
ce.HttpStatusCode = T0;
ce.default = ce;
function P0() {
  return ce.create({
    xsrfHeaderName: 'X-CSRFToken',
    xsrfCookieName: 'csrftoken',
  });
}
const j0 = new dg(P0()),
  rm = y.createContext(j0);
var om = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = '', l = 0; l < arguments.length; l++) {
        var s = arguments[l];
        s && (i = o(i, r(s)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == 'string' || typeof i == 'number') return i;
      if (typeof i != 'object') return '';
      if (Array.isArray(i)) return n.apply(null, i);
      if (
        i.toString !== Object.prototype.toString &&
        !i.toString.toString().includes('[native code]')
      )
        return i.toString();
      var l = '';
      for (var s in i) t.call(i, s) && i[s] && (l = o(l, s));
      return l;
    }
    function o(i, l) {
      return l ? (i ? i + ' ' + l : i + l) : i;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(om);
var _0 = om.exports;
const F = ho(_0),
  $0 = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  D0 = 'xs',
  ll = y.createContext({ prefixes: {}, breakpoints: $0, minBreakpoint: D0 });
function B(e, t) {
  const { prefixes: n } = y.useContext(ll);
  return e || n[t] || t;
}
function im() {
  const { breakpoints: e } = y.useContext(ll);
  return e;
}
function lm() {
  const { minBreakpoint: e } = y.useContext(ll);
  return e;
}
function L0() {
  const { dir: e } = y.useContext(ll);
  return e === 'rtl';
}
const sm = y.forwardRef(
  ({ bsPrefix: e, fluid: t = !1, as: n = 'div', className: r, ...o }, i) => {
    const l = B(e, 'container'),
      s = typeof t == 'string' ? `-${t}` : '-fluid';
    return N.jsx(n, { ref: i, ...o, className: F(r, t ? `${l}${s}` : l) });
  },
);
sm.displayName = 'Container';
const A0 = sm;
var Xc = { exports: {} },
  Ys = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = n);
  function n(r) {
    function o(l, s, u, a, c, f) {
      var d = a || '<<anonymous>>',
        g = f || u;
      if (s[u] == null)
        return l
          ? new Error(
              'Required ' +
                c +
                ' `' +
                g +
                '` was not specified ' +
                ('in `' + d + '`.'),
            )
          : null;
      for (
        var v = arguments.length, w = Array(v > 6 ? v - 6 : 0), E = 6;
        E < v;
        E++
      )
        w[E - 6] = arguments[E];
      return r.apply(void 0, [s, u, d, c, g].concat(w));
    }
    var i = o.bind(null, !1);
    return (i.isRequired = o.bind(null, !0)), i;
  }
  e.exports = t.default;
})(Ys, Ys.exports);
var M0 = Ys.exports;
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = i);
  var n = M0,
    r = o(n);
  function o(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function i() {
    for (var l = arguments.length, s = Array(l), u = 0; u < l; u++)
      s[u] = arguments[u];
    function a() {
      for (var c = arguments.length, f = Array(c), d = 0; d < c; d++)
        f[d] = arguments[d];
      var g = null;
      return (
        s.forEach(function (v) {
          if (g == null) {
            var w = v.apply(void 0, f);
            w != null && (g = w);
          }
        }),
        g
      );
    }
    return (0, r.default)(a);
  }
  e.exports = t.default;
})(Xc, Xc.exports);
function Js() {
  return (
    (Js = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Js.apply(this, arguments)
  );
}
function um(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Gc(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.substr(1);
}
function I0(e) {
  var t = F0(e, 'string');
  return typeof t == 'symbol' ? t : String(t);
}
function F0(e, t) {
  if (typeof e != 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function z0(e, t, n) {
  var r = y.useRef(e !== void 0),
    o = y.useState(t),
    i = o[0],
    l = o[1],
    s = e !== void 0,
    u = r.current;
  return (
    (r.current = s),
    !s && u && i !== t && l(t),
    [
      s ? e : i,
      y.useCallback(
        function (a) {
          for (
            var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), d = 1;
            d < c;
            d++
          )
            f[d - 1] = arguments[d];
          n && n.apply(void 0, [a].concat(f)), l(a);
        },
        [n],
      ),
    ]
  );
}
function oa(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var o,
      i = n,
      l = i[Gc(r)],
      s = i[r],
      u = um(i, [Gc(r), r].map(I0)),
      a = t[r],
      c = z0(s, l, e[a]),
      f = c[0],
      d = c[1];
    return Js({}, u, ((o = {}), (o[r] = f), (o[a] = d), o));
  }, e);
}
function qs(e, t) {
  return (
    (qs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    qs(e, t)
  );
}
function B0(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    qs(e, t);
}
var U0 = Function.prototype.bind.call(Function.prototype.call, [].slice);
function wt(e, t) {
  return U0(e.querySelectorAll(t));
}
function am() {
  const [, e] = y.useReducer((t) => !t, !1);
  return e;
}
const Yc = (e) =>
  !e || typeof e == 'function'
    ? e
    : (t) => {
        e.current = t;
      };
function H0(e, t) {
  const n = Yc(e),
    r = Yc(t);
  return (o) => {
    n && n(o), r && r(o);
  };
}
function On(e, t) {
  return y.useMemo(() => H0(e, t), [e, t]);
}
const cm = y.createContext(null);
cm.displayName = 'NavContext';
const ia = cm,
  W0 = y.createContext(null),
  co = (e, t = null) => (e != null ? String(e) : t || null),
  En = W0,
  V0 = y.createContext(null),
  fm = V0,
  K0 = 'data-rr-ui-',
  b0 = 'rrUi';
function mr(e) {
  return `${K0}${e}`;
}
function Q0(e) {
  return `${b0}${e}`;
}
function X0(e) {
  const t = y.useRef(e);
  return (
    y.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function ae(e) {
  const t = X0(e);
  return y.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t],
  );
}
const G0 = ['as', 'disabled'];
function Y0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function J0(e) {
  return !e || e.trim() === '#';
}
function la({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: o,
  role: i,
  onClick: l,
  tabIndex: s = 0,
  type: u,
}) {
  e || (n != null || r != null || o != null ? (e = 'a') : (e = 'button'));
  const a = { tagName: e };
  if (e === 'button') return [{ type: u || 'button', disabled: t }, a];
  const c = (d) => {
      if (((t || (e === 'a' && J0(n))) && d.preventDefault(), t)) {
        d.stopPropagation();
        return;
      }
      l == null || l(d);
    },
    f = (d) => {
      d.key === ' ' && (d.preventDefault(), c(d));
    };
  return (
    e === 'a' && (n || (n = '#'), t && (n = void 0)),
    [
      {
        role: i ?? 'button',
        disabled: void 0,
        tabIndex: t ? void 0 : s,
        href: n,
        target: e === 'a' ? r : void 0,
        'aria-disabled': t || void 0,
        rel: e === 'a' ? o : void 0,
        onClick: c,
        onKeyDown: f,
      },
      a,
    ]
  );
}
const sa = y.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    o = Y0(e, G0);
  const [i, { tagName: l }] = la(Object.assign({ tagName: n, disabled: r }, o));
  return N.jsx(l, Object.assign({}, o, i, { ref: t }));
});
sa.displayName = 'Button';
const q0 = ['as', 'active', 'eventKey'];
function Z0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function dm({ key: e, onClick: t, active: n, id: r, role: o, disabled: i }) {
  const l = y.useContext(En),
    s = y.useContext(ia),
    u = y.useContext(fm);
  let a = n;
  const c = { role: o };
  if (s) {
    !o && s.role === 'tablist' && (c.role = 'tab');
    const f = s.getControllerId(e ?? null),
      d = s.getControlledId(e ?? null);
    (c[mr('event-key')] = e),
      (c.id = f || r),
      (a = n == null && e != null ? s.activeKey === e : n),
      (a ||
        (!(u != null && u.unmountOnExit) && !(u != null && u.mountOnEnter))) &&
        (c['aria-controls'] = d);
  }
  return (
    c.role === 'tab' &&
      ((c['aria-selected'] = a),
      a || (c.tabIndex = -1),
      i && ((c.tabIndex = -1), (c['aria-disabled'] = !0))),
    (c.onClick = ae((f) => {
      i ||
        (t == null || t(f),
        e != null && l && !f.isPropagationStopped() && l(e, f));
    })),
    [c, { isActive: a }]
  );
}
const pm = y.forwardRef((e, t) => {
  let { as: n = sa, active: r, eventKey: o } = e,
    i = Z0(e, q0);
  const [l, s] = dm(Object.assign({ key: co(o, i.href), active: r }, i));
  return (
    (l[mr('active')] = s.isActive),
    N.jsx(n, Object.assign({}, i, l, { ref: t }))
  );
});
pm.displayName = 'NavItem';
const e1 = pm,
  t1 = ['as', 'onSelect', 'activeKey', 'role', 'onKeyDown'];
function n1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Jc = () => {},
  qc = mr('event-key'),
  mm = y.forwardRef((e, t) => {
    let { as: n = 'div', onSelect: r, activeKey: o, role: i, onKeyDown: l } = e,
      s = n1(e, t1);
    const u = am(),
      a = y.useRef(!1),
      c = y.useContext(En),
      f = y.useContext(fm);
    let d, g;
    f &&
      ((i = i || 'tablist'),
      (o = f.activeKey),
      (d = f.getControlledId),
      (g = f.getControllerId));
    const v = y.useRef(null),
      w = (h) => {
        const x = v.current;
        if (!x) return null;
        const S = wt(x, `[${qc}]:not([aria-disabled=true])`),
          C = x.querySelector('[aria-selected=true]');
        if (!C || C !== document.activeElement) return null;
        const O = S.indexOf(C);
        if (O === -1) return null;
        let R = O + h;
        return R >= S.length && (R = 0), R < 0 && (R = S.length - 1), S[R];
      },
      E = (h, x) => {
        h != null && (r == null || r(h, x), c == null || c(h, x));
      },
      m = (h) => {
        if ((l == null || l(h), !f)) return;
        let x;
        switch (h.key) {
          case 'ArrowLeft':
          case 'ArrowUp':
            x = w(-1);
            break;
          case 'ArrowRight':
          case 'ArrowDown':
            x = w(1);
            break;
          default:
            return;
        }
        x &&
          (h.preventDefault(),
          E(x.dataset[Q0('EventKey')] || null, h),
          (a.current = !0),
          u());
      };
    y.useEffect(() => {
      if (v.current && a.current) {
        const h = v.current.querySelector(`[${qc}][aria-selected=true]`);
        h == null || h.focus();
      }
      a.current = !1;
    });
    const p = On(t, v);
    return N.jsx(En.Provider, {
      value: E,
      children: N.jsx(ia.Provider, {
        value: {
          role: i,
          activeKey: co(o),
          getControlledId: d || Jc,
          getControllerId: g || Jc,
        },
        children: N.jsx(
          n,
          Object.assign({}, s, { onKeyDown: m, ref: p, role: i }),
        ),
      }),
    });
  });
mm.displayName = 'Nav';
const r1 = Object.assign(mm, { Item: e1 }),
  hm = y.createContext(null);
hm.displayName = 'NavbarContext';
const Nn = hm,
  vm = y.createContext(null);
vm.displayName = 'CardHeaderContext';
const ym = vm,
  gm = y.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => (
      (t = B(t, 'nav-item')), N.jsx(n, { ref: o, className: F(e, t), ...r })
    ),
  );
gm.displayName = 'NavItem';
const o1 = gm;
function i1() {
  return y.useState(null);
}
function l1(e, t, n, r = !1) {
  const o = ae(n);
  y.useEffect(() => {
    const i = typeof e == 'function' ? e() : e;
    return i.addEventListener(t, o, r), () => i.removeEventListener(t, o, r);
  }, [e]);
}
function wm() {
  const e = y.useRef(!0),
    t = y.useRef(() => e.current);
  return (
    y.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    t.current
  );
}
function xm(e) {
  const t = y.useRef(null);
  return (
    y.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
const s1 =
    typeof global < 'u' &&
    global.navigator &&
    global.navigator.product === 'ReactNative',
  u1 = typeof document < 'u',
  Ai = u1 || s1 ? y.useLayoutEffect : y.useEffect,
  a1 = ['onKeyDown'];
function c1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function f1(e) {
  return !e || e.trim() === '#';
}
const Em = y.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = c1(e, a1);
  const [o] = la(Object.assign({ tagName: 'a' }, r)),
    i = ae((l) => {
      o.onKeyDown(l), n == null || n(l);
    });
  return f1(r.href) || r.role === 'button'
    ? N.jsx('a', Object.assign({ ref: t }, r, o, { onKeyDown: i }))
    : N.jsx('a', Object.assign({ ref: t }, r, { onKeyDown: n }));
});
Em.displayName = 'Anchor';
const Sm = Em,
  Cm = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        as: n = Sm,
        active: r,
        eventKey: o,
        disabled: i = !1,
        ...l
      },
      s,
    ) => {
      e = B(e, 'nav-link');
      const [u, a] = dm({ key: co(o, l.href), active: r, disabled: i, ...l });
      return N.jsx(n, {
        ...l,
        ...u,
        ref: s,
        disabled: i,
        className: F(t, e, i && 'disabled', a.isActive && 'active'),
      });
    },
  );
Cm.displayName = 'NavLink';
const km = Cm,
  Om = y.forwardRef((e, t) => {
    const {
        as: n = 'div',
        bsPrefix: r,
        variant: o,
        fill: i = !1,
        justify: l = !1,
        navbar: s,
        navbarScroll: u,
        className: a,
        activeKey: c,
        ...f
      } = oa(e, { activeKey: 'onSelect' }),
      d = B(r, 'nav');
    let g,
      v,
      w = !1;
    const E = y.useContext(Nn),
      m = y.useContext(ym);
    return (
      E
        ? ((g = E.bsPrefix), (w = s ?? !0))
        : m && ({ cardHeaderBsPrefix: v } = m),
      N.jsx(r1, {
        as: n,
        ref: t,
        activeKey: c,
        className: F(a, {
          [d]: !w,
          [`${g}-nav`]: w,
          [`${g}-nav-scroll`]: w && u,
          [`${v}-${o}`]: !!v,
          [`${d}-${o}`]: !!o,
          [`${d}-fill`]: i,
          [`${d}-justified`]: l,
        }),
        ...f,
      })
    );
  });
Om.displayName = 'Nav';
const d1 = Object.assign(Om, { Item: o1, Link: km }),
  Nm = y.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, o) => {
    e = B(e, 'navbar-brand');
    const i = n || (r.href ? 'a' : 'span');
    return N.jsx(i, { ...r, ref: o, className: F(t, e) });
  });
Nm.displayName = 'NavbarBrand';
const p1 = Nm;
function sl(e) {
  return (e && e.ownerDocument) || document;
}
function m1(e) {
  var t = sl(e);
  return (t && t.defaultView) || window;
}
function h1(e, t) {
  return m1(e).getComputedStyle(e, t);
}
var v1 = /([A-Z])/g;
function y1(e) {
  return e.replace(v1, '-$1').toLowerCase();
}
var g1 = /^ms-/;
function Ko(e) {
  return y1(e).replace(g1, '-ms-');
}
var w1 =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function x1(e) {
  return !!(e && w1.test(e));
}
function Ot(e, t) {
  var n = '',
    r = '';
  if (typeof t == 'string')
    return e.style.getPropertyValue(Ko(t)) || h1(e).getPropertyValue(Ko(t));
  Object.keys(t).forEach(function (o) {
    var i = t[o];
    !i && i !== 0
      ? e.style.removeProperty(Ko(o))
      : x1(o)
        ? (r += o + '(' + i + ') ')
        : (n += Ko(o) + ': ' + i + ';');
  }),
    r && (n += 'transform: ' + r + ';'),
    (e.style.cssText += ';' + n);
}
var Rm = { exports: {} },
  E1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  S1 = E1,
  C1 = S1;
function Tm() {}
function Pm() {}
Pm.resetWarningCache = Tm;
var k1 = function () {
  function e(r, o, i, l, s, u) {
    if (u !== C1) {
      var a = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
      throw ((a.name = 'Invariant Violation'), a);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Pm,
    resetWarningCache: Tm,
  };
  return (n.PropTypes = n), n;
};
Rm.exports = k1();
var O1 = Rm.exports;
const Wl = ho(O1),
  Zc = { disabled: !1 },
  jm = ye.createContext(null);
var N1 = function (t) {
    return t.scrollTop;
  },
  Dr = 'unmounted',
  It = 'exited',
  rt = 'entering',
  xt = 'entered',
  fo = 'exiting',
  $t = (function (e) {
    B0(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var l = o,
        s = l && !l.isMounting ? r.enter : r.appear,
        u;
      return (
        (i.appearStatus = null),
        r.in
          ? s
            ? ((u = It), (i.appearStatus = rt))
            : (u = xt)
          : r.unmountOnExit || r.mountOnEnter
            ? (u = Dr)
            : (u = It),
        (i.state = { status: u }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var l = o.in;
      return l && i.status === Dr ? { status: It } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var l = this.state.status;
          this.props.in
            ? l !== rt && l !== xt && (i = rt)
            : (l === rt || l === xt) && (i = fo);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          l,
          s;
        return (
          (i = l = s = o),
          o != null &&
            typeof o != 'number' &&
            ((i = o.exit),
            (l = o.enter),
            (s = o.appear !== void 0 ? o.appear : l)),
          { exit: i, enter: l, appear: s }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === rt)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var l = this.props.nodeRef
                ? this.props.nodeRef.current
                : Kn.findDOMNode(this);
              l && N1(l);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === It &&
            this.setState({ status: Dr });
      }),
      (n.performEnter = function (o) {
        var i = this,
          l = this.props.enter,
          s = this.context ? this.context.isMounting : o,
          u = this.props.nodeRef ? [s] : [Kn.findDOMNode(this), s],
          a = u[0],
          c = u[1],
          f = this.getTimeouts(),
          d = s ? f.appear : f.enter;
        if ((!o && !l) || Zc.disabled) {
          this.safeSetState({ status: xt }, function () {
            i.props.onEntered(a);
          });
          return;
        }
        this.props.onEnter(a, c),
          this.safeSetState({ status: rt }, function () {
            i.props.onEntering(a, c),
              i.onTransitionEnd(d, function () {
                i.safeSetState({ status: xt }, function () {
                  i.props.onEntered(a, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          l = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : Kn.findDOMNode(this);
        if (!i || Zc.disabled) {
          this.safeSetState({ status: It }, function () {
            o.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: fo }, function () {
            o.props.onExiting(s),
              o.onTransitionEnd(l.exit, function () {
                o.safeSetState({ status: It }, function () {
                  o.props.onExited(s);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          l = !0;
        return (
          (this.nextCallback = function (s) {
            l && ((l = !1), (i.nextCallback = null), o(s));
          }),
          (this.nextCallback.cancel = function () {
            l = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var l = this.props.nodeRef
            ? this.props.nodeRef.current
            : Kn.findDOMNode(this),
          s = o == null && !this.props.addEndListener;
        if (!l || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var u = this.props.nodeRef
              ? [this.nextCallback]
              : [l, this.nextCallback],
            a = u[0],
            c = u[1];
          this.props.addEndListener(a, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === Dr) return null;
        var i = this.props,
          l = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var s = um(i, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return ye.createElement(
          jm.Provider,
          { value: null },
          typeof l == 'function'
            ? l(o, s)
            : ye.cloneElement(ye.Children.only(l), s),
        );
      }),
      t
    );
  })(ye.Component);
$t.contextType = jm;
$t.propTypes = {};
function _n() {}
$t.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: _n,
  onEntering: _n,
  onEntered: _n,
  onExit: _n,
  onExiting: _n,
  onExited: _n,
};
$t.UNMOUNTED = Dr;
$t.EXITED = It;
$t.ENTERING = rt;
$t.ENTERED = xt;
$t.EXITING = fo;
const R1 = $t,
  ul = !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
var Zs = !1,
  eu = !1;
try {
  var Vl = {
    get passive() {
      return (Zs = !0);
    },
    get once() {
      return (eu = Zs = !0);
    },
  };
  ul &&
    (window.addEventListener('test', Vl, Vl),
    window.removeEventListener('test', Vl, !0));
} catch {}
function _m(e, t, n, r) {
  if (r && typeof r != 'boolean' && !eu) {
    var o = r.once,
      i = r.capture,
      l = n;
    !eu &&
      o &&
      ((l =
        n.__once ||
        function s(u) {
          this.removeEventListener(t, s, i), n.call(this, u);
        }),
      (n.__once = l)),
      e.addEventListener(t, l, Zs ? r : i);
  }
  e.addEventListener(t, n, r);
}
function T1(e, t, n, r) {
  var o = r && typeof r != 'boolean' ? r.capture : r;
  e.removeEventListener(t, n, o),
    n.__once && e.removeEventListener(t, n.__once, o);
}
function Ht(e, t, n, r) {
  return (
    _m(e, t, n, r),
    function () {
      T1(e, t, n, r);
    }
  );
}
function P1(e, t, n, r) {
  if ((n === void 0 && (n = !1), r === void 0 && (r = !0), e)) {
    var o = document.createEvent('HTMLEvents');
    o.initEvent(t, n, r), e.dispatchEvent(o);
  }
}
function j1(e) {
  var t = Ot(e, 'transitionDuration') || '',
    n = t.indexOf('ms') === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function _1(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    o = setTimeout(function () {
      r || P1(e, 'transitionend', !0);
    }, t + n),
    i = Ht(
      e,
      'transitionend',
      function () {
        r = !0;
      },
      { once: !0 },
    );
  return function () {
    clearTimeout(o), i();
  };
}
function $1(e, t, n, r) {
  n == null && (n = j1(e) || 0);
  var o = _1(e, n, r),
    i = Ht(e, 'transitionend', t);
  return function () {
    o(), i();
  };
}
function ef(e, t) {
  const n = Ot(e, t) || '',
    r = n.indexOf('ms') === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function ua(e, t) {
  const n = ef(e, 'transitionDuration'),
    r = ef(e, 'transitionDelay'),
    o = $1(
      e,
      (i) => {
        i.target === e && (o(), t(i));
      },
      n + r,
    );
}
function Rr(...e) {
  return e
    .filter((t) => t != null)
    .reduce((t, n) => {
      if (typeof n != 'function')
        throw new Error(
          'Invalid Argument Type, must only provide functions, undefined, or null.',
        );
      return t === null
        ? n
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          };
    }, null);
}
function $m(e) {
  e.offsetHeight;
}
function D1(e) {
  return e && 'setState' in e ? Kn.findDOMNode(e) : e ?? null;
}
const L1 = ye.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        onExited: i,
        addEndListener: l,
        children: s,
        childRef: u,
        ...a
      },
      c,
    ) => {
      const f = y.useRef(null),
        d = On(f, u),
        g = (C) => {
          d(D1(C));
        },
        v = (C) => (O) => {
          C && f.current && C(f.current, O);
        },
        w = y.useCallback(v(e), [e]),
        E = y.useCallback(v(t), [t]),
        m = y.useCallback(v(n), [n]),
        p = y.useCallback(v(r), [r]),
        h = y.useCallback(v(o), [o]),
        x = y.useCallback(v(i), [i]),
        S = y.useCallback(v(l), [l]);
      return N.jsx(R1, {
        ref: c,
        ...a,
        onEnter: w,
        onEntered: m,
        onEntering: E,
        onExit: p,
        onExited: x,
        onExiting: h,
        addEndListener: S,
        nodeRef: f,
        children:
          typeof s == 'function'
            ? (C, O) => s(C, { ...O, ref: g })
            : ye.cloneElement(s, { ref: g }),
      });
    },
  ),
  aa = L1,
  A1 = {
    height: ['marginTop', 'marginBottom'],
    width: ['marginLeft', 'marginRight'],
  };
function M1(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    o = A1[e];
  return r + parseInt(Ot(t, o[0]), 10) + parseInt(Ot(t, o[1]), 10);
}
const I1 = {
    [It]: 'collapse',
    [fo]: 'collapsing',
    [rt]: 'collapsing',
    [xt]: 'collapse show',
  },
  F1 = ye.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        className: i,
        children: l,
        dimension: s = 'height',
        in: u = !1,
        timeout: a = 300,
        mountOnEnter: c = !1,
        unmountOnExit: f = !1,
        appear: d = !1,
        getDimensionValue: g = M1,
        ...v
      },
      w,
    ) => {
      const E = typeof s == 'function' ? s() : s,
        m = y.useMemo(
          () =>
            Rr((C) => {
              C.style[E] = '0';
            }, e),
          [E, e],
        ),
        p = y.useMemo(
          () =>
            Rr((C) => {
              const O = `scroll${E[0].toUpperCase()}${E.slice(1)}`;
              C.style[E] = `${C[O]}px`;
            }, t),
          [E, t],
        ),
        h = y.useMemo(
          () =>
            Rr((C) => {
              C.style[E] = null;
            }, n),
          [E, n],
        ),
        x = y.useMemo(
          () =>
            Rr((C) => {
              (C.style[E] = `${g(E, C)}px`), $m(C);
            }, r),
          [r, g, E],
        ),
        S = y.useMemo(
          () =>
            Rr((C) => {
              C.style[E] = null;
            }, o),
          [E, o],
        );
      return N.jsx(aa, {
        ref: w,
        addEndListener: ua,
        ...v,
        'aria-expanded': v.role ? u : null,
        onEnter: m,
        onEntering: p,
        onEntered: h,
        onExit: x,
        onExiting: S,
        childRef: l.ref,
        in: u,
        timeout: a,
        mountOnEnter: c,
        unmountOnExit: f,
        appear: d,
        children: (C, O) =>
          ye.cloneElement(l, {
            ...O,
            className: F(
              i,
              l.props.className,
              I1[C],
              E === 'width' && 'collapse-horizontal',
            ),
          }),
      });
    },
  ),
  z1 = F1,
  Dm = y.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
    t = B(t, 'navbar-collapse');
    const o = y.useContext(Nn);
    return N.jsx(z1, {
      in: !!(o && o.expanded),
      ...n,
      children: N.jsx('div', { ref: r, className: t, children: e }),
    });
  });
Dm.displayName = 'NavbarCollapse';
const B1 = Dm,
  Lm = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        label: r = 'Toggle navigation',
        as: o = 'button',
        onClick: i,
        ...l
      },
      s,
    ) => {
      e = B(e, 'navbar-toggler');
      const { onToggle: u, expanded: a } = y.useContext(Nn) || {},
        c = ae((f) => {
          i && i(f), u && u();
        });
      return (
        o === 'button' && (l.type = 'button'),
        N.jsx(o, {
          ...l,
          ref: s,
          onClick: c,
          'aria-label': r,
          className: F(t, e, !a && 'collapsed'),
          children: n || N.jsx('span', { className: `${e}-icon` }),
        })
      );
    },
  );
Lm.displayName = 'NavbarToggle';
const U1 = Lm,
  tu = new WeakMap(),
  tf = (e, t) => {
    if (!e || !t) return;
    const n = tu.get(t) || new Map();
    tu.set(t, n);
    let r = n.get(e);
    return r || ((r = t.matchMedia(e)), (r.refCount = 0), n.set(r.media, r)), r;
  };
function H1(e, t = typeof window > 'u' ? void 0 : window) {
  const n = tf(e, t),
    [r, o] = y.useState(() => (n ? n.matches : !1));
  return (
    Ai(() => {
      let i = tf(e, t);
      if (!i) return o(!1);
      let l = tu.get(t);
      const s = () => {
        o(i.matches);
      };
      return (
        i.refCount++,
        i.addListener(s),
        s(),
        () => {
          i.removeListener(s),
            i.refCount--,
            i.refCount <= 0 && (l == null || l.delete(i.media)),
            (i = void 0);
        }
      );
    }, [e]),
    r
  );
}
function W1(e) {
  const t = Object.keys(e);
  function n(s, u) {
    return s === u ? u : s ? `${s} and ${u}` : u;
  }
  function r(s) {
    return t[Math.min(t.indexOf(s) + 1, t.length - 1)];
  }
  function o(s) {
    const u = r(s);
    let a = e[u];
    return (
      typeof a == 'number' ? (a = `${a - 0.2}px`) : (a = `calc(${a} - 0.2px)`),
      `(max-width: ${a})`
    );
  }
  function i(s) {
    let u = e[s];
    return typeof u == 'number' && (u = `${u}px`), `(min-width: ${u})`;
  }
  function l(s, u, a) {
    let c;
    typeof s == 'object'
      ? ((c = s), (a = u), (u = !0))
      : ((u = u || !0), (c = { [s]: u }));
    let f = y.useMemo(
      () =>
        Object.entries(c).reduce(
          (d, [g, v]) => (
            (v === 'up' || v === !0) && (d = n(d, i(g))),
            (v === 'down' || v === !0) && (d = n(d, o(g))),
            d
          ),
          '',
        ),
      [JSON.stringify(c)],
    );
    return H1(f, a);
  }
  return l;
}
const V1 = W1({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
function Kl(e) {
  e === void 0 && (e = sl());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function Mi(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
function K1(e) {
  const t = y.useRef(e);
  return (t.current = e), t;
}
function b1(e) {
  const t = K1(e);
  y.useEffect(() => () => t.current(), []);
}
function Q1(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const nf = mr('modal-open');
class X1 {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1,
  } = {}) {
    (this.handleContainerOverflow = n),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = t);
  }
  getScrollbarWidth() {
    return Q1(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {}
  removeModalAttributes(t) {}
  setContainerStyle(t) {
    const n = { overflow: 'hidden' },
      r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      o = this.getElement();
    (t.style = { overflow: o.style.overflow, [r]: o.style[r] }),
      t.scrollBarWidth &&
        (n[r] = `${parseInt(Ot(o, r) || '0', 10) + t.scrollBarWidth}px`),
      o.setAttribute(nf, ''),
      Ot(o, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(nf), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return (
      n !== -1 ||
        ((n = this.modals.length),
        this.modals.push(t),
        this.setModalAttributes(t),
        n !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      n
    );
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 &&
      (this.modals.splice(n, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const ca = X1,
  Am = y.createContext(ul ? window : void 0);
Am.Provider;
function al() {
  return y.useContext(Am);
}
const bl = (e, t) =>
  ul
    ? e == null
      ? (t || sl()).body
      : (typeof e == 'function' && (e = e()),
        e && 'current' in e && (e = e.current),
        e && ('nodeType' in e || e.getBoundingClientRect) ? e : null)
    : null;
function G1(e, t) {
  const n = al(),
    [r, o] = y.useState(() => bl(e, n == null ? void 0 : n.document));
  if (!r) {
    const i = bl(e);
    i && o(i);
  }
  return (
    y.useEffect(() => {
      t && r && t(r);
    }, [t, r]),
    y.useEffect(() => {
      const i = bl(e);
      i !== r && o(i);
    }, [e, r]),
    r
  );
}
function Y1({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: o,
}) {
  const i = y.useRef(null),
    l = y.useRef(t),
    s = ae(n);
  y.useEffect(() => {
    t ? (l.current = !0) : s(i.current);
  }, [t, s]);
  const u = On(i, e.ref),
    a = y.cloneElement(e, { ref: u });
  return t ? a : o || (!l.current && r) ? null : a;
}
const J1 = [
  'onEnter',
  'onEntering',
  'onEntered',
  'onExit',
  'onExiting',
  'onExited',
  'addEndListener',
  'children',
];
function q1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Z1(e) {
  let {
      onEnter: t,
      onEntering: n,
      onEntered: r,
      onExit: o,
      onExiting: i,
      onExited: l,
      addEndListener: s,
      children: u,
    } = e,
    a = q1(e, J1);
  const c = y.useRef(null),
    f = On(c, typeof u == 'function' ? null : u.ref),
    d = (x) => (S) => {
      x && c.current && x(c.current, S);
    },
    g = y.useCallback(d(t), [t]),
    v = y.useCallback(d(n), [n]),
    w = y.useCallback(d(r), [r]),
    E = y.useCallback(d(o), [o]),
    m = y.useCallback(d(i), [i]),
    p = y.useCallback(d(l), [l]),
    h = y.useCallback(d(s), [s]);
  return Object.assign(
    {},
    a,
    { nodeRef: c },
    t && { onEnter: g },
    n && { onEntering: v },
    r && { onEntered: w },
    o && { onExit: E },
    i && { onExiting: m },
    l && { onExited: p },
    s && { addEndListener: h },
    {
      children:
        typeof u == 'function'
          ? (x, S) => u(x, Object.assign({}, S, { ref: f }))
          : y.cloneElement(u, { ref: f }),
    },
  );
}
const ew = ['component'];
function tw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const nw = y.forwardRef((e, t) => {
    let { component: n } = e,
      r = tw(e, ew);
    const o = Z1(r);
    return N.jsx(n, Object.assign({ ref: t }, o));
  }),
  rw = nw;
function ow({ in: e, onTransition: t }) {
  const n = y.useRef(null),
    r = y.useRef(!0),
    o = ae(t);
  return (
    Ai(() => {
      if (!n.current) return;
      let i = !1;
      return (
        o({ in: e, element: n.current, initial: r.current, isStale: () => i }),
        () => {
          i = !0;
        }
      );
    }, [e, o]),
    Ai(
      () => (
        (r.current = !1),
        () => {
          r.current = !0;
        }
      ),
      [],
    ),
    n
  );
}
function iw({ children: e, in: t, onExited: n, onEntered: r, transition: o }) {
  const [i, l] = y.useState(!t);
  t && i && l(!1);
  const s = ow({
      in: !!t,
      onTransition: (a) => {
        const c = () => {
          a.isStale() ||
            (a.in
              ? r == null || r(a.element, a.initial)
              : (l(!0), n == null || n(a.element)));
        };
        Promise.resolve(o(a)).then(c, (f) => {
          throw (a.in || l(!0), f);
        });
      },
    }),
    u = On(s, e.ref);
  return i && !t ? null : y.cloneElement(e, { ref: u });
}
function rf(e, t, n) {
  return e
    ? N.jsx(rw, Object.assign({}, n, { component: e }))
    : t
      ? N.jsx(iw, Object.assign({}, n, { transition: t }))
      : N.jsx(Y1, Object.assign({}, n));
}
function lw(e) {
  return e.code === 'Escape' || e.keyCode === 27;
}
const sw = [
  'show',
  'role',
  'className',
  'style',
  'children',
  'backdrop',
  'keyboard',
  'onBackdropClick',
  'onEscapeKeyDown',
  'transition',
  'runTransition',
  'backdropTransition',
  'runBackdropTransition',
  'autoFocus',
  'enforceFocus',
  'restoreFocus',
  'restoreFocusOptions',
  'renderDialog',
  'renderBackdrop',
  'manager',
  'container',
  'onShow',
  'onHide',
  'onExit',
  'onExited',
  'onExiting',
  'onEnter',
  'onEntering',
  'onEntered',
];
function uw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
let Ql;
function aw(e) {
  return (
    Ql || (Ql = new ca({ ownerDocument: e == null ? void 0 : e.document })), Ql
  );
}
function cw(e) {
  const t = al(),
    n = e || aw(t),
    r = y.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: y.useCallback((o) => {
      r.current.dialog = o;
    }, []),
    setBackdropRef: y.useCallback((o) => {
      r.current.backdrop = o;
    }, []),
  });
}
const Mm = y.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = 'dialog',
      className: o,
      style: i,
      children: l,
      backdrop: s = !0,
      keyboard: u = !0,
      onBackdropClick: a,
      onEscapeKeyDown: c,
      transition: f,
      runTransition: d,
      backdropTransition: g,
      runBackdropTransition: v,
      autoFocus: w = !0,
      enforceFocus: E = !0,
      restoreFocus: m = !0,
      restoreFocusOptions: p,
      renderDialog: h,
      renderBackdrop: x = (ee) => N.jsx('div', Object.assign({}, ee)),
      manager: S,
      container: C,
      onShow: O,
      onHide: R = () => {},
      onExit: A,
      onExited: j,
      onExiting: L,
      onEnter: M,
      onEntering: I,
      onEntered: X,
    } = e,
    oe = uw(e, sw);
  const V = al(),
    Y = G1(C),
    P = cw(S),
    D = wm(),
    $ = xm(n),
    [U, K] = y.useState(!n),
    xe = y.useRef(null);
  y.useImperativeHandle(t, () => P, [P]),
    ul && !$ && n && (xe.current = Kl(V == null ? void 0 : V.document)),
    n && U && K(!1);
  const se = ae(() => {
      if (
        (P.add(),
        (hr.current = Ht(document, 'keydown', vt)),
        (on.current = Ht(document, 'focus', () => setTimeout(fe), !0)),
        O && O(),
        w)
      ) {
        var ee, yr;
        const Pn = Kl(
          (ee = (yr = P.dialog) == null ? void 0 : yr.ownerDocument) != null
            ? ee
            : V == null
              ? void 0
              : V.document,
        );
        P.dialog &&
          Pn &&
          !Mi(P.dialog, Pn) &&
          ((xe.current = Pn), P.dialog.focus());
      }
    }),
    Q = ae(() => {
      if (
        (P.remove(),
        hr.current == null || hr.current(),
        on.current == null || on.current(),
        m)
      ) {
        var ee;
        (ee = xe.current) == null || ee.focus == null || ee.focus(p),
          (xe.current = null);
      }
    });
  y.useEffect(() => {
    !n || !Y || se();
  }, [n, Y, se]),
    y.useEffect(() => {
      U && Q();
    }, [U, Q]),
    b1(() => {
      Q();
    });
  const fe = ae(() => {
      if (!E || !D() || !P.isTopModal()) return;
      const ee = Kl(V == null ? void 0 : V.document);
      P.dialog && ee && !Mi(P.dialog, ee) && P.dialog.focus();
    }),
    qe = ae((ee) => {
      ee.target === ee.currentTarget && (a == null || a(ee), s === !0 && R());
    }),
    vt = ae((ee) => {
      u &&
        lw(ee) &&
        P.isTopModal() &&
        (c == null || c(ee), ee.defaultPrevented || R());
    }),
    on = y.useRef(),
    hr = y.useRef(),
    vr = (...ee) => {
      K(!0), j == null || j(...ee);
    };
  if (!Y) return null;
  const No = Object.assign(
    {
      role: r,
      ref: P.setDialogRef,
      'aria-modal': r === 'dialog' ? !0 : void 0,
    },
    oe,
    { style: i, className: o, tabIndex: -1 },
  );
  let Rn = h
    ? h(No)
    : N.jsx(
        'div',
        Object.assign({}, No, {
          children: y.cloneElement(l, { role: 'document' }),
        }),
      );
  Rn = rf(f, d, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: A,
    onExiting: L,
    onExited: vr,
    onEnter: M,
    onEntering: I,
    onEntered: X,
    children: Rn,
  });
  let Tn = null;
  return (
    s &&
      ((Tn = x({ ref: P.setBackdropRef, onClick: qe })),
      (Tn = rf(g, v, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: Tn,
      }))),
    N.jsx(N.Fragment, {
      children: Kn.createPortal(N.jsxs(N.Fragment, { children: [Tn, Rn] }), Y),
    })
  );
});
Mm.displayName = 'Modal';
const fw = Object.assign(Mm, { Manager: ca }),
  dw = { [rt]: 'show', [xt]: 'show' },
  Im = y.forwardRef(
    (
      {
        className: e,
        children: t,
        transitionClasses: n = {},
        onEnter: r,
        ...o
      },
      i,
    ) => {
      const l = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...o,
        },
        s = y.useCallback(
          (u, a) => {
            $m(u), r == null || r(u, a);
          },
          [r],
        );
      return N.jsx(aa, {
        ref: i,
        addEndListener: ua,
        ...l,
        onEnter: s,
        childRef: t.ref,
        children: (u, a) =>
          y.cloneElement(t, {
            ...a,
            className: F('fade', e, t.props.className, dw[u], n[u]),
          }),
      });
    },
  );
Im.displayName = 'Fade';
const pw = Im,
  Fm = y.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => (
      (t = B(t, 'offcanvas-body')),
      N.jsx(n, { ref: o, className: F(e, t), ...r })
    ),
  );
Fm.displayName = 'OffcanvasBody';
const mw = Fm,
  hw = { [rt]: 'show', [xt]: 'show' },
  zm = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        in: r = !1,
        mountOnEnter: o = !1,
        unmountOnExit: i = !1,
        appear: l = !1,
        ...s
      },
      u,
    ) => (
      (e = B(e, 'offcanvas')),
      N.jsx(aa, {
        ref: u,
        addEndListener: ua,
        in: r,
        mountOnEnter: o,
        unmountOnExit: i,
        appear: l,
        ...s,
        childRef: n.ref,
        children: (a, c) =>
          y.cloneElement(n, {
            ...c,
            className: F(
              t,
              n.props.className,
              (a === rt || a === fo) && `${e}-toggling`,
              hw[a],
            ),
          }),
      })
    ),
  );
zm.displayName = 'OffcanvasToggling';
const vw = zm,
  yw = y.createContext({ onHide() {} }),
  Bm = yw,
  gw = {
    'aria-label': Wl.string,
    onClick: Wl.func,
    variant: Wl.oneOf(['white']),
  },
  fa = y.forwardRef(
    ({ className: e, variant: t, 'aria-label': n = 'Close', ...r }, o) =>
      N.jsx('button', {
        ref: o,
        type: 'button',
        className: F('btn-close', t && `btn-close-${t}`, e),
        'aria-label': n,
        ...r,
      }),
  );
fa.displayName = 'CloseButton';
fa.propTypes = gw;
const ww = fa,
  xw = y.forwardRef(
    (
      {
        closeLabel: e = 'Close',
        closeVariant: t,
        closeButton: n = !1,
        onHide: r,
        children: o,
        ...i
      },
      l,
    ) => {
      const s = y.useContext(Bm),
        u = ae(() => {
          s == null || s.onHide(), r == null || r();
        });
      return N.jsxs('div', {
        ref: l,
        ...i,
        children: [
          o,
          n && N.jsx(ww, { 'aria-label': e, variant: t, onClick: u }),
        ],
      });
    },
  ),
  Ew = xw,
  Um = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        closeLabel: n = 'Close',
        closeButton: r = !1,
        ...o
      },
      i,
    ) => (
      (e = B(e, 'offcanvas-header')),
      N.jsx(Ew, {
        ref: i,
        ...o,
        className: F(t, e),
        closeLabel: n,
        closeButton: r,
      })
    ),
  );
Um.displayName = 'OffcanvasHeader';
const Sw = Um,
  da = (e) =>
    y.forwardRef((t, n) =>
      N.jsx('div', { ...t, ref: n, className: F(t.className, e) }),
    ),
  Cw = da('h5'),
  Hm = y.forwardRef(
    ({ className: e, bsPrefix: t, as: n = Cw, ...r }, o) => (
      (t = B(t, 'offcanvas-title')),
      N.jsx(n, { ref: o, className: F(e, t), ...r })
    ),
  );
Hm.displayName = 'OffcanvasTitle';
const kw = Hm;
function Ow(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
        ' ' + t + ' ',
      ) !== -1;
}
function Nw(e, t) {
  e.classList
    ? e.classList.add(t)
    : Ow(e, t) ||
      (typeof e.className == 'string'
        ? (e.className = e.className + ' ' + t)
        : e.setAttribute(
            'class',
            ((e.className && e.className.baseVal) || '') + ' ' + t,
          ));
}
function of(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
}
function Rw(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == 'string'
      ? (e.className = of(e.className, t))
      : e.setAttribute(
          'class',
          of((e.className && e.className.baseVal) || '', t),
        );
}
const $n = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler',
};
class Wm extends ca {
  adjustAndStore(t, n, r) {
    const o = n.style[t];
    (n.dataset[t] = o), Ot(n, { [t]: `${parseFloat(Ot(n, t)) + r}px` });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], Ot(n, { [t]: r }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if ((Nw(n, 'modal-open'), !t.scrollBarWidth)) return;
    const r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      o = this.isRTL ? 'marginLeft' : 'marginRight';
    wt(n, $n.FIXED_CONTENT).forEach((i) =>
      this.adjustAndStore(r, i, t.scrollBarWidth),
    ),
      wt(n, $n.STICKY_CONTENT).forEach((i) =>
        this.adjustAndStore(o, i, -t.scrollBarWidth),
      ),
      wt(n, $n.NAVBAR_TOGGLER).forEach((i) =>
        this.adjustAndStore(o, i, t.scrollBarWidth),
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    Rw(n, 'modal-open');
    const r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      o = this.isRTL ? 'marginLeft' : 'marginRight';
    wt(n, $n.FIXED_CONTENT).forEach((i) => this.restore(r, i)),
      wt(n, $n.STICKY_CONTENT).forEach((i) => this.restore(o, i)),
      wt(n, $n.NAVBAR_TOGGLER).forEach((i) => this.restore(o, i));
  }
}
let Xl;
function Tw(e) {
  return Xl || (Xl = new Wm(e)), Xl;
}
function Pw(e) {
  return N.jsx(vw, { ...e });
}
function jw(e) {
  return N.jsx(pw, { ...e });
}
const Vm = y.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      'aria-labelledby': r,
      placement: o = 'start',
      responsive: i,
      show: l = !1,
      backdrop: s = !0,
      keyboard: u = !0,
      scroll: a = !1,
      onEscapeKeyDown: c,
      onShow: f,
      onHide: d,
      container: g,
      autoFocus: v = !0,
      enforceFocus: w = !0,
      restoreFocus: E = !0,
      restoreFocusOptions: m,
      onEntered: p,
      onExit: h,
      onExiting: x,
      onEnter: S,
      onEntering: C,
      onExited: O,
      backdropClassName: R,
      manager: A,
      renderStaticNode: j = !1,
      ...L
    },
    M,
  ) => {
    const I = y.useRef();
    e = B(e, 'offcanvas');
    const { onToggle: X } = y.useContext(Nn) || {},
      [oe, V] = y.useState(!1),
      Y = V1(i || 'xs', 'up');
    y.useEffect(() => {
      V(i ? l && !Y : l);
    }, [l, i, Y]);
    const P = ae(() => {
        X == null || X(), d == null || d();
      }),
      D = y.useMemo(() => ({ onHide: P }), [P]);
    function $() {
      return (
        A ||
        (a
          ? (I.current || (I.current = new Wm({ handleContainerOverflow: !1 })),
            I.current)
          : Tw())
      );
    }
    const U = (Q, ...fe) => {
        Q && (Q.style.visibility = 'visible'), S == null || S(Q, ...fe);
      },
      K = (Q, ...fe) => {
        Q && (Q.style.visibility = ''), O == null || O(...fe);
      },
      xe = y.useCallback(
        (Q) => N.jsx('div', { ...Q, className: F(`${e}-backdrop`, R) }),
        [R, e],
      ),
      se = (Q) =>
        N.jsx('div', {
          ...Q,
          ...L,
          className: F(t, i ? `${e}-${i}` : e, `${e}-${o}`),
          'aria-labelledby': r,
          children: n,
        });
    return N.jsxs(N.Fragment, {
      children: [
        !oe && (i || j) && se({}),
        N.jsx(Bm.Provider, {
          value: D,
          children: N.jsx(fw, {
            show: oe,
            ref: M,
            backdrop: s,
            container: g,
            keyboard: u,
            autoFocus: v,
            enforceFocus: w && !a,
            restoreFocus: E,
            restoreFocusOptions: m,
            onEscapeKeyDown: c,
            onShow: f,
            onHide: P,
            onEnter: U,
            onEntering: C,
            onEntered: p,
            onExit: h,
            onExiting: x,
            onExited: K,
            manager: $(),
            transition: Pw,
            backdropTransition: jw,
            renderBackdrop: xe,
            renderDialog: se,
          }),
        }),
      ],
    });
  },
);
Vm.displayName = 'Offcanvas';
const _w = Object.assign(Vm, { Body: mw, Header: Sw, Title: kw }),
  Km = y.forwardRef((e, t) => {
    const n = y.useContext(Nn);
    return N.jsx(_w, {
      ref: t,
      show: !!(n != null && n.expanded),
      ...e,
      renderStaticNode: !0,
    });
  });
Km.displayName = 'NavbarOffcanvas';
const $w = Km,
  bm = y.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'span', ...r }, o) => (
      (t = B(t, 'navbar-text')), N.jsx(n, { ref: o, className: F(e, t), ...r })
    ),
  );
bm.displayName = 'NavbarText';
const Dw = bm,
  Qm = y.forwardRef((e, t) => {
    const {
        bsPrefix: n,
        expand: r = !0,
        variant: o = 'light',
        bg: i,
        fixed: l,
        sticky: s,
        className: u,
        as: a = 'nav',
        expanded: c,
        onToggle: f,
        onSelect: d,
        collapseOnSelect: g = !1,
        ...v
      } = oa(e, { expanded: 'onToggle' }),
      w = B(n, 'navbar'),
      E = y.useCallback(
        (...h) => {
          d == null || d(...h), g && c && (f == null || f(!1));
        },
        [d, g, c, f],
      );
    v.role === void 0 && a !== 'nav' && (v.role = 'navigation');
    let m = `${w}-expand`;
    typeof r == 'string' && (m = `${m}-${r}`);
    const p = y.useMemo(
      () => ({
        onToggle: () => (f == null ? void 0 : f(!c)),
        bsPrefix: w,
        expanded: !!c,
        expand: r,
      }),
      [w, c, r, f],
    );
    return N.jsx(Nn.Provider, {
      value: p,
      children: N.jsx(En.Provider, {
        value: E,
        children: N.jsx(a, {
          ref: t,
          ...v,
          className: F(
            u,
            w,
            r && m,
            o && `${w}-${o}`,
            i && `bg-${i}`,
            s && `sticky-${s}`,
            l && `fixed-${l}`,
          ),
        }),
      }),
    });
  });
Qm.displayName = 'Navbar';
const bo = Object.assign(Qm, {
  Brand: p1,
  Collapse: B1,
  Offcanvas: $w,
  Text: Dw,
  Toggle: U1,
});
function Lw(e, t, n) {
  const r = y.useRef(e !== void 0),
    [o, i] = y.useState(t),
    l = e !== void 0,
    s = r.current;
  return (
    (r.current = l),
    !l && s && o !== t && i(t),
    [
      l ? e : o,
      y.useCallback(
        (...u) => {
          const [a, ...c] = u;
          let f = n == null ? void 0 : n(a, ...c);
          return i(a), f;
        },
        [n],
      ),
    ]
  );
}
const Aw = y.createContext(null),
  cl = Aw;
var lf = Object.prototype.hasOwnProperty;
function sf(e, t, n) {
  for (n of e.keys()) if (Wr(n, t)) return n;
}
function Wr(e, t) {
  var n, r, o;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length) for (; r-- && Wr(e[r], t[r]); );
      return r === -1;
    }
    if (n === Set) {
      if (e.size !== t.size) return !1;
      for (r of e)
        if (
          ((o = r),
          (o && typeof o == 'object' && ((o = sf(t, o)), !o)) || !t.has(o))
        )
          return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size) return !1;
      for (r of e)
        if (
          ((o = r[0]),
          (o && typeof o == 'object' && ((o = sf(t, o)), !o)) ||
            !Wr(r[1], t.get(o)))
        )
          return !1;
      return !0;
    }
    if (n === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
    else if (n === DataView) {
      if ((r = e.byteLength) === t.byteLength)
        for (; r-- && e.getInt8(r) === t.getInt8(r); );
      return r === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r]; );
      return r === -1;
    }
    if (!n || typeof e == 'object') {
      r = 0;
      for (n in e)
        if (
          (lf.call(e, n) && ++r && !lf.call(t, n)) ||
          !(n in t) ||
          !Wr(e[n], t[n])
        )
          return !1;
      return Object.keys(t).length === r;
    }
  }
  return e !== e && t !== t;
}
function Mw(e) {
  const t = wm();
  return [
    e[0],
    y.useCallback(
      (n) => {
        if (t()) return e[1](n);
      },
      [t, e[1]],
    ),
  ];
}
var Le = 'top',
  Ye = 'bottom',
  Je = 'right',
  Ae = 'left',
  pa = 'auto',
  Co = [Le, Ye, Je, Ae],
  lr = 'start',
  po = 'end',
  Iw = 'clippingParents',
  Xm = 'viewport',
  Tr = 'popper',
  Fw = 'reference',
  uf = Co.reduce(function (e, t) {
    return e.concat([t + '-' + lr, t + '-' + po]);
  }, []),
  Gm = [].concat(Co, [pa]).reduce(function (e, t) {
    return e.concat([t, t + '-' + lr, t + '-' + po]);
  }, []),
  zw = 'beforeRead',
  Bw = 'read',
  Uw = 'afterRead',
  Hw = 'beforeMain',
  Ww = 'main',
  Vw = 'afterMain',
  Kw = 'beforeWrite',
  bw = 'write',
  Qw = 'afterWrite',
  Xw = [zw, Bw, Uw, Hw, Ww, Vw, Kw, bw, Qw];
function pt(e) {
  return e.split('-')[0];
}
function Be(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Sn(e) {
  var t = Be(e).Element;
  return e instanceof t || e instanceof Element;
}
function mt(e) {
  var t = Be(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ma(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = Be(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var hn = Math.max,
  Ii = Math.min,
  sr = Math.round;
function nu() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function Ym() {
  return !/^((?!chrome|android).)*safari/i.test(nu());
}
function ur(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    mt(e) &&
    ((o = (e.offsetWidth > 0 && sr(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && sr(r.height) / e.offsetHeight) || 1));
  var l = Sn(e) ? Be(e) : window,
    s = l.visualViewport,
    u = !Ym() && n,
    a = (r.left + (u && s ? s.offsetLeft : 0)) / o,
    c = (r.top + (u && s ? s.offsetTop : 0)) / i,
    f = r.width / o,
    d = r.height / i;
  return {
    width: f,
    height: d,
    top: c,
    right: a + f,
    bottom: c + d,
    left: a,
    x: a,
    y: c,
  };
}
function ha(e) {
  var t = ur(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function Jm(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && ma(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Zt(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function jt(e) {
  return Be(e).getComputedStyle(e);
}
function Gw(e) {
  return ['table', 'td', 'th'].indexOf(Zt(e)) >= 0;
}
function rn(e) {
  return ((Sn(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function fl(e) {
  return Zt(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (ma(e) ? e.host : null) || rn(e);
}
function af(e) {
  return !mt(e) || jt(e).position === 'fixed' ? null : e.offsetParent;
}
function Yw(e) {
  var t = /firefox/i.test(nu()),
    n = /Trident/i.test(nu());
  if (n && mt(e)) {
    var r = jt(e);
    if (r.position === 'fixed') return null;
  }
  var o = fl(e);
  for (ma(o) && (o = o.host); mt(o) && ['html', 'body'].indexOf(Zt(o)) < 0; ) {
    var i = jt(o);
    if (
      i.transform !== 'none' ||
      i.perspective !== 'none' ||
      i.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === 'filter') ||
      (t && i.filter && i.filter !== 'none')
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function ko(e) {
  for (var t = Be(e), n = af(e); n && Gw(n) && jt(n).position === 'static'; )
    n = af(n);
  return n &&
    (Zt(n) === 'html' || (Zt(n) === 'body' && jt(n).position === 'static'))
    ? t
    : n || Yw(e) || t;
}
function va(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function Vr(e, t, n) {
  return hn(e, Ii(t, n));
}
function Jw(e, t, n) {
  var r = Vr(e, t, n);
  return r > n ? n : r;
}
function qm() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Zm(e) {
  return Object.assign({}, qm(), e);
}
function eh(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var qw = function (t, n) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    Zm(typeof t != 'number' ? t : eh(t, Co))
  );
};
function Zw(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    l = n.modifiersData.popperOffsets,
    s = pt(n.placement),
    u = va(s),
    a = [Ae, Je].indexOf(s) >= 0,
    c = a ? 'height' : 'width';
  if (!(!i || !l)) {
    var f = qw(o.padding, n),
      d = ha(i),
      g = u === 'y' ? Le : Ae,
      v = u === 'y' ? Ye : Je,
      w =
        n.rects.reference[c] + n.rects.reference[u] - l[u] - n.rects.popper[c],
      E = l[u] - n.rects.reference[u],
      m = ko(i),
      p = m ? (u === 'y' ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
      h = w / 2 - E / 2,
      x = f[g],
      S = p - d[c] - f[v],
      C = p / 2 - d[c] / 2 + h,
      O = Vr(x, C, S),
      R = u;
    n.modifiersData[r] = ((t = {}), (t[R] = O), (t.centerOffset = O - C), t);
  }
}
function ex(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? '[data-popper-arrow]' : r;
  o != null &&
    ((typeof o == 'string' && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (Jm(t.elements.popper, o) && (t.elements.arrow = o)));
}
const tx = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: Zw,
  effect: ex,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function ar(e) {
  return e.split('-')[1];
}
var nx = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function rx(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: sr(n * o) / o || 0, y: sr(r * o) / o || 0 };
}
function cf(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    l = e.offsets,
    s = e.position,
    u = e.gpuAcceleration,
    a = e.adaptive,
    c = e.roundOffsets,
    f = e.isFixed,
    d = l.x,
    g = d === void 0 ? 0 : d,
    v = l.y,
    w = v === void 0 ? 0 : v,
    E = typeof c == 'function' ? c({ x: g, y: w }) : { x: g, y: w };
  (g = E.x), (w = E.y);
  var m = l.hasOwnProperty('x'),
    p = l.hasOwnProperty('y'),
    h = Ae,
    x = Le,
    S = window;
  if (a) {
    var C = ko(n),
      O = 'clientHeight',
      R = 'clientWidth';
    if (
      (C === Be(n) &&
        ((C = rn(n)),
        jt(C).position !== 'static' &&
          s === 'absolute' &&
          ((O = 'scrollHeight'), (R = 'scrollWidth'))),
      (C = C),
      o === Le || ((o === Ae || o === Je) && i === po))
    ) {
      x = Ye;
      var A = f && C === S && S.visualViewport ? S.visualViewport.height : C[O];
      (w -= A - r.height), (w *= u ? 1 : -1);
    }
    if (o === Ae || ((o === Le || o === Ye) && i === po)) {
      h = Je;
      var j = f && C === S && S.visualViewport ? S.visualViewport.width : C[R];
      (g -= j - r.width), (g *= u ? 1 : -1);
    }
  }
  var L = Object.assign({ position: s }, a && nx),
    M = c === !0 ? rx({ x: g, y: w }, Be(n)) : { x: g, y: w };
  if (((g = M.x), (w = M.y), u)) {
    var I;
    return Object.assign(
      {},
      L,
      ((I = {}),
      (I[x] = p ? '0' : ''),
      (I[h] = m ? '0' : ''),
      (I.transform =
        (S.devicePixelRatio || 1) <= 1
          ? 'translate(' + g + 'px, ' + w + 'px)'
          : 'translate3d(' + g + 'px, ' + w + 'px, 0)'),
      I),
    );
  }
  return Object.assign(
    {},
    L,
    ((t = {}),
    (t[x] = p ? w + 'px' : ''),
    (t[h] = m ? g + 'px' : ''),
    (t.transform = ''),
    t),
  );
}
function ox(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    l = i === void 0 ? !0 : i,
    s = n.roundOffsets,
    u = s === void 0 ? !0 : s,
    a = {
      placement: pt(t.placement),
      variation: ar(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === 'fixed',
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      cf(
        Object.assign({}, a, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: l,
          roundOffsets: u,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        cf(
          Object.assign({}, a, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: u,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }));
}
const ix = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: ox,
  data: {},
};
var Qo = { passive: !0 };
function lx(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    l = r.resize,
    s = l === void 0 ? !0 : l,
    u = Be(t.elements.popper),
    a = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      a.forEach(function (c) {
        c.addEventListener('scroll', n.update, Qo);
      }),
    s && u.addEventListener('resize', n.update, Qo),
    function () {
      i &&
        a.forEach(function (c) {
          c.removeEventListener('scroll', n.update, Qo);
        }),
        s && u.removeEventListener('resize', n.update, Qo);
    }
  );
}
const sx = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: lx,
  data: {},
};
var ux = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function ai(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return ux[t];
  });
}
var ax = { start: 'end', end: 'start' };
function ff(e) {
  return e.replace(/start|end/g, function (t) {
    return ax[t];
  });
}
function ya(e) {
  var t = Be(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function ga(e) {
  return ur(rn(e)).left + ya(e).scrollLeft;
}
function cx(e, t) {
  var n = Be(e),
    r = rn(e),
    o = n.visualViewport,
    i = r.clientWidth,
    l = r.clientHeight,
    s = 0,
    u = 0;
  if (o) {
    (i = o.width), (l = o.height);
    var a = Ym();
    (a || (!a && t === 'fixed')) && ((s = o.offsetLeft), (u = o.offsetTop));
  }
  return { width: i, height: l, x: s + ga(e), y: u };
}
function fx(e) {
  var t,
    n = rn(e),
    r = ya(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = hn(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0,
    ),
    l = hn(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0,
    ),
    s = -r.scrollLeft + ga(e),
    u = -r.scrollTop;
  return (
    jt(o || n).direction === 'rtl' &&
      (s += hn(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: l, x: s, y: u }
  );
}
function wa(e) {
  var t = jt(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function th(e) {
  return ['html', 'body', '#document'].indexOf(Zt(e)) >= 0
    ? e.ownerDocument.body
    : mt(e) && wa(e)
      ? e
      : th(fl(e));
}
function Kr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = th(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Be(r),
    l = o ? [i].concat(i.visualViewport || [], wa(r) ? r : []) : r,
    s = t.concat(l);
  return o ? s : s.concat(Kr(fl(l)));
}
function ru(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function dx(e, t) {
  var n = ur(e, !1, t === 'fixed');
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function df(e, t, n) {
  return t === Xm ? ru(cx(e, n)) : Sn(t) ? dx(t, n) : ru(fx(rn(e)));
}
function px(e) {
  var t = Kr(fl(e)),
    n = ['absolute', 'fixed'].indexOf(jt(e).position) >= 0,
    r = n && mt(e) ? ko(e) : e;
  return Sn(r)
    ? t.filter(function (o) {
        return Sn(o) && Jm(o, r) && Zt(o) !== 'body';
      })
    : [];
}
function mx(e, t, n, r) {
  var o = t === 'clippingParents' ? px(e) : [].concat(t),
    i = [].concat(o, [n]),
    l = i[0],
    s = i.reduce(
      function (u, a) {
        var c = df(e, a, r);
        return (
          (u.top = hn(c.top, u.top)),
          (u.right = Ii(c.right, u.right)),
          (u.bottom = Ii(c.bottom, u.bottom)),
          (u.left = hn(c.left, u.left)),
          u
        );
      },
      df(e, l, r),
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function nh(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? pt(r) : null,
    i = r ? ar(r) : null,
    l = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    u;
  switch (o) {
    case Le:
      u = { x: l, y: t.y - n.height };
      break;
    case Ye:
      u = { x: l, y: t.y + t.height };
      break;
    case Je:
      u = { x: t.x + t.width, y: s };
      break;
    case Ae:
      u = { x: t.x - n.width, y: s };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var a = o ? va(o) : null;
  if (a != null) {
    var c = a === 'y' ? 'height' : 'width';
    switch (i) {
      case lr:
        u[a] = u[a] - (t[c] / 2 - n[c] / 2);
        break;
      case po:
        u[a] = u[a] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return u;
}
function mo(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    l = i === void 0 ? e.strategy : i,
    s = n.boundary,
    u = s === void 0 ? Iw : s,
    a = n.rootBoundary,
    c = a === void 0 ? Xm : a,
    f = n.elementContext,
    d = f === void 0 ? Tr : f,
    g = n.altBoundary,
    v = g === void 0 ? !1 : g,
    w = n.padding,
    E = w === void 0 ? 0 : w,
    m = Zm(typeof E != 'number' ? E : eh(E, Co)),
    p = d === Tr ? Fw : Tr,
    h = e.rects.popper,
    x = e.elements[v ? p : d],
    S = mx(Sn(x) ? x : x.contextElement || rn(e.elements.popper), u, c, l),
    C = ur(e.elements.reference),
    O = nh({ reference: C, element: h, strategy: 'absolute', placement: o }),
    R = ru(Object.assign({}, h, O)),
    A = d === Tr ? R : C,
    j = {
      top: S.top - A.top + m.top,
      bottom: A.bottom - S.bottom + m.bottom,
      left: S.left - A.left + m.left,
      right: A.right - S.right + m.right,
    },
    L = e.modifiersData.offset;
  if (d === Tr && L) {
    var M = L[o];
    Object.keys(j).forEach(function (I) {
      var X = [Je, Ye].indexOf(I) >= 0 ? 1 : -1,
        oe = [Le, Ye].indexOf(I) >= 0 ? 'y' : 'x';
      j[I] += M[oe] * X;
    });
  }
  return j;
}
function hx(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    l = n.padding,
    s = n.flipVariations,
    u = n.allowedAutoPlacements,
    a = u === void 0 ? Gm : u,
    c = ar(r),
    f = c
      ? s
        ? uf
        : uf.filter(function (v) {
            return ar(v) === c;
          })
      : Co,
    d = f.filter(function (v) {
      return a.indexOf(v) >= 0;
    });
  d.length === 0 && (d = f);
  var g = d.reduce(function (v, w) {
    return (
      (v[w] = mo(e, { placement: w, boundary: o, rootBoundary: i, padding: l })[
        pt(w)
      ]),
      v
    );
  }, {});
  return Object.keys(g).sort(function (v, w) {
    return g[v] - g[w];
  });
}
function vx(e) {
  if (pt(e) === pa) return [];
  var t = ai(e);
  return [ff(e), t, ff(t)];
}
function yx(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        l = n.altAxis,
        s = l === void 0 ? !0 : l,
        u = n.fallbackPlacements,
        a = n.padding,
        c = n.boundary,
        f = n.rootBoundary,
        d = n.altBoundary,
        g = n.flipVariations,
        v = g === void 0 ? !0 : g,
        w = n.allowedAutoPlacements,
        E = t.options.placement,
        m = pt(E),
        p = m === E,
        h = u || (p || !v ? [ai(E)] : vx(E)),
        x = [E].concat(h).reduce(function (se, Q) {
          return se.concat(
            pt(Q) === pa
              ? hx(t, {
                  placement: Q,
                  boundary: c,
                  rootBoundary: f,
                  padding: a,
                  flipVariations: v,
                  allowedAutoPlacements: w,
                })
              : Q,
          );
        }, []),
        S = t.rects.reference,
        C = t.rects.popper,
        O = new Map(),
        R = !0,
        A = x[0],
        j = 0;
      j < x.length;
      j++
    ) {
      var L = x[j],
        M = pt(L),
        I = ar(L) === lr,
        X = [Le, Ye].indexOf(M) >= 0,
        oe = X ? 'width' : 'height',
        V = mo(t, {
          placement: L,
          boundary: c,
          rootBoundary: f,
          altBoundary: d,
          padding: a,
        }),
        Y = X ? (I ? Je : Ae) : I ? Ye : Le;
      S[oe] > C[oe] && (Y = ai(Y));
      var P = ai(Y),
        D = [];
      if (
        (i && D.push(V[M] <= 0),
        s && D.push(V[Y] <= 0, V[P] <= 0),
        D.every(function (se) {
          return se;
        }))
      ) {
        (A = L), (R = !1);
        break;
      }
      O.set(L, D);
    }
    if (R)
      for (
        var $ = v ? 3 : 1,
          U = function (Q) {
            var fe = x.find(function (qe) {
              var vt = O.get(qe);
              if (vt)
                return vt.slice(0, Q).every(function (on) {
                  return on;
                });
            });
            if (fe) return (A = fe), 'break';
          },
          K = $;
        K > 0;
        K--
      ) {
        var xe = U(K);
        if (xe === 'break') break;
      }
    t.placement !== A &&
      ((t.modifiersData[r]._skip = !0), (t.placement = A), (t.reset = !0));
  }
}
const gx = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: yx,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
};
function pf(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function mf(e) {
  return [Le, Je, Ye, Ae].some(function (t) {
    return e[t] >= 0;
  });
}
function wx(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    l = mo(t, { elementContext: 'reference' }),
    s = mo(t, { altBoundary: !0 }),
    u = pf(l, r),
    a = pf(s, o, i),
    c = mf(u),
    f = mf(a);
  (t.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: a,
    isReferenceHidden: c,
    hasPopperEscaped: f,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': c,
      'data-popper-escaped': f,
    }));
}
const xx = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: wx,
};
function Ex(e, t, n) {
  var r = pt(e),
    o = [Ae, Le].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
    l = i[0],
    s = i[1];
  return (
    (l = l || 0),
    (s = (s || 0) * o),
    [Ae, Je].indexOf(r) >= 0 ? { x: s, y: l } : { x: l, y: s }
  );
}
function Sx(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    l = Gm.reduce(function (c, f) {
      return (c[f] = Ex(f, t.rects, i)), c;
    }, {}),
    s = l[t.placement],
    u = s.x,
    a = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u),
    (t.modifiersData.popperOffsets.y += a)),
    (t.modifiersData[r] = l);
}
const Cx = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: Sx,
};
function kx(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = nh({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  });
}
const Ox = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: kx,
  data: {},
};
function Nx(e) {
  return e === 'x' ? 'y' : 'x';
}
function Rx(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    l = n.altAxis,
    s = l === void 0 ? !1 : l,
    u = n.boundary,
    a = n.rootBoundary,
    c = n.altBoundary,
    f = n.padding,
    d = n.tether,
    g = d === void 0 ? !0 : d,
    v = n.tetherOffset,
    w = v === void 0 ? 0 : v,
    E = mo(t, { boundary: u, rootBoundary: a, padding: f, altBoundary: c }),
    m = pt(t.placement),
    p = ar(t.placement),
    h = !p,
    x = va(m),
    S = Nx(x),
    C = t.modifiersData.popperOffsets,
    O = t.rects.reference,
    R = t.rects.popper,
    A =
      typeof w == 'function'
        ? w(Object.assign({}, t.rects, { placement: t.placement }))
        : w,
    j =
      typeof A == 'number'
        ? { mainAxis: A, altAxis: A }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
    L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    M = { x: 0, y: 0 };
  if (C) {
    if (i) {
      var I,
        X = x === 'y' ? Le : Ae,
        oe = x === 'y' ? Ye : Je,
        V = x === 'y' ? 'height' : 'width',
        Y = C[x],
        P = Y + E[X],
        D = Y - E[oe],
        $ = g ? -R[V] / 2 : 0,
        U = p === lr ? O[V] : R[V],
        K = p === lr ? -R[V] : -O[V],
        xe = t.elements.arrow,
        se = g && xe ? ha(xe) : { width: 0, height: 0 },
        Q = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : qm(),
        fe = Q[X],
        qe = Q[oe],
        vt = Vr(0, O[V], se[V]),
        on = h ? O[V] / 2 - $ - vt - fe - j.mainAxis : U - vt - fe - j.mainAxis,
        hr = h
          ? -O[V] / 2 + $ + vt + qe + j.mainAxis
          : K + vt + qe + j.mainAxis,
        vr = t.elements.arrow && ko(t.elements.arrow),
        No = vr ? (x === 'y' ? vr.clientTop || 0 : vr.clientLeft || 0) : 0,
        Rn = (I = L == null ? void 0 : L[x]) != null ? I : 0,
        Tn = Y + on - Rn - No,
        ee = Y + hr - Rn,
        yr = Vr(g ? Ii(P, Tn) : P, Y, g ? hn(D, ee) : D);
      (C[x] = yr), (M[x] = yr - Y);
    }
    if (s) {
      var Pn,
        Fh = x === 'x' ? Le : Ae,
        zh = x === 'x' ? Ye : Je,
        ln = C[S],
        Ro = S === 'y' ? 'height' : 'width',
        Ea = ln + E[Fh],
        Sa = ln - E[zh],
        dl = [Le, Ae].indexOf(m) !== -1,
        Ca = (Pn = L == null ? void 0 : L[S]) != null ? Pn : 0,
        ka = dl ? Ea : ln - O[Ro] - R[Ro] - Ca + j.altAxis,
        Oa = dl ? ln + O[Ro] + R[Ro] - Ca - j.altAxis : Sa,
        Na = g && dl ? Jw(ka, ln, Oa) : Vr(g ? ka : Ea, ln, g ? Oa : Sa);
      (C[S] = Na), (M[S] = Na - ln);
    }
    t.modifiersData[r] = M;
  }
}
const Tx = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: Rx,
  requiresIfExists: ['offset'],
};
function Px(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function jx(e) {
  return e === Be(e) || !mt(e) ? ya(e) : Px(e);
}
function _x(e) {
  var t = e.getBoundingClientRect(),
    n = sr(t.width) / e.offsetWidth || 1,
    r = sr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function $x(e, t, n) {
  n === void 0 && (n = !1);
  var r = mt(t),
    o = mt(t) && _x(t),
    i = rn(t),
    l = ur(e, o, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Zt(t) !== 'body' || wa(i)) && (s = jx(t)),
      mt(t)
        ? ((u = ur(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop))
        : i && (u.x = ga(i))),
    {
      x: l.left + s.scrollLeft - u.x,
      y: l.top + s.scrollTop - u.y,
      width: l.width,
      height: l.height,
    }
  );
}
function Dx(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var l = [].concat(i.requires || [], i.requiresIfExists || []);
    l.forEach(function (s) {
      if (!n.has(s)) {
        var u = t.get(s);
        u && o(u);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function Lx(e) {
  var t = Dx(e);
  return Xw.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      }),
    );
  }, []);
}
function Ax(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function Mx(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var hf = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function vf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == 'function');
  });
}
function Ix(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? hf : o;
  return function (s, u, a) {
    a === void 0 && (a = i);
    var c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, hf, i),
        modifiersData: {},
        elements: { reference: s, popper: u },
        attributes: {},
        styles: {},
      },
      f = [],
      d = !1,
      g = {
        state: c,
        setOptions: function (m) {
          var p = typeof m == 'function' ? m(c.options) : m;
          w(),
            (c.options = Object.assign({}, i, c.options, p)),
            (c.scrollParents = {
              reference: Sn(s)
                ? Kr(s)
                : s.contextElement
                  ? Kr(s.contextElement)
                  : [],
              popper: Kr(u),
            });
          var h = Lx(Mx([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = h.filter(function (x) {
              return x.enabled;
            })),
            v(),
            g.update()
          );
        },
        forceUpdate: function () {
          if (!d) {
            var m = c.elements,
              p = m.reference,
              h = m.popper;
            if (vf(p, h)) {
              (c.rects = {
                reference: $x(p, ko(h), c.options.strategy === 'fixed'),
                popper: ha(h),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (j) {
                  return (c.modifiersData[j.name] = Object.assign({}, j.data));
                });
              for (var x = 0; x < c.orderedModifiers.length; x++) {
                if (c.reset === !0) {
                  (c.reset = !1), (x = -1);
                  continue;
                }
                var S = c.orderedModifiers[x],
                  C = S.fn,
                  O = S.options,
                  R = O === void 0 ? {} : O,
                  A = S.name;
                typeof C == 'function' &&
                  (c = C({ state: c, options: R, name: A, instance: g }) || c);
              }
            }
          }
        },
        update: Ax(function () {
          return new Promise(function (E) {
            g.forceUpdate(), E(c);
          });
        }),
        destroy: function () {
          w(), (d = !0);
        },
      };
    if (!vf(s, u)) return g;
    g.setOptions(a).then(function (E) {
      !d && a.onFirstUpdate && a.onFirstUpdate(E);
    });
    function v() {
      c.orderedModifiers.forEach(function (E) {
        var m = E.name,
          p = E.options,
          h = p === void 0 ? {} : p,
          x = E.effect;
        if (typeof x == 'function') {
          var S = x({ state: c, name: m, instance: g, options: h }),
            C = function () {};
          f.push(S || C);
        }
      });
    }
    function w() {
      f.forEach(function (E) {
        return E();
      }),
        (f = []);
    }
    return g;
  };
}
const Fx = Ix({ defaultModifiers: [xx, Ox, ix, sx, Cx, gx, Tx, tx] }),
  zx = ['enabled', 'placement', 'strategy', 'modifiers'];
function Bx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Ux = {
    name: 'applyStyles',
    enabled: !1,
    phase: 'afterWrite',
    fn: () => {},
  },
  Hx = {
    name: 'ariaDescribedBy',
    enabled: !0,
    phase: 'afterWrite',
    effect:
      ({ state: e }) =>
      () => {
        const { reference: t, popper: n } = e.elements;
        if ('removeAttribute' in t) {
          const r = (t.getAttribute('aria-describedby') || '')
            .split(',')
            .filter((o) => o.trim() !== n.id);
          r.length
            ? t.setAttribute('aria-describedby', r.join(','))
            : t.removeAttribute('aria-describedby');
        }
      },
    fn: ({ state: e }) => {
      var t;
      const { popper: n, reference: r } = e.elements,
        o = (t = n.getAttribute('role')) == null ? void 0 : t.toLowerCase();
      if (n.id && o === 'tooltip' && 'setAttribute' in r) {
        const i = r.getAttribute('aria-describedby');
        if (i && i.split(',').indexOf(n.id) !== -1) return;
        r.setAttribute('aria-describedby', i ? `${i},${n.id}` : n.id);
      }
    },
  },
  Wx = [];
function Vx(e, t, n = {}) {
  let {
      enabled: r = !0,
      placement: o = 'bottom',
      strategy: i = 'absolute',
      modifiers: l = Wx,
    } = n,
    s = Bx(n, zx);
  const u = y.useRef(l),
    a = y.useRef(),
    c = y.useCallback(() => {
      var E;
      (E = a.current) == null || E.update();
    }, []),
    f = y.useCallback(() => {
      var E;
      (E = a.current) == null || E.forceUpdate();
    }, []),
    [d, g] = Mw(
      y.useState({
        placement: o,
        update: c,
        forceUpdate: f,
        attributes: {},
        styles: { popper: {}, arrow: {} },
      }),
    ),
    v = y.useMemo(
      () => ({
        name: 'updateStateModifier',
        enabled: !0,
        phase: 'write',
        requires: ['computeStyles'],
        fn: ({ state: E }) => {
          const m = {},
            p = {};
          Object.keys(E.elements).forEach((h) => {
            (m[h] = E.styles[h]), (p[h] = E.attributes[h]);
          }),
            g({
              state: E,
              styles: m,
              attributes: p,
              update: c,
              forceUpdate: f,
              placement: E.placement,
            });
        },
      }),
      [c, f, g],
    ),
    w = y.useMemo(() => (Wr(u.current, l) || (u.current = l), u.current), [l]);
  return (
    y.useEffect(() => {
      !a.current ||
        !r ||
        a.current.setOptions({
          placement: o,
          strategy: i,
          modifiers: [...w, v, Ux],
        });
    }, [i, o, v, r, w]),
    y.useEffect(() => {
      if (!(!r || e == null || t == null))
        return (
          (a.current = Fx(
            e,
            t,
            Object.assign({}, s, {
              placement: o,
              strategy: i,
              modifiers: [...w, Hx, v],
            }),
          )),
          () => {
            a.current != null &&
              (a.current.destroy(),
              (a.current = void 0),
              g((E) =>
                Object.assign({}, E, {
                  attributes: {},
                  styles: { popper: {} },
                }),
              ));
          }
        );
    }, [r, e, t]),
    d
  );
}
var Kx = function () {},
  bx = Kx;
const Qx = ho(bx),
  yf = () => {};
function Xx(e) {
  return e.button === 0;
}
function Gx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const Gl = (e) => e && ('current' in e ? e.current : e),
  gf = { click: 'mousedown', mouseup: 'mousedown', pointerup: 'pointerdown' };
function Yx(e, t = yf, { disabled: n, clickTrigger: r = 'click' } = {}) {
  const o = y.useRef(!1),
    i = y.useRef(!1),
    l = y.useCallback(
      (a) => {
        const c = Gl(e);
        Qx(
          !!c,
          'ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node',
        ),
          (o.current = !c || Gx(a) || !Xx(a) || !!Mi(c, a.target) || i.current),
          (i.current = !1);
      },
      [e],
    ),
    s = ae((a) => {
      const c = Gl(e);
      c && Mi(c, a.target) && (i.current = !0);
    }),
    u = ae((a) => {
      o.current || t(a);
    });
  y.useEffect(() => {
    var a, c;
    if (n || e == null) return;
    const f = sl(Gl(e)),
      d = f.defaultView || window;
    let g =
        (a = d.event) != null ? a : (c = d.parent) == null ? void 0 : c.event,
      v = null;
    gf[r] && (v = Ht(f, gf[r], s, !0));
    const w = Ht(f, r, l, !0),
      E = Ht(f, r, (p) => {
        if (p === g) {
          g = void 0;
          return;
        }
        u(p);
      });
    let m = [];
    return (
      'ontouchstart' in f.documentElement &&
        (m = [].slice.call(f.body.children).map((p) => Ht(p, 'mousemove', yf))),
      () => {
        v == null || v(), w(), E(), m.forEach((p) => p());
      }
    );
  }, [e, n, r, l, s, u]);
}
function Jx(e) {
  const t = {};
  return Array.isArray(e)
    ? (e == null ||
        e.forEach((n) => {
          t[n.name] = n;
        }),
      t)
    : e || t;
}
function qx(e = {}) {
  return Array.isArray(e)
    ? e
    : Object.keys(e).map((t) => ((e[t].name = t), e[t]));
}
function Zx({
  enabled: e,
  enableEvents: t,
  placement: n,
  flip: r,
  offset: o,
  fixed: i,
  containerPadding: l,
  arrowElement: s,
  popperConfig: u = {},
}) {
  var a, c, f, d, g;
  const v = Jx(u.modifiers);
  return Object.assign({}, u, {
    placement: n,
    enabled: e,
    strategy: i ? 'fixed' : u.strategy,
    modifiers: qx(
      Object.assign({}, v, {
        eventListeners: {
          enabled: t,
          options: (a = v.eventListeners) == null ? void 0 : a.options,
        },
        preventOverflow: Object.assign({}, v.preventOverflow, {
          options: l
            ? Object.assign(
                { padding: l },
                (c = v.preventOverflow) == null ? void 0 : c.options,
              )
            : (f = v.preventOverflow) == null
              ? void 0
              : f.options,
        }),
        offset: {
          options: Object.assign(
            { offset: o },
            (d = v.offset) == null ? void 0 : d.options,
          ),
        },
        arrow: Object.assign({}, v.arrow, {
          enabled: !!s,
          options: Object.assign(
            {},
            (g = v.arrow) == null ? void 0 : g.options,
            { element: s },
          ),
        }),
        flip: Object.assign({ enabled: !!r }, v.flip),
      }),
    ),
  });
}
const eE = ['children'];
function tE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const nE = () => {};
function rh(e = {}) {
  const t = y.useContext(cl),
    [n, r] = i1(),
    o = y.useRef(!1),
    {
      flip: i,
      offset: l,
      rootCloseEvent: s,
      fixed: u = !1,
      placement: a,
      popperConfig: c = {},
      enableEventListeners: f = !0,
      usePopper: d = !!t,
    } = e,
    g = (t == null ? void 0 : t.show) == null ? !!e.show : t.show;
  g && !o.current && (o.current = !0);
  const v = (C) => {
      t == null || t.toggle(!1, C);
    },
    { placement: w, setMenu: E, menuElement: m, toggleElement: p } = t || {},
    h = Vx(
      p,
      m,
      Zx({
        placement: a || w || 'bottom-start',
        enabled: d,
        enableEvents: f ?? g,
        offset: l,
        flip: i,
        fixed: u,
        arrowElement: n,
        popperConfig: c,
      }),
    ),
    x = Object.assign(
      { ref: E || nE, 'aria-labelledby': p == null ? void 0 : p.id },
      h.attributes.popper,
      { style: h.styles.popper },
    ),
    S = {
      show: g,
      placement: w,
      hasShown: o.current,
      toggle: t == null ? void 0 : t.toggle,
      popper: d ? h : null,
      arrowProps: d
        ? Object.assign({ ref: r }, h.attributes.arrow, {
            style: h.styles.arrow,
          })
        : {},
    };
  return Yx(m, v, { clickTrigger: s, disabled: !g }), [x, S];
}
const rE = { usePopper: !0 };
function xa(e) {
  let { children: t } = e,
    n = tE(e, eE);
  const [r, o] = rh(n);
  return N.jsx(N.Fragment, { children: t(r, o) });
}
xa.displayName = 'DropdownMenu';
xa.defaultProps = rE;
const Fi = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
  oh = ye.createContext(Fi),
  oE = ye.createContext(!1);
let iE = !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  ),
  Yl = new WeakMap();
function lE(e = !1) {
  let t = y.useContext(oh),
    n = y.useRef(null);
  if (n.current === null && !e) {
    var r, o;
    let i =
      (o = ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
      o === void 0 ||
      (r = o.ReactCurrentOwner) === null ||
      r === void 0
        ? void 0
        : r.current;
    if (i) {
      let l = Yl.get(i);
      l == null
        ? Yl.set(i, { id: t.current, state: i.memoizedState })
        : i.memoizedState !== l.state && ((t.current = l.id), Yl.delete(i));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function sE(e) {
  let t = y.useContext(oh);
  t === Fi &&
    !iE &&
    console.warn(
      'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.',
    );
  let n = lE(!!e),
    r = `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function uE(e) {
  let t = ye.useId(),
    [n] = y.useState(pE()),
    r = n ? 'react-aria' : `react-aria${Fi.prefix}`;
  return e || `${r}-${t}`;
}
const aE = typeof ye.useId == 'function' ? uE : sE;
function cE() {
  return !1;
}
function fE() {
  return !0;
}
function dE(e) {
  return () => {};
}
function pE() {
  return typeof ye.useSyncExternalStore == 'function'
    ? ye.useSyncExternalStore(dE, cE, fE)
    : y.useContext(oE);
}
const ih = (e) => {
    var t;
    return (
      ((t = e.getAttribute('role')) == null ? void 0 : t.toLowerCase()) ===
      'menu'
    );
  },
  wf = () => {};
function lh() {
  const e = aE(),
    {
      show: t = !1,
      toggle: n = wf,
      setToggle: r,
      menuElement: o,
    } = y.useContext(cl) || {},
    i = y.useCallback(
      (s) => {
        n(!t, s);
      },
      [t, n],
    ),
    l = { id: e, ref: r || wf, onClick: i, 'aria-expanded': !!t };
  return o && ih(o) && (l['aria-haspopup'] = !0), [l, { show: t, toggle: n }];
}
function sh({ children: e }) {
  const [t, n] = lh();
  return N.jsx(N.Fragment, { children: e(t, n) });
}
sh.displayName = 'DropdownToggle';
const mE = ['eventKey', 'disabled', 'onClick', 'active', 'as'];
function hE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function uh({ key: e, href: t, active: n, disabled: r, onClick: o }) {
  const i = y.useContext(En),
    l = y.useContext(ia),
    { activeKey: s } = l || {},
    u = co(e, t),
    a = n == null && e != null ? co(s) === u : n;
  return [
    {
      onClick: ae((f) => {
        r || (o == null || o(f), i && !f.isPropagationStopped() && i(u, f));
      }),
      'aria-disabled': r || void 0,
      'aria-selected': a,
      [mr('dropdown-item')]: '',
    },
    { isActive: a },
  ];
}
const ah = y.forwardRef((e, t) => {
  let { eventKey: n, disabled: r, onClick: o, active: i, as: l = sa } = e,
    s = hE(e, mE);
  const [u] = uh({ key: n, href: s.href, disabled: r, onClick: o, active: i });
  return N.jsx(l, Object.assign({}, s, { ref: t }, u));
});
ah.displayName = 'DropdownItem';
function xf() {
  const e = am(),
    t = y.useRef(null),
    n = y.useCallback(
      (r) => {
        (t.current = r), e();
      },
      [e],
    );
  return [t, n];
}
function Oo({
  defaultShow: e,
  show: t,
  onSelect: n,
  onToggle: r,
  itemSelector: o = `* [${mr('dropdown-item')}]`,
  focusFirstItemOnShow: i,
  placement: l = 'bottom-start',
  children: s,
}) {
  const u = al(),
    [a, c] = Lw(t, e, r),
    [f, d] = xf(),
    g = f.current,
    [v, w] = xf(),
    E = v.current,
    m = xm(a),
    p = y.useRef(null),
    h = y.useRef(!1),
    x = y.useContext(En),
    S = y.useCallback(
      (L, M, I = M == null ? void 0 : M.type) => {
        c(L, { originalEvent: M, source: I });
      },
      [c],
    ),
    C = ae((L, M) => {
      n == null || n(L, M),
        S(!1, M, 'select'),
        M.isPropagationStopped() || x == null || x(L, M);
    }),
    O = y.useMemo(
      () => ({
        toggle: S,
        placement: l,
        show: a,
        menuElement: g,
        toggleElement: E,
        setMenu: d,
        setToggle: w,
      }),
      [S, l, a, g, E, d, w],
    );
  g && m && !a && (h.current = g.contains(g.ownerDocument.activeElement));
  const R = ae(() => {
      E && E.focus && E.focus();
    }),
    A = ae(() => {
      const L = p.current;
      let M = i;
      if (
        (M == null && (M = f.current && ih(f.current) ? 'keyboard' : !1),
        M === !1 || (M === 'keyboard' && !/^key.+$/.test(L)))
      )
        return;
      const I = wt(f.current, o)[0];
      I && I.focus && I.focus();
    });
  y.useEffect(() => {
    a ? A() : h.current && ((h.current = !1), R());
  }, [a, h, R, A]),
    y.useEffect(() => {
      p.current = null;
    });
  const j = (L, M) => {
    if (!f.current) return null;
    const I = wt(f.current, o);
    let X = I.indexOf(L) + M;
    return (X = Math.max(0, Math.min(X, I.length))), I[X];
  };
  return (
    l1(
      y.useCallback(() => u.document, [u]),
      'keydown',
      (L) => {
        var M, I;
        const { key: X } = L,
          oe = L.target,
          V = (M = f.current) == null ? void 0 : M.contains(oe),
          Y = (I = v.current) == null ? void 0 : I.contains(oe);
        if (
          (/input|textarea/i.test(oe.tagName) &&
            (X === ' ' ||
              (X !== 'Escape' && V) ||
              (X === 'Escape' && oe.type === 'search'))) ||
          (!V && !Y) ||
          (X === 'Tab' && (!f.current || !a))
        )
          return;
        p.current = L.type;
        const D = { originalEvent: L, source: L.type };
        switch (X) {
          case 'ArrowUp': {
            const $ = j(oe, -1);
            $ && $.focus && $.focus(), L.preventDefault();
            return;
          }
          case 'ArrowDown':
            if ((L.preventDefault(), !a)) c(!0, D);
            else {
              const $ = j(oe, 1);
              $ && $.focus && $.focus();
            }
            return;
          case 'Tab':
            _m(
              oe.ownerDocument,
              'keyup',
              ($) => {
                var U;
                (($.key === 'Tab' && !$.target) ||
                  !((U = f.current) != null && U.contains($.target))) &&
                  c(!1, D);
              },
              { once: !0 },
            );
            break;
          case 'Escape':
            X === 'Escape' && (L.preventDefault(), L.stopPropagation()),
              c(!1, D);
            break;
        }
      },
    ),
    N.jsx(En.Provider, {
      value: C,
      children: N.jsx(cl.Provider, { value: O, children: s }),
    })
  );
}
Oo.displayName = 'Dropdown';
Oo.Menu = xa;
Oo.Toggle = sh;
Oo.Item = ah;
const ch = y.createContext({});
ch.displayName = 'DropdownContext';
const fh = ch,
  dh = y.forwardRef(
    (
      { className: e, bsPrefix: t, as: n = 'hr', role: r = 'separator', ...o },
      i,
    ) => (
      (t = B(t, 'dropdown-divider')),
      N.jsx(n, { ref: i, className: F(e, t), role: r, ...o })
    ),
  );
dh.displayName = 'DropdownDivider';
const vE = dh,
  ph = y.forwardRef(
    (
      { className: e, bsPrefix: t, as: n = 'div', role: r = 'heading', ...o },
      i,
    ) => (
      (t = B(t, 'dropdown-header')),
      N.jsx(n, { ref: i, className: F(e, t), role: r, ...o })
    ),
  );
ph.displayName = 'DropdownHeader';
const yE = ph,
  mh = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        eventKey: n,
        disabled: r = !1,
        onClick: o,
        active: i,
        as: l = Sm,
        ...s
      },
      u,
    ) => {
      const a = B(e, 'dropdown-item'),
        [c, f] = uh({
          key: n,
          href: s.href,
          disabled: r,
          onClick: o,
          active: i,
        });
      return N.jsx(l, {
        ...s,
        ...c,
        ref: u,
        className: F(t, a, f.isActive && 'active', r && 'disabled'),
      });
    },
  );
mh.displayName = 'DropdownItem';
const gE = mh,
  hh = y.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'span', ...r }, o) => (
      (t = B(t, 'dropdown-item-text')),
      N.jsx(n, { ref: o, className: F(e, t), ...r })
    ),
  );
hh.displayName = 'DropdownItemText';
const wE = hh,
  vh = y.createContext(null);
vh.displayName = 'InputGroupContext';
const yh = vh;
function gh(e, t) {
  return e;
}
function wh(e, t, n) {
  const r = n ? 'top-end' : 'top-start',
    o = n ? 'top-start' : 'top-end',
    i = n ? 'bottom-end' : 'bottom-start',
    l = n ? 'bottom-start' : 'bottom-end',
    s = n ? 'right-start' : 'left-start',
    u = n ? 'right-end' : 'left-end',
    a = n ? 'left-start' : 'right-start',
    c = n ? 'left-end' : 'right-end';
  let f = e ? l : i;
  return (
    t === 'up'
      ? (f = e ? o : r)
      : t === 'end'
        ? (f = e ? c : a)
        : t === 'start'
          ? (f = e ? u : s)
          : t === 'down-centered'
            ? (f = 'bottom')
            : t === 'up-centered' && (f = 'top'),
    f
  );
}
const xh = y.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      align: n,
      rootCloseEvent: r,
      flip: o = !0,
      show: i,
      renderOnMount: l,
      as: s = 'div',
      popperConfig: u,
      variant: a,
      ...c
    },
    f,
  ) => {
    let d = !1;
    const g = y.useContext(Nn),
      v = B(e, 'dropdown-menu'),
      { align: w, drop: E, isRTL: m } = y.useContext(fh);
    n = n || w;
    const p = y.useContext(yh),
      h = [];
    if (n)
      if (typeof n == 'object') {
        const L = Object.keys(n);
        if (L.length) {
          const M = L[0],
            I = n[M];
          (d = I === 'start'), h.push(`${v}-${M}-${I}`);
        }
      } else n === 'end' && (d = !0);
    const x = wh(d, E, m),
      [S, { hasShown: C, popper: O, show: R, toggle: A }] = rh({
        flip: o,
        rootCloseEvent: r,
        show: i,
        usePopper: !g && h.length === 0,
        offset: [0, 2],
        popperConfig: u,
        placement: x,
      });
    if (
      ((S.ref = On(gh(f), S.ref)),
      Ai(() => {
        R && (O == null || O.update());
      }, [R]),
      !C && !l && !p)
    )
      return null;
    typeof s != 'string' &&
      ((S.show = R),
      (S.close = () => (A == null ? void 0 : A(!1))),
      (S.align = n));
    let j = c.style;
    return (
      O != null &&
        O.placement &&
        ((j = { ...c.style, ...S.style }), (c['x-placement'] = O.placement)),
      N.jsx(s, {
        ...c,
        ...S,
        style: j,
        ...((h.length || g) && { 'data-bs-popper': 'static' }),
        className: F(
          t,
          v,
          R && 'show',
          d && `${v}-end`,
          a && `${v}-${a}`,
          ...h,
        ),
      })
    );
  },
);
xh.displayName = 'DropdownMenu';
const xE = xh,
  Eh = y.forwardRef(
    (
      {
        as: e,
        bsPrefix: t,
        variant: n = 'primary',
        size: r,
        active: o = !1,
        disabled: i = !1,
        className: l,
        ...s
      },
      u,
    ) => {
      const a = B(t, 'btn'),
        [c, { tagName: f }] = la({ tagName: e, disabled: i, ...s }),
        d = f;
      return N.jsx(d, {
        ...c,
        ...s,
        ref: u,
        disabled: i,
        className: F(
          l,
          a,
          o && 'active',
          n && `${a}-${n}`,
          r && `${a}-${r}`,
          s.href && i && 'disabled',
        ),
      });
    },
  );
Eh.displayName = 'Button';
const EE = Eh,
  Sh = y.forwardRef(
    (
      {
        bsPrefix: e,
        split: t,
        className: n,
        childBsPrefix: r,
        as: o = EE,
        ...i
      },
      l,
    ) => {
      const s = B(e, 'dropdown-toggle'),
        u = y.useContext(cl);
      r !== void 0 && (i.bsPrefix = r);
      const [a] = lh();
      return (
        (a.ref = On(a.ref, gh(l))),
        N.jsx(o, {
          className: F(
            n,
            s,
            t && `${s}-split`,
            (u == null ? void 0 : u.show) && 'show',
          ),
          ...a,
          ...i,
        })
      );
    },
  );
Sh.displayName = 'DropdownToggle';
const SE = Sh,
  Ch = y.forwardRef((e, t) => {
    const {
        bsPrefix: n,
        drop: r = 'down',
        show: o,
        className: i,
        align: l = 'start',
        onSelect: s,
        onToggle: u,
        focusFirstItemOnShow: a,
        as: c = 'div',
        navbar: f,
        autoClose: d = !0,
        ...g
      } = oa(e, { show: 'onToggle' }),
      v = y.useContext(yh),
      w = B(n, 'dropdown'),
      E = L0(),
      m = (O) =>
        d === !1
          ? O === 'click'
          : d === 'inside'
            ? O !== 'rootClose'
            : d === 'outside'
              ? O !== 'select'
              : !0,
      p = ae((O, R) => {
        var A, j;
        (!((A = R.originalEvent) == null || (j = A.target) == null) &&
          j.classList.contains('dropdown-toggle') &&
          R.source === 'mousedown') ||
          (R.originalEvent.currentTarget === document &&
            (R.source !== 'keydown' || R.originalEvent.key === 'Escape') &&
            (R.source = 'rootClose'),
          m(R.source) && (u == null || u(O, R)));
      }),
      x = wh(l === 'end', r, E),
      S = y.useMemo(() => ({ align: l, drop: r, isRTL: E }), [l, r, E]),
      C = {
        down: w,
        'down-centered': `${w}-center`,
        up: 'dropup',
        'up-centered': 'dropup-center dropup',
        end: 'dropend',
        start: 'dropstart',
      };
    return N.jsx(fh.Provider, {
      value: S,
      children: N.jsx(Oo, {
        placement: x,
        show: o,
        onSelect: s,
        onToggle: p,
        focusFirstItemOnShow: a,
        itemSelector: `.${w}-item:not(.disabled):not(:disabled)`,
        children: v
          ? g.children
          : N.jsx(c, { ...g, ref: t, className: F(i, o && 'show', C[r]) }),
      }),
    });
  });
Ch.displayName = 'Dropdown';
const dn = Object.assign(Ch, {
    Toggle: SE,
    Menu: xE,
    Item: gE,
    ItemText: wE,
    Divider: vE,
    Header: yE,
  }),
  kh = y.forwardRef(
    (
      {
        id: e,
        title: t,
        children: n,
        bsPrefix: r,
        className: o,
        rootCloseEvent: i,
        menuRole: l,
        disabled: s,
        active: u,
        renderMenuOnMount: a,
        menuVariant: c,
        ...f
      },
      d,
    ) => {
      const g = B(void 0, 'nav-item');
      return N.jsxs(dn, {
        ref: d,
        ...f,
        className: F(o, g),
        children: [
          N.jsx(dn.Toggle, {
            id: e,
            eventKey: null,
            active: u,
            disabled: s,
            childBsPrefix: r,
            as: km,
            children: t,
          }),
          N.jsx(dn.Menu, {
            role: l,
            renderOnMount: a,
            rootCloseEvent: i,
            variant: c,
            children: n,
          }),
        ],
      });
    },
  );
kh.displayName = 'NavDropdown';
const Ef = Object.assign(kh, {
  Item: dn.Item,
  ItemText: dn.ItemText,
  Divider: dn.Divider,
  Header: dn.Header,
});
function CE({ username: e }) {
  const t = y.useContext(rm),
    n = async (r) => {
      r.preventDefault(), t.logout();
    };
  return N.jsx(bo, {
    expand: 'lg',
    className: 'bg-body-tertiary',
    children: N.jsxs(A0, {
      children: [
        N.jsx(bo.Brand, { href: '#home', children: 'Notes Agg' }),
        N.jsx(bo.Toggle, { 'aria-controls': 'basic-navbar-nav' }),
        N.jsx(bo.Collapse, {
          id: 'basic-navbar-nav',
          children: N.jsx(d1, {
            className: 'ms-auto',
            children: N.jsx(Ef, {
              title: e,
              id: 'basic-nav-dropdown',
              children: N.jsx(Ef.Item, { onClick: n, children: 'Logout' }),
            }),
          }),
        }),
      ],
    }),
  });
}
const Oh = y.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => (
    (t = B(t, 'card-body')), N.jsx(n, { ref: o, className: F(e, t), ...r })
  ),
);
Oh.displayName = 'CardBody';
const Nh = Oh,
  Rh = y.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => (
      (t = B(t, 'card-footer')), N.jsx(n, { ref: o, className: F(e, t), ...r })
    ),
  );
Rh.displayName = 'CardFooter';
const kE = Rh,
  Th = y.forwardRef(({ bsPrefix: e, className: t, as: n = 'div', ...r }, o) => {
    const i = B(e, 'card-header'),
      l = y.useMemo(() => ({ cardHeaderBsPrefix: i }), [i]);
    return N.jsx(ym.Provider, {
      value: l,
      children: N.jsx(n, { ref: o, ...r, className: F(t, i) }),
    });
  });
Th.displayName = 'CardHeader';
const OE = Th,
  Ph = y.forwardRef(
    ({ bsPrefix: e, className: t, variant: n, as: r = 'img', ...o }, i) => {
      const l = B(e, 'card-img');
      return N.jsx(r, { ref: i, className: F(n ? `${l}-${n}` : l, t), ...o });
    },
  );
Ph.displayName = 'CardImg';
const NE = Ph,
  jh = y.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'div', ...r }, o) => (
      (t = B(t, 'card-img-overlay')),
      N.jsx(n, { ref: o, className: F(e, t), ...r })
    ),
  );
jh.displayName = 'CardImgOverlay';
const RE = jh,
  _h = y.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'a', ...r }, o) => (
      (t = B(t, 'card-link')), N.jsx(n, { ref: o, className: F(e, t), ...r })
    ),
  );
_h.displayName = 'CardLink';
const TE = _h,
  PE = da('h6'),
  $h = y.forwardRef(
    ({ className: e, bsPrefix: t, as: n = PE, ...r }, o) => (
      (t = B(t, 'card-subtitle')),
      N.jsx(n, { ref: o, className: F(e, t), ...r })
    ),
  );
$h.displayName = 'CardSubtitle';
const jE = $h,
  Dh = y.forwardRef(
    ({ className: e, bsPrefix: t, as: n = 'p', ...r }, o) => (
      (t = B(t, 'card-text')), N.jsx(n, { ref: o, className: F(e, t), ...r })
    ),
  );
Dh.displayName = 'CardText';
const _E = Dh,
  $E = da('h5'),
  Lh = y.forwardRef(
    ({ className: e, bsPrefix: t, as: n = $E, ...r }, o) => (
      (t = B(t, 'card-title')), N.jsx(n, { ref: o, className: F(e, t), ...r })
    ),
  );
Lh.displayName = 'CardTitle';
const DE = Lh,
  Ah = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        bg: n,
        text: r,
        border: o,
        body: i = !1,
        children: l,
        as: s = 'div',
        ...u
      },
      a,
    ) => {
      const c = B(e, 'card');
      return N.jsx(s, {
        ref: a,
        ...u,
        className: F(
          t,
          c,
          n && `bg-${n}`,
          r && `text-${r}`,
          o && `border-${o}`,
        ),
        children: i ? N.jsx(Nh, { children: l }) : l,
      });
    },
  );
Ah.displayName = 'Card';
const Jl = Object.assign(Ah, {
  Img: NE,
  Title: DE,
  Subtitle: jE,
  Body: Nh,
  Link: TE,
  Text: _E,
  Header: OE,
  Footer: kE,
  ImgOverlay: RE,
});
function LE({ as: e, bsPrefix: t, className: n, ...r }) {
  t = B(t, 'col');
  const o = im(),
    i = lm(),
    l = [],
    s = [];
  return (
    o.forEach((u) => {
      const a = r[u];
      delete r[u];
      let c, f, d;
      typeof a == 'object' && a != null
        ? ({ span: c, offset: f, order: d } = a)
        : (c = a);
      const g = u !== i ? `-${u}` : '';
      c && l.push(c === !0 ? `${t}${g}` : `${t}${g}-${c}`),
        d != null && s.push(`order${g}-${d}`),
        f != null && s.push(`offset${g}-${f}`);
    }),
    [
      { ...r, className: F(n, ...l, ...s) },
      { as: e, bsPrefix: t, spans: l },
    ]
  );
}
const Mh = y.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: o = 'div', bsPrefix: i, spans: l }] =
    LE(e);
  return N.jsx(o, { ...r, ref: t, className: F(n, !l.length && i) });
});
Mh.displayName = 'Col';
const AE = Mh,
  Ih = y.forwardRef(({ bsPrefix: e, className: t, as: n = 'div', ...r }, o) => {
    const i = B(e, 'row'),
      l = im(),
      s = lm(),
      u = `${i}-cols`,
      a = [];
    return (
      l.forEach((c) => {
        const f = r[c];
        delete r[c];
        let d;
        f != null && typeof f == 'object' ? ({ cols: d } = f) : (d = f);
        const g = c !== s ? `-${c}` : '';
        d != null && a.push(`${u}${g}-${d}`);
      }),
      N.jsx(n, { ref: o, ...r, className: F(t, i, ...a) })
    );
  });
Ih.displayName = 'Row';
const ME = Ih,
  IE = ({ cards: e }) =>
    N.jsx(ME, {
      xs: 1,
      md: 3,
      lg: 4,
      xl: 4,
      className: 'g-4 m-3',
      children: e.map((t, n) =>
        N.jsx(
          AE,
          {
            children: N.jsx(Jl, {
              className: 'lift',
              children: N.jsx(Jl.Body, {
                children: N.jsx(Jl.Title, { children: t.name }),
              }),
            }),
          },
          n,
        ),
      ),
    });
function FE() {
  const [e, t] = y.useState(null),
    [n, r] = y.useState([]),
    o = y.useContext(rm);
  return (
    y.useEffect(() => {
      (async () => {
        const l = await o.getUserProfile();
        t(l.username);
      })();
    }, []),
    y.useEffect(() => {
      (async () => {
        const l = await o.getNotes();
        r(l);
      })();
    }, []),
    N.jsxs(N.Fragment, {
      children: [N.jsx(CE, { username: e }), N.jsx(IE, { cards: n })],
    })
  );
}
ql.createRoot(document.getElementById('root')).render(
  N.jsx(ye.StrictMode, { children: N.jsx(FE, {}) }),
);
//# sourceMappingURL=index-e8s4N7gE.js.map
