
import express from 'express';
import analyticsHandler from "./analyticsHandler";


var api = express.Router();

api.get("/list",analyticsHandler.list)
api.post("/createBlk",analyticsHandler.createBlk)
api.post("/update",analyticsHandler.update)
api.post("/deleteById",analyticsHandler.deleteById)
api.post("/findById",analyticsHandler.findById)

module.exports = api