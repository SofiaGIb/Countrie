const {countryByName,getAllCountrie, countryById,} = require( "../Controllers/CountryControllers");


const allCountries = async ( req,res) =>
{
try {        
        const response = await getAllCountrie()

        return res.status(200).json(response);
   } catch (error) {
       
    res.status(400).json({ error: error.message });
}
}

const countryName = async (req, res) => {
        }
  

const IdCountry = async (req, res) => {
    const {id} = req.params 
    try {
        const response = await countryById(id)
        res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
};

module.exports = {
    countryName,
  IdCountry,
    allCountries
};
