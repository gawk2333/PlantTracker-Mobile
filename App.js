import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import HomeScreen from "./App/screens/HomeScreen";
import WelcomeScreen from "./App/screens/WelcomeScreen";
import AddSpecies from "./App/screens/AddSpecies";
import ManageSpecies from "./App/screens/ManageSpecies";
import ManagePlant from "./App/screens/ManagePlant";
import AddPlant from "./App/screens/AddPlant"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import  { store, persistor} from './redux/'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store = {store}>
      <PersistGate  loading={<View><Text>Loading...</Text></View>} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = 'WelcomeScreen' component = { WelcomeScreen }  options = {{title: 'BunnyPlantTracker'}} />
          <Stack.Screen name = 'HomeScreen' component = { HomeScreen } options = {{title: 'Home'}} />
          <Stack.Screen name = 'AddSpecies' component = { AddSpecies } />
          <Stack.Screen name = 'ManageSpecies' component = { ManageSpecies } />
          <Stack.Screen name = 'ManagePlant' component = { ManagePlant } />
          <Stack.Screen name = 'AddPlant' component = { AddPlant } />
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
