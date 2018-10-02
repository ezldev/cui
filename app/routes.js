
 import express from 'express';
import dbSync from '../helpers/dbSync'
 // import topics from "./topics";
// import files from "./files";
// import rules from "./rules";


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

module.exports = api