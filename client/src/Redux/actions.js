import axios from "axios";

//NOS TRAE LOS PAISES CON SU INFO
export const GET_COUNTRIES = "GET_COUNTRIES";


export const allcountries = ()=>{
return async function (dispatch) {
const response = await axios.get('/Country/');

const countrydata = response.data;
dispatch({
    type : GET_COUNTRIES,
    payload : countrydata
})

}
}
//NOS TRAE EL DETALLE DE LSO PAISES

export const DETAIL_COUNTRY = "DETAIL_COUNTRY";


export const countryDetail =(id)=>{
    return async   function(dispatch) {
        const   details = await axios.get(`/Country/${id}`);
        const data = details.data;
dispatch({
    type : DETAIL_COUNTRY,
    payload : data
})

} }
 //Nos trae los paises por nombre 

 export const COUNTRY_NAME = "COUNTRY_ NAME";
 export const country_by_name = (name) =>{

    return async function (dispatch){
        const response = await axios.get(`/Country/name?name=${name}`)
        const dataName = response.data
        dispatch({
            type : COUNTRY_NAME,
            payload : dataName
        })
    }
 }

 // CREA UNA NUEVA ACTVIDAD 

 export const NEW_ACTIVITY = " NEW_ACTIVITY"
 export const create_activity = (payload) => {
    return async function (dispatch) {
      try {
        let newActivity = await axios.post(`/Activity/`, payload);
        return newActivity;
      } catch (error) {
        console.log(error);
      }
    };
  };
  

 // ELIMINA LA ACTIVIDAD 
 export const DELETE_ACTIVITY = "DELETE_ACTIVITY"
 export const deleteActivity = (id)=>{

    return async function (dispatch){
        console.log("Borrando receta con id: ", id);

        try {
            if (!/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(id)) {
                throw new Error("Formato invalido");
              }          
             await axios.delete(`/Activity/${id}`)
        } catch (error) {
            
        }
    }
 }


 // NOS TRAE TODAS LAS ACTIVIDADES 

 export const ALL_ACTIVITY = "ALL_ACTIVITY"
 export const allActivities = ()=>{
    return async function (dispatch){
    try {
        let activities = await axios.get(`/Activity/`)
        const data = activities.data
        dispatch({
          type:ALL_ACTIVITY,
          payload : data
        })
    } catch (error) {
        console.log(error);
    } }
 }

 // FILTRA POR NAME 

 export const ORDEN_ALFABETICO = "ORDEN_ALFABETICO";
export function alphabeticalSort(payload) {
  return {
    type: ORDEN_ALFABETICO,
    payload,
  };
}
  //FILTRA TIPO DE ACTIVITYE 
  export const  FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY"
  export function filterByAct(activity) {
	return {
		type: FILTER_BY_ACTIVITY,
		payload: activity,
	};
}
//FILTRA POR POBLACION 

export const BY_POPULATION = "BY_POPULATION"

export const filterbypopulation = (payload) =>{
  return {
    type : BY_POPULATION,
    payload 
  }
}
//FILTRA POR CONTINENTE 
export const BY_CONTINENT = "BY_CONTINENT"

export const filterByContinent = (payload)=>{
  return {
    type: BY_CONTINENT,
    payload
  }

}
