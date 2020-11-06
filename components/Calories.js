import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { AppContext } from './AppContext';
import styles from './Styles'

const Calories = () => {
  const { calories, eatenCalories, progress } = useContext(AppContext);

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.caloriesTitle}>Kalorie</Text>
      <ProgressBar
        progress={progress}
        color={'#00dfc0'}
        style={styles.progressBar}
      />
      <Text style={styles.caloriesDesc}>
        {eatenCalories}/{calories}
      </Text>
    </View>
  );
};

export default Calories;
