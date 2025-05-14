"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var FullModal = function FullModal() {
  var _data$items;
  // This is a React component that initializes a Google Map and displays it in a div with the ID "mapdiv".
  var pages = 3;
  var steps = parseInt(100 / pages);
  var _React$useState = React.useState(1),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    page = _React$useState2[0],
    setPage = _React$useState2[1];
  var percentage = steps * page < 98 ? steps * page : 100;
  var _React$useState3 = React.useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    isShown = _React$useState4[0],
    setIsShown = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    data = _React$useState6[0],
    setData = _React$useState6[1];
  var _React$useState7 = React.useState([]),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    selectedItems = _React$useState8[0],
    setSelectedItems = _React$useState8[1];
  var _React$useState9 = React.useState(""),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    name = _React$useState0[0],
    setName = _React$useState0[1];
  var _React$useState1 = React.useState(""),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    desc = _React$useState10[0],
    setDesc = _React$useState10[1];
  var _React$useState11 = React.useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    succeded = _React$useState12[0],
    setSucceded = _React$useState12[1];
  var _React$useState13 = React.useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    loading = _React$useState14[0],
    setLoading = _React$useState14[1];
  var total = selectedItems.reduce(function (acc, item) {
    var _item$fieldData;
    return acc + (((_item$fieldData = item.fieldData) === null || _item$fieldData === void 0 ? void 0 : _item$fieldData.price) || 0);
  }, 0);
  function fetchWithErrorHandling(_x) {
    return _fetchWithErrorHandling.apply(this, arguments);
  }
  function _fetchWithErrorHandling() {
    _fetchWithErrorHandling = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
      var options,
        response,
        errorBody,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            options = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            _context3.next = 3;
            return fetch(url, options);
          case 3:
            response = _context3.sent;
            if (response.ok) {
              _context3.next = 10;
              break;
            }
            _context3.next = 7;
            return response.text();
          case 7:
            errorBody = _context3.sent;
            // Or response.json() if JSON expected
            console.log(errorBody);
            throw new Error("HTTP ".concat(response.status, ": ").concat(errorBody));
          case 10:
            return _context3.abrupt("return", response.json());
          case 11:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _fetchWithErrorHandling.apply(this, arguments);
  }
  var getData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var dev, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dev = false;
            _context.next = 3;
            return fetchWithErrorHandling("".concat(dev ? "http://localhost:3000" : "https://private-scripts.vercel.app", "/api/steps?prod=682425789f332fb83fff545c"));
          case 3:
            data = _context.sent;
            setData(data.products);
            console.log(data.products);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getData() {
      return _ref.apply(this, arguments);
    };
  }();
  var submitData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var dev, data, errorBody;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setLoading(true);
            dev = true;
            _context2.next = 4;
            return fetch("".concat(dev ? "http://localhost:3000" : "https://private-scripts.vercel.app", "/api/steps"), {
              method: "POST",
              body: JSON.stringify({
                fieldData: {
                  name: name,
                  description: desc,
                  total: total,
                  "products-2": selectedItems.map(function (item) {
                    return item.id;
                  })
                }
              })
            });
          case 4:
            data = _context2.sent;
            if (data.ok) {
              _context2.next = 12;
              break;
            }
            _context2.next = 8;
            return response.text();
          case 8:
            errorBody = _context2.sent;
            // Or response.json() if JSON expected
            console.log(errorBody);
            setLoading(false);
            return _context2.abrupt("return");
          case 12:
            setSucceded(true);
            setLoading(false);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function submitData() {
      return _ref2.apply(this, arguments);
    };
  }();
  React.useEffect(function () {
    document.getElementById("mainbtn").addEventListener("click", function () {
      // Your code here
      setIsShown(true);
    });
  }, []);
  React.useEffect(function () {
    getData();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, isShown && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000aa",
      zIndex: 999999999999999
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "xl:w-[45vw] w-[100%] xl:h-[auto] xl:min-h-[100px] min-h-[100vh] bg-white rounded-[15px] ",
    style: {
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      if (succeded) {
        setIsShown(false);
        setPage(1);
        return;
      }
      if (page > 1) {
        setPage(function (prev) {
          return prev - 1;
        });
        return;
      }
      setIsShown(false);
      setPage(1);
      setSucceded(false);
    },
    style: {
      fontSize: 16,
      color: "blue",
      textDecoration: "underline",
      marginBottom: 25,
      cursor: "pointer"
    }
  }, "Retour"), succeded && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      minHeight: 250
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.prod.website-files.com/6814fb6db4d4a1fdce33564d/68245b3f9458e9f9ae392faf_check-square-svgrepo-com%20(1).png",
    style: {
      objectFit: "contain",
      //backgroundColor: "#f5f5f5",
      width: 120,
      height: 120
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 35,
      fontWeight: "bold",
      // maxWidth: "50%",
      lineHeight: 1.1,
      color: "green",
      marginTop: 10
    }
  }, "Commande envoyée")), !succeded && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 35,
      fontWeight: "bold",
      maxWidth: "50%",
      lineHeight: 1.1,
      color: "green"
    }
  }, "Votre besoin"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: percentage
  }), page == 1 && /*#__PURE__*/React.createElement("div", {
    className: "gap-x-2 ",
    style: {
      display: "flex",
      maxWidth: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 20
    }
  }, !data && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      minHeight: 220
    }
  }, /*#__PURE__*/React.createElement(Spinner, {
    large: true
  })), data && ((_data$items = data.items) === null || _data$items === void 0 ? void 0 : _data$items.length) && data.items.map(function (item, index) {
    var _item$fieldData2;
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      style: {
        borderWidth: 0,
        borderColor: "green",
        borderRadius: 20,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("img", {
      onClick: function onClick() {
        setSelectedItems(function (prev) {
          if (prev.includes(item)) {
            return prev.filter(function (i) {
              return i != item;
            });
          }
          return [].concat(_toConsumableArray(prev), [item]);
        });
      },
      src: item === null || item === void 0 || (_item$fieldData2 = item.fieldData) === null || _item$fieldData2 === void 0 || (_item$fieldData2 = _item$fieldData2.image) === null || _item$fieldData2 === void 0 ? void 0 : _item$fieldData2.url,
      width: "100%",
      style: {
        objectFit: "cover",
        flex: 1,
        backgroundColor: "#f5f5f5"
      }
    }), selectedItems.includes(item) && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        backgroundColor: "green"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: "normal",
        lineHeight: 1.1,
        color: "#fff"
      }
    }, "Sélectionné")));
  })), page == 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      fontWeight: "bold",
      lineHeight: 1.1,
      color: "#444"
    }
  }, "Nom Complet *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nom Complet",
    value: name,
    onChange: function onChange(e) {
      e.preventDefault();
      setName(e.target.value);
    },
    style: {
      minHeight: 60,
      padding: 20,
      width: "100%",
      backgroundColor: "#eee",
      borderRadius: 10,
      marginTop: 15,
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      fontWeight: "bold",
      lineHeight: 1.1,
      color: "#444"
    }
  }, "Description de votre besoin"), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "D\xE9crivez votre besoin ici",
    value: desc,
    onChange: function onChange(e) {
      e.preventDefault();
      setDesc(e.target.value);
    },
    style: {
      minHeight: 300,
      padding: 20,
      width: "100%",
      backgroundColor: "#eee",
      borderRadius: 10,
      marginTop: 15
    }
  })), page == 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      minHeight: 250
    }
  }, " ", /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "blue",
      marginBottom: 5
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 45,
      fontWeight: "bold",
      lineHeight: 1.1,
      color: "green"
    }
  }, "".concat(total, "\u20AC")))), /*#__PURE__*/React.createElement("div", {
    className: "gap-x-2",
    style: {
      display: "flex",
      flexDirection: "row"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      if (loading) return;
      if (succeded) {
        setIsShown(false);
        setPage(1);
        setSucceded(false);
        return;
      }
      if (page == 1 && selectedItems.length == 0) {
        alert("Veuillez sélectionner au moins un produit");
        return;
      }
      if (percentage == 100) {
        submitData();
        return;
      }
      setPage(function (prev) {
        return prev + 1;
      });
    },
    className: "hover:bg-green-200 ",
    style: {
      flex: 1,
      height: 60,
      cursor: "pointer",
      border: "1px solid green",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      marginTop: 20
    }
  }, loading && /*#__PURE__*/React.createElement(Spinner, {
    noAbsolute: true
  }), !loading && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: "bold",
      lineHeight: 1.1,
      color: "green"
    }
  }, succeded ? "Fermer" : percentage == 100 ? "Envoyer" : "Suivant"))))));
};
var ProgressBar = function ProgressBar(_ref3) {
  var value = _ref3.value,
    _ref3$max = _ref3.max,
    max = _ref3$max === void 0 ? 100 : _ref3$max;
  var percentage = Math.min(Math.max(value / max * 100, 0), 100);
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-gray-200 rounded-full h-6 relative mt-[15px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-green-600 h-full rounded-full transition-all duration-300 ease-in-out",
    style: {
      width: "".concat(percentage, "%")
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute inset-0 flex items-center justify-center text-sm font-semibold text-black"
  }, Math.round(percentage), "%"));
};
var Spinner = function Spinner(_ref4) {
  var large = _ref4.large,
    noAbsolute = _ref4.noAbsolute;
  return /*#__PURE__*/React.createElement("div", {
    style: _defineProperty(_defineProperty(_defineProperty({
      display: "flex",
      width: large ? 45 : 25,
      maxWidth: large ? 45 : 25,
      height: large ? 45 : 25,
      maxHeight: large ? 45 : 25,
      position: noAbsolute ? "static" : large ? "relative" : "absolute"
    }, noAbsolute ? null : large ? null : "right", 20), "flexGrow", large ? 0 : 1), "flexShrink", 0),
    className: "spinner"
  });
};
document.getElementById("mainbtn").addEventListener("click", function () {
  // Your code here
  ReactDOM.render(/*#__PURE__*/React.createElement(FullModal, null), document.getElementById("fullmodaldiv"));
});
