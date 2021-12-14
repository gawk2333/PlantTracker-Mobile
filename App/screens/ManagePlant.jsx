import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { connect } from 'react-redux'
import { editPlant, deletePlant } from '../../actions/plants'

const AddPlant = ({navigation, dispatch, species, route}) => {
  const plant = route.params.plant
  useEffect(()=>{
    setPlantName(plant.PlantName)
    setSpecieHandler(plant.SpecieCommon)
  },[])

  const setSpecieHandler = (commonname) => {
    setCommon(commonname)
    var choosedspecie = species.find(specie => specie.Common === commonname)
    setScientific(choosedspecie.Scientific)
    setWaterAmount(choosedspecie.WaterAmount)
    setWaterFrequency(choosedspecie.WaterFrequency)
    setLightAmount(choosedspecie.LightAmount)
  }

  const [editState, setEditState] = useState(false)
  const [PlantName, setPlantName] = useState("")
  const [Common, setCommon] = useState("")
  const [Scientific, setScientific] = useState("")
  const [WaterAmount, setWaterAmount] = useState("")
  const [WaterFrequency, setWaterFrequency] = useState("")
  const [LightAmount, setLightAmount] = useState("")

  const Separator = () => <View style={styles.separator} />
  const BtnSeparator = () => <View style={styles.btnseparator} />

  const editHandler = () => {
    const newplant = {
      PlantName: PlantName,
      SpecieCommon: Common,
    }
    if(editState)
    {
      if(Common!==plant.Common)
      {
        dispatch(editPlant(newplant))
      }
      setEditState(!editState)
      navigation.goBack()
    }
    else{
      setEditState(!editState)
    }
  }

  const deleteHandler = () => {
    const newplant = {
      PlantName: PlantName,
      SpecieCommon: Common,
    }
    dispatch(deletePlant(newplant))
    navigation.goBack()
  }

  return (
      <View style={styles.background}>
        <View style = {styles.inputwrap}>
          <Text style = {styles.label}>Plant Name: </Text>
           <TextInput
        editable = {false}
        value={PlantName}
        style={styles.input}
        placeholder="Plant Name"
        onChangeText={(PlantName) => {
          setPlantName(PlantName)
        }}
      />
      </View>

        <Separator/>

      <View style = {styles.pickerwrap}>
          <Text style = {styles.label}>Specie: </Text>
      <Picker
        enabled={editState}
        mode = {'dropdown'}
        selectedValue={Common}
        style={ styles.input }
        onValueChange={(common, itemIndex) => setSpecieHandler(common)}
      >
        { species?.map(specie => {
             return (
              <Picker.Item key={Common} label={specie.Common} value={specie.Common} />
             )
        })}
      </Picker>
      </View>
      
      <Separator/>

      <View style = {styles.inputwrap}>
          <Text style = {styles.label}>Scientific Name: </Text>
           <TextInput
          editable = {false}
          value={Scientific}
          style={styles.numinput}
          placeholder="Scientific Name"
      />
        </View>

      <Separator/>

      <View style = {styles.inputwrap}>
          <Text style = {styles.label}>WaterAmount: </Text>
           <TextInput
          editable = {false}
          value={WaterAmount}
          style={styles.numinput}
          placeholder="WaterAmount"
      />
        </View>

        <Separator/>

        <View style = {styles.inputwrap}>
          <Text style = {styles.label}>WaterFrequency: </Text>
           <TextInput
           editable = {false}
          value={WaterFrequency}
          style={styles.numinput}
          placeholder="WaterFrequency"
      />
        </View>

        <Separator/>

        <View style = {styles.inputwrap}>
          <Text style = {styles.label}>LightAmount: </Text>
           <TextInput
          editable = {false}
          value={LightAmount}
          style={styles.numinput}
          placeholder="LightAmount"
      />
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
      species : state.species,
  }
}

export default connect(mapStatetoProps)(AddPlant)

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
