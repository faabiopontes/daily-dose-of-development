import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUserWithoutPassword } from '../@types';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;

  password: string;
}

interface IResponse {
  user: IUserWithoutPassword;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = (await this.usersRepository.findByEmail(
      email
    )) as IUserWithoutPassword;

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });
    delete user.password;

    return { user, token };
  }
}

export default AuthenticateUserService;
