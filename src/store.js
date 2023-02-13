import {configureStore} from '@reduxjs/toolkit'
import getUserReducer from './slices/userSlice'
import getCompaniesReducer from './slices/companiesSlice'

export default configureStore({
    reducer: {
        getUser: getUserReducer,
        getCompanies: getCompaniesReducer
    }
})