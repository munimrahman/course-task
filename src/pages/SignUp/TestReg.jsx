/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const stepNames = [
    "Personal Information",
    "Account Information",
    "Confirmation",
  ];

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
    const { firstName, lastName, email, password, confirmPassword } = formData;
    const errors = {};

    if (step === 1) {
      if (!firstName) {
        errors.firstName = "First Name is required";
        isValid = false;
      }

      if (!lastName) {
        errors.lastName = "Last Name is required";
        isValid = false;
      }
    } else if (step === 2) {
      if (!email) {
        errors.email = "Email is required";
        isValid = false;
      }

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
            <h2
              className={`text-lg font-semibold mb-2 ${
                step > 1 ? "text-gray-500" : ""
              }`}
            >
              Step 1: Personal Information
            </h2>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName}</p>
            )}
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2
              className={`text-lg font-semibold mb-2 ${
                step > 2 ? "text-gray-500" : ""
              }`}
            >
              Step 2: Account Information
            </h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2
              className={`text-lg font-semibold mb-2 ${
                step > 3 ? "text-gray-500" : ""
              }`}
            >
              Step 3: Confirmation
            </h2>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Email: {formData.email}</p>
            <button onClick={prevStep}>Previous</button>
            <button type="submit">Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="flex justify-between mb-4">
        {stepNames.map((name, index) => (
          <div
            key={index}
            className={`text-lg ${index + 1 < step ? "text-gray-500" : ""}`}
          >
            {name}
          </div>
        ))}
      </div>
      {renderStep()}
    </form>
  );
};

export default RegistrationForm;
