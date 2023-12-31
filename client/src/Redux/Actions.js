import axios from "axios";
import {
  GET_ALL_CHARACTER,
  GET_FOR_ID,
  GET_FOR_NAME,
  ORDER,
  SET_PAGE,
  CREATE_ACTIVITY,
  CREATE_ACTIVITY_FAILURE,
  RESET,
  ORDER_POBLACION,
  GET_ACTIVITY,
  FILTER
} from "./ActionTypes";

export const getcharacter = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:3001/countries");
      dispatch({
        type: GET_ALL_CHARACTER,
        payload: data,
      });
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };
};

export const getCountriesForId = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/countries/${id}`);
      dispatch({
        type: GET_FOR_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getCountriesForName = (name) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/countries`, {
        params: { name: name.toLowerCase() },
      });

      const countries = Array.isArray(data) ? data : [];

      dispatch({
        type: GET_FOR_NAME,
        payload: countries,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filter = ({continentFilter, activityFilter}) => {
  return {
    type: FILTER,
    payload: {continentFilter, activityFilter},
  };
};

export const orderCountries = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const createActivity = (activityData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/activity",activityData);
      dispatch({
        type: CREATE_ACTIVITY,
        payload: response.data, 
      });
    } catch (error) {
      dispatch({
        type: CREATE_ACTIVITY_FAILURE,
        payload: error.message, 
      });
    }
  };
};
 
export const orderForPoblacion = (num) =>{
  return{
    type: ORDER_POBLACION,
    payload: num
  }
}

export const getactivity = () =>{
return async (dispatch)=>{
  const {data} = await axios.get("http://localhost:3001/activity")
    dispatch({
      type:GET_ACTIVITY,
      payload:data
    })
  }
}