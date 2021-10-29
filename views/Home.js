import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ShoppingList from './ShoppingList';
import Todo from './Todo';


const Stack = createNativeStackNavigator();

const HomePage = () => {

  const Home = () => {
    return (
      <ScrollView>
        <View stle={styles.container}>
        <Text style={styles.pageTitle}>
          Welcome!
        </Text>
        <Text style={styles.content}>
          Choose between your shopping list and to-do list in the meny below
        </Text>
        </View>
      </ScrollView>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
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
      >
      </Stack.Screen>
      <Stack.Screen
        name="Todo"
        component={Todo}
        options={{
          title: 'To do'
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
    textAlign: 'center',
    marginVertical: 50,
  },
  content: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 70,
    lineHeight: 40

  },
});

export default HomePage;