import express from 'express';
import { addNewCountry, getAlLCountries, getAlLCountryByName } from '../controller/CountryController.js';
const countryRouter = express.Router();
countryRouter.route('/addCountries').post(addNewCountry);
countryRouter.route('/countries').get(getAlLCountries);
countryRouter.route('/country').get(getAlLCountryByName);
export default countryRouter;