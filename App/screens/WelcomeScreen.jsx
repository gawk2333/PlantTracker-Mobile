import React from 'react'
import {Image, ImageBackground, StyleSheet, Text,View, Button} from 'react-native'


export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
    source = { require("../assets/background.jpg") }
    style = { styles.background }
    >
      <View style = {styles.logocontainer}>
        <Image source={ require('../assets/bunny.png') } style = { styles.logo } />
        <Text>Track Plants everyday!</Text>
      </View>
      <View style = {styles.buttoncontainer}>
        <Button title = "Start!" style = {styles.button} onPress={() => navigation.navigate('HomeScreen')}/>
      </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  background:{
    flex:1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  logocontainer:{
    flex : 0.5,
    position:'relative',
    top: 100,
    alignItems: 'center',
  },
  logo: {
    width:200,
    height:200,
  },
  buttoncontainer:{
    flex:0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
