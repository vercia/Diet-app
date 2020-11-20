import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from './LogInScreen';
import RegistrationScreen from './RegistrationScreen';
import FormScreen from './FormScreen';
import TabNavigator from './TabNavigator';
import { AppContext } from './AppContext';

const LogInStack = createStackNavigator();

function LogInStackScreen() {
  const {login} = useContext(AppContext)

return (
    <LogInStack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false
      }}
    >
      <LogInStack.Screen name='LogIn' component={login === false ? LogInScreen: TabNavigator} />
      <LogInStack.Screen name='Registration' component={RegistrationScreen} />
      <LogInStack.Screen name='Form' component={FormScreen} />
      <LogInStack.Screen name='Home' component={TabNavigator} />
    </LogInStack.Navigator>
  );
}

export default LogInStackScreen;
