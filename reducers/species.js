import { ADD_SPECIE, EDIT_SPECIE, DELETE_SPECIE, PURGE_SPECIE} from "../actions/species";
//
//InitialState
//
const InitialState = []

const reducer = (state = InitialState , action) => {
  switch(action.type)
  {
    case ADD_SPECIE:
      return [...state,action.species]
    case EDIT_SPECIE:
      const newState = state.filter(specie => specie.Common !== action.species.Common)
      return [...newState,action.species].sort(compare)
    case DELETE_SPECIE:
      return  state.filter(specie => specie.Common !== action.species.Common)
    case PURGE_SPECIE:
      return []
    default:
      return state;
  }
  function compare( a, b ) {
    if ( a.Common < b.Common ){
      return -1;
    }
    if ( a.Common > b.Common ){
      return 1;
    }
    return 0;
  }
}

export default reducer