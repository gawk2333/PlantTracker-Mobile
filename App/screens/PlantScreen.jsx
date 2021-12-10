import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

const PlantScreen = () => {
  return (
    <View style = {styles.background}>
      <ImageBackground source = {require("../assets/Genshin1.jpeg")} style = {styles.bgimage} resizeMode = 'cover'/>
    </View>
  )
}

export default PlantScreen

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#fffff4',
    justifyContent:'center',
    alignItems: 'center',
    flex:1,
  },
  bgimage: {
    width: "100%",
    height: "100%",
  }
})
