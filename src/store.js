import {configureStore} from '@reduxjs/toolkit'
import getUserReducer from './slices/getUserSlice'

export default configureStore({
    reducer: {
        getUser: getUserReducer
    }
})