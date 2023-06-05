const {Router} = require('express');
const { PostActivity,GetActivity } = require( '../handlers/ActivityHdl');


const ActivityRouter =  Router();



ActivityRouter.get("/",GetActivity)

ActivityRouter.post("/",PostActivity)


module.exports = ActivityRouter
