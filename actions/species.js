export const ADD_SPECIE = 'ADD_SPECIE'

export const addSpecie = (species) => {
  return {
    type:ADD_SPECIE,
    species,
  }
}