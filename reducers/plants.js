import { ADD_PLANT, DELETE_PLANT, EDIT_PLANT, PURGE_PLANT } from "../actions/plants"

const InitialState = []

const reducer = (state = InitialState, action) => {
    switch(action.type)
    {
      case ADD_PLANT:
        return [...state,action.plants]
      case EDIT_PLANT:
        const editedState = [...state.filter(plant => plant.PlantName !== action.plants.PlantName), action.plants]
        return editedState.sort( compare )
      case DELETE_PLANT:
        return state.filter(plant => plant.PlantName !== action.plants.PlantName)
      case PURGE_PLANT:
        return []
      default:
        return state
    }
}

function compare( a, b ) {
  if ( a.PlantName < b.PlantName ){
    return -1;
  }
  if ( a.PlantName > b.PlantName ){
    return 1;
  }
  return 0;
}

export default reducer