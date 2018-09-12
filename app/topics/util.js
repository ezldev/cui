import models from '../../models/index.js';
import Promise from "promise"

let Topic = models.topic

module.exports = {
    createBlk: function (topicList) {
        return new Promise(function (resolve, reject) {
            Topic.bulkCreate(topicList)
                .then(anotherTask => {
                    resolve(Topic.findAll())
                })
                .catch(error => {
                    reject(err)
                })
        })
       
    },
    updateBlk: function (topicList) {
        return new Promise(function (resolve, reject) {
            Topic.bulkUpdate(topicList)
                .then(anotherTask => {
                    resolve(Topic.findAll())
                })
                .catch(error => {
                    reject(err)
                })
        })
       
    },
    deleteByIdBlk: function (list) {
        return new Promise(function (resolve, reject) {
            Topic.bulkUpdate(topicList)
                .then(anotherTask => {
                    resolve(Topic.findAll())
                })
                .catch(error => {
                    reject(err)
                })
        })
       
    },
    findById: function (id) {
        return new Promise(function (resolve, reject) {
            // Topic.bulkUpdate(topicList)
            //     .then(anotherTask => {
            //         resolve(Topic.findAll())
            //     })
            //     .catch(error => {
            //         reject(err)
            //     })
        })
       
    },
    detailsById: function (id) {
        return new Promise(function (resolve, reject) {
            // Topic.bulkUpdate(topicList)
            //     .then(anotherTask => {
            //         resolve(Topic.findAll())
            //     })
            //     .catch(error => {
            //         reject(err)
            //     })
        })
       
    },

    // api.get("/list",topicsHandler.list)
// api.post("/createBlk",topicsHandler.createBlk)
// api.post("/deleteByIdBlk",topicsHandler.deleteBlk)
// api.post("/findById",topicsHandler.findById)
// api.post("/updateBlk",topicsHandler.updateBlk)
// api.get("/details/:id",topicsHandler.detailsById)


    // update: function (topic) { 
    //     return new Promise(function (resolve, reject) {
    //     Topic.update(
    //         { label: topic.label }, /* set attributes' value */
    //         { where: { id: topic.id }} /* where criteria */
    //       ).then(() => {
    //         resolve("done")  
    //         //res.send("done")
    //       })
    //     })
    // },
    // delete: function (topic) { },
    // find: function (args) { },
    // list: function () { }
}