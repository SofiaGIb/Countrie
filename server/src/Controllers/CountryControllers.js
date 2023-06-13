const {Country,Activity} = require ('../db');
const {Op} = require('sequelize')
const getAllCountrie =  async ( limit) => {
const peticion = await Country.findAll({
    limit:limit
})
return peticion
}


const countryByName = async (name)=>{
   if(name){
       const filter = await Country.findAll({     
         where: {
        name: {[Op.iLike]: "%" + name +"%"}
   },
   include: {
    model: Activity, 
    attibutes : ['id', 'name'],
    through: {
      attibutes: []
    }}
})
   
if(filter.length){
    return filter
} throw new Error("fallo busqueda")
}}

    

    


const countryById = async(id)=>{
    const response = await Country.findByPk(id,
        {include:{model:Activity}})
    return response 
}
module.exports = {
    countryById,
   countryByName,
    getAllCountrie
}