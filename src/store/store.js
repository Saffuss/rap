import { configureStore, createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
    name: 'popUp',
    initialState: { view: 'none' },
    reducers: {
        show: (state, action) => {
            state.view = action.payload;
        },
        close: (state) => {
            state.view = 'none';
        }
    }
})

export const { show, close } = popUpSlice.actions;

const store = configureStore({
    reducer: {
        popUp: popUpSlice.reducer
    }
})

const unsubscribe = store.subscribe(() => {
    console.log('State changed:', store.getState());
})

export default store;