import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

describe('User Entity', () => {
  let user: User;
  const password = 'testPassword';
  const wrongPassword = 'testWrongPassword';
  let salt = 'testSalt';
  let hashedPassword: string;

  beforeAll(async () => {
    salt = await bcrypt.genSalt();
    hashedPassword = await bcrypt.hash(password, salt);

    user = new User();
    user.password = hashedPassword;
    user.salt = salt;
  });

  describe('validatePassword', () => {
    it('returns true as password is valid', async () => {
      const result = await user.validatePassword(password);
      expect(result).toStrictEqual(true);
    });

    it('returns false as password is invalid', async () => {
      const result = await user.validatePassword(wrongPassword);
      expect(result).toStrictEqual(false);
    });
  });
});
