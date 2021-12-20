import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import { purgePlant } from '../../actions/plants'
import { purgeSpecies } from '../../actions/species'
import { connect } from 'react-redux'

const Purge = ({dispatch}) => {

  const purgePlantHandler = () => {
    dispatch(purgePlant())
  }

  const purgeSpeciesHandler = () => {
    dispatch(purgeSpecies())
  }

  return (
    <View style={styles.background}>
      <Button style={styles.button} title='PurgePlants' onPress={purgePlantHandler} />
      <Button style={styles.button} title='PurgeSpecies' onPress={ purgeSpeciesHandler }/>
    </View>
  )
}

export default connect()(Purge)

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'#fffff4',
    justifyContent: 'space-evenly',
    alignItems : 'center',
  },
  button: {
    width: '100%',
    height: 40,
    position: 'relative',
    bottom:20,
  }
})
