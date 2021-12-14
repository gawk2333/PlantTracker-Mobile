import React, {useState, useRef} from 'react'
import { StyleSheet, Text, View, TextInput, Button,Alert} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { connect } from 'react-redux'
import { addSpecie } from '../../actions/species'

const AddSpecies = ({navigation, dispatch, species}) => {
  const [Common, setCommon] = useState("")
  const [Scientific, setScientific] = useState("")
  const [WaterAmount, setWaterAmount] = useState("Give me some drips")
  const [WaterFrequency, setWaterFrequency] = useState("")
  const [LightAmount, setLightAmount] = useState("I really don't mind")

  const Separator = () => <View style={styles.separator} />
  const BtnSeparator = () => <View style={styles.btnseparator} />

  const submitHandler = () => {
    const  Specie= {
      Common: Common,
      Scientific : Scientific,
      WaterAmount : WaterAmount,
      WaterFrequency : WaterFrequency,
      LightAmount : LightAmount,
    }
    if(Common && Scientific && WaterFrequency)
    {
      if(!species)
      {
        dispatch(addSpecie(Specie));
        navigation.goBack();
      }
      else
      {
        if(species.some(specie => specie.Common === Common))
        {
          Alert.alert("Already have this specie!")
        }
        else
        {
          dispatch(addSpecie(Specie));
          navigation.goBack();
        }
      }
    }
    else
    {
      Alert.alert("Please fill up all the information!")
    }
  }

  return (
      <View style={styles.background}>
        <View style = {styles.inputwrap}>
          <Text style = {styles.label}>Common Name: </Text>
           <TextInput
        value={Common}
        style={styles.input}
        placeholder="Common Name"
        onChangeText={(Common) => {
          setCommon(Common)
        }}
      />
        </View>
        <Separator/>
        <View style = {styles.inputwrap}>
          <Text style = {styles.label}>Scientific Name: </Text>
           <TextInput
        value={Scientific}
        style={styles.input}
        placeholder="Scientific"
        onChangeText={(Scientific) => {
          setScientific(Scientific)
        }}
      />
        </View>
        <Separator/>
        <View style = {styles.pickerwrap}>
          <Text style = {styles.label}>WaterAmount: </Text>
      <Picker
        mode = {'dropdown'}
        selectedValue={WaterAmount}
        style={ styles.input }
        onValueChange={(wateramount, itemIndex) => setWaterAmount(wateramount)}
      >
        <Picker.Item label="Give me some drips" value="Give me some drips" />
        <Picker.Item label="Give me a dollop" value="Give me a dollop" />
        <Picker.Item label="Moisten me" value="Moisten me" />
        <Picker.Item label="Soak me" value="Soak me" />
      </Picker>
        </View>
        <Separator/>
        <View style = {styles.inputwrap}>
          <Text style = {styles.label}>WaterFrequency: </Text>
           <TextInput
           keyboardType = 'number-pad'
          value={WaterFrequency}
          style={styles.numinput}
          placeholder="WaterFrequency"
          onChangeText={(WaterFrequency) => {
          setWaterFrequency(WaterFrequency)
        }}
      />
        </View>
        <Separator/>
        <View style = {styles.inputwrap}>
          <Text style = {styles.label}>LightAmount: </Text>
          <Picker
        mode = {'dropdown'}
        selectedValue={LightAmount}
        style={ styles.input }
        onValueChange={(itemValue, itemIndex) => setLightAmount(itemValue)}
      >
        <Picker.Item label="I really don't mind" value="I really don't mind" />
        <Picker.Item label="Shady" value="Shady" />
        <Picker.Item label="Indirect light" value="Indirect light" />
        <Picker.Item label="Direct sun" value="Direct sun" />
      </Picker>
        </View>
        <Separator/>
        <View style = {styles.buttonwrap}>
            <Button style = {styles.button} color = 'red' title = "Add Specie" onPress = {submitHandler}></Button>
            <BtnSeparator/>
            <Button style = {styles.button} color = 'red' title = "Cancel" onPress = {() => navigation.goBack()}></Button>
        </View>
      </View>
  )
}

const mapStatetoProps = (state) => {
  return {
      species : state.species
  }
}

export default connect(mapStatetoProps)(AddSpecies)

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#fffff4',
    justifyContent:'center',
    flexWrap : 'wrap',
    flexDirection: 'column',
    alignContent: 'center',
    flex:1,
  },
  input :{
    paddingLeft:10,
    borderRadius : 10,
    backgroundColor: 'white',
    flex:3,
    height:24,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 18, 
    color: 'steelblue',
  },
  numinput :{
    paddingLeft:10,
    borderRadius : 10,
    backgroundColor: 'white',
    flex:3,
    height:24,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 18, 
    color: 'steelblue',
  },
  inputwrap:{
    flex:1,
    marginTop:20,
    width: "80%",
    position: 'relative',
    flexDirection: 'row',
  },
  label :{
    fontSize: 15,
    color: 'orange',
    fontStyle : 'italic',
  },
  pickerwrap:{
    flex:1,
    width: "80%",
    position: 'relative',
    flexDirection: 'row',
  },
  button:{
    width:50,
    height:30,
    color : 'red',
  },
  buttonwrap:{
    flex:1,
    marginBottom:20,
    width: "80%",
    height:35,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  separator: {
    flex:0.1,
    position: 'relative',
    width: '80%',
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  btnseparator: {
    flex:0.1,
    position: 'relative',
    width: '100%',
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
})
