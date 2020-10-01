import AsyncStorage from '@react-native-community/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
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
  created_at: Date; // eslint-disable-line camelcase
  updated_at: Date; // eslint-disable-line camelcase
}

interface IAuthContext {
  user: IUser;
  signIn(data: IAuthParams): Promise<void>;
  signOut(): void;
}

interface IAuthState {
  token: string;
  user: IUser;
}

const AuthContext = createContext({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const hash = '@GoBarber';
  const [data, setData] = useState<IAuthState>({} as IAuthState);

  useEffect(() => {
    const loadStoragedData = async () => {
      const [[, token], [, user]] = await AsyncStorage.multiGet([
        `${hash}:token`,
        `${hash}:user`,
      ]);

      if (token && user) {
        setData({ token, user: JSON.parse(user) });
      }

      setData({} as IAuthState);
    };
    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }: IAuthParams) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      [`${hash}:token`, token],
      [`${hash}:user`, JSON.stringify(user)],
    ]);
    console.log(token);
    console.log(user);
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    AsyncStorage.multiRemove([`${hash}:token`, `${hash}:user`]);

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
