import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

// async b/c we'll be awaiting the use of the API
(async () => {

  // Init the Express application (we imported the lib above)
  const app = express();

  // Set the network port
  // Launch to: http://localhost:8082/
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1
  
  // Root Endpoint - which will be /filteredimage
  // Displays a simple message to the user: we'll ingest a request and provide back a response
  app.get("/filteredimage", async (req, res) => {
    // Declare an image URL
    const imageUrl = req.query.image_url;

    // check if the imageUrl is valid
    // if it's missing or not available, return an error message
    if (!imageUrl) {
      return res.status(400).send({
        message: "The image url is required or is missing"
      });
    }
    
    // otherwise, proceed with filtering image with the await function
    try {
      console;
      const filteredImageFromURL = await filterImageFromURL(imageUrl);
      res.sendFile(filteredImageFromURL, () =>
        deleteLocalFiles([filteredImageFromURL])
      );
    // send an error message if there's a problem
    } catch (error) {
      res.sendStatus(422).send("Unable to process image");
    }
  });
  
  // present on the home page to signal we're ready to go!
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server at local host port we declared on line 13
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();