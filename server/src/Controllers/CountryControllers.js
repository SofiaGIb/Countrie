const {Country} = require ('../db');

const getAllCountrie =  async ( ) => { 
const peticion = await Country.findAll()
return peticion
}


const countryByName = async (name)=>{
    
      }    


const countryById = async()=>{
    const response = await Country.findByPk(id)
    return response 
}
module.exports = {
    countryById,
   countryByName,
    getAllCountrie
}