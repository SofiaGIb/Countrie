const {
  countryByName,
  getAllCountrie,
  countryById,
} = require("../Controllers/CountryControllers");

const allCountries = async (req, res) => {
  const { name } = req.query;
  console.log(name);
  try {
      const response = name ? await countryByName(name) : await getAllCountrie();
      console.log(response);
      if (response.length < 1) throw new Error("Not found Countries");
      return res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message + "PTORD" });
    }
};

const IdCountry = async (req, res) => {
  const { id } = req.params;
  if (id)
    try {
      const response = await countryById(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message   });
    }
};

module.exports = {
  IdCountry,
  allCountries,
};
