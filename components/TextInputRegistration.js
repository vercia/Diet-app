import React from 'react';
import { TextInput } from 'react-native-paper';
import styles from './Styles'

const TextInputRegistration = (props) => {
  return (
    <TextInput
      label={props.label}
      value={props.value}
      onChangeText={props.onChangeText}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
      style={styles.input}
    />
  );
};

export default TextInputRegistration;
