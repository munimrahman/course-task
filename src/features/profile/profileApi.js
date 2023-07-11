/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import apiSlice from "../api/apiSlice";

export const coursesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all course list
    getProfile: builder.query({
      query: () => "/user/details",
    }),

    // get single course details
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/user/details/update",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = coursesApi;
