import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Map from "./Map";
import Accomodation from "./Accomodation";
import Contact from "./Contact";
import Impressum from "./Impressum";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/map" element={<Map></Map>}></Route>
        <Route
          path="/accomodation"
          element={<Accomodation></Accomodation>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/impressum" element={<Impressum></Impressum>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
