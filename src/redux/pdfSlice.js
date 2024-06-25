import { createSlice } from "@reduxjs/toolkit";

const pdfSlice = createSlice({
  name: "pdfs",
  initialState: {
    files: [],
    mergedPdf: null,
  },
  reducers: {
    addPdf: (state, action) => {
      state.files.push(action.payload);
    },
    setMergedPdf: (state, action) => {
      state.mergedPdf = action.payload;
    },
    clearPdfs: (state) => {
      state.mergedPdf = null;
    },
  },
});

export const { addPdf, clearPdfs, setMergedPdf } = pdfSlice.actions;
export default pdfSlice.reducer;
