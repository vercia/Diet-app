import React, { useContext, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Button, Snackbar } from 'react-native-paper';
import { AppContext } from './AppContext';
import Input from './Input';
import styles from './Styles';

const FormScreen = ({ navigation }) => {
  const placeholder = {
    label: 'Wybierz płeć...',
    value: null
  };

  const {
    submitForm,
    visibleSnackbarForm,
    setVisibleSnackbarForm,
    loginData
  } = useContext(AppContext);
  const [ageText, setAgeText] = useState('');
  const [genderText, setGenderText] = useState(placeholder.label);
  const [weightText, setWeightText] = useState('');
  const [heightText, setHeightText] = useState('');

  const clearForm = () => {
    setAgeText('');
    setGenderText(placeholder.label);
    setWeightText('');
    setHeightText('');
  };

  const onToggleSnackBar = () => {
    setVisibleSnackbarForm(!visibleSnackbarForm);
  };

  const arrForm = [
    {
      label: 'Wiek',
      keyboardType: 'numeric',
      value: ageText,
      onChangeText: (text) => setAgeText(text)
    },
    {
      label: 'Waga',
      keyboardType: 'numeric',
      value: weightText,
      onChangeText: (text) => setWeightText(text)
    },
    {
      label: 'Wzrost (cm)',
      keyboardType: 'numeric',
      value: heightText,
      onChangeText: (text) => setHeightText(text)
    }
  ];

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 32, color: 'white', opacity: 0.9 }}>
          Formularz
        </Text>

        {arrForm.map((item) => {
          return (
            <Input
              key={item.label}
              label={item.label}
              keyboardType={item.keyboardType}
              value={item.value}
              onChangeText={item.onChangeText}
            />
          );
        })}
        <View style={{ justifyContent: 'center', width: '80%' }}>
          <RNPickerSelect
            onValueChange={(text) => setGenderText(text)}
            items={[
              { label: 'Mężczyzna', value: 'mężczyzna' },
              { label: 'Kobieta', value: 'kobieta' }
            ]}
            style={{
              ...pickerSelectStyles,
              placeholder: {
                color: '#222',
                fontSize: 16,
                backgroundColor: 'rgba(210,207,206,.3)'
              }
            }}
            placeholder={placeholder}
          />
        </View>
        <Button
          onPress={() => {
            ageText === '' ||
            genderText === placeholder.label ||
            weightText === '' ||
            heightText === ''
              ? onToggleSnackBar()
              : (submitForm(ageText, genderText, weightText, heightText),
                clearForm(),
                navigation.navigate('Home'),
                loginData(true));
          }}
          style={styles.button}
          color='#5b2a83'
          labelStyle={{ fontSize: 16 }}
        >
          Zatwierdź
        </Button>
        <Snackbar
          visible={visibleSnackbarForm}
          onDismiss={() => setVisibleSnackbarForm(!visibleSnackbarForm)}
          action={{
            label: 'OK',
            onPress: () => {
              setVisibleSnackbarForm(!visibleSnackbarForm);
            }
          }}
        >
          Wprowadź dane
        </Snackbar>
      </View>
    </TouchableWithoutFeedback>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    height: 65,
    borderRadius: 10,
    color: 'white',
    paddingRight: 30,
    backgroundColor: 'rgba(210,207,206,.3)',
    marginTop: 10
  }
});

export default FormScreen;
