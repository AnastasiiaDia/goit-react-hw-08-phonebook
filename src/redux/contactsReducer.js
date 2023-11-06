import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './authReducer';

export const contactsApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: '/',
  }),
  reducerPath: `contacts`,
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => ({ url: '/contacts', method: 'GET' }),
      providesTags: ['Contacts'],
    }),
    addContact: build.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        data: body,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
