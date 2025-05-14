const FullModal = () => {
  // This is a React component that initializes a Google Map and displays it in a div with the ID "mapdiv".
  let pages = 3;
  let steps = parseInt(100 / pages);
  const [page, setPage] = React.useState(1);
  let percentage = steps * page < 98 ? steps * page : 100;
  const [isShown, setIsShown] = React.useState(true);
  const [data, setData] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [succeded, setSucceded] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  let total = selectedItems.reduce((acc, item) => {
    return acc + (item.fieldData?.price || 0);
  }, 0);

  async function fetchWithErrorHandling(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorBody = await response.text(); // Or response.json() if JSON expected
      console.log(errorBody);
      throw new Error(`HTTP ${response.status}: ${errorBody}`);
    }
    return response.json(); // Or .text(), etc.
  }
  const getData = async () => {
    let dev = false;
    const data = await fetchWithErrorHandling(
      `${
        dev ? "http://localhost:3000" : "https://private-scripts.vercel.app"
      }/api/steps?prod=682425789f332fb83fff545c`
    );

    setData(data.products);
    console.log(data.products);
  };

  const submitData = async () => {
    setLoading(true);
    let dev = true;
    const data = await fetch(
      `${
        dev ? "http://localhost:3000" : "https://private-scripts.vercel.app"
      }/api/steps`,
      {
        method: "POST",
        body: JSON.stringify({
          fieldData: {
            name: name,
            description: desc,
            total,
            "products-2": selectedItems.map((item) => item.id),
          },
        }),
      }
    );
    if (!data.ok) {
      const errorBody = await response.text(); // Or response.json() if JSON expected
      console.log(errorBody);
      setLoading(false);
      return;
    }
    setSucceded(true);
    setLoading(false);
  };

  React.useEffect(() => {
    document.getElementById("mainbtn").addEventListener("click", function () {
      // Your code here
      setIsShown(true);
    });
  }, []);

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isShown && (
        <div
          style={{
            display: "flex",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000000aa",
            zIndex: 999999999999999,
          }}
        >
          <div
            className="xl:w-[45vw] w-[100%] xl:h-[auto] xl:min-h-[100px] min-h-[100vh] bg-white rounded-[15px] "
            style={{
              padding: 40,
            }}
          >
            <div
              onClick={() => {
                if (succeded) {
                  setIsShown(false);
                  setPage(1);
                  return;
                }
                if (page > 1) {
                  setPage((prev) => {
                    return prev - 1;
                  });
                  return;
                }
                setIsShown(false);
                setPage(1);
                setSucceded(false);
              }}
              style={{
                fontSize: 16,
                color: "blue",
                textDecoration: "underline",
                marginBottom: 25,
                cursor: "pointer",
              }}
            >{`Retour`}</div>
            {succeded && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  minHeight: 250,
                }}
              >
                <img
                  src={
                    "https://cdn.prod.website-files.com/6814fb6db4d4a1fdce33564d/68245b3f9458e9f9ae392faf_check-square-svgrepo-com%20(1).png"
                  }
                  style={{
                    objectFit: "contain",

                    //backgroundColor: "#f5f5f5",
                    width: 120,
                    height: 120,
                  }}
                />
                <span
                  style={{
                    fontSize: 35,
                    fontWeight: "bold",
                    // maxWidth: "50%",
                    lineHeight: 1.1,
                    color: "green",
                    marginTop: 10,
                  }}
                >
                  {"Commande envoyée"}
                </span>
              </div>
            )}
            {!succeded && (
              <>
                <span
                  style={{
                    fontSize: 35,
                    fontWeight: "bold",
                    maxWidth: "50%",
                    lineHeight: 1.1,
                    color: "green",
                  }}
                >
                  {"Votre besoin"}
                </span>
                <ProgressBar value={percentage} />

                {page == 1 && (
                  <div
                    className="gap-x-2 "
                    style={{
                      display: "flex",
                      maxWidth: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: 20,
                    }}
                  >
                    {!data && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          minHeight: 220,
                        }}
                      >
                        <Spinner large />
                      </div>
                    )}
                    {data &&
                      data.items?.length &&
                      data.items.map((item, index) => (
                        <div
                          key={index}
                          style={{
                            borderWidth: 0,
                            borderColor: "green",
                            borderRadius: 20,
                            overflow: "hidden",
                            position: "relative",
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "center",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            onClick={() => {
                              setSelectedItems((prev) => {
                                if (prev.includes(item)) {
                                  return prev.filter((i) => i != item);
                                }
                                return [...prev, item];
                              });
                            }}
                            src={item?.fieldData?.image?.url}
                            width={"100%"}
                            style={{
                              objectFit: "cover",
                              flex: 1,

                              backgroundColor: "#f5f5f5",
                            }}
                          />
                          {selectedItems.includes(item) && (
                            <div
                              style={{
                                position: "absolute",
                                left: 0,
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 40,
                                backgroundColor: "green",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: 15,
                                  fontWeight: "normal",

                                  lineHeight: 1.1,
                                  color: "#fff",
                                }}
                              >
                                {"Sélectionné"}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                )}
                {page == 2 && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      marginTop: 20,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 19,
                        fontWeight: "bold",

                        lineHeight: 1.1,
                        color: "#444",
                      }}
                    >
                      Nom Complet *
                    </span>
                    <input
                      type="text"
                      placeholder="Nom Complet"
                      value={name}
                      onChange={(e) => {
                        e.preventDefault();
                        setName(e.target.value);
                      }}
                      style={{
                        minHeight: 60,
                        padding: 20,
                        width: "100%",
                        backgroundColor: "#eee",
                        borderRadius: 10,
                        marginTop: 15,
                        marginBottom: 20,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 19,
                        fontWeight: "bold",

                        lineHeight: 1.1,
                        color: "#444",
                      }}
                    >
                      Description de votre besoin
                    </span>
                    <textarea
                      placeholder="Décrivez votre besoin ici"
                      value={desc}
                      onChange={(e) => {
                        e.preventDefault();
                        setDesc(e.target.value);
                      }}
                      style={{
                        minHeight: 300,
                        padding: 20,
                        width: "100%",
                        backgroundColor: "#eee",
                        borderRadius: 10,
                        marginTop: 15,
                      }}
                    />
                  </div>
                )}
                {page == 3 && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 20,
                      minHeight: 250,
                    }}
                  >
                    {" "}
                    <div
                      style={{
                        fontSize: 16,
                        color: "blue",

                        marginBottom: 5,
                      }}
                    >{`Total`}</div>
                    <span
                      style={{
                        fontSize: 45,
                        fontWeight: "bold",

                        lineHeight: 1.1,
                        color: "green",
                      }}
                    >
                      {`${total}€`}
                    </span>
                  </div>
                )}
              </>
            )}
            <div
              className="gap-x-2"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                onClick={() => {
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
                  setPage((prev) => {
                    return prev + 1;
                  });
                }}
                className="hover:bg-green-200 "
                style={{
                  flex: 1,
                  height: 60,
                  cursor: "pointer",

                  border: "1px solid green",
                  justifyContent: "center",
                  display: "flex",

                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                {loading && <Spinner noAbsolute />}
                {!loading && (
                  <span
                    style={{
                      fontSize: 17,
                      fontWeight: "bold",

                      lineHeight: 1.1,
                      color: "green",
                    }}
                  >
                    {succeded
                      ? "Fermer"
                      : percentage == 100
                      ? "Envoyer"
                      : "Suivant"}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ProgressBar = ({ value, max = 100 }) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-6 relative mt-[15px]">
      <div
        className="bg-green-600 h-full rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      ></div>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-black">
        {Math.round(percentage)}%
      </span>
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

document.getElementById("mainbtn").addEventListener("click", function () {
  // Your code here
  ReactDOM.render(<FullModal />, document.getElementById("fullmodaldiv"));
});
