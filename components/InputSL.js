import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


const InputSL = ({ handleSubmit }) => {
  const [value, setValue] = useState('');

  const inputText = (text) => {
    setValue(text)
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Enter text'
        onChangeText={inputText}
      />
      <TouchableOpacity onPress={() => {
        setValue(handleSubmit(value))
      }}>
        <Text style={styles.button}>
          Add item
        </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 6,
    margin: 32,
    padding: 10,
    fontSize: 24,
    textAlign: 'center'
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 6,
    padding: 8,
    marginHorizontal: 112,
    fontWeight: '500',
    backgroundColor: 'green'
  },
  list: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    padding: 10,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderRadius: 6,
    width: '50%'
  },
  remove: {
    borderRadius: 6,
    borderWidth: 1, 
    borderColor: 'red',
    marginLeft: 10,
    padding: 5
  }
})


export default InputSL;