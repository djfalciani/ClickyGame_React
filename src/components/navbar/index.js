import React from "react";
import "./style.css";

function navbar(props) {
  return (
    // Traditional Bootstrap...
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Clicky Game
      </a>
      <p className="navText">Score: {props.score}  |  Top Score: {props.topScore}</p>
      
    </nav>
  );
}

export default navbar;