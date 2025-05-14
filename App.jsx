const App = () => {
  // This is a React component that initializes a Google Map and displays it in a div with the ID "mapdiv".

  const [hoveredDep, setHoveredDep] = React.useState(false); // State to store the hovered department name
  const [depList, setDepList] = React.useState(false);
  const [comList, setComList] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(false);
  const [selectedFeature, setSelectedFeature] = React.useState(false);

  const [initialPosition, setInitialPosition] = React.useState(false);

  const [markers, setMarkers] = React.useState([]);

  const [selectedFromMap, setSelectedFromMap] = React.useState(false);

  const [selectedDep, setSelectedDep] = React.useState(false);
  const [selectedCom, setSelectedCom] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState("province");

  const regions = {
    idf: ["75", "77", "78", "91", "92", "93", "94", "95"],
    province: "all",
  };

  const defaultStyle = {
    fillColor: "#00990022",
    fillOpacity: 0.5,
    strokeColor: "#00990077",
    strokeWeight: 2,
  };

  const [height, setHeight] = React.useState(290);

  let mapRef = React.useRef(null); // Reference to the map instance
  const innerRef = React.useRef(null);

  // Fetching data from an API
  async function fetchWithErrorHandling(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorBody = await response.text(); // Or response.json() if JSON expected
      throw new Error(`HTTP ${response.status}: ${errorBody}`);
    }
    return response.json(); // Or .text(), etc.
  }
  const getData = async () => {
    let dev = false;
    const data = await fetchWithErrorHandling(
      `${
        dev ? "http://localhost:3000" : "https://private-scripts.vercel.app"
      }/api/webflow?dep=68169726cda64534a0375de5&com=681698f19dfd03f712563c2e`
    );

    setDepList(data.dep);
    setComList({
      data: data.com,
      dataByDep: data.comByDep,
    });
  };
  const normalize = (str) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  function getFeatureCenter(geometry) {
    // let map = mapRef.current;

    let bounds = new google.maps.LatLngBounds();

    function processGeometry(geom) {
      if (geom.getType() === "Polygon" || geom.getType() === "LinearRing") {
        geom.getArray().forEach((path) => {
          path.getArray().forEach((latlng) => {
            bounds.extend(latlng);
          });
        });
      } else if (geom.getType() === "MultiPolygon") {
        geom.getArray().forEach((polygon) => {
          processGeometry(polygon);
        });
      } else if (geom.getType() === "GeometryCollection") {
        geom.getArray().forEach((g) => {
          processGeometry(g);
        });
      }
    }

    processGeometry(geometry);
    return bounds.getCenter();
  }

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

  function panWithOffset(map, latLng, offsetX, offsetY) {
    const scale = Math.pow(2, map.getZoom());
    const worldCoordinateCenter = map.getProjection().fromLatLngToPoint(latLng);
    const pixelOffset = new google.maps.Point(offsetX / scale, offsetY / scale);

    const worldCoordinateNewCenter = new google.maps.Point(
      worldCoordinateCenter?.x - pixelOffset?.x,
      worldCoordinateCenter?.y + pixelOffset?.y
    );

    const newCenter = map
      .getProjection()
      ?.fromPointToLatLng(worldCoordinateNewCenter);
    map.panTo(newCenter);
    return newCenter;
  }

  function getStyle(feature) {
    const deptCode = feature.getProperty("code");
    const regionMatch = isInActiveRegion(deptCode);

    if (!regionMatch) {
      return {
        fillColor: "green",
        fillOpacity: 0,
        strokeColor: "#353E4600",
        strokeWeight: 0,
        zIndex: 1,
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
    const bounds = new google.maps.LatLngBounds();
    map.data.forEach((feature) => {
      const code = feature.getProperty("code");
      if (regions.idf.includes(code)) {
        feature.getGeometry().forEachLatLng((latLng) => bounds.extend(latLng));
      }
    });
    return bounds;
  }

  // This function initializes the Google Map
  function initMap() {
    const bounds = new window.google.maps.LatLngBounds(
      { lat: 41.303, lng: -13.142 }, // Southwest corner (SW)
      { lat: 51.124, lng: 5.561 } // Northeast corner (NE)
    );
    const position = bounds.getCenter();
    setInitialPosition(position);

    const map = new google.maps.Map(document.getElementById("mapdiv"), {
      center: position,
      zoom: 5,
      //scrollwheel: false,
      zoomControl: true,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      cameraControl: false,
      styles: styles,
    });

    map.data.loadGeoJson(
      "https://france-geojson.gregoiredavid.fr/repo/departements.geojson",
      null,
      function (features) {
        // Add a custom property to store the department code
        features.forEach((feature) => {
          feature.setProperty("code", feature.getProperty("code"));
          map.data.setStyle((feature) => getStyle(feature));
        });
      }
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

    // Add a click event listener to the map
    const mapDiv = document.getElementById("mapdiv");
    const width = mapDiv.offsetWidth;
    const height = mapDiv.offsetHeight;
    map.fitBounds(bounds);

    google.maps.event.addListenerOnce(map, "bounds_changed", function () {
      map.setZoom(6);
    });

    mapRef.current = map;

    // const marker = new CustomMarker(position, "Paris");
    // marker.setMap(map);
  }
  function zoomToDepartement(code, map, name) {
    let foundFeature = null;
    // console.log(code);

    if (name) {
      setHoveredDep(name);
    }
    map.data.forEach((feature) => {
      // console.log(feature.getProperty("code"));
      if (feature.getProperty("code") === code) {
        foundFeature = feature;
      }
    });

    if (foundFeature) {
      // Get the geometry of the département and compute the center
      const geometry = foundFeature.getGeometry();
      const center = getFeatureCenter(geometry);

      if (selectedFeature) {
        map.data.revertStyle(selectedFeature);
      }

      map.data.overrideStyle(foundFeature, {
        fillColor: "green",
        fillOpacity: 0.9,
        strokeColor: "green",
        strokeWeight: 3,
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

  const handleInputChange = (event) => {
    const input = event.target.value;
    setKeyword(input);
    if (!input) {
      setHeight(290);
      setFilteredData(false);
      setTimeout(() => {
        mapRef.current.setZoom(6);

        //console.log(mapRef.current);
        panWithOffset(mapRef.current, initialPosition, 60, 0);
      }, 250);
      for (const m of markers) {
        m.setMap(null);
      }
      setMarkers([]);
      return;
    }

    // console.log(depList.items);
    // Filter the array by the normalized input
    const filtered = depList.items
      .filter((item) =>
        normalize(item.fieldData.name).includes(normalize(input))
      )
      .slice(0, 5); // Limit to 5 results
    //console.log(filtered);
    setFilteredData(filtered);
  };

  React.useEffect(() => {
    if (window.google && window?.google?.maps) {
      //console.log("Start");
      initMap();
    } else {
      setTimeout(() => {
        initMap();
      }, 1200);
    }
  }, [google, window?.google]);

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (selectedCom) {
      setHeight(1000);
      return;
    }

    if (selectedDep) {
      const newHeight = comList?.dataByDep[selectedDep?.id]?.length
        ? comList?.dataByDep[selectedDep?.id]?.length * 80 + 250
        : 290;
      //console.log(newHeight);
      setHeight(newHeight);
      return;
    }
    const newHeight = filteredData.length * 65 + 230;
    setHeight(newHeight);
  }, [filteredData, selectedDep, selectedCom]);

  React.useEffect(() => {
    if (!mapRef?.current) return;
    // Store the hovered feature for reference
    let hoveredFeature = null;

    // Hover effect
    let event = mapRef.current.data.addListener("mouseover", (event) => {
      hoveredFeature = event.feature;
      const name = event.feature.getProperty("nom");
      setHoveredDep(name);
      const code = event.feature.getProperty("code");
      if (selectedDep && selectedDep?.fieldData["code-2"] === code) return;

      mapRef.current.data.overrideStyle(event.feature, {
        fillColor: "green",
        fillOpacity: 0.5,
        strokeWeight: 3,
      });
    });

    let event1 = mapRef.current.data.addListener("mouseout", (event) => {
      const code = event.feature.getProperty("code");
      if (selectedDep && selectedDep?.fieldData["code-2"] === code) return;
      mapRef.current.data.revertStyle(event.feature);
      hoveredFeature = null;
    });

    // Clickable - show info or do something
    let event2 = mapRef.current.data.addListener("click", (event) => {
      const code = event.feature.getProperty("code");
      //console.log(code);
      //console.log(event.feature.getProperty("code"));
      setSelectedFeature(event.feature);
      zoomToDepartement(
        code,
        mapRef.current,
        event.feature.getProperty("name")
      );
      if (!depList) return;
      //console.log("list");
      const result = depList?.items?.find(
        (item) => item.fieldData["code-2"] == code
      );
      if (!result) return;
      //console.log(result);
      setSelectedDep(result);
      for (
        let index = 0;
        index < comList?.dataByDep[result.id]?.length;
        index++
      ) {
        const element = comList?.dataByDep[result.id][index];
        const marker = new CustomMarker(
          {
            lat: element.fieldData.latitude,
            lng: element.fieldData.longitude,
          },
          element.fieldData.name
        );
        marker.setMap(mapRef.current);
        setMarkers((prev) => [...prev, marker]);
      }
    });
    // console.log(event);

    return () => {
      // Clean up event listeners

      google.maps.event.removeListener(event);
      google.maps.event.removeListener(event1);
      google.maps.event.removeListener(event2);
    };
  }, [mapRef, comList, depList, selectedDep]);

  React.useEffect(() => {
    if (
      !initialPosition ||
      !mapRef ||
      !mapRef?.current ||
      !google ||
      !google?.maps
    )
      return;
    mapRef.current.data.setStyle((feature) => getStyle(feature));
    if (activeFilter == "idf") {
      const idfBounds = getIdfBounds(mapRef.current);
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
      setTimeout(() => {
        mapRef.current.setZoom(6);

        //console.log(mapRef.current);
        panWithOffset(mapRef.current, initialPosition, 60, 0);
      }, 250);
    }
  }, [mapRef, google, google.maps, activeFilter, initialPosition]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="xl:max-w-[90%] w-[100%] xl:min-h-[90vh]"
        style={{
          flexShrink: 0,
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          position: "relative",

          boxShadow: "0 2px 20px -10px rgba(0,0,0,0.3)",
        }}
      >
        {hoveredDep && (
          <div
            className="xl:flex hidden"
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
              borderRadius: 0,
            }}
          >
            {hoveredDep}
          </div>
        )}
        <div
          className="xl:absolute relative xl:bottom-[50px] bottom-[0px]"
          style={{
            display: "flex",
            flex: 1,

            backgroundColor: "#C8D1D2",
            //padding: 40,
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <div
            className="xl:w-[35vw] w-[100%] xl:ml-[50px] ml-[0px]  xl:mt-[50px] mt-[0px] xl:rounded-[15px] rounded-[0px] "
            style={{
              overflow: "hidden",
              transition: "height 0.3s ease",
              display: "flex",
              flexDirection: "column",
              height: height === "auto" ? "auto" : `${height}px`,
              maxHeight: "calc(90vh - 100px)",
              minHeight: 230,

              boxShadow: "0 2px 20px -10px rgba(0,0,0,0.3)",
              zIndex: 99999999,
              border: "1px solid green",
              backgroundColor: "#fff",

              padding: 45,
              paddingTop: 50,
            }}
            // onTransitionEnd={() => {
            //   // After transition ends, set to "auto" so it can grow freely
            //   setHeight("auto");
            // }}
          >
            {selectedCom && (
              <>
                <div
                  onClick={() => {
                    setSelectedCom(false);
                    for (const m of markers) {
                      m.setMap(null);
                    }
                    setMarkers([]);
                    mapRef.current.setZoom(9);
                    //  panWithOffset(mapRef.current, )
                  }}
                  style={{
                    fontSize: 19,
                    color: "blue",
                    textDecoration: "underline",
                    marginBottom: 5,
                    cursor: "pointer",
                  }}
                >{`Retour`}</div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    // backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    paddingBottom: 50,
                  }}
                >
                  <img
                    src={selectedCom.fieldData.profile.url}
                    style={{
                      width: 150,
                      height: 150,
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginBottom: 15,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",

                      lineHeight: 1.1,
                      color: "green",
                    }}
                  >
                    {selectedCom.fieldData.name}
                  </span>
                  <span
                    style={{
                      fontSize: 19,
                      fontWeight: "normal",

                      lineHeight: 1.1,
                      color: "#444",
                      marginTop: 10,
                    }}
                  >
                    {selectedCom.fieldData.email}
                  </span>
                </div>
              </>
            )}
            {!selectedDep && !selectedCom && (
              <>
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    maxWidth: "50%",
                    lineHeight: 1.1,
                    color: "green",
                  }}
                >
                  Recherchez votre commercial
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
                    disabled={depList && comList ? false : true}
                    type="text"
                    value={keyword}
                    onChange={handleInputChange}
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
                  {!depList && !comList && <Spinner />}
                  {depList && comList && (
                    <img
                      src={
                        "https://cdn.prod.website-files.com/6814fb6db4d4a1fdce33564d/6816b2c514fa50908c854f0b_icons8-search.svg"
                      }
                      style={{
                        position: "absolute",
                        right: 20,
                      }}
                      width={25}
                      height={25}
                    />
                  )}
                </div>
                {!filteredData && (
                  <div
                    className=" gap-x-2 "
                    style={{
                      height: 60,
                      flexGrow: 1,
                      flexShrink: 0,
                      // backgroundColor: "red",
                      display: "flex",
                      marginTop: 20,
                    }}
                  >
                    <div
                      onClick={() => {
                        setActiveFilter("idf");
                      }}
                      style={{
                        flex: 1,
                        cursor: "pointer",
                        backgroundColor:
                          activeFilter == "idf" ? "green" : "#fff",
                        height: 60,
                        border: "1px solid green",
                        justifyContent: "center",
                        display: "flex",

                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 17,
                          fontWeight: "bold",

                          lineHeight: 1.1,
                          color: activeFilter == "idf" ? "#fff" : "green",
                        }}
                      >
                        Île-de-France
                      </span>
                    </div>
                    <div
                      onClick={() => {
                        setActiveFilter("province");
                      }}
                      style={{
                        flex: 1,
                        height: 60,
                        cursor: "pointer",

                        border: "1px solid green",
                        justifyContent: "center",
                        display: "flex",
                        backgroundColor:
                          activeFilter == "province" ? "green" : "#fff",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 17,
                          fontWeight: "bold",

                          lineHeight: 1.1,
                          color: activeFilter == "province" ? "#fff" : "green",
                        }}
                      >
                        Province
                      </span>
                    </div>
                    <div
                      style={{
                        flex: 1,
                        cursor: "pointer",
                        display: "flex",
                        height: 60,
                        border: "1px solid green",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 17,
                          fontWeight: "bold",

                          lineHeight: 1.1,
                          color: "green",
                        }}
                      >
                        BeNeLux
                      </span>
                    </div>
                  </div>
                )}
                {filteredData && filteredData[0] && (
                  <div
                    ref={innerRef}
                    style={{
                      display: "flex",

                      flexDirection: "column",
                      paddingTop: 15,
                      //backgroundColor: "red",
                    }}
                  >
                    {filteredData[0] &&
                      filteredData.map((item, index) => (
                        <div
                          key={index}
                          className="hover:bg-gray-100 bg-transparent"
                          onClick={() => {
                            zoomToDepartement(
                              item.fieldData[`code-2`],
                              mapRef.current,
                              item.fieldData[`name`]
                            );
                            //console.log(item);
                            setSelectedDep(item);
                            //console.log(comList?.dataByDep[item.id]);

                            for (
                              let index = 0;
                              index < comList?.dataByDep[item.id]?.length;
                              index++
                            ) {
                              const element =
                                comList?.dataByDep[item.id][index];
                              const marker = new CustomMarker(
                                {
                                  lat: element.fieldData.latitude,
                                  lng: element.fieldData.longitude,
                                },
                                element.fieldData.name
                              );
                              marker.setMap(mapRef.current);
                              setMarkers((prev) => [...prev, marker]);
                            }
                            //setKeyword("");
                            //setFilteredData(false);
                            //console.log(item.fieldData.code);
                          }}
                          style={{
                            display: "flex",
                            cursor: "pointer",
                            minHeight: 60,
                            //backgroundColor: "#f5f5f5",
                            // marginBottom: 5,
                            //borderRadius: 10,
                            borderBottomWidth:
                              index + 1 == filteredData.length ? 0 : 1,
                            borderColor: "#555",
                            alignItems: "center",
                            paddingLeft: 20,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 18,
                              fontWeight: "normal",
                              lineHeight: 1.1,
                              color: "#000",
                            }}
                          >
                            {item.fieldData.name}
                          </span>
                        </div>
                      ))}
                  </div>
                )}
              </>
            )}
            {selectedDep && !selectedCom && (
              <>
                <div
                  onClick={() => {
                    setSelectedDep(false);
                  }}
                  style={{
                    fontSize: 19,
                    color: "blue",
                    textDecoration: "underline",
                    marginBottom: 5,
                    cursor: "pointer",
                  }}
                >{`Retour`}</div>
                <span
                  style={{
                    fontSize: 35,
                    fontWeight: "bold",
                    maxWidth: "50%",
                    lineHeight: 1.1,
                    color: "green",
                  }}
                >
                  {selectedDep.fieldData.name}
                </span>
                <span
                  style={{
                    fontSize: 19,
                    fontWeight: "normal",
                    maxWidth: "50%",
                    lineHeight: 1.1,
                    color: "#555",
                    marginTop: 10,
                    marginBottom: 25,
                  }}
                >
                  {`Liste des commerciaux dans le departement`}
                </span>

                {comList &&
                  comList.dataByDep &&
                  comList?.dataByDep[selectedDep.id] &&
                  comList?.dataByDep[selectedDep.id].map((item, index) => (
                    <div
                      key={index}
                      className="hover:bg-gray-100 bg-[#f5f5f5"
                      onClick={() => {
                        setSelectedCom(item);
                        panWithOffset(
                          mapRef.current,
                          {
                            lat: item.fieldData.latitude,
                            lng: item.fieldData.longitude,
                          },
                          50,
                          0
                        );
                        for (const m of markers) {
                          m.setMap(null);
                        }
                        setMarkers([]);
                        const marker = new CustomMarker(
                          {
                            lat: item.fieldData.latitude,
                            lng: item.fieldData.longitude,
                          },
                          item.fieldData.name
                        );
                        marker.setMap(mapRef.current);
                        setMarkers((prev) => [...prev, marker]);
                        mapRef.current.setZoom(12);
                      }}
                      style={{
                        display: "flex",
                        cursor: "pointer",
                        minHeight: 80,
                        //backgroundColor: "#f5f5f5",
                        marginBottom: 10,
                        borderRadius: 10,
                        border: "1px solid green",

                        alignItems: "center",
                        paddingLeft: 20,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 18,
                          fontWeight: "normal",
                          lineHeight: 1.1,
                          color: "#000",
                        }}
                      >
                        {item.fieldData.name}
                      </span>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
        <div
          className="xl:flex hidden"
          id="mapdiv"
          style={{
            flex: 1,
            height: "90vh",

            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // border: "1px solid green",
            borderRadius: 10,
          }}
        ></div>
      </div>
    </div>
  );
};

const Spinner = ({ large, noAbsolute }) => {
  return (
    <div
      style={{
        display: "flex",
        width: large ? 45 : 25,
        maxWidth: large ? 45 : 25,
        height: large ? 45 : 25,
        maxHeight: large ? 45 : 25,

        position: noAbsolute ? "static" : large ? "relative" : "absolute",
        [noAbsolute ? null : large ? null : "right"]: 20,

        flexGrow: large ? 0 : 1,
        flexShrink: 0,
      }}
      className="spinner"
    />
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
