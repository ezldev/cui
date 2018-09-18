
import express from 'express';
import topicsHandler from "./routeHandler";
var api = express.Router();




api.get("/list",topicsHandler.list)

api.post("/createBlk",topicsHandler.createBlk)
api.post("/update",topicsHandler.update)
api.post("/deleteById",topicsHandler.deleteById)
api.post("/findById",topicsHandler.findById)

api.get("/details/:id",topicsHandler.detailsById)

module.exports = api

