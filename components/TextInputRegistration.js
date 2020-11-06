import React from 'react';
import { TextInput } from 'react-native-paper';

const TextInputRegistration = (props) => {
  return (
    <TextInput
      label={props.label}
      value={props.value}
      onChangeText={props.onChangeText}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

export default TextInputRegistration;
