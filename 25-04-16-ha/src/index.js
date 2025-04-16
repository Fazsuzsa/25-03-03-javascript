import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Titel from "./Titel";
import TierCard from "./TierCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Titel />
    <TierCard name="Leo" art="Löwe" krankheit="Zahnentzündung" />{" "}
    <TierCard name="Bella" art="Katze" krankheit="Nierenschwäche" />{" "}
    <TierCard name="Max" art="Hund" krankheit="Arthrose" />{" "}
    <TierCard name="Lilli" art="Kaninchen" krankheit="Schnupfen" />{" "}
    <TierCard name="Coco" art="Papagei" krankheit="Federverlust" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
