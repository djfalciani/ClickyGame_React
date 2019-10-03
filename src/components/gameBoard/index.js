import React from "react";
import "./style.css";

function GameBoard(props) {
  return <div className="card-deck">{props.children}</div>
}

export default GameBoard;
