import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchImages = createAsyncThunk('images/fetchImages', async () => {
    const response = await fetch('http://localhost:5000/data');
    const data = await response.json();
    const images = data.children.map(child => ({title: child.data.title}));
    console.log(images);
    return images;
})

const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        items: {0: {id: 0, imageUrl: 'https://i.pinimg.com/736x/a6/60/02/a6600229a75edcf160643dcf32531cd4.jpg'}},
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchImages.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchImages.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchImages.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

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
        images: imagesSlice.reducer,
        popUp: popUpSlice.reducer,
        filter: filterSlice.reducer
    }
})

// log the state to the store whenever the state changes
store.subscribe(() => {
    console.log('State changed:', store.getState());
})

//export statements
export { fetchImages };
export const { show, close } = popUpSlice.actions;
export const { createFilter, createQuery, clearAll } = filterSlice.actions;
export default store;