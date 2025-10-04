import express from 'express';
import './db/index.js';
import errorHandler from './middleware/errorHandlers.js';
import userRouter from './routers/userRouter.js';
import lessonRouter from './routers/LessonRouter.js';
import quizRouter from './routers/quizRouter.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/lesson', lessonRouter);
app.use('/quiz', quizRouter);

app.use('*splat', (req, res) => {
  throw new Error('Not found', { cause: 404 });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
