import React from 'react'
import { StyleSheet,  View, Button } from 'react-native'
import PlantScreen from './PlantScreen';
import SpecieScreen from './SpecieScreen';
import PurgeScreen from './PurgeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';


const Tabs = createBottomTabNavigator()

const HomeScreen = ({navigation}) => {
  return (
       <Tabs.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Plant') {
            iconName = focused
              ? 'water'
              : 'water-outline';
            size = focused
              ? 25
              : 20;
            color = focused
              ? 'green'
              : 'black';
          } else if (route.name === 'Specie') {
            iconName = focused 
            ? "leaf"
            : "leaf-outline" 
            size = focused
            ? 25
            : 20;
          color = focused
            ? 'green'
            : 'black';
          } else if (route.name === 'Purge') {
          iconName = focused 
          ? "snow"
          : "snow-outline" 
          size = focused
          ? 25
          : 20;
        color = focused
          ? 'green'
          : 'black';
        }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
          <Tabs.Screen name="Plant" component = {PlantScreen} option = {{title: 'Plant'}}/>
          <Tabs.Screen name="Specie" component = {SpecieScreen} option = {{title: 'Species'}}/>
          <Tabs.Screen name="Purge" component = {PurgeScreen} option = {{title: 'Purge'}}/>
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

