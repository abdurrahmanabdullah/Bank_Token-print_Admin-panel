// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useReactToPrint } from "react-to-print";
// import "./global.css";
// import history from "./history";

// const ReTest = () => {
//   const [inputs, setInputs] = useState({});
//   const [fields, setFields] = useState(null);
//   const [token, setToken] = useState("");
//   const state = useParams();
//   const getFields = async () => {
//     const res = await axios
//       .get("https://192.168.60.200:8001/count/get/option?base=select")
//       .then(function (response) {
//         return response?.data?.detail;
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//       .finally(function () {});
//     setFields(res);
//     console.log(res, "response?.data?.detail");
//   };
//   useEffect(() => {
//     getFields();
//   }, []);
//   const handleChange = (event) => {
//     var checkboxes = document.getElementsByName("check");
//     checkboxes.forEach((item) => {
//       if (item !== event.target) item.checked = false;
//     });
//     const name = event.target.id;
//     const value = event?.target?.checked;
//     setInputs({ [name]: value });
//     // setInputs(values => ({...values, [name]: value}))
//   };
//   const handleChangeM = (event) => {
//     const name = event.target.name;
//     const value = event?.target?.checked;
//     setInputs((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = async (event) => {
//     let name = "";
//     event.preventDefault();
//     fields?.map((item) => {
//       name = item?.name;
//     });

//     let param = [];
//     let count = 0;
//     Object.keys(inputs).map((key) => {
//       count += 1;
//       if (inputs[key]) {
//         param.push(`sub=${key}&`);
//       }
//     });
//     const char = param.join("").toString();
//     const params = char.slice(0, -1);
//     if (state === "special") {
//       if (params) {
//         const res = await axios
//           .get(
//             `https://192.168.60.200:8001/count/special/create/?base=select&${params}`
//           )
//           .then(function (response) {
//             return response;
//           })
//           .catch(function (error) {
//             console.log(error);
//           })
//           .finally(function () {});
//         if (res?.status === 200) {
//           setToken(res?.data);

//           history.push("/path1");
//         }
//       } else {
//         history.push("/path1");
//       }
//     } else {
//       if (params) {
//         const res = await axios
//           .get(`https://192.168.60.200:8001/count/create/?base=select&${params}`)
//           .then(function (response) {
//             return response;
//           })
//           .catch(function (error) {
//             console.log(error);
//           })
//           .finally(function () {});
//         if (res?.status === 200) {
//           setToken(res?.data);

//           history.push("/path1");
//         }
//       } else {
//         history.push("/path1");
//       }
//     }
//   };

//   const handleSubmitM = async (event) => {
//     let name = "";
//     event.preventDefault();
//     fields?.map((item) => {
//       name = item?.name;
//     });

//     let param = [];
//     let count = 0;
//     Object.keys(inputs).map((key) => {
//       count += 1;
//       if (inputs[key]) {
//         param.push(`sub=${key}&`);
//       }
//     });
//     const char = param.join("").toString();
//     const params = char.slice(0, -1);
//     if (params) {
//       const res = await axios
//         .get(`https://192.168.60.200:8001/count/create/?base=select&${params}`)
//         .then(function (response) {
//           return response;
//         })
//         .catch(function (error) {
//           console.log(error);
//         })
//         .finally(function () {});
//       if (res?.status === 200) {
//         setToken(res?.data);

//         history.push("/path1");
//       }
//     } else {
//       history.push("/path1");
//     }
//   };

//   const date = () => {
//     const x = new Date();

//     const y = "0" + x.getHours();
//     const z = "0" + x.getMinutes();
//     const s = "0" + x.getSeconds();
//     const h = "0" + x.getDate();
//     const ano = x.getFullYear().toString().substr(-2);
//     const ms = x.getMonth();
//     const meses = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "June",
//       "July",
//       "Aug",
//       "Sept",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];

//     return (
//       y.substr(-2) +
//       ":" +
//       z.substr(-2) +
//       ":" +
//       s.substr(-2) +
//       " -  " +
//       h.substr(-2) +
//       "/" +
//       meses[ms]
//     );
//   };

//   const data = [
//     {
//       id: 1,
//       name: "Option 1",
//       value: "Option1",
//     },
//     {
//       id: 1,
//       name: "Option 2",
//       value: "Option2",
//     },
//     {
//       id: 1,
//       name: "Option 3",
//       value: "Option3",
//     },
//     {
//       id: 1,
//       name: "Option 4",
//       value: "Option4",
//     },
//     {
//       id: 1,
//       name: "Option 5",
//       value: "Option5",
//     },
//   ];
//   return (
//     <div>
//       {console.log(fields, "fields")}
//       <div className="rContainer">
//         <form className="retestForm" onSubmit={handleSubmit}>
//           {console.log(fields, "fields")}
//           {fields?.map((item) => (
//             <label class="icontainer">
//               {item?.name}
//               {console.log(item.name)}
//               <input
//                 className="checkbox"
//                 type="checkbox"
//                 name="check"
//                 id={item?.value}
//                 value={inputs.item?.value || ""}
//                 onChange={handleChange}
//               />
//               <span class="checkmark"></span>
//             </label>
//           ))}
//           <br />
//           <br />
//           {fields && (
//             <button className="rbtn" type="submit">
//               Ok
//             </button>
//           )}
//         </form>

//         <br />
//         <div
//           style={{
//             position: "absolute",
//             bottom: "0",
//             left: "0",
//             marginLeft: "1vw",
//           }}
//         >
//           <img src="./qbot.png" style={{ width: "150px" }} alt="Logo" />
//           <p
//             style={{
//               color: "black",
//               margin: "0.5em auto",
//               marginTop: "0",
//               fontFamily: "Georgia, monospace",
//             }}
//           >
//             Queue Management Solution
//           </p>
//         </div>
//         {/* <marquee className="addv">
//           A product of Transworld Mercantile Corporation. For more information
//           please visit <strong>www.transworldbd.com</strong> or call{" "}
//           <strong>+880 9613848484, +880 1860877300</strong>
//         </marquee> */}
//       </div>
//     </div>
//   );
// };

// export default ReTest;

///--------------------------------here righ button disable and work fine but problem is if admin panel name change then  not work

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./global.css";
import history from "./history";
import { Link } from "react-router-dom";
const ReTest = () => {
  const [inputs, setInputs] = useState({});
  const [fields, setFields] = useState(null);
  const [token, setToken] = useState("");
  const state = useParams();

  useEffect(() => {
    const getFields = async () => {
      try {
        const response = await axios.get(
          "https://192.168.60.200:8001/count/get/option?base=select"
        );
        setFields(response?.data?.detail);
      } catch (error) {
        console.log(error);
      }
    };
    getFields();

    // Disable right-click
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.checked;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const handleRefresh = (event) => {
    event.preventDefault();
    window.location.reload();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const selectedOptions = Object.keys(inputs).filter(
      (key) => inputs[key] === true
    );
    const params = selectedOptions.map((key) => `sub=${key}`).join("&");

    let url = "";
    if (state === "special") {
      url = `https://192.168.60.200:8001/count/special/create/?base=select&${params}`;
    } else {
      url = `https://192.168.60.200:8001/count/create/?base=select&${params}`;
    }

    if (params) {
      try {
        const res = await axios.get(url);
        if (res?.status === 200) {
          setToken(res?.data);
          history.push("/path1");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      history.push("/path1");
    }
  };

  return (
    <div>
      <div className="rContainer">
        <form
          className="retestForm"
          style={{ marginTop: "20%" }}
          onSubmit={handleSubmit}
        >
          {fields?.map((item) => (
            <label className="icontainer" key={item.id}>
              {item.name}
              <input
                className="checkbox"
                type="checkbox"
                name={item.value}
                id={item.value}
                checked={inputs[item.value] || false}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
          ))}
          <br />
          <br />
          {fields && (
            <button className="rbtn" type="submit">
              Ok
            </button>
          )}
        </form>

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

        {/* <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            marginLeft: "1vw",
          }}
        >
          <img src="./qbot.png" style={{ width: "150px" }} alt="Logo" />
          <p
            style={{
              color: "black",
              margin: "0.5em auto",
              marginTop: "0",
              fontFamily: "Georgia, monospace",
            }}
          >
            Queue Management Solution
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ReTest;
////---------------latest modification 

///--------------------------- male doctor  click then male x ray select same condition for female one
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./global.css";
// import history from "./history";
// import { Link } from "react-router-dom";

// const ReTest = () => {
//   const [inputs, setInputs] = useState({});
//   const [fields, setFields] = useState(null);
//   const [token, setToken] = useState("");
//   const state = useParams();

//   useEffect(() => {
//     const getFields = async () => {
//       try {
//         const response = await axios.get(
//           "http://127.0.0.1:8000/count/get/option?base=select"
//         );
//         const filteredFields = response?.data?.detail.filter((item) =>
//           ["MDOC", "FDOC"].includes(item.value)
//         );
//         setFields(filteredFields);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getFields();

//     const handleContextMenu = (event) => {
//       event.preventDefault();
//     };
//     document.addEventListener("contextmenu", handleContextMenu);

//     return () => {
//       document.removeEventListener("contextmenu", handleContextMenu);
//     };
//   }, []);
//   const handleChange = (event) => {
//     const name = event.target.id;
//     const value = event.target.checked;

//     setInputs((prevInputs) => {
//       const updatedInputs = { ...prevInputs, [name]: value };

//       // Ensure mutual exclusivity
//       if (value) {
//         if (name === "MDOC") {
//           updatedInputs["FDOC"] = false;
//         } else if (name === "FDOC") {
//           updatedInputs["MDOC"] = false;
//         }
//       }

//       // Auto-select logic
//       if (name === "MDOC" && value) {
//         updatedInputs["MXRA"] = true;
//       } else if (name === "FDOC" && value) {
//         updatedInputs["FXRA"] = true;
//       }

//       // Deselect dependencies if unchecked
//       if (name === "MDOC" && !value) {
//         updatedInputs["MXRA"] = false;
//       } else if (name === "FDOC" && !value) {
//         updatedInputs["FXRA"] = false;
//       }

//       return updatedInputs;
//     });
//   };

//   const handleRefresh = (event) => {
//     event.preventDefault();
//     window.location.reload();
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Collect selected options, ensuring dependencies are included
//     const selectedOptions = Object.keys(inputs).filter(
//       (key) => inputs[key] === true
//     );

//     let url = "";
//     if (state === "special") {
//       url = `http://127.0.0.1:8000/count/special/create/?base=select`;
//     } else {
//       url = `http://127.0.0.1:8000/count/create/?base=select`;
//     }

//     const params = selectedOptions.map((key) => `sub=${key}`).join("&");

//     if (params) {
//       try {
//         const res = await axios.get(`${url}&${params}`);
//         if (res?.status === 200) {
//           setToken(res?.data);
//           history.push("/path1");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       history.push("/path1");
//     }
//   };

//   return (
//     <div>
//       <div className="rContainer">
//         <form
//           className="retestForm"
//           style={{ marginTop: "20%" }}
//           onSubmit={handleSubmit}
//         >
//           {fields?.map((item) => (
//             <label className="icontainer" key={item.id}>
//               {item.name}
//               <input
//                 className="checkbox"
//                 type="checkbox"
//                 name={item.value}
//                 id={item.value}
//                 checked={inputs[item.value] || false}
//                 onChange={handleChange}
//               />
//               <span className="checkmark"></span>
//             </label>
//           ))}
//           <br />
//           <br />
//           {fields && (
//             <button className="rbtn" type="submit">
//               Ok
//             </button>
//           )}
//         </form>

//         <br />

//         <div style={{ justifyContent: "center", marginLeft: "1%" }}>
//           <Link to="#" onClick={handleRefresh}>
//             <img
//               className="staticImg"
//               src="assets/qbot_1.png"
//               width="120px"
//               alt="QBot"
//             />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReTest;
