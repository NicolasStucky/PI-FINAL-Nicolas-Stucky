// Search.js
import style from './Search.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getCountriesForName } from '../../Redux/Actions';
import { Link } from "react-router-dom";
const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handlerName = (event) => {
    setName(event.target.value);
    dispatch(getCountriesForName(event.target.value));
  };

  return (
    <><div className={style.buttonPrincipal}>
      <Link to="/createActivity">
      <button className={style.buttonArriba}>Create Activity</button>
      </Link>
    </div><div className={style.nav}>
        <input onChange={handlerName} type="search" className={style.input} />
        <button className={style.button}>🔍</button>
      </div></>
  );
};

export default Search;
