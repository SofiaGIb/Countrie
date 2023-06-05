const {Country} = require ('../db');
const axios = require ('axios');

const todoslospaises =  async ( ) => { 
const peticion = (await axios( "http://localhost:5000")).name
const apiinfo = peticion.map((country)=>{
    return{
        name : country.name,
    };
});
return apiinfo
}


const CountryByName = async (name) => {
if(name) {
    let filterscountry =  todoslospaises.filter((Country) => Country.name.toLowercase().includes(name.toLowercase()))
return filterscountry}

}
module.exports = {
    CountryByName,
    todoslospaises
}