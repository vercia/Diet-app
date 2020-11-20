import React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import { StatusBar } from 'react-native';
import AppContextProvider from './components/AppContext';
import LogInStackScreen from './components/LogInStackScreen';


const App = () => {
  return (
    <PaperProvider theme={themePaper}>
      <AppContextProvider>
        <NavigationContainer theme={themeNavigation}>
          <LogInStackScreen />
        </NavigationContainer>
        <StatusBar hidden={true} />
      </AppContextProvider>
    </PaperProvider>
  );
};

const themePaper = {
  ...PaperDefaultTheme,
  roundness: 2,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#00dfc0',
    accent: '#f1c40f',
    background: 'rgba(210,207,206,.3)',
    text: 'white'
  }
};

const themeNavigation = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: 'green',
    card: '#222222',
    background: '#5b2a83'
  }
};

export default App;
