



import models from '../../models/index.js';
import fileUtils from './util'

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



let File = models.file
module.exports = {
    listByTopic:  function (req, res, next) {
        fileUtils.listByTopic(req.body.id).then(function(data){
            res.send(data) 
        },function(err){
            res.send(err) 
        })
        
    },

    upload : function (req, res, next) {
        
        var upload = multer({
            storage: multer.memoryStorage()
        }).single('file')
        upload(req, res, function(err) {
            //var buffer = req.file.buffer
            console.log(req.files)
        })
        res.send("done") 

       
       
        // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
      },
    
    update: function (req, res, next) {
       // req.body.topics=[]
       fileUtils.update(req.body).then(function(data){
            res.send(data) 
        },function(err){
            res.send(err) 
        })
    },
    download: function (req, res, next) {
        // req.body.topics=[]
        fileUtils.update(req.body).then(function(data){
            //set header
            res.send(data) 
         },function(err){
             res.send(err) 
         })
     },
    deleteById: function (req, res, next) {
        // req.body=[] list of ids
        
        fileUtils.deleteById(req.body.id).then(function(data){
             res.send(data) 
         },function(err){
             res.send(err) 
         })
     },
     findById: function (req, res, next) {
        // req.body=[] list of ids
        fileUtils.findById(req.body.id).then(function(data){
             res.send(data) 
         },function(err){
             res.send(err) 
         })
     }
    

}