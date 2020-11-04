import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AppContextProvider from './components/AppContext';
import LogInScreen from './components/LogInScreen';
import RegistrationScreen from './components/RegistrationScreen';
import FormScreen from './components/FormScreen'
import TabNavigator from './components/TabNavigator'

const LogInStack = createStackNavigator()

function LogInStackScreen() {
  return (
    <LogInStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <LogInStack.Screen name='LogIn' component={LogInScreen} />
      <LogInStack.Screen name='Registration' component={RegistrationScreen} />
      <LogInStack.Screen name='Form' component={FormScreen} />
      <LogInStack.Screen name='Home' component={TabNavigator} />
    </LogInStack.Navigator>
  );
}

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppContextProvider>
        <NavigationContainer>{LogInStackScreen()}</NavigationContainer>
        <StatusBar hidden={true} />
      </AppContextProvider>
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f'
  }
};

export default App