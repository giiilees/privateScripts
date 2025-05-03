"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// App.jsx
var MyMarkerComponent = function MyMarkerComponent(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "green",
      color: "white",
      width: 60,
      height: 30,
      padding: "6px 10px",
      borderRadius: "6px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      fontSize: "14px",
      zIndex: 9999999
    }
  }, "\uD83D\uDCCD ", label);
};
var App = function App() {
  var _window2, _window3;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hoveredDep = _React$useState2[0],
    setHoveredDep = _React$useState2[1];
  var mapRef = React.useRef(null);
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
      fillColor: "#00990011",
      fillOpacity: 0.1,
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
    map.fitBounds(bounds, {
      left: width * 0.4
    });
    google.maps.event.addListenerOnce(map, "bounds_changed", function () {
      map.setZoom(5.9);
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
  var handlePan = function handlePan() {
    // Example region: California bounding box
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
    var center = bounds.getCenter();
    mapRef.current.fitBounds(bounds);
    mapRef.current.panTo(center);
  };
  React.useEffect(function () {
    var _window;
    if (window.google && (_window = window) !== null && _window !== void 0 && (_window = _window.google) !== null && _window !== void 0 && _window.maps) {
      console.log("Start");
      initMap();
    }
  }, [(_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.google, (_window3 = window) === null || _window3 === void 0 || (_window3 = _window3.google) === null || _window3 === void 0 ? void 0 : _window3.maps]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "80vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 80,
      top: 80,
      padding: 15,
      paddingLeft: 20,
      paddingRight: 20,
      color: "#fff",
      zIndex: 999999,
      backgroundColor: "green"
    }
  }, hoveredDep), /*#__PURE__*/React.createElement("div", {
    id: "mapdiv",
    ref: mapRef,
    style: {
      flex: 1,
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }));
};
var styles = [{
  featureType: "all",
  elementType: "geometry",
  stylers: [{
    color: "#f5f5f5"
  }]
}, {
  featureType: "all",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#616161"
  }]
}, {
  featureType: "all",
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#f5f5f5"
  }]
}, {
  featureType: "all",
  elementType: "labels.icon",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "administrative.land_parcel",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#bdbdbd"
  }]
}, {
  featureType: "poi",
  elementType: "geometry",
  stylers: [{
    color: "#eeeeee"
  }]
}, {
  featureType: "poi",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#757575"
  }]
}, {
  featureType: "poi.park",
  elementType: "geometry",
  stylers: [{
    color: "#e5e5e5"
  }]
}, {
  featureType: "poi.park",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#9e9e9e"
  }]
}, {
  featureType: "road",
  elementType: "all",
  stylers: [{
    visibility: "on"
  }]
}, {
  featureType: "road",
  elementType: "geometry",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry",
  stylers: [{
    color: "#dadada"
  }]
}, {
  featureType: "road.highway",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#616161"
  }]
}, {
  featureType: "road.arterial",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#757575"
  }]
}, {
  featureType: "road.local",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#9e9e9e"
  }]
}, {
  featureType: "transit.line",
  elementType: "geometry",
  stylers: [{
    color: "#e5e5e5"
  }]
}, {
  featureType: "transit.station",
  elementType: "geometry",
  stylers: [{
    color: "#eeeeee"
  }]
}, {
  featureType: "water",
  elementType: "geometry",
  stylers: [{
    color: "#c9c9c9"
  }]
}, {
  featureType: "water",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#9e9e9e"
  }]
}];
// This assumes you're using ReactDOM
ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById("divmain"));
