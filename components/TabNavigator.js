import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import FoodScreen from './FoodScreen';
import SettingsStackScreen from './SettingsNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
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
        activeTintColor: '#00dfc0',
        inactiveTintColor: 'rgba(210,207,206,.3)',
        style: { borderTopWidth: 0 }
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Food' component={FoodScreen} />
      <Tab.Screen name='Settings' component={SettingsStackScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
