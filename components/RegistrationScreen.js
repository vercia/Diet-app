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
    visibleSnackbarRegistr,
    setVisibleSnackbarRegistr,
    errorInput,
    setErrorInput,
    confirmPassword,
    setConfirmPassword
  } = useContext(AppContext);
  const [nameText, setNameText] = useState('');

  const clearForm = () => {
    setNameText('');
    setEmail('');
    setPassword('');
  };

  const onToggleSnackBar = () => {
    setVisibleSnackbarRegistr(!visibleSnackbarRegistr);
  };

  const onSignUpPress = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        register(nameText), clearForm();
        navigation.navigate('Form');
      })
      .catch((e) => {
        setErrorInput('Podany email już istnieje');
        setVisibleSnackbarRegistr(true);
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
      onChangeText: (confirmPassword) => setConfirmPassword(confirmPassword)
    }
  ];

  const handleFormRegister = () => {
    if (nameText === '') {
      setErrorInput('Podaj imię');
      onToggleSnackBar();
    } else if (password !== confirmPassword) {
      setErrorInput('Hasła się różnią');
      onToggleSnackBar();
    } else if (email === '') {
      setErrorInput('Podaj email');
      onToggleSnackBar();
    } else if (password === '' && confirmPassword === '') {
      setErrorInput('Podaj hasło');
      onToggleSnackBar();
    } else if (password.length < 6 || confirmPassword.length < 6) {
      setErrorInput('Hasło powinno składać się z conajmniej 6 znaków');
      onToggleSnackBar();
    } else {
      onSignUpPress();
    }
  };

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
                handleFormRegister();
              }}
              style={[styles.button, { width: '30%', margin: 10 }]}
              color='#5b2a83'
              labelStyle={{ fontSize: 16 }}
            >
              Dalej
            </Button>
          </View>
          <Snackbar
            visible={visibleSnackbarRegistr}
            onDismiss={() => setVisibleSnackbarRegistr(!visibleSnackbarRegistr)}
            action={{
              label: 'OK',
              onPress: () => {
                setVisibleSnackbarRegistr(!visibleSnackbarRegistr);
              }
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
