import models from '../../models/index.js';
import ruleUtils from './util'

let Rule = models.rule
module.exports = {
    list:  function (req, res, next) {
        ruleUtils.list().then(function(data){
            res.send(data) 
        },function(err){
            res.send(err) 
        })
        
    },
    createBlk:  function (req, res, next) {
        //console.log(req.body);
        //expects req.body.topics=[]
        
        ruleUtils.createBlk(req.body.rules).then(function(data){
            res.send(data) 
        },function(err){
            res.send(err) 
        })
        
    },
    update: function (req, res, next) {
       // req.body.topics=[]
       ruleUtils.update(req.body).then(function(data){
            res.send(data) 
        },function(err){
            res.send(err) 
        })
    },
    deleteById: function (req, res, next) {
        // req.body=[] list of ids
        
        ruleUtils.deleteById(req.body.id).then(function(data){
             res.send(data) 
         },function(err){
             res.send(err) 
         })
     },
     findById: function (req, res, next) {
        // req.body=[] list of ids
        ruleUtils.findById(req.body.id).then(function(data){
             res.send(data) 
         },function(err){
             res.send(err) 
         })
     },
     detailsById: function (req, res, next) {
        // req.body=[] list of ids
        ruleUtils.detailsById(req.body).then(function(data){
             res.send(data) 
         },function(err){
             res.send(err) 
         })
     },

}