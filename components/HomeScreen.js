import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import MacroElement from './MacroElement';

const HomeScreen = () => {
  const macroInfo = [
    { header: 'Węglowodany', firstValue: 0, secondValue: 24 },
    { header: 'Białka', firstValue: 0, secondValue: 24 },
    { header: 'Tłuszcze', firstValue: 0, secondValue: 24 }
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home 123!</Text>
      <ProgressBar progress={0.5} color={'black'} style={styles.progressBar} />
      <View style={styles.macroInfo}>
        {macroInfo.map((item) => {
          return (
            <MacroElement
              header={item.header}
              firstValue={item.firstValue}
              secondValue={item.secondValue}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    backgroundColor: 'yellow',
    width: 200,
    height: 200,
    borderRadius: 100
  },
  macroInfo: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around'
  }
});

export default HomeScreen;
