const App = () => {
  // This is a React component that initializes a Google Map and displays it in a div with the ID "mapdiv".

  const [hoveredDep, setHoveredDep] = React.useState(false); // State to store the hovered department name
  let mapRef = React.useRef(null); // Reference to the map instance

  // Fetching data from an API
  async function fetchWithErrorHandling(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorBody = await response.text(); // Or response.json() if JSON expected
      throw new Error(`HTTP ${response.status}: ${errorBody}`);
    }
    return response.json(); // Or .text(), etc.
  }

  // This function initializes the Google Map
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
      fullscreenControl: false,
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
      fillColor: "#00990022",
      fillOpacity: 0.5,
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
    const height = mapDiv.offsetHeight;
    map.fitBounds(bounds);

    google.maps.event.addListenerOnce(map, "bounds_changed", function () {
      map.setZoom(6);
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

  const getData = async () => {
    const data = await fetchWithErrorHandling(
      "https://api.webflow.com/v2/collections/68169726cda64534a0375de5/items/live",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 79d81d912670dcee7e46455b5a3a97460bb38a6b5ff420b2b1fd14249edca996",
        },
      }
    );

    console.log("User created:", data);
  };

  React.useEffect(() => {
    if (window.google && window?.google?.maps) {
      //console.log("Start");
      initMap();
    } else {
      setTimeout(() => {
        initMap();
      }, 1000);
    }
  }, []);

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
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
          overflow: "hidden",
        }}
      >
        {hoveredDep && (
          <div
            style={{
              position: "absolute",
              right: 50,
              top: 50,
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
            display: "flex",
            flex: 1,
            position: "absolute",
            bottom: 50,
            backgroundColor: "#C8D1D2",
            //padding: 40,
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
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
              paddingTop: 50,
            }}
          >
            <span
              style={{
                fontSize: 22,
                fontWeight: "bold",
                maxWidth: "50%",
                lineHeight: 1.1,
                color: "green",
              }}
            >
              Rechercher votre commercial
            </span>
            <div
              style={{
                // width: 590,
                height: 60,
                marginTop: 20,
                backgroundColor: "#fff",
                border: "1px solid green",
                zIndex: 99999,
                borderRadius: 10,
                backgroundColor: "#00000009",
                display: "flex",

                alignItems: "center",
                position: "relative",
              }}
            >
              <input
                type="text"
                placeholder="Saisissez votre code postal ou votre département"
                style={{
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
                  borderWidth: 0,
                }}
              />

              <img
                src={
                  "https://cdn.prod.website-files.com/6814fb6db4d4a1fdce33564d/6816b2c514fa50908c854f0b_icons8-search.svg"
                }
                style={{
                  position: "absolute",
                  right: 20,
                }}
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
        <div
          className="xl:flex hidden"
          id="mapdiv"
          ref={mapRef}
          style={{
            flex: 1,
            height: "90vh",

            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
    </div>
  );
};
let styles = [
  {
    featureType: "all",
    elementType: "labels.text",
    stylers: [
      {
        color: "#878787",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f9f9f9",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        weight: "0.01",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#c8d1d2",
      },
    ],
  },
];
// This assumes you're using ReactDOM
ReactDOM.render(<App />, document.getElementById("divmain"));
