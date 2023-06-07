const { allActivity,createActivity } = require ("../Controllers/ActivityControllers");


const GetActivity=  async (req,res) =>{
 
    try {
        const allActivities = await allActivity();
        return res.status(200).json(allActivities)
    } catch (error) {
        res.status(400).json({error:error.message + "ff"})
        
    }
};

const PostActivity = async ( req,res) => {

const {name,dificultad,duracion,temporada,countryIds} = req.body
try {
    const newActivity = await createActivity(name,dificultad,duracion,temporada,countryIds);
    res.status(200).json(newActivity);
    
} catch (error) {
    res.status(400).json({error:error.message + "rr"})
    
}

};

module.exports = 
{
    PostActivity,
    GetActivity
}