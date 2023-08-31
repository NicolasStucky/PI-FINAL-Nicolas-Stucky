const {
  countriesBd,
  getForIdCountries,
} = require("../Controllers/controllersCountrie");
const getCountries = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const newA = await countriesBd(name);
      return res.status(200).json(newA);
    }
    const response = await countriesBd();
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getForIdDb = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const idcountrie = await getForIdCountries(id);
      res.status(200).json(idcountrie);
    } else res.status(400).send("no se encontro");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCountries,
  getForIdDb,
};
