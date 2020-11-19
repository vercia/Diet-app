import React from 'react';
import { View } from 'react-native';
import { Button, List, Divider } from 'react-native-paper';
import styles from './Styles';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', top: 40 }}>
      <List.Item
        title='Profile'
        titleStyle={{ color: '#00dfc0', fontSize: 20 }}
        style={{ width: '90%' }}
        onPress={() => navigation.navigate('Profile')}
      />
      <Divider style={{ backgroundColor: '#222', width: '90%' }} />
      <List.Item
        title='Profile'
        titleStyle={{ color: '#00dfc0', fontSize: 20 }}
        style={{ width: '90%' }}
        // onPress={() => navigation.navigate('Profile')}
      />
      <Divider style={{ backgroundColor: '#222', width: '90%' }} />
      <List.Item
        title='Profile'
        titleStyle={{ color: '#00dfc0', fontSize: 20 }}
        style={{ width: '90%' }}
        // onPress={() => navigation.navigate('Profile')}
      />
      <Divider style={{ backgroundColor: '#222', width: '90%' }} />
      <List.Item
        title='Profile'
        titleStyle={{ color: '#00dfc0', fontSize: 20 }}
        style={{ width: '90%' }}
        // onPress={() => navigation.navigate('Profile')}
      />
      <Divider style={{ backgroundColor: '#222', width: '90%' }} />
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
