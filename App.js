import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import HomeScreen from "./App/screens/HomeScreen";
import WelcomeScreen from "./App/screens/WelcomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import  { store } from './redux/'
import AddSpecies from './App/screens/AddSpecies';
import ManageSpecies from './App/screens/ManageSpecies';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = 'WelcomeScreen' component = {WelcomeScreen}  options = {{title: 'BunnyPlantTracker'}} />
          <Stack.Screen name = 'HomeScreen' component = {HomeScreen} options = {{title: 'Home'}} />
          <Stack.Screen name = 'AddSpecies' component = {AddSpecies} />
          <Stack.Screen name = 'ManageSpecies' component = {ManageSpecies} />
        </Stack.Navigator>
      </NavigationContainer>
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
