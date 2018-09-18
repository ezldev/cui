
import express from 'express';
import topics from "./topics";
// import files from "./files";
import rules from "./rules";

var api = express.Router();

api.use("/topics",topics)
//api.use("/files",files)
api.use("/rules",rules)

module.exports = api