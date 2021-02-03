import express from 'express';
import { getCourses, createCourses } from '../controllers/courses';

const router = express.Router();

router.get('/', getCourses)
router.post('/', createCourses)

export default router