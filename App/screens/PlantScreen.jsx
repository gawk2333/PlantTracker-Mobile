import React from 'react'
import { StyleSheet, View, ScrollView, Button } from 'react-native'
import { connect } from 'react-redux'
import { editPlant } from '../../actions/plants'
import EachPlant from '../components/EachPlant'


const PlantScreen = ({navigation, plants, species, dispatch}) => {
  let plantWithWaterTime = plants?.map(plant => {
      let plantSpecie = species?.filter( specie => specie.Common === plant.SpecieCommon)
      plant.WaterFrequency = plantSpecie[0].WaterFrequency
      return plant
  })

    const WaterHandler = (plant) => {
      plant.lastWateredTime = Date.now()
      dispatch(editPlant(plant))
  }

  return (
    <View style = {styles.background}>
      <ScrollView contentContainerStyle={styles.plantlist} showsHorizontalScrollIndicator='false'>
          {plantWithWaterTime?.map(plant => {
              return <EachPlant key={plant.PlantName} plant={plant} navigation={navigation} WaterHandler={WaterHandler}/>
          })}
        </ScrollView>
        <View style = { styles.addbutton }>
          <Button title = 'Add'  onPress = {()=>navigation.navigate("AddPlant")} />
        </View>
    </View>
  )
}

const mapStatetoProps = (state) => {
  return {
    plants: state.plants,
    species: state.species
  }
}

export default connect(mapStatetoProps)(PlantScreen)

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'#fffff4',
    justifyContent: 'flex-end',
    alignItems : 'center',
  },
  addbutton: {
    width: '100%',
    height: 40,
    position: 'relative',
    bottom:20,
  },
  plantlist: {
    position: 'relative',
    width: '100%',
    marginBottom:10,
  }
})
