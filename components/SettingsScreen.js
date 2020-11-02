import React, {useContext} from 'react';
import { Text, View } from 'react-native';
import { AppContext } from './AppContext';

const SettingsScreen = () => {
  const {name,age,gender,weight,height} = useContext(AppContext)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{gender}</Text>
      <Text>{weight}</Text>
      <Text>{height}</Text>
    </View>
  );
};

export default SettingsScreen;
