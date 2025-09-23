import React, { useState } from 'react'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempted with:', { email, password })
  }

  const handleFacebookLogin = () => {
    // Handle Facebook login logic
    console.log('Facebook login clicked')
  }

  const handleGoogleLogin = () => {
    // Handle Google login logic
    console.log('Google login clicked')
  }

  return (
    <div className="h-full flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Log in for best shopping</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          {/* Sign Up Link */}
          <div className="text-sm">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/register" className="text-green-500 hover:text-green-600 font-medium">
              Sign up Now
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 px-4 rounded-md font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">- OR -</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          {/* Facebook Login */}
          <button
            onClick={handleFacebookLogin}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200"
          >
            <FaFacebookF className="text-blue-600 mr-3" size={18} />
            Sign In with Facebook
          </button>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200"
          >
            <FaGoogle className="text-red-500 mr-3" size={18} />
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
