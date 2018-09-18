
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])


import models from '../../models/index.js';
import fileUtils from './util'

let File = models.file
module.exports = {
    list:  function (req, res, next) {
        fileUtils.list().then(function(data){
            res.send(data) 
        },function(err){
            res.send(err) 
        })
        
    },
    createBlk:  function (req, res, next) {
        //console.log(req.body);
        //expects req.body.topics=[]
        
        fileUtils.createBlk(req.body.file).then(function(data){
            res.send(data) 
        },function(err){
            res.send(err) 
        })
        
    },
    update: function (req, res, next) {
       // req.body.topics=[]
       fileUtils.update(req.body).then(function(data){
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