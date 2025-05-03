// App.jsx
const MyMarkerComponent = ({ label }) => (
  <div
    style={{
      background: "green",
      color: "white",
      width: 60,
      height: 30,
      padding: "6px 10px",
      borderRadius: "6px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      fontSize: "14px",
      zIndex: 9999999,
    }}
  >
    📍 {label}
  </div>
);

const App = () => {
  const [hoveredDep, setHoveredDep] = React.useState(false);
  let mapRef = React.useRef(null);
  function initMap() {
    const bounds = new window.google.maps.LatLngBounds(
      { lat: 41.303, lng: -5.142 }, // Southwest corner (SW)
      { lat: 51.124, lng: 9.561 } // Northeast corner (NE)
    );
    const position = bounds.getCenter();

    const map = new google.maps.Map(document.getElementById("mapdiv"), {
      zoom: 5.5,
      center: position,

      //scrollwheel: false,
      zoomControl: true,
      mapTypeControl: false,

      streetViewControl: false,
      cameraControl: false,
      styles: styles,
    });

    map.data.loadGeoJson(
      "https://france-geojson.gregoiredavid.fr/repo/departements.geojson"
    );
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
      strokeWeight: 2,
    });

    // Store the hovered feature for reference
    let hoveredFeature = null;

    // Hover effect
    map.data.addListener("mouseover", (event) => {
      hoveredFeature = event.feature;
      const name = event.feature.getProperty("nom");
      setHoveredDep(name);
      map.data.overrideStyle(event.feature, {
        fillColor: "green",
        fillOpacity: 0.5,
        strokeWeight: 3,
      });
    });

    map.data.addListener("mouseout", (event) => {
      map.data.revertStyle(event.feature);
      hoveredFeature = null;
    });

    // Clickable - show info or do something
    map.data.addListener("click", (event) => {
      const name = event.feature.getProperty("code");
      alert("Département: " + name);
    });
    const mapDiv = document.getElementById("mapdiv");
    const width = mapDiv.offsetWidth;
    map.fitBounds(bounds, { left: width * 0.4 });

    google.maps.event.addListenerOnce(map, "bounds_changed", function () {
      map.setZoom(5.9);
    });

    mapRef.current = map;

    class CustomMarker extends google.maps.OverlayView {
      constructor(position, label) {
        super();
        this.position = position;
        this.label = label;
      }

      onAdd() {
        // Create the custom marker div element
        this.div = document.createElement("div");
        this.div.className = "custom-marker";
        this.div.innerHTML = `<div>${this.label}</div>`; // You can replace this with any HTML (e.g., an icon or label)

        // Append the custom marker to the overlay pane
        this.getPanes().overlayMouseTarget.appendChild(this.div);
      }

      draw() {
        const projection = this.getProjection();
        const point = projection.fromLatLngToDivPixel(
          new google.maps.LatLng(this.position)
        );

        // Position the custom marker using the projection's coordinates
        if (this.div) {
          this.div.style.position = "absolute";
          this.div.style.left = point.x - this.div.offsetWidth / 2 + "px"; // Center horizontally
          this.div.style.top = point.y - this.div.offsetHeight + "px"; // Center vertically
        }
      }

      onRemove() {
        // Remove the custom marker element from the DOM when it's removed from the map
        if (this.div) {
          this.div.remove();
        }
      }
    }

    // const marker = new CustomMarker(position, "Paris");
    // marker.setMap(map);
  }

  const handlePan = () => {
    // Example region: California bounding box
    const bounds = new window.google.maps.LatLngBounds(
      { lat: 41.303, lng: -5.142 }, // Southwest corner (SW)
      { lat: 51.124, lng: 9.561 } // Northeast corner (NE)
    );
    const center = bounds.getCenter();

    mapRef.current.fitBounds(bounds);
    mapRef.current.panTo(center);
  };

  React.useEffect(() => {
    if (window.google && window?.google?.maps) {
      console.log("Start");
      initMap();
    }
  }, [window?.google, window?.google?.maps]);

  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        position: "relative",
      }}
    >
      {hoveredDep && (
        <div
          style={{
            position: "absolute",
            right: 80,
            top: 80,
            padding: 15,
            paddingLeft: 20,
            paddingRight: 20,
            color: "#fff",
            zIndex: 999999,
            backgroundColor: "green",
            borderRadius: 10,
          }}
        >
          {hoveredDep}
        </div>
      )}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          height: "calc(80vh - 80px)",
          width: "35%",
          boxShadow: "0 2px 20px -10px rgba(0,0,0,0.3)",
          zIndex: 99999999,
          backgroundColor: "#fff",
          borderRadius: 20,
          //padding: 40,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: 40,
          }}
        >
          <span
            style={{
              fontSize: 30,
            }}
          >
            Rechercher votre commercial
          </span>
        </div>
      </div>
      <div
        id="mapdiv"
        ref={mapRef}
        style={{
          flex: 1,
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </div>
  );
};
let styles = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];
// This assumes you're using ReactDOM
ReactDOM.render(<App />, document.getElementById("divmain"));
