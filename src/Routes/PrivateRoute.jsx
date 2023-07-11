/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useAuth();
  //   const auth = useSelector((state) => state.auth);
  //   const isStudent = auth?.user?.role === "student" ? true : false;
  // console.log(isLoggedIn, isStudent);
  return isLoggedIn ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
