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
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  const authCheck = useAuthCheck();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: (
            <PublicRoute>
              <LogIn />
            </PublicRoute>
          ),
        },
        {
          path: "/log-in",
          element: (
            <PublicRoute>
              <LogIn />
            </PublicRoute>
          ),
        },
        {
          path: "/sign-up",
          element: (
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          ),
        },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          ),
        },
        {
          path: "/courses",
          element: (
            <PrivateRoute>
              <Courses />
            </PrivateRoute>
          ),
        },
        {
          path: "/add-course",
          element: (
            <PrivateRoute>
              <AddCourse />
            </PrivateRoute>
          ),
        },
        {
          path: "/courses/:id",
          element: (
            <PrivateRoute>
              <CourseDetails />
            </PrivateRoute>
          ),
        },
        {
          path: "/my-account",
          element: (
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return authCheck && <RouterProvider router={router} />;
}

export default App;
