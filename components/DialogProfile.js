import React, {useContext} from 'react';
import { View } from 'react-native';
import { List, Dialog, Portal, Button, TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './Styles'
import { AppContext } from './AppContext';

const DialogProfile = (props) => {
  const [visible, setVisible] = React.useState(false);
  const {submitEdit} = useContext(AppContext)

  const showDialog = () => setVisible(!visible);

  return (
    <View>
      <List.Item
        title={props.title}
        right={() => (
          <MaterialCommunityIcons
            name='pencil'
            size={24}
            color='#222'
            onPress={showDialog}
          />
        )}
      />
      <Portal>
        <Dialog visible={visible} onDismiss={showDialog} style={styles.dialog}>
          <Dialog.Title>Edit</Dialog.Title>
          <Dialog.Content style={{ alignItems: 'center' }}>
            <TextInput
              label={props.label}
              keyboardType={props.keyboardType}
              value={props.value}
              onChangeText={props.onChangeText}
              style={styles.input}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                submitEdit(props.value,props.valueTwo,props.keyValue,props.value)
                showDialog();
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
