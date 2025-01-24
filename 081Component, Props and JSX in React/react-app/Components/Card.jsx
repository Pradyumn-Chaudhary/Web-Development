import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem", height: "170px" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {props.subtitle}
        </h6>
        <p className="card-text">{props.cardtext}</p>
        <a href="#" className="card-link">
          See more
        </a>
        <a href="#" className="card-link">
          Check Out
        </a>
      </div>
    </div>
  );
};

export default Card;
