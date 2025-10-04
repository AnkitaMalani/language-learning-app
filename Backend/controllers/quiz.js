import { isValidObjectId } from 'mongoose';
import Quiz from '../models/Quiz.js';
import Lesson from '../models/lesson.js';

const getQuiz = async (require, res) => {
  const quiz = Lesson.find();
  res.json(Quiz);
};

const createQuiz = async (req, res) => {
  const { lessonId, questions, difficulty } = req.sanitizedBody;

  const lesson = await Lesson.findById({ lessonId });

  if (!lesson) throw new Error('User not found', { cause: 404 });

  const quiz = await Quiz.create({
    lesson: lessonId,
    questions,
    difficulty
  });
  lesson.quiz = quiz._id;
  await lesson.save();

  res.json(lesson);
};

const getQuizById = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });

  const quiz = await Quiz.findById(id);

  if (!quiz) throw new Error('User not found', { cause: 404 });

  res.json(quiz);
};
const updateQuiz = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });

  const quiz = await Quiz.findByIdAndUpdate(id, req.sanitizedBody, { new: true });

  if (!quiz) throw new Error('Quiz not found', { cause: 404 });

  res.json(quiz);
};

const deleteQuiz = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });

  const quiz = await Quiz.findByIdAndDelete(id);

  if (!quiz) throw new Error('Quiz not found', { cause: 404 });

  res.json({ message: 'Quiz deleted succesfully' });
};

export { getQuiz, getQuizById, createQuiz, updateQuiz, deleteQuiz };
