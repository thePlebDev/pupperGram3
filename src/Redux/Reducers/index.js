import { combineReducers,createStore } from 'redux'

import showModalReducer from './ShowModalReducer'
import mapReducer from './MapReducer'


const reducers = combineReducers({
    showModal:showModalReducer,
    mapReducer:mapReducer
})
const store = createStore(reducers)

export default store