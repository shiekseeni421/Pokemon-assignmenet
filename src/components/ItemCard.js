import React from "react";
import "./index.scss";

function ItemCard({ OnClickEvent, Name, Index }) {
  return (
    <div className="card-container">
      <h1>{Name}</h1>
      <button
        className="Item-button"
        onClick={() => {
          OnClickEvent(Index, Name);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default ItemCard;
