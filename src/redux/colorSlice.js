import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lightMode: true,
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
   
  },
});

export const selectLightMode = (state) => state.color.lightMode;

export const { setLightMode } = colorSlice.actions;

export default colorSlice.reducer;
