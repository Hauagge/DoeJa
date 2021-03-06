import { Router } from 'express';

import AutenticateUserService from '../../../../services/AuthenticateUserService';

const sessions = Router();
sessions.post('/', async (request, response) => {
  try {
    const { email, senha } = request.body;
    const autenticateUser = new AutenticateUserService();

    const { user, token } = await autenticateUser.execute({
      email,
      senha,
    });

    delete user.senha;

    return response.json({ user, token });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessions;
