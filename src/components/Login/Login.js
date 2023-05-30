import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  if (loading) {
    return <Spinner />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleLoginUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    if (user.uid) {
      navigate(from);
    }
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
            Please Login
          </h2>
        </div>
        <form
          onSubmit={handleLoginUser}
          className="mt-8 space-y-6 font-sans"
          action="#"
          method="POST"
        >
          <div className="rounded-md shadow-sm -space-y-px">
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
            <div>
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
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                to="/forgot"
                className="font-medium text-indigo-500 hover:text-indigo-700"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          {error && <span className="text-red-500">{error.message}</span>}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium 
              text-white rounded-md  bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className="toggle-link flex items-center justify-center mt-4">
          <div className="text-sm">
            <span className="text-base">New To Car Parts manufacturer? </span>
            <Link
              to="/signup"
              className="font-medium text-indigo-500 hover:text-indigo-700"
            >
              Create an account
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
              text-black rounded-md hover:shadow-inner focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoAbZUfVUgAB3F7PrFvnrseBXmYJ2goO2-jGeIBH5sqD8nD_ZyCC8MAI1jzQo3ZnnCQrE&usqp=CAU"
            className="w-1/12 mr-2"
            alt=""
          />
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
