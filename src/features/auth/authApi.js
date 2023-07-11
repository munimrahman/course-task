/* eslint-disable eqeqeq */
import apiSlice from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        body: data,
      }),
    }),

    logIn: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: res.data.data.token,
              user: res.data.data,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: res.data.data.token,
              user: res.data.data,
            })
          );
        } catch (error) {
          //
        }
      },
    }),
  }),
});

export const { useLogInMutation, useRegisterMutation } = authApi;
