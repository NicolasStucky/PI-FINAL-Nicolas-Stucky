const { Router } = require("express");
const {getCountriesDb} = require('../controllers/getCountries')
const countriesRouter = require('../routes/countries')
const activityRouter = require('../routes/activities')
const router = Router();

router.get("/", getCountriesDb)
router.use("/countries", countriesRouter)
router.use("/activity", activityRouter )

module.exports = router;
