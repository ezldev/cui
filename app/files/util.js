import models from '../../models/index.js';
import Promise from "promise"
import uuidv4 from "uuid/v4"
import logger from "../../helpers/logger"

let File = models.file
let Sequelize = models.Sequelize


module.exports = {
    list: function () {
        logger.log({
            level: 'info',
            message: 'Hello distributed log files!'
          });
        return new Promise(function (resolve, reject) {
            File.findAll().then(data => {
                resolve(data)
            }).catch(error => {
                reject(err)
            })
        })
    },
    createBlk: function (fileList) {
        return new Promise(function (resolve, reject) {
            fileList.forEach(function (item) {
                item.id = uuidv4()
            })
            File.bulkCreate(topicList)
                .then(anotherTask => {
                    resolve(Topic.findAll())
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    update: function (file) {
        return new Promise(function (resolve, reject) {
            File.findOne({ where: { id: file.id } }).then(rec => {
                rec.label = file.label
                rec.save()
                    .then(anotherTask => {
                        resolve(File.findAll())
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
            File.findOne({ where: { id: id } }).then(rec => { 
                if(rec){
                rec.destroy()
                    .then(anotherTask => {
                        resolve(File.findAll())
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
           
            File.findOne({ where: { id: id } }).then(rec => { 
                resolve(rec)

            },err=>{
                reject(err)
            })
    
        })

    }
    
}