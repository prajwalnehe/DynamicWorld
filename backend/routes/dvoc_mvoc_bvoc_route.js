import express from 'express';
import { getAllFromBvoc, getAllFromDiploma, getAllFromDvoc, getAllFromMvoc, insertIntoBvoc, insertIntoDiploma, insertIntoDvoc, insertIntoMvoc } from '../controller/dvoc_mvoc_bvoc_controller.js';
const dvoc_mvoc_bvoc_Router = express.Router();
dvoc_mvoc_bvoc_Router.route('/createDvocCourse').post(insertIntoDvoc);
dvoc_mvoc_bvoc_Router.route('/dvoc-programs').get(getAllFromDvoc);


dvoc_mvoc_bvoc_Router.route('/createBvocCourse').post(insertIntoBvoc);
dvoc_mvoc_bvoc_Router.route('/bvoc-programs').get(getAllFromBvoc);

dvoc_mvoc_bvoc_Router.route('/createMvocCourse').post(insertIntoMvoc);
dvoc_mvoc_bvoc_Router.route('/mvoc-programs').get(getAllFromMvoc);


dvoc_mvoc_bvoc_Router.route('/createDiplomaCourse').post(insertIntoDiploma);
dvoc_mvoc_bvoc_Router.route('/diploma-programs').get(getAllFromDiploma);
export default dvoc_mvoc_bvoc_Router;