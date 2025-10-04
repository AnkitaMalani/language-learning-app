import { isValidObjectId } from 'mongoose';
import Lesson from '../models/lesson.js';
import User from '../models/User.js';

const getLesson = async (req, res) => {
  const lesson = await Lesson.find();
  res.json(lesson);
};

const createLesson = async (req, res) => {
  const { userId } = req.sanitizedBody;

  const found = await User.findOne({ userId });

  if (!found) throw new Error('User not found', { cause: 404 });

  const lesson = await Lesson.create(req.sanitizedBody);

  res.json(lesson);
};

const getIdByLesson = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });

  const lesson = await Lesson.findById(id);

  if (!lesson) throw new Error('User not found', { cause: 404 });

  res.json(lesson);
};

const updateLesson = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });

  const lesson = await Lesson.findByIdAndUpdate(id, req.sanitizedBody, { new: true });

  if (!lesson) throw new Error('User not found', { cause: 404 });

  res.json(lesson);
};

const deleteLesson = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });

  const lesson = await Lesson.findByIdAndDelete(id);

  if (!lesson) throw new Error('User not found', { cause: 404 });

  res.json(lesson);
};

export { getLesson, getIdByLesson, createLesson, updateLesson, deleteLesson };
