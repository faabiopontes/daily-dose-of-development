import { createContext } from 'react';

interface IAuthContext {
  name: string;
}

const AuthContext = createContext({} as IAuthContext);

export default AuthContext;
