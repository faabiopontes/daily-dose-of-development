import React from 'react';

import GlobalStyle from './styles/global';
import Signin from './pages/Signin';
import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer';
// import Signup from './pages/Signup';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider>

    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
