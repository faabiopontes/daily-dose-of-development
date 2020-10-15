import User from '../entities/User';

export interface UserWithOptionalPassword extends User {
  password?: string;
}
