import React from 'react'
import { StyleSheet, Text, View, Pressable} from 'react-native'
import { editPlant } from '../../actions/plants'
import { connect } from 'react-redux'


const Separator = () => <View style={styles.separator} />

const EachPlant = ({navigation, plant, dispatch}) => {

  const WaterHandler = () => {
      plant.lastWateredTime = Date.now()
      dispatch(editPlant(plant))
  }

  function createDateTimeString (timestamp) {
    const date = new Date(timestamp)
    return date.getMinutes()
  }

    function timer ()
  {
    let timeLeft
    let WaterFrequency = plant.WaterFrequency*3600*1000
      timeLeft  = WaterFrequency - (Date.now() - plant.lastWateredTime) 
      return createDateTimeString(timeLeft)
  }

  return (
    <>
        <View style = { styles.wholecontainer }>
            <Pressable style ={ styles.container } onPress={ ()=> navigation.navigate("ManagePlant", { plant:plant }) }>
              <View style = { styles.child }><Text style={ styles.commontext }>{ plant.PlantName }</Text></View>
            </Pressable>
            <Pressable style={ styles.waterclick } backgroundColor='green' onPress={ WaterHandler }>
              <Text>{ plant.lastWateredTime?  timer(): null }</Text>
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
  }
})