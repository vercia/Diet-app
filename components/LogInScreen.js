import React from 'react';
import { View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from './Styles';

const LogInScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={styles.tinyLogo}
          source={require('../images/logo.png')}
          style={{ width: 220, height: 220 }}
        />
        <TextInput
          style={styles.input}
          label='Email'
          keyboardType='email-address'
        />
        <TextInput style={styles.input} label='Hasło' secureTextEntry={true} />
        <Button
          onPress={() => navigation.navigate('Home')}
          style={styles.button}
          color='#5b2a83'
          labelStyle={{ fontSize: 16 }}
        >
          Zaloguj
        </Button>
        <Button
          onPress={() => navigation.navigate('Registration')}
          style={styles.button}
          color='#5b2a83'
          labelStyle={{ fontSize: 16 }}
        >
          Zajerestruj się
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LogInScreen;
