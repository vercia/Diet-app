import React, {useContext} from 'react';
import { Text, View, Button } from 'react-native';
import { AppContext } from './AppContext';

const SettingsScreen = ({navigation}) => {
  const {name,age,gender,weight,height} = useContext(AppContext)

  return (
    <View style={{ flex: 1 }}>
      <Button title='Profile' onPress={() => navigation.navigate('Profile')} />
      <Button title='Wyloguj się' onPress={() => navigation.navigate('LogIn')} />
    </View>
  );
};

export default SettingsScreen;
