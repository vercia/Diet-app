import React, {useContext} from 'react';
import { Text, View, Button } from 'react-native';
import { AppContext } from './AppContext';

const SettingsScreen = ({navigation}) => {
  const {name,age,gender,weight,height} = useContext(AppContext)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title='Go to Profile'
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default SettingsScreen;
