import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { AppContext } from './AppContext';

const RegistrationScreen = ({ navigation }) => {
  const { register } = useContext(AppContext);
  const [nameText, setNameText] = useState();

  const clearForm = () => {
    setNameText('');
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30 }}>Rejestracja</Text>
      <View>
        <TextInput
          label='Imię'
          value={nameText}
          onChangeText={(text) => setNameText(text)}
        />
        <TextInput
          label='Email'
          value={nameText}
          keyboardType='email-address'
          onChangeText={(text) => setNameText(text)}
        />
        <TextInput
          label='Hasło'
          keyboardType='password'
          secureTextEntry={true}
        />
        <TextInput
          label='Potwierdź hasło'
          keyboardType='password'
          secureTextEntry={true}
        />
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

const styles = StyleSheet.create({});

export default RegistrationScreen;
