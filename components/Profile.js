import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { AppContext } from './AppContext';
import DialogProfile from './DialogProfile';

const Profile = ({ navigation }) => {
  const {
    gender,
    age,
    height,
    weight,
    setAge,
    setHeight,
    setWeight,
    name,
    photo,
    setPhoto,
    photoData
  } = useContext(AppContext);
  const [ageText, setAgeText] = useState();
  const [heightText, setHeightText] = useState();
  const [weightText, setWeightText] = useState();

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setPhoto(pickerResult.uri);
    photoData(pickerResult.uri);
  };

  const arrDialog = [
    {
      title: `Age: ${age}`,
      label: 'Age',
      keyboardType: 'number-pad',
      value: ageText,
      onChangeText: (text) => setAgeText(text),
      valueTwo: setAge,
      keyValue: 'AGE_KEY'
    },
    {
      title: `Height: ${height}`,
      label: 'Height',
      keyboardType: 'number-pad',
      value: heightText,
      onChangeText: (text) => setHeightText(text),
      valueTwo: setHeight,
      keyValue: 'HEIGHT_KEY'
    },
    {
      title: `Weight: ${weight}`,
      label: 'Weight',
      keyboardType: 'number-pad',
      value: weightText,
      onChangeText: (text) => setWeightText(text),
      valueTwo: setWeight,
      keyValue: 'WEIGHT_KEY'
    }
  ];

  return (
    <View>
      <Text
        style={{ color: 'white', fontSize: 20, padding: 15 }}
        onPress={() => navigation.navigate('Settings')}
      >
        <Ionicons name='ios-arrow-back' size={20} color='white' />
        Back
      </Text>
      <View style={{ alignItems: 'center' }}>
        <View>
          {photo == null ? (
            <Avatar.Image size={140} source={require('../images/avatar.png')} />
          ) : (
            <Avatar.Image size={140} source={{ uri: photo }} />
          )}
          <Ionicons
            style={{ position: 'absolute', bottom: 10, right: 10 }}
            name='ios-add-circle'
            size={32}
            color='#00dfc0'
            onPress={openImagePickerAsync}
          />
        </View>
      </View>
      <Text
        style={{ color: 'white', fontSize: 20, top: 8, textAlign: 'center' }}
      >
        {name}
      </Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30
        }}
      >
        <List.Section
          style={{
            backgroundColor: 'rgba(210,207,206,.3)',
            width: '90%',
            borderRadius: 10
          }}
        >
          <List.Subheader>Your informations</List.Subheader>
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
                valueTwo={item.valueTwo}
                keyValue={item.keyValue}
              />
            );
          })}
        </List.Section>
      </View>
    </View>
  );
};

export default Profile;
