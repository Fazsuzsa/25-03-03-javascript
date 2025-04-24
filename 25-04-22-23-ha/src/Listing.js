import React from "react";
import "./Listing.css";

function Listing(props) {
  return (
    <div className="listing">
      <img src={props.image} height="200px"></img>
      <h2>{props.name}</h2>
      <p>
        <b>{props.laenge} km</b> / {props.oben} m ↑ / {props.unten} m ↓
      </p>
    </div>
  );
}

export default Listing;
