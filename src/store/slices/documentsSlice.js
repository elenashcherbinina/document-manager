import { createSlice } from '@reduxjs/toolkit';

import api from '../../api/documents.json';

const { documents } = api.result;

const initialState = {
  documents,
  filtred: [],
  pageCount: 1,
  currentPage: 1,
};

const documentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    filter: (state, { payload }) => {
      state.filtred = payload;
    },
    setPageCount: (state, { payload }) => {
      state.pageCount = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export const { actions } = documentsSlice;
export default documentsSlice.reducer;
