import React, { useContext, useState } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import firebase from './config';
import { AppContext } from './AppContext';
import Input from './Input';
import styles from './Styles';

const RegistrationScreen = ({ navigation }) => {
  const {
    register,
    email,
    setEmail,
    password,
    setPassword,
    visibleSnackbarRegistration,
    setVisibleSnackbarRegistration,
    errorInput,
    setErrorInput
  } = useContext(AppContext);
  const [nameText, setNameText] = useState('');

  const clearForm = () => {
    setNameText('');
  };

  const onToggleSnackBar = () => {
    setVisibleSnackbarRegistration(!visibleSnackbarRegistration);
  };

  const onSignUpPress = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Form');
      })
      .catch((e) => {
        setErrorInput('Podaj dane...');
        setVisibleSnackbarRegistration(true);
      });
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
      keyboardType: 'email-address',
      onChangeText: (email) => setEmail(email)
    },
    {
      label: 'Hasło',
      keyboardType: 'default',
      secureTextEntry: true,
      onChangeText: (password) => setPassword(password)
    },
    {
      label: 'Potwierdź hasło',
      keyboardType: 'default',
      secureTextEntry: true,
      onChangeText: (password) => setPassword(password)
    }
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text
            style={{ fontSize: 32, color: 'white', opacity: 0.9, bottom: 10 }}
          >
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
              color='#5b2a83'
              labelStyle={{ fontSize: 16 }}
            >
              Cofnij
            </Button>
            <Button
              onPress={() => {
                errorInput ? onToggleSnackBar() : onSignUpPress();
                // register(nameText), clearForm();
                // onSignUpPress()
              }}
              style={[styles.button, { width: '30%', margin: 10 }]}
              color='#5b2a83'
              labelStyle={{ fontSize: 16 }}
            >
              Dalej
            </Button>
          </View>
          <Snackbar
            visible={visibleSnackbarRegistration}
            onDismiss={() =>
              setVisibleSnackbarRegistration(!visibleSnackbarRegistration)
            }
            action={{
              label: 'OK'
            }}
          >
            {errorInput}
          </Snackbar>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
