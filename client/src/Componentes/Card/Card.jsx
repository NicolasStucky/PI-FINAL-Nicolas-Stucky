// Card.jsx
import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ flags, name, population, subregion, area, continent, capital, id }) => {
  return (
    <div className={style.Card}>
      <div className={style.front}>
        <Link to={`/Detail/${id}`}>
          <img src={flags} alt={name} className={style.CardImage} />
        </Link>
      </div>
      <div className={style.back}>
        <h2>Name: {name}</h2>
        <h2>Continent: {continent}</h2>
        <h2>Capital: {capital}</h2>
        <h2>Area: {area}</h2>
        <h2>Subregion: {subregion}</h2>
        <h2>Population: {population}</h2>
      </div>
    </div>
  );
};

export default Card;




