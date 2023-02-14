import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const companiesSlice = createSlice({
    name: 'companies',
    initialState: {
        companiesData: [],
        statusGet: 'idle',
        errorGet: null,
        updatedCompaniesData: [],
        statusPatch: 'idle',
        errorPatch: null,
        statusDelete: 'idle',
        errorDelete: null
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
            .addCase(updateCompanyData.pending, (state) => {
                state.statusPatch = 'pending';
            })
            .addCase(updateCompanyData.fulfilled, (state, action) => {
                state.statusPatch = 'fulfilled';
                state.updatedCompaniesData.shift()
                state.updatedCompaniesData.push(action.payload)
            })
            .addCase(updateCompanyData.rejected, (state, action) => {
                state.statusPatch = 'rejected';
                state.errorPatch = action.error.message
            })
            .addCase(removeCompany.pending, (state) => {
                state.statusDelete = 'pending';
            })
            .addCase(removeCompany.fulfilled, (state, action) => {
                state.statusDelete = 'fulfilled';
                state.updatedCompaniesData.shift()
                state.updatedCompaniesData.push(action.payload)
            })
            .addCase(removeCompany.rejected, (state, action) => {
                state.statusDelete = 'rejected';
                state.errorDelete = action.error.message
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

export const updateCompanyData = createAsyncThunk('update/company', async(data) => {
    const response = await fetch(`http://localhost:5000/company/${data[0]}`, {
        method: 'PATCH',
        credentials: 'include',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data[1])
    })
    const dataFromServer = await response.json()
    return dataFromServer
})

export const removeCompany = createAsyncThunk('remove/company', async(id) => {
    const response = await fetch(`http://localhost:5000/company/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
    })
    const dataFromServer = await response.json()
    return dataFromServer
})

export default companiesSlice.reducer