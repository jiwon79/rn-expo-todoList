import React from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'

export default function TaskModal({isVisible, handleModal, addTodo}) {
  var content = ''

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
    >
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => {
            content = text
          }}
          onEndEditing={() => {
            addTodo(content);
            handleModal();
          }}
          placeholder="새로운 할일을 추가해주세요"
        >
        </TextInput>
        <Button title="hide modal" onPress={handleModal}/>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 8,
  },

  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  }
})
