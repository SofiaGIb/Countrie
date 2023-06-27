const { allActivity,createActivity ,activityDelete} = require ("../Controllers/ActivityControllers");


const GetActivity=  async (req,res) =>{
 
    try {
        const allActivities = await allActivity();
        return res.status(200).json(allActivities)
    } catch (error) {
        res.status(400).json({error:error.message })
        
    }
};

const PostActivity = async ( req,res) => {

const {name,dificultad,duracion,temporada,CountryIds,costo} = req.body;
try {
    const newActivity = await createActivity(name,dificultad,duracion,temporada,CountryIds,costo);
    res.status(200).json("creado exitosamente :" + newActivity);
    
} catch (error) {
    res.status(400).json({error:error.message })
    
}

};
const DeleteActivity = async(req,res) => {
const {id} = req.params;
    try {
        await  activityDelete(id);
        res.status(200).send(`activity ${id} eliminada `)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
DeleteActivity,
    PostActivity,
    GetActivity
}