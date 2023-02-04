import {configureStore} from '@reduxjs/toolkit'
import tokenReducer from './slices/tokenSlice'
import getUserReducer from './slices/getUserSlice'

export default configureStore({
    reducer: {
        token: tokenReducer,
        getUser: getUserReducer
    }
})