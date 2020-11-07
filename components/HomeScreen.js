import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import MacroElement from './MacroElement';
import Calories from './Calories';
import { AppContext } from './AppContext';

const HomeScreen = () => {
  const {
    proteins,
    fats,
    carbos,
    eatenCarbos,
    eatenProteins,
    eatenFats
  } = useContext(AppContext);

  const macroInfo = [
    { header: 'Węglowodany', firstValue: eatenCarbos, secondValue: carbos },
    { header: 'Białka', firstValue: eatenProteins, secondValue: proteins },
    { header: 'Tłuszcze', firstValue: eatenFats, secondValue: fats }
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Calories />
      <View style={styles.macroInfo}>
        {macroInfo.map((item) => {
          return (
            <MacroElement
              key={item.header}
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
    backgroundColor: 'red',
    width: 200,
    height: 200,
    borderRadius: 100
  },
  macroInfo: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    top: 40
  }
});

export default HomeScreen;
