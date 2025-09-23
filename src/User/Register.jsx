import React, { useState } from 'react'
import { FaFacebookF, FaGoogle, FaImage, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [profileImagePreview, setProfileImagePreview] = useState(null)
  const [coverImagePreview, setCoverImagePreview] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleFileChange = (e, imageType) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (imageType === 'profileImage') {
          setProfileImagePreview(event.target.result)
        } else if (imageType === 'coverImage') {
          setCoverImagePreview(event.target.result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRegister = (e) => {
    e.preventDefault()
    // Handle registration logic here
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    console.log('Registration attempted with:', formData)
  }

  const handleFacebookSignup = () => {
    // Handle Facebook signup logic
    console.log('Facebook signup clicked')
  }

  const handleGoogleSignup = () => {
    // Handle Google signup logic
    console.log('Google signup clicked')
  }

  return (
    <div className="h-full flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Sign up for best shopping experience</p>
        </div>

        {/* Profile Image Upload Section */}
        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'profileImage')}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {profileImagePreview ? (
                <img
                  src={profileImagePreview}
                  alt="Profile preview"
                  className="w-24 h-24 object-cover rounded-full border-4 border-green-500 cursor-pointer hover:border-green-600 transition-colors"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-4 border-gray-300 hover:border-green-500 cursor-pointer transition-colors">
                  <FaUser className="text-gray-400 text-2xl" />
                </div>
              )}
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mb-4">Upload Profile Picture (Optional)</p>

          {/* Cover Image Upload */}
          <div className="flex justify-center">
            <div className="relative cursor-pointer group">
              <input
                type="file"
                id="coverImage"
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'coverImage')}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {coverImagePreview ? (
                <img
                  src={coverImagePreview}
                  alt="Cover preview"
                  className="w-64 h-24 object-cover rounded-md border-2 border-gray-300 hover:border-green-500 transition-colors"
                />
              ) : (
                <div className="w-64 h-24 rounded-md bg-gray-200 flex items-center justify-center border-2 border-gray-300 hover:border-green-500 hover:bg-gray-300 transition-colors">
                  <FaImage className="text-gray-400 text-xl mr-2" />
                  <span className="text-gray-500 text-sm">Upload Cover Image</span>
                </div>
              )}
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">Cover Image (Optional)</p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Full Name Field */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter Your Full Name"
              className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
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
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Your Password"
              className="w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          {/* Login Link */}
          <div className="text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/login" className="text-green-500 hover:text-green-600 font-medium">
              Login Now
            </Link>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 px-4 rounded-md font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">- OR -</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Social Signup Buttons */}
        <div className="space-y-3">
          {/* Facebook Signup */}
          <button
            onClick={handleFacebookSignup}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200"
          >
            <FaFacebookF className="text-blue-600 mr-3" size={18} />
            Sign Up with Facebook
          </button>

          {/* Google Signup */}
          <button
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200"
          >
            <FaGoogle className="text-red-500 mr-3" size={18} />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
