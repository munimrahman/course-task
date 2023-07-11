/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import logo from "../../assets/task-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useLogInMutation } from "../../features/auth/authApi";
import Loading from "../../components/Loading";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logIn, { data, isSuccess, isLoading, isError, error }] =
    useLogInMutation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    logIn({ email, password });
  };

  useEffect(() => {
    if (data?.data) {
      navigate("/dashboard");
    }
  }, [data, navigate]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome To Task Job
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="" onSubmit={handleLogIn}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mt-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {error?.data && (
              <p className="text-red-500 mt-2">Incorrect Email or Password</p>
            )}
            <div className="mt-3">
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  isLoading && "cursor-wait"
                }`}
                disabled={isLoading}
              >
                {isLoading ? <Loading /> : "Log In"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to={"/sign-up"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign Up Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogIn;
