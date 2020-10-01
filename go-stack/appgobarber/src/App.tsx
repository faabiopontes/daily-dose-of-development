import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import { AuthProvider } from './hooks/auth';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <AuthProvider>
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Routes />
      </View>
    </AuthProvider>
  </NavigationContainer>
);

export default App;
