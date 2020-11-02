import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import MacroElement from './MacroElement';
import Calories from './Calories'
import {AppContext} from './AppContext'

const HomeScreen = () => {
  const { proteins, fats, carbos } = useContext(AppContext);

  const macroInfo = [
    { header: 'Węglowodany', firstValue: 0, secondValue: carbos },
    { header: 'Białka', firstValue: 0, secondValue: proteins },
    { header: 'Tłuszcze', firstValue: 0, secondValue: fats }
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Calories />
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
    justifyContent: 'space-around',
    top: 20
  }
});

export default HomeScreen;
