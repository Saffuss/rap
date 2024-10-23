import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchImages = createAsyncThunk('images/fetchImages', async () => {
    const response = await fetch('https://www.reddit.com/r/spaceporn.json');
    const data = await response.json();
    const images = data.data.children.reduce((acc, child) => {
        acc[child.data.id] = {title: child.data.title, id: child.data.id, imageUrl: child.data.url_overridden_by_dest, permalink: child.data.permalink}
        return acc;
    }, {});
    console.log(images);
    return images;
})

const fetchComments = createAsyncThunk(
    'popUp/fetchComments',
    async (_, { getState, dispatch }) => {
        const state = getState();
        let response;

        if (state.popUp.view === 'none' || !state.popUp.view.permalink) {
            return;
        } else {
            response = await fetch(`https://www.reddit.com${state.popUp.view.permalink}.json`);
        }

        const data = await response.json();
        //console.log(data);
        const commentsArray = data[1].data.children;
        console.log(commentsArray);
        return commentsArray;
    }
)

const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        items: {0: {id: 0, imageUrl: 'https://i.pinimg.com/736x/a6/60/02/a6600229a75edcf160643dcf32531cd4.jpg'}},
        imagesStatus: 'idle',
        imagesError: null,
        commentsStatus: 'idle',
        commentsError: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchImages.pending, (state) => {
                state.imagesStatus = 'pending';
            })
            .addCase(fetchImages.fulfilled, (state, action) => {
                state.imagesStatus = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchImages.rejected, (state, action) => {
                state.imagesStatus = 'failed';
                state.imagesError = action.error.message;
            })
    }
})

const popUpSlice = createSlice({
    name: 'popUp',
    initialState: {
        view: {
            permalink: null,
            comments: []
        },
        commentsStatus: 'idle',
        commentsError: null
    },
    reducers: {
        show: (state, action) => {
            state.view = action.payload;
        },
        close: (state) => {
            state.view = {
                permalink: null,
                comments: []
            };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.commentsStatus = 'pending';
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.commentsStatus = 'succeeded';
                state.view.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.commentsStatus = 'rejected';
                state.commentsError = action.error.message;
            })
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
export { fetchComments };
export const { show, close } = popUpSlice.actions;
export const { createFilter, createQuery, clearAll } = filterSlice.actions;
export default store;