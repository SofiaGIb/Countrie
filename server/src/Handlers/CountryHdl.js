const { CountryByName,todoslospaises} = require( "../Controllers/CountryControllers");


const allpaises = async ( req,res) =>
{
    try {
        const rersponse = await todoslospaises

        return res.status(200).json(response)
   } catch (error) {
       
       res.status(400).send("El pais ingresa existe!!")
}
}

const GetCountry = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const response = await CountryByName(name);
                    return res.status(200).json(response)
        }
    } catch (error) {
        res.status(400).send("El pais con el nombre ingresado no existe!!")
    }
};

const IdCountry = async (req, res) => {};

module.exports = {
  GetCountry,
  IdCountry,
  allpaises
};
