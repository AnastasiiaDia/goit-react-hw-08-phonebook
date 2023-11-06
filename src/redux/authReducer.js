import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

export const instance = axios.create({});

export const setAuthHeader = (token = '') => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteTokenFromHeader = () => {
  instance.defaults.headers.common.Authorization = `Bearer`;
};

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await instance({
        url: `https://connections-api.herokuapp.com${
          baseUrl !== '/' ? baseUrl : ''
        }${url}`,
        method,
        data,
        params,
        headers,
      });

      if (result.data.token) {
        localStorage.setItem('token', result.data.token);
        setAuthHeader(result.data.token);
      } else {
        setAuthHeader(localStorage.getItem('token'));
      }

      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const authApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: '/users',
  }),
  reducerPath: `auth`,
  tagTypes: ['Auth'],
  endpoints(build) {
    return {
      login: build.mutation({
        query: data => ({ url: '/login', method: 'POST', data }),
        invalidatesTags: ['Auth'],
      }),
      register: build.mutation({
        query: data => ({ url: '/signup', method: 'POST', data }),
        invalidatesTags: ['Auth'],
      }),
      refresh: build.query({
        query: () => ({ url: '/current', method: 'GET' }),
        providesTags: ['Auth'],
      }),
      logout: build.mutation({
        query: () => ({ url: '/logout', method: 'POST' }),
        invalidatesTags: ['Auth'],
        setAuthHeader,
      }),
    };
  },
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRefreshQuery,
  useLogoutMutation,
} = authApi;
