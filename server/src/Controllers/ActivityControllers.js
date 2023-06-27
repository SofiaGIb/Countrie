const {Activity} = require ('../db')


const allActivity =  async()=>{
    const activities = Activity.findAll();
    return activities;
};

const createActivity =  async(name,dificultad,duracion,temporada,CountryIds,costo)=>{
    if (!name ) {
        throw new Error("Debe proporcionar un nombre para la actividad");
      }
const newActivity = await Activity.create({name,dificultad,duracion,temporada,costo});
await newActivity.setCountries(CountryIds)
return newActivity
};

 const activityDelete = async (id) =>{
    await Activity.destroy({where:{id}})
}
module.exports = {
    allActivity,
    createActivity,
    activityDelete
}