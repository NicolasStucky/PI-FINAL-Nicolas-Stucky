import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Aquí debes realizar la petición GET a /countries y actualizar el estado
    // de 'countries' con los datos obtenidos.
  }, []);

  return (
    <div className="home-page">
      
      <div className="country-list">
        {countries.map((country) => (
          <Link to={`/countries/${country.id}`} key={country.id}>
            <div className="country-card">
              <img src={country.flagImage} alt={`${country.name} Flag`} />
              <h3>{country.name}</h3>
              <p>{country.continent}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

module.exports = HomePage;