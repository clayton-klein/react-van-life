import React from "react";
import { useEffect, useState } from "react";
import "../styles/Vans.css";
// import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans") // get data from mirage.js server
      .then((resp) => resp.json())
      .then((data) => setVans(data.vans))
      .catch((err) => console.error(err));
  }, []);

  let vansElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vansElements}</div>
    </div>
  );
}
