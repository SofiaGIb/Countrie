const {Activity} = require ('../db')


const allActivity =  async()=>{
    const activities = Activity.findAll();
    return activities;
}

const createActivity =  async(name,dificultad,duracion,temporada,countryIds)=>{

const newActivity = await Activity.create({name,dificultad,duracion,temporada});
await newActivity.setCountry(countryIds)
return newActivity
}
module.exports = {
    allActivity,
    createActivity
}