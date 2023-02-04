import { createSlice } from "@reduxjs/toolkit"

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        value: ''
    },
    reducers: {
        saveToken: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {saveToken} = tokenSlice.actions
export default tokenSlice.reducer