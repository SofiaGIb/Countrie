const {Router} =  require ('express');
const { allCountries,IdCountry,countryName} = require ('../Handlers/CountryHdl')

const CountryRouter = Router()

CountryRouter
.get("/",allCountries)
.get("/:id",IdCountry)
module.exports = CountryRouter