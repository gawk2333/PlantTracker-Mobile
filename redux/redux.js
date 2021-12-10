import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware  from "redux-thunk";

//
//InitialState
//
const InitialState = []

//
//Reducer
//
const reducer = (state = InitialState , action) => {
  return state;
}

//
//Store
//
const store = createStore(reducer, applyMiddleware(ThunkMiddleware));

export  { store }