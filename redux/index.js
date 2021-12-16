import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from '@react-native-async-storage/async-storage' // defaults to localStorage for web
import ThunkMiddleware  from "redux-thunk";
import reducers from "../reducers";


const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, reducers)

//
//Store
//

const store = createStore(persistedReducer, compose( applyMiddleware( ThunkMiddleware )));
const persistor = persistStore(store)

export { store, persistor }