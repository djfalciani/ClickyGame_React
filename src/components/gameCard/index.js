import React from "react";
import "./style.css";

function GameCard(props) {
  return (
    <div className="card" onClick={() => props.handleItemClick(props.id)}>
        <img src={props.image} className="card-img-top" alt={props.name}/>
        {/* <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.clicked}</p>
        </div> */}
        
    </div>
  );
}

export default GameCard;
