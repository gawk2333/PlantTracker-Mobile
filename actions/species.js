export const ADD_SPECIE = 'ADD_SPECIE'
export const EDIT_SPECIE = 'EDIT_SPECIE'
export const DELETE_SPECIE = 'DELETE_SPECIE'

export const addSpecie = (species) => {
  return {
    type:ADD_SPECIE,
    species,
  }
}

export const editSpecie = (species) => {
  return {
    type: EDIT_SPECIE,
    species,
  }
}

export const deleteSpecie = (species) => {
  return {
    type: DELETE_SPECIE,
    species,
  }
}