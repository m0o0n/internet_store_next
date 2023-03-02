import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import brandCountryReducer from './BrandCountry/brandCountryReducer'
import productsReducer from './Products/productsReducer'
import subTypesReducer from './SubTypes/subTypesReducer'
import typesReducer from './Types/typesReducer'
import userSlice from './User/userReducer'

const reducers = combineReducers({
    User: userSlice,
    Products: productsReducer,
    SubTypes: subTypesReducer,
    Types: typesReducer,
    BrandsCountry: brandCountryReducer
})

const MakeStore = () => {
    return configureStore({
        reducer: reducers
    })
}

const store = MakeStore()
export default store