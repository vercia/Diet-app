import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import Axios from 'axios';
import { Button, Searchbar } from 'react-native-paper';
import FoodCard from './FoodCard';
import styles from './Styles';

const FoodScreen = () => {
  const [dataSource, setDataSource] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const APP_ID = 'da0cfb7b';
  const APP_KEY = 'ba13508b45aa51cef52145df6da55605';

  const getData = async () => {
    const result = await Axios.get(
      `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setDataSource(result.data.hits);
    console.log(result);
  };

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const render = ({ item, index }) => {
    return (
      <FoodCard
        key={item.recipe.label}
        title={item.recipe.label}
        image={item.recipe.image}
        calories={item.recipe.calories}
        carbos={item.recipe.totalNutrients.CHOCDF.quantity}
        proteins={item.recipe.totalNutrients.PROCNT.quantity}
        fats={item.recipe.totalNutrients.FAT.quantity}
        ingredients={item.recipe.ingredientLines}
      />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <Button
        onPress={getData}
        style={[styles.button, { marginBottom: 10 }]}
        color='#5b2a83'
        labelStyle={{ fontSize: 16 }}
      >
        Search
      </Button>
      <FlatList
        data={dataSource}
        renderItem={render}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default FoodScreen;
