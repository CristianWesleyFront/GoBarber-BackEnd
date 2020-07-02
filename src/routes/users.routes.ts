import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import CreateUserService from '../services/CreateUsers.service';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const uploade = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (error) {
    response.status(400).json({ erro: error.message });
  }
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  uploade.single('avatar'),
  async (request, response) => {
    return response.json({ ok: true });
  },
);

export default usersRouter;
