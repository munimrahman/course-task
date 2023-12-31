/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useAuth();
  //   const auth = useSelector((state) => state.auth);
  //   const role = auth?.user?.position;
  //   const path = role === "student" ? "/dashboard" : "/dashboard";
  const path = "/dashboard";

  return !isLoggedIn ? children : <Navigate to={path} />;
};

export default PublicRoute;
