import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountriesForId } from '../../Redux/Actions';
import { useParams } from 'react-router-dom';
import style from '../Detail/Detail.module.css';

const Detail = () => {
  const detaild = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountriesForId(id));
  }, [dispatch, id]);

  if (!detaild) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={style.contenedor} key={detaild.id}>
        <div className={style.img}>
          <img src={detaild.flags} alt={detaild.name} />
        </div>
        <div className={style.eia}>
          <h3>Name:</h3>
          <p>{detaild.name}</p>
          <h3>Contienente:</h3>
          <p>{detaild.continent}</p>
          <h3>Poblacion:</h3>
          <p>{detaild.population}</p>
          <h3>Subregion:</h3>
          <p>{detaild.subregion}</p>
          <h3>Area: </h3>
          <p>{detaild.area}</p>
        </div>
      </div>
      <div className={style.contenedoract}>
        {detaild.Activities ? (
          <div>
            {detaild.Activities.map((activity) => (
              <div key={activity.id} className={style.activityContainer}>
                <h3>Activities</h3>
                <div className={style.activityDetails}>
                  <div>
                    <h4>Activity Name:</h4>
                    <p>{activity.name}</p>
                  </div>
                  <div>
                    <h4>Duracion:</h4>
                    <p>{activity.duracion}</p>
                  </div>
                  <div>
                    <h4>Dificultad:</h4>
                    <p>{activity.dificultad}</p>
                  </div>
                  <div>
                    <h4>Temporada:</h4>
                    <p>{activity.temporada}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>"null"</div>
        )}
      </div>
    </div>
  );
};

export default Detail;
