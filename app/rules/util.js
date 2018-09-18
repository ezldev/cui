import models from '../../models/index.js';
import Promise from "promise"
import uuidv4 from "uuid/v4"
import logger from "../../helpers/logger"

let Rule = models.rule
let Sequelize = models.Sequelize


module.exports = {
    list: function () {
        logger.log({
            level: 'info',
            message: 'rules'
          });
        return new Promise(function (resolve, reject) {
            Rule.findAll().then(data => {
                resolve(data)
            }).catch(error => {
                reject(err)
            })
        })
    },
    createBlk: function (ruleList) {
        return new Promise(function (resolve, reject) {
            ruleList.forEach(function (item) {
                item.id = uuidv4()
            })
            Rule.bulkCreate(ruleList)
                .then(anotherTask => {
                    resolve(Rule.findAll())
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    update: function (rule) {
        return new Promise(function (resolve, reject) {
            Rule.findOne({ where: { id: rule.id } }).then(rec => {
                //rec.label = rule.label
                rec.save()
                    .then(anotherTask => {
                        resolve(Rule.findAll())
                    })
                    .catch(error => {
                        reject(err)
                    })
            })

        })

    },
    deleteById: function (id) {
        return new Promise(function (resolve, reject) {
           
            // Topic.bulkUpdate(topicList)
            Rule.findOne({ where: { id: id } }).then(rec => { 
                if(rec){
                rec.destroy()
                    .then(anotherTask => {
                        resolve(Rule.findAll())
                    })
                    .catch(error => {
                        reject(err)
                    })
                }else{
                    reject("record does not exist")
                }

            },err=>{
                reject(err)
            })

        })

    },
    findById: function (id) {
        return new Promise(function (resolve, reject) {
           
            Rule.findOne({ where: { id: id } }).then(rec => { 
                resolve(rec)

            },err=>{
                reject(err)
            })
           
        })

    },
    detailsById: function (id) {
        return new Promise(function (resolve, reject) {

        })

    },

}