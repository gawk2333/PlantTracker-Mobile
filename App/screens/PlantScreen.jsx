import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PlantScreen = () => {
  return (
    <View style = {styles.background}>
      <Text>Plant</Text>
    </View>
  )
}

export default PlantScreen

const styles = StyleSheet.create({
  background:{
    backgroundColor:'green',
    justifyContent:'center',
    alignItems: 'center',
    flex:1,
  }
})
