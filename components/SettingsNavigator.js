import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './SettingsScreen';
import Profile from './Profile';

const SettingsStack = createStackNavigator();
const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <SettingsStack.Screen name='Settings' component={SettingsScreen} />
      <SettingsStack.Screen name='Profile' component={Profile} />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen