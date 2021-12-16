import { ADD_PLANT, DELETE_PLANT, EDIT_PLANT } from "../actions/plants"

const InitialState = []

const reducer = (state = InitialState, action) => {
    switch(action.type)
    {
      case ADD_PLANT:
        return [...state,action.plants]
      case EDIT_PLANT:
        const editedState = [...state.filter(plant => plant.PlantName !== action.plants.PlantName), action.plants]
        return editedState
      case DELETE_PLANT:
        return state.filter(plant => plant.PlantName !== action.plants.PlantName)
      default:
        return state
    }
}

export default reducer