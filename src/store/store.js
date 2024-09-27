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

const filterSlice = createSlice({
    name: 'filter',
    initialState: { filter: '', query: '' },
    reducers: {
        createFilter: (state, action) => {
            if (state.filter === action.payload) {
                state.filter = ''
            } else {
                state.filter = action.payload;
            }
            state.query = '';
        },
        createQuery: (state, action) => {
            state.filter = '';
            state.query = action.payload;
        },
        clearAll: (state) => {
            state.filter = '';
            state.query = '';
        }
    }
})


// create store
const store = configureStore({
    reducer: {
        popUp: popUpSlice.reducer,
        filter: filterSlice.reducer
    }
})

// log the state to the store whenever the state changes
store.subscribe(() => {
    console.log('State changed:', store.getState());
})

//export statements
export const { show, close } = popUpSlice.actions;
export const { createFilter, createQuery, clearAll } = filterSlice.actions;
export default store;