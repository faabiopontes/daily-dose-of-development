import User from '../infra/typeorm/entities/User';

export interface UserWithOptionalPassword extends User {
  password?: string;
}
