const {Activity} = require ('../db')


const allActivity =  async()=>{
    const activities = Activity.findAll();
    return activities;
};

const createActivity =  async(name,dificultad,duracion,temporada,CountryIds)=>{

const newActivity = await Activity.create({name,dificultad,duracion,temporada,CountryIds});
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