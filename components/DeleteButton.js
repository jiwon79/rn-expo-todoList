import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function DeleteButton() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
    >
      <Text style={styles.text}>
        삭제
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3722c',
  },
  text: {
    color: '#fff'
  }
})
