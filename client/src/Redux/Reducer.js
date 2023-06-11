

import { GET_COUNTRIES ,DETAIL_COUNTRY,COUNTRY_NAME} from "./actions";

const initialState = {
  country: [],
  allcountries: [],
  details: []
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
          details :action.payload 
          
        }
        case COUNTRY_NAME:
        return {
          ...state,
          country : action.payload
          }
    default:
      return state;
  }
};

export default rootReducer;

