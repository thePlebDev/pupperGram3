import { combineReducers,createStore } from 'redux'

import showModalReducer from './ShowModalReducer'


const reducers = combineReducers({
    showModal:showModalReducer
})
const store = createStore(reducers)

export default store