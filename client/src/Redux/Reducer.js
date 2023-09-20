import {
  GET_ALL_CHARACTER,
  GET_FOR_ID,
  GET_FOR_NAME,
  FILTER,
  ORDER,
  SET_PAGE,
  RESET,
  ORDER_POBLACION,
  GET_ACTIVITY
} from "./ActionTypes";

const initialState = {
  countries: [],
  allcountries: [],
  activity:[],
  detail: [],
  currentPage: 1,
  countriesPerPage: 10,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CHARACTER:
      return {
        ...state,
        countries: action.payload,
        allcountries: action.payload,
      };
    case FILTER:
        const {continentFilter, activityFilter}=action.payload
        const countriesFilter=[]
        const countriesCopy=[...state.allcountries]

        if(continentFilter && activityFilter){
          const countriesByContinent=countriesCopy.filter((country)=>country.continent===continentFilter)
          for(let country of countriesByContinent){
            country.Activities.forEach((activity)=>{
              if(activity.name===activityFilter){
                countriesFilter.push(country)
              }
            })
          }
          return{
            ...state,
            countries:countriesFilter,
            currentPage:1
          }
        }else if(activityFilter){
            const activitiesFilter=[]
            for(let country of countriesCopy){
              country.Activities.forEach((activity)=>{
                if(activity.name===activityFilter){
                  activitiesFilter.push(country)
                }
              })
            }
            return {
              ...state,
              countries:activitiesFilter,
              currentPage:1
            }
        } else if(continentFilter){
          const countriesByContinent=countriesCopy.filter((country)=>{
            return country.continent ===continentFilter
          })
          return {
            ...state,
            countries:countriesByContinent,
            currentPage:1
          }
        }


    case GET_FOR_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_FOR_NAME:
      return {
        ...state,
        countries: Array.isArray(action.payload)
          ? action.payload
          : [action.payload],
      };
    case ORDER:
      const copycountries = [...state.countries];
      return {
        ...state,
        countries:
          action.payload === "A"
            ? copycountries.sort((a, b) => a.name.localeCompare(b.name))
            : copycountries.sort((a, b) => b.name.localeCompare(a.name)),
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
      case RESET:
        return{
          ...state,
          countries: state.allcountries
        }
        case ORDER_POBLACION:
          const countriesByPopAsc = [...state.countries];
          if(action.payload === "Menos"){
            countriesByPopAsc.sort((a, b) => a.population - b.population);
          }else{
            countriesByPopAsc.sort((a, b) => b.population - a.population);
          }
          return {
            ...state,
            countries: countriesByPopAsc,
          };
          case GET_ACTIVITY:
            return{
              ...state,
              activity: action.payload
            }
    default:
      return state;
  }
}
