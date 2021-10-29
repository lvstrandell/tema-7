import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { StyleSheet, FlatList, View } from 'react-native';
import Input from '../components/InputTodo';
import ItemList from '../components/ItemList';
import EmptyList from '../components/EmptyList';
import Home from './Home';
import ShoppingList from './ShoppingList';

const Stack = createNativeStackNavigator();

const Todo = () => {
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

  const InputTodo = () => {
    return (
      <View>
        <Input handleSubmit={handleSubmit}/>
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
    );
  }


  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Todo"
        component={InputTodo}
        options={{
          title: 'To-Do',
          headerStyle: {backgroundColor: 'green'},
          headerTitleStyle: {
            fontSize: 28,
            textAlign: 'center'
          }
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="ShoppingList"
        component={ShoppingList}
        options={{
          title: "Shopping List"
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home'
        }}
      >
      </Stack.Screen>
    </Stack.Navigator>

  )
}

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
});

export default Todo;

