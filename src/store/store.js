import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './slices/searchSlice';
import documentsReducer from './slices/documentsSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    documents: documentsReducer,
  },
});

export default store;
