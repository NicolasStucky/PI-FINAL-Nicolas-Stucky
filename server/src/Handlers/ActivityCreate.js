const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const createActivity = async (req, res) => {
  const { name, dificultad, temporada, duracion, countries } = req.body;

  try {
    const newActivity = await Activity.create({
      name,
      dificultad,
      temporada,
      duracion,
    });
    
    const foundCountries = await Country.findAll({
      where: {
        imagen: {
          [Op.in]: countries,
        },
      },
    });

    await newActivity.setCountries(foundCountries);

    res.status(200).json(newActivity);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createActivity,
};

