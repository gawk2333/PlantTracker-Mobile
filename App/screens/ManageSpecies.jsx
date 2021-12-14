import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button,Alert} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { connect } from 'react-redux'
import { editSpecie,deleteSpecie } from '../../actions/species'

const ManageSpecies = ({navigation, dispatch, species, route}) => {
  const specie = route.params.specie
  useEffect(()=>{
    setCommon(specie.Common)
    setScientific(specie.Scientific)
    setWaterAmount(specie.WaterAmount)
    setWaterFrequency(specie.WaterFrequency)
    setLightAmount(specie.LightAmount)
  },[])


  const [Common, setCommon] = useState("")
  const [Scientific, setScientific] = useState("")
  const [WaterAmount, setWaterAmount] = useState("Give me some drips")
  const [WaterFrequency, setWaterFrequency] = useState("")
  const [LightAmount, setLightAmount] = useState("I really don't mind")

  const Separator = () => <View style={styles.separator} />
  const BtnSeparator = () => <View style={styles.btnseparator} />

  const editHandler = () => {
    const  Specie= {
      Common: Common,
      Scientific : Scientific,
      WaterAmount : WaterAmount,
      WaterFrequency : WaterFrequency,
      LightAmount : LightAmount,
    }
    if(editState)
    {
      if(JSON.stringify(Specie)!==JSON.stringify(specie))
      {
        dispatch(editSpecie(Specie))
        setEditState(!editState)
        navigation.goBack()
      }
      else{
        setEditState(!editState)
        navigation.goBack()
      }
    }
    else{
      setEditState(!editState)
    }
  }

  const deleteHandler = () => {
    const  Specie= {
      Common: Common,
      Scientific : Scientific,
      WaterAmount : WaterAmount,
      WaterFrequency : WaterFrequency,
      LightAmount : LightAmount,
    }
    dispatch(deleteSpecie(Specie))
    navigation.goBack()
  }
  
  const [editState, setEditState] = useState(false)

  return (
      <View style={styles.background}>
        <View style = {styles.inputwrap}>
          <Text style = {styles.label}>Common Name: </Text>
           <TextInput
        editable={editState}
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
         editable={editState}
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
        enabled={editState}
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
           editable={editState}
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
        enabled={editState}
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
            <Button style = {styles.button} color = 'red' title = "Edit" onPress = {editHandler}></Button>
            <BtnSeparator/>
            <Button style = {styles.button} color = 'red' title = "Delete" onPress = {deleteHandler}></Button>
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

export default connect(mapStatetoProps)(ManageSpecies)

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
    flex:1,
    width:50,
    height:30,
    color : 'red',
  },
  buttonwrap:{
    flex:2,
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