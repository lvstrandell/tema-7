import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';



const EmptyList = ({ inputText }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.pageTitle}>List is empty</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 20,
  },
})

export default EmptyList;