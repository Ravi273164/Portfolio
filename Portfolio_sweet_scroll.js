/*!
 * sweet-scroll
 * Modern and the sweet smooth scroll library.
 * @author tsuyoshiwada
 * @license MIT
 * @version 2.2.0
 */
!(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : (t.SweetScroll = n());
})(this, function () {
  "use strict";
  function t(t) {
    return null == t
      ? ""
      : "object" === ("undefined" == typeof t ? "undefined" : St(t)) ||
        "function" == typeof t
      ? wt[Object.prototype.toString.call(t)] || "object"
      : "undefined" == typeof t
      ? "undefined"
      : St(t);
  }
  function n(n) {
    return "number" === t(n);
  }
  function e(n) {
    return "string" === t(n);
  }
  function i(n) {
    return "function" === t(n);
  }
  function o(t) {
    return Array.isArray(t);
  }
  function r(t) {
    var e = null == t ? null : t.length;
    return n(e) && e >= 0 && e <= bt;
  }
  function l(t) {
    return !o(t) && t - parseFloat(t) + 1 >= 0;
  }
  function u(n) {
    return !o(n) && "object" === t(n);
  }
  function a(t, n) {
    return t && t.hasOwnProperty(n);
  }
  function s(t, n, e) {
    if (null == t) return t;
    var i = e || t;
    if (u(t)) {
      for (var o in t) if (a(t, o) && n.call(i, t[o], o) === !1) break;
    } else if (r(t)) for (var l = 0; l < t.length && n.call(i, t[l], l) !== !1; l++);
    return t;
  }
  function c(t) {
    for (
      var n = arguments.length, e = Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      e[i - 1] = arguments[i];
    return (
      s(e, function (n) {
        s(n, function (n, e) {
          t[e] = n;
        });
      }),
      t
    );
  }
  function h(t) {
    return t.replace(/\s*/g, "") || "";
  }
  function f(t) {
    "undefined" != typeof console &&
      "function" == typeof console.error &&
      console.error(t);
    try {
      throw new Error(t);
    } catch (t) {}
  }
  function p(t) {
    var n =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (t) return (null == n ? xt : n).querySelector(t);
  }
  function d(t) {
    var n =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (t) return (null == n ? xt : n).querySelectorAll(t);
  }
  function v(t, n) {
    for (
      var e = (t.document || t.ownerDocument).querySelectorAll(n), i = e.length;
      --i >= 0 && e.item(i) !== t;

    );
    return i > -1;
  }
  function g(t) {
    return t === xt.documentElement || t === xt.body;
  }
  function y() {
    var t = _t.outerWidth,
      n = _t.innerWidth;
    return t ? t / n : 1;
  }
  function S(t) {
    for (
      var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y",
        e = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        i = Lt[n],
        o = t instanceof Element ? [t] : d(t),
        r = [],
        l = xt.createElement("div"),
        u = 0;
      u < o.length;
      u++
    ) {
      var a = o[u];
      if (
        (a[i] > 0
          ? r.push(a)
          : ((l.style.width = a.clientWidth + 1 + "px"),
            (l.style.height = a.clientHeight + 1 + "px"),
            a.appendChild(l),
            (a[i] = 1.5 / y()),
            a[i] > 0 && r.push(a),
            (a[i] = 0),
            a.removeChild(l)),
        !e && r.length > 0)
      )
        break;
    }
    return r;
  }
  function m(t, n) {
    var e = S(t, n, !1);
    return e.length >= 1 ? e[0] : null;
  }
  function k(t) {
    return null != t && t === t.window ? t : 9 === t.nodeType && t.defaultView;
  }
  function b(t) {
    return vt(t.scrollHeight, t.clientHeight, t.offsetHeight);
  }
  function C(t) {
    return vt(t.scrollWidth, t.clientWidth, t.offsetWidth);
  }
  function w(t) {
    return { width: C(t), height: b(t) };
  }
  function O() {
    return {
      width: vt(C(xt.body), C(xt.documentElement)),
      height: vt(b(xt.body), b(xt.documentElement)),
    };
  }
  function I(t) {
    return g(t)
      ? {
          viewport: {
            width: gt(_t.innerWidth, xt.documentElement.clientWidth),
            height: _t.innerHeight,
          },
          size: O(),
        }
      : {
          viewport: { width: t.clientWidth, height: t.clientHeight },
          size: w(t),
        };
  }
  function _(t) {
    var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y",
      e = k(t);
    return e ? e[Et[n]] : t[Lt[n]];
  }
  function x(t, n) {
    var e =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "y",
      i = k(t),
      o = "y" === e;
    i ? i.scrollTo(o ? i[Et.x] : n, o ? n : i[Et.y]) : (t[Lt[e]] = n);
  }
  function L(t) {
    var n =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (!t || (t && !t.getClientRects().length)) return { top: 0, left: 0 };
    var e = t.getBoundingClientRect();
    if (e.width || e.height) {
      var i = {},
        o = null;
      if (null == n || g(n))
        (o = t.ownerDocument.documentElement),
          (i.top = _t.pageYOffset),
          (i.left = _t.pageXOffset);
      else {
        o = n;
        var r = o.getBoundingClientRect();
        (i.top = r.top * -1 + o.scrollTop),
          (i.left = r.left * -1 + o.scrollLeft);
      }
      return {
        top: e.top + i.top - o.clientTop,
        left: e.left + i.left - o.clientLeft,
      };
    }
    return e;
  }
  function E(t, n, e) {
    var i = n.split(",");
    i.forEach(function (n) {
      t.addEventListener(n.trim(), e, !1);
    });
  }
  function A(t, n, e) {
    var i = n.split(",");
    i.forEach(function (n) {
      t.removeEventListener(n.trim(), e, !1);
    });
  }
  function M(t) {
    return t;
  }
  function R(t, n, e, i, o) {
    return i * (n /= o) * n + e;
  }
  function T(t, n, e, i, o) {
    return -i * (n /= o) * (n - 2) + e;
  }
  function z(t, n, e, i, o) {
    return (n /= o / 2) < 1
      ? (i / 2) * n * n + e
      : (-i / 2) * (--n * (n - 2) - 1) + e;
  }
  function q(t, n, e, i, o) {
    return i * (n /= o) * n * n + e;
  }
  function D(t, n, e, i, o) {
    return i * ((n = n / o - 1) * n * n + 1) + e;
  }
  function P(t, n, e, i, o) {
    return (n /= o / 2) < 1
      ? (i / 2) * n * n * n + e
      : (i / 2) * ((n -= 2) * n * n + 2) + e;
  }
  function Q(t, n, e, i, o) {
    return i * (n /= o) * n * n * n + e;
  }
  function W(t, n, e, i, o) {
    return -i * ((n = n / o - 1) * n * n * n - 1) + e;
  }
  function j(t, n, e, i, o) {
    return (n /= o / 2) < 1
      ? (i / 2) * n * n * n * n + e
      : (-i / 2) * ((n -= 2) * n * n * n - 2) + e;
  }
  function B(t, n, e, i, o) {
    return i * (n /= o) * n * n * n * n + e;
  }
  function H(t, n, e, i, o) {
    return i * ((n = n / o - 1) * n * n * n * n + 1) + e;
  }
  function N(t, n, e, i, o) {
    return (n /= o / 2) < 1
      ? (i / 2) * n * n * n * n * n + e
      : (i / 2) * ((n -= 2) * n * n * n * n + 2) + e;
  }
  function F(t, n, e, i, o) {
    return -i * at((n / o) * (dt / 2)) + i + e;
  }
  function U(t, n, e, i, o) {
    return i * st((n / o) * (dt / 2)) + e;
  }
  function $(t, n, e, i, o) {
    return (-i / 2) * (at((dt * n) / o) - 1) + e;
  }
  function X(t, n, e, i, o) {
    return 0 === n ? e : i * ct(2, 10 * (n / o - 1)) + e;
  }
  function Y(t, n, e, i, o) {
    return n === o ? e + i : i * (-ct(2, (-10 * n) / o) + 1) + e;
  }
  function J(t, n, e, i, o) {
    return 0 === n
      ? e
      : n === o
      ? e + i
      : (n /= o / 2) < 1
      ? (i / 2) * ct(2, 10 * (n - 1)) + e
      : (i / 2) * (-ct(2, -10 * --n) + 2) + e;
  }
  function V(t, n, e, i, o) {
    return -i * (ft(1 - (n /= o) * n) - 1) + e;
  }
  function G(t, n, e, i, o) {
    return i * ft(1 - (n = n / o - 1) * n) + e;
  }
  function K(t, n, e, i, o) {
    return (n /= o / 2) < 1
      ? (-i / 2) * (ft(1 - n * n) - 1) + e
      : (i / 2) * (ft(1 - (n -= 2) * n) + 1) + e;
  }
  function Z(t, n, e, i, o) {
    var r = 1.70158,
      l = 0,
      u = i;
    return 0 === n
      ? e
      : 1 === (n /= o)
      ? e + i
      : (l || (l = 0.3 * o),
        u < ht(i) ? ((u = i), (r = l / 4)) : (r = (l / (2 * dt)) * pt(i / u)),
        -(u * ct(2, 10 * (n -= 1)) * st(((n * o - r) * (2 * dt)) / l)) + e);
  }
  function tt(t, n, e, i, o) {
    var r = 1.70158,
      l = 0,
      u = i;
    return 0 === n
      ? e
      : 1 === (n /= o)
      ? e + i
      : (l || (l = 0.3 * o),
        u < ht(i) ? ((u = i), (r = l / 4)) : (r = (l / (2 * dt)) * pt(i / u)),
        u * ct(2, -10 * n) * st(((n * o - r) * (2 * dt)) / l) + i + e);
  }
  function nt(t, n, e, i, o) {
    var r = 1.70158,
      l = 0,
      u = i;
    return 0 === n
      ? e
      : 2 === (n /= o / 2)
      ? e + i
      : (l || (l = o * (0.3 * 1.5)),
        u < ht(i) ? ((u = i), (r = l / 4)) : (r = (l / (2 * dt)) * pt(i / u)),
        n < 1
          ? -0.5 *
              (u * ct(2, 10 * (n -= 1)) * st(((n * o - r) * (2 * dt)) / l)) +
            e
          : u * ct(2, -10 * (n -= 1)) * st(((n * o - r) * (2 * dt)) / l) * 0.5 +
            i +
            e);
  }
  function et(t, n, e, i, o) {
    var r =
      arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1.70158;
    return i * (n /= o) * n * ((r + 1) * n - r) + e;
  }
  function it(t, n, e, i, o) {
    var r =
      arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1.70158;
    return i * ((n = n / o - 1) * n * ((r + 1) * n + r) + 1) + e;
  }
  function ot(t, n, e, i, o) {
    var r =
      arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1.70158;
    return (n /= o / 2) < 1
      ? (i / 2) * (n * n * (((r *= 1.525) + 1) * n - r)) + e
      : (i / 2) * ((n -= 2) * n * (((r *= 1.525) + 1) * n + r) + 2) + e;
  }
  function rt(t, n, e, i, o) {
    return (n /= o) < 1 / 2.75
      ? i * (7.5625 * n * n) + e
      : n < 2 / 2.75
      ? i * (7.5625 * (n -= 1.5 / 2.75) * n + 0.75) + e
      : n < 2.5 / 2.75
      ? i * (7.5625 * (n -= 2.25 / 2.75) * n + 0.9375) + e
      : i * (7.5625 * (n -= 2.625 / 2.75) * n + 0.984375) + e;
  }
  function lt(t, n, e, i, o) {
    return i - rt(t, o - n, 0, i, o) + e;
  }
  function ut(t, n, e, i, o) {
    return n < o / 2
      ? 0.5 * lt(t, 2 * n, 0, i, o) + e
      : 0.5 * rt(t, 2 * n - o, 0, i, o) + 0.5 * i + e;
  }
  var at = Math.cos,
    st = Math.sin,
    ct = Math.pow,
    ht = Math.abs,
    ft = Math.sqrt,
    pt = Math.asin,
    dt = Math.PI,
    vt = Math.max,
    gt = Math.min,
    yt = Math.round,
    St =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          },
    mt = function (t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    },
    kt = (function () {
      function t(t, n) {
        for (var e = 0; e < n.length; e++) {
          var i = n[e];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (n, e, i) {
        return e && t(n.prototype, e), i && t(n, i), n;
      };
    })(),
    bt = ct(2, 53) - 1,
    Ct = ["Boolean", "Number", "String", "Function", "Array", "Object"],
    wt = {};
  Ct.forEach(function (t) {
    wt["[object " + t + "]"] = t.toLowerCase();
  });
  var Ot = !(
      "undefined" == typeof window ||
      !window.document ||
      !window.document.createElement
    ),
    It = (function () {
      if (!Ot) return !1;
      var t = navigator.userAgent;
      return (
        ((t.indexOf("Android 2.") === -1 && t.indexOf("Android 4.0") === -1) ||
          t.indexOf("Mobile Safari") === -1 ||
          t.indexOf("Chrome") !== -1 ||
          t.indexOf("Windows Phone") !== -1) &&
        window.history &&
        "pushState" in window.history &&
        "file:" !== window.location.protocol
      );
    })(),
    _t = Ot ? window : null,
    xt = Ot ? document : null,
    Lt = { y: "scrollTop", x: "scrollLeft" },
    Et = { y: "pageYOffset", x: "pageXOffset" },
    At = Object.freeze({
      linear: M,
      InQuad: R,
      OutQuad: T,
      InOutQuad: z,
      InCubic: q,
      OutCubic: D,
      InOutCubic: P,
      InQuart: Q,
      OutQuart: W,
      InOutQuart: j,
      InQuint: B,
      OutQuint: H,
      InOutQuint: N,
      InSine: F,
      OutSine: U,
      InOutSine: $,
      InExpo: X,
      OutExpo: Y,
      InOutExpo: J,
      InCirc: V,
      OutCirc: G,
      InOutCirc: K,
      InElastic: Z,
      OutElastic: tt,
      InOutElastic: nt,
      InBack: et,
      OutBack: it,
      InOutBack: ot,
      OutBounce: rt,
      InBounce: lt,
      InOutBounce: ut,
    }),
    Mt = ["ms", "moz", "webkit"],
    Rt = 0,
    Tt = Ot ? _t.requestAnimationFrame : null,
    zt = Ot ? _t.cancelAnimationFrame : null;
  if (Ot) {
    for (var qt = 0; qt < Mt.length && !Tt; ++qt)
      (Tt = _t[Mt[qt] + "RequestAnimationFrame"]),
        (zt =
          _t[Mt[qt] + "CancelAnimationFrame"] ||
          _t[Mt[qt] + "CancelRequestAnimationFrame"]);
    Tt ||
      (Tt = function (t) {
        var n = Date.now(),
          e = vt(0, 16 - (n - Rt)),
          i = setTimeout(function () {
            t(n + e);
          }, e);
        return (Rt = n + e), i;
      }),
      zt ||
        (zt = function (t) {
          clearTimeout(t);
        });
  }
  var Dt = (function () {
      function t(n) {
        mt(this, t),
          (this.el = n),
          (this.props = {}),
          (this.options = {}),
          (this.progress = !1),
          (this.easing = null),
          (this.startTime = null),
          (this.rafId = null);
      }
      return (
        kt(t, [
          {
            key: "run",
            value: function (t, n, e) {
              var o = this;
              this.progress ||
                ((this.props = { x: t, y: n }),
                (this.options = e),
                (this.easing = i(e.easing)
                  ? e.easing
                  : At[e.easing.replace("ease", "")]),
                (this.progress = !0),
                setTimeout(function () {
                  (o.startProps = o.calcStartProps(t, n)),
                    (o.rafId = Tt(function (t) {
                      return o._loop(t);
                    }));
                }, this.options.delay));
            },
          },
          {
            key: "stop",
            value: function () {
              var t =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                n = this.options.complete;
              (this.startTime = null),
                (this.progress = !1),
                zt(this.rafId),
                t &&
                  (x(this.el, this.props.x, "x"),
                  x(this.el, this.props.y, "y")),
                i(n) && (n.call(this), (this.options.complete = null));
            },
          },
          {
            key: "_loop",
            value: function (t) {
              var n = this;
              if ((this.startTime || (this.startTime = t), !this.progress))
                return void this.stop(!1);
              var e = this.el,
                i = this.props,
                o = this.options,
                r = this.startTime,
                l = this.startProps,
                u = this.easing,
                a = o.duration,
                c = o.step,
                h = {},
                f = t - r,
                p = gt(1, vt(f / a, 0));
              s(i, function (t, n) {
                var e = l[n],
                  i = t - e;
                if (0 === i) return !0;
                var o = u(p, a * p, 0, 1, a);
                h[n] = yt(e + i * o);
              }),
                s(h, function (t, n) {
                  x(e, t, n);
                }),
                f <= a
                  ? (c.call(this, p, h),
                    (this.rafId = Tt(function (t) {
                      return n._loop(t);
                    })))
                  : this.stop(!0);
            },
          },
          {
            key: "calcStartProps",
            value: function (t, n) {
              var e = { x: _(this.el, "x"), y: _(this.el, "y") };
              if (this.options.quickMode) {
                var i = I(this.el),
                  o = i.viewport,
                  r = o.width,
                  l = o.height;
                ht(e.y - n) > l && (e.y = e.y > n ? n + l : n - l),
                  ht(e.x - t) > r && (e.x = e.x > t ? t + r : t - r);
              }
              return e;
            },
          },
        ]),
        t
      );
    })(),
    Pt = (function () {
      return Ot
        ? "onwheel" in xt
          ? "wheel"
          : "onmousewheel" in xt
          ? "mousewheel"
          : "DOMMouseScroll"
        : "wheel";
    })(),
    Qt = Pt + ", touchstart, touchmove",
    Wt = (function () {
      function t() {
        var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "body, html";
        mt(this, t),
          (this.isSSR = !Ot),
          (this.options = c({}, t.defaults, n)),
          (this.container = this.getContainer(e)),
          null == this.container
            ? ((this.header = null),
              (this.tween = null),
              this.isSSR ||
                (/comp|inter|loaded/.test(xt.readyState)
                  ? this.log('Not found scrollable container. => "' + e + '"')
                  : this.log(
                      "Should be initialize later than DOMContentLoaded."
                    )))
            : ((this.header = p(this.options.header)),
              (this.tween = new Dt(this.container)),
              (this._trigger = null),
              (this._shouldCallCancelScroll = !1),
              this.bindContainerClick());
      }
      return (
        kt(t, [
          {
            key: "log",
            value: function (t) {
              this.options.outputLog && f("[SweetScroll] " + t);
            },
          },
          {
            key: "getScrollOffset",
            value: function (t, n) {
              var i = this.container,
                o = this.header,
                r = this.parseCoodinate(n.offset),
                l = this.parseCoodinate(t);
              if (!l && e(t))
                if ("#" === t) l = { top: 0, left: 0 };
                else {
                  var u = p(t),
                    a = L(u, i);
                  if (!a) return;
                  l = a;
                }
              return l
                ? (r && ((l.top += r.top), (l.left += r.left)),
                  o && (l.top = vt(0, l.top - w(o).height)),
                  l)
                : null;
            },
          },
          {
            key: "normalizeScrollOffset",
            value: function (t, n) {
              var e = this.container,
                i = c({}, t),
                o = I(e),
                r = o.viewport,
                l = o.size;
              return (
                (i.top = n.verticalScroll
                  ? vt(0, gt(l.height - r.height, i.top))
                  : _(e, "y")),
                (i.left = n.horizontalScroll
                  ? vt(0, gt(l.width - r.width, i.left))
                  : _(e, "x")),
                i
              );
            },
          },
          {
            key: "to",
            value: function (t) {
              var n = this,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (!this.isSSR) {
                var o = this.container,
                  r = c({}, this.options, i),
                  l = this._trigger,
                  u = e(t) && /^#/.test(t) ? t : null;
                if (
                  ((this._options = r),
                  (this._trigger = null),
                  (this._shouldCallCancelScroll = !1),
                  this.stop(),
                  !o)
                )
                  return this.log("Not found container element.");
                var a = this.getScrollOffset(t, r);
                if (!a)
                  return this.log("Invalid parameter of distance. => " + t);
                if (this.hook(r, "beforeScroll", a, l) === !1)
                  return void (this._options = null);
                (a = this.normalizeScrollOffset(a, r)),
                  this.tween.run(a.left, a.top, {
                    duration: r.duration,
                    delay: r.delay,
                    easing: r.easing,
                    quickMode: r.quickMode,
                    complete: function () {
                      null != u &&
                        u !== _t.location.hash &&
                        n.updateURLHash(u, r.updateURL),
                        n.unbindContainerStop(),
                        (n._options = null),
                        n._shouldCallCancelScroll
                          ? n.hook(r, "cancelScroll")
                          : n.hook(r, "afterScroll", a, l),
                        n.hook(r, "completeScroll", n._shouldCallCancelScroll);
                    },
                    step: function (t, e) {
                      n.hook(r, "stepScroll", t, e);
                    },
                  }),
                  this.bindContainerStop();
              }
            },
          },
          {
            key: "toTop",
            value: function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              this.to(
                t,
                c({}, n, { verticalScroll: !0, horizontalScroll: !1 })
              );
            },
          },
          {
            key: "toLeft",
            value: function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              this.to(
                t,
                c({}, n, { verticalScroll: !1, horizontalScroll: !0 })
              );
            },
          },
          {
            key: "toElement",
            value: function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (!this.isSSR)
                if (t instanceof Element) {
                  var e = L(t, this.container);
                  this.to(e, c({}, n));
                } else this.log("Invalid parameter.");
            },
          },
          {
            key: "stop",
            value: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              this.isSSR ||
                (this.container
                  ? (this._stopScrollListener &&
                      (this._shouldCallCancelScroll = !0),
                    this.tween.stop(t))
                  : this.log("Not found scrollable container."));
            },
          },
          {
            key: "update",
            value: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              this.container
                ? (this.stop(),
                  this.unbindContainerClick(),
                  this.unbindContainerStop(),
                  (this.options = c({}, this.options, t)),
                  (this.header = p(this.options.header)),
                  this.bindContainerClick())
                : this.isSSR || this.log("Not found scrollable container.");
            },
          },
          {
            key: "destroy",
            value: function () {
              this.container
                ? (this.stop(),
                  this.unbindContainerClick(),
                  this.unbindContainerStop(),
                  (this.container = null),
                  (this.header = null),
                  (this.tween = null))
                : this.isSSR || this.log("Not found scrollable container.");
            },
          },
          {
            key: "beforeScroll",
            value: function (t, n) {
              return !0;
            },
          },
          { key: "cancelScroll", value: function () {} },
          { key: "afterScroll", value: function (t, n) {} },
          { key: "completeScroll", value: function (t) {} },
          { key: "stepScroll", value: function (t, n) {} },
          {
            key: "parseCoodinate",
            value: function (t) {
              var n = this._options
                  ? this._options.verticalScroll
                  : this.options.verticalScroll,
                i = { top: 0, left: 0 };
              if (a(t, "top") || a(t, "left")) i = c(i, t);
              else if (o(t))
                2 === t.length
                  ? ((i.top = t[0]), (i.left = t[1]))
                  : ((i.top = n ? t[0] : 0), (i.left = n ? 0 : t[0]));
              else if (l(t)) (i.top = n ? t : 0), (i.left = n ? 0 : t);
              else {
                if (!e(t)) return null;
                var r = h(t);
                if (/^\d+,\d+$/.test(r))
                  (r = r.split(",")), (i.top = r[0]), (i.left = r[1]);
                else if (/^(top|left):\d+,?(?:(top|left):\d+)?$/.test(r)) {
                  var u = r.match(/top:(\d+)/),
                    s = r.match(/left:(\d+)/);
                  (i.top = u ? u[1] : 0), (i.left = s ? s[1] : 0);
                } else {
                  if (!this.container || !/^(\+|-)=(\d+)$/.test(r)) return null;
                  var f = _(this.container, n ? "y" : "x"),
                    p = r.match(/^(\+|-)=(\d+)$/),
                    d = p[1],
                    v = parseInt(p[2], 10);
                  "+" === d
                    ? ((i.top = n ? f + v : 0), (i.left = n ? 0 : f + v))
                    : ((i.top = n ? f - v : 0), (i.left = n ? 0 : f - v));
                }
              }
              return (
                (i.top = parseInt(i.top, 10)),
                (i.left = parseInt(i.left, 10)),
                i
              );
            },
          },
          {
            key: "updateURLHash",
            value: function (t, n) {
              !this.isSSR &&
                It &&
                n &&
                _t.history["replace" === n ? "replaceState" : "pushState"](
                  null,
                  null,
                  t
                );
            },
          },
          {
            key: "getContainer",
            value: function (t) {
              var n = this.options,
                e = n.verticalScroll,
                i = n.horizontalScroll,
                o = null;
              return this.isSSR
                ? o
                : (e && (o = m(t, "y")), !o && i && (o = m(t, "x")), o);
            },
          },
          {
            key: "bindContainerClick",
            value: function () {
              var t = this.container;
              t &&
                ((this._containerClickListener =
                  this.handleContainerClick.bind(this)),
                E(t, "click", this._containerClickListener));
            },
          },
          {
            key: "unbindContainerClick",
            value: function () {
              var t = this.container;
              t &&
                this._containerClickListener &&
                (A(t, "click", this._containerClickListener),
                (this._containerClickListener = null));
            },
          },
          {
            key: "bindContainerStop",
            value: function () {
              var t = this.container;
              t &&
                ((this._stopScrollListener = this.handleStopScroll.bind(this)),
                E(t, Qt, this._stopScrollListener));
            },
          },
          {
            key: "unbindContainerStop",
            value: function () {
              var t = this.container;
              t &&
                this._stopScrollListener &&
                (A(t, Qt, this._stopScrollListener),
                (this._stopScrollListener = null));
            },
          },
          {
            key: "hook",
            value: function (t, n) {
              for (
                var e = t[n],
                  o = arguments.length,
                  r = Array(o > 2 ? o - 2 : 0),
                  l = 2;
                l < o;
                l++
              )
                r[l - 2] = arguments[l];
              if (i(e)) {
                var u = e.apply(this, r);
                if ("undefined" == typeof u) return u;
              }
              return this[n].apply(this, r);
            },
          },
          {
            key: "handleStopScroll",
            value: function (t) {
              var n = this._options
                ? this._options.stopScroll
                : this.options.stopScroll;
              n ? this.stop() : t.preventDefault();
            },
          },
          {
            key: "handleContainerClick",
            value: function (t) {
              for (
                var n = this.options, e = t.target;
                e && e !== xt;
                e = e.parentNode
              )
                if (v(e, n.trigger)) {
                  var i = e.getAttribute("data-scroll"),
                    o = this.parseDataOptions(e),
                    r = i || e.getAttribute("href");
                  (n = c({}, n, o)),
                    n.preventDefault && t.preventDefault(),
                    n.stopPropagation && t.stopPropagation(),
                    (this._trigger = e),
                    n.horizontalScroll && n.verticalScroll
                      ? this.to(r, n)
                      : n.verticalScroll
                      ? this.toTop(r, n)
                      : n.horizontalScroll && this.toLeft(r, n);
                }
            },
          },
          {
            key: "parseDataOptions",
            value: function (t) {
              var n = t.getAttribute("data-scroll-options");
              return n ? JSON.parse(n) : {};
            },
          },
        ]),
        t
      );
    })();
  return (
    (Wt.defaults = {
      trigger: "[data-scroll]",
      header: "[data-scroll-header]",
      duration: 1e3,
      delay: 0,
      easing: "easeOutQuint",
      offset: 0,
      verticalScroll: !0,
      horizontalScroll: !1,
      stopScroll: !0,
      updateURL: !1,
      preventDefault: !0,
      stopPropagation: !0,
      outputLog: !1,
      quickMode: !1,
      beforeScroll: null,
      afterScroll: null,
      cancelScroll: null,
      completeScroll: null,
      stepScroll: null,
    }),
    Wt
  );
});
