import React from "react";
import Navbar from "../Commponent/Navbar";

function SingIn() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex w-full h-full">
          <div className="w-1/2 flex justify-center items-center bg-white">
            <img src="src/assets/Rectangle 1003x.png" alt="" className="max-w-full h-auto" />
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h1 className="text-2xl font-bold mb-4">Bluebaycreaters</h1>
              <h2 className="text-xl font-semibold text-blue-600 mb-6">Sign in</h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Please enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Please enter your password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <p className="text-center text-gray-500 text-xs mt-4">
                Hey!! This design is absolutely free for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingIn;
