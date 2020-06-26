import { Router } from 'express';

import CreateUserService from '../services/CreateUsers.service';

const usersRouter = Router();

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

export default usersRouter;
