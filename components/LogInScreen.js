import React, {useContext} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

const LogInScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30 }}>Logowanie</Text>
      <View>
        <TextInput label='Email' keyboardType='email-address' />
        <TextInput label='Hasło' secureTextEntry={true} />
        <Button
          title='Zaloguj'
          onPress={() => navigation.navigate('Home')}
        ></Button>
        <Button
          title='Zajerestruj się'
          onPress={() => navigation.navigate('Registration')}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LogInScreen;
