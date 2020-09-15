import React from 'react';

import GlobalStyle from './styles/global';
import Signin from './pages/Signin';
import AuthContext from './context/AuthContext';
// import Signup from './pages/Signup';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Diego' }}>
      <Signin />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
