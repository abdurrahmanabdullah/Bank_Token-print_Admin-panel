// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { useReactToPrint } from "react-to-print";
// import "./global.css";
// import history from "./history";

// const Other = () => {
//   const [fields, setFields] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [token, setToken] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isBackendError, setIsBackendError] = useState(false);

//   const getFields = async () => {
//     try {
//       const response = await axios.get(
//         "https://192.168.60.200:8001/count/get/option?base=single"
//       );
//       setFields(response.data.detail);
//       setIsBackendError(false); // Clear error if successful
//     } catch (error) {
//       setErrorMessage("Server is not connected. Please try again later.");
//       setIsBackendError(true); // Set backend error state
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getFields();
//   }, []);

//   useEffect(() => {
//     const handleContextMenu = (event) => {
//       event.preventDefault();
//     };

//     document.addEventListener("contextmenu", handleContextMenu);
//     return () => {
//       document.removeEventListener("contextmenu", handleContextMenu);
//     };
//   }, []);

//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   const handleRefresh = (event) => {
//     event.preventDefault(); // Prevent default action
//     window.location.reload();
//   };

//   const handleButtonClick = async (value) => {
//     setSelectedOption(value);
//     try {
//       const response = await axios.get(
//         `https://192.168.60.200:8001/count/create/?base=single&sub=${value}`
//       );
//       if (response.status === 200) {
//         setToken(response.data);
//         handlePrint();
//         history.push("/path1");
//       }
//     } catch (error) {

//       console.log(error);
//     }
//   };

//   const componentRef = useRef();

//   return (
//     <div>
//       <div className="rContainer">
//         <div className="header">
//           {!isBackendError && (
//             <img
//               className="logo"
//               src="https://192.168.60.200:8001/dekstop/logo/read/logo.png"
//               alt="logo"
//               width="500px"
//             />
//           )}
//         </div>

//         <div className="buttonContainer">
//           {fields?.map((item) => (
//             <button
//               key={item.id}
//               className="rbtn"
//               onClick={() => handleButtonClick(item.value)}
//             >
//               {item.name}
//             </button>
//           ))}
//         </div>

//         {errorMessage && (
//           <div className="error-message" style={styles.errorMessage}>
//             <p>{errorMessage}</p>
//           </div>
//         )}

//         <br />

//         <div style={{ justifyContent: "center", marginLeft: "3%" }}>
//           <Link to="#" onClick={handleRefresh}>
//             <img
//               className="staticImg"
//               style={{ marginTop: "0%" }}
//               src="assets/qbot.png"
//               width="120px"
//               alt="QBot"
//             />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   errorMessage: {
//     color: "red",
//     fontWeight: "bold",
//     marginTop: "20px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     textAlign: "center",
//   },
// };

// export default Other;

///------------------------------work but not responsive

// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { useReactToPrint } from "react-to-print";
// import "./global.css";
// import history from "./history";

// const Other = () => {
//   const [fields, setFields] = useState([]);
//   //service 2
//   const [field1, setField1] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [token, setToken] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isBackendError, setIsBackendError] = useState(false);
//   const [options2, setOptions2] = useState("");

//   //service 2
//   const getData = async () => {
//     const res = await axios.get("https://192.168.60.200:8001/dekstop/name/show");
//     const res1 = await axios
//       .get("https://192.168.60.200:8001/dekstop/all/view")
//       .then(function (response) {
//         return response;
//       })

//       .catch(function (error) {
//         // handle error
//         // console.log(error);
//       })
//       .finally(function () {
//         // always executed
//       });
//     const res2 = await axios
//       .get("https://192.168.60.200:8001/dekstop/all/view")
//       .then(function (response) {
//         // handle success
//         console.log("response in home 31", response);
//         return response;
//       })
//       .catch(function (error) {})
//       .finally(function () {
//         // always executed
//       });

//     if (res1.status === 200) {
//       setOptions2(res1?.data);
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   const getFields = async () => {
//     try {
//       const response = await axios.get(
//         "https://192.168.60.200:8001/count/get/option?base=single"
//       );
//       setFields(response.data.detail);
//       setIsBackendError(false); // Clear error if successful
//     } catch (error) {
//       setErrorMessage("Server is not connected. Please try again later.");
//       setIsBackendError(true); // Set backend error state
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getFields();
//     //service 2
//     // getField1();
//   }, []);

//   useEffect(() => {
//     const handleContextMenu = (event) => {
//       event.preventDefault();
//     };

//     document.addEventListener("contextmenu", handleContextMenu);
//     return () => {
//       document.removeEventListener("contextmenu", handleContextMenu);
//     };
//   }, []);

//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   const handleRefresh = (event) => {
//     event.preventDefault(); // Prevent default action
//     window.location.reload();
//   };

//   const handleButtonClick = async (value) => {
//     setSelectedOption(value);
//     try {
//       const response = await axios.get(
//         `https://192.168.60.200:8001/count/create/?base=single&sub=${value}`
//       );
//       if (response.status === 200) {
//         setToken(response.data);
//         handlePrint();
//         history.push("/path1");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const componentRef = useRef();

//   return (
//     <div>
//       <div className="rContainer">
//         <div className="header">
//           {!isBackendError && (
//             <img
//               className="logo"
//               src="https://192.168.60.200:8001/dekstop/logo/read/logo.png"
//               alt="logo"
//               width="500px"
//             />
//           )}
//         </div>

//         <div className="buttonContainer">
//           {fields?.map((item) => (
//             <button
//               key={item.id}
//               className="rbtn"
//               onClick={() => handleButtonClick(item.value)}
//             >
//               {item.name}
//             </button>
//           ))}

//           {/* // sevice 2  */}

//           {/* {field1?.map((item) => (
//             <button key={item.name} className="rbtn">
//               {item.name}
//             </button>
//           ))} */}
//         </div>

//         {/* /// service 2  */}

//         <div
//           style={{
//             aligSelf: "center",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           {/* {options
//             ? options?.map((item) => (
//                 <>
//                   {item?.categories === "mandatory" ? (
//                     <button className="btn">{item?.name}</button>
//                   ) : null}
//                   {item?.categories === "normal" ? (
//                     <>
//                       <button
//                         className="btn"
//                         onClick={() => history.push("/path2")}
//                         style={{ marginBottom: "20px" }}
//                       >
//                         {item?.name}
//                       </button>

//                     </>
//                   ) : null}
//                   {item?.categories === "single" ? (
//                     <button
//                       class="btn"
//                       onClick={() => history.push("/path3")}
//                       style={{ marginBottom: "20px" }}
//                     >
//                       {item?.name}
//                     </button>
//                   ) : null}
//                 </>
//               ))
//             : null} */}

//           {options2
//             ? options2?.map((item) => (
//                 <>
//                   {item?.categories === "mandatory" ? (
//                     <button className="rbtn">{item?.name}</button>
//                   ) : null}
//                   {item?.categories === "normal" ? (
//                     <>
//                       <button
//                         className="rbtn"
//                         onClick={() => history.push("/path4")}
//                         style={{ marginBottom: "35%" }}
//                       >
//                         {item?.name}
//                       </button>
//                     </>
//                   ) : null}
//                   {/* {item?.categories === "single" ? (
//                     <button class="btn" onClick={() => history.push("/path3")}>
//                       {item?.name}
//                     </button>
//                   ) : null} */}
//                 </>
//               ))
//             : null}
//         </div>

//         {errorMessage && (
//           <div className="error-message" style={styles.errorMessage}>
//             <p>{errorMessage}</p>
//           </div>
//         )}

//         <br />

//         <div style={{ justifyContent: "center", marginLeft: "3%" }}>
//           <Link to="#" onClick={handleRefresh}>
//             <img
//               className="staticImg"
//               style={{ marginTop: "0%" }}
//               src="assets/qbot.png"
//               width="120px"
//               alt="QBot"
//             />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   errorMessage: {
//     color: "red",
//     fontWeight: "bold",
//     marginTop: "20px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     textAlign: "center",
//   },
// };

// export default Other;

//// ------------------ for ab bank

// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { useReactToPrint } from "react-to-print";
// import "./global.css";
// import history from "./history";

// const Other = () => {
//   const [fields, setFields] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [token, setToken] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isBackendError, setIsBackendError] = useState(false);
//   const [options2, setOptions2] = useState("");

//   const getData = async () => {
//     try {
//       const res1 = await axios.get("https://192.168.60.200:8001/dekstop/all/view");
//       if (res1.status === 200) {
//         setOptions2(res1?.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getData();

//     // Disable right-click
//     const handleContextMenu = (event) => {
//       event.preventDefault();
//     };
//     document.addEventListener("contextmenu", handleContextMenu);

//     return () => {
//       document.removeEventListener("contextmenu", handleContextMenu);
//     };
//   }, []);

//   const getFields = async () => {
//     try {
//       const response = await axios.get(
//         "https://192.168.60.200:8001/count/get/option?base=single"
//       );
//       setFields(response.data.detail);
//       setIsBackendError(false);
//     } catch (error) {
//       setErrorMessage("Server is not connected. Please try again later.");
//       setIsBackendError(true);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getFields();
//   }, []);

//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   const handleRefresh = (event) => {
//     event.preventDefault();
//     window.location.reload();
//   };

//   const handleButtonClick = async (value) => {
//     setSelectedOption(value);
//     try {
//       const response = await axios.get(
//         `https://192.168.60.200:8001/count/create/?base=single&sub=${value}`
//       );
//       if (response.status === 200) {
//         setToken(response.data);
//         handlePrint();
//         history.push("/path1");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const componentRef = useRef();

//   // Determine if new services have been added
//   const isServiceAdded = options2?.length > 0;

//   return (
//     <div className={`rContainer ${isServiceAdded ? "smallScreen" : ""}`}>
//       <div className="header">
//         {!isBackendError && (
//           <img
//             style={{ marginBottom: "20%" }}
//             className={`logo ${isServiceAdded ? "smallLogo" : ""}`}
//             src="https://192.168.60.200:8001/dekstop/logo/read/logo.png"
//             alt="logo"
//             width="500px"
//           />
//         )}
//       </div>

//       <div className="buttonContainer">
//         {fields?.map((item) => (
//           <button
//             key={item.id}
//             className="rbtn"
//             onClick={() => handleButtonClick(item.value)}
//           >
//             {item.name}
//           </button>
//         ))}
//       </div>

//       <div
//         style={{
//           alignSelf: "center",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         {options2
//           ? options2?.map((item) => (
//               <>
//                 {item?.categories === "mandatory" ? (
//                   <button className="rbtn">{item?.name}</button>
//                 ) : null}
//                 {item?.categories === "normal" ? (
//                   <>
//                     <button
//                       className="rbtn"
//                       onClick={() => history.push("/path4")}
//                     >
//                       {item?.name}
//                     </button>
//                   </>
//                 ) : null}
//               </>
//             ))
//           : null}
//       </div>

//       {errorMessage && (
//         <div className="error-message" style={styles.errorMessage}>
//           <p>{errorMessage}</p>
//         </div>
//       )}

//       <br />

//       <div style={{ justifyContent: "center", marginLeft: "1%" }}>
//         <Link to="#" onClick={handleRefresh}>
//           <img
//             className="staticImg"
//             src="assets/qbot_1.png"
//             width="120px"
//             alt="QBot"
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   errorMessage: {
//     color: "red",
//     fontWeight: "bold",
//     marginTop: "20px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     textAlign: "center",
//   },
// };

// export default Other;
///---------for service 1 scroll
///---------------------------------------work fine
// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { useReactToPrint } from "react-to-print";
// import "./global.css";
// import history from "./history";

// const Other = () => {
//   const [fields, setFields] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [token, setToken] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isBackendError, setIsBackendError] = useState(false);
//   const [options2, setOptions2] = useState("");
//   const scrollableFormRef = useRef(null);
//   const getData = async () => {
//     try {
//       const res1 = await axios.get(
//         "https://192.168.60.200:8001/dekstop/all/view"
//       );
//       if (res1.status === 200) {
//         setOptions2(res1?.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getData();

//     // Disable right-click
//     const handleContextMenu = (event) => {
//       event.preventDefault();
//     };
//     document.addEventListener("contextmenu", handleContextMenu);

//     return () => {
//       document.removeEventListener("contextmenu", handleContextMenu);
//     };
//   }, []);

//   const getFields = async () => {
//     try {
//       const response = await axios.get(
//         "https://192.168.60.200:8001/count/get/option?base=single"
//       );
//       setFields(response.data.detail);
//       setIsBackendError(false);
//     } catch (error) {
//       // setErrorMessage("Server is not connected. Please try again later.");
//       setIsBackendError(true);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getFields();
//   }, []);

//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   const handleRefresh = (event) => {
//     event.preventDefault();
//     window.location.reload();
//   };

//   const handleButtonClick = async (value) => {
//     setSelectedOption(value);
//     try {
//       const response = await axios.get(
//         `https://192.168.60.200:8001/count/create/?base=single&sub=${value}`
//       );
//       if (response.status === 200) {
//         setToken(response.data);
//         handlePrint();
//         history.push("/path1");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const componentRef = useRef();

//   // Determine if new services have been added
//   const isServiceAdded = options2?.length > 0;

//   return (
//     <div className={`rContainer ${isServiceAdded ? "smallScreen" : ""}`}>
//       <div className="header">
//         {!isBackendError && (
//           <img
//             style={{ marginBottom: "20%" }}
//             className={`logo ${isServiceAdded ? "smallLogo" : ""}`}
//             src="https://192.168.60.200:8001/dekstop/logo/read/logo.png"
//             alt="logo"
//             width="500px"
//           />
//         )}
//       </div>
//       {/* ///-----for service 1 */}

//       <div
//         className="scrollable-form"
//         style={{ maxHeight: "1000px", overflowY: "auto" }}
//         ref={scrollableFormRef}
//       >
//         {" "}
//         <div className="buttonContainer">
//           {fields?.map((item) => (
//             <button
//               key={item.id}
//               className="rbtn"
//               onClick={() => handleButtonClick(item.value)}
//             >
//               {item.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div
//         style={{
//           alignSelf: "center",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         {options2
//           ? options2?.map((item) => (
//               <>
//                 {item?.categories === "mandatory" ? (
//                   <button className="rbtn">{item?.name}</button>
//                 ) : null}
//                 {item?.categories === "normal" ? (
//                   <>
//                     <button
//                       className="rbtn"
//                       onClick={() => history.push("/path4")}
//                     >
//                       {item?.name}
//                     </button>
//                   </>
//                 ) : null}
//               </>
//             ))
//           : null}
//       </div>

//       {errorMessage && (
//         <div className="error-message" style={styles.errorMessage}>
//           <p>{errorMessage}</p>
//         </div>
//       )}

//       <br />

//       <div style={{ justifyContent: "center", marginLeft: "1%" }}>
//         <Link to="#" onClick={handleRefresh}>
//           <img
//             className="staticImg"
//             src="assets/qbot_1.png"
//             width="120px"
//             alt="QBot"
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   errorMessage: {
//     color: "red",
//     fontWeight: "bold",
//     marginTop: "20px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     textAlign: "center",
//   },
// };

// export default Other;
///-------------------------logo is not show
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import "./global.css";
import history from "./history";

const Other = () => {
  const [fields, setFields] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isBackendError, setIsBackendError] = useState(false);
  const [options2, setOptions2] = useState("");
  const scrollableFormRef = useRef(null);
  const getData = async () => {
    try {
      const res1 = await axios.get(
        "https://192.168.60.200:8001/dekstop/all/view"
      );
      if (res1.status === 200) {
        setOptions2(res1?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();

    // Disable right-click
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const getFields = async () => {
    try {
      const response = await axios.get(
        "https://192.168.60.200:8001/count/get/option?base=single"
      );
      console.log(response.data);
      setFields(response.data.detail);
      setIsBackendError(false);
    } catch (error) {
      // setErrorMessage("Server is not connected. Please try again later.");
      setIsBackendError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getFields();
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleRefresh = (event) => {
    event.preventDefault();
    window.location.reload();
  };

  const handleButtonClick = async (value) => {
    setSelectedOption(value);
    try {
      const response = await axios.get(
        `https://192.168.60.200:8001/count/create/?base=single&sub=${value}`
      );
      if (response.status === 200) {
        setToken(response.data);
        handlePrint();
        history.push("/path1");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const componentRef = useRef();

  // Determine if new services have been added
  const isServiceAdded = options2?.length > 0;

  return (
    <div className={`rContainer ${isServiceAdded ? "smallScreen" : ""}`}>
      <div className="header">
        {
          <img
            style={{ marginBottom: "20%" }}
            className={`logo ${isServiceAdded ? "smallLogo" : ""}`}
            src="https://192.168.60.200:8001/dekstop/logo/read/logo.png"
            alt="logo"
            width="500px"
          />
        }
      </div>
      {/* ///-----for service 1 */}

      <div
        className="scrollable-form"
        style={{ maxHeight: "1000px", overflowY: "auto" }}
        ref={scrollableFormRef}
      >
        {" "}
        <div className="buttonContainer">
          {fields?.map((item) => (
            <button
              key={item.id}
              className="rbtn"
              onClick={() => handleButtonClick(item.value)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {options2
          ? options2?.map((item) => (
              <>
                {item?.categories === "mandatory" ? (
                  <button className="rbtn">{item?.name}</button>
                ) : null}
                {item?.categories === "normal" ? (
                  <>
                    <button
                      className="rbtn"
                      onClick={() => history.push("/path4")}
                    >
                      {item?.name}
                    </button>
                  </>
                ) : null}
              </>
            ))
          : null}
      </div>

      {errorMessage && (
        <div className="error-message" style={styles.errorMessage}>
          <p>{errorMessage}</p>
        </div>
      )}

      <br />

      <div style={{ justifyContent: "center", marginLeft: "1%" }}>
        <Link to="#" onClick={handleRefresh}>
          <img
            className="staticImg"
            src="assets/qbot_1.png"
            width="120px"
            alt="QBot"
          />
        </Link>
      </div>
    </div>
  );
};

const styles = {
  errorMessage: {
    color: "red",
    fontWeight: "bold",
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  },
};

export default Other;
