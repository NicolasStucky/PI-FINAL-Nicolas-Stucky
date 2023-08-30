const axios = require('axios');
const { Country } = require('../db');

const getCountriesDb = async (req,res) => {
  try {
    const { data } = await axios.get("http://localhost:5000/countries");

    const newData = data.map((elemento) => ({
      name: elemento.name.official,
      imagen: elemento.flags.png,
      continente: elemento.continents && elemento.continents.length > 0 ? elemento.continents[0] : '',
      capital: elemento.capital && elemento.capital.length > 0 ? elemento.capital[0] : '', 
      subregion: elemento.subregion,
      area: elemento.area,
      poblacion: elemento.population, 
    }));
    console.log(newData)
    res.status(200).json(newData)
    await Country.bulkCreate(newData);
    console.log('Países guardados en la base de datos.');
  } catch (error) {
    console.error('Error al guardar países en la base de datos:', error);
  }
};

module.exports = { getCountriesDb};