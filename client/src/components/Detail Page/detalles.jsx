import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { idPais } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    // Aquí debes realizar la petición GET a /countries/:idPais y actualizar el estado
    // de 'country' con los datos obtenidos.
  }, [idPais]);

  if (!country) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="detail-page">
      <img src={country.flagImage} alt={`${country.name} Flag`} />
      <h2>{country.name}</h2>
      <p>ID: {country.id}</p>
      <p>Continente: {country.continent}</p>
      <p>Capital: {country.capital}</p>
      {country.subregion && <p>Subregión: {country.subregion}</p>}
      {country.area && <p>Área: {country.area}</p>}
      <p>Población: {country.population}</p>
    </div>
  );
};

export default DetailPage;