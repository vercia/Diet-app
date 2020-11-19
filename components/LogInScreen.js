import React, { useContext, useState } from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Text
} from 'react-native';
import {
  TextInput,
  Button,
  Dialog,
  Portal,
  Paragraph,
  Snackbar
} from 'react-native-paper';
import styles from './Styles';
import { AppContext } from './AppContext';
import firebase from './config';

const LogInScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    visibleSnackbar,
    setVisibleSnackbar
  } = useContext(AppContext);

  const onToggleSnackBar = () => {
    setVisibleSnackbar(!visibleSnackbar)
  };

  const hideDialog = () => setVisible(false);

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((e) => {
        setError('Błędne dane logowania.. Spróbuj ponownie.');
        setVisible(true);
      });
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
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Image
            style={styles.tinyLogo}
            source={require('../images/logo.png')}
            style={{ width: 220, height: 220 }}
          />
          <TextInput
            style={styles.input}
            label='Email'
            keyboardType='email-address'
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            style={styles.input}
            label='Hasło'
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <Button
            onPress={() =>
              email === '' && password === ''
                ? onToggleSnackBar()
                : onLoginPress()
            }
            style={styles.button}
            color='#5b2a83'
            labelStyle={{ fontSize: 16 }}
          >
            Zaloguj
          </Button>
          <Button
            onPress={() => {
              navigation.navigate('Registration');
            }}
            style={styles.button}
            color='#5b2a83'
            labelStyle={{ fontSize: 16 }}
          >
            Zarejestruj się
          </Button>
          <Snackbar
            visible={visibleSnackbar}
            onDismiss={() => setVisibleSnackbar(!visibleSnackbar)}
            action={{
              label: 'OK'
            }}
          >
            Uzupełnij dane
          </Snackbar>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title style={{ color: 'black' }}>Błąd</Dialog.Title>
              <Dialog.Content>
                <Paragraph style={{ color: 'black' }}>{error}</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LogInScreen;
