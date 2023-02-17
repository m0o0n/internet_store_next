import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import subTypesReducer from './SubTypes/subTypesReducer'
import typesReducer from './Types/typesReducer'
import userSlice from './User/userReducer'

const reducers = combineReducers({
    User: userSlice,
    SubTypes: subTypesReducer,
    Types: typesReducer
})

const MakeStore = () => {
    return configureStore({
        reducer: reducers
    })
}

const store = MakeStore()
export default store