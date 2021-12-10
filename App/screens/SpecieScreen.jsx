import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native'

const SpecieScreen = ({navigation}) => {
  return (
    <View style = {styles.background}>
      <ImageBackground source = {require("../assets/Genshin2.jpg")} style = {styles.bgimage} resizeMode = 'cover'> 
        <View style = { styles.addbutton }>
          <Button title = 'Add'  onPress = {()=>navigation.navigate("AddSpecies")} />
        </View>
      </ImageBackground>
    </View>
  )
}

export default SpecieScreen

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'#fffff4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgimage: {
    width: "100%",
    height: "100%",
    justifyContent: 'flex-end',
    alignItems:'center'
  },
  addbutton: {
    width: '100%',
    height: 40,
    position: 'relative',
    bottom:20,
  }
})
