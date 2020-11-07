import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper'
import styles from './Styles'

const SettingsScreen = ({navigation}) => {
 return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={() => navigation.navigate('Profile')}>Profile</Button>
      <Button
        style={styles.button}
        color='#5b2a83'
        labelStyle={{ fontSize: 16 }}
        onPress={() => navigation.navigate('LogIn')}
      >
        Wyloguj się
      </Button>
    </View>
  );
};

export default SettingsScreen;
