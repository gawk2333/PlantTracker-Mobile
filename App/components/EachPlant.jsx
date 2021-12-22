import React from 'react'
import { StyleSheet, Text, View, Pressable} from 'react-native'
import { connect } from 'react-redux'


const Separator = () => <View style={styles.separator} />

const EachPlant = ({navigation, plant, WaterHandler}) => {



  function createDateTimeString (timestamp) {
    const hours = parseInt(timestamp/3600000)
    const mins = parseInt((timestamp%3600000)/60000)
    return `${hours}hours and ${mins}minutes`
  }

    function timer ()
  {
    let timeLeft
    let WaterFrequency = parseInt(plant.WaterFrequency)*3600*1000
      timeLeft  = WaterFrequency - (Date.now() - plant.lastWateredTime) 
      return createDateTimeString(timeLeft)
  }

  return (
    <>
        <View style = { styles.wholecontainer }>
            <Pressable style ={ styles.container } onPress={ ()=> navigation.navigate("ManagePlant", { plant:plant }) }>
              <View style = { styles.child }><Text style={ styles.commontext }>{ plant.PlantName }</Text></View>
            </Pressable>
            <Pressable style={ styles.waterclick } backgroundColor='green' onPress={ () => WaterHandler(plant) }>
              <Text>{ plant.lastWateredTime?  timer(): 'Water it' }</Text>
            </Pressable>
        </View>
    <Separator />
    </>
  )
}

export default connect()(EachPlant)

const styles = StyleSheet.create({
  container:{
    width: '70%',
    height: 70,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#a8dad4',
    borderRadius:30,
    paddingTop:20,
  },
  child:{
    width: '100%',
    height:80,
    alignItems: 'center',
  },
  commontext:{
    fontStyle: "normal",
    fontSize: 48,
  },
  wholecontainer:{
    width: '90%',
    height:80,
    flexDirection: 'row',
  },
  separator: {
    flex:0.5,
    position: 'relative',
    width: '90%',
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  waterclick:{
    width:'20%',
    height: 80,
    borderWidth:1,
    borderColor:'black',
    marginLeft:20,
    justifyContent: 'center',
  }
})