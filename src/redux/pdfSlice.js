import { createSlice } from "@reduxjs/toolkit";

const pdfSlice = createSlice({
  name: "pdfs",
  initialState: {
    files: [],
    mergedPdf: null,
    mergedListPdf: [],
  },
  reducers: {
    addPdf: (state, action) => {
      state.files.push(action.payload);
    },
    setMergedPdf: (state, action) => {
      state.mergedPdf = action.payload;
    },
    setMergedListPdf: (state, action) => {
      state.mergedListPdf = action.payload;
    },
    clearPdfs: (state) => {
      state.mergedPdf = null;
      state.files = [];
    },
  },
});

export const { addPdf, clearPdfs, setMergedPdf, setMergedListPdf } =
  pdfSlice.actions;
export default pdfSlice.reducer;
