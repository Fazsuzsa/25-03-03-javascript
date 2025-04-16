import React from "react";

function TitelCard({ name, art, krankheit }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Art: {art}</p>
      <p>Krankheit: {krankheit}</p>
    </>
  );
}

export default TitelCard;
