

var oracledb = require('oracledb');
var logger = require('../helpers/logger')
import Promise from "promise"

var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var cmpool 




  let dbHelper={
    getPoolReady :function(){
        var cmPoolPromise = oracledb.createPool(config);

       return Promise.all([cmPoolPromise])
        .then(function(pools) {
            

            console.log(pools[0].alias); // hr

            cmpool = oracledb.getPool('cm');

        })
        .catch(function(err) {
            console.log(err)
            // handle error
        })

    },
    executeQuery: function(sql){
        return new Promise(function (resolve, reject) {
            cmpool.getConnection(function(err, conn) {
                logger.log("info",sql )
                conn.execute(sql).then(resolve, reject)
                if(err){
                    reject(err)
                }

            });
        
        })

    }

  }


module.exports = dbHelper