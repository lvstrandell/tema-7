import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import InputSL from '../components/InputSL';
import ItemList from '../components/ItemList';
import EmptyList from '../components/EmptyList';
import Home from './Home';
import Todo from './Todo'


const Stack = createNativeStackNavigator();

const ShoppingList = () => {
  const [data, setData] = useState([]);

  const handleSubmit = (value) => {
    setData((prevState) => {
      return [
        {
          value: value,
          key: Date.now()
        },
        ...prevState
      ]
    })
  }

  const handleRemove = (key) => {
    setData((prevState) => {
      return prevState.filter((item) => item.key != key)
    })
  }
  
  const ShoppingHome = () => {
    return (
      <View>
        <InputSL handleSubmit={handleSubmit} />
        <FlatList
          data={data}
          keyExtractor={(item) => item.key}
          ListEmptyComponent={() => <EmptyList />}
          renderItem={({item}) => ( 
            <ItemList 
              item={item}
              handleRemove={handleRemove}
             />
          )}
        />
      </View>
    )
  }


  return (
    <Stack.Navigator>
      <Stack.Screen
      name="ShoppingList"
      component={ShoppingHome}
      options={{
        title: "Shopping List",
        headerStyle: {backgroundColor: 'green'},
        headerTitleStyle: {
          fontSize: 28,
          textAlign: 'center'

        }
      }}
      ></Stack.Screen>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Shopping List"
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Todo"
        component={Todo}
        options={{
          title: 'To-do'
        }}
      >
      </Stack.Screen>
    </Stack.Navigator>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 34,
    textAlign: 'center'
  },
  list: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    padding: 10,
    alignItems: 'center', 
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderRadius: 6,
    width: '50%'
  },
  listItem: {
    borderBottomWidth: 0.5,
    borderRadius: 6,
  },
});

export default ShoppingList;