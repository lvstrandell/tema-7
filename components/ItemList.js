import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ItemList = ({ item, handleRemove }) => {
  return(
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.list}>{item.value}</Text>
        <TouchableOpacity onPress={() => handleRemove(item.key)}>
          <Text style={styles.remove}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: 'green'
  },
  list: {
    marginTop: 10,
    marginLeft: 30,
    fontSize: 24,
  },
  remove: {
    marginRight: 30,
    padding: 10,
    marginBottom: 5,
    borderWidth: 5,
    borderColor: 'tomato',
    borderRadius: 15,
    fontSize: 16
  }
})

export default ItemList;