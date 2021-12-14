import { ADD_PLANT, DELETE_PLANT, EDIT_PLANT } from "../actions/plants"

const InitialState = []

const reducer = (state = InitialState, action) => {
    switch(action.type)
    {
      case ADD_PLANT:
        return [...state,action.plants]
      case EDIT_PLANT:
        return [...state.filter(plant => plant.Common !== action.plants.Common),action.plants]
      case DELETE_PLANT:
        return state.filter(plant => plant.Common !== action.plants.Common)
      default:
        return state
    }
}

export default reducer