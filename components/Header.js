import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function Header({handleModal}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        할 일 목록
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => handleModal()}
      >
        <Ionicons name='ios-add' style={styles.icon}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 56,
    marginBottom: 16,
    marginLeft: 16
  },

  title: {
    color: '#212121',
    fontSize: 32,
    fontWeight: '600'
  },

  button: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.select({
      ios: 2,
      android: 0
    }),
    paddingLeft: Platform.select({
      ios: 1,
      android: 0
    }),
    marginRight: 8,
  },

  icon: {
    fontSize: 20,
    color: '#fff'
  }
})
