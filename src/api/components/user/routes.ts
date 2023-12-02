import { Router } from 'express';
import userConroller from './controllers';
const userRouter = Router();

userRouter.get('/', userConroller.getUser);
userRouter.post('/', userConroller.createUser);
userRouter.put('/:id', userConroller.updateUser);

export { userRouter };