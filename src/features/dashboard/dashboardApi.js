/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import apiSlice from "../api/apiSlice";

export const coursesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all course list
    getStats: builder.mutation({
      query: () => ({
        url: "/dashboard/statics",
        method: "POST",
      }),
    }),

    // get single course details
    getChart: builder.mutation({
      query: (data) => ({
        url: "/dashboard/chart",
        method: "POST",
        body: {
          time_period: "monthly", // monthly, yearly, weekly
        },
      }),
    }),
  }),
});

export const { useGetStatsMutation, useGetChartMutation } = coursesApi;
