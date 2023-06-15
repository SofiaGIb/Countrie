import {
  GET_COUNTRIES,
  DETAIL_COUNTRY,
  COUNTRY_NAME,
  NEW_ACTIVITY,
  ALL_ACTIVITY,
  DELETE_ACTIVITY,
  ORDEN_ALFABETICO,
  FILTER_BY_ACTIVITY,
  BY_POPULATION,
  BY_CONTINENT,
} from "./actions";

const initialState = {
  country: [],
  allCountries: [],
  details: [],
  activity: [],
  activities: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        country: action.payload,
        allcountries: action.payload,
      };
    case DETAIL_COUNTRY:
      return {
        ...state,
        details: action.payload,
      };
    case COUNTRY_NAME:
      return {
        ...state,
        country: action.payload,
      };
    case NEW_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    case ALL_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    case ORDEN_ALFABETICO:
      return {
        ...state,
        country: action.payload,
      };
    case FILTER_BY_ACTIVITY:
  		const allCountries2 = state.country;

			const solo = allCountries2.filter((pais) => {
				return pais.Activities.length > 0;
			});

			let array = [];

			for (let i = 0; i < solo.length; i++) {
				for (let j = 0; j < solo[i].Activities.length; j++) {
					if (solo[i].Activities[j].name === action.payload) {
						array.push(solo[i]);
					}
				}
			}
    



case BY_POPULATION:
  let sortedArrPop =
    action.payload === 'mayp'
      ? [...state.country].sort((a, b) => a.poblacion - b.poblacion)
      : [...state.country].sort((a, b) => b.poblacion - a.poblacion);

  return {
    ...state,
    country: sortedArrPop,
  };

  case BY_CONTINENT:
    const allCountries = state.country;
    const continentFilter =
      action.payload === 'All'
        ? allCountries
        : allCountries.filter(
            (e) => e.continente === action.payload
          );
          console.log(continentFilter);
    return {
      ...state,
      country: continentFilter,
    };

    default:
      return state;
  }
};

export default rootReducer;
