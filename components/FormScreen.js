import React, { useContext, useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import { AppContext } from './AppContext';

const FormScreen = ({navigation}) => {
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
    // setGenderText(null);
    setWeightText('');
    setHeightText('');
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30 }}>Formularz</Text>
      <View>
        <TextInput
          label='Wiek'
          keyboardType='number-pad'
          value={ageText}
          onChangeText={(text) => setAgeText(text)}
        />
        <RNPickerSelect
          onValueChange={(text) => setGenderText(text)}
          items={[
            { label: 'Mężczyzna', value: 'mężczyzna' },
            { label: 'Kobieta', value: 'kobieta' }
          ]}
          style={{
            ...pickerSelectStyles,
            iconContainer: {
              top: 20,
              right: 10
            },
            placeholder: {
              color: 'purple',
              fontSize: 12,
              fontWeight: 'bold'
            }
          }}
          placeholder={placeholder}
        />
        <TextInput
          label='Waga'
          value={weightText}
          keyboardType='numeric'
          onChangeText={(text) => setWeightText(text)}
        />
        <TextInput
          label='Wzrost'
          value={heightText}
          keyboardType='numeric'
          onChangeText={(text) => setHeightText(text)}
        />
        <Button
          title='Zatwierdź'
          onPress={() => {
            submitForm(ageText, genderText, weightText, heightText),
              clearForm();
            navigation.navigate('Home');
          }}
        ></Button>
      </View>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    height: 150,
    borderRadius: 4,
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});

export default FormScreen;
