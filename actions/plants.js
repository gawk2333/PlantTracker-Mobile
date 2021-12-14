export const ADD_PLANT = 'ADD_PLANT'
export const EDIT_PLANT = 'EDIT_PLANT'
export const DELETE_PLANT = 'DELETE_PLANT'

export const addPlant = (plants) => {
  return {
    type:ADD_PLANT,
    plants
  }
}

export const editPlant = (plants) => {
  return {
    type:EDIT_PLANT,
    plants
  }
}

export const deletePlant = (plants) => {
  return {
    type: DELETE_PLANT,
    plants
  }
}