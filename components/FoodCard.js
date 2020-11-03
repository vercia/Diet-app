import React, { useContext, useState } from 'react';
import {
  Button,
  Card,
  Title,
  Paragraph,
  Dialog,
  Portal
} from 'react-native-paper';
import { ScrollView } from 'react-native';
import { AppContext } from './AppContext';

const FoodCard = (props) => {
  const { eatenMeal } = useContext(AppContext);

  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Card>
      <Card.Cover source={{ uri: props.image }} />
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph>Calories: {Math.floor(props.calories)}</Paragraph>
        <Paragraph>Carbos: {Math.floor(props.carbos)}</Paragraph>
        <Paragraph>Proteins: {Math.floor(props.proteins)}</Paragraph>
        <Paragraph>Fats: {Math.floor(props.fats)}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={showDialog}>OPEN</Button>
        <Button
          onPress={() =>
            eatenMeal(props.calories, props.carbos, props.proteins, props.fats)
          }
        >
          ADD
        </Button>
      </Card.Actions>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{ maxHeight: '70%' }}
        >
          <Dialog.Title>{props.title}</Dialog.Title>
          <Dialog.ScrollArea>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
              {props.ingredients.map((item) => (
                <Paragraph>{item}</Paragraph>
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
