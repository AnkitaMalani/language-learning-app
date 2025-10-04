import { Schema, model } from 'mongoose';

const questionSchema = new Schema(
  {
    questionText: {
      type: String,
      required: true
    },
    options: {
      type: [String], // multiple choices
      validate: {
        validator: function (arr) {
          return arr.length >= 2; // must have at least 2 options
        },
        message: 'A question must have at least 2 options'
      }
    },
    correctAnswer: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['multiple-choice', 'true-false', 'fill-blank'],
      default: 'multiple-choice'
    }
  },
  { _id: false }
);
const quizSchema = new Schema(
  {
    lesson: {
      type: Schema.Types.ObjectId,
      ref: 'Lesson',
      required: true
    },
    questions: [questionSchema],
    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner'
    }
  },
  {
    timestamps: true
  }
);

export default model('Quiz', quizSchema);
