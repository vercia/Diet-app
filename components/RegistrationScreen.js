import React, { useContext, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { AppContext } from './AppContext';
import TextInputRegistration from './TextInputRegistration';

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
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30 }}>Rejestracja</Text>
      <View>
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
          title='Cofnij'
          onPress={() => {
            navigation.navigate('LogIn');
          }}
        ></Button>
        <Button
          title='Dalej'
          onPress={() => {
            register(nameText), clearForm();
            navigation.navigate('Form');
          }}
        ></Button>
      </View>
    </View>
  );
};

export default RegistrationScreen;
