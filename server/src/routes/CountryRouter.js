const {Router} =  require ('express');
const { allpaises,IdCountry} = require ('../Handlers/CountryHdl')

const CountryRouter = Router()

CountryRouter.get("/",allpaises);


CountryRouter.get("/:id",IdCountry);
 
module.exports = CountryRouter