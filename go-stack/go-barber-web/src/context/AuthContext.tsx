import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface IAuthParams {
  email: string;
  password: string;
}

interface IAuthContext {
  name: string;
  signIn(data: IAuthParams): Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }: IAuthParams) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    console.log(response);
  }, []);
  return (
    <AuthContext.Provider value={{ name: 'Diego', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
