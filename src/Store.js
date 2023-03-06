import {combineReducers, createStore} from 'redux'
import BlogsReducer from './Reducer';

const allReducers = combineReducers({
BlogsReducer
})
const Store = createStore(allReducers,{});

export default Store;