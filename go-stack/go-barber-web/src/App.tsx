import React from 'react';

import GlobalStyle from './styles/global';
import Signin from './pages/Signin';
import { AuthProvider } from './hooks/AuthContext';
// import Signup from './pages/Signup';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
