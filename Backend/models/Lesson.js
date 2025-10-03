import { Schema, model } from 'mongoose';

const lessonSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Lesson title is required'],
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    content: {
      type: String,
      required: [true, 'Lesson content is required']
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner'
    },
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz' // Reference to quiz collection
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' // Optional reference to creator
    }
  },
  {
    timestamps: true
  }
);

export default model('Lesson', lessonSchema);
