import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getactivity } from "../../Redux/Actions";
import style from "./Activity.module.css";

const Activity = () => {
  const activities = useSelector((state) => state.activity); 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getactivity());
  }, [dispatch]);

  return (
    <div>
      <ul className={style.activityList}>
        {activities?.map((elemento, index) => (
          <li key={index} className={style.activityItem}>
            <div className={style.activityContent}>
              <strong>Actividad:</strong> {elemento.name}
              <br />
              <strong>Dificultad:</strong> {elemento.dificultad}
              <br />
              <strong>Duración:</strong> {elemento.duracion}
              <br />
              <strong>Temporada:</strong> {elemento.temporada}
              <br/>
              <strong>Paises:</strong> 
              {elemento.Countries &&
                elemento.Countries.map((country, countryIndex) => (
                  <li key={countryIndex}>{country.name}</li>
                ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activity;
