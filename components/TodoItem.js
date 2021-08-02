import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const TodoItem = ({title, done}) => {
  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <TouchableOpacity
          activeOpacity={0.8}
          // style = {[styles.done, styles.check_icon]}
          style={[done ? styles.done: styles.check, styles.check_icon]}
        >
          <FontAwesome name="check" color={done ? '#ffffff':'#e0e0e0'} size={14}/>
        </TouchableOpacity>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff'
  },

  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },

  title: {
    fontSize: 16
  },

  check_icon: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 14
  },

  check: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },

  done: {
    backgroundColor: '#6830CF',
  }
})
export default TodoItem