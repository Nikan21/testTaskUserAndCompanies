import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserSlice = createSlice({
    name: 'getUser',
    initialState: {
        userData: [],
        updatedUserData: [],
        statusGet: 'idle',
        errorGet: null,
        statusPatch: 'idle',
        errorPatch: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getUserData.pending, (state) => {
                state.statusGet = 'pending'
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.statusGet = 'fulfilled'
                state.userData.shift()
                state.userData.push(action.payload)
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.statusGet = 'rejected'
                state.errorGet = action.error.message
            })
            .addCase(updateUserData.pending, (state) => {
                state.statusPatch = 'pending'
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                state.statusPatch = 'fulfilled'
                state.updatedUserData.shift()
                state.updatedUserData.push(action.payload)
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.statusGet = 'idle'
            })
            
    }
})

export const getUserData = createAsyncThunk('get/user', async () => {
    const response = await fetch('http://localhost:5000/profile', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
    })
    const dataFromServer = await response.json()
    return dataFromServer
})

export const updateUserData = createAsyncThunk('update/user', async (data) => {
    const response = await fetch('http://localhost:5000/profile', {
        method: 'PATCH',
        credentials: 'include',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    const dataFromServer = await response.json()
    return dataFromServer
})

export const logOut = createAsyncThunk('logout', async () => {
    await fetch('http://localhost:5000/logout', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
    })
})

export default getUserSlice.reducer