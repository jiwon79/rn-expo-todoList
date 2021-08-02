import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TaskModal from './components/TaskModal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const nextId = useRef(4);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "일기쓰기",
      done: true
    },
    {
      id: 2,
      title: "스터디 준비하기",
      done: false
    },
    {
      id: 3,
      title: "test test test test test test test test test test test test test test test ",
      done: false
    }
  ]);

  const handleModal = () => {
    setModalVisible(!modalVisible);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const addTodo = (content) => {
    var newTodo = {
      id: nextId.current,
      title: content,
      done: false
    };
    setTodos(todos.concat(newTodo));
    nextId.current += 1
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header
        handleModal={handleModal}
      />
      <FlatList 
        data={todos}
        renderItem={({item}) => {
          return (
            <TodoItem 
              id={item.id}
              title={item.title}
              done={item.done}
              removeTodo={removeTodo}
              // keyExtractor={(_, index) => {
              //   return '${index}'
              // }}
            />
          )
        }}
        keyExtractor={(_, index) => index.toString()}
      />
      <TaskModal 
        isVisible={modalVisible} 
        handleModal={handleModal}
        addTodo={addTodo}
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
