import express from 'express';
import { getAllFromMbaInIndia, insertIntoMbaInIndia } from '../controller/mbaInIndiaController.js';


const mbaInIndiaRouter = express.Router();
mbaInIndiaRouter.route('/addToMbaInIndia').post(insertIntoMbaInIndia);
mbaInIndiaRouter.route('/getAllFromMba').get(getAllFromMbaInIndia);
export default mbaInIndiaRouter;