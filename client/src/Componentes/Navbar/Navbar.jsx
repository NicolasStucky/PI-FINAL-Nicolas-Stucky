import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { useDispatch } from 'react-redux';
import style from './Navbar.module.css';
import { filterforcontinent, orderCountries, orderForPoblacion, reset } from '../../Redux/Actions';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCountries(event.target.value));
    console.log(event.target.value);
  };

   const hanldeClick = () =>{
    dispatch(reset())
   }

  const handleFilter = (event) => {
    dispatch(filterforcontinent(event.target.value));
  };
const HandlerPoblacion = (event) =>{
  dispatch(orderForPoblacion(event.target.value))
}
  return (
    <div className={style.nav}>
      <Search />

      <div className={style.containerbutton}>
      <button className={style.button}onClick={hanldeClick}> Reset</button>
        <Link to="/Home">
          <button className={style.button}>Home</button>
        </Link>
        <Link to="/Activity">
          <button className={style.button}>Activityes</button>
        </Link>
      </div>
      <div className={style.selectcontainer}>
        <select onChange={HandlerPoblacion} className={style.select}  value=""> 
        <option value="" disabled>
        Population
          </option>
          <option value="Menos">Menor-Mayor</option>
          <option value="Mas">Mayor-Menor</option>
        </select>
        <select className={style.select} onChange={handleFilter} value="">
          <option value="" disabled>
            Select Continent 
          </option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Antarctica">Antarctica</option>
        </select>
        <select className={style.select} onChange={handleOrder} value="">
          <option value="" disabled>
            Select Order
          </option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;

