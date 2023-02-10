import {configureStore} from '@reduxjs/toolkit'
import getUserReducer from './slices/userSlice'

export default configureStore({
    reducer: {
        getUser: getUserReducer
    }
})