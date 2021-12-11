import { createStore, applyMiddleware, compose } from "redux";
import ThunkMiddleware  from "redux-thunk";
import reducers from "../reducers";

//
//Store
//
const store = createStore(reducers, compose(applyMiddleware(ThunkMiddleware)));

export  { store }