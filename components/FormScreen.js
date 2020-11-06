import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Button } from 'react-native-paper';

import { AppContext } from './AppContext';
import TextInputForm from './TextInputForm';
import styles from './Styles';

const FormScreen = ({ navigation }) => {
  const { submitForm } = useContext(AppContext);
  const [ageText, setAgeText] = useState();
  const [genderText, setGenderText] = useState();
  const [weightText, setWeightText] = useState();
  const [heightText, setHeightText] = useState();

  const placeholder = {
    label: 'Wybierz płeć...',
    value: null
  };

  const clearForm = () => {
    setAgeText('');
    setGenderText(placeholder.label);
    setWeightText('');
    setHeightText('');
  };

  const arrForm = [
    {
      label: 'Wiek',
      keyboardType: 'number-pad',
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32, color:'white', opacity: .9 }}>Formularz</Text>
      {/* <View> */}
      {arrForm.map((item) => {
        return (
          <TextInputForm
            key={item.label}
            label={item.label}
            keyboardType={item.keyboardType}
            value={item.value}
            onChangeText={item.onChangeText}
          />
        );
      })}
      <RNPickerSelect
        onValueChange={(text) => setGenderText(text)}
        items={[
          { label: 'Mężczyzna', value: 'mężczyzna' },
          { label: 'Kobieta', value: 'kobieta' }
        ]}
        style={{
          ...pickerSelectStyles,
          placeholder: {
            color: '#222222',
            fontSize: 16,
            backgroundColor: 'rgba(210,207,206,.3)'
          }
        }}
        placeholder={placeholder}
      />
      <Button
        onPress={() => {
          submitForm(ageText, genderText, weightText, heightText), clearForm();
          navigation.navigate('Home');
        }}
        style={styles.button}
        color='#222222'
        labelStyle={{ fontSize: 16 }}
      >
        Zatwierdź
      </Button>
      {/* </View> */}
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    height: 65,
    width: '80%',
    borderRadius: 10,
    color: '#222222',
    paddingRight: 30,
    backgroundColor: 'rgba(210,207,206,.3)',
    marginTop: 10
  }
});

export default FormScreen;
