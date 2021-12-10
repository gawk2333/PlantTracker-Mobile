import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import HomeScreen from "./App/screens/HomeScreen";
import WelcomeScreen from "./App/screens/WelcomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name = 'WelcomeScreen' component = {WelcomeScreen}  options = {{title: 'BunnyPlantTracker'}} />
         <Stack.Screen name = 'HomeScreen' component = {HomeScreen} options = {{title: 'Home'}} />
      </Stack.Navigator>
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
});
