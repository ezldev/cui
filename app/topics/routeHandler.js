import models from '../../models/index.js';
import topicUtils from './util'

let Topic = models.topic
module.exports = {
    list:  function (req, res, next) {
        topicUtils.list().then(function(data){
            res.send(data) 
        },function(err){
            res.send(err) 
        })
        
    },
    createBlk:  function (req, res, next) {
        //console.log(req.body);
        //expects req.body.topics=[]
        
        topicUtils.createBlk(req.body.topics).then(function(data){
            res.send(data) 
        },function(err){
            res.send(err) 
        })
        
    },
    updateBlk: function (req, res, next) {
       // req.body.topics=[]
       topicUtils.updateBlk(req.body.topics).then(function(data){
            res.send(data) 
        },function(err){
            res.send(err) 
        })
    },
    deleteByIdBlk: function (req, res, next) {
        // req.body=[] list of ids
        topicUtils.deleteByIdBlk(req.body).then(function(data){
             res.send(data) 
         },function(err){
             res.send(err) 
         })
     },
     findById: function (req, res, next) {
        // req.body=[] list of ids
        topicUtils.findById(req.body).then(function(data){
             res.send(data) 
         },function(err){
             res.send(err) 
         })
     },
     detailsById: function (req, res, next) {
        // req.body=[] list of ids
        topicUtils.detailsById(req.body).then(function(data){
             res.send(data) 
         },function(err){
             res.send(err) 
         })
     },

}