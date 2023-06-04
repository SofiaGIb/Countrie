const {Router} =  require ('express');
import { GetCountry,IdCountry } from '../handlers/CountryHdl';
const CountryRouter = Router()

CountryRouter.get("/",GetCountry);


CountryRouter.get("/:id",IdCountry);
