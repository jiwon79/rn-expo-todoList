import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TaskModal from './components/TaskModal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(!modalVisible);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header
        handleModal={handleModal}
      />
      <TodoItem title="리액트 네이티브 앱 만들기" done={true}/>
      <TodoItem title="스터디 진행하기" done={false}/>
      <TodoItem title="test test test test test test test test test test test test test test test test " done={false}/>
      <TaskModal 
        isVisible={modalVisible} 
        handleModal={handleModal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
