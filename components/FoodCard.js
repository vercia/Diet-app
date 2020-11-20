import React, { useContext, useState } from 'react';
import {
  Button,
  Card,
  Title,
  Paragraph,
  Dialog,
  Portal
} from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import { AppContext } from './AppContext';
import styles from './Styles';

const FoodCard = (props) => {
  const { eatenMeal } = useContext(AppContext);

  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Card style={styles.foodCard} borderRadius={50}>
      <Card.Cover style={styles.foodCardImage} source={{ uri: props.image }} />
      <Card.Content style={styles.foodCardContent}>
        <Title >{props.title}</Title>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Paragraph>Calories: {Math.floor(props.calories)}</Paragraph>
          <Paragraph>Carbos: {Math.floor(props.carbos)}</Paragraph>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Paragraph>Proteins: {Math.floor(props.proteins)}</Paragraph>
          <Paragraph>Fats: {Math.floor(props.fats)}</Paragraph>
        </View>
      </Card.Content>
      <Card.Actions style={styles.foodCardActions}>
        <Button
          onPress={showDialog}
          color='#00dfc0'
          labelStyle={{ fontSize: 16 }}
        >
          OPEN
        </Button>
        <Button
          onPress={() =>
            eatenMeal(props.calories, props.carbos, props.proteins, props.fats)
          }
          color='#00dfc0'
          labelStyle={{ fontSize: 16 }}
        >
          ADD
        </Button>
      </Card.Actions>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={[styles.dialog,{ maxHeight: '70%' }]}
        >
          <Dialog.Title>{props.title}</Dialog.Title>
          <Dialog.ScrollArea>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
              {props.ingredients.map((item) => (
                <Paragraph key={item}>{item}</Paragraph>
              ))}
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Card>
  );
};

export default FoodCard;
