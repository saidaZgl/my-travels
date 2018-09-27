import React from "react";

const Travel = props => (
  <figure>
    <h2>{props.destination}</h2>
    <h3>{props.country}</h3>
    <img src={props.image} alt={props.destination} />
    <div>{props.Travel}</div>
    <p>{props.distance}</p>
  </figure>
);

export default Travel;