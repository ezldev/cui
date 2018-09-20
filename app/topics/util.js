import models from '../../models/index.js';
import Promise from "promise"
import uuidv4 from "uuid/v4"
import logger from "../../helpers/logger"

let Topic = models.topic
let Sequelize = models.Sequelize
let sequelize = models.sequelize
let utils = {
    list: function () {
        // logger.log({
        //     level: 'info',
        //     message: 'Hello distributed log files!'
        //   });
        return new Promise(function (resolve, reject) {
           
          
        //    utils.getTopicsTree().then(data => {
        //         resolve(data)
        //     }).catch(error => {
        //         reject(err)
        //     })
            Topic.findAll({
                include: [{
                    model: models.rule,
                    as: 'rules',
                    required: false,
                    through: { attributes: [] }
                }]
              }
             
            ).then(data => {
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    createBlk: function (topicList) {
        return new Promise(function (resolve, reject) {
            topicList.forEach(function (item) {
                item.id = uuidv4()
            })
            Topic.bulkCreate(topicList)
                .then(anotherTask => {
                    resolve(Topic.findAll())
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    update: function (topic) {
        return new Promise(function (resolve, reject) {
            Topic.findOne({ where: { id: topic.id } }).then(rec => {
                rec.label = topic.label
                rec.save()
                    .then(anotherTask => {
                        resolve(Topic.findAll())
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
            Topic.findOne({ where: { id: id } }).then(rec => { 
                if(rec){
                rec.destroy()
                    .then(anotherTask => {
                        resolve(Topic.findAll())
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
           
            Topic.findOne({ where: { id: id } }).then(rec => { 
                resolve(rec)

            },err=>{
                reject(err)
            })
           
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
    getTopicsTree : function(rootId){
       
        let query =`
        SELECT
            system.cm_topics.*
        FROM
            system.cm_topics left
            JOIN system.cm_topics cm_topics1 ON system.cm_topics."id" = cm_topics1."parent_id"
        WHERE
            system.cm_topics."id" in (select "id" from system.cm_topics)
        `
       
        sequelize.query(query,{model:Topic})
            .then(list => {
                console.log(list)

                debugger;
                // We don't need spread here, since only the results will be returned for select queries
            })
    }

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

module.exports = utils