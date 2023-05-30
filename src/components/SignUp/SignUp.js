import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mainError, setMainError] = useState("");
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate(from);
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMainError("Your Passwords Didn't Match");
      return;
    }
    if (!/(?=.*?[a-z])(?=.*?[0-9]).{6,}/.password) {
      setMainError(
        `Password Must Contain: 
        1.At least one lower case English letter 
        2.At least one digit 3.Minimum Six in length`
      );
    }
    setMainError("");
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="rounded-2xl shadow-md border w-1/2 mx-auto mt-12 font-mono flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Please Sign Up
          </h2>
        </div>
        <form onSubmit={handleCreateUser} className="mt-8 font-sans">
          <div className="rounded-md shadow-sm">
            <div className="mb-5">
              <label className="ml-1">Email address</label>
              <input
                onBlur={handleEmailBlur}
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mb-5">
              <label className="ml-1">Password</label>
              <input
                onBlur={handlePasswordBlur}
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="ml-1">Confirm Password</label>
              <input
                onBlur={handleConfirmPasswordBlur}
                id="confirm-password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>
          <div className="text-base text-red-600 text-center mt-0 mb-2 font-medium">
            <span>{mainError}</span>
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium 
              text-white rounded-md  bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="toggle-link flex items-center justify-center mt-4">
          <div className="text-sm">
            <span className="text-base">Already have an account? </span>
            <Link
              to="/login"
              className="font-medium text-indigo-500 hover:text-indigo-700"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="toggle-link flex items-center justify-center mt-4">
          <div className="border w-full"></div>
          <div className="m-3 text-base">Or</div>
          <div className="border w-full"></div>
        </div>
        <button
          onClick={() => signInWithGoogle()}
          className="group relative font-sans w-full flex justify-center items-center py-2 px-4 shadow-md border text-sm font-normal
              text-black rounded-md hover:shadow-inner focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-100"
        >
          <img
            className="w-1/12 mr-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoAbZUfVUgAB3F7PrFvnrseBXmYJ2goO2-jGeIBH5sqD8nD_ZyCC8MAI1jzQo3ZnnCQrE&usqp=CAU"
            alt=""
          />
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
