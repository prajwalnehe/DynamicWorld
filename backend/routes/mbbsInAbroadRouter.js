import express from 'express';
import { getAllFromMbbsInAbroad, insertIntoMbbsInAbroad } from '../controller/mbbsInAbroadController.js';

const mbbsInAbroadRouter = express.Router();
mbbsInAbroadRouter.route('/addToMbbsInAbroad').post(insertIntoMbbsInAbroad);
mbbsInAbroadRouter.route('/getMbbsInAbroad').get(getAllFromMbbsInAbroad);
export default mbbsInAbroadRouter;