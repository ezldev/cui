
import express from 'express';
import rulesHandler from "./rulesHandler";


var api = express.Router();

api.get("/list",rulesHandler.list)
api.post("/create",rulesHandler.create)
api.post("/delete",rulesHandler.delete)
api.post("/find",rulesHandler.find)



module.exports = api