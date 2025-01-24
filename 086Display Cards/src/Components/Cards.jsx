import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Card.css"

const Cards = () => {
    const [data, updateData] = useState([]);
    
    // Fetch data using useEffect
    useEffect(
        () => {
            const fetchData = async () => {
                try {
                    let response = await fetch(
                        "https://jsonplaceholder.typicode.com/posts"
                    );
                    let Data = await response.json();
                    updateData(Data);
                } catch(error) {
                    console.log("Failed to fetch Data", error);
                }
            };
            fetchData();
        },[]);// Empty dependency array ensures this runs once on mount


  return (
    <div className="Card-Container">
      {data.map((props) => {
          return (
              <div key={props.id} className="card" style={{ width: "18rem", margin: "1rem" }}>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.body}</p>
              <span href="#" className="card-link">
                userId: {props.userId}
              </span>
              <span href="#" className="card-link">
                Id: {props.id}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
