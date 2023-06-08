const {Router} = require('express');
const { PostActivity,GetActivity,DeleteActivity } =require ("../Handlers/ActivityHdl");


const ActivityRouter =  Router();



ActivityRouter
.get("/",GetActivity)
.post("/",PostActivity)
.delete("/:id",DeleteActivity);


module.exports = ActivityRouter
