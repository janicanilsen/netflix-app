import { createSlice } from "@reduxjs/toolkit";

const imageConfigInitialState = {
  baseUrl: '',
  size: 'original',
};

const imageConfigSlice = createSlice({
  name: "config",
  initialState: imageConfigInitialState,
  reducers: {
      setConfigData(state, action) {
          state.baseUrl = action.payload;
      }
  }
});

export const imageConfigActions = imageConfigSlice.actions;
export default imageConfigSlice.reducer;
