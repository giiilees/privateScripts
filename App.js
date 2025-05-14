"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var App = function App() {
  // This is a React component that initializes a Google Map and displays it in a div with the ID "mapdiv".

  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hoveredDep = _React$useState2[0],
    setHoveredDep = _React$useState2[1]; // State to store the hovered department name
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    depList = _React$useState4[0],
    setDepList = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    comList = _React$useState6[0],
    setComList = _React$useState6[1];
  var _React$useState7 = React.useState(""),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    keyword = _React$useState8[0],
    setKeyword = _React$useState8[1];
  var _React$useState9 = React.useState(false),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    filteredData = _React$useState0[0],
    setFilteredData = _React$useState0[1];
  var _React$useState1 = React.useState(false),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    selectedFeature = _React$useState10[0],
    setSelectedFeature = _React$useState10[1];
  var _React$useState11 = React.useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    initialPosition = _React$useState12[0],
    setInitialPosition = _React$useState12[1];
  var _React$useState13 = React.useState([]),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    markers = _React$useState14[0],
    setMarkers = _React$useState14[1];
  var _React$useState15 = React.useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    selectedFromMap = _React$useState16[0],
    setSelectedFromMap = _React$useState16[1];
  var _React$useState17 = React.useState(false),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    selectedDep = _React$useState18[0],
    setSelectedDep = _React$useState18[1];
  var _React$useState19 = React.useState(false),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    selectedCom = _React$useState20[0],
    setSelectedCom = _React$useState20[1];
  var _React$useState21 = React.useState("province"),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    activeFilter = _React$useState22[0],
    setActiveFilter = _React$useState22[1];
  var regions = {
    idf: ["75", "77", "78", "91", "92", "93", "94", "95"],
    province: "all"
  };
  var defaultStyle = {
    fillColor: "#00990022",
    fillOpacity: 0.5,
    strokeColor: "#00990077",
    strokeWeight: 2
  };
  var _React$useState23 = React.useState(290),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    height = _React$useState24[0],
    setHeight = _React$useState24[1];
  var mapRef = React.useRef(null); // Reference to the map instance
  var innerRef = React.useRef(null);

  // Fetching data from an API
  function fetchWithErrorHandling(_x) {
    return _fetchWithErrorHandling.apply(this, arguments);
  }
  function _fetchWithErrorHandling() {
    _fetchWithErrorHandling = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
      var options,
        response,
        errorBody,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            _context2.next = 3;
            return fetch(url, options);
          case 3:
            response = _context2.sent;
            if (response.ok) {
              _context2.next = 9;
              break;
            }
            _context2.next = 7;
            return response.text();
          case 7:
            errorBody = _context2.sent;
            throw new Error("HTTP ".concat(response.status, ": ").concat(errorBody));
          case 9:
            return _context2.abrupt("return", response.json());
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
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
            return fetchWithErrorHandling("".concat(dev ? "http://localhost:3000" : "https://private-scripts.vercel.app", "/api/webflow?dep=68169726cda64534a0375de5&com=681698f19dfd03f712563c2e"));
          case 3:
            data = _context.sent;
            setDepList(data.dep);
            setComList({
              data: data.com,
              dataByDep: data.comByDep
            });
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
  var normalize = function normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };
  function getFeatureCenter(geometry) {
    // let map = mapRef.current;

    var bounds = new google.maps.LatLngBounds();
    function processGeometry(geom) {
      if (geom.getType() === "Polygon" || geom.getType() === "LinearRing") {
        geom.getArray().forEach(function (path) {
          path.getArray().forEach(function (latlng) {
            bounds.extend(latlng);
          });
        });
      } else if (geom.getType() === "MultiPolygon") {
        geom.getArray().forEach(function (polygon) {
          processGeometry(polygon);
        });
      } else if (geom.getType() === "GeometryCollection") {
        geom.getArray().forEach(function (g) {
          processGeometry(g);
        });
      }
    }
    processGeometry(geometry);
    return bounds.getCenter();
  }
  var CustomMarker = /*#__PURE__*/function (_google$maps$OverlayV) {
    function CustomMarker(position, label) {
      var _this;
      _classCallCheck(this, CustomMarker);
      _this = _callSuper(this, CustomMarker);
      _this.position = position;
      _this.label = label;
      return _this;
    }
    _inherits(CustomMarker, _google$maps$OverlayV);
    return _createClass(CustomMarker, [{
      key: "onAdd",
      value: function onAdd() {
        // Create the custom marker div element
        this.div = document.createElement("div");
        this.div.className = "custom-marker";
        this.div.innerHTML = "<div>".concat(this.label, "</div>"); // You can replace this with any HTML (e.g., an icon or label)

        // Append the custom marker to the overlay pane
        this.getPanes().overlayMouseTarget.appendChild(this.div);
      }
    }, {
      key: "draw",
      value: function draw() {
        var projection = this.getProjection();
        var point = projection.fromLatLngToDivPixel(new google.maps.LatLng(this.position));

        // Position the custom marker using the projection's coordinates
        if (this.div) {
          this.div.style.position = "absolute";
          this.div.style.left = point.x - this.div.offsetWidth / 2 + "px"; // Center horizontally
          this.div.style.top = point.y - this.div.offsetHeight + "px"; // Center vertically
        }
      }
    }, {
      key: "onRemove",
      value: function onRemove() {
        // Remove the custom marker element from the DOM when it's removed from the map
        if (this.div) {
          this.div.remove();
        }
      }
    }]);
  }(google.maps.OverlayView);
  function panWithOffset(map, latLng, offsetX, offsetY) {
    var _map$getProjection;
    var scale = Math.pow(2, map.getZoom());
    var worldCoordinateCenter = map.getProjection().fromLatLngToPoint(latLng);
    var pixelOffset = new google.maps.Point(offsetX / scale, offsetY / scale);
    var worldCoordinateNewCenter = new google.maps.Point((worldCoordinateCenter === null || worldCoordinateCenter === void 0 ? void 0 : worldCoordinateCenter.x) - (pixelOffset === null || pixelOffset === void 0 ? void 0 : pixelOffset.x), (worldCoordinateCenter === null || worldCoordinateCenter === void 0 ? void 0 : worldCoordinateCenter.y) + (pixelOffset === null || pixelOffset === void 0 ? void 0 : pixelOffset.y));
    var newCenter = (_map$getProjection = map.getProjection()) === null || _map$getProjection === void 0 ? void 0 : _map$getProjection.fromPointToLatLng(worldCoordinateNewCenter);
    map.panTo(newCenter);
    return newCenter;
  }
  function getStyle(feature) {
    var deptCode = feature.getProperty("code");
    var regionMatch = isInActiveRegion(deptCode);
    if (!regionMatch) {
      return {
        fillColor: "green",
        fillOpacity: 0,
        strokeColor: "#353E4600",
        strokeWeight: 0,
        zIndex: 1
      };
    }
    return Object.assign({}, defaultStyle);
  }
  function isInActiveRegion(code) {
    switch (activeFilter) {
      case "idf":
        return regions.idf.includes(code);
      case "province":
        return !regions.idf.includes(code);
      default:
        return true;
    }
  }
  function getIdfBounds(map) {
    var bounds = new google.maps.LatLngBounds();
    map.data.forEach(function (feature) {
      var code = feature.getProperty("code");
      if (regions.idf.includes(code)) {
        feature.getGeometry().forEachLatLng(function (latLng) {
          return bounds.extend(latLng);
        });
      }
    });
    return bounds;
  }

  // This function initializes the Google Map
  function initMap() {
    var bounds = new window.google.maps.LatLngBounds({
      lat: 41.303,
      lng: -13.142
    },
    // Southwest corner (SW)
    {
      lat: 51.124,
      lng: 5.561
    } // Northeast corner (NE)
    );
    var position = bounds.getCenter();
    setInitialPosition(position);
    var map = new google.maps.Map(document.getElementById("mapdiv"), {
      center: position,
      zoom: 5,
      //scrollwheel: false,
      zoomControl: true,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      cameraControl: false,
      styles: styles
    });
    map.data.loadGeoJson("https://france-geojson.gregoiredavid.fr/repo/departements.geojson", null, function (features) {
      // Add a custom property to store the department code
      features.forEach(function (feature) {
        feature.setProperty("code", feature.getProperty("code"));
        map.data.setStyle(function (feature) {
          return getStyle(feature);
        });
      });
    });

    // map.data.loadGeoJson(
    //   "https://france-geojson.gregoiredavid.fr/repo/regions.geojson"
    // );
    // map.data.loadGeoJson(
    //   "https://france-geojson.gregoiredavid.fr/repo/regions/ile-de-france/region-ile-de-france.geojson"
    // );
    // Style the border polygon
    map.data.setStyle({
      fillColor: "#00990022",
      fillOpacity: 0.5,
      strokeColor: "#00990077",
      strokeWeight: 2
    });

    // Add a click event listener to the map
    var mapDiv = document.getElementById("mapdiv");
    var width = mapDiv.offsetWidth;
    var height = mapDiv.offsetHeight;
    map.fitBounds(bounds);
    google.maps.event.addListenerOnce(map, "bounds_changed", function () {
      map.setZoom(6);
    });
    mapRef.current = map;

    // const marker = new CustomMarker(position, "Paris");
    // marker.setMap(map);
  }
  function zoomToDepartement(code, map, name) {
    var foundFeature = null;
    // console.log(code);

    if (name) {
      setHoveredDep(name);
    }
    map.data.forEach(function (feature) {
      // console.log(feature.getProperty("code"));
      if (feature.getProperty("code") === code) {
        foundFeature = feature;
      }
    });
    if (foundFeature) {
      // Get the geometry of the département and compute the center
      var geometry = foundFeature.getGeometry();
      var center = getFeatureCenter(geometry);
      if (selectedFeature) {
        map.data.revertStyle(selectedFeature);
      }
      map.data.overrideStyle(foundFeature, {
        fillColor: "green",
        fillOpacity: 0.9,
        strokeColor: "green",
        strokeWeight: 3
      });
      setSelectedFeature(foundFeature);

      // Zoom to the center of the département
      // map.setZoom(7);
      panWithOffset(map, center, 50, 0);
      map.setZoom(9); // Adjust the zoom level as needed
    } else {
      console.log("Département with code " + code + " not found.");
    }
  }
  var handleInputChange = function handleInputChange(event) {
    var input = event.target.value;
    setKeyword(input);
    if (!input) {
      setHeight(290);
      setFilteredData(false);
      setTimeout(function () {
        mapRef.current.setZoom(6);

        //console.log(mapRef.current);
        panWithOffset(mapRef.current, initialPosition, 60, 0);
      }, 250);
      var _iterator = _createForOfIteratorHelper(markers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var m = _step.value;
          m.setMap(null);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      setMarkers([]);
      return;
    }

    // console.log(depList.items);
    // Filter the array by the normalized input
    var filtered = depList.items.filter(function (item) {
      return normalize(item.fieldData.name).includes(normalize(input));
    }).slice(0, 5); // Limit to 5 results
    //console.log(filtered);
    setFilteredData(filtered);
  };
  React.useEffect(function () {
    var _window;
    if (window.google && (_window = window) !== null && _window !== void 0 && (_window = _window.google) !== null && _window !== void 0 && _window.maps) {
      //console.log("Start");
      initMap();
    } else {
      setTimeout(function () {
        initMap();
      }, 1200);
    }
  }, []);
  React.useEffect(function () {
    getData();
  }, []);
  React.useEffect(function () {
    if (selectedCom) {
      setHeight(1000);
      return;
    }
    if (selectedDep) {
      var _comList$dataByDep$se, _comList$dataByDep$se2;
      var _newHeight = comList !== null && comList !== void 0 && (_comList$dataByDep$se = comList.dataByDep[selectedDep === null || selectedDep === void 0 ? void 0 : selectedDep.id]) !== null && _comList$dataByDep$se !== void 0 && _comList$dataByDep$se.length ? (comList === null || comList === void 0 || (_comList$dataByDep$se2 = comList.dataByDep[selectedDep === null || selectedDep === void 0 ? void 0 : selectedDep.id]) === null || _comList$dataByDep$se2 === void 0 ? void 0 : _comList$dataByDep$se2.length) * 80 + 250 : 290;
      //console.log(newHeight);
      setHeight(_newHeight);
      return;
    }
    var newHeight = filteredData.length * 65 + 230;
    setHeight(newHeight);
  }, [filteredData, selectedDep, selectedCom]);
  React.useEffect(function () {
    if (!(mapRef !== null && mapRef !== void 0 && mapRef.current)) return;
    // Store the hovered feature for reference
    var hoveredFeature = null;

    // Hover effect
    var event = mapRef.current.data.addListener("mouseover", function (event) {
      hoveredFeature = event.feature;
      var name = event.feature.getProperty("nom");
      setHoveredDep(name);
      var code = event.feature.getProperty("code");
      if (selectedDep && (selectedDep === null || selectedDep === void 0 ? void 0 : selectedDep.fieldData["code-2"]) === code) return;
      mapRef.current.data.overrideStyle(event.feature, {
        fillColor: "green",
        fillOpacity: 0.5,
        strokeWeight: 3
      });
    });
    var event1 = mapRef.current.data.addListener("mouseout", function (event) {
      var code = event.feature.getProperty("code");
      if (selectedDep && (selectedDep === null || selectedDep === void 0 ? void 0 : selectedDep.fieldData["code-2"]) === code) return;
      mapRef.current.data.revertStyle(event.feature);
      hoveredFeature = null;
    });

    // Clickable - show info or do something
    var event2 = mapRef.current.data.addListener("click", function (event) {
      var _depList$items;
      var code = event.feature.getProperty("code");
      //console.log(code);
      //console.log(event.feature.getProperty("code"));
      setSelectedFeature(event.feature);
      zoomToDepartement(code, mapRef.current, event.feature.getProperty("name"));
      if (!depList) return;
      //console.log("list");
      var result = depList === null || depList === void 0 || (_depList$items = depList.items) === null || _depList$items === void 0 ? void 0 : _depList$items.find(function (item) {
        return item.fieldData["code-2"] == code;
      });
      if (!result) return;
      //console.log(result);
      setSelectedDep(result);
      var _loop = function _loop() {
        var element = comList === null || comList === void 0 ? void 0 : comList.dataByDep[result.id][index];
        var marker = new CustomMarker({
          lat: element.fieldData.latitude,
          lng: element.fieldData.longitude
        }, element.fieldData.name);
        marker.setMap(mapRef.current);
        setMarkers(function (prev) {
          return [].concat(_toConsumableArray(prev), [marker]);
        });
      };
      for (var index = 0; index < (comList === null || comList === void 0 || (_comList$dataByDep$re = comList.dataByDep[result.id]) === null || _comList$dataByDep$re === void 0 ? void 0 : _comList$dataByDep$re.length); index++) {
        var _comList$dataByDep$re;
        _loop();
      }
    });
    // console.log(event);

    return function () {
      // Clean up event listeners

      google.maps.event.removeListener(event);
      google.maps.event.removeListener(event1);
      google.maps.event.removeListener(event2);
    };
  }, [mapRef, comList, depList, selectedDep]);
  React.useEffect(function () {
    var _google;
    if (!initialPosition || !mapRef || !(mapRef !== null && mapRef !== void 0 && mapRef.current) || !google || !((_google = google) !== null && _google !== void 0 && _google.maps)) return;
    mapRef.current.data.setStyle(function (feature) {
      return getStyle(feature);
    });
    if (activeFilter == "idf") {
      var idfBounds = getIdfBounds(mapRef.current);
      if (!idfBounds.isEmpty()) {
        // map.fitBounds(idfBounds.pad(0.1), { maxZoom: 9 });
        mapRef.current.setZoom(9);
        //console.log(idfBounds.getCenter());
        panWithOffset(mapRef.current, idfBounds.getCenter(), 300, 0);

        //fitBoundsWithOffset(idfBounds.pad(0.1), { maxZoom: 9 });
      }
    } else {
      // const franceBounds = new google.maps.LatLngBounds(
      //   new google.maps.LatLng(41.303, -13.142),
      //   new google.maps.LatLng(51.124, 5.561)
      // );
      // if (!franceBounds.isEmpty()) {

      // }
      setTimeout(function () {
        mapRef.current.setZoom(6);

        //console.log(mapRef.current);
        panWithOffset(mapRef.current, initialPosition, 60, 0);
      }, 250);
    }
  }, [mapRef, google, google.maps, activeFilter, initialPosition]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "xl:max-w-[90%] w-[100%] xl:min-h-[90vh]",
    style: {
      flexShrink: 0,
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      position: "relative",
      boxShadow: "0 2px 20px -10px rgba(0,0,0,0.3)"
    }
  }, hoveredDep && /*#__PURE__*/React.createElement("div", {
    className: "xl:flex hidden",
    style: {
      position: "absolute",
      right: 50,
      top: 50,
      padding: 15,
      paddingLeft: 20,
      paddingRight: 20,
      color: "#fff",
      zIndex: 999999,
      backgroundColor: "green",
      borderRadius: 0
    }
  }, hoveredDep), /*#__PURE__*/React.createElement("div", {
    className: "xl:absolute relative xl:bottom-[50px] bottom-[0px]",
    style: {
      display: "flex",
      flex: 1,
      backgroundColor: "#C8D1D2",
      //padding: 40,
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "xl:w-[35vw] w-[100%] xl:ml-[50px] ml-[0px]  xl:mt-[50px] mt-[0px] xl:rounded-[15px] rounded-[0px] ",
    style: {
      overflow: "hidden",
      transition: "height 0.3s ease",
      display: "flex",
      flexDirection: "column",
      height: height === "auto" ? "auto" : "".concat(height, "px"),
      maxHeight: "calc(90vh - 100px)",
      minHeight: 230,
      boxShadow: "0 2px 20px -10px rgba(0,0,0,0.3)",
      zIndex: 99999999,
      border: "1px solid green",
      backgroundColor: "#fff",
      padding: 45,
      paddingTop: 50
    }
    // onTransitionEnd={() => {
    //   // After transition ends, set to "auto" so it can grow freely
    //   setHeight("auto");
    // }}
  }, selectedCom && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      setSelectedCom(false);
      var _iterator2 = _createForOfIteratorHelper(markers),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var m = _step2.value;
          m.setMap(null);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      setMarkers([]);
      mapRef.current.setZoom(9);
      //  panWithOffset(mapRef.current, )
    },
    style: {
      fontSize: 19,
      color: "blue",
      textDecoration: "underline",
      marginBottom: 5,
      cursor: "pointer"
    }
  }, "Retour"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      // backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingBottom: 50
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: selectedCom.fieldData.profile.url,
    style: {
      width: 150,
      height: 150,
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: 15
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      fontWeight: "bold",
      lineHeight: 1.1,
      color: "green"
    }
  }, selectedCom.fieldData.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      fontWeight: "normal",
      lineHeight: 1.1,
      color: "#444",
      marginTop: 10
    }
  }, selectedCom.fieldData.email))), !selectedDep && !selectedCom && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: "bold",
      maxWidth: "50%",
      lineHeight: 1.1,
      color: "green"
    }
  }, "Recherchez votre commercial"), /*#__PURE__*/React.createElement("div", {
    style: _defineProperty(_defineProperty(_defineProperty(_defineProperty({
      // width: 590,
      height: 60,
      marginTop: 20,
      backgroundColor: "#fff",
      border: "1px solid green",
      zIndex: 99999,
      borderRadius: 10
    }, "backgroundColor", "#00000009"), "display", "flex"), "alignItems", "center"), "position", "relative")
  }, /*#__PURE__*/React.createElement("input", {
    disabled: depList && comList ? false : true,
    type: "text",
    value: keyword,
    onChange: handleInputChange,
    placeholder: "Saisissez votre code postal ou votre d\xE9partement",
    style: {
      fontSize: 15,
      fontWeight: "normal",
      lineHeight: 1.1,
      color: "#333",
      paddingLeft: 20,
      height: 60,
      borderRadius: 10,
      flex: 1,
      backgroundColor: "transparent",
      outline: "none",
      borderWidth: 0
    }
  }), !depList && !comList && /*#__PURE__*/React.createElement(Spinner, null), depList && comList && /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.prod.website-files.com/6814fb6db4d4a1fdce33564d/6816b2c514fa50908c854f0b_icons8-search.svg",
    style: {
      position: "absolute",
      right: 20
    },
    width: 25,
    height: 25
  })), !filteredData && /*#__PURE__*/React.createElement("div", {
    className: " gap-x-2 ",
    style: {
      height: 60,
      flexGrow: 1,
      flexShrink: 0,
      // backgroundColor: "red",
      display: "flex",
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      setActiveFilter("idf");
    },
    style: {
      flex: 1,
      cursor: "pointer",
      backgroundColor: activeFilter == "idf" ? "green" : "#fff",
      height: 60,
      border: "1px solid green",
      justifyContent: "center",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: "bold",
      lineHeight: 1.1,
      color: activeFilter == "idf" ? "#fff" : "green"
    }
  }, "\xCEle-de-France")), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      setActiveFilter("province");
    },
    style: {
      flex: 1,
      height: 60,
      cursor: "pointer",
      border: "1px solid green",
      justifyContent: "center",
      display: "flex",
      backgroundColor: activeFilter == "province" ? "green" : "#fff",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: "bold",
      lineHeight: 1.1,
      color: activeFilter == "province" ? "#fff" : "green"
    }
  }, "Province")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      cursor: "pointer",
      display: "flex",
      height: 60,
      border: "1px solid green",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: "bold",
      lineHeight: 1.1,
      color: "green"
    }
  }, "BeNeLux"))), filteredData && filteredData[0] && /*#__PURE__*/React.createElement("div", {
    ref: innerRef,
    style: {
      display: "flex",
      flexDirection: "column",
      paddingTop: 15
      //backgroundColor: "red",
    }
  }, filteredData[0] && filteredData.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "hover:bg-gray-100 bg-transparent",
      onClick: function onClick() {
        zoomToDepartement(item.fieldData["code-2"], mapRef.current, item.fieldData["name"]);
        //console.log(item);
        setSelectedDep(item);
        //console.log(comList?.dataByDep[item.id]);
        var _loop2 = function _loop2() {
          var element = comList === null || comList === void 0 ? void 0 : comList.dataByDep[item.id][_index];
          var marker = new CustomMarker({
            lat: element.fieldData.latitude,
            lng: element.fieldData.longitude
          }, element.fieldData.name);
          marker.setMap(mapRef.current);
          setMarkers(function (prev) {
            return [].concat(_toConsumableArray(prev), [marker]);
          });
        };
        for (var _index = 0; _index < (comList === null || comList === void 0 || (_comList$dataByDep$it = comList.dataByDep[item.id]) === null || _comList$dataByDep$it === void 0 ? void 0 : _comList$dataByDep$it.length); _index++) {
          var _comList$dataByDep$it;
          _loop2();
        }
        //setKeyword("");
        //setFilteredData(false);
        //console.log(item.fieldData.code);
      },
      style: {
        display: "flex",
        cursor: "pointer",
        minHeight: 60,
        //backgroundColor: "#f5f5f5",
        // marginBottom: 5,
        //borderRadius: 10,
        borderBottomWidth: index + 1 == filteredData.length ? 0 : 1,
        borderColor: "#555",
        alignItems: "center",
        paddingLeft: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontWeight: "normal",
        lineHeight: 1.1,
        color: "#000"
      }
    }, item.fieldData.name));
  }))), selectedDep && !selectedCom && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      setSelectedDep(false);
    },
    style: {
      fontSize: 19,
      color: "blue",
      textDecoration: "underline",
      marginBottom: 5,
      cursor: "pointer"
    }
  }, "Retour"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 35,
      fontWeight: "bold",
      maxWidth: "50%",
      lineHeight: 1.1,
      color: "green"
    }
  }, selectedDep.fieldData.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      fontWeight: "normal",
      maxWidth: "50%",
      lineHeight: 1.1,
      color: "#555",
      marginTop: 10,
      marginBottom: 25
    }
  }, "Liste des commerciaux dans le departement"), comList && comList.dataByDep && (comList === null || comList === void 0 ? void 0 : comList.dataByDep[selectedDep.id]) && (comList === null || comList === void 0 ? void 0 : comList.dataByDep[selectedDep.id].map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "hover:bg-gray-100 bg-[#f5f5f5",
      onClick: function onClick() {
        setSelectedCom(item);
        panWithOffset(mapRef.current, {
          lat: item.fieldData.latitude,
          lng: item.fieldData.longitude
        }, 50, 0);
        var _iterator3 = _createForOfIteratorHelper(markers),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var m = _step3.value;
            m.setMap(null);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        setMarkers([]);
        var marker = new CustomMarker({
          lat: item.fieldData.latitude,
          lng: item.fieldData.longitude
        }, item.fieldData.name);
        marker.setMap(mapRef.current);
        setMarkers(function (prev) {
          return [].concat(_toConsumableArray(prev), [marker]);
        });
        mapRef.current.setZoom(12);
      },
      style: {
        display: "flex",
        cursor: "pointer",
        minHeight: 80,
        //backgroundColor: "#f5f5f5",
        marginBottom: 10,
        borderRadius: 10,
        border: "1px solid green",
        alignItems: "center",
        paddingLeft: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontWeight: "normal",
        lineHeight: 1.1,
        color: "#000"
      }
    }, item.fieldData.name));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "xl:flex hidden",
    id: "mapdiv",
    style: {
      flex: 1,
      height: "90vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // border: "1px solid green",
      borderRadius: 10
    }
  })));
};
var FullModal = function FullModal() {
  var _data$items;
  // This is a React component that initializes a Google Map and displays it in a div with the ID "mapdiv".
  var pages = 3;
  var steps = parseInt(100 / pages);
  var _React$useState25 = React.useState(1),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    page = _React$useState26[0],
    setPage = _React$useState26[1];
  var percentage = steps * page < 98 ? steps * page : 100;
  var _React$useState27 = React.useState(true),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    isShown = _React$useState28[0],
    setIsShown = _React$useState28[1];
  var _React$useState29 = React.useState(false),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    data = _React$useState30[0],
    setData = _React$useState30[1];
  var _React$useState31 = React.useState([]),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    selectedItems = _React$useState32[0],
    setSelectedItems = _React$useState32[1];
  var _React$useState33 = React.useState(""),
    _React$useState34 = _slicedToArray(_React$useState33, 2),
    name = _React$useState34[0],
    setName = _React$useState34[1];
  var _React$useState35 = React.useState(""),
    _React$useState36 = _slicedToArray(_React$useState35, 2),
    desc = _React$useState36[0],
    setDesc = _React$useState36[1];
  var total = selectedItems.reduce(function (acc, item) {
    var _item$fieldData;
    return acc + (((_item$fieldData = item.fieldData) === null || _item$fieldData === void 0 ? void 0 : _item$fieldData.price) || 0);
  }, 0);
  function fetchWithErrorHandling(_x2) {
    return _fetchWithErrorHandling2.apply(this, arguments);
  }
  function _fetchWithErrorHandling2() {
    _fetchWithErrorHandling2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(url) {
      var options,
        response,
        errorBody,
        _args5 = arguments;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            options = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
            _context5.next = 3;
            return fetch(url, options);
          case 3:
            response = _context5.sent;
            if (response.ok) {
              _context5.next = 10;
              break;
            }
            _context5.next = 7;
            return response.text();
          case 7:
            errorBody = _context5.sent;
            // Or response.json() if JSON expected
            console.log(errorBody);
            throw new Error("HTTP ".concat(response.status, ": ").concat(errorBody));
          case 10:
            return _context5.abrupt("return", response.json());
          case 11:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return _fetchWithErrorHandling2.apply(this, arguments);
  }
  var getData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var dev, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            dev = true;
            _context3.next = 3;
            return fetchWithErrorHandling("".concat(dev ? "http://localhost:3000" : "https://private-scripts.vercel.app", "/api/steps?prod=682425789f332fb83fff545c"));
          case 3:
            data = _context3.sent;
            setData(data.products);
            console.log(data.products);
          case 6:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getData() {
      return _ref3.apply(this, arguments);
    };
  }();
  var submitData = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var dev, data, errorBody;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            console.log("starting");
            dev = true;
            _context4.next = 4;
            return fetch("".concat(dev ? "http://localhost:3000" : "https://private-scripts.vercel.app", "/api/steps"), {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: {
                fieldData: {
                  name: name,
                  description: desc,
                  total: total,
                  "products-2": selectedItems.map(function (item) {
                    return item.id;
                  })
                }
              }
            });
          case 4:
            data = _context4.sent;
            if (data.ok) {
              _context4.next = 10;
              break;
            }
            _context4.next = 8;
            return response.text();
          case 8:
            errorBody = _context4.sent;
            // Or response.json() if JSON expected
            console.log(errorBody);
          case 10:
            console.log("data", data);
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function submitData() {
      return _ref4.apply(this, arguments);
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
      if (page > 1) {
        setPage(function (prev) {
          return prev - 1;
        });
        return;
      }
      setIsShown(false);
      setPage(1);
    },
    style: {
      fontSize: 16,
      color: "blue",
      textDecoration: "underline",
      marginBottom: 25,
      cursor: "pointer"
    }
  }, "Retour"), /*#__PURE__*/React.createElement("span", {
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
  }, "".concat(total, "\u20AC"))), /*#__PURE__*/React.createElement("div", {
    className: "gap-x-2",
    style: {
      display: "flex",
      flexDirection: "row"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: "bold",
      lineHeight: 1.1,
      color: "green"
    }
  }, percentage == 100 ? "Envoyer" : "Suivant"))))));
};
var ProgressBar = function ProgressBar(_ref5) {
  var value = _ref5.value,
    _ref5$max = _ref5.max,
    max = _ref5$max === void 0 ? 100 : _ref5$max;
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
var Spinner = function Spinner(_ref6) {
  var large = _ref6.large;
  return /*#__PURE__*/React.createElement("div", {
    style: _defineProperty(_defineProperty(_defineProperty({
      display: "flex",
      width: large ? 45 : 25,
      height: large ? 45 : 25,
      position: large ? "relative" : "absolute"
    }, large ? null : "right", 20), "flexGrow", large ? 0 : 1), "flexShrink", 0),
    className: "spinner"
  });
};
var styles = [{
  featureType: "all",
  elementType: "labels.text",
  stylers: [{
    color: "#878787"
  }]
}, {
  featureType: "all",
  elementType: "labels.text.stroke",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "landscape",
  elementType: "all",
  stylers: [{
    color: "#f9f9f9"
  }]
}, {
  featureType: "road.highway",
  elementType: "all",
  stylers: [{
    visibility: "simplified"
  }, {
    weight: "0.01"
  }]
}, {
  featureType: "water",
  elementType: "all",
  stylers: [{
    color: "#c8d1d2"
  }]
}];
// This assumes you're using ReactDOM
ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById("divmain"));
document.getElementById("mainbtn").addEventListener("click", function () {
  // Your code here
  ReactDOM.render(/*#__PURE__*/React.createElement(FullModal, null), document.getElementById("fullmodaldiv"));
});
