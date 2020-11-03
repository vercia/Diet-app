import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { AppContext } from './AppContext';

const Calories = () => {
  const { calories, eatenCalories, progress } = useContext(AppContext);

  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Kalorie</Text>
      <ProgressBar progress={progress} color={'black'} style={styles.progressBar} />
      <Text>
        {eatenCalories}/{calories}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    backgroundColor: 'yellow',
    width: 200,
    height: 200,
    borderRadius: 100
  }
});

export default Calories;
