const { Router } = require("express");
const {getCountriesDb} = require('../Controllers/getcountries')
const countriesRouter = require('../routes/countriesRouter')
const activityRouter = require('../routes/activityRouter')

const router = Router();

router.get("/", getCountriesDb)
router.use("/countries", countriesRouter)
router.use("/activity", activityRouter )

module.exports = router;
