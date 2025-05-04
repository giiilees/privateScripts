"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
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
  var mapRef = React.useRef(null); // Reference to the map instance

  // Fetching data from an API
  function fetchWithErrorHandling(_x) {
    return _fetchWithErrorHandling.apply(this, arguments);
  } // This function initializes the Google Map
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
  function initMap() {
    var bounds = new window.google.maps.LatLngBounds({
      lat: 41.303,
      lng: -5.142
    },
    // Southwest corner (SW)
    {
      lat: 51.124,
      lng: 9.561
    } // Northeast corner (NE)
    );
    var position = bounds.getCenter();
    var map = new google.maps.Map(document.getElementById("mapdiv"), {
      zoom: 5.5,
      center: position,
      //scrollwheel: false,
      zoomControl: true,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      cameraControl: false,
      styles: styles
    });
    map.data.loadGeoJson("https://france-geojson.gregoiredavid.fr/repo/departements.geojson");
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

    // Store the hovered feature for reference
    var hoveredFeature = null;

    // Hover effect
    map.data.addListener("mouseover", function (event) {
      hoveredFeature = event.feature;
      var name = event.feature.getProperty("nom");
      setHoveredDep(name);
      map.data.overrideStyle(event.feature, {
        fillColor: "green",
        fillOpacity: 0.5,
        strokeWeight: 3
      });
    });
    map.data.addListener("mouseout", function (event) {
      map.data.revertStyle(event.feature);
      hoveredFeature = null;
    });

    // Clickable - show info or do something
    map.data.addListener("click", function (event) {
      var name = event.feature.getProperty("code");
      alert("Département: " + name);
    });
    var mapDiv = document.getElementById("mapdiv");
    var width = mapDiv.offsetWidth;
    var height = mapDiv.offsetHeight;
    map.fitBounds(bounds);
    google.maps.event.addListenerOnce(map, "bounds_changed", function () {
      map.setZoom(6);
    });
    mapRef.current = map;
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
    }(google.maps.OverlayView); // const marker = new CustomMarker(position, "Paris");
    // marker.setMap(map);
  }
  var getData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchWithErrorHandling("https://api.webflow.com/v2/collections/68169726cda64534a0375de5/items/live", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer 79d81d912670dcee7e46455b5a3a97460bb38a6b5ff420b2b1fd14249edca996"
              }
            });
          case 2:
            data = _context.sent;
            console.log("User created:", data);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getData() {
      return _ref.apply(this, arguments);
    };
  }();
  React.useEffect(function () {
    var _window;
    if (window.google && (_window = window) !== null && _window !== void 0 && (_window = _window.google) !== null && _window !== void 0 && _window.maps) {
      //console.log("Start");
      initMap();
    } else {
      setTimeout(function () {
        initMap();
      }, 1000);
    }
  }, []);
  React.useEffect(function () {
    getData();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "90%",
      height: "90vh",
      flexShrink: 0,
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      position: "relative",
      borderRadius: 25,
      boxShadow: "0 2px 20px -10px rgba(0,0,0,0.3)",
      overflow: "hidden"
    }
  }, hoveredDep && /*#__PURE__*/React.createElement("div", {
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
      borderRadius: 10
    }
  }, hoveredDep), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      position: "absolute",
      bottom: 50,
      backgroundColor: "#C8D1D2",
      //padding: 40,
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: false ? "calc(90vh - 100px)" : 240,
      width: "35vw",
      boxShadow: "0 2px 20px -10px rgba(0,0,0,0.3)",
      zIndex: 99999999,
      border: "1px solid green",
      backgroundColor: "#fff",
      borderRadius: 20,
      marginLeft: 50,
      marginTop: 50,
      padding: 45,
      paddingTop: 50
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: "bold",
      maxWidth: "50%",
      lineHeight: 1.1,
      color: "green"
    }
  }, "Rechercher votre commercial"), /*#__PURE__*/React.createElement("div", {
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
    type: "text",
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
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.prod.website-files.com/6814fb6db4d4a1fdce33564d/6816b2c514fa50908c854f0b_icons8-search.svg",
    style: {
      position: "absolute",
      right: 20
    },
    width: 30,
    height: 30
  })))), /*#__PURE__*/React.createElement("div", {
    className: "xl:flex hidden",
    id: "mapdiv",
    ref: mapRef,
    style: {
      flex: 1,
      height: "90vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  })));
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
