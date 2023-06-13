

import { GET_COUNTRIES ,DETAIL_COUNTRY,COUNTRY_NAME, NEW_ACTIVITY, ALL_ACTIVITY, DELETE_ACTIVITY, ORDEN_ALFABETICO} from "./actions";

const initialState = {
  country:[],
  allcountries:[],
  details:[],
  activity:[],
  activities:[]
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
          case NEW_ACTIVITY :
            return {
              ...state,
              activity:action.payload
            }
            case ALL_ACTIVITY :
              return {
                ...state,
                activity : action.payload
              }
              case DELETE_ACTIVITY:
                return {
                  ...state,
                  activity :action.payload
                }
                case ORDEN_ALFABETICO:
                  return {
                    ...state,
                    country:action.payload,
                  }
    default: 
      return state;
  }
};

export default rootReducer;

