const {Router} = require('express')
const {createActivity} = require('../Handlers/ActivityCreate')
const {getActivity} = require('../Handlers/getActivity')
const activityRouter = Router()

activityRouter.post("/", createActivity)
activityRouter.get("/", getActivity)
module.exports= activityRouter