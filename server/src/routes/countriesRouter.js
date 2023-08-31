const { Router } = require('express');
const { getCountries,getForIdDb } = require('../Handlers/getCountries');
 
const countriesRouter = Router()
countriesRouter.get("/",getCountries)
countriesRouter.get("/:id",getForIdDb)




module.exports = countriesRouter;