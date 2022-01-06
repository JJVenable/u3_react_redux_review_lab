import { createStore, combineReducers, applyMiddleware } from 'redux';
import LocationReducer from './reducers/LocationReducer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({locationReducer: locationReducer}),
  applyMiddleware(thunk))

  export default store