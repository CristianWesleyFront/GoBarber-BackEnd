import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUser.service';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const { user, token } = await authenticateUserService.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  } catch (error) {
    response.status(400).json({ erro: error.message });
  }
});

export default sessionsRouter;
