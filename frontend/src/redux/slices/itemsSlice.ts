import { createSlice } from '@reduxjs/toolkit';
import itemsList from '../../api/items';
import ItemsList from '../../utils/interfaces';

const initialState: ItemsList = itemsList;

const itemSlice = createSlice({
  name: 'Items',
  initialState,
  reducers: {},
});

export default itemSlice;
