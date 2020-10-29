import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MacroElement = (props) => {
  return (
      <View style={{ alignItems: 'center'}}>
        <Text>{props.header}</Text>
        <Text>{props.firstValue}/{props.secondValue}</Text>
      </View>
  );
};

// const styles = StyleSheet.create({
//   progressBar: {
//     backgroundColor: 'yellow',
//     width: 200,
//     height: 200,
//     borderRadius: 100
//   }
// });

export default MacroElement;
