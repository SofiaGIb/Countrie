require('dotenv').config();
const axios = require('axios');
const {Country} = require('./db');


// Obtener todas las Countries de la Api
// Función para obtener solo los datos que necesitas de cada país
const formatCountrydata = (Countrydata) => {
	return {
		id: Countrydata.cca3,
		cca3: Countrydata.cca3,
		name: Countrydata.name.common || 'No name',
		imagen: Countrydata.flags.svg || 'No flag',
		continente: Countrydata.region || 'No continent',
		capital: Countrydata.capital?.[0] || 'No capital',
		poblacion: Countrydata.population || 0,
	};
};


// Función para guardar los datos de cada país en la base de datos
const   saveCountriesToDB = async ()=> {
	//
	try {
		const response = await axios.get('http://localhost:5000/countries');
		const countriesData = response.data;
		const countries = countriesData.map((Countrydata) =>
		formatCountrydata(Countrydata)
		);
		
		const existingCountries = await Country.findAll();
		
		const newCountries = countries.filter((Country) => {
			return !existingCountries.find(
				(existingCountry) => existingCountry.id === Country.id
				);
		});

		await Country.bulkCreate(newCountries);

		console.log(`${newCountries.length} countries saved to database`);
	} catch (error) {
		console.error('Error saving countries to database:', error);
	}
};
module.exports = { saveCountriesToDB };