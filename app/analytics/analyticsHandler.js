
import models from '../../models/index.js';
import analyticsUtils from './util.js'

let Analytics = models.analytics
module.exports = {
    list:  function (req, res, next) {
        analyticsUtils.list().then(function(data){
            res.send(data) 
        },function(err){
            res.send(err) 
        })
        
    },
    createBlk:  function (req, res, next) {
        //console.log(req.body);
        //expects req.body.topics=[]
        
        analyticsUtils.createBlk(req.body.analytics).then(function(data){
            res.send(data) 
        },function(err){
            res.send(err) 
        })
        
    },
    update: function (req, res, next) {
       // req.body.topics=[]
       analyticsUtils.update(req.body).then(function(data){
            res.send(data) 
        },function(err){
            res.send(err) 
        })
    },
    deleteById: function (req, res, next) {
        // req.body=[] list of ids
        
        analyticsUtils.deleteById(req.body.id).then(function(data){
             res.send(data) 
         },function(err){
             res.send(err) 
         })
     },
     findById: function (req, res, next) {
        // req.body=[] list of ids
        analyticsUtils.findById(req.body.id).then(function(data){
             res.send(data) 
         },function(err){
             res.send(err) 
         })
     }
    

}