import User from '../infra/typeorm/entities/User';

export interface IUserWithoutPassword extends User {
  password: never;
}
