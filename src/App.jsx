import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import Courses from "./pages/Courses/Courses";
import Account from "./pages/Account/Account";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import AddCourse from "./pages/AddCourse/AddCourse";
import MainLayout from "./components/MainLayout";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
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

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
