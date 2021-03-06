import React from 'react';
import { TextInput } from 'react-native-paper';
import styles from './Styles'

const Input = (props) => {
  return (
    <TextInput
      label={props.label}
      keyboardType={props.keyboardType}
      value={props.value}
      onChangeText={props.onChangeText}
      style={styles.input}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

export default Input;
