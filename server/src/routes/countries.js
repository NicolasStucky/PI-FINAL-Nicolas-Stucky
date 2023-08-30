const { Router } = require('express');
const { getCountries,getForIdDb } = require('../handlers/countriesHandler');
 
const countriesRouter = Router()
countriesRouter.get("/",getCountries)
countriesRouter.get("/:id",getForIdDb)




module.exports = countriesRouter;