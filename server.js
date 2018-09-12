import express from 'express';
import bodyParser from 'body-parser';
import models from './models/index.js';
import api from './app/routes.js';
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import glob from 'glob'
// import GraphHTTP from 'express-graphql';
// import Schema from './graphql';

var app = express();
var router = express.Router();

function startApp(port) {
    app.listen(port, function() {
        console.log('Server is listening on port ' + port);
    });
}
//startApp(8088);
models.sequelize.sync()
    .then(function() {
        startApp(8088);
    })
    .catch(function (e) {
        throw new Error(e);
    });

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
