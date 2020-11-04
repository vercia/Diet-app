import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import {
  Avatar,
  List,
  Dialog,
  Portal,
  Paragraph,
  Button,
  TextInput
} from 'react-native-paper';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppContext } from './AppContext';

const Profile = ({ navigation }) => {
  const { gender, age, height, weight, submitEdit, setAge } = useContext(
    AppContext
  );
  const [ageText, setAgeText] = useState();

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

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
        <List.Item
          title={`Wiek: ${age}`}
          right={() => (
            <MaterialCommunityIcons
              name='pencil'
              size={24}
              color='black'
              onPress={showDialog}
            />
          )}
        />
        <List.Item
          title={`Wzrost: ${height}`}
          right={() => (
            <MaterialCommunityIcons name='pencil' size={24} color='black' />
          )}
        />
        <List.Item
          title={`Waga: ${weight}`}
          right={() => (
            <MaterialCommunityIcons name='pencil' size={24} color='black' />
          )}
        />
      </List.Section>

      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Edit</Dialog.Title>
            <Dialog.Content>
              <TextInput
                label='Wiek'
                keyboardType='number-pad'
                value={ageText}
                onChangeText={(text) => setAgeText(text)}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={() => {
                  hideDialog();
                  submitEdit(ageText, setAge);
                }}
              >
                Done
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </View>
  );
};

export default Profile;
