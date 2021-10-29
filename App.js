import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { enableScreens } from 'react-native-screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ShoppingList from './views/ShoppingList';
import Todo from './views/Todo';
import Home from './views/Home';

enableScreens();

const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
             screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'Shopping List') {
                  iconName = focused ? 'fast-food' : 'fast-food-outline';
                } else if (route.name === 'To-do List') {
                  iconName = focused ? 'list-circle' : 'list-circle-outline';
                } 
    
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'green',
              inactiveTintColor: 'black',
            }}>
        <Tab.Screen
          name="Home"
          component={Home}
        ></Tab.Screen>

        <Tab.Screen
          name="Shopping List"
          component={ShoppingList}
        ></Tab.Screen>

        <Tab.Screen
          name="To-do List"
          component={Todo}
        ></Tab.Screen>
      </Tab.Navigator>
      <StatusBar style='light' />
    </NavigationContainer>
  );
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
  },
});
