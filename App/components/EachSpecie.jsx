import React from 'react'
import { StyleSheet, Text, View, Dimensions} from 'react-native'

const EachSpecie = ({specie}) => {
  return (
    <View style ={styles.container}>
      <View style = {styles.child2}><Text>Common: {specie.Common}</Text></View>
      <View style = {styles.child2}><Text>Scientific: {specie.Scientific}</Text></View>
      <View style = {styles.child2}><Text>WaterAmount: {specie.WaterAmount}</Text></View>
      <View style = {styles.child1}><Text>WaterFrequency: {specie.WaterFrequency}</Text></View>
      <View style = {styles.child2}><Text>LightAmount: {specie.LightAmount}</Text></View>
    </View>
  )
}

export default EachSpecie

const styles = StyleSheet.create({
  container:{
    borderColor: 'grey',
    borderWidth: 1,
    width: Dimensions.get("window").width,
    height: 80,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  child1:{
    width: Dimensions.get("screen").width/2,
    height:24,
  },
  child2:{
    width: Dimensions.get("screen").width/3,
    height:24,
  }
})
