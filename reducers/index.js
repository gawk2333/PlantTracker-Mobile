import { combineReducers } from "redux";
import species from './species'
import plants from './plants'

export default combineReducers({
  species,
  plants
})