const { Activity, Country } = require('../db');

const getActivity = async (req, res) => {
  try {
    const activitiesWithCountries = await Activity.findAll({
      include: [Country] 
    });

    res.status(200).json(activitiesWithCountries);
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  getActivity
};
