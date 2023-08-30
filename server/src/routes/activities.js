const {Router} = require('express')
const {createActivity} = require('../handlers/activitiesHandler')
const {getActivity} = require('../handlers/getActivityHandler')
const activityRouter = Router()

activityRouter.post("/", createActivity)
activityRouter.get("/", getActivity)

module.exports= activityRouter