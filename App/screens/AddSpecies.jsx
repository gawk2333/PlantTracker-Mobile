import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { addSpecie } from '../../actions/species'

const AddSpecies = ({navigation, dispatch}) => {
  const [Common, setCommon] = useState("")
  const [Scientific, setScientific] = useState("")
  const [WaterAmount, setWaterAmount] = useState("")
  const [WaterFrequency, setWaterFrequency] = useState("")
  const [LightAmount, setLightAmount] = useState("")

  const submitHandler = () => {
    const  Specie= {
      Common: Common,
      Scientific : Scientific,
      WaterAmount : WaterAmount,
      WaterFrequency : WaterFrequency,
      LightAmount : LightAmount,
    }
    dispatch(addSpecie(Specie));
    navigation.goBack();
  }

  return (
      <View style={styles.background}>
        <View style = {styles.inputwrap}>
          <Text>Common Name:</Text>
           <TextInput
        value={Common}
        style={styles.input}
        placeholder="Common Name"
        onChangeText={(Common) => {
          setCommon(Common)
        }}
      />
        </View>
        <View style = {styles.inputwrap}>
          <Text>Scientific Name:</Text>
           <TextInput
        value={Scientific}
        style={styles.input}
        placeholder="Scientific"
        onChangeText={(Scientific) => {
          setScientific(Scientific)
        }}
      />
        </View>
        <View style = {styles.inputwrap}>
          <Text>WaterAmount:</Text>
           <TextInput
        value={WaterAmount}
        style={styles.input}
        placeholder="WaterAmount"
        onChangeText={(WaterAmount) => {
          setWaterAmount(WaterAmount)
        }}
      />
        </View>
        <View style = {styles.inputwrap}>
          <Text>WaterFrequency:</Text>
           <TextInput
        value={WaterFrequency}
        style={styles.input}
        placeholder="WaterFrequency"
        onChangeText={(WaterFrequency) => {
          setWaterFrequency(WaterFrequency)
        }}
      />
        </View>
        <View style = {styles.inputwrap}>
          <Text>WaterLightAmount:</Text>
           <TextInput
        value={LightAmount}
        style={styles.input}
        placeholder="s LightAmount"
        onChangeText={(LightAmount) => {
          setLightAmount(LightAmount)
        }}
      />
        </View>
        <View style = {styles.inputwrap}>
            <Button title = "Add Specie" onPress = {submitHandler}></Button>
            <Button title = "Cancel" onPress = {() => navigation.goBack()}></Button>
        </View>
      </View>
  )
}

export default connect()(AddSpecies)

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#fffff4',
    // justifyContent:'center',
    flexWrap : 'wrap',
    flexDirection: 'column',
    alignContent: 'center',
    flex:1,
  },
  input :{
    flex:3,
    height:30,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 24, 
    color: 'steelblue',
    // backgroundColor:'yellow' 
  },
  inputwrap:{
    flex:1,
    width: "80%",
    position: 'relative',
    flexDirection: 'row',
  },
  label :{
    fontSize: 24,
    color: 'orange',
    fontStyle : 'italic',
  }
})
