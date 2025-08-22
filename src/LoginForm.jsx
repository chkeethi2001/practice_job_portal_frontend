import React,{}from 'react';

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-violet-900 mb-6">Login to Your Account</h2>
        
        <form>
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

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-violet-600 hover:underline">Forgot password?</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-violet-900 text-white py-2 rounded-md hover:bg-violet-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <a href="/signup" className="text-violet-600 hover:underline font-medium">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
