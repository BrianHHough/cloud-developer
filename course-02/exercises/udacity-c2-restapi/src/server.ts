require('dotenv').config();
import express from 'express';
import { sequelize } from './sequelize';

import { IndexRouter } from './controllers/v0/index.router';

import bodyParser from 'body-parser';

import { V0MODELS } from './controllers/v0/model.index';

// This is an asyncronous function, so we write the await tag to wait for this to complete. Sequalize.addModels registers all modules imported from V0MODELS, which we define in the file linked above:
(async () => {
  await sequelize.addModels(V0MODELS);
  // allows us to make sure our db is in sync with our expected model in sequelize (make sure they work together) and make sure everything on the level of updates by applying our migrations in the migrations folder
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8080; // default port to listen
  
  app.use(bodyParser.json());

  //CORS Should be restricted
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8100");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  // Router - simplifies enterance points 
  // App we'll use is indexRouter when we encounter base enpoint of v0/
  app.use('/api/v0/', IndexRouter)

  // Root URI call
  app.get( "/", async ( req, res ) => {
    res.send( "/api/v0/" );
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();