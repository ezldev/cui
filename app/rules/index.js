
import express from 'express';
import rulesHandler from "./rulesHandler";
var api = express.Router();

api.get("/list",rulesHandler.list)
api.post("/createBlk",rulesHandler.createBlk)
api.post("/update",rulesHandler.update)
api.post("/deleteById",rulesHandler.deleteById)
api.post("/findById",rulesHandler.findById)

module.exports = api