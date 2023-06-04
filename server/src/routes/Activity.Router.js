const {Router} = require('express');
import { PostActivity,GetActivity } from '../handlers/ActivityHdl';


const ActivityRouter =  Router();



ActivityRouter.get("/",GetActivity)

ActivityRouter.post("/",PostActivity)


module.exports = ActivityRouter
