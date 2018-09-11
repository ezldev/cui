
import express from 'express';
import topicsHandler from "./topicsHandler";


var api = express.Router();

api.get("/list",topicsHandler.list)
api.post("/create",topicsHandler.create)
api.post("/delete",topicsHandler.delete)
api.post("/find",topicsHandler.find)
api.post("/update",topicsHandler.update)


module.exports = api

