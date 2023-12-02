import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ItemsList } from '../utils/interfaces';

const getAllItems = createApi({
  reducerPath: 'getAllItemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.104:8080/api/v1' }),
  endpoints: (builder) => ({
    getAllItems: builder.query<ItemsList, string>({
      query: (name: string) => `shopping/${name}`,
    }),
  }),
});

const { useGetAllItemsQuery } = getAllItems;

export { useGetAllItemsQuery, getAllItems };
