import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const LandingPage = () => {
  return (
    <>
      <div className="div">
        <h1>Bienvenidos!</h1>
        <p className="welcome-text">
          ¿Quieres dar una vuelta por el mundo?
          <br />
          ¡Hazle click al 🌎 de abajo!
        </p>

        <div>
          <Link to="/Home">
            <button className="button">🌎</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
