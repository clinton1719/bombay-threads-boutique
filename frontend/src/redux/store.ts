import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './slices/itemsSlice';

const store = configureStore({
  reducer: {
    itemSlice: itemSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
