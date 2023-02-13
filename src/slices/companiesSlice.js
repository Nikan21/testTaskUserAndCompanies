import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const companiesSlice = createSlice({
    name: 'companies',
    initialState: {
        companiesData: [],
        statusGet: 'idle',
        errorGet: null
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getCompaniesData.pending, (state) => {
                state.statusGet = 'pending';
            })
            .addCase(getCompaniesData.fulfilled, (state, action) => {
                state.statusGet = 'fulfilled';
                state.companiesData.shift()
                state.companiesData.push(action.payload)
            })
            .addCase(getCompaniesData.rejected, (state, action) => {
                state.statusGet = 'rejected';
                state.errorGet = action.error.message
            })
    }
})

export const getCompaniesData = createAsyncThunk('get/companies', async () => {
    const response = await fetch('http://localhost:5000/companies', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
    })
    const dataFromServer = await response.json()
    return dataFromServer
})

export default companiesSlice.reducer