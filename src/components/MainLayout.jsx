/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/task-logo.png";

const MainLayout = () => {
  return (
    <div>
      <div className="navbar bg-base-100 border-b">
        <div className="flex-1 justify-center md:justify-start md:ms-5">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/log-in"}>Log In</Link>
            </li>
            <li>
              <Link to={"/sign-up"}>Sign Up</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
