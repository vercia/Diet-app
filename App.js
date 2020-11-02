import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen'
import FoodScreen from './components/FoodScreen';
import SettingsScreen from './components/SettingsScreen';
import SingUpScreen from './components/SignUpScreen'
import { Ionicons } from '@expo/vector-icons';
import AppContextProvider from './components/AppContext'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'ios-home';
              } else if (route.name === 'Food') {
                iconName = 'ios-restaurant';
              } else if (route.name === 'Settings') {
                iconName = 'ios-settings';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
          }}
        >
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Food' component={FoodScreen} />
          <Tab.Screen name='Settings' component={SettingsScreen} />
          <Tab.Screen name='SignUp' component={SingUpScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
