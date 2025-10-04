import { Router } from 'express';
import validateBody from '../middleware/validateBody.js';
import { lessonSchema } from '../zod/schemas.js';
import { getLesson, getIdByLesson, createLesson, updateLesson, deleteLesson } from '../controllers/lesson.js';

const lessonRouter = Router();

lessonRouter.route('/').get(getLesson).post(validateBody(lessonSchema), createLesson);

lessonRouter.route('/:id').get(getIdByLesson).put(validateBody(lessonRouter), updateLesson).delete(deleteLesson);

export default lessonRouter;
