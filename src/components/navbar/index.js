import React from "react";
import "./style.css";

function navbar(props) {
  return (
    // Traditional Bootstrap...
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <p>Score: {props.score}  |  Top Score: {props.topScore}</p>
      
    </nav>
  );
}

export default navbar;