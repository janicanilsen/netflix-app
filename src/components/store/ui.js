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