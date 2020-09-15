import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface IAuthParams {
  email: string;
  password: string;
}

interface IUser {
  id: string;
  email: string;
  name: string;
  avatar: string;
  created_at: Date;
  updated_at: Date;
}

interface IAuthContext {
  user: IUser;
  signIn(data: IAuthParams): Promise<void>;
}

interface IAuthState {
  token: string;
  user: IUser;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const hash = '@GoBarber';
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem(`${hash}:token`);
    const user = localStorage.getItem(`${hash}:user`);

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });
  const signIn = useCallback(async ({ email, password }: IAuthParams) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem(`${hash}:token`, token);
    localStorage.setItem(`${hash}:user`, JSON.stringify(user));
    setData({ token, user });
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
