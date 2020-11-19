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
import { createStackNavigator } from '@react-navigation/stack';
import AppContextProvider from './components/AppContext';
import LogInScreen from './components/LogInScreen';
import RegistrationScreen from './components/RegistrationScreen';
import FormScreen from './components/FormScreen';
import TabNavigator from './components/TabNavigator';

const LogInStack = createStackNavigator();

function LogInStackScreen() {
  return (
    <LogInStack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false
      }}
    >
      <LogInStack.Screen name='LogIn' component={LogInScreen} />
      <LogInStack.Screen name='Registration' component={RegistrationScreen} />
      <LogInStack.Screen name='Form' component={FormScreen} />
      <LogInStack.Screen name='Home' component={TabNavigator} />
    </LogInStack.Navigator>
  );
}

const App = () => {
  return (
    <PaperProvider theme={themePaper}>
      <AppContextProvider>
        <NavigationContainer theme={themeNavigation}>
          {LogInStackScreen()}
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
