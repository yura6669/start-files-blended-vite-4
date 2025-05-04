import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
};

const slice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        changeFilter: (state, action) => { 
            state.filter = action.payload;
        },
    },
});

export const selectFilter = (state) => state.filter.filter;

export const { changeFilter } = slice.actions;

export default slice.reducer;