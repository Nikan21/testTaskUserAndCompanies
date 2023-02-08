import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserData = createAsyncThunk('get/user', async () => {
    const response = await fetch('http://localhost:5000/profile', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: new Headers({'Content-Type': 'application/json'}),
    })
    const dataFromServer = await response.json()
    return dataFromServer
})

export const getUserSlice = createSlice({
    name: 'getUser',
    initialState: {
        userData: [],
        status: 'idle',
        error: null,
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