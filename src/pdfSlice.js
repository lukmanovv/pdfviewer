// pdfSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  scale: 1.0,
  file: null, 
};

const pdfSlice = createSlice({
  name: 'pdf',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setScale: (state, action) => {
      state.scale = action.payload;
    },
    setFile: (state, action) => {
      state.file = action.payload;
    },
  },
});

export const { setPage, setScale, setFile } = pdfSlice.actions;

export default pdfSlice.reducer;