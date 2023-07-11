/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import success from "../../assets/success.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    instituteName: "",
    educationLevel: "",
    workTime: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    position: "",
    instituteName: "",
    educationLevel: "",
    workTime: "",
    password: "",
    confirmPassword: "",
  });

  const stepNames = ["Information", "Security", "Confirmation"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data
    console.log(formData);
  };

  const validateStep = () => {
    let isValid = true;
    const {
      name,
      email,
      position,
      instituteName,
      workTime,
      password,
      confirmPassword,
    } = formData;
    const errors = {};

    if (step === 1) {
      if (!name) {
        errors.name = "Full Name is required";
        isValid = false;
      }
      if (!email) {
        errors.email = "Email is required";
        isValid = false;
      }
      if (!position) {
        errors.position = "Position is required";
        isValid = false;
      }
    } else if (step === 2) {
      if (!password) {
        errors.password = "Password is required";
        isValid = false;
      }

      if (!confirmPassword) {
        errors.confirmPassword = "Confirm Password is required";
        isValid = false;
      }
    }

    setErrors(errors);

    return isValid;
  };

  const nextStep = () => {
    const isValid = validateStep();

    if (isValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className={`text-lg font-semibold mb-2  text-center my-5`}>
              Account Information
            </h2>
            <div>
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.firstName}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 focus:outline-none"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="my-2">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 focus:outline-none"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            {/* position */}
            <div className="my-2">
              <label htmlFor="">Position</label>
              <select
                onChange={handleChange}
                name="position"
                className="select select-bordered w-full mt-1 focus:outline-none"
              >
                {" "}
                <option disabled selected>
                  Select Position
                </option>
                <option value={"student"}>Student</option>
                <option value={"teacher"}>Teacher</option>
              </select>
              {errors.position && (
                <p className="text-red-500">{errors.position}</p>
              )}
            </div>
            {/* institute name */}
            {formData.position && (
              <div className="my-2">
                <label htmlFor="">Institute Name</label>
                <select
                  onChange={handleChange}
                  name="instituteName"
                  className="select select-bordered w-full mt-1 focus:outline-none"
                >
                  <option value={"Dhaka National Medical College"}>
                    Dhaka National Medical College
                  </option>
                  <option value={"Ibrahim Medical College"}>
                    Ibrahim Medical College
                  </option>
                  <option value={"Bangladesh Medical College"}>
                    Bangladesh Medical College
                  </option>
                  <option value={"Holy Family Red Crescent Medical College"}>
                    Holy Family Red Crescent Medical College
                  </option>
                </select>
              </div>
            )}
            {/* education level */}
            {formData.position === "student" && (
              <div className="my-2">
                <label htmlFor="">Education Level</label>
                <select
                  onChange={handleChange}
                  name="educationLevel"
                  className="select select-bordered w-full mt-1 focus:outline-none"
                >
                  <option value={"Secondary School Certificate (SSC )"}>
                    Secondary School Certificate (SSC )
                  </option>
                  <option value={"Higher Secondary School Certificate (HSC)"}>
                    Higher Secondary School Certificate (HSC)
                  </option>
                  <option value={"Diploma"}>Diploma</option>
                  <option value={"Bachelor of Science (BSC)"}>
                    Bachelor of Science (BSC)
                  </option>
                  <option value={"Master of Arts(MA)"}>
                    Master of Arts(MA)
                  </option>
                  <option value={"Bachelor of Arts(BA)    "}>
                    Bachelor of Arts(BA)
                  </option>
                </select>
              </div>
            )}
            {/* work time */}
            {formData.position === "teacher" && (
              <div className="my-2">
                <label htmlFor="">Work Time</label>
                <select
                  onChange={handleChange}
                  name="workTime"
                  className="select select-bordered w-full mt-1 focus:outline-none"
                >
                  <option value={"Full Time"}>Full Time</option>
                  <option value={"Part Time"}>Part Time</option>
                </select>
              </div>
            )}
            <div
              className="bg-blue-500 text-white text-center py-2 rounded-lg cursor-pointer mt-3"
              onClick={nextStep}
            >
              Next
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Already Have an Account?{" "}
              <Link
                to="/log-in"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Log In Here
              </Link>
            </p>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className={`text-lg font-semibold mb-2 text-center my-5`}>
              Account Security
            </h2>
            <div className="my-2">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="my-2">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input input-bordered w-full mt-1 focus:outline-none"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div
                className="bg-blue-500 text-white text-center py-2 rounded-lg cursor-pointer mt-3"
                onClick={prevStep}
              >
                Previous
              </div>
              <div
                className="bg-blue-500 text-white text-center py-2 rounded-lg cursor-pointer mt-3"
                onClick={nextStep}
              >
                Sign Up
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center my-10">
            <figure className="">
              <img src={success} alt="" className="w-28" />
            </figure>
            <p className="text-[#9F9F9F] my-5">
              Account Has Been Created. Enjoy Job Task.{" "}
            </p>
            <Link to="/" className="btn btn-primary btn-outline">
              Go Home
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* form */}
      <div className="my-5">
        <div className="flex justify-center gap-10 mt-5">
          {stepNames.map((name, index) => (
            <div key={index}>
              <StepDiv i={index + 1} isActive={index + 1 < step} title={name} />
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          {renderStep()}
        </form>
      </div>
    </div>
  );
};

const activeStyle = "bg-blue-500 text-white rounded-full px-2 py-1";
const inactiveStyle =
  "border border-blue-500 text-blue-500 rounded-full px-2 py-1";
const StepDiv = ({ i, isActive, title }) => (
  <div className="flex items-center justify-center">
    <div>
      <span className={isActive ? activeStyle : inactiveStyle}>{i}</span>
    </div>
    <div className="bg-blue-500 h-[2px] w-10 mx-1"></div>
    <p className={isActive && "text-blue-500"}>{title}</p>
  </div>
);

export default SignUp;
