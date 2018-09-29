import React from "react";
import Travel from "./Travel";

// src/Travels.js
const travels = [
  {
    destination: "San Francisco",
    country: "USA",
    photo: "https://media.routard.com/image/93/3/photo.1425933.w630.jpg",
    distance: "9161"
  },
  {
    destination: "Tokyo",
    country: "Japon",
    photo: "https://media.routard.com/image/39/5/tokyo.1484395.c1000x300.jpg",
    distance: "9596"
  },
  {
    destination: "Trinidad",
    country: "Cuba",
    photo: "https://media.routard.com/image/93/7/photo.1531937.w630.jpg",
    distance: "7649"
  },
  {
    destination: "Tirtagangga",
    country: "Bali",
    photo: "https://media.routard.com/image/28/3/photo.1530283.w630.jpg",
    distance: "12399"
  },
  {
    destination: "Dubrovnik",
    country: "Croatie",
    photo: "https://media.routard.com/image/26/4/photo.1443264.w630.jpg",
    distance: "1407"
  },
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance}/>
    ))}
  </div>
);

export default Travels;