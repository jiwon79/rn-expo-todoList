import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TaskModal from './components/TaskModal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [todo, setTodo] = useState([
    {
      title: "일기쓰기",
      done: true
    },
    {
      title: "스터디 준비하기",
      done: false
    },
    {
      title: "test test test test test test test test test test test test test test test ",
      done: false
    }
  ]);

  const handleModal = () => {
    setModalVisible(!modalVisible);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header
        handleModal={handleModal}
      />
      <FlatList 
        data={todo}
        renderItem={({item}) => {
          return (
            <TodoItem 
              title={item.title}
              done={item.done}
              keyExtractor={(_, index) => {
                return '${index}'
              }}
            />
          )
        }}
      />
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
