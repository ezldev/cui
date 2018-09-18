
import express from 'express';
import filesHandler from "./filesHandler";


var api = express.Router();

api.get("/list",filesHandler.list)
api.post("/createBlk",filesHandler.createBlk)
api.post("/update",filesHandler.update)
api.post("/deleteById",filesHandler.deleteById)
api.post("/findById",filesHandler.findById)

module.exports = api