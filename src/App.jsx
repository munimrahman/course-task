import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Courses from "./pages/Courses/Courses";
import Account from "./pages/Account/Account";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import AddCourse from "./pages/AddCourse/AddCourse";
import MainLayout from "./components/MainLayout";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import useAuthCheck from "./hooks/useAuthCheck";

function App() {
  const authCheck = useAuthCheck();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <LogIn />,
        },
        {
          path: "/log-in",
          element: <LogIn />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/add-course",
          element: <AddCourse />,
        },
        {
          path: "/courses/id",
          element: <CourseDetails />,
        },
        {
          path: "/my-account",
          element: <Account />,
        },
      ],
    },
  ]);

  return authCheck && <RouterProvider router={router} />;
}

export default App;
