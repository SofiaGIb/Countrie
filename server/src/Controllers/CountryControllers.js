const {Country,Activity} = require ('../db');
const {Op} = require('sequelize')
const getAllCountrie =  async ( ) => {
     
const peticion = await Country.findAll()
return peticion
}


const countryByName = async (name)=>{
    console.log(name);
   if(name){
       const byName = await Country.findAll( {
           where:{
                name:{[Op.like]:"%" + name + "%"}
           },
            include: {
            model: Activity, 
            attibutes : ['id', 'name'],
            through: {
              attibutes: [],
            },
        } 
    
    } )

    console.log(byName);
    return byName;
};
        }

    


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