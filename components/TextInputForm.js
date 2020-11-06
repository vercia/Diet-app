import React from 'react';
import { TextInput } from 'react-native-paper';

const TextInputForm = (props) => {
  return (
    <TextInput
      label={props.label}
      keyboardType={props.keyboardType}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
};

export default TextInputForm;
