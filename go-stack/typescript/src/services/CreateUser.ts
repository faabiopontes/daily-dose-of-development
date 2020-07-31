/**
 * To create: name, email, password
 */
// When we need to define the format of a object, we create an interface
interface TechObject {
  title: string;
  experience: number;
}
interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>; // for primitive arrays we can use string[] too
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
