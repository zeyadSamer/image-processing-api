import express from 'express';

import fs from 'fs';

import path from 'path';

import { editImage } from '../imageprocessing';

const routes = express.Router();

//main functions

routes.get('/images', async (req: express.Request, res: express.Response) => {
  //storing image parameters

  const queryWidth = req.query.width as unknown as string;
  const queryHeight = req.query.height as unknown as string;
  const outputFileName = req.query.filename as unknown as string;

  //checking dimensions given by the user

  //checking missing data

  if (
    outputFileName === undefined ||
    queryHeight === undefined ||
    queryWidth === undefined
  ) {
    res.send('error: please write the filename and correct dimensions');
  }

  //checking invalid inputs
  else if (
    isNaN(queryWidth as unknown as number) ||
    isNaN(queryHeight as unknown as number)
  ) {
    res.send('error: please check your query input');
  }

  //check if outputfile exist
  else if (!fs.existsSync(`./full/${outputFileName}.jpg`)) {
    //this file is not found
    res.sendStatus(404);
  } else {
    const newWidth = parseInt(queryWidth, 10);

    const newHeight = parseInt(queryHeight, 10);

    //checking unreal dimensions after parsing
    if (newWidth <= 0 || newHeight <= 0) {
      res.send('error : non positive dimensions are not valid');
    }

    //check if the outfile exist in public-->no processing
    else if (
      !fs.existsSync(`./public/${outputFileName}_${newWidth}_${newHeight}.jpg`)
    ) {
      await editImage(
        `./full/${outputFileName}.jpg`,
        outputFileName,
        newWidth,
        newHeight
      );
      //renaming edited file

      res.sendFile(
        path.resolve(`./public/${outputFileName}_${newWidth}_${newHeight}.jpg`)
      );
    } else {
      //send the file without processing again

      res.sendFile(
        path.resolve(`./public/${outputFileName}_${newWidth}_${newHeight}.jpg`)
      );
    }
  }
});

export default routes;
