import React from 'react';
import { View } from 'react-native';
import { List, Dialog, Portal, Button, TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DialogProfile = (props) => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(!visible);

  return (
    <View>
      <List.Item
        title={props.title}
        right={() => (
          <MaterialCommunityIcons
            name='pencil'
            size={24}
            color='black'
            onPress={showDialog}
          />
        )}
      />
      <Portal>
        <Dialog visible={visible} onDismiss={showDialog}>
          <Dialog.Title>Edit</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label={props.label}
              keyboardType={props.keyboardType}
              value={props.value}
              onChangeText={props.onChangeText}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                showDialog();
                {
                  props.submitEdit;
                }
              }}
            >
              Done
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default DialogProfile;
