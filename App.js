import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/Login/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer  >
    <Stack.Navigator screenOptions={{headerShown: false,}} >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  )
}

export default App

const styles = StyleSheet.create({})