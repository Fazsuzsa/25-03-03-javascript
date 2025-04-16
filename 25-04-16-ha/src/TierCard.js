import React from "react";

function TierCard({ name, art, krankheit }) {
  return (
    <>
      <p>
        <b>Name: {name}</b>
      </p>
      <p>Art: {art}</p>
      <p>Krankheit: {krankheit}</p>
    </>
  );
}

export default TierCard;
