import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhoneNumber] = useState("");
  //   const navigate = useNavigate();

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneNumberBlur = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, email, address, phone };
  };

  return (
    <div>
      <h2 className="mt-12 text-5xl text-center font-extrabold uppercase text-cyan-500">
        Shipping Information
      </h2>
      <div className="rounded-2xl shadow-md border w-1/2 mx-auto mt-12 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900 uppercase">
            Please Fill Up The Form
          </h2>
          <form onSubmit={handleCreateUser} className="mt-8 font-sans w-full">
            <div className="rounded-md shadow-sm">
              <div className="mb-5">
                <label className="ml-1">Your Name</label>
                <input
                  onBlur={handleNameBlur}
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-5">
                <label className="ml-1">Your Email</label>
                <input
                  onBlur={handleEmailBlur}
                  value={user?.email}
                  readOnly
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none font-medium italic rounded-none relative block w-full px-3 py-2 border bg-indigo-50 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-5">
                <label className="ml-1">Address</label>
                <input
                  onBlur={handleAddressBlur}
                  id="address"
                  name="address"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="ml-1">Phone Number</label>
                <input
                  onBlur={handlePhoneNumberBlur}
                  id="phone-number"
                  name="phone"
                  type="number"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium 
              text-white rounded-md  bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
