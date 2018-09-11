
import express from 'express';
import filesHandler from "./filesHandler";


var api = express.Router();

api.get("/list",filesHandler.list)
api.post("/create",filesHandler.create)
api.post("/delete",filesHandler.delete)
api.post("/find",filesHandler.find)


module.exports = api