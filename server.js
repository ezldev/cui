import express from 'express';
import bodyParser from 'body-parser';
import dbHelper from "./helpers/dbConnector"
import api from './app/routes.js';
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import glob from 'glob'
//import expressStatsd from 'express-statsd'
//import logger from 'helpers/logger.js'
// import GraphHTTP from 'express-graphql';
// import Schema from './graphql';

// function statsd (path) {
//     return function (req, res, next) {
//       var method = req.method || 'unknown_method';
//       req.statsdKey = ['http', method.toLowerCase(), path].join('.');
//       next();
//     };
//   }

var app = express();
//app.use(expressStatsd());


var router = express.Router();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
function startApp(port) {
    app.listen(port, function() {
        console.log('Server is listening on port ' + port);
    });
}


dbHelper.getPoolReady().then(function(){
  startApp(8088);
},function(err){
  throw new Error(err);
})
//startApp(8088);
// models.sequelize.sync()
//     .then(function() {
//         startApp(8088);
//     })
//     .catch(function (e) {
//         throw new Error(e);
//     });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

let docRoutes = []
docRoutes = glob.sync("app/**/*.js",{})

const options = {
    definition: {
      info: {
        title: 'Topics', // Title (required)
        version: '1.0.0', // Version (required)
      },
    },
    apis: docRoutes, // Path to the API docs
  };
  
  const swaggerSpec = swaggerJSDoc(options);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api-docs.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  }); 

  //app.use(express.static(__dirname + 'testHarness'));
  app.use('/testHarness', express.static('testHarness')); 
/*
 * This is here because of authentication. Auth middleware decodes the JWT token
 * and saves its content to request.user object.
 */
// app.use('/graphql', GraphHTTP((request) => ({
//         schema: Schema,
//         context: { user: request.user },
//         pretty: true,
//         graphiql: true
// })));




