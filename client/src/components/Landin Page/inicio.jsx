import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src="https://i.pinimg.com/originals/d3/75/ee/d375ee9f3836bc2ee44d2c62f7c93e38.gif" alt="Imagen representativa" />
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
};

export default LandingPage;