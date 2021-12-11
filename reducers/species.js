import { ADD_SPECIE } from "../actions/species";
//
//InitialState
//
const InitialState = []

const reducer = (state = InitialState , action) => {
  switch(action.type)
  {
    case ADD_SPECIE:
      return [...state,action.species]
    default:
      return state;
  }
}

export default reducer