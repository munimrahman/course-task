/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import proPic from "../../assets/pro-pic.png";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../features/profile/profileApi";
import Loading from "../../components/Loading";

const Account = () => {
  const {
    data: {
      user_data: {
        full_name,
        email,
        birth_date,
        gender,
        phone,
        cover_letter,
      } = {},
    } = {},
    refetch,
  } = useGetProfileQuery();
  const [updateProfile, { isLoading, isError }] = useUpdateProfileMutation();
  const first = full_name?.split(" ")[0];
  const last = full_name?.split(" ").slice(1).join(" ");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [dob, setDob] = useState("");
  const [editGender, setEditGender] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    setFirstName(first);
    setLastName(last);
    setEditEmail(email);
    setEditGender(gender);
    setEditPhone(phone);
    setBio(cover_letter);
    setDob(birth_date);
  }, [first, last, email, gender, phone, cover_letter, birth_date]);

  useEffect(() => {
    if (!isLoading && !isError) {
      refetch();
    }
  }, [isLoading, isError, refetch]);
  // calculate age from birth day
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);

    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      full_name: firstName + " " + lastName,
      birth_date: dob,
      gender: editGender,
      email: editEmail,
      phone: editPhone,
      cover_letter: bio,
    };
    updateProfile(updatedData);
  };

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
          <h2 className="text-center my-3 text-xl font-bold">{full_name}</h2>
          <h3 className="">About</h3>
          <p className="text-[#999999] text-sm text-justify">
            {cover_letter ? cover_letter : "Update Your Cover Letter"}
          </p>
          <div className="flex justify-between my-3">
            <div>
              <p>Age</p>
              <p className="text-[#999999] text-sm">
                {" "}
                {birth_date
                  ? calculateAge(birth_date)
                  : "Update Your Birth Date"}
              </p>
            </div>
            <div>
              <p>Gender</p>
              <p className="text-[#999999] text-sm">
                {" "}
                {gender ? gender : "Not Updated"}
              </p>
            </div>
          </div>
          <p>Date Of Birth</p>
          <p className="text-[#999999] text-sm">
            {birth_date ? birth_date : "Update Your Birth Date"}
          </p>
        </div>
        {/* update section */}
        <div className="md:col-span-8 bg-white rounded-lg p-5">
          <h2 className="text-2xl font-medium">Personal Information</h2>
          <form className="my-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName">First Name</label> <br />
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="input input-bordered w-full max-w-xs mt-1 focus:outline-none"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="dob">Date Of Birth</label>
                <br />
                <input
                  type="date"
                  id="dob"
                  className="input input-bordered w-full max-w-xs mt-1 focus:outline-none"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <br />
                <select
                  id="gender"
                  className="select select-bordered w-full max-w-xs mt-1 focus:outline-none"
                  value={editGender}
                  onChange={(e) => setEditGender(e.target.value)}
                >
                  <option disabled selected>
                    Select Gender
                  </option>
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
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
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
                value={editPhone}
                onChange={(e) => setEditPhone(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="bio">About Me</label>
              <br />
              <textarea
                id="bio"
                className="textarea textarea-bordered focus:outline-none w-full h-28 mt-1"
                placeholder="Write Your Comment . . ."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className={`bg-[#4C6FFF] text-white w-24 px-3 py-2 rounded-md cursor-pointer mt-2 ${
                isLoading && "cursor-wait"
              }`}
            >
              {isLoading ? <Loading /> : "Update"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
