import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './slices/itemsSlice';
import { getAllItems } from '../api/items';

const store = configureStore({
  reducer: {
    itemSlice: itemSlice.reducer,
    [getAllItems.reducerPath]: getAllItems.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getAllItems.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
