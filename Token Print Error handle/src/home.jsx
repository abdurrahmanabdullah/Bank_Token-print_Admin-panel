// ///----------------------------------- final part of mine
// import React, { useEffect, useRef, useState } from "react";
// import { useReactToPrint } from "react-to-print";
// import { Router, Route, Switch, Link, Redirect } from "react-router-dom";
// import axios from "axios";
// import history from "./history";

// const Home = () => {
//   const [token, setToken] = useState("");
//   const [options, setOptions] = useState("");
//   const [options2, setOptions2] = useState("");
//   const [fields, setFields] = useState(null);
//   /// my part
//   const [inputs, setInputs] = useState({});

//   const getData = async () => {
//     const res = await axios.get("https://192.168.60.200:8001/dekstop/name/show");
//     const res1 = await axios
//       .get("https://192.168.60.200:8001/dekstop/all/view")
//       .then(function (response) {
//         return response;
//       })
//       .catch(function (error) {})
//       .finally(function () {});

//     if (res1.status === 200) {
//       setOptions(res1?.data);
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   ///--------------------my part

//   const getFields = async () => {
//     const res = await axios
//       .get("https://192.168.60.200:8001/count/get/option?base=select")
//       .then(function (response) {
//         console.log("response.data.detail", response.data.detail);
//         return response?.data?.detail;
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//       .finally(function () {});
//     setFields(res);
//   };
//   useEffect(() => {
//     getFields();
//   }, []);

//   const handleChange = (event) => {
//     var checkboxes = document.getElementsByName("check");

//     const name = event.target.id;
//     const value = event?.target?.checked;

//     setInputs((values) => ({ ...values, [name]: value }));
//   };

//   const componentRef = useRef();
//   const handle = useReactToPrint({
//     content: () => componentRef.current,
//   });

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

//     const handleSubmitM = async (event) => {
//       let name = "";
//       event.preventDefault();
//       fields?.map((item) => {
//         name = item?.name;
//       });

//       let param = [];
//       let count = 0;
//       Object.keys(inputs).map((key) => {
//         count += 1;
//         if (inputs[key]) {
//           param.push(`sub=${key}&`);
//         }
//       });
//       const char = param.join("").toString();
//       const params = char.slice(0, -1);
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
//     };

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
//   return (
//     <>
//       <div className="container">
//         <div className="header">
//           <img
//             className="logo"
//             src="https://192.168.60.200:8001/dekstop/logo/read/logo.png"
//             alt=""
//             width="350px"
//           />
//         </div>
//         <div
//           style={{
//             aligSelf: "center",
//             display: "flex",
//             flexDirection: "column",
//             marginBottom: "40%",
//           }}
//         >
//           {options
//             ? options?.map((item) => (
//                 <>
//                   {item?.categories === "mandatory" ? (
//                     <button className="btn">{item?.name}</button>
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
//             : null}
//         </div>

//         <div
//           style={{
//             position: "absolute",
//             bottom: "2%",
//             left: "2%",
//             marginLeft: "1vw",
//           }}
//         >
//           <a
//             href="#"
//             onClick={() => {
//               window.location.reload();
//             }}
//           >
//             <img src="./qbot.png" style={{ width: "150px" }} alt="Logo" />
//           </a>

//           <p
//             style={{
//               color: "black",
//               margin: "0.5em auto",
//               marginTop: "0",
//               fontFamily: "Georgia, monospace",

//               userSelect: "none",
//             }}
//           >
//             Queue Management Solution
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
