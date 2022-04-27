import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = { status: '' }

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiInitialState,
    reducers: {
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;

//UI constants
export const GRID_VIEW = 'GRID_VIEW';
export const SLIDER_VIEW = 'SLIDER_VIEW';