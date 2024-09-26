import { configureStore, createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        
    },
    reducers: {

    }
})

const store = configureStore({
    reducer: appSlice.reducer
})

export default store;