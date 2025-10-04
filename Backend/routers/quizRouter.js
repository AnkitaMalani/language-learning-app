import { Router } from 'express';
import validateBody from '../middleware/validateBody.js';
import { quizSchema } from '../zod/schemas.js';
import { getQuiz, getQuizById, createQuiz, updateQuiz, deleteQuiz } from '../controllers/quiz.js';

const quizRouter = Router();

quizRouter.route('/').get(getQuiz).post(validateBody(quizSchema), createQuiz);

quizRouter.route('/:id').get(getQuizById).put(validateBody(quizSchema), updateQuiz).delete(deleteQuiz);

export default quizRouter;
