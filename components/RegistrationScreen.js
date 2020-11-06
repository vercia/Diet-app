import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { AppContext } from './AppContext';
import Input from './Input';
import styles from './Styles';

const RegistrationScreen = ({ navigation }) => {
  const { register } = useContext(AppContext);
  const [nameText, setNameText] = useState();

  const clearForm = () => {
    setNameText('');
  };

  const arrRegistration = [
    {
      label: 'Imię',
      keyboardType: 'default',
      value: nameText,
      onChangeText: (text) => setNameText(text)
    },
    {
      label: 'Email',
      keyboardType: 'email-address'
    },
    {
      label: 'Hasło',
      keyboardType: 'default',
      secureTextEntry: true
    },
    {
      label: 'Potwierdź hasło',
      keyboardType: 'default',
      secureTextEntry: true
    }
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32, color: 'white', opacity: 0.9, bottom: 10 }}>
        Załóż konto
      </Text>
      {arrRegistration.map((item) => {
        return (
          <Input
            key={item.label}
            label={item.label}
            value={item.value}
            onChangeText={item.onChangeText}
            keyboardType={item.keyboardType}
            secureTextEntry={item.secureTextEntry}
          />
        );
      })}
      <View style={{ flexDirection: 'row', top: 10 }}>
        <Button
          onPress={() => {
            navigation.navigate('LogIn');
          }}
          style={[styles.button, { width: '30%', margin: 10 }]}
          color='#222222'
          labelStyle={{ fontSize: 16 }}
        >
          Cofnij
        </Button>
        <Button
          onPress={() => {
            register(nameText), clearForm();
            navigation.navigate('Form');
          }}
          style={[styles.button, { width: '30%', margin: 10 }]}
          color='#222222'
          labelStyle={{ fontSize: 16 }}
        >
          Dalej
        </Button>
      </View>
    </View>
  );
};

export default RegistrationScreen;
