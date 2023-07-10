/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import proPic from "../../assets/pro-pic.png";

const Account = () => {
  return (
    <div className="bg-[#F7F8FE] min-h-screen mb-5">
      <div className="bg-white px-5 pt-3 md:pt5">
        <h2 className="text-2xl font-bold">Discover</h2>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li className="text-primary">Account</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 px-5 pt-3 md:pt5 gap-3">
        {/* info section */}
        <div className="md:col-span-4 bg-white rounded-lg px-5 py-8 h-min">
          <figure className="flex justify-center">
            <img src={proPic} alt="" className="w-36" />
          </figure>
          <h2 className="text-center my-3 text-xl font-bold">
            Md Arif Patwary
          </h2>
          <h3 className="">About</h3>
          <p className="text-[#999999] text-sm text-justify">
            Hello I am Md Arif Patwary a student in Job Task Platfrom. I love to
            study with all my class friends and professors.
          </p>
          <div className="flex justify-between my-3">
            <div>
              <p>Age</p>
              <p className="text-[#999999] text-sm">17</p>
            </div>
            <div>
              <p>Gender</p>
              <p className="text-[#999999] text-sm">Male</p>
            </div>
          </div>
          <p>Date Of Birth</p>
          <p className="text-[#999999] text-sm">02/05/2006</p>
        </div>
        {/* update section */}
        <div className="md:col-span-8 bg-white rounded-lg p-5">
          <h2 className="text-2xl font-medium">Personal Information</h2>
          <form className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label> <br />
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="input input-bordered w-full max-w-xs mt-1 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="input input-bordered w-full max-w-xs mt-1 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="dob">Date Of Birth</label>
                <br />
                <input
                  type="date"
                  id="dob"
                  className="input input-bordered w-full max-w-xs mt-1 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <br />
                <select
                  id="gender"
                  className="select select-bordered w-full max-w-xs mt-1 focus:outline-none"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="text"
                id="email"
                placeholder="Email Address"
                className="input input-bordered w-full mt-1 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="phone">Phone Number</label>
              <br />
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full mt-1 focus:outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="bio">About Me</label>
              <br />
              <textarea
                id="bio"
                className="textarea textarea-bordered focus:outline-none w-full h-28 mt-1"
                placeholder="Write Your Comment . . ."
              />
            </div>
            <input
              type="button"
              className="bg-[#4C6FFF] text-white px-3 py-2 rounded-md cursor-pointer mt-2"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
