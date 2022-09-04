import { createAsyncThunk } from '@reduxjs/toolkit';
import { URI_API } from './../const/const';
import { createSlice } from '@reduxjs/toolkit';

export const fetchImage = createAsyncThunk(
    'image/fetchText',
    async (holiday) => {
        const res = await fetch(`${URI_API}image/${holiday}`);
        const data = await res.json();
        return data;
    }
);

export const fetchImageId = createAsyncThunk(
    'image/fetchTextId',
    async (id) => {
        const res = await fetch(`${URI_API}image/${id}`);
        const data = await res.json();
        return data;
    }
);

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        urlImg: '',
        idImg: '',
        loading: '',
    },
    reducers: {},
    extraReducers: {
        [fetchImage.pending]: state => {
            state.loading = 'loading';
        },
        [fetchImage.fulfilled]: (state, action) => {
            state.loading = 'success';
            state.urlImg = action.payload.urlImg;
            state.idImg = action.payload.idImg;
        },
        [fetchImage.rejected]: state => {
            state.loading = 'failed';
            state.urlImg = '';
            state.idImg = '';
        },
        [fetchImageId.pending]: state => {
            state.loading = 'loading';
        },
        [fetchImageId.fulfilled]: (state, action) => {
            state.loading = 'success';
            state.urlImg = action.payload.urlImg;
            state.idImg = action.payload.idImg;
        },
        [fetchImageId.rejected]: state => {
            state.loading = 'failed';
            state.urlImg = '';
            state.idImg = '';
        },
    }
});

export default imageSlice.reducer;