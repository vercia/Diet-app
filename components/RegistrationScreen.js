import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { AppContext } from './AppContext';
import TextInputRegistration from './TextInputRegistration';
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>
      <Text style={{ fontSize: 32, color: 'white', opacity: .9, bottom: 15 }}>Załóż konto</Text>
        {arrRegistration.map((item) => {
          return (
            <TextInputRegistration
              key={item.label}
              label={item.label}
              value={item.value}
              onChangeText={item.onChangeText}
              keyboardType={item.keyboardType}
              secureTextEntry={item.secureTextEntry}
            />
          );
        })}
        <Button
          onPress={() => {
            navigation.navigate('LogIn');
          }}
          style={styles.button}
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
          style={styles.button}
          color='#222222'
          labelStyle={{ fontSize: 16 }}
        >
          Dalej
        </Button>
    </View>
  );
};

export default RegistrationScreen;
