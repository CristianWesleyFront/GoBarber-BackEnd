import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUsersService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const userRepositoty = getRepository(User);

    const checkUserExists = await userRepositoty.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw Error('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepositoty.create({
      name,
      email,
      password: hashedPassword,
    });

    await userRepositoty.save(user);

    return user;
  }
}

export default CreateUsersService;
