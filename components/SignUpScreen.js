import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { AppContext } from './AppContext';

const SignUpScreen = () => {
  const { register } = useContext(AppContext);
  const [nameText, setNameText] = useState();
  const [ageText, setAgeText] = useState();
  const [genderText, setGenderText] = useState();
  const [weightText, setWeightText] = useState();
  const [heightText, setHeightText] = useState();

  const clearForm = () => {
    setNameText('');
    setAgeText('');
    setGenderText('');
    setWeightText('');
    setHeightText('');
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
          label='Wiek'
          keyboardType='number-pad'
          value={ageText}
          onChangeText={(text) => setAgeText(text)}
        />
        <TextInput
          label='Płeć'
          value={genderText}
          onChangeText={(text) => setGenderText(text)}
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
          title='Ok'
          onPress={() => {
            register(nameText, ageText, genderText, weightText, heightText),
              clearForm();
          }}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
