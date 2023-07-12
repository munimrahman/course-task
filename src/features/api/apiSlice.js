/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://18.136.192.25:5000/api/v1/",
  referrerPolicy: "unsafe-url",
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token = getState()?.auth?.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.status === false) {
      api.dispatch(userLoggedOut());
      localStorage.clear();
    }
    return result;
  },

  tagTypes: [],
  endpoints: (builder) => ({}),
});

export default apiSlice;
