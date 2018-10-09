
 import express from 'express';
import dbSync from '../helpers/dbSync'
 // import topics from "./topics";
// import files from "./files";
// import rules from "./rules";
import dbHelper from "../helpers/dbConnector"


// dbHelper.executeQuery(`
// Select * form CM_TOPIC;
// `)
debugger;

var api = express.Router();

// api.use("/topics",topics)
// api.use("/files",files)
// api.use("/rules",rules)
api.get("/test",function(req,res,next){
    debugger;
    dbSync.reset().then(res.send("ok"));

})
api.post("/runSql",function(req,res,next){
    
    //req.body.sql
    debugger;
    dbHelper.executeQuery(req.body.sql).then(function(data){
        res.send(data)
     },function(err){
        res.send(err)
     }) 

})

module.exports = api