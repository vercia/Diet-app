import React, { useContext, useState } from 'react';
import { View, Text, Image } from 'react-native';
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
    submitEdit,
    setAge,
    setHeight,
    setWeight
  } = useContext(AppContext);
  const [ageText, setAgeText] = useState();
  const [heightText, setHeightText] = useState();
  const [weightText, setWeightText] = useState();

  const [photo, setPhoto] = useState(null);

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

    setPhoto({ localUri: pickerResult.uri });
  };

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
            <Avatar.Image size={140} source={{ uri: photo.localUri }} />
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
        Name
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
          <List.Subheader>Twoje dane</List.Subheader>
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
    </View>
  );
};

export default Profile;
