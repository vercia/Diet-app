import React, {useContext} from 'react';
import { View } from 'react-native';
import { Button, List, Divider } from 'react-native-paper';
import styles from './Styles';
import { AppContext } from './AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage'

const SettingsScreen = ({ navigation }) => {
  const {loginData} = useContext(AppContext)

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
        onPress={() => {
          navigation.navigate('LogIn');
          loginData(false);
        }}
      >
        Log out
      </Button>
      <Button
        style={styles.button}
        color='#5b2a83'
        labelStyle={{ fontSize: 16 }}
        onPress={() => {
            AsyncStorage.clear()
           
        }}
      >
        Clear
      </Button>
    </View>
  );
};

export default SettingsScreen;