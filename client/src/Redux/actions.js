import axios from "axios";

//NOS TRAE LOS PAISES CON SU INFO
export const GET_COUNTRIES = "GET_COUNTRIES";


export const allcountries = ()=>{
return async function (dispatch) {
const response = await axios.get('/Country/',{
    params: {limit:100}
});

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
        const response = await axios.get(`/Country/${name}`)
        const dataName = response.data
        console.log(dataName);
        dispatch({
            type : COUNTRY_NAME,
            payload : dataName
        })
    }
 }
