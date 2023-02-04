import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserData = createAsyncThunk('get/user', async (token) => {
    const encodeToken = await encodeURIComponent(token)
    const response = await fetch('http://localhost:5000/profile', {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({ 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${encodeToken}`}),
    })
    const dataFromServer = await response.json()
    return dataFromServer
})

export const getUserSlice = createSlice({
    name: 'getUser',
    initialState: {
        userData: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getUserData.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.userData.push(action.payload)
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
})

export default getUserSlice.reducer