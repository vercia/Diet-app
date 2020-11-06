import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './Styles'

const MacroElement = (props) => {
  return (
      <View style={{ alignItems: 'center'}}>
        <Text style={styles.macroTitle}>{props.header}</Text>
        <Text style={styles.macrosDesc}>{props.firstValue}/{props.secondValue}</Text>
      </View>
  );
};

export default MacroElement;
