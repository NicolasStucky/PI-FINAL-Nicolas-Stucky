import './App.css';
import React from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import LandingPage from './components/Landin Page/inicio';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={HomePage} />
        {/* Agrega otras rutas aquí */}
      </Routes>
    </div>
  );
};

export default App;
