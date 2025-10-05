import { Router } from 'express';
import validateZod from '../middleware/validateBody.js';
import { userSchema, signInSchema } from '../zod/schemas.js';
import { me, signup, signin, signout } from '../controllers/auth.js';

const authRouter = Router();

authRouter.route('/signup').post(validateZod(userSchema), signup);

authRouter.route('/signin').post(validateZod(signInSchema), signin);

authRouter.route('/signout').delete(signout);

export default authRouter;