import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from './AppContext';
import DialogProfile from './DialogProfile';

const Profile = ({ navigation }) => {
  const {
    gender,
    age,
    height,
    weight,
    submitEdit,
    setAge,
    setHeight,
    setWeight
  } = useContext(AppContext);
  const [ageText, setAgeText] = useState();
  const [heightText, setHeightText] = useState();
  const [weightText, setWeightText] = useState();

  const arrDialog = [
    {
      title: `Wiek: ${age}`,
      label: 'Wiek',
      keyboardType: 'number-pad',
      value: ageText,
      onChangeText: (text) => setAgeText(text),
      submitEdit: submitEdit(ageText, setAge)
    },
    {
      title: `Wzrost: ${height}`,
      label: 'Wzrost',
      keyboardType: 'number-pad',
      value: heightText,
      onChangeText: (text) => setHeightText(text),
      submitEdit: submitEdit(heightText, setHeight)
    },
    {
      title: `Waga: ${weight}`,
      label: 'Waga',
      keyboardType: 'number-pad',
      value: weightText,
      onChangeText: (text) => setWeightText(text),
      submitEdit: submitEdit(weightText, setWeight)
    }
  ];

  return (
    <View>
      <Text onPress={() => navigation.navigate('Settings')}>
        <Ionicons name='ios-arrow-back' size={50} color='black' />
        Back
      </Text>
      <View>
        <Avatar.Image size={140} source={require('../assets/favicon.png')} />
        <Text>Name</Text>
      </View>
      <List.Section>
        <List.Subheader>Twój stary</List.Subheader>
        <List.Item title={`Płeć: ${gender}`} />
        {arrDialog.map((item) => {
          return (
            <DialogProfile
              key={item.label}
              title={item.title}
              label={item.label}
              keyboardType={item.keyboardType}
              value={item.value}
              onChangeText={item.onChangeText}
              submitEdit={item.submitEdit}
            />
          );
        })}
      </List.Section>
    </View>
  );
};

export default Profile;
