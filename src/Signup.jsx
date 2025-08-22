import React from 'react';

const Signup= () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-violet-900 mb-6">Signup to Your Account</h2>
        
        <form>
               {/* Name*/}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="Name">
              Name
            </label>
            <input
              type="text"
              id="Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your Name"
            />
          </div>
             {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="Username">
              Username
            </label>
            <input
              type="text"
              id="Username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter a Username"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"
            />
          </div>
          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmpassword">
             Confirm Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Enter your password again"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-violet-900 text-white py-2 rounded-md hover:bg-violet-700 transition duration-300"
          >
            Signup
          </button>
        </form>

        {/* Signup link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already  have an account?{' '}
          <a href="/LoginForm" className="text-violet-600 hover:underline font-medium">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
