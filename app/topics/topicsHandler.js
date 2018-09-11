
import models from '../../models/index.js';
let Topic = models.topic
module.exports = {
    create: function (req, res, next) {
        console.log(req.body);
        Topic.build({ label: req.body.label })
            .save()
            .then(anotherTask => {
                res.send(data)
            })
            .catch(error => {
                res.send(err)
            })

        // Topic.create({ label: req.body.label }).then(function (data) {
        //     res.send(data)
        // }, function (err) {
        //     res.send(err)
        // })
    },
    update: function (req, res, next) {
       let topicTemp = req.body.topic
        Topic.update(
            { label: topicTemp.label }, /* set attributes' value */
            { where: { id: topicTemp.id }} /* where criteria */
          ).then(() => {
              res.send("done")
          })
          //next();

    },
    delete: function (req, res, next) { },
    find: function (req, res, next) { },
    list: function (req, res, next) {

        Topic.all().then(topics => {
            res.send(topics)
        })
        //  Topic.create({label: 'omnomnom' }).then(function(data){
        //     res.send(data)
        // },function(err){
        //     res.send(err)
        // })

    }
}