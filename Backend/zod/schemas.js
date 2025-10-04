import { number, z } from 'zod';

const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid Email'),
  password: z.string().min(8)
});

const lessonSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Title is required')
});

const questionSchema = z.object({
  questionText: z.string().min(1, "Question text is required"),
  options: z
    .array(z.string())
    .min(2, "A question must have at least 2 options"),
  correctAnswer: z.string().min(1, "Correct answer is required"),
  type: z.enum(["multiple-choice", "true-false", "fill-blank"]).default("multiple-choice"),
});

const quizSchema = z.object({
  lesson: z.string().min(1, "Lesson ID is required"), 
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]).default("Beginner"),
  questions: z.array(questionSchema).min(1, "At least one question is required"),
});


export { userSchema, lessonSchema, quizSchema };
