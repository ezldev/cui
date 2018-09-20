
import express from 'express';
import filesHandler from "./filesHandler";




var multer  = require('multer')
var storageM = multer.memoryStorage();
    var upload = multer({ 
    storage: storage
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, file.fieldname + '-' + Date.now())
    }
  })
//var upload = multer( { storage: storage })
var upload = multer({ storage: storageM })
var cpUpload = upload.fields([{ name: 'topicId' },{ name: 'file' }])
//var cpUpload = multer()


var api = express.Router();


api.get("/listByTopic/:topicId",filesHandler.listByTopic)
api.post("/upload", cpUpload,filesHandler.upload)
api.post("/update",filesHandler.update)
api.post("/download",filesHandler.download)
api.post("/deleteById",filesHandler.deleteById)
api.post("/findById",filesHandler.findById)

module.exports = api