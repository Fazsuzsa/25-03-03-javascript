import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Map from "./Map";
import Accomodation from "./Accomodation";
import Wetter from "./Wetter";
import Pokemon from "./Pokemon";
import PokeDex from "./PokeDex";

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
        <Route path="/weather" element={<Wetter></Wetter>}></Route>
        <Route path="/pokemon" element={<Pokemon></Pokemon>}></Route>
        <Route path="/pokedex/:id" element={<PokeDex></PokeDex>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
