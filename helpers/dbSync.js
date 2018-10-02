import dbHelper from "./dbConnector"
import seed from "../seed/dbSetup"
import _ from "lodash"
import async from 'async';
import every from 'async/every';
let dbSync={
    reset: function(){
   
        async.every(seed.reset, function(statement, callback) {
            dbHelper.executeQuery(statement).then(function(data){
                callback(null, !err)
             },function(err){
                callback(null, err)
             }) 
            // fs.access(filePath, function(err) {
            //     callback(null, !err)
            // });
        }, function(err, result) {
            // if result is true then every file exists
        });

        _.forEach(seed.reset, function(statement){
            dbHelper.executeQuery(statement).then(function(data){
               console.log(data)
            }) 
        })
    
    
    }
}




module.exports = dbSync