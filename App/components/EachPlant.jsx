import React from 'react'
import { StyleSheet, Text, View, Pressable} from 'react-native'

const Separator = () => <View style={styles.separator} />

const EachPlant = ({navigation, plant}) => {
  return (
    <>
    <Pressable style ={styles.container} onPress={()=>navigation.navigate("ManagePlant",{plant:plant})}>
      <View style = {styles.child}><Text style={styles.commontext}>{plant.PlantName}</Text></View>
    </Pressable>
    <Separator />
    </>
  )
}

export default EachPlant

const styles = StyleSheet.create({
  container:{
    width: '80%',
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
    height:96,
    alignItems: 'center',
  },
  commontext:{
    fontStyle: "normal",
    fontSize: 48,
  },
  scientificext:{
    fontStyle: "italic",
    fontSize: 48,
    color: 'grey',
  },
  separator: {
    flex:0.1,
    position: 'relative',
    width: '80%',
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})