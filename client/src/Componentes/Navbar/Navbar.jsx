import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { useDispatch, useSelector} from 'react-redux';
import {useState} from "react"
import style from './Navbar.module.css';
import { filter, orderCountries, orderForPoblacion, reset } from '../../Redux/Actions';

const Navbar = () => {
  const dispatch = useDispatch();
  const activities=useSelector((state)=>state.activity)
  const [selectActivity,setSelectActivity]=useState("")
  const [selectContinent, setSelectContinent]=useState("")
  const handleOrder = (event) => {
    dispatch(orderCountries(event.target.value));
    console.log(event.target.value);
  };

   const hanldeClick = () =>{
    dispatch(reset())
   }

   const handleFilterByActivity=(event)=>{
    setSelectActivity(event.target.value)
    dispatch(
      filter({
        continentFilter: selectContinent,
        activityFilter: event.target.value,
      })
    );
   }

  const handleFilterByContinent = (event) => {
    setSelectContinent(event.target.value)
    dispatch(
      filter({
        continentFilter: event.target.value,
        activityFilter: selectActivity,
      })
    )
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
          <button className={style.button}>Activities</button>
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
        <select className={style.select} onChange={handleFilterByContinent} value={selectContinent}>
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
        <select className={style.select} onChange={handleFilterByActivity} value={selectActivity} >
          <option value="">Todos</option>
          {
            activities.map((activity)=>{
              return (
                <option value={activity.name}>{activity.name}</option>
              )
            })
          }
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

