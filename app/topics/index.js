
import express from 'express';
import topicsHandler from "./routeHandler";
var api = express.Router();


/**
 * @swagger
 * /list:
 *   post:
 *     description: list of topics
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: login
 */
api.get("/list",topicsHandler.list)
/**
 * @swagger
 * /createBlk:
 *   post:
 *     description: create topics bulk
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: login
 */
api.post("/createBlk",topicsHandler.createBlk)
api.post("/deleteByIdBlk",topicsHandler.deleteByIdBlk)
api.post("/findById",topicsHandler.findById)
api.post("/updateBlk",topicsHandler.updateBlk)
api.get("/details/:id",topicsHandler.detailsById)

module.exports = api

