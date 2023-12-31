/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { userLoggedOut } from "../features/auth/authSlice";

const DashboardLayout = () => {
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();
  const { user: { position } = {} } = useSelector((state) => state.auth);

  const activeClass = "ps-6 p-3 border-l-4 border-l-indigo-700 bg-[#DCDDDF]";
  const inActiveClass = "ps-6 p-3";
  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
  };
  const menuItems = (
    <>
      <li>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/courses"}
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          Courses
        </NavLink>
      </li>
      {position === "teacher" && (
        <li>
          <NavLink
            to={"/add-course"}
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
          >
            Add New Course
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to={"/my-account"}
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          Account
        </NavLink>
      </li>
      <li
        onClick={logout}
        className={`hover:bg-[#DCDDDF] cursor-pointer ${inActiveClass}`}
      >
        Log Out
      </li>
    </>
  );

  return (
    <>
      <div className="hidden md:flex z-40">
        {/* sidebar */}
        <div
          className={`min-h-screen bg-base-200 fixed ${!active && "hidden"}`}
        >
          <div>
            <h1 className="text-3xl font-bold py-4 bg-indigo-700 text-white text-center">
              Job Task
            </h1>
          </div>
          <ul className="menu p-0 [&_li>*]:rounded-none w-64 text-base">
            {menuItems}
          </ul>
        </div>
        {/* main content */}
        <div className={`w-full ${active && "ml-64"}`}>
          {/* navbar */}
          <nav className="sticky top-0 border-b bg-base-100 w-full flex z-20">
            <button className="px-2" onClick={() => setActive(!active)}>
              <i className="fas fa-bars text-2xl text-gray-600"></i>
            </button>

            <div className="navbar flex justify-between bg-base-100">
              {/* <div className="flex justify-between gap-2"> */}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto focus:outline-none"
                />
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to={"/my-account"} className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <span onClick={logout}>Logout</span>
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </nav>
          {/* navbar end */}
          {/* Page Content */}
          <div className="z-50">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className=" flex justify-between px-2 items-center">
          <label htmlFor="my-drawer-2" className="drawer-button">
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
          <div className="navbar flex justify-between bg-base-100">
            {/* <div className="flex justify-between gap-2"> */}
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-auto md:w-auto focus:outline-none"
              />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-10"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="md:hidden drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            {/* Page Content Mobile*/}
            <div className="">
              <Outlet />
            </div>
          </div>
          <div className="drawer-side min-h-screen">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-0 w-64 h-full bg-base-200 text-base-content [&_li>*]:rounded-none">
              {/* Sidebar content here */}
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
