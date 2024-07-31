import * as q from "react";
import no, { forwardRef as Ma, useContext as Da } from "react";
function oo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ue(e) {
  if (e.__esModule) return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var ht = { exports: {} }, fr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hn;
function Na() {
  if (hn) return fr;
  hn = 1;
  var e = no, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(u, c, l) {
    var f, m = {}, p = null, _ = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (_ = c.ref);
    for (f in c) n.call(c, f) && !a.hasOwnProperty(f) && (m[f] = c[f]);
    if (u && u.defaultProps) for (f in c = u.defaultProps, c) m[f] === void 0 && (m[f] = c[f]);
    return { $$typeof: r, type: u, key: p, ref: _, props: m, _owner: o.current };
  }
  return fr.Fragment = t, fr.jsx = i, fr.jsxs = i, fr;
}
var dr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yn;
function Fa() {
  return yn || (yn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = no, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), b = Symbol.iterator, d = "@@iterator";
    function h(s) {
      if (s === null || typeof s != "object")
        return null;
      var v = b && s[b] || s[d];
      return typeof v == "function" ? v : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(s) {
      {
        for (var v = arguments.length, S = new Array(v > 1 ? v - 1 : 0), $ = 1; $ < v; $++)
          S[$ - 1] = arguments[$];
        R("error", s, S);
      }
    }
    function R(s, v, S) {
      {
        var $ = x.ReactDebugCurrentFrame, K = $.getStackAddendum();
        K !== "" && (v += "%s", S = S.concat([K]));
        var Q = S.map(function(U) {
          return String(U);
        });
        Q.unshift("Warning: " + v), Function.prototype.apply.call(console[s], console, Q);
      }
    }
    var z = !1, y = !1, W = !1, j = !1, Ee = !1, ve;
    ve = Symbol.for("react.module.reference");
    function ge(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === a || Ee || s === o || s === l || s === f || j || s === _ || z || y || W || typeof s == "object" && s !== null && (s.$$typeof === p || s.$$typeof === m || s.$$typeof === i || s.$$typeof === u || s.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === ve || s.getModuleId !== void 0));
    }
    function te(s, v, S) {
      var $ = s.displayName;
      if ($)
        return $;
      var K = v.displayName || v.name || "";
      return K !== "" ? S + "(" + K + ")" : S;
    }
    function de(s) {
      return s.displayName || "Context";
    }
    function ne(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            var v = s;
            return de(v) + ".Consumer";
          case i:
            var S = s;
            return de(S._context) + ".Provider";
          case c:
            return te(s, s.render, "ForwardRef");
          case m:
            var $ = s.displayName || null;
            return $ !== null ? $ : ne(s.type) || "Memo";
          case p: {
            var K = s, Q = K._payload, U = K._init;
            try {
              return ne(U(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ie = Object.assign, Te = 0, he, Ce, De, Ve, g, O, I;
    function k() {
    }
    k.__reactDisabledLog = !0;
    function C() {
      {
        if (Te === 0) {
          he = console.log, Ce = console.info, De = console.warn, Ve = console.error, g = console.group, O = console.groupCollapsed, I = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: k,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        Te++;
      }
    }
    function F() {
      {
        if (Te--, Te === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ie({}, s, {
              value: he
            }),
            info: ie({}, s, {
              value: Ce
            }),
            warn: ie({}, s, {
              value: De
            }),
            error: ie({}, s, {
              value: Ve
            }),
            group: ie({}, s, {
              value: g
            }),
            groupCollapsed: ie({}, s, {
              value: O
            }),
            groupEnd: ie({}, s, {
              value: I
            })
          });
        }
        Te < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var P = x.ReactCurrentDispatcher, A;
    function D(s, v, S) {
      {
        if (A === void 0)
          try {
            throw Error();
          } catch (K) {
            var $ = K.stack.trim().match(/\n( *(at )?)/);
            A = $ && $[1] || "";
          }
        return `
` + A + s;
      }
    }
    var V = !1, N;
    {
      var pe = typeof WeakMap == "function" ? WeakMap : Map;
      N = new pe();
    }
    function E(s, v) {
      if (!s || V)
        return "";
      {
        var S = N.get(s);
        if (S !== void 0)
          return S;
      }
      var $;
      V = !0;
      var K = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = P.current, P.current = null, C();
      try {
        if (v) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (Oe) {
              $ = Oe;
            }
            Reflect.construct(s, [], U);
          } else {
            try {
              U.call();
            } catch (Oe) {
              $ = Oe;
            }
            s.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Oe) {
            $ = Oe;
          }
          s();
        }
      } catch (Oe) {
        if (Oe && $ && typeof Oe.stack == "string") {
          for (var L = Oe.stack.split(`
`), Se = $.stack.split(`
`), se = L.length - 1, le = Se.length - 1; se >= 1 && le >= 0 && L[se] !== Se[le]; )
            le--;
          for (; se >= 1 && le >= 0; se--, le--)
            if (L[se] !== Se[le]) {
              if (se !== 1 || le !== 1)
                do
                  if (se--, le--, le < 0 || L[se] !== Se[le]) {
                    var Pe = `
` + L[se].replace(" at new ", " at ");
                    return s.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", s.displayName)), typeof s == "function" && N.set(s, Pe), Pe;
                  }
                while (se >= 1 && le >= 0);
              break;
            }
        }
      } finally {
        V = !1, P.current = Q, F(), Error.prepareStackTrace = K;
      }
      var Je = s ? s.displayName || s.name : "", He = Je ? D(Je) : "";
      return typeof s == "function" && N.set(s, He), He;
    }
    function xe(s, v, S) {
      return E(s, !1);
    }
    function w(s) {
      var v = s.prototype;
      return !!(v && v.isReactComponent);
    }
    function Me(s, v, S) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return E(s, w(s));
      if (typeof s == "string")
        return D(s);
      switch (s) {
        case l:
          return D("Suspense");
        case f:
          return D("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            return xe(s.render);
          case m:
            return Me(s.type, v, S);
          case p: {
            var $ = s, K = $._payload, Q = $._init;
            try {
              return Me(Q(K), v, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, cr = {}, tn = x.ReactDebugCurrentFrame;
    function Tr(s) {
      if (s) {
        var v = s._owner, S = Me(s.type, s._source, v ? v.type : null);
        tn.setExtraStackFrame(S);
      } else
        tn.setExtraStackFrame(null);
    }
    function pa(s, v, S, $, K) {
      {
        var Q = Function.call.bind(Ne);
        for (var U in s)
          if (Q(s, U)) {
            var L = void 0;
            try {
              if (typeof s[U] != "function") {
                var Se = Error(($ || "React class") + ": " + S + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Se.name = "Invariant Violation", Se;
              }
              L = s[U](v, U, $, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (se) {
              L = se;
            }
            L && !(L instanceof Error) && (Tr(K), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", S, U, typeof L), Tr(null)), L instanceof Error && !(L.message in cr) && (cr[L.message] = !0, Tr(K), T("Failed %s type: %s", S, L.message), Tr(null));
          }
      }
    }
    var ma = Array.isArray;
    function Jr(s) {
      return ma(s);
    }
    function ha(s) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, S = v && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return S;
      }
    }
    function ya(s) {
      try {
        return nn(s), !1;
      } catch {
        return !0;
      }
    }
    function nn(s) {
      return "" + s;
    }
    function on(s) {
      if (ya(s))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ha(s)), nn(s);
    }
    var lr = x.ReactCurrentOwner, va = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, an, sn, Zr;
    Zr = {};
    function ga(s) {
      if (Ne.call(s, "ref")) {
        var v = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function ba(s) {
      if (Ne.call(s, "key")) {
        var v = Object.getOwnPropertyDescriptor(s, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function _a(s, v) {
      if (typeof s.ref == "string" && lr.current && v && lr.current.stateNode !== v) {
        var S = ne(lr.current.type);
        Zr[S] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ne(lr.current.type), s.ref), Zr[S] = !0);
      }
    }
    function Ea(s, v) {
      {
        var S = function() {
          an || (an = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        S.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function Sa(s, v) {
      {
        var S = function() {
          sn || (sn = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        S.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var xa = function(s, v, S, $, K, Q, U) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: s,
        key: v,
        ref: S,
        props: U,
        // Record the component responsible for creating this element.
        _owner: Q
      };
      return L._store = {}, Object.defineProperty(L._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(L, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function Oa(s, v, S, $, K) {
      {
        var Q, U = {}, L = null, Se = null;
        S !== void 0 && (on(S), L = "" + S), ba(v) && (on(v.key), L = "" + v.key), ga(v) && (Se = v.ref, _a(v, K));
        for (Q in v)
          Ne.call(v, Q) && !va.hasOwnProperty(Q) && (U[Q] = v[Q]);
        if (s && s.defaultProps) {
          var se = s.defaultProps;
          for (Q in se)
            U[Q] === void 0 && (U[Q] = se[Q]);
        }
        if (L || Se) {
          var le = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          L && Ea(U, le), Se && Sa(U, le);
        }
        return xa(s, L, Se, K, $, lr.current, U);
      }
    }
    var Qr = x.ReactCurrentOwner, un = x.ReactDebugCurrentFrame;
    function Xe(s) {
      if (s) {
        var v = s._owner, S = Me(s.type, s._source, v ? v.type : null);
        un.setExtraStackFrame(S);
      } else
        un.setExtraStackFrame(null);
    }
    var et;
    et = !1;
    function rt(s) {
      return typeof s == "object" && s !== null && s.$$typeof === r;
    }
    function cn() {
      {
        if (Qr.current) {
          var s = ne(Qr.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function wa(s) {
      return "";
    }
    var ln = {};
    function Ta(s) {
      {
        var v = cn();
        if (!v) {
          var S = typeof s == "string" ? s : s.displayName || s.name;
          S && (v = `

Check the top-level render call using <` + S + ">.");
        }
        return v;
      }
    }
    function fn(s, v) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var S = Ta(v);
        if (ln[S])
          return;
        ln[S] = !0;
        var $ = "";
        s && s._owner && s._owner !== Qr.current && ($ = " It was passed a child from " + ne(s._owner.type) + "."), Xe(s), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, $), Xe(null);
      }
    }
    function dn(s, v) {
      {
        if (typeof s != "object")
          return;
        if (Jr(s))
          for (var S = 0; S < s.length; S++) {
            var $ = s[S];
            rt($) && fn($, v);
          }
        else if (rt(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var K = h(s);
          if (typeof K == "function" && K !== s.entries)
            for (var Q = K.call(s), U; !(U = Q.next()).done; )
              rt(U.value) && fn(U.value, v);
        }
      }
    }
    function Ra(s) {
      {
        var v = s.type;
        if (v == null || typeof v == "string")
          return;
        var S;
        if (typeof v == "function")
          S = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === m))
          S = v.propTypes;
        else
          return;
        if (S) {
          var $ = ne(v);
          pa(S, s.props, "prop", $, s);
        } else if (v.PropTypes !== void 0 && !et) {
          et = !0;
          var K = ne(v);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $a(s) {
      {
        for (var v = Object.keys(s.props), S = 0; S < v.length; S++) {
          var $ = v[S];
          if ($ !== "children" && $ !== "key") {
            Xe(s), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), Xe(null);
            break;
          }
        }
        s.ref !== null && (Xe(s), T("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
      }
    }
    var pn = {};
    function mn(s, v, S, $, K, Q) {
      {
        var U = ge(s);
        if (!U) {
          var L = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = wa();
          Se ? L += Se : L += cn();
          var se;
          s === null ? se = "null" : Jr(s) ? se = "array" : s !== void 0 && s.$$typeof === r ? (se = "<" + (ne(s.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : se = typeof s, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", se, L);
        }
        var le = Oa(s, v, S, K, Q);
        if (le == null)
          return le;
        if (U) {
          var Pe = v.children;
          if (Pe !== void 0)
            if ($)
              if (Jr(Pe)) {
                for (var Je = 0; Je < Pe.length; Je++)
                  dn(Pe[Je], s);
                Object.freeze && Object.freeze(Pe);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              dn(Pe, s);
        }
        if (Ne.call(v, "key")) {
          var He = ne(s), Oe = Object.keys(v).filter(function(Ia) {
            return Ia !== "key";
          }), tt = Oe.length > 0 ? "{key: someKey, " + Oe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!pn[He + tt]) {
            var ja = Oe.length > 0 ? "{" + Oe.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, tt, He, ja, He), pn[He + tt] = !0;
          }
        }
        return s === n ? $a(le) : Ra(le), le;
      }
    }
    function Ca(s, v, S) {
      return mn(s, v, S, !0);
    }
    function Pa(s, v, S) {
      return mn(s, v, S, !1);
    }
    var Aa = Pa, ka = Ca;
    dr.Fragment = n, dr.jsx = Aa, dr.jsxs = ka;
  }()), dr;
}
process.env.NODE_ENV === "production" ? ht.exports = Na() : ht.exports = Fa();
var ee = ht.exports, ao = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var r = {}.hasOwnProperty;
    function t() {
      for (var a = "", i = 0; i < arguments.length; i++) {
        var u = arguments[i];
        u && (a = o(a, n(u)));
      }
      return a;
    }
    function n(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return t.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var i = "";
      for (var u in a)
        r.call(a, u) && a[u] && (i = o(i, u));
      return i;
    }
    function o(a, i) {
      return i ? a ? a + " " + i : a + i : a;
    }
    e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
  })();
})(ao);
var La = ao.exports;
const za = /* @__PURE__ */ oo(La);
var wt = {}, io = { exports: {} };
(function(e) {
  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})(io);
var me = io.exports, nt = {};
function Z() {
  return Z = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Z.apply(null, arguments);
}
function Ye(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function so(e) {
  if (!Ye(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = so(e[t]);
  }), r;
}
function ze(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? Z({}, e) : e;
  return Ye(e) && Ye(r) && Object.keys(r).forEach((o) => {
    Ye(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ye(e[o]) ? n[o] = ze(e[o], r[o], t) : t.clone ? n[o] = Ye(r[o]) ? so(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
const Wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ze,
  isPlainObject: Ye
}, Symbol.toStringTag, { value: "Module" }));
var yt = { exports: {} }, Rr = { exports: {} }, G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function Va() {
  if (vn) return G;
  vn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function R(y) {
    if (typeof y == "object" && y !== null) {
      var W = y.$$typeof;
      switch (W) {
        case r:
          switch (y = y.type, y) {
            case c:
            case l:
            case n:
            case a:
            case o:
            case m:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case u:
                case f:
                case b:
                case _:
                case i:
                  return y;
                default:
                  return W;
              }
          }
        case t:
          return W;
      }
    }
  }
  function z(y) {
    return R(y) === l;
  }
  return G.AsyncMode = c, G.ConcurrentMode = l, G.ContextConsumer = u, G.ContextProvider = i, G.Element = r, G.ForwardRef = f, G.Fragment = n, G.Lazy = b, G.Memo = _, G.Portal = t, G.Profiler = a, G.StrictMode = o, G.Suspense = m, G.isAsyncMode = function(y) {
    return z(y) || R(y) === c;
  }, G.isConcurrentMode = z, G.isContextConsumer = function(y) {
    return R(y) === u;
  }, G.isContextProvider = function(y) {
    return R(y) === i;
  }, G.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === r;
  }, G.isForwardRef = function(y) {
    return R(y) === f;
  }, G.isFragment = function(y) {
    return R(y) === n;
  }, G.isLazy = function(y) {
    return R(y) === b;
  }, G.isMemo = function(y) {
    return R(y) === _;
  }, G.isPortal = function(y) {
    return R(y) === t;
  }, G.isProfiler = function(y) {
    return R(y) === a;
  }, G.isStrictMode = function(y) {
    return R(y) === o;
  }, G.isSuspense = function(y) {
    return R(y) === m;
  }, G.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === l || y === a || y === o || y === m || y === p || typeof y == "object" && y !== null && (y.$$typeof === b || y.$$typeof === _ || y.$$typeof === i || y.$$typeof === u || y.$$typeof === f || y.$$typeof === h || y.$$typeof === x || y.$$typeof === T || y.$$typeof === d);
  }, G.typeOf = R, G;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn;
function qa() {
  return gn || (gn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function R(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === n || E === l || E === a || E === o || E === m || E === p || typeof E == "object" && E !== null && (E.$$typeof === b || E.$$typeof === _ || E.$$typeof === i || E.$$typeof === u || E.$$typeof === f || E.$$typeof === h || E.$$typeof === x || E.$$typeof === T || E.$$typeof === d);
    }
    function z(E) {
      if (typeof E == "object" && E !== null) {
        var xe = E.$$typeof;
        switch (xe) {
          case r:
            var w = E.type;
            switch (w) {
              case c:
              case l:
              case n:
              case a:
              case o:
              case m:
                return w;
              default:
                var Me = w && w.$$typeof;
                switch (Me) {
                  case u:
                  case f:
                  case b:
                  case _:
                  case i:
                    return Me;
                  default:
                    return xe;
                }
            }
          case t:
            return xe;
        }
      }
    }
    var y = c, W = l, j = u, Ee = i, ve = r, ge = f, te = n, de = b, ne = _, ie = t, Te = a, he = o, Ce = m, De = !1;
    function Ve(E) {
      return De || (De = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), g(E) || z(E) === c;
    }
    function g(E) {
      return z(E) === l;
    }
    function O(E) {
      return z(E) === u;
    }
    function I(E) {
      return z(E) === i;
    }
    function k(E) {
      return typeof E == "object" && E !== null && E.$$typeof === r;
    }
    function C(E) {
      return z(E) === f;
    }
    function F(E) {
      return z(E) === n;
    }
    function P(E) {
      return z(E) === b;
    }
    function A(E) {
      return z(E) === _;
    }
    function D(E) {
      return z(E) === t;
    }
    function V(E) {
      return z(E) === a;
    }
    function N(E) {
      return z(E) === o;
    }
    function pe(E) {
      return z(E) === m;
    }
    H.AsyncMode = y, H.ConcurrentMode = W, H.ContextConsumer = j, H.ContextProvider = Ee, H.Element = ve, H.ForwardRef = ge, H.Fragment = te, H.Lazy = de, H.Memo = ne, H.Portal = ie, H.Profiler = Te, H.StrictMode = he, H.Suspense = Ce, H.isAsyncMode = Ve, H.isConcurrentMode = g, H.isContextConsumer = O, H.isContextProvider = I, H.isElement = k, H.isForwardRef = C, H.isFragment = F, H.isLazy = P, H.isMemo = A, H.isPortal = D, H.isProfiler = V, H.isStrictMode = N, H.isSuspense = pe, H.isValidElementType = R, H.typeOf = z;
  }()), H;
}
var bn;
function Tt() {
  return bn || (bn = 1, process.env.NODE_ENV === "production" ? Rr.exports = Va() : Rr.exports = qa()), Rr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ot, _n;
function Ua() {
  if (_n) return ot;
  _n = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var i = {}, u = 0; u < 10; u++)
        i["_" + String.fromCharCode(u)] = u;
      var c = Object.getOwnPropertyNames(i).map(function(f) {
        return i[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        l[f] = f;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ot = o() ? Object.assign : function(a, i) {
    for (var u, c = n(a), l, f = 1; f < arguments.length; f++) {
      u = Object(arguments[f]);
      for (var m in u)
        r.call(u, m) && (c[m] = u[m]);
      if (e) {
        l = e(u);
        for (var p = 0; p < l.length; p++)
          t.call(u, l[p]) && (c[l[p]] = u[l[p]]);
      }
    }
    return c;
  }, ot;
}
var at, En;
function Rt() {
  if (En) return at;
  En = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return at = e, at;
}
var it, Sn;
function uo() {
  return Sn || (Sn = 1, it = Function.call.bind(Object.prototype.hasOwnProperty)), it;
}
var st, xn;
function Ya() {
  if (xn) return st;
  xn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Rt(), t = {}, n = uo();
    e = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(a, i, u, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var m;
          try {
            if (typeof a[f] != "function") {
              var p = Error(
                (c || "React class") + ": " + u + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            m = a[f](i, f, c, u, null, r);
          } catch (b) {
            m = b;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + u + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in t)) {
            t[m.message] = !0;
            var _ = l ? l() : "";
            e(
              "Failed " + u + " type: " + m.message + (_ ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, st = o, st;
}
var ut, On;
function Ba() {
  if (On) return ut;
  On = 1;
  var e = Tt(), r = Ua(), t = Rt(), n = uo(), o = Ya(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var c = "Warning: " + u;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return ut = function(u, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(g) {
      var O = g && (l && g[l] || g[f]);
      if (typeof O == "function")
        return O;
    }
    var p = "<<anonymous>>", _ = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: T(),
      arrayOf: R,
      element: z(),
      elementType: y(),
      instanceOf: W,
      node: ge(),
      objectOf: Ee,
      oneOf: j,
      oneOfType: ve,
      shape: de,
      exact: ne
    };
    function b(g, O) {
      return g === O ? g !== 0 || 1 / g === 1 / O : g !== g && O !== O;
    }
    function d(g, O) {
      this.message = g, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function h(g) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, I = 0;
      function k(F, P, A, D, V, N, pe) {
        if (D = D || p, N = N || A, pe !== t) {
          if (c) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = D + ":" + A;
            !O[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            I < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + N + "` prop on `" + D + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[xe] = !0, I++);
          }
        }
        return P[A] == null ? F ? P[A] === null ? new d("The " + V + " `" + N + "` is marked as required " + ("in `" + D + "`, but its value is `null`.")) : new d("The " + V + " `" + N + "` is marked as required in " + ("`" + D + "`, but its value is `undefined`.")) : null : g(P, A, D, V, N);
      }
      var C = k.bind(null, !1);
      return C.isRequired = k.bind(null, !0), C;
    }
    function x(g) {
      function O(I, k, C, F, P, A) {
        var D = I[k], V = he(D);
        if (V !== g) {
          var N = Ce(D);
          return new d(
            "Invalid " + F + " `" + P + "` of type " + ("`" + N + "` supplied to `" + C + "`, expected ") + ("`" + g + "`."),
            { expectedType: g }
          );
        }
        return null;
      }
      return h(O);
    }
    function T() {
      return h(i);
    }
    function R(g) {
      function O(I, k, C, F, P) {
        if (typeof g != "function")
          return new d("Property `" + P + "` of component `" + C + "` has invalid PropType notation inside arrayOf.");
        var A = I[k];
        if (!Array.isArray(A)) {
          var D = he(A);
          return new d("Invalid " + F + " `" + P + "` of type " + ("`" + D + "` supplied to `" + C + "`, expected an array."));
        }
        for (var V = 0; V < A.length; V++) {
          var N = g(A, V, C, F, P + "[" + V + "]", t);
          if (N instanceof Error)
            return N;
        }
        return null;
      }
      return h(O);
    }
    function z() {
      function g(O, I, k, C, F) {
        var P = O[I];
        if (!u(P)) {
          var A = he(P);
          return new d("Invalid " + C + " `" + F + "` of type " + ("`" + A + "` supplied to `" + k + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(g);
    }
    function y() {
      function g(O, I, k, C, F) {
        var P = O[I];
        if (!e.isValidElementType(P)) {
          var A = he(P);
          return new d("Invalid " + C + " `" + F + "` of type " + ("`" + A + "` supplied to `" + k + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(g);
    }
    function W(g) {
      function O(I, k, C, F, P) {
        if (!(I[k] instanceof g)) {
          var A = g.name || p, D = Ve(I[k]);
          return new d("Invalid " + F + " `" + P + "` of type " + ("`" + D + "` supplied to `" + C + "`, expected ") + ("instance of `" + A + "`."));
        }
        return null;
      }
      return h(O);
    }
    function j(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function O(I, k, C, F, P) {
        for (var A = I[k], D = 0; D < g.length; D++)
          if (b(A, g[D]))
            return null;
        var V = JSON.stringify(g, function(pe, E) {
          var xe = Ce(E);
          return xe === "symbol" ? String(E) : E;
        });
        return new d("Invalid " + F + " `" + P + "` of value `" + String(A) + "` " + ("supplied to `" + C + "`, expected one of " + V + "."));
      }
      return h(O);
    }
    function Ee(g) {
      function O(I, k, C, F, P) {
        if (typeof g != "function")
          return new d("Property `" + P + "` of component `" + C + "` has invalid PropType notation inside objectOf.");
        var A = I[k], D = he(A);
        if (D !== "object")
          return new d("Invalid " + F + " `" + P + "` of type " + ("`" + D + "` supplied to `" + C + "`, expected an object."));
        for (var V in A)
          if (n(A, V)) {
            var N = g(A, V, C, F, P + "." + V, t);
            if (N instanceof Error)
              return N;
          }
        return null;
      }
      return h(O);
    }
    function ve(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var O = 0; O < g.length; O++) {
        var I = g[O];
        if (typeof I != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + De(I) + " at index " + O + "."
          ), i;
      }
      function k(C, F, P, A, D) {
        for (var V = [], N = 0; N < g.length; N++) {
          var pe = g[N], E = pe(C, F, P, A, D, t);
          if (E == null)
            return null;
          E.data && n(E.data, "expectedType") && V.push(E.data.expectedType);
        }
        var xe = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new d("Invalid " + A + " `" + D + "` supplied to " + ("`" + P + "`" + xe + "."));
      }
      return h(k);
    }
    function ge() {
      function g(O, I, k, C, F) {
        return ie(O[I]) ? null : new d("Invalid " + C + " `" + F + "` supplied to " + ("`" + k + "`, expected a ReactNode."));
      }
      return h(g);
    }
    function te(g, O, I, k, C) {
      return new d(
        (g || "React class") + ": " + O + " type `" + I + "." + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + C + "`."
      );
    }
    function de(g) {
      function O(I, k, C, F, P) {
        var A = I[k], D = he(A);
        if (D !== "object")
          return new d("Invalid " + F + " `" + P + "` of type `" + D + "` " + ("supplied to `" + C + "`, expected `object`."));
        for (var V in g) {
          var N = g[V];
          if (typeof N != "function")
            return te(C, F, P, V, Ce(N));
          var pe = N(A, V, C, F, P + "." + V, t);
          if (pe)
            return pe;
        }
        return null;
      }
      return h(O);
    }
    function ne(g) {
      function O(I, k, C, F, P) {
        var A = I[k], D = he(A);
        if (D !== "object")
          return new d("Invalid " + F + " `" + P + "` of type `" + D + "` " + ("supplied to `" + C + "`, expected `object`."));
        var V = r({}, I[k], g);
        for (var N in V) {
          var pe = g[N];
          if (n(g, N) && typeof pe != "function")
            return te(C, F, P, N, Ce(pe));
          if (!pe)
            return new d(
              "Invalid " + F + " `" + P + "` key `" + N + "` supplied to `" + C + "`.\nBad object: " + JSON.stringify(I[k], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(g), null, "  ")
            );
          var E = pe(A, N, C, F, P + "." + N, t);
          if (E)
            return E;
        }
        return null;
      }
      return h(O);
    }
    function ie(g) {
      switch (typeof g) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !g;
        case "object":
          if (Array.isArray(g))
            return g.every(ie);
          if (g === null || u(g))
            return !0;
          var O = m(g);
          if (O) {
            var I = O.call(g), k;
            if (O !== g.entries) {
              for (; !(k = I.next()).done; )
                if (!ie(k.value))
                  return !1;
            } else
              for (; !(k = I.next()).done; ) {
                var C = k.value;
                if (C && !ie(C[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Te(g, O) {
      return g === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function he(g) {
      var O = typeof g;
      return Array.isArray(g) ? "array" : g instanceof RegExp ? "object" : Te(O, g) ? "symbol" : O;
    }
    function Ce(g) {
      if (typeof g > "u" || g === null)
        return "" + g;
      var O = he(g);
      if (O === "object") {
        if (g instanceof Date)
          return "date";
        if (g instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function De(g) {
      var O = Ce(g);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function Ve(g) {
      return !g.constructor || !g.constructor.name ? p : g.constructor.name;
    }
    return _.checkPropTypes = o, _.resetWarningCache = o.resetWarningCache, _.PropTypes = _, _;
  }, ut;
}
var ct, wn;
function Ka() {
  if (wn) return ct;
  wn = 1;
  var e = Rt();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, ct = function() {
    function n(i, u, c, l, f, m) {
      if (m !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return a.PropTypes = a, a;
  }, ct;
}
if (process.env.NODE_ENV !== "production") {
  var Ga = Tt(), Ha = !0;
  yt.exports = Ba()(Ga.isElement, Ha);
} else
  yt.exports = Ka()();
var Xa = yt.exports;
const M = /* @__PURE__ */ oo(Xa);
function yr(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
const Ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yr
}, Symbol.toStringTag, { value: "Module" }));
var vt = { exports: {} }, X = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tn;
function Za() {
  if (Tn) return X;
  Tn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), u = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function d(h) {
    if (typeof h == "object" && h !== null) {
      var x = h.$$typeof;
      switch (x) {
        case e:
          switch (h = h.type, h) {
            case t:
            case o:
            case n:
            case l:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case u:
                case i:
                case c:
                case p:
                case m:
                case a:
                  return h;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  return X.ContextConsumer = i, X.ContextProvider = a, X.Element = e, X.ForwardRef = c, X.Fragment = t, X.Lazy = p, X.Memo = m, X.Portal = r, X.Profiler = o, X.StrictMode = n, X.Suspense = l, X.SuspenseList = f, X.isAsyncMode = function() {
    return !1;
  }, X.isConcurrentMode = function() {
    return !1;
  }, X.isContextConsumer = function(h) {
    return d(h) === i;
  }, X.isContextProvider = function(h) {
    return d(h) === a;
  }, X.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, X.isForwardRef = function(h) {
    return d(h) === c;
  }, X.isFragment = function(h) {
    return d(h) === t;
  }, X.isLazy = function(h) {
    return d(h) === p;
  }, X.isMemo = function(h) {
    return d(h) === m;
  }, X.isPortal = function(h) {
    return d(h) === r;
  }, X.isProfiler = function(h) {
    return d(h) === o;
  }, X.isStrictMode = function(h) {
    return d(h) === n;
  }, X.isSuspense = function(h) {
    return d(h) === l;
  }, X.isSuspenseList = function(h) {
    return d(h) === f;
  }, X.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === n || h === l || h === f || h === _ || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === m || h.$$typeof === a || h.$$typeof === i || h.$$typeof === c || h.$$typeof === b || h.getModuleId !== void 0);
  }, X.typeOf = d, X;
}
var J = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function Qa() {
  return Rn || (Rn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), u = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), b = !1, d = !1, h = !1, x = !1, T = !1, R;
    R = Symbol.for("react.module.reference");
    function z(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === t || w === o || T || w === n || w === l || w === f || x || w === _ || b || d || h || typeof w == "object" && w !== null && (w.$$typeof === p || w.$$typeof === m || w.$$typeof === a || w.$$typeof === i || w.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === R || w.getModuleId !== void 0));
    }
    function y(w) {
      if (typeof w == "object" && w !== null) {
        var Me = w.$$typeof;
        switch (Me) {
          case e:
            var Ne = w.type;
            switch (Ne) {
              case t:
              case o:
              case n:
              case l:
              case f:
                return Ne;
              default:
                var cr = Ne && Ne.$$typeof;
                switch (cr) {
                  case u:
                  case i:
                  case c:
                  case p:
                  case m:
                  case a:
                    return cr;
                  default:
                    return Me;
                }
            }
          case r:
            return Me;
        }
      }
    }
    var W = i, j = a, Ee = e, ve = c, ge = t, te = p, de = m, ne = r, ie = o, Te = n, he = l, Ce = f, De = !1, Ve = !1;
    function g(w) {
      return De || (De = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(w) {
      return Ve || (Ve = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function I(w) {
      return y(w) === i;
    }
    function k(w) {
      return y(w) === a;
    }
    function C(w) {
      return typeof w == "object" && w !== null && w.$$typeof === e;
    }
    function F(w) {
      return y(w) === c;
    }
    function P(w) {
      return y(w) === t;
    }
    function A(w) {
      return y(w) === p;
    }
    function D(w) {
      return y(w) === m;
    }
    function V(w) {
      return y(w) === r;
    }
    function N(w) {
      return y(w) === o;
    }
    function pe(w) {
      return y(w) === n;
    }
    function E(w) {
      return y(w) === l;
    }
    function xe(w) {
      return y(w) === f;
    }
    J.ContextConsumer = W, J.ContextProvider = j, J.Element = Ee, J.ForwardRef = ve, J.Fragment = ge, J.Lazy = te, J.Memo = de, J.Portal = ne, J.Profiler = ie, J.StrictMode = Te, J.Suspense = he, J.SuspenseList = Ce, J.isAsyncMode = g, J.isConcurrentMode = O, J.isContextConsumer = I, J.isContextProvider = k, J.isElement = C, J.isForwardRef = F, J.isFragment = P, J.isLazy = A, J.isMemo = D, J.isPortal = V, J.isProfiler = N, J.isStrictMode = pe, J.isSuspense = E, J.isSuspenseList = xe, J.isValidElementType = z, J.typeOf = y;
  }()), J;
}
process.env.NODE_ENV === "production" ? vt.exports = Za() : vt.exports = Qa();
var $n = vt.exports;
const ei = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function co(e) {
  const r = `${e}`.match(ei);
  return r && r[1] || "";
}
function lo(e, r = "") {
  return e.displayName || e.name || co(e) || r;
}
function Cn(e, r, t) {
  const n = lo(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function ri(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return lo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $n.ForwardRef:
          return Cn(e, e.render, "ForwardRef");
        case $n.Memo:
          return Cn(e, e.type, "memo");
        default:
          return;
      }
  }
}
const ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ri,
  getFunctionName: co
}, Symbol.toStringTag, { value: "Module" }));
function Be(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : yr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Be
}, Symbol.toStringTag, { value: "Module" }));
function oi(...e) {
  return e.reduce((r, t) => t == null ? r : function(...o) {
    r.apply(this, o), t.apply(this, o);
  }, () => {
  });
}
function ai(e, r = 166) {
  let t;
  function n(...o) {
    const a = () => {
      e.apply(this, o);
    };
    clearTimeout(t), t = setTimeout(a, r);
  }
  return n.clear = () => {
    clearTimeout(t);
  }, n;
}
function ii(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : (t, n, o, a, i) => {
    const u = o || "<<anonymous>>", c = i || n;
    return typeof t[n] < "u" ? new Error(`The ${a} \`${c}\` of \`${u}\` is deprecated. ${r}`) : null;
  };
}
function si(e, r) {
  var t, n;
  return /* @__PURE__ */ q.isValidElement(e) && r.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (t = e.type.muiName) != null ? t : (n = e.type) == null || (n = n._payload) == null || (n = n.value) == null ? void 0 : n.muiName
  ) !== -1;
}
function fo(e) {
  return e && e.ownerDocument || document;
}
function ui(e) {
  return fo(e).defaultView || window;
}
function ci(e, r) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const t = r ? Z({}, r.propTypes) : null;
  return (o) => (a, i, u, c, l, ...f) => {
    const m = l || i, p = t == null ? void 0 : t[m];
    if (p) {
      const _ = p(a, i, u, c, l, ...f);
      if (_)
        return _;
    }
    return typeof a[i] < "u" && !a[o] ? new Error(`The prop \`${m}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function po(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
const mo = typeof window < "u" ? q.useLayoutEffect : q.useEffect;
let Pn = 0;
function li(e) {
  const [r, t] = q.useState(e), n = e || r;
  return q.useEffect(() => {
    r == null && (Pn += 1, t(`mui-${Pn}`));
  }, [r]), n;
}
const An = q.useId;
function fi(e) {
  if (An !== void 0) {
    const r = An();
    return e ?? r;
  }
  return li(e);
}
function di(e, r, t, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = o || r;
  return typeof e[r] < "u" ? new Error(`The prop \`${a}\` is not supported. Please remove it.`) : null;
}
function pi({
  controlled: e,
  default: r,
  name: t,
  state: n = "value"
}) {
  const {
    current: o
  } = q.useRef(e !== void 0), [a, i] = q.useState(r), u = o ? e : a;
  if (process.env.NODE_ENV !== "production") {
    q.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${t} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${t} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, t, e]);
    const {
      current: l
    } = q.useRef(r);
    q.useEffect(() => {
      !o && !Object.is(l, r) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${t} after being initialized. To suppress this warning opt to use a controlled ${t}.`].join(`
`));
    }, [JSON.stringify(r)]);
  }
  const c = q.useCallback((l) => {
    o || i(l);
  }, []);
  return [u, c];
}
function mi(e) {
  const r = q.useRef(e);
  return mo(() => {
    r.current = e;
  }), q.useRef((...t) => (
    // @ts-expect-error hide `this`
    (0, r.current)(...t)
  )).current;
}
function hi(...e) {
  return q.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    e.forEach((t) => {
      po(t, r);
    });
  }, e);
}
class $t {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new $t();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(r, t) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, t();
    }, r);
  }
}
let Lr = !0, gt = !1;
const yi = new $t(), vi = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function gi(e) {
  const {
    type: r,
    tagName: t
  } = e;
  return !!(t === "INPUT" && vi[r] && !e.readOnly || t === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function bi(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Lr = !0);
}
function lt() {
  Lr = !1;
}
function _i() {
  this.visibilityState === "hidden" && gt && (Lr = !0);
}
function Ei(e) {
  e.addEventListener("keydown", bi, !0), e.addEventListener("mousedown", lt, !0), e.addEventListener("pointerdown", lt, !0), e.addEventListener("touchstart", lt, !0), e.addEventListener("visibilitychange", _i, !0);
}
function Si(e) {
  const {
    target: r
  } = e;
  try {
    return r.matches(":focus-visible");
  } catch {
  }
  return Lr || gi(r);
}
function xi() {
  const e = q.useCallback((o) => {
    o != null && Ei(o.ownerDocument);
  }, []), r = q.useRef(!1);
  function t() {
    return r.current ? (gt = !0, yi.start(100, () => {
      gt = !1;
    }), r.current = !1, !0) : !1;
  }
  function n(o) {
    return Si(o) ? (r.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: r,
    onFocus: n,
    onBlur: t,
    ref: e
  };
}
function bt(e, r) {
  const t = Z({}, r);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      t[n] = Z({}, e[n], t[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, a = r[n];
      t[n] = {}, !a || !Object.keys(a) ? t[n] = o : !o || !Object.keys(o) ? t[n] = a : (t[n] = Z({}, a), Object.keys(o).forEach((i) => {
        t[n][i] = bt(o[i], a[i]);
      }));
    } else t[n] === void 0 && (t[n] = e[n]);
  }), t;
}
function Oi(e, r, t = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((a, i) => {
        if (i) {
          const u = r(i);
          u !== "" && a.push(u), t && t[i] && a.push(t[i]);
        }
        return a;
      }, []).join(" ");
    }
  ), n;
}
const kn = (e) => e, wi = () => {
  let e = kn;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = kn;
    }
  };
}, ho = wi(), Ti = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Ct(e, r, t = "Mui") {
  const n = Ti[r];
  return n ? `${t}-${n}` : `${ho.generate(e)}-${r}`;
}
function Ri(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = Ct(e, o, t);
  }), n;
}
function $i(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
const Ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $i
}, Symbol.toStringTag, { value: "Module" }));
function Ke(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.includes(n)) continue;
    t[n] = e[n];
  }
  return t;
}
function yo(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (r = 0; r < o; r++) e[r] && (t = yo(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Pi() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (r = yo(e)) && (n && (n += " "), n += r);
  return n;
}
const Ai = /* @__PURE__ */ q.createContext(void 0);
process.env.NODE_ENV !== "production" && (M.node, M.object);
function ki(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  if (!r || !r.components || !r.components[t])
    return n;
  const o = r.components[t];
  return o.defaultProps ? bt(o.defaultProps, n) : !o.styleOverrides && !o.variants ? bt(o, n) : n;
}
function ji({
  props: e,
  name: r
}) {
  const t = q.useContext(Ai);
  return ki({
    props: e,
    name: r,
    theme: {
      components: t
    }
  });
}
process.env.NODE_ENV !== "production" && (M.node, M.object.isRequired);
function Ii(e) {
  return ji(e);
}
var Er = {}, ft = { exports: {} }, jn;
function Mi() {
  return jn || (jn = 1, function(e) {
    function r() {
      return e.exports = r = Object.assign ? Object.assign.bind() : function(t) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var a in o) ({}).hasOwnProperty.call(o, a) && (t[a] = o[a]);
        }
        return t;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, r.apply(null, arguments);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(ft)), ft.exports;
}
var dt = { exports: {} }, In;
function Di() {
  return In || (In = 1, function(e) {
    function r(t, n) {
      if (t == null) return {};
      var o = {};
      for (var a in t) if ({}.hasOwnProperty.call(t, a)) {
        if (n.includes(a)) continue;
        o[a] = t[a];
      }
      return o;
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(dt)), dt.exports;
}
function vo(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Ni = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fi = /* @__PURE__ */ vo(
  function(e) {
    return Ni.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Li = !1;
function zi(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Wi(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Vi = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, a), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !Li : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Wi(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = zi(o);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), be = "-ms-", Mr = "-moz-", Y = "-webkit-", go = "comm", Pt = "rule", At = "decl", qi = "@import", bo = "@keyframes", Ui = "@layer", Yi = Math.abs, zr = String.fromCharCode, Bi = Object.assign;
function Ki(e, r) {
  return ye(e, 0) ^ 45 ? (((r << 2 ^ ye(e, 0)) << 2 ^ ye(e, 1)) << 2 ^ ye(e, 2)) << 2 ^ ye(e, 3) : 0;
}
function _o(e) {
  return e.trim();
}
function Gi(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function B(e, r, t) {
  return e.replace(r, t);
}
function _t(e, r) {
  return e.indexOf(r);
}
function ye(e, r) {
  return e.charCodeAt(r) | 0;
}
function vr(e, r, t) {
  return e.slice(r, t);
}
function Fe(e) {
  return e.length;
}
function kt(e) {
  return e.length;
}
function $r(e, r) {
  return r.push(e), e;
}
function Hi(e, r) {
  return e.map(r).join("");
}
var Wr = 1, ar = 1, Eo = 0, we = 0, fe = 0, ir = "";
function Vr(e, r, t, n, o, a, i) {
  return { value: e, root: r, parent: t, type: n, props: o, children: a, line: Wr, column: ar, length: i, return: "" };
}
function pr(e, r) {
  return Bi(Vr("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Xi() {
  return fe;
}
function Ji() {
  return fe = we > 0 ? ye(ir, --we) : 0, ar--, fe === 10 && (ar = 1, Wr--), fe;
}
function $e() {
  return fe = we < Eo ? ye(ir, we++) : 0, ar++, fe === 10 && (ar = 1, Wr++), fe;
}
function We() {
  return ye(ir, we);
}
function Pr() {
  return we;
}
function Sr(e, r) {
  return vr(ir, e, r);
}
function gr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function So(e) {
  return Wr = ar = 1, Eo = Fe(ir = e), we = 0, [];
}
function xo(e) {
  return ir = "", e;
}
function Ar(e) {
  return _o(Sr(we - 1, Et(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Zi(e) {
  for (; (fe = We()) && fe < 33; )
    $e();
  return gr(e) > 2 || gr(fe) > 3 ? "" : " ";
}
function Qi(e, r) {
  for (; --r && $e() && !(fe < 48 || fe > 102 || fe > 57 && fe < 65 || fe > 70 && fe < 97); )
    ;
  return Sr(e, Pr() + (r < 6 && We() == 32 && $e() == 32));
}
function Et(e) {
  for (; $e(); )
    switch (fe) {
      case e:
        return we;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Et(fe);
        break;
      case 40:
        e === 41 && Et(e);
        break;
      case 92:
        $e();
        break;
    }
  return we;
}
function es(e, r) {
  for (; $e() && e + fe !== 57; )
    if (e + fe === 84 && We() === 47)
      break;
  return "/*" + Sr(r, we - 1) + "*" + zr(e === 47 ? e : $e());
}
function rs(e) {
  for (; !gr(We()); )
    $e();
  return Sr(e, we);
}
function ts(e) {
  return xo(kr("", null, null, null, [""], e = So(e), 0, [0], e));
}
function kr(e, r, t, n, o, a, i, u, c) {
  for (var l = 0, f = 0, m = i, p = 0, _ = 0, b = 0, d = 1, h = 1, x = 1, T = 0, R = "", z = o, y = a, W = n, j = R; h; )
    switch (b = T, T = $e()) {
      case 40:
        if (b != 108 && ye(j, m - 1) == 58) {
          _t(j += B(Ar(T), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        j += Ar(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        j += Zi(b);
        break;
      case 92:
        j += Qi(Pr() - 1, 7);
        continue;
      case 47:
        switch (We()) {
          case 42:
          case 47:
            $r(ns(es($e(), Pr()), r, t), c);
            break;
          default:
            j += "/";
        }
        break;
      case 123 * d:
        u[l++] = Fe(j) * x;
      case 125 * d:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            h = 0;
          case 59 + f:
            x == -1 && (j = B(j, /\f/g, "")), _ > 0 && Fe(j) - m && $r(_ > 32 ? Dn(j + ";", n, t, m - 1) : Dn(B(j, " ", "") + ";", n, t, m - 2), c);
            break;
          case 59:
            j += ";";
          default:
            if ($r(W = Mn(j, r, t, l, f, o, u, R, z = [], y = [], m), a), T === 123)
              if (f === 0)
                kr(j, r, W, W, z, a, m, u, y);
              else
                switch (p === 99 && ye(j, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    kr(e, W, W, n && $r(Mn(e, W, W, 0, 0, o, u, R, o, z = [], m), y), o, y, m, u, n ? z : y);
                    break;
                  default:
                    kr(j, W, W, W, [""], y, 0, u, y);
                }
        }
        l = f = _ = 0, d = x = 1, R = j = "", m = i;
        break;
      case 58:
        m = 1 + Fe(j), _ = b;
      default:
        if (d < 1) {
          if (T == 123)
            --d;
          else if (T == 125 && d++ == 0 && Ji() == 125)
            continue;
        }
        switch (j += zr(T), T * d) {
          case 38:
            x = f > 0 ? 1 : (j += "\f", -1);
            break;
          case 44:
            u[l++] = (Fe(j) - 1) * x, x = 1;
            break;
          case 64:
            We() === 45 && (j += Ar($e())), p = We(), f = m = Fe(R = j += rs(Pr())), T++;
            break;
          case 45:
            b === 45 && Fe(j) == 2 && (d = 0);
        }
    }
  return a;
}
function Mn(e, r, t, n, o, a, i, u, c, l, f) {
  for (var m = o - 1, p = o === 0 ? a : [""], _ = kt(p), b = 0, d = 0, h = 0; b < n; ++b)
    for (var x = 0, T = vr(e, m + 1, m = Yi(d = i[b])), R = e; x < _; ++x)
      (R = _o(d > 0 ? p[x] + " " + T : B(T, /&\f/g, p[x]))) && (c[h++] = R);
  return Vr(e, r, t, o === 0 ? Pt : u, c, l, f);
}
function ns(e, r, t) {
  return Vr(e, r, t, go, zr(Xi()), vr(e, 2, -2), 0);
}
function Dn(e, r, t, n) {
  return Vr(e, r, t, At, vr(e, 0, n), vr(e, n + 1, -1), n);
}
function nr(e, r) {
  for (var t = "", n = kt(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function os(e, r, t, n) {
  switch (e.type) {
    case Ui:
      if (e.children.length) break;
    case qi:
    case At:
      return e.return = e.return || e.value;
    case go:
      return "";
    case bo:
      return e.return = e.value + "{" + nr(e.children, n) + "}";
    case Pt:
      e.value = e.props.join(",");
  }
  return Fe(t = nr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function as(e) {
  var r = kt(e);
  return function(t, n, o, a) {
    for (var i = "", u = 0; u < r; u++)
      i += e[u](t, n, o, a) || "";
    return i;
  };
}
function is(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var ss = function(r, t, n) {
  for (var o = 0, a = 0; o = a, a = We(), o === 38 && a === 12 && (t[n] = 1), !gr(a); )
    $e();
  return Sr(r, we);
}, us = function(r, t) {
  var n = -1, o = 44;
  do
    switch (gr(o)) {
      case 0:
        o === 38 && We() === 12 && (t[n] = 1), r[n] += ss(we - 1, t, n);
        break;
      case 2:
        r[n] += Ar(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = We() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += zr(o);
    }
  while (o = $e());
  return r;
}, cs = function(r, t) {
  return xo(us(So(r), t));
}, Nn = /* @__PURE__ */ new WeakMap(), ls = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Nn.get(n)) && !o) {
      Nn.set(r, !0);
      for (var a = [], i = cs(t, a), u = n.props, c = 0, l = 0; c < i.length; c++)
        for (var f = 0; f < u.length; f++, l++)
          r.props[l] = a[c] ? i[c].replace(/&\f/g, u[f]) : u[f] + " " + i[c];
    }
  }
}, fs = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Oo(e, r) {
  switch (Ki(e, r)) {
    case 5103:
      return Y + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Y + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Y + e + Mr + e + be + e + e;
    case 6828:
    case 4268:
      return Y + e + be + e + e;
    case 6165:
      return Y + e + be + "flex-" + e + e;
    case 5187:
      return Y + e + B(e, /(\w+).+(:[^]+)/, Y + "box-$1$2" + be + "flex-$1$2") + e;
    case 5443:
      return Y + e + be + "flex-item-" + B(e, /flex-|-self/, "") + e;
    case 4675:
      return Y + e + be + "flex-line-pack" + B(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Y + e + be + B(e, "shrink", "negative") + e;
    case 5292:
      return Y + e + be + B(e, "basis", "preferred-size") + e;
    case 6060:
      return Y + "box-" + B(e, "-grow", "") + Y + e + be + B(e, "grow", "positive") + e;
    case 4554:
      return Y + B(e, /([^-])(transform)/g, "$1" + Y + "$2") + e;
    case 6187:
      return B(B(B(e, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return B(e, /(image-set\([^]*)/, Y + "$1$`$1");
    case 4968:
      return B(B(e, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + be + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Y + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return B(e, /(.+)-inline(.+)/, Y + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Fe(e) - 1 - r > 6) switch (ye(e, r + 1)) {
        case 109:
          if (ye(e, r + 4) !== 45) break;
        case 102:
          return B(e, /(.+:)(.+)-([^]+)/, "$1" + Y + "$2-$3$1" + Mr + (ye(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~_t(e, "stretch") ? Oo(B(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    case 4949:
      if (ye(e, r + 1) !== 115) break;
    case 6444:
      switch (ye(e, Fe(e) - 3 - (~_t(e, "!important") && 10))) {
        case 107:
          return B(e, ":", ":" + Y) + e;
        case 101:
          return B(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Y + (ye(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Y + "$2$3$1" + be + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ye(e, r + 11)) {
        case 114:
          return Y + e + be + B(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Y + e + be + B(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Y + e + be + B(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Y + e + be + e + e;
  }
  return e;
}
var ds = function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case At:
      r.return = Oo(r.value, r.length);
      break;
    case bo:
      return nr([pr(r, {
        value: B(r.value, "@", "@" + Y)
      })], o);
    case Pt:
      if (r.length) return Hi(r.props, function(a) {
        switch (Gi(a, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return nr([pr(r, {
              props: [B(a, /:(read-\w+)/, ":" + Mr + "$1")]
            })], o);
          case "::placeholder":
            return nr([pr(r, {
              props: [B(a, /:(plac\w+)/, ":" + Y + "input-$1")]
            }), pr(r, {
              props: [B(a, /:(plac\w+)/, ":" + Mr + "$1")]
            }), pr(r, {
              props: [B(a, /:(plac\w+)/, be + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, ps = [ds], wo = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(d) {
      var h = d.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || ps, a = {}, i, u = [];
  i = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(d) {
      for (var h = d.getAttribute("data-emotion").split(" "), x = 1; x < h.length; x++)
        a[h[x]] = !0;
      u.push(d);
    }
  );
  var c, l = [ls, fs];
  {
    var f, m = [os, is(function(d) {
      f.insert(d);
    })], p = as(l.concat(o, m)), _ = function(h) {
      return nr(ts(h), p);
    };
    c = function(h, x, T, R) {
      f = T, _(h ? h + "{" + x.styles + "}" : x.styles), R && (b.inserted[x.name] = !0);
    };
  }
  var b = {
    key: t,
    sheet: new Vi({
      key: t,
      container: i,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: a,
    registered: {},
    insert: c
  };
  return b.sheet.hydrate(u), b;
}, To = Tt(), ms = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, hs = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ro = {};
Ro[To.ForwardRef] = ms;
Ro[To.Memo] = hs;
var ys = !0;
function vs(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var $o = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ys === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, Co = function(r, t, n) {
  $o(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var a = t;
    do
      r.insert(t === a ? "." + o : "", a, r.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function gs(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var bs = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, _s = !1, Es = /[A-Z]|^ms/g, Ss = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Po = function(r) {
  return r.charCodeAt(1) === 45;
}, Fn = function(r) {
  return r != null && typeof r != "boolean";
}, pt = /* @__PURE__ */ vo(function(e) {
  return Po(e) ? e : e.replace(Es, "-$&").toLowerCase();
}), Ln = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Ss, function(n, o, a) {
          return Le = {
            name: o,
            styles: a,
            next: Le
          }, o;
        });
  }
  return bs[r] !== 1 && !Po(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, xs = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function br(e, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var o = t;
      if (o.anim === 1)
        return Le = {
          name: o.name,
          styles: o.styles,
          next: Le
        }, o.name;
      var a = t;
      if (a.styles !== void 0) {
        var i = a.next;
        if (i !== void 0)
          for (; i !== void 0; )
            Le = {
              name: i.name,
              styles: i.styles,
              next: Le
            }, i = i.next;
        var u = a.styles + ";";
        return u;
      }
      return Os(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var c = Le, l = t(e);
        return Le = c, br(e, r, l);
      }
      break;
    }
  }
  var f = t;
  if (r == null)
    return f;
  var m = r[f];
  return m !== void 0 ? m : f;
}
function Os(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += br(e, r, t[o]) + ";";
  else
    for (var a in t) {
      var i = t[a];
      if (typeof i != "object") {
        var u = i;
        r != null && r[u] !== void 0 ? n += a + "{" + r[u] + "}" : Fn(u) && (n += pt(a) + ":" + Ln(a, u) + ";");
      } else {
        if (a === "NO_COMPONENT_SELECTOR" && _s)
          throw new Error(xs);
        if (Array.isArray(i) && typeof i[0] == "string" && (r == null || r[i[0]] === void 0))
          for (var c = 0; c < i.length; c++)
            Fn(i[c]) && (n += pt(a) + ":" + Ln(a, i[c]) + ";");
        else {
          var l = br(e, r, i);
          switch (a) {
            case "animation":
            case "animationName": {
              n += pt(a) + ":" + l + ";";
              break;
            }
            default:
              n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var zn = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Le;
function jt(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Le = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    n = !1, o += br(t, r, a);
  else {
    var i = a;
    o += i[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += br(t, r, e[u]), n) {
      var c = a;
      o += c[u];
    }
  zn.lastIndex = 0;
  for (var l = "", f; (f = zn.exec(o)) !== null; )
    l += "-" + f[1];
  var m = gs(o) + l;
  return {
    name: m,
    styles: o,
    next: Le
  };
}
var ws = function(r) {
  return r();
}, Ao = q.useInsertionEffect ? q.useInsertionEffect : !1, Ts = Ao || ws, Wn = Ao || q.useLayoutEffect, ko = /* @__PURE__ */ q.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ wo({
    key: "css"
  }) : null
), Rs = ko.Provider, jo = function(r) {
  return /* @__PURE__ */ Ma(function(t, n) {
    var o = Da(ko);
    return r(t, o, n);
  });
}, It = /* @__PURE__ */ q.createContext({}), $s = /* @__PURE__ */ jo(function(e, r) {
  var t = e.styles, n = jt([t], void 0, q.useContext(It)), o = q.useRef();
  return Wn(function() {
    var a = r.key + "-global", i = new r.sheet.constructor({
      key: a,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), u = !1, c = document.querySelector('style[data-emotion="' + a + " " + n.name + '"]');
    return r.sheet.tags.length && (i.before = r.sheet.tags[0]), c !== null && (u = !0, c.setAttribute("data-emotion", a), i.hydrate([c])), o.current = [i, u], function() {
      i.flush();
    };
  }, [r]), Wn(function() {
    var a = o.current, i = a[0], u = a[1];
    if (u) {
      a[1] = !1;
      return;
    }
    if (n.next !== void 0 && Co(r, n.next, !0), i.tags.length) {
      var c = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = c, i.flush();
    }
    r.insert("", n, i, !1);
  }, [r, n.name]), null;
});
function Io() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return jt(r);
}
var Cs = function() {
  var r = Io.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Ps = Fi, As = function(r) {
  return r !== "theme";
}, Vn = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Ps : As;
}, qn = function(r, t, n) {
  var o;
  if (t) {
    var a = t.shouldForwardProp;
    o = r.__emotion_forwardProp && a ? function(i) {
      return r.__emotion_forwardProp(i) && a(i);
    } : a;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, ks = !1, js = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return $o(t, n, o), Ts(function() {
    return Co(t, n, o);
  }), null;
}, Is = function e(r, t) {
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, a, i;
  t !== void 0 && (a = t.label, i = t.target);
  var u = qn(r, t, n), c = u || Vn(o), l = !c("as");
  return function() {
    var f = arguments, m = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (a !== void 0 && m.push("label:" + a + ";"), f[0] == null || f[0].raw === void 0)
      m.push.apply(m, f);
    else {
      m.push(f[0][0]);
      for (var p = f.length, _ = 1; _ < p; _++)
        m.push(f[_], f[0][_]);
    }
    var b = jo(function(d, h, x) {
      var T = l && d.as || o, R = "", z = [], y = d;
      if (d.theme == null) {
        y = {};
        for (var W in d)
          y[W] = d[W];
        y.theme = q.useContext(It);
      }
      typeof d.className == "string" ? R = vs(h.registered, z, d.className) : d.className != null && (R = d.className + " ");
      var j = jt(m.concat(z), h.registered, y);
      R += h.key + "-" + j.name, i !== void 0 && (R += " " + i);
      var Ee = l && u === void 0 ? Vn(T) : c, ve = {};
      for (var ge in d)
        l && ge === "as" || Ee(ge) && (ve[ge] = d[ge]);
      return ve.className = R, x && (ve.ref = x), /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(js, {
        cache: h,
        serialized: j,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ q.createElement(T, ve));
    });
    return b.displayName = a !== void 0 ? a : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = r.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = m, b.__emotion_forwardProp = u, Object.defineProperty(b, "toString", {
      value: function() {
        return i === void 0 && ks ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), b.withComponent = function(d, h) {
      return e(d, Z({}, t, h, {
        shouldForwardProp: qn(b, h, !0)
      })).apply(void 0, m);
    }, b;
  };
}, Ms = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], St = Is.bind();
Ms.forEach(function(e) {
  St[e] = St(e);
});
let xt;
typeof document == "object" && (xt = wo({
  key: "css",
  prepend: !0
}));
function Mo(e) {
  const {
    injectFirst: r,
    children: t
  } = e;
  return r && xt ? /* @__PURE__ */ ee.jsx(Rs, {
    value: xt,
    children: t
  }) : t;
}
process.env.NODE_ENV !== "production" && (Mo.propTypes = {
  /**
   * Your component tree.
   */
  children: M.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: M.bool
});
function Ds(e) {
  return e == null || Object.keys(e).length === 0;
}
function Do(e) {
  const {
    styles: r,
    defaultTheme: t = {}
  } = e, n = typeof r == "function" ? (o) => r(Ds(o) ? t : o) : r;
  return /* @__PURE__ */ ee.jsx($s, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (Do.propTypes = {
  defaultTheme: M.object,
  styles: M.oneOfType([M.array, M.string, M.object, M.func])
});
/**
 * @mui/styled-engine v5.16.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ns(e, r) {
  const t = St(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const Fs = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Do,
  StyledEngineProvider: Mo,
  ThemeContext: It,
  css: Io,
  default: Ns,
  internal_processStyles: Fs,
  keyframes: Cs
}, Symbol.toStringTag, { value: "Module" })), zs = /* @__PURE__ */ Ue(Ls), Ws = /* @__PURE__ */ Ue(Wa), Vs = /* @__PURE__ */ Ue(ni), qs = /* @__PURE__ */ Ue(ti), Us = ["values", "unit", "step"], Ys = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => Z({}, t, {
    [n.key]: n.val
  }), {});
};
function No(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = Ke(e, Us), a = Ys(r), i = Object.keys(a);
  function u(p) {
    return `@media (min-width:${typeof r[p] == "number" ? r[p] : p}${t})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof r[p] == "number" ? r[p] : p) - n / 100}${t})`;
  }
  function l(p, _) {
    const b = i.indexOf(_);
    return `@media (min-width:${typeof r[p] == "number" ? r[p] : p}${t}) and (max-width:${(b !== -1 && typeof r[i[b]] == "number" ? r[i[b]] : _) - n / 100}${t})`;
  }
  function f(p) {
    return i.indexOf(p) + 1 < i.length ? l(p, i[i.indexOf(p) + 1]) : u(p);
  }
  function m(p) {
    const _ = i.indexOf(p);
    return _ === 0 ? u(i[1]) : _ === i.length - 1 ? c(i[_]) : l(p, i[i.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return Z({
    keys: i,
    values: a,
    up: u,
    down: c,
    between: l,
    only: f,
    not: m,
    unit: t
  }, o);
}
const Bs = {
  borderRadius: 4
}, Ge = process.env.NODE_ENV !== "production" ? M.oneOfType([M.number, M.string, M.object, M.array]) : {};
function hr(e, r) {
  return r ? ze(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Mt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Un = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Mt[e]}px)`
};
function qe(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const a = n.breakpoints || Un;
    return r.reduce((i, u, c) => (i[a.up(a.keys[c])] = t(r[c]), i), {});
  }
  if (typeof r == "object") {
    const a = n.breakpoints || Un;
    return Object.keys(r).reduce((i, u) => {
      if (Object.keys(a.values || Mt).indexOf(u) !== -1) {
        const c = a.up(u);
        i[c] = t(r[u], u);
      } else {
        const c = u;
        i[c] = r[c];
      }
      return i;
    }, {});
  }
  return t(r);
}
function Ks(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const a = e.up(o);
    return n[a] = {}, n;
  }, {})) || {};
}
function Gs(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function qr(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, a) => o && o[a] ? o[a] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Dr(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = qr(e, t) || n, r && (o = r(o, n, e)), o;
}
function ue(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, a = (i) => {
    if (i[r] == null)
      return null;
    const u = i[r], c = i.theme, l = qr(c, n) || {};
    return qe(i, u, (m) => {
      let p = Dr(l, o, m);
      return m === p && typeof m == "string" && (p = Dr(l, o, `${r}${m === "default" ? "" : Be(m)}`, m)), t === !1 ? p : {
        [t]: p
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Ge
  } : {}, a.filterProps = [r], a;
}
function Hs(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const Xs = {
  m: "margin",
  p: "padding"
}, Js = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Yn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Zs = Hs((e) => {
  if (e.length > 2)
    if (Yn[e])
      e = Yn[e];
    else
      return [e];
  const [r, t] = e.split(""), n = Xs[r], o = Js[t] || "";
  return Array.isArray(o) ? o.map((a) => n + a) : [n + o];
}), Ur = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Yr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Qs = [...Ur, ...Yr];
function xr(e, r, t, n) {
  var o;
  const a = (o = qr(e, r, !1)) != null ? o : t;
  return typeof a == "number" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), a * i) : Array.isArray(a) ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > a.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(a)}.`, `${i} > ${a.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), a[i]) : typeof a == "function" ? a : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${a}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Fo(e) {
  return xr(e, "spacing", 8, "spacing");
}
function Or(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function eu(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = Or(r, t), n), {});
}
function ru(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = Zs(t), a = eu(o, n), i = e[t];
  return qe(e, i, a);
}
function Lo(e, r) {
  const t = Fo(e.theme);
  return Object.keys(e).map((n) => ru(e, r, n, t)).reduce(hr, {});
}
function oe(e) {
  return Lo(e, Ur);
}
oe.propTypes = process.env.NODE_ENV !== "production" ? Ur.reduce((e, r) => (e[r] = Ge, e), {}) : {};
oe.filterProps = Ur;
function ae(e) {
  return Lo(e, Yr);
}
ae.propTypes = process.env.NODE_ENV !== "production" ? Yr.reduce((e, r) => (e[r] = Ge, e), {}) : {};
ae.filterProps = Yr;
process.env.NODE_ENV !== "production" && Qs.reduce((e, r) => (e[r] = Ge, e), {});
function tu(e = 8) {
  if (e.mui)
    return e;
  const r = Fo({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((a) => {
    const i = r(a);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return t.mui = !0, t;
}
function Br(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((a) => {
    n[a] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, a) => r[a] ? hr(o, r[a](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function ke(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ie(e, r) {
  return ue({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const nu = Ie("border", ke), ou = Ie("borderTop", ke), au = Ie("borderRight", ke), iu = Ie("borderBottom", ke), su = Ie("borderLeft", ke), uu = Ie("borderColor"), cu = Ie("borderTopColor"), lu = Ie("borderRightColor"), fu = Ie("borderBottomColor"), du = Ie("borderLeftColor"), pu = Ie("outline", ke), mu = Ie("outlineColor"), Kr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = xr(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Or(r, n)
    });
    return qe(e, e.borderRadius, t);
  }
  return null;
};
Kr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ge
} : {};
Kr.filterProps = ["borderRadius"];
Br(nu, ou, au, iu, su, uu, cu, lu, fu, du, Kr, pu, mu);
const Gr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = xr(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Or(r, n)
    });
    return qe(e, e.gap, t);
  }
  return null;
};
Gr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ge
} : {};
Gr.filterProps = ["gap"];
const Hr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = xr(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Or(r, n)
    });
    return qe(e, e.columnGap, t);
  }
  return null;
};
Hr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ge
} : {};
Hr.filterProps = ["columnGap"];
const Xr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = xr(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Or(r, n)
    });
    return qe(e, e.rowGap, t);
  }
  return null;
};
Xr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ge
} : {};
Xr.filterProps = ["rowGap"];
const hu = ue({
  prop: "gridColumn"
}), yu = ue({
  prop: "gridRow"
}), vu = ue({
  prop: "gridAutoFlow"
}), gu = ue({
  prop: "gridAutoColumns"
}), bu = ue({
  prop: "gridAutoRows"
}), _u = ue({
  prop: "gridTemplateColumns"
}), Eu = ue({
  prop: "gridTemplateRows"
}), Su = ue({
  prop: "gridTemplateAreas"
}), xu = ue({
  prop: "gridArea"
});
Br(Gr, Hr, Xr, hu, yu, vu, gu, bu, _u, Eu, Su, xu);
function or(e, r) {
  return r === "grey" ? r : e;
}
const Ou = ue({
  prop: "color",
  themeKey: "palette",
  transform: or
}), wu = ue({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: or
}), Tu = ue({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: or
});
Br(Ou, wu, Tu);
function Re(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ru = ue({
  prop: "width",
  transform: Re
}), Dt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o;
      const a = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || Mt[t];
      return a ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${a}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: a
      } : {
        maxWidth: Re(t)
      };
    };
    return qe(e, e.maxWidth, r);
  }
  return null;
};
Dt.filterProps = ["maxWidth"];
const $u = ue({
  prop: "minWidth",
  transform: Re
}), Cu = ue({
  prop: "height",
  transform: Re
}), Pu = ue({
  prop: "maxHeight",
  transform: Re
}), Au = ue({
  prop: "minHeight",
  transform: Re
});
ue({
  prop: "size",
  cssProperty: "width",
  transform: Re
});
ue({
  prop: "size",
  cssProperty: "height",
  transform: Re
});
const ku = ue({
  prop: "boxSizing"
});
Br(Ru, Dt, $u, Cu, Pu, Au, ku);
const ju = {
  // borders
  border: {
    themeKey: "borders",
    transform: ke
  },
  borderTop: {
    themeKey: "borders",
    transform: ke
  },
  borderRight: {
    themeKey: "borders",
    transform: ke
  },
  borderBottom: {
    themeKey: "borders",
    transform: ke
  },
  borderLeft: {
    themeKey: "borders",
    transform: ke
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: ke
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Kr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: or
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: or
  },
  backgroundColor: {
    themeKey: "palette",
    transform: or
  },
  // spacing
  p: {
    style: ae
  },
  pt: {
    style: ae
  },
  pr: {
    style: ae
  },
  pb: {
    style: ae
  },
  pl: {
    style: ae
  },
  px: {
    style: ae
  },
  py: {
    style: ae
  },
  padding: {
    style: ae
  },
  paddingTop: {
    style: ae
  },
  paddingRight: {
    style: ae
  },
  paddingBottom: {
    style: ae
  },
  paddingLeft: {
    style: ae
  },
  paddingX: {
    style: ae
  },
  paddingY: {
    style: ae
  },
  paddingInline: {
    style: ae
  },
  paddingInlineStart: {
    style: ae
  },
  paddingInlineEnd: {
    style: ae
  },
  paddingBlock: {
    style: ae
  },
  paddingBlockStart: {
    style: ae
  },
  paddingBlockEnd: {
    style: ae
  },
  m: {
    style: oe
  },
  mt: {
    style: oe
  },
  mr: {
    style: oe
  },
  mb: {
    style: oe
  },
  ml: {
    style: oe
  },
  mx: {
    style: oe
  },
  my: {
    style: oe
  },
  margin: {
    style: oe
  },
  marginTop: {
    style: oe
  },
  marginRight: {
    style: oe
  },
  marginBottom: {
    style: oe
  },
  marginLeft: {
    style: oe
  },
  marginX: {
    style: oe
  },
  marginY: {
    style: oe
  },
  marginInline: {
    style: oe
  },
  marginInlineStart: {
    style: oe
  },
  marginInlineEnd: {
    style: oe
  },
  marginBlock: {
    style: oe
  },
  marginBlockStart: {
    style: oe
  },
  marginBlockEnd: {
    style: oe
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Gr
  },
  rowGap: {
    style: Xr
  },
  columnGap: {
    style: Hr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Re
  },
  maxWidth: {
    style: Dt
  },
  minWidth: {
    transform: Re
  },
  height: {
    transform: Re
  },
  maxHeight: {
    transform: Re
  },
  minHeight: {
    transform: Re
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, wr = ju;
function Iu(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Mu(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function zo() {
  function e(t, n, o, a) {
    const i = {
      [t]: n,
      theme: o
    }, u = a[t];
    if (!u)
      return {
        [t]: n
      };
    const {
      cssProperty: c = t,
      themeKey: l,
      transform: f,
      style: m
    } = u;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const p = qr(o, l) || {};
    return m ? m(i) : qe(i, n, (b) => {
      let d = Dr(p, f, b);
      return b === d && typeof b == "string" && (d = Dr(p, f, `${t}${b === "default" ? "" : Be(b)}`, b)), c === !1 ? d : {
        [c]: d
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: a = {}
    } = t || {};
    if (!o)
      return null;
    const i = (n = a.unstable_sxConfig) != null ? n : wr;
    function u(c) {
      let l = c;
      if (typeof c == "function")
        l = c(a);
      else if (typeof c != "object")
        return c;
      if (!l)
        return null;
      const f = Ks(a.breakpoints), m = Object.keys(f);
      let p = f;
      return Object.keys(l).forEach((_) => {
        const b = Mu(l[_], a);
        if (b != null)
          if (typeof b == "object")
            if (i[_])
              p = hr(p, e(_, b, a, i));
            else {
              const d = qe({
                theme: a
              }, b, (h) => ({
                [_]: h
              }));
              Iu(d, b) ? p[_] = r({
                sx: b,
                theme: a
              }) : p = hr(p, d);
            }
          else
            p = hr(p, e(_, b, a, i));
      }), Gs(m, p);
    }
    return Array.isArray(o) ? o.map(u) : u(o);
  }
  return r;
}
const Wo = zo();
Wo.filterProps = ["sx"];
const Nt = Wo;
function Vo(e, r) {
  const t = this;
  return t.vars && typeof t.getColorSchemeSelector == "function" ? {
    [t.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: r
  } : t.palette.mode === e ? r : {};
}
const Du = ["breakpoints", "palette", "spacing", "shape"];
function qo(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: a = {}
  } = e, i = Ke(e, Du), u = No(t), c = tu(o);
  let l = ze({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: Z({
      mode: "light"
    }, n),
    spacing: c,
    shape: Z({}, Bs, a)
  }, i);
  return l.applyStyles = Vo, l = r.reduce((f, m) => ze(f, m), l), l.unstable_sxConfig = Z({}, wr, i == null ? void 0 : i.unstable_sxConfig), l.unstable_sx = function(m) {
    return Nt({
      sx: m,
      theme: this
    });
  }, l;
}
const Nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qo,
  private_createBreakpoints: No,
  unstable_applyStyles: Vo
}, Symbol.toStringTag, { value: "Module" })), Fu = /* @__PURE__ */ Ue(Nu), Lu = ["sx"], zu = (e) => {
  var r, t;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (r = e == null || (t = e.theme) == null ? void 0 : t.unstable_sxConfig) != null ? r : wr;
  return Object.keys(e).forEach((a) => {
    o[a] ? n.systemProps[a] = e[a] : n.otherProps[a] = e[a];
  }), n;
};
function Wu(e) {
  const {
    sx: r
  } = e, t = Ke(e, Lu), {
    systemProps: n,
    otherProps: o
  } = zu(t);
  let a;
  return Array.isArray(r) ? a = [n, ...r] : typeof r == "function" ? a = (...i) => {
    const u = r(...i);
    return Ye(u) ? Z({}, n, u) : n;
  } : a = Z({}, n, r), Z({}, o, {
    sx: a
  });
}
const Vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nt,
  extendSxProp: Wu,
  unstable_createStyleFunctionSx: zo,
  unstable_defaultSxConfig: wr
}, Symbol.toStringTag, { value: "Module" })), qu = /* @__PURE__ */ Ue(Vu);
var sr = me;
Object.defineProperty(Er, "__esModule", {
  value: !0
});
var Uu = Er.default = oc;
Er.shouldForwardProp = jr;
Er.systemDefaultTheme = void 0;
var Ae = sr(Mi()), Ot = sr(Di()), Bn = Qu(zs), Yu = Ws, Bu = sr(Vs), Ku = sr(qs), Gu = sr(Fu), Hu = sr(qu);
const Xu = ["ownerState"], Ju = ["variants"], Zu = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Uo(e) {
  if (typeof WeakMap != "function") return null;
  var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
  return (Uo = function(n) {
    return n ? t : r;
  })(e);
}
function Qu(e, r) {
  if (e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var t = Uo(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a];
  }
  return n.default = e, t && t.set(e, n), n;
}
function ec(e) {
  return Object.keys(e).length === 0;
}
function rc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function jr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const tc = Er.systemDefaultTheme = (0, Gu.default)(), Kn = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Cr({
  defaultTheme: e,
  theme: r,
  themeId: t
}) {
  return ec(r) ? e : r[t] || r;
}
function nc(e) {
  return e ? (r, t) => t[e] : null;
}
function Ir(e, r) {
  let {
    ownerState: t
  } = r, n = (0, Ot.default)(r, Xu);
  const o = typeof e == "function" ? e((0, Ae.default)({
    ownerState: t
  }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((a) => Ir(a, (0, Ae.default)({
      ownerState: t
    }, n)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: a = []
    } = o;
    let u = (0, Ot.default)(o, Ju);
    return a.forEach((c) => {
      let l = !0;
      typeof c.props == "function" ? l = c.props((0, Ae.default)({
        ownerState: t
      }, n, t)) : Object.keys(c.props).forEach((f) => {
        (t == null ? void 0 : t[f]) !== c.props[f] && n[f] !== c.props[f] && (l = !1);
      }), l && (Array.isArray(u) || (u = [u]), u.push(typeof c.style == "function" ? c.style((0, Ae.default)({
        ownerState: t
      }, n, t)) : c.style));
    }), u;
  }
  return o;
}
function oc(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = tc,
    rootShouldForwardProp: n = jr,
    slotShouldForwardProp: o = jr
  } = e, a = (i) => (0, Hu.default)((0, Ae.default)({}, i, {
    theme: Cr((0, Ae.default)({}, i, {
      defaultTheme: t,
      themeId: r
    }))
  }));
  return a.__mui_systemSx = !0, (i, u = {}) => {
    (0, Bn.internal_processStyles)(i, (y) => y.filter((W) => !(W != null && W.__mui_systemSx)));
    const {
      name: c,
      slot: l,
      skipVariantsResolver: f,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = nc(Kn(l))
    } = u, _ = (0, Ot.default)(u, Zu), b = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), d = m || !1;
    let h;
    process.env.NODE_ENV !== "production" && c && (h = `${c}-${Kn(l || "Root")}`);
    let x = jr;
    l === "Root" || l === "root" ? x = n : l ? x = o : rc(i) && (x = void 0);
    const T = (0, Bn.default)(i, (0, Ae.default)({
      shouldForwardProp: x,
      label: h
    }, _)), R = (y) => typeof y == "function" && y.__emotion_real !== y || (0, Yu.isPlainObject)(y) ? (W) => Ir(y, (0, Ae.default)({}, W, {
      theme: Cr({
        theme: W.theme,
        defaultTheme: t,
        themeId: r
      })
    })) : y, z = (y, ...W) => {
      let j = R(y);
      const Ee = W ? W.map(R) : [];
      c && p && Ee.push((te) => {
        const de = Cr((0, Ae.default)({}, te, {
          defaultTheme: t,
          themeId: r
        }));
        if (!de.components || !de.components[c] || !de.components[c].styleOverrides)
          return null;
        const ne = de.components[c].styleOverrides, ie = {};
        return Object.entries(ne).forEach(([Te, he]) => {
          ie[Te] = Ir(he, (0, Ae.default)({}, te, {
            theme: de
          }));
        }), p(te, ie);
      }), c && !b && Ee.push((te) => {
        var de;
        const ne = Cr((0, Ae.default)({}, te, {
          defaultTheme: t,
          themeId: r
        })), ie = ne == null || (de = ne.components) == null || (de = de[c]) == null ? void 0 : de.variants;
        return Ir({
          variants: ie
        }, (0, Ae.default)({}, te, {
          theme: ne
        }));
      }), d || Ee.push(a);
      const ve = Ee.length - W.length;
      if (Array.isArray(y) && ve > 0) {
        const te = new Array(ve).fill("");
        j = [...y, ...te], j.raw = [...y.raw, ...te];
      }
      const ge = T(j, ...Ee);
      if (process.env.NODE_ENV !== "production") {
        let te;
        c && (te = `${c}${(0, Bu.default)(l || "")}`), te === void 0 && (te = `Styled(${(0, Ku.default)(i)})`), ge.displayName = te;
      }
      return i.muiName && (ge.muiName = i.muiName), ge;
    };
    return T.withConfig && (z.withConfig = T.withConfig), z;
  };
}
function ac(e, r) {
  return Z({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
var ce = {};
const ic = /* @__PURE__ */ Ue(Ja), sc = /* @__PURE__ */ Ue(Ci);
var Yo = me;
Object.defineProperty(ce, "__esModule", {
  value: !0
});
ce.alpha = Ho;
ce.blend = bc;
ce.colorChannel = void 0;
var uc = ce.darken = Lt;
ce.decomposeColor = je;
ce.emphasize = Xo;
var Gn = ce.getContrastRatio = mc;
ce.getLuminance = Nr;
ce.hexToRgb = Bo;
ce.hslToRgb = Go;
var cc = ce.lighten = zt;
ce.private_safeAlpha = hc;
ce.private_safeColorChannel = void 0;
ce.private_safeDarken = yc;
ce.private_safeEmphasize = gc;
ce.private_safeLighten = vc;
ce.recomposeColor = ur;
ce.rgbToHex = pc;
var Hn = Yo(ic), lc = Yo(sc);
function Ft(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), (0, lc.default)(e, r, t);
}
function Bo(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function fc(e) {
  const r = e.toString(16);
  return r.length === 1 ? `0${r}` : r;
}
function je(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return je(Bo(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, Hn.default)(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, Hn.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const Ko = (e) => {
  const r = je(e);
  return r.values.slice(0, 3).map((t, n) => r.type.indexOf("hsl") !== -1 && n !== 0 ? `${t}%` : t).join(" ");
};
ce.colorChannel = Ko;
const dc = (e, r) => {
  try {
    return Ko(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
ce.private_safeColorChannel = dc;
function ur(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((o, a) => a < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function pc(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: r
  } = je(e);
  return `#${r.map((t, n) => fc(n === 3 ? Math.round(255 * t) : t)).join("")}`;
}
function Go(e) {
  e = je(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, a = n * Math.min(o, 1 - o), i = (l, f = (l + t / 30) % 12) => o - a * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let u = "rgb";
  const c = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (u += "a", c.push(r[3])), ur({
    type: u,
    values: c
  });
}
function Nr(e) {
  e = je(e);
  let r = e.type === "hsl" || e.type === "hsla" ? je(Go(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function mc(e, r) {
  const t = Nr(e), n = Nr(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function Ho(e, r) {
  return e = je(e), r = Ft(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, ur(e);
}
function hc(e, r, t) {
  try {
    return Ho(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Lt(e, r) {
  if (e = je(e), r = Ft(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return ur(e);
}
function yc(e, r, t) {
  try {
    return Lt(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function zt(e, r) {
  if (e = je(e), r = Ft(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return ur(e);
}
function vc(e, r, t) {
  try {
    return zt(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Xo(e, r = 0.15) {
  return Nr(e) > 0.5 ? Lt(e, r) : zt(e, r);
}
function gc(e, r, t) {
  try {
    return Xo(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function bc(e, r, t, n = 1) {
  const o = (c, l) => Math.round((c ** (1 / n) * (1 - t) + l ** (1 / n) * t) ** n), a = je(e), i = je(r), u = [o(a.values[0], i.values[0]), o(a.values[1], i.values[1]), o(a.values[2], i.values[2])];
  return ur({
    type: "rgb",
    values: u
  });
}
const _r = {
  black: "#000",
  white: "#fff"
}, _c = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ze = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Qe = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, mr = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, er = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, rr = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, tr = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Ec = ["mode", "contrastThreshold", "tonalOffset"], Xn = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _r.white,
    default: _r.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, mt = {
  text: {
    primary: _r.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: _r.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Jn(e, r, t, n) {
  const o = n.light || n, a = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = cc(e.main, o) : r === "dark" && (e.dark = uc(e.main, a)));
}
function Sc(e = "light") {
  return e === "dark" ? {
    main: er[200],
    light: er[50],
    dark: er[400]
  } : {
    main: er[700],
    light: er[400],
    dark: er[800]
  };
}
function xc(e = "light") {
  return e === "dark" ? {
    main: Ze[200],
    light: Ze[50],
    dark: Ze[400]
  } : {
    main: Ze[500],
    light: Ze[300],
    dark: Ze[700]
  };
}
function Oc(e = "light") {
  return e === "dark" ? {
    main: Qe[500],
    light: Qe[300],
    dark: Qe[700]
  } : {
    main: Qe[700],
    light: Qe[400],
    dark: Qe[800]
  };
}
function wc(e = "light") {
  return e === "dark" ? {
    main: rr[400],
    light: rr[300],
    dark: rr[700]
  } : {
    main: rr[700],
    light: rr[500],
    dark: rr[900]
  };
}
function Tc(e = "light") {
  return e === "dark" ? {
    main: tr[400],
    light: tr[300],
    dark: tr[700]
  } : {
    main: tr[800],
    light: tr[500],
    dark: tr[900]
  };
}
function Rc(e = "light") {
  return e === "dark" ? {
    main: mr[400],
    light: mr[300],
    dark: mr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: mr[500],
    dark: mr[900]
  };
}
function $c(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = Ke(e, Ec), a = e.primary || Sc(r), i = e.secondary || xc(r), u = e.error || Oc(r), c = e.info || wc(r), l = e.success || Tc(r), f = e.warning || Rc(r);
  function m(d) {
    const h = Gn(d, mt.text.primary) >= t ? mt.text.primary : Xn.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = Gn(d, h);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${h} on ${d}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return h;
  }
  const p = ({
    color: d,
    name: h,
    mainShade: x = 500,
    lightShade: T = 300,
    darkShade: R = 700
  }) => {
    if (d = Z({}, d), !d.main && d[x] && (d.main = d[x]), !d.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : yr(11, h ? ` (${h})` : "", x));
    if (typeof d.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(d.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : yr(12, h ? ` (${h})` : "", JSON.stringify(d.main)));
    return Jn(d, "light", T, n), Jn(d, "dark", R, n), d.contrastText || (d.contrastText = m(d.main)), d;
  }, _ = {
    dark: mt,
    light: Xn
  };
  return process.env.NODE_ENV !== "production" && (_[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), ze(Z({
    // A collection of common colors.
    common: Z({}, _r),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: i,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: _c,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, _[r]), o);
}
const Cc = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Pc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Zn = {
  textTransform: "uppercase"
}, Qn = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ac(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = Qn,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: a = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: u = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: m
  } = t, p = Ke(t, Cc);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const _ = o / 14, b = m || ((x) => `${x / l * _}rem`), d = (x, T, R, z, y) => Z({
    fontFamily: n,
    fontWeight: x,
    fontSize: b(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R
  }, n === Qn ? {
    letterSpacing: `${Pc(z / T)}em`
  } : {}, y, f), h = {
    h1: d(a, 96, 1.167, -1.5),
    h2: d(a, 60, 1.2, -0.5),
    h3: d(i, 48, 1.167, 0),
    h4: d(i, 34, 1.235, 0.25),
    h5: d(i, 24, 1.334, 0),
    h6: d(u, 20, 1.6, 0.15),
    subtitle1: d(i, 16, 1.75, 0.15),
    subtitle2: d(u, 14, 1.57, 0.1),
    body1: d(i, 16, 1.5, 0.15),
    body2: d(i, 14, 1.43, 0.15),
    button: d(u, 14, 1.75, 0.4, Zn),
    caption: d(i, 12, 1.66, 0.4),
    overline: d(i, 12, 2.66, 1, Zn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ze(Z({
    htmlFontSize: l,
    pxToRem: b,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: a,
    fontWeightRegular: i,
    fontWeightMedium: u,
    fontWeightBold: c
  }, h), p, {
    clone: !1
    // No need to clone deep
  });
}
const kc = 0.2, jc = 0.14, Ic = 0.12;
function re(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${kc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${jc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ic})`].join(",");
}
const Mc = ["none", re(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), re(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), re(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), re(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), re(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), re(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), re(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), re(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), re(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), re(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), re(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), re(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), re(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), re(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), re(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), re(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), re(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), re(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), re(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), re(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), re(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), re(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), re(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), re(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Dc = ["duration", "easing", "delay"], Nc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Fc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function eo(e) {
  return `${Math.round(e)}ms`;
}
function Lc(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function zc(e) {
  const r = Z({}, Nc, e.easing), t = Z({}, Fc, e.duration);
  return Z({
    getAutoHeightDuration: Lc,
    create: (o = ["all"], a = {}) => {
      const {
        duration: i = t.standard,
        easing: u = r.easeInOut,
        delay: c = 0
      } = a, l = Ke(a, Dc);
      if (process.env.NODE_ENV !== "production") {
        const f = (p) => typeof p == "string", m = (p) => !isNaN(parseFloat(p));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(i) && !f(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), f(u) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof i == "string" ? i : eo(i)} ${u} ${typeof c == "string" ? c : eo(c)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const Wc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Vc = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function qc(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: a = {}
  } = e, i = Ke(e, Vc);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : yr(18));
  const u = $c(n), c = qo(e);
  let l = ze(c, {
    mixins: ac(c.breakpoints, t),
    palette: u,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Mc.slice(),
    typography: Ac(u, a),
    transitions: zc(o),
    zIndex: Z({}, Wc)
  });
  if (l = ze(l, i), l = r.reduce((f, m) => ze(f, m), l), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (p, _) => {
      let b;
      for (b in p) {
        const d = p[b];
        if (f.indexOf(b) !== -1 && Object.keys(d).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const h = Ct("", b);
            console.error([`MUI: The \`${_}\` component increases the CSS specificity of the \`${b}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${h}' syntax:`, JSON.stringify({
              root: {
                [`&.${h}`]: d
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[b] = {};
        }
      }
    };
    Object.keys(l.components).forEach((p) => {
      const _ = l.components[p].styleOverrides;
      _ && p.indexOf("Mui") === 0 && m(_, p);
    });
  }
  return l.unstable_sxConfig = Z({}, wr, i == null ? void 0 : i.unstable_sxConfig), l.unstable_sx = function(m) {
    return Nt({
      sx: m,
      theme: this
    });
  }, l;
}
const Uc = qc(), Yc = "$$material";
function Bc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Kc = (e) => Bc(e) && e !== "classes", Gc = Uu({
  themeId: Yc,
  defaultTheme: Uc,
  rootShouldForwardProp: Kc
});
function Hc(e) {
  return Ct("MuiSvgIcon", e);
}
Ri("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Xc = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Jc = (e) => {
  const {
    color: r,
    fontSize: t,
    classes: n
  } = e, o = {
    root: ["root", r !== "inherit" && `color${Be(r)}`, `fontSize${Be(t)}`]
  };
  return Oi(o, Hc, n);
}, Zc = Gc("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, t.color !== "inherit" && r[`color${Be(t.color)}`], r[`fontSize${Be(t.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: r
}) => {
  var t, n, o, a, i, u, c, l, f, m, p, _, b;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: r.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (t = e.transitions) == null || (n = t.create) == null ? void 0 : n.call(t, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((a = e.typography) == null || (i = a.pxToRem) == null ? void 0 : i.call(a, 20)) || "1.25rem",
      medium: ((u = e.typography) == null || (c = u.pxToRem) == null ? void 0 : c.call(u, 24)) || "1.5rem",
      large: ((l = e.typography) == null || (f = l.pxToRem) == null ? void 0 : f.call(l, 35)) || "2.1875rem"
    }[r.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (m = (p = (e.vars || e).palette) == null || (p = p[r.color]) == null ? void 0 : p.main) != null ? m : {
      action: (_ = (e.vars || e).palette) == null || (_ = _.action) == null ? void 0 : _.active,
      disabled: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.disabled,
      inherit: void 0
    }[r.color]
  };
}), Fr = /* @__PURE__ */ q.forwardRef(function(r, t) {
  const n = Ii({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: a,
    color: i = "inherit",
    component: u = "svg",
    fontSize: c = "medium",
    htmlColor: l,
    inheritViewBox: f = !1,
    titleAccess: m,
    viewBox: p = "0 0 24 24"
  } = n, _ = Ke(n, Xc), b = /* @__PURE__ */ q.isValidElement(o) && o.type === "svg", d = Z({}, n, {
    color: i,
    component: u,
    fontSize: c,
    instanceFontSize: r.fontSize,
    inheritViewBox: f,
    viewBox: p,
    hasSvgAsChild: b
  }), h = {};
  f || (h.viewBox = p);
  const x = Jc(d);
  return /* @__PURE__ */ ee.jsxs(Zc, Z({
    as: u,
    className: Pi(x.root, a),
    focusable: "false",
    color: l,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: t
  }, h, _, b && o.props, {
    ownerState: d,
    children: [b ? o.props.children : o, m ? /* @__PURE__ */ ee.jsx("title", {
      children: m
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Fr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: M.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: M.object,
  /**
   * @ignore
   */
  className: M.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: M.oneOfType([M.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), M.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: M.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: M.oneOfType([M.oneOf(["inherit", "large", "medium", "small"]), M.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: M.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: M.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: M.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: M.oneOfType([M.arrayOf(M.oneOfType([M.func, M.object, M.bool])), M.func, M.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: M.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: M.string
});
Fr.muiName = "SvgIcon";
function Qc(e, r) {
  function t(n, o) {
    return /* @__PURE__ */ ee.jsx(Fr, Z({
      "data-testid": `${r}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (t.displayName = `${r}Icon`), t.muiName = Fr.muiName, /* @__PURE__ */ q.memo(/* @__PURE__ */ q.forwardRef(t));
}
const el = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), ho.configure(e);
  }
}, rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: Be,
  createChainedFunction: oi,
  createSvgIcon: Qc,
  debounce: ai,
  deprecatedPropType: ii,
  isMuiElement: si,
  ownerDocument: fo,
  ownerWindow: ui,
  requirePropFactory: ci,
  setRef: po,
  unstable_ClassNameGenerator: el,
  unstable_useEnhancedEffect: mo,
  unstable_useId: fi,
  unsupportedProp: di,
  useControlled: pi,
  useEventCallback: mi,
  useForkRef: hi,
  useIsFocusVisible: xi
}, Symbol.toStringTag, { value: "Module" })), tl = /* @__PURE__ */ Ue(rl);
var ro;
function _e() {
  return ro || (ro = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return r.createSvgIcon;
      }
    });
    var r = tl;
  }(nt)), nt;
}
var nl = me;
Object.defineProperty(wt, "__esModule", {
  value: !0
});
var Jo = wt.default = void 0, ol = nl(_e()), al = ee;
Jo = wt.default = (0, ol.default)(/* @__PURE__ */ (0, al.jsx)("path", {
  d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
}), "ArrowForward");
var Wt = {}, il = me;
Object.defineProperty(Wt, "__esModule", {
  value: !0
});
var Zo = Wt.default = void 0, sl = il(_e()), ul = ee;
Zo = Wt.default = (0, sl.default)(/* @__PURE__ */ (0, ul.jsx)("path", {
  d: "M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8"
}), "Face");
var Vt = {}, cl = me;
Object.defineProperty(Vt, "__esModule", {
  value: !0
});
var Qo = Vt.default = void 0, ll = cl(_e()), fl = ee;
Qo = Vt.default = (0, ll.default)(/* @__PURE__ */ (0, fl.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
}), "CheckCircle");
var qt = {}, dl = me;
Object.defineProperty(qt, "__esModule", {
  value: !0
});
var ea = qt.default = void 0, pl = dl(_e()), ml = ee;
ea = qt.default = (0, pl.default)(/* @__PURE__ */ (0, ml.jsx)("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), "Check");
var Ut = {}, hl = me;
Object.defineProperty(Ut, "__esModule", {
  value: !0
});
var ra = Ut.default = void 0, yl = hl(_e()), vl = ee;
ra = Ut.default = (0, yl.default)(/* @__PURE__ */ (0, vl.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"
}), "Cancel");
var Yt = {}, gl = me;
Object.defineProperty(Yt, "__esModule", {
  value: !0
});
var ta = Yt.default = void 0, bl = gl(_e()), _l = ee;
ta = Yt.default = (0, bl.default)(/* @__PURE__ */ (0, _l.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
var Bt = {}, El = me;
Object.defineProperty(Bt, "__esModule", {
  value: !0
});
var na = Bt.default = void 0, Sl = El(_e()), xl = ee;
na = Bt.default = (0, Sl.default)(/* @__PURE__ */ (0, xl.jsx)("path", {
  d: "M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"
}), "ArrowBackIos");
var Kt = {}, Ol = me;
Object.defineProperty(Kt, "__esModule", {
  value: !0
});
var oa = Kt.default = void 0, wl = Ol(_e()), Tl = ee;
oa = Kt.default = (0, wl.default)(/* @__PURE__ */ (0, Tl.jsx)("path", {
  d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
}), "ArrowForwardIos");
var Gt = {}, Rl = me;
Object.defineProperty(Gt, "__esModule", {
  value: !0
});
var aa = Gt.default = void 0, $l = Rl(_e()), Cl = ee;
aa = Gt.default = (0, $l.default)(/* @__PURE__ */ (0, Cl.jsx)("path", {
  d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), "ChevronLeft");
var Ht = {}, Pl = me;
Object.defineProperty(Ht, "__esModule", {
  value: !0
});
var ia = Ht.default = void 0, Al = Pl(_e()), kl = ee;
ia = Ht.default = (0, Al.default)(/* @__PURE__ */ (0, kl.jsx)("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "ChevronRight");
var Xt = {}, jl = me;
Object.defineProperty(Xt, "__esModule", {
  value: !0
});
var sa = Xt.default = void 0, Il = jl(_e()), Ml = ee;
sa = Xt.default = (0, Il.default)(/* @__PURE__ */ (0, Ml.jsx)("path", {
  d: "M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15z"
}), "UnfoldMore");
var Jt = {}, Dl = me;
Object.defineProperty(Jt, "__esModule", {
  value: !0
});
var ua = Jt.default = void 0, Nl = Dl(_e()), Fl = ee;
ua = Jt.default = (0, Nl.default)(/* @__PURE__ */ (0, Fl.jsx)("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), "KeyboardArrowUp");
var Zt = {}, Ll = me;
Object.defineProperty(Zt, "__esModule", {
  value: !0
});
var ca = Zt.default = void 0, zl = Ll(_e()), Wl = ee;
ca = Zt.default = (0, zl.default)(/* @__PURE__ */ (0, Wl.jsx)("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
}), "KeyboardArrowDown");
var Qt = {}, Vl = me;
Object.defineProperty(Qt, "__esModule", {
  value: !0
});
var la = Qt.default = void 0, ql = Vl(_e()), Ul = ee;
la = Qt.default = (0, ql.default)(/* @__PURE__ */ (0, Ul.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
}), "Info");
var en = {}, Yl = me;
Object.defineProperty(en, "__esModule", {
  value: !0
});
var fa = en.default = void 0, Bl = Yl(_e()), Kl = ee;
fa = en.default = (0, Bl.default)(/* @__PURE__ */ (0, Kl.jsx)("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "Search");
var rn = {}, Gl = me;
Object.defineProperty(rn, "__esModule", {
  value: !0
});
var da = rn.default = void 0, Hl = Gl(_e()), Xl = ee;
da = rn.default = (0, Hl.default)(/* @__PURE__ */ (0, Xl.jsx)("path", {
  d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), "DragIndicator");
const to = {
  ArrowForwardIcon: Jo,
  FaceIcon: Zo,
  CheckCircleIcon: Qo,
  CheckIcon: ea,
  CancelIcon: ra,
  CloseIcon: ta,
  ArrowBackIosIcon: na,
  ArrowForwardIosIcon: oa,
  ChevronLeftIcon: aa,
  ChevronRightIcon: ia,
  UnfoldMoreIcon: sa,
  KeyboardArrowUpIcon: ua,
  KeyboardArrowDownIcon: ca,
  InfoIcon: la,
  SearchIcon: fa,
  DragIndicatorIcon: da
}, Zl = ({
  children: e,
  showRightIcon: r = !0,
  leftDivider: t = !0,
  rightDivider: n = !0,
  showLeftIcon: o = !0,
  leftIcon: a,
  rightIcon: i,
  type: u = "solid",
  variant: c = "primary",
  ...l
}) => {
  const f = za("button", {
    [`${u}`]: u,
    [`${c}`]: c
  }), m = a ? to[a] : null, p = i ? to[i] : null;
  return /* @__PURE__ */ ee.jsxs("button", { className: f, ...l, children: [
    o && m && /* @__PURE__ */ ee.jsx(m, { className: "left-icon" }),
    t && /* @__PURE__ */ ee.jsx("div", { className: "divider" }),
    e,
    n && /* @__PURE__ */ ee.jsx("div", { className: "divider" }),
    r && p && /* @__PURE__ */ ee.jsx(p, { className: "right-icon" })
  ] });
};
export {
  Zl as Button
};
