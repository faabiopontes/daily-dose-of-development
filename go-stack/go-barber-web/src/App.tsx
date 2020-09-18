import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';
import Routes from './routes';
// import Signup from './pages/Signup';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
