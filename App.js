import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <TodoItem title="리액트 네이티브 앱 만들기" done={true}/>
      <TodoItem title="스터디 진행하기" done={false}/>
      <TodoItem title="test test test test test test test test test test test test test test test test " done={false}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
