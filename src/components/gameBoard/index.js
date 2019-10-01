import React from "react";
import "./style.css";
import GameCard from '../gameCard';

function GameBoard() {
  return (
    <div className="container">
      <div className="gameBoard">
        <GameCard></GameCard>
      </div>
    </div>
  );
}

export default GameBoard;
