import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SpecieScreen = () => {
  return (
    <View style = {styles.background}>
      <Text>Specie</Text>
    </View>
  )
}

export default SpecieScreen

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'orange',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
