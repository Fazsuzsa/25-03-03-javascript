import React from "react";

function Komponente({ Name }) {
  return <div>Hallo lieber {Name}!</div>;
}

// oder:
// function Komponente(props) {
//   return <div>Hallo lieber {props.Name}!</div>;
// }

export default Komponente;
