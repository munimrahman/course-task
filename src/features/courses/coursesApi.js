/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import apiSlice from "../api/apiSlice";

export const coursesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all course list
    getCourses: builder.mutation({
      query: (data) => ({
        url: "/course/list",
        method: "POST",
        body: {
          perpage: 10,
          page: 1,
        },
      }),
    }),

    // get single course details
    getCourse: builder.mutation({
      query: (data) => ({
        url: "/course/details",
        method: "POST",
        body: {
          course_id: "U2FsdGVkX19n9h8bO/trogNYt4bSFl2Mlk6bPh0ejik=",
        },
      }),
    }),

    //TODO: create course form data
    createCourse: builder.mutation({
      query: (data) => ({
        url: "/videos",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;

        if (res?.data?.id) {
          dispatch(
            apiSlice.util.updateQueryData("getCourses", undefined, (draft) => {
              draft.push(res.data);
            })
          );
        }
      },
    }),

    // add comment to course page
    addComment: builder.mutation({
      query: (data) => ({
        url: "/course/comment/add",
        method: "POST",
        body: {
          course_id: "U2FsdGVkX19n9h8bO/trogNYt4bSFl2Mlk6bPh0ejik=",
          comment:
            "The Complete Backend Development Course is a fantastic resource for aspiring developers. The content is comprehensive, covering essential concepts and technologies in a clear and concise manner. Highly recommended for anyone looking to delve into backend development.",
        },
      }),

      //TODO: update comment cache
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        let patchResult = dispatch(
          apiSlice.util.updateQueryData("getCourses", undefined, (draft) => {
            const updateIndex = draft.findIndex((v) => v.id == arg.course_id);
            draft[updateIndex] = arg;
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetCoursesMutation,
  useGetCourseMutation,
  useCreateCourseMutation,
  useAddCommentMutation,
} = coursesApi;
