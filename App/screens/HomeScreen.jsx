import React from 'react'
import { StyleSheet,  View, Button } from 'react-native'
import PlantScreen from './PlantScreen';
import SpecieScreen from './SpecieScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator()

const HomeScreen = ({ navigation }) => {
  return (
       <Tabs.Navigator>
          <Tabs.Screen name="Plant" component = {PlantScreen} option = {{title: 'Plant'}}/>
          <Tabs.Screen name="Specie" component = {SpecieScreen} option = {{title: 'Specie'}}/>
        </Tabs.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    background:{
      flex:1,
      backgroundColor: "#909090",
      justifyContent: 'center',
      alignItems: 'center',
    }
})

