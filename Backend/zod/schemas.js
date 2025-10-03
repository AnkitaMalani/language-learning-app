import { number, z } from 'zod/v4';

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

export { userSchema, lessonSchema };
