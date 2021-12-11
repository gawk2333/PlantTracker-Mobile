import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native'
import EachSpecie from '../components/EachSpecie'

const SpecieScreen = ({ navigation,species }) => {
  return (
    <View style = {styles.background}>
      <View style={styles.specielist}>
          {species?.map(specie => {
              return <EachSpecie key={specie.Common} specie={specie} />
          })}
        </View>
        <View style = { styles.addbutton }>
          <Button title = 'Add'  onPress = {()=>navigation.navigate("AddSpecies")} />
        </View>
    </View>
  )
}

function mapStatetoProps(state)
{
  return {
    species: state.species,
  }
}

export default connect(mapStatetoProps)(SpecieScreen)

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'#fffff4',
    justifyContent: 'flex-end',
    alignItems:'center'
  },
  addbutton: {
    width: '100%',
    height: 40,
    position: 'relative',
    bottom:20,
  },
  specielist: {
    position: 'relative',
    width: '100%',
    height: '80%',
  }
})
