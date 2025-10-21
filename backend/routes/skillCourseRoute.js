import express from 'express';
import { getAllSkillCourses, insertIntoSkill } from '../controller/SkillCourseController.js';
const skillCourseRouter = express.Router();
skillCourseRouter.route('/createSkillCourse').post(insertIntoSkill);
skillCourseRouter.route('/skillCourses-programs').get(getAllSkillCourses);
export default skillCourseRouter;