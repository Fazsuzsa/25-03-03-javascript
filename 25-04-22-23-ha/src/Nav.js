import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navContainer">
      <Link to="/">Home</Link>
      <Link to="/map">Karte</Link>
      <Link to="/accomodation">Unterkunft</Link>
      <Link to="/weather">Wetter</Link>
      <Link to="/contact">Kontakt</Link>
    </nav>
  );
}

export default Nav;
